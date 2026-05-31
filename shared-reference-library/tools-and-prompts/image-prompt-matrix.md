# AI Image Generation Prompt Matrix

Use this guide when the bot needs to output image generation prompts (e.g., Midjourney, Stable Diffusion) for campaign concept visuals, ad creatives, or deck slide backgrounds.

---

## 1. Aesthetic Guidelines

To create a premium, state-of-the-art visual style, prompts should use:
* **High Contrast & Vibrant Color Accents:** Avoid flat colors. Use terms like "duotone lighting," "vibrant color gradient background," or specific HEX-informed tones (e.g., "Dark Cyan accent").
* **Studio-Quality Lighting:** Emphasize lighting setups ("soft studio lighting," "dramatic rim lighting," "soft diffusion filter").
* **Premium Textures & Surfaces:** Mention high-end textures ("brushed aluminum," "frosted glass," "soft matte plastic," "natural stone plinth").
* **Style Keywords:** Use "commercial photography," "minimalist product shot," "3D render," "cinematic lighting," "hyper-realistic."

---

## 2. Core Prompt Formulas

### Formula A: Minimalist Product Render (Pouch / Bottle)
> **Prompt:** `[Product/Packaging Type] standing on a [Material/Texture] plinth, minimalist clean aesthetic, [Background Color/Gradient], soft professional studio lighting, depth of field, commercial product photography, 8k resolution, shot on 50mm lens --ar 16:9 --v 6.0 --style raw`
* *Example (Supplement Brand):* `A frosted glass stand-up supplement pouch standing on a dark natural basalt stone plinth, minimalist clean aesthetic, emerald and deep blue gradient background, soft professional studio lighting, volumetric light rays, depth of field, commercial product photography, 8k resolution --ar 16:9 --v 6.0 --style raw`

### Formula B: Lifestyle / Active Context
> **Prompt:** `A close-up shot of [Target Audience Profile] using [Product/Asset], showing a feeling of [Desired Emotion], [Environment setting], natural morning sunlight, clean color palette, cinematic lighting, editorial aesthetic, shot on Arri Alexa --ar 16:9 --style raw`
* *Example (Supplement Brand):* `A close-up shot of a health-conscious urban adult taking a supplement capsule with water, showing a feeling of vitality and focus, modern bright apartment kitchen, natural morning sunlight streaming through windows, clean color palette, cinematic lighting, editorial aesthetic --ar 16:9 --style raw`

### Formula C: Flat Lay (Ingredients & Concept)
> **Prompt:** `Flat lay composition of [Product/Packaging] surrounded by raw ingredients [Ingredient A, B, C], arranged artistically on a [Surface type], soft diffused lighting, clean shadows, overhead shot, editorial food/health magazine style --ar 1:1 --style raw`
* *Example (Supplement Brand):* `Flat lay composition of a premium supplement bottle surrounded by raw herbal extracts, pure water droplets, and micro-nutrients, arranged artistically on a neutral light gray concrete surface, soft diffused lighting, clean shadows, overhead shot, editorial wellness magazine style --ar 1:1 --style raw`

---

## 3. Key Parameters Reference (Midjourney)

* **Aspect Ratios (`--ar`):**
  * `1:1` for Instagram feed posts, square web sections.
  * `16:9` or `16:10` for pitch decks, website hero banners, horizontal display ads.
  * `9:16` for Instagram Stories, Reels, TikTok ads.
* **Style Option (`--style raw`):** Forces a less stylized, more natural photographic result, excellent for clean commercial photography.
* **Stylize (`--s [0-1000]`):** Low stylization (e.g., `--s 50`) keeps the image true to the prompt text, high stylization (e.g., `--s 250`) adds creative artistic flair.
* **Chaos (`--c [0-100]`):** Keep low (e.g., `--c 5` or `--c 0`) for consistent, predictable product rendering results.
