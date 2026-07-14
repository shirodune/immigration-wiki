# Immigration Wiki — Agent Responsibilities

## Shared objective

Maintain a provenance-first Study Abroad and Immigration wiki and publish approved material with Quartz.

## Infrastructure / publishing session

Owns files outside `content/`, including:

- Quartz installation and configuration
- package scripts and dependency locks
- publication/privacy verifier and tests
- GitHub Actions and deployment configuration
- repository structure, build troubleshooting, and release checks

Do not ingest or synthesize research sources in this role.

## Wiki-maintenance session

Owns `content/`, including:

- `content/SCHEMA.md`, `content/index.md`, and `content/log.md`
- source records, concepts, entities, comparisons, and filed queries
- provenance, confidence, contradictions, and cross-references
- `publish` decisions after user approval

Do not modify Quartz, package, CI, deployment, or verifier files in this role. Request infrastructure changes from the publishing session.

## Public-source policy

- Public source records may contain metadata, original links, citations, original summaries, limitations, and brief attributed quotations.
- Full source bodies may be public only when redistribution rights are recorded and permit republication.
- Allowed `redistribution` values: `public-domain`, `licensed-copy`, `link-summary-only`.
- Unknown or unclear licenses default to `link-summary-only`.

## Publication policy

- Publication is explicit opt-in using the YAML Boolean `publish: true`.
- Quoted strings, missing values, false values, and malformed frontmatter must remain unpublished.
- Deployment must run the publication verifier and deploy only freshly generated output.
- Never create or push a remote without user approval.

## Coordination

- Avoid simultaneous writes to the same files.
- Before wiki work, read `content/SCHEMA.md`, `content/index.md`, and recent `content/log.md`.
- Before infrastructure work, inspect Git status and preserve uncommitted content changes.
- Every infrastructure change must pass formatting, tests, build, and publication verification before being reported complete.
