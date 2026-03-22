const ASSET_BASE_URL = 'https://assets.internal'

const textCache = new Map<string, Promise<string>>()
const jsonCache = new Map<string, Promise<unknown>>()

function normalizeAssetPath(assetPath: string): string {
  const trimmed = assetPath.replace(/^\/+/, '')
  if (!trimmed) {
    throw new Error('Asset path is required')
  }

  const segments = trimmed.split('/')
  for (const segment of segments) {
    if (!segment || segment === '.' || segment === '..') {
      throw new Error(`Invalid asset path: ${assetPath}`)
    }
  }

  return trimmed
}

async function fetchAsset(env: Env, assetPath: string): Promise<Response> {
  const normalizedPath = normalizeAssetPath(assetPath)
  const request = new Request(`${ASSET_BASE_URL}/${normalizedPath}`)
  const response = await env.ASSETS.fetch(request)

  if (!response.ok) {
    throw new Error(`Asset not found: ${normalizedPath}`)
  }

  return response
}

export async function readTextAsset(env: Env, assetPath: string): Promise<string> {
  const normalizedPath = normalizeAssetPath(assetPath)
  let promise = textCache.get(normalizedPath)
  if (!promise) {
    promise = fetchAsset(env, normalizedPath).then((response) => response.text())
    textCache.set(normalizedPath, promise)
  }
  return promise
}

export async function readJsonAsset<T>(env: Env, assetPath: string): Promise<T> {
  const normalizedPath = normalizeAssetPath(assetPath)
  let promise = jsonCache.get(normalizedPath)
  if (!promise) {
    promise = readTextAsset(env, normalizedPath).then((text) => JSON.parse(text))
    jsonCache.set(normalizedPath, promise)
  }
  return (await promise) as T
}

export function resolveAssetPath(basePath: string, relativePath: string): string {
  const base = normalizeAssetPath(basePath)
  const url = new URL(relativePath, `${ASSET_BASE_URL}/${base}`)
  return normalizeAssetPath(url.pathname)
}

export function resetAssetCache(): void {
  textCache.clear()
  jsonCache.clear()
}
