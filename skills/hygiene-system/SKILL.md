# Hygiene System

Use for URL checks, UTM validation, tracking-gap review, launch readiness, daily hygiene digests, and weekly hygiene scorecards.

## Inputs

Brand, campaign or launch name, date range, source export or sheet, destination URLs, UTM convention, expected conversion events, tracking status, owner, and risk constraints.

## Modes

| Mode | Use When | Reference Guide | Workflow |
|---|---|---|---|
| **Daily Hygiene** | checking recurring campaign, URL, UTM, tracking, and zero-conversion risks | `references/hygiene-rules.md`<br>`references/finding-schema.md` | `workflows/01-run-hygiene-check.md` |
| **Pre-Launch Check** | validating campaign links, messages, assets, UTMs, and tracking before launch | `references/hygiene-rules.md`<br>`../performance-system/references/ad-platform-specs.md` | `workflows/01-run-hygiene-check.md` |
| **Weekly Scorecard** | summarizing hygiene trends, unresolved issues, and recurring failure patterns | `references/finding-schema.md` | `templates/performance/hygiene-digest.md` |

## Workflow

1. Load brand `context-index.md` first when available.
2. Identify the active mode and source data type: CSV, Google Sheet, manual table, or `[To be supplied]`.
3. Apply deterministic checks before interpretation: URL status, redirect concern, UTM completeness, expected event status, zero-conversion spend, and required owner/status fields.
4. Normalize findings using `references/finding-schema.md`.
5. Group by Critical, Important, and Monitor.
6. Produce a digest using `templates/performance/hygiene-digest.md`.
7. Route any performance interpretation to `performance-system` only when source metrics and tracking status are supplied.

## Output

Daily hygiene digests, launch preflight reports, issue-ready finding records, weekly hygiene scorecards, and operator next-action lists.

## Guardrails

- Start read-only. Recommend changes; do not claim live fixes were made.
- Do not infer broken tracking from weak performance alone.
- Do not infer compliance requirements for nutraceutical or regulated claims without supplied rules.
- Do not turn Monitor items into Critical findings without direct evidence.
