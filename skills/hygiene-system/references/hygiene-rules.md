# Hygiene Rules

Use these deterministic checks before model interpretation. Threshold values must come from the brand, campaign brief, or supplied operator rules.

## URL And Destination Checks

- Destination URL missing: mark `Critical`.
- Destination returns 4xx/5xx or cannot be reached in supplied evidence: mark `Critical`.
- Unexpected redirect, protocol downgrade, or destination mismatch: mark `Important` unless it blocks the page.
- Landing page not supplied for a live campaign: mark `Important`.

## UTM Checks

- Missing `utm_source`, `utm_medium`, or `utm_campaign`: mark `Important`.
- Inconsistent naming against supplied convention: mark `Important`.
- Missing `utm_content` or `utm_term`: mark `Monitor` unless the brand rule requires it.
- No UTM convention supplied: mark the convention `[To be supplied]` and avoid false precision.

## Tracking Checks

- Expected conversion event missing or unverified for live spend: mark `Critical`.
- Pixel, tag, CAPI, or GA4 status unknown: mark `Important`.
- Tracking recently changed with no validation evidence: mark `Important`.
- Performance anomaly with uncertain tracking: mark `Monitor` until data quality is confirmed.

## Spend And Conversion Checks

- Spend greater than supplied threshold with zero conversions over supplied date range: mark `Critical`.
- CPA, CAC, ROAS, CVR, or spend movement without source data: mark `[To be supplied]`.
- Sudden drop-off with confirmed tracking and enough data: mark `Important` or `Critical` based on supplied threshold.

## Launch Checks

- Missing destination, tracking, owner, approval, or claim proof for launch-critical asset: mark `Critical`.
- Missing creative spec, UTM, naming, or status: mark `Important`.
- Optional nice-to-have asset or unclear stakeholder ownership: mark `Monitor`.

## Claim-Risk Checks

- Medical, regulated, disease, cure, guarantee, or unsupported performance language: mark `Critical` and `Requires Approval: Yes`.
- Unverified competitor, testimonial, statistic, or offer claim: mark `Important` and keep copy draft-only.
- If rules are missing, use `[To be supplied]` for legal/compliance limits.
