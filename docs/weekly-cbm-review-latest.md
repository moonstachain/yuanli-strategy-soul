# Weekly CBM Review · 2026-06-30

> Issue: #111  
> Parent EPIC: #106  
> Protocol: `docs/CBM-WEEKLY-EVOLUTION-REVIEW-v1.md`  
> Cockpit Source: `docs/cbm-capability-cockpit-data.js`  
> Cockpit View: `docs/cbm-capability-cockpit.html`

---

## 1. System Health

```text
Stage: Pilot Evidence Consolidation
Overall maturity: 3.1 / 5
Total CBM cells: 18
Draft cells: 3
Validated cells: 0
Backwrite coverage: 3 / 18
False-green risks: 0
```

本周系统从：

```text
试点证据散落在文件中
```

推进到：

```text
Cockpit 可以读取稳定事实源并展示能力状态、证据、瓶颈、下一步和人工审批门。
```

---

## 2. Capability Changes

| CBM Cell | Previous | Current | Evidence | Decision |
|---|---|---|---|---|
| `strategy.direct.os-governance-core` | seed / weak | draft / medium | OS Governance Control Loop + Evidence + Evolution Note | keep draft |
| `client.control.project-portfolio-governance` | seed / weak | draft / medium | Anonymous client project pilot + Evidence + Evolution Note | keep draft |
| `engineering.execute.operator-skill-reuse` | seed / weak | draft / medium | Operator Skill dry-run + Evidence + Evolution Note | keep draft |

---

## 3. Evidence Strength

当前三条 pilot cell 都是：

```text
medium evidence
```

这说明：

```text
系统已经有结构化产物、证据文件、演化记录和回写路径。
```

但不能说明：

```text
已经经过真实客户侧确认、重复项目运行、自动化周复盘消费或 live multi-tool execution。
```

---

## 4. False Green Risk

当前假绿风险：

```text
0 active false-green risk
```

原因：

```text
所有 pilot cells 均明确标记为 draft / medium / not validated。
没有任何 pilot cell 被提升为 validated / operating / compounding。
```

继续禁止：

```text
closed issue = capability maturity
medium evidence = validated
beautiful dashboard = operating system
```

---

## 5. Backwrite Coverage

当前覆盖：

```text
3 / 18 CBM cells
```

已完成 backwrite 的 cells：

```text
strategy.direct.os-governance-core
client.control.project-portfolio-governance
engineering.execute.operator-skill-reuse
```

仍未覆盖：

```text
15 seed / weak cells
```

---

## 6. Human Decisions Needed

| Decision | Why |
|---|---|
| 是否将 P0 gate 作为 Dashboard 默认准入规则 | 影响未来所有 P0 Issue 的进入标准 |
| 是否将客户项目四元组纳入 Node Inspector 默认字段 | 影响客户项目治理是否成为标准工作流 |
| 是否将 client-project-governance-to-evidence-backwrite 纳入 reusable skill package | 影响 Operator Skill 是否进入工程复用层 |

这些判断必须由人类批准，不得由 Agent 自动升级为正典。

---

## 7. Next P0 Capability

本周之后的唯一 P0 Capability：

```text
CBM-PMO v1.1 Auto Sync Contract
```

原因：

```text
Cockpit 已经可见，但稳定数据源、PMO 同步文件、Dashboard 页面、Weekly Review 之间还没有形成自动同步契约。
```

下一步 C4 Task：

```text
Define sync contract between cbm-capability-cockpit-data.js, os-cbm-data.js, pmo-dashboard-data.js, and weekly review generator.
```

---

## 8. Canonical Candidates

候选，不进入正典：

```text
A CBM Cell becomes real only when it has a C3 Gap, a C4 Task, Evidence, Evolution Note, and a Backwrite path.
```

```text
A dashboard is not a dashboard until it can show evidence, bottleneck, next task, human gate, and backwrite.
```

进入正典前需要：

```text
至少一次真实客户项目复用，或一次 live multi-tool execution，或一次完整 weekly review 自动生成。
```

---

## 9. Do Not Upgrade Yet

不得升级：

```text
strategy.direct.os-governance-core → validated
client.control.project-portfolio-governance → validated
engineering.execute.operator-skill-reuse → validated
```

不得改：

```text
CONSTITUTION.md
```

不得做：

```text
把 Cockpit 页面完成等同于 CBM-PMO 系统 operating。
```

---

## 10. Next Review Inputs

下次 Weekly Review 应读取：

```text
docs/cbm-capability-cockpit-data.js
docs/cbm-capability-cockpit.html
docs/os-cbm-data.js
docs/weekly-cbm-review-latest.md
brain/evolution-notes/2026-06-30-cbm-pmo-review.md
GitHub Issues after #111
```
