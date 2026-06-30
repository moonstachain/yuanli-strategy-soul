window.YUANLI_PMO_V22={
  "version": "v3.5-c2-brain-phase2",
  "ui_version": "v2.9-content-assets",
  "data_patch": "c2-p05-brain-sync",
  "sync": {
    "mode": "github_actions",
    "source": "issues+content_assets+c2_brain",
    "updated_at": "2026-06-30T08:43:48.155Z"
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
    "Canonical State",
    "Asset Stage",
    "Maturity Score",
    "Next Deepening"
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
      "id": "trilogy_content_assets",
      "name": "Trilogy Content Assets",
      "layout": "table",
      "purpose": "govern the 12 canon content asset packages",
      "fields": [
        "Part",
        "Canon Node",
        "Module",
        "PMO Issue",
        "Status",
        "Maturity Score",
        "Priority",
        "Next Deepening"
      ]
    },
    {
      "id": "c2_brain_center",
      "name": "C2 Brain Center",
      "layout": "table",
      "purpose": "track the strategic memory hub and Markdown Brain rollout",
      "fields": [
        "Brain Layer",
        "Artifact",
        "Status",
        "Next"
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
        "v2.9 Content Asset View",
        "v3.4 Content Asset Sync v1",
        "v3.5 C2 Brain Phase 2"
      ]
    }
  ],
  "metrics": [
    "Trilogy Seed Coverage",
    "Average Asset Maturity",
    "Validation Gap",
    "P0 Deepening Count",
    "P0.5 Brain Count",
    "C2 Brain Phase"
  ],
  "metric_values": {
    "trilogy_seed_coverage": {
      "value": 100,
      "unit": "%",
      "note": "12/12 canon modules have seed content asset packages"
    },
    "average_asset_maturity": {
      "value": 65,
      "unit": "%",
      "note": "314/480 after C2 Strategy+ upgrade"
    },
    "validation_gap": {
      "value": 1,
      "unit": "/5",
      "note": "real validation remains the weakest link"
    },
    "p0_deepening_count": {
      "value": 6,
      "unit": "modules",
      "note": "A4, B1, B2, B3, B4, C4"
    },
    "p05_brain_count": {
      "value": 1,
      "unit": "module",
      "note": "C2 一个大脑"
    },
    "c2_brain_phase": {
      "value": 2,
      "unit": "phase",
      "note": "Markdown Brain rollout"
    }
  },
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
    "Canonical Learning",
    "Content Asset",
    "Maturity Scorecard",
    "Deepening Task",
    "Brain Schema",
    "Query Protocol",
    "Writeback Protocol"
  ],
  "automation": [
    "issue changed -> sync dashboard",
    "weekly review -> evolution note",
    "selected gap -> C4 task draft",
    "evidence review -> accepted/missing/rejected",
    "accepted learning -> canonical candidate",
    "human approval -> canonical learning",
    "content asset changed -> update PMO content view",
    "maturity scorecard updated -> generate deepening priorities",
    "C2 brain artifact changed -> update C2 Brain Center"
  ],
  "content_sync": {
    "name": "PMO Content Asset Sync v1",
    "status": "completed",
    "scope": [
      "12 module registry",
      "12 seed asset packages",
      "content asset index",
      "maturity scorecard",
      "P0/P0.5/P1 deepening priority"
    ],
    "reports": [
      "docs/TRILOGY-CONTENT-ASSET-INDEX-v1.md",
      "docs/TRILOGY-ASSET-MATURITY-SCORECARD-v1.md",
      "docs/PMO-TRILOGY-CONTENT-SYNC-v1.md"
    ],
    "current_state": "PMO now covers engineering governance, trilogy content asset governance, and C2 brain governance"
  },
  "trilogy_summary": {
    "parts": 3,
    "modules": 12,
    "seed_packages": 12,
    "coverage_pct": 100,
    "total_score": 314,
    "total_possible": 480,
    "average_score": "26.17/40",
    "average_maturity_pct": 65,
    "strategy_plus": 1,
    "seed_plus": 9,
    "seed": 2,
    "real_validation_average": "1/5"
  },
  "productization_gate": {
    "total_score_min": 30,
    "evidence_min": 4,
    "validation_min": 3,
    "commercialization_min": 4
  },
  "trilogy_modules": [
    {
      "part": "原力资产",
      "node": "A1",
      "module": "发现母体",
      "issue": "#86",
      "asset_path": "assets/A1-发现母体/",
      "status": "seed complete",
      "maturity": 26,
      "stage": "Seed+",
      "priority": "P1",
      "evidence": "medium",
      "next_deepening": "worksheet.md + real-learner-cases.md",
      "layer": "content"
    },
    {
      "part": "原力资产",
      "node": "A2",
      "module": "回到母体",
      "issue": "#87",
      "asset_path": "assets/A2-回到母体/",
      "status": "seed complete",
      "maturity": 24,
      "stage": "Seed",
      "priority": "P1",
      "evidence": "medium",
      "next_deepening": "calibration-examples.md + facilitator-notes.md",
      "layer": "content"
    },
    {
      "part": "原力资产",
      "node": "A3",
      "module": "获得原力",
      "issue": "#88",
      "asset_path": "assets/A3-获得原力/",
      "status": "seed complete",
      "maturity": 25,
      "stage": "Seed+",
      "priority": "P1",
      "evidence": "medium",
      "next_deepening": "capability-rubric.md + validation-worksheet.md",
      "layer": "content"
    },
    {
      "part": "原力资产",
      "node": "A4",
      "module": "显化原力",
      "issue": "#89",
      "asset_path": "assets/A4-显化原力/",
      "status": "seed complete",
      "maturity": 26,
      "stage": "Seed+",
      "priority": "P0",
      "evidence": "medium",
      "next_deepening": "validation-records.md + pricing-test.md",
      "layer": "content"
    },
    {
      "part": "原力创业",
      "node": "B1",
      "module": "原力借势",
      "issue": "#90",
      "asset_path": "assets/B1-原力借势/",
      "status": "seed complete",
      "maturity": 27,
      "stage": "Seed+",
      "priority": "P0",
      "evidence": "medium",
      "next_deepening": "trend-map.md + industry-cases.md",
      "layer": "content"
    },
    {
      "part": "原力创业",
      "node": "B2",
      "module": "品类独创",
      "issue": "#91",
      "asset_path": "assets/B2-品类独创/",
      "status": "seed complete",
      "maturity": 27,
      "stage": "Seed+",
      "priority": "P0",
      "evidence": "medium",
      "next_deepening": "naming-test.md + user-language.md",
      "layer": "content"
    },
    {
      "part": "原力创业",
      "node": "B3",
      "module": "模式升维",
      "issue": "#92",
      "asset_path": "assets/B3-模式升维/",
      "status": "seed complete",
      "maturity": 27,
      "stage": "Seed+",
      "priority": "P0",
      "evidence": "medium",
      "next_deepening": "financial-template.md + delivery-sop.md",
      "layer": "content"
    },
    {
      "part": "原力创业",
      "node": "B4",
      "module": "壁垒锁定",
      "issue": "#93",
      "asset_path": "assets/B4-壁垒锁定/",
      "status": "seed complete",
      "maturity": 27,
      "stage": "Seed+",
      "priority": "P0",
      "evidence": "medium",
      "next_deepening": "moat-diagnostic.md + metric-template.md",
      "layer": "content"
    },
    {
      "part": "原力OS",
      "node": "C1",
      "module": "一纸文脉",
      "issue": "#94",
      "asset_path": "assets/C1-一纸文脉/",
      "status": "seed complete",
      "maturity": 26,
      "stage": "Seed+",
      "priority": "P1",
      "evidence": "medium",
      "next_deepening": "prompt-template.md + before-after-ai-output.md",
      "layer": "context"
    },
    {
      "part": "原力OS",
      "node": "C2",
      "module": "一个大脑",
      "issue": "#95",
      "asset_path": "assets/C2-一个大脑/",
      "status": "strategy package complete",
      "maturity": 31,
      "stage": "Strategy+",
      "priority": "P0.5",
      "evidence": "medium",
      "next_deepening": "retrieval-test.md + tagging-template.md + writeback-examples.md + validation-records.md",
      "layer": "memory"
    },
    {
      "part": "原力OS",
      "node": "C3",
      "module": "一张地图",
      "issue": "#96",
      "asset_path": "assets/C3-一张地图/",
      "status": "seed complete",
      "maturity": 25,
      "stage": "Seed+",
      "priority": "P1",
      "evidence": "medium",
      "next_deepening": "map-template.md + gap-scoring-sheet.md",
      "layer": "map"
    },
    {
      "part": "原力OS",
      "node": "C4",
      "module": "一条链路",
      "issue": "#97",
      "asset_path": "assets/C4-一条链路/",
      "status": "seed complete",
      "maturity": 23,
      "stage": "Seed",
      "priority": "P0",
      "evidence": "medium",
      "next_deepening": "chain-template.md + operating-examples.md",
      "layer": "execution"
    }
  ],
  "p0_deepening": [
    {
      "node": "A4",
      "module": "显化原力",
      "next": "validation-records.md + pricing-test.md"
    },
    {
      "node": "B1",
      "module": "原力借势",
      "next": "trend-map.md + industry-cases.md"
    },
    {
      "node": "B2",
      "module": "品类独创",
      "next": "naming-test.md + user-language.md"
    },
    {
      "node": "B3",
      "module": "模式升维",
      "next": "financial-template.md + delivery-sop.md"
    },
    {
      "node": "B4",
      "module": "壁垒锁定",
      "next": "moat-diagnostic.md + metric-template.md"
    },
    {
      "node": "C4",
      "module": "一条链路",
      "next": "chain-template.md + operating-examples.md"
    }
  ],
  "p05_deepening": [
    {
      "node": "C2",
      "module": "一个大脑",
      "next": "retrieval-test.md + tagging-template.md + writeback-examples.md + validation-records.md"
    }
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
      "issue": "#103",
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
      "issue": "#102",
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
      "issue": "#101",
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
      "issue": "#100",
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
    },
    {
      "issue": "#95",
      "node": "C2",
      "type": "content_asset",
      "domain": "trilogy",
      "layer": "memory",
      "status": "strategy+",
      "health": "green",
      "priority": "P0.5",
      "gap_score": 31,
      "evidence": "medium",
      "next": "retrieval-test.md + tagging-template.md + writeback-examples.md + validation-records.md"
    },
    {
      "issue": "#90",
      "node": "B1",
      "type": "content_asset",
      "domain": "trilogy",
      "layer": "content",
      "status": "completed",
      "health": "green",
      "priority": "P0",
      "gap_score": 27,
      "evidence": "medium",
      "next": "trend-map.md + industry-cases.md"
    },
    {
      "issue": "#91",
      "node": "B2",
      "type": "content_asset",
      "domain": "trilogy",
      "layer": "content",
      "status": "completed",
      "health": "green",
      "priority": "P0",
      "gap_score": 27,
      "evidence": "medium",
      "next": "naming-test.md + user-language.md"
    },
    {
      "issue": "#92",
      "node": "B3",
      "type": "content_asset",
      "domain": "trilogy",
      "layer": "content",
      "status": "completed",
      "health": "green",
      "priority": "P0",
      "gap_score": 27,
      "evidence": "medium",
      "next": "financial-template.md + delivery-sop.md"
    },
    {
      "issue": "#93",
      "node": "B4",
      "type": "content_asset",
      "domain": "trilogy",
      "layer": "content",
      "status": "completed",
      "health": "green",
      "priority": "P0",
      "gap_score": 27,
      "evidence": "medium",
      "next": "moat-diagnostic.md + metric-template.md"
    },
    {
      "issue": "#86",
      "node": "A1",
      "type": "content_asset",
      "domain": "trilogy",
      "layer": "content",
      "status": "completed",
      "health": "green",
      "priority": "P1",
      "gap_score": 26,
      "evidence": "medium",
      "next": "worksheet.md + real-learner-cases.md"
    },
    {
      "issue": "#89",
      "node": "A4",
      "type": "content_asset",
      "domain": "trilogy",
      "layer": "content",
      "status": "completed",
      "health": "green",
      "priority": "P0",
      "gap_score": 26,
      "evidence": "medium",
      "next": "validation-records.md + pricing-test.md"
    },
    {
      "issue": "#94",
      "node": "C1",
      "type": "content_asset",
      "domain": "trilogy",
      "layer": "context",
      "status": "completed",
      "health": "green",
      "priority": "P1",
      "gap_score": 26,
      "evidence": "medium",
      "next": "prompt-template.md + before-after-ai-output.md"
    },
    {
      "issue": "#88",
      "node": "A3",
      "type": "content_asset",
      "domain": "trilogy",
      "layer": "content",
      "status": "completed",
      "health": "green",
      "priority": "P1",
      "gap_score": 25,
      "evidence": "medium",
      "next": "capability-rubric.md + validation-worksheet.md"
    },
    {
      "issue": "#96",
      "node": "C3",
      "type": "content_asset",
      "domain": "trilogy",
      "layer": "map",
      "status": "completed",
      "health": "green",
      "priority": "P1",
      "gap_score": 25,
      "evidence": "medium",
      "next": "map-template.md + gap-scoring-sheet.md"
    },
    {
      "issue": "#87",
      "node": "A2",
      "type": "content_asset",
      "domain": "trilogy",
      "layer": "content",
      "status": "completed",
      "health": "green",
      "priority": "P1",
      "gap_score": 24,
      "evidence": "medium",
      "next": "calibration-examples.md + facilitator-notes.md"
    },
    {
      "issue": "#97",
      "node": "C4",
      "type": "content_asset",
      "domain": "trilogy",
      "layer": "execution",
      "status": "completed",
      "health": "green",
      "priority": "P0",
      "gap_score": 23,
      "evidence": "medium",
      "next": "chain-template.md + operating-examples.md"
    },
    {
      "issue": "#109",
      "node": "C3",
      "type": "gap",
      "domain": "matrix",
      "layer": "design",
      "status": "ready",
      "health": "yellow",
      "priority": "P0",
      "gap_score": 0,
      "evidence": "weak",
      "next": "rank and handoff"
    }
  ],
  "gap_ranking": [
    {
      "rank": 1,
      "issue": "#70",
      "gap": "Patch PMO dashboard data, sync script version, roadmap, and automation labels so UI and data source are aligned.",
      "score": 88,
      "formula": "maturity score + strategic centrality",
      "selected": true,
      "next_issue": "#83"
    }
  ],
  "roadmap_current": [
    "v2.7.1",
    "v2.8",
    "v2.9-content-assets",
    "v3.4-content-asset-sync-v1",
    "v3.5-c2-brain-phase2"
  ]
};
