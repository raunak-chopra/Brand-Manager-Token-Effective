#!/usr/bin/env node

/**
 * Token Tracker CLI for Brand Manager Bot
 * Estimates and logs token usage for tasks.
 * 
 * Usage:
 *   node tools/clis/token-tracker.js --task "Create Brief" --brand "Acme" --input-text "..." --output-text "..."
 *   node tools/clis/token-tracker.js --task "Review Analytics" --input-file "prompt.txt" --output-file "response.txt"
 *   node tools/clis/token-tracker.js --task "Direct Entry" --input-tokens 450 --output-tokens 850
 *   node tools/clis/token-tracker.js --summary
 *   node tools/clis/token-tracker.js --rebuild-json --dashboard
 *   node tools/clis/token-tracker.js --task "Create Brief" --category brand --files-loaded 4 --avoidable-load-notes "none" --input-tokens 450 --output-tokens 850
 */

const fs = require('fs');
const path = require('path');

// Helper to estimate tokens from text (heuristic: Math.max(chars/4, words*1.3))
function estimateTokens(text) {
  if (!text) return 0;
  const charCount = text.length;
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  
  const charEst = Math.ceil(charCount / 4);
  const wordEst = Math.ceil(wordCount * 1.3);
  
  return Math.max(charEst, wordEst);
}

// Simple CLI arguments parser
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const key = args[i].slice(2);
      const value = args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true;
      options[key] = value;
    }
  }
  return options;
}

function readTextFile(filePath) {
  return fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '');
}

function sanitizeLedgerCell(value) {
  return String(value ?? '').replace(/\|/g, '/').replace(/\r?\n/g, ' ').trim();
}

function normalizeCategory(value) {
  const allowed = new Set(['brand', 'copy', 'visual', 'campaign', 'hygiene', 'performance', 'system', 'uncategorized']);
  const category = String(value || 'uncategorized').trim().toLowerCase();
  return allowed.has(category) ? category : 'uncategorized';
}

function parseFilesLoaded(value) {
  if (value === undefined || value === null || value === '') return null;
  const parsed = parseInt(value, 10);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : null;
}

function parseLedger(ledgerContent) {
  const history = [];
  const lines = ledgerContent.split(/\r?\n/);

  for (const line of lines) {
    if (!line.startsWith('|')) continue;
    if (line.includes('---') || line.includes('Date | Brand') || line.includes('Metric | Count')) continue;

    const cells = line.split('|').slice(1, -1).map((cell) => cell.trim());
    if (cells.length === 6 && /^\d{4}-\d{2}-\d{2}$/.test(cells[0])) {
      history.push({
        date: cells[0],
        brand: cells[1],
        task: cells[2],
        category: 'uncategorized',
        filesLoaded: null,
        avoidableLoadNotes: '',
        inputTokens: parseInt(cells[3], 10) || 0,
        outputTokens: parseInt(cells[4], 10) || 0,
        totalTokens: parseInt(cells[5], 10) || 0
      });
    } else if (cells.length >= 9 && /^\d{4}-\d{2}-\d{2}$/.test(cells[0])) {
      history.push({
        date: cells[0],
        brand: cells[1],
        task: cells[2],
        category: normalizeCategory(cells[3]),
        filesLoaded: parseFilesLoaded(cells[4]),
        avoidableLoadNotes: cells[5] || '',
        inputTokens: parseInt(cells[6], 10) || 0,
        outputTokens: parseInt(cells[7], 10) || 0,
        totalTokens: parseInt(cells[8], 10) || 0
      });
    }
  }

  const cumulative = history.reduce((acc, row) => {
    acc.inputTokens += row.inputTokens;
    acc.outputTokens += row.outputTokens;
    acc.totalTokens += row.totalTokens;
    return acc;
  }, { inputTokens: 0, outputTokens: 0, totalTokens: 0 });

  cumulative.totalTasks = history.length;
  cumulative.lastUpdated = history.length ? history[history.length - 1].date : "";

  return { cumulative, history };
}

function hasAvoidableLoadNote(row) {
  const note = String(row.avoidableLoadNotes || '').trim().toLowerCase();
  return Boolean(note && note !== 'none' && note !== 'n/a');
}

