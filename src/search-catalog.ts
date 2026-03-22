import { readJsonAsset, readTextAsset, resolveAssetPath } from './asset-loader'
import { GENERATED_CATALOG_ASSET_PATH, type SearchCatalog } from './search-index'

const SKILL_ROOT = 'shopify-graphql'
const MAX_PRIMARY_DOCS = 8
const MAX_RELATED_DOCS = 24
const MAX_RELATED_DEPTH = 2

function getDocBasename(docPath: string): string {
  const lastSegment = docPath.split('/').pop() ?? docPath
  return lastSegment.replace(/\.md$/, '')
}

function isShopCentricRoot(rootDocPath: string): boolean {
  const basename = getDocBasename(rootDocPath).toLowerCase()
  return basename === 'shop' || basename.startsWith('shop')
}

function shouldExpandRelatedPath(path: string, rootDocPath: string): boolean {
  if (path !== 'shopify-graphql/types/objects/Shop.md') {
    return true
  }

  return isShopCentricRoot(rootDocPath)
}

export interface HydratedDocument {
  path: string
  content: string
  relatedDocuments: Array<{ path: string; content: string }>
}

let catalogPromise: Promise<SearchCatalog> | undefined

export async function loadCatalog(env: Env): Promise<SearchCatalog> {
  if (!catalogPromise) {
    catalogPromise = readJsonAsset<SearchCatalog>(env, GENERATED_CATALOG_ASSET_PATH)
  }

  return catalogPromise
}

function getRelatedTypePaths(content: string, docPath: string, rootDocPath = docPath): string[] {
  const relatedSectionMatch = content.match(/## Related Types\s+([\s\S]*?)(?:\n## |\n```|$)/)
  if (!relatedSectionMatch) {
    return []
  }

  const section = relatedSectionMatch[1]
  const matches = [...section.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)]
  const paths = matches
    .map((match) => resolveAssetPath(docPath, match[1]))
    .filter((path) => path.startsWith(`${SKILL_ROOT}/types/`))
    .filter((path) => shouldExpandRelatedPath(path, rootDocPath))

  return [...new Set(paths)].slice(0, MAX_RELATED_DOCS)
}

function rankRelatedPath(path: string): number {
  if (path.includes('/types/inputs/')) return 0
  if (path.includes('/types/enums/')) return 1
  if (path.includes('/types/interfaces/')) return 2
  if (path.includes('/types/unions/')) return 3
  if (path.includes('/types/objects/') && path.endsWith('Payload.md')) return 4
  if (path.includes('/types/objects/')) return 5
  return 6
}

async function collectRelatedDocuments(
  env: Env,
  initialPaths: string[],
  rootDocPath: string
): Promise<Array<{ path: string; content: string }>> {
  const queue = initialPaths
    .slice()
    .sort(
      (left, right) => rankRelatedPath(left) - rankRelatedPath(right) || left.localeCompare(right)
    )
    .map((path) => ({ path, depth: 1 }))
  const seen = new Set<string>()
  const relatedDocuments: Array<{ path: string; content: string }> = []

  while (queue.length > 0 && relatedDocuments.length < MAX_RELATED_DOCS) {
    const current = queue.shift()
    if (!current || seen.has(current.path)) {
      continue
    }

    seen.add(current.path)
    let content: string
    try {
      content = await readTextAsset(env, current.path)
    } catch {
      continue
    }
    relatedDocuments.push({ path: current.path, content })

    if (current.depth >= MAX_RELATED_DEPTH || relatedDocuments.length >= MAX_RELATED_DOCS) {
      continue
    }

    const nestedPaths = getRelatedTypePaths(content, current.path, rootDocPath)
      .filter((path) => !seen.has(path))
      .sort(
        (left, right) => rankRelatedPath(left) - rankRelatedPath(right) || left.localeCompare(right)
      )

    for (const path of nestedPaths) {
      queue.push({ path, depth: current.depth + 1 })
    }
  }

  return relatedDocuments
}

function collectDocPaths(value: unknown, docPaths = new Set<string>()): Set<string> {
  if (!value) {
    return docPaths
  }

  if (typeof value === 'string') {
    if (value.endsWith('.md') && value.startsWith(`${SKILL_ROOT}/`)) {
      docPaths.add(value)
    }
    return docPaths
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      collectDocPaths(item, docPaths)
    }
    return docPaths
  }

  if (typeof value === 'object') {
    const record = value as Record<string, unknown>
    const docPath = record.docPath ?? record.path ?? record.file
    if (
      typeof docPath === 'string' &&
      docPath.endsWith('.md') &&
      docPath.startsWith(`${SKILL_ROOT}/`)
    ) {
      docPaths.add(docPath)
    }

    for (const nested of Object.values(record)) {
      collectDocPaths(nested, docPaths)
    }
  }

  return docPaths
}

export async function hydrateSearchResult(
  env: Env,
  result: unknown
): Promise<{
  result: unknown
  documents: HydratedDocument[]
}> {
  const primaryPaths = [...collectDocPaths(result)].slice(0, MAX_PRIMARY_DOCS)

  const documents = await Promise.all(
    primaryPaths.map(async (path) => {
      const content = await readTextAsset(env, path)
      const relatedPaths = getRelatedTypePaths(content, path, path)
      const relatedDocuments = await collectRelatedDocuments(env, relatedPaths, path)

      return {
        path,
        content,
        relatedDocuments
      }
    })
  )

  return { result, documents }
}

export function resetCatalogCache(): void {
  catalogPromise = undefined
}
