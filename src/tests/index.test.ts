import { describe, expect, it, vi } from 'vitest'
import worker, { GlobalOutbound } from '../index'

describe('worker fetch handler', () => {
  it('returns 404 for non-mcp routes', async () => {
    const response = await worker.fetch(
      new Request('https://example.com/unknown'),
      {} as Env,
      { waitUntil: vi.fn() } as unknown as ExecutionContext
    )

    expect(response.status).toBe(404)
  })
})

describe('GlobalOutbound', () => {
  it('rejects requests to unexpected hosts', async () => {
    const outbound = new GlobalOutbound(
      {
        SHOPIFY_SHOP_DOMAIN: 'example.myshopify.com',
        SHOPIFY_ADMIN_API_VERSION: '2026-01'
      } as Env,
      {
        props: { accessToken: 'shpat_test' }
      } as ExecutionContext & { props: { accessToken: string } }
    )

    const response = await outbound.fetch(new Request('https://evil.example.com/graphql'))
    expect(response.status).toBe(403)
  })
})
