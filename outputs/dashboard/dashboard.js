// Brand Manager Bot - local dashboard runtime.

const dashboardData = window.BRAND_MANAGER_DASHBOARD_DATA || {
  schemaVersion: "brand-manager-dashboard.v1",
  generatedAt: "",
  tokenData: { cumulative: {}, history: [] },
  findings: [],
  observations: [],
  graph: { nodes: [], links: [] }
};

const stateKey = "brandManagerDashboardFindingState.v1";
const actionLogKey = "brandManagerDashboardActionLog.v1";
const validStatuses = ["New", "Needs approval", "Assigned", "Snoozed", "Dismissed", "Resolved"];
let activeTab = "tokens";
let localMode = true;
let tokenData = dashboardData.tokenData;
let findings = mergeFindingState(dashboardData.findings || []);
let observations = dashboardData.observations || [];

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupEventListeners();
  renderTokenStats();
  renderExecutionChart();
  renderPriceCalculator();
  renderHistoryTable();
  renderHygieneBoard();
  renderObservations();
  renderCodebaseGraph();
  renderActionLog();
});

function setupNavigation() {
  const navItems = document.querySelectorAll(".nav-item");
  const tabContents = document.querySelectorAll(".tab-content");
  const tabTitle = document.getElementById("tabTitle");

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navItems.forEach(nav => nav.classList.remove("active"));
      tabContents.forEach(content => content.classList.remove("active"));

      item.classList.add("active");
      activeTab = item.getAttribute("data-tab");
      document.getElementById(`tab-${activeTab}`).classList.add("active");
      tabTitle.textContent = item.textContent.trim();
    });
  });
}

function mergeFindingState(baseFindings) {
  const stored = readJson(stateKey, {});
  return baseFindings.map(finding => {
    const override = stored[finding.finding_id] || {};
    return {
      ...finding,
      ...override,
      action_history: [
        ...(finding.action_history || []),
        ...(override.action_history || [])
      ]
    };
  });
}

function saveFindingState() {
  const compact = {};
  findings.forEach(finding => {
    compact[finding.finding_id] = {
      status: finding.status,
      owner: finding.owner,
      updated_at: finding.updated_at,
      resolved_at: finding.resolved_at,
      action_history: finding.action_history || []
    };
  });
  localStorage.setItem(stateKey, JSON.stringify(compact, null, 2));
}

function appendAction(findingId, action, details = "") {
  const finding = findings.find(item => item.finding_id === findingId);
  if (!finding) return;

  const entry = {
    finding_id: findingId,
    action,
    details,
    status: finding.status,
    owner: finding.owner,
    at: new Date().toISOString()
  };

  finding.action_history = [...(finding.action_history || []), entry];
  finding.updated_at = entry.at.slice(0, 10);

  const log = readJson(actionLogKey, []);
  log.push(entry);
  localStorage.setItem(actionLogKey, JSON.stringify(log, null, 2));
  saveFindingState();
}

function setFindingStatus(findingId, status) {
  if (!validStatuses.includes(status)) return;
  const finding = findings.find(item => item.finding_id === findingId);
  if (!finding) return;

  finding.status = status;
  if (status === "Resolved") {
    finding.resolved_at = new Date().toISOString().slice(0, 10);
  }
  appendAction(findingId, `Status changed to ${status}`);
  renderHygieneBoard();
  renderActionLog();
}

function assignFinding(findingId) {
  const finding = findings.find(item => item.finding_id === findingId);
  if (!finding) return;

  const nextOwner = window.prompt("Assign owner", finding.owner || "[To be supplied]");
  if (!nextOwner) return;

  finding.owner = nextOwner.trim();
  finding.status = "Assigned";
  appendAction(findingId, "Assigned", `Owner set to ${finding.owner}`);
  renderHygieneBoard();
  renderActionLog();
}

window.dashboardAction = function(findingId, action) {
  const mapping = {
    approve: "Needs approval",
    dismiss: "Dismissed",
    snooze: "Snoozed",
    resolve: "Resolved"
  };
  setFindingStatus(findingId, mapping[action] || action);
};

window.assignFinding = assignFinding;

