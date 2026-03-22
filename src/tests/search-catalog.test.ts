import { beforeEach, describe, expect, it, vi } from 'vitest'
import { resetAssetCache } from '../asset-loader'
import { hydrateSearchResult, loadCatalog, resetCatalogCache } from '../search-catalog'

function createAssetEnv(files: Record<string, string>): Env {
  return {
    ASSETS: {
      fetch: vi.fn(async (request: Request) => {
        const path = new URL(request.url).pathname.replace(/^\/+/, '')
        const content = files[path]
        if (!content) {
          return new Response('Not Found', { status: 404 })
        }
        return new Response(content, { status: 200 })
      })
    }
  } as Env
}

describe('search-catalog', () => {
  beforeEach(() => {
    resetAssetCache()
    resetCatalogCache()
  })

  it('builds the catalog from asset manifests', async () => {
    const env = createAssetEnv({
      'generated/catalog.json': JSON.stringify({
        domains: {
          products: {
            name: 'products',
            description: 'Products domain',
            queries: 1,
            mutations: 1,
            docPath: 'shopify-graphql/references/products.md'
          }
        },
        queries: {
          product: {
            kind: 'query',
            name: 'product',
            description: 'Load a product',
            docPath: 'shopify-graphql/queries/product.md',
            returnType: 'Product'
          }
        },
        mutations: {
          productCreate: {
            kind: 'mutation',
            name: 'productCreate',
            description: 'Create a product',
            docPath: 'shopify-graphql/mutations/productCreate.md',
            returnType: 'ProductCreatePayload'
          }
        },
        types: {
          objects: {
            Product: {
              kind: 'type',
              name: 'Product',
              description: 'A product',
              docPath: 'shopify-graphql/types/objects/Product.md',
              typeGroup: 'objects',
              typeKind: 'OBJECT'
            }
          },
          inputs: {
            ProductCreateInput: {
              kind: 'type',
              name: 'ProductCreateInput',
              description: 'Product input',
              docPath: 'shopify-graphql/types/inputs/ProductCreateInput.md',
              typeGroup: 'inputs',
              typeKind: 'INPUT_OBJECT'
            }
          },
          enums: {},
          interfaces: {},
          unions: {}
        }
      })
    })

    const catalog = await loadCatalog(env)
    expect(catalog.domains.products.docPath).toBe('shopify-graphql/references/products.md')
    expect(catalog.queries.product.docPath).toBe('shopify-graphql/queries/product.md')
    expect(catalog.mutations.productCreate.docPath).toBe(
      'shopify-graphql/mutations/productCreate.md'
    )
    expect(catalog.types.objects.Product.typeKind).toBe('OBJECT')
  })

  it('hydrates selected docs with bounded recursive related types', async () => {
    const env = createAssetEnv({
      'shopify-graphql/queries/product.md': `# Query: \`product\`

## Related Types

- [Product](../types/objects/Product.md)
- [SEO](../types/objects/SEO.md)
`,
      'shopify-graphql/types/objects/Product.md': `# Product type

## Related Types

- [ProductStatus](../../types/enums/ProductStatus.md)
- [SEOInput](../../types/inputs/SEOInput.md)
`,
      'shopify-graphql/types/objects/SEO.md': '# SEO type',
      'shopify-graphql/types/enums/ProductStatus.md': '# ProductStatus enum',
      'shopify-graphql/types/inputs/SEOInput.md': '# SEOInput input'
    })

    const result = await hydrateSearchResult(env, {
      name: 'product',
      docPath: 'shopify-graphql/queries/product.md'
    })

    expect(result.documents).toHaveLength(1)
    expect(result.documents[0].relatedDocuments.map((doc) => doc.path)).toEqual([
      'shopify-graphql/types/objects/Product.md',
      'shopify-graphql/types/objects/SEO.md',
      'shopify-graphql/types/inputs/SEOInput.md',
      'shopify-graphql/types/enums/ProductStatus.md'
    ])
  })

  it('does not auto-expand Shop as a generic related payload object', async () => {
    const env = createAssetEnv({
      'shopify-graphql/mutations/productCreate.md': `# Mutation: \`productCreate\`

## Related Types

- [ProductCreateInput](../types/inputs/ProductCreateInput.md)
- [Shop](../types/objects/Shop.md)
`,
      'shopify-graphql/types/inputs/ProductCreateInput.md': '# ProductCreateInput',
      'shopify-graphql/types/objects/Shop.md': '# Shop'
    })

    const result = await hydrateSearchResult(env, {
      name: 'productCreate',
      docPath: 'shopify-graphql/mutations/productCreate.md'
    })

    expect(result.documents).toHaveLength(1)
    expect(result.documents[0].relatedDocuments.map((doc) => doc.path)).toEqual([
      'shopify-graphql/types/inputs/ProductCreateInput.md'
    ])
  })

  it('does auto-expand Shop for shop-centric root operations', async () => {
    const env = createAssetEnv({
      'shopify-graphql/queries/shop.md': `# Query: \`shop\`

## Related Types

- [Shop](../types/objects/Shop.md)
- [ShopPolicy](../types/objects/ShopPolicy.md)
`,
      'shopify-graphql/types/objects/Shop.md': '# Shop',
      'shopify-graphql/types/objects/ShopPolicy.md': '# ShopPolicy'
    })

    const result = await hydrateSearchResult(env, {
      name: 'shop',
      docPath: 'shopify-graphql/queries/shop.md'
    })

    expect(result.documents).toHaveLength(1)
    expect(result.documents[0].relatedDocuments.map((doc) => doc.path)).toEqual([
      'shopify-graphql/types/objects/Shop.md',
      'shopify-graphql/types/objects/ShopPolicy.md'
    ])
  })

  it('skips missing related docs instead of failing hydration', async () => {
    const env = createAssetEnv({
      'shopify-graphql/queries/job.md': `# Query: \`job\`

## Related Types

- [Job](../types/objects/Job.md)
- [QueryRoot](../types/objects/QueryRoot.md)
`,
      'shopify-graphql/types/objects/Job.md': '# Job'
    })

    const result = await hydrateSearchResult(env, {
      name: 'job',
      docPath: 'shopify-graphql/queries/job.md'
    })

    expect(result.documents).toHaveLength(1)
    expect(result.documents[0].relatedDocuments.map((doc) => doc.path)).toEqual([
      'shopify-graphql/types/objects/Job.md'
    ])
  })
})
