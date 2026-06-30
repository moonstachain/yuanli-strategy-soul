# SOURCE REGISTRY · 原力战略三部曲重编工程源头台账

> 本文件记录“原力战略三部曲重编工程”的源头仓库、萃取方向与当前状态。详细逐文件索引见 `source/indexes/00-P0-source-index.md`。

---

## 0. 当前状态

Date: 2026-06-30
Current State Source: `docs/CURRENT-STATE.md`

| 阶段 | 状态 | 说明 |
|---|---|---|
| 源头仓库初筛 | done | 已建立 A/B/C 级源头仓库分级 |
| P0 源头逐文件索引 | seed | 见 `source/indexes/00-P0-source-index.md` |
| 缘起与序章萃取 | seed | 已有 `source/extracts/00-缘起与序章-萃取.md` |
| 原力资产萃取 | seed | 已有 `source/extracts/01-原力资产-萃取.md` 与母体重构材料 |
| 原力创业萃取 | seed | 已有 `source/extracts/02-原力创业-萃取.md` 与 B1 补强材料 |
| 原力 OS 萃取 | seed | 已有 `source/extracts/03-原力 OS-萃取.md` 与 OS 四模块重构 |
| 正典裁决 | active | `CONSTITUTION.md` 为最高真源 |
| 外显网站 | active | Canon Map / Modules / Tools / Whiteboard 已进入外显阶段 |
| PMO Registry | done-seed | 12 模块已接入 PMO registry |
| Module Asset Library | active | 当前主线为资产包标准化与 Evidence 回写 |
| Whiteboard OS | active | 数据结构已升级，渲染层需下一轮 QA |

---

## 1. 源头仓库分级

### A 级 · 正典源头

| 仓库 | 角色 | 萃取重点 | 优先级 |
|---|---|---|---|
| `moonstachain/yuanli-strategy-playbook` | 原力战略白皮书与绿皮书源头 | 母公理、借势×合力、七册结构 | P0 |
| `moonstachain/yuanli-strategy-trilogy-private` | 三部曲私有知识总纲 | 三部重构、文脉总纲、概念地图 | P0 |
| `moonstachain/yuanli-strategy-trilogy` | 三部曲公开知识总纲 | 公开 SSOT、概念地图、外显表达 | P0 |
| `moonstachain/yuanli-os-greenbook` | 原力 OS 绿皮书正典 | 文脉 / 大脑 / 地图 / 链路、递归回写 | P0 |
| `moonstachain/yuanli-startup-map-site` | 原力创业通关地图与网站 | 四关、通关地图、创业交互表达 | P0 |
| `moonstachain/yuanli-startup-greenbook` | 原力创业绿皮书 | 创业理论正文、四关实操 | P0 |
| `moonstachain/yuanli-startup-map-book` | 借势合力与创业地图书稿 | 创业书稿表达、通关地图内容 | P1 |

### B 级 · OS / 大脑 / 技能支撑源

| 仓库 | 角色 | 萃取重点 | 优先级 |
|---|---|---|---|
| `moonstachain/yuanli-brain` | 原力大脑 / 知识系统 | 文脉、大脑、地图、链路支撑材料 | P1 |
| `moonstachain/yuanli-os-skills-pack` | OS skills 包 | skill 化、可复用能力 | P1 |
| `moonstachain/yuanli-os-orange-book` | 治理 OS | 哲学层、治理层、价值观与边界 | P1 |

### C 级 · 外显产品与战略地图源

| 仓库 | 角色 | 萃取重点 | 优先级 |
|---|---|---|---|
| `moonstachain/dixin-strategy-cockpit` | 战略座舱 | 地图 / 座舱表达范式 | P2 |
| `moonstachain/yuanli-narrative-strategy-map` | 叙事战略地图 | 缘起、叙事、外显结构 | P2 |
| `moonstachain/osa-strategy-card-distiller` | OSA 战略卡萃取 | OSA、卡片化、蒸馏流程 | P2 |

---

## 2. 萃取维度

每个源头仓库按以下维度萃取：

```text
1. 概念：核心术语、定义、边界
2. 结构：章节、模型、流程、地图
3. 证据：关键论证、案例、判断、原话
4. 实操：清单、模板、SOP、prompt、workflow
5. 产物：网页、表格、图、看板、代码结构
6. 接口：可以回写到资产 / 创业 / OS / 跨三部的什么位置
```

---

## 3. 回写纪律

任何萃取结果不得直接污染 `CONSTITUTION.md`。先进入：

```text
source/extracts/
```

再经裁决进入：

```text
docs/
manuscript/
CONSTITUTION.md
```

---

## 4. 当前主线

```text
把 12 个正典模块从 module-canon seed 升级为可教学、可验证、可回写、可交给 Codex / Agent 继续生产的内容资产包。
```

主线文件：

```text
assets/MODULE-ASSET-PACK-STANDARD.md
assets/MODULE-ASSET-PACK-COVERAGE-v1.md
docs/whiteboard-data.js
brain/evidence/2026-06-30-trilogy-systemization-v1.md
```
