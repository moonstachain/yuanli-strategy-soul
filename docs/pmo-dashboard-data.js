window.YUANLI_PMO_V22={
  "version": "v3.8-c2-3of5-b2-workshop",
  "ui_version": "v2.9-content-assets",
  "data_patch": "c2-3of5-b2-workshop-sync",
  "sync": {
    "mode": "github_actions",
    "source": "issues+content_assets+c2_brain+validation_tasks",
    "updated_at": "2026-06-30T10:09:12.132Z"
  },
  "fields": [
    "Canon Node",
    "Work Type",
    "Status",
    "PMO Health",
    "Priority",
    "Gap Score",
    "Evidence Strength",
    "Asset Stage",
    "Maturity Score",
    "Next Deepening"
  ],
  "views": [
    {
      "id": "strategic_cockpit",
      "name": "Strategic Cockpit",
      "layout": "table",
      "purpose": "project health and next strategic decision"
    },
    {
      "id": "trilogy_content_assets",
      "name": "Trilogy Content Assets",
      "layout": "table",
      "purpose": "govern the 12 canon content asset packages"
    },
    {
      "id": "validation_tasks",
      "name": "Validation Tasks",
      "layout": "table",
      "purpose": "track external validation tasks"
    },
    {
      "id": "roadmap",
      "name": "Roadmap / Milestone",
      "layout": "roadmap",
      "purpose": "manage validation sequence"
    }
  ],
  "metrics": [
    "Trilogy Seed Coverage",
    "Average Asset Maturity",
    "Validation Gap",
    "Open Validation Tasks"
  ],
  "metric_values": {
    "trilogy_seed_coverage": {
      "value": 100,
      "unit": "%",
      "note": "12/12 canon modules have seed content asset packages"
    },
    "average_asset_maturity": {
      "value": 66,
      "unit": "%",
      "note": "316/480 after C2 reaches 3/5"
    },
    "validation_gap": {
      "value": 1.17,
      "unit": "/5",
      "note": "C2 reached 3/5; most modules remain at 1/5"
    },
    "open_validation_tasks": {
      "value": 1,
      "unit": "tasks",
      "note": "current external validation tasks"
    }
  },
  "content_sync": {
    "name": "PMO External Validation Sync v1",
    "status": "completed",
    "current_state": "C2 is 3/5; B2 workshop is next"
  },
  "trilogy_summary": {
    "parts": 3,
    "modules": 12,
    "seed_packages": 12,
    "coverage_pct": 100,
    "total_score": 316,
    "total_possible": 480,
    "average_score": "26.33/40",
    "average_maturity_pct": 66,
    "validated_brain_seed": 1,
    "real_validation_average": "1.17/5"
  },
  "overall_maturity": {
    "score": "L3.4/5",
    "stage": "Validation OS Seed"
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
      "status": "validation pack ready",
      "maturity": 27,
      "stage": "Validation Pack Ready",
      "priority": "P0",
      "evidence": "medium",
      "next_deepening": "run small validation workshop",
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
      "status": "trial 1-3 passed",
      "maturity": 33,
      "stage": "Validated Brain Seed",
      "priority": "P0.5",
      "evidence": "medium",
      "next_deepening": "external learner/client/project validation",
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
      "next": "run small validation workshop"
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
      "next": "external learner/client/project validation"
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
      "health": "green",
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
      "status": "trial_1_3_passed",
      "health": "green",
      "priority": "P0.5",
      "gap_score": 33,
      "evidence": "medium",
      "next": "external learner/client/project validation"
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
      "status": "validation_pack_ready",
      "health": "green",
      "priority": "P0",
      "gap_score": 27,
      "evidence": "medium",
      "next": "run small validation workshop"
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
      "issue": "#130",
      "node": "B2",
      "type": "deepening_task",
      "domain": "productization",
      "layer": "deepening",
      "status": "ready",
      "health": "green",
      "priority": "P0",
      "gap_score": 27,
      "evidence": "medium",
      "next": "Run B2 small validation workshop and write results back."
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
      "issue": "#114",
      "node": "C3",
      "type": "gap",
      "domain": "matrix",
      "layer": "design",
      "status": "ready",
      "health": "green",
      "priority": "P0",
      "gap_score": 5,
      "evidence": "weak",
      "next": "rank and handoff"
    },
    {
      "issue": "#113",
      "node": "C3",
      "type": "gap",
      "domain": "matrix",
      "layer": "design",
      "status": "ready",
      "health": "green",
      "priority": "P0",
      "gap_score": 5,
      "evidence": "weak",
      "next": "rank and handoff"
    },
    {
      "issue": "#112",
      "node": "C3",
      "type": "gap",
      "domain": "matrix",
      "layer": "design",
      "status": "ready",
      "health": "green",
      "priority": "P0",
      "gap_score": 5,
      "evidence": "weak",
      "next": "rank and handoff"
    }
  ],
  "gap_ranking": [
    {
      "rank": 1,
      "issue": "#130",
      "gap": "Run B2 small validation workshop and write results back.",
      "score": 27,
      "formula": "external validation priority",
      "selected": true,
      "next_issue": "#130"
    }
  ],
  "roadmap_current": [
    "v3.8-c2-3of5-b2-workshop",
    "v1.2-b2-external-validation"
  ]
};
