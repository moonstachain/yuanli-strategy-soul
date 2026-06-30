# Yuanli Brain · SKILL CANDIDATES

> Module: C2 一个大脑  
> Issue: #141 / #142 / #143 / #145  
> Date: 2026-06-30

---

## 0. Purpose

```text
Skill Candidates are repeated Yuanli workflows that may become reusable Agent / Codex / Operator skills.
```

A skill candidate is not yet a fully active or canonical skill. It is a workflow under evaluation.

---

## 1. Skill Candidate States

```text
candidate
sampled
review-ready
real-case-draft
user-language-test-ready
user-tested
reviewed
active
retired
```

Rules:

```text
candidate: workflow identified
sampled: at least 3 examples exist
review-ready: review checklist, review results scaffold, and AI pre-review exist; Ming human review pending
real-case-draft: Ming selected real cases and draft transformations exist; user language test pending
user-language-test-ready: user language test protocol, transcript extraction results, and results scaffold exist; interviews pending
user-tested: target user language results recorded
reviewed: Ming human review completed
active: converted into reusable SKILL.md or equivalent playbook with approval
retired: replaced or merged
```

---

## 2. Promotion Gate

A candidate can become active only if:

```text
1. The workflow repeats.
2. Inputs and outputs are clear.
3. It has at least 3 examples.
4. It has Ming human feedback.
5. It has evidence/writeback path.
6. It does not duplicate existing skills.
7. It does not leak private client or personal data.
8. It has passed real founder/client case testing or controlled naming test.
```

---

## 3. Candidate 001 · 两句话品类独创 Skill

```yaml
skill_candidate_id: yuanli-category-two-sentence
state: user-language-test-ready
related_issue: "#142 / #143 / #145"
skill_file: skills/yuanli-category-two-sentence/SKILL.md
sample_pack: assets/C2-一个大脑/skillify-examples.md
review_checklist: skills/yuanli-category-two-sentence/REVIEW-CHECKLIST-v1.md
review_results: skills/yuanli-category-two-sentence/REVIEW-RESULTS-v1.md
real_case_candidates: skills/yuanli-category-two-sentence/REAL-CASE-CANDIDATES-v1.md
real_case_test: skills/yuanli-category-two-sentence/REAL-CASE-TEST-v1.md
user_language_test: skills/yuanli-category-two-sentence/USER-LANGUAGE-TEST-v1.md
user_language_test_results: skills/yuanli-category-two-sentence/USER-LANGUAGE-TEST-RESULTS-v1.md
transcript_evidence_extraction: skills/yuanli-category-two-sentence/TRANSCRIPT-EVIDENCE-EXTRACTION-v1.md
transcript_evidence_extraction_results: skills/yuanli-category-two-sentence/TRANSCRIPT-EVIDENCE-EXTRACTION-RESULTS-v1.md
related_nodes:
  - A1 发现母体
  - B2 品类独创
  - C1 一纸文脉
  - C2 一个大脑
  - C4 一条链路
source_inspiration:
  - YC two-sentence company description skill
  - B2 category sentence candidates
  - 原力品类独创工作坊
```

### 3.1 Definition

```text
把一个创业者、专家或项目的模糊表达，压缩成两句话品类独创表达。
```

### 3.2 Output Contract

```text
Sentence 1: You / for whom / solve what expensive problem.
Sentence 2: Why this is different and worth reallocating user attention or budget.
```

中文格式：

```text
第一句话：你是谁，为谁解决什么贵问题？
第二句话：为什么你不同，为什么值得用户重新分配心智预算或预算？
```

### 3.3 Inputs

```yaml
founder_or_expert_context:
target_user:
expensive_problem:
old_category_or_comparison:
unique_mechanism:
evidence_or_signal:
desired_budget_shift:
```

### 3.4 Outputs

```yaml
two_sentence_category:
old_category_escape:
new_category_claim:
evidence_strength:
unknown_gap:
next_test:
```

### 3.5 Current Evidence

```text
B2 has 7 coded category sentence candidates from June 2026 external fieldwork, but they are uncontrolled field signals and not yet controlled naming test results.

#142 created a v0 SKILL.md and 3 before/after samples.
#143 created review checklist v1 and AI pre-review.
#145 created review results scaffold for Ming human review.
Ming selected three real cases: 水月老师随身寺庙, 达哥张姐低奢皮草, 高净值留学生游戏化婚礼.
REAL-CASE-TEST-v1 created draft transformations for the three selected cases.
USER-LANGUAGE-TEST-v1 created test protocol for target user repeatability, emotional pull, and budget shift.
TRANSCRIPT-EVIDENCE-EXTRACTION-v1 created extraction protocol to turn private llm-wiki transcripts into anonymized B2/C2 evidence.
TRANSCRIPT-EVIDENCE-EXTRACTION-RESULTS-v1 completed first-pass extraction from three T3 case writeups.
USER-LANGUAGE-TEST-RESULTS-v1 created results scaffold; interviews are still pending.
```

