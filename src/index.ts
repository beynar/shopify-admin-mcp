import { Hono } from 'hono'
import { WorkerEntrypoint } from 'cloudflare:workers'
import { WebStandardStreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js'
import { createServer } from './server'

type GlobalOutboundProps = { accessToken: string }
type WorkerExecutionContext = ExecutionContext<unknown>

export class GlobalOutbound extends WorkerEntrypoint<Env, GlobalOutboundProps> {
  async fetch(request: Request): Promise<Response> {
    const allowedHost = new URL(
      `https://${this.env.SHOPIFY_SHOP_DOMAIN}/admin/api/${this.env.SHOPIFY_ADMIN_API_VERSION}/graphql.json`
    ).hostname
    const requestedHost = new URL(request.url).hostname

    if (requestedHost !== allowedHost) {
      return new Response(`Forbidden: requests to ${requestedHost} are not allowed`, {
        status: 403
      })
    }

    const headers = new Headers(request.headers)
    headers.set('X-Shopify-Access-Token', this.ctx.props.accessToken)

    const authedRequest = new Request(request, { headers })
    return fetch(authedRequest)
  }
}

type AppContext = {
  Bindings: Env
}

async function createMcpResponse(
  request: Request,
  env: Env,
  ctx: WorkerExecutionContext
): Promise<Response> {
  const server = await createServer(env, ctx)
  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true,
    retryInterval: 1000
  })

  await server.connect(transport)
  const response = await transport.handleRequest(request)
  ctx.waitUntil(transport.close())

  return response
}

const app = new Hono<AppContext>()

app.post('/mcp', async (c) =>
  createMcpResponse(c.req.raw, c.env, c.executionCtx as WorkerExecutionContext)
)

app.all('*', () => new Response('Not Found', { status: 404 }))

export default {
  fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    return Promise.resolve(app.fetch(request, env, ctx))
  }
}
