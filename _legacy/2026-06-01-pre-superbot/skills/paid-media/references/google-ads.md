# Google Ads Diagnostic & Optimization Playbook

Platform-specific diagnostics, optimization procedures, and guardrails for Google Search, Display, Shopping, Video, and Performance Max campaigns.

---

## Campaign Types

### Search Campaigns
- Text ads on search results
- Keyword-triggered
- High intent traffic
- CPC bidding

### Display Campaigns
- Visual ads across Google Display Network
- Audience/placement targeting
- Brand awareness focus
- CPM or CPC bidding

### Shopping Campaigns
- Product listing ads
- Merchant Center feed-based
- E-commerce focused
- High purchase intent

### Video Campaigns
- YouTube ads
- Multiple formats (in-stream, bumper, discovery)
- Awareness to conversion
- CPV or CPM bidding

### Performance Max
- AI-optimized across all Google properties
- Goal-based asset groups
- Conversion focused
- Limited manual controls; relies on signals and audience segments

---

## Keyword Match Types

| Type | Symbol | Example | Matches |
|------|--------|---------|---------|
| Broad | none | running shoes | Related terms, synonyms, implied intent |
| Phrase | "..." | "running shoes" | Queries containing the phrase in order |
| Exact | [...] | [running shoes] | Exact query or close variants |

### Match Type Selection Guidelines
- **Exact** — Use for proven, high-converting terms. Protects budget.
- **Phrase** — Use for thematic control with moderate reach.
- **Broad** — Use only with Smart Bidding and strong conversion data (30+ conversions/month). Review search terms weekly.

---

## Quality Score

### Components (1–10 scale)
- **Expected CTR** — Predicted click-through rate based on historical performance.
- **Ad Relevance** — How closely ad copy matches keyword intent.
- **Landing Page Experience** — Page relevance, load speed, mobile usability, and content quality.

### Impact
- Ad position in auction
- Cost per click (1-point QS improvement reduces CPC by approximately 13%)
- Ad extensions eligibility
- Whether ads show at all (QS 1–3 may rarely serve)

### Improvement Priorities
- Tighter, single-theme ad groups (3–7 keywords each)
- Keyword-to-ad headline alignment
- Landing page content matching keyword intent
- CTR improvement through ad copy testing

---

## Ad Extensions (Assets)

| Extension | Use Case |
|-----------|----------|
| Sitelinks | Multiple landing pages, category navigation |
| Callouts | Key benefits, differentiators, offers |
| Structured Snippets | Product/service types, feature lists |
| Call | Phone leads, service businesses |
| Location | Local businesses, store visits |
| Price | Product/service pricing transparency |
| Image | Visual enhancement for search ads |
| Lead Form | In-SERP lead capture |

---

## Bidding Strategies

| Strategy | Goal | When to Use |
|----------|------|-------------|
| Manual CPC | Full control | <15 conversions/month, new accounts |
| Maximize Clicks | Traffic volume | Awareness campaigns, data gathering |
| Maximize Conversions | Conversion volume | Scaling phase, sufficient budget |
| Target CPA | Cost control | 30+ conversions/month, stable CPA goal |
| Target ROAS | Revenue efficiency | 50+ conversions/month, e-commerce |
| Maximize Conversion Value | Revenue maximization | E-commerce with variable order values |

---

## Diagnostics

### 1. Wasted Spend Audit

Step-by-step procedure to identify and eliminate non-converting spend.

**Data Required**
- Search terms report — last 30 days, all columns exported.
- Campaign and ad group performance data for the same period.

**Procedure**

1. **Export search terms report** (30 days, all campaigns, all columns).
2. **Flag high-spend zero-conversion terms** — Any search term with $25+ spend and 0 conversions. Sort descending by cost.
3. **Flag low-CTR high-impression terms** — Any search term with CTR < 1% and 100+ impressions. These terms attract impressions but not clicks, dragging down Quality Score.
4. **Flag duplicate/overlapping terms** — Search terms triggering across multiple campaigns or ad groups. Identify which campaign should own each term.
5. **Categorize flagged terms**:
   - **Irrelevant** — Add as negative keywords immediately.
   - **Relevant but poor performance** — Investigate ad copy and landing page alignment before negating.
   - **Duplicate triggers** — Add as negative in the non-primary campaign.
6. **Calculate estimated monthly savings** — Sum the 30-day cost of all terms to be negated. This is the estimated monthly savings.

**Output**: Prioritized negative keyword list with match type recommendations and estimated monthly savings figure.

---

### 2. CPA Spike Diagnosis

Six-point root-cause checklist when CPA increases significantly (20%+ above target or trailing average).

