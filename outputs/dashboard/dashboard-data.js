window.BRAND_MANAGER_DASHBOARD_DATA = {
  schemaVersion: "brand-manager-dashboard.v1",
  generatedAt: "2026-06-13",
  tokenData: {
    cumulative: {
      inputTokens: 44250,
      outputTokens: 19450,
      totalTokens: 63700,
      totalTasks: 9,
      lastUpdated: "2026-06-13"
    },
    history: [
      {
        date: "2026-06-03",
        brand: "System",
        task: "Verify PowerShell tracker",
        category: "uncategorized",
        filesLoaded: null,
        avoidableLoadNotes: "",
        inputTokens: 250,
        outputTokens: 350,
        totalTokens: 600
      },
      {
        date: "2026-06-03",
        brand: "Acme",
        task: "Generate Ad Copy",
        category: "uncategorized",
        filesLoaded: null,
        avoidableLoadNotes: "",
        inputTokens: 400,
        outputTokens: 800,
        totalTokens: 1200
      },
      {
        date: "2026-06-09",
        brand: "Fantasy XI Lab",
        task: "Brand and Content Setup",
        category: "uncategorized",
        filesLoaded: null,
        avoidableLoadNotes: "",
        inputTokens: 8000,
        outputTokens: 4000,
        totalTokens: 12000
      },
      {
        date: "2026-06-09",
        brand: "Fantasy XI-AG",
        task: "Recreate Brand Assets under Fantasy XI-AG",
        category: "uncategorized",
        filesLoaded: null,
        avoidableLoadNotes: "",
        inputTokens: 9000,
        outputTokens: 4500,
        totalTokens: 13500
      },
      {
        date: "2026-06-10",
        brand: "Fantasy XI-AG",
        task: "Envato Asset Rework and HTML Brand Showcase",
        category: "uncategorized",
        filesLoaded: null,
        avoidableLoadNotes: "",
        inputTokens: 8500,
        outputTokens: 4500,
        totalTokens: 13000
      },
      {
        date: "2026-06-12",
        brand: "System",
        task: "Test Run for Streamlining",
        category: "uncategorized",
        filesLoaded: null,
        avoidableLoadNotes: "",
        inputTokens: 1500,
        outputTokens: 750,
        totalTokens: 2250
      },
      {
        date: "2026-06-13",
        brand: "System",
        task: "Bot Runtime Streamlining",
        category: "uncategorized",
        filesLoaded: null,
        avoidableLoadNotes: "",
        inputTokens: 12000,
        outputTokens: 3000,
        totalTokens: 15000
      },
      {
        date: "2026-06-13",
        brand: "System",
        task: "Bot Gap Closure Implementation",
        category: "uncategorized",
        filesLoaded: null,
        avoidableLoadNotes: "",
        inputTokens: 4500,
        outputTokens: 1500,
        totalTokens: 6000
      },
      {
        date: "2026-06-13",
        brand: "System",
        task: "Tracker Metadata Test",
        category: "system",
        filesLoaded: 3,
        avoidableLoadNotes: "none",
        inputTokens: 100,
        outputTokens: 50,
        totalTokens: 150
      }
    ]
  },
  findings: [
    {
      finding_id: "HYG-001",
      agent: "hygiene-checker",
      run_context: "Brand Manager Bot / App 2.0 gap closure / local sample data",
      priority: "Critical",
      status: "Needs approval",
      entity: "outputs/dashboard",
      issue: "Dashboard existed before the Phase 3 data contract was implemented.",
      evidence: "Earlier App 2.0 plan text did not match the dashboard implementation state.",
      why_it_matters: "Operators could treat prototype data as live findings if the dashboard is not schema-backed.",
      likely_cause: "Prototype UI was created before the finding-store workflow was finalized.",
      suggested_action: "Use schema-backed local data and keep action history before using the dashboard operationally.",
      owner: "hygiene-checker",
      confidence: "High",
      requires_approval: "No",
      created_at: "2026-06-13",
      resolved_at: "[Open]",
      rule_version: "hygiene-rules.v1",
      source_data: "logs/hygiene/findings.sample.json",
      updated_at: "2026-06-13",
      action_history: []
    },
    {
      finding_id: "HYG-002",
      agent: "performance-operator",
      run_context: "Brand Manager Bot / App 2.0 gap closure / local sample data",
      priority: "Important",
      status: "New",
      entity: "performance-system",
      issue: "Performance interpretation needs a hygiene gate before CPA, ROAS, or CVR claims.",
      evidence: "skills/performance-system/SKILL.md requires source data and tracking status before interpretation.",
      why_it_matters: "Performance recommendations can be misleading when tracking or URL hygiene is unverified.",
      likely_cause: "Phase 2 routing existed before a dashboard-ready record flow was added.",
      suggested_action: "Mark reports blocked, qualified, or interpretable based on hygiene status.",
      owner: "performance-operator",
      confidence: "High",
      requires_approval: "No",
      created_at: "2026-06-13",
      resolved_at: "[Open]",
      rule_version: "performance-gate.v1",
      source_data: "logs/hygiene/findings.sample.json",
      updated_at: "2026-06-13",
      action_history: []
    },
    {
      finding_id: "HYG-003",
      agent: "researcher",
      run_context: "Brand Manager Bot / App 2.0 gap closure / local sample data",
      priority: "Monitor",
      status: "New",
      entity: "historical token logs",
      issue: "Historical brand labels do not always match current brand folder names.",
      evidence: "logs/context-usage/token-data.json includes historical labels such as Fantasy XI-AG.",
      why_it_matters: "Dashboards should display historical labels as recorded instead of silently rewriting history.",
      likely_cause: "Brand folders were renamed or reorganized during migration.",
      suggested_action: "Treat historical labels as source data unless a brand alias registry is supplied.",
      owner: "researcher",
      confidence: "Medium",
      requires_approval: "No",
      created_at: "2026-06-13",
      resolved_at: "[Open]",
      rule_version: "history-integrity.v1",
      source_data: "logs/context-usage/token-data.json",
      updated_at: "2026-06-13",
      action_history: []
    }
  ],
  observations: [
    {
      date: "2026-06-13",
      title: "Workflow files referenced unavailable tools and old docs paths.",
      score: 9,
      action: "Normalize active workflows to current Codex tools and brands/[Brand] paths.",
      skill: "meta-improvement-system"
    },
    {
      date: "2026-06-13",
      title: "Dashboard needed schema-backed local data before operational use.",
      score: 8,
      action: "Use static dashboard data and browser action history.",
      skill: "hygiene-system"
    }
  ],
  graph: {
    nodes: [
      { id: "Core Runtime", group: "core" },
      { id: "Agents", group: "agent" },
      { id: "Skills", group: "skill" },
      { id: "Brand Memory", group: "brand" },
      { id: "Outputs", group: "output" },
      { id: "Logs", group: "log" },
      { id: "Tools", group: "tool" }
    ],
    links: [
      { source: "Core Runtime", target: "Agents" },
      { source: "Core Runtime", target: "Skills" },
      { source: "Agents", target: "Brand Memory" },
      { source: "Skills", target: "Outputs" },
      { source: "Skills", target: "Logs" },
      { source: "Tools", target: "Logs" }
    ]
  }
};
