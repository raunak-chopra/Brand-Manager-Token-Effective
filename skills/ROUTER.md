# Skills Router

Use this file to choose the smallest useful skill. Load one skill by default, then open references only when the task needs templates, specs, examples, or deeper guidance.

## Default Loading Pattern

1. Read `brands/[Brand]/context-index.md` when a brand is named.
2. Use this router to choose one primary skill.
3. Open `skills/[skill]/SKILL.md`.
4. Open only the referenced files needed for the requested mode.
5. Use `[To be supplied]` for missing claims, metrics, source proof, assets, licenses, or legal rules.

## Recommended Merged Skill Map

| User Need | Primary Skill | Use When | Legacy Skills Covered |
|---|---|---|---|
| Brand foundation, positioning, messaging, voice | `brand-strategy` | The task is about what the brand should mean, say, promise, or avoid. | `brand-building` |
| Moodboards, visual territories, brand books | `visual-identity-system` | The task needs visual direction, identity systems, references, or production guidance. | `visual-identity-system` |
| Customer research, personas, VOC, JTBD | `customer-insight` | The task needs evidence from customers, reviews, interviews, surveys, or public research. | `customer-research` |
| Copywriting, editing, hooks, CTAs, persuasion | `copy-system` | The task asks to write, rewrite, review, sharpen, or pressure-test marketing copy. | `copywriting`, `copy-editing`, parts of `marketing-psychology` |
| Content pillars, calendars, distribution, repurposing | `content-system` | The task needs editorial strategy, campaign content planning, or reusable content systems. | `content-strategy` |
| Organic social strategy and posts | `social-content-system` | The task asks for social strategy, platform-native posts, engagement, calendars, or repurposing. | `social-media`, `social-content` |
| Email campaigns, flows, lifecycle, deliverability | `email-lifecycle` | The task asks for newsletters, sequences, automation, segmentation, deliverability, or email tests. | `email-marketing`, `email-sequence` |
| Paid media strategy, targeting, budgets, optimization | `paid-media` | The task asks for channel selection, campaign structure, targeting, tracking, budgets, or optimization. | `paid-ads`, `paid-advertising` |
| Bulk ad concepts, image prompts, and platform-ready variants | `ad-creative` | The task is mainly creative production: hooks, headlines, primary text, visual briefs, image generation prompts, concept visualization, or creative matrices. | `ad-creative`, creative parts of `paid-ads` |
| CRO, analytics, attribution, experiments | `conversion-system` | The task needs page diagnosis, measurement, event planning, reporting, or test design. | `page-cro`, `analytics-attribution`, `ab-test-setup` |

## Quick Decision Rules

- If the user asks for a final artifact, choose the skill closest to the output format.
- If the user asks for strategy plus execution, choose the system skill and use its mode routing.
- If the task touches claims, proof, performance, legal, medical, finance, or font licensing, do not infer facts. Flag missing proof.
- If the task requires platform execution or setup, read `tools/REGISTRY.md` after the primary skill.
- If the user asks for review, prioritize risk, clarity, brand fit, conversion friction, and missing evidence.

## Ambiguous Requests

| Request Pattern | Route |
|---|---|
| "Improve this landing page" | `conversion-system`, then `copy-system` only if rewriting is requested. |
| "Write ads for this campaign" | `ad-creative`; use `paid-media` only if budget, targeting, or structure is requested. |
| "Plan a launch" | `content-system` for calendar/distribution; `paid-media` if ad spend is central. |
| "Build our email funnel" | `email-lifecycle`. |
| "Make this sound on brand" | `copy-system`, with brand context loaded first. |
| "Who are our customers?" | `customer-insight`. |
| "Create a brand book" | `visual-identity-system`, with `brand-strategy` context if foundation is incomplete. |

## Archive Rule

Legacy skill folders live in `old skills - DO NOT EDIT/` at the workspace root. Do not load that folder during normal chats. Use the active merged skills in `skills/`; their references have been copied locally.
