# Marketing Tools Registry

Quick reference for platform docs and local CLI stubs that actually exist in this workspace.

Read this file first when a task involves a marketing platform. Then open only the relevant integration guide.

## Available Tools

| Tool | Category | Guide | Local CLI |
|---|---|---|---|
| `ga4` | Analytics | `tools/integrations/ga4.md` | `tools/clis/ga4.js` |
| `mixpanel` | Analytics | `tools/integrations/mixpanel.md` | `tools/clis/mixpanel.js` |
| `google-ads` | Ads | `tools/integrations/google-ads.md` | `tools/clis/google-ads.js` |
| `meta-ads` | Ads | `tools/integrations/meta-ads.md` | `tools/clis/meta-ads.js` |
| `linkedin-ads` | Ads | `tools/integrations/linkedin-ads.md` | `tools/clis/linkedin-ads.js` |
| `mailchimp` | Email | `tools/integrations/mailchimp.md` | `tools/clis/mailchimp.js` |
| `klaviyo` | Email/SMS | `tools/integrations/klaviyo.md` | `tools/clis/klaviyo.js` |
| `activecampaign` | Email/CRM | `tools/integrations/activecampaign.md` | `tools/clis/activecampaign.js` |
| `hubspot` | CRM | `tools/integrations/hubspot.md` | `[To be supplied]` |
| `hotjar` | CRO | `tools/integrations/hotjar.md` | `tools/clis/hotjar.js` |
| `optimizely` | A/B testing | `tools/integrations/optimizely.md` | `tools/clis/optimizely.js` |
| `buffer` | Social scheduling | `tools/integrations/buffer.md` | `[To be supplied]` |
| `github` | Version control / publishing | `tools/integrations/github.md` | `[To be supplied]` |

## Category Guidance

### Advertising

Paid advertising platforms and campaign management.

| Tool | Best For | MCP Available |
|---|---|:---:|
| `google-ads` | Search intent and high-intent traffic | `[To be supplied]` |
| `meta-ads` | Demand generation, visual products, B2C awareness and conversion | `[To be supplied]` |
| `linkedin-ads` | B2B campaigns where role, company, or industry targeting matters | `[To be supplied]` |

Agent recommendation: use Google Ads for search intent, Meta for demand generation, and LinkedIn for B2B targeting.

### CRO And A/B Testing

Conversion rate optimization, heatmaps, behavior analysis, and experimentation.

| Tool | Best For | Notes |
|---|---|---|
| `hotjar` | Heatmaps, recordings, surveys, and qualitative behavior signals | Use to understand what users do before deciding what to test |
| `optimizely` | A/B testing, experimentation, and feature flags | Use when there is enough traffic and a clear hypothesis |

Agent recommendation: use Hotjar to diagnose behavior and Optimizely to run controlled experiments.

## When To Use Tool Docs

Use tool docs only for:

- Platform setup
- Account or API configuration
- Tracking and attribution implementation
- Campaign launch or audit workflows
- Reporting fields, naming conventions, or exports
- CLI usage

## CLI Safety Rules

- Run mutating CLI commands with `--dry-run` first.
- Add `--confirm` only after reviewing the dry-run payload.
- Keep normal output redacted. Use `--raw` only for local debugging or controlled exports.
- Use least-privilege API credentials and keep all secrets in environment variables.
- Use `.env.example` as the credential-name template; never fill it with real values.

Do not read tool docs for general brand, copy, or strategy tasks.

Use `tools/integrations/github.md` before publishing, syncing, or automating repository updates.

## Loading Order For Platform Work

1. Brand context: `brands/[Brand]/context-index.md`
2. Relevant agent and skill
3. This registry
4. One integration guide from `tools/integrations/`
5. One CLI doc or script only if execution is requested

## Tool Upgrade Rule

When platform work reveals new reusable setup steps, metrics, reports, API fields, naming conventions, or CLI commands, update the matching guide in `tools/integrations/`.

When adding a new tool:

1. Add `tools/integrations/[tool].md`.
2. Add `tools/clis/[tool].js` only if a local CLI exists.
3. Add the tool to this registry.
4. Add auth requirements and required environment variables.
5. Mark unknown credentials, IDs, account names, or permissions as `[To be supplied]`.

Do not list tools in this registry unless the corresponding local guide exists.
