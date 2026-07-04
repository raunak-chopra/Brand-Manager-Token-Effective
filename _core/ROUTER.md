# Runtime Router

Choose one primary agent and one primary skill. Load references only when the active skill mode names them.

| User Intent | Agent | Skill | Lazy-Loaded References & Workflows |
|---|---|---|---|
| Brand foundation, positioning, messaging, voice, naming, guidelines | `strategist` | `brand-system` | References: positioning theory, archetype selection, color psychology, typography, voice, values, naming, purpose, visual direction.<br>Workflows: founder discovery, audience research, competitor audit, brand naming, strategy, visual setup. |
| Customer research, personas, VOC, psychographic insights | `researcher` | `insight-system` | References: JTBD research.<br>Workflows: brand research, deep research. |
| Copy, hooks, CTAs, rewrites, scripts, claim-safe review, email | `copywriter` | `copy-system` | References: messaging architecture, elevator pitch, taglines, hooks, AI writing detection (human-writing check), scriptwriting, conversion psychology.<br>Workflows: messaging framework, tagline creation, pitch, marketing copy, sponsor scripts. |
| Moodboards, identity, brand book, static image generation | `visual-director` | `visual-system` | References: image prompting principles, Gemini/Codex image specs, competitive visual audit.<br>Workflows: craft image prompts. |
| Campaign plans, content calendars, launch ideas, social systems | `strategist` | `campaign-system` | References: ad creative orchestration. |
| Marketing hygiene, URL/UTM/tracking checks, launch preflight, daily issue digests | `hygiene-checker` | `hygiene-system` | References: finding schema, hygiene rules.<br>Workflows: run hygiene check. |
| Paid media, CRO, analytics, reporting, diagnostics, growth | `performance-operator` | `performance-system` | References: platform specs, platform optimization, conversion psychology.<br>Workflows: scale business. |
| Email, CRM, lifecycle, nurture, retention | `lifecycle-operator` | `lifecycle-system` | References: email sequence templates. |
| Landing page or funnel conversion review | `conversion-optimizer` | `performance-system` | References: conversion psychology.<br>Workflows: CRO audit. |
| Learnings, retrospectives, reusable improvements | `researcher` | `second-brain` | References: learnings registry, experiments backlog. |
| Bot streamlining, routing updates, token efficiency, repeated corrections, skill/template improvements, monthly retrospectives | `researcher` | `meta-improvement-system` | Workflows: review observations, propose skill update, monthly retrospective. |

## Ad Creative Split

Ad creative is intentionally split:

- Brief layout and final deliverable: `templates/ads/ad-creative-brief.md`
- Hooks, angles, headlines, primary text, CTAs: `skills/copy-system/references/ad-creative-copy.md`
- Image-generation prompts and static visual specs: `skills/visual-system/references/ad-image-generation-specs.md`
- Platform ratios, limits, placements, tracking requirements: `skills/performance-system/references/ad-platform-specs.md`
- Campaign matrix, testing plan, and rollout sequencing: `skills/campaign-system/references/ad-creative-orchestration.md`

Use only the slice needed by the task.

## Tie Breakers

- If the user asks for review, lead with risks and fixes.
- If claims, legal, medical, finance, source proof, metrics, or font licensing are involved, do not infer.
- If performance interpretation is requested, require tracking status and source data.
- If hygiene or launch readiness is requested, check URL, UTM, tracking, owner/status, and claim-risk evidence before performance interpretation.
- If visual output is requested, require approved/rejected references or mark them `[To be supplied]`.
- If context is large, historical, repetitive, or source-heavy, use `_core/COMPRESSION-RULES.md` before loading more files.
- If many files could answer the task, use `_core/CONTEXT-ROUTER.md` to choose the next file instead of browsing broadly.
