# C2 · 一个大脑 · Writeback Examples

> Module: C2 一个大脑  
> Issue: #95 / #141  
> Date: 2026-06-30  
> Phase: Yuanli Brain Query Pack + Resolver Seed v1

---

## 0. Purpose

```text
Provide C2 writeback examples so each strategic answer can become system learning.
```

C2 must ask after every judgment:

```text
Does this produce new evidence?
Does it create or update a gap?
Does it suggest a C4 task?
Does it change maturity?
Does it create a skill candidate?
Does it require human gate?
```

---

## 1. Writeback Levels

```text
L1 Source Writeback: source, note, transcript, or artifact indexing
L2 Evidence Writeback: evidence / validation records update
L3 Evolution Writeback: reusable learning / process change
L4 Skill Candidate Writeback: repeated workflow candidate
L5 Canonical Candidate Writeback: possible canon change, human approval required
```

---

## 2. Example 1 · 学员案例

### Input

```text
学员通过 A1 作业发现自己的长期母体是“复杂系统结构化”。
```

### Decision

```text
This is a case and may validate A1 assignment effectiveness.
```

### Writeback

```text
brain/cases/
assets/A1-发现母体/real-learner-cases.md
assets/A1-发现母体/evidence.md
```

### Level

```text
L2 Evidence Writeback
```

---

## 3. Example 2 · B2 客户试跑反馈

### Input

```text
B2 品类独创工作坊中，5 个客户完成命名测试，其中 3 个能清晰复述新品类一句话。
```

### Decision

```text
This is B2 real validation material.
```

### Writeback

```text
assets/B2-品类独创/validation-records.md
assets/B2-品类独创/evidence.md
assets/B2-品类独创/user-language.md
assets/B2-品类独创/workshop-scorecard.md
docs/TRILOGY-ASSET-MATURITY-SCORECARD-v1.md
```

### Level

```text
L2 Evidence + Maturity Update
```

Human gate:

```text
Validation score upgrade must be approved by Ming.
```

---

## 4. Example 3 · 系统复盘

### Input

```text
一次 PMO 复盘发现：有 evidence 但没有更新 maturity scorecard。
```

### Decision

```text
This is a system governance gap.
```

### Writeback

```text
brain/evolution-notes/
docs/PMO-TRILOGY-CONTENT-SYNC-v1.md
scripts/sync-pmo-dashboard.js
```

### Level

```text
L3 Evolution Writeback
```

---

## 5. Example 4 · 正典候选

### Input

```text
多次试跑发现：所有高质量模块都必须同时有“作业 + 证据 + 回写目标”。
```

### Decision

```text
This may become a content asset canon rule.
```

### Writeback

```text
brain/canonical-learning/
docs/CANONICAL-APPROVAL-RUBRIC.md
```

### Level

```text
L5 Canonical Candidate
```

Human gate:

```text
Do not update CONSTITUTION.md without explicit approval.
```

---

## 6. Example 5 · B2 Query Pack + Resolver Test

### Input

```text
C2 answered the B2 productization readiness query and concluded:
B2 can enter small-scope productization validation but is not scaled-product ready.
```

### Decision

```text
This is a C2 Think Mode + Resolver test. It creates a query result, identifies gaps, and proposes next C4 task.
```

### Writeback

```text
assets/C2-一个大脑/retrieval-test.md
brain/QUERY-EXAMPLES.md
brain/GAP-TYPES.md
brain/CANON-GRAPH.md
brain/RESOLVER.md
brain/SKILL-CANDIDATES.md
assets/B2-品类独创/validation-records.md after real controlled test
brain/WRITEBACK-LOG.md after real execution
```

### Level

```text
L3 Evolution + L4 Skill Candidate Writeback
```

### Gap Types

```text
validation_gap
repeatability_gap
productization_gap
skill_gap
```

### Human Gate

```text
Do not upgrade B2 to Validation 3/5 until controlled naming and repeatability testing is completed.
Do not create active SKILL.md until 3 samples and human review exist.
```

---

## 7. Example 6 · Skillify Candidate

### Input

```text
The same two-sentence category creation workflow appears across B2 cases, workshop scripts, and C2 query result.
```

### Decision

```text
This may become a reusable Yuanli skill candidate.
```

### Writeback

```text
brain/SKILL-CANDIDATES.md
future skills/yuanli-category-two-sentence/SKILL.md
assets/C2-一个大脑/skillify-examples.md
```

### Level

```text
L4 Skill Candidate Writeback
```

Promotion gate:

```text
At least 3 before/after examples + one human review + no privacy issue.
```

---

## 8. Use Rule

Every C2 answer must end with:

```yaml
writeback_proposal:
  level:
  target_files:
  creates_new_evidence:
  updates_gap:
  creates_c4_task:
  creates_skill_candidate:
  maturity_update_needed:
  human_gate:
```
