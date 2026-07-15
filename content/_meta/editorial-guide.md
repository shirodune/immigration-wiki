# Editorial Guide

## Purpose and boundaries

This wiki supports research and comparison. It does not provide individualized legal advice. Immigration and study-abroad rules depend on jurisdiction, status, facts, and time; readers should verify consequential decisions with the responsible authority or a qualified adviser.

## Source hierarchy

Prefer sources in this order:

1. Statutes, regulations, official gazettes, and binding government instruments
2. Official immigration, education, foreign-affairs, embassy, and regulator pages
3. Official university pages for institution-specific admissions, tuition, and enrollment rules
4. Official operational manuals, forms, and policy guidance
5. High-quality secondary sources used only for context or discovery

A university page is authoritative for its own program, but not automatically for national immigration law. An embassy page may simplify rules and can lag the controlling statute or central immigration authority.

## Source records and copyright

Create one source record in `raw/` for every ingested source. Record the original URL, publisher, source type, jurisdiction, applicable date, access date, redistribution status, and limitations.

Allowed `redistribution` values:

- `public-domain`: rights permit republication
- `licensed-copy`: a recorded license permits the stored copy
- `link-summary-only`: retain metadata, original link, citations, an original summary, limitations, and only brief attributed quotations

Unknown or unclear rights always use `link-summary-only`. Do not store a full source body unless redistribution rights are recorded and permit it. Once captured, raw material is immutable; document later corrections or source drift in a new record or research page.

## Consequential-claim protocol

A consequential claim can affect eligibility, legal status, deadlines, cost, travel, work rights, residence, or compliance. For each such claim, include:

- **Evidence:** what the source explicitly states
- **Jurisdiction:** country and, where relevant, province/state, consular post, or institution
- **Applicable date:** effective date or period covered; use `not stated` if the source does not say
- **Accessed:** the date the source was checked
- **Source:** a citation and link to its source record
- **Limitations:** scope, exceptions, ambiguity, non-binding status, or missing details
- **Confidence:** `high`, `medium`, or `low`, based on authority, directness, currency, and corroboration

Use paragraph-level provenance markers such as `^[raw/articles/source-file.md]` when a page synthesizes multiple sources.

## Evidence, interpretation, and uncertainty

Keep sourced facts under **Evidence**. Put deductions, comparisons, and practical implications under **Interpretation** and label them as analysis. Never turn silence in a source into a factual rule. Mark unresolved conflicts with `contested: true` and list related pages in `contradictions`.

For conflicting sources:

1. Compare jurisdiction, authority, publication/effective dates, and intended audience.
2. Preserve both statements with citations if the conflict remains.
3. Explain any interpretation separately.
4. Lower confidence and flag the issue for review.

## Time sensitivity

Record both the source's applicable date and the access date. `updated` means the wiki page changed; it does not prove the underlying rule is still current. Re-check sources before answering a consequential query, and prominently label historical or superseded material.

## Page maintenance

- Create a page when a topic is central to an authoritative source or supported by at least two sources.
- Use at least two meaningful wikilinks where suitable; do not invent links merely to meet a quota.
- Add pages to `index.md`, update its count/date, and append an entry to `log.md`.
- Split pages that become difficult to scan, normally around 200 lines.
- Do not silently overwrite older rules; retain dated context or archive superseded pages.

## Publication gate

New files remain private with `publish: false`. Source ingestion, public publication, and commit/push are separate approval gates. Set `publish: true` only after explicit user approval and only after checking copyright, privacy, source links, jurisdiction, currency, limitations, and the legal-information disclaimer.
