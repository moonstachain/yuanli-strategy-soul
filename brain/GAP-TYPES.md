# Yuanli Brain · GAP TYPES

> Module: C2 一个大脑  
> Issue: #141  
> Date: 2026-06-30

---

## 0. Purpose

```text
Gap Types define what C2 means when it says: we do not know enough yet.
```

C2 must not merely answer questions. It must identify which kind of uncertainty or incompleteness blocks the next decision.

---

## 1. Core Rule

```text
A gap is not a failure.
A gap is a decision object that can be routed to C3 / C4 / Evidence / Writeback.
```

Every C2 strategic answer should classify at least one of:

```text
source_gap
evidence_gap
validation_gap
repeatability_gap
productization_gap
commercialization_gap
schema_gap
graph_gap
resolver_gap
skill_gap
writeback_gap
canon_gap
privacy_gap
```

---

## 2. Gap Types

### 2.1 source_gap

```text
Relevant source material is missing, inaccessible, uncited, or too weak to support judgment.
```

Example:

```text
B2 mentions user language but no transcript or source file is linked.
```

### 2.2 evidence_gap

```text
Artifacts exist, but they do not prove the claim strongly enough.
```

Example:

```text
A module has teaching outline and cases, but no real learner evidence.
```

### 2.3 validation_gap

```text
Evidence exists, but it has not been tested in a controlled or real setting.
```

Example:

```text
B2 has external fieldwork evidence but has not run a controlled naming test.
```

### 2.4 repeatability_gap

```text
A result happened once, but has not repeated across users, contexts, or time.
```

Example:

```text
A category sentence works in one conversation but has not been repeated with 5-10 target users.
```

### 2.5 productization_gap

```text
A concept can be taught or tested, but the product offer, scope, price, delivery format, or promise is not yet locked.
```

Example:

```text
B2 can enter small-scope validation but is not scale-product ready.
```

### 2.6 commercialization_gap

```text
A product offer exists, but there is not enough purchase, pricing, conversion, or retention evidence.
```

Example:

```text
Users like a workshop, but no one pays or repeats.
```

### 2.7 schema_gap

```text
The object has no stable type in Yuanli Brain Schema.
```

Example:

```text
A transcript contains case, evidence, source, task, and skill candidate, but none are typed.
```

### 2.8 graph_gap

```text
A relationship exists but is not linked in the canon graph.
```

Example:

```text
B2 evidence exists but is not linked to C4 task and maturity update.
```

### 2.9 resolver_gap

```text
C2 can answer but does not know which skill, template, workflow, or C4 chain should be invoked next.
```

Example:

```text
A B2 query should route to naming-test and user-language, but no resolver route exists.
```

### 2.10 skill_gap

```text
A repeatable workflow exists but has not been skillified, tested, or added to a registry.
```

Example:

```text
Two-sentence category creation repeats across B2 cases but has no Skill.md.
```

### 2.11 writeback_gap

```text
A task produced learning, but the learning was not written back to evidence, evolution note, maturity scorecard, or skill candidate.
```

Example:

```text
A workshop generated user language but validation-records.md was not updated.
```

### 2.12 canon_gap

```text
A candidate principle may affect the canon but lacks sufficient validation or approval.
```

Example:

```text
A repeated rule emerges across modules but has not passed canonical review.
```

### 2.13 privacy_gap

```text
The artifact may contain sensitive client, learner, or personal data and needs anonymization or access control before use.
```

Example:

```text
Client project transcript should be anonymized before becoming C2 evidence.
```

---

## 3. Standard Gap Output

Every gap should be written as:

```yaml
gap_type:
affected_node:
evidence_status:
why_it_blocks_decision:
next_c4_task:
writeback_target:
human_gate:
```

---

## 4. B2 First Query Gap Classification

For the first real C2 query:

```text
用 C2 判断：B2 品类独创是否已经具备产品化条件？
```

Expected gaps:

```yaml
- gap_type: validation_gap
  affected_node: B2 品类独创
  evidence_status: medium+ external fieldwork evidence
  why_it_blocks_decision: controlled naming and repeatability test not completed
  next_c4_task: run controlled B2 naming test with 5-10 target users
  writeback_target: assets/B2-品类独创/validation-records.md
  human_gate: productization / validation upgrade

- gap_type: repeatability_gap
  affected_node: B2 category sentence candidates
  evidence_status: 7 coded candidates exist
  why_it_blocks_decision: not tested across target users
  next_c4_task: run repeatability scoring
  writeback_target: assets/B2-品类独创/workshop-scorecard.md
  human_gate: upgrade to Validation 3/5

- gap_type: skill_gap
  affected_node: 两句话品类独创
  evidence_status: candidate workflow exists
  why_it_blocks_decision: not converted into reusable Skill.md
  next_c4_task: create skill candidate or v0 skill
  writeback_target: brain/SKILL-CANDIDATES.md
  human_gate: publish or canonicalize skill
```
