# Agent And Skill Workflows

Use this when a task needs routing guidance beyond the compact rules in `AGENTS.md`.

## Agent And Skill Selection

Use one primary agent and one active merged skill by default. If agent choice is unclear, read `agents/ROUTER.md`. If skill choice is unclear, read `skills/ROUTER.md`. Do not load `old agents - DO NOT EDIT/` or `old skills - DO NOT EDIT/`; they are legacy archives only.

| Need | Agent | Skill |
|---|---|---|
| Brand strategy | `agents/researcher.md` or `agents/planner.md` | `skills/brand-strategy/SKILL.md` |
| Moodboards or brand books | `agents/visual-identity-director.md` | `skills/visual-identity-system/SKILL.md` |
| Ads and paid media | `agents/attraction-specialist.md` or `agents/copywriter.md` | `skills/paid-media/SKILL.md` |
| Landing page or funnel audit | `agents/conversion-optimizer.md` | `skills/conversion-system/SKILL.md` |
| Email workflows | `agents/email-wizard.md` | `skills/email-lifecycle/SKILL.md` |
| Social content | `agents/copywriter.md` | `skills/social-content-system/SKILL.md` |
| Voice review | `agents/brand-voice-guardian.md` | `skills/copy-system/SKILL.md` |
| Customer research | `agents/persona-builder.md` or `agents/researcher.md` | `skills/customer-insight/SKILL.md` |
| Content calendar | `agents/planner.md` | `skills/content-system/SKILL.md` |
| Creative hooks | `agents/brainstormer.md` | `skills/copy-system/SKILL.md` |

## Visual Identity Workflow

For moodboards and brand books:

1. Use `agents/visual-identity-director.md`.
2. Use `skills/visual-identity-system/SKILL.md`.
3. Read `brands/[Brand]/context-index.md` first.
4. Ask only missing intake questions.
5. List reference folders before reading files.
6. Audit only references relevant to the requested direction or touchpoint.
7. Create 2-3 moodboard territories.
8. Score each route.
9. Recommend one direction.
10. Draft the brand book.
11. List missing inputs and production risks.

## Common Workflows

### Moodboards

```text
Brand: [Brand]
First read: brands/[Brand]/context-index.md
Agent: agents/visual-identity-director.md
Skill: skills/visual-identity-system/SKILL.md

Task:
Create 3 moodboard territories for [touchpoint].
```

### Copy

```text
Brand: [Brand]
First read: brands/[Brand]/context-index.md
Agent: agents/copywriter.md
Skill: skills/copy-system/SKILL.md

Task:
Write [asset type] for [audience].

Check against brand voice and claim rules.
```

### Paid Ads

```text
Brand: [Brand]
First read: brands/[Brand]/context-index.md
Agent: agents/attraction-specialist.md
Skill: skills/paid-media/SKILL.md

Task:
Create a paid media plan for [product/campaign].
```

### Review

```text
Brand: [Brand]
First read: brands/[Brand]/context-index.md
Agent: agents/brand-voice-guardian.md

Task:
Review this for tone, clarity, brand fit, and claim risk.
```

## Upgrade Prompt

```text
After this task, suggest updates to agents, skills, tools, or brand files.
Only make reusable updates.
Use [To be supplied] for missing evidence.
```
