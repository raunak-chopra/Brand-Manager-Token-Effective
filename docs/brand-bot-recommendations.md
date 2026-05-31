# Brand Bot Recommendations

Use these additions to make the bot stronger without making the workspace heavy.

## Add

- `brands/[Brand]/brand-intake.md` for each brand
- Font license notes for every recommended typeface
- Approved and rejected reference folders
- Competitor screenshot folder
- Claims and compliance source folder
- Product photography and packaging source files
- Final output format preference: Markdown, PPTX, PDF, Figma brief, or Canva brief
- A small `source-links.md` file per brand for proofs, studies, and claims

## Remove Or Archive

- Duplicate scaffolds
- Unlabeled inspiration dumps
- Old exports when a final file exists
- Tool docs for platforms you do not use
- Empty experiment folders with no decisions
- Generic files that duplicate the active Brand Manager Bot workspace

## Keep

- `agents/` for specialist roles
- `skills/visual-identity-system/` for moodboard and brand-book workflow
- `skills/brand-strategy/` for positioning and brand foundation
- `skills/customer-insight/` for audience understanding
- `skills/ad-creative/` for visual production specs
- `brands/` for actual brand-specific work

## Optional Upgrade

Add a small automation command file later:

```text
/brand-book [brand-folder]
```

It should load the brand folder, ask missing questions, audit references, create territories, recommend one direction, and draft the brand book.

## Ongoing Upgrade Advice

Treat every completed project as a chance to improve the system:

- If an agent repeatedly needs the same instruction, add it to that agent.
- If a process repeats, add it to a skill or reference checklist.
- If a platform step is learned, update the matching tool guide.
- If a brand fact is confirmed, update the brand context index.
- If a source is still missing, add it to the missing-inputs list instead of guessing.
