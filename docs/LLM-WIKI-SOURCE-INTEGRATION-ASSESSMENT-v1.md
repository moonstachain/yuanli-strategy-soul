# llm-wiki · 信息源接入评估 v1

Date: 2026-06-30
Source Repo: moonstachain/llm-wiki
Target Repo: moonstachain/yuanli-strategy-soul

## Access Result

`moonstachain/llm-wiki` is readable through GitHub connector.

It is a private knowledge repo and appears to contain:

```text
minutes/*/transcript.txt
sources/transcripts/*
sources/force-claw/*
sources/talent-startup/*
_factory/yuanli-startup-greenbook-*
syntheses/*
```

## Initial Finding

This repo is highly valuable for 原力战略三部曲. It is not only reference material. It can become the main source for:

```text
real workshop evidence
user language
case material
module validation
C2 brain retrieval tests
B2 external validation preparation
```

## Evidence Samples

### 1. Raw transcript source

Example path:

```text
minutes/obcnx5yc48ge9fo7svz8wj62/transcript.txt
```

This file contains timestamped multi-speaker transcript and keywords such as:

```text
企业家、流量、机会、闭环、链路、产品、模块、正反馈、客户、信号、战略、自动化增强、战略咨询
```

Potential use:

```text
C2 retrieval test
C4 chain case
B1/B3/B4 business model discussion evidence
```

### 2. 原力OS architecture source

Example path:

```text
sources/force-claw/原力os-整体架构.md
```

This file contains prior 原力OS architecture thinking, including Claude / Codex / Ray roles, GitHub / Feishu / local canonical positioning, and clone / satellite architecture.

Potential use:

```text
C2 一个大脑
C3 一张地图
C4 一条链路
PMO governance
Agent-readable operating map
```

### 3. B2 / 品类相关 source

Search found:

```text
_factory/yuanli-startup-greenbook-v0.2/volume-3-pinlei.md
sources/transcripts/20251221132810-原力创业-day3-pm-转写智能优化版-1.md
sources/talent-startup/2026-03-北京-原力创业.md
```

Potential use:

```text
B2 naming-test
B2 user-language
B2 validation-records
B2 real workshop examples
```

## Strategic Value

For the current project stage, `llm-wiki` can solve the biggest bottleneck:

```text
真实验证密度不足。
```

It can provide existing real-world material before running new workshops.

## Recommended Integration Method

Do not copy everything into the canonical repo.

Use a gated C2 ingestion process:

```text
1. Discover source files
2. Classify by module A1-C4
3. Extract user language / cases / evidence snippets
4. Write only structured outputs into yuanli-strategy-soul
5. Keep raw transcript in llm-wiki as source of truth
6. Cite source path and line range when evidence is used
```

## C2 Schema Mapping

| llm-wiki Material | Yuanli Brain Type | Target |
|---|---|---|
| transcript.txt | source / transcript | brain/sources or evidence refs |
| workshop transcript | case / user_language | B2/B3/A4 validation |
| 原力OS architecture note | source / concept | C2/C3/C4 evolution |
| greenbook volume | source / canon candidate | module teaching / scripts |
| customer dialogue | case / evidence | validation records |

## Immediate Next Step

Create a source index:

```text
brain/sources/llm-wiki-source-index-v1.md
```

Then run a small extraction for B2:

```text
Extract 5-10 B2-relevant user language or workshop evidence candidates from llm-wiki.
```

## Boundary

`llm-wiki` should be treated as evidence source, not automatically as canon.

Raw materials must pass:

```text
source -> evidence -> evolution -> canonical candidate -> human approval -> canon
```
