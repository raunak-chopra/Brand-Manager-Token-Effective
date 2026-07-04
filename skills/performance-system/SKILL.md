# Performance System

Use for paid media, CRO, analytics, attribution, tracking, reporting, diagnostics, and experiment planning.

## Inputs

Goal, platform, budget/traffic, conversion event, tracking status, current metrics, offer, landing page, creative, audience, date range.

## Modes

| Mode | Use When | Reference Guide | Action Workflow Playbook |
|---|---|---|---|
| **CRO Audit** | reviewing funnels, landing page conversion obstacles | `../copy-system/references/conversion-psychology.md` | `../copy-system/workflows/04-write-marketing-copy.md` |
| **Optimization** | managing paid channels, improving ad specs, media plans | `references/platform-optimization.md`<br>`references/ad-platform-specs.md` | `workflows/01-scale-business.md` |
| **Growth Plan** | developing scale Roadmaps or marketing funnels | `references/platform-optimization.md` | `workflows/01-scale-business.md` |
| **Reporting** | writing performance reports or audits | `templates/performance/performance-report.md` | Run on raw campaign exports |
| **Weekly Memo** | summarizing week-over-week performance with hygiene caveats | `templates/performance/weekly-performance-memo.md` | Run after hygiene findings are current |

## Workflow

1. Load brand `context-index.md` first when available.
2. Identify the active performance **Mode**.
3. Apply the Hygiene Gate before interpreting CPA, ROAS, CVR, spend waste, or attribution movement.
4. If tracking, URL, UTM, or launch readiness is unclear, route first to `../hygiene-system/SKILL.md`.
5. Lazily load the corresponding **Reference Guide** and **Action Workflow Playbook**.
6. Analyze campaign data, traffic, or channel specifications only to the level allowed by the Hygiene Gate.
7. Diagnose performance blockages (offer, audience, creative, landing page).
8. Present a prioritized list of fixes ranked by impact and the next experiment details.

## Hygiene Gate

Before interpreting CPA, ROAS, CVR, spend waste, or attribution movement, confirm source data and tracking status.

- **Blocked:** missing source data, missing tracking status, open Critical tracking/destination issue, or conversion event `[To be supplied]`. Do not make performance conclusions; output hygiene actions.
- **Qualified:** source data exists but there are open Important hygiene findings, partial tracking proof, small samples, or unresolved attribution caveats. Interpret only with visible caveats.
- **Interpretable:** source data, tracking status, conversion event, and hygiene checks are supplied with no open Critical blockers.

If evidence is missing, mark it `[To be supplied]` and avoid causal claims.

## Output

CRO audits, business growth roadmaps, media spend optimizations, placement specs sheets, and performance digests.
