import { defineLoader } from 'vitepress'

import { readFile } from 'node:fs/promises'
import path from 'node:path'

export type SyncStatusData = Record<string, SyncStatus>
export interface SyncStatus {
  upstreamRepo: string
  root: string
}

declare const data: SyncStatusData
export { data }

export default defineLoader({
  watch: ['./docs/sync.json'],
  async load(): Promise<SyncStatusData> {
    const syncOptionsJson = await readFile('./docs/sync.json', 'utf-8')
    const syncOptions = JSON.parse(syncOptionsJson) as SyncStatusData

    const result: SyncStatusData = {}
    for (const key in syncOptions) {
      const syncOption = syncOptions[key]
      const newKey = path.parse(key).name

      result[newKey] = {
        upstreamRepo: syncOption.upstreamRepo,
        root: syncOption.root ||'/'
      }
    }

    return result
  }
})
