# Operating Rules

## Principle

Lead with useful output, preserve source integrity, and load only what is needed.

## Defaults

- Prefer Markdown deliverables unless another format is requested.
- See `_core/OUTPUT-CONTRACTS.md` for claim safety, readiness notes, and recommendation standards.
- For substantial deliverables, append a short context log to `logs/context-usage/YYYY-MM.md` and log estimated token usage to `logs/context-usage/token-ledger.md` (manually or using `node tools/clis/token-tracker.js`) after the output is done.

## Storage & Output Governance

- Brand source of truth: `brands/[Brand Name]/`
- Shareable/generated outputs: `outputs/[Brand Name]/` structured as:
  - `outputs/[Brand Name]/drafts/` - for initial drafts and review copy.
  - `outputs/[Brand Name]/final/` - for final client-ready/approved assets.
  - `outputs/[Brand Name]/reports/` - for GA4 audits, campaign reviews, and SEO reports.
- Reusable templates: `templates/`
- Runtime policies: `_core/`
- Compact agents: `agents/`
- Compact skills: `skills/`
- Platform guidance: `tools/`
- Human docs: `docs/`
- Archived verbose material: `_legacy/`

## Runtime Token & Cache Efficiency

- **Conciseness**: Keep responses minimal, structured, and focused. Prefer markdown tables and lists over verbose text.
- **Cache Alignment**: Standardize prompt prefixes (e.g. system commands, stable references first) to maximize LLM KV cache hit ratios.
- **Context Management**: When conversation histories grow, summarize past turns and prune irrelevant intermediate outputs to reduce token round-trips.
- **Lazy Loading**: Strictly load only the agent card, skill card, and reference files required by the current task/mode.
- **Compression First**: For long or repeated context, use `_core/COMPRESSION-RULES.md` and retrieve originals only when exact proof, wording, or edits are needed.
- **Routed Retrieval**: Use `_core/CONTEXT-ROUTER.md` when a task could pull from many files.

## Creative Agency Mode

Use Creative Agency Mode when the user explicitly asks for creative exploration, originality, image concepts, campaign routes, brand worlds, concept boards, or agency-grade output.

Creative Agency Mode may load more context than Fast Mode, but still uses lazy loading:

1. Brand `context-index.md` when a brand is named.
2. `agents/creative-director.md`.
3. `skills/creative-system/SKILL.md`.
4. One active creative reference.
5. One active workflow.

Creative outputs should favor multiple distinct routes, sensory specificity, audience tension, ownable brand language, visual production notes, scoring, and a clear recommendation.

Do not sacrifice source integrity for drama. Unsupported claims, rights, market facts, proof, and legal constraints remain `[To be supplied]`.

## Execution Discipline

- State assumptions when ambiguity changes the output.
- Ask only when missing input blocks useful progress.
- Keep changes surgical and traceable to the request.
- Avoid speculative features, abstractions, and broad rewrites.
- Define success criteria for multi-step work and verify before final output.

## Learning Updates

Use `skills/second-brain/SKILL.md` when the task asks what to remember, what worked, what failed, what should become reusable, or how to update learnings.

Do not store assumptions as facts. Confirmed brand learnings belong in `brands/[Brand]/learnings-registry.md`; tests belong in `brands/[Brand]/experiments-backlog.md`.

Use `skills/meta-improvement-system/SKILL.md` when the task is about improving this bot's routing, token efficiency, templates, agents, or skills.

For recurring workflow misses, add a short candidate to `logs/2nd-brain/improvement-candidates.md` instead of changing global rules immediately.

## Git And Publishing

Before GitHub publishing, syncing, or automation, read `tools/integrations/github.md`.

For Git updates, run `git status --short --branch`, avoid unrelated user changes, and confirm no secrets or raw exports are staged.
