# Compression Rules

Use this file when context is long, repetitive, historical, or only partly relevant.

## Principle

Compress context into source-linked summaries. Keep originals retrievable. Do not turn uncertain facts into confirmed facts.

## Labels

Use these labels in summaries and memory graphs:

- `confirmed` - directly supported by a source file or user instruction.
- `draft` - proposed copy, strategy, or direction not yet approved.
- `inferred` - reasonable interpretation from available context.
- `to-be-supplied` - missing input required for confident work.

## Compression Pattern

For each compressed source, keep:

```text
Source: path/to/file.md
Status: confirmed | draft | inferred | to-be-supplied
Useful for: [task types]
Key facts:
- ...
Open questions:
- ...
Retrieve full source when:
- ...
```

## What To Compress

- Old outputs: keep title, date, decision, and source path.
- Research: keep claims, evidence, gaps, and source path.
- Brand strategy: keep audience, promise, positioning, voice, constraints, and source path.
- Visual references: keep style signals, rejected styles, asset/license notes, and source path.
- Performance logs: keep metric, date range, source, confidence, and caveats.
- Tool output: keep failures, changed files, counts, and next action.

## What Not To Compress Away

- Legal, compliance, health, finance, pricing, or performance proof.
- Exact approved claims and offer terms.
- Source URLs and file paths.
- User rejections and mandatory constraints.
- Asset/font/license conditions.

## Retrieval Rule

Use compressed memory first. Read the original only when the task requires exact wording, proof, editing, or a confidence upgrade.
