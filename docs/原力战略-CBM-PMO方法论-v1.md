# 原力战略-CBM-PMO 方法论 v1

> 状态：v1 · 方法论正典草案  
> 归属：原力 OS / C3 一张地图 / C4 一条链路 / 治理  
> 服务脊骨：ʸx / OSA / 递归回写 / 借势×合力  
> 关系文件：`CONSTITUTION.md`、`INTAKE.md`、`docs/CBM-PMO-INTEGRATION-SPEC-v1.md`、`project/KANBAN_TEMPLATE.md`、`codex/CODEX_TASK_TEMPLATE.md`

---

## 0. 一句话定义

```text
原力战略-CBM-PMO，是把创始人的战略判断拆成可治理的能力组件，再转化为 GitHub Issue / PR / Evidence / Backwrite 链路，让每一个战略项目都沉淀为下一次可复用的事业系统能力。
```

更短：

```text
Soul 守正典，CBM 拆能力，PMO 管项目，GitHub 留证据，回写让系统进化。
```

---

## 1. 母公理

本方法论服从 `CONSTITUTION.md` 的母公理：

```text
ʸx：做会自我繁殖的事，不做一次性的事。
```

因此，任何战略项目不得以“做完”为终点，而必须回答：

```text
1. 这次任务产生了什么可复用资产？
2. 这次任务强化了哪个能力组件？
3. 这次任务留下了什么证据？
4. 这次任务回写到了哪里？
5. 下一次同类任务如何更快、更准、更强？
```

---

## 2. 方法论总公式

```text
原力战略-CBM-PMO
= Soul 正典裁决
× CBM 能力组件地图
× PMO 项目节奏治理
× GitHub Issue / PR / Project 证据链
× Codex / Agent 执行链路
× 递归回写
```

白话版：

```text
先判断这件事为什么值得做，
再拆成必须具备的能力组件，
再变成可执行项目，
再用 GitHub 记录证据，
最后回写成下一次可复用的资产。
```

---

## 3. 为什么需要这套方法

普通项目管理容易把 GitHub 变成：

```text
repo collection / task list / issue backlog / tool cemetery
```

原力战略-CBM-PMO 要把 GitHub 变成：

```text
Strategic Capability Portfolio / Evidence System / Recursive Operating Base
```

它解决五个问题：

| 问题 | 普通做法 | 原力战略-CBM-PMO 做法 |
|---|---|---|
| 战略漂移 | 有想法就开工 | 先回到 Soul 做归属裁决 |
| 仓库散点 | 每个 repo 各管各 | repo / issue / PR 全部映射 CBM Cell |
| 任务堆积 | 看板只看状态 | 看板看能力是否变强 |
| 假完成 | Issue close = done | No Evidence / No Writeback / No Reuse，不算 Done |
| AI 失控 | Codex 直接执行 | Codex 必须服从边界、验收、回写 |

---

## 4. 六层架构

| 层级 | 名称 | 解决的问题 | GitHub 承载物 | 原力对应 |
|---|---|---|---|---|
| L0 | Soul 宪法层 | 这件事是否符合母公理？ | `CONSTITUTION.md` / `INTAKE.md` | ʸx / 三部边界 |
| L1 | Strategy 战略层 | 为什么现在做？服务哪个北极星？ | EPIC Issue / Roadmap | B1 借势 / C3 地图 |
| L2 | CBM 能力层 | 需要哪些能力组件？瓶颈在哪里？ | CBM Cell / Capability Map | C3 一张地图 |
| L3 | PMO 项目层 | 如何拆解、排期、追踪、验收？ | Issues / Projects / Milestones | C4 一条链路 |
| L4 | Execution 执行层 | 谁或哪个 Agent / Codex 做？ | Branch / PR / Actions | Codex / Agent workflow |
| L5 | Evidence 回写层 | 做完后沉淀了什么？ | Evidence / Evolution Note / Backwrite Log | C2 大脑 / C4 回写 |

---

## 5. 标准工作流

```text
User Strategic Request
→ Soul Intake
→ Strategy Brief
→ CBM Capability Mapping
→ C3 Gap
→ C4 Task
→ Codex / Human Execution
→ PR / Artifact
→ Evidence Review
→ Evolution Note
→ Backwrite
→ Next Reuse Path
```

对应一句话：

```text
战略请求进 Soul，能力缺口进 C3，执行任务进 C4，证据进 Brain，经验回写 OS。
```

---

## 6. Phase 0：Soul Intake 入口裁决

任何战略项目先进入 `yuanli-strategy-soul`，不得直接进入执行仓。

### 6.1 入口五问

