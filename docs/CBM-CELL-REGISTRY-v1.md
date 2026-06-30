# CBM Capability Cell Registry v1

> 本文件把原力 OS-CBM 的 6 个能力域 × 3 个责任层，初始化为 18 个 PMO 可治理的 Capability Cell。
>
> 父级 EPIC：#106  
> 上游规格：`docs/CBM-PMO-INTEGRATION-SPEC-v1.md`  
> 数据源：`docs/os-cbm-data.js`  
> 任务：#108

---

## 0. 第一性裁决

```text
CBM Cell 不是页面卡片，而是战略能力组件。
每个 Cell 必须能绑定 C3 Gap、C4 Task、Evidence Review、Evolution Note 和 Backwrite Target。
```

本版先建立 seed registry，不虚标成熟度：

```text
没有 Evidence，不得 green。
没有 Evidence Review，不得 validated。
没有 Evolution Note，不得 Done。
没有 Backwrite，不得 compounding。
```

---

## 1. 能力域与责任层

### 1.1 6 个能力域

| Domain | 中文 | 定义 |
|---|---|---|
| strategy | 战略治理 | 母公理、正典、边界、优先级、全局裁决 |
| growth | 增长内容 | IP、内容、渠道、用户语言、信任与转化 |
| client | 客户项目 | 客户组合、会议、交付、承诺、客户成功 |
| knowledge | 专家知识资产 | 知识库、案例库、样例库、NotebookLM、专家脑 |
| engineering | 工程自动化 | GitHub、Codex、Agent、MCP、脚本、自动化链路 |
| investment | 投资财富 | 财富研究、资产配置、投研输入、长期现金流 |

### 1.2 3 个责任层

| Layer | 中文 | 定义 |
|---|---|---|
| direct | 定方向 | 判断目标、边界、愿景、控制点、取舍 |
| control | 控系统 | 定标准、管节奏、识别风险、形成治理机制 |
| execute | 执行链 | 产出资产、交付结果、形成任务链和回写 |

---

## 2. 18 个 Seed Capability Cell

| Domain | Layer | CBM Cell ID | 能力组件 | Canon Node | Control Point | Status | Evidence | Next |
|---|---|---|---|---|---|---|---|---|
| strategy | direct | `strategy.direct.os-governance-core` | 原力 OS 治理内核 | C3 / C1 | 母公理、三部边界、P0 裁决 | seed | weak | 进入 #109 试点 |
| strategy | control | `strategy.control.pmo-rhythm-and-risk` | 控制项池与成熟度节奏 | C3 / PMO | Weekly Review、风险、成熟度节奏 | seed | weak | 建立 PMO 节奏回写 |
| strategy | execute | `strategy.execute.strategy-brief-package` | 写作简报与召回包 | C4 / C2 | 把战略判断转成 briefing package | seed | weak | 定义 briefing 模板 |
| growth | direct | `growth.direct.ip-content-portfolio` | 内容战略与 IP 组合 | B2 / B3 | 内容主题、IP 阵列、传播入口 | seed | weak | 建立内容组合地图 |
| growth | control | `growth.control.content-reuse-pipeline` | 内容复用与分发题管线 | B3 / C4 | 一鱼多吃、渠道复用、分发节奏 | seed | weak | 建立复用流程 |
| growth | execute | `growth.execute.content-draft-package` | 写作输出与草稿包 | C4 / C2 | 内容产出、脚本、长短图文转化 | seed | weak | 建立内容链 SOP |
| client | direct | `client.direct.client-portfolio-governance` | 客户项目组合治理 | B3 / C3 | 客户组合、价值排序、承诺边界 | seed | weak | 进入 #109 试点候选 |
| client | control | `client.control.project-portfolio-governance` | 客户项目组合控制台 | C3 / C4 | 会议四元组、承诺、风险、下一步 | seed | weak | 进入 #109 试点 |
| client | execute | `client.execute.meeting-metadata-recall` | 会议准备 metadata recall | C4 / C2 | 会议上下文、承诺记录、复盘输出 | seed | weak | 建立会议回写模板 |
| knowledge | direct | `knowledge.direct.knowledge-asset-architecture` | 专家知识资产架构 | C2 / C3 | CODEX-LLM-WIKI、NotebookLM、source pointer | seed | weak | 建立知识资产层级 |
| knowledge | control | `knowledge.control.knowledge-map-consistency` | 领域地图与知识脊柱 | C2 / C3 | 知识架构、source、file、markdown、搜索召回 | seed | weak | 建立脊柱一致性检查 |
| knowledge | execute | `knowledge.execute.notebooklm-deep-routing` | NotebookLM 专题深问路由 | C2 / C4 | 专题深问、资料路由、输出沉淀 | seed | weak | 建立 deep routing SOP |
| engineering | direct | `engineering.direct.skill-mcp-reuse-strategy` | 技能 / MCP / 工程复用战略 | C4 / C3 | 哪些能力自动化，哪些保留人工判断 | seed | weak | 进入工程复用盘点 |
| engineering | control | `engineering.control.github-channel-share-sync` | GitHub 双通道与共享切片 | C4 / PMO | GitHub issue、PR、共享切片、同步规则 | seed | weak | 建立同步规则 |
| engineering | execute | `engineering.execute.operator-skill-reuse` | Operator Skill 多机复用 | C4 | 技能复用、Codex/Claude/ChatGPT 协作 | seed | weak | 进入 #109 试点 |
| investment | direct | `investment.direct.wealth-research-framework` | 投资财富研究框架 | B1 / B4 | 长期资产、投研框架、个人资产判断 | seed | weak | 建立投研输入标准 |
| investment | control | `investment.control.research-risk-router` | 投资研究风险由 | C3 / C4 | 风险、判断、资金边界、研究节奏 | seed | weak | 建立风险门禁 |
| investment | execute | `investment.execute.research-output-package` | 量化 / 宏观专题检索与研究包 | C2 / C4 | 数据、宏观、专题、NotebookLM 路由 | seed | weak | 建立研究包模板 |

