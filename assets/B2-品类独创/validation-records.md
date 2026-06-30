# B2 · 品类独创 · Validation Records

PMO Issue: #129 / #130
Asset Type: validation-records
Date: 2026-06-30

## Purpose

记录 B2 品类独创从 seed asset package 进入小范围产品化验证的过程。

## Current Validation State

```text
Validation: 1 / 5
State: external evidence source discovered / coding pending
Boundary: llm-wiki June 2026 client and learner transcripts can now be used as external evidence source candidates, but B2 validation should not be upgraded until the evidence is coded into user-language records, naming/category samples, repeatable category sentences, and scorecard results.
```

## Historical Source Preload

Source:

```text
brain/sources/llm-wiki-b2-extraction-v1.md
```

Preloaded from llm-wiki:

```text
B2 core claim
comparison escape logic
sixteen-word formula
naming criteria
budget test
test card logic
user task closed loop
card note logic
```

This preload reduces workshop preparation risk, but it does not count as external validation.

## External Evidence Source Discovery · 2026-06-30

Source:

```text
brain/sources/llm-wiki-b2-external-evidence-v1.md
```

Decision:

```text
llm-wiki can be used as a valid external information source for B2 evidence.
```

Current boundary:

```text
It is evidence-source-ready, not validation-complete.
```

Why:

```text
June 2026 transcripts include real learner/client problem language, business contexts, category confusion, desired outcomes, and purchase-adjacent signals. However, #130 still requires structured extraction and scoring before B2 can move from Validation 1/5 to 2/5.
```

Initial source candidates:

| Source | Evidence Use |
|---|---|
| `moonstachain/llm-wiki/sources/transcripts/20260610-D1AM-M2_学员自我介绍与三天期望-逐字稿.md` | strongest immediate B2 user-language source |
| `moonstachain/llm-wiki/sources/transcripts/20260610-D1AM-M3_共性需求归纳·三天核心目标-智能纪要.md` | group-level needs aggregation candidate |
| `moonstachain/llm-wiki/sources/transcripts/20260609-M4_达哥分享AI业务整合+讲师·知识主权-逐字稿.md` | business integration / knowledge sovereignty candidate |
| `moonstachain/llm-wiki/sources/transcripts/20260618-D1AM-M11_卷卷用AI把想法变成接满的订单-逐字稿.md` | AI-to-order productization candidate |
| `moonstachain/llm-wiki/sources/transcripts/20260624-LXSH-M2_一句话口述,AI做出深度市场调研-智能纪要.md` | AI market research product language candidate |
| `moonstachain/llm-wiki/sources/transcripts/20260601-安全价值证明项目落地讨论-逐字稿.md` | client-project weekly review input candidate |
| `moonstachain/llm-wiki/sources/transcripts/20260612-原力OS与关键战役规划-逐字稿.md` | C2/C3/C4 real task validation candidate |

Preliminary B2 patterns from June transcript evidence:

| Pattern | Candidate Category Sentence | Status |
|---|---|---|
| 人工项目 → 人机协同系统 | 把爆款技能变成可复用的人机协同系统 | needs coding |
| 零散 demo → 精准建模路径 | 不是做更多 demo，而是把业务打成一套可持续调优的精准模型 | needs coding |
| 数据分析 → CEO 秒懂战略信号 | 把复杂经营数据变成 CEO 秒懂的战略信号 | needs coding |
| 个人经验 → 可持续 IP / 组织技能 | 把个人爆点技能升级成可持续放大的组织技能 | needs coding |
| 复杂行业知识 → 行业 AI/IP 框架 | 把复杂行业知识沉淀成可复用的行业 AI/IP 框架 | needs coding |

## Candidate Naming Set

Source:

```text
assets/B2-品类独创/candidate-names.md
```

Current candidate names:

```text
原力品类卡
独创品类工作坊
无法分类实验室
```

These are testing candidates only, not final names.

## Why B2 First

C2 Trial 1 判断：B2 可以进入小范围产品化验证，但不应直接规模化售卖。

关键缺口已经补成验证执行包：

```text
naming-test.md
user-language.md
validation-records.md
workshop-runbook.md
participant-screening.md
workshop-scorecard.md
live-validation-checklist.md
llm-wiki-b2-extraction-v1.md
llm-wiki-b2-external-evidence-v1.md
candidate-names.md
```

## Validation Goal

把 B2 从：

```text
Seed+ / P0 / Validation 1/5
```

推进到：

```text
External Validation Started / Validation 2/5 or higher
```

## Execution Package

| File | Purpose |
|---|---|
| naming-test.md | 测试品类名称是否清楚、相关、可复述 |
| user-language.md | 采集目标用户原话、旧品类词、购买信号 |
| validation-records.md | 记录验证过程和评分变化 |
| workshop-runbook.md | 90-120 分钟工作坊执行流程 |
| participant-screening.md | 筛选 5-10 个高质量目标用户 |
| workshop-scorecard.md | 判断是否通过验证并是否提升 B2 Validation |
| live-validation-checklist.md | 现场执行前中后检查 |
| llm-wiki-b2-extraction-v1.md | 历史语料候选 |
| llm-wiki-b2-external-evidence-v1.md | June 2026 external transcript source candidates |
| candidate-names.md | 现场测试候选命名 |

## Minimum Validation Design

| Item | Design |
|---|---|
| Participants | 5-10 个目标用户 |
| User Type | 专家型个体、早期创业者、传统行业转型者 |
| Duration | 90-120 分钟 |
| Output | 每人完成一张 B2 品类独创卡 |
| Naming Test | 3 个候选名称 |
| Language Capture | 每人至少 3 条原话 |
| Pass Signal | 至少 3 人能复述同一句品类定义 |

## Pass Criteria

```text
至少 5 个命名样本
至少 5 条用户原话
至少 3 个可复述的一句话品类定义
至少 1 个明确付费或进一步了解信号
```

## Trial 1

Status:

```text
fieldwork source discovered; evidence coding pending
```

Next:

```text
Extract B2 evidence from llm-wiki June 2026 transcripts before scheduling any additional live workshop.
```

## Writeback Rule

完成试跑或证据编码后更新：

```text
assets/B2-品类独创/evidence.md
assets/B2-品类独创/user-language.md
assets/B2-品类独创/workshop-scorecard.md
brain/WRITEBACK-LOG.md
docs/TRILOGY-ASSET-MATURITY-SCORECARD-v1.md
docs/pmo-dashboard-data.js
```
