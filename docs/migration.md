# Superbot Rework Migration

Date: 2026-06-01

## What Changed

- Added `_core/` as the canonical runtime policy layer.
- Added a strict default context budget of about 500-1000 instruction tokens.
- Collapsed active skills to eight compact systems.
- Replaced verbose agents with compact role cards.
- Split ad creative across templates, copy, visual, performance, and campaign references.
- Archived previous verbose runtime files in `_legacy/2026-06-01-pre-superbot/`.

## Legacy Locations

- Agents: `_legacy/2026-06-01-pre-superbot/agents/`
- Skills: `_legacy/2026-06-01-pre-superbot/skills/`
- Docs: `_legacy/2026-06-01-pre-superbot/docs/`
- Output templates: `_legacy/2026-06-01-pre-superbot/output-templates/`

## Runtime Policy

Use compact files first. Load legacy files only for fallback detail or migration comparison.
