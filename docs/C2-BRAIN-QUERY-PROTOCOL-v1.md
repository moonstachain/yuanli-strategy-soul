# C2 · Brain Query Protocol v1

Date: 2026-06-30
Module: C2 一个大脑

## Purpose

定义原力大脑如何回答问题。目标不是返回相关文件，而是给出带证据、带缺口、带下一步行动的综合判断。

## Query Modes

### 1. Search Mode

用于找资料、找文件、找引用。

```text
返回：相关页面、文件路径、基础摘要
```

### 2. Think Mode

用于形成判断。

```text
返回：综合结论、证据引用、未知缺口、下一步行动
```

### 3. Gap Mode

用于找短板。

```text
返回：缺什么、影响什么、优先级、建议任务
```

### 4. Writeback Mode

用于完成行动后的回写。

```text
返回：应写入哪里、是否生成 evidence、是否生成 evolution note、是否进入 candidate
```

## Standard Answer Format

任何 C2 Think 回答，都应尽量包含：

```text
1. Direct Answer
2. Evidence
3. Related Modules
4. Maturity State
5. Gap Analysis
6. Next C4 Action
7. Writeback Suggestion
```

## Evidence Rule

回答必须区分三类内容：

| Type | Meaning |
|---|---|
| Cited | 有明确文件或 evidence 支撑 |
| Inferred | 基于已有材料推断 |
| Unknown | 大脑不知道，需补充输入或验证 |

## Example Query 1

```text
A4 显化原力现在能不能产品化？
```

Expected Answer:

```text
结论：可以做小范围验证，不建议直接规模化售卖。
证据：A4 已有 seed asset package；scorecard 中商业化准备度较高，但真实验证仍为 1/5。
缺口：缺 validation-records.md 与 pricing-test.md。
下一步：创建 A4 P0 Deepening Issue，完成 5-10 人试跑。
回写：试跑结果写入 validation-records.md，并更新 maturity scorecard。
```

## Example Query 2

```text
哪些模块最应该先加厚？
```

Expected Answer:

```text
P0：A4、B1、B2、B3、B4、C4。
理由：这些模块连接市场验证、商业化和 OS 行动闭环。
缺口：真实验证均为 1/5。
下一步：为 P0 模块创建 Deepening Issues。
```

## Query Routing

| User Intent | Route |
|---|---|
| 找文件 | Search Mode |
| 问判断 | Think Mode |
| 问下一步 | Gap Mode + Think Mode |
| 完成任务后 | Writeback Mode |
| 做课程 / 产品化 | Think Mode + Maturity Scorecard |
| 做 PMO | Gap Mode + C4 Task |

## Quality Bar

好的 C2 回答必须满足：

```text
不只给资料；
不假装知道；
有证据路径；
能说明缺口；
能给下一步；
能建议回写位置。
```

## Anti-patterns

禁止的回答方式：

```text
只返回一堆文件；
没有引用就给确定判断；
不区分事实和推断；
不说明未知缺口；
不给下一步行动；
行动完成后不建议回写。
```
