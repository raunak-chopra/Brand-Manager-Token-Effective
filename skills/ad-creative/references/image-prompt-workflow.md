# Image Prompt Workflow

Structured process for translating ad briefs and creative concepts into English-language static image generation prompts. Use this to produce concept visuals that a creatives team can execute against, and that senior stakeholders can evaluate before production.

---

## When to Use

- Visualizing an ad concept before design production begins
- Creating reference visuals for a creative brief
- Generating platform-ready ad images at scale
- Producing visual options for stakeholder review or alignment
- Building a concept board for a campaign pitch

This workflow is not a replacement for final design production. It produces concept-quality visuals that communicate creative direction clearly enough for approval, handoff, or rapid testing.

Do not use this workflow for video generation. If a user asks for video, create a static key visual, storyboard still, or thumbnail concept only.

---

## Inputs Required

Before writing any prompt, collect or confirm these from the brief and brand context:

| Input | Source | Required |
|---|---|---|
| Brand name and category | `brands/[Brand]/context-index.md` | Yes |
| Product or offer being advertised | Brief or intake | Yes |
| Target audience | Brief or intake | Yes |
| Creative angle and message | `ad-creative` SKILL output or brief | Yes |
| Desired viewer reaction | Brief | Yes |
| Brand colors (hex or descriptive) | Brand guidelines | Yes |
| Brand visual style (e.g., minimal, bold, editorial) | Brand guidelines or moodboard | Yes |
| Platform and placement | Brief | Yes |
| Mandatory visual elements | Brief or brand rules | If any |
| Rejected styles or imagery | Brand guidelines | If any |
| Reference images | Brand reference library | Recommended |
| Headline or text overlay needed | Copy from `ad-creative` output | If any |
| Static generation mode | Text-to-image, reference variation, or image edit | Yes |
| Output destination | `outputs/[Brand]/` or relevant brand folder | If creating files |

Use `[To be supplied]` for any input that is missing. Do not invent brand colors, visual styles, or product details.

---

## Static Generation Modes

Choose one mode before writing the prompt:

| Mode | Use When | Prompt Requirement |
|---|---|---|
| Text-to-image | No approved source image is needed | Fully describe subject, setting, style, lighting, composition, and aspect ratio. |
| Reference variation | The output must match an approved product, person, packaging, or style reference | State what must remain consistent and what may change. |
| Image edit | The user supplied an image to modify | Give direct edit instructions and preserve approved elements. |

For reference variation and image edit mode, use only images supplied for this task or explicitly marked as approved generation references in the brand folder. If approval status is unclear, treat the reference as not approved and ask for confirmation. Do not use competitor assets, celebrity likenesses, private people, or unlicensed logos.

---

## Prompt Architecture

Every image prompt follows this eight-layer structure. Work through each layer in order. Skip layers only when they are genuinely irrelevant to the concept.

### Layer 1 — Subject

What is the primary focus of the image?

- Product shot, product in use, person, scene, abstract concept
- Be specific: "a matte black bottle of omega-3 capsules on a marble countertop" not "a supplement product"

### Layer 2 — Action or State

What is happening in the image?

- Static (product hero), dynamic (person using product), environmental (product in context)
- For lifestyle: describe the moment, not just the person — "a woman mid-laugh at a brunch table, reaching for the product" not "a woman holding the product"

### Layer 3 — Setting and Environment

Where does this take place?

- Location, time of day, indoor/outdoor, weather, surroundings
- Tie the setting to the audience's aspirational context — where they want to see themselves

### Layer 4 — Visual Style

How should the image feel?

- Photography style: editorial, lifestyle, studio, documentary, UGC-style, flat lay
- Art direction: minimal, maximalist, clinical, warm, raw, polished
- Reference: describe category-level traits from approved references, such as "minimal premium product photography with matte textures and warm negative space"; do not ask to copy or imitate another brand's proprietary look.
- If the brand has a defined visual identity, translate those guidelines here

### Layer 5 — Lighting and Color

What is the light and palette doing?

