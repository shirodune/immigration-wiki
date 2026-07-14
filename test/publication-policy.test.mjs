import assert from "node:assert/strict"
import test from "node:test"
import {
  classifyMarkdown,
  isAllowedContentFile,
  isIgnoredPrivatePath,
  isStrictlyPublished,
} from "../scripts/publication-policy.mjs"

const cases = [
  ["Boolean true", { publish: true }, true],
  ["Boolean false", { publish: false }, false],
  ["string true", { publish: "true" }, false],
  ["capitalized string", { publish: "True" }, false],
  ["number", { publish: 1 }, false],
  ["missing", {}, false],
  ["null frontmatter", null, false],
]

for (const [name, frontmatter, expected] of cases) {
  test(`strict predicate: ${name}`, () => assert.equal(isStrictlyPublished(frontmatter), expected))
}

test("YAML Boolean true publishes", () =>
  assert.equal(classifyMarkdown("---\npublish: true\n---\nPublic").published, true))
test("quoted true stays private", () =>
  assert.equal(classifyMarkdown('---\npublish: "true"\n---\nPrivate').published, false))
test("missing frontmatter stays private", () =>
  assert.equal(classifyMarkdown("Private").published, false))
test("malformed frontmatter never publishes", () => {
  const result = classifyMarkdown("---\npublish: [true\n---\nPrivate")
  assert.equal(result.published, false)
  assert.equal(result.malformed, true)
})
test("zero approved pages is valid policy state", () => {
  const pages = [
    "No frontmatter",
    "---\npublish: false\n---\nPrivate",
    '---\npublish: "true"\n---\nPrivate',
  ]
  assert.equal(pages.filter((page) => classifyMarkdown(page).published).length, 0)
})
test("private and meta paths are recognized", () => {
  assert.equal(isIgnoredPrivatePath("private/a.md"), true)
  assert.equal(isIgnoredPrivatePath("_meta/a.md"), true)
  assert.equal(isIgnoredPrivatePath("concepts/a.md"), false)
})
test("non-Markdown assets are forbidden in content", () => {
  assert.equal(isAllowedContentFile("concepts/page.md"), true)
  assert.equal(isAllowedContentFile(".gitkeep"), true)
  assert.equal(isAllowedContentFile("concepts/private.pdf"), false)
  assert.equal(isAllowedContentFile("images/private.png"), false)
})
