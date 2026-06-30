window.YUANLI_PMO_V22={
  "version": "v2.4",
  "sync": {
    "mode": "github_actions",
    "source": "issues",
    "updated_at": "2026-06-30T04:30:05.876Z"
  },
  "fields": [
    "Canon Node",
    "Work Type",
    "Strategic Layer",
    "Capability Domain",
    "Status",
    "PMO Health",
    "Priority",
    "Gap Score",
    "Evidence Strength",
    "Agent Level",
    "Approval Gate",
    "Writeback Target",
    "Owner",
    "Review Cadence"
  ],
  "views": [
    {
      "id": "strategic_cockpit",
      "name": "Strategic Cockpit",
      "layout": "table",
      "purpose": "project health and next strategic decision",
      "fields": [
        "Canon Node",
        "PMO Health",
        "Priority",
        "Gap Score",
        "Evidence Strength",
        "Next Action"
      ]
    },
    {
      "id": "c3_gap_ranking",
      "name": "C3 Gap Ranking",
      "layout": "table",
      "purpose": "rank capability gaps before execution",
      "fields": [
        "Capability Domain",
        "Strategic Layer",
        "Gap Score",
        "Evidence Strength",
        "Selected Gap",
        "Next C4 Task"
      ]
    },
    {
      "id": "c4_execution_board",
      "name": "C4 Execution Board",
      "layout": "board",
      "purpose": "convert selected gaps into executable work",
      "columns": [
        "To Do",
        "In Progress",
        "Dry Run",
        "Approval",
        "Done",
        "Backwritten"
      ]
    },
    {
      "id": "evidence_ledger",
      "name": "Evidence Ledger",
      "layout": "table",
      "purpose": "check whether work is proven",
      "fields": [
        "Work Item",
        "Evidence Path",
        "Evidence Strength",
        "Accepted",
        "Missing",
        "Next Reuse"
      ]
    },
    {
      "id": "evolution_review",
      "name": "Evolution Review",
      "layout": "table",
      "purpose": "verify reusable learning",
      "fields": [
        "Evolution Note",
        "What Changed",
        "Next Reuse",
        "Writeback Target",
        "System Improvement"
      ]
    },
    {
      "id": "roadmap",
      "name": "Roadmap / Milestone",
      "layout": "roadmap",
      "purpose": "manage release sequence",
      "milestones": [
        "v2.2 PMO OS",
        "v2.3 C3 Gap Ranking",
        "v2.4 PMO Automation Bridge",
        "v2.5 PMO Dashboard",
        "v3.0 Agent Execution Bridge"
      ]
    }
  ],
  "metrics": [
    "Lead Time",
    "Cycle Time",
    "PR Merge Time",
    "Blocked Age",
    "Evidence Coverage",
    "Backwrite Rate",
    "Evolution Note Rate",
    "C3 Gap Close Rate"
  ],
  "objects": [
    "Portfolio",
    "Project",
    "Work Item",
    "Gap",
    "Task",
    "Evidence",
    "Evolution Note",
    "Asset",
    "Review"
  ],
  "automation": [
    "issue changed -> sync dashboard",
    "c3-gap -> ready",
    "c4-task -> todo",
    "pr opened -> in_progress",
    "pr merged -> done",
    "evidence added -> weak+",
    "evolution added -> writeback complete",
    "blocked 7d -> red"
  ],
  "seed_items": [
    {
      "issue": "#70",
      "node": "C3",
      "type": "gap",
      "domain": "matrix",
      "layer": "design",
      "status": "ready",
      "health": "yellow",
      "priority": "P0",
      "gap_score": 88,
      "evidence": "weak",
      "next": "Patch PMO dashboard data, sync script version, roadmap, and automation labels so UI and data source are aligned."
    },
    {
      "issue": "#71",
      "node": "C4",
      "type": "task",
      "domain": "delivery",
      "layer": "execution",
      "status": "ready",
      "health": "green",
      "priority": "P0",
      "gap_score": 72,
      "evidence": "medium",
      "next": "execute selected-gap handoff"
    },
    {
      "issue": "#64",
      "node": "C4",
      "type": "task",
      "domain": "delivery",
      "layer": "execution",
      "status": "ready",
      "health": "green",
      "priority": "P0",
      "gap_score": 72,
      "evidence": "medium",
      "next": "execute selected-gap handoff"
    },
    {
      "issue": "#63",
      "node": "C3",
      "type": "gap",
      "domain": "matrix",
      "layer": "design",
      "status": "ready",
      "health": "yellow",
      "priority": "P0",
      "gap_score": 72,
      "evidence": "weak",
      "next": "Create selected-gap-to-task handoff so the top ranked C3 gap can generate a C4 execution issue."
    },
    {
      "issue": "#72",
      "node": "C2",
      "type": "evidence",
      "domain": "data",
      "layer": "validation",
      "status": "qa",
      "health": "green",
      "priority": "P1",
      "gap_score": 50,
      "evidence": "medium",
      "next": "review evidence"
    },
    {
      "issue": "#65",
      "node": "C2",
      "type": "evidence",
      "domain": "data",
      "layer": "validation",
      "status": "qa",
      "health": "green",
      "priority": "P1",
      "gap_score": 50,
      "evidence": "medium",
      "next": "review evidence"
    }
  ],
  "gap_ranking": [
    {
      "rank": 1,
      "issue": "#70",
      "gap": "Patch PMO dashboard data, sync script version, roadmap, and automation labels so UI and data source are aligned.",
      "score": 88,
      "formula": "parsed from issue body",
      "selected": true,
      "next_issue": "#71"
    }
  ]
};
