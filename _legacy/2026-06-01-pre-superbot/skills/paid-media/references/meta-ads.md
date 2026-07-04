# Meta Ads Diagnostic & Optimization Playbook

Platform-specific diagnostics, optimization procedures, and guardrails for Facebook, Instagram, Messenger, and Audience Network campaigns.

---

## Campaign Structure

### Hierarchy
Campaign → Ad Set → Ad

### Campaign Level
- Objective selection (Awareness, Traffic, Engagement, Leads, App Promotion, Sales)
- Campaign Budget Optimization (CBO) — distributes budget across ad sets automatically
- A/B testing at campaign level
- Advantage+ campaigns for automated targeting and creative

### Ad Set Level
- Audience targeting (Core, Custom, Lookalike)
- Placements (Automatic/Advantage+ or Manual)
- Budget and schedule (if not using CBO)
- Optimization goal and delivery type
- Bid strategy and bid cap

### Ad Level
- Creative (image, video, carousel, collection)
- Primary text, headline, description, and CTA button
- Destination URL and display link
- Tracking (UTM parameters, pixel events, Conversions API)

---

## Audience Types

### Core Audiences
- Demographics (age, gender, education, job title, life events)
- Interests (pages liked, content engaged with, declared interests)
- Behaviors (purchase behavior, device usage, travel, digital activities)
- Connections (people connected to your page, app, or event)

### Custom Audiences
- Website visitors (pixel/CAPI-based, 1–180 day windows)
- Customer list uploads (email, phone, hashed data)
- App users (by activity type and recency)
- Engagement audiences (video viewers, lead form openers, page/profile engagers)

### Lookalike Audiences
- Based on a Custom Audience seed list
- 1–10% similarity range (1% = most similar to seed)
- Larger percentages increase reach but decrease similarity
- Best results with seed lists of 1,000–50,000 high-quality customers

---

## Ad Formats

| Format | Best For | Key Specs |
|--------|----------|-----------|
| Image | Simple messages, promotions | 1:1, 1.91:1 aspect ratios, < 20% text overlay recommended |
| Video | Storytelling, demonstrations | 15–60 sec, first 3 sec critical, captions required |
| Carousel | Multiple products, feature highlights | 2–10 cards, each with own link |
| Collection | E-commerce, product catalogs | Instant Experience backend, mobile-first |
| Stories/Reels | Full-screen immersive, short-form | 9:16 vertical, 5–15 sec optimal |

---

## Pixel & Tracking Setup

### Standard Events
- PageView
- ViewContent
- AddToCart
- InitiateCheckout
- Purchase (with value and currency)
- Lead
- CompleteRegistration

### Best Practices
- Use Conversions API (CAPI) alongside pixel for redundancy and accuracy
- Match customer data (email, phone) for improved attribution
- Test event firing across all conversion paths
- Use Aggregated Event Measurement (AEM) for iOS 14+ compliance
- Verify events in Events Manager before running campaigns
- Set up custom conversions for non-standard goals

---

## Diagnostics

### 1. Creative Fatigue Detection

Monitor CTR trajectory to identify ads that need replacement before performance degrades significantly.

**Monitoring Windows**
- **7-day** — Early warning signals for high-frequency campaigns.
- **14-day** — Primary monitoring window for most campaigns.
- **30-day** — Trend confirmation and long-running creative assessment.

**Fatigue Classification**

| Status | CTR Change | Frequency | Action | Timeline |
|--------|-----------|-----------|--------|----------|
| Urgent | CTR dropped 40%+ from peak | 8+ | Replace immediately. Launch backup creatives. | Now |
| Warning | CTR declining 15–39% from peak | 5–7 | Begin testing replacement creatives. Prepare to pause within 1–2 weeks. | 1–2 weeks |
| Healthy | CTR stable or within 15% of peak | < 5 | No action. Continue monitoring. | Next review cycle |

**Procedure**

1. Pull ad-level data: CTR, frequency, impressions, and spend for 7/14/30-day windows.
2. Calculate CTR change from peak CTR for each ad.
3. Correlate CTR decline with frequency accumulation.
4. Classify each ad using the table above.
5. For Urgent and Warning ads, trigger Creative Brief Generator (see Optimization section below).

**Timing**: Run weekly. Run immediately after any budget scaling event (budget increases accelerate frequency buildup).

---

### 2. Audience Overlap Finder

When two or more ad sets target similar audiences, you bid against yourself in the auction. CPMs inflate by 15–30% due to self-competition.

**Procedure**

1. List all active ad sets and their targeting parameters (interests, behaviors, demographics, custom audiences, lookalikes).
2. Compare targeting across ad sets within the same campaign and across campaigns.
3. Identify overlapping segments:
   - **Interest overlap** — Two ad sets targeting overlapping interest categories.
   - **Demographic overlap** — Same age/gender/location targeting across ad sets.
   - **Custom audience overlap** — Retargeting audiences that include the same users.
   - **Lookalike overlap** — Lookalikes from similar seeds or overlapping percentage ranges.
