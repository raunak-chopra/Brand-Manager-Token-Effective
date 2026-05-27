---
name: conversion-system
version: "0.1.0"
description: CRO, page audits, analytics, attribution, tracking plans, reporting, A/B tests, experiments, and performance diagnosis.
triggers:
  - CRO
  - conversion rate optimization
  - landing page audit
  - improve conversions
  - analytics
  - attribution
  - tracking
  - dashboard
  - reporting
  - A/B test
  - split test
  - experiment
aliases:
  - page-cro
  - analytics-attribution
  - ab-test-setup
related_skills:
  - copy-system
  - paid-media
  - customer-insight
agents:
  - conversion-optimizer
  - researcher
success_metrics:
  - conversion_rate
  - tracking_accuracy
  - attribution_confidence
  - test_velocity
---

# Conversion System

Use this skill for conversion diagnosis, measurement, analytics, attribution, and experiment planning. It merges `page-cro`, `analytics-attribution`, and `ab-test-setup`.

## Use For

- Landing page, homepage, pricing, feature, and blog conversion reviews.
- Value proposition, CTA, visual hierarchy, proof, objection, friction, and mobile diagnosis.
- Tracking plans, GA4/event strategy, UTM logic, funnel reports, dashboards, and attribution caveats.
- A/B tests, split tests, variant planning, sample-size thinking, QA, and result interpretation.

## Inputs

- Page URL, copy, screenshot, funnel, or analytics question.
- Goal and conversion event.
- Audience and traffic source.
- Current metrics, if available.
- Offer and proof points.
- Tracking tools and platform setup.
- Baseline metric, traffic volume, and test duration constraints for experiments.

## Mode Routing

| Mode | Use When | Load References |
|---|---|---|
| Page CRO | Page audit, conversion friction, quick wins, CTA, proof, layout, or offer diagnosis. | `cro-checklist.md`, `element-benchmarks.md`. |
| Tracking Plan | Events, UTMs, GA4, parameters, dashboard inputs, or reporting structure. | `ga4-implementation-guide.md`, `google-analytics.md`, `reporting-templates.md`. |
| Attribution | Channel truth, platform-vs-analytics differences, attribution assumptions, ROI. | `attribution-models.md`. |
| Dashboard | Report outline, stakeholder view, metrics cadence. | `dashboards.md`, `reporting-templates.md`. |
| Experiment | Hypothesis, variants, sample size, QA, stop rules, or result interpretation. | `statistical-guide.md`. |
| Search Analytics | Search Console or organic reporting questions. | `search-console.md`. |

## Workflow

1. Identify whether the task is diagnosis, measurement, or experiment design.
2. Define the page or funnel job and likely user intent.
3. Map the conversion event and available data.
4. Separate copy, UX, proof, tracking, and technical issues.
5. Prioritize by impact, confidence, and effort.
6. For tests, define one clear hypothesis and success metric.
7. State data quality risks before interpreting performance.

## Guardrails

- Do not treat platform attribution as ground truth.
- Do not invent CPA, ROAS, CAC, LTV, conversion rates, baselines, traffic, or benchmarks.
- Do not promise statistical significance without data.
- Do not stop tests early because results look good.
- Use `[To be supplied]` for missing traffic, baseline, conversion, CRM, event, or account details.

## Output

- Diagnosis or measurement plan.
- Quick wins and high-impact recommendations.
- Event and parameter table when relevant.
- Attribution model and caveats.
- Test hypotheses, variants, metrics, QA, and decision criteria.
- Dashboard or report outline.
- Missing data and setup risks.

## Reference Routing

- Reference index: `references/README.md`.
