# Ad Platform Specs

Use for placement, ratio, tracking, and campaign setup constraints. Keep exact platform limits current before publishing.

## Default Static Ratios

| Placement Type | Common Ratio |
|---|---|
| Feed square | 1:1 |
| Feed landscape | 1.91:1 |
| Stories/Reels still | 9:16 |
| YouTube/display thumbnail | 16:9 |
| LinkedIn feed | 1.91:1 or 1:1 |

## Required Checks

- Platform named.
- Placement named.
- Ratio selected.
- Safe area known.
- Copy character limits checked when platform-ready text is required.
- Destination URL and UTM rules supplied.
- Conversion event and tracking status supplied.

## Boundary

This file does not create copy or image prompts. Use:

- `skills/copy-system/references/ad-creative-copy.md` for text.
- `skills/visual-system/references/ad-image-generation-specs.md` for images.
- `templates/ads/ad-creative-brief.md` for final brief layout.
