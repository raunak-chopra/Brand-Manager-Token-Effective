# Brand Manager Bot Cheatsheet

## Start Here

```text
Brand: [Brand Name]
First read: brands/[Brand Name]/context-index.md
Task: [specific output]
Use [To be supplied] for missing facts.
```

Load small: brand index -> needed intake/guideline section -> `agents/ROUTER.md` only if needed -> one compact agent -> `skills/ROUTER.md` only if needed -> one compact merged skill -> selected references/tools.

## Key Docs

| Need | Read |
|---|---|
| Assistant rules | `AGENTS.md` |
| Walkthrough | `walkthrough.md` |
| Agent/skill routing | `docs/agent-skill-workflows.md` |
| Agent router | `agents/ROUTER.md` |
| Merged skill router | `skills/ROUTER.md` |
| Brand readiness | `docs/brand-readiness-checklist.md` |
| Claim risk | `docs/claim-risk-checklist.md` |
| Migration index | `docs/migration-index.md` |
| File placement | `docs/where-to-put-references.md` |
| Tool registry | `tools/REGISTRY.md` |
| Security rules | `SECURITY.md` |
| Missing inputs | `missing-inputs.md` |
| 2nd Brain workflow | `skills/second-brain/SKILL.md` |

## Main Folders

| Folder | Use |
|---|---|
| `brands/` | Brand workspaces |
| `brands/_template/` | New brand starter |
| `agents/` | Specialist roles |
| `skills/` | Compact routers; deeper detail in `references/` |
| `tools/` | Platform docs and CLI stubs |
| `outputs/` | Final/shareable deliverables |
| `shared-reference-library/` | Reusable inspiration |
| `docs/` | Process docs |

## Question Starters

For a new brand, ask only what is missing:

- Product/category
- Primary audience
- Core promise
- Desired perception
- Competitors or category references
- First-use touchpoints
- Mandatory assets, colors, fonts, claims, or legal rules
- Rejected styles
- Reference folders

For a deliverable, ask only what blocks the output:

- Visual identity: references, assets, colors, fonts, touchpoints, format.
- Copy: voice, proof, offer terms, compliance limits, channel.
- Paid media: platform, budget, audience, conversion event, tracking status.
- Email: lifecycle stage, segment, trigger, offer, compliance rules.
- CRO: URL or screenshot, conversion goal, traffic source, current metrics.
- 2nd Brain: evidence source, confirmed learning, confidence level, where it should be reused.

## Tool Safety

- Use `node tools/clis/[tool].js ... --dry-run` before any platform write.
- Add `--confirm` only after reviewing the dry-run payload.
- Keep default redacted output for customer/contact data; use `--raw` only for local-only debugging.
- Keep secrets in environment variables, never in Markdown, prompts, or committed files.
- Use `.env.example` for variable names only.

## Where Files Go

| Type | Location |
|---|---|
| Brand intake | `brands/[Brand]/brand-intake.md` |
| Brand rules | `brands/[Brand]/brand-guidelines/` |
| Moodboards | `brands/[Brand]/moodboard-territories.md` |
| Brand book | `brands/[Brand]/brand-book.md` |
| Asset status | `brands/[Brand]/asset-checklist.md` |
| Approved/rejected refs | `brands/[Brand]/reference-library/approved/` or `rejected/` |
| Logos/photos/templates | `brands/[Brand]/assets/` |
| Claim proof | `brands/[Brand]/assets/claims-sources/` |
| Brand learnings | `brands/[Brand]/learnings-registry.md` |
| Experiments | `brands/[Brand]/experiments-backlog.md` |
| Final/shareable outputs | `outputs/[Brand]/YYYY-MM-DD-[deliverable-name].md` |
| General inspiration | `shared-reference-library/` |

## Fast Routing

| Task | Agent | Skill |
|---|---|---|
| Moodboard/brand book | `visual-identity-director` | `visual-identity-system` |
| Strategy/positioning | `planner` or `researcher` | `brand-strategy` |
| Copy/ads | `copywriter` | `copy-system` or `ad-creative` |
| Paid media plan | `attraction-specialist` | `paid-media` |
| Voice review | `brand-voice-guardian` | `copy-system` |
| Landing page audit | `conversion-optimizer` | `conversion-system` |
| Email sequence | `email-wizard` | `email-lifecycle` |
| Campaign calendar | `planner` | `content-system` |
| Research/personas | `researcher` or `persona-builder` | `customer-insight` |
| Performance review / learnings | `researcher` | `second-brain` or `conversion-system` |
| Experiment planning | `conversion-optimizer` | `conversion-system` or `second-brain` |

Full routing: `docs/agent-skill-workflows.md`.

## Do Not Do

- Do not bulk-read all skills, tools, assets, or references.
- Do not bulk-read all agents.
- Do not read `old skills - DO NOT EDIT/` during normal chats.
- Do not read `old agents - DO NOT EDIT/` during normal chats.
- Do not invent claims, stats, licenses, legal rules, or source references.
- Do not keep final files in temporary folders.
- Do not add tools to `tools/REGISTRY.md` unless matching docs exist.
- Do not commit `.env`, credential files, `node_modules`, scratch previews, or raw platform exports.
