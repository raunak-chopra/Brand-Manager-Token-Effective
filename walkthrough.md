# Brand Manager Bot Walkthrough

This workspace is a lightweight AI brand and marketing operating system. It is built around brand folders, specialist agents, reusable skills, platform tools, 2nd Brain learning files, and an `outputs/` folder for deliverables.

## 1. Brand Folders

Brand-specific work belongs in `brands/[Brand]/`.

For a brand task, start with:

```text
brands/[Brand]/context-index.md
```

Then load only what the task needs:

- `brand-intake.md` for missing context
- `learnings-registry.md` for confirmed campaign, creative, audience, offer, and channel learnings
- `experiments-backlog.md` for active, queued, completed, or inconclusive tests
- `brands/[Brand]/brand-guidelines/brand-guidelines.md` for rules
- `reference-library/` for selected visual examples
- `assets/` for production files and proof

For a new brand, copy `brands/_template/` to `brands/[Brand]/` first, then fill the highest-priority intake gaps.

## 2. Agents

Agents are specialist roles in `agents/`.

Examples:

- `copywriter` for ads, landing pages, emails
- `brand-voice-guardian` for review and claim risk
- `visual-identity-director` for moodboards and brand books
- `planner` for campaigns and calendars
- `researcher` for category and competitor work

Fast routing: `agents/ROUTER.md`. Workflow routing: `docs/agent-skill-workflows.md`.

Do not load `old agents - DO NOT EDIT/` during normal chats. It is a legacy archive only.

## 3. Skills

Skills are compact playbooks in `skills/`. Each `SKILL.md` gives the default workflow; deeper templates and examples stay in `references/`.

Examples:

- `visual-identity-system` for moodboards and brand books
- `brand-strategy` for positioning and voice
- `paid-media` for campaign structure and ad copy
- `conversion-system` for landing page audits
- `email-lifecycle` for drip workflows
- `content-system` for calendars and distribution

Open `SKILL.md` first. Open `references/` only when you need templates, specs, examples, or benchmarks.

Do not load `old skills - DO NOT EDIT/` during normal chats. Active merged skills already contain local references.

## 4. Tools

Tools live in `tools/`. Use them only for platform setup, execution, or reporting.

Start with:

```text
tools/REGISTRY.md
```

Current local tool docs include Meta Ads, Google Ads, LinkedIn Ads, GA4, Mixpanel, Mailchimp, Klaviyo, ActiveCampaign, HubSpot, Hotjar, Optimizely, and Buffer.

## 5. Outputs

Use `outputs/[Brand]/` for final or shareable deliverables. Keep source-of-truth brand facts in `brands/[Brand]/`.

Example:

```text
outputs/[Brand]/2026-05-12-meta-awareness-ad-copy.md
```

## 6. Best Prompt Pattern

```text
Brand: [Brand Name]
First read: brands/[Brand Name]/context-index.md
Agent: agents/[agent].md
Skill: skills/[skill]/SKILL.md

Task:
[specific output]

Rules:
Use [To be supplied] for missing facts.
Check claim, source, and brand voice risk.
```

When agent or skill choice is unclear, read `agents/ROUTER.md` or `skills/ROUTER.md` before opening specialist files.

## 7. Learning Loop

After a project, improve the workspace only when the learning is reusable:

- Brand fact -> brand context or intake
- Brand learning -> `brands/[Brand]/learnings-registry.md`
- Experiment or test idea -> `brands/[Brand]/experiments-backlog.md`
- Missing source/asset -> asset checklist or `missing-inputs.md`
- Repeatable method -> skill file
- Role behavior -> agent file
- Platform setup -> tool integration doc

Do not turn assumptions or one-off preferences into permanent rules.

Use `skills/second-brain/SKILL.md` for retrospectives, performance reviews, learning extraction, and skill/template improvement. Confirmed learnings need evidence or user confirmation; unsupported learnings stay proposed or `[To be supplied]`.

## Useful Files

| Need | File |
|---|---|
| Fast commands | `cheatsheet.md` |
| Assistant rules | `AGENTS.md` |
| Workspace map | `usageguide.md` |
| Agent/skill routing | `docs/agent-skill-workflows.md` |
| Agent router | `agents/ROUTER.md` |
| Skill router | `skills/ROUTER.md` |
| Brand readiness | `docs/brand-readiness-checklist.md` |
| Claim risk | `docs/claim-risk-checklist.md` |
| Migration index | `docs/migration-index.md` |
| Visual identity workflow | `docs/visual-identity-automation.md` |
| File placement | `docs/where-to-put-references.md` |
| Output rules | `outputs/README.md` |
| Missing info | `missing-inputs.md` |
