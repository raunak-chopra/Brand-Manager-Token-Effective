# Brand Manager Bot Usage Guide

This is the compact workspace map. Use `cheatsheet.md` for quick prompts and `AGENTS.md` for assistant rules.

## How It Works

1. User names a new or non-Spunge brand and task.
2. For a new brand, assistant copies `brands/_template/` to `brands/[Brand Name]/`.
3. Assistant reads `brands/[Brand Name]/context-index.md`.
4. Assistant loads one compact agent and one merged skill.
5. References/tools are opened only when needed.
6. Output includes missing inputs and claim/source risks.
7. Final/shareable deliverables go to `outputs/[Brand Name]/`.

## Load Pattern

```text
brands/[Brand]/context-index.md
brands/[Brand]/brand-intake.md, only if needed
brand-guidelines section, only if needed
agents/[agent].md
agents/ROUTER.md, only if agent choice is unclear
skills/ROUTER.md, only if skill choice is unclear
skills/[skill]/SKILL.md
selected references/tools
```

## Common Workflows

| Workflow | Start With |
|---|---|
| New brand setup | `brands/_template/` + `docs/brand-readiness-checklist.md` |
| Moodboards/brand book | `docs/visual-identity-automation.md` |
| Paid ads | `skills/paid-media/SKILL.md` + `tools/REGISTRY.md` if executing |
| Landing page audit | `skills/conversion-system/SKILL.md` |
| Email sequence | `skills/email-lifecycle/SKILL.md` |
| Campaign calendar | `skills/content-system/SKILL.md` |
| Copy review | `agents/brand-voice-guardian.md` |

Do not store or load Spunge memory in this bot.
