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

  it('rejects MCP requests when MCP_API_KEY is configured and missing', async () => {
    const response = await worker.fetch(
      new Request('https://example.com/mcp', { method: 'POST', body: '{}' }),
      { MCP_API_KEY: 'secret-key' } as Env,
      { waitUntil: vi.fn() } as unknown as ExecutionContext
    )

    expect(response.status).toBe(401)
    expect(response.headers.get('WWW-Authenticate')).toBe('Bearer')
  })

  it('accepts bearer auth when MCP_API_KEY is configured', async () => {
    const response = await worker.fetch(
      new Request('https://example.com/mcp', {
        method: 'POST',
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'initialize',
          params: {
            protocolVersion: '2025-11-05',
            capabilities: {},
            clientInfo: { name: 'test', version: '1.0.0' }
          }
        }),
        headers: {
          'content-type': 'application/json',
          authorization: 'Bearer secret-key'
        }
      }),
      {
        MCP_API_KEY: 'secret-key',
        SHOPIFY_SHOP_DOMAIN: 'example.myshopify.com',
        SHOPIFY_ADMIN_API_VERSION: '2026-01'
      } as Env,
      { waitUntil: vi.fn() } as unknown as ExecutionContext
    )

    expect(response.status).not.toBe(401)
  })

  it('accepts query param auth when MCP_API_KEY is configured', async () => {
    const response = await worker.fetch(
      new Request('https://example.com/mcp?api_key=secret-key', {
        method: 'POST',
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'initialize',
          params: {
            protocolVersion: '2025-11-05',
            capabilities: {},
            clientInfo: { name: 'test', version: '1.0.0' }
          }
        }),
        headers: {
          'content-type': 'application/json'
        }
      }),
      {
        MCP_API_KEY: 'secret-key',
        SHOPIFY_SHOP_DOMAIN: 'example.myshopify.com',
        SHOPIFY_ADMIN_API_VERSION: '2026-01'
      } as Env,
      { waitUntil: vi.fn() } as unknown as ExecutionContext
    )

    expect(response.status).not.toBe(401)
  })
})

describe('GlobalOutbound', () => {
  it('rejects requests to unexpected hosts', async () => {
    const outbound = new GlobalOutbound(
      {
        SHOPIFY_SHOP_DOMAIN: 'example.myshopify.com',
        SHOPIFY_ADMIN_API_VERSION: '2026-01',
        SHOPIFY_ADMIN_ACCESS_TOKEN: 'shpat_test'
      } as Env,
      {} as ExecutionContext
    )

    const response = await outbound.fetch(new Request('https://evil.example.com/graphql'))
    expect(response.status).toBe(403)
  })
})
