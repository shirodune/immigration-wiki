/**
 * Strict Explicit Publish — Quartz v5 filter plugin.
 *
 * Publication is opt-in. A page is published ONLY when its frontmatter `publish`
 * field is the YAML Boolean `true`. Every other value keeps the page private:
 *
 *   - missing / undefined / null
 *   - the Boolean `false`
 *   - the *strings* "true", "True", "yes", "on", "1" (quoted in YAML)
 *   - numbers, arrays, objects
 *
 * This is intentionally stricter than the community `@quartz-community/explicit-publish`
 * plugin, which also treats the string "true" as publishable. See AGENTS.md
 * ("Publication policy"): publication is opt-in via the YAML Boolean `publish: true`,
 * and "Quoted strings, missing values, false values, and malformed frontmatter must
 * remain unpublished."
 *
 * The `publication verifier` (scripts/verify-publication.mjs) re-derives this same
 * predicate directly from the raw source YAML and fails the build if the generated
 * output ever disagrees, so the filter and the verifier are cross-checks of each other.
 */

/**
 * The single source of truth for the publication predicate.
 *
 * Uses a `typeof` guard in addition to the identity check so that a hypothetical
 * upstream transformer that coerced a quoted "true" into some truthy non-Boolean
 * could never slip a page through: only a genuine JS `boolean` whose value is
 * `true` is accepted.
 *
 * @param {unknown} frontmatter parsed frontmatter object (or undefined)
 * @returns {boolean}
 */
export function isStrictlyPublished(frontmatter) {
  if (frontmatter === null || typeof frontmatter !== "object") {
    return false
  }
  const value = /** @type {Record<string, unknown>} */ (frontmatter).publish
  return typeof value === "boolean" && value === true
}

/**
 * Quartz filter factory. Returns a filter-plugin instance with `shouldPublish`.
 */
export const StrictExplicitPublish = () => ({
  name: "StrictExplicitPublish",
  shouldPublish(_ctx, content) {
    const vfile = content?.[1]
    return isStrictlyPublished(vfile?.data?.frontmatter)
  },
})

// Static marker so the loader can classify this plugin without instantiating it.
StrictExplicitPublish.quartzCategory = "filter"

export default StrictExplicitPublish
