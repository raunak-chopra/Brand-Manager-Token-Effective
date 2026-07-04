# Agents Router

Use this file to choose one primary agent. Then load only that agent plus one active merged skill.

## Default Rule

Use one agent and one skill by default:

```text
brands/[Brand]/context-index.md
agents/ROUTER.md, only if agent choice is unclear
agents/[agent].md
skills/ROUTER.md, only if skill choice is unclear
skills/[skill]/SKILL.md
selected references only
```

Do not load `old agents - DO NOT EDIT/` during normal chats. It is a full-detail archive only.

## Agent Map

| Need | Primary Agent | Primary Skill | Use When |
|---|---|---|---|
| Acquisition, TOFU, SEO, channel distribution, demand capture | `attraction-specialist` | `content-system`, `paid-media`, or `conversion-system` | The task is about attracting qualified traffic or structuring acquisition channels. |
| Ideation, campaign concepts, angles, naming, creative routes | `brainstormer` | `copy-system` or `ad-creative` | The task needs options, tradeoffs, hooks, or campaign territories before execution. |
| Voice, brand consistency, claim risk, final copy review | `brand-voice-guardian` | `copy-system` or `brand-strategy` | The task is review, risk, tone, quality control, or brand fit. |
| CRO, funnels, landing pages, experiments, measurement | `conversion-optimizer` | `conversion-system` | The task is conversion diagnosis, testing, tracking, or performance interpretation. |
| Marketing copy, ads, pages, emails, CTAs, rewrites | `copywriter` | `copy-system`, `ad-creative`, or `email-lifecycle` | The task asks for copy creation or practical rewrite variants. |
| Email campaigns, newsletters, flows, lifecycle automation | `email-wizard` | `email-lifecycle` | The task involves email strategy, sequence design, automation, deliverability, or tests. |
| Personas, ICPs, customer discovery, guided intake | `persona-builder` | `customer-insight` | The task needs progressive questions or a customer profile built from incomplete inputs. |
| Plans, calendars, timelines, budgets, campaign operations | `planner` | `content-system`, `paid-media`, or `brand-strategy` | The task requires sequencing, resource allocation, timelines, or channel mix. |
| Market, customer, competitor, and source-backed research | `researcher` | `customer-insight` or `brand-strategy` | The task requires evidence gathering, synthesis, or source risk control. |
| Performance reports, campaign reviews, learning extraction | `researcher` | `conversion-system` or `second-brain` | The task needs evidence-backed performance interpretation or reusable learnings. |
| Visual direction, moodboards, identity systems, brand books | `visual-identity-director` | `visual-identity-system` | The task turns strategy and references into visual systems or brand-book guidance. |
| Ad account audits, diagnostics, performance decline investigation | `ad-diagnostician` | `paid-media` | The task is diagnosing what's broken in an ad account using performance data. |

## Tie Breakers

- If the user asks for review, use `brand-voice-guardian` for copy/brand review and `conversion-optimizer` for page/funnel review.
- If the user asks for strategy and a calendar, use `planner`.
- If the user asks for ideas before execution, use `brainstormer`.
- If the user asks for evidence, market facts, competitors, or sources, use `researcher`.
- If the user asks what to remember, what worked, or what should improve the workspace, use `researcher` with `second-brain`.
- If the user asks for emails, use `email-wizard` even when copy is involved.
- If the user asks for final copy and the strategy is already clear, use `copywriter`.
- If the user asks to audit or diagnose ad account performance, use `ad-diagnostician`.

## Archive Rule

Full legacy agent snapshots live in `old agents - DO NOT EDIT/`. Do not load that folder during normal chats. Use active compact agents in `agents/`.
