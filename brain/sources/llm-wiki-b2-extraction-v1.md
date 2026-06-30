# llm-wiki · B2 Extraction v1

Date: 2026-06-30
Source Repo: moonstachain/llm-wiki
Target Module: B2 品类独创

## Purpose

从 `llm-wiki` 中抽取 B2 品类独创相关的历史语料候选，用于支持 #130 B2 小范围外部验证工作坊。

## Extraction Principle

```text
只抽取结构化候选，不把原始材料直接变成正典。
```

## Candidate 1 · B2 Core Claim

Source:

```text
_factory/yuanli-startup-greenbook-v0.2/volume-3-pinlei.md
```

Extract:

```text
你不在现有品类里竞争，而是创造一个无法分类的新品类，做品类王。
```

Use:

```text
B2 workshop opening
B2 naming-test criteria
```

## Candidate 2 · Comparison Escape

Source:

```text
_factory/yuanli-startup-greenbook-v0.2/volume-3-pinlei.md
```

Extract:

```text
从“和谁谁谁很像”变成“找不到对标”。找不到对标意味着用户没有比价坐标，因此你拥有定价权。
```

Use:

```text
B2 user repeatability test
B2 category sentence candidate
```

## Candidate 3 · B2 Sixteen-word Formula

Source:

```text
_factory/yuanli-startup-greenbook-v0.2/volume-3-pinlei.md
```

Extract:

```text
无法分类 / 重新定义 / 自带预算 / 独创品类
```

Use:

```text
B2 workshop scorecard
B2 category card
```

## Candidate 4 · Naming Criteria

Source:

```text
_factory/yuanli-startup-greenbook-v0.2/volume-3-pinlei.md
```

Extract:

```text
名称要简单、易传播，并且与已有品类有对比锚，让用户一秒理解它是新东西。
```

Use:

```text
B2 naming-test.md
B2 workshop-scorecard.md
```

## Candidate 5 · Budget Test

Source:

```text
_factory/yuanli-startup-greenbook-v0.2/volume-3-pinlei.md
```

Extract:

```text
用户是否天然带有该品类的消费预算？预算来自哪个心理账户？产品能切走多大一块？
```

Use:

```text
B2 purchase signal test
B2 validation-records.md
```

## Candidate 6 · Five-person Discussion Rule

Source:

```text
_factory/yuanli-startup-greenbook-v0.2/volume-3-pinlei.md
```

Extract:

```text
练习完成后，把答案放一周，找 5 个人讨论，再回来修正。
```

Use:

```text
#130 minimum validation logic
B2 external validation design
```

## Candidate 7 · Test Card Logic

Source:

```text
sources/transcripts/20251221132810-原力创业-day3-pm-转写智能优化版-1.md
```

Extract:

```text
验证赛道可不可行，要看人群够不够大、自己能拿到多少，以及过去三到六个月是否已经跑通信号。
```

Use:

```text
B2 validation-records.md
B3 model validation
C4 validation chain
```

## Candidate 8 · User Task Closed Loop

Source:

```text
sources/transcripts/20251221132810-原力创业-day3-pm-转写智能优化版-1.md
```

Extract:

```text
用户任务闭环验证是动作本身。先做测试卡，再把测试拆成更细的动作。
```

Use:

```text
B2 workshop-runbook.md
C4 action chain
```

## Candidate 9 · Human-machine Node Logic

Source:

```text
sources/transcripts/20251221132810-原力创业-day3-pm-转写智能优化版-1.md
```

Extract:

```text
每个节点都是人机结合，机可以是智能体或飞书，但不能一直靠人。
```

Use:

```text
C2/C4 writeback design
B2 workshop evidence processing
```

## Candidate 10 · Card Note Logic

Source:

```text
sources/transcripts/20251221132810-原力创业-day3-pm-转写智能优化版-1.md
```

Extract:

```text
有效卡片需要有核心概念、支撑概念、具体方法和详细例子。
```

Use:

```text
C2 schema
B2 user-language extraction
brain/sources indexing
```

## Assessment

The extracted material is strong enough to support B2 workshop preparation, but not enough to claim external validation completed.

Current impact:

```text
B2 stays at Validation 1/5.
B2 moves from workshop execution package ready to historical source preloaded.
#130 remains the critical next external validation task.
```

## Writeback Targets

- assets/B2-品类独创/user-language.md
- assets/B2-品类独创/validation-records.md
- docs/pmo-dashboard-data.js