- Lighting: soft natural, harsh directional, studio rim light, golden hour, overcast diffused
- Color temperature: warm, cool, neutral
- Brand palette: specify dominant and accent colors — "dominant warm white and sand, accent deep forest green"
- Mood through color: desaturated = calm/premium, saturated = energy/youth

### Layer 6 — Composition and Framing

How is the frame arranged?

- Camera angle: eye level, overhead, low angle, three-quarter
- Framing: close-up, medium, wide, macro detail
- Composition: centered, rule of thirds, negative space for text overlay, asymmetric
- If text will be overlaid in post-production, specify where the safe space should be — "leave the upper third empty for headline placement"

### Layer 7 — Technical Specifications

What does the output need to be?

- Aspect ratio (from platform specs): 1:1, 9:16, 1.91:1, 16:9
- Resolution: 1080x1080, 1080x1920, 1200x628, etc.
- File intent: final production, concept visualization, A/B test variant
- Quality level: preview for exploration, high quality for stakeholder review
- Generation mode: text-to-image, reference variation, or image edit

### Layer 8 - Safety and Exclusions

What should the generator avoid?

- Rejected brand styles, colors, settings, or imagery
- Unsupported claims, badges, certifications, before/after implications, or performance promises
- Garbled in-image text; prefer blank space for later design overlay
- Celebrity likenesses, competitor products, unapproved people, and private customer data
- Any non-English text or visual labels

---

## Prompt Assembly Template

Use this template to assemble a complete prompt from the eight layers:

```
[Subject description], [action or state], [setting and environment].
[Visual style]. [Lighting and color direction]. [Composition and framing].
[Aspect ratio / resolution / quality / generation mode].
Avoid: [rejected styles, unsafe assets, unsupported claims, non-English text, and other exclusions].
```

### Example — Supplement Brand, Meta Feed Ad

**Brief inputs:**
- Product: Omega-3 capsules, matte black bottle
- Audience: Health-conscious professionals, 28-40
- Angle: Daily ritual / effortless wellness
- Brand style: Minimal, premium, warm neutrals
- Platform: Meta Feed (1:1)
- Headline overlay: Yes, bottom third

**Assembled prompt:**
```
A matte black bottle of omega-3 capsules on a light oak breakfast table next to a ceramic coffee cup and an open book, morning light streaming through a linen curtain. Clean, minimal editorial photography with a premium feel. Soft warm natural light from the left, palette of warm whites, oak tones, and matte black. Shot from a slightly elevated three-quarter angle, product centered in the lower two-thirds of the frame with the upper third left open as negative space for text overlay. 1:1 aspect ratio, 1080x1080.
Avoid unsupported health claims, readable label text beyond supplied packaging, celebrity likenesses, and non-English text.
```

### Example — SaaS Product, LinkedIn Ad

**Brief inputs:**
- Product: Project management tool
- Audience: Team leads at mid-size companies
- Angle: Clarity from chaos
- Brand style: Modern, confident, blue-dominant
- Platform: LinkedIn Feed (1.91:1)
- Headline overlay: Yes, left half

**Assembled prompt:**
```
A clean, modern laptop screen showing a minimal kanban board interface with color-coded task cards, placed on a white desk in a bright, organized workspace with a plant and notebook visible. Professional product photography style, polished and aspirational. Bright even lighting with subtle shadows, cool white tones with brand blue (#2563EB) as the accent color on the interface. Shot straight-on at eye level, laptop positioned in the right half of the frame with the left half as clean negative space for headline. 1.91:1 aspect ratio, 1200x628.
Avoid fake customer logos, readable invented metrics, security badges, competitor UI, and non-English text.
```

---

## Brand-to-Prompt Translation

When brand guidelines exist, translate them into prompt language using this mapping:

