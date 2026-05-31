# Files And Information To Fill Or Update

Use this as the running checklist for completing the Brand Manager Bot workspace. Mark items complete only when the source file or fact has been supplied.

## Workspace-Level Files

| File | Needed Update | Priority |
|---|---|---|
| `AGENTS.md` | Keep as canonical assistant instructions when operating rules change | High |
| `cheatsheet.md` | Add new common prompts, agents, skills, and supported tools after they become standard | Medium |
| `walkthrough.md` | Update when folder structure or workflow changes | Medium |
| `usageguide.md` | Update when agents, skills, or tool docs are added or removed | Medium |
| `docs/agent-skill-workflows.md` | Keep agent/skill routing and reusable prompts current | Medium |
| `agents/ROUTER.md` | Keep compact agent routing current | High |
| `skills/ROUTER.md` | Keep compact skill routing current | High |
| `docs/brand-readiness-checklist.md` | Keep brand readiness requirements current | Medium |
| `docs/claim-risk-checklist.md` | Keep claim/source risk checks current | High |
| `docs/migration-index.md` | Keep archive and replacement routing current | Medium |
| `outputs/README.md` | Keep output naming and deliverable storage rules current | Medium |
| `tools/REGISTRY.md` | Add tools only when matching integration docs exist | High |
| `tools/clis/README.md` | Add CLI commands only after scripts exist and usage is tested | Medium |

## Repo Questions To Answer

These questions make the workspace sharper without tying it to a single brand.

| Question | Where To Store The Answer |
|---|---|
| Which output formats should be default: Markdown, PPTX, PDF, Figma brief, Canva brief, spreadsheet, or another format? | `README.md`, `outputs/README.md`, and relevant output templates |
| Which brand categories will this repo handle most often? | `README.md` and relevant `skills/` references |
| Which categories require stricter claim/legal review? | `docs/claim-risk-checklist.md` and category reference files |
| Which platforms are actually used for ads, analytics, email, CRM, social, and CRO? | `tools/REGISTRY.md` and `tools/integrations/` |
| Which deliverables should have first-class templates? | `outputs/_templates/` |
| What is the preferred naming convention for brands, campaigns, files, UTMs, and creative variants? | `docs/where-to-put-references.md`, `tools/integrations/`, and brand intake files |
| What should trigger a context usage log entry? | `logs/context-usage/README.md` |
| What private or raw data must never be committed? | `SECURITY.md` and `tools/integrations/github.md` |
| Which reusable visual references are licensed and approved for workspace use? | `shared-reference-library/README.md` and asset notes |
| Which repeat workflows should become commands or checklists? | `skills/`, `docs/`, or future command docs |
| Which learnings should become workspace-wide principles instead of brand-specific memory? | `logs/2nd-brain/cross-cutting-principles.md` |

## Bot Capability Inputs To Supply

Use this as the master intake list for making the bot more useful, accurate, and execution-ready across brands. Store brand-specific files in `brands/[Brand]/`; store reusable references in `shared-reference-library/`; store final/shareable deliverables in `outputs/[Brand]/`.

### Core Brand Source Documents

| Need | Why The Bot Needs It | Target Location | Status |
|---|---|---|---|
| Brand intake with product, category, audience, promise, perception, competitors, touchpoints, mandatory assets, rejected styles, and reference folders | Baseline for every brand, campaign, copy, creative, and media task | `brands/[Brand]/brand-intake.md` | `[To be supplied]` |
| Compact brand context index with confirmed facts, source paths, approved claims, legal rules, and open gaps | Fast loading before any task without rereading large files | `brands/[Brand]/context-index.md` | `[To be supplied]` |
| Brand guidelines or brand book | Voice, identity, usage rules, messaging, visual rules, and design consistency | `brands/[Brand]/brand-guidelines/` or `brands/[Brand]/brand-book.md` | `[To be supplied]` |
| Voice and copy rules with examples of approved and rejected wording | Reliable external-facing copy and reviews | `brands/[Brand]/brand-guidelines/` or `brands/[Brand]/reference-library/copy/` | `[To be supplied]` |
| Product/SKU catalog with names, descriptions, variants, pricing, bundles, and availability | Accurate offers, pages, ads, emails, and content | `brands/[Brand]/brand-intake.md` or `assets/product-data/` | `[To be supplied]` |
| Offer calendar with promo rules, dates, eligibility, exclusions, and approved wording | Prevents invented discounts, urgency, or terms | `brands/[Brand]/assets/offer-sources/` | `[To be supplied]` |
| Legal/compliance rules and reviewer workflow | Required for claims, regulated categories, ad platforms, and approvals | `brands/[Brand]/assets/claims-sources/` or `brand-intake.md` | `[To be supplied]` |

