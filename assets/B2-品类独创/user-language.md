# B2 · 品类独创 · User Language

PMO Issue: #129 / #130
Asset Type: user-language
Date: 2026-06-30

## Purpose

采集目标用户对新品类、新问题和新名字的原话，避免 B2 品类独创停留在创始人自嗨命名。

## Collection Rule

```text
先记录用户原话，再做模型解释。
```

## Historical Source Preload

Source:

```text
brain/sources/llm-wiki-b2-extraction-v1.md
```

This preload is not external validation completion. It is historical source preparation for #130.

## External Fieldwork Source

Source:

```text
brain/sources/llm-wiki-b2-external-evidence-v1.md
```

Decision:

```text
llm-wiki June 2026 transcripts can be used as external user-language source candidates for B2.
```

Boundary:

```text
The source is valid, but raw transcripts must be coded into structured records before B2 validation can be upgraded.
```

## Preloaded Language / Criteria

### 1. 品类核心命题

```text
不在现有品类里竞争，而是创造一个无法分类的新品类。
```

Use:

```text
workshop opening
repeatability test
```

### 2. 对标逃逸

```text
从“和谁谁谁很像”变成“找不到对标”。
```

Use:

```text
category language test
confusion detection
```

### 3. 十六字诀

```text
无法分类 / 重新定义 / 自带预算 / 独创品类
```

Use:

```text
category card
scorecard criteria
```

### 4. 命名标准

```text
简单、易传播、有对比锚。
```

Use:

```text
naming-test.md
workshop-scorecard.md
```

### 5. 预算测试

```text
用户是否天然带有消费预算？预算来自哪个心理账户？
```

Use:

```text
purchase signal test
```

### 6. 测试卡逻辑

```text
先判断人群够不够大、能拿到多少、是否已经有跑通信号，再拆成测试卡。
```

Use:

```text
validation-records.md
C4 action chain
```

## June 2026 External Language Candidates

These are preliminary coded patterns from `moonstachain/llm-wiki`. They must be reviewed against the raw source before being counted as #130 pass evidence.

| Pattern | User Language Cluster | B2 Interpretation | Candidate Repeatable Sentence | Status |
|---|---|---|---|---|
| 人工项目 → 人机协同系统 | 人工为主、技术融合、一部分工作自动化、爆款技能加自动化流程 | 用户不是只想学 AI 工具，而是想把有效工作模块变成可运行系统 | 把爆款技能变成可复用的人机协同系统 | needs verification |
| 零散 demo → 精准建模路径 | demo 后续难调、地基没打好、每调一个部分都累、All in one、人类友好 | 用户要的是业务底层模型，而不是更多临时 demo | 不是做更多 demo，而是把业务打成一套可持续调优的精准模型 | needs verification |
| 数据分析 → CEO 秒懂战略信号 | 经营表盘、指导未来 2-3 年、业务决策者秒懂、不看数据只看结果、半自动化 | 用户要的是经营决策信号，不是普通数据报表 | 把复杂经营数据变成 CEO 秒懂的战略信号 | needs verification |
| 个人经验 → 可持续 IP / 组织技能 | 回溯项目资源经验、把过往自己理出来、AI 重构自己、可持续 IP、无限放大 | 用户要把自身经验转成可复制的 IP 与组织能力 | 把个人爆点技能升级成可持续放大的组织技能 | needs verification |
| 复杂行业知识 → 行业 AI/IP 框架 | 行业规则复杂、多年积累但不够准确、集成好东西服务世界、AIP 框架、跑路径 | 用户要的是行业知识、客户数据与规则的可复用框架 | 把复杂行业知识沉淀成可复用的行业 AI/IP 框架 | needs verification |

## Interview Target

优先选择：

```text
专家型个体
早期创业者
传统行业转型者
高认知内容创业者
有明确付费能力的人
```

## Interview Questions

### 1. Problem Language

```text
你现在最想解决的这个问题，会怎么用自己的话描述？
你一般会在什么时候感到这个问题最严重？
你之前用过哪些旧方法解决？
为什么旧方法不够？
```

### 2. Category Language

```text
你觉得这类服务/产品应该叫什么？
你会把它归到哪个已知类别？
你觉得它不像什么？
```

### 3. Naming Response

```text
听到这个名字，你第一反应是什么？
你觉得它是给谁的？
它解决什么问题？
你愿意把它转述给别人吗？怎么说？
```

### 4. Purchase Signal

```text
什么情况下你愿意付费？
你会拿它和什么方案比较？
你觉得它最有价值的地方是什么？
```

## Raw Notes Template

```md
# User Language Record

## User Type

## Context

## Original Problem Words

## Old Category Words

## Naming Reaction

## Repeatable Sentence

## Confusion Points

## Purchase Signal

## Analyst Notes
```

## Pattern Extraction

每 5 个用户访谈后，提炼：

```text
高频问题词
高频旧品类词
高频误解点
最容易复述的一句话
最有购买信号的表达
```
