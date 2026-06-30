# OS Governance Control Loop v1

> Task: #115  
> Source Gap: #112  
> Parent Pilot: #109  
> EPIC: #106  
> CBM Cell: `strategy.direct.os-governance-core`  
> Status Proposal: `seed / weak` → `draft / medium evidence`  
> Boundary: not validated yet.

---

## 0. 一句话定义

```text
OS Governance Control Loop，是原力 OS 用来判断任务是否可以进入 P0、CBM Cell 是否可以升级状态、Evidence 是否足够、Done 是否成立、Backwrite 是否完成的治理控制闭环。
```

它不是：

```text
不是一个普通检查清单。
不是 PMO 页面装饰。
不是为了让 Issue 更整齐。
不是让 AI / Codex 自己决定战略优先级。
```

它的本质是：

```text
防止 CBM-PMO 系统滑回页面优化、Issue 堆积、假绿状态和无证据完成。
```

---

## 1. 治理根原则

### 1.1 母公理约束

```text
做会自我繁殖的事，不做一次性的事。
```

任何任务进入 P0 前必须回答：

```text
这件事是否会让下一次更快、更准、更强？
它会沉淀为能力组件、证据、模板、链路、样例或正典候选吗？
```

如果答案是否定的，它不能进入 P0。

---

## 2. P0 Issue 入池检查清单

一个 Issue 进入 P0，必须满足至少 5 条：

| 检查项 | 必须回答 |
|---|---|
| CBM Cell | 是否挂回明确的 `cbm_cell_id`？ |
| Control Point | 是否影响关键战略控制点？ |
| C3 Gap | 是否来自清晰能力缺口，而不是临时想法？ |
| C4 Task | 是否能派生具体可执行任务？ |
| Evidence | 是否定义了完成后需要什么证据？ |
| Backwrite | 是否定义了写回位置？ |
| Human Gate | 是否明确哪些动作需要明哥裁决？ |

### 2.1 进入 P0 的最低门槛

```text
CBM Cell + Control Point + C3 Gap + C4 Task + Evidence Required + Backwrite Target
```

缺任一项，只能进入 P1 / P2，不得进入 P0。

---

## 3. CBM Cell 状态升级规则

### 3.1 允许状态

```text
missing → seed → draft → validated → operating → compounding
```

### 3.2 升级条件

| 升级 | 最低条件 |
|---|---|
| missing → seed | 有定义、有控制点、有下一步 |
| seed → draft | 有 C3 Gap / C4 Task / 初版产物 |
| draft → validated | Evidence Review ≥ medium，且有真实案例、真实项目或明确内部验证 |
| validated → operating | 连续进入周复盘或项目运行 |
| operating → compounding | 有 Evolution Note，并被下一轮任务复用 |

### 3.3 当前 Cell 的状态裁决

`strategy.direct.os-governance-core` 当前可从：

```text
seed / weak evidence
```

升级为：

```text
draft / medium evidence
```

原因：

```text
已经形成 OS Governance Control Loop v1、Evidence Note、Evolution Note，具备治理草案与中等证据。
```

但不得升级为 validated，因为：

```text
尚未用 #116 客户项目试点和 #117 Operator Skill 试点验证该治理闭环。
```

---

## 4. 假绿检查清单

任何 Cell 出现以下任一情况，必须标记为 `risk` 或保持 `seed / draft`：

```text
状态为 green 但 evidence_strength = none / weak。
Issue 已关闭但没有 Evidence Review。
Task 已 Done 但没有 Evolution Note。
产物存在但没有 Backwrite Target。
Dashboard 显示完成但 Brain 没有记录。
没有真实项目、真实用户、真实任务或可复用 dry-run。
```

### 4.1 禁止状态

```text
No evidence, no green.
No Evidence Review, no validated.
No Evolution Note, no Done.
No Backwrite, no compounding.
```

---

## 5. Evidence Review 最小路径

每个 C4 Task 完成后，必须生成 Evidence Review。

### 5.1 Evidence Review 必须包含

```text
Source Gap:
C4 Task:
CBM Cell:
Artifact:
Evidence Path:
Evidence Strength:
Accepted:
Missing:
State Proposal:
Backwrite Target:
Next Reuse:
```

### 5.2 Evidence Strength 标准

| 等级 | 定义 |
|---|---|
| none | 没有证据 |
| weak | 有草稿或产物，但没有验证 |
| medium | 有结构化产物 + 内部闭环验证 |
| strong | 有真实客户 / 用户 / 项目 / 数据验证 |

本次 #115 的 Evidence Strength 为：

```text
medium
```

理由：

```text
已有结构化治理产物，并完成内部 CBM-PMO 闭环定义；但尚未经过真实客户试点或工程 dry-run 验证。
```

---

## 6. Evolution Note 回写格式

每次 Evidence Review 后必须生成 Evolution Note。

```text
# Evolution Note

## Source

## Input

## Output

## Acceptance Result

## What Changed

## CBM Cell Backwrite
- Cell:
- Previous Status:
- New Status:
- Evidence Strength:
- Remaining Bottleneck:
- Next C4 Task:

## Canonical Candidate

## Next Reuse
```

---

## 7. OS Governance Control Loop

```text
1. CBM Cell identifies a capability gap.
2. C3 Gap names the strategic bottleneck.
3. Gap Score ranks priority.
4. C4 Task defines execution boundary.
5. Evidence Review checks whether output is real.
6. Evolution Note captures what changed.
7. Backwrite updates CBM / Brain / PMO / Dashboard.
8. Human approval decides whether anything becomes canonical.
```

---

## 8. 人机分工

| 角色 | 拥有权 |
|---|---|
| Human | 价值观、边界、战略取舍、P0 裁决、正典批准 |
| AI | 读取上下文、发现 gap、草拟策略、生成检查清单和复盘 |
| Codex / Agent | 在批准边界内执行、生成产物、准备回写 |
| PMO | 追踪 Issue、Task、Evidence、Evolution 与状态变化 |

---

## 9. 本次 #115 验收结果

| 验收项 | 结果 |
|---|---|
| 能判断一个 Issue 是否允许进入 P0 | pass |
| 能判断一个 CBM Cell 是否假绿 | pass |
| 能说明 seed → draft / validated 的条件 | pass |
| 能指向 Evidence 与 Evolution Note 路径 | pass |
| 有明确 Backwrite Target | pass |

---

## 10. 回写裁决

### 10.1 Cell 回写

```text
Cell: strategy.direct.os-governance-core
Previous Status: seed
New Status: draft
Previous Evidence: weak
New Evidence: medium
Validated: no
Reason: governance loop exists, but not yet tested by client or operator skill pilots.
```

### 10.2 下一步

```text
进入 #116：client project portfolio governance pilot。
```

原因：

```text
OS Governance Core 需要通过真实客户项目验证，才能从 draft 走向 validated。
```
