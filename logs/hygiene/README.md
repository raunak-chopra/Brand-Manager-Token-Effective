# Hygiene Finding Store

Local hygiene findings live here as JSON records that can feed the static dashboard and weekly performance memos.

Use `logs/hygiene/findings.sample.json` as the shape reference. Validate records with:

```bash
node tools/clis/validate-findings.js logs/hygiene/findings.sample.json
```

Live platform exports, credentials, and raw customer data should not be stored here unless explicitly approved.
