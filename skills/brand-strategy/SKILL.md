---
name: brand-strategy
version: "0.1.0"
description: Brand foundation, positioning, messaging, voice, architecture, and guideline strategy.
triggers:
  - brand strategy
  - branding
  - positioning
  - brand voice
  - brand guidelines
  - messaging
  - brand architecture
aliases:
  - brand-building
related_skills:
  - customer-insight
  - copy-system
  - content-system
  - visual-identity-system
agents:
  - researcher
  - planner
  - brand-voice-guardian
success_metrics:
  - brand_consistency
  - message_clarity
  - strategic_fit
---

# Brand Strategy

Use this skill for brand foundation, positioning, messaging systems, voice, and practical brand guidance. It replaces `brand-building` while preserving its references.

## Use For

- Brand foundation: purpose, audience, promise, proof, personality.
- Positioning statements and differentiation.
- Messaging hierarchy, value props, proof points, and objections.
- Voice and tone rules.
- Brand architecture and guideline drafts.
- Application guidance for website, ads, social, packaging, sales, and email.

## Inputs

- Category and product.
- Primary audience and need state.
- Core promise.
- Differentiation and proof.
- Desired perception.
- Competitors or category references.
- Must-use and must-avoid rules.

## Mode Routing

| Mode | Use When | Load References |
|---|---|---|
| Foundation | The brand basics are missing or unclear. | `references/README.md`, then `brand-strategy.md`. |
| Positioning | The task asks how the brand should be framed in market. | `positioning.md`, `brand-strategy-framework.md`. |
| Messaging | The task needs promise, value props, proof, objections, or claim hierarchy. | `brand-strategy-framework.md`. |
| Voice | The task asks for tone, language rules, words to use or avoid. | `voice-tone.md`. |
| Visual Bridge | The task connects strategy to look, feel, or brand book inputs. | `visual-identity.md`; use `visual-identity-system` for full design work. |

## Workflow

1. Load brand context first when a brand is named.
2. Confirm missing required brand inputs.
3. Separate confirmed facts from strategic recommendations.
4. Define foundation, positioning, messaging, and voice.
5. Translate strategy into channel applications.
6. List missing proof, source risks, and next decisions.

## Guardrails

- Do not invent claims, market data, legal rules, font licenses, competitor facts, or proof.
- Use `[To be supplied]` where evidence is missing.
- Distinguish strategic choices from confirmed brand rules.

## Output

- Brand foundation.
- Positioning statement.
- Audience summary.
- Messaging framework.
- Voice and tone rules.
- Application guidance.
- Missing inputs and source risks.

## Reference Routing

- Reference index: `references/README.md`.
