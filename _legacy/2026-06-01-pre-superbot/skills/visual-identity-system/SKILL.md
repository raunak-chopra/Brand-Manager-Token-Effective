---
name: visual-identity-system
version: "1.0.0"
brand: AgentKits Marketing by AityTech
category: core
difficulty: intermediate
description: Workflow for creating moodboards, visual identity systems, and complete brand books from strategic inputs and reference folders.
triggers:
  - visual identity
  - moodboard
  - brand book
  - brand guidelines
  - design system
  - colors
  - typography
  - logo system
related_skills:
  - brand-building
  - customer-research
  - ad-creative
agents:
  - visual-identity-director
  - brand-voice-guardian
success_metrics:
  - strategic_fit
  - distinctiveness
  - usability
  - consistency
---

# Visual Identity System

## Use For

Moodboards, visual territories, identity systems, brand books, reference audits, and practical design direction.

## Inputs

- Brand context and intake
- Product/category
- Audience
- Desired perception
- Touchpoints
- Approved/rejected references
- Mandatory assets, colors, fonts, claims, legal rules

## Workflow

1. Read `brands/[Brand]/context-index.md` first.
2. Ask only missing intake questions.
3. List reference folders before opening files. If empty, fallback to the Envato Asset Catalog JSON path using the `shared-reference-library/tools-and-prompts/envato-asset-library-guide.md` guidelines.
4. Audit selected references or Envato catalog templates for perception, fit, use, and avoid notes.
5. Create 2-3 visual territories.
6. Score routes for strategy fit, distinctiveness, scalability, and execution ease.
7. Recommend one direction.
8. Draft the brand book and production risks.

## Output

- Brand understanding
- Reference audit
- Moodboard territories
- Scores
- Recommended direction
- Brand book draft
- Implementation checklist
- Missing inputs

## Guardrails

- Do not invent font licenses, claims, legal rules, or asset availability.
- Use `[To be supplied]` for missing inputs.
- Keep brand-specific outputs in `brands/[Brand]/`.

## References

- `references/intake-questionnaire.md`
- `references/reference-library-schema.md`
- `references/moodboard-workflow.md`
- `references/asset-evaluation-rubric.md`
- `references/brand-book-template.md`