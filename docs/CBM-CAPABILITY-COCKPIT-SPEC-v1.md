# CBM Capability Cockpit Spec v1

> Issue: #110  
> Parent EPIC: #106  
> Source Report: `docs/CBM-PMO-PILOT-REPORT-v1.md`  
> Data Source: `docs/os-cbm-data.js`  
> Date: 2026-06-30

---

## 0. Executive Decision

```text
CBM Capability Cockpit is not a prettier PMO dashboard.
It is the cockpit that proves whether a capability component is getting stronger.
```

The first design principle:

```text
The Dashboard must be capability-centric before it is issue-centric.
```

It must answer:

```text
Which capability matters most now?
What evidence proves it is stronger?
Which capability is false-green risk?
What is the next C4 task?
What needs human decision?
Where did the learning write back?
```

---

## 1. Why This Spec Exists

#109 completed the first three-cell pilot:

```text
P1 Governance → P2 Business Context → P3 Engineering Reuse
```

The pilot report concluded:

```text
Stage: Pilot Evidence Consolidation
Maturity: 3.1 / 5
```

The three pilot cells are:

```text
strategy.direct.os-governance-core: draft / medium evidence
client.control.project-portfolio-governance: draft / medium evidence
engineering.execute.operator-skill-reuse: draft / medium evidence
```

No cell is validated yet.

Therefore #110 must not start with visual UI. It must first define:

```text
fields
states
rules
cards
filters
heatmap logic
node inspector
next-P0 logic
backwrite coverage
```

---

## 2. Cockpit North Star

```text
A capability is not mature because it exists on the map; it is mature only when the map can show its evidence, next task, bottleneck, and backwrite history.
```

---

## 3. Core Object: Capability Cell Card

Each cockpit card maps to one CBM Cell.

### 3.1 Required fields

```yaml
cbm_cell_id:
capability_name:
capability_domain:
responsibility_layer:
canon_node:
secondary_node:
current_status:
maturity_score:
evidence_strength:
gap_score:
pmo_issue:
next_c4_task:
evidence_path:
evolution_note:
bottleneck:
next_decision:
approval_gate:
owner:
autonomy_level:
last_reviewed_at:
```

### 3.2 Derived fields

```yaml
is_pilot_cell:
is_false_green_risk:
is_dashboard_ready:
is_human_decision_needed:
is_backwrite_complete:
is_validated:
```

---

## 4. State Rules

### 4.1 Allowed states

```text
missing
seed
draft
validated
operating
compounding
```

### 4.2 Display rules

| Status | Display meaning | Allowed evidence |
|---|---|---|
| missing | No object exists | none |
| seed | Defined but not evidenced | none / weak |
| draft | Artifact and evidence exist | weak / medium |
| validated | Verified by real case, repeated use, or external signal | medium / strong |
| operating | Used in weekly/project rhythm | medium / strong |
| compounding | Reused and improving next cycle | strong |

### 4.3 Hard rules

```text
No evidence, no green.
No Evidence Review, no validated.
No Evolution Note, no Done.
No Backwrite, no compounding.
```

### 4.4 False-green risk rule

A cell must be flagged as `false_green_risk` when any of these is true:

```text
current_status in [validated, operating, compounding] AND evidence_strength in [none, weak]
evidence_strength = medium but evolution_note is empty
pmo_issue exists but evidence_path is empty
current_status = draft but next_c4_task is empty
Dashboard displays complete but backwrite is missing
```

---

## 5. Cockpit Sections

The cockpit should have 8 sections.

### 5.1 System Health Strip

Purpose:

```text
Give one-line judgment on whether the CBM-PMO system is getting stronger.
```

Fields:

```text
overall_maturity
pilot_stage
total_cells
draft_cells
validated_cells
weak_evidence_cells
backwrite_coverage
next_p0_capability
```

Initial values:

```yaml
overall_maturity: 3.1 / 5
pilot_stage: Pilot Evidence Consolidation
total_cells: 18
draft_cells: 3
validated_cells: 0
weak_evidence_cells: 15
backwrite_coverage: 3 / 18
next_p0_capability: dashboard-capability-cockpit-spec
```

