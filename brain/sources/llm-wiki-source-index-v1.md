# llm-wiki Source Index v1

Date: 2026-06-30
Source Repo: moonstachain/llm-wiki
Target Repo: moonstachain/yuanli-strategy-soul

## Purpose

把 `llm-wiki` 作为原力战略三部曲的外部 evidence source 接入 C2 一个大脑，但不直接把原始材料提升为正典。

## Source Policy

```text
llm-wiki = raw source / historical transcript / workshop evidence
原力战略仓库 = structured evidence / PMO / canon candidate / scorecard
```

原始材料只能通过以下路径进入正典系统：

```text
source -> evidence -> evolution -> canonical candidate -> human approval -> canon
```

## Confirmed Source Areas

| Source Area | Example Path | Potential Use |
|---|---|---|
| minutes transcripts | minutes/*/transcript.txt | workshop evidence, user language, C4 chain cases |
| B2 / 品类 materials | _factory/yuanli-startup-greenbook-v0.2/volume-3-pinlei.md | B2 naming, category logic, validation criteria |
| 原力创业 transcripts | sources/transcripts/20251221132810-原力创业-day3-pm-转写智能优化版-1.md | workshop scenes, test card language, user task validation |
| 原力OS architecture | sources/force-claw/原力os-整体架构.md | C2/C3/C4/PMO architecture references |
| talent-startup sources | sources/talent-startup/* | A/B module cases and teaching assets |

## B2 Candidate Sources

### 1. volume-3-pinlei.md

Path:

```text
_factory/yuanli-startup-greenbook-v0.2/volume-3-pinlei.md
```

Use:

```text
B2 category definition
B2 naming test criteria
B2 user repeatability criteria
```

### 2. 20251221132810 transcript

Path:

```text
sources/transcripts/20251221132810-原力创业-day3-pm-转写智能优化版-1.md
```

Use:

```text
testing card logic
user task validation
workshop scene evidence
```

### 3. 原力OS architecture

Path:

```text
sources/force-claw/原力os-整体架构.md
```

Use:

```text
C2 one brain
C3 map
C4 chain
PMO governance
```

## Current Extraction

First extraction file:

```text
brain/sources/llm-wiki-b2-extraction-v1.md
```

## Governance Rule

Do not bulk copy raw transcript into canon. Extract only structured snippets with source path and line references.
