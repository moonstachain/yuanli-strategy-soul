# CBM-PMO Integration Spec v1

> 本文件定义「原力 OS-CBM 能力组件地图」与 GitHub PMO 工作台 / Dashboard / Evidence / Evolution / Backwrite 的集成协议。
>
> 父级 EPIC：#106  
> 规格任务：#107

---

## 0. 一句话定义

```text
CBM-PMO 一体化，是把 CBM 战略地图中的能力组件、控制点、瓶颈和优先级，转化为 GitHub PMO 可执行、可验收、可证据化、可回写的治理对象。
```

它不是：

```text
不是把 CBM 做成一张漂亮图。
不是把 PMO 做成普通任务看板。
不是把 Dashboard 做成 Issue 数量报表。
不是让 AI / Codex 脱离战略地图自由执行。
```

它必须回答：

```text
CBM 发现了哪个能力缺口？
这个缺口为什么重要？
它应该生成哪个 C3 Gap？
它应该派生成哪个 C4 Task？
需要什么 Evidence 才能升级状态？
执行结果如何回写到 CBM、PMO、Brain 和 Canon？
```

---

## 1. 核心闭环

```text
CBM Capability Cell
→ C3 Gap
→ Gap Score
→ C4 Task
→ Evidence Review
→ Evolution Note
→ PMO Dashboard
→ CBM Backwrite
```

### 1.1 分工

| 层 | 角色 | 回答的问题 |
|---|---|---|
| CBM | 战略源头 | 哪个能力组件最重要？哪里是控制点和瓶颈？ |
| PMO | 执行治理 | 谁来做？怎么做？如何验收？ |
| Dashboard | 反馈证据 | 系统是否真的变强？哪些地方是假绿？ |
| Backwrite | 递归进化 | 这次执行如何让下一轮地图更准？ |

---

## 2. CBM Cell ID 规范

每个能力组件必须有唯一 ID：

```text
<domain>.<layer>.<capability-slug>
```

示例：

```text
strategy.direct.os-governance-core
client.control.project-portfolio-governance
engineering.execute.operator-skill-reuse
knowledge.execute.notebooklm-deep-routing
investment.direct.wealth-research-framework
```

### 2.1 Domain 建议

初版采用 Human Strategic View 的 6 个能力域：

```text
strategy      战略治理
growth        增长内容
client        客户项目
knowledge     专家知识资产
engineering   工程自动化
investment    投资财富
```

后续可映射到 Agent-Oriented View 的 8 个能力域：

```text
matrix / user / content / product / delivery / growth / data / moat
```

### 2.2 Layer 建议

初版采用 3 个责任层：

```text
direct     定方向 / 判断目标 / 边界 / 愿景 / 控制点
control    控系统 / 定标准 / 管节奏 / 识别风险
execute    执行任务 / 产出资产 / 交付结果 / 回写系统
```

后续可映射到 Agent-Oriented View 的 5 个责任层：

```text
strategy / design / execution / validation / recursive
```

---

## 3. CBM Cell 最小字段

每个 Cell 必须包含以下字段：

```yaml
cbm_cell_id:
capability_domain:
responsibility_layer:
capability_name:
canon_node:
secondary_node:
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
autonomy_level:
approval_gate:
last_reviewed_at:
next_decision:
```

### 3.1 字段解释

| 字段 | 含义 |
|---|---|
| `cbm_cell_id` | 能力组件唯一 ID |
| `capability_domain` | 能力域 |
| `responsibility_layer` | 责任层 |
| `capability_name` | 人类可读名称 |
| `canon_node` | A1-C4 正典节点，或 cross-trilogy |
| `secondary_node` | 次级关联节点 |
| `control_point` | 战略控制点 |
| `current_status` | 当前成熟状态 |
| `maturity_score` | 0-40 或 0-100 成熟度 |
| `bottleneck` | 当前瓶颈 |
| `gap_score` | 能力缺口分数 |
| `evidence_strength` | none / weak / medium / strong |
| `pmo_issue` | 对应 GitHub Issue |
| `next_c4_task` | 下一步执行任务 |
| `evidence_path` | 证据文件路径 |
| `evolution_note` | 复盘文件路径 |
| `writeback_target` | 回写位置 |
| `owner` | human / AI / Codex / agent / mixed |
| `autonomy_level` | L0-L4 |
| `approval_gate` | 哪些动作需要人类批准 |
| `last_reviewed_at` | 最近审查时间 |
| `next_decision` | 下一个需要人类判断的问题 |

---

## 4. 状态规则

统一采用 6 级状态：

```text
missing      缺失，尚未建立
seed         有种子，但不完整
draft        已有草稿，可讨论
validated    已被案例或市场验证
operating    已进入运行
compounding  已能递归增强下一轮
```

### 4.1 硬规则

```text
没有 Evidence，不得 green。
没有 Evidence Review，不得 validated。
没有 Evolution Note，不得 Done。
没有 Backwrite，不得 compounding。
```

### 4.2 假绿禁止

任何 Cell 如果出现以下情况，必须标记为 `risk` 或 `blocked`：

```text
状态为 green 但 evidence_strength = none / weak。
Issue 已 Done 但没有 Evolution Note。
Task 已关闭但没有写回 CBM Cell。
Dashboard 显示完成但 Brain 无记录。
```

---

## 5. Gap Score 规则

CBM Cell 的缺口排序采用：

```text
Gap Score = importance × urgency × evidence_strength × reversibility × writeback_value × business_impact
```

### 5.1 评分维度

