# Source Record Template

Use for metadata and an original summary. Do not paste a full source body unless recorded rights permit republication.

```yaml
---
title: "Source title"
type: source
created: YYYY-MM-DD
updated: YYYY-MM-DD
tags: [government, immigration]
sources: []
publish: false
source_url: "https://example.gov/source"
publisher: "Issuing authority"
source_type: statute | government | embassy | regulator | university | other
jurisdiction: [country, region-or-institution]
applicable_date: "YYYY-MM-DD, date range, or not stated"
accessed: YYYY-MM-DD
redistribution: public-domain | licensed-copy | link-summary-only
license_basis: "URL or concise rights note; unknown if unclear"
sha256: "Body hash when a permitted source body is stored; otherwise omit"
---
```

```markdown
# Source title

## Citation

Full citation and original URL.

## Authority and scope

What makes the issuer authoritative, the jurisdictions and audiences covered, and whether the text is binding, operational guidance, or institution-specific policy.

## Original summary

A concise summary written for this wiki. Distinguish explicit statements from interpretation.

## Consequential claims supported

- Claim, section/page anchor, jurisdiction, applicable date, and exceptions.

## Limitations

Missing effective dates, translation issues, simplified guidance, exceptions, archived status, access barriers, or conflicts with higher-authority sources.

## Rights and preservation note

Why the selected redistribution value applies and what, if anything, was retained beyond metadata and summary.
```
