# Files And Information To Fill Or Update

Use this as the running checklist for completing the Marketing Bot workspace. Mark items complete only when the source file or fact has been supplied.

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

## Bot Capability Inputs To Supply

Use this as the master intake list for making the bot more useful, accurate, and execution-ready across brands. Store brand-specific files in `brands/[Brand]/`; store reusable references in `shared-reference-library/`; store final/shareable deliverables in `outputs/[Brand]/`.

### Core Brand Source Documents

| Need | Why The Bot Needs It | Target Location | Status |
|---|---|---|---|
| Brand intake with product, category, audience, promise, perception, competitors, touchpoints, mandatory assets, rejected styles, and reference folders | Baseline for every brand, campaign, copy, creative, and media task | `brands/[Brand]/brand-intake.md` | `[To be supplied]` |
| Compact brand context index with confirmed facts, source paths, approved claims, legal rules, and open gaps | Fast loading before any task without rereading large files | `brands/[Brand]/context-index.md` | `[To be supplied]` |
| Brand guidelines or brand book | Voice, identity, usage rules, messaging, visual rules, and design consistency | `brands/[Brand]/brand-guidelines/` or `brands/[Brand]/brand-book.md` | `[To be supplied]` |
| Voice and copy rules with examples of approved and rejected wording | Reliable external-facing copy and reviews | `brands/[Brand]/brand-guidelines/` or `brands/[Brand]/reference-library/copy/` | `[To be supplied]` |
| Product/SKU catalog with names, descriptions, variants, pricing, bundles, and availability | Accurate offers, pages, ads, emails, and content | `brands/[Brand]/brand-intake.md` or `brands/[Brand]/assets/product-data/` | `[To be supplied]` |
| Offer calendar with promo rules, dates, eligibility, exclusions, and approved wording | Prevents invented discounts, urgency, or terms | `brands/[Brand]/assets/offer-sources/` | `[To be supplied]` |
| Legal/compliance rules and reviewer workflow | Required for claims, regulated categories, ad platforms, and approvals | `brands/[Brand]/assets/claims-sources/` or `brand-intake.md` | `[To be supplied]` |

### References And Inspiration

| Need | Why The Bot Needs It | Target Location | Status |
|---|---|---|---|
| Approved visual references with short notes on what to emulate | Moodboards, identity routes, ads, landing pages, and social direction | `brands/[Brand]/reference-library/approved/` | `[To be supplied]` |
| Rejected visual references with reasons | Prevents repeated unwanted styles | `brands/[Brand]/reference-library/rejected/` | `[To be supplied]` |
| Competitor/category screenshots and links with capture dates | Positioning, differentiation, category conventions, and claim comparison | `brands/[Brand]/reference-library/competitors/` | `[To be supplied]` |
| Website, landing page, social, packaging, email, and ad examples | Channel-specific creative and layout decisions | Matching folders inside `brands/[Brand]/reference-library/` | `[To be supplied]` |
| Font references and license proof | Typography choices and usage safety | `brands/[Brand]/reference-library/fonts/` | Supplied folder items confirmed licensed by Raunak; new external fonts still need proof |
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
| Preferred deliverable templates for briefs, audits, brand books, ad sets, and email flows | Speeds up repeat work and improves consistency | `skills/[skill]/references/` or `outputs/[Brand]/` | `[To be supplied]` |
| QA checklists for claims, voice, creative, tracking, and launch readiness | Reduces review misses before external use | `docs/` or relevant `skills/[skill]/references/` | `[To be supplied]` |
| Naming conventions for files, campaigns, UTMs, creative variants, and exports | Keeps workspace and platform outputs organized | `brands/[Brand]/brand-intake.md` and tool docs | `[To be supplied]` |

## Spunge Brand Files

| File | Missing Or Needs Update |
|---|---|
| `brands/Spunge/context-index.md` | Add any newly confirmed brand rules, campaign constraints, approved claims, and source paths |
| `brands/Spunge/brand-intake.md` | Add final product/SKU details, offer, launch markets, pricing, channel priorities, and audience segments |
| `brands/Spunge/brand-guidelines/brand-guidelines.md` | Replace remaining template placeholders with final positioning, audience, voice, messaging, proof points, and writing rules |
| `brands/Spunge/reference-index.md` | Add approved/rejected references after visual reference files are supplied |
| `brands/Spunge/moodboard-territories.md` | Score territories after references are added; add a third route if needed |
| `brands/Spunge/brand-book.md` | Draft final brand book after moodboard direction, assets, fonts, and claim sources are confirmed |
| `brands/Spunge/asset-checklist.md` | Add paths/status for every supplied asset and source |

## Spunge Assets To Supply

