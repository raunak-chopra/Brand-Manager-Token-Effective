# Reference Library Schema

Use this schema to convert reference folders into structured evidence.

## Folder Structure

```text
visual-references/
  01-approved/
  02-rejected/
  03-fonts/
  04-colors/
  05-photography/
  06-illustration/
  07-layouts/
  08-packaging/
  09-websites/
  10-social/
  11-competitors/
  12-moodboard-candidates/
```

## Reference Tagging Fields

| Field | Description |
|---|---|
| File name | Exact file name or link |
| Folder | Source folder |
| Status | Approved, explore, rejected, competitor, mandatory |
| Visual role | Color, type, layout, photography, illustration, logo, packaging, social, web |
| Personality | 3-5 traits the reference expresses |
| What works | Specific visual behavior to borrow |
| What to avoid | Specific visual behavior to reject |
| Category fit | High, medium, low |
| Distinctiveness | High, medium, low |
| Usability | High, medium, low |
| Notes | Any context from user |

## Audit Output Template

```markdown
# Reference Library Audit

## Summary
[What the references are pointing toward]

## Strong Signals
- [Repeated pattern across references]
- [Repeated pattern across references]

## Weak or Conflicting Signals
- [Contradiction or unclear preference]
- [Contradiction or unclear preference]

## Approved Ingredients
| Ingredient | Source | How to use |
|---|---|---|
| [Color/type/layout/etc.] | [Folder/file] | [Usage rule] |

## Rejected Ingredients
| Ingredient | Source | Why rejected |
|---|---|---|
| [Color/type/layout/etc.] | [Folder/file] | [Reason] |

## Category Codes
- [What the category commonly uses]
- [What must be kept for recognition]

## Whitespace
- [Visual opportunity to stand apart]
- [Visual opportunity to stand apart]
```

## Rules

- Do not copy references directly.
- Extract repeatable principles from references.
- Treat rejected references as seriously as approved references.
- If references conflict, explain the conflict and ask for a decision only if it blocks progress.

