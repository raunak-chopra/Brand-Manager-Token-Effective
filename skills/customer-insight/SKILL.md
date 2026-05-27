---
name: customer-insight
version: "0.1.0"
description: Customer research, VOC, personas, ICPs, JTBD, review mining, interviews, surveys, support tickets, and research synthesis.
triggers:
  - customer research
  - persona
  - ICP
  - JTBD
  - voice of customer
  - VOC
  - review mining
  - audience insights
aliases:
  - customer-research
related_skills:
  - brand-strategy
  - copy-system
  - content-system
  - conversion-system
agents:
  - persona-builder
  - researcher
success_metrics:
  - insight_quality
  - evidence_strength
  - message_relevance
---

# Customer Insight

Use this skill to collect, analyze, and synthesize customer evidence. It replaces `customer-research` while preserving research depth.

## Use For

- Research synthesis from interviews, surveys, reviews, support tickets, transcripts, CRM notes, and call notes.
- Personas, ICPs, JTBD, objections, triggers, buying criteria, churn signals, and customer language.
- Public research from forums, reviews, communities, search results, social comments, competitor reviews, and category discussions.

## Inputs

- Research question.
- Target segment.
- Existing source locations.
- Product or category context.
- Decision the research should support.
- Confidence level required.

## Workflow

1. Define the research objective and segment.
2. List available sources before reading them.
3. Extract observations before conclusions.
4. Cluster themes by frequency, intensity, and commercial relevance.
5. Build personas or JTBD only from evidence.
6. Translate findings into messaging, product, content, CRO, or channel implications.

## Guardrails

- Do not invent customer quotes, market facts, survey findings, or competitor claims.
- Separate observed evidence from inference.
- Flag thin, biased, outdated, or incomplete research.
- Use `[To be supplied]` for missing sources.

## Output

- Source summary.
- Top themes.
- VOC quotes.
- Personas or JTBD if requested.
- Objections and triggers.
- Messaging implications.
- Research gaps.

## Reference Routing

- Reference index: `references/README.md`.