4. Check Meta's **Audience Overlap** tool in Ads Manager for actual overlap percentages (select 2–5 audiences, choose "Show Audience Overlap").
5. For overlaps above 30%, recommend:
   - Consolidate overlapping ad sets into one.
   - Add exclusions to separate audiences (exclude Custom Audience A from Ad Set B).
   - Use different funnel stages to differentiate audience purpose.

**Output**: Overlap matrix showing which ad sets overlap, overlap percentage, estimated CPM inflation, and recommended fix.

---

### 3. Frequency Cap Audit

Meta frequency caps are suggestions, not hard limits, especially in Advantage+ campaigns. Actual frequency often exceeds configured caps.

**Audit Checklist**

| Issue | Threshold | Impact | Fix |
|-------|-----------|--------|-----|
| Ads shown 5+ times while cap says 3 | Actual frequency > configured cap by 50%+ | Wasted impressions, audience irritation | Reduce audience size, add new audiences, refresh creative |
| Retargeting audiences seeing ads 8+ times | Frequency > 8 in any 7-day window | Ad blindness, negative brand perception | Shorten retargeting window (180 → 30 days), add frequency-based exclusions |
| Prospecting frequency above 2.0 | 7-day frequency > 2.0 for cold audiences | Budget inefficiency, premature saturation | Expand audience, increase creative variety, lower daily budget |

**Measurement**
- Use **7-day rolling average frequency**, not all-time frequency. All-time frequency masks recent spikes.
- Break down frequency by ad set and ad to identify specific offenders.
- Compare frequency trajectory to CTR trajectory — rising frequency with declining CTR confirms fatigue.

---

### 4. CPM Anomaly Detector

Identify unusual CPM increases and isolate the cause.

**Procedure**

1. Pull daily CPM data for the past 30+ days by campaign and ad set.
2. Calculate 14-day rolling average CPM.
3. Flag any day or week where CPM exceeds the rolling average by more than 25%.

**Industry CPM Benchmarks (Approximate Ranges)**

| Vertical | Typical CPM Range |
|----------|------------------|
| B2C | $8–15 |
| B2B | $15–35 |
| E-commerce | $5–12 |
| SaaS | $20–40 |

*Note: These are directional ranges only. Actual CPMs vary by market, audience, season, and competition. Do not present as guarantees.*

**Cause Isolation**

| Cause | Evidence | Fix |
|-------|----------|-----|
| Competitive pressure | CPMs rising across all ad sets uniformly. Seasonal pattern (e.g., Q4). | Ride it out or reduce spend in highest-CPM segments. Shift budget to less competitive placements. |
| Audience saturation | CPM rising in specific ad sets. Frequency climbing simultaneously. | Refresh audiences. Expand targeting. Add new lookalike seeds. |
| Low relevance | CPM rising with declining CTR and engagement. Relevance diagnostics show "Below Average." | Refresh creative. Improve ad-to-audience alignment. |
| Seasonal inflation | Q4 CPMs typically run 30–50% above baseline. Election years, major holidays also inflate. | Adjust CPA targets seasonally. Front-load spend to pre-Q4. Budget for CPM inflation. |

---

### 5. Placement Performance Analyzer

Break down performance by placement to identify budget waste.

**Key Placements to Analyze**
- Facebook Feed
- Instagram Feed
- Facebook/Instagram Stories
- Instagram Reels
- Facebook/Instagram Explore
- Audience Network
- Messenger
- Facebook In-stream Video

**Procedure**

1. Export placement-level data: Impressions, Clicks, CTR, CPC, Conversions, CPA, ROAS, Spend.
2. Calculate spend share per placement.
3. Calculate CPA and ROAS per placement.
4. Compare placement CPA against campaign average.

**Common Findings**
- Most Advantage+ accounts find 60–70% of spend goes to the top 2 placements while remaining placements burn budget at 3–5× higher CPA.
- **Audience Network** is the most common offender — high impression volume, low conversion quality.
- **Stories and Reels** often look unprofitable on 1-day click attribution but perform better on 7-day click (users see ad, convert later).

**Recommendations**
- Exclude placements with CPA > 2× campaign average after 1,000+ impressions.
- Test manual placement selection for campaigns where specific placements consistently underperform.
- Do not exclude placements prematurely — allow at least 1,000 impressions and 7 days of data.
- Always check both 1-day click and 7-day click attribution windows before excluding.

---

## Optimization

### 6. Lookalike Audience Refresher

Lookalike audiences degrade every 60–90 days as the underlying seed list becomes stale and the audience pool is saturated.

**Decay Indicators**
- CPA rising 20%+ over 30–60 days with no other changes.
- CTR declining while frequency is stable (audience quality declining, not fatigue).
- Conversion rate dropping for the lookalike ad set specifically.

**Refresh Strategy**

