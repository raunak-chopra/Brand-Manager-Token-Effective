# Requirements - Brand Manager Bot 2nd Brain

## Product Direction

The workspace remains Brand Manager Bot. It supports brand strategy, visual identity, copy, campaigns, content, lifecycle, CRO, paid media, and performance review, but performance marketing is a layer inside the brand manager rather than a new product identity.

## Intake Behavior

- Intake status values: `Not Started`, `In Progress`, `Complete`.
- The gate is advisory.
- `Not Started`: ask essential questions first, then proceed with placeholders if the user still wants a draft.
- `In Progress`: generate with `[To be supplied]` placeholders and readiness notes.
- `Complete`: use full context and cross-check against learnings, experiments, brand rules, and claim/source constraints.

## 2nd Brain Behavior

- Read `brands/[Brand]/learnings-registry.md` before creative, copy, campaign, email, social, CRO, paid media, or performance work.
- Read `brands/[Brand]/experiments-backlog.md` before test planning, variant creation, CRO, or experiment review.
- Do not store unsupported assumptions as confirmed learnings.
- Confirmed learnings require evidence or explicit user confirmation.
- Directional or low-confidence findings must be labeled directional.
- Brand-specific learnings stay in brand files.
- Reusable methodology can update shared skills/docs/templates only after it is generalized and requested.

## Skill Observation Behavior

- Workspace observations go to `logs/2nd-brain/observations.md`.
- Cross-cutting principles go to `logs/2nd-brain/cross-cutting-principles.md`.
- Observations are append-only by default.
- The bot proposes skill/template/doc improvements before applying substantial changes.
- The bot does not silently rewrite or install skills.

## Template Requirements

Each brand template must include:

- Intake status.
- Performance snapshot fields.
- Learnings registry.
- Experiments backlog.
- Starter brand guidelines file.
- Asset and performance setup checklist.

Each performance-oriented output template must include:

- Source data / evidence.
- Targets or success metrics.
- Confirmed vs proposed learnings.
- Backlog update prompt.
- Missing inputs and data-quality risks.

## Agent Requirements

Do not create new phantom agents for legacy names. Use existing agents and update references accordingly.

## Safety Requirements

- Never invent claims, metrics, market data, legal rules, source references, or performance results.
- Do not commit secrets, raw platform exports, credentials, or unredacted customer/contact data.
- Do not move brand-specific details into shared skills/docs unless generalized.
- Use `[To be supplied]` for missing proof, license, source, legal, tracking, or economics data.
