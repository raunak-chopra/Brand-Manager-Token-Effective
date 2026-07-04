# Token-Efficient Loading

Use this policy to keep the bot fast and light.

## Default Rule

Load the smallest useful file first. Expand only when the current task needs more detail.

## Load Sequence

1. `brands/[Brand]/context-index.md`
2. `brands/[Brand]/brand-intake.md`
3. Specific section from `brands/[Brand]/brand-guidelines/brand-guidelines.md`
4. `agents/ROUTER.md`, only if agent choice is unclear
5. One agent file from `agents/`
6. `skills/ROUTER.md`, only if skill choice is unclear
7. One skill file from `skills/[skill]/SKILL.md`
8. One or two reference files from `skills/[skill]/references/`
9. Selected files from `brands/[Brand]/reference-library/`

## Do Not Bulk Load

- All brand guidelines
- All reference folders
- All skills
- `old skills - DO NOT EDIT/`
- All agents
- `old agents - DO NOT EDIT/`
- All tools
- All image or asset folders

## Reference Loading

First list files:

```text
brands/[Brand]/reference-library/[folder]/
```

Then open only files that match the task.

Examples:

| Task | Load |
|---|---|
| Packaging moodboard | `brand-intake.md`, packaging references, colors, fonts |
| Social visual direction | `brand-intake.md`, social references, approved/rejected |
| Website identity | `brand-intake.md`, websites, layout, typography |
| Brand voice copy | brand guideline voice section, `brand-voice-guardian.md`, copy-system skill |
| Claims-heavy ad | claims sources, approved claim rules, ad-creative skill |

## Context Summary

Before long output, summarize loaded context in 3-5 bullets:

- Brand
- Audience
- Promise
- References loaded
- Missing inputs

## Context Usage Logs

For substantial deliverables, append a compact entry to `logs/context-usage/YYYY-MM.md` after the work is complete.

Log only pointers and short labels:

- Brand
- Task
- Agent used
- Skill used
- Brand files loaded
- Reference files loaded
- Short brand details used
- Output path
- Missing inputs

Do not copy source content into the log. Append logs; do not load historical logs unless the user asks for audit, history, or review.

## Stop Conditions

Ask a question instead of loading more files when:

- The brand is unknown
- The output format is unclear
- Required references are missing
- Legal, claims, or font-license details are needed
- The user asks for a decision that depends on subjective preference

## Learning Updates

If a task reveals a reusable improvement, update the smallest relevant file after the output:

- Brand fact: `brands/[Brand]/context-index.md` or `brand-intake.md`
- Asset or source gap: `brands/[Brand]/asset-checklist.md`
- Reference decision: `brands/[Brand]/reference-index.md`
- Repeatable method: `skills/[skill]/SKILL.md`
- New specialist behavior: `agents/[agent].md`
- Platform setup detail: `tools/integrations/[platform].md`

Do not add assumptions as facts. Use `[To be supplied]` when evidence is missing.