| Need | Target Location |
|---|---|
| Final logo source files | `brands/Spunge/assets/logos/` |
| Final approved logo lockups | `brands/Spunge/assets/logos/` |
| Product pack shots | `brands/Spunge/assets/product-photography/` |
| Packaging source files | `brands/Spunge/assets/packaging/` |
| Lifestyle photography | `brands/Spunge/assets/lifestyle-photography/` |
| Social/ad/deck templates | `brands/Spunge/assets/templates/` |
| Website or e-commerce banner templates | `brands/Spunge/assets/templates/` |
| Final exports | `brands/Spunge/assets/exports/` |
| Clinical validation source documents | `brands/Spunge/assets/claims-sources/` |
| Patent/source references for proprietary technologies | `brands/Spunge/assets/claims-sources/` |
| Customer reviews, testimonials, permissions, and case studies | `brands/Spunge/assets/proof/` |
| Audience research, survey results, interviews, support tickets, or sales notes | `brands/Spunge/assets/customer-research/` |
| Performance exports, analytics reports, creative test history, and campaign results | `brands/Spunge/assets/performance-data/` |
| Offer, pricing, discount, guarantee, refund, and terms source documents | `brands/Spunge/assets/legal/` or `brands/Spunge/assets/offer-sources/` |
| Print/vendor production specs | `brands/Spunge/assets/packaging/` or `brands/Spunge/assets/claims-sources/` if claim-related |

## Spunge References To Supply

| Need | Target Location |
|---|---|
| Approved visual references | `brands/Spunge/reference-library/approved/` |
| Rejected visual references | `brands/Spunge/reference-library/rejected/` |
| Font references and license notes | `brands/Spunge/reference-library/fonts/` |
| Color references | `brands/Spunge/reference-library/colors/` |
| Style direction references | `brands/Spunge/reference-library/styles/` |
| Photography references | `brands/Spunge/reference-library/photography/` |
| Illustration references | `brands/Spunge/reference-library/illustration/` |
| Packaging references | `brands/Spunge/reference-library/packaging/` |
| Website references | `brands/Spunge/reference-library/websites/` |
| Social references | `brands/Spunge/reference-library/social/` |
| Generic competitor/category screenshots | `brands/Spunge/reference-library/competitors/` |
| Approved copy examples | `brands/Spunge/reference-library/copy/` |
| Rejected copy or creative examples with reasons | `brands/Spunge/reference-library/rejected/` |
| Best prior outputs or reusable examples | `brands/Spunge/reference-library/examples/` |

## Spunge Facts To Confirm

| Information | Status |
|---|---|
| Final product/SKU list | `[To be supplied]` |
| Final offer and pricing | `[To be supplied]` |
| Launch geography and language requirements | `[To be supplied]` |
| Approved claim wording | Partial |
| Required claim footnotes | Partial |
| Clinical/statistical source documents | `[To be supplied]` |
| Font license proof for Alfabet | Confirmed by Raunak |
| Font license proof for Sofia Sans Condensed | Confirmed by Raunak if present in supplied asset/reference folders |
| Landing page URL | `[To be supplied]` |
| UTM naming rules | `[To be supplied]` |
| Meta/Google/LinkedIn ad account IDs | `[To be supplied]` |
| GA4 property and conversion events | `[To be supplied]` |
| E-commerce/channel requirements | `[To be supplied]` |
| Legal/compliance reviewer or approval process | `[To be supplied]` |
| Target customer segments and priority objections | `[To be supplied]` |
| Voice-of-customer source files | `[To be supplied]` |
| Approved testimonials/reviews and usage permissions | `[To be supplied]` |
| Current baseline KPIs and reporting cadence | `[To be supplied]` |
| Creative testing history and learnings | `[To be supplied]` |
| Platform naming conventions for campaigns, ad sets, ads, audiences, emails, and UTMs | `[To be supplied]` |
| Approval owners, turnaround time, and final sign-off workflow | `[To be supplied]` |

## Skills, Agents, And Tools To Consider Upgrading

| Area | Suggested Upgrade |
|---|---|
| `agents/visual-identity-director.md` | Add a Spunge-specific reminder to check absorption, claims, font license, and Dark Cyan rules only when working on Spunge |
| `skills/visual-identity-system/references/` | Add a packaging-ready checklist if packaging becomes a frequent deliverable |
| `skills/paid-media/references/` | Add nutraceutical/health-claim safety checklist after legal claim rules are confirmed |
| `skills/copy-system/references/` | Add an absorption-awareness copy pattern after more Spunge campaigns are approved |
| `tools/integrations/meta-ads.md` | Add Spunge ad account, pixel, event, naming, and UTM rules when supplied |
| `tools/integrations/ga4.md` | Add Spunge conversion events and reporting views when supplied |

## Maintenance Rule

After each substantial project, ask:

```text
What did we learn that should update a brand file, agent, skill, or tool?
Only make reusable updates.
Use [To be supplied] for missing evidence.
```
