# Shopify Admin GraphQL MCP

Token-efficient Model Context Protocol server for the Shopify Admin GraphQL API.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/beynar/shopify-admin-mcp)

This server keeps the Cloudflare Code Mode shape, but swaps the Cloudflare OpenAPI/R2 pipeline for an asset-backed Shopify skill corpus:

- `search` lets agents search bundled Shopify docs and related types
- `execute` lets agents run JavaScript with an injected `shopify` helper

The Shopify skill documents under `assets/shopify-graphql` are the source of truth.

## Architecture

The server exposes only two MCP tools:

- `search`
  - runs JavaScript against a compact in-memory catalog built from the bundled asset manifests
  - returns matched Markdown docs plus one-hop related type docs
- `execute`
  - runs JavaScript in a dynamic Worker isolate
  - injects `shopify.graphql`, `shopify.query`, and `shopify.mutation`
  - restricts outbound requests to the configured Shopify Admin GraphQL endpoint

## Required Environment Variables

- `SHOPIFY_SHOP_DOMAIN`
- `SHOPIFY_ADMIN_API_VERSION`
- `SHOPIFY_ADMIN_ACCESS_TOKEN`

For local development, create a local `.dev.vars` file with real values for those three variables.

## Local Development

```bash
npm install
npm run dev
```

Default local MCP endpoint:

```text
http://localhost:2529/mcp
```

## Commands

```bash
npm run dev
npm run types
npm run typecheck
npm run lint
npm run format:check
npm run test
npm run check
```

## Tool Usage

### `search`

Use `search` first to inspect Shopify queries, mutations, objects, inputs, enums, interfaces, unions, and domain references.

Example:

```js
async () => {
  return catalog.search('productCreate', { limit: 3 })
}
```

### `execute`

Use `execute` once you know the operation and shape you need.

Query example:

```js
async () => {
  return shopify.query({
    query: `query ShopName {
      shop {
        name
      }
    }`
  })
}
```

Mutation example:

```js
async () => {
  return shopify.mutation({
    mutation: `mutation ProductCreate($product: ProductCreateInput!) {
      productCreate(product: $product) {
        product {
          id
          title
        }
        userErrors {
          field
          message
        }
      }
    }`,
    variables: {
      product: {
        title: "New product"
      }
    }
  })
}
```

## Project Layout

```text
src/
  index.ts           Worker entrypoint and outbound restriction
  server.ts          MCP server and tool registration
  executor.ts        Dynamic Worker execution and Shopify API bridge
  asset-loader.ts    Static asset access and manifest loading
  search-catalog.ts  Shopify doc catalog construction and related-doc expansion
  truncate.ts        Response truncation

assets/shopify-graphql/
  references/
  queries/
  mutations/
  types/
```

## Deployment

Wrangler environments are defined in [wrangler.jsonc](/Users/arnaud/code/shopify-mcp/wrangler.jsonc).

One-click import:

- [Deploy to Cloudflare](https://deploy.workers.cloudflare.com/?url=https://github.com/beynar/shopify-admin-mcp)

Cloudflare deploy buttons require a public GitHub or GitLab repository and use the source repo's Wrangler config to provision resources and configure the Worker. Source: [Cloudflare deploy buttons docs](https://developers.cloudflare.com/workers/platform/deploy-buttons/).

Important:

- This project depends on the `worker_loader` binding for dynamic code execution.
- Deployments only succeed on Cloudflare accounts that have Dynamic Worker Loaders enabled.
- You still need to provide real Shopify credentials during setup or immediately after deploy:
  - `SHOPIFY_SHOP_DOMAIN`
  - `SHOPIFY_ADMIN_API_VERSION`
  - `SHOPIFY_ADMIN_ACCESS_TOKEN`

Typical flow:

```bash
npm run deploy
npm run deploy:prod
```

Set the Shopify secrets in the target environment before deploying.
