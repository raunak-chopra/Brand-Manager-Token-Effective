# Image Prompting Principles (Model-Agnostic)

A universal guide for crafting highly effective prompts for any modern AI image generator. This reference details how to structure prompts, choose modifiers, and guide composition, lighting, and style.

---

## 1. Core Prompt Structure

Rather than using comma-separated "tag soups" (e.g., `car, neon, night, 8k`), structure your prompts as a cohesive, descriptive paragraph. Write as if you are briefing a professional human photographer or illustrator.

Use this foundational structure:
1. **The Subject:** What is the primary focus? (Include specific details like action, pose, age, expressions, clothing).
2. **The Environment/Setting:** Where is the subject located? (Include background details, weather, time of day, location).
3. **Lighting & Atmosphere:** What is the light source and mood? (cinematic lighting, soft diffused sunlight, moody twilight, warm glowing neon).
4. **Style & Medium:** Is it a photo, illustration, 3D render, or drawing? Specify details of the medium (e.g., "shallow depth of field", "textured watercolor paper", "matte finish").
5. **Color Palette:** What is the color scheme? (saturated, pastel, monochrome, warm neutrals, high contrast).

---

## 2. Subject Details & Materiality

Vague subjects lead to generic outputs. Be specific about materials, textures, and features:
* **Instead of:** `a cup of coffee`
* **Use:** `a rustic ceramic mug filled with dark roast coffee, with micro-foam latte art on top, resting on a textured oak table.`
* **Materiality words:** *matte finish, brushed steel, soft velvet, crumpled paper, polished marble, weathered wood, translucent glass, glossy plastic.*

---

## 3. Camera & Framing Cheat Sheet

Control the viewer's perspective and focal depth using standard camera terms:

| Framing Type | Description | Best For |
|---|---|---|
| **Extreme Close-Up** | Focuses on a single detail (eyes, product logo, textures) | Texture shots, high-detail macro shots |
| **Close-Up** | Subject fills the frame (e.g., head and shoulders) | Portraits, character details, expressions |
| **Medium Shot** | Subject from waist up | Character actions, interactions |
| **Wide Shot / Landscape** | Subject in relation to its environment | Scenic backdrops, environmental contexts |
| **Birds-Eye View / Top-Down** | Camera looks straight down on the scene | Flat-lays, layouts, maps, presentation boards |
| **Worms-Eye View** | Camera looks straight up from the ground | Dynamic, powerful, or imposing perspectives |

### Focal Depth (Depth of Field)
* **Shallow Depth of Field / Bokeh:** Subject is in sharp focus while the background is beautifully blurred. Best for product photography and portraits.
* **Deep Focus:** Both the foreground and background are in sharp, clear focus. Best for landscapes and wide interior scenes.

---

## 4. Lighting & Mood Guide

Lighting defines the emotional tone and realism of the generated asset:
* **Golden Hour:** Warm, soft, low-angle sunlight occurring just after sunrise or before sunset. Creates a welcoming, nostalgic, or premium feel.
* **Cinematic Lighting:** Dramatic, high-contrast lighting that separates the subject from the background, highlighting contours and creating depth.
* **Diffused/Soft Light:** Gentle, shadowless lighting (like on an overcast day). Excellent for skincare, flat-lays, and professional product presentations.
* **Backlighting / Rim Light:** Light source is behind the subject, creating a glowing outline or silhouette. Good for dramatic, spiritual, or heroic shots.
* **Neon / Cyberpunk:** Vibrant, colorful light sources (magenta, cyan, violet) reflecting off dark or wet surfaces. Best for urban, tech, or nightlife scenes.

---

## 5. Artistic Styles & Mediums

Specify the exact medium to ensure the visual aligns with the brand's aesthetic guidelines:
* **Photorealistic:** Style of a professional photograph (specify camera gear if needed, e.g., "shot on 35mm film", "editorial fashion photography").
* **Flat Vector Illustration:** Clean lines, solid color fills, minimalist shapes. Great for modern web UI illustrations and infographics.
* **Textured Watercolor:** Soft edges, bleeding colors, visible paper texture. Evokes warmth, creativity, and hand-crafted authenticity.
* **Isometric 3D Render:** A top-down, angled 3D view with clean lighting and smooth clay or plastic-like surfaces. Great for explaining technical processes or app concepts.
* **Line Art / Blueprint:** Monochromatic ink lines on a solid background, capturing architectural or technical details.

---

## 6. Prototyping Checklist

Before generating, run your prompt through this checklist:
- [ ] Is the primary subject clearly defined in a full sentence?
- [ ] Is the environment/background specified (not just left blank)?
- [ ] Is there a clear description of the lighting?
- [ ] Is the medium (photo, illustration, etc.) explicitly named?
- [ ] Are unwanted elements excluded or noted?
