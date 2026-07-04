# Playbook: Crafting Image Prompts (Model-Agnostic)

Use this playbook to guide the user in crafting highly effective image prompts for Gemini, Codex, or other text-to-image generators. This is a step-by-step interactive workflow.

---

## 1. Analyze the Request

When the user asks to generate an image or craft a prompt:
1. **Analyze input references:**
   - Did the user upload or refer to any images?
   - Is it a character/portrait? (Requires Identity Locking).
   - Is it a wireframe/sketch? (Requires Spatial/Layout Control).
   - Is it an existing asset to modify? (Requires Semantic Editing).
2. **Identify the goal:**
   - What is the image type? (photo, vector art, UI mockup, product shot, infographic, etc.)
   - What is the marketing use case? (landing page, ad creative, social graphic, presentation slide).
   - What key elements are missing? (setting, camera framing, color theme, style, lighting).

---

## 2. Gather Context (Interactive Discovery)

Guide the user through a brief, interactive conversation to lock down missing details. Ask one or two focused questions at a time:

### Discovery Questions:
1. **Visual Style & Medium:** "What style are you going for? (e.g., editorial product photography, flat vector web illustration, hand-drawn sketch, futuristic 3D clay render)."
2. **Key Subject Details:** "Can you describe the primary subject? (e.g., the specific product, its packaging, materials, colors, or person's appearance/actions)."
3. **Lighting & Atmosphere:** "What kind of mood or lighting do you want? (e.g., warm golden hour, bright clean studio light, neon reflections at night)."
4. **Dimensions/Placements:** "Do you have a specific aspect ratio or size in mind? (e.g., 16:9 landscape, 1:1 square, 9:16 portrait)."
5. **Brand Guidelines:** "Are there specific brand colors or guidelines we must follow?"

---

## 3. Structure the Final Prompt

Once you have gathered the details, combine them into an optimized prompt using this template structure:

```markdown
### ðŸ“‹ Visual Prompt

**Prompt to copy/paste:**
> "[Subject details: actions, clothing, textures] in a [setting: background details, time of day]. Shot in the style of [medium: photograph/illustration details, camera type, lens focal length, depth of field] under [lighting type: soft, cinematic, dramatic] lighting. Color palette: [colors]. [Include any negative prompt exclusions: e.g., 'no date stamps, no watermarks']."

**Reference Image Instructions (If applicable):**
- **Subject/Face Reference:** "Attach your character photo as Image 1 and use: 'Maintain the exact facial features and expressions of the person in Image 1.'"
- **Layout/Composition Reference:** "Attach your sketch/wireframe as Image 2 and use: 'Strictly follow the spatial composition, layout, and placement of elements shown in Image 2.'"

**Best Settings:**
- Aspect Ratio: [e.g. 16:9 / 1:1]
- Mode: Detailed/Creative
```

---

## 4. Refinement & Iteration

After presenting the prompt, explain *why* you structured it that way and ask:
- *"Does this prompt capture your vision, or should we adjust the lighting, style, or specific subject details?"*

Iterate on the prompt based on the user's feedback. If they want to test a variation, output it clearly.
