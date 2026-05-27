---
name: paid-media
version: "0.1.0"
description: Paid media strategy, channel selection, targeting, budget allocation, tracking, campaign structure, and optimization.
triggers:
  - paid ads
  - paid media
  - PPC
  - Google Ads
  - Meta Ads
  - Facebook Ads
  - LinkedIn Ads
  - ROAS
  - CPC
  - CPL
  - CPA
  - campaign budget
aliases:
  - paid-ads
  - paid-advertising
related_skills:
  - ad-creative
  - conversion-system
  - copy-system
  - content-system
agents:
  - attraction-specialist
  - conversion-optimizer
success_metrics:
  - ROAS
  - CPA
  - CPC
  - conversion_rate
---

# Paid Media

Use this skill for paid campaign strategy, channel selection, targeting, campaign structure, budget allocation, tracking, reporting, and optimization. It merges `paid-ads` and `paid-advertising`.

## Use For

- Google Ads, Meta, LinkedIn, and similar paid channel planning.
- Funnel strategy, audiences, exclusions, retargeting, and budget splits.
- Campaign, ad set, naming, tracking, UTM, and reporting plans.
- Optimization rules, learning periods, and test planning.

## Inputs

- Business goal and funnel stage.
- Product, offer, and landing page.
- Audience, geography, and platform options.
- Budget and timeline.
- Conversion event, value, target CPA, or target ROAS.
- Tracking and pixel status.
- Creative assets and constraints.

## Mode Routing

| Mode | Use When | Load References |
|---|---|---|
| Strategy | Channel choice, funnel plan, budget allocation, or campaign structure. | `paid-media-playbook.md`. |
| Targeting | Audience, exclusions, retargeting, or segmentation. | `audience-targeting.md`. |
| Platform Setup | Google, Meta, LinkedIn setup or checklist. | `platform-setup-checklists.md`, then platform-specific reference. |
| Optimization | Performance review, budget changes, diagnostics, or test cadence. | `paid-media-playbook.md`; use `conversion-system` for attribution depth. |
| Creative Requirements | Angles, formats, copy needs, visual briefs. | `ad-copy-templates.md`; use `ad-creative` for bulk variants. |

## Workflow

1. Match channel to intent and audience.
2. Define objective, KPI, and acceptable economics.
3. Map TOFU, MOFU, BOFU audiences and messages.
4. Allocate budget across proven, optimization, and experiment buckets.
5. Specify creative, landing page, tracking, and exclusion requirements.
6. Create review cadence and optimization rules.
7. State tracking gaps before interpreting performance.

## Guardrails

- Tracking first.
- Do not invent CPA, ROAS, CPC, CPL, CAC, LTV, conversion values, or benchmarks.
- Avoid over-fragmented campaigns and overlapping audiences.
- Avoid daily bid changes that disrupt learning.
- Diagnose landing page and tracking problems before blaming ads.
- For regulated categories, use only approved claims.

## Output

- Channel recommendation.
- Campaign objective and structure.
- Funnel and audience plan.
- Budget allocation.
- KPI and tracking plan.
- Creative and landing page requirements.
- Optimization cadence.
- Missing inputs.

## Reference Routing

- Reference index: `references/README.md`.
