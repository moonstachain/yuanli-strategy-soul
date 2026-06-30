# C2 · Brain Writeback Protocol v1

Date: 2026-06-30
Module: C2 一个大脑

## Purpose

定义原力大脑如何把行动、证据、复盘和学习写回系统，让每一次输出都成为下一次输入。

## Mother Axiom

```text
做会自我繁殖的事，不做一次性的事。
```

因此，C2 的每次重要调用都要判断是否需要回写。

## Writeback Decision Tree

### 1. 不写回

适用于：临时性查询、无长期价值、无新信息。

### 2. 写入 inbox

适用于：有价值但未分类的新材料。

```text
brain/inbox/
```

### 3. 写入 evidence

适用于：可以证明某项任务、模块或判断的材料。

```text
brain/evidence/
assets/<module>/evidence.md
```

### 4. 写入 evolution note

适用于：行动后产生了可复用学习。

```text
brain/evolution-notes/
assets/<module>/evolution.md
```

### 5. 写入 canonical candidate

适用于：学习可能更新正典、课程规则、PMO 规则或 Agent 规则，但尚未人工批准。

```text
brain/canonical-learning/
```

### 6. 更新 maturity scorecard

适用于：新增证据、真实验证、商业化测试或模板加厚。

```text
docs/TRILOGY-ASSET-MATURITY-SCORECARD-v1.md
```

### 7. 生成 C4 task

适用于：发现了明确缺口，且可以形成可执行任务。

```text
GitHub Issue / C4 Task Draft
```

## Standard Writeback Record

建议每次重要回写使用：

```md
# Writeback Record

Date:
Source Query:
Source Files:
Related Module:
Evidence Strength:
Decision:
Writeback Target:
Next C4 Action:
```

## Writeback Levels

| Level | Meaning | Example |
|---|---|---|
| L0 | No writeback | 临时查询 |
| L1 | Inbox capture | 新想法、新材料 |
| L2 | Evidence writeback | 学员反馈、客户访谈 |
| L3 | Evolution writeback | 形成可复用学习 |
| L4 | Canonical candidate | 可能更新正典 |
| L5 | Canon approved | 人工批准进入正典 |

## Evidence Strength Update

新增材料后，应重新评估证据强度：

| Strength | Trigger |
|---|---|
| weak | 只有内部判断或草稿 |
| medium | 有文件、项目记录或内部试跑 |
| strong | 有真实学员、客户、市场反馈或多源验证 |

## Maturity Update Rule

当新增以下文件时，应更新成熟度评分卡：

```text
validation-records.md
pricing-test.md
real-cases.md
worksheets.md
rubric.md
industry-cases.md
operating-examples.md
```

## Canon Boundary

```text
Evolution Note is not Canon.
Canonical Candidate is not Canon.
Only approved Canonical Learning may update strategy, curriculum, PMO rules, or agent operating rules.
```

## C2 to C3/C4 Handoff

当 C2 发现缺口时：

```text
C2 identifies gap -> C3 ranks gap -> C4 creates task -> Evidence verifies output -> C2 writes back learning
```

## Governance Rule

C2 不是被动存档，而是主动判断：

```text
这个输入是否值得长期记住？
这个判断是否有证据？
这个缺口是否需要任务？
这个学习是否可能进入正典？
```