### 3.6 AI Pre-Review Result

```yaml
review_type: AI strategic pre-review
sample_count: 3
overall_average: 4.03 / 5
decision: conditional_go
condition: Ming human review required before real case testing
state_change: sampled -> review-ready, not reviewed
```

### 3.7 Real Case Draft Result

```yaml
selected_cases:
  - CASE-01 水月老师随身寺庙
  - CASE-05 达哥张姐低奢皮草
  - CASE-08 高净值留学生游戏化婚礼
transformation_average: 4.83 / 5
status: transformation_pass
human_review: pending
controlled_user_test: pending
state_change: review-ready -> real-case-draft, not reviewed
```

### 3.8 User Language Test Protocol

```yaml
test_protocol: skills/yuanli-category-two-sentence/USER-LANGUAGE-TEST-v1.md
results_scaffold: skills/yuanli-category-two-sentence/USER-LANGUAGE-TEST-RESULTS-v1.md
status: protocol_and_results_scaffold_created
participant_target:
  CASE-01: 5 high-net-worth women / overseas Chinese / oriental aesthetics collectors
  CASE-05: 5 high-net-worth women / high-repeat private-domain customers / female consumer founders
  CASE-08: 5 overseas returnees / high-net-worth young adults / wedding-service potential customers
candidate_names:
  CASE-01: [随身寺庙, 随身精神资产]
  CASE-05: [养成系社交货币, 养成系稀缺美学, 双奢结合]
  CASE-08: [游戏化社交婚礼, 归国首秀导演, 人生主权宣言]
interviews_completed: 0
state_change: no state upgrade; still user-language-test-ready
```

### 3.9 Transcript Evidence Extraction Results

```yaml
protocol: skills/yuanli-category-two-sentence/TRANSCRIPT-EVIDENCE-EXTRACTION-v1.md
results: skills/yuanli-category-two-sentence/TRANSCRIPT-EVIDENCE-EXTRACTION-RESULTS-v1.md
status: first_pass_extraction_completed
source_tier: T3 case writeups
extracted_cases:
  - CASE-01 水月老师随身寺庙
  - CASE-05 达哥张姐低奢皮草
  - CASE-08 高净值留学生游戏化婚礼
extracted_objects:
  - old_category_signal
  - expensive_problem_signal
  - new_category_signal
  - budget_pull_signal
  - emotional_pull_signal
  - objection_signal
  - repeatable_phrase
boundary: T3 extraction supports test design, not user-tested status
next_output: target user interview data in USER-LANGUAGE-TEST-RESULTS-v1.md
```

### 3.10 Current Gaps

```text
human_review_gap: Ming has not yet reviewed and approved the three real-case outputs.
validation_gap: no controlled naming test with 5-10 target users yet.
user_language_gap: USER-LANGUAGE-TEST-RESULTS-v1 exists, but target user responses have not been recorded.
source_tier_gap: extraction results are from T3 case writeups, not T0 target-user test transcripts.
resolver_gap: route exists as seed and draft, but not repeated in live workflow.
writeback_gap: skill evidence has not yet been tested in live user workflow.
```

### 3.11 Private Case Pool Policy

```text
Private llm-wiki learner/client cases are valuable for real case testing, but raw private content must not be copied into this public repo without anonymization and Ming approval.
```

### 3.12 Next C4 Task

```text
Collect real target-user responses and fill USER-LANGUAGE-TEST-RESULTS-v1.md; after evidence exists, decide whether the skill can move to user-tested / reviewed.
```

---

## 4. Candidate 002 · C2 Query Answer Contract Skill

```yaml
skill_candidate_id: yuanli-c2-cited-strategic-answer
state: candidate
related_nodes:
  - C2 一个大脑
  - C3 一张地图
  - C4 一条链路
```

### Definition

```text
把任意原力战略查询输出为：结论、引用、推断、未知、缺口、Resolver 路由、C4 任务和回写建议。
```

### Why Candidate

```text
This is the reusable answer pattern required for every C2 Think Mode query.
```

### Next

```text
Use B2 query as first sample.
```

---

## 5. Candidate 003 · Weekly Brain Dream Cycle Skill

```yaml
skill_candidate_id: yuanli-brain-dream-cycle
state: candidate
related_nodes:
  - C2 一个大脑
  - C3 一张地图
  - C4 一条链路
```

### Definition

```text
每周扫描新 artifacts，识别 gap、skill candidate、canonical candidate、C4 task candidate 和 maturity update suggestion。
```

### Why Candidate

```text
YC / GBrain / OpenClaw all converge on dream cycle as the self-improvement loop.
```

### Next

```text
Do not build until Query Pack + Resolver Seed produces at least one live query result and one skill sample set.
```

---

## 6. Current Priority

```text
P0 current: collect real target-user responses for USER-LANGUAGE-TEST-RESULTS-v1.md.
P0 next: analyze interview results and decide whether Candidate 001 can move to user-tested / reviewed.
P1: Candidate 003 after first skill review/writeback.
```
