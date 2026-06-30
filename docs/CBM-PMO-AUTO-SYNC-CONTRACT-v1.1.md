# CBM-PMO Auto Sync Contract v1.1

> Issue: #131  
> Parent: CBM-PMO v1.0 (#106)  
> Date: 2026-06-30  
> Status: Draft Contract  
> Scope: Cockpit / OS-CBM / PMO Dashboard / Weekly Review data synchronization

---

## 0. Executive Decision

```text
CBM-PMO v1.1 is not an automation upgrade first.
It is a source-of-truth contract first.
```

The goal is to prevent data drift among:

```text
docs/cbm-capability-cockpit-data.js
docs/os-cbm-data.js
docs/pmo-dashboard-data.js
scripts/generate-weekly-cbm-review.js
```

The contract decides:

```text
who owns which field;
who may overwrite whom;
which status can be auto-synced;
which status must be human approved;
how conflicts are reported;
how no-evidence-no-green is enforced.
```

---

## 1. Why This Contract Exists

CBM-PMO v1.0 completed the first operating loop:

```text
Spec → Registry → 3-cell Pilot → Cockpit → Weekly Review
```

Current state:

```text
Stage: Weekly Review Ready
Maturity: 3.2 / 5
Backwrite Coverage: 3 / 18
Validated Cells: 0
False Green Risks: 0
```

However, `docs/pmo-dashboard-data.js` is generated or overwritten by PMO / GitHub Actions sync. Therefore it cannot be the durable CBM source of truth.

The sync contract prevents the following failure mode:

```text
A generated PMO dashboard file overwrites CBM cockpit state, causing the system to lose evidence, status boundary, or next P0 judgment.
```

---

## 2. Source-of-Truth Hierarchy

### 2.1 Canon truth

```text
CONSTITUTION.md
```

Owns:

```text
mother axiom
12-module canon
OS four-module boundary
recursive backwrite principle
```

Rule:

```text
No sync script may update CONSTITUTION.md.
```

---

### 2.2 CBM capability truth

```text
docs/os-cbm-data.js
```

Owns:

```text
18 CBM cells
cbm_cell_id
capability_domain
responsibility_layer
capability_name
canon_node
control_point
owner
autonomy_level
approval_gate
```

Role:

```text
Strategic capability registry and map state.
```

---

### 2.3 Cockpit operational truth

```text
docs/cbm-capability-cockpit-data.js
```

Owns:

```text
system_health
stage
maturity summary
pilot_cells display state
top_gaps
next_p0
weekly_review links
human_decision_needed
```

Role:

```text
Durable Cockpit runtime source, not overwritten by PMO dashboard sync.
```

---

### 2.4 PMO dashboard derived view

```text
docs/pmo-dashboard-data.js
```

Owns:

```text
PMO content asset status
trilogy content task views
legacy PMO dashboard data
```

May consume:

```text
cbm_cockpit summary
cbm_next_p0
highlighted CBM cells
```

Rule:

```text
pmo-dashboard-data.js is a derived view for CBM, not the CBM source of truth.
```

---

### 2.5 Weekly review derived artifact

```text
docs/weekly-cbm-review-latest.md
brain/evolution-notes/YYYY-MM-DD-cbm-pmo-review.md
```

Owns:

```text
weekly review narrative
cell-level change summary
next P0 review decision
canonical candidates
```

Role:

```text
Review output generated from Cockpit data and human-reviewed before canon updates.
```

---

## 3. Sync Direction

### 3.1 Primary direction

```text
os-cbm-data.js
  → cbm-capability-cockpit-data.js
  → cbm-capability-cockpit.html
  → weekly-cbm-review-latest.md
```

### 3.2 PMO dashboard direction

```text
cbm-capability-cockpit-data.js
  → pmo-dashboard-data.js derived cbm summary
```

But never:

```text
pmo-dashboard-data.js → cbm-capability-cockpit-data.js
```

unless explicitly performed by a human-approved migration.

---

## 4. Allowed Auto-Sync Fields

The following fields may be automatically synchronized:

```text
cbm_cell_id
capability_name
capability_domain / domain
responsibility_layer / layer
canon_node
secondary_node
pmo_issue / issue
artifact
evidence_path
evolution_note
bottleneck
next_c4_task
last_reviewed_at
is_backwrite_complete
```

---

## 5. Human-Gated Fields

The following fields must not be upgraded automatically:

```text
current_status / status
evidence_strength
maturity_score
is_validated
validated_cells
operating_cells
compounding_cells
canonical_update
CONSTITUTION.md changes
```

Allowed automatic downgrade / warning:

```text
If evidence_path is missing, set false_green_risk = true.
If evolution_note is missing, set false_green_risk = true.
If status is validated but evidence_strength is weak, set false_green_risk = true.
```

Forbidden automatic upgrade:

```text
draft → validated
validated → operating
operating → compounding
medium → strong evidence
any update to CONSTITUTION.md
```

---

## 6. Conflict Policy

### 6.1 Field conflict

If two files disagree:

| Field Type | Priority |
|---|---|
| Canon boundary | `CONSTITUTION.md` |
| CBM identity / domain / layer | `docs/os-cbm-data.js` |
| Cockpit status / next P0 / weekly readiness | `docs/cbm-capability-cockpit-data.js` |
| Content asset PMO fields | `docs/pmo-dashboard-data.js` |
| Weekly narrative | `docs/weekly-cbm-review-latest.md` |

### 6.2 Status conflict

If a cell appears as `validated` in one source but `draft` in another:

```text
keep lower status
flag conflict
require human approval
```

### 6.3 Evidence conflict

If evidence strength conflicts:

```text
keep weaker evidence
flag conflict
require Evidence Review
```

### 6.4 Missing evidence

If a cell has status above `seed` but no evidence path:

```text
flag false_green_risk
block validation
```

---

## 7. Sync Report

Every sync run must write:

```text
docs/cbm-pmo-sync-latest.json
```

Minimum fields:

```yaml
generated_at:
source_files:
stage:
overall_maturity:
cell_count:
pilot_cell_count:
validated_cells:
false_green_risks:
conflicts:
warnings:
next_p0:
human_gates:
```

---

## 8. Script Contract

Script path:

```text
scripts/sync-cbm-pmo-data.js
```

The script may:

```text
read cbm-capability-cockpit-data.js
read os-cbm-data.js
read pmo-dashboard-data.js if present
write docs/cbm-pmo-sync-latest.json
print warnings
```

The script must not:

```text
write CONSTITUTION.md
upgrade any cell to validated
upgrade evidence to strong
publish external artifacts
silently overwrite cockpit data from PMO dashboard data
```

---

## 9. v1.1 Acceptance Criteria

v1.1 is complete when:

```text
1. This contract exists.
2. A sync script exists.
3. A sync report exists.
4. The Cockpit data records sync_contract status.
5. No pilot cell is upgraded to validated.
6. No CONSTITUTION.md change occurs.
7. #131 records the next P0.
```

---

## 10. Next P0 After v1.1

After this contract is in place, the next P0 should be one of:

```text
A. run first real client-project weekly review input
B. package Operator Skill into live multi-tool execution
C. create GitHub Action for weekly CBM review generation
```

Selection rule:

```text
choose the one that creates the first strong or repeated evidence without breaking human approval gates.
```