| # | Cause | Severity | Evidence to Look For | Specific Fix | Expected Impact |
|---|-------|----------|---------------------|-------------|-----------------|
| a | Bid strategy changes | High | Recent bid strategy switches in change history. Learning period restarted. | Allow 2-week learning period. If CPA remains elevated after learning, revert or adjust target. | CPA stabilizes within 1–2 weeks. |
| b | Search term drift | High | New, irrelevant search terms appearing in report. Broad match expanding into unrelated queries. | Add negatives. Tighten match types. Review broad match keywords. | Immediate spend reduction on waste. |
| c | Quality Score drops | Medium | QS column changes for top-spend keywords. Check component-level changes. | Address the below-average component (see QS Analysis below). | 1-point QS recovery ≈ 13% CPC reduction. |
| d | Competitor entry | Medium | Impression share (IS) declining, especially Search IS Lost (rank). Auction insights show new competitors. | Improve ad rank (QS + bid) for top keywords. Consider competitor campaigns. | IS recovery varies; 5–15% IS recovery typical. |
| e | Landing page issues | High | Conversion rate drop by device or campaign. Page speed regression. Form or checkout errors. | Test landing page in all devices. Check analytics for bounce rate spikes. Fix technical issues. | Conversion rate recovery to baseline. |
| f | Audience demographic shifts | Low | Performance breakdown by age, gender, household income, or device shows new underperforming segments receiving budget. | Add demographic bid adjustments or exclusions. | Incremental CPA improvement. |

**Procedure**: Work through causes a–f in order. Most CPA spikes trace to causes a, b, or e. Resolve the highest-severity confirmed cause first before investigating further.

---

### 3. Quality Score Analysis

Component-level diagnostics and action steps for keywords with QS 1–6.

**Procedure**

1. **Export keyword report** with columns: Keyword, QS, Expected CTR, Ad Relevance, Landing Page Experience, Impressions, Clicks, CPC, Cost, Conversions.
2. **Filter to QS 1–6 keywords** with meaningful spend (top 80% of total keyword cost).
3. **For each keyword, identify the below-average component(s)**:

| Component Below Average | Priority Fix | Action Steps |
|------------------------|-------------|-------------|
| Expected CTR | High | Test new ad copy with keyword in Headline 1. Add power words and CTAs. Use RSA pinning to ensure keyword appears in top position. Review competitor ads for CTR-driving patterns. |
| Ad Relevance | High | Ensure keyword appears in at least one headline and one description. Tighten ad group to single-theme keywords. Write ads that directly answer keyword intent. |
| Landing Page Experience | Medium | Match landing page headline to keyword intent. Improve page load speed (target < 3 seconds). Ensure mobile responsiveness. Add relevant content that answers the searcher's query. |

4. **Prioritize fixes by potential savings**: For each keyword, estimate monthly CPC savings from a 1-point QS improvement (current monthly cost × 13%). Sort descending. Focus on the top 10–20 keywords by potential savings.

**Benchmark**: A 1-point QS improvement reduces CPC by approximately 13%. Keywords with QS 3–4 have the highest ROI for improvement effort.

---

### 4. Search Term Leakage Scan

Pattern-based identification of search term gaps allowing irrelevant traffic.

**Theme Clusters to Check**

| Category | Example Terms | Action |
|----------|--------------|--------|
| Free/DIY | free, how to, DIY, tutorial, template | Negate unless offering free content/trials. |
| Jobs/Careers | jobs, hiring, salary, careers, resume | Negate unless recruiting. |
| Competitor Names | [competitor brand names] | Negate from non-brand campaigns, or create dedicated competitor campaign. |
| Geographic Leakage | Locations you don't serve | Add location negatives or adjust geo targeting. |
| Informational | what is, how does, definition, meaning | Negate from conversion campaigns; route to content/awareness campaigns if applicable. |
| Unrelated Industries | Terms from adjacent but different industries | Negate immediately. |

**Match Type Gaps**
- **Broad triggering distant semantics** — Review broad match keywords for search terms that have drifted beyond intent. Consider switching to phrase or exact.
- **Cross-campaign bleed** — Same search term triggering ads in multiple campaigns. Use negative keywords in non-primary campaigns to control routing.
- **Brand term contamination** — Brand terms triggering in non-brand campaigns, inflating non-brand performance. Add brand terms as negatives in non-brand campaigns.

**Output**: Categorized negative keyword list with match type recommendations.

---

### 5. Impression Share Gap Finder

Separate budget-based IS loss from rank-based IS loss to identify the right fix.

**Data Required**
- Campaign-level metrics: Search Impression Share, Search IS Lost (Budget), Search IS Lost (Rank).

**Analysis Framework**

| IS Loss Type | Cause | Fix Category | Action |
|-------------|-------|-------------|--------|
| Budget-based IS loss > 10% | Daily budget exhausting before end of day | Budget increase | Calculate budget needed to capture lost IS. Estimate incremental conversions at current CVR. |
| Rank-based IS loss > 20% | Ad rank too low (bid × QS) | Optimization | Improve QS (see QS Analysis). Increase bids on high-converting keywords. Improve ad copy. |
| Both types > 10% | Combined issues | Prioritize | Fix rank first (free IS recovery), then evaluate budget increase. |

