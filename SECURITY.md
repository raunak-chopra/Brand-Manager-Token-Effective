# Security Policy

Workspace security rules for local marketing tools, brand files, and outputs.

## Credentials

- Store credentials only in environment variables or a local `.env` file that is not committed.
- Never paste API keys, access tokens, refresh tokens, client secrets, customer data, or private source files into prompts, Markdown deliverables, or screenshots.
- Use least-privilege credentials for each task. Prefer read-only tokens for reporting.
- Rotate credentials if they appear in terminal logs, prompts, outputs, or shared files.

## CLI Safety

- Run mutating platform commands with `--dry-run` first.
- Use `--confirm` only after reviewing the dry-run payload.
- CLI output is redacted by default where customer, account, campaign, profile, audience, or event identifiers may appear.
- Use `--raw` only for local debugging or controlled exports that will not be shared. Raw output requires `ALLOW_RAW_OUTPUT=true`.
- API error text, non-JSON responses, dry-run URLs, and thrown error messages must be sanitized before printing.
- Real GA4 Measurement Protocol sends require `GA4_API_SECRET` from the environment.

## Outputs

- Do not store raw platform API responses, contact exports, survey responses, or unredacted customer data in `outputs/`.
- Do not store `.env`, private keys, databases, credential files, or generated `node_modules/` folders in deliverable folders.
- Keep raw exports and platform dumps out of tracked output paths. Use ignored raw/export filename patterns only for local debugging.
- Use `[To be supplied]` for missing facts instead of inventing data.

## Reporting Issues

If a secret or private customer file is found in the workspace:

1. Stop using the exposed credential.
2. Rotate or revoke it in the source platform.
3. Remove the exposed value from the workspace.
4. Add a note to `logs/context-usage/YYYY-MM.md` describing the cleanup without copying the secret.