function formatNullable(value) {
  return value === null || value === undefined ? '' : String(value);
}

function summarizeUsage(jsonData) {
  const byBrand = new Map();
  const byCategory = new Map();
  const byMonth = new Map();
  const highTokenTasks = [];
  const avoidableLoadTasks = [];

  for (const row of jsonData.history) {
    const current = byBrand.get(row.brand) || { brand: row.brand, tasks: 0, totalTokens: 0 };
    current.tasks += 1;
    current.totalTokens += row.totalTokens;
    byBrand.set(row.brand, current);

    const category = normalizeCategory(row.category);
    const categoryCurrent = byCategory.get(category) || { category, tasks: 0, totalTokens: 0 };
    categoryCurrent.tasks += 1;
    categoryCurrent.totalTokens += row.totalTokens;
    byCategory.set(category, categoryCurrent);

    const month = row.date.slice(0, 7);
    const monthCurrent = byMonth.get(month) || { month, tasks: 0, highTokenTasks: 0, avoidableLoadTasks: 0, totalTokens: 0 };
    monthCurrent.tasks += 1;
    monthCurrent.totalTokens += row.totalTokens;
    if (row.totalTokens > 10000) monthCurrent.highTokenTasks += 1;
    if (hasAvoidableLoadNote(row)) monthCurrent.avoidableLoadTasks += 1;
    byMonth.set(month, monthCurrent);

    if (row.totalTokens > 10000) highTokenTasks.push(row);
    if (hasAvoidableLoadNote(row)) avoidableLoadTasks.push(row);
  }

  const brandRows = Array.from(byBrand.values())
    .sort((a, b) => b.totalTokens - a.totalTokens)
    .map((row) => `| ${row.brand} | ${row.tasks} | ${row.totalTokens} |`)
    .join('\n');

  const categoryRows = Array.from(byCategory.values())
    .sort((a, b) => b.totalTokens - a.totalTokens)
    .map((row) => `| ${row.category} | ${row.tasks} | ${row.totalTokens} |`)
    .join('\n');

  const highTokenRows = highTokenTasks
    .sort((a, b) => b.totalTokens - a.totalTokens)
    .map((row) => `| ${row.date} | ${row.brand} | ${row.task} | ${row.category} | ${row.totalTokens} |`)
    .join('\n');

  const avoidableLoadRows = avoidableLoadTasks
    .map((row) => `| ${row.date} | ${row.brand} | ${row.task} | ${formatNullable(row.filesLoaded)} | ${row.avoidableLoadNotes} |`)
    .join('\n');

  const monthlyRows = Array.from(byMonth.values())
    .sort((a, b) => a.month.localeCompare(b.month))
    .map((row) => {
      const highRate = row.tasks ? (row.highTokenTasks / row.tasks) * 100 : 0;
      const avoidableRate = row.tasks ? (row.avoidableLoadTasks / row.tasks) * 100 : 0;
      const score = Math.max(0, Math.round(100 - highRate - avoidableRate));
      return `| ${row.month} | ${row.tasks} | ${row.totalTokens} | ${row.highTokenTasks} | ${row.avoidableLoadTasks} | ${score} |`;
    })
    .join('\n');

  const average = jsonData.cumulative.totalTasks
    ? Math.round(jsonData.cumulative.totalTokens / jsonData.cumulative.totalTasks)
    : 0;

  return { brandRows, categoryRows, highTokenRows, avoidableLoadRows, monthlyRows, average };
}

