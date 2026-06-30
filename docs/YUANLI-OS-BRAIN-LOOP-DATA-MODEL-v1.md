# Yuanli OS Brain Loop Data Model v1

Date: 2026-06-30  
Status: draft / data model / not merged  
Protocol: `docs/YUANLI-OS-BRAIN-LOOP-v1.md`

## 1. Purpose

This data model defines the minimum durable objects required for Yuanli OS Brain Loop v1.

It is intentionally markdown-first. It can later be compiled into JSON, dashboard data, or database tables.

## 2. Object Model

Core objects:

```text
SourceItem
SensitivityReview
CanonResolution
CapabilityResolution
ProgramRoute
C3Gap
C4Task
Artifact
FeedbackRecord
EvidenceNote
EvolutionNote
DreamReview
BackwriteRecord
```

Primary relationship:

```text
SourceItem
  → SensitivityReview
  → CanonResolution
  → CapabilityResolution
  → ProgramRoute
  → C3Gap / C4Task
  → Artifact
  → FeedbackRecord
  → EvidenceNote
  → EvolutionNote
  → DreamReview
  → BackwriteRecord
```

## 3. Shared Frontmatter

Every Brain Loop artifact should carry:

```yaml
---
brain_loop_id: BLOOP-YYYY-NNN
object_type: source_item | sensitivity_review | canon_resolution | capability_resolution | program_route | c3_gap | c4_task | artifact | feedback_record | evidence_note | evolution_note | dream_review | backwrite_record
status: draft | review-needed | routed | in-progress | evidenced | evolved | backwritten | blocked
created: YYYY-MM-DD
updated: YYYY-MM-DD
owner: human | agent | codex | pmo
sensitivity: raw | sensitive | private-default | anonymized | public-safe | canonical
canon_node:
program:
cbm_cell:
issue:
pr:
evidence_strength: none | weak | medium | strong
writeback_target:
---
```

## 4. SourceItem

```yaml
source_item:
  source_id:
  source_type: chat | github_issue | github_pr | llm_wiki_page | transcript | get_note | content_feedback | zhiku_catalog_item | client_case | investment_note | external_article | external_video | external_repo
  source_location:
  owner:
  freshness:
  initial_summary:
  initial_question:
  related_program:
  related_canon_node:
  next_action:
```

Required before:

```text
CanonResolution
ProgramRoute
C3/C4
```

## 5. SensitivityReview

```yaml
sensitivity_review:
  source_id:
  level: raw | sensitive | private-default | anonymized | public-safe | canonical
  reason:
  allowed_use:
    - internal_reasoning
    - anonymized_evidence
    - content_publication
    - canon_candidate
  blocked_use:
    - raw_publication
    - external_install
    - public_case_detail
  human_approval_required: true/false
  reviewer:
```

Hard rules:

```text
No public use of sensitive source without anonymization and human approval.
No raw transcript text in public-safe evidence.
```

## 6. CanonResolution

```yaml
canon_resolution:
  source_id:
  trilogy_part: yuanli_asset | yuanli_startup | yuanli_os
  module: A1 | A2 | A3 | A4 | B1 | B2 | B3 | B4 | C1 | C2 | C3 | C4
  canon_node:
  claim_type: concept | case | method | tool | evidence | content | governance | investment | client
  canonical_status: raw | evidence | evolution | candidate | canon
  confidence: low | medium | high
  supports:
  does_not_support:
  route:
    - content_engine
    - github_portfolio
    - c2_brain
    - zhiku_capability
    - observe
```

## 7. CapabilityResolution

```yaml
capability_resolution:
  need:
  searched_zhiku: true/false
  searched_github_assets: true/false
  candidates:
    - name:
      type: skill | agent | command | mcp | setting | hook | repo | dashboard
      source: zhiku | github | local | external
      confidence: low | medium | high
      risk:
      reuse_decision: reuse | adapt | build_new | reject | observe
  final_decision: reuse | adapt | build_new | reject | observe
  reason:
  writeback_target:
```

Hard rule:

```text
Build-new requires a written reason explaining why reuse/adapt is not sufficient.
```

## 8. ProgramRoute

