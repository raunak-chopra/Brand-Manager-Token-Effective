# Finding Schema

Use this structure for every hygiene, performance, launch, or claim-risk finding.

## Required Fields

| Field | Use |
|---|---|
| Finding ID | Stable short ID for reference, e.g. `HYG-001`. |
| Agent | `hygiene-checker`, `performance-operator`, `copywriter`, or another active agent. |
| Run Context | Brand, campaign, date range, and source file/sheet. |
| Priority | `Critical`, `Important`, or `Monitor`. |
| Status | `New`, `Needs approval`, `Assigned`, `Snoozed`, `Dismissed`, or `Resolved`. |
| Entity | URL, campaign, ad, keyword, landing page, event, asset, or copy sample. |
| Issue | One-sentence description of what was found. |
| Evidence | Source-backed proof. Use `[To be supplied]` if missing. |
| Why It Matters | Business, tracking, launch, compliance, or customer impact. |
| Likely Cause | Short hypothesis, clearly marked if inferred. |
| Suggested Action | Operator-ready next step. |
| Owner | Person or team responsible, or `[To be supplied]`. |
| Confidence | `High`, `Medium`, or `Low`. |
| Requires Approval | `Yes` for spend, live campaign, compliance, or external copy changes. |
| Created At | Date or run timestamp. |
| Resolved At | Date or `[Open]`. |
| Rule Version | Hygiene, performance, or claim-check rule version used for the finding. |
| Source Data | Path, sheet name, export name, or manual table reference used as evidence. |
| Updated At | Last update date or timestamp. |
| Action History | Array of action entries; use `[]` when no operator action has been taken. |

## Priority Rules

- **Critical:** broken destination, missing required tracking on live spend, zero-conversion spend above threshold, unsupported regulated claim, or launch-blocking issue.
- **Important:** missing or malformed UTM, redirect concern, weak ad-to-page continuity, incomplete owner/status, or deteriorating metric with usable source data.
- **Monitor:** incomplete evidence, small sample size, low-confidence anomaly, or issue requiring another data source before action.

## Output Shape

When a machine-readable block is useful, use this key order:

```yaml
finding_id:
agent:
run_context:
priority:
status:
entity:
issue:
evidence:
why_it_matters:
likely_cause:
suggested_action:
owner:
confidence:
requires_approval:
created_at:
resolved_at:
rule_version:
source_data:
updated_at:
action_history:
```
