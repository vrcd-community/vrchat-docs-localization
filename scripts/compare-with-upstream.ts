import { glob, readFile, rm, mkdir, readdir } from "fs/promises";
import { existsSync } from "fs";
import { tmpdir } from 'os'

import path from 'path'
import matter from "gray-matter"
import { SimpleGit, simpleGit } from "simple-git"
import clc from 'cli-color'
import * as core from '@actions/core'
import { SummaryTableCell, SummaryTableRow } from "@actions/core/lib/summary.js";
import { env } from "process";

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

  async function compareDocsFile(docsFilePathInput: string, upstreamFilePath: string, upstreamFileRelativePath: string): Promise<DocItem> {
    const latestUpstreamCommit = await getFileLatestCommit(git, upstreamFilePath)

    const docsFilePath = await fileExistsCaseInsensitive(docsFilePathInput)
    if (!docsFilePath) {
      console.warn(logFormat(`${clc.bold.red('[Not Found]')} ${clc.cyan('%s')}`), docsFilePathInput)

      return {
        status: 'not-found',
        upstreamPath: upstreamFileRelativePath,
        path: docsFilePathInput,
        latestUpstreamCommit
      }
    }

    const upstreamCommit = await getDocUpstreamCommit(docsFilePath)

    if (!upstreamCommit) {
      console.warn(logFormat(`${clc.bold.bgRed('[No Data]')} ${clc.cyan('%s')}: upstreamCommit not found`), docsFilePath)

      return {
        status: 'no-data',
        upstreamPath: upstreamFileRelativePath,
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
        upstreamPath: upstreamFileRelativePath,
        latestUpstreamCommit,
        currentUpstreamCommit: upstreamCommit,
      }
    }

    console.log(logFormat(`${clc.bold.green('[Up to Dated]')} ${clc.cyan('%s')}`), docsFilePath)

    return {
      status: 'up-to-date',
      path: docsFilePath,
      upstreamPath: upstreamFileRelativePath,
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

    docResults.push(await compareDocsFile(docsFilePath, upstreamFilePath, upstreamFilePath.replace(gitBaseDir, '')))
  }

  const upstreamDocsFilesLowerCase = upstreamDocsFiles.map(file => file.toLowerCase())
  for (const docsFilePath of docsFiles) {
    const upstreamFilePath = path.join(upstreamRoot, docsFilePath.replace(docsRootPath, ''))

    if (upstreamDocsFilesLowerCase.includes(upstreamFilePath.toLowerCase())) {
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

const headSha = await getHeadSha()

function statusToBadge(status: DocItemStatus) {
  switch (status) {
    case 'up-to-date':
      return '<img alt="Up To Dated" src="https://img.shields.io/badge/up%20to%20dated-%235d9140?style=for-the-badge&logo=checkmarx&logoColor=%23fff">'
    case 'outdated':
      return '<img alt="Outdated" src="https://img.shields.io/badge/outdated-%23eeaf43?style=for-the-badge">'
    case 'not-found':
      return '<img alt="Not Found" src="https://img.shields.io/badge/not%20found-%23b61c35?style=for-the-badge">'
    case 'no-data':
      return '<img alt="No Data" src="https://img.shields.io/badge/no%20data-%23fd7975?style=for-the-badge">'
    case 'deleted-or-moved':
      return '<img alt="Deleted or Moved" src="https://img.shields.io/badge/deleted%20or%20moved-%236c2225?style=for-the-badge">'
    default:
      return status
  }
}

function getGithubLink(docPath: string, headSha: string, type: 'blob' | 'tree' = 'blob', repo: 'current' | string = 'current') {
  const githubRepository = repo ?? (env['GITHUB_REPOSITORY'] ?? 'vrcd-community/vrchat-docs-localization')
  const githubServerUrl = env['GITHUB_SERVER_URL'] ?? 'https://github.com'

  return new URL(path.posix.join('/', githubRepository, type, headSha, docPath), githubServerUrl).href
}

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

  const { upstreamRepo } = options[docsPath]

  tableItems.push(...docItems.map(item => [
    {
      data: statusToBadge(item.status)
    },
    { data: `<code><a href="${getGithubLink(item.path, headSha)}">${item.path}</a></code>` },
    { data: item.upstreamPath ? `<code><a href="${getGithubLink(item.upstreamPath, item.latestUpstreamCommit ?? 'main', 'blob', upstreamRepo)}">${item.latestUpstreamCommit}</a></code>` : '<code>none</code>' },
    { data: item.currentUpstreamCommit ? `<code><a href="${getGithubLink('/', item.currentUpstreamCommit, 'blob', upstreamRepo)}">${item.currentUpstreamCommit}</a></code>` : '<code>none</code>' },
    { data: item.latestUpstreamCommit ? `<code><a href="${getGithubLink('/', item.latestUpstreamCommit, 'blob', upstreamRepo)}">${item.latestUpstreamCommit}]</a></code>` : 'none' }
  ] as SummaryTableCell[]))

  core.summary.addHeading(docsPath, 2)
  core.summary.addTable(tableItems)
}

core.summary.write()

await rm(tempDir, { recursive: true, force: true })

async function fileExistsCaseInsensitive(filePath: string): Promise<string | undefined> {
  try {
    const dirPath = path.dirname(filePath);
    const fileName = path.basename(filePath).toLowerCase();
    const files = (await readdir(dirPath)).map(file => file.toLowerCase());
    return files.includes(fileName) ? path.join(dirPath, files[files.indexOf(fileName)]) : undefined;
  } catch {
    return undefined;
  }
}

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

async function getHeadSha() {
  const git = simpleGit()
  return await git.revparse(['HEAD'])
}

interface SyncOptions {
  upstream: string
  upstreamRepo: string
  root?: string
  fixedCommit?: string
  ignoreFiles?: string[]
}

interface DocItem {
  status: DocItemStatus
  path: string
  upstreamPath: string
  currentUpstreamCommit?: string
  latestUpstreamCommit?: string
}

type DocItemStatus = 'up-to-date' | 'outdated' | 'not-found' | 'no-data' | 'deleted-or-moved'