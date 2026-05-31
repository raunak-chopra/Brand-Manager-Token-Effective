# GitHub Integration

Use this guide when connecting, publishing, updating, or automating the Brand Manager Bot workspace through GitHub.

## Current Setup

- GitHub account: `raunak-chopra`
- Local repository path: `C:\Users\raunak.chopra\Desktop\Al Bots\Brand Manager Bot`
- Remote repository URL: `https://github.com/raunak-chopra/Brand-Manager.git`
- Repository URL: `https://github.com/raunak-chopra/Brand-Manager`
- Deployment target: GitHub repository
- Repository visibility: `[To be supplied]`
- Git commit identity: GitHub noreply email

## Repository Metadata

Recommended GitHub repository description:

```text
AI-assisted workspace for creating and managing new brand systems, campaigns, and marketing workflows.
```

Suggested topics:

```text
brand-manager, marketing, branding, brand-strategy, visual-identity, ai-workspace
```

## Update Rules

Before each Git update:

1. Run `git status --short --branch`.
2. Review changed files and avoid committing unrelated user work unless requested.
3. Check for secrets or sensitive exports in changed files.
4. Keep commit messages specific and action-oriented.
5. Update `README.md` and this file when repository URL, deployment URL, visibility, topics, or automation rules change.
6. If substantial context or deliverables were created, append a compact entry to `logs/context-usage/YYYY-MM.md`.

## Automation Guardrails

Git automation may stage and commit only after these checks pass:

- No `.env`, key files, private credentials, databases, or raw platform exports are staged.
- No invented claims, market data, source references, or performance results are introduced.
- Brand-specific work remains inside `brands/[Brand Name]/`.
- Final/shareable deliverables remain in `outputs/[Brand Name]/`.
- Brand-specific private assets, raw exports, and unsupported claims are not staged unless explicitly approved.
- Commit includes only files relevant to the requested task.