| 维度 | 说明 | 建议分值 |
|---|---|---|
| importance | 战略重要性 | 1-5 |
| urgency | 紧迫性 | 1-5 |
| evidence_strength | 当前证据强度，证据越弱但重要性越高，越应暴露 | 1-5 |
| reversibility | 决策可逆性 / 试错成本 | 1-5 |
| writeback_value | 回写后对系统复利价值 | 1-5 |
| business_impact | 对收入、交付、增长、壁垒的影响 | 1-5 |

### 5.2 Priority 规则

```text
P0：必须进入下一轮唯一 P0 或 Top 3。
P1：进入近期执行池。
P2：进入规划池。
P3：观察或打磨。
```

---

## 6. CBM → C3 Gap Issue 映射规则

当一个 CBM Cell 满足任一条件时，必须创建或更新 C3 Gap：

```text
1. status = missing / blocked。
2. evidence_strength = none / weak，且 importance ≥ 4。
3. maturity_score 低于同域平均值。
4. bottleneck 阻碍下游 C4 执行。
5. Weekly Review 指向该 Cell 为下周 P0。
```

### 6.1 C3 Gap Issue 必须包含

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

---

## 7. C3 Gap → C4 Task 生成规则

C3 Gap 被选中后，必须派生 C4 Task。

### 7.1 C4 Task 必须包含

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

### 7.2 任务等级

| Level | 权限 |
|---|---|
| L0 | Read only |
| L1 | Draft |
| L2 | Dry-run |
| L3 | Execute with approval |
| L4 | Autonomous loop inside fixed boundary |

默认使用 L1-L2。L3 以上必须有人类 approval gate。

---

## 8. Evidence Review 规则

任务不得直接 Done。C4 Task 完成后必须进入 Evidence Review。

### 8.1 Evidence 至少包含

```text
source / decision / artifact / case / metric / screenshot / file path
```

### 8.2 Evidence Strength

```text
none     没有证据
weak     有产物但缺真实验证
medium   有内部验证或清晰记录
strong   有真实用户 / 客户 / 项目 / 数据验证
```

### 8.3 状态升级条件

| 升级目标 | 最低条件 |
|---|---|
| seed → draft | 有结构化产物 |
| draft → validated | Evidence ≥ medium |
| validated → operating | 有连续使用记录 |
| operating → compounding | 有 Evolution Note + 下一轮复用 |

---

## 9. Dashboard Capability View 规则

PMO Dashboard 必须新增 Capability-centric 视图。

### 9.1 必须展示

```text
Capability Heatmap
Top CBM Gaps
Evidence by Capability
Maturity by Domain
Blocked / Weak Evidence Cells
Next P0 Capability
Human Decision Needed
```

### 9.2 每个 Cell 展示字段

```text
status
maturity_score
gap_score
evidence_strength
pmo_issue
next_c4_task
owner
writeback_target
```

### 9.3 Dashboard 不得只展示 Issue 数量

Dashboard 的核心问题不是：

```text
完成了多少任务？
```

而是：

```text
哪些能力组件真的变强了？
哪些地方是假绿？
下一个唯一 P0 是什么？
```

---

## 10. Weekly CBM Review 规则

Weekly PMO Review 必须生成 CBM Review 草案。

### 10.1 必须回答

```text
本周哪些 CBM Cell 状态发生变化？
哪些 Evidence 强化了能力成熟度？
哪些 Issue 完成但没有回写？
哪些 Cell 出现假绿风险？
下周唯一 P0 Capability 是什么？
哪些判断应进入 canonical learning candidate？
```

### 10.2 输出路径

```text
docs/weekly-cbm-review-latest.md
brain/evolution-notes/YYYY-MM-DD-cbm-pmo-review.md
brain/canonical-learning/YYYY-MM-DD-cbm-learning-candidate.md
```

人类审查前，不得直接污染 `CONSTITUTION.md` 或正典层。

---

## 11. Backwrite 规则

每个执行闭环结束后，必须回写：

```text
C1 一纸文脉：身份、边界、风格、禁止事项是否变化？
C2 一个大脑：知识、案例、术语、样例、数据是否入库？
C3 一张地图：能力组件状态、成熟度、瓶颈、优先级是否更新？
C4 一条链路：SOP、Codex Task、Agent workflow 是否可复用？
```

### 11.1 CBM Cell Backwrite 最小格式

```text
Cell:
Previous Status:
New Status:
Evidence:
What changed:
What remains blocked:
Next C4 Task:
Next Review Date:
```

---

## 12. 第一批试点

建议从 3 个 Cell 开始：

| Cell ID | 能力组件 | 原因 |
|---|---|---|
| `strategy.direct.os-governance-core` | 原力 OS 治理内核 | 最高控制点，防止系统偏离母公理 |
| `client.control.project-portfolio-governance` | 客户项目组合治理 | 最接近商业结果与真实客户验证 |
| `engineering.execute.operator-skill-reuse` | Operator Skill 多机复用 | 最能验证 C4 / Agent / Codex 杠杆 |

---

## 13. 执行顺序

```text
#107 Spec
→ #108 Registry
→ #109 3-cell Pilot
→ #110 Dashboard Capability Cockpit
→ #111 Weekly CBM Review
```

---

## 14. 最终原则

```text
CBM 发现能力缺口。
PMO 生成执行任务。
Dashboard 验证系统变强。
Backwrite 更新战略地图。
```

如果一个 Issue 不能挂回 CBM Cell，不进 P0。  
如果一个 CBM Cell 不能生成 C4 Task，不是有效能力组件。  
如果一个 C4 Task 没有 Evidence，不能 green。  
如果一个 Done 没有 Evolution Note，不能 Done。  
如果一个 Done 没有回写 CBM，不算系统变强。
