import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import { createCodeExecutor, createSearchExecutor } from './executor'
import { truncateResponse } from './truncate'

type WorkerExecutionContext = ExecutionContext<unknown>

const SHOPIFY_TYPES = `
interface ShopifyGraphQLOptions {
  query: string;
  variables?: Record<string, unknown>;
  operationName?: string;
}

interface ShopifyGraphQLError {
  message: string;
  path?: Array<string | number>;
  extensions?: Record<string, unknown>;
}

interface ShopifyGraphQLResponse<T = unknown> {
  success: boolean;
  status: number;
  data?: T;
  errors: ShopifyGraphQLError[];
  extensions?: Record<string, unknown>;
}

declare const shopify: {
  graphql<T = unknown>(options: ShopifyGraphQLOptions): Promise<ShopifyGraphQLResponse<T>>;
  query<T = unknown>(options: Omit<ShopifyGraphQLOptions, "query"> & { query: string }): Promise<ShopifyGraphQLResponse<T>>;
  mutation<T = unknown>(options: Omit<ShopifyGraphQLOptions, "query"> & { mutation: string; variables?: Record<string, unknown>; operationName?: string }): Promise<ShopifyGraphQLResponse<T>>;
};
`

const SEARCH_TYPES = `
interface DomainEntry {
  name: string;
  description: string;
  queries: number;
  mutations: number;
  docPath: string;
}

interface CatalogEntry {
  kind: "query" | "mutation" | "type" | "domain";
  name: string;
  description: string;
  docPath: string;
  returnType?: string;
  typeGroup?: "objects" | "inputs" | "enums" | "interfaces" | "unions";
  typeKind?: string;
  domain?: string;
}

interface CatalogSearchResult extends CatalogEntry {
  score: number;
}

declare const catalog: {
  domains: Record<string, DomainEntry>;
  queries: Record<string, CatalogEntry>;
  mutations: Record<string, CatalogEntry>;
  types: {
    objects: Record<string, CatalogEntry>;
    inputs: Record<string, CatalogEntry>;
    enums: Record<string, CatalogEntry>;
    interfaces: Record<string, CatalogEntry>;
    unions: Record<string, CatalogEntry>;
  };
  search(term: string, options?: { kind?: CatalogEntry["kind"]; limit?: number }): CatalogSearchResult[];
};
`

function formatError(error: unknown): string {
  return error instanceof Error ? error.message : String(error)
}

export async function createServer(env: Env, ctx: WorkerExecutionContext): Promise<McpServer> {
  const server = new McpServer({
    name: 'shopify-admin-graphql',
    version: '0.1.0'
  })

  const executeCode = createCodeExecutor(env, ctx)
  const executeSearch = createSearchExecutor(env)

  server.registerTool(
    'search',
    {
      description: `Search the Shopify Admin GraphQL skill corpus bundled as Worker assets.

The skill docs are the source of truth. Search results automatically include the matched Markdown docs and a bounded related-type expansion.

Search strategy:
- Search exact Shopify names when you know them, for example: productCreate, pageCreate, menuCreate, themes, shop.
- If you do not know the exact name, search short intent phrases such as: create product, blog post, theme template, customer account, menu navigation.
- If naming is uncertain, do multi-search yourself by trying several nearby terms and comparing results, for example: blog post, article, articleCreate.
- Prefer searching operations first, then inspect related types from the returned docs.

Useful Shopify term mappings:
- blog post -> article
- web page -> page
- navigation or menu -> menu
- theme file or template -> theme, themes, themeUpdate, themeFilesUpsert
- legal policy -> shopPolicy, shopPolicies
- customer account -> customer, customerAccounts

Available in your code:
${SEARCH_TYPES}

Examples:

// Find an operation by name
async () => {
  return catalog.search('productCreate', { limit: 3 })
}

// If naming is uncertain, try several nearby searches
async () => {
  return {
    blogPost: catalog.search('blog post', { limit: 3 }),
    article: catalog.search('article', { limit: 3 }),
    articleCreate: catalog.search('articleCreate', { limit: 3 })
  }
}

// Read a specific query entry
async () => {
  return catalog.queries.product
}

// Find object types related to products
async () => {
  return catalog.search('Product', { kind: 'type', limit: 5 })
}`,
      inputSchema: {
        code: z
          .string()
          .describe('JavaScript async arrow function to search the Shopify skill catalog')
      }
    },
    async ({ code }) => {
      try {
        const result = await executeSearch(code)
        return {
          content: [{ type: 'text', text: JSON.stringify(result, null, 2) }]
        }
      } catch (error) {
        return {
          content: [{ type: 'text', text: `Error: ${formatError(error)}` }],
          isError: true
        }
      }
    }
  )

  server.registerTool(
    'execute',
    {
      description: `Execute JavaScript against the Shopify Admin GraphQL API. First use the 'search' tool to discover the right operations and related types, then call the API with the injected shopify helper.

Configured target:
- Shop: ${env.SHOPIFY_SHOP_DOMAIN}
- API version: ${env.SHOPIFY_ADMIN_API_VERSION}

Available in your code:
${SHOPIFY_TYPES}

Your code must be an async arrow function that returns the result.

Example query:
async () => {
  return shopify.query({
    query: \`query Products($first: Int!) {
      products(first: $first) {
        nodes {
          id
          title
        }
      }
    }\`,
    variables: { first: 5 }
  })
}

Example mutation:
async () => {
  return shopify.mutation({
    mutation: \`mutation ProductCreate($product: ProductCreateInput) {
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
    }\`,
    variables: {
      product: { title: "New product" }
    }
  })
}`,
      inputSchema: {
        code: z.string().describe('JavaScript async arrow function to execute')
      }
    },
    async ({ code }) => {
      try {
        const result = await executeCode(code)
        return { content: [{ type: 'text', text: truncateResponse(result) }] }
      } catch (error) {
        return {
          content: [{ type: 'text', text: `Error: ${formatError(error)}` }],
          isError: true
        }
      }
    }
  )

  return server
}
