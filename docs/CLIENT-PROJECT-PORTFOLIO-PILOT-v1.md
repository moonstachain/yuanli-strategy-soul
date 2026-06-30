# Client Project Portfolio Governance Pilot v1

> Task: #116  
> Source Gap: #113  
> Parent Pilot: #109  
> EPIC: #106  
> CBM Cell: `client.control.project-portfolio-governance`  
> Data posture: anonymized sample only. No identifiable client detail is stored.

---

## 0. 一句话定义

```text
客户项目组合治理，是把真实或匿名客户项目中的目标、承诺、风险、下一步任务与复盘证据，纳入 CBM-PMO 闭环，让客户交付不只是项目执行，而是反向增强原力 OS 的能力地图。
```

它不是：

```text
不是客户会议纪要。
不是普通交付清单。
不是销售 CRM。
不是只记录客户需求。
```

它必须回答：

```text
这个客户项目到底验证了哪个能力组件？
当前最大瓶颈在哪里？
下一步 C4 Task 是什么？
需要什么 Evidence 才能证明项目治理有效？
哪些经验要回写到 CBM / Brain / PMO？
```

---

## 1. 匿名样本设定

### 1.1 Project ID

```text
client-anon-001-high-ticket-service-growth
```

### 1.2 项目类型

```text
高客单价专业服务 / 高端客户增长与交付治理
```

### 1.3 业务语境

匿名项目代表一类真实业务问题：

```text
一个高客单专业服务型客户，已有产品能力和交付经验，但增长、客户组合、承诺管理与复盘回写尚未形成系统化控制台。
```

### 1.4 隐私边界

```text
不写入客户名称。
不写入个人身份信息。
不写入合同金额、电话、地址、具体公司机密。
只保留可复用的治理结构、风险模型和任务链。
```

---

## 2. 会议四元组

| 维度 | 内容 |
|---|---|
| 目标 | 建立客户项目组合治理模板，用于识别客户项目中的战略目标、承诺风险、下一步任务与证据回写。 |
| 承诺 | 产出一个匿名项目治理样本、一个下一步 C4 Task、一个 Evidence Review、一个 Evolution Note。 |
| 风险 | 如果只生成模板而没有 Evidence / Backwrite，则仍是假闭环；如果涉及真实客户信息，则必须匿名化。 |
| 下一步 | 用本模板进入后续真实客户项目复盘，形成至少 1 个 medium/strong evidence。 |

---

## 3. 客户项目组合控制台字段

每个客户项目进入 CBM-PMO，需要最少包含以下字段：

```yaml
project_id:
client_anonymized:
project_type:
strategic_goal:
current_commitments:
risk_items:
next_c4_task:
cbm_cell:
capability_gap:
evidence_required:
evidence_path:
evolution_note:
writeback_target:
human_approval_gate:
```

---

## 4. 本轮 Pilot 填写

```yaml
project_id: client-anon-001-high-ticket-service-growth
client_anonymized: true
project_type: 高客单价专业服务 / 增长与交付治理
strategic_goal: 把客户项目从一次性交付，升级为可复盘、可证据化、可回写的项目组合治理样本。
current_commitments:
  - 建立客户项目组合治理模板
  - 识别项目最大瓶颈
  - 派生下一步 C4 Task
  - 生成 Evidence Review
  - 生成 Evolution Note
risk_items:
  - 模板化过强，脱离真实客户语境
  - 缺少客户真实反馈，Evidence 只能是 medium 而非 strong
  - 客户数据隐私风险
next_c4_task: 建立客户项目复盘输入包，选择一个真实或匿名客户项目填入该模板
cbm_cell: client.control.project-portfolio-governance
capability_gap: 缺少客户项目组合治理的真实验证证据
evidence_required:
  - 匿名项目治理模板
  - 会议四元组
  - 风险清单
  - 下一步 C4 Task
  - Evidence Review
  - Evolution Note
writeback_target:
  - brain/cases/
  - brain/evidence/
  - brain/evolution-notes/
  - docs/os-cbm-data.js
human_approval_gate:
  - 外部客户信息写入
  - 可识别客户案例发布
  - 客户项目状态升级为 strong evidence
```

---

## 5. 当前最大瓶颈

```text
客户项目治理目前最大瓶颈，不是没有项目，而是项目经验尚未被拆成可复用的 CBM-PMO 对象：目标、承诺、风险、下一步、证据、回写。
```

### 5.1 瓶颈归因

| 层 | 瓶颈 |
|---|---|
| C3 地图 | 客户项目没有稳定挂回能力组件 |
| C4 链路 | 项目复盘没有自动生成下一步任务 |
| Evidence | 客户项目证据没有分级 |
| Backwrite | 交付经验没有稳定回写到 Brain / CBM |

---

## 6. 下一步 C4 Task

```text
C4 Task: 建立客户项目复盘输入包，并选择一个真实或匿名客户项目填入。
```

### 6.1 输入

```text
客户背景摘要
当前目标
已承诺事项
关键风险
最近一次会议/沟通输出
已有交付物
```

### 6.2 输出

```text
项目四元组
风险清单
下一步任务
Evidence Review
Evolution Note
CBM Cell Backwrite
```

### 6.3 验收

```text
至少一个匿名项目样本可被复用。
不得包含可识别客户信息。
能生成下一步任务。
能生成 evidence_path 与 evolution_note。
```

---

## 7. OS Governance Control Loop 应用结果

本轮使用 #115 治理闭环检查：

| Gate | Result |
|---|---|
| CBM Cell | pass: `client.control.project-portfolio-governance` |
| Control Point | pass: 会议四元组、承诺、风险、下一步 |
| C3 Gap | pass: #113 |
| C4 Task | pass: #116 |
| Evidence Required | pass |
| Backwrite Target | pass |
| Human Gate | pass: 外部客户信息需要审批 |

结论：

```text
#115 治理闭环可以应用到 #116 客户项目试点。
```

---

## 8. 状态裁决

`client.control.project-portfolio-governance` 当前可从：

```text
seed / weak evidence
```

升级为：

```text
draft / medium evidence
```

原因：

```text
已经形成匿名客户项目治理模板、会议四元组、风险清单、下一步 C4 Task、Evidence Review 和 Evolution Note。
```

但不得升级为 validated / strong，因为：

```text
本轮仍是匿名样本治理验证，尚未接入可审查的真实客户反馈或连续项目运行数据。
```

---

## 9. 下一步

```text
进入 #117 Operator Skill dry-run。
```

原因：

```text
客户项目治理已经证明 #115 治理闭环可用于业务语境；下一步需要验证 C4 工程自动化能否把这种治理流程变成可复用的 Operator Skill / Codex / Agent dry-run。
```
