# AI Content & Image Generation Tools

Reference for using Codex and Gemini in English-only static image ad creative workflows.

This workspace uses:

- **Codex** for text, content, static image generation, and image editing when available in the current session.
- **Gemini / Nano Banana Pro** for static image generation and image editing.

Do not recommend tools outside Codex and Gemini in this skill.
Do not create, brief, route, or recommend video generation.
Use English for prompts, filenames, output labels, and review notes.

---

## When to Use Each Tool

| Need | Use | Output |
|---|---|---|
| Ad copy, hooks, headlines, descriptions, CTAs | Codex | Platform-ready copy variants |
| Angle matrices and creative testing plans | Codex | Structured tables, priorities, rationale |
| Visual briefs and image prompts | Codex | Prompt-ready creative direction |
| Email, social, landing page, and campaign copy | Codex | Drafts, variants, QA notes |
| CSV-style creative matrices | Codex | Copy-pasteable structured output |
| Static ad images and concept visuals | Codex or Gemini / Nano Banana Pro | Image concepts or edited images |
| Image variation from an approved direction | Codex or Gemini / Nano Banana Pro | Static image alternatives |
| Editing an existing static image | Codex or Gemini / Nano Banana Pro | Revised image concept |

Use `[To be supplied]` for missing brand facts, claims, proof, product details, visual rules, source references, or legal constraints.

---

## Codex for Text Content

Use Codex as the default generator for all written marketing content. This includes ad copy, creative angles, visual briefs, image prompts, emails, landing page sections, social posts, campaign matrices, naming options, QA reviews, and documentation.

Codex should:

- Follow the brand context before generating copy.
- Respect platform character limits and placement constraints.
- Avoid inventing claims, proof, customer results, discounts, legal rules, or competitor facts.
- Explain the perception each recommendation creates, why it fits the brand, where to use it, and what to avoid.
- Format large creative batches as tables when that makes review or upload easier.

---

## Codex or Gemini for Static Images

Use Codex or Gemini image generation when the task needs static ad imagery, concept visualization, product mockups, or edits to existing images.

**Best for:** Static social ads, display ad concepts, product visuals, campaign concept boards, simple image edits, and prompt-to-image exploration.

**Access:** Use Codex image generation when available in the current session, or Gemini / Nano Banana Pro through the Gemini API, Google AI Studio, or Vertex AI.

**Use cases:**

- Generate static social media ad concepts from a visual brief.
- Create product-in-context concept visuals.
- Edit existing ad images, such as changing backgrounds, colors, crops, or composition.
- Produce multiple static visual directions for stakeholder review.
- Create image concepts that leave negative space for copy overlays.

**Prompting guidance:**

- Start from the brand brief and approved visual identity.
- Specify subject, scene, style, lighting, color, composition, aspect ratio, and copy-safe zones.
- Keep image text minimal. Prefer adding final text in design tools unless the brief explicitly asks for baked-in text.
- Label AI outputs as concept visuals unless they have been separately approved for final production.

**Example prompt:**

```text
Create a static 1:1 Meta feed ad concept for [Brand]. Show [product or offer] in [specific setting]. The visual should feel [desired perception] and use [brand colors or To be supplied]. Composition: centered subject with clean negative space in the top third for a short headline. Lighting: [lighting style]. Avoid [rejected styles or imagery].
```

---

## Generation Protocol

Use this protocol before any static image generation or edit:

1. Confirm the output is a static image. If the request asks for video, say this workspace only supports static image workflows and offer a still-frame concept instead.
2. Confirm the brand, product, audience, platform/placement, aspect ratio, desired perception, mandatory assets, rejected styles, and claim/legal constraints.
3. Select the tool: Codex image generation when available in the current session; otherwise Gemini / Nano Banana Pro.
4. Select the mode: text-to-image, reference-image variation, or image edit.
5. Select quality: preview for fast concept exploration; high quality for stakeholder review or handoff.
6. Generate 1 image for uncertain prompts, or 2-3 variants after the prompt direction is clear.
7. Review outputs before presenting: brand fit, product accuracy, claim risk, text-safe space, artifact risk, and whether it matches the requested aspect ratio.

