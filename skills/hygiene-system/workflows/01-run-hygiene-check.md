# Run Hygiene Check

Use this workflow for daily hygiene, pre-launch checks, and weekly scorecard preparation.

## 1. Confirm Inputs

Minimum useful inputs:

- brand or campaign name
- source data file, sheet, or manual table
- date range
- destination URLs
- UTM convention
- expected conversion event
- tracking status
- owner or team
- spend/conversion thresholds when performance flags are requested

Use `[To be supplied]` for missing inputs and continue only with checks supported by available evidence.

## 2. Normalize Source Rows

For CSV or Sheets, map available columns to:

```text
campaign, channel, ad_or_asset, destination_url, final_url, utm_source,
utm_medium, utm_campaign, utm_content, spend, conversions,
conversion_event, tracking_status, owner, status, notes
```

Do not invent absent columns. Record any missing required fields as findings.

## 3. Apply Checks

Apply `references/hygiene-rules.md` in this order:

1. URL and destination integrity.
2. UTM completeness and convention fit.
3. Tracking and expected event status.
4. Spend and conversion hygiene.
5. Launch readiness and owner/status gaps.
6. Claim-risk escalation when copy is included.

## 4. Normalize Findings

Use `references/finding-schema.md`. Prefer fewer, stronger findings over noisy repetition. Group duplicate issues by campaign, channel, or owner when the action is the same.

## 5. Produce Digest

Use `templates/performance/hygiene-digest.md`.

Lead with:

- number of Critical, Important, and Monitor findings
- highest-risk issue
- next action for the operator
- missing inputs that limit confidence

## 6. Dashboard Handoff

For now, dashboard handoff means producing clean finding records that could later be imported into a UI. Do not build or assume a dashboard unless the user asks for the app phase.