1. **Audit current lookalikes**: List all active lookalike audiences, their seed source, creation date, and current performance.
2. **Identify decayed audiences**: Any lookalike created 90+ days ago with declining performance.
3. **Update seed lists**:
   - Use top 25% LTV customers from the last 90 days (not all-time).
   - Minimum seed size: 1,000 customers. Optimal: 5,000–20,000.
   - Use purchase-based seeds over engagement-based seeds.
4. **Test lookalike percentages**:
   - 1% — Highest quality, smallest reach. Best for conversion campaigns.
   - 1–3% — Balanced quality and reach.
   - 3–5% — Broader reach, lower similarity. Best for awareness.
   - 5%+ — Use only for very broad prospecting.
5. **Transition plan**: Run new and old lookalikes in parallel for 7 days. Pause old when new reaches stable CPA.
6. **Retire exhausted audiences**: If a refreshed lookalike still underperforms after 14 days, the seed quality may be the issue. Re-examine seed criteria.

---

### 7. Creative Brief Generator

When creative fatigue is detected, generate replacement briefs based on proven patterns.

**Procedure**

1. **Analyze top-performing ads** (last 90 days, by ROAS and CPA):
   - What hooks worked (question, statistic, testimonial, problem statement)?
   - What formats won (image, video, carousel, UGC-style)?
   - What CTAs converted (Shop Now, Learn More, Get Started, Claim Offer)?
   - What visual styles resonated (lifestyle, product-on-white, before/after, text-heavy)?
2. **Identify patterns** — Group winners by theme and format.
3. **Generate briefs** that build on proven patterns with enough variation to avoid audience blindness:
   - Same winning hook type, new angle or statistic.
   - Same format, new creative execution.
   - Same CTA, new supporting copy.
   - Opposite format from current winner (if all winners are static images, brief a video).

**Brief Structure**

- **Ad Name**: [Descriptive name for tracking]
- **Format**: Image / Video / Carousel / UGC
- **Hook**: [First 3 seconds / first line of copy]
- **Body**: [Key message and supporting points]
- **CTA**: [Specific call to action]
- **Visual Direction**: [Style, mood, color palette, reference]
- **Why This Will Work**: [Link to proven pattern]
- **What It's Testing**: [The specific hypothesis]

---

### 8. Ad Copy A/B Variant Writer

Generate systematic variants testing one variable at a time.

**Principles**
- Only test one variable per variant.
- Run each variant for at least 2,000 impressions before drawing conclusions.
- Use identical targeting, placement, and creative (image/video) across variants.

**Variables to Test (One at a Time)**

| Variable | Variant A (Control) | Variant B (Test) |
|----------|-------------------|-----------------|
| Hook | Current opening line | Alternative opening (question, statistic, bold claim, pain point) |
| Social Proof | No social proof | Include testimonial, review count, user count, or award |
| Urgency | No urgency | Add time-limited offer, scarcity, or deadline |
| Benefit Framing | Feature-focused | Outcome-focused (what the customer gets, not what the product does) |
| CTA | Current CTA | Alternative CTA (Shop Now vs. Learn More vs. Get Yours vs. See How) |

**Output**: Variant table showing control copy, test copy, variable being tested, and minimum impressions before evaluation.

---

### 9. Interest Targeting Expander

When existing interest audiences saturate, generate adjacent interests for testing.

**Saturation Indicators**
- Frequency rising above 3.0 in interest-based ad sets.
- CPM increasing 25%+ with no competitive/seasonal explanation.
- Diminishing returns: same spend, fewer conversions week over week.

**Expansion Method**

1. List current interest targets and their performance (CPA, ROAS, spend, frequency).
2. Identify top-performing interests.
3. Generate adjacent interests using behavioral correlation patterns:
   - People interested in [X] often also interested in [Y].
   - Upstream interests (what they research before buying).
   - Downstream interests (what they buy after purchasing your product).
   - Lifestyle-adjacent interests (related hobbies, values, media consumption).
4. **Testing protocol**:
   - Test new interests in isolated ad sets (not stacked with existing interests).
   - Budget: $20–50/day per test ad set.
   - Duration: 5–7 days minimum.
   - Don't stack more than 3 interests per ad set (keeps targeting interpretable).
   - Compare test CPA against established interest CPA.

**Output**: Interest expansion map with current interests, proposed adjacent interests, rationale, and test budget/duration.

---

## Guardrails

- Do not invent CPM, CPA, ROAS, CTR, frequency, audience size, overlap percentage, or benchmark data.
- Use `[To be supplied]` for missing account-specific data.
- Diagnose tracking and pixel problems before blaming creative.
- Confirm pixel/CAPI is firing correctly and AEM is configured before running diagnostics.
- State attribution model and window (1-day click, 7-day click, 1-day view) before interpreting performance.
- Account for iOS 14+ data gaps when analyzing audience and conversion data.
- Q4 (Oct–Dec) CPMs, CPAs, and competitive dynamics differ significantly from rest of year. Note seasonality in all analyses.
- For regulated categories, use only approved claims and disclosures.
