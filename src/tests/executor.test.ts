import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createCodeExecutor, createSearchExecutor } from '../executor'

describe('Shopify executor', () => {
  let mockEnv: Env
  let mockCtx: ExecutionContext & {
    exports: {
      GlobalOutbound: ReturnType<typeof vi.fn>
    }
  }
  let mockEntrypoint: { evaluate: ReturnType<typeof vi.fn> }

  beforeEach(() => {
    mockEntrypoint = {
      evaluate: vi.fn().mockResolvedValue({ result: {}, err: undefined })
    }

    mockEnv = {
      SHOPIFY_SHOP_DOMAIN: 'example.myshopify.com',
      SHOPIFY_ADMIN_API_VERSION: '2026-01',
      SHOPIFY_ADMIN_ACCESS_TOKEN: 'shpat_test',
      LOADER: {
        get: vi.fn((_id: string, factory: () => unknown) => {
          factory()
          return {
            getEntrypoint: () => mockEntrypoint
          }
        })
      }
    } as unknown as Env

    mockCtx = {
      exports: {
        GlobalOutbound: vi.fn(() => ({ fetch: vi.fn() }))
      }
    } as unknown as typeof mockCtx
  })

  it('injects the Shopify helper into worker code', async () => {
    const executor = createCodeExecutor(mockEnv, mockCtx)
    await executor('async () => ({ ok: true })')

    const loader = mockEnv.LOADER.get as unknown as ReturnType<typeof vi.fn>
    const workerConfig = loader.mock.calls[0][1]()
    const workerCode = workerConfig.modules['worker.js']

    expect(workerCode).toContain('const shopify = {')
    expect(workerCode).toContain('async graphql(options)')
    expect(workerCode).toContain('async query(options)')
    expect(workerCode).toContain('async mutation(options)')
    expect(workerCode).toContain('https://example.myshopify.com/admin/api/2026-01/graphql.json')
  })

  it('wires the global outbound token through props', async () => {
    const executor = createCodeExecutor(mockEnv, mockCtx)
    await executor('async () => ({ ok: true })')

    expect(mockCtx.exports.GlobalOutbound).toHaveBeenCalledWith({
      props: { accessToken: 'shpat_test' }
    })
  })
})

describe('Search executor', () => {
  it('embeds the catalog and hydrates docs', async () => {
    const mockEnv = {
      ASSETS: {
        fetch: vi.fn(async (request: Request) => {
          const path = new URL(request.url).pathname.replace(/^\/+/, '')
          const files: Record<string, string> = {
            'generated/catalog.json': JSON.stringify({
              domains: {
                products: {
                  name: 'products',
                  description: 'Products',
                  queries: 1,
                  mutations: 0,
                  docPath: 'shopify-graphql/references/products.md'
                }
              },
              queries: {
                product: {
                  kind: 'query',
                  name: 'product',
                  description: 'Load product',
                  docPath: 'shopify-graphql/queries/product.md',
                  returnType: 'Product'
                }
              },
              mutations: {},
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
                inputs: {},
                enums: {},
                interfaces: {},
                unions: {}
              }
            }),
            'generated/search-records.json': JSON.stringify([]),
            'generated/orama-runtime.js':
              'export async function createCatalogRuntime() { return { search() { return [] } } }',
            'shopify-graphql/queries/product.md': '# Query: `product`'
          }

          const content = files[path]
          if (!content) {
            return new Response('Not Found', { status: 404 })
          }
          return new Response(content, { status: 200 })
        })
      },
      LOADER: {
        get: vi.fn((_id: string, factory: () => unknown) => {
          const config = factory()
          return {
            getEntrypoint: () => ({
              evaluate: async () => ({
                result: { name: 'product', docPath: 'shopify-graphql/queries/product.md' },
                err: undefined
              }),
              config
            })
          }
        })
      }
    } as unknown as Env

    const executor = createSearchExecutor(mockEnv)
    const result = (await executor('async () => catalog.queries.product')) as {
      result: { name: string }
      documents: Array<{ path: string }>
    }

    expect(result.result.name).toBe('product')
    expect(result.documents[0].path).toBe('shopify-graphql/queries/product.md')

    const workerCode = (
      (mockEnv.LOADER.get as unknown as ReturnType<typeof vi.fn>).mock.calls[0][1]() as {
        modules: Record<string, string>
      }
    ).modules['worker.js']
    expect(workerCode).toContain('from "./orama-runtime.js"')
  })
})
