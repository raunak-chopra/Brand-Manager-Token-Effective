# Where To Put References

## Brand-Specific References

Use:

```text
brands/[Brand Name]/reference-library/
```

Put files here when they apply to one brand only.

| Reference Type | Folder |
|---|---|
| Approved design references | `brands/[Brand]/reference-library/approved/` |
| Rejected design references | `brands/[Brand]/reference-library/rejected/` |
| Font references | `brands/[Brand]/reference-library/fonts/` |
| Color references | `brands/[Brand]/reference-library/colors/` |
| Style directions | `brands/[Brand]/reference-library/styles/` |
| Photography references | `brands/[Brand]/reference-library/photography/` |
| Illustration references | `brands/[Brand]/reference-library/illustration/` |
| Packaging references | `brands/[Brand]/reference-library/packaging/` |
| Website references | `brands/[Brand]/reference-library/websites/` |
| Social references | `brands/[Brand]/reference-library/social/` |
| Competitor/category examples | `brands/[Brand]/reference-library/competitors/` |

## Brand Assets

Use:

```text
brands/[Brand Name]/assets/
```

Put actual production assets here.

| Asset Type | Folder |
|---|---|
| Logos | `brands/[Brand]/assets/logos/` |
| Packaging source files | `brands/[Brand]/assets/packaging/` |
| Product photos | `brands/[Brand]/assets/product-photography/` |
| Lifestyle photos | `brands/[Brand]/assets/lifestyle-photography/` |
| Templates | `brands/[Brand]/assets/templates/` |
| Final exports | `brands/[Brand]/assets/exports/` |
| Claim proof and studies | `brands/[Brand]/assets/claims-sources/` |

## Brand Documents

Use:

```text
brands/[Brand Name]/
```

| Document | Location |
|---|---|
| Brand intake | `brands/[Brand]/brand-intake.md` |
| Reference audit | `brands/[Brand]/reference-index.md` |
| Moodboard routes | `brands/[Brand]/moodboard-territories.md` |
| Final brand book | `brands/[Brand]/brand-book.md` |
| Asset readiness | `brands/[Brand]/asset-checklist.md` |
| Existing guidelines | `brands/[Brand]/brand-guidelines/brand-guidelines.md` |

## General References

Use:

```text
shared-reference-library/
```

Put reusable inspiration here when it is not tied to one brand yet.

Examples:

- Font pairings you may use later
- General color palette inspiration
- Competitor screenshots for a category you have not assigned
- Packaging ideas across industries
- Good social layouts
- Useful AI prompts and tool notes


## External Asset Catalogs

Use external catalogs when a reusable asset library is too large for Git or should remain outside the workspace.

Current external catalog:

```text
C:\Users\raunak.chopra\Downloads\Envato_Organized
```

Bot guide:

```text
shared-reference-library/tools-and-prompts/envato-asset-library-guide.md
```

Use the Envato catalog for templates, mockups, fonts, packaging assets, UI kits, themes, deck layouts, and visual inspiration. Do not copy the full external library into this repository. Search the catalog first, then copy only selected assets into the active brand or project workspace before editing.

Raunak has confirmed that items in the available asset/reference folders have proper licenses, including Alfabet font and other supplied items. Treat them as licensed for workspace use, but do not invent specific license terms, redistribution rights, exclusivity, trademark clearances, or third-party usage permissions.

Brand-specific context, guidelines, assets, and approved/rejected rules still override Envato references.

## Temporary Files

Use:

```text
inbox/
```

Only use this for unsorted files. Move them into the correct folder after review.

## Outputs

Use:

```text
outputs/[Brand]/
```

Put final or shareable deliverables here, such as ad copy sets, campaign plans, audits, brand-book drafts, presentations, spreadsheets, and exported reports.

Recommended naming:

```text
YYYY-MM-DD-[deliverable-name].md
```

Do not use `outputs/` for source-of-truth brand facts, raw references, claim proof, or production assets.

## Token-Efficient Rule

Do not ask the bot to read every reference by default.

Best prompt:

```text
Use `brands/Spunge/context-index.md` first.
Then list the relevant reference folder.
Only open files needed for this task.
If a relevant brand or shared reference folder is empty, skip it after the quick folder check and use the next priority source.
```

For example:

- Packaging task: open packaging, colors, fonts, approved, and rejected only.
- Website task: open websites, layout/style references, colors, fonts, approved, and rejected only.
- Social task: open social, photography, approved, and rejected only.

## Update Rule

When a reference becomes important enough to guide future work, add a short note to the brand's `reference-index.md`. If the learning is reusable across brands, add the method or checklist to the relevant `skills/` file instead of burying it in one reference folder.