---

### 5.2 Top CBM Gaps

Purpose:

```text
Show the highest-priority capability gaps by gap_score and evidence weakness.
```

Sort logic:

```text
gap_score desc
then evidence_strength asc
then maturity_score asc
then last_reviewed_at asc
```

Required columns:

```text
rank
cbm_cell_id
capability_name
gap_score
evidence_strength
current_status
bottleneck
next_c4_task
human_decision_needed
```

---

### 5.3 Capability Heatmap

Purpose:

```text
Show the whole 6 domains × 3 layers map as capability maturity, not as page decoration.
```

Layout:

```text
Rows: strategy / growth / client / knowledge / engineering / investment
Columns: direct / control / execute
```

Cell display:

```text
capability_name
status
maturity_score
evidence_strength
gap_score
```

Heat logic:

```text
Validated / strong: hot-positive
Draft / medium: active-learning
Seed / weak: weak-signal
Missing / none: blank-risk
False-green-risk: warning
```

---

### 5.4 Evidence Strength by Cell

Purpose:

```text
Prevent task-completion bias by making evidence strength visible.
```

Buckets:

```text
none
weak
medium
strong
```

Initial expected view:

```text
medium: 3 cells
weak: 15 cells
strong: 0 cells
none: 0 or unfilled cells depending parser
```

---

### 5.5 Draft / Medium but Not Validated

Purpose:

```text
Show learning cells that are real but not yet validated.
```

Initial cards:

```text
strategy.direct.os-governance-core
client.control.project-portfolio-governance
engineering.execute.operator-skill-reuse
```

Rule:

```text
current_status = draft AND evidence_strength = medium AND is_validated = false
```

This section is essential because it prevents premature confidence.

---

### 5.6 Blocked or Weak Evidence Cells

Purpose:

```text
Show where the system still has structure but little proof.
```

Rule:

```text
evidence_strength in [none, weak]
OR bottleneck is not empty
OR next_c4_task is empty
```

---

### 5.7 Human Decision Needed

Purpose:

```text
Show where Ming must make judgment instead of letting AI / Agent proceed.
```

Rule:

```text
approval_gate is not empty
OR next_decision is not empty
OR status upgrade would cross into validated / operating / compounding
```

Display:

```text
cbm_cell_id
next_decision
approval_gate
risk if ignored
```

---

### 5.8 Backwrite Coverage

Purpose:

```text
Show whether completed work actually strengthened the system.
```

Rule:

```text
backwrite complete = evidence_path exists AND evolution_note exists AND current_status changed or last_reviewed_at updated
```

Display:

```text
cell
previous_status
current_status
evidence_path
evolution_note
backwrite_complete
```

---

## 6. Node Inspector

Clicking a Capability Cell opens the Node Inspector.

### 6.1 Node Inspector Tabs

```text
1. Summary
2. Gap
3. Evidence
4. Evolution
5. Next Task
6. Approval Gate
7. Backwrite
```

### 6.2 Summary Tab

```yaml
capability_name:
cbm_cell_id:
canon_node:
status:
maturity_score:
evidence_strength:
gap_score:
owner:
autonomy_level:
```

### 6.3 Gap Tab

```yaml
control_point:
bottleneck:
gap_score:
why_now:
```

### 6.4 Evidence Tab

```yaml
evidence_strength:
evidence_path:
evidence_summary:
missing_evidence:
```

### 6.5 Evolution Tab

```yaml
evolution_note:
what_changed:
what_not_validated:
canonical_candidate:
```

### 6.6 Next Task Tab

```yaml
next_c4_task:
pmo_issue:
expected_artifact:
acceptance:
```

### 6.7 Approval Gate Tab

```yaml
approval_gate:
human_decision_needed:
forbidden_actions:
```

### 6.8 Backwrite Tab

```yaml
writeback_target:
backwrite_complete:
last_reviewed_at:
next_review:
```

---

## 7. Next P0 Logic

