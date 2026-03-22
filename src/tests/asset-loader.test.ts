import { beforeEach, describe, expect, it } from 'vitest'
import { readJsonAsset, readTextAsset, resetAssetCache } from '../asset-loader'

function createAssetEnv(files: Record<string, string>): Env {
  return {
    ASSETS: {
      fetch: async (request: Request) => {
        const path = new URL(request.url).pathname.replace(/^\/+/, '')
        const content = files[path]
        if (!content) {
          return new Response('Not Found', { status: 404 })
        }
        return new Response(content, { status: 200 })
      }
    }
  } as Env
}

describe('asset-loader', () => {
  beforeEach(() => {
    resetAssetCache()
  })

  it('reads text and json assets', async () => {
    const env = createAssetEnv({
      'shopify-graphql/queries/_index.json': JSON.stringify({
        product: { description: 'Product', returns: 'Product' }
      }),
      'shopify-graphql/queries/product.md': '# Query: `product`'
    })

    await expect(readJsonAsset(env, 'shopify-graphql/queries/_index.json')).resolves.toEqual({
      product: { description: 'Product', returns: 'Product' }
    })
    await expect(readTextAsset(env, 'shopify-graphql/queries/product.md')).resolves.toBe(
      '# Query: `product`'
    )
  })

  it('rejects traversal paths', async () => {
    const env = createAssetEnv({})
    await expect(readTextAsset(env, '../secret.txt')).rejects.toThrow('Invalid asset path')
  })
})
