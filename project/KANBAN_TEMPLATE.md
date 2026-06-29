# Project Kanban Template · 原力战略三部曲

> 看板不是任务堆积处，而是 ʸx 递归系统的运行界面。

---

## 1. 推荐列

```text
00 Inbox / 灵感入口
01 Triage / 归属裁决
02 Concept / 概念治理
03 Design / 方案设计
04 Codex Ready / 可执行
05 In Progress / 执行中
06 Review / 验收中
07 Done / 已完成
08 Backwrite / 回写沉淀
```

---

## 2. 标签体系

### 归属标签

```text
area: asset
area: startup
area: os
area: cross-trilogy
area: governance
```

### 任务类型

```text
type: concept
type: content
type: product
type: codex
type: docs
type: research
type: automation
```

### 优先级

```text
P0 constitution
P1 system
P2 project
P3 polish
```

### 状态补充

```text
needs-context
needs-decision
codex-ready
blocked
backwrite-needed
```

---

## 3. 看板字段

| 字段 | 说明 |
|---|---|
| Area | 资产 / 创业 / OS / 跨三部 |
| Spine | 服务哪条共享脊骨 |
| Output | 输出物 |
| Acceptance | 验收标准 |
| Backwrite | 回写位置 |
| Codex | 是否适合 Codex 执行 |

---

## 4. Issue 卡片最小格式

```text
## 背景

## 归属
- Area:
- Spine:

## 输入

## 输出

## 验收标准

## 回写位置

## 是否适合 Codex
```

---

## 5. Done 的定义

一个任务只有满足以下条件，才进入 Done：

```text
输出物已生成
验收标准已满足
回写位置已明确
必要时已更新 docs / codex / project
下一次复用方式已写明
```

否则只能进入 Review 或 Backwrite。
