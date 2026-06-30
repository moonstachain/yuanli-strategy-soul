# Yuanli Brain · SCHEMA

Date: 2026-06-30
Phase: C2 Markdown Brain Phase 2

## Purpose

本文件是原力大脑的轻量 schema。它把 `docs/C2-YUANLI-BRAIN-SCHEMA-v1.md` 转化为仓库内可直接执行的 Markdown Brain 规则。

## Core Types

| Type | 中文 | Path |
|---|---|---|
| canon | 正典 | CONSTITUTION.md, docs/ |
| module | 模块 | assets/<node>/ |
| concept | 概念 | brain/concepts/ |
| case | 案例 | brain/cases/ |
| assignment | 作业 | assets/*/assignments.md |
| script | 脚本 | assets/*/scripts.md |
| evidence | 证据 | brain/evidence/, assets/*/evidence.md |
| evolution_note | 演化笔记 | brain/evolution-notes/, assets/*/evolution.md |
| canonical_candidate | 正典候选 | brain/canonical-learning/ |
| decision | 决策 | brain/decisions/ |
| source | 外部资料 | brain/sources/ |
| playbook | 方法手册 | brain/playbooks/ |
| skill | Agent 技能 | brain/skills/ |

## Required Metadata

建议每个新增 brain 文件包含：

```yaml
type:
node:
module:
status:
source_strength:
created_at:
updated_at:
related:
writeback_target:
```

## Status

| Status | Meaning |
|---|---|
| seed | 初始资产，可用但未充分验证 |
| candidate | 有复用价值，等待审批 |
| approved | 可进入正典、课程或 Agent 规则 |
| rejected | 不进入正典，保留历史 |

## Source Strength

| Strength | Meaning |
|---|---|
| weak | 只有想法或草稿 |
| medium | 有文件、项目记录或内部 evidence |
| strong | 有真实学员、客户、市场反馈或多源验证 |

## Edges

原力大脑必须记录关系：

```text
canon_defines_module
module_contains_asset
case_explains_concept
evidence_validates_asset
evolution_updates_asset
gap_generates_task
task_produces_evidence
evidence_updates_maturity
maturity_generates_deepening
```

## Governance Rule

新增任何材料时，必须判断：

```text
它是什么类型？
它支撑哪个模块？
它的证据强度是什么？
它未来会在什么场景被调用？
它是否需要回写？
```
