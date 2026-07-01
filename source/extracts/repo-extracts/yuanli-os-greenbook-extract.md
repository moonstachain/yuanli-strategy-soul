# Repo Extract · yuanli-os-greenbook · v0.1

> Issue: #208  
> 来源仓库：`moonstachain/yuanli-os-greenbook`  
> 角色标签：SOURCE_CANON  
> 归属模块：C1-C4，优先服务 C4 一条链路与 Skill 蒸馏  
> 私密等级：public  
> 抽取原则：抽取 OS 工具链、章节结构、OSA、信息五层、Evolution Note、Skill 蒸馏，不搬完整正文。

---

## 0. 仓库定位

`yuanli-os-greenbook` 是原力 OS 绿皮书源料仓，定位为“物种转移指南”。

对当前战略任务的价值：

```text
它是 C 轴原力 OS 的核心 source canon，尤其支持 C4 一条链路、C2 一个大脑、C3 一张地图。
```

---

## 1. 与 soul 的模块映射

| 源内容 | soul 模块 | 说明 |
|---|---|---|
| x^y → ʸx | shared / C4 | 母公理与物种跃迁表达 |
| OSA 卡 | C4 | 任务链路与最小节拍 |
| 信息五层 | shared / C3/C4 | 输出质量与判断分辨率 |
| IDA 协议 | C4 | 人机协作边界 |
| Evolution Note | C4 | 递归回写与系统进化记录 |
| case → pattern → skill | C4 | Skill 蒸馏核心机制 |
| 单一真源与自持知识库 | C2 | 一个大脑的治理原则 |
| CBM / 能力地图 | C3 | 一张地图与能力组件图 |
| AI 班底 / 多大脑路由 | C4 | Agent workflow 与执行编排 |

---

## 2. 可吸收核心判断

### 2.1 OS 的目标不是提效，而是物种转移

```text
从 x^y 到 ʸx。
从“我使用工具”到“系统持续自我繁殖”。
```

回写位置：

```text
glossary/shared-共享脊骨术语.md
modules/C-原力OS/C4-一条链路.md
```

---

### 2.2 OSA 任务链

```text
O = Objective：想透了
S = Strategy：跑稳了
A = Action：自动了
```

对 Codex 与章节生产的意义：

```text
任何任务不能直接给 Action，必须先有 Objective 与 Strategy。
```

回写位置：

```text
codex/CODEX_TASK_TEMPLATE.md
templates/os/闭环检查卡.md
templates/os/Skill蒸馏卡.md
```

---

### 2.3 Skill 蒸馏

```text
case → pattern → skill
```

这是把一次案例变成可复用能力的核心管线。

回写位置：

```text
templates/os/Skill蒸馏卡.md
project/backwrite-log.md
source/extracts/os-extracts/
```

---

### 2.4 单一真源与自持知识库

可吸收为 C2 判断：

```text
所有重要资产不能散落在外部工具或聊天记录里。
必须回到可版本化、可检索、可审计、可迁移的知识库。
```

回写位置：

```text
modules/C-原力OS/C2-一个大脑.md
project/github-repo-governance-roadmap.md
```

---

## 3. 对 B1 黄金样章的间接价值

虽然本仓主要归 C 轴，但它对 B1 黄金样章很关键：

```text
1. 帮助把 B1 样章不是写成一次性文章，而是写成可回写、可蒸馏、可交给 Codex 的内容资产。
2. 章节完成后要生成 extract、工具卡、回写日志和下一步 Issue。
3. B1 样章可以成为第一条 case → pattern → skill 的样例。
```

---

## 4. 禁止搬迁内容

```text
不要把 OS greenbook 55 章整体搬进 soul。
不要把“管培 OS”语境直接覆盖“原力战略三部曲 OS”。
不要把所有 OS 工具都塞进 C4，必须按 C1-C4 分层。
```

---

## 5. 回写位置

```text
modules/C-原力OS/C1-一纸文脉.md
modules/C-原力OS/C2-一个大脑.md
modules/C-原力OS/C3-一张地图.md
modules/C-原力OS/C4-一条链路.md
templates/os/闭环检查卡.md
templates/os/收口句模板.md
templates/os/Skill蒸馏卡.md
codex/CODEX_TASK_TEMPLATE.md
source/extracts/os-extracts/
```

---

## 6. 下一步任务

```text
1. 抽取 C4 最小闭环 / OSA / Evolution Note 的章节原文结构。
2. 将 B1 黄金样章作为 case，跑一次 Skill 蒸馏。
3. 建立 source/extracts/os-extracts/skill-pipeline-extract.md。
```
