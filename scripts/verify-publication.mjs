#!/usr/bin/env node

import { execFileSync } from "node:child_process"
import { existsSync, readFileSync, readdirSync, rmSync, statSync } from "node:fs"
import { dirname, extname, join, relative, resolve, sep } from "node:path"
import { fileURLToPath } from "node:url"
import {
  classifyMarkdown,
  isAllowedContentFile,
  isIgnoredPrivatePath,
} from "./publication-policy.mjs"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const contentRoot = join(root, "content")
const outputRoot = join(root, "public")
const failures = []

function walk(directory) {
  if (!existsSync(directory)) return []
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? walk(path) : [path]
  })
}

function slash(path) {
  return path.split(sep).join("/")
}

function outputCandidates(markdownPath) {
  const relativePath = slash(relative(contentRoot, markdownPath)).replace(/\.md$/i, "")
  if (relativePath === "index") return [join(outputRoot, "index.html")]
  if (relativePath.endsWith("/index")) {
    const folder = relativePath.slice(0, -"/index".length)
    return [join(outputRoot, folder, "index.html"), join(outputRoot, `${folder}.html`)]
  }
  return [join(outputRoot, `${relativePath}.html`), join(outputRoot, relativePath, "index.html")]
}

if (!existsSync(contentRoot)) failures.push("content/ does not exist")

const contentFiles = walk(contentRoot)
const forbiddenAssets = contentFiles.filter(
  (path) => !isAllowedContentFile(slash(relative(contentRoot, path))),
)
for (const asset of forbiddenAssets) {
  failures.push(
    `non-Markdown asset in content/ is forbidden because Quartz can emit it without page filtering: ${slash(relative(root, asset))}`,
  )
}

const pages = []
for (const path of contentFiles.filter((file) => extname(file).toLowerCase() === ".md")) {
  const rel = slash(relative(contentRoot, path))
  const classified = classifyMarkdown(readFileSync(path, "utf8"), rel)
  if (classified.malformed) failures.push(classified.error ?? `${rel}: malformed frontmatter`)
  if (classified.published && isIgnoredPrivatePath(rel))
    failures.push(`publish:true is forbidden under an ignored private path: content/${rel}`)
  pages.push({ path, rel, ...classified })
}

if (failures.length > 0) {
  console.error("Publication verification failed before build:")
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

rmSync(outputRoot, { recursive: true, force: true })
execFileSync("npx", ["quartz", "build"], { cwd: root, stdio: "inherit" })

const publicFiles = walk(outputRoot)
for (const page of pages) {
  const emitted = outputCandidates(page.path).some(existsSync)
  if (page.published && !isIgnoredPrivatePath(page.rel) && !emitted)
    failures.push(`approved page was not emitted: content/${page.rel}`)
  if ((!page.published || isIgnoredPrivatePath(page.rel)) && emitted)
    failures.push(`unapproved page was emitted: content/${page.rel}`)
}

for (const path of publicFiles) {
  const rel = slash(relative(outputRoot, path))
  if (isIgnoredPrivatePath(rel)) failures.push(`ignored private path was emitted: public/${rel}`)
}

const searchableOutput = publicFiles.filter(
  (path) =>
    statSync(path).isFile() &&
    [".html", ".json", ".xml", ".js", ".txt"].includes(extname(path).toLowerCase()),
)
for (const page of pages.filter((item) => !item.published || isIgnoredPrivatePath(item.rel))) {
  const normalizedBody = page.body.replace(/\s+/g, " ").trim()
  const marker = normalizedBody.length >= 48 ? normalizedBody.slice(0, 96) : null
  if (!marker) continue
  for (const output of searchableOutput) {
    const text = readFileSync(output, "utf8").replace(/\s+/g, " ")
    if (text.includes(marker))
      failures.push(
        `private page content leaked into ${slash(relative(root, output))}: content/${page.rel}`,
      )
  }
}

if (failures.length > 0) {
  console.error("Publication verification FAILED:")
  for (const failure of [...new Set(failures)]) console.error(`- ${failure}`)
  process.exit(1)
}

const approved = pages.filter((page) => page.published && !isIgnoredPrivatePath(page.rel))
console.log("Publication verification passed.")
console.log(`- Approved Markdown pages emitted: ${approved.length}`)
console.log(`- Private/ignored Markdown pages excluded: ${pages.length - approved.length}`)
console.log(`- Forbidden content assets: ${forbiddenAssets.length}`)
console.log(`- Generated public files audited: ${publicFiles.length}`)
