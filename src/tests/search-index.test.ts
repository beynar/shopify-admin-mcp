import { describe, expect, it } from 'vitest'
import {
  buildSearchAssets,
  searchCatalogWithOrama,
  type SearchIndexManifests
} from '../search-index'

describe('search-index', () => {
  it('builds deterministic catalog, records, and snapshot assets', async () => {
    const manifests: SearchIndexManifests = {
      domains: {
        products: {
          description: 'Products domain',
          queries: 1,
          mutations: 1,
          file: 'references/products.md'
        }
      },
      queries: {
        products: {
          description: 'List products by query',
          returns: 'ProductConnection'
        }
      },
      mutations: {
        productCreate: {
          description: 'Create a product',
          returns: 'ProductCreatePayload'
        }
      },
      objects: {
        Product: {
          description: 'A product',
          kind: 'OBJECT'
        }
      },
      inputs: {
        ProductCreateInput: {
          description: 'Product input',
          kind: 'INPUT_OBJECT'
        }
      },
      enums: {
        ProductStatus: {
          description: 'Product status',
          kind: 'ENUM'
        }
      },
      interfaces: {},
      unions: {}
    }

    const files: Record<string, string> = {
      'shopify-graphql/references/products.md': '# Domain: `products`',
      'shopify-graphql/queries/products.md': `# Query: \`products\`

## Arguments

- \`query\`: \`String\`
- \`savedSearchId\`: \`ID\`
`,
      'shopify-graphql/mutations/productCreate.md': `# Mutation: \`productCreate\`

## Arguments

- **\`product\`**: \`ProductCreateInput\`

## Payload Fields

- \`product\`: \`Product\`
`,
      'shopify-graphql/types/objects/Product.md': `# Object: \`Product\`

## Fields

- \`title\`: \`String!\`
- \`status\`: \`ProductStatus!\`
`,
      'shopify-graphql/types/inputs/ProductCreateInput.md': `# Input Object: \`ProductCreateInput\`

## Input Fields

- \`title\`: \`String\`
- \`templateSuffix\`: \`String\`
`,
      'shopify-graphql/types/enums/ProductStatus.md': `# Enum: \`ProductStatus\`

## Fields

- \`ACTIVE\`
- \`DRAFT\`
`
    }

    const assets = await buildSearchAssets(manifests, async (docPath) => files[docPath] ?? '')

    expect(assets.catalog.mutations.productCreate.docPath).toBe(
      'shopify-graphql/mutations/productCreate.md'
    )
    expect(
      assets.searchRecords.some(
        (record) => record.id === 'shopify-graphql/mutations/productCreate.md'
      )
    ).toBe(true)
    expect(
      assets.searchRecords.some(
        (record) =>
          record.id === 'shopify-graphql/mutations/productCreate.md#Arguments' &&
          record.docPath === 'shopify-graphql/mutations/productCreate.md'
      )
    ).toBe(true)
    expect(assets.oramaSnapshot).toHaveProperty('index')
    expect(assets.oramaSnapshot).toHaveProperty('docs')
  })

  it('supports exact and section-driven retrieval through Orama', async () => {
    const manifests: SearchIndexManifests = {
      domains: {},
      queries: {
        shop: {
          description: 'Returns the shop',
          returns: 'Shop!'
        }
      },
      mutations: {
        productCreate: {
          description: 'Create a product',
          returns: 'ProductCreatePayload'
        }
      },
      objects: {
        Shop: {
          description: 'Shop object',
          kind: 'OBJECT'
        }
      },
      inputs: {
        ProductCreateInput: {
          description: 'Product input',
          kind: 'INPUT_OBJECT'
        }
      },
      enums: {},
      interfaces: {},
      unions: {}
    }

    const files: Record<string, string> = {
      'shopify-graphql/queries/shop.md': `# Query: \`shop\`

## Return Type Fields

- \`name\`: \`String!\`
- \`shopPolicies\`: \`[ShopPolicy!]!\`
`,
      'shopify-graphql/mutations/productCreate.md': `# Mutation: \`productCreate\`

## Arguments

- **\`product\`**: \`ProductCreateInput\`

## Payload Fields

- \`product\`: \`Product\`
`,
      'shopify-graphql/types/objects/Shop.md': '# Object: `Shop`',
      'shopify-graphql/types/inputs/ProductCreateInput.md': '# Input Object: `ProductCreateInput`'
    }

    const assets = await buildSearchAssets(manifests, async (docPath) => files[docPath] ?? '')

    await expect(
      searchCatalogWithOrama(assets.catalog, assets.oramaSnapshot, 'productCreate', {
        kind: 'mutation'
      })
    ).resolves.toMatchObject([{ name: 'productCreate', kind: 'mutation' }])

    await expect(
      searchCatalogWithOrama(assets.catalog, assets.oramaSnapshot, 'shop policies', {
        kind: 'query'
      })
    ).resolves.toMatchObject([{ name: 'shop', kind: 'query' }])
  })
})