| Brand Guideline Element | Prompt Translation |
|---|---|
| Primary color: #1A3C34 | "deep forest green as the dominant color" |
| Secondary color: #F5F0E8 | "warm cream as the background tone" |
| Typography: serif, editorial | "editorial feel, sophisticated, magazine-quality" |
| Photography style: candid, natural | "documentary-style photography, unposed, natural moments" |
| Texture: organic, tactile | "visible textures — linen, paper, wood grain, matte surfaces" |
| Brand personality: bold, challenger | "high contrast, unconventional composition, confident framing" |
| Brand personality: calm, premium | "ample negative space, soft gradients, muted palette" |
| Rejected: stock photo look | "avoid generic corporate imagery, posed smiles, or sterile environments" |
| Rejected: neon or fluorescent colors | "no bright neon, no fluorescent tones, keep palette grounded" |

Always include rejected styles as negative guidance in the prompt or as negative-prompt parameters if the tool supports them.

---

## Concept Visualization for Stakeholders

When the goal is stakeholder alignment rather than production, adjust the workflow:

### What Stakeholders Need to See

1. **The idea, not the pixel** — concept visuals prove the creative direction is right, not that the final asset is ready
2. **Multiple options** — generate 2-3 visual interpretations of the same concept so stakeholders can react to directions, not just approve/reject a single image
3. **Context** — show the image in a platform mockup (feed, story, billboard) so stakeholders evaluate it as an ad, not as isolated art

### Concept Board Format

For each creative concept, present:

```markdown
## Concept [Number]: [Concept Name]

### Creative Angle
[The strategic angle from the ad-creative output]

### Key Message
[The headline or core copy]

### Visual Direction
[2-3 sentence description of what the image communicates]

### Visual Options
[2-3 generated images with brief notes on each]

### Platform Context
[Which platform, which placement, how the viewer will encounter it]

### Why This Works
[1-2 sentences connecting the visual to the audience insight and brand strategy]
```

### Stakeholder Review Checklist

Before presenting concept visuals, verify:

| Check | Pass? |
|---|---|
| Does the image communicate the creative angle without reading the headline? | |
| Does it feel like the brand? | |
| Would the target audience stop scrolling? | |
| Is there clear space for text overlay if needed? | |
| Does it avoid rejected brand styles? | |
| Is the product visible and recognizable (if product-focused)? | |
| Does it work at the intended platform size (mobile thumb, desktop feed)? | |

---

## Creating Prompt Variants

To produce multiple visual options from one concept, vary **one or two layers** at a time while keeping the others constant.

### Variant Matrix

| Variant | What Changes | What Stays |
|---|---|---|
| Composition variants | Camera angle, framing, crop | Subject, style, color, setting |
| Setting variants | Location, time of day, context | Subject, style, composition |
| Style variants | Photography style, art direction | Subject, setting, composition |
| Mood variants | Lighting, color temperature | Subject, setting, composition |

### Example — 4 Variants from One Concept

**Base concept:** Omega-3 bottle, daily ritual angle

| # | Variant Type | Prompt Adjustment |
|---|---|---|
| 1 | Setting | Morning kitchen countertop, natural light |
| 2 | Setting | Gym bag contents, flat lay |
| 3 | Composition | Extreme close-up on capsules spilling from bottle |
| 4 | Style | UGC-style handheld photo, slightly imperfect framing |

This gives stakeholders a range to react to without producing entirely different concepts.

---

## Tool Selection at Prompt Time

Choose the generation tool based on what the prompt requires:

| Prompt Characteristic | Best Tool | Why |
|---|---|---|
| Quick iteration on existing image | Nano Banana Pro | Native edit-in-place |
| Static ad concept from a brief | Codex or Gemini / Nano Banana Pro | Prompt-to-image generation for concept visuals |
| Product or offer shown in context | Codex or Gemini / Nano Banana Pro | Strong fit for static campaign imagery |
| High volume of static concept options | Codex or Gemini / Nano Banana Pro | One approved prompt can be varied quickly |
| Need to match existing brand photography | Codex or Gemini / Nano Banana Pro | Use approved reference images and brand rules |

For full tool details, see `generative-tools.md`.

---

## Batch and Variant Rules

