# Creative System

Use for agency-grade creative territories, big ideas, campaign concepts, concept boards, generated image concepts, and creative critique.

## Inputs

Brand, category, audience, desired perception, promise, proof, offer, channel, mandatory assets, approved/rejected references, claim limits, usage rights, output format.

## Modes

| Mode | Use When | Reference Guide | Action Workflow Playbook |
|---|---|---|---|
| **Creative Territories** | exploring brand worlds, campaign routes, moodboard directions, or creative platforms | `references/creative-territories.md` | `workflows/01-develop-creative-territories.md` |
| **Big Ideas** | generating memorable campaign ideas, launch concepts, social-first ideas, or content IP | `references/big-idea-frameworks.md` | `workflows/02-generate-big-ideas.md` |
| **Concept Board** | packaging routes for decision, stakeholder review, or production handoff | `references/concept-board-standards.md` | `workflows/03-build-concept-board.md` |
| **Image Production** | producing image prompts, generated-image batches, image edits, or art-direction specs | `references/agency-image-generation.md` | `workflows/04-produce-image-concepts.md` |
| **Creative Critique** | reviewing and improving copy, ads, visuals, campaigns, landing pages, or brand ideas | `references/creative-quality-rubric.md` | `workflows/05-critique-and-improve.md` |

## Workflow

1. Load brand `context-index.md` first when available.
2. Identify the active creative **Mode**.
3. Load only the matching reference guide and workflow.
4. Develop 3-5 distinct routes unless the user asks for a single final direction.
5. Score routes before recommending.
6. Mark unsupported facts, claims, rights, and proof as `[To be supplied]`.
7. For image work, state generation mode, ratio, safe area, prompt, avoidances, QA notes, and save destination.

## Output

Creative territories, campaign platforms, big ideas, concept boards, image prompts, visual directions, generated asset review notes, scorecards, and improved creative versions.

## Guardrails

- Do not invent claims, market data, competitor facts, trend proof, awards, testimonials, usage rights, or font licenses.
- Do not use unapproved references, competitor assets, celebrity likenesses, private people, customer data, credentials, or confidential source files in prompts.
- Treat AI-generated imagery as concept visualization unless explicitly approved for production.
- Keep brand memory in `brands/[Brand]/`; keep shareable/generated outputs in `outputs/[Brand]/`.