### References And Inspiration

| Need | Why The Bot Needs It | Target Location | Status |
|---|---|---|---|
| Approved visual references with short notes on what to emulate | Moodboards, identity routes, ads, landing pages, and social direction | `brands/[Brand]/reference-library/approved/` | `[To be supplied]` |
| Rejected visual references with reasons | Prevents repeated unwanted styles | `brands/[Brand]/reference-library/rejected/` | `[To be supplied]` |
| Competitor/category screenshots and links with capture dates | Positioning, differentiation, category conventions, and claim comparison | `brands/[Brand]/reference-library/competitors/` | `[To be supplied]` |
| Website, landing page, social, packaging, email, and ad examples | Channel-specific creative and layout decisions | Matching folders inside `brands/[Brand]/reference-library/` | `[To be supplied]` |
| Font references and license proof | Typography choices and usage safety | `brands/[Brand]/reference-library/fonts/` | `[To be supplied]` |
| Color references and approved palette rules | Visual consistency and production-ready identity work | `brands/[Brand]/reference-library/colors/` | `[To be supplied]` |
| Reusable cross-brand reference examples | Helps the bot build faster when references are not brand-specific | `shared-reference-library/` | `[To be supplied]` |

### Assets And Production Files

| Need | Why The Bot Needs It | Target Location | Status |
|---|---|---|---|
| Logo source files and approved exports | Brand books, ads, decks, pages, and templates | `brands/[Brand]/assets/logos/` | `[To be supplied]` |
| Product photography, pack shots, and lifestyle images | Ad creative, landing pages, social, and visual systems | `brands/[Brand]/assets/product-photography/` and `assets/lifestyle-photography/` | `[To be supplied]` |
| Packaging source files and production specs | Packaging reviews, claims placement, and vendor-ready guidance | `brands/[Brand]/assets/packaging/` | `[To be supplied]` |
| Existing templates for ads, social, emails, decks, and web banners | Keeps execution consistent with prior work | `brands/[Brand]/assets/templates/` | `[To be supplied]` |
| Final exports and previously approved deliverables | Lets the bot reuse proven patterns instead of restarting | `brands/[Brand]/assets/exports/` and `outputs/[Brand]/` | `[To be supplied]` |
| Asset checklist with file paths, approval status, usage limits, and owner | Makes assets discoverable and prevents misuse | `brands/[Brand]/asset-checklist.md` | `[To be supplied]` |

### Claims, Proof, And Source Data

| Need | Why The Bot Needs It | Target Location | Status |
|---|---|---|---|
| Approved claim bank with exact wording, proof source, footnotes, and allowed channels | Prevents unsupported or non-compliant copy | `brands/[Brand]/assets/claims-sources/` or `brand-guidelines/` | `[To be supplied]` |
| Clinical, technical, patent, certification, sustainability, or ingredient source documents | Required for health, performance, proprietary, or sustainability claims | `brands/[Brand]/assets/claims-sources/` | `[To be supplied]` |
| Customer reviews, testimonials, case studies, and permissions | Proof-led copy and social ads without inventing evidence | `brands/[Brand]/assets/proof/` | `[To be supplied]` |
| Comparative claim sources with method, date, geography, and competitors | Safe competitor comparisons and category claims | `brands/[Brand]/assets/claims-sources/` | `[To be supplied]` |
| Legal disclaimers, terms, refund/guarantee wording, and platform restrictions | Offer pages, ads, email, and external copy | `brands/[Brand]/assets/legal/` | `[To be supplied]` |

### Performance And Customer Data