function renderTokenStats() {
  const cum = tokenData.cumulative || {};
  const input = Number(cum.inputTokens || 0);
  const output = Number(cum.outputTokens || 0);
  const total = Number(cum.totalTokens || input + output);

  document.getElementById("cumulativeTotal").textContent = formatNumber(total);
  document.getElementById("cumulativeTasks").textContent = `${formatNumber(cum.totalTasks || 0)} runs recorded`;
  document.getElementById("cumulativeInput").textContent = formatNumber(input);
  document.getElementById("cumulativeOutput").textContent = formatNumber(output);
  document.getElementById("lastDbSync").textContent = cum.lastUpdated || dashboardData.generatedAt || "[To be supplied]";

  const inputCost = (input / 1000000) * 1.25;
  const outputCost = (output / 1000000) * 3.75;
  document.getElementById("estimatedCost").textContent = `$${(inputCost + outputCost).toFixed(3)}`;
  document.getElementById("cacheSavings").textContent = "Local";
  document.getElementById("cacheSavingsVal").textContent = "Static data source loaded";
}

function renderExecutionChart() {
  const svg = document.getElementById("runChart");
  svg.innerHTML = "";

  const history = (tokenData.history || []).slice(-6);
  if (history.length === 0) return;

  const width = 600;
  const height = 240;
  const paddingLeft = 50;
  const paddingRight = 20;
  const paddingTop = 30;
  const paddingBottom = 40;
  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;
  const maxVal = Math.max(...history.map(d => d.totalTokens), 1000);
  const scaleY = chartHeight / maxVal;
  const barGap = 20;
  const barWidth = (chartWidth - barGap * (history.length - 1)) / history.length;

  for (let i = 0; i <= 4; i++) {
    const yVal = maxVal * (i / 4);
    const yPos = height - paddingBottom - yVal * scaleY;
    appendSvg(svg, "line", {
      x1: paddingLeft,
      y1: yPos,
      x2: width - paddingRight,
      y2: yPos,
      stroke: "#202329",
      "stroke-width": "1",
      "stroke-dasharray": i > 0 ? "4,4" : ""
    });
    const label = appendSvg(svg, "text", {
      x: paddingLeft - 8,
      y: yPos + 4,
      fill: "#94a3b8",
      "font-size": "10",
      "text-anchor": "end",
      "font-family": "monospace"
    });
    label.textContent = yVal >= 1000 ? `${(yVal / 1000).toFixed(1)}k` : String(Math.round(yVal));
  }

  history.forEach((d, idx) => {
    const xPos = paddingLeft + idx * (barWidth + barGap);
    const inputHeight = d.inputTokens * scaleY;
    const outputHeight = d.outputTokens * scaleY;
    const yInput = height - paddingBottom - inputHeight;
    const yOutput = yInput - outputHeight;

    appendSvg(svg, "rect", { x: xPos, y: yInput, width: barWidth, height: inputHeight, fill: "#3b82f6", rx: "2" });
    appendSvg(svg, "rect", { x: xPos, y: yOutput, width: barWidth, height: outputHeight, fill: "#10b981", rx: "2" });
    const brandLabel = appendSvg(svg, "text", { x: xPos + barWidth / 2, y: height - paddingBottom + 18, fill: "#94a3b8", "font-size": "10", "text-anchor": "middle" });
    brandLabel.textContent = String(d.brand || "Unknown").substring(0, 8);
    const dateLabel = appendSvg(svg, "text", { x: xPos + barWidth / 2, y: height - paddingBottom + 30, fill: "#64748b", "font-size": "8", "text-anchor": "middle" });
    dateLabel.textContent = String(d.date || "").substring(5);
  });
}