## Model and Mode Selection

| Situation | Default Choice | Notes |
|---|---|---|
| New static concept from a brief | Codex or Gemini text-to-image | Use the eight-layer prompt from `image-prompt-workflow.md`. |
| Edit an existing approved image | Gemini / Nano Banana Pro edit, or Codex edit when available | Use precise edit instructions and preserve approved elements. |
| Match approved photography or product shape | Reference-image variation | Use only user-supplied or brand-approved references. |
| Explore several directions | Sequential variants | Change one or two prompt layers at a time. |
| Generate many approved variants | Batch prompt list | Use only after prompts are finalized and each output path is clear. |

Do not add extra providers, marketplaces, wallets, paid API layers, or third-party model lists unless the user explicitly changes the workspace rule.

## Aspect Ratio and Quality Presets

| Preset | Use For | Prompt Note |
|---|---|---|
| `1:1` | Meta feed, carousel cards, square concept boards | Center the subject; leave top or bottom third clean for copy. |
| `4:5` | Tall feed placements | Keep important detail away from top and bottom crop zones. |
| `9:16` | Story/Reels stills, vertical social concepts | Keep subject mid-frame and leave UI-safe margins. |
| `16:9` | X feed, presentation widescreen, website hero concepts | Use a strong focal point and controlled negative space. |
| `1.91:1` | Google Display and LinkedIn feed | Use off-center composition with copy-safe space on one side. |

Use platform specs when a platform is named. If the platform is unknown, ask only for the placement or use `[To be supplied]`.

## Reference Image Rules

- Use only images supplied by the user for this task, stored in the brand folder as approved generation references, or explicitly approved by the user for this generation task.
- Do not use celebrity likenesses, private people, competitor product images, unlicensed logos, or confidential customer assets.
- If approval status is unclear, treat the reference as not approved and ask for confirmation.
- Treat reference images as direction, not proof. Do not infer product claims, materials, certifications, or legal permissions from the image.
- For edits, name what must stay fixed: product shape, logo placement, packaging text, colors, people, setting, or composition.
- For variations, name what may change: background, lighting, camera angle, prop styling, crop, or mood.

## Security Protocol

- Never write API keys, tokens, customer data, private claims evidence, or legal documents into prompts or generated files.
- Use environment variables or the current approved tool session for credentials.
- Keep generated files inside the relevant brand or output folder when creating assets for a brand.
- Do not upload private brand references to any external tool unless the user supplied them for this generation task or the brand folder explicitly marks them as approved generation references.
- Mask sensitive account IDs, emails, order data, health data, and customer names in prompts.
- Stop and ask before using any paid external API path not already approved for this workspace.

## Error Handling

| Issue | Response |
|---|---|
| Missing brand facts | Use `[To be supplied]`; do not invent visual rules or claims. |
| Missing tool access or credentials | Explain the missing access and provide the prompt/brief for manual generation. |
| Poor prompt adherence | Tighten subject, composition, and negative guidance; regenerate one variant. |
| Bad text in image | Remove baked-in text and plan overlay in design tools. |
| Product or logo distortion | Switch to edit/reference mode using approved product assets, or mark as concept-only. |
| Unsafe or unapproved reference | Do not use it; ask for an approved substitute. |

---

## Static Image Workflow

1. Read the brand context and campaign brief.
2. Confirm the platform, placement, aspect ratio, and visual constraints.
3. Generate copy and visual direction with Codex.
4. Convert the chosen visual direction into an image-generation prompt.
5. Generate or edit static image concepts with Codex or Gemini / Nano Banana Pro.
6. Review for brand fit, claim risk, visual clarity, and copy-safe space.
7. Present the result as concept visualization unless cleared for production.

---

## Guardrails

- Use only Codex and Gemini for generation workflows.
- Use English only.
- Do not generate video.
- No unsupported claims, invented metrics, fake customer proof, or assumed legal approvals.
- No unapproved fonts, logos, product visuals, celebrity likenesses, or competitor assets.
- No platform-specific guidance unless the platform is explicitly requested or present in the brief.
