# Implementation Plan - Brand Manager Bot 2nd Brain Upgrade

This plan updates Brand Manager Bot with a practical 2nd Brain layer for brand, creative, campaign, performance, and workspace learnings. It keeps the workspace brand-agnostic and adapts the controlled observation-loop methodology from Eoghan Henn's Task Observer / One Skill to Rule Them All: https://github.com/rebelytics/one-skill-to-rule-them-all.

## Decisions Locked

- Keep the product identity as Brand Manager Bot.
- Add performance marketing as a layer inside the existing brand workflow.
- Use advisory intake gating, not hard blocking.
- Update brand learnings only when explicitly requested or during performance-review / experiment-result tasks.
- Remap phantom agents to existing agents; do not create new agent files.
- Do not add new platform integration docs until the platform is confirmed as actively used.

## Requirements

- Brand-specific facts, assets, claims, learnings, and experiments stay inside `brands/[Brand Name]/`.
- Final/shareable deliverables stay inside `outputs/[Brand Name]/`.
- Unsupported facts, claims, metrics, legal rules, licenses, and performance results must remain `[To be supplied]`.
- The 2nd Brain must separate confirmed learnings from proposed or directional learnings.
- Every confirmed learning needs a source pointer: file path, output, metric export, user confirmation, or dated note.
- Shared skills/docs/templates must not receive brand-specific details unless generalized.
- External-facing claims must remain draft until proof and claim rules are supplied.

## Implementation

### 1. 2nd Brain Skill

Create `skills/second-brain/SKILL.md` with:

- Activation rules for learning capture, retrospectives, performance reviews, experiment results, and workspace improvement.
- Loading pattern for `context-index.md`, `learnings-registry.md`, and `experiments-backlog.md`.
- Capture rules inspired by Task Observer: observe real work, preserve source context, classify insights, and avoid silent system changes.
- Internal/shared boundary: brand learnings stay brand-scoped; reusable methodology is generalized before entering shared files.
- Update policy: propose first, update only by request or during explicit learning-review tasks.
- Workspace observation format for `logs/2nd-brain/observations.md`.
- Cross-cutting principles support in `logs/2nd-brain/cross-cutting-principles.md`.

### 2. Brand Template Memory Files

Add to `brands/_template/`:

- `learnings-registry.md` for winning patterns, losing patterns, audience insights, creative insights, offer/channel learnings, and open learning questions.
- `experiments-backlog.md` for active, queued, completed, and invalid/inconclusive tests.
- `brand-guidelines/brand-guidelines.md` starter file so the referenced path exists.

Update existing templates:

- `brand-intake.md`: add Intake Status, performance economics, channels/tech stack, offer strategy, lifecycle fields, and performance setup inputs.
- `context-index.md`: add Intake Status, performance snapshot, and Source Of Truth links for learnings/experiments.
- `asset-checklist.md`: add performance marketing setup checks.

### 3. Docs And Routing

Update:

- `AGENTS.md`: add advisory intake, 2nd Brain loading rules, learning update rules, and performance input requirements.
- `skills/ROUTER.md`: add `second-brain` routing.
- `agents/ROUTER.md`: add performance review / learning extraction route.
- `docs/agent-skill-workflows.md`: add performance review and experiment planning workflows.
- `README.md`, `usageguide.md`, `walkthrough.md`, `cheatsheet.md`, `docs/brand-readiness-checklist.md`, `missing-inputs.md`, `brands/README.md`, `brands/_template/README.md`, and `outputs/README.md`: add learnings registry, experiments backlog, and performance-layer guidance.

### 4. Phantom Agent Remaps

Replace old agent names with current agents:

- `lead-qualifier` -> `persona-builder` for qualification context, or `conversion-optimizer` for funnel analysis.
- `continuity-specialist` -> `email-wizard`.
- `upsell-maximizer` -> `email-wizard` or `conversion-optimizer` depending on context.
- `sales-enabler` -> `copywriter`.
- `project-manager` -> `planner`.
- `seo-specialist` -> `attraction-specialist`.

Apply across active docs and skill references.

### 5. Output Templates

Add:

- `outputs/_templates/ad-creative-brief.md`
- `outputs/_templates/performance-report.md`
- `outputs/_templates/experiment-results.md`

Each template must include source/evidence fields, readiness notes, and learning/backlog update prompts.

## Verification

- Run `rg -n "lead-qualifier|continuity-specialist|upsell-maximizer|sales-enabler|project-manager|seo-specialist" docs skills agents AGENTS.md README.md cheatsheet.md usageguide.md walkthrough.md -g "!docs/implementation-plan.md"` and confirm no active phantom references remain.
- Run `rg -n "second-brain|learnings-registry|experiments-backlog" AGENTS.md README.md brands docs skills outputs usageguide.md walkthrough.md cheatsheet.md` and confirm the new loop is wired.
- Confirm `brands/_template/brand-guidelines/brand-guidelines.md` exists.
- Confirm the three new output templates exist.
- Run `git diff --check`.

## Notes

Task Observer's transferable ideas are controlled observation, source-backed logging, reviewable staged updates, cross-cutting principles, and confidentiality boundaries. This implementation adapts those ideas to brand management without adopting always-on silent skill rewriting.
