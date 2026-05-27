# Context Usage Logs

Use this folder to track which brand context, agent, skill, and references were used for substantial deliverables.

## When To Log

Append one entry after substantial deliverables, such as:

- Brand strategy documents
- Moodboards or visual identity systems
- Campaign plans
- Paid ad concepts
- Email workflows
- Content calendars
- Audits or recommendations saved to `outputs/[Brand]/`

Do not log tiny answers, clarifying questions, quick edits, or internal exploration that does not create a meaningful deliverable.

## Token Rule

Append logs; do not load historical logs unless the user asks for audit, history, or review.

Each entry should store pointers, not copied source content. Keep entries short enough to scan without becoming a second brand database.

## File Pattern

Use one monthly Markdown file:

```text
logs/context-usage/YYYY-MM.md
```

Example:

```text
logs/context-usage/2026-05.md
```

## Entry Template

```md
## YYYY-MM-DD - [Task name]

Brand: [Brand]
Task: [Short task description]
Agent used: agents/[agent].md
Skill used: skills/[skill]/SKILL.md

Brand files loaded:
- brands/[Brand]/context-index.md

Reference files loaded:
- none

Brand details used:
- Product/category: [To be supplied]
- Audience: [To be supplied]
- Core promise: [To be supplied]
- Claim/legal constraints: [To be supplied]

Output created:
- outputs/[Brand]/YYYY-MM-DD-[deliverable-name].md

Missing inputs:
- [To be supplied]
```

## Guardrails

- Do not invent brand facts to fill the log.
- Use `[To be supplied]` for missing details.
- Keep source-of-truth facts in `brands/[Brand]/`, not in this log.
- Keep final/shareable deliverables in `outputs/[Brand]/`.