```text
1. 它属于原力资产、原力创业、原力 OS、跨三部，还是治理？
2. 它服务哪条母公理或共享脊骨？
3. 它归属 A1-C4 哪个模块？
4. 它的输入与输出物是什么？
5. 它如何递归回写，成为下一次任务的资产？
```

### 6.2 不合格任务

以下任务默认不得进入执行：

```text
无归属任务
无输出物任务
无验收标准任务
无回写位置任务
无复用路径任务
无人工裁决边界的自动化任务
```

---

## 7. Phase 1：Strategy Brief 战略裁决

每个战略项目必须先形成一张 Strategy Brief。

```text
项目名：
一句话目标：
为什么现在做：
所属部：资产 / 创业 / OS / 跨三部 / 治理
所属模块：A1-C4
服务脊骨：ʸx / 你×AI / 借势×合力 / 信息五层 / OSA / 递归回写
第一性问题：
不做什么：
最小可交付物：
成功定义：
Evidence 要求：
Writeback Target：
Next Reuse：
```

---

## 8. Phase 2：CBM 能力组件拆解

普通 PMO 问：

```text
要做哪些任务？谁来做？什么时候完成？
```

原力战略-CBM-PMO 先问：

```text
这个战略项目要成立，必须形成哪些能力组件？
哪个能力是控制点？
哪个能力是瓶颈？
哪个能力可以外包？
哪个能力必须自持？
哪个能力完成后会进入长期资产池？
```

### 8.1 CBM Cell ID

采用：

```text
<domain>.<layer>.<capability-slug>
```

示例：

```text
strategy.direct.os-governance-core
growth.control.content-reuse-pipeline
growth.execute.content-draft-package
client.control.project-portfolio-governance
engineering.execute.operator-skill-reuse
knowledge.execute.case-pattern-library
investment.direct.wealth-research-framework
```

### 8.2 Domain 建议

```text
strategy      战略治理
growth        增长内容
client        客户项目
knowledge     专家知识资产
engineering   工程自动化
investment    投资财富
```

### 8.3 Layer 建议

```text
direct     定方向 / 判断目标 / 边界 / 愿景 / 控制点
control    控系统 / 定标准 / 管节奏 / 识别风险
execute    执行任务 / 产出资产 / 交付结果 / 回写系统
```

### 8.4 CBM Cell 最小字段

```yaml
cbm_cell_id:
capability_domain:
responsibility_layer:
capability_name:
canon_node:
control_point:
current_status:
maturity_score:
bottleneck:
gap_score:
evidence_strength:
pmo_issue:
next_c4_task:
evidence_path:
evolution_note:
writeback_target:
owner:
approval_gate:
next_decision:
```

---

## 9. Phase 3：C3 Gap 与 C4 Task

### 9.1 C3 Gap

C3 Gap 是判断缺口 / 地图缺口 / 能力缺口。

它负责回答：

```text
我们还不知道什么？
哪里没有证据？
哪个能力组件不清楚？
哪个判断需要人类裁决？
哪个瓶颈阻碍下游执行？
```

C3 Gap Issue 必须包含：

```text
CBM Cell ID
Capability Domain
Responsibility Layer
Capability Name
Canon Node
Control Point
Bottleneck
Gap Score
Evidence Strength
Why Now
Expected C4 Task
Writeback Target
```

### 9.2 C4 Task

C4 Task 是执行任务 / 构建任务 / 自动化任务 / 内容任务。

它负责回答：

```text
具体生成什么？
修改什么文件？
验收标准是什么？
由人做还是 Codex / Agent 做？
完成后回写哪里？
下一次如何复用？
```

C4 Task 必须包含：

```text
Objective
Input Context
Allowed Tools
Steps
Output Artifacts
Acceptance Criteria
Evidence Required
Approval Gate
Writeback Target
Next Reuse
```

---

## 10. Phase 4：GitHub PMO 驾驶舱

项目不只使用单一 Kanban，而应至少拥有三种视图：

```text
1. Strategy View：按战略层 / CBM Domain / 优先级看
2. Execution View：按状态、负责人、Codex Ready、PR 看
3. Evidence View：按证据强度、回写状态、复用路径看
```

建议字段：

| 字段 | 用途 |
|---|---|
| Area | 资产 / 创业 / OS / 跨三部 / 治理 |
| Module | A1-C4 |
| CBM Domain | strategy / growth / client / knowledge / engineering / investment |
| CBM Cell | 具体能力组件 |
| Project Type | EPIC / C3 Gap / C4 Task / Evidence / Evolution |
| Priority | P0 / P1 / P2 / P3 |
| Evidence Strength | E0 / E1 / E2 / E3 / E4 |
| Codex Ready | Yes / No / Needs Context |
| Human Gate | 是否需要人工裁决 |
| Writeback Target | docs / brain / project / codex / templates |
| Reuse Path | 下次如何复用 |