| Need | Why The Bot Needs It | Target Location | Status |
|---|---|---|---|
| Audience segments, personas, jobs-to-be-done, objections, and decision triggers | Strategy, copy, creative, lifecycle, and media targeting | `brands/[Brand]/brand-intake.md` or `assets/customer-research/` | `[To be supplied]` |
| Customer interviews, surveys, support tickets, sales notes, and review mining | Voice-of-customer copy and objection handling | `brands/[Brand]/assets/customer-research/` | `[To be supplied]` |
| Channel performance exports for Meta, Google, LinkedIn, email, organic social, and affiliates | Performance analysis, testing plans, and creative iteration | `brands/[Brand]/assets/performance-data/` | `[To be supplied]` |
| GA4 or analytics exports with conversion events, funnels, landing page metrics, and attribution notes | CRO, reporting, and campaign diagnostics | `brands/[Brand]/assets/performance-data/` | `[To be supplied]` |
| Email/SMS lifecycle metrics and flow maps | Retention, automation, and lifecycle improvements | `brands/[Brand]/assets/performance-data/` | `[To be supplied]` |
| Creative test history with hypotheses, variants, spend, audience, dates, results, and learnings | Avoids repeating failed tests and speeds up iteration | `brands/[Brand]/assets/performance-data/` | `[To be supplied]` |
| Source-of-truth KPI definitions and reporting cadence | Keeps performance recommendations consistent | `brands/[Brand]/brand-intake.md` or `assets/performance-data/` | `[To be supplied]` |
| Seed learnings registry with confirmed wins, losses, audience insights, and creative patterns | Gives future campaign work memory instead of restarting from scratch | `brands/[Brand]/learnings-registry.md` | `[To be supplied]` |
| Experiments backlog with active, queued, completed, and inconclusive tests | Prevents repeating weak tests and helps plan the next useful test | `brands/[Brand]/experiments-backlog.md` | `[To be supplied]` |

### Platform, Tool, And Execution Access

| Need | Why The Bot Needs It | Target Location | Status |
|---|---|---|---|
| Ad account IDs, pixels, conversion events, catalogs, audiences, and naming conventions | Paid media planning, QA, and execution guidance | `tools/integrations/[platform].md` and brand intake | `[To be supplied]` |
| Email/SMS platform, list/segment names, flow names, sender rules, and suppression rules | Lifecycle strategy and implementation-ready briefs | `tools/integrations/[platform].md` and brand intake | `[To be supplied]` |
| Analytics stack, dashboards, source of truth, event names, and UTM rules | Reporting accuracy and campaign tracking | `tools/integrations/ga4.md` or relevant tool doc | `[To be supplied]` |
| CMS, e-commerce, landing page builder, and form tool constraints | Page, CRO, and content recommendations that can actually be built | `tools/integrations/[platform].md` | `[To be supplied]` |
| Workflow/approval tools, owners, deadlines, and handoff format | Keeps deliverables operational and reviewable | `brands/[Brand]/brand-intake.md` | `[To be supplied]` |

### Bot Training Examples And QA Benchmarks

| Need | Why The Bot Needs It | Target Location | Status |
|---|---|---|---|
| Examples of best prior outputs and why they worked | Calibrates quality bar and format | `outputs/[Brand]/` or `brands/[Brand]/reference-library/examples/` | `[To be supplied]` |
| Examples of bad or rejected outputs with reasons | Prevents repeated mistakes | `brands/[Brand]/reference-library/rejected/` | `[To be supplied]` |
| Preferred deliverable templates for briefs, audits, brand books, ad sets, and email flows | Speeds up repeat work and improves consistency | `skills/[skill]/references/` or `outputs/_templates/` | `[To be supplied]` |
| QA checklists for claims, voice, creative, tracking, and launch readiness | Reduces review misses before external use | `docs/` or relevant `skills/[skill]/references/` | `[To be supplied]` |
| Naming conventions for files, campaigns, UTMs, creative variants, and exports | Keeps workspace and platform outputs organized | `brands/[Brand]/brand-intake.md` and tool docs | `[To be supplied]` |

## Skills, Agents, And Tools To Consider Upgrading

| Area | Suggested Upgrade |
|---|---|
| `brands/_template/` | Add optional subfolders for copy examples, customer research, offer sources, legal, and performance data |
| `agents/` | Add stronger "ask fewer, better questions" behavior to agents that often receive incomplete briefs |
| `skills/visual-identity-system/` | Add packaging-ready and digital-ready QA checklists if those deliverables are frequent |
| `skills/copy-system/` | Add claim-safe rewrite patterns by category after examples are approved |
| `skills/paid-media/` | Add channel-specific naming, UTM, and launch QA templates |
| `skills/conversion-system/` | Add page audit scoring rubric and experiment backlog template |
| `tools/integrations/` | Add only platforms that are actively used and have setup details |
| `outputs/_templates/` | Add stronger final deliverable templates with readiness notes and source-risk sections |
| `skills/second-brain/` | Refine observation rules after several real performance reviews or learning updates |

## Maintenance Rule

After each substantial project, ask:

```text
What did we learn that should update a brand file, agent, skill, tool, template, or doc?
Only make reusable updates.
Use [To be supplied] for missing evidence.
```
