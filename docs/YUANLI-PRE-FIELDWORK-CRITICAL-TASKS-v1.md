# 原力战略三部曲 · 外场前关键任务 v1

Date: 2026-06-30
Context: #130 B2 外部验证工作坊暂缓，等待真实外出场景执行

## Executive Decision

#130 不应被内部工作替代。

```text
#130 = fieldwork task
必须等待真实目标用户参与。
```

在 #130 执行前，当前可继续推进的是“外场前内业”：让未来工作坊更准、更快、更容易回写。

## Current Stage

```text
Pre-External Validation OS
Overall Maturity: L3.6 / 5
```

## Strategic Goal

项目目标仍然是：

```text
把创始人的不可复制性，转化为可复利、可验证、可回写、可传承的事业操作系统。
```

## What Cannot Be Done Before Fieldwork

以下事情不能在内部完成：

```text
真实用户复述测试
真实用户命名反应
真实购买或继续了解信号
B2 Validation 1/5 -> 2/5
```

## What Can Be Done Before Fieldwork

### P0 · Source Ingestion Governance

建立 llm-wiki / 逐字稿 / 历史工作坊材料的 C2 接入规则。

Outputs:

```text
docs/C2-SOURCE-INGESTION-PROTOCOL-v1.md
brain/sources/llm-wiki-source-index-v1.md
brain/sources/llm-wiki-b2-extraction-v1.md
```

### P0 · B2 Historical Evidence Expansion

继续从 llm-wiki 抽取 B2 相关：

```text
用户语言
命名反应
品类困惑
预算信号
测试卡逻辑
```

Boundary:

```text
只能叫 historical source preload，不能叫 external validation。
```

### P1 · B2 Workshop Candidate Set

在真实用户来之前，准备：

```text
3 个候选品类命名
3 条候选一句话定义
3 个对比锚
3 个预算假设
```

### P1 · C2 Writeback Dry Run

用 llm-wiki 历史语料跑一次非外部验证 dry run：

```text
source -> extraction -> user-language -> validation-records -> PMO
```

### P1 · PMO Boundary Cleanup

PMO 必须清楚区分：

```text
historical source preloaded
workshop ready
external validation completed
```

## Next Critical Tasks

| Priority | Task | Output | Maturity Impact |
|---|---|---|---|
| P0 | C2 Source Ingestion Protocol | docs/C2-SOURCE-INGESTION-PROTOCOL-v1.md | 提升治理质量，不提升 B2 validation |
| P0 | B2 Historical Evidence Expansion | brain/sources/llm-wiki-b2-extraction-v2.md | 降低 #130 准备风险 |
| P1 | B2 Candidate Naming Set | assets/B2-品类独创/candidate-names.md | 提升工作坊可执行性 |
| P1 | C2 Writeback Dry Run | brain/evidence/llm-wiki-b2-dry-run.md | 提升 C2 可审计性 |
| Field | #130 Workshop | B2 validation-records.md | 可能提升 B2 Validation 1/5 -> 2/5 |

## Current Recommendation

在外出前，先执行：

```text
1. C2 Source Ingestion Protocol
2. B2 Candidate Naming Set
3. B2 Historical Evidence Expansion v2
```

这样 #130 真正开场时，不是临时准备，而是带着候选命名、历史语料、记录模板和回写规则进入现场。
