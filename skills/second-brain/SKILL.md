# Second Brain Skill

Use this skill when the task involves campaign learnings, performance reviews, experiment results, repeated workflow improvements, skill observations, or the user asks what should be remembered from a brand/marketing session.

Adapted from the observation-loop methodology in Eoghan Henn's Task Observer / "One Skill to Rule Them All": https://github.com/rebelytics/one-skill-to-rule-them-all. The local implementation is brand-manager specific and keeps all updates reviewable.

## Purpose

Turn real brand and marketing work into reusable memory without inventing facts or silently changing the system.

This skill supports two learning tracks:

- Brand learning: campaign results, audience insights, creative patterns, offer learnings, channel learnings, and experiment outcomes stored inside `brands/[Brand]/`.
- Workspace learning: reusable process improvements, skill gaps, routing gaps, template gaps, and cross-brand principles stored in `logs/2nd-brain/` or proposed as updates to `skills/`, `agents/`, `docs/`, or `outputs/_templates/`.

## Activation

Use this skill for:

- Performance review, campaign review, experiment result, or retrospective tasks.
- Any request to update `learnings-registry.md`, `experiments-backlog.md`, or brand memory.
- Any task where the user says "remember this", "make this reusable", "what did we learn", "update the 2nd brain", or "improve the skill".
- Substantial deliverables where reusable patterns may emerge.

Do not use it for quick factual answers, one-off copy tweaks, or casual brainstorming unless the user explicitly asks to capture learnings.

## Loading Pattern

1. Read `brands/[Brand]/context-index.md`.
2. Read `brands/[Brand]/learnings-registry.md` when creating or reviewing creative, copy, campaigns, email, social, paid media, CRO, or performance work.
3. Read `brands/[Brand]/experiments-backlog.md` when planning, reviewing, or interpreting tests.
4. Read only the source deliverable, report, platform export summary, or user-supplied evidence needed for the current learning.
5. If the task is about improving the workspace, read the relevant `agents/`, `skills/`, `docs/`, or template files before suggesting changes.

## Capture Rules

- Do not store unsupported assumptions as learnings.
- Every accepted learning needs a source pointer: file path, output, metric export, user confirmation, or dated note.
- Use `[To be supplied]` where evidence, dates, metrics, or claim proof are missing.
- Keep brand-specific learnings inside the brand folder.
- Keep reusable process improvements generic and free of brand/client-identifying details before adding them to shared docs or skills.
- If a learning could affect external-facing claims, mark it as draft until proof and claim rules are supplied.
- If a performance result is directional or low-confidence, label it as directional. Do not turn it into a rule.

## Update Policy

Default behavior is propose, then update.

- During normal deliverable work, include a short "Proposed learnings" section only when useful.
- Update `learnings-registry.md` or `experiments-backlog.md` only when the user explicitly asks, or when the task itself is a performance review, experiment result, or learning-update task.
- Update shared skills/docs/templates only when the learning is reusable across brands and the user has asked to improve the system.
- Never silently install or overwrite a skill based only on one observation. Stage substantial improvements as clear proposed edits.

## Brand Learning Types

Use the smallest matching category:

| Type | Store In | Use When |
|---|---|---|
| Winning pattern | `learnings-registry.md` | A hook, channel, format, offer, audience, or message clearly worked. |
| Losing pattern | `learnings-registry.md` | A tactic underperformed or created quality/compliance risk. |
| Audience insight | `learnings-registry.md` | Customer behavior, objection, motivation, segment, or language is confirmed. |
| Creative insight | `learnings-registry.md` | Visual, copy, format, hook, or proof style has evidence. |
| Experiment | `experiments-backlog.md` | A controlled or directional test is active, queued, or completed. |
| Open question | `brand-intake.md` or `context-index.md` | A missing fact blocks confident execution. |

## Workspace Observation Types

Use these for improving the bot itself:

| Type | Store In | Use When |
|---|---|---|
| Skill improvement | `logs/2nd-brain/observations.md` | An existing skill needs a rule, example, checklist, or simplification. |
| New skill candidate | `logs/2nd-brain/observations.md` | A repeated workflow is not covered by current skills. |
| Template gap | `missing-inputs.md` or `logs/2nd-brain/observations.md` | A recurring deliverable needs a reusable template. |
| Cross-cutting principle | `logs/2nd-brain/cross-cutting-principles.md` | A rule should apply across multiple skills, agents, or templates. |

## Observation Format

When logging workspace observations, append to `logs/2nd-brain/observations.md`:

```markdown
### Observation [N]: [Short title]
Date: YYYY-MM-DD
Scope: [brand learning | workspace learning | skill improvement | template gap]
Related file: [path or To be supplied]
Status: Open

Issue:
[What happened or what gap appeared.]

Suggested improvement:
[Concrete update to make.]

Principle:
[General rule that applies beyond this single task.]
```

Before assigning `[N]`, read the existing file and use the next highest number. Append only; do not insert entries mid-file.

## Review Workflow

For a learning-update or retrospective task:

1. Summarize evidence loaded.
2. Separate confirmed learnings from proposed or low-confidence learnings.
3. Update the relevant brand files only for confirmed or user-approved learnings.
4. Add proposed tests to `experiments-backlog.md` when the next action is experimental.
5. Add reusable workspace observations only if the pattern applies beyond one brand.
6. End with remaining `[To be supplied]` inputs and any claim/source risks.

## Quality Check

Before finalizing a 2nd Brain update:

- Re-read this skill's Capture Rules and Update Policy.
- Confirm every new learning has evidence or is marked proposed/directional.
- Confirm brand-specific details did not leak into shared methodology files.
- Confirm changes are appended or narrowly edited; do not rewrite history unless the user asks.
