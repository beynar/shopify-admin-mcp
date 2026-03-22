import { readJsonAsset, readTextAsset } from './asset-loader'
import { hydrateSearchResult, loadCatalog } from './search-catalog'
import {
  GENERATED_ORAMA_RUNTIME_ASSET_PATH,
  GENERATED_SEARCH_RECORDS_ASSET_PATH,
  type SearchRecord
} from './search-index'

interface CodeExecutorEntrypoint {
  evaluate(): Promise<{ result: unknown; err?: string; stack?: string }>
}

interface SearchExecutorEntrypoint {
  evaluate(): Promise<{ result: unknown; err?: string; stack?: string }>
}

function escapeForModuleSource(code: string): string {
  return code.replaceAll('\\', '\\\\').replaceAll('`', '\\`').replaceAll('${', '\\${')
}

export function createCodeExecutor(env: Env, ctx: ExecutionContext) {
  const graphqlUrl = `https://${env.SHOPIFY_SHOP_DOMAIN}/admin/api/${env.SHOPIFY_ADMIN_API_VERSION}/graphql.json`

  return async (code: string): Promise<unknown> => {
    const workerId = `shopify-admin-${crypto.randomUUID()}`

    const embeddedCode = escapeForModuleSource(code)

    const worker = env.LOADER.get(workerId, () => ({
      compatibilityDate: '2026-01-12',
      globalOutbound: ctx.exports.GlobalOutbound({
        props: { accessToken: env.SHOPIFY_ADMIN_ACCESS_TOKEN }
      }),
      mainModule: 'worker.js',
      modules: {
        'worker.js': `
import { WorkerEntrypoint } from "cloudflare:workers";

const graphqlUrl = ${JSON.stringify(graphqlUrl)};

export default class CodeExecutor extends WorkerEntrypoint {
  async evaluate() {
    function normalizeErrors(payload) {
      if (Array.isArray(payload?.errors)) {
        return payload.errors;
      }

      if (typeof payload?.errors === "string") {
        return [{ message: payload.errors }];
      }

      if (payload?.errors && typeof payload.errors === "object") {
        return [{ message: JSON.stringify(payload.errors) }];
      }

      return [];
    }

    const shopify = {
      async graphql(options) {
        const { query, variables, operationName } = options;
        const response = await fetch(graphqlUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            query,
            variables,
            operationName
          })
        });

        const text = await response.text();
        let payload;
        try {
          payload = text ? JSON.parse(text) : {};
        } catch {
          throw new Error("Shopify Admin API returned a non-JSON response: " + text);
        }

        const errors = normalizeErrors(payload);
        const hasData = payload.data !== null && payload.data !== undefined;
        const normalized = {
          success: response.ok && errors.length === 0,
          status: response.status,
          data: payload.data,
          errors,
          extensions: payload.extensions
        };

        if (!response.ok && !hasData) {
          const message = errors.map((error) => error.message).filter(Boolean).join(", ") || text || ("HTTP " + response.status);
          throw new Error("Shopify Admin API error: " + message);
        }

        if (errors.length > 0 && !hasData) {
          throw new Error("GraphQL error: " + errors.map((error) => error.message).join(", "));
        }

        if (!response.ok && hasData) {
          normalized.success = false;
        }

        return normalized;
      },
      async query(options) {
        return this.graphql(options);
      },
      async mutation(options) {
        return this.graphql({
          query: options.mutation,
          variables: options.variables,
          operationName: options.operationName
        });
      }
    };

    try {
      const userFn = ${embeddedCode};
      const result = await userFn();
      return { result, err: undefined };
    } catch (err) {
      return { result: undefined, err: err.message, stack: err.stack };
    }
  }
}
        `
      }
    }))

    const entrypoint = worker.getEntrypoint() as unknown as CodeExecutorEntrypoint
    const response = await entrypoint.evaluate()

    if (response.err) {
      throw new Error(response.err)
    }

    return response.result
  }
}

export function createSearchExecutor(env: Env) {
  return async (code: string): Promise<unknown> => {
    const [catalog, searchRecords, runtimeModule] = await Promise.all([
      loadCatalog(env),
      readJsonAsset<SearchRecord[]>(env, GENERATED_SEARCH_RECORDS_ASSET_PATH),
      readTextAsset(env, GENERATED_ORAMA_RUNTIME_ASSET_PATH)
    ])
    const workerId = `shopify-search-${crypto.randomUUID()}`

    const embeddedCode = escapeForModuleSource(code)

    const worker = env.LOADER.get(workerId, () => ({
      compatibilityDate: '2026-01-12',
      globalOutbound: null,
      mainModule: 'worker.js',
      modules: {
        'orama-runtime.js': runtimeModule,
        'worker.js': `
import { WorkerEntrypoint } from "cloudflare:workers";
import { createCatalogRuntime } from "./orama-runtime.js";

const catalogData = ${JSON.stringify(catalog)};
const searchRecords = ${JSON.stringify(searchRecords)};
const catalog = await createCatalogRuntime(catalogData, searchRecords);

export default class SearchExecutor extends WorkerEntrypoint {
  async evaluate() {
    try {
      const userFn = ${embeddedCode};
      const result = await userFn();
      return { result, err: undefined };
    } catch (err) {
      return { result: undefined, err: err.message, stack: err.stack };
    }
  }
}
        `
      }
    }))

    const entrypoint = worker.getEntrypoint() as unknown as SearchExecutorEntrypoint
    const response = await entrypoint.evaluate()

    if (response.err) {
      throw new Error(response.err)
    }

    return hydrateSearchResult(env, response.result)
  }
}