function renderPriceCalculator() {
  const tbody = document.querySelector("#priceTable tbody");
  tbody.innerHTML = "";
  const cum = tokenData.cumulative || {};
  const inputTokens = Number(cum.inputTokens || 0);
  const outputTokens = Number(cum.outputTokens || 0);
  const models = [
    { name: "Reference Low-Cost Model", inCost: 0.075, outCost: 0.3 },
    { name: "Reference Midrange Model", inCost: 1.25, outCost: 3.75 },
    { name: "Reference Premium Model", inCost: 3.0, outCost: 15.0 }
  ];

  models.forEach(model => {
    const totalEst = ((inputTokens / 1000000) * model.inCost) + ((outputTokens / 1000000) * model.outCost);
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><strong>${escapeHtml(model.name)}</strong></td>
      <td>$${model.inCost.toFixed(3)}</td>
      <td>$${model.outCost.toFixed(3)}</td>
      <td class="monospace text-bold">$${totalEst.toFixed(4)}</td>
    `;
    tbody.appendChild(row);
  });
}

function renderHistoryTable() {
  const tbody = document.querySelector("#historyTable tbody");
  tbody.innerHTML = "";

  [...(tokenData.history || [])].reverse().forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="monospace">${escapeHtml(item.date)}</td>
      <td><span class="badge badge-info">${escapeHtml(item.brand)}</span></td>
      <td>${escapeHtml(item.task)}</td>
      <td class="monospace">${formatNumber(item.inputTokens)}</td>
      <td class="monospace">${formatNumber(item.outputTokens)}</td>
      <td class="monospace text-bold">${formatNumber(item.totalTokens)}</td>
    `;
    tbody.appendChild(row);
  });
}

function renderHygieneBoard() {
  const columns = {
    Critical: document.getElementById("col-critical"),
    Important: document.getElementById("col-important"),
    Monitor: document.getElementById("col-monitor")
  };
  Object.values(columns).forEach(column => { column.innerHTML = ""; });

  const openFindings = findings.filter(f => !["Dismissed", "Resolved"].includes(f.status));
  const counts = { Critical: 0, Important: 0, Monitor: 0 };

  openFindings.forEach(finding => {
    counts[finding.priority] = (counts[finding.priority] || 0) + 1;
    const item = document.createElement("div");
    item.className = "triage-item";
    item.innerHTML = `
      <div class="triage-title">${escapeHtml(finding.finding_id)}: ${escapeHtml(finding.issue)}</div>
      <div class="triage-desc">${escapeHtml(finding.evidence)}</div>
      <div class="triage-meta">
        <span>Status: <strong>${escapeHtml(finding.status)}</strong></span>
        <span>Owner: <strong>${escapeHtml(finding.owner)}</strong></span>
      </div>
      <div class="triage-detail">${escapeHtml(finding.suggested_action)}</div>
      <div class="triage-actions">
        <button onclick="dashboardAction('${finding.finding_id}', 'approve')">Approve</button>
        <button onclick="assignFinding('${finding.finding_id}')">Assign</button>
        <button onclick="dashboardAction('${finding.finding_id}', 'snooze')">Snooze</button>
        <button onclick="dashboardAction('${finding.finding_id}', 'dismiss')">Dismiss</button>
        <button onclick="dashboardAction('${finding.finding_id}', 'resolve')">Resolve</button>
      </div>
    `;
    (columns[finding.priority] || columns.Monitor).appendChild(item);
  });

  document.getElementById("count-critical").textContent = counts.Critical;
  document.getElementById("count-important").textContent = counts.Important;
  document.getElementById("count-monitor").textContent = counts.Monitor;
  document.getElementById("criticalCount").textContent = counts.Critical;

  const scoreElem = document.getElementById("hygieneScore");
  if (counts.Critical > 0) {
    scoreElem.textContent = "Blocked";
    scoreElem.style.color = "var(--accent-rose)";
  } else if (counts.Important > 0) {
    scoreElem.textContent = "Qualified";
    scoreElem.style.color = "var(--accent-amber)";
  } else {
    scoreElem.textContent = "Interpretable";
    scoreElem.style.color = "var(--accent-emerald)";
  }
}

function renderObservations() {
  const tbody = document.querySelector("#obsTable tbody");
  tbody.innerHTML = "";
  document.getElementById("obsCount").textContent = observations.length;
  document.getElementById("generatedSkillsCount").textContent = "0";

  observations.forEach(o => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="monospace">${escapeHtml(o.date)}</td>
      <td><strong>${escapeHtml(o.title)}</strong></td>
      <td><span class="badge ${o.score >= 8 ? "badge-danger" : "badge-warning"}">${escapeHtml(o.score)}/10</span></td>
      <td>${escapeHtml(o.action)}</td>
      <td><span class="monospace" style="color:var(--accent-blue);">${escapeHtml(o.skill)}</span></td>
    `;
    tbody.appendChild(row);
  });
}

function renderActionLog() {
  const tbody = document.querySelector("#actionLogTable tbody");
  if (!tbody) return;
  tbody.innerHTML = "";
  readJson(actionLogKey, []).slice().reverse().forEach(entry => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="monospace">${escapeHtml(entry.at)}</td>
      <td class="monospace">${escapeHtml(entry.finding_id)}</td>
      <td>${escapeHtml(entry.action)}</td>
      <td>${escapeHtml(entry.owner || "")}</td>
      <td>${escapeHtml(entry.details || "")}</td>
    `;
    tbody.appendChild(row);
  });
}

