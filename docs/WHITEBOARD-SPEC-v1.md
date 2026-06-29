# 原力战略白板 OS · v1.0 规格

> 本文件定义 `docs/whiteboard.html` 的第一性目标、信息架构、节点模型、交互方式、验收标准与禁止事项。

---

## 0. 一句话定义

```text
原力战略白板 OS，是把正典、文脉、大脑、战略地图、任务链路与递归回写装进同一张可运行白板的事业系统控制台。
```

它不是：

```text
不是思维导图
不是概念陈列
不是流程图
不是漂亮但不能决策的信息图
不是一次性项目页面
```

它必须回答：

```text
什么最重要？
什么是控制点？
什么是瓶颈？
什么先做？
什么不做？
交给谁做？
做完回写到哪里？
```

---

## 1. 白板四层结构

```text
L0 · 北极星层：母公理、总命题、当前战略焦点
L1 · 正典层：三部曲 / 十二模块 / 核心公式
L2 · 事业地图层：用户、机会、产品、模式、壁垒、能力组件
L3 · 任务链路层：Issue、Codex Task、Agent Workflow、SOP
L4 · 回写治理层：Evidence、Evolution Note、Backwrite、版本记录
```

---

## 2. 画布三区布局

```text
左侧：Canon Tree
- 原力资产
- 原力创业
- 原力OS
- 十二模块

中区：Strategy Map
- 当前节点
- 上游输入
- 下游输出
- 控制点
- 瓶颈
- 任务链

右侧：Node Inspector
- 定义
- 不是它
- 第一性问题
- 输入
- 判断标准
- 输出
- 回写位置
- 下一步接口
```

底部：

```text
Action Rail
- 生成 Issue
- 生成 Codex Task
- 复制 Markdown
- 写 Evolution Note
- 标记回写位置
```

---

## 3. 节点类型

| 类型 | 用途 | 示例 |
|---|---|---|
| Canon Node | 正典模块 | A1 发现母体、C3 一张地图 |
| Context Node | 文脉与边界 | 一纸文脉、品味函数、禁止事项 |
| Brain Node | 知识与案例 | 术语库、案例库、样例库 |
| Market Node | 用户与机会 | 天选用户、贵问题、心理账户 |
| Business Node | 商业系统 | 利润容器、产品阶梯、三链路 |
| Capability Node | 能力组件 | 内容能力、交付能力、数据能力、壁垒能力 |
| Task Node | 行动任务 | GitHub Issue、Codex Task、Agent Workflow |
| Evidence Node | 证据与回写 | 客户案例、成交证据、Evolution Note |

---

## 4. 节点状态

```text
missing      缺失，尚未建立
seed         有种子，但不完整
draft        已有草稿，可讨论
validated    已被案例或市场验证
operating    已进入运行
compounding  已能递归增强下一轮
```

状态不得虚标。缺数据必须显示 `missing` / `待确认` / `待采集`。

---

## 5. 节点数据模型

```json
{
  "id": "C3",
  "type": "Canon Node",
  "part": "原力OS",
  "name": "一张地图",
  "status": "draft",
  "definition": "...",
  "not": "...",
  "first_principle_question": "...",
  "inputs": [],
  "standards": [],
  "outputs": [],
  "writeback": [],
  "upstream": [],
  "downstream": [],
  "control_points": [],
  "risks": [],
  "tasks": [],
  "evidence": []
}
```

---

## 6. 白板必须支持的动作

```text
1. 浏览三部曲正典树。
2. 点击任一节点，在 Inspector 展示说明书。
3. 展示上游输入与下游接口。
4. 展示控制点、瓶颈、风险、下一步任务。
5. 复制当前节点为 Markdown。
6. 生成 Codex-ready Task 草案。
7. 记录 Evolution Note 草案。
8. 标记回写位置。
```

v1.0 先做静态 HTML + JS。本地保存、GitHub 写入、自动开 Issue 作为 v1.1。

---

## 7. Deep-Space Cockpit 视觉原则

```text
暗色底
暖金强调
象牙白正文
高信息密度
稳定面板
固定 KPI 单元
少装饰，多判断
不使用紫蓝 AI 渐变
不使用装饰性光斑
不使用过度嵌套卡片
不隐藏不确定性
```

---

## 8. 验收标准

```text
1. docs/whiteboard.html 可直接通过 GitHub Pages 打开。
2. 能展示十二模块。
3. 能切换节点。
4. 每个节点至少显示：定义、第一性问题、输入、输出、回写、下一步。
5. 能复制 Markdown。
6. 能生成 Codex-ready Task 文本。
7. 能生成 Evolution Note 草案。
8. 风格与 Canon Map 一致，但更像战略控制台。
9. 不修改母公理、三部边界和十二模块结构。
```