function writeDashboard(dashboardPath, jsonData) {
  const { brandRows, categoryRows, highTokenRows, avoidableLoadRows, monthlyRows, average } = summarizeUsage(jsonData);
  const content = `# Context Usage Dashboard

Generated from \`logs/context-usage/token-ledger.md\`.

## Summary

| Metric | Value |
|---|---:|
| Total tasks | ${jsonData.cumulative.totalTasks} |
| Input tokens | ${jsonData.cumulative.inputTokens} |
| Output tokens | ${jsonData.cumulative.outputTokens} |
| Total tokens | ${jsonData.cumulative.totalTokens} |
| Average tokens / task | ${average} |
| Last updated | ${jsonData.cumulative.lastUpdated || 'N/A'} |

## Usage By Brand

| Brand | Tasks | Total Tokens |
|---|---:|---:|
${brandRows || '| [No data] | 0 | 0 |'}

## Usage By Category

| Category | Tasks | Total Tokens |
|---|---:|---:|
${categoryRows || '| [No data] | 0 | 0 |'}

## High-Token Tasks

Tasks over 10,000 total tokens.

| Date | Brand | Task | Category | Total Tokens |
|---|---|---|---|---:|
${highTokenRows || '| [None] |  |  |  | 0 |'}

## Avoidable-Load Notes

| Date | Brand | Task | Files Loaded | Notes |
|---|---|---|---:|---|
${avoidableLoadRows || '| [None] |  |  |  |  |'}

## Monthly Efficiency

Score = 100 - high-token task rate - avoidable-load note rate.

| Month | Tasks | Total Tokens | High-Token Tasks | Avoidable-Load Tasks | Score |
|---|---:|---:|---:|---:|---:|
${monthlyRows || '| [No data] | 0 | 0 | 0 | 0 | 100 |'}

## Efficiency Flags

- Review tasks above 10,000 total tokens for avoidable file loading.
- Prefer brand \`context-index.md\`, one agent, one skill, and selected references only.
- Use \`_core/COMPRESSION-RULES.md\` before reading long historical context.
`;
  fs.writeFileSync(dashboardPath, content, 'utf8');
}

function printSummary(jsonData) {
  const { average } = summarizeUsage(jsonData);
  console.log(`\nToken usage summary`);
  console.log(`- Tasks: ${jsonData.cumulative.totalTasks}`);
  console.log(`- Input tokens: ${jsonData.cumulative.inputTokens}`);
  console.log(`- Output tokens: ${jsonData.cumulative.outputTokens}`);
  console.log(`- Total tokens: ${jsonData.cumulative.totalTokens}`);
  console.log(`- Average tokens/task: ${average}\n`);
}

