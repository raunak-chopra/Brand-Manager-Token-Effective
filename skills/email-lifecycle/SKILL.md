---
name: email-lifecycle
version: "0.1.0"
description: Merged email strategy, campaigns, newsletters, lifecycle automation, sequences, segmentation, deliverability, testing, and performance optimization.
triggers:
  - email
  - email marketing
  - email campaign
  - newsletter
  - lifecycle email
  - email sequence
  - drip campaign
  - nurture sequence
  - welcome sequence
  - onboarding emails
  - re-engagement emails
  - retention emails
  - win-back
  - deliverability
  - open rate
  - click rate
  - email automation
aliases:
  - email-marketing
  - email-sequence
prerequisites:
  - copy-system
related_skills:
  - copy-system
  - content-system
  - customer-insight
  - conversion-system
agents:
  - email-wizard
  - copywriter
success_metrics:
  - open_rate
  - click_rate
  - conversion_rate
  - unsubscribe_rate
  - sequence_completion_rate
output_schemas:
  - email-strategy
  - email-sequence
  - automation-map
  - email-audit
---

# Email Lifecycle

Use this skill for email strategy and execution across the full subscriber lifecycle. It merges the previous `email-marketing` and `email-sequence` skills without removing their capabilities.

## Use For

- Newsletter strategy, campaigns, and editorial email planning.
- Welcome, nurture, onboarding, launch, retention, reactivation, and win-back sequences.
- Lifecycle automation maps, triggers, delays, exits, suppression, and personalization.
- Segmentation, deliverability, consent, unsubscribe, sender reputation, and list-quality checks.
- Email copy briefs, subject lines, preview text, body copy, CTAs, and test plans.
- Performance review, optimization, and next-test recommendations.

## Inputs

- Brand, product, audience, and lifecycle stage.
- Goal: educate, activate, convert, retain, re-engage, announce, or sell.
- Segment, trigger, entry condition, exit condition, and suppression rules.
- Offer, source asset, product moment, or conversion event.
- Email platform and available automation capabilities.
- Current metrics, if available.
- Consent, compliance, unsubscribe, claim, and brand voice constraints.

Use `[To be supplied]` for unknown metrics, CRM rules, platform limits, consent details, claims proof, or legal requirements.

## Mode Routing

| Mode | Use When | Load References |
|---|---|---|
| Strategy | The user needs an email plan, newsletter plan, lifecycle map, or campaign direction. | `references/README.md`, then strategy references if needed. |
| Sequence | The user needs a welcome, nurture, onboarding, launch, reactivation, retention, or win-back flow. | `sequence-design.md`, `sequence-templates.md`. |
| Automation | The user needs trigger logic, delays, branching, suppression, CRM handoff, or lifecycle workflow mapping. | `automation.md`, `lead-nurturing-workflows.md`. |
| Segmentation | The user needs audience groups, personalization, lifecycle stages, or behavioral targeting. | `segmentation.md`. |
| Deliverability | The user mentions spam, inboxing, declining opens, consent, list hygiene, or sender reputation. | `deliverability.md`. |
| Copy | The user needs subject lines, preview text, body copy, CTAs, or rewrite variants. | Use this skill first; use `copy-system` only for deeper copy frameworks. |
| Optimization | The user has performance data or asks what to test next. | `email-marketing-playbook.md`; use `conversion-system` if attribution or statistical test design is central. |

## Core Rules

- One email, one job.
- Value before ask.
- Relevance over volume.
- Clear CTA and next step.
- Suppress users who no longer match the trigger.
- Segment by behavior, lifecycle, profile, or intent when the data exists.
- Match email promises to the landing page, product, and available proof.
- Keep deliverability and consent constraints visible before recommending volume increases.

## Workflow

1. Define the business goal, lifecycle stage, audience, and conversion event.
2. Choose the mode: strategy, sequence, automation, segmentation, deliverability, copy, or optimization.
3. Confirm required trigger, segment, send logic, CTA, and success metric.
4. Map the flow or campaign before writing individual emails.
5. Assign one job to each email.
6. Draft or brief subject, preview, body, CTA, timing, personalization, and proof needs.
7. Add suppression rules, deliverability risks, metrics, and test ideas.
8. List missing inputs and source or claim risks.

## Common Sequence Types

- Welcome: orient, build trust, set expectations, and drive the first meaningful action.
- Lead nurture: educate, prove, handle objections, and invite conversion.
- Onboarding: guide key behavior, reduce friction, and reinforce product value.
- Launch: build context, create urgency with real constraints, and drive the launch action.
- Re-engagement: acknowledge inactivity and offer a useful reason to return.
- Retention: reinforce value, deepen usage, and prevent churn.
- Win-back: identify lapsed users, present relevant value, and avoid over-mailing.

## Guardrails

- Do not recommend spammy list practices, purchased lists, hidden unsubscribe flows, or misleading subject lines.
- Do not invent benchmark performance, open rates, click rates, revenue, CRM rules, or platform capabilities.
- Do not add proof, testimonials, discounts, guarantees, urgency, or claims unless supplied or sourced.
- Use one primary CTA per email unless there is a clear strategic reason.
- For regulated categories, use only approved wording and flag legal review needs.
- CRM workflow and sales workflow details are `[To be supplied]` unless documented.

## Outputs

Choose the smallest output that matches the request.

### Email Strategy

- Goal and audience.
- Lifecycle stage and email type.
- Segment logic.
- Campaign or newsletter plan.
- CTA and metric plan.
- Deliverability risks.
- Tests and missing inputs.

### Email Sequence

- Sequence overview.
- Trigger, exit, timing, and suppression rules.
- Email-by-email table.
- Subject, preview, body brief or draft copy.
- CTA and personalization notes.
- Metrics and test plan.
- Missing inputs.

### Automation Map

- Entry criteria.
- Branching logic.
- Delay logic.
- Exit and suppression rules.
- CRM/platform assumptions.
- Owner, QA needs, and reporting.

### Email Audit

- What is working.
- Clarity, relevance, CTA, offer, proof, and voice issues.
- Deliverability and compliance risks.
- Prioritized fixes.
- Test ideas.

## Reference Routing

References are local to this merged skill so archived old skills are not needed during normal chats.

- Reference index: `references/README.md`.
