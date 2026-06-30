window.YUANLI_GITHUB_CBM_PMO_VISIBILITY_V1 = {
  version: 'v1.0-human-visible-draft-overlay',
  updated_at: '2026-06-30T15:00:00Z',
  issue: '#179',
  source_index: 'docs/GITHUB-CBM-PMO-HUMAN-REVIEW-INDEX-v1.md',
  purpose: 'Human-visible dashboard overlay for GitHub CBM-PMO portfolio governance. This overlay prevents auto-synced draft issues from appearing as green before evidence review.',
  status: 'draft_overlay',
  guardrails: [
    'No repo lifecycle mutation.',
    'No weak evidence is green.',
    'Draft PRs remain review-needed until human review.',
    'This overlay does not mark any item validated, operating, or compounding.'
  ],
  summary: {
    governance_architecture: 'reached_review_pending',
    human_review_index: 'draft_pr_open',
    dashboard_data_patch: 'draft_overlay_created',
    first_real_evidence_loop: 'not_started',
    first_content_feedback_loop: 'not_started'
  },
  metrics: {
    open_draft_prs_tracked: 10,
    c3_gaps_tracked: 5,
    c4_tasks_tracked: 8,
    false_green_risk_items: 0,
    validated_items_added_by_this_patch: 0,
    repo_lifecycle_mutations: 0
  },
  review_order: [
    '#166 policy',
    '#165 registry',
    '#167 onboarding',
    '#168 asset pool',
    '#169 dashboard rhythm',
    '#180 human review index',
    '#172 C2 repo ownership',
    '#176 C2 evidence routing',
    '#173 content integration contract',
    '#177 content 30D feedback schema'
  ],
  draft_prs: [
    { pr: '#165', artifact: 'docs/GITHUB-6M-CBM-PMO-VALUE-AUDIT-v1.md', layer: 'portfolio_registry', status: 'draft_review_needed', evidence_strength: 'weak', health: 'amber_not_green', next_action: 'Human review registry classification.' },
    { pr: '#166', artifact: 'docs/REPO-GOVERNANCE-POLICY-v1.md', layer: 'policy', status: 'draft_review_needed', evidence_strength: 'weak', health: 'amber_not_green', next_action: 'Human review L1/L2/L3 rules and human gates.' },
    { pr: '#167', artifact: 'docs/GITHUB-PORTFOLIO-L1-ONBOARDING-v1.md', layer: 'onboarding', status: 'draft_review_needed', evidence_strength: 'weak', health: 'amber_not_green', next_action: 'Human review L1 repo mapping.' },
    { pr: '#168', artifact: 'docs/CAPABILITY-ASSET-POOL-v1.md', layer: 'asset_pool', status: 'draft_review_needed', evidence_strength: 'weak', health: 'amber_not_green', next_action: 'Human review L2 asset-pool boundaries.' },
    { pr: '#169', artifact: 'docs/GITHUB-PORTFOLIO-REVIEW-RHYTHM-v1.md', layer: 'dashboard_rhythm', status: 'draft_review_needed', evidence_strength: 'weak', health: 'amber_not_green', next_action: 'Human review dashboard rhythm and false-green rules.' },
    { pr: '#180', artifact: 'docs/GITHUB-CBM-PMO-HUMAN-REVIEW-INDEX-v1.md', layer: 'human_review_index', status: 'draft_review_needed', evidence_strength: 'weak', health: 'amber_not_green', next_action: 'Human review the single control index.' },
    { pr: '#172', artifact: 'docs/C2-REPO-OWNERSHIP-MAP-v1.md', layer: 'c2_contract', status: 'draft_review_needed', evidence_strength: 'medium_candidate', health: 'blue_candidate_not_green', next_action: 'Human review C2 repo roles.' },
    { pr: '#176', artifact: 'docs/C2-EVIDENCE-ROUTING-TEMPLATE-v1.md', layer: 'c2_evidence', status: 'draft_review_needed', evidence_strength: 'weak_to_medium_candidate', health: 'amber_not_green', next_action: 'Select first real C2 evidence trial after review.' },
    { pr: '#173', artifact: 'docs/CONTENT-ENGINE-REPO-INTEGRATION-CONTRACT-v1.md', layer: 'content_contract', status: 'draft_review_needed', evidence_strength: 'weak', health: 'amber_not_green', next_action: 'Human review content repo contracts.' },
    { pr: '#177', artifact: 'docs/CONTENT-30D-FEEDBACK-SCHEMA-v1.md', layer: 'content_feedback', status: 'draft_review_needed', evidence_strength: 'weak', health: 'amber_not_green', next_action: 'Select first content feedback trial after review.' }
  ],
  issue_chain: [
    { issue: '#150', type: 'C3 Gap', theme: 'six-month GitHub portfolio value audit', status: 'open', health: 'review_needed' },
    { issue: '#152', type: 'EPIC', theme: 'GitHub Portfolio CBM-PMO Landing Program', status: 'open', health: 'review_needed' },
    { issue: '#160', type: 'C3 Gap', theme: 'C2 Brain ownership and SSOT convergence', status: 'open', health: 'review_needed' },
    { issue: '#161', type: 'C3 Gap', theme: 'Content production repo integration', status: 'open', health: 'review_needed' },
    { issue: '#162', type: 'C3 Gap', theme: 'Strategy canon source boundary', status: 'open', health: 'backlog_review' },
    { issue: '#163', type: 'C3 Gap', theme: 'Client evidence privacy boundary', status: 'open', health: 'backlog_review' },
    { issue: '#164', type: 'C3 Gap', theme: 'Investment decision-record evidence loop', status: 'open', health: 'backlog_review' },
    { issue: '#170', type: 'C4 Task', theme: 'C2 repo ownership map', status: 'open', health: 'draft_pr_open' },
    { issue: '#171', type: 'C4 Task', theme: 'Content engine repo integration contract', status: 'open', health: 'draft_pr_open' },
    { issue: '#174', type: 'C4 Task', theme: 'C2 evidence routing template', status: 'open', health: 'draft_pr_open' },
    { issue: '#175', type: 'C4 Task', theme: 'Content 30D feedback schema', status: 'open', health: 'draft_pr_open' },
    { issue: '#178', type: 'C4 Task', theme: 'Human Review Index', status: 'open', health: 'draft_pr_open' },
    { issue: '#179', type: 'C4 Task', theme: 'Dashboard data patch', status: 'open', health: 'draft_overlay_created' }
  ],
  dashboard_patch_note: {
    existing_pmo_dashboard_signal: 'Auto-sync may mark recent C4 tasks as green/medium before human review.',
    correction_strategy: 'Expose a separate human-visible overlay with draft/review-needed/amber states instead of overwriting historical dashboard truth.',
    future_integration: [
      'Wire this overlay into the CBM cockpit UI.',
      'Update sync script so #153-#179 remain amber until review evidence exists.',
      'Only allow green after evidence review and human approval.'
    ]
  }
};
