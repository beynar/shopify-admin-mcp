import { create, insertMultiple, load, save, search as searchOrama } from '@orama/orama'

const SKILL_ROOT = 'shopify-graphql'

const SECTION_NAMES = new Set([
  'Arguments',
  'Payload Fields',
  'Return Type Fields',
  'Fields',
  'Input Fields',
  'Related Types',
  'Example Query',
  'Example Mutation'
])

export const GENERATED_CATALOG_ASSET_PATH = 'generated/catalog.json'
export const GENERATED_SEARCH_RECORDS_ASSET_PATH = 'generated/search-records.json'
export const GENERATED_ORAMA_SNAPSHOT_ASSET_PATH = 'generated/orama-snapshot.json'
export const GENERATED_ORAMA_RUNTIME_ASSET_PATH = 'generated/orama-runtime.js'

export interface CatalogEntry {
  kind: 'query' | 'mutation' | 'type' | 'domain'
  name: string
  description: string
  docPath: string
  returnType?: string
  typeGroup?: 'objects' | 'inputs' | 'enums' | 'interfaces' | 'unions'
  typeKind?: string
  domain?: string
}

export interface DomainEntry {
  name: string
  description: string
  queries: number
  mutations: number
  docPath: string
}

export interface SearchCatalog {
  domains: Record<string, DomainEntry>
  queries: Record<string, CatalogEntry>
  mutations: Record<string, CatalogEntry>
  types: {
    objects: Record<string, CatalogEntry>
    inputs: Record<string, CatalogEntry>
    enums: Record<string, CatalogEntry>
    interfaces: Record<string, CatalogEntry>
    unions: Record<string, CatalogEntry>
  }
}

export interface CatalogSearchResult extends CatalogEntry {
  score: number
}

type DomainManifest = Record<
  string,
  {
    description: string
    queries: number
    mutations: number
    file: string
  }
>

type IndexManifest = Record<
  string,
  {
    description: string
    returns?: string
    kind?: string
  }
>

export interface SearchRecord {
  id: string
  recordType: 'doc' | 'section'
  kind: 'query' | 'mutation' | 'type' | 'domain'
  typeGroup: string
  name: string
  domain: string
  docPath: string
  title: string
  description: string
  returnType: string
  sectionName: string
  text: string
}

export interface SearchAssets {
  catalog: SearchCatalog
  searchRecords: SearchRecord[]
  oramaSnapshot: OramaSnapshot
}

export interface SearchIndexManifests {
  domains: DomainManifest
  queries: IndexManifest
  mutations: IndexManifest
  objects: IndexManifest
  inputs: IndexManifest
  enums: IndexManifest
  interfaces: IndexManifest
  unions: IndexManifest
}

export interface OramaSnapshot {
  internalDocumentIDStore: unknown
  index: unknown
  docs: unknown
  sorting: unknown
  pinning: unknown
  language: string
}

type SearchOptions = {
  kind?: CatalogEntry['kind']
  limit?: number
}

function inferDomain(name: string, domains: Record<string, DomainEntry>): string | undefined {
  const normalizedName = name.toLowerCase()
  const entries = Object.values(domains)
  for (const domain of entries) {
    if (normalizedName.includes(domain.name.toLowerCase())) {
      return domain.name
    }
  }
  return undefined
}

function buildTypeEntries(
  manifest: IndexManifest,
  group: 'objects' | 'inputs' | 'enums' | 'interfaces' | 'unions',
  domains: Record<string, DomainEntry>
): Record<string, CatalogEntry> {
  return Object.fromEntries(
    Object.entries(manifest).map(([name, entry]) => [
      name,
      {
        kind: 'type',
        name,
        description: entry.description,
        docPath: `${SKILL_ROOT}/types/${group}/${name}.md`,
        typeGroup: group,
        typeKind: entry.kind,
        domain: inferDomain(name, domains)
      }
    ])
  )
}

