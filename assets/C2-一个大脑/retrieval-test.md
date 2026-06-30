# C2 · 一个大脑 · Retrieval / Think / Resolver Test

> Module: C2 一个大脑  
> Issue: #141  
> Date: 2026-06-30  
> Phase: Yuanli Brain Query Pack + Resolver Seed v1

---

## 0. Purpose

```text
Validate whether C2 can move from source retrieval to cited strategic synthesis with gap classification, resolver route, next C4 task, skillify judgment, and writeback proposal.
```

---

## 1. Test Protocol

Every test question must output:

```text
Direct Judgment
Cited Facts
Inferred Judgment
Unknown / Gap
Canon Graph Chain
Gap Type
Resolver Route
Next C4 Action
Skillify Judgment
Writeback Suggestion
```

Confidence labels:

```text
cited / inferred / unknown
```

---

## 2. Test 1 · B2 Productization Readiness

### 2.1 Query

```text
用 C2 判断：B2 品类独创是否已经具备产品化条件？证据是什么？缺口是什么？下一步 C4 任务是什么？是否存在可沉淀为 Skill 的重复流程？
```

### 2.2 Expected Sources

```text
assets/B2-品类独创/evidence.md
assets/B2-品类独创/validation-records.md
assets/B2-品类独创/naming-test.md
assets/B2-品类独创/user-language.md
assets/B2-品类独创/workshop-runbook.md
assets/B2-品类独创/live-validation-checklist.md
brain/GAP-TYPES.md
brain/CANON-GRAPH.md
brain/RESOLVER.md
brain/SKILL-CANDIDATES.md
assets/C2-一个大脑/writeback-examples.md
```

### 2.3 Test Answer · v1

#### Direct Judgment

```yaml
label: inferred
answer: B2 品类独创已经具备“小范围产品化验证”条件，但不具备“规模化产品化”条件。当前最准确状态是 external-validation-started / Validation 2/5 / evidence medium+。
```

#### Cited Facts

```yaml
- source: assets/B2-品类独创/evidence.md
  fact: Evidence Strength is medium+.
- source: assets/B2-品类独创/evidence.md
  fact: Evidence Status is external-validation-started.
- source: assets/B2-品类独创/evidence.md
  fact: B2 is not strong enough to prove scaled productization.
- source: assets/B2-品类独创/validation-records.md
  fact: B2 has 7 external user-language records, 7 category/naming signals, 7 repeatable category sentence candidates, and 5 purchase/follow-up signals.
- source: assets/B2-品类独创/validation-records.md
  fact: Controlled naming and repeatability tests are still required.
```

#### Inferred Judgment

```yaml
label: inferred
judgment: B2 can be packaged as a controlled validation workshop or diagnostic, but should not yet be sold as a mature scalable product.
```

#### Unknown / Gap

```yaml
- unknown: whether 5-10 target users can repeat and understand the candidate category sentences without facilitator explanation.
- unknown: which candidate naming direction has the strongest user pull.
- unknown: whether users will pay for B2 as standalone product, workshop, or embedded diagnostic.
```

#### Gap Type

```yaml
gap_types:
  - validation_gap
  - repeatability_gap
  - productization_gap
  - skill_gap
```

#### Canon Graph Chain

```text
B2 品类独创
→ assets/B2-品类独创/evidence.md
→ assets/B2-品类独创/validation-records.md
→ validation_gap / repeatability_gap
→ C4 controlled naming and repeatability test
→ writeback to B2 evidence + validation + scorecard
→ skill candidate: 两句话品类独创 Skill
```

#### Resolver Route

```yaml
primary_route: module_route
secondary_routes:
  - evidence_route
  - gap_route
  - c4_task_route
  - skill_route
  - writeback_route
human_gates:
  - validation score upgrade
  - productization decision
  - active skill publication
```

#### Next C4 Action

```text
Run controlled B2 naming and repeatability test with 5-10 target users using the 7 category sentence candidates.
```

Expected outputs:

```text
assets/B2-品类独创/user-language.md update
assets/B2-品类独创/workshop-scorecard.md update
assets/B2-品类独创/validation-records.md update
assets/B2-品类独创/evidence.md update
brain/WRITEBACK-LOG.md update
```

#### Skillify Judgment

```yaml
label: inferred
candidate: 两句话品类独创 Skill
decision: enter SKILL-CANDIDATES, but do not create active SKILL.md yet.
reason: The workflow is strategically repeatable and analogous to YC's two-sentence company description skill, but Yuanli lacks 3 before/after examples and one human review.
```

#### Writeback Proposal

```yaml
writeback_targets:
  - assets/B2-品类独创/validation-records.md
  - assets/B2-品类独创/evidence.md
  - assets/B2-品类独创/user-language.md
  - assets/B2-品类独创/workshop-scorecard.md
  - brain/SKILL-CANDIDATES.md
  - brain/WRITEBACK-LOG.md
  - docs/TRILOGY-ASSET-MATURITY-SCORECARD-v1.md
```

### 2.4 Pass / Fail

```text
PASS as Query Pack v1 structure test.
NOT PASS as real validation upgrade.
```

Reason:

```text
This test proves C2 can synthesize cited evidence and route next action. It does not prove B2 Validation 3/5 or product-market readiness.
```

---

## 3. Test 2 · C2 Readiness

### Query

```text
C2 一个大脑目前距离产品化还缺什么？
```

### Expected Gap Types

```text
schema_gap
graph_gap
resolver_gap
skill_gap
dream_cycle_gap
real_validation_gap
```

### Expected Next

```text
Complete Yuanli Brain Query Pack + Resolver Seed v1, then run 3 real strategic queries and 3 writeback examples.
```

---

## 4. Test 3 · Writeback Decision

### Query

```text
一个真实学员案例应该写回哪里？
```

### Expected Route

```text
writeback_route + evidence_route + human_gate_route
```

### Expected Answer

```text
Write anonymized case to relevant module real-cases or brain/cases. If it validates an assignment, update evidence. If it changes method, create evolution note. If it may affect canon, create canonical candidate, not constitution update.
```

---

## 5. Current State

```text
Query Pack v1 structure test completed.
Real user / client validation still pending.
```
