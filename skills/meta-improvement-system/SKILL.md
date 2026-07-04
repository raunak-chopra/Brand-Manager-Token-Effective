# Meta Improvement System

Use this skill when the user asks to improve the bot, streamline workflows, reduce token use, review repeated issues, or turn observations into reusable skill/router/template updates.

## Load Budget

Default: 500-1000 instruction tokens before acting.

Load only:

1. `logs/2nd-brain/observations.md`
2. `logs/2nd-brain/improvement-candidates.md`
3. The one target file being updated

Do not load all skills, agents, templates, docs, or legacy material unless the user explicitly requests a broad audit.

## Workflow

1. Identify repeated behavior, correction, missing template, or routing issue.
2. Classify it as:
   - `router`
   - `load-policy`
   - `skill`
   - `agent`
   - `template`
   - `brand-memory`
   - `tooling`
3. Propose the smallest durable update.
4. If approved or clearly requested, edit only the relevant file.
5. Mark the observation or candidate as `Actioned` with a source pointer.

## When To Add Candidates

Add a candidate when one of these repeats or causes clear rework:

- a missing template blocks a normal workflow
- a router choice loads too much context
- a skill omits a recurring checklist
- a user correction applies globally, not just to one brand
- token usage spikes because the bot read broad folders or old outputs

## Guardrails

- Do not auto-promote one-off preferences into global rules.
- Do not store brand-specific facts in global files.
- Do not add broad abstractions when a short checklist or route entry is enough.
- Preserve source integrity. Use `[To be supplied]` for missing proof.
- Prefer lazy references over longer core instructions.

## Output

For proposed updates, use:

```md
## [Short title]

Status: Open
Type: router | load-policy | skill | agent | template | brand-memory | tooling
Trigger: [What happened]
Proposed change: [Smallest useful update]
Target file: [path]
Risk: [Low / Medium / High]
```
