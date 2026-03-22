import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { build } from 'esbuild'
import {
  buildSearchAssets,
  GENERATED_CATALOG_ASSET_PATH,
  GENERATED_ORAMA_RUNTIME_ASSET_PATH,
  GENERATED_ORAMA_SNAPSHOT_ASSET_PATH,
  GENERATED_SEARCH_RECORDS_ASSET_PATH,
  type SearchIndexManifests
} from '../src/search-index.ts'

const repoRoot = process.cwd()
const assetsRoot = path.join(repoRoot, 'assets')
const skillRoot = path.join(assetsRoot, 'shopify-graphql')
const generatedRoot = path.join(repoRoot, '.generated')

async function readJsonFile<T>(filePath: string): Promise<T> {
  return JSON.parse(await readFile(filePath, 'utf8')) as T
}

async function main(): Promise<void> {
  const manifests: SearchIndexManifests = {
    domains: await readJsonFile(path.join(skillRoot, 'references/_domains.json')),
    queries: await readJsonFile(path.join(skillRoot, 'queries/_index.json')),
    mutations: await readJsonFile(path.join(skillRoot, 'mutations/_index.json')),
    objects: await readJsonFile(path.join(skillRoot, 'types/objects/_index.json')),
    inputs: await readJsonFile(path.join(skillRoot, 'types/inputs/_index.json')),
    enums: await readJsonFile(path.join(skillRoot, 'types/enums/_index.json')),
    interfaces: await readJsonFile(path.join(skillRoot, 'types/interfaces/_index.json')),
    unions: await readJsonFile(path.join(skillRoot, 'types/unions/_index.json'))
  }

  const searchAssets = await buildSearchAssets(manifests, async (docPath) => {
    const filePath = path.join(assetsRoot, docPath)
    return readFile(filePath, 'utf8')
  })

  const outputDir = path.join(assetsRoot, 'generated')
  await mkdir(outputDir, { recursive: true })
  await mkdir(generatedRoot, { recursive: true })

  await writeFile(
    path.join(assetsRoot, GENERATED_CATALOG_ASSET_PATH),
    `${JSON.stringify(searchAssets.catalog, null, 2)}\n`
  )
  await writeFile(
    path.join(assetsRoot, GENERATED_SEARCH_RECORDS_ASSET_PATH),
    `${JSON.stringify(searchAssets.searchRecords, null, 2)}\n`
  )
  await build({
    entryPoints: [path.join(repoRoot, 'src/search-worker-runtime.ts')],
    bundle: true,
    format: 'esm',
    platform: 'browser',
    target: 'es2022',
    outfile: path.join(assetsRoot, GENERATED_ORAMA_RUNTIME_ASSET_PATH),
    logLevel: 'silent'
  })
  await writeFile(
    path.join(generatedRoot, GENERATED_ORAMA_SNAPSHOT_ASSET_PATH.replace(/^generated\//, '')),
    `${JSON.stringify(searchAssets.oramaSnapshot, null, 2)}\n`
  )
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
