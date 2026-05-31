# Brand Manager Bot

A dedicated AI-assisted workspace for creating and managing brands, including strategy, visual identity, campaigns, copy, email, social, performance marketing workflows, and reusable learning loops.

## What This Workspace Contains

- `brands/_template/` - reusable new-brand starter structure.
- `brands/[Brand Name]/` - source-of-truth memory, references, assets, and working files for each brand.
- `outputs/[Brand Name]/` - final or shareable deliverables for each brand.
- `outputs/_templates/` - reusable deliverable structures.
- `agents/` - compact specialist behavior files and routing.
- `skills/` - reusable marketing workflows and compact skill routers.
- `skills/second-brain/` - learning capture, campaign retrospectives, experiment memory, and workspace improvement workflow.
- `tools/` - marketing platform integration notes and local CLI stubs.
- `docs/` - workspace governance, routing, source integrity, and operating guidance.

## Operating Principle

This workspace is for reusable brand management work. Use `[To be supplied]` for missing facts, do not invent claims or market data, and keep secrets or raw customer/platform exports out of Git.

Brand learnings belong in `brands/[Brand Name]/learnings-registry.md`; tests belong in `brands/[Brand Name]/experiments-backlog.md`. Treat those files as evidence-backed memory, not a place for guesses.

## GitHub Status

Repository owner: `raunak-chopra`  
Repository name: `Brand-Manager`  
Online URL: `https://github.com/raunak-chopra/Brand-Manager`  
Visibility: `[To be supplied]`

See `tools/integrations/github.md` for GitHub sync, repository metadata, deployment, and automation rules.
