# Finding Record

```yaml
finding_id: [To be supplied]
agent: hygiene-checker
run_context: [To be supplied]
priority: Critical / Important / Monitor
status: New / Needs approval / Assigned / Snoozed / Dismissed / Resolved
entity: [To be supplied]
issue: [To be supplied]
evidence: [To be supplied]
why_it_matters: [To be supplied]
likely_cause: [To be supplied]
suggested_action: [To be supplied]
owner: [To be supplied]
confidence: High / Medium / Low
requires_approval: Yes / No
created_at: [To be supplied]
resolved_at: [Open]
rule_version: [To be supplied]
source_data: [To be supplied]
updated_at: [To be supplied]
action_history: []
```

## Notes

- Use `Requires Approval: Yes` for spend, live campaign, compliance, external copy, or tracking changes.
- Keep unsupported claims, impact estimates, and legal interpretations as `[To be supplied]`.
- Use this exact key order for dashboard-ready JSON/YAML records.
- Store local dashboard-importable finding arrays in `logs/hygiene/`.