export function buildCatalogFromManifests(manifests: SearchIndexManifests): SearchCatalog {
  const domains: Record<string, DomainEntry> = Object.fromEntries(
    Object.entries(manifests.domains).map(([name, value]) => [
      name,
      {
        name,
        description: value.description,
        queries: value.queries,
        mutations: value.mutations,
        docPath: `${SKILL_ROOT}/${value.file}`
      }
    ])
  )

  const queries: Record<string, CatalogEntry> = Object.fromEntries(
    Object.entries(manifests.queries).map(([name, value]) => [
      name,
      {
        kind: 'query',
        name,
        description: value.description,
        docPath: `${SKILL_ROOT}/queries/${name}.md`,
        returnType: value.returns,
        domain: inferDomain(name, domains)
      }
    ])
  )

  const mutations: Record<string, CatalogEntry> = Object.fromEntries(
    Object.entries(manifests.mutations).map(([name, value]) => [
      name,
      {
        kind: 'mutation',
        name,
        description: value.description,
        docPath: `${SKILL_ROOT}/mutations/${name}.md`,
        returnType: value.returns,
        domain: inferDomain(name, domains)
      }
    ])
  )

  return {
    domains,
    queries,
    mutations,
    types: {
      objects: buildTypeEntries(manifests.objects, 'objects', domains),
      inputs: buildTypeEntries(manifests.inputs, 'inputs', domains),
      enums: buildTypeEntries(manifests.enums, 'enums', domains),
      interfaces: buildTypeEntries(manifests.interfaces, 'interfaces', domains),
      unions: buildTypeEntries(manifests.unions, 'unions', domains)
    }
  }
}

function splitIdentifier(input: string): string {
  return input
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
    .replace(/[_/:-]+/g, ' ')
}

function normalizeWhitespace(input: string): string {
  return input.replace(/\s+/g, ' ').trim()
}

export function normalizeSearchText(input: string): string {
  const separated = splitIdentifier(input)
  return normalizeWhitespace(separated).toLowerCase()
}

function toSearchText(parts: Array<string | undefined>): string {
  const text = parts
    .map((part) => part?.trim())
    .filter((part): part is string => Boolean(part))
    .join('\n')

  return normalizeSearchText(text)
}

function collectCatalogEntries(catalog: SearchCatalog): CatalogEntry[] {
  return [
    ...Object.values(catalog.queries),
    ...Object.values(catalog.mutations),
    ...Object.values(catalog.types.objects),
    ...Object.values(catalog.types.inputs),
    ...Object.values(catalog.types.enums),
    ...Object.values(catalog.types.interfaces),
    ...Object.values(catalog.types.unions),
    ...Object.values(catalog.domains).map((domain) => ({
      kind: 'domain' as const,
      name: domain.name,
      description: domain.description,
      docPath: domain.docPath
    }))
  ]
}

function extractTitle(markdown: string): string {
  const match = markdown.match(/^#\s+(.+)$/m)
  return match ? match[1].trim() : ''
}

function extractSections(markdown: string): Array<{ name: string; content: string }> {
  const matches = [...markdown.matchAll(/^##\s+(.+)$/gm)]
  const sections: Array<{ name: string; content: string }> = []

  for (let index = 0; index < matches.length; index += 1) {
    const current = matches[index]
    const next = matches[index + 1]
    const name = current[1].trim()
    if (!SECTION_NAMES.has(name)) {
      continue
    }

    const start = current.index! + current[0].length
    const end = next?.index ?? markdown.length
    const content = markdown.slice(start, end).trim()

    if (!content) {
      continue
    }

    sections.push({ name, content })
  }

  return sections
}

function extractBacktickedTokens(content: string, limit = 24): string[] {
  const matches = [...content.matchAll(/`([^`]+)`/g)]
  const seen = new Set<string>()
  const tokens: string[] = []

  for (const match of matches) {
    const token = match[1].trim()
    if (!token || seen.has(token)) {
      continue
    }

    seen.add(token)
    tokens.push(token)

    if (tokens.length >= limit) {
      break
    }
  }

  return tokens
}

function extractLinkedLabels(content: string, limit = 24): string[] {
  const matches = [...content.matchAll(/\[([^\]]+)\]\([^)]+\)/g)]
  const seen = new Set<string>()
  const labels: string[] = []

  for (const match of matches) {
    const label = match[1].trim()
    if (!label || seen.has(label)) {
      continue
    }

    seen.add(label)
    labels.push(label)

    if (labels.length >= limit) {
      break
    }
  }

  return labels
}

function summarizeSection(name: string, content: string): string {
  if (name === 'Related Types') {
    return extractLinkedLabels(content).join(' ')
  }

  if (name === 'Example Query' || name === 'Example Mutation') {
    return extractBacktickedTokens(content, 40).join(' ')
  }

  return extractBacktickedTokens(content).join(' ')
}

export async function buildSearchRecords(
  catalog: SearchCatalog,
  readDocument: (docPath: string) => Promise<string>
): Promise<SearchRecord[]> {
  const entries = collectCatalogEntries(catalog)
  const records: SearchRecord[] = []

  for (const entry of entries) {
    const markdown = await readDocument(entry.docPath)
    const title = extractTitle(markdown)
    const sections = extractSections(markdown)
    const includeSectionRecords = entry.kind === 'query' || entry.kind === 'mutation'
    const docSections =
      entry.kind === 'query' || entry.kind === 'mutation'
        ? sections
        : sections.filter((section) => section.name === 'Related Types')

    records.push({
      id: entry.docPath,
      recordType: 'doc',
      kind: entry.kind,
      typeGroup: entry.typeGroup ?? '',
      name: normalizeSearchText(entry.name),
      domain: normalizeSearchText(entry.domain ?? ''),
      docPath: entry.docPath,
      title: normalizeSearchText(title),
      description: normalizeSearchText(entry.description),
      returnType: normalizeSearchText(entry.returnType ?? ''),
      sectionName: '',
      text: toSearchText([
        title,
        entry.description,
        entry.returnType,
        ...docSections.map(
          (section) => `${section.name}\n${summarizeSection(section.name, section.content)}`
        )
      ])
    })

    if (!includeSectionRecords) {
      continue
    }

    for (const section of sections) {
      records.push({
        id: `${entry.docPath}#${section.name}`,
        recordType: 'section',
        kind: entry.kind,
        typeGroup: entry.typeGroup ?? '',
        name: normalizeSearchText(entry.name),
        domain: normalizeSearchText(entry.domain ?? ''),
        docPath: entry.docPath,
        title: normalizeSearchText(title),
        description: normalizeSearchText(entry.description),
        returnType: normalizeSearchText(entry.returnType ?? ''),
        sectionName: normalizeSearchText(section.name),
        text: toSearchText([section.name, summarizeSection(section.name, section.content)])
      })
    }
  }

  return records
}

