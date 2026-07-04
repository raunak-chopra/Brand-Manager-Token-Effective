# Visual Identity Automation

Use this workflow to create moodboards and a full brand book from product context, brand context, and reference folders.

## Goal

The automation should:

- Ask only missing questions
- Build a clear understanding of the product, audience, category, and brand promise
- Read brand-specific files from `brands/[Brand Name]/`
- Read `context-index.md` before full documents
- List reference folders before opening reference files
- Audit visual references before creating directions
- Create 2-3 moodboard territories
- Recommend one direction with rationale
- Draft a practical brand book
- List missing inputs and production risks

## Fast Start Prompt

```text
Act as `agents/visual-identity-director.md`.

Brand folder: `brands/[Brand Name]/`
Goal: Create moodboards and a full visual identity brand book.

First:
- Read the brand `context-index.md`.
- Read the brand folder README only if needed.
- Read `skills/visual-identity-system/SKILL.md`.
- Ask only the missing questions needed to proceed.

Then:
- List reference folders.
- Audit only references relevant to the requested touchpoints.
- Create 2-3 moodboard territories.
- Score each territory.
- Recommend one direction.
- Draft the brand book using `[To be supplied]` for missing facts.
```

## Required Brand Folder

```text
brands/[Brand Name]/
  README.md
  brand-guidelines/
  moodboards/
  fonts/
  reference-library/
    approved/
    rejected/
    fonts/
    colors/
    styles/
    photography/
    illustration/
    packaging/
    websites/
    social/
    competitors/
  assets/
```

Use `brands/_template/` to create a new brand folder.

## Minimum Inputs

- Product / brand name
- Category
- Product explanation
- Primary audience
- Core promise
- Desired perception
- Competitors or category references
- First-use touchpoints
- Mandatory or rejected visual styles
- Reference folder paths

## Strong Inputs

- Existing logo files
- Existing brand guidelines
- Font files or font links
- Font license status
- Color references
- Packaging files
- Website, social, ad, and deck examples
- Product photography
- Competitor screenshots
- Approved and rejected references
- Legal, health, claims, or compliance rules
- Print and vendor constraints
- Final output format: Markdown, PDF, PPTX, Figma brief, or Canva brief

## Workflow

### 1. Intake

Read:

```text
brands/[Brand Name]/context-index.md
skills/visual-identity-system/references/intake-questionnaire.md
brands/[Brand Name]/brand-intake.md
```

Skip `brand-intake.md` if `context-index.md` already answers the task.

Output:

- Visual identity brief
- Assumptions
- Missing inputs

### 2. Reference Audit

Read:

```text
skills/visual-identity-system/references/reference-library-schema.md
brands/[Brand Name]/reference-library/
```

First list files. If a brand or shared reference folder is empty or insufficient, skip it and search the Envato organized asset catalog (`C:\Users\raunak.chopra\Downloads\Envato_Organized\Envato_Asset_Catalog.json`) using `shared-reference-library/tools-and-prompts/envato-asset-library-guide.md` as the guide. Otherwise, open the matching brand reference folder: packaging, websites, social, colors, fonts, approved, or rejected.

Output:

- Strong visual signals
- Conflicting signals
- Approved ingredients
- Rejected ingredients
- Category codes
- Whitespace

### 3. Moodboard Territories

Read:

```text
skills/visual-identity-system/references/moodboard-workflow.md
```

Output per route:

- Strategic idea
- Intended perception
- Color direction
- Typography direction
- Imagery direction
- Layout direction
- Graphic devices
- Best-fit applications
- Risks

### 4. Score And Select

Read:

```text
skills/visual-identity-system/references/asset-evaluation-rubric.md
```

Score:

- Strategy fit
- Audience relevance
- Category fit
- Distinctiveness
- Scalability
- Usability
- Accessibility
- Production practicality

### 5. Brand Book

Read:

```text
skills/visual-identity-system/references/brand-book-template.md
brands/[Brand Name]/brand-book.md
```

Output:

- Complete Markdown brand book
- Implementation checklist
- Open questions
- Required production assets

## Output Format

```markdown
# Brand Understanding
# Reference Audit
# Moodboard Territories
# Recommended Direction
# Brand Book
# Implementation Checklist
# Missing Inputs
# Recommended Additions / Removals
```

## Quality Rules

- Do not copy references directly.
- Extract principles from references.
- Treat rejected references as seriously as approved references.
- Tie every visual decision to perception, audience, and use case.
- Do not invent legal claims, font licenses, market data, or production specs.
- Use `[To be supplied]` for missing facts.
