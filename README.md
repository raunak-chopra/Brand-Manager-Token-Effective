# Brand Manager Bot

Token-efficient workspace for building and operating brand systems: strategy, messaging, visual identity, campaigns, copy, lifecycle, performance, research, hygiene checks, and reusable learnings.

## Getting Started

1. **Brand source of truth:** use `brands/[Brand Name]/` first, especially `context-index.md`.
2. **Runtime policy:** use `_core/LOAD-POLICY.md` to keep context lightweight.
3. **Core protocols:** use `_core/SHARED-PROTOCOLS.md` for writing behavior, clarification behavior, source integrity, and missing-input handling.
4. **Routing:** use `_core/ROUTER.md` to choose one agent and one skill.
5. **Outputs:** save shareable deliverables in `outputs/[Brand Name]/`.

## Local Dashboard

The static dashboard lives at `outputs/dashboard/index.html`. It reads local data from `outputs/dashboard/dashboard-data.js`, stores operator actions in browser `localStorage`, and does not perform live campaign/API writes.

Validate dashboard-ready hygiene findings with:

```bash
npm run validate:findings
```

## Integrations

Local CLI scripts live in `tools/clis/` and integration notes live in `tools/integrations/`. Credentials are user-supplied through `.env` based on `.env.example`; no real secrets belong in this repo.

## GitHub Status

Repository owner: `raunak-chopra`
Repository name: `Brand-Manager`
Online URL: `https://github.com/raunak-chopra/Brand-Manager`
Visibility: `[To be supplied]`
