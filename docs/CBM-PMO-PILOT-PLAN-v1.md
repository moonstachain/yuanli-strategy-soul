# CBM-PMO Pilot Plan v1

> 本文件记录 #109 的第一批 3 个 CBM Cell 端到端试点。
>
> 父级 EPIC：#106  
> Pilot Task：#109  
> 上游 Registry：`docs/CBM-CELL-REGISTRY-v1.md`  
> 数据源：`docs/os-cbm-data.js`

---

## 0. 试点目标

```text
验证 CBM Cell 是否可以驱动 C3 Gap、派生 C4 Task、生成 Evidence Review、形成 Evolution Note，并回写到 CBM 与 PMO Dashboard。
```

---

## 1. 试点链路

```text
CBM Cell
→ C3 Gap Issue
→ C4 Task Issue
→ Evidence Review
→ Evolution Note
→ Dashboard Update
→ CBM Backwrite
```

---

## 2. 第一批试点组合

| Pilot | CBM Cell | C3 Gap | C4 Task | 目标 |
|---|---|---|---|---|
| P1 | `strategy.direct.os-governance-core` | #112 | #115 | 建立 OS 治理内核 evidence-backed control loop |
| P2 | `client.control.project-portfolio-governance` | #113 | #116 | 用真实或匿名客户项目验证项目组合治理 |
| P3 | `engineering.execute.operator-skill-reuse` | #114 | #117 | 用 dry-run 验证 Operator Skill 多机复用 |

---

## 3. Pilot P1 · OS Governance Core

### CBM Cell

```text
strategy.direct.os-governance-core
```

### 目标

防止后续任务滑回普通页面优化、Issue 堆积、假绿状态。

### 必须产出

```text
docs/OS-GOVERNANCE-CONTROL-LOOP-v1.md
brain/evidence/2026-06-30-os-governance-control-loop.md
brain/evolution-notes/2026-06-30-os-governance-control-loop.md
```

### 升级判断

```text
seed → draft：完成 control loop checklist。
draft → validated：Evidence Review 至少 medium。
```

---

## 4. Pilot P2 · Client Project Portfolio Governance

### CBM Cell

```text
client.control.project-portfolio-governance
```

### 目标

证明 CBM-PMO 不是内部工程自嗨，而是能服务真实客户项目、交付承诺和商业验证。

### 必须产出

```text
docs/CLIENT-PROJECT-PORTFOLIO-PILOT-v1.md
brain/evidence/2026-06-30-client-project-portfolio-pilot.md
brain/evolution-notes/2026-06-30-client-project-portfolio-pilot.md
```

### 升级判断

```text
seed → draft：完成匿名客户项目模板。
draft → validated：至少一个真实或匿名项目 evidence ≥ medium。
```

---

## 5. Pilot P3 · Operator Skill Reuse

### CBM Cell

```text
engineering.execute.operator-skill-reuse
```

### 目标

证明 C4 工程自动化不是模板堆积，而是可通过 Skill / Codex / Agent workflow 复用。

### 必须产出

```text
docs/OPERATOR-SKILL-REUSE-DRYRUN-v1.md
brain/evidence/2026-06-30-operator-skill-reuse-dryrun.md
brain/evolution-notes/2026-06-30-operator-skill-reuse-dryrun.md
```

### 升级判断

```text
seed → draft：完成 dry-run plan。
draft → validated：完成 evidence-backed dry-run。
```

---

## 6. Evidence Review 模板

每个 Pilot 必须生成 Evidence Review：

```text
## Evidence Review

### Source Gap

### C4 Task

### CBM Cell

### Evidence Path

### Evidence Strength
- none / weak / medium / strong

### Accepted

### Missing

### State Proposal
- previous:
- next:

### Backwrite Target

### Next Reuse
```

---

## 7. Evolution Note 模板

```text
# Evolution Note

## Task

## Input

## Output

## Acceptance Result

## What Changed

## What Was Strengthened

## What Was Refuted

## CBM Cell Backwrite
- Cell:
- Previous Status:
- New Status:
- Evidence:
- Remaining Bottleneck:
- Next C4 Task:

## Next Reuse
```

---

## 8. Done 标准

#109 不得 Done，除非：

```text
1. 3 个 C3 Gap 已创建。
2. 3 个 C4 Task 已创建。
3. 每个 Task 有 Evidence Review。
4. 每个 Task 有 Evolution Note。
5. docs/os-cbm-data.js 已回写状态。
6. docs/CBM-PMO-PILOT-REPORT-v1.md 已创建。
```

---

## 9. 下一步

```text
执行 #115 → #116 → #117。
完成后进入 Evidence Review 与 Pilot Report。
```
