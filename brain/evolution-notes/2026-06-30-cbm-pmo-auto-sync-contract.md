# Evolution Note · CBM-PMO v1.1 Auto Sync Contract

Date: 2026-06-30

Issue: #131  
Previous EPIC: #106  
Contract: `docs/CBM-PMO-AUTO-SYNC-CONTRACT-v1.1.md`  
Checker: `scripts/sync-cbm-pmo-data.js`  
Report: `docs/cbm-pmo-sync-latest.json`

---

## 1. Input

```text
docs/cbm-capability-cockpit-data.js
docs/os-cbm-data.js
docs/pmo-dashboard-data.js
scripts/generate-weekly-cbm-review.js
```

---

## 2. Output

Created:

```text
docs/CBM-PMO-AUTO-SYNC-CONTRACT-v1.1.md
scripts/sync-cbm-pmo-data.js
docs/cbm-pmo-sync-latest.json
```

Updated:

```text
docs/cbm-capability-cockpit-data.js → v1.2-auto-sync-contract-ready
```

---

## 3. What Changed

Before:

```text
Cockpit and Weekly Review were ready, but multiple data sources could still drift.
```

After:

```text
CBM-PMO now has a source-of-truth hierarchy, sync direction, auto-sync field list, human-gated field list, conflict policy, and sync audit report.
```

---

## 4. What Was Strengthened

```text
1. pmo-dashboard-data.js is explicitly treated as a derived view, not CBM source of truth.
2. cbm-capability-cockpit-data.js is confirmed as durable Cockpit operational truth.
3. Status and evidence upgrades are human-gated.
4. Sync checker can report conflicts, false-green risks, warnings, and human gates.
5. The system can now detect data drift before it becomes governance drift.
```

---

## 5. What Was Not Yet Validated

```text
1. The sync checker has not yet been run by GitHub Actions.
2. No pilot cell has gained real client-side or repeated operating evidence.
3. No pilot cell should be marked validated.
4. Auto Sync Contract readiness is not operating maturity.
```

---

## 6. Status Decision

```text
Stage: Weekly Review Ready → Auto Sync Contract Ready
Maturity: 3.2 / 5 → 3.3 / 5
Validated Cells: 0
False Green Risks: 0
```

No pilot cell status upgrade.

---

## 7. Next P0

```text
first-strong-or-repeated-evidence
```

Options:

```text
A. run first real client-project weekly review input
B. run live multi-tool Operator Skill workflow
C. create GitHub Action for weekly CBM review generation
```

Recommended next decision:

```text
Choose the path that creates the first strong or repeated evidence while preserving human approval gates.
```

---

## 8. Canonical Boundary

Do not update `CONSTITUTION.md`.

Candidate learning only:

```text
A system becomes governable when its source-of-truth hierarchy is explicit and its upgrade gates are protected from automation drift.
```