```yaml
program_route:
  primary_program: content_engine | github_portfolio | c2_brain | zhiku_capability | observe
  secondary_program:
  cbm_cell:
  existing_issue:
  new_issue_required: true/false
  next_c3_gap:
  next_c4_task:
  dashboard_target:
```

Routing table:

| primary_program | GitHub anchor |
|---|---|
| content_engine | #183 |
| github_portfolio | #184 |
| c2_brain | #160/#170/#174 family |
| zhiku_capability | capability discovery layer |
| observe | source radar |

## 9. C3Gap

```yaml
c3_gap:
  gap_id:
  source_id:
  canon_node:
  program:
  cbm_cell:
  gap_type: capability | evidence | governance | maturity | privacy | dashboard | execution
  gap_statement:
  evidence_gap:
  risk:
  expected_c4_task:
  status: open | review-needed | converted | closed
```

## 10. C4Task

```yaml
c4_task:
  task_id:
  source_gap:
  program:
  cbm_cell:
  output:
  acceptance:
  capability_resolution:
  evidence_required: true/false
  human_gate_required: true/false
  status: open | in-progress | review-needed | evidenced | done
```

Hard rule:

```text
C4Task cannot be done without evidence and evolution.
```

## 11. Artifact

```yaml
artifact:
  artifact_id:
  artifact_type: doc | protocol | dashboard | content_draft | article | card | script | registry | review_note | code | data_overlay
  location:
  produced_by:
  related_issue:
  related_pr:
  review_status: draft | review-needed | approved | rejected
```

## 12. FeedbackRecord

```yaml
feedback_record:
  artifact_id:
  feedback_type: human_review | internal_review | publish_metric | test_metric | qualitative_signal | github_review | dashboard_signal | reuse_result
  feedback_source:
  summary:
  metric:
  supports:
  does_not_prove:
  next_iteration:
```

## 13. EvidenceNote

```yaml
evidence_note:
  evidence_id:
  title:
  date:
  brain_loop_id:
  source_id:
  sensitivity_level:
  canon_node:
  program:
  related_issue:
  related_pr:
  evidence_strength: none | weak | medium | strong
  what_happened:
  what_this_supports:
  what_this_does_not_prove:
  anonymized_details:
  next_c3_or_c4:
  writeback_target:
```

## 14. EvolutionNote

```yaml
evolution_note:
  evolution_id:
  title:
  date:
  brain_loop_id:
  triggered_by:
  previous_assumption:
  new_observation:
  pattern:
  decision_change:
  canon_candidate:
  next_test:
```

## 15. DreamReview

```yaml
dream_review:
  review_id:
  week:
  inputs:
    - evidence_notes
    - evolution_notes
    - github_activity
    - content_feedback
    - source_changes
    - capability_decisions
  recurring_patterns:
  new_risks:
  repeated_capability_needs:
  canon_candidate_signals:
  stale_assumptions:
  suggested_c3_gaps:
  suggested_c4_tasks:
  writebacks:
```

## 16. BackwriteRecord

```yaml
backwrite_record:
  backwrite_id:
  target:
  change:
  evidence_path:
  evolution_path:
  human_review:
  status: proposed | applied | rejected | deferred
```

## 17. Initial File Locations

| Object | Suggested path |
|---|---|
| SourceItem | `brain/source-routing/` |
| SensitivityReview | `brain/source-routing/` |
| EvidenceNote | `brain/evidence/` |
| EvolutionNote | `brain/evolution-notes/` |
| DreamReview | `brain/dream-reviews/` |
| BackwriteRecord | `brain/writeback-deltas/` |
| Program Board updates | `docs/CBM-PMO-PROGRAM-BOARD-v1.md` |

## 18. Dashboard State Rules

| State | Required data |
|---|---|
| registered | SourceItem only |
| routed | SensitivityReview + CanonResolution + ProgramRoute |
| executable | CapabilityResolution + C3/C4 |
| evidenced | EvidenceNote exists |
| evolved | EvolutionNote exists |
| backwritten | BackwriteRecord applied |
| compounding | reviewed + evidence + evolution + backwrite |

Not allowed:

```text
draft → green
weak evidence → validated
artifact-only → Done
private source → public content
```
