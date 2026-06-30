# C2 · Source Ingestion Protocol v1

Date: 2026-06-30
Module: C2 一个大脑

## Purpose

定义外部语料、逐字稿、历史工作坊材料如何进入原力 OS，尤其是 `llm-wiki` 这类本地知识库。

## Core Rule

```text
原始语料不是正典。
```

任何外部 source 必须经过：

```text
source -> extraction -> evidence -> evolution -> canonical candidate -> human approval -> canon
```

## Accepted Source Types

| Type | Example | Target |
|---|---|---|
| transcript | minutes/*/transcript.txt | user language / evidence |
| workshop notes | sources/transcripts/* | cases / validation records |
| architecture note | sources/force-claw/* | C2/C3/C4 evolution |
| greenbook draft | _factory/* | teaching asset / canon candidate |
| synthesis | syntheses/* | concept / candidate |

## Ingestion Stages

### Stage 1 · Discover

找到 source 文件，记录：

```text
repo
path
title
source type
related module
```

### Stage 2 · Classify

把材料归入 A1-C4：

```text
A: 原力资产
B: 原力创业
C: 原力OS
```

### Stage 3 · Extract

只抽取结构化片段：

```text
用户原话
案例片段
命名反应
预算信号
混淆点
方法论句子
可回写学习
```

### Stage 4 · Map

每个片段必须标明：

```text
source path
line range if available
module
use case
writeback target
confidence
```

### Stage 5 · Writeback

写入对应目标：

```text
brain/sources/
assets/<module>/user-language.md
assets/<module>/validation-records.md
assets/<module>/evidence.md
brain/WRITEBACK-LOG.md
```

### Stage 6 · Boundary Check

写回后必须标记：

```text
historical source preload
internal dry run
external validation
canon candidate
approved canon
```

## Evidence Strength

| Strength | Meaning |
|---|---|
| weak | 只有观点或内部草稿 |
| medium | 有历史语料、工作坊记录或项目文件 |
| strong | 有真实用户试跑、客户反馈、付费/复述信号 |

## Prohibited Actions

```text
不要把整篇逐字稿复制进正典仓库
不要把历史语料当成外部验证完成
不要把个人判断当成用户原话
不要跳过 evidence 直接进入 canon
```

## Required Output Format

每次 extraction 需要：

```md
# Source Extraction

## Source
repo:
path:
lines:

## Module

## Extract

## Type
user-language / evidence / case / concept / candidate

## Use

## Writeback Target

## Boundary
```

## PMO Rule

PMO 必须区分：

```text
source_preloaded
workshop_ready
external_validation_started
external_validation_completed
```

## Current First Use

当前第一批应用：

```text
llm-wiki -> B2 品类独创 -> #130 small validation workshop
```