function main() {
  const options = parseArgs();

  // Print usage if help requested or no arguments
  if (options.help || options.h || Object.keys(options).length === 0) {
    console.log(`
Token Tracker Utility CLI
-------------------------
Usage:
  node tools/clis/token-tracker.js [options]

Options:
  --task <name>           The name of the task (default: "General Task")
  --brand <name>          The brand being worked on (default: "Shared/Global")
  --input-tokens <num>    Explicit input token count
  --output-tokens <num>   Explicit output token count
  --input-text <string>   String to estimate input tokens from
  --output-text <string>  String to estimate output tokens from
  --input-file <path>     File to read and estimate input tokens from
  --output-file <path>    File to read and estimate output tokens from
  --ledger-path <path>    Custom path to token-ledger.md
  --category <name>       Task category: brand, copy, visual, campaign, hygiene, performance, system, uncategorized
  --files-loaded <num>    Number of files loaded for the task
  --avoidable-load-notes <text>
                          Notes about avoidable context loading (use "none" when clean)
  --summary               Print summary from token-ledger.md
  --dashboard             Write logs/context-usage/dashboard.md
  --rebuild-json          Rebuild token-data.json from token-ledger.md
    `);
    process.exit(0);
  }

  const task = options.task || 'General Task';
  const brand = options.brand || 'Shared/Global';
  const category = normalizeCategory(options.category);
  const filesLoaded = parseFilesLoaded(options['files-loaded']);
  const avoidableLoadNotes = sanitizeLedgerCell(options['avoidable-load-notes'] || '');
  
  let inputTokens = 0;
  let outputTokens = 0;

  // Resolve input tokens
  if (options['input-tokens']) {
    inputTokens = parseInt(options['input-tokens'], 10) || 0;
  } else if (options['input-file']) {
    try {
      const content = fs.readFileSync(options['input-file'], 'utf8');
      inputTokens = estimateTokens(content);
    } catch (e) {
      console.error(`Warning: Could not read input file: ${e.message}`);
    }
  } else if (options['input-text']) {
    inputTokens = estimateTokens(String(options['input-text']));
  }

  // Resolve output tokens
  if (options['output-tokens']) {
    outputTokens = parseInt(options['output-tokens'], 10) || 0;
  } else if (options['output-file']) {
    try {
      const content = fs.readFileSync(options['output-file'], 'utf8');
      outputTokens = estimateTokens(content);
    } catch (e) {
      console.error(`Warning: Could not read output file: ${e.message}`);
    }
  } else if (options['output-text']) {
    outputTokens = estimateTokens(String(options['output-text']));
  }

  const totalTokens = inputTokens + outputTokens;

  // Ledger path setup & path traversal check
  const workspaceRoot = path.resolve(__dirname, '../..');
  const defaultLedgerPath = path.resolve(workspaceRoot, 'logs/context-usage/token-ledger.md');
  const ledgerPath = options['ledger-path'] ? path.resolve(options['ledger-path']) : defaultLedgerPath;

  if (!ledgerPath.startsWith(workspaceRoot)) {
    console.error("Error: Path traversal detected. Ledger path must reside inside the workspace.");
    process.exit(1);
  }

  // Create directory if it doesn't exist
  const ledgerDir = path.dirname(ledgerPath);
  if (!fs.existsSync(ledgerDir)) {
    fs.mkdirSync(ledgerDir, { recursive: true });
  }

  // File Lock implementation to prevent write concurrency collisions
  const lockFilePath = path.join(ledgerDir, 'token-tracker.lock');
  let lockAcquired = false;
  for (let attempt = 1; attempt <= 15; attempt++) {
    try {
      fs.writeFileSync(lockFilePath, 'LOCKED', { flag: 'wx' });
      lockAcquired = true;
      break;
    } catch (e) {
      if (e.code === 'EEXIST') {
        const start = Date.now();
        while (Date.now() - start < 100) {} // busy wait for 100ms
      } else {
        throw e;
      }
    }
  }

  if (!lockAcquired) {
    console.error("Error: Could not acquire write lock on ledger. Please retry.");
    process.exit(1);
  }

  try {
    // Initial template if ledger doesn't exist
    const initialTemplate = `# Token Ledger

Cumulative metrics of workspace interactions and token usages.

## Cumulative Summary

| Metric | Count |
| --- | --- |
| Cumulative Input Tokens | 0 |
| Cumulative Output Tokens | 0 |
| Cumulative Total Tokens | 0 |
| Total Tasks / Runs | 0 |
| Last Updated | N/A |

## Usage History

| Date | Brand | Task Name / Request | Input Est | Output Est | Total Est |
| --- | --- | --- | --- | --- | --- |
`;

    let ledgerContent = initialTemplate;
    if (fs.existsSync(ledgerPath)) {
      ledgerContent = readTextFile(ledgerPath);
    }

    const jsonPath = path.join(ledgerDir, 'token-data.json');
    const dashboardPath = path.join(ledgerDir, 'dashboard.md');

    const hasLogInput = Boolean(
      options.task ||
      options.brand ||
      options['input-tokens'] ||
      options['output-tokens'] ||
      options['input-text'] ||
      options['output-text'] ||
      options['input-file'] ||
      options['output-file']
    );

    if ((options.summary || options.dashboard || options['rebuild-json']) && !hasLogInput) {
      const jsonData = parseLedger(ledgerContent);
      fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2), 'utf8');
      if (options.dashboard) {
        writeDashboard(dashboardPath, jsonData);
      }
      printSummary(jsonData);
      if (options['rebuild-json']) {
        console.log(`- Rebuilt: ${jsonPath}`);
      }
      if (options.dashboard) {
        console.log(`- Updated: ${dashboardPath}`);
      }
      return;
    }

    // Parse existing metrics from ledger safely
    const inputMatch = ledgerContent.match(/\|\s*Cumulative Input Tokens\s*\|\s*(\d+)\s*\|/i);
    const outputMatch = ledgerContent.match(/\|\s*Cumulative Output Tokens\s*\|\s*(\d+)\s*\|/i);
    const totalMatch = ledgerContent.match(/\|\s*Cumulative Total Tokens\s*\|\s*(\d+)\s*\|/i);
    const runsMatch = ledgerContent.match(/\|\s*Total Tasks \/ Runs\s*\|\s*(\d+)\s*\|/i);

    const oldInput = inputMatch ? parseInt(inputMatch[1], 10) : 0;
    const oldOutput = outputMatch ? parseInt(outputMatch[1], 10) : 0;
    const oldTotal = totalMatch ? parseInt(totalMatch[1], 10) : 0;
    const oldRuns = runsMatch ? parseInt(runsMatch[1], 10) : 0;

    // Calculate new values
    const newCumulativeInput = oldInput + inputTokens;
    const newCumulativeOutput = oldOutput + outputTokens;
    const newCumulativeTotal = oldTotal + totalTokens;
    const newTotalTasks = oldRuns + 1;

    // ISO Date string for local time
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const timeStr = now.toTimeString().split(' ')[0];
    const lastUpdated = `${dateStr} ${timeStr}`;

    // Replace old values in the template table
    let updatedContent = ledgerContent;
    updatedContent = updatedContent.replace(
      /\|\s*Cumulative Input Tokens\s*\|\s*(?:\d+|N\/A)\s*\|/i,
      `| Cumulative Input Tokens | ${newCumulativeInput} |`
    );
    updatedContent = updatedContent.replace(
      /\|\s*Cumulative Output Tokens\s*\|\s*(?:\d+|N\/A)\s*\|/i,
      `| Cumulative Output Tokens | ${newCumulativeOutput} |`
    );
    updatedContent = updatedContent.replace(
      /\|\s*Cumulative Total Tokens\s*\|\s*(?:\d+|N\/A)\s*\|/i,
      `| Cumulative Total Tokens | ${newCumulativeTotal} |`
    );
    updatedContent = updatedContent.replace(
      /\|\s*Total Tasks \/ Runs\s*\|\s*(?:\d+|N\/A)\s*\|/i,
      `| Total Tasks / Runs | ${newTotalTasks} |`
    );
    updatedContent = updatedContent.replace(
      /\|\s*Last Updated\s*\|\s*(?:[^\s|]+(?:\s+[^\s|]+)*|N\/A)\s*\|/i,
      `| Last Updated | ${lastUpdated} |`
    );

    updatedContent = updatedContent.replace(
      /\| Date \| Brand \| Task Name \/ Request \| Input Est \| Output Est \| Total Est \|\r?\n\| --- \| --- \| --- \| --- \| --- \| --- \|/,
      '| Date | Brand | Task Name / Request | Category | Files Loaded | Avoidable Load Notes | Input Est | Output Est | Total Est |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- |'
    );

    // Append new row to Usage History table
    const newRow = `| ${dateStr} | ${sanitizeLedgerCell(brand)} | ${sanitizeLedgerCell(task)} | ${category} | ${formatNullable(filesLoaded)} | ${avoidableLoadNotes} | ${inputTokens} | ${outputTokens} | ${totalTokens} |`;
    updatedContent = updatedContent.trim() + '\n' + newRow + '\n';

    fs.writeFileSync(ledgerPath, updatedContent, 'utf8');

    // Sync to token-data.json for Dashboard visualization from the ledger, not stale JSON.
    const jsonData = parseLedger(updatedContent);
    jsonData.cumulative.lastUpdated = lastUpdated;
    fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2), 'utf8');
    if (options.dashboard) {
      writeDashboard(dashboardPath, jsonData);
    }

    console.log(`\nToken tracker logging complete!`);
    console.log(`- Task: ${task} (Brand: ${brand})`);
    console.log(`- Last Run Tokens: Input: ${inputTokens} | Output: ${outputTokens} | Total: ${totalTokens}`);
    console.log(`- Workspace Cumulative Totals:`);
    console.log(`  * Input: ${newCumulativeInput}`);
    console.log(`  * Output: ${newCumulativeOutput}`);
    console.log(`  * Total: ${newCumulativeTotal} across ${newTotalTasks} tasks`);
    console.log(`- Updated: ${ledgerPath}`);
    console.log(`- Updated: ${jsonPath}\n`);
    if (options.dashboard) {
      console.log(`- Updated: ${dashboardPath}\n`);
    }

  } finally {
    // Release Lock
    try {
      if (fs.existsSync(lockFilePath)) {
        fs.unlinkSync(lockFilePath);
      }
    } catch (err) {
      console.error(`Warning: Could not release write lock: ${err.message}`);
    }
  }
}

main();
