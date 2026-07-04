# Agency Image Generation

Use this reference for static image concepts, prompt writing, generated-image batches, reference variations, and image edits.

Generated images are concept visualizations by default. They are not final production assets unless the user explicitly approves that status and asset rights are clear.

## Required Inputs

| Input | Required |
|---|---|
| Brand and category | Yes |
| Product, offer, or subject | Yes |
| Audience | Yes |
| Creative angle or message job | Yes |
| Desired viewer reaction | Yes |
| Brand colors or style | Yes, or `[To be supplied]` |
| Platform, placement, ratio | Yes |
| Mandatory assets | If any |
| Rejected styles | If any |
| Text overlay | If any |
| Claim/source/legal limits | Yes, or `[To be supplied]` |
| Usage rights for references | Yes, or `[To be supplied]` |

## Generation Modes

| Mode | Use When | Requirement |
|---|---|---|
| Text-to-image | No approved source image is needed | Fully describe subject, setting, style, lighting, composition, ratio, and avoidances. |
| Reference variation | Output must match an approved product, person, packaging, or style reference | State what must remain consistent and what may change. |
| Image edit | User supplied an image to modify | Give direct edit instructions and preserve approved elements. |

Use only supplied images or references explicitly approved in the brand folder. If approval status is unclear, treat it as `[To be supplied]`.

## Eight Prompt Layers

1. Subject: product, person, scene, object, or abstract concept.
2. Action or state: what is happening or being shown.
3. Setting: location, moment, environment, and context.
4. Visual style: photography, illustration, 3D, editorial, documentary, studio, UGC-style.
5. Lighting and color: light source, palette, temperature, contrast, brand colors.
6. Composition and framing: camera angle, crop, focal point, negative space, safe area.
7. Technical specs: ratio, size, placement, concept/final status, generation mode.
8. Exclusions: rejected styles, unsupported claims, fake badges, garbled text, private data, unapproved logos.

## Prompt Assembly Template

```text
[Subject], [action/state], in [setting].
[Visual style]. [Lighting and color direction]. [Composition and safe area].
[Aspect ratio / size / placement / generation mode / concept status].
Avoid: [rejected styles, unsupported claims, unapproved assets, unreadable text, private data].
```

## Variant Rules

Create 2-3 options per concept. Vary only one or two layers at a time:

- Composition variants: angle, crop, negative space.
- Setting variants: location, time, context.
- Style variants: photography, illustration, 3D, editorial.
- Mood variants: lighting, contrast, palette.

## Storage Rules

- Generated concepts: `outputs/[Brand]/creative/concepts/`
- Approved creative assets: `outputs/[Brand]/creative/final/`
- Prompt records: `brands/[Brand]/prompt-library.md`
- Asset records: `brands/[Brand]/asset-inventory.md`
- Generated image records: `brands/[Brand]/generated-image-log.md`

## QA Checklist

Reject or revise outputs that contain:

- unsupported claims, badges, certifications, testimonials, or metrics
- distorted product details
- wrong ratio or unsafe crop
- unreadable or unintended text
- unapproved logos, references, or likenesses
- styles the brand rejected
- unclear focal point
- no usable text-safe area when overlay is required
