# Marketing CLIs

Zero-dependency, single-file Node.js CLI stubs for selected marketing platforms.

Read `tools/REGISTRY.md` first to confirm whether a platform has a local CLI. Do not assume a CLI exists unless it is listed here.

## Available CLIs

| CLI | Category | Required Environment Variables |
|---|---|---|
| `activecampaign.js` | Email/CRM | `ACTIVECAMPAIGN_API_KEY`, `ACTIVECAMPAIGN_API_URL` |
| `ga4.js` | Analytics | `GA4_ACCESS_TOKEN`; `GA4_API_SECRET` for Measurement Protocol sends |
| `google-ads.js` | Ads | `GOOGLE_ADS_TOKEN`, `GOOGLE_ADS_DEVELOPER_TOKEN`, `GOOGLE_ADS_CUSTOMER_ID` |
| `hotjar.js` | CRO | `HOTJAR_CLIENT_ID`, `HOTJAR_CLIENT_SECRET` |
| `klaviyo.js` | Email/SMS | `KLAVIYO_API_KEY` |
| `linkedin-ads.js` | Ads | `LINKEDIN_ACCESS_TOKEN` |
| `mailchimp.js` | Email | `MAILCHIMP_API_KEY` |
| `meta-ads.js` | Ads | `META_ACCESS_TOKEN`, `META_AD_ACCOUNT_ID` |
| `mixpanel.js` | Analytics | `MIXPANEL_TOKEN`; query access may need `MIXPANEL_API_KEY` and `MIXPANEL_SECRET` |
| `optimizely.js` | A/B testing | `OPTIMIZELY_API_KEY` |

## Run Pattern

```bash
node tools/clis/[tool].js [resource] [action] [options]
```

Examples:

```bash
node tools/clis/meta-ads.js campaigns list --limit 10
node tools/clis/ga4.js reports realtime
node tools/clis/mailchimp.js campaigns list --limit 20
```

## Safety Pattern

- Use `--dry-run` before any create, update, delete, send, enable, pause, subscribe, unsubscribe, archive, or tracking command.
- Mutating commands require `--confirm` when not using `--dry-run`.
- CLI output is redacted by default for likely PII fields. Use `--raw` only when the full platform response is needed and the output will stay local.
- `--raw` is blocked unless `ALLOW_RAW_OUTPUT=true` is set in the environment.
- Non-JSON API errors, dry-run URLs, and thrown error messages are sanitized before printing.
- Store secrets in environment variables only. Do not pass secrets as command arguments.
- Prefer read-only or least-privilege platform tokens for reporting tasks.

Check the matching integration guide before using a CLI:

```text
tools/integrations/[tool].md
```

## Security

- Never hardcode API keys or tokens in scripts.
- Use environment variables for credentials.
- Do not paste credentials into prompts or Markdown files.
- Mask account IDs, tokens, and customer data in examples unless the user explicitly supplies safe dummy values.
- Do not commit `.env`, credential files, `node_modules`, scratch previews, or raw platform exports.

## Upgrade Rule

When a CLI command is tested and useful, update both places:

1. The matching guide in `tools/integrations/[tool].md`
2. This README if auth, command structure, or available coverage changes

Use `[To be supplied]` for missing account IDs, API scopes, permissions, or untested commands.
