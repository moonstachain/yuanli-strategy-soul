# 原力战略三部曲 · 下一阶段关键任务 v1

Date: 2026-06-30
Stage: v1.1 Validation OS Seed -> v1.2 Validation Loop

## Strategic Principle

下一阶段的核心不是继续扩写，而是让系统开始被真实使用、真实验证、真实回写。

```text
新增内容必须服务验证。
验证必须产生证据。
证据必须更新成熟度。
成熟度必须进入 PMO。
```

## Priority 0 · PMO Sync Patch

### Goal

让 PMO 能识别并治理新型任务：

```text
C2 Brain Validation
B2 Deepening Task
```

### Why

#128 与 #129 已经创建，但如果自动同步脚本不能识别这些类型，它们会游离于 PMO 数据模型之外。

### Required Work

- Update scripts/sync-pmo-dashboard.js
- Add task classification:
  - brain_validation
  - deepening_task
- Ensure PMO Dashboard includes #128 and #129
- Keep C2 score as 32 / 40, Validated Strategy+, P0.5

### Acceptance

- PMO data includes #128
- PMO data includes #129
- PMO gap ranking points to B2 Deepening Task

## Priority 1 · #128 C2 Brain Validation

### Goal

把 C2 从 Validation 2/5 推进到 3/5。

### Required Trials

#### Trial 2

```text
C2 一个大脑当前距离产品化还缺什么？
```

Expected:

```text
C2 已达到 32/40 和 Validated Strategy+，但还缺 Trial 2/3、真实使用场景、真实回写样例和真实用户验证。
```

#### Trial 3

```text
一个真实学员案例应该如何写回原力大脑？
```

Expected:

```text
根据案例类型写入 brain/cases/、模块 real-cases 或 evidence；如形成可复用学习，进入 evolution note；如可能更新正典，进入 canonical candidate。
```

### Acceptance

- validation-records.md updated
- WRITEBACK-LOG.md updated
- C2 evolution updated
- maturity scorecard updated if C2 reaches Validation 3/5

## Priority 2 · #129 B2 Deepening Task

### Goal

让 B2 从 seed productization potential 进入小范围产品化验证准备状态。

### Required Files

```text
assets/B2-品类独创/naming-test.md
assets/B2-品类独创/user-language.md
assets/B2-品类独创/validation-records.md
```

### Why

C2 Trial 1 已经判断：B2 可以小范围验证，但不能规模化售卖。关键缺口是命名测试、用户语言采集和真实验证记录。

### Acceptance

- naming-test.md created
- user-language.md created
- validation-records.md created
- B2 evidence updated
- scorecard updated if validation improves

## Priority 3 · First Real Validation Design

### Goal

设计 5-10 人 B2 品类独创小范围验证。

### Trial Design

| Item | Design |
|---|---|
| Participants | 5-10 个专家型个体或早期创业者 |
| Duration | 90-120 分钟 |
| Output | 每人完成 B2 品类独创卡 |
| Test | 品类命名能否被用户复述 |
| Evidence | user-language.md + validation-records.md |

### Acceptance

- 至少 5 个命名样本
- 至少 5 条用户原话
- 至少 3 个可复述的一句话品类定义

## Priority 4 · Expand P0 Validation

After B2, expand to:

```text
A4 显化原力
B1 原力借势
B3 模式升维
B4 壁垒锁定
C4 一条链路
```

### Rule

每个 P0 模块至少补齐：

```text
validation-records.md
real-cases.md or user-language.md
metric or scoring template
```

## Sequence

```text
1. PMO Sync Patch
2. Run #128 Trial 2 / Trial 3
3. Execute #129 B2 Deepening files
4. Design 5-10 person B2 validation
5. Update maturity scorecard
6. Expand P0 validation to A4/B1/B3/B4/C4
```

## Target v1.2

```text
C2 Validation: 3/5
B2 Validation: 2/5 or higher
PMO recognizes brain_validation and deepening_task
First real validation design ready
```
