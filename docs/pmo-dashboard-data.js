window.YUANLI_PMO_V22={
  "version": "v3.3",
  "ui_version": "v2.8",
  "data_patch": "v2.7.1",
  "sync": {
    "mode": "github_actions",
    "source": "issues",
    "updated_at": "2026-06-30T05:39:32.272Z"
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
    "Review Cadence",
    "Acceptance State",
    "Canonical State"
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
        "System Improvement",
        "Canonical State"
      ]
    },
    {
      "id": "roadmap",
      "name": "Roadmap / Milestone",
      "layout": "roadmap",
      "purpose": "manage release sequence",
      "milestones": [
        "v2.7.1 Data Sync Patch",
        "v2.8 Interactive Six-view Drilldown",
        "v2.9 GitHub Projects Native Setup",
        "v3.0 PMO Metrics Engine",
        "v3.1 Task Bridge",
        "v3.2 Evidence Acceptance Loop",
        "v3.3 Canonical Learning Gate"
      ]
    }
  ],
  "metrics": [
    "Evidence Coverage",
    "Backwrite Rate",
    "Evolution Note Rate",
    "C3 Gap Close Rate",
    "Blocked Age"
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
    "Review",
    "Approval Gate",
    "Canonical Learning"
  ],
  "automation": [
    "issue changed -> sync dashboard",
    "weekly review -> evolution note",
    "selected gap -> C4 task draft",
    "evidence review -> accepted/missing/rejected",
    "accepted learning -> canonical candidate",
    "human approval -> canonical learning"
  ],
  "seed_items": [
    {
      "issue": "#70",
      "node": "C3",
      "type": "gap",
      "domain": "matrix",
      "layer": "design",
      "status": "ready",
      "health": "green",
      "priority": "P0",
      "gap_score": 88,
      "evidence": "medium",
      "next": "Patch PMO dashboard data, sync script version, roadmap, and automation labels so UI and data source are aligned."
    },
    {
      "issue": "#82",
      "node": "C3",
      "type": "gap",
      "domain": "matrix",
      "layer": "design",
      "status": "ready",
      "health": "green",
      "priority": "P0",
      "gap_score": 78,
      "evidence": "medium",
      "next": "Create Agent Task Bridge script and workflow template for selected C3 gap to C4 task draft."
    },
    {
      "issue": "#73",
      "node": "C3",
      "type": "gap",
      "domain": "matrix",
      "layer": "design",
      "status": "ready",
      "health": "green",
      "priority": "P0",
      "gap_score": 76,
      "evidence": "medium",
      "next": "Create PMO v2.8 interactive six-view drilldown page."
    },
    {
      "issue": "#79",
      "node": "C3",
      "type": "gap",
      "domain": "matrix",
      "layer": "design",
      "status": "ready",
      "health": "green",
      "priority": "P0",
      "gap_score": 74,
      "evidence": "medium",
      "next": "Create PMO Metrics Engine for Evidence Coverage, Backwrite Rate, C3 Gap Close Rate, and Blocked Age."
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
      "issue": "#76",
      "node": "C3",
      "type": "gap",
      "domain": "matrix",
      "layer": "design",
      "status": "ready",
      "health": "green",
      "priority": "P0",
      "gap_score": 70,
      "evidence": "medium",
      "next": "Create GitHub Projects native setup package with field list, view design, and GraphQL/manual instructions."
    },
    {
      "issue": "#84",
      "node": "C2",
      "type": "evidence",
      "domain": "data",
      "layer": "validation",
      "status": "qa",
      "health": "green",
      "priority": "P2",
      "gap_score": 50,
      "evidence": "medium",
      "next": "review evidence"
    },
    {
      "issue": "#83",
      "node": "C4",
      "type": "task",
      "domain": "delivery",
      "layer": "execution",
      "status": "ready",
      "health": "green",
      "priority": "P1",
      "gap_score": 50,
      "evidence": "medium",
      "next": "Build a script that creates a C4 task draft from a selected C3 gap issue."
    },
    {
      "issue": "#81",
      "node": "C2",
      "type": "evidence",
      "domain": "data",
      "layer": "validation",
      "status": "qa",
      "health": "green",
      "priority": "P2",
      "gap_score": 50,
      "evidence": "medium",
      "next": "review evidence"
    },
    {
      "issue": "#80",
      "node": "C4",
      "type": "task",
      "domain": "delivery",
      "layer": "execution",
      "status": "ready",
      "health": "green",
      "priority": "P1",
      "gap_score": 50,
      "evidence": "medium",
      "next": "Build a small PMO Metrics Engine that computes the first four PMO metrics from issues and repository files."
    },
    {
      "issue": "#78",
      "node": "C2",
      "type": "evidence",
      "domain": "data",
      "layer": "validation",
      "status": "qa",
      "health": "green",
      "priority": "P2",
      "gap_score": 50,
      "evidence": "medium",
      "next": "review evidence"
    },
    {
      "issue": "#77",
      "node": "C4",
      "type": "task",
      "domain": "delivery",
      "layer": "execution",
      "status": "ready",
      "health": "green",
      "priority": "P1",
      "gap_score": 50,
      "evidence": "medium",
      "next": "Document and prepare native GitHub Projects field/view setup for Yuanli PMO OS."
    },
    {
      "issue": "#75",
      "node": "C2",
      "type": "evidence",
      "domain": "data",
      "layer": "validation",
      "status": "qa",
      "health": "green",
      "priority": "P2",
      "gap_score": 50,
      "evidence": "medium",
      "next": "review evidence"
    },
    {
      "issue": "#74",
      "node": "C4",
      "type": "task",
      "domain": "delivery",
      "layer": "execution",
      "status": "ready",
      "health": "green",
      "priority": "P1",
      "gap_score": 50,
      "evidence": "medium",
      "next": "Build a PMO v2.8 page where the six PMO views become interactive drilldown panels."
    },
    {
      "issue": "#72",
      "node": "C2",
      "type": "evidence",
      "domain": "data",
      "layer": "validation",
      "status": "qa",
      "health": "green",
      "priority": "P2",
      "gap_score": 50,
      "evidence": "strong",
      "next": "review evidence"
    },
    {
      "issue": "#71",
      "node": "C4",
      "type": "task",
      "domain": "delivery",
      "layer": "execution",
      "status": "ready",
      "health": "green",
      "priority": "P1",
      "gap_score": 50,
      "evidence": "medium",
      "next": "Patch PMO data source and sync logic so dashboard UI and data report the same current release line."
    },
    {
      "issue": "#65",
      "node": "C2",
      "type": "evidence",
      "domain": "data",
      "layer": "validation",
      "status": "qa",
      "health": "green",
      "priority": "P2",
      "gap_score": 50,
      "evidence": "medium",
      "next": "review evidence"
    },
    {
      "issue": "#64",
      "node": "C4",
      "type": "task",
      "domain": "delivery",
      "layer": "execution",
      "status": "ready",
      "health": "green",
      "priority": "P1",
      "gap_score": 50,
      "evidence": "medium",
      "next": "Turn the selected C3 top-ranked gap into an executable C4 task handoff."
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
      "next_issue": "#83"
    }
  ],
  "roadmap_current": [
    "v2.7.1",
    "v2.8",
    "v2.9",
    "v3.0",
    "v3.1",
    "v3.2",
    "v3.3"
  ]
};
