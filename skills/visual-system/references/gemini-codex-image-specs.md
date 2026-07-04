# Gemini & Codex Image Generation Specifications

A practical guide to leveraging the unique capabilities, formatting rules, and advanced editing features of the Gemini and Codex image generation tools.

---

## 1. Advanced Text Rendering

Gemini and Codex image generation tools support highly legible, high-fidelity text rendering in multiple styles (sans-serif, script, 3D typography, blueprints, labels).

### Best Practices:
* **Literal Quotation:** Specify the exact text to render inside quotation marks.
* **Font Style:** Describe the visual appearance of the lettering (e.g., "written in a clean, modern white sans-serif font with a subtle drop shadow").
* **Layout Context:** Tell the model where to put the text (e.g., "The text is centered on the clean wooden signage board").
* **Keep it Brief:** Shorter copy renders with significantly higher accuracy than full paragraphs.

**Example:** 
> "A professional product shot of a minimalist perfume bottle on a marble pedestal. The label on the bottle clearly displays the text 'AURA' in a sophisticated, embossed black serif font."

---

## 2. Character Consistency & Identity Locking

When working with Codex or Gemini image generation tools, you can leverage reference images to maintain character consistency across multiple generations.

### Rules for Identity Locking:
* **Explicit Reference:** Refer to your uploaded character sheet or portrait as `Image 1`.
* **Locking Formula:** Use the phrase: *"Maintain the exact same facial features, hair structure, and facial dimensions of the person shown in Image 1."*
* **Describe Changes:** Specify what *should* change while the face remains locked (e.g., "Change their expression to surprised, pose them pointing to the right, and change their outfit to a professional navy blazer").
* **Sequence Control:** For comic panels or storyboards, specify: *"Generate the images sequentially, keeping character identity and clothing consistent across panels."*

---

## 3. Spatial Control & Layout Guidance

You can upload a layout blueprint, wireframe, or hand-drawn sketch (referred to as `Image 1` or `Image 2`) to strictly dictate the spatial layout of objects, text, and compositions.

* **Strict Guidance:** Use: *"Follow the structural layout and composition of Image 1 exactly. Place the main product where the sketch shows the central circle, and place the headline text in the upper third matching the highlighted box."*
* **Wireframes to Mockups:** Feed wireframe layouts to the image tool to generate high-fidelity interface visualizations and marketing landing page mockups.

---

## 4. Semantic Editing & In-Painting

Instead of complex manual masking, the image tools understand semantic edit requests natively.

* **Object Removal:** Describe the target and the fill: *"In Image 1, remove the cluttered background elements and replace them with a clean, soft-focused minimalist concrete wall."*
* **Localization:** Translate ads or assets to different locales: *"In Image 1, translate the background cityscape from London to Tokyo, swapping the red bus for a modern Tokyo scene, and change the billboard text to Japanese."*
* **Lighting & Seasonal Shifts:** Translate seasons and lighting: *"Take the house in Image 1 and render it in winter, adding snow to the roof and surrounding yard, and changing the lighting to a cold, overcast afternoon."*

---

## 5. Image Quality & Output Specs

* **High Resolution:** Always request your target scale explicitly (e.g., "Render in 4K resolution suitable for print" or "Generate as a 2K landscape image").
* **Negative Prompting / Exclusions:** To prevent artifacts, explicitly list what should be omitted in the prompt (e.g., "no date stamps, no watermarks, no unwanted text, no borders").
