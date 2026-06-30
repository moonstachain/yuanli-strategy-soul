# Module Asset Pack Coverage v1

Date: 2026-06-30
Status: coverage registry

> 本文件记录 12 个正典模块资产包的当前覆盖状态。它用于 PMO 与 Codex 判断下一步该补哪个文件，不替代各模块目录内的具体资产文件。

---

## 1. Coverage Rule

每个模块资产包的目标文件：

```text
module-canon.md
teaching-outline.md
cases.md
assignments.md
scripts.md
evidence.md
evolution.md
```

当前状态分级：

```text
seed       有种子，可继续生产
sample     已作为样板模块重点展开
pending    待补齐或待验证
```

---

## 2. Priority Samples

| Module | Status | Reason |
|---|---|---|
| A1 发现母体 | sample | 三部曲源头，决定不可复制母体候选 |
| B1 原力借势 | sample | 从原力进入时代势能与市场入口 |
| C3 一张地图 | sample | Whiteboard OS 与 PMO 的战略判断枢纽 |

---

## 3. Twelve-module Coverage

| Part | Module | PMO Issue | Asset Status | Next Gap |
|---|---|---|---|---|
| 原力资产 | A1 发现母体 | #86 | sample | 补真实 evidence 与学员作业样本 |
| 原力资产 | A2 回到母体 | #87 | seed | 扩展 cases / scripts |
| 原力资产 | A3 获得原力 | #88 | seed | 扩展 assignments / evidence |
| 原力资产 | A4 显化原力 | #89 | seed | 增加市场验证记录模板 |
| 原力创业 | B1 原力借势 | #90 | sample | 补势能扫描真实案例 |
| 原力创业 | B2 品类独创 | #91 | seed | 增加用户语言库样例 |
| 原力创业 | B3 模式升维 | #92 | seed | 增加三链路财务样例 |
| 原力创业 | B4 壁垒锁定 | #93 | seed | 增加 16 控制点案例 |
| 原力 OS | C1 一纸文脉 | #94 | seed | 增加真实文脉样例 |
| 原力 OS | C2 一个大脑 | #95 | seed | 增加索引制度样例 |
| 原力 OS | C3 一张地图 | #96 | sample | 跑 Whiteboard OS evidence |
| 原力 OS | C4 一条链路 | #97 | seed | 增加 Codex-ready task 样例 |

---

## 4. Next Production Rule

下一轮 Codex / Agent 不再从零生成内容，而是按以下顺序补齐：

```text
1. 优先补 sample 模块的真实 evidence。
2. 再补 seed 模块的 missing / weak 文件。
3. 每次补齐必须写 evolution.md。
4. 只有通过 Rubric 的 learning 才能进入 Canon。
```

---

## 5. Writeback

- Registry: `docs/TRILOGY-12-MODULE-PMO-REGISTRY.md`
- Whiteboard: `docs/whiteboard-data.js`
- Current State: `docs/CURRENT-STATE.md`
- Evidence: `brain/evidence/`
- Evolution: `brain/evolution-notes/`
