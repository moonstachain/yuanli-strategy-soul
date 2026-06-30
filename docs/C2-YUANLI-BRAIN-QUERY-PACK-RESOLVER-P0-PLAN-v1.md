# C2 · Yuanli Brain Query Pack + Resolver Seed v1 · P0 Plan

> Issue: #141  
> Module: C2 一个大脑  
> Date: 2026-06-30  
> Status: P0 execution plan

---

## 0. Executive Decision

```text
This P0 is not a knowledge-base expansion.
It is the first live test of C2 as an agentic strategic brain.
```

Goal:

```text
Make C2 answer a real strategic question with cited synthesis, explicit unknowns, gap type, next C4 task, Resolver route, Skillify judgment, and writeback proposal.
```

---

## 1. Why This Is P0

C3 CBM-PMO already proved that Yuanli OS can show whether a capability is getting stronger.

C2 must now prove that Yuanli OS can remember why, cite evidence, route to the right action, and turn repeated patterns into skills.

From the YC AI Playbook transcript, the core lesson is:

```text
Record all artifacts → create common context layer → build tool / skill registry → use resolver → run dream cycle → improve skills.
```

Yuanli translation:

```text
C2 must turn accumulated Yuanli context into executable strategic judgment and skill candidates.
```

---

## 2. Scope

### 2.1 In scope

```text
brain/GAP-TYPES.md
brain/CANON-GRAPH.md
brain/RESOLVER.md
brain/SKILL-CANDIDATES.md
brain/QUERY-EXAMPLES.md update
assets/C2-一个大脑/retrieval-test.md update
assets/C2-一个大脑/writeback-examples.md update
```

### 2.2 Out of scope

```text
Installing GBrain
Building C2 web UI
Changing CONSTITUTION.md
Marking B2 or C2 as validated
Automating Dream Cycle
```

---

## 3. First Real Query

```text
用 C2 判断：B2 品类独创是否已经具备产品化条件？证据是什么？缺口是什么？下一步 C4 任务是什么？是否存在可沉淀为 Skill 的重复流程？
```

Reason:

```text
B2 already has seed asset package, external evidence coding, validation records, and productization pack. It is the best first live C2 test because the answer requires synthesis rather than retrieval only.
```

---

## 4. Required Answer Contract

Every Query Pack answer must include:

```text
1. Direct judgment
2. Cited facts
3. Inferred judgment
4. Unknown gaps
5. Module → asset → evidence → evolution → task chain
6. Gap type
7. Resolver route
8. Next C4 task
9. Skillify judgment
10. Writeback proposal
```

---

## 5. Resolver Seed

C2 must route the B2 query to:

```text
Module: B2 品类独创
Evidence: assets/B2-品类独创/evidence.md
Validation: assets/B2-品类独创/validation-records.md
Execution Pack: naming-test / user-language / workshop-runbook / live-validation-checklist
C3: Gap ranking and capability decision
C4: Controlled naming and repeatability test
Skill Candidate: 两句话品类独创 Skill
Writeback: B2 evidence / validation records / brain WRITEBACK-LOG / maturity scorecard
```

---

## 6. Gap Type Seed

Expected gap classification:

```text
validation_gap: B2 has medium+ external fieldwork evidence but no controlled naming test yet.
repeatability_gap: Category sentence candidates have not been tested with 5-10 target users.
productization_gap: Product offer can enter small-scope validation but not scale.
skill_gap: Two-sentence category creation workflow exists as candidate but not skillified.
```

---

## 7. Skillify Seed

First skill candidate:

```text
两句话品类独创 Skill
```

Definition:

```text
Sentence 1: You / for whom / solve what expensive problem.
Sentence 2: Why this is different and worth reallocating user attention or budget.
```

Status:

```text
candidate, not active skill
```

---

## 8. Acceptance Criteria

This P0 is complete when:

```text
1. GAP-TYPES exists.
2. CANON-GRAPH exists.
3. RESOLVER exists.
4. SKILL-CANDIDATES exists.
5. QUERY-EXAMPLES has upgraded query contract and B2 live query.
6. retrieval-test includes B2 cited synthesis trial.
7. writeback-examples includes B2 query / resolver / skillify example.
8. #141 records result and next P0.
```

---

## 9. Maturity Judgment After Completion

Expected C2 maturity movement:

```text
Overall: 2.8 / 5 → 3.0 / 5
```

Why not higher:

```text
This proves live query structure and resolver seed, but not yet repeated real-user validation or automated dream cycle.
```

---

## 10. Next P0 After This

Choose one:

```text
A. Run actual B2 controlled naming test with 5-10 users.
B. Create 两句话品类独创 Skill v0.
C. Create C2 Dream Cycle v1.
```

Recommended:

```text
B if the goal is skill creation.
A if the goal is validation strength.
```