function renderCodebaseGraph() {
  const svg = document.getElementById("codebaseGraph");
  svg.innerHTML = "";

  const sourceNodes = dashboardData.graph?.nodes || [];
  const sourceLinks = dashboardData.graph?.links || [];
  const positions = [
    [400, 70], [220, 180], [580, 180], [180, 310], [360, 330], [540, 330], [700, 310]
  ];
  const colorMap = {
    core: "#3b82f6",
    agent: "#10b981",
    skill: "#f59e0b",
    brand: "#ef4444",
    output: "#8b5cf6",
    log: "#14b8a6",
    tool: "#eab308"
  };

  const nodes = sourceNodes.map((node, idx) => ({
    ...node,
    x: positions[idx % positions.length][0],
    y: positions[idx % positions.length][1],
    color: colorMap[node.group] || "#94a3b8",
    size: node.group === "core" ? 14 : 10
  }));

  sourceLinks.forEach(link => {
    const sNode = nodes.find(n => n.id === link.source);
    const tNode = nodes.find(n => n.id === link.target);
    if (!sNode || !tNode) return;
    appendSvg(svg, "line", { x1: sNode.x, y1: sNode.y, x2: tNode.x, y2: tNode.y, stroke: "#202329", "stroke-width": "1.5" });
  });

  nodes.forEach(node => {
    const group = appendSvg(svg, "g", { class: "node", cursor: "pointer" });
    const circle = appendSvg(group, "circle", { cx: node.x, cy: node.y, r: node.size, fill: node.color, stroke: "#0a0b0d", "stroke-width": "2" });
    const label = appendSvg(group, "text", { x: node.x, y: node.y + node.size + 14, "text-anchor": "middle", fill: "#f8fafc", "font-size": "11" });
    label.textContent = node.id;
    group.addEventListener("mouseenter", () => {
      circle.setAttribute("fill", "#ffffff");
      circle.setAttribute("r", node.size + 2);
    });
    group.addEventListener("mouseleave", () => {
      circle.setAttribute("fill", node.color);
      circle.setAttribute("r", node.size);
    });
  });
}

function setupEventListeners() {
  document.getElementById("refreshBtn").addEventListener("click", () => {
    findings = mergeFindingState(dashboardData.findings || []);
    renderTokenStats();
    renderExecutionChart();
    renderHistoryTable();
    renderHygieneBoard();
    renderActionLog();
  });

  document.getElementById("toggleModeBtn").addEventListener("click", () => {
    localMode = !localMode;
    document.getElementById("toggleModeBtn").textContent = localMode ? "Local Mode" : "Static Mode";
    document.getElementById("syncStatus").className = localMode ? "status-indicator online" : "status-indicator offline";
    document.querySelector(".status-text").textContent = localMode ? "Local File Mode" : "Static Snapshot";
  });

  document.getElementById("exportActionLogBtn").addEventListener("click", exportActionLog);
  document.getElementById("logObsBtn").addEventListener("click", () => {
    const text = document.getElementById("obsDesc").value.trim();
    if (!text) return;
    observations.push({
      date: new Date().toISOString().split("T")[0],
      title: text,
      score: 7,
      action: "Logged for manual review",
      skill: "meta-improvement-system"
    });
    document.getElementById("obsDesc").value = "";
    renderObservations();
  });
}

function exportActionLog() {
  const payload = {
    exported_at: new Date().toISOString(),
    schema_version: dashboardData.schemaVersion,
    action_history: readJson(actionLogKey, [])
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "brand-manager-dashboard-action-log.json";
  link.click();
  URL.revokeObjectURL(url);
}

function appendSvg(parent, tag, attrs = {}) {
  const node = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (value !== "") node.setAttribute(key, value);
  });
  parent.appendChild(node);
  return node;
}

function readJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatNumber(num) {
  return String(num ?? 0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
