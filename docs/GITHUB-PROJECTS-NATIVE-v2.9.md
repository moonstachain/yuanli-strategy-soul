# GitHub Projects Native Setup v2.9

## Goal

Configure Yuanli PMO OS as a native GitHub Projects board using the repository issue model.

## Boundary

The current connector does not expose GitHub Projects field/view creation. This setup must be performed in GitHub Projects UI or through GraphQL API.

## Project name

```text
Yuanli PMO OS
```

## Required fields

| Field | Type | Options |
|---|---|---|
| Canon Node | single select | A1-A4, B1-B4, C1-C4, PMO |
| Work Type | single select | gap, task, evidence, docs, script, page, review |
| Strategic Layer | single select | strategy, design, execution, validation, recursive |
| Capability Domain | single select | matrix, user, content, product, delivery, growth, data, moat |
| Status | single select | idea, ready, in_progress, qa, accepted, missing, rejected, done, blocked |
| PMO Health | single select | green, yellow, red |
| Priority | single select | P0, P1, P2, P3 |
| Gap Score | number | 0-100 |
| Evidence Strength | single select | none, weak, medium, strong |
| Agent Level | single select | L0, L1, L2, L3, L4 |
| Approval Gate | single select | none, human_review, publish, external_write, canonicalize |
| Writeback Target | text | docs, brain, evidence, project |
| Acceptance State | single select | draft, accepted, missing, rejected |
| Canonical State | single select | none, candidate, approved, rejected |

## Six native views

### 1. Strategic Cockpit

Layout: table
Group by: PMO Health
Sort: Priority asc, Gap Score desc
Fields: Canon Node, Work Type, PMO Health, Priority, Gap Score, Evidence Strength, Next Action.

### 2. C3 Gap Ranking

Layout: table
Filter: Work Type = gap
Sort: Gap Score desc
Fields: Canon Node, Capability Domain, Strategic Layer, Gap Score, Evidence Strength, Next C4 Task.

### 3. C4 Execution Board

Layout: board
Filter: Work Type = task
Group by: Status
Fields: Source Gap, Acceptance State, Evidence Strength, Writeback Target.

### 4. Evidence Ledger

Layout: table
Filter: Work Type = evidence
Sort: updated desc
Fields: Evidence Strength, Acceptance State, Evidence Path, Next Reuse.

### 5. Evolution Review

Layout: table
Filter: Work Type = review OR Canonical State != none
Fields: Evolution Note, Canonical State, Approval Gate, Writeback Target.

### 6. Roadmap / Milestone

Layout: roadmap
Group by: release milestone
Milestones: v2.7.1, v2.8, v2.9, v3.0, v3.1, v3.2, v3.3.

## Issue mapping

- #70-#72: v2.7.1 Data Sync Patch
- #73-#75: v2.8 Interactive Six-view Drilldown
- #76-#78: v2.9 GitHub Projects Native Setup
- #79-#81: v3.0 PMO Metrics Engine
- #82-#84: v3.1 Task Bridge
- Future: v3.2 Evidence Acceptance Loop
- Future: v3.3 Canonical Learning Gate

## Manual setup steps

1. Open GitHub repository.
2. Create a new Project named `Yuanli PMO OS`.
3. Add issues #63-#85.
4. Create required custom fields.
5. Create six views using the table above.
6. Save each view.
7. Use PMO Dashboard as public read-only cockpit and GitHub Projects as native operational board.
