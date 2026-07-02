window.YUANLI_CBM_CAPABILITY_COCKPIT = {
  version: 'v1.3-pilot4-knowledge-asset-architecture',
  updated_at: '2026-07-02T06:21:00Z',
  purpose: 'Durable CBM Capability Cockpit data source that is not overwritten by PMO dashboard sync.',
  source_files: [
    'CONSTITUTION.md',
    'docs/CBM-PMO-PILOT-REPORT-v1.md',
    'docs/CBM-CAPABILITY-COCKPIT-SPEC-v1.md',
    'docs/CBM-WEEKLY-EVOLUTION-REVIEW-v1.md',
    'docs/CBM-PMO-AUTO-SYNC-CONTRACT-v1.1.md',
    'docs/weekly-cbm-review-latest.md',
    'docs/cbm-pmo-sync-latest.json',
    'docs/os-cbm-data.js'
  ],
  stage: 'Auto Sync Contract Ready',
  maturity: {
    overall: '3.3/5',
    strategic_architecture: '4.3/5',
    governance_discipline: '4.0/5',
    capability_registry: '3.6/5',
    evidence_maturity: '3.0/5',
    business_validation: '2.3/5',
    engineering_reuse: '2.9/5',
    dashboard_readiness: '3.2/5',
    weekly_review_readiness: '3.1/5',
    sync_contract_readiness: '3.5/5'
  },
  north_star: 'A capability is mature only when the map can show its evidence, next task, bottleneck, and backwrite history.',
  hard_rules: ['No evidence, no green.', 'No Evidence Review, no validated.', 'No Evolution Note, no Done.', 'No Backwrite, no compounding.'],
  system_health: { total_cells: 18, pilot_cells: 4, draft_cells: 4, validated_cells: 0, operating_cells: 0, compounding_cells: 0, medium_evidence_cells: 4, weak_evidence_cells: 14, backwrite_coverage: '3/18', false_green_risks: 0, current_stage: 'Auto Sync Contract Ready', next_p0_capability: 'first-strong-or-repeated-evidence' },
  strategic_goal: { one_line: 'Turn the founder’s non-replicable strategic judgment into a compounding, evidence-backed, recursively improving operating system.', trilogy_goal: 'Find the force matrix, place it into the era and market, then let the OS make it self-propagating.', os_goal: '懂你 + 记得住 + 会判断 + 能行动 + 每次变强', cbm_pmo_goal: 'Make each capability component visible, governable, executable, evidenced, and backwritable.' },
  architecture: { canon: ['原力资产', '原力创业', '原力OS'], os_modules: ['一纸文脉', '一个大脑', '一张地图', '一条链路'], cbm_pmo_loop: ['CBM Cell', 'C3 Gap', 'C4 Task', 'Evidence Review', 'Evolution Note', 'CBM Backwrite', 'Dashboard', 'Weekly Review', 'Sync Contract'], cockpit_layers: ['System Health', 'Top CBM Gaps', 'Capability Heatmap', 'Evidence Strength', 'Draft Medium Not Validated', 'Weak Evidence', 'Human Decision', 'Backwrite Coverage'] },
  weekly_review: { protocol: 'docs/CBM-WEEKLY-EVOLUTION-REVIEW-v1.md', latest_review: 'docs/weekly-cbm-review-latest.md', latest_evolution_note: 'brain/evolution-notes/2026-06-30-cbm-pmo-review.md', generator: 'scripts/generate-weekly-cbm-review.js', status: 'ready', next_review_input: ['docs/cbm-capability-cockpit-data.js', 'docs/cbm-capability-cockpit.html', 'docs/os-cbm-data.js', 'GitHub issues after #131'] },
  sync_contract: { issue: '#131', contract: 'docs/CBM-PMO-AUTO-SYNC-CONTRACT-v1.1.md', checker: 'scripts/sync-cbm-pmo-data.js', latest_report: 'docs/cbm-pmo-sync-latest.json', status: 'contract_created', source_of_truth: { canon: 'CONSTITUTION.md', cbm_capability_truth: 'docs/os-cbm-data.js', cockpit_operational_truth: 'docs/cbm-capability-cockpit-data.js', pmo_dashboard_derived_view: 'docs/pmo-dashboard-data.js', weekly_review_derived_artifact: 'docs/weekly-cbm-review-latest.md' }, auto_fields: ['cbm_cell_id', 'capability_name', 'domain', 'layer', 'canon_node', 'secondary_node', 'issue', 'artifact', 'evidence_path', 'evolution_note', 'bottleneck', 'next_c4_task'], human_gated_fields: ['status', 'evidence_strength', 'maturity_score', 'is_validated', 'validated_cells', 'operating_cells', 'compounding_cells', 'canonical_update'], mode: 'audit_report_only' },
  pilot_cells: [
    { cbm_cell_id: 'strategy.direct.os-governance-core', capability_name: '原力 OS 治理内核', domain: 'strategy', layer: 'direct', canon_node: 'C3', secondary_node: 'C1', status: 'draft', evidence_strength: 'medium', maturity_score: 26, gap_score: 58, issue: '#115', artifact: 'docs/OS-GOVERNANCE-CONTROL-LOOP-v1.md', evidence_path: 'brain/evidence/2026-06-30-os-governance-control-loop.md', evolution_note: 'brain/evolution-notes/2026-06-30-os-governance-control-loop.md', bottleneck: 'Governance loop is visible in Cockpit and weekly review, but not yet enforced as automatic PMO rule.', next_c4_task: 'Use sync contract to protect P0 gate and false-green rules from data drift.', next_decision: '是否将 P0 gate 作为 PMO 自动准入规则', approval_gate: ['priority_change', 'canonical_update'], is_validated: false, is_backwrite_complete: true, is_human_decision_needed: true },
    { cbm_cell_id: 'client.control.project-portfolio-governance', capability_name: '客户项目组合控制台', domain: 'client', layer: 'control', canon_node: 'C3', secondary_node: 'C4', status: 'draft', evidence_strength: 'medium', maturity_score: 26, gap_score: 66, issue: '#116', artifact: 'docs/CLIENT-PROJECT-PORTFOLIO-PILOT-v1.md', evidence_path: 'brain/evidence/2026-06-30-client-project-portfolio-pilot.md', evolution_note: 'brain/evolution-notes/2026-06-30-client-project-portfolio-pilot.md', bottleneck: 'No real client-side confirmation or repeated project metric exists yet.', next_c4_task: 'Use real or further anonymized project input in next weekly review.', next_decision: '是否将客户项目四元组纳入默认复盘输入', approval_gate: ['external_write', 'validated_status'], is_validated: false, is_backwrite_complete: true, is_human_decision_needed: true },
    { cbm_cell_id: 'engineering.execute.operator-skill-reuse', capability_name: 'Operator Skill 多机复用', domain: 'engineering', layer: 'execute', canon_node: 'C4', secondary_node: 'C3', status: 'draft', evidence_strength: 'medium', maturity_score: 24, gap_score: 70, issue: '#117', artifact: 'docs/OPERATOR-SKILL-REUSE-DRYRUN-v1.md', evidence_path: 'brain/evidence/2026-06-30-operator-skill-reuse-dryrun.md', evolution_note: 'brain/evolution-notes/2026-06-30-operator-skill-reuse-dryrun.md', bottleneck: 'No live multi-tool execution or reusable script package exists yet.', next_c4_task: 'Run sync checker and weekly generator as first live multi-tool / script-backed reuse evidence.', next_decision: '是否将 weekly review generator 纳入自动同步链路', approval_gate: ['external_write', 'publish', 'validated_status'], is_validated: false, is_backwrite_complete: true, is_human_decision_needed: true },
    { cbm_cell_id: 'knowledge.direct.knowledge-asset-architecture', capability_name: '专家知识资产架构', domain: 'knowledge', layer: 'direct', canon_node: 'C2', secondary_node: 'C3', status: 'draft', evidence_strength: 'medium', maturity_score: 17, gap_score: 72, issue: '#218', artifact: 'docs/C2-EXPERT-BRAIN-V2-GBRAIN-PLAN.md', evidence_path: 'brain/evidence/2026-07-02-c2-gbrain-bootstrap-trial.md', evolution_note: '', bottleneck: '图谱边为 0（待 #219 frontmatter 归一化）；think 合成层走胶水 skill 模式（#220）', next_c4_task: '#219 frontmatter 归一化点亮图谱边', next_decision: 'Phase 2 夜航日报接入 Dashboard 的只建议不改分边界（#218 §6 C3 Gap）', approval_gate: ['status_change'], is_validated: false, is_backwrite_complete: false, is_human_decision_needed: true }
  ],
  top_gaps: [
    { rank: 1, cbm_cell_id: 'knowledge.direct.knowledge-asset-architecture', gap_score: 72, reason: 'Graph edges are 0 and the nightly gap-report / writeback loop is not running yet (#219 / #220 open).', next: 'Run #219 frontmatter normalization to light up graph edges.' },
    { rank: 2, cbm_cell_id: 'client.control.project-portfolio-governance', gap_score: 66, reason: 'No real client-side confirmation or repeated project metric exists yet.', next: 'Run first real or further anonymized client-project weekly review input.' },
    { rank: 3, cbm_cell_id: 'engineering.execute.operator-skill-reuse', gap_score: 64, reason: 'Sync contract exists, but no live script-backed repeated run yet.', next: 'Run sync checker and weekly generator as repeatable workflow.' },
    { rank: 4, cbm_cell_id: 'strategy.direct.os-governance-core', gap_score: 54, reason: 'Governance rules are defined and protected by contract, but not yet used in repeated PMO rhythm.', next: 'Use P0 gate rules in next real P0 selection.' }
  ],
  next_p0: { id: 'first-strong-or-repeated-evidence', issue: null, task: 'Choose first path to strong or repeated evidence: real client-project weekly review, live multi-tool Operator Skill run, or GitHub Action for weekly CBM review generation.', reason: 'v1.1 sync contract prevents data drift; next maturity jump requires external/repeated/operating evidence, not more architecture.', first_view_file: 'docs/cbm-capability-cockpit.html', data_source: 'docs/cbm-capability-cockpit-data.js', acceptance: ['At least one pilot cell gains repeated or external evidence.', 'No pilot cell upgrades to validated without human approval.', 'Sync report remains clean: no conflicts, no false-green risks.', 'Weekly review consumes the result and updates next P0.'] },
  do_not_do_yet: ['Do not mark any pilot cell as validated.', 'Do not update CONSTITUTION.md.', 'Do not treat sync contract readiness as operating maturity.', 'Do not automate canonical updates.', 'Do not let pmo-dashboard-data.js overwrite Cockpit truth.']
};
