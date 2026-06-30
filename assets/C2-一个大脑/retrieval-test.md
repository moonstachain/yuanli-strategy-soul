# C2 · 一个大脑 · Retrieval Test

Date: 2026-06-30
PMO Issue: #95
Priority: P0.5

## Purpose

验证 C2 是否能从已有仓库材料中检索出正确上下文，并形成战略判断。

## Test Protocol

每个测试问题都要输出：

```text
Direct Answer
Evidence
Related Modules
Maturity State
Gap Analysis
Next C4 Action
Writeback Suggestion
```

## Test 1 · B2 产品化判断

### Query

```text
B2 品类独创现在是否可以产品化？
```

### Expected Sources

- assets/B2-品类独创/
- docs/TRILOGY-ASSET-MATURITY-SCORECARD-v1.md
- docs/TRILOGY-CONTENT-ASSET-INDEX-v1.md
- docs/C2-BRAIN-QUERY-PROTOCOL-v1.md

### Expected Answer

B2 可以进入小范围产品化验证，但不应直接规模化售卖。

原因：B2 已有 seed asset package，成熟度 27/40，优先级 P0；但真实验证仍不足，需要 naming-test.md 和 user-language.md。

## Test 2 · C2 缺口判断

### Query

```text
C2 现在距离产品化还缺什么？
```

### Expected Sources

- docs/C2-ONE-BRAIN-ROADMAP-v1.md
- docs/TRILOGY-ASSET-MATURITY-SCORECARD-v1.md
- assets/C2-一个大脑/evolution.md

### Expected Answer

C2 已达到 Strategy+ 与 P0.5，但 validation 仍为 1/5。下一步需要 retrieval-test、tagging-template、writeback-examples、validation-records 和真实查询试跑。

## Test 3 · 回写判断

### Query

```text
一个真实学员案例应该写回哪里？
```

### Expected Sources

- docs/C2-BRAIN-WRITEBACK-PROTOCOL-v1.md
- brain/SCHEMA.md
- brain/WRITEBACK-LOG.md

### Expected Answer

根据材料类型，写入 brain/cases/、对应模块 real-cases 或 evidence。如果形成可复用学习，进入 evolution note；如果可能更新正典，进入 canonical candidate。

## Pass Criteria

```text
至少 3 个查询全部能给出结论、证据、缺口、下一步和回写建议。
```

## Current State

Seed test designed. Real query execution pending.
