# Context Router

Use this when a task could pull from many files. Start with the smallest reliable source, then expand only if needed.

## Default Retrieval Order

1. `AGENTS.md`
2. `brands/[Brand]/context-index.md`, if a brand is named
3. `_core/ROUTER.md`, only if route is unclear
4. One agent card
5. One skill card
6. Active workflow/reference/template only
7. `_core/COMPRESSION-RULES.md`, if context is long or historical

## Brand Memory Retrieval

| Need | First Read | Then Read Only If Needed |
|---|---|---|
| Summary facts | `context-index.md` | `brand-intake.md`, `brand-book.md` |
| Claims/proof | `claim-registry.md` | source proof named in registry |
| Past decisions | `decision-log.md` | original output or note named in log |
| Assets | `asset-inventory.md` | selected asset folders |
| Visual references | `reference-index.md` | selected referenced files |
| Prompts | `prompt-library.md` | selected output or source prompt |
| Learnings | `learnings-registry.md` | original test or output |
| Experiments | `experiments-backlog.md` | selected report or analytics source |

## Cache Rule

If a source is repeatedly useful, add a short pointer to `memory-graph/index.md` instead of copying the source content.

Do not create duplicate facts. Link to the source of truth.