**Classification**

- **Quick wins** — Campaigns with budget-based IS loss > 10% and CPA below target. Small budget increase captures meaningful IS at efficient CPA.
- **Optimization targets** — Campaigns with rank-based IS loss > 20%. QS and ad improvements recover IS without additional spend.
- **Deprioritize** — Campaigns with IS gap in low-converting or high-CPA segments. IS gap is not worth closing.

---

## Optimization

### 6. Negative Keyword Mining

Systematic negative keyword development from multiple sources.

**Source 1: Search Terms Report**
- Export 30-day search terms report.
- Identify non-converting and irrelevant terms (see Wasted Spend Audit).
- Group by theme.

**Source 2: Industry Negatives**
- Common industry-specific irrelevant terms.
- Terms from adjacent industries that share vocabulary.
- Use `[To be supplied]` — requires industry-specific research.

**Source 3: Semantic Negatives**
- Terms that share words with target keywords but carry different intent.
- Example: "running shoes repair" vs. "running shoes buy."

**Source 4: Competitor Brand Names**
- Add competitor names as negatives in non-competitor campaigns.
- If running competitor campaigns, isolate with separate campaign and budget.

**Source 5: Geographic Negatives**
- Location names outside service area, especially for broad match keywords.

**Match Type Recommendations for Negatives**

| Negative Match Type | When to Use |
|---------------------|-------------|
| Exact | Block a specific query only. Use when the term is relevant in other combinations. |
| Phrase | Block any query containing the phrase. Use for multi-word irrelevant themes. |
| Broad (negative) | Block any query containing all the words in any order. Use for single-word negatives like "free" or "jobs." |

**Output Format**: Negative keyword list grouped by category, with match type, ready for import via Google Ads Editor.

---

### 7. Bid Strategy Selector

Decision framework based on conversion volume and business goals.

| Monthly Conversions | Recommended Strategy | Rationale | Transition Plan |
|--------------------|---------------------|-----------|-----------------|
| < 15 | Manual CPC or Enhanced CPC | Insufficient data for automated bidding. Manual control prevents overspend. | Set initial bids at estimated CPC. Adjust weekly based on position and CPA. |
| 15–29 | Maximize Conversions | Enough data to let Google optimize for volume, but not enough for target-based strategies. | Switch from Manual CPC. Monitor CPA; do not set a target CPA yet. Allow 2-week learning. |
| 30–49 | Target CPA | Sufficient conversion data for target-based optimization. | Set target CPA at or slightly above trailing 30-day average CPA. Lower by no more than 10% per week. |
| 50+ | Target ROAS | Strong data foundation for value-based bidding. | Set target ROAS at or slightly below trailing 30-day average ROAS. Increase by no more than 10% per week. |
| 50+ (e-commerce, variable AOV) | Maximize Conversion Value | Optimizes for revenue, not just conversion count. | Ensure conversion values are accurate and passed correctly. Review daily for first 2 weeks. |

**Risk Factors During Transitions**
- CPA spikes for 1–2 weeks during learning period are normal.
- Do not change bids, budgets, ads, or targeting during learning period.
- If CPA exceeds 2× target after learning period ends, revert to previous strategy.
- Seasonal periods and promotional events can disrupt learning; avoid transitions during these windows.

---

### 8. Budget Reallocation Model

Analyze spend distribution and model incremental conversions from reallocation.

**Procedure**

1. **Export campaign-level data** (30 days): Campaign, Spend, Conversions, CPA, ROAS, Search IS Lost (Budget).
2. **Rank campaigns by CPA** (ascending) and by ROAS (descending).
3. **Identify underperformers**: Campaigns with CPA > 150% of account average or ROAS < 50% of account average.
4. **Identify constrained winners**: Campaigns with CPA below target AND Search IS Lost (Budget) > 10%.
5. **Model reallocation**:
   - Calculate the spend trapped in underperformers.
   - Estimate incremental conversions if that budget moved to constrained winners (at the winner's current CPA).
   - Account for diminishing returns: assume 70% efficiency for reallocated budget (CPA may increase slightly as volume grows).
6. **Propose reallocation plan**: Specific dollar amounts to move, from which campaigns to which campaigns, with estimated conversion impact.

**Output**: Reallocation table showing source campaign, destination campaign, amount to move, estimated incremental conversions, and estimated new CPA for destination campaign.

---

## Guardrails

- Do not invent CPC, CTR, CVR, CPA, ROAS, impression share, Quality Score, or benchmark data.
- Use `[To be supplied]` for missing account-specific data.
- State tracking gaps before interpreting performance.
- Confirm conversion tracking is functional and attribution window is known before running any diagnostic.
- Do not recommend bid strategy changes during active learning periods.
- For regulated categories, use only approved claims and disclosures.
