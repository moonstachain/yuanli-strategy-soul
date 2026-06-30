# CBM Daily Iteration Review Spec v1

Date: 2026-06-30
Parent Issue: #138
Parent EPIC: #134

## 0. Executive Decision

CBM Review frequency upgrades from weekly-only to daily iteration.

Daily iteration means every day the system prepares a governance review draft that checks CBM cell changes, evidence movement, false-green risk, next P0, and human approval gates.

It does not mean automatic maturity upgrade, automatic canon rewrite, or external publishing.

## 1. Purpose

The daily review shortens the feedback loop:

```text
real client / learner evidence
-> C2 retrieval and writeback
-> C3 capability gap
-> C4 task
-> evidence review
-> PMO / CBM status
```

## 2. Source of Truth

Primary source:

```text
docs/cbm-capability-cockpit-data.js
```

Supporting sources:

```text
docs/cbm-pmo-sync-latest.json
docs/pmo-dashboard-data.js
brain/WRITEBACK-LOG.md
brain/evidence/
brain/evolution-notes/
```

Canon source:

```text
CONSTITUTION.md
```

Hard rule:

```text
The daily review must not update CONSTITUTION.md.
```

## 3. Daily Review Questions

Each daily review must answer:

```text
1. Which CBM cells changed in the last 24h?
2. Which issues completed without evidence?
3. Which cells have false-green risk?
4. Which external evidence arrived?
5. Which C3 gaps should be generated?
6. Which C4 tasks are ready?
7. What is the next daily P0?
8. What needs human approval?
```

## 4. Output Files

```text
docs/daily-cbm-review-latest.md
brain/evolution-notes/YYYY-MM-DD-daily-cbm-review.md
```

## 5. Boundary

The daily review may read cockpit and sync data, then generate a review draft and an evolution note.

The daily review must not:

```text
upgrade a cell to validated / operating / compounding
upgrade evidence strength to strong
write CONSTITUTION.md
publish external artifacts
auto-close human decision issues
auto-approve canon changes
```

## 6. Human-gated Fields

These fields remain human-gated:

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

## 7. Cadence

Default cadence:

```text
Daily review draft.
```

Manual review remains allowed whenever a P0 evidence event occurs.

## 8. Acceptance Criteria

```text
1. Spec exists.
2. Script exists: scripts/generate-daily-cbm-review.js
3. Daily review artifact path exists.
4. The generated review is review-draft only.
5. Human-gated fields are not auto-upgraded.
6. The generated review can point to the next daily P0.
```

## 9. First Next P0 Logic

Initial next P0 should prioritize evidence creation over dashboard decoration:

```text
#132 B2 External Evidence Coding
```

Reason:

```text
It converts existing June 2026 fieldwork from llm-wiki into B2 validation evidence, and creates the first bridge from external evidence to C2/C3/C4 PMO execution.
```
