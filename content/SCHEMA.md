# Study Abroad and Immigration Wiki Schema

## Domain

Jurisdiction-specific, time-sensitive information about studying abroad and immigration. The wiki records research, not legal advice.

## Structure

- `raw/`: immutable source records and permitted source material
- `entities/`: governments, institutions, programs, and other named entities
- `concepts/`: policies, pathways, rights, duties, and processes
- `comparisons/`: sourced cross-jurisdiction or cross-program analyses
- `queries/`: substantial filed research answers
- `_meta/`: editorial guidance and templates

## Required research-page frontmatter

`title`, `created`, `updated`, `type`, `tags`, `sources`, and `publish`.

Backbone and `_meta/` files are documentation and do not require frontmatter.

Types: `entity`, `concept`, `comparison`, `query`, `source`.

## Core rules

- Use lowercase hyphenated filenames and `[[wikilinks]]`.
- Add every research page to `index.md` and every action to `log.md`.
- Prefer official governments, statutes, embassies, regulators, and universities.
- For consequential claims, record jurisdiction, applicable date, access date, source, and limitations.
- Separate sourced facts from interpretation; label uncertainty and confidence.
- Preserve contradictions instead of silently resolving them.
- Treat `raw/` as immutable after ingestion; corrections belong in research pages.
- Default unclear copyright status to `redistribution: link-summary-only`.
- Publication is opt-in: use `publish: true` only after explicit user approval; otherwise use `false`.
- Never present wiki content as individualized legal advice.

## Tags

`study-abroad`, `immigration`, `visa`, `admissions`, `tuition`, `funding`, `scholarship`, `work-rights`, `residency`, `citizenship`, `compliance`, `policy`, `procedure`, `institution`, `government`, `jurisdiction`, `comparison`, `timeline`.

Detailed rules and templates: [[_meta/editorial-guide]], [[_meta/research-page-template]], and [[_meta/source-record-template]].
