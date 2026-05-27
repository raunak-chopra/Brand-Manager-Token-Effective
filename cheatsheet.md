# Marketing Bot Cheatsheet

## Start Here

```text
Brand: Spunge
First read: brands/Spunge/context-index.md
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

## Main Folders

| Folder | Use |
|---|---|
| `brands/` | Brand workspaces |
| `brands/_template/` | New brand starter |
| `brands/Spunge/` | Spunge source of truth |
| `agents/` | Specialist roles |
| `old agents - DO NOT EDIT/` | Legacy archive only; do not load in chats |
| `skills/` | Compact routers; deeper detail in `references/` |
| `old skills - DO NOT EDIT/` | Legacy archive only; do not load in chats |
| `tools/` | Platform docs and CLI stubs |
| `outputs/` | Final/shareable deliverables |
| `shared-reference-library/` | Reusable inspiration |
| `inbox/` | Temporary unsorted files |
| `docs/` | Process docs |

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
| Final/shareable outputs | `outputs/[Brand]/YYYY-MM-DD-[deliverable-name].md` |
| General inspiration | `shared-reference-library/` |

## Fast Routing

| Task | Agent | Skill |
|---|---|---|
| Moodboard/brand book | `visual-identity-director` | `visual-identity-system` |
| Copy/ads | `copywriter` | `copy-system` or `ad-creative` |
| Paid media plan | `attraction-specialist` | `paid-media` |
| Voice review | `brand-voice-guardian` | `copy-system` |
| Landing page audit | `conversion-optimizer` | `conversion-system` |
| Email sequence | `email-wizard` | `email-lifecycle` |
| Campaign calendar | `planner` | `content-system` |
| Research/personas | `researcher` or `persona-builder` | `customer-insight` |

Full routing: `docs/agent-skill-workflows.md`.

## Spunge Next Inputs

- Logo source files and lockups
- Font licenses
- Product/packaging/lifestyle photography
- Packaging source files
- Approved and rejected references
- Generic category screenshots
- Clinical claim and patent/source proof
- Social, ad, deck, e-commerce templates

## Do Not Do

- Do not bulk-read all skills, tools, assets, or references.
- Do not bulk-read all agents.
- Do not read `old skills - DO NOT EDIT/` during normal chats.
- Do not read `old agents - DO NOT EDIT/` during normal chats.
- Do not invent claims, stats, licenses, legal rules, or source references.
- Do not keep final files in `inbox/`.
- Do not add tools to `tools/REGISTRY.md` unless matching docs exist.
- Do not commit `.env`, credential files, `node_modules`, scratch previews, or raw platform exports.