function createSearchDatabase() {
  return create({
    schema: {
      id: 'string',
      recordType: 'enum',
      kind: 'enum',
      typeGroup: 'string',
      name: 'string',
      domain: 'string',
      docPath: 'string',
      title: 'string',
      description: 'string',
      returnType: 'string',
      sectionName: 'string',
      text: 'string'
    }
  })
}

export async function createOramaSnapshot(records: SearchRecord[]): Promise<OramaSnapshot> {
  const db = await createSearchDatabase()
  await insertMultiple(db, records)
  return save(db) as OramaSnapshot
}

export async function buildSearchAssets(
  manifests: SearchIndexManifests,
  readDocument: (docPath: string) => Promise<string>
): Promise<SearchAssets> {
  const catalog = buildCatalogFromManifests(manifests)
  const searchRecords = await buildSearchRecords(catalog, readDocument)
  const oramaSnapshot = await createOramaSnapshot(searchRecords)

  return {
    catalog,
    searchRecords,
    oramaSnapshot
  }
}

function compareByScore(left: CatalogSearchResult, right: CatalogSearchResult): number {
  return right.score - left.score || left.name.localeCompare(right.name)
}

export async function searchCatalogWithOrama(
  catalog: SearchCatalog,
  snapshot: OramaSnapshot,
  term: string,
  options: SearchOptions = {}
): Promise<CatalogSearchResult[]> {
  const normalizedTerm = normalizeSearchText(String(term).trim())
  if (!normalizedTerm) {
    return []
  }

  const db = await createSearchDatabase()
  load(db, snapshot)

  const result = await searchOrama(db, {
    term: normalizedTerm,
    properties: ['name', 'title', 'description', 'text', 'domain'],
    boost: {
      name: 8,
      title: 6,
      description: 4,
      text: 3,
      domain: 2
    },
    limit: 100
  })

  const docByPath = new Map<string, CatalogEntry>()
  for (const entry of collectCatalogEntries(catalog)) {
    docByPath.set(entry.docPath, entry)
  }

  const aggregated = new Map<string, CatalogSearchResult>()

  for (const entry of collectCatalogEntries(catalog)) {
    if (options.kind && entry.kind !== options.kind) {
      continue
    }

    if (normalizeSearchText(entry.name) === normalizedTerm) {
      aggregated.set(entry.docPath, {
        ...entry,
        score: 10_000
      })
    }
  }

  for (const hit of result.hits) {
    const document = hit.document as SearchRecord
    const catalogEntry = docByPath.get(document.docPath)
    if (!catalogEntry || (options.kind && catalogEntry.kind !== options.kind)) {
      continue
    }

    const existing = aggregated.get(document.docPath)
    const baseScore = existing?.score ?? 0
    const exactBoost =
      document.recordType === 'doc' && normalizeSearchText(catalogEntry.name) === normalizedTerm
        ? 1000
        : 0
    const nextScore = Math.max(baseScore, hit.score + exactBoost)

    aggregated.set(document.docPath, {
      ...catalogEntry,
      score: nextScore
    })
  }

  const limit = Math.max(1, Math.min(Number(options.limit ?? 10), 25))
  return [...aggregated.values()].sort(compareByScore).slice(0, limit)
}
