# 原力战略三部曲 · Backwrite Protocol v1

> 本文件定义任务完成后的递归回写协议。没有回写，不算 Done。

---

## 0. 核心裁决

```text
任务完成 ≠ 系统变强。
只有任务输出被验证、沉淀、索引、回写，并能成为下一次输入，才算系统变强。
```

---

## 1. 回写四层

每个任务完成后，必须判断回写到哪一层：

```text
C1 一纸文脉：更新身份、边界、风格、禁止事项、长期承诺
C2 一个大脑：更新知识、案例、术语、样例、数据、版本记录
C3 一张地图：更新战略地图、能力组件、控制点、瓶颈、路径
C4 一条链路：更新 SOP、Agent workflow、Codex task、自动化流程、Skill
```

---

## 2. Evolution Note 最小格式

```text
# Evolution Note

## 任务

## 输入

## 输出

## 验收结果

## 学到什么

## 哪些判断被强化

## 哪些判断被推翻

## 回写位置
- 文脉：
- 大脑：
- 地图：
- 链路：

## 下一次如何复用

## 是否需要新开 Issue
```

---

## 3. Done 前检查

任何 Issue / Codex Task / Agent Workflow 进入 Done 前，必须回答：

```text
1. 输出物是否存在？
2. 验收标准是否满足？
3. 是否有证据？
4. 是否写了 Evolution Note？
5. 是否明确回写位置？
6. 是否更新了对应 docs / brain / codex / project？
7. 是否说明下一次如何复用？
```

如果任一项为否：

```text
不得 Done，只能进入 Review 或 Backwrite。
```

---

## 4. 回写目标表

| 输出类型 | 优先回写位置 |
|---|---|
| 新概念 / 命名 / 裁决 | `source/extracts/` → `docs/` → 必要时 `CONSTITUTION.md` |
| 用户案例 / 项目案例 | `brain/cases/` |
| 好输出 / 坏输出 | `brain/examples/` |
| 工作流 / SOP | `brain/workflows/` + `codex/` |
| 任务复盘 | `brain/evolution-notes/` |
| 白板节点 / 控制点 | `docs/whiteboard-data.js` |
| 看板规则 | `project/` |
| Codex 任务模式 | `codex/` |

---

## 5. 回写优先级

```text
P0 宪法级：影响母公理、三部边界、核心公式、十二模块
P1 系统级：影响白板、任务链、回写机制、OS结构
P2 项目级：影响具体页面、模板、工具、Issue
P3 打磨级：文案、样式、交互细节、低风险优化
```

P0 不得直接改 `CONSTITUTION.md`，必须先进入 `source/extracts/` 或 `docs/` 形成裁决草案。

---

## 6. 反模式

```text
做完页面但不更新导航
写完内容但不进入索引
完成任务但不记录证据
关闭 Issue 但没有回写
让 Codex 自由发挥但无验收
把白板做成漂亮图但不能派工
把大脑做成资料夹但不可检索
```

---

## 7. 最终原则

```text
每一次交付，都必须让下一次更准、更快、更强。
```
