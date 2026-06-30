# Yuanli Brain · CANON GRAPH

> Module: C2 一个大脑  
> Issue: #141  
> Date: 2026-06-30

---

## 0. Purpose

```text
Canon Graph defines how C2 links Yuanli knowledge objects so answers can move from retrieval to strategic judgment.
```

C2 must not only find files. It must trace relationships among canon, modules, assets, evidence, evolution, gaps, tasks, skills, and product offers.

---

## 1. Core Node Types

```text
canon
module
asset
source
concept
case
client
evidence
evolution_note
cbm_cell
c3_gap
c4_task
skill
canonical_candidate
product_offer
maturity_score
```

---

## 2. Core Edge Types

```text
defines
belongs_to
supports
contradicts
requires
produces
validates
invalidates
upgrades
blocks
routes_to
skillifies
writes_back_to
candidate_for
```

---

## 3. Minimum Answer Chain

Every C2 Think Mode answer should try to produce this chain:

```text
module
→ asset
→ evidence
→ evolution_note
→ gap_type
→ c4_task
→ writeback_target
```

Optional but preferred:

```text
→ resolver_route
→ skill_candidate
→ maturity_score_update
```

---

## 4. C1-C4 Graph

```text
C1 一纸文脉
  defines → voice / canon boundary / context contract
  feeds → C2 schema and citation boundary

C2 一个大脑
  stores → sources / assets / evidence / decisions / skills
  synthesizes → cited strategic judgment
  routes_to → C3 gap or C4 task
  writes_back_to → evidence / evolution / skill candidate / maturity scorecard

C3 一张地图
  reads_from → C2 memory and evidence
  identifies → capability gap
  routes_to → C4 execution

C4 一条链路
  executes → task / artifact / review
  produces → evidence / evolution note
  writes_back_to → C2 and C3
```

---

## 5. B2 First Query Graph

### 5.1 Query

```text
用 C2 判断：B2 品类独创是否已经具备产品化条件？
```

### 5.2 Graph chain

```text
B2 品类独创
  belongs_to → 原力创业
  has_asset → assets/B2-品类独创/evidence.md
  has_asset → assets/B2-品类独创/validation-records.md
  has_asset → assets/B2-品类独创/naming-test.md
  has_asset → assets/B2-品类独创/user-language.md
  has_asset → assets/B2-品类独创/workshop-runbook.md
  has_evidence → medium+ external fieldwork evidence
  has_gap → validation_gap
  has_gap → repeatability_gap
  has_gap → skill_gap
  routes_to → C4 controlled naming and repeatability test
  skillifies → 两句话品类独创 Skill candidate
  writes_back_to → brain/WRITEBACK-LOG.md
  writes_back_to → docs/TRILOGY-ASSET-MATURITY-SCORECARD-v1.md
```

---

## 6. Graph Output Template

```yaml
query:
root_node:
chain:
  - from:
    edge:
    to:
    evidence:
    confidence:
gaps:
resolver_route:
next_c4_task:
skill_candidate:
writeback_targets:
```

---

## 7. Current Seed Graph · B2

```yaml
query: B2 productization readiness
root_node: B2 品类独创
chain:
  - from: B2 品类独创
    edge: has_evidence
    to: assets/B2-品类独创/evidence.md
    evidence: medium+; external-validation-started
    confidence: cited
  - from: B2 品类独创
    edge: has_validation_state
    to: assets/B2-品类独创/validation-records.md
    evidence: Validation 2/5; Controlled Naming Test pending
    confidence: cited
  - from: B2 品类独创
    edge: routes_to
    to: C4 controlled naming and repeatability test
    evidence: next target 2.5-3/5 candidate
    confidence: cited
  - from: B2 category workflow
    edge: skillifies
    to: 两句话品类独创 Skill candidate
    evidence: inferred from YC two-sentence skill analogy and repeatable B2 sentence workflow
    confidence: inferred
writeback_targets:
  - assets/B2-品类独创/evidence.md
  - assets/B2-品类独创/validation-records.md
  - assets/B2-品类独创/user-language.md
  - assets/B2-品类独创/workshop-scorecard.md
  - brain/SKILL-CANDIDATES.md
  - brain/WRITEBACK-LOG.md
```

---

## 8. Confidence Rules

```text
cited = directly supported by repository file
inferred = strategic inference from cited sources
unknown = not yet supported by evidence
```

C2 must label every claim as one of these three.
