# Visual System

Use for moodboards, visual territories, identity systems, brand books, art direction, asset evaluation, and static ad image generation specs.

## Inputs

Brand strategy, desired perception, approved/rejected references, mandatory colors/fonts/logos/assets, output format, usage context.

## Modes

| Mode | Use When | Reference Guide | Action Workflow Playbook |
|---|---|---|---|
| **Identity** | defining colors, typography, logos, and layout rules | `../brand-system/references/visual-identity-direction.md`<br>`../brand-system/references/brand-color-psychology.md`<br>`../brand-system/references/brand-typography-systems.md` | `../brand-system/workflows/10-set-visual-direction.md`<br>`../brand-system/workflows/11-choose-colors.md`<br>`../brand-system/workflows/12-select-typography.md` |
| **Audit** | conducting competitive visual audits | `references/competitive-visual-audit.md` | `../insight-system/workflows/01-research-brand.md` |
| **Prompting** | crafting prompts for Gemini/Codex image tools | `references/image-prompting-principles.md`<br>`references/gemini-codex-image-specs.md` | `workflows/01-craft-image-prompts.md` |
| **Brand Book** | compiling the final visual style rules | `templates/brand/brand-book.md` | `../brand-system/workflows/13-compile-guidelines.md` |

## Workflow

1. Load brand `context-index.md` first when available.
2. Identify the active visual **Mode**.
3. Load the corresponding **Reference Guide** and **Action Workflow Playbook**.
4. Conduct visual research or prompt crafting following the playbook instructions.
5. Provide photorealistic/illustrative specs optimized for Gemini and Codex image tools.
6. Outline color specs (HEX, RGB, CMYK, Pantone) and accessibility checks.

## Output

Visual identity guidelines, model-agnostic image prompts, style guidelines, color palettes, and typographic scales.
