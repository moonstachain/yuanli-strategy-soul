window.YUANLI_PMO_V22={
  "version":"v3.6-c2-trial1-validated",
  "ui_version":"v2.9-content-assets",
  "data_patch":"c2-trial1-validation-sync",
  "sync":{"mode":"manual+github_actions","source":"issues+content_assets+c2_brain","updated_at":"2026-06-30T09:30:00.000Z"},
  "fields":["Canon Node","Work Type","Strategic Layer","Capability Domain","Status","PMO Health","Priority","Gap Score","Evidence Strength","Asset Stage","Maturity Score","Next Deepening"],
  "views":[
    {"id":"strategic_cockpit","name":"Strategic Cockpit","layout":"table","purpose":"project health and next strategic decision"},
    {"id":"trilogy_content_assets","name":"Trilogy Content Assets","layout":"table","purpose":"govern the 12 canon content asset packages"},
    {"id":"c2_brain_center","name":"C2 Brain Center","layout":"table","purpose":"track the strategic memory hub and Markdown Brain rollout"},
    {"id":"c3_gap_ranking","name":"C3 Gap Ranking","layout":"table","purpose":"rank capability gaps before execution"},
    {"id":"c4_execution_board","name":"C4 Execution Board","layout":"board","purpose":"convert selected gaps into executable work"},
    {"id":"evidence_ledger","name":"Evidence Ledger","layout":"table","purpose":"check whether work is proven"},
    {"id":"evolution_review","name":"Evolution Review","layout":"table","purpose":"verify reusable learning"},
    {"id":"roadmap","name":"Roadmap / Milestone","layout":"roadmap","purpose":"manage release sequence"}
  ],
  "metrics":["Trilogy Seed Coverage","Average Asset Maturity","Validation Gap","P0 Deepening Count","P0.5 Brain Count","C2 Brain Phase"],
  "metric_values":{"trilogy_seed_coverage":{"value":100,"unit":"%","note":"12/12 canon modules have seed content asset packages"},"average_asset_maturity":{"value":66,"unit":"%","note":"315/480 after C2 Trial 1 validation"},"validation_gap":{"value":1.08,"unit":"/5","note":"C2 moved from 1/5 to 2/5; most modules remain at 1/5"},"p0_deepening_count":{"value":6,"unit":"modules","note":"A4, B1, B2, B3, B4, C4"},"p05_brain_count":{"value":1,"unit":"module","note":"C2 一个大脑"},"c2_brain_phase":{"value":2,"unit":"phase","note":"Markdown Brain Trial 1 passed"}},
  "content_sync":{"name":"PMO Content Asset Sync v1","status":"completed","current_state":"PMO covers engineering governance, trilogy content asset governance, and C2 brain validation governance"},
  "trilogy_summary":{"parts":3,"modules":12,"seed_packages":12,"coverage_pct":100,"total_score":315,"total_possible":480,"average_score":"26.25/40","average_maturity_pct":66,"validated_strategy_plus":1,"seed_plus":9,"seed":2,"real_validation_average":"1.08/5"},
  "productization_gate":{"total_score_min":30,"evidence_min":4,"validation_min":3,"commercialization_min":4},
  "trilogy_modules":[
    {"part":"原力资产","node":"A1","module":"发现母体","issue":"#86","asset_path":"assets/A1-发现母体/","status":"seed complete","maturity":26,"stage":"Seed+","priority":"P1","evidence":"medium","next_deepening":"worksheet.md + real-learner-cases.md"},
    {"part":"原力资产","node":"A2","module":"回到母体","issue":"#87","asset_path":"assets/A2-回到母体/","status":"seed complete","maturity":24,"stage":"Seed","priority":"P1","evidence":"medium","next_deepening":"calibration-examples.md + facilitator-notes.md"},
    {"part":"原力资产","node":"A3","module":"获得原力","issue":"#88","asset_path":"assets/A3-获得原力/","status":"seed complete","maturity":25,"stage":"Seed+","priority":"P1","evidence":"medium","next_deepening":"capability-rubric.md + validation-worksheet.md"},
    {"part":"原力资产","node":"A4","module":"显化原力","issue":"#89","asset_path":"assets/A4-显化原力/","status":"seed complete","maturity":26,"stage":"Seed+","priority":"P0","evidence":"medium","next_deepening":"validation-records.md + pricing-test.md"},
    {"part":"原力创业","node":"B1","module":"原力借势","issue":"#90","asset_path":"assets/B1-原力借势/","status":"seed complete","maturity":27,"stage":"Seed+","priority":"P0","evidence":"medium","next_deepening":"trend-map.md + industry-cases.md"},
    {"part":"原力创业","node":"B2","module":"品类独创","issue":"#91","asset_path":"assets/B2-品类独创/","status":"seed complete","maturity":27,"stage":"Seed+","priority":"P0","evidence":"medium","next_deepening":"naming-test.md + user-language.md + validation-records.md"},
    {"part":"原力创业","node":"B3","module":"模式升维","issue":"#92","asset_path":"assets/B3-模式升维/","status":"seed complete","maturity":27,"stage":"Seed+","priority":"P0","evidence":"medium","next_deepening":"financial-template.md + delivery-sop.md"},
    {"part":"原力创业","node":"B4","module":"壁垒锁定","issue":"#93","asset_path":"assets/B4-壁垒锁定/","status":"seed complete","maturity":27,"stage":"Seed+","priority":"P0","evidence":"medium","next_deepening":"moat-diagnostic.md + metric-template.md"},
    {"part":"原力OS","node":"C1","module":"一纸文脉","issue":"#94","asset_path":"assets/C1-一纸文脉/","status":"seed complete","maturity":26,"stage":"Seed+","priority":"P1","evidence":"medium","next_deepening":"prompt-template.md + before-after-ai-output.md"},
    {"part":"原力OS","node":"C2","module":"一个大脑","issue":"#95","asset_path":"assets/C2-一个大脑/","status":"trial 1 passed","maturity":32,"stage":"Validated Strategy+","priority":"P0.5","evidence":"medium","next_deepening":"Trial 2 + Trial 3 + real learner/client validation"},
    {"part":"原力OS","node":"C3","module":"一张地图","issue":"#96","asset_path":"assets/C3-一张地图/","status":"seed complete","maturity":25,"stage":"Seed+","priority":"P1","evidence":"medium","next_deepening":"map-template.md + gap-scoring-sheet.md"},
    {"part":"原力OS","node":"C4","module":"一条链路","issue":"#97","asset_path":"assets/C4-一条链路/","status":"seed complete","maturity":23,"stage":"Seed","priority":"P0","evidence":"medium","next_deepening":"chain-template.md + operating-examples.md"}
  ],
  "c2_brain_center":[
    {"layer":"Validation","artifact":"assets/C2-一个大脑/validation-records.md","status":"Trial 1 PASS","next":"Trial 2 and Trial 3"},
    {"layer":"Writeback","artifact":"brain/WRITEBACK-LOG.md","status":"updated","next":"continue writeback after real trials"},
    {"layer":"Evolution","artifact":"assets/C2-一个大脑/evolution.md","status":"updated","next":"use Trial 1 as C2 validation evidence"},
    {"layer":"B2 Deepening","artifact":"B2 Deepening Task","status":"to create issue","next":"naming-test + user-language + validation-records"}
  ],
  "p0_deepening":[{"node":"A4","module":"显化原力","next":"validation-records.md + pricing-test.md"},{"node":"B1","module":"原力借势","next":"trend-map.md + industry-cases.md"},{"node":"B2","module":"品类独创","next":"naming-test.md + user-language.md + validation-records.md"},{"node":"B3","module":"模式升维","next":"financial-template.md + delivery-sop.md"},{"node":"B4","module":"壁垒锁定","next":"moat-diagnostic.md + metric-template.md"},{"node":"C4","module":"一条链路","next":"chain-template.md + operating-examples.md"}],
  "p05_deepening":[{"node":"C2","module":"一个大脑","next":"Trial 2 + Trial 3 + real learner/client validation"}],
  "seed_items":[
    {"issue":"#95","node":"C2","type":"content_asset","domain":"trilogy","layer":"memory","status":"trial_1_passed","health":"green","priority":"P0.5","gap_score":32,"evidence":"medium","next":"Trial 2 + Trial 3 + real validation"},
    {"issue":"#91","node":"B2","type":"content_asset","domain":"trilogy","layer":"content","status":"deepening_needed","health":"green","priority":"P0","gap_score":27,"evidence":"medium","next":"naming-test.md + user-language.md + validation-records.md"}
  ],
  "gap_ranking":[{"rank":1,"issue":"#91","gap":"B2 can enter small-scale productization validation but lacks naming-test, user-language, and validation records.","score":27,"formula":"C2 Trial 1 gap analysis","selected":true,"next_issue":"B2 Deepening Task"}],
  "roadmap_current":["v2.9-content-assets","v3.4-content-asset-sync-v1","v3.5-c2-brain-phase2","v3.6-c2-trial1-validated"]
};
