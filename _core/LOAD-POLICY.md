# Load Policy

## Token Budget

Default instruction load budget per task: about 500-1000 tokens before acting. Exceed it only when the task is high-risk, source-heavy, or explicitly asks for deep audit/rewrite.

## Modes

### Fast Mode

Default for normal tasks.

- Load only `AGENTS.md`, brand `context-index.md` if needed, one agent, one skill, and directly required active references.
- Do not inspect historical logs, old outputs, `_legacy/`, full brand books, or all references.
- Prefer answering with `[To be supplied]` markers over reading broadly to fill gaps.

### Deep Mode

Use only when the user asks for audit, migration, full review, research synthesis, debugging, or implementation across many files.

- State the wider source set being loaded.
- Use `_core/CONTEXT-ROUTER.md` to choose retrieval order.
- Summarize loaded context before large outputs.
- Log context usage after substantial deliverables.

## Normal Load Path

1. Identify brand and requested output.
2. If brand is named, read `brands/[Brand]/context-index.md`.
3. If route is unclear, read `_core/ROUTER.md`.
4. Load one agent card.
5. Load one skill card.
6. Load selected references, workflows, or templates lazily only when their specific mode is active (e.g., if working on brand positioning, load `skills/brand-system/references/brand-positioning-theory.md` and `skills/brand-system/workflows/07-define-positioning.md`).
7. For long files, logs, search results, or repeated historical context, apply `_core/COMPRESSION-RULES.md` before reading more.
8. Produce output with `_core/OUTPUT-CONTRACTS.md` checks when needed.

## Lazy Loading Protocol

To maintain token efficiency without sacrificing functionality, load files on a lazy-loading basis:
- **Core Card First:** Load the high-level agent card and the main system skill card.
- **Identify Active Mode:** Look at the skill modes table to see which specific sub-module/mode is requested.
- **Load Active References:** Load only the `skills/[system]/references/[mode].md` file associated with the active task.
- **Load Active Workflows:** Load only the `skills/[system]/workflows/[step].md` file associated with the active step.
- **Ignore Inactive Modules:** Avoid reading any other references, workflows, or templates that are not actively required for the current task.

## Stop Reading When

- The task can be answered with current context.
- Missing user facts block progress.
- Another file would only add examples, not decision-critical rules.

## Fast Search Defaults

- Use `rg --files` before directory walks.
- List candidate files before opening them.
- Open exact files, not folders.
- For long logs, diffs, test output, and command output, inspect failures, changed lines, summaries, or headings first.
- Prefer source pointers plus short summaries over copying source content into another file.
- Retrieve full source only when making a claim, editing the source, or resolving an ambiguity.

## Do Not Bulk Load

- `_legacy/`
- all agents
- all skills
- all docs
- all tool guides
- all reference folders
- all brand assets
- all historical logs

## Reference Protocol

List a reference folder before opening files. Open only the files named by the active skill mode or directly required by the user.

## Context Summary

Before large outputs, summarize loaded context in 3-5 bullets: brand, audience, promise, references loaded, and missing inputs.
