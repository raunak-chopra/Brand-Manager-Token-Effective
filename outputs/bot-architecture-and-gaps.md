# Brand Manager Bot: Architecture, Capabilities, and Gaps

This document summarizes how the Brand Manager Bot currently works and which items remain external blockers rather than repo implementation gaps.

## How It Works

1. **Context resolution:** read `brands/[Brand Name]/context-index.md` first when a brand is named.
2. **Agent and skill routing:** use `_core/ROUTER.md` to select one compact agent card and one skill system.
3. **Skill execution:** load only the workflow and references required for the active task.
4. **Output placement:** save durable brand memory in `brands/[Brand Name]/` and shareable deliverables in `outputs/[Brand Name]/`.

## Current Capabilities

- Brand strategy, positioning, voice, visual direction, and guidelines.
- Copy, hooks, CTAs, scripts, campaign plans, and creative briefs.
- Hygiene checks for URL, UTM, tracking, launch readiness, claim-risk, and owner/status gaps.
- Performance reporting with a required hygiene gate: Blocked, Qualified, or Interpretable.
- Static local dashboard for token history, hygiene findings, local action history, and workspace map.
- Repo-ready local CLI scripts for selected platforms, with dry-run safety rules.

## System-Level External Blockers

These are not repo defects. They require user-supplied credentials, account access, or local tool registration before live execution is possible.

### Credentials

Use `.env.example` as the credential-name template. Real values must stay in a local `.env` file that is not committed.

Key examples:

- `META_ACCESS_TOKEN`, `META_AD_ACCOUNT_ID`
- `GOOGLE_ADS_TOKEN`, `GOOGLE_ADS_DEVELOPER_TOKEN`, `GOOGLE_ADS_CUSTOMER_ID`
- `GA4_ACCESS_TOKEN`
- `HUBSPOT_ACCESS_TOKEN`

### MCP / Connector Registration

`tools/integrations/mcp-setup.md` documents setup considerations, but MCP servers are not assumed to be active. Live MCP/API execution remains `[To be supplied]` until configured in the user's local environment.

### Missing CLI Stubs

The following tools have guides but no local CLI wrapper yet:

- `hubspot`
- `buffer`
- `github`

They remain `[To be supplied]` in `tools/REGISTRY.md` until real zero-dependency wrappers are implemented and tested.

## Repo-Ready Items Added

- `.env.example` for credential names only.
- `package.json` with validation and token-summary scripts.
- `logs/hygiene/findings.sample.json` as the dashboard-ready finding sample.
- `tools/clis/validate-findings.js` for zero-dependency finding validation.
- `outputs/dashboard/` as a static local MVP with no live campaign/API writes.
