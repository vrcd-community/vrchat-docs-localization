import { glob, readFile, rm, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { tmpdir } from 'os'

import path from 'path'
import matter from "gray-matter"
import { SimpleGit, simpleGit } from "simple-git"
import clc from 'cli-color'
import * as core from '@actions/core'
import { SummaryTableCell, SummaryTableRow } from "@actions/core/lib/summary.js";

const optionsJson = await readFile('./docs/sync.json', 'utf-8')
const options = JSON.parse(optionsJson) as Record<string, SyncOptions>

const tempDir = path.join(tmpdir(), getUniqueId())

const result: Record<string, DocItem[]> = {}

for (const [docsPath, syncOptions] of Object.entries(options)) {
  core.startGroup(docsPath)

  function logFormat(message: string) {
    return `[${docsPath}] ${message}`
  }

  const gitBaseDir = path.join(tempDir, getUniqueId())
  await mkdir(gitBaseDir, { recursive: true })

  const git = simpleGit(gitBaseDir)

  console.log(logFormat(`cloning ${clc.magenta('%s')} to ${clc.magenta('%s')}`), syncOptions.upstream, gitBaseDir)

  if (syncOptions.fixedCommit) {
    await git.init()
    await git.addRemote('origin', syncOptions.upstream)
    await git.fetch('origin', syncOptions.fixedCommit)
    await git.checkout(syncOptions.fixedCommit)
  } else {
    await git.clone(syncOptions.upstream, gitBaseDir, ['--single-branch']);
  }

  console.log(logFormat(`cloned ${clc.magenta('%s')}`), syncOptions.upstream)

  const docsRootPath = path.normalize(docsPath)
  const ignoreFiles = (syncOptions.ignoreFiles ?? []).map(file => path.join(docsRootPath, file))
  const docsFiles = (await Array.fromAsync(glob(`${docsRootPath}/**/*.md`))).filter(file => !ignoreFiles.includes(file));

  const upstreamRoot = path.join(gitBaseDir, syncOptions.root ?? '/')
  const upstreamDocsFiles = await Array.fromAsync(glob(`${upstreamRoot}/**/*.md`));

  async function compareDocsFile(docsFilePath: string, upstreamFilePath: string): Promise<DocItem> {
    const latestUpstreamCommit = await getFileLatestCommit(git, upstreamFilePath)

    if (!existsSync(docsFilePath)) {
      console.warn(logFormat(`${clc.bold.red('[Not Found]')} ${clc.cyan('%s')}`), docsFilePath)

      return {
        status: 'not-found',
        upstreamPath: upstreamFilePath,
        path: docsFilePath,
        latestUpstreamCommit
      }
    }

    const upstreamCommit = await getDocUpstreamCommit(docsFilePath)

    if (!upstreamCommit) {
      console.warn(logFormat(`${clc.bold.bgRed('[No Data]')} ${clc.cyan('%s')}: upstreamCommit not found`), docsFilePath)

      return {
        status: 'no-data',
        upstreamPath: upstreamFilePath,
        path: docsFilePath,
        latestUpstreamCommit,
      }
    }

    if (upstreamCommit !== latestUpstreamCommit) {
      console.warn(
        logFormat(`${clc.bold.yellow('[Outdated]')} ${clc.cyan('%s')} - current: ${clc.underline.magenta('%s')} latest: ${clc.underline.magenta('%s')}`),
        docsFilePath,
        upstreamCommit,
        latestUpstreamCommit
      )

      return {
        status: 'outdated',
        path: docsFilePath,
        upstreamPath: upstreamFilePath,
        latestUpstreamCommit,
        currentUpstreamCommit: upstreamCommit,
      }
    }

    console.log(logFormat(`${clc.bold.green('[Up to Dated]')} ${clc.cyan('%s')}`), docsFilePath)

    return {
      status: 'up-to-date',
      path: docsFilePath,
      upstreamPath: upstreamFilePath,
      currentUpstreamCommit: upstreamCommit,
      latestUpstreamCommit,
    }
  }

  const docResults: DocItem[] = []

  for (const upstreamFilePath of upstreamDocsFiles) {
    const docsFilePath = path.join(docsRootPath, upstreamFilePath.replace(upstreamRoot, ''))

    if (ignoreFiles.includes(upstreamFilePath)) {
      continue
    }

    docResults.push(await compareDocsFile(docsFilePath, upstreamFilePath))
  }

  for (const docsFilePath of docsFiles) {
    const upstreamFilePath = path.join(upstreamRoot, docsFilePath.replace(docsRootPath, ''))

    if (upstreamDocsFiles.includes(upstreamFilePath)) {
      continue
    }

    const upstreamCommit = await getDocUpstreamCommit(docsFilePath)

    console.warn(logFormat(`${clc.bold.bgRed('[Deleted or Moved]')} ${clc.cyan('%s')}`), docsFilePath)

    docResults.push({
      status: 'deleted-or-moved',
      path: docsFilePath,
      upstreamPath: upstreamFilePath,
      currentUpstreamCommit: upstreamCommit,
    })
  }

  result[docsPath] = docResults

  core.endGroup()
}

core.summary.addHeading('Sync Summary')

for (const [docsPath, docItems] of Object.entries(result)) {
  const tableItems: SummaryTableRow[] = [
    [
      { data: 'Status', header: true },
      { data: 'Path', header: true },
      { data: 'Upstream Path', header: true },
      { data: 'Current Upstream Commit', header: true },
      { data: 'Latest Upstream Commit', header: true }
    ]
  ]

  tableItems.push(...docItems.map(item => [
    { data: item.status },
    { data: item.path },
    { data: item.upstreamPath },
    { data: item.currentUpstreamCommit },
    { data: item.latestUpstreamCommit }
  ] as SummaryTableCell[]))

  core.summary.addHeading(docsPath, 2)
  core.summary.addTable(tableItems)
}

core.summary.write()

await rm(tempDir, { recursive: true, force: true })

async function getDocUpstreamCommit(filePath: string): Promise<string | undefined> {
  const docContent = await readFile(filePath, 'utf-8')
  const docFrontmatter = matter(docContent)
  const upstreamCommit = docFrontmatter.data.upstreamCommit

  return typeof upstreamCommit === 'string' ? upstreamCommit : undefined
}

async function getFileLatestCommit(git: SimpleGit, file: string) {
  const gitLog = await git.log({ file, maxCount: 1 })

  return gitLog.latest?.hash
}

function getUniqueId() {
  return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}

interface SyncOptions {
  upstream: string
  root?: string
  fixedCommit?: string
  ignoreFiles?: string[]
}

interface DocItem {
  status: 'up-to-date' | 'outdated' | 'not-found' | 'no-data' | 'deleted-or-moved'
  path: string
  upstreamPath: string
  currentUpstreamCommit?: string
  latestUpstreamCommit?: string
}
