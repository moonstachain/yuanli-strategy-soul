# Yuanli Brain · QUERY EXAMPLES

> Module: C2 一个大脑  
> Issue: #141  
> Date: 2026-06-30  
> Phase: Yuanli Brain Query Pack + Resolver Seed v1

---

## 0. Purpose

```text
Define testable queries that prove C2 can move from file indexing to cited strategic synthesis.
```

C2 answers must not be file lists. They must become decision objects.

---

## 1. Standard C2 Answer Contract

Every answer must include:

```text
1. Direct Judgment
2. Cited Facts
3. Inferred Judgment
4. Unknown / Gap
5. Canon Graph Chain
6. Gap Type
7. Resolver Route
8. Next C4 Task
9. Skillify Judgment
10. Writeback Proposal
```

---

## 2. Confidence Labels

```text
cited = directly supported by repository source
inferred = strategic inference from cited sources
unknown = not yet supported by evidence
```

C2 must not blur these labels.

---

## 3. Query 1 · B2 是否具备产品化条件？

### Query

```text
用 C2 判断：B2 品类独创是否已经具备产品化条件？证据是什么？缺口是什么？下一步 C4 任务是什么？是否存在可沉淀为 Skill 的重复流程？
```

### Required Sources

```text
assets/B2-品类独创/evidence.md
assets/B2-品类独创/validation-records.md
brain/GAP-TYPES.md
brain/CANON-GRAPH.md
brain/RESOLVER.md
brain/SKILL-CANDIDATES.md
assets/C2-一个大脑/writeback-examples.md
```

### Expected Answer

```yaml
direct_judgment:
  label: inferred
  answer: B2 可以进入小范围产品化验证，但不能直接规模化产品化。当前状态是 external-validation-started / Validation 2/5 / evidence medium+。

cited_facts:
  - source: assets/B2-品类独创/evidence.md
    fact: B2 evidence strength is medium+ and evidence status is external-validation-started.
  - source: assets/B2-品类独创/evidence.md
    fact: B2 is not strong enough to prove scaled productization.
  - source: assets/B2-品类独创/validation-records.md
    fact: B2 has 7 external user-language records, 7 category/naming signals, 7 repeatable category sentence candidates, and 5 purchase/follow-up signals.
  - source: assets/B2-品类独创/validation-records.md
    fact: controlled naming and repeatability tests are still required.

unknown_gaps:
  - controlled naming test with 5-10 target users has not been completed.
  - repeatability of the 7 candidate category sentences has not been proven.
  - product offer / pricing / delivery promise is not yet scale-ready.
  - two-sentence category workflow has not been converted into active Skill.md.

gap_types:
  - validation_gap
  - repeatability_gap
  - productization_gap
  - skill_gap

canon_graph_chain:
  - B2 品类独创 → evidence.md → validation-records.md → validation_gap → C4 controlled naming test → writeback
  - B2 category sentence candidates → skill_gap → 两句话品类独创 Skill candidate

resolver_route:
  primary_route: module_route
  secondary_routes:
    - evidence_route
    - gap_route
    - c4_task_route
    - skill_route
    - writeback_route

next_c4_task:
  task: Run controlled B2 naming and repeatability test with 5-10 target users using the 7 category sentence candidates.
  output:
    - workshop-scorecard.md update
    - user-language.md update
    - validation-records.md update
    - evidence.md update

skillify_judgment:
  label: inferred
  decision: Enter SKILL-CANDIDATES as 两句话品类独创 Skill, but do not create active SKILL.md until at least 3 before/after samples and one human review exist.

writeback_proposal:
  - assets/B2-品类独创/validation-records.md
  - assets/B2-品类独创/evidence.md
  - assets/B2-品类独创/user-language.md
  - assets/B2-品类独创/workshop-scorecard.md
  - brain/SKILL-CANDIDATES.md
  - brain/WRITEBACK-LOG.md
```

---

## 4. Query 2 · 哪些模块最该先验证？

### Query

```text
从成熟度评分看，哪些模块最该先做真实验证？
```

### Required Output

```text
Must rank by priority, evidence weakness, validation gap, and productization leverage.
```

Expected:

```text
P0: B2 if the goal is to validate C2 Query Pack, because B2 already has evidence package and productization question.
P0: A4 / B1 / B3 / B4 / C4 if the goal is market-facing validation.
P0.5: C2 because it is the memory layer that can validate all other modules.
```

---

## 5. Query 3 · C2 现在缺什么？

### Query

```text
C2 一个大脑目前距离产品化还缺什么？
```

Expected gap types:

```text
schema_gap
graph_gap
resolver_gap
skill_gap
dream_cycle_gap
real_validation_gap
```

Expected next:

```text
Yuanli Brain Query Pack + Resolver Seed v1 → first live B2 query → writeback → skill candidate review.
```

---

## 6. Query 4 · 某个新案例应该写回哪里？

### Query

```text
我有一个学员通过 A1 找到母体的真实案例，应该写回哪里？
```

Expected route:

```text
writeback_route + evidence_route + human_gate_route
```

Expected answer:

```text
If anonymized and relevant: write to A1 real-learner-cases and evidence. If it changes teaching method: evolution note. If it may change canon: canonical candidate, not direct constitution update.
```

---

## 7. Query 5 · PMO 下一步是什么？

### Query

```text
当前 PMO 下一步最重要的任务是什么？
```

Expected answer:

```text
After CBM-PMO v1.1 Auto Sync Contract, next PMO should prioritize first strong or repeated evidence, not more architecture.
For C2, the next P0 is #141 Yuanli Brain Query Pack + Resolver Seed v1.
```

---

## 8. Query 6 · 是否应该创建一个 Skill？

### Query

```text
这个流程是否应该被 Skillify？
```

Expected resolver:

```text
skill_route
```

Expected checks:

```text
Does it repeat?
Does it have clear input/output?
Does it have 3 samples?
Does it have human review?
Does it have evidence/writeback path?
Does it duplicate an existing skill?
Does it risk private data leakage?
```

---

## 9. Validation Rule

Every query must check:

```text
Does it give a direct judgment?
Does it cite specific source files?
Does it distinguish cited / inferred / unknown?
Does it name the gap type?
Does it route through Resolver?
Does it recommend a next C4 task?
Does it judge Skillify potential?
Does it propose writeback?
```
