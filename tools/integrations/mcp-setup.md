# MCP Setup - Live Platform Connections

Model Context Protocol (MCP) servers can connect this workspace to live ad, analytics, or CRM accounts, but they are not assumed to be installed or active.

Use CSV/manual exports for normal repo-local work. Use MCP only after the user supplies credentials, account access, and explicit approval for live data access.

## When To Use MCP vs CSV Exports

| Approach | Best For | Setup Requirement |
|---|---|---|
| CSV/manual exports | Ad-hoc audits, one-time analysis, small accounts, local-only review | None |
| MCP connection | Recurring reporting, multi-account management, live monitoring | User-supplied credentials and local server registration |

Current performance and hygiene workflows work with both approaches. MCP only automates data collection.

## Google Ads MCP Setup

External prerequisites:

- Google Ads account with API access enabled
- Google Cloud Console project with Google Ads API enabled
- OAuth 2.0 credentials
- Developer token
- Refresh token
- Customer ID
- Local MCP server selected and installed by the user

Expected environment variable names are listed in `.env.example`.

## Meta Ads MCP Setup

External prerequisites:

- Meta Business Manager account with ad account access
- Meta app created in Meta for Developers
- System User access token with `ads_read`
- Ad account ID
- Local MCP server selected and installed by the user

Expected environment variable names are listed in `.env.example`.

## Security Rules

- Never commit credentials to version control.
- Store real values in a local `.env` file or a secrets manager.
- Use read-only or least-privilege scopes for reporting.
- Use write permissions only when the user explicitly approves live changes.
- Treat live MCP/API execution as `[To be supplied]` until local setup is verified.

## Relevant Active Skills

- `skills/hygiene-system/` for URL, UTM, tracking, launch, and claim-risk checks.
- `skills/performance-system/` for reporting, paid media diagnostics, and performance interpretation.
- `skills/copy-system/` for ad copy and claim-safe copy review.

## Relevant Tool Guides

- `tools/integrations/google-ads.md`
- `tools/integrations/meta-ads.md`
- `tools/integrations/linkedin-ads.md`
- `tools/integrations/ga4.md`
