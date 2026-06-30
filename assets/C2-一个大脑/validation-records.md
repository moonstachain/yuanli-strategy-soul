# C2 · 一个大脑 · Validation Records

Date: 2026-06-30
PMO Issue: #95
Priority: P0.5

## Purpose

记录 C2 原力大脑的真实查询、检索、判断和回写验证。当前文件是 seed 版本，后续要用真实学员、客户或项目试跑填充。

## Current Validation State

```text
Validation: 1 / 5
Reason: strategy package completed, but real retrieval and writeback trials are not yet completed.
```

## Validation Target

```text
Validation: 3 / 5
Requirement:
- 至少 3 个真实使用场景
- 至少 5 个查询样例
- 至少 3 个回写样例
```

## Trial 1 · Planned

### Query

```text
B2 品类独创现在是否可以产品化？
```

### Expected Evidence

- assets/B2-品类独创/
- docs/TRILOGY-ASSET-MATURITY-SCORECARD-v1.md
- docs/C2-BRAIN-QUERY-PROTOCOL-v1.md
- brain/QUERY-EXAMPLES.md

### Expected Output

```text
结论：可以做小范围验证，不建议直接规模化售卖。
缺口：缺 naming-test.md、user-language.md 和真实验证记录。
下一步：创建 B2 Deepening Task。
回写：试跑结果进入 validation-records.md 与 maturity scorecard。
```

### Result

Pending.

---

## Trial 2 · Planned

### Query

```text
C2 一个大脑当前距离产品化还缺什么？
```

### Expected Output

```text
C2 已达到 Strategy+ / P0.5 / 31/40，但 validation 仍为 1/5。
下一步补齐 retrieval-test、tagging-template、writeback-examples，并完成真实查询试跑。
```

### Result

Pending.

---

## Trial 3 · Planned

### Query

```text
一个真实学员案例应该如何写回原力大脑？
```

### Expected Output

```text
根据案例类型写入 brain/cases/、对应模块 real-cases 或 evidence；如形成可复用学习，写入 evolution note；如可能更新正典，写入 canonical candidate。
```

### Result

Pending.

## Update Rule

每次真实试跑后，更新：

```text
query
evidence used
answer quality
gap found
writeback target
result
score impact
```
