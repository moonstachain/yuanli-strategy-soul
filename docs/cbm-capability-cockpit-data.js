window.YUANLI_CBM_CAPABILITY_COCKPIT = {
  version: 'v1.0-durable-source',
  updated_at: '2026-06-30T09:25:00Z',
  purpose: 'Durable CBM Capability Cockpit data source that is not overwritten by PMO dashboard sync.',
  source_files: [
    'CONSTITUTION.md',
    'docs/CBM-PMO-PILOT-REPORT-v1.md',
    'docs/CBM-CAPABILITY-COCKPIT-SPEC-v1.md',
    'docs/os-cbm-data.js'
  ],
  stage: 'Pilot Evidence Consolidation',
  maturity: {
    overall: '3.1/5',
    strategic_architecture: '4.2/5',
    governance_discipline: '3.8/5',
    capability_registry: '3.6/5',
    evidence_maturity: '2.8/5',
    business_validation: '2.3/5',
    engineering_reuse: '2.6/5',
    dashboard_readiness: '2.4/5',
    weekly_review_readiness: '2.0/5'
  },
  north_star: 'A capability is mature only when the map can show its evidence, next task, bottleneck, and backwrite history.',
  hard_rules: [
    'No evidence, no green.',
    'No Evidence Review, no validated.',
    'No Evolution Note, no Done.',
    'No Backwrite, no compounding.'
  ],
  system_health: {
    total_cells: 18,
    draft_cells: 3,
    validated_cells: 0,
    operating_cells: 0,
    compounding_cells: 0,
    medium_evidence_cells: 3,
    weak_evidence_cells: 15,
    backwrite_coverage: '3/18',
    false_green_risks: 0,
    current_stage: 'Pilot Evidence Consolidation',
    next_p0_capability: 'durable-cockpit-data-to-view-rendering'
  },
  strategic_goal: {
    one_line: 'Turn the founder’s non-replicable strategic judgment into a compounding, evidence-backed, recursively improving operating system.',
    trilogy_goal: 'Find the force matrix, place it into the era and market, then let the OS make it self-propagating.',
    os_goal: '懂你 + 记得住 + 会判断 + 能行动 + 每次变强',
    cbm_pmo_goal: 'Make each capability component visible, governable, executable, evidenced, and backwritable.'
  },
  architecture: {
    canon: ['原力资产', '原力创业', '原力OS'],
    os_modules: ['一纸文脉', '一个大脑', '一张地图', '一条链路'],
    cbm_pmo_loop: ['CBM Cell', 'C3 Gap', 'C4 Task', 'Evidence Review', 'Evolution Note', 'CBM Backwrite', 'Dashboard', 'Weekly Review'],
    cockpit_layers: ['System Health', 'Top CBM Gaps', 'Capability Heatmap', 'Evidence Strength', 'Draft Medium Not Validated', 'Weak Evidence', 'Human Decision', 'Backwrite Coverage']
  },
  pilot_cells: [
    {
      cbm_cell_id: 'strategy.direct.os-governance-core',
      capability_name: '原力 OS 治理内核',
      domain: 'strategy',
      layer: 'direct',
      canon_node: 'C3',
      secondary_node: 'C1',
      status: 'draft',
      evidence_strength: 'medium',
      maturity_score: 26,
      gap_score: 58,
      issue: '#115',
      artifact: 'docs/OS-GOVERNANCE-CONTROL-LOOP-v1.md',
      evidence_path: 'brain/evidence/2026-06-30-os-governance-control-loop.md',
      evolution_note: 'brain/evolution-notes/2026-06-30-os-governance-control-loop.md',
      bottleneck: 'Governance loop is not yet an automatic PMO or Dashboard rule.',
      next_c4_task: 'Render P0 gate and false-green checks in CBM cockpit.',
      next_decision: '是否将 P0 gate 作为 Dashboard 默认准入规则',
      approval_gate: ['priority_change', 'canonical_update'],
      is_validated: false,
      is_backwrite_complete: true,
      is_human_decision_needed: true
    },
    {
      cbm_cell_id: 'client.control.project-portfolio-governance',
      capability_name: '客户项目组合控制台',
      domain: 'client',
      layer: 'control',
      canon_node: 'C3',
      secondary_node: 'C4',
      status: 'draft',
      evidence_strength: 'medium',
      maturity_score: 26,
      gap_score: 66,
      issue: '#116',
      artifact: 'docs/CLIENT-PROJECT-PORTFOLIO-PILOT-v1.md',
      evidence_path: 'brain/evidence/2026-06-30-client-project-portfolio-pilot.md',
      evolution_note: 'brain/evolution-notes/2026-06-30-client-project-portfolio-pilot.md',
      bottleneck: 'No real client-side confirmation or repeated project metric exists yet.',
      next_c4_task: 'Render meeting quartet and project risk fields in Node Inspector.',
      next_decision: '是否将客户项目四元组纳入 Node Inspector 默认字段',
      approval_gate: ['external_write', 'validated_status'],
      is_validated: false,
      is_backwrite_complete: true,
      is_human_decision_needed: true
    },
    {
      cbm_cell_id: 'engineering.execute.operator-skill-reuse',
      capability_name: 'Operator Skill 多机复用',
      domain: 'engineering',
      layer: 'execute',
      canon_node: 'C4',
      secondary_node: 'C3',
      status: 'draft',
      evidence_strength: 'medium',
      maturity_score: 24,
      gap_score: 70,
      issue: '#117',
      artifact: 'docs/OPERATOR-SKILL-REUSE-DRYRUN-v1.md',
      evidence_path: 'brain/evidence/2026-06-30-operator-skill-reuse-dryrun.md',
      evolution_note: 'brain/evolution-notes/2026-06-30-operator-skill-reuse-dryrun.md',
      bottleneck: 'No live multi-tool execution or reusable script package exists yet.',
      next_c4_task: 'Render skill contract, approval gates, and dry-run boundary in Node Inspector.',
      next_decision: '是否将 client-project-governance-to-evidence-backwrite 纳入 reusable skill package',
      approval_gate: ['external_write', 'publish', 'validated_status'],
      is_validated: false,
      is_backwrite_complete: true,
      is_human_decision_needed: true
    }
  ],
  top_gaps: [
    {
      rank: 1,
      cbm_cell_id: 'engineering.execute.operator-skill-reuse',
      gap_score: 70,
      reason: 'No live multi-tool execution or reusable script package exists yet.',
      next: 'Render skill contract and approval gates, then prepare reusable script package.'
    },
    {
      rank: 2,
      cbm_cell_id: 'client.control.project-portfolio-governance',
      gap_score: 66,
      reason: 'No real client-side confirmation or repeated project metric exists yet.',
      next: 'Render meeting quartet and project risk fields, then use real or further anonymized project input.'
    },
    {
      rank: 3,
      cbm_cell_id: 'strategy.direct.os-governance-core',
      gap_score: 58,
      reason: 'Governance loop is not yet an automatic PMO or Dashboard rule.',
      next: 'Render P0 gate and false-green checks.'
    }
  ],
  next_p0: {
    id: 'durable-cockpit-data-to-view-rendering',
    issue: '#110',
    task: 'Render CBM Capability Cockpit from durable data source.',
    reason: 'pmo-dashboard-data.js can be overwritten by sync; Cockpit needs a stable source before UI rendering.',
    first_view_file: 'docs/cbm-capability-cockpit.html',
    data_source: 'docs/cbm-capability-cockpit-data.js',
    acceptance: [
      'Cockpit reads durable data source, not hard-coded values.',
      'Three pilot cells visible as draft / medium / not validated.',
      'No cell without evidence appears green.',
      'Node Inspector shows evidence_path and evolution_note.',
      'Next P0 Capability is displayed.',
      'Human approval gates are visible.'
    ]
  },
  do_not_do_yet: [
    'Do not mark any pilot cell as validated.',
    'Do not update CONSTITUTION.md.',
    'Do not rely solely on pmo-dashboard-data.js until sync contract is fixed.',
    'Do not build visual dashboard before reading durable CBM data source.',
    'Do not automate weekly CBM review until Cockpit view exists.'
  ]
};