The cockpit must recommend a Next P0 Capability.

### 7.1 Formula

```text
Next P0 Score = gap_score × evidence_gap_weight × business_impact_proxy × backwrite_value × urgency_proxy
```

### 7.2 Simple v1 implementation

Use existing fields:

```text
gap_score
maturity_score
evidence_strength
next_c4_task exists
approval_gate exists
```

Suggested v1 ranking:

```text
1. High gap_score
2. Weak / medium evidence
3. Has next_c4_task
4. Has explicit bottleneck
5. Requires human decision
```

### 7.3 Current next P0

```text
CBM Capability Cockpit data model and Node Inspector spec
```

Reason:

```text
The first three pilot cells have evidence, but the Dashboard cannot yet consume or display that evidence.
```

---

## 8. Data Integration

### 8.1 Source of truth

```text
docs/os-cbm-data.js
```

### 8.2 Dashboard bridge

`docs/pmo-dashboard-data.js` should either:

```text
Option A: import / reference `window.YUANLI_OS_CBM_V1`
Option B: duplicate a normalized cbm_cockpit block generated from os-cbm-data.js
```

Recommended v1:

```text
Option A if browser page order is reliable.
Option B if static dashboard needs standalone data.
```

### 8.3 Required new data blocks

```yaml
cbm_cockpit:
  overall_maturity:
  stage:
  next_p0_capability:
  highlighted_cells:
  false_green_risks:
  weak_evidence_cells:
  backwrite_coverage:
  human_decisions:
```

---

## 9. Initial Highlighted Cards

### 9.1 OS Governance Core

```yaml
cbm_cell_id: strategy.direct.os-governance-core
status: draft
evidence_strength: medium
maturity_score: 26
not_validated_reason: dashboard and weekly review do not yet consume governance loop
next_dashboard_need: show P0 gate and false-green guardrail
```

### 9.2 Client Project Portfolio Governance

```yaml
cbm_cell_id: client.control.project-portfolio-governance
status: draft
evidence_strength: medium
maturity_score: 26
not_validated_reason: no client-side confirmation or repeated project use
next_dashboard_need: show meeting quartet, risk list, next C4 task
```

### 9.3 Operator Skill Reuse

```yaml
cbm_cell_id: engineering.execute.operator-skill-reuse
status: draft
evidence_strength: medium
maturity_score: 24
not_validated_reason: no live multi-tool execution or reusable script package
next_dashboard_need: show skill contract, approval gates, dry-run boundary
```

---

## 10. What Dashboard Must Not Do

```text
Do not show green for draft / medium cells.
Do not hide evidence weakness behind completed issues.
Do not treat closed Issue as capability maturity.
Do not promote canonical candidates to canon.
Do not bury human approval gates.
Do not make UI aesthetics outrank evidence logic.
```

---

## 11. Implementation Path

### Phase 1 · Spec

```text
Create this file.
```

### Phase 2 · Data bridge

```text
Update docs/pmo-dashboard-data.js or dashboard loader to read docs/os-cbm-data.js.
```

### Phase 3 · View shell

```text
Add CBM Capability Cockpit section to dashboard page.
```

### Phase 4 · Node inspector

```text
Click a cell to show Summary / Gap / Evidence / Evolution / Next Task / Approval Gate / Backwrite.
```

### Phase 5 · Review hook

```text
Prepare #111 Weekly PMO → CBM Evolution Review to consume cockpit state.
```

---

## 12. Acceptance Criteria for #110

#110 is not complete until:

```text
1. This spec exists.
2. Dashboard has a capability-centric view.
3. Three pilot cells are visible as draft / medium / not validated.
4. Weak evidence cells are visible.
5. False-green rules are visible or computable.
6. Node Inspector shows evidence_path and evolution_note.
7. Next P0 Capability is displayed.
8. No Cell without evidence appears green.
```

---

## 13. Next Artifact

After this spec:

```text
Update docs/pmo-dashboard-data.js with cbm_cockpit block.
```

Then:

```text
Update dashboard UI to render CBM Capability Cockpit.
```
