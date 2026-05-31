# Brand Outputs

Use this folder for final or shareable brand deliverables.

## Folder Pattern

```text
outputs/
  _templates/
  [Brand Name]/
    YYYY-MM-DD-[deliverable-name].md
    YYYY-MM-DD-[deliverable-name].pptx
    YYYY-MM-DD-[deliverable-name].xlsx
```

## Useful Templates

- `outputs/_templates/ad-creative-brief.md`
- `outputs/_templates/performance-report.md`
- `outputs/_templates/experiment-results.md`
- `outputs/_templates/brand-strategy-brief.md`
- `outputs/_templates/brand-book.md`
- `outputs/_templates/campaign-plan.md`
- `outputs/_templates/cro-audit.md`
- `outputs/_templates/email-sequence.md`
- `outputs/_templates/paid-media-plan.md`
- `outputs/_templates/social-calendar.md`

## Rules

- Keep source-of-truth brand facts in `brands/[Brand Name]/`.
- Keep production assets in `brands/[Brand Name]/assets/`.
- Keep reference material in `brands/[Brand Name]/reference-library/` or `shared-reference-library/`.
- Use `outputs/[Brand Name]/` for final/shareable deliverables, not raw inputs.
- Store deliverables under the matching `outputs/[Brand Name]/` folder.
- Do not store raw platform exports, API responses, secrets, `.env` files, or unredacted customer/contact data in `outputs/`.
