# Yuanli Brain · RESOLVER

> Module: C2 一个大脑  
> Issue: #141  
> Date: 2026-06-30

---

## 0. Purpose

```text
Resolver decides which brain object, workflow, skill, or C4 chain should be invoked for a given question.
```

C2 must not only answer. It must route.

---

## 1. Resolver Principle

```text
Search finds source material.
Think synthesizes judgment.
Resolver chooses the next executable route.
```

A good resolver must be:

```text
DRY: do not create duplicate skills or workflows.
MECE: routes should be mutually exclusive and collectively useful.
Human-gated: no validated / canon / external write without approval.
```

---

## 2. Route Types

```text
source_route
module_route
evidence_route
gap_route
c4_task_route
skill_route
writeback_route
human_gate_route
```

---

## 3. Resolver Table v0

| Intent | Route | Primary Files | Output |
|---|---|---|---|
| 判断模块是否可产品化 | module_route + evidence_route + gap_route | `assets/<module>/evidence.md`, `validation-records.md`, scorecard | cited readiness judgment |
| 判断缺什么证据 | gap_route | `brain/GAP-TYPES.md`, module evidence | gap classification |
| 判断下一步任务 | c4_task_route | validation records, PMO issues, C3/C4 docs | next C4 task |
| 判断是否可沉淀技能 | skill_route | `brain/SKILL-CANDIDATES.md`, repeated workflow artifacts | skillify decision |
| 判断写回哪里 | writeback_route | `assets/C2-一个大脑/writeback-examples.md`, `brain/WRITEBACK-LOG.md` | writeback target |
| 判断是否能升级成熟度 | human_gate_route | evidence, validation records, maturity scorecard | approval-needed decision |

---

## 4. B2 Query Route

### Query

```text
用 C2 判断：B2 品类独创是否已经具备产品化条件？证据是什么？缺口是什么？下一步 C4 任务是什么？是否存在可沉淀为 Skill 的重复流程？
```

### Resolver Decision

```yaml
primary_route: module_route
secondary_routes:
  - evidence_route
  - gap_route
  - c4_task_route
  - skill_route
  - writeback_route
human_gate_route:
  - productization readiness
  - validation score upgrade
  - skill publication
```

### Source routing

```yaml
module:
  - assets/B2-品类独创/
evidence:
  - assets/B2-品类独创/evidence.md
  - assets/B2-品类独创/validation-records.md
execution_pack:
  - assets/B2-品类独创/naming-test.md
  - assets/B2-品类独创/user-language.md
  - assets/B2-品类独创/workshop-runbook.md
  - assets/B2-品类独创/live-validation-checklist.md
gap:
  - brain/GAP-TYPES.md
graph:
  - brain/CANON-GRAPH.md
skill:
  - brain/SKILL-CANDIDATES.md
writeback:
  - assets/C2-一个大脑/writeback-examples.md
  - brain/WRITEBACK-LOG.md
```

---

## 5. Skillify Gate

A workflow may enter `SKILL-CANDIDATES.md` if:

```text
1. It appears in at least two related tasks or modules.
2. It has a clear input/output contract.
3. It has examples.
4. It can be checked by human review.
5. It does not require private data by default.
6. It does not duplicate an existing skill.
```

It may become active `SKILL.md` only after:

```text
1. At least 3 successful samples.
2. One human review.
3. One evidence/writeback loop.
4. No privacy or canon boundary issue.
```

---

## 6. Resolver Output Contract

Every Resolver decision should output:

```yaml
query:
intent:
primary_route:
secondary_routes:
source_files:
gap_types:
next_c4_task:
skill_candidate:
writeback_targets:
human_gates:
confidence:
```

---

## 7. No-Go Rules

```text
Do not create a new skill if an existing resolver route already covers it.
Do not route to external write without approval.
Do not mark evidence as strong automatically.
Do not mark module/productization as validated automatically.
Do not update CONSTITUTION.md.
```

---

## 8. Current Seed Routes

```yaml
b2_productization_readiness:
  intent: module productization judgment
  primary_route: module_route
  secondary_routes: [evidence_route, gap_route, c4_task_route, skill_route, writeback_route]
  next_c4_task: controlled B2 naming and repeatability test
  skill_candidate: 两句话品类独创 Skill
  human_gate: validation upgrade and productization decision

c2_brain_readiness:
  intent: brain maturity judgment
  primary_route: evidence_route
  secondary_routes: [gap_route, c4_task_route, writeback_route]
  next_c4_task: run live query pack and resolver test
  skill_candidate: none yet
  human_gate: maturity score update

writeback_decision:
  intent: decide where learning should be written
  primary_route: writeback_route
  secondary_routes: [evidence_route, evolution_note, maturity_scorecard]
  next_c4_task: create/update relevant evidence or evolution file
  skill_candidate: writeback assistant candidate later
  human_gate: canon candidate approval
```
