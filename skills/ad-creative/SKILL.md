---
name: ad-creative
version: "0.1.0"
description: Bulk ad concepts, creative angles, platform-ready variants, visual briefs, static image-generation prompts, concept visuals, storyboards, and creative matrices for English-only marketing workflows.
triggers:
  - ad creative
  - ad copy
  - ad variants
  - headlines
  - primary text
  - creative angles
  - visual brief
  - storyboard
related_skills:
  - paid-media
  - copy-system
  - visual-identity-system
agents:
  - copywriter
  - brainstormer
  - attraction-specialist
success_metrics:
  - creative_throughput
  - test_readiness
  - message_relevance
---

# Ad Creative

Use this skill for bulk creative production and iteration. Use `paid-media` for campaign strategy, targeting, budget, and optimization.

## Use For

Ad copy batches, creative angles, platform-specific variants, visual briefs, concept visualization for stakeholder alignment, static image generation prompts, iteration from performance data, and upload-ready creative matrices.

## Inputs

- Platform and placement
- Objective and funnel stage
- Product/offer and landing page
- Audience and pain point
- Brand/claim constraints
- Existing performance data, if iterating

## Workflow

1. Confirm platform specs and format needs.
2. Define 3-5 creative angles: pain, outcome, proof, objection, comparison, offer, or education.
3. Generate copy variants by angle.
4. Check character limits, claim risk, brand voice, and CTA fit.
5. If static image concepts are requested, follow `references/image-prompt-workflow.md` to build prompts and generate concept visuals.
6. Use only English-language prompts, file names, labels, and review notes.
7. Organize output by platform, audience, angle, and test priority.
8. If performance data exists, preserve winning patterns and replace weak hooks/claims/visuals.

## Output

- Angle matrix
- Primary text/headlines/descriptions
- Visual brief or storyboard
- Concept visuals with stakeholder review board (when image generation is requested)
- CTA options
- Compliance notes
- Test priority
- Optional CSV-style table

## Guardrails

- Do not invent proof, reviews, stats, discounts, or guarantees.
- Keep image text readable and sparse.
- Match the ad promise to the landing page.
- For health, finance, legal, or regulated claims, use only approved wording.
- Use only Codex and Gemini / Nano Banana Pro for static image work.
- Do not create, route, brief, or recommend video generation.
- Do not paste API keys, secrets, customer data, or private source files into prompts.

## Reference Routing

- Reference index: `references/README.md`.
- Image prompt writing and concept visualization: `references/image-prompt-workflow.md`.
- Content and image generation tools: `references/generative-tools.md`.
