# C2 · Yuanli Brain Schema v1

Date: 2026-06-30
Module: C2 一个大脑

## Purpose

定义原力大脑的数据类型、目录形态、元数据字段和关系边，让原力 OS 的内容、证据和行动可以被 AI 与 PMO 稳定调用。

## Brain Principle

```text
不是所有材料都能进入正典。
不是所有记忆都有同等权重。
不是所有输出都值得回写。
```

因此 C2 必须先有 schema。

## Core Types

| Type | 中文 | Purpose | Example Path |
|---|---|---|---|
| canon | 正典 | 已批准的核心原则、定义和结构 | docs/, CONSTITUTION.md |
| module | 模块 | A1-C4 正典模块 | assets/C2-一个大脑/ |
| concept | 概念 | 可复用的理论、模型、判断 | brain/concepts/ |
| case | 案例 | 支撑概念的真实或教学案例 | brain/cases/ |
| assignment | 作业 | 学员可执行练习 | assets/*/assignments.md |
| script | 脚本 | 短视频、直播、录播讲稿 | assets/*/scripts.md |
| evidence | 证据 | 验证某项工作或判断的材料 | brain/evidence/ |
| evolution_note | 演化笔记 | 复盘后的系统学习 | brain/evolution-notes/ |
| canonical_candidate | 正典候选 | 尚未批准的可复用学习 | brain/canonical-learning/ |
| decision | 决策 | 重要战略选择和理由 | brain/decisions/ |
| project | 项目 | PMO 管理的执行单元 | GitHub Issues |
| client | 客户 | 客户、学员、案例主体 | brain/clients/ |
| student_output | 学员输出 | 作业、反馈、试跑记录 | brain/student-output/ |
| market_signal | 市场信号 | 外部趋势、客户语言、竞争变化 | brain/market-signals/ |
| source | 外部资料 | 书籍、视频、报告、GitHub、网页 | brain/sources/ |
| playbook | 方法手册 | 可执行 SOP 与操作协议 | brain/playbooks/ |
| skill | Agent 技能 | Agent 可调用的操作规则 | brain/skills/ |

## Required Frontmatter

建议每个 brain page 使用 frontmatter：

```yaml
type: evidence
node: C2
module: 一个大脑
status: seed | candidate | approved | rejected
source_strength: weak | medium | strong
created_at: 2026-06-30
updated_at: 2026-06-30
related:
  - C1
  - C3
writeback_target:
  - docs/TRILOGY-ASSET-MATURITY-SCORECARD-v1.md
```

## Relationship Edges

原力大脑的关键不是文件，而是关系。

| Edge | Meaning |
|---|---|
| canon_defines_module | 正典定义模块 |
| module_contains_asset | 模块包含内容资产 |
| asset_supports_teaching | 资产支持教学 |
| case_explains_concept | 案例解释概念 |
| assignment_tests_capability | 作业测试能力 |
| evidence_validates_asset | 证据验证资产 |
| evolution_updates_asset | 演化笔记更新资产 |
| candidate_promotes_to_canon | 候选学习可能进入正典 |
| gap_generates_task | 缺口生成任务 |
| task_produces_evidence | 任务产生证据 |
| evidence_updates_maturity | 证据更新成熟度 |
| maturity_generates_deepening | 成熟度生成加厚任务 |

## Source Strength

| Strength | Definition |
|---|---|
| weak | 只有想法或草稿，没有外部反馈 |
| medium | 有文件、项目记录或内部 evidence |
| strong | 有真实学员、客户、市场或多源验证 |

## Canon Status

| Status | Meaning |
|---|---|
| seed | 初始资产，可以使用但未充分验证 |
| candidate | 有复用价值，但需审批 |
| approved | 可进入正典、课程或 Agent 规则 |
| rejected | 不进入正典，保留为历史记录 |

## Minimal Directory Shape

```text
brain/
  inbox/
  concepts/
  cases/
  clients/
  student-output/
  market-signals/
  decisions/
  sources/
  playbooks/
  skills/
  evidence/
  evolution-notes/
  canonical-learning/
```

## C2 Governance Rule

任何进入 C2 的内容，都必须回答：

```text
它是什么类型？
它支撑哪个模块？
它的证据强度是什么？
它未来在什么场景会被调用？
它需要回写到哪里？
```
