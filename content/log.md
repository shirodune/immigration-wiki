# Wiki Log

> Append-only record of wiki-maintenance actions.
> Format: `## [YYYY-MM-DD] action | subject`

## [2026-07-15] create | Wiki initialized

- Created the concise schema, index, activity log, editorial guidance, and templates.
- Created standard directories for raw sources, entities, concepts, comparisons, and filed queries.
- No sources were ingested and no pages were approved for publication.

## [2026-07-15] ingest | Canada, Australia, and New Zealand student-visa anchors

- Created `raw/articles/canada-ircc-study-permit.md` from directly reviewed IRCC guidance and page metadata.
- Created `raw/articles/australia-home-affairs-student-visa-subclass-500.md` as a limited record because direct retrieval was blocked; no unverified eligibility details were added.
- Created `raw/articles/new-zealand-immigration-fee-paying-student-visa.md` from directly reviewed Immigration New Zealand guidance.
- Classified all three records as `link-summary-only` and `publish: false`.
- Updated `index.md`; no synthesis pages were created.

## [2026-07-15] ingest | Eligibility, finances, and student work rights

- Files created:
  - `raw/articles/australia-financial-capacity-instrument-subclass-500.md`
  - `raw/articles/australia-study-australia-student-visa-application-tips.md`
  - `raw/articles/australia-study-australia-student-visa-subclass-500.md`
  - `raw/articles/canada-ircc-study-permit-eligibility.md`
  - `raw/articles/canada-ircc-study-permit-financial-support.md`
  - `raw/articles/canada-ircc-work-off-campus.md`
  - `raw/articles/new-zealand-student-fund-requirements.md`
  - `raw/articles/new-zealand-working-on-student-visa.md`
- Files updated: `index.md`, `log.md`.
- Added three directly reviewed IRCC records covering Canadian study-permit eligibility, proof of financial support, and off-campus work.
- Added two directly reviewed Immigration New Zealand records covering student funds and conditional work rights.
- Added two directly reviewed Study Australia records covering subclass 500 requirements, application evidence, conditions, fees, and work restrictions.
- Added the directly reviewed, in-force Australian subclass 500 financial-capacity legislative instrument.
- Kept all eight records `link-summary-only` and `publish: false`; no full source bodies were stored.
- Updated `index.md`; no synthesis pages were created.

## [2026-07-15] create | Three student-visa concepts and comparison

- Files created:
  - `concepts/australia-student-visa-subclass-500.md`
  - `concepts/canada-study-permit.md`
  - `concepts/new-zealand-fee-paying-student-visa.md`
  - `comparisons/canada-australia-new-zealand-student-visas.md`
- Files updated: `index.md`, `log.md`.
- Separated sourced evidence from interpretation and added claim-level provenance markers.
- Recorded jurisdiction, source currency, confidence, consequential-claim limitations, and the Australian Home Affairs access restriction.
- Cross-linked all four synthesis pages and kept each `publish: false`.

## [2026-07-17] ingest | New Zealand migration, police-certificate, and post-study updates

- Files created:
  - `raw/articles/new-zealand-inz-police-certificates-upfront-student-temporary-visas.md`
  - `raw/articles/new-zealand-inz-post-study-work-visa-options-2026.md`
  - `raw/articles/new-zealand-stats-nz-international-migration-december-2025.md`
- Files updated:
  - `concepts/new-zealand-fee-paying-student-visa.md`
  - `index.md`
  - `log.md`
- Recorded the police-certificate announcement as applicant-specific operational guidance without treating certificates as universally required.
- Recorded the announced graduate-work changes as future policy scheduled for 2026-11-16, not as options available on the 2026-07-17 access date.
- Kept the Stats NZ release separate from visa rules because its outcomes-based totals are not student-visa or visa-grant counts.
- Classified all three source records as `link-summary-only`; kept all created and updated research pages `publish: false`.

## [2026-07-17] publish | All research pages approved

- User approved all 18 research pages for publication: 14 source records and 4 synthesis pages.
- Set `publish: true` and recorded the publication-review date on:
  - `raw/articles/australia-financial-capacity-instrument-subclass-500.md`
  - `raw/articles/australia-home-affairs-student-visa-subclass-500.md`
  - `raw/articles/australia-study-australia-student-visa-application-tips.md`
  - `raw/articles/australia-study-australia-student-visa-subclass-500.md`
  - `raw/articles/canada-ircc-study-permit.md`
  - `raw/articles/canada-ircc-study-permit-eligibility.md`
  - `raw/articles/canada-ircc-study-permit-financial-support.md`
  - `raw/articles/canada-ircc-work-off-campus.md`
  - `raw/articles/new-zealand-immigration-fee-paying-student-visa.md`
  - `raw/articles/new-zealand-inz-police-certificates-upfront-student-temporary-visas.md`
  - `raw/articles/new-zealand-inz-post-study-work-visa-options-2026.md`
  - `raw/articles/new-zealand-stats-nz-international-migration-december-2025.md`
  - `raw/articles/new-zealand-student-fund-requirements.md`
  - `raw/articles/new-zealand-working-on-student-visa.md`
  - `concepts/australia-student-visa-subclass-500.md`
  - `concepts/canada-study-permit.md`
  - `concepts/new-zealand-fee-paying-student-visa.md`
  - `comparisons/canada-australia-new-zealand-student-visas.md`
- Updated `index.md` and `log.md`.
- Source records remain metadata, citations, original summaries, and limitations only; all use `redistribution: link-summary-only`.
