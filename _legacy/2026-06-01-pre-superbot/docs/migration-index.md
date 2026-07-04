# Migration Index

This file records the workspace cleanup that merged overlapping skills and compressed agents while preserving full legacy snapshots.

## Active Skill Migration

| Old Skill Area | Active Skill |
|---|---|
| `brand-building` | `skills/brand-strategy/SKILL.md` |
| `customer-research` | `skills/customer-insight/SKILL.md` |
| `copywriting`, `copy-editing`, `marketing-psychology` | `skills/copy-system/SKILL.md` |
| `content-strategy` | `skills/content-system/SKILL.md` |
| `social-media`, `social-content` | `skills/social-content-system/SKILL.md` |
| `email-marketing`, `email-sequence` | `skills/email-lifecycle/SKILL.md` |
| `paid-ads`, `paid-advertising` | `skills/paid-media/SKILL.md` |
| `page-cro`, `analytics-attribution`, `ab-test-setup` | `skills/conversion-system/SKILL.md` |
| `ad-creative` | `skills/ad-creative/SKILL.md` |
| `visual-identity-system` | `skills/visual-identity-system/SKILL.md` |

## Active Agent Migration

| Agent | Active File | Full Snapshot |
|---|---|---|
| Attraction specialist | `agents/attraction-specialist.md` | `old agents - DO NOT EDIT/attraction-specialist.md` |
| Brainstormer | `agents/brainstormer.md` | `old agents - DO NOT EDIT/brainstormer.md` |
| Brand voice guardian | `agents/brand-voice-guardian.md` | `old agents - DO NOT EDIT/brand-voice-guardian.md` |
| Conversion optimizer | `agents/conversion-optimizer.md` | `old agents - DO NOT EDIT/conversion-optimizer.md` |
| Copywriter | `agents/copywriter.md` | `old agents - DO NOT EDIT/copywriter.md` |
| Email wizard | `agents/email-wizard.md` | `old agents - DO NOT EDIT/email-wizard.md` |
| Persona builder | `agents/persona-builder.md` | `old agents - DO NOT EDIT/persona-builder.md` |
| Planner | `agents/planner.md` | `old agents - DO NOT EDIT/planner.md` |
| Researcher | `agents/researcher.md` | `old agents - DO NOT EDIT/researcher.md` |
| Visual identity director | `agents/visual-identity-director.md` | `old agents - DO NOT EDIT/visual-identity-director.md` |

## Archive Rules

- Do not load `old skills - DO NOT EDIT/` during normal chats.
- Do not load `old agents - DO NOT EDIT/` during normal chats.
- Active skills have local references in `skills/[skill]/references/`.
- Active agents are compact routers; full historical detail remains archived for audit only.
