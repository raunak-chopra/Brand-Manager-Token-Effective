# Brand Manager Bot

Token-efficient, agency-grade workspace for building and operating brand systems: strategy, messaging, visual identity, campaigns, copy, lifecycle, performance, research, hygiene checks, generated creative concepts, and reusable learnings.

## Getting Started

1. **Brand source of truth:** use `brands/[Brand Name]/` first, especially `context-index.md`.
2. **Runtime policy:** use `_core/LOAD-POLICY.md` to keep context lightweight.
3. **Core protocols:** use `_core/SHARED-PROTOCOLS.md` for writing behavior, clarification behavior, source integrity, and missing-input handling.
4. **Routing:** use `_core/ROUTER.md` to choose one agent and one skill.
5. **Outputs:** save shareable deliverables in `outputs/[Brand Name]/`.

## Creative Agency Mode

Use Creative Agency Mode when the task asks for bold creative exploration, award-level ideas, brand worlds, concept boards, ad concepts, image prompts, generated image concepts, or creative critique.

Route through `agents/creative-director.md` and `skills/creative-system/SKILL.md`. This mode can produce creative territories, big ideas, concept boards, image concept briefs, generated-asset review notes, and creative scorecards.

Generated concepts live in `outputs/[Brand Name]/creative/`. Prompt memory, asset status, winning patterns, and rejected territories live in the brand folder through `prompt-library.md`, `asset-inventory.md`, `creative-territories.md`, `creative-winners.md`, and `generated-image-log.md`.

Source integrity still wins: unsupported claims, proof, rights, legal limits, and asset licenses stay marked `[To be supplied]`.

## Local Dashboard

The static dashboard lives at `outputs/dashboard/index.html`. It reads local data from `outputs/dashboard/dashboard-data.js`, stores operator actions in browser `localStorage`, and does not perform live campaign/API writes.

Validate dashboard-ready hygiene findings with:

```bash
npm run validate:findings
```

Validate creative briefs with:

```bash
npm run validate:creative -- templates/creative/concept-board.md
```

## Integrations

Local CLI scripts live in `tools/clis/` and integration notes live in `tools/integrations/`. Credentials are user-supplied through `.env` based on `.env.example`; no real secrets belong in this repo.

## GitHub Status

Repository owner: `raunak-chopra`
Repository name: `Brand-Manager`
Online URL: `https://github.com/raunak-chopra/Brand-Manager`
Visibility: `[To be supplied]`
