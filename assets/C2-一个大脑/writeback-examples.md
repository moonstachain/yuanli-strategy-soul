# C2 · 一个大脑 · Writeback Examples

Date: 2026-06-30
PMO Issue: #95
Priority: P0.5

## Purpose

提供 C2 原力大脑的回写样例，帮助判断不同输入应该写回哪里。

## Example 1 · 学员案例

### Input

学员通过 A1 作业发现自己的长期母体是“复杂系统结构化”。

### Decision

这是案例，同时可能验证 A1 作业有效。

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

## Example 2 · 客户试跑反馈

### Input

B2 品类独创工作坊中，5 个客户完成命名测试，其中 3 个能清晰复述新品类一句话。

### Decision

这是 B2 的真实验证材料。

### Writeback

```text
assets/B2-品类独创/validation-records.md
assets/B2-品类独创/evidence.md
docs/TRILOGY-ASSET-MATURITY-SCORECARD-v1.md
```

### Level

```text
L2 Evidence + Maturity Update
```

---

## Example 3 · 系统复盘

### Input

一次 PMO 复盘发现：有 evidence 但没有更新 maturity scorecard。

### Decision

这是系统治理缺口。

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

## Example 4 · 正典候选

### Input

多次试跑发现：所有高质量模块都必须同时有“作业 + 证据 + 回写目标”。

### Decision

这可能成为内容资产正典规则。

### Writeback

```text
brain/canonical-learning/
docs/CANONICAL-APPROVAL-RUBRIC.md
```

### Level

```text
L4 Canonical Candidate
```

## Use Rule

每次 C2 产生判断后，必须问：

```text
这次判断是否产生了新证据？
是否形成了可复用学习？
是否需要更新成熟度？
是否应该生成 C4 task？
是否可能进入正典候选？
```
