window.YUANLI_PMO_V22 = {
  version: 'v3.8-cbm-capability-cockpit-sync',
  ui_version: 'v2.10-cbm-capability-cockpit',
  data_patch: 'cbm-capability-cockpit-data-block',
  sync: {
    mode: 'github_actions+manual_backwrite',
    source: 'issues+content_assets+c2_brain+validation_tasks+cbm_cells+pilot_report',
    updated_at: '2026-06-30T09:18:00Z',
    source_files: [
      'docs/CBM-PMO-PILOT-REPORT-v1.md',
      'docs/CBM-CAPABILITY-COCKPIT-SPEC-v1.md',
      'docs/os-cbm-data.js'
    ]
  },

  fields: [
    'Canon Node', 'Work Type', 'Strategic Layer', 'Capability Domain', 'Status', 'PMO Health', 'Priority', 'Gap Score', 'Evidence Strength', 'Asset Stage', 'Maturity Score', 'Next Deepening', 'CBM Cell ID', 'Evidence Path', 'Evolution Note', 'Approval Gate', 'Backwrite Coverage'
  ],

  views: [
    { id: 'strategic_cockpit', name: 'Strategic Cockpit', layout: 'table', purpose: 'project health and next strategic decision' },
    { id: 'cbm_capability_cockpit', name: 'CBM Capability Cockpit', layout: 'cockpit', purpose: 'prove whether capability components are getting stronger' },
    { id: 'trilogy_content_assets', name: 'Trilogy Content Assets', layout: 'table', purpose: 'govern the 12 canon content asset packages' },
    { id: 'c2_brain_center', name: 'C2 Brain Center', layout: 'table', purpose: 'track the strategic memory hub and Markdown Brain rollout' },
    { id: 'validation_tasks', name: 'Validation Tasks', layout: 'table', purpose: 'track brain validation and deepening tasks' },
    { id: 'c3_gap_ranking', name: 'C3 Gap Ranking', layout: 'table', purpose: 'rank capability gaps before execution' },
    { id: 'c4_execution_board', name: 'C4 Execution Board', layout: 'board', purpose: 'convert selected gaps into executable work' },
    { id: 'evidence_ledger', name: 'Evidence Ledger', layout: 'table', purpose: 'check whether work is proven' },
    { id: 'evolution_review', name: 'Evolution Review', layout: 'table', purpose: 'verify reusable learning' },
    { id: 'roadmap', name: 'Roadmap / Milestone', layout: 'roadmap', purpose: 'manage release sequence' }
  ],

  metrics: [
    'Trilogy Seed Coverage', 'Average Asset Maturity', 'Validation Gap', 'P0 Deepening Count', 'P0.5 Brain Count', 'Open Validation Tasks', 'CBM Pilot Maturity', 'CBM Draft Medium Cells', 'CBM Validated Cells', 'CBM Backwrite Coverage'
  ],

  metric_values: {
    trilogy_seed_coverage: { value: 100, unit: '%', note: '12/12 canon modules have seed content asset packages' },
    average_asset_maturity: { value: 66, unit: '%', note: '315/480 after C2 Trial 1 validation' },
    validation_gap: { value: 1.08, unit: '/5', note: 'C2 moved from 1/5 to 2/5; most modules remain at 1/5' },
    p0_deepening_count: { value: 6, unit: 'modules', note: 'A4, B1, B2, B3, B4, C4' },
    p05_brain_count: { value: 1, unit: 'module', note: 'C2 一个大脑' },
    open_validation_tasks: { value: 0, unit: 'tasks', note: 'open brain validation and deepening tasks' },
    cbm_pilot_maturity: { value: 3.1, unit: '/5', note: 'Pilot Evidence Consolidation' },
    cbm_draft_medium_cells: { value: 3, unit: 'cells', note: 'three pilot cells are draft / medium evidence' },
    cbm_validated_cells: { value: 0, unit: 'cells', note: 'no pilot cell is validated yet' },
    cbm_backwrite_coverage: { value: '3/18', unit: 'cells', note: 'three pilot cells have evidence and evolution backwrite' }
  },

  content_sync: {
    name: 'PMO Validation Task + CBM Cockpit Sync v1',
    status: 'completed',
    current_state: 'PMO recognizes content assets, validation tasks, and CBM capability cockpit data blocks'
  },

  trilogy_summary: {
    parts: 3, modules: 12, seed_packages: 12, coverage_pct: 100, total_score: 315, total_possible: 480, average_score: '26.25/40', average_maturity_pct: 66, validated_strategy_plus: 1, seed_plus: 9, seed: 2, real_validation_average: '1.08/5'
  },

  productization_gate: { total_score_min: 30, evidence_min: 4, validation_min: 3, commercialization_min: 4 },

  trilogy_modules: [
    { part: '原力资产', node: 'A1', module: '发现母体', issue: '#86', asset_path: 'assets/A1-发现母体/', status: 'seed complete', maturity: 26, stage: 'Seed+', priority: 'P1', evidence: 'medium', next_deepening: 'worksheet.md + real-learner-cases.md', layer: 'content' },
    { part: '原力资产', node: 'A2', module: '回到母体', issue: '#87', asset_path: 'assets/A2-回到母体/', status: 'seed complete', maturity: 24, stage: 'Seed', priority: 'P1', evidence: 'medium', next_deepening: 'calibration-examples.md + facilitator-notes.md', layer: 'content' },
    { part: '原力资产', node: 'A3', module: '获得原力', issue: '#88', asset_path: 'assets/A3-获得原力/', status: 'seed complete', maturity: 25, stage: 'Seed+', priority: 'P1', evidence: 'medium', next_deepening: 'capability-rubric.md + validation-worksheet.md', layer: 'content' },
    { part: '原力资产', node: 'A4', module: '显化原力', issue: '#89', asset_path: 'assets/A4-显化原力/', status: 'seed complete', maturity: 26, stage: 'Seed+', priority: 'P0', evidence: 'medium', next_deepening: 'validation-records.md + pricing-test.md', layer: 'content' },
    { part: '原力创业', node: 'B1', module: '原力借势', issue: '#90', asset_path: 'assets/B1-原力借势/', status: 'seed complete', maturity: 27, stage: 'Seed+', priority: 'P0', evidence: 'medium', next_deepening: 'trend-map.md + industry-cases.md', layer: 'content' },
    { part: '原力创业', node: 'B2', module: '品类独创', issue: '#91', asset_path: 'assets/B2-品类独创/', status: 'seed complete', maturity: 27, stage: 'Seed+', priority: 'P0', evidence: 'medium', next_deepening: 'naming-test.md + user-language.md + validation-records.md', layer: 'content' },
    { part: '原力创业', node: 'B3', module: '模式升维', issue: '#92', asset_path: 'assets/B3-模式升维/', status: 'seed complete', maturity: 27, stage: 'Seed+', priority: 'P0', evidence: 'medium', next_deepening: 'financial-template.md + delivery-sop.md', layer: 'content' },
    { part: '原力创业', node: 'B4', module: '壁垒锁定', issue: '#93', asset_path: 'assets/B4-壁垒锁定/', status: 'seed complete', maturity: 27, stage: 'Seed+', priority: 'P0', evidence: 'medium', next_deepening: 'moat-diagnostic.md + metric-template.md', layer: 'content' },
    { part: '原力OS', node: 'C1', module: '一纸文脉', issue: '#94', asset_path: 'assets/C1-一纸文脉/', status: 'seed complete', maturity: 26, stage: 'Seed+', priority: 'P1', evidence: 'medium', next_deepening: 'prompt-template.md + before-after-ai-output.md', layer: 'context' },
    { part: '原力OS', node: 'C2', module: '一个大脑', issue: '#95', asset_path: 'assets/C2-一个大脑/', status: 'trial 1 passed', maturity: 32, stage: 'Validated Strategy+', priority: 'P0.5', evidence: 'medium', next_deepening: 'Trial 2 + Trial 3 + real learner/client validation', layer: 'memory' },
    { part: '原力OS', node: 'C3', module: '一张地图', issue: '#96', asset_path: 'assets/C3-一张地图/', status: 'seed complete', maturity: 25, stage: 'Seed+', priority: 'P1', evidence: 'medium', next_deepening: 'map-template.md + gap-scoring-sheet.md', layer: 'map' },
    { part: '原力OS', node: 'C4', module: '一条链路', issue: '#97', asset_path: 'assets/C4-一条链路/', status: 'seed complete', maturity: 23, stage: 'Seed', priority: 'P0', evidence: 'medium', next_deepening: 'chain-template.md + operating-examples.md', layer: 'execution' }
  ],

  p0_deepening: [
    { node: 'A4', module: '显化原力', next: 'validation-records.md + pricing-test.md' },
    { node: 'B1', module: '原力借势', next: 'trend-map.md + industry-cases.md' },
    { node: 'B2', module: '品类独创', next: 'naming-test.md + user-language.md + validation-records.md' },
    { node: 'B3', module: '模式升维', next: 'financial-template.md + delivery-sop.md' },
    { node: 'B4', module: '壁垒锁定', next: 'moat-diagnostic.md + metric-template.md' },
    { node: 'C4', module: '一条链路', next: 'chain-template.md + operating-examples.md' }
  ],
  p05_deepening: [{ node: 'C2', module: '一个大脑', next: 'Trial 2 + Trial 3 + real learner/client validation' }],

  seed_items: [
    { issue: '#110', node: 'C3', type: 'dashboard', domain: 'matrix', layer: 'validation', status: 'active', health: 'yellow', priority: 'P0', gap_score: 82, evidence: 'medium', next: 'Render CBM Capability Cockpit from cbm_cockpit data block.' },
    { issue: '#109', node: 'C3', type: 'pilot', domain: 'matrix', layer: 'validation', status: 'completed', health: 'yellow', priority: 'P0', gap_score: 74, evidence: 'medium', next: 'Consume Pilot Report in Dashboard Capability Cockpit.' },
    { issue: '#115', node: 'C3', type: 'pilot_task', domain: 'strategy', layer: 'direct', status: 'completed', health: 'yellow', priority: 'P0', gap_score: 58, evidence: 'medium', next: 'Expose P0 gate and false-green rules in cockpit.' },
    { issue: '#116', node: 'C3', type: 'pilot_task', domain: 'client', layer: 'control', status: 'completed', health: 'yellow', priority: 'P0', gap_score: 66, evidence: 'medium', next: 'Expose meeting quartet and risk fields in node inspector.' },
    { issue: '#117', node: 'C4', type: 'pilot_task', domain: 'engineering', layer: 'execute', status: 'completed', health: 'yellow', priority: 'P0', gap_score: 70, evidence: 'medium', next: 'Expose skill contract and approval gates in node inspector.' },
    { issue: '#91', node: 'B2', type: 'content_asset', domain: 'trilogy', layer: 'content', status: 'deepening_needed', health: 'green', priority: 'P0', gap_score: 27, evidence: 'medium', next: 'naming-test.md + user-language.md + validation-records.md' },
    { issue: '#95', node: 'C2', type: 'content_asset', domain: 'trilogy', layer: 'memory', status: 'trial_1_passed', health: 'green', priority: 'P0.5', gap_score: 32, evidence: 'medium', next: 'Trial 2 + Trial 3 + real learner/client validation' }
  ],

  c2_brain_center: [
    { layer: 'Validation', artifact: 'assets/C2-一个大脑/validation-records.md', status: 'Trial 1 PASS', next: 'Trial 2 and Trial 3' },
    { layer: 'Issue', artifact: '#128 C2 Brain Validation', status: 'closed', next: 'keep C2 as P0.5 memory core' },
    { layer: 'Issue', artifact: '#129 B2 Deepening Task', status: 'closed', next: 'create naming-test, user-language, validation-records' }
  ],

  gap_ranking: [
    { rank: 1, issue: '#110', gap: 'Dashboard cannot yet consume CBM Cell evidence and backwrite history', score: 82, formula: 'capability cockpit readiness', selected: true, next_issue: '#110' },
    { rank: 2, issue: '#117', gap: 'Operator Skill reuse lacks live multi-tool execution', score: 70, formula: 'pilot evidence gap', selected: false, next_issue: null },
    { rank: 3, issue: '#116', gap: 'Client project governance lacks real client-side signal', score: 66, formula: 'pilot evidence gap', selected: false, next_issue: null },
    { rank: 4, issue: '#115', gap: 'Governance loop not yet consumed by dashboard rules', score: 58, formula: 'pilot evidence gap', selected: false, next_issue: null }
  ],

  cbm_cockpit: {
    version: 'v1.0-data-block',
    source_spec: 'docs/CBM-CAPABILITY-COCKPIT-SPEC-v1.md',
    source_report: 'docs/CBM-PMO-PILOT-REPORT-v1.md',
    source_registry: 'docs/os-cbm-data.js',
    stage: 'Pilot Evidence Consolidation',
    overall_maturity: '3.1/5',
    north_star: 'A capability is mature only when the map can show its evidence, next task, bottleneck, and backwrite history.',
    system_health: { total_cells: 18, draft_cells: 3, validated_cells: 0, medium_evidence_cells: 3, weak_evidence_cells: 15, backwrite_coverage: '3/18', false_green_risks: 0, next_p0_capability: 'dashboard-capability-cockpit-rendering' },
    required_sections: ['System Health Strip', 'Top CBM Gaps', 'Capability Heatmap', 'Evidence Strength by Cell', 'Draft / Medium but Not Validated', 'Blocked or Weak Evidence Cells', 'Human Decision Needed', 'Backwrite Coverage'],
    hard_rules: ['No evidence, no green.', 'No Evidence Review, no validated.', 'No Evolution Note, no Done.', 'No Backwrite, no compounding.']
  },

  cbm_cells: [
    { cbm_cell_id: 'strategy.direct.os-governance-core', capability_name: '原力 OS 治理内核', capability_domain: 'strategy', responsibility_layer: 'direct', canon_node: 'C3', secondary_node: 'C1', current_status: 'draft', maturity_score: 26, evidence_strength: 'medium', gap_score: 58, pmo_issue: '#115', next_c4_task: 'Render P0 gate and false-green checks in CBM cockpit', evidence_path: 'brain/evidence/2026-06-30-os-governance-control-loop.md', evolution_note: 'brain/evolution-notes/2026-06-30-os-governance-control-loop.md', bottleneck: 'Governance loop is not yet an automatic PMO or Dashboard rule.', next_decision: '是否将 P0 gate 作为 Dashboard 默认准入规则', approval_gate: ['priority_change', 'canonical_update'], owner: 'mixed', autonomy_level: 'L2', last_reviewed_at: '2026-06-30', is_pilot_cell: true, is_false_green_risk: false, is_dashboard_ready: true, is_human_decision_needed: true, is_backwrite_complete: true, is_validated: false },
    { cbm_cell_id: 'client.control.project-portfolio-governance', capability_name: '客户项目组合控制台', capability_domain: 'client', responsibility_layer: 'control', canon_node: 'C3', secondary_node: 'C4', current_status: 'draft', maturity_score: 26, evidence_strength: 'medium', gap_score: 66, pmo_issue: '#116', next_c4_task: 'Render meeting quartet and project risk fields in Node Inspector', evidence_path: 'brain/evidence/2026-06-30-client-project-portfolio-pilot.md', evolution_note: 'brain/evolution-notes/2026-06-30-client-project-portfolio-pilot.md', bottleneck: 'No real client-side confirmation or repeated project metric exists yet.', next_decision: '是否将客户项目四元组纳入 Node Inspector 默认字段', approval_gate: ['external_write', 'validated_status'], owner: 'mixed', autonomy_level: 'L2', last_reviewed_at: '2026-06-30', is_pilot_cell: true, is_false_green_risk: false, is_dashboard_ready: true, is_human_decision_needed: true, is_backwrite_complete: true, is_validated: false },
    { cbm_cell_id: 'engineering.execute.operator-skill-reuse', capability_name: 'Operator Skill 多机复用', capability_domain: 'engineering', responsibility_layer: 'execute', canon_node: 'C4', secondary_node: 'C3', current_status: 'draft', maturity_score: 24, evidence_strength: 'medium', gap_score: 70, pmo_issue: '#117', next_c4_task: 'Render skill contract, approval gates, and dry-run boundary in Node Inspector', evidence_path: 'brain/evidence/2026-06-30-operator-skill-reuse-dryrun.md', evolution_note: 'brain/evolution-notes/2026-06-30-operator-skill-reuse-dryrun.md', bottleneck: 'No live multi-tool execution or reusable script package exists yet.', next_decision: '是否将 client-project-governance-to-evidence-backwrite 纳入 reusable skill package', approval_gate: ['external_write', 'publish', 'validated_status'], owner: 'Codex', autonomy_level: 'L2', last_reviewed_at: '2026-06-30', is_pilot_cell: true, is_false_green_risk: false, is_dashboard_ready: true, is_human_decision_needed: true, is_backwrite_complete: true, is_validated: false }
  ],

  cbm_gap_ranking: [
    { rank: 1, cbm_cell_id: 'engineering.execute.operator-skill-reuse', capability_name: 'Operator Skill 多机复用', gap_score: 70, evidence_strength: 'medium', current_status: 'draft', bottleneck: 'No live multi-tool execution or reusable script package exists yet.', next_c4_task: 'Render skill contract and approval gates, then prepare reusable script package', human_decision_needed: true },
    { rank: 2, cbm_cell_id: 'client.control.project-portfolio-governance', capability_name: '客户项目组合控制台', gap_score: 66, evidence_strength: 'medium', current_status: 'draft', bottleneck: 'No real client-side confirmation or repeated project metric exists yet.', next_c4_task: 'Render meeting quartet and project risk fields', human_decision_needed: true },
    { rank: 3, cbm_cell_id: 'strategy.direct.os-governance-core', capability_name: '原力 OS 治理内核', gap_score: 58, evidence_strength: 'medium', current_status: 'draft', bottleneck: 'Governance loop is not yet an automatic PMO or Dashboard rule.', next_c4_task: 'Render P0 gate and false-green checks', human_decision_needed: true }
  ],

  cbm_next_p0: {
    id: 'dashboard-capability-cockpit-rendering',
    issue: '#110',
    capability: 'CBM Capability Cockpit data-to-view rendering',
    reason: 'The first three pilot cells have evidence and backwrite, but the Dashboard cannot yet display capability strength, false-green risk, next task, and human decisions.',
    required_artifacts: ['docs/pmo-dashboard-data.js', 'docs/pmo-v28.html or new cockpit page'],
    acceptance: ['Three pilot cells visible as draft / medium / not validated.', 'No cell without evidence appears green.', 'Node Inspector shows evidence_path and evolution_note.', 'Next P0 Capability is displayed.', 'Weak evidence cells remain visible.']
  },

  roadmap_current: ['v2.9-content-assets', 'v3.4-content-asset-sync-v1', 'v3.6-c2-trial1-validated', 'v3.7-validation-task-sync', 'v3.8-cbm-capability-cockpit-sync']
};