- Generate sequentially while prompts are still being explored.
- Use a batch prompt list only after the concept, aspect ratio, and output names are approved.
- For 2-3 stakeholder options, vary one or two layers at a time so reviewers can compare the direction.
- Do not batch-generate if each image still needs separate strategic thinking.
- Save final/shareable deliverables in `outputs/[Brand]/` when creating files for a brand.

---

## Pre-Generation Checklist

| Check | Required Action |
|---|---|
| Static-only | Confirm this is an image, not video. |
| English-only | Prompt, labels, filenames, and review notes are English. |
| Brand facts | Pull from brand context or use `[To be supplied]`. |
| Claims | Remove unsupported claims, badges, certifications, or performance implications. |
| References | Use only images supplied for this task or approved generation references from the brand folder. |
| Privacy | Exclude customer data, private people, credentials, order data, and sensitive records. |
| Platform fit | Confirm aspect ratio, crop, and text-safe zones. |
| Output label | Mark concept visuals as not final production unless cleared. |

---

## Anti-Patterns

Avoid these when writing prompts or presenting concept visuals:

| Anti-Pattern | Problem | Fix |
|---|---|---|
| Prompt is a list of adjectives | Produces generic, unfocused images | Lead with a concrete subject and scene, then add modifiers |
| Overloading generated images with text | Text can become garbled or visually crowded | Keep image text sparse, or plan to overlay final text in design tools |
| Overly detailed face descriptions | AI faces can look uncanny or inconsistent | Describe the moment and body language, not facial features |
| No negative space for copy | Image is unusable as an ad without heavy cropping | Always specify where text overlay space should be |
| Using the same prompt for all platforms | Aspect ratio and density mismatches | Adapt composition and framing per platform spec |
| Presenting one option to stakeholders | Forces approve/reject instead of directional feedback | Always present 2-3 options to enable comparison |
| Inventing brand colors or styles in prompt | Output won't match the actual brand | Always pull from brand guidelines; use `[To be supplied]` if missing |
| Generating final production assets with AI | AI output may not meet print/production tolerances | Label all AI output as concept visualization unless explicitly cleared for production |
| Mixing providers or unsupported workflows | Creates inconsistent process and security risk | Use only Codex or Gemini / Nano Banana Pro |
| Asking for video assets | Outside this workspace scope | Offer a static key visual, thumbnail, or storyboard still |

---

## Platform Quick-Reference

Minimum prompt adjustments by platform (full specs in `platform-specs.md`):

| Platform + Placement | Aspect Ratio | Size | Composition Notes |
|---|---|---|---|
| Meta Feed | 1:1 | 1080x1080 | Centered subject, text overlay top or bottom third |
| Meta Stories / Reels | 9:16 | 1080x1920 | Vertical framing, subject mid-frame, text safe zones top and bottom |
| Meta Carousel | 1:1 | 1080x1080 | Consistent style across cards, visual continuity |
| Google Display | 1.91:1 | 1200x628 | Wide landscape, subject off-center, text on one side |
| LinkedIn Feed | 1.91:1 | 1200x628 | Professional context, clean backgrounds, text left or right |
| Twitter/X Feed | 16:9 | 1200x675 | Landscape, strong focal point, minimal text |

---

## Workflow Summary

```
1. Collect inputs (brief, brand context, platform, angle)
2. Confirm brand visual rules (colors, style, rejected elements)
3. Build prompt using the eight-layer architecture
4. Select the right generation tool
5. Generate 2-3 variants per concept
6. Assemble concept board for stakeholder review
7. Score against stakeholder review checklist
8. Iterate or hand off to creatives team for production
```

---

## Guardrails

- Do not invent brand colors, visual styles, product details, or claims.
- Do not present AI-generated images as final production assets unless explicitly approved.
- Do not generate images of real people, celebrities, or competitors' products.
- Do not generate video.
- Use English only.
- Use only Codex and Gemini / Nano Banana Pro.
- Do not include API keys, secrets, customer data, private records, or confidential claim evidence in prompts.
- Use `[To be supplied]` for any missing brand inputs.
- Always verify aspect ratio and text-safe zones before generating.
- Label all concept visuals clearly: "Concept visualization — not final production."
