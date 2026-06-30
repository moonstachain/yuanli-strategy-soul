# CBM Weekly Evolution Review v1

> Issue: #111  
> Parent EPIC: #106  
> Date: 2026-06-30  
> Stable Cockpit Source: `docs/cbm-capability-cockpit-data.js`  
> Latest Review: `docs/weekly-cbm-review-latest.md`

---

## 0. 一句话定义

```text
Weekly PMO → CBM Evolution Review，是把每周 PMO 执行结果、Evidence、Evolution Note 与 Cockpit 状态，转化为 CBM Cell 级别的成熟度判断、状态边界、下周唯一 P0 和回写建议的治理节奏。
```

它不是：

```text
不是普通周报。
不是任务完成列表。
不是 Dashboard 截图复述。
不是把 medium evidence 强行升级为 validated。
```

它必须回答：

```text
本周哪个能力真的变强？
证据强到什么程度？
哪些能力不能升级？
哪些 Issue 完成但没有回写？
下周唯一 P0 Capability 是什么？
哪些判断只是 canonical candidate，不能进入正典？
```

---

## 1. Review 输入

### 1.1 稳定事实源

```text
docs/cbm-capability-cockpit-data.js
```

原因：

```text
docs/pmo-dashboard-data.js 会被 PMO / GitHub Actions 同步流程覆盖，不能作为 CBM Cockpit 的唯一事实源。
```

### 1.2 补充输入

```text
docs/CBM-PMO-PILOT-REPORT-v1.md
docs/CBM-CAPABILITY-COCKPIT-SPEC-v1.md
docs/cbm-capability-cockpit.html
brain/evidence/*.md
brain/evolution-notes/*.md
GitHub Issues #106-#117
```

---

## 2. Review 输出

每次 Weekly Review 至少生成：

```text
docs/weekly-cbm-review-latest.md
brain/evolution-notes/YYYY-MM-DD-cbm-pmo-review.md
```

后续可由脚本生成：

```text
scripts/generate-weekly-cbm-review.js
```

---

## 3. Review 顺序

```text
1. Read Cockpit stable data source.
2. List system health.
3. List pilot cells and status boundary.
4. Check evidence strength.
5. Check false-green risk.
6. Check backwrite coverage.
7. Identify human decision gates.
8. Select next P0 Capability.
9. Produce weekly review.
10. Produce evolution note draft.
11. Human approves or rejects status upgrade / canonical candidate.
```

---

## 4. 状态升级门槛

### 4.1 允许的状态

```text
missing → seed → draft → validated → operating → compounding
```

### 4.2 本轮状态边界

当前三个 pilot cells 只允许保持：

```text
draft / medium evidence / not validated
```

不得升级为：

```text
validated / operating / compounding
```

原因：

```text
目前只有内部证据、匿名样本和 dry-run；没有真实客户侧确认、重复运行、Dashboard 周期消费或 live multi-tool execution。
```

---

## 5. 假绿检查

每周必须检查：

```text
No evidence, no green.
No Evidence Review, no validated.
No Evolution Note, no Done.
No Backwrite, no compounding.
```

Cell 进入风险区的条件：

```text
status >= validated but evidence <= weak
evidence_path missing
evolution_note missing
next_c4_task missing
approval_gate hidden
issue closed but backwrite missing
```

---

## 6. 下周唯一 P0 选择规则

Next P0 Capability 必须同时满足：

```text
1. 对整体系统成熟度提升最大。
2. 能消除当前最大瓶颈。
3. 能让下一轮 Review 更强。
4. 有明确 C4 Task。
5. 有 Evidence / Evolution / Backwrite 目标。
```

v1 默认排序：

```text
gap_score desc
then validation weakness
then backwrite value
then human decision needed
then automation leverage
```

---

## 7. 本轮 Review 的第一性判断

当前 CBM-PMO v1.0 已完成：

```text
Spec → Registry → 3-cell Pilot → Cockpit Spec → Stable Data Source → Cockpit View
```

但还没有进入：

```text
weekly operating rhythm
real client validation
live multi-tool automation
validated capability state
```

因此 #111 的关键价值是把 Cockpit 从“可见页面”推进到“可复盘节奏”。

---

## 8. Weekly Review 模板

```markdown
# Weekly CBM Review · YYYY-MM-DD

## 1. System Health

## 2. Capability Changes

## 3. Evidence Strength

## 4. False Green Risk

## 5. Backwrite Coverage

## 6. Human Decisions Needed

## 7. Next P0 Capability

## 8. Canonical Candidates

## 9. Do Not Upgrade Yet

## 10. Next Review Inputs
```

---

## 9. Done 标准

#111 完成需要满足：

```text
1. 有 Weekly CBM Review 机制文件。
2. 有本周 latest review 文件。
3. 有本周 evolution note。
4. 有生成脚本草案。
5. #111 Issue 中明确下一步。
6. 不污染 CONSTITUTION.md。
7. 不把任何 pilot cell 升级为 validated。
```