---

## 3. 第一批 Pilot Cell

本版选 3 个 Cell 进入 #109：

### 3.1 `strategy.direct.os-governance-core`

原因：最高控制点，决定所有 PMO / Agent / Dashboard 是否服从母公理与 C3 地图。

首轮目标：

```text
建立 OS 治理内核的 C3 Gap、C4 Task、Evidence Review 与 Evolution Note。
```

### 3.2 `client.control.project-portfolio-governance`

原因：最接近真实客户、现金流、交付承诺和商业验证。

首轮目标：

```text
建立客户项目组合控制台，从会议四元组、承诺、风险与下一步任务中验证 CBM-PMO 是否能服务真实项目。
```

### 3.3 `engineering.execute.operator-skill-reuse`

原因：最能验证 C4 链路、Agent Contract、Codex / Skill / MCP 的工程复用价值。

首轮目标：

```text
把一个工程自动化能力组件从 seed 推进到 dry-run / evidence-backed 状态。
```

---

## 4. Cell → PMO 映射规则

每个 Cell 必须能映射：

```text
CBM Cell ID
→ C3 Gap Issue
→ C4 Task Issue
→ Evidence Review
→ Evolution Note
→ Dashboard status
→ CBM Backwrite
```

Issue 必须新增或显式写入：

```text
CBM Cell ID:
Capability Domain:
Responsibility Layer:
Control Point:
Bottleneck:
Gap Score:
Evidence Strength:
Writeback Target:
```

---

## 5. 成熟度基线

本版不追求高分，只建立真实基线。

| 状态 | 允许条件 |
|---|---|
| seed | 有定义、有控制点、有下一步 |
| draft | 有 C3 Gap 或 C4 Task 草案 |
| validated | 有 Evidence Review，且 evidence ≥ medium |
| operating | 连续被使用或进入周复盘 |
| compounding | 有 Evolution Note 且下轮复用生效 |

---

## 6. 下一步

```text
#109：为 3 个 Pilot Cell 创建 C3 Gap / C4 Task / Evidence Review / Evolution Note。
#110：Dashboard 增加 Capability Heatmap 和 Top CBM Gaps。
#111：Weekly PMO Review 回写为 CBM Evolution Review。
```
