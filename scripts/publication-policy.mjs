import { parseDocument } from "yaml"

export const IGNORED_PRIVATE_DIRS = new Set(["_meta", "private", "templates", ".obsidian"])

export function parseFrontmatter(source, filename = "<memory>") {
  const match = source.match(/^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/)
  if (!match) return { frontmatter: undefined, body: source, malformed: false }

  const document = parseDocument(match[1])
  if (document.errors.length > 0) {
    const detail = document.errors.map((error) => error.message).join("; ")
    return {
      frontmatter: undefined,
      body: source.slice(match[0].length),
      malformed: true,
      error: `${filename}: ${detail}`,
    }
  }

  const value = document.toJS()
  const frontmatter =
    value && typeof value === "object" && !Array.isArray(value) ? value : undefined
  return { frontmatter, body: source.slice(match[0].length), malformed: false }
}

export function isStrictlyPublished(frontmatter) {
  return (
    frontmatter !== null &&
    typeof frontmatter === "object" &&
    !Array.isArray(frontmatter) &&
    frontmatter.publish === true
  )
}

export function classifyMarkdown(source, filename = "<memory>") {
  const parsed = parseFrontmatter(source, filename)
  return { ...parsed, published: !parsed.malformed && isStrictlyPublished(parsed.frontmatter) }
}

export function isIgnoredPrivatePath(relativePath) {
  return relativePath.split("/").some((segment) => IGNORED_PRIVATE_DIRS.has(segment))
}

export function isAllowedContentFile(relativePath) {
  return relativePath.endsWith(".md") || relativePath.endsWith(".gitkeep")
}
