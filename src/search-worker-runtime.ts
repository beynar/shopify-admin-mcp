import { create, insertMultiple, search as searchOrama } from '@orama/orama'
import type { CatalogEntry, CatalogSearchResult, SearchCatalog, SearchRecord } from './search-index'

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

function normalizeTerm(term: string): string {
  return String(term)
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
    .replace(/[_/:-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
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

function compareByScore(left: CatalogSearchResult, right: CatalogSearchResult): number {
  return right.score - left.score || left.name.localeCompare(right.name)
}

export async function createCatalogRuntime(
  catalogData: SearchCatalog,
  searchRecords: SearchRecord[]
) {
  const allEntries = collectCatalogEntries(catalogData)
  const entriesByDocPath = new Map(allEntries.map((entry) => [entry.docPath, entry]))
  const searchDb = createSearchDatabase()

  await insertMultiple(searchDb, searchRecords)

  return {
    ...catalogData,
    search(term: string, options: { kind?: CatalogEntry['kind']; limit?: number } = {}) {
      const normalizedTerm = normalizeTerm(term)
      if (!normalizedTerm) {
        return []
      }

      const aggregated = new Map<string, CatalogSearchResult>()

      for (const entry of allEntries) {
        if (options.kind && entry.kind !== options.kind) {
          continue
        }

        if (normalizeTerm(entry.name) === normalizedTerm) {
          aggregated.set(entry.docPath, {
            ...entry,
            score: 10_000
          })
        }
      }

      const results = searchOrama(searchDb, {
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
      }) as Awaited<ReturnType<typeof searchOrama>>

      for (const hit of results.hits) {
        const document = hit.document as SearchRecord
        const entry = entriesByDocPath.get(document.docPath)
        if (!entry || (options.kind && entry.kind !== options.kind)) {
          continue
        }

        const exactBoost =
          document.recordType === 'doc' && normalizeTerm(entry.name) === normalizedTerm ? 1000 : 0
        const nextScore = hit.score + exactBoost
        const current = aggregated.get(document.docPath)

        if (!current || nextScore > current.score) {
          aggregated.set(document.docPath, {
            ...entry,
            score: nextScore
          })
        }
      }

      const limit = Math.max(1, Math.min(Number(options.limit ?? 10), 25))
      return [...aggregated.values()].sort(compareByScore).slice(0, limit)
    }
  }
}
