# C2 · 一个大脑 · Query Pack v1

> Issue: #141  
> Date: 2026-06-30  
> First Live Query: B2 品类独创产品化判断  
> Status: structure pass; real validation pending

---

## 0. Query Pack Definition

```text
Yuanli Brain Query Pack is the standard format for turning a strategic question into cited synthesis, gap classification, resolver route, next C4 task, skillify judgment, and writeback proposal.
```

It proves C2 can think, not just search.

---

## 1. First Live Query

```text
用 C2 判断：B2 品类独创是否已经具备产品化条件？证据是什么？缺口是什么？下一步 C4 任务是什么？是否存在可沉淀为 Skill 的重复流程？
```

---

## 2. Direct Judgment

```yaml
label: inferred
judgment: B2 品类独创已经具备小范围产品化验证条件，但不具备规模化产品化条件。
current_state: external-validation-started / Validation 2/5 / evidence medium+
boundary: controlled naming and repeatability test still pending
```

---

## 3. Cited Facts

```yaml
- source: assets/B2-品类独创/evidence.md
  fact: Evidence Strength is medium+.
  confidence: cited

- source: assets/B2-品类独创/evidence.md
  fact: Evidence Status is external-validation-started.
  confidence: cited

- source: assets/B2-品类独创/evidence.md
  fact: Current evidence can prove real external user language exists and can be coded into B2 category evidence, but cannot prove scaled productization.
  confidence: cited

- source: assets/B2-品类独创/validation-records.md
  fact: B2 has 7 external user-language records, 7 category/naming signals, 7 repeatable category sentence candidates, and 5 purchase/follow-up signals.
  confidence: cited

- source: assets/B2-品类独创/validation-records.md
  fact: Controlled naming and repeatability tests are still required before productization or scale.
  confidence: cited
```

---

## 4. Inferred Judgment

```yaml
label: inferred
judgment: B2 can be packaged as a controlled validation workshop / diagnostic, not yet a mature scalable product.
reason: evidence exists and execution package is ready, but repeatability and controlled naming are not validated.
```

---

## 5. Unknowns / Gaps

```yaml
unknowns:
  - Whether 5-10 target users can understand and repeat the candidate category sentences without facilitator help.
  - Which candidate name has strongest clarity, relevance, and budget pull.
  - Whether users will pay for B2 as standalone workshop, diagnostic, or embedded module.
  - Whether the two-sentence category workflow can produce consistently better outputs across cases.

gap_types:
  - validation_gap
  - repeatability_gap
  - productization_gap
  - skill_gap
```

---

## 6. Canon Graph Chain

```text
B2 品类独创
→ assets/B2-品类独创/evidence.md
→ assets/B2-品类独创/validation-records.md
→ validation_gap / repeatability_gap / productization_gap
→ C4 controlled naming and repeatability test
→ writeback to B2 evidence + validation + scorecard
→ skill candidate: 两句话品类独创 Skill
```

---

## 7. Resolver Route

```yaml
primary_route: module_route
secondary_routes:
  - evidence_route
  - gap_route
  - c4_task_route
  - skill_route
  - writeback_route
source_files:
  - assets/B2-品类独创/evidence.md
  - assets/B2-品类独创/validation-records.md
  - brain/GAP-TYPES.md
  - brain/CANON-GRAPH.md
  - brain/RESOLVER.md
  - brain/SKILL-CANDIDATES.md
human_gates:
  - validation score upgrade
  - scaled productization decision
  - active skill publication
```

---

## 8. Next C4 Task

```text
Run controlled B2 naming and repeatability test with 5-10 target users using the 7 category sentence candidates.
```

Required outputs:

```text
assets/B2-品类独创/user-language.md update
assets/B2-品类独创/workshop-scorecard.md update
assets/B2-品类独创/validation-records.md update
assets/B2-品类独创/evidence.md update
brain/WRITEBACK-LOG.md update
```

---

## 9. Skillify Judgment

```yaml
label: inferred
candidate: 两句话品类独创 Skill
decision: keep as skill candidate, not active SKILL.md yet.
reason: workflow is repeated and strategically high-leverage, but lacks 3 before/after samples and one human review.
```

Promotion gate:

```text
3 samples + human review + evidence/writeback path + no privacy issue + no resolver duplication
```

---

## 10. Writeback Proposal

```yaml
level: L3 Evolution + L4 Skill Candidate Writeback
creates_new_evidence: no, because this is a C2 structure test
updates_gap: yes
creates_c4_task: yes
creates_skill_candidate: yes
maturity_update_needed: C2 can move toward 3.0/5 after this P0; B2 must not upgrade
human_gate: B2 Validation 3/5 and active Skill.md require approval

target_files:
  - assets/C2-一个大脑/retrieval-test.md
  - brain/QUERY-EXAMPLES.md
  - brain/GAP-TYPES.md
  - brain/CANON-GRAPH.md
  - brain/RESOLVER.md
  - brain/SKILL-CANDIDATES.md
  - assets/C2-一个大脑/writeback-examples.md
```

---

## 11. Pass / Fail

```text
PASS: C2 Query Pack v1 can generate cited synthesis, unknowns, gap types, resolver route, next C4 task, skillify judgment, and writeback proposal.

NOT PASS: B2 productization validation upgrade. Real controlled test is still pending.
```

---

## 12. Next P0

Choose one:

```text
A. Run controlled B2 naming and repeatability test with 5-10 target users.
B. Create 两句话品类独创 Skill v0 with 3 before/after samples.
C. Create C2 Dream Cycle v1.
```

Recommended:

```text
A if the goal is stronger validation evidence.
B if the goal is first reusable skill.
```
