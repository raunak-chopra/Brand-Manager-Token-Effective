# Brand Manager App 2.0 Implementation Plan

## Summary

Brand Manager App 2.0 is a local, token-efficient operating layer for marketing hygiene, performance interpretation, and brand workflow execution. It uses compact agents and skills, structured hygiene findings, and a static local dashboard MVP. It does not perform live campaign, spend, tracking, copy, or API changes without explicit user approval and credentials.

## Phase 1: Hygiene MVP

- Route URL, UTM, tracking, launch, claim-risk, and zero-conversion hygiene checks to `hygiene-checker` and `hygiene-system`.
- Standardize every issue into Critical, Important, or Monitor with evidence, why it matters, owner, confidence, approval state, rule version, source data, updated date, and action history.
- Use CSV, Sheets, manually supplied tables, or local JSON finding records as the first input path.
- Keep actions read-only by default: recommendations, issue notes, and approval-ready next steps only.

## Phase 2: Performance Connection

- Route spend, CPA, ROAS, CVR, and attribution interpretation to `performance-system` only when source data and tracking status are supplied.
- Apply the Hygiene Gate before every performance interpretation:
  - `Blocked`: no performance conclusion; output hygiene actions.
  - `Qualified`: interpret with visible caveats.
  - `Interpretable`: metrics can be interpreted normally within source limits.
- Use `templates/performance/weekly-performance-memo.md` once hygiene records are current.

## Phase 3: Local Dashboard MVP

The dashboard is now a local static MVP, not a live app layer. It is intentionally limited to local schema-backed data and browser-side action history.

The dashboard does five jobs:

- show Critical, Important, and Monitor findings in one triage view
- show evidence, likely cause, confidence, recommended action, source data, and rule version per finding
- let the user approve, dismiss, snooze, assign, or resolve findings locally
- preserve action history in browser `localStorage` and export it as JSON
- display token log history from a static data snapshot that works under `file://`

## Current State vs Planned State

| Area | Current State | Planned / External Blocker |
|---|---|---|
| Hygiene routing | Implemented through `_core/ROUTER.md`, `hygiene-checker`, and `hygiene-system` | Needs real campaign exports for operational runs |
| Finding schema | Implemented with dashboard extensions | Real records must be validated before use |
| Dashboard | Local static MVP in `outputs/dashboard/` | No live API writes by design |
| Performance gate | Implemented in `performance-system` and templates | Requires source data and tracking status |
| Live integrations | CLI stubs and `.env.example` are repo-ready | Credentials and MCP/server setup are user-supplied |
| Workflow normalization | Active workflows target `brands/[Brand]/` and `outputs/[Brand]/` | Legacy files remain fallback-only in `_legacy/` |

## Acceptance Criteria

- A hygiene request routes to `hygiene-checker` and `hygiene-system`.
- Findings validate with `node tools/clis/validate-findings.js <file>`.
- Dashboard findings use the extended schema and no longer rely on UI-only examples.
- Missing tracking, source data, claim proof, or legal rules are marked `[To be supplied]`.
- Performance reports are labeled Blocked, Qualified, or Interpretable before CPA, ROAS, CVR, or attribution conclusions.
- No live campaign, spend, tracking, or copy changes are made without explicit approval.
