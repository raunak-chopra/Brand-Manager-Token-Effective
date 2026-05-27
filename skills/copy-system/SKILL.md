---
name: copy-system
version: "0.1.0"
description: Copywriting, copy editing, brand voice review, hooks, CTAs, conversion copy, persuasion, and claim-risk checks.
triggers:
  - copy
  - copywriting
  - edit copy
  - review copy
  - proofread
  - headline
  - CTA
  - rewrite
  - make this better
  - marketing psychology
  - persuasion
aliases:
  - copywriting
  - copy-editing
  - marketing-psychology
related_skills:
  - brand-strategy
  - customer-insight
  - content-system
  - conversion-system
agents:
  - copywriter
  - brand-voice-guardian
  - brainstormer
success_metrics:
  - clarity_improvement
  - brand_consistency
  - conversion_rate
---

# Copy System

Use this skill to write, rewrite, edit, review, or improve marketing copy. It merges `copywriting`, `copy-editing`, and the copy-relevant parts of `marketing-psychology`.

## Use For

- Homepage, landing page, product, pricing, feature, ad, CTA, email, and sales copy.
- Brand voice review and copy sweeps.
- Headlines, hooks, CTAs, objections, proof, and message clarity.
- Persuasion model selection for ethical, brand-fit improvements.

## Inputs

- Audience and awareness stage.
- Offer, product, or page type.
- Desired action.
- Pain point and desired outcome.
- Proof points and constraints.
- Brand voice rules.
- Draft copy if editing.

## Mode Routing

| Mode | Use When | Load References |
|---|---|---|
| Write | The user asks for new copy or variants. | `frameworks-library.md`. |
| Edit | The user provides draft copy to improve. | `editing-checklist.md`. |
| Voice Review | The task is tone, brand fit, consistency, or style. | Use brand context first; load `editing-checklist.md` if needed. |
| Persuasion | The task asks why people buy, hooks, objections, pricing, behavior, or decision-making. | `psychology-principles.md`. |
| Claim Risk | The copy includes proof, statistics, guarantees, medical, legal, finance, or performance claims. | Use brand claim sources; use `[To be supplied]` for missing proof. |

## Workflow

1. Define the job of the copy and primary CTA.
2. Choose the mode: write, edit, voice review, persuasion, or claim risk.
3. Pick a structure only if it helps: AIDA, PAS, BAB, problem-solution-proof, or page-section flow.
4. Draft or edit for clarity, reader value, proof, specificity, emotion, and risk.
5. Check brand voice and source availability.
6. Provide alternatives for high-impact elements when useful.

## Guardrails

- Do not rewrite into a different strategy unless asked.
- Do not invent claims, stats, testimonials, discounts, guarantees, or legal language.
- Preserve the intended audience and offer.
- Prefer clarity over cleverness.
- Mark missing proof as `[To be supplied]`.

## Output

- Primary copy or edited copy.
- Alternate hooks, headlines, CTAs, or variants.
- Change rationale when editing.
- Claim and proof notes.
- Suggested tests.

## Reference Routing

- Reference index: `references/README.md`.
