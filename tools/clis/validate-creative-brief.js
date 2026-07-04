#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const target = process.argv[2];

if (!target) {
  console.error("Usage: node tools/clis/validate-creative-brief.js <file.md>");
  process.exit(1);
}

const resolved = path.resolve(process.cwd(), target);

if (!fs.existsSync(resolved)) {
  console.error(`Creative brief not found: ${resolved}`);
  process.exit(1);
}

const text = fs.readFileSync(resolved, "utf8");
const lower = text.toLowerCase();
const inFinalPath = resolved.toLowerCase().includes(`${path.sep}final${path.sep}`);

const requiredGroups = [
  ["context"],
  ["strategic insight", "audience tension"],
  ["visual direction"],
  ["copy samples", "key message"],
  ["missing inputs"],
  ["claim/source/legal risks"],
  ["asset/reference gaps"],
];

const missing = [];

for (const group of requiredGroups) {
  if (!group.some((item) => lower.includes(item))) {
    missing.push(group.join(" or "));
  }
}

const hasReadiness =
  lower.includes("readiness") ||
  lower.includes("creative status") ||
  lower.includes("concept / final status") ||
  lower.includes("concept status");

if (!hasReadiness) {
  missing.push("readiness or creative status");
}

const warnings = [];

if (inFinalPath && text.includes("[To be supplied]")) {
  warnings.push("Final/approved path contains [To be supplied] placeholders.");
}

if (missing.length > 0) {
  console.error(`Creative brief validation failed: ${target}`);
  for (const item of missing) {
    console.error(`- Missing: ${item}`);
  }
  for (const warning of warnings) {
    console.warn(`Warning: ${warning}`);
  }
  process.exit(1);
}

console.log(`Creative brief validation passed: ${target}`);

for (const warning of warnings) {
  console.warn(`Warning: ${warning}`);
}
