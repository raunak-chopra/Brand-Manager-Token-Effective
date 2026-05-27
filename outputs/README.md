# Brand Outputs

Use this folder for final or shareable deliverables for new and non-Spunge brands.

## Folder Pattern

```text
outputs/
  _templates/
  [Brand Name]/
    YYYY-MM-DD-[deliverable-name].md
    YYYY-MM-DD-[deliverable-name].pptx
    YYYY-MM-DD-[deliverable-name].xlsx
```

## Rules

- Keep source-of-truth brand facts in `brands/[Brand Name]/`.
- Keep production assets in `brands/[Brand Name]/assets/`.
- Keep reference material in `brands/[Brand Name]/reference-library/` or `shared-reference-library/`.
- Use `outputs/[Brand Name]/` for final/shareable deliverables, not raw inputs.
- Do not store Spunge outputs here.
- Do not store raw platform exports, API responses, secrets, `.env` files, or unredacted customer/contact data in `outputs/`.