---

## 11. Phase 5：Execution 执行链路

标准执行链：

```text
Issue
→ Branch
→ Commit
→ PR
→ Review
→ Checks
→ Merge
→ Backwrite
```

### 11.1 PR 必须说明

```text
解决哪个 Issue
改了哪些文件
为什么这么改
如何验收
证据在哪里
哪些内容要回写
哪些风险仍需人工判断
```

### 11.2 Codex 执行边界

任何 Codex 任务必须使用 `codex/CODEX_TASK_TEMPLATE.md`，并明确：

```text
背景
归属裁决
第一性目标
输入材料
输出物
执行边界
验收标准
递归回写
禁止事项
```

---

## 12. Phase 6：Evidence / Evolution / Writeback

### 12.1 Evidence Strength

```text
E0 none       没有证据
E1 artifact   有产物，但没有验证
E2 internal   有内部验证或可运行结果
E3 user       有真实用户 / 客户 / 反馈 / 数据
E4 reused     已被下一次项目复用并产生效果
```

### 12.2 状态升级条件

| 升级目标 | 最低条件 |
|---|---|
| missing → seed | 有结构化草稿或初始 artifact |
| seed → draft | 有可审查版本 |
| draft → validated | Evidence ≥ E2 |
| validated → operating | 有连续使用记录 |
| operating → compounding | Evidence ≥ E4 + Evolution Note + Backwrite |

### 12.3 硬规则

```text
No Evidence, No Done.
No Evolution Note, No Done.
No Backwrite, No Done.
No Reuse Path, No Green.
No Human Gate, No Autonomous Execution.
```

---

## 13. 回写位置规则

| 输出类型 | 回写位置 |
|---|---|
| 新概念 / 新裁决 | `docs/`，必要时进入 `CONSTITUTION.md` 候选 |
| 新能力组件 | `docs/CBM-CELL-REGISTRY-v1.md` 或后续 registry |
| 新流程 / SOP | `project/` 或 `codex/` |
| 新模板 | `templates/` 或 `.github/ISSUE_TEMPLATE/` |
| 新证据 | `brain/evidence/` |
| 新复盘 | `brain/evolution-notes/` |
| 新索引 | `source/indexes/` |
| 新项目状态 | GitHub Issue / Project / Dashboard |

---

## 14. 用户发起任务的默认协议

以后用户可以直接说：

```text
按照原力战略-CBM-PMO处理：
任务名：
背景：
我想要的结果：
已有材料：
预期输出：
是否需要 GitHub / Codex：
是否需要形成长期资产：
```

助手默认输出：

```text
1. Soul 战略裁决
2. CBM 能力组件地图
3. C3 Gap 清单
4. C4 Task 清单
5. GitHub Issue / Project 字段建议
6. Codex-ready 任务包
7. 验收标准
8. Evidence 设计
9. 回写路径
10. 下一轮复用方式
```

---

## 15. 反模式

以下行为违反原力战略-CBM-PMO：

```text
直接开工，不做 Soul Intake。
只有任务清单，没有 CBM Cell。
只有 GitHub Issue，没有 Evidence。
只有 PR 合并，没有 Evolution Note。
只有 Dashboard 数量，没有能力成熟度。
只有 Done，没有 Backwrite。
只有自动化，没有 Human Gate。
只有一次性交付，没有 Next Reuse。
```

---

## 16. 最小执行咒语

```text
Soul 裁决
→ CBM 拆能
→ PMO 排程
→ GitHub 留痕
→ Codex 执行
→ Evidence 验收
→ OS 回写
```

---

## 17. 一句话北极星

```text
把创始人的不可复制判断，变成可治理、可执行、可证据化、可复用、可递归进化的事业能力组合。
```

---

## 18. 与现有文件的关系

```text
CONSTITUTION.md
  定义母公理、三部十二模块、递归闭环。

INTAKE.md
  定义所有新任务的唯一入口规则。

docs/CBM-PMO-INTEGRATION-SPEC-v1.md
  定义 CBM Cell 与 C3 Gap / C4 Task / Evidence / Dashboard / Backwrite 的技术集成协议。

project/KANBAN_TEMPLATE.md
  定义项目看板列、标签、字段和 Done 标准。

codex/CODEX_TASK_TEMPLATE.md
  定义 Codex 可执行任务格式。

project/CBM-PMO_PROJECT_PROTOCOL.md
  定义每次战略项目启动、拆解、执行、验收和回写的操作协议。
```

本文件是方法论总纲；具体执行时以 `project/CBM-PMO_PROJECT_PROTOCOL.md` 为操作手册。