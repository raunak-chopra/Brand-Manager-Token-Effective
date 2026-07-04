#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const requiredFields = [
  "finding_id",
  "agent",
  "run_context",
  "priority",
  "status",
  "entity",
  "issue",
  "evidence",
  "why_it_matters",
  "likely_cause",
  "suggested_action",
  "owner",
  "confidence",
  "requires_approval",
  "created_at",
  "resolved_at",
  "rule_version",
  "source_data",
  "updated_at",
  "action_history"
];

const enumValues = {
  priority: ["Critical", "Important", "Monitor"],
  status: ["New", "Needs approval", "Assigned", "Snoozed", "Dismissed", "Resolved"],
  confidence: ["High", "Medium", "Low"],
  requires_approval: ["Yes", "No"]
};

function usage() {
  console.error("Usage: node tools/clis/validate-findings.js <findings.json>");
}

function loadFindings(filePath) {
  const raw = fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, "");
  const parsed = JSON.parse(raw);
  if (Array.isArray(parsed)) return parsed;
  if (Array.isArray(parsed.findings)) return parsed.findings;
  throw new Error("Expected a JSON array or an object with a findings array.");
}

function validateFinding(finding, index) {
  const label = finding.finding_id || `index ${index}`;
  const errors = [];

  for (const field of requiredFields) {
    if (!(field in finding)) {
      errors.push(`${label}: missing required field ${field}`);
      continue;
    }
    if (field !== "action_history" && String(finding[field]).trim() === "") {
      errors.push(`${label}: field ${field} is empty`);
    }
  }

  for (const [field, values] of Object.entries(enumValues)) {
    if (field in finding && !values.includes(finding[field])) {
      errors.push(`${label}: ${field} must be one of ${values.join(", ")}`);
    }
  }

  if ("action_history" in finding && !Array.isArray(finding.action_history)) {
    errors.push(`${label}: action_history must be an array`);
  }

  return errors;
}

function main() {
  const target = process.argv[2];
  if (!target) {
    usage();
    process.exit(2);
  }

  const filePath = path.resolve(process.cwd(), target);
  let findings;
  try {
    findings = loadFindings(filePath);
  } catch (error) {
    console.error(`Could not load finding records from ${filePath}`);
    console.error(`- ${error.message}`);
    process.exit(1);
  }
  const errors = findings.flatMap(validateFinding);

  if (errors.length) {
    console.error(`Finding validation failed for ${filePath}`);
    errors.forEach(error => console.error(`- ${error}`));
    process.exit(1);
  }

  console.log(`Validated ${findings.length} finding record(s): ${filePath}`);
}

main();
