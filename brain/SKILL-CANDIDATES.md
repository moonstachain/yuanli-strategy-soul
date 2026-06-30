# Yuanli Brain · SKILL CANDIDATES

> Module: C2 一个大脑  
> Issue: #141 / #142 / #143 / #145 / #159  
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
field-tested-provisional
repeatability-pilot-passed
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
user-language-test-ready: user language test protocol, transcript extraction results, higher-tier extraction results, results scaffold, transcript import protocol, and open C4 collection issue exist; interviews pending
field-tested-provisional: Ming qualitative field feedback exists across selected cases; role-stack recommendation and decision file exist; usable for next iteration but not formal user-tested
repeatability-pilot-passed: three new source-based cases have completed role stacks, two-sentence expressions, user-test questions, and writeback evidence; workflow repeatability passed, but target-user validation still pending
user-tested: target user language results recorded in structured or approved evidence standard
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
state: repeatability-pilot-passed
related_issue: "#142 / #143 / #145 / #159"
skill_file: skills/yuanli-category-two-sentence/SKILL.md
sample_pack: assets/C2-一个大脑/skillify-examples.md
review_checklist: skills/yuanli-category-two-sentence/REVIEW-CHECKLIST-v1.md
review_results: skills/yuanli-category-two-sentence/REVIEW-RESULTS-v1.md
real_case_candidates: skills/yuanli-category-two-sentence/REAL-CASE-CANDIDATES-v1.md
real_case_test: skills/yuanli-category-two-sentence/REAL-CASE-TEST-v1.md
user_language_test: skills/yuanli-category-two-sentence/USER-LANGUAGE-TEST-v1.md
user_language_test_results: skills/yuanli-category-two-sentence/USER-LANGUAGE-TEST-RESULTS-v1.md
user_language_test_field_feedback: skills/yuanli-category-two-sentence/USER-LANGUAGE-TEST-FIELD-FEEDBACK-v1.md
user_language_test_decision: skills/yuanli-category-two-sentence/USER-LANGUAGE-TEST-DECISION-v1.md
role_stack_recommendation: skills/yuanli-category-two-sentence/ROLE-STACK-RECOMMENDATION-v1.md
repeatability_pilot_candidates: skills/yuanli-category-two-sentence/REPEATABILITY-PILOT-CANDIDATES-v1.md
repeatability_pilot_run: skills/yuanli-category-two-sentence/REPEATABILITY-PILOT-RUN-v1.md
repeatability_pilot_cases:
  - skills/yuanli-category-two-sentence/REPEATABILITY-PILOT-CASE-01-TAOGE-SMART-YOUTH-v1.md
  - skills/yuanli-category-two-sentence/REPEATABILITY-PILOT-CASE-02-KANGKANG-VENUE-ASSET-v1.md
  - skills/yuanli-category-two-sentence/REPEATABILITY-PILOT-CASE-03-LIANGJIU-GROUPBUY-v1.md
user_language_test_transcript_import: skills/yuanli-category-two-sentence/USER-LANGUAGE-TEST-TRANSCRIPT-IMPORT-v1.md
user_language_test_transcript_import_results: skills/yuanli-category-two-sentence/USER-LANGUAGE-TEST-TRANSCRIPT-IMPORT-RESULTS-v1.md
transcript_evidence_extraction: skills/yuanli-category-two-sentence/TRANSCRIPT-EVIDENCE-EXTRACTION-v1.md
transcript_evidence_extraction_results: skills/yuanli-category-two-sentence/TRANSCRIPT-EVIDENCE-EXTRACTION-RESULTS-v1.md
higher_tier_source_candidates: skills/yuanli-category-two-sentence/HIGHER-TIER-SOURCE-CANDIDATES-v1.md
higher_tier_source_extraction_results: skills/yuanli-category-two-sentence/HIGHER-TIER-SOURCE-EXTRACTION-RESULTS-v1.md
c4_user_language_collection_issue: "#159"
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
USER-LANGUAGE-TEST-RESULTS-v1 created results scaffold and was upgraded into a lightweight 9-interview fieldwork run.
HIGHER-TIER-SOURCE-CANDIDATES-v1 indexed Get 笔记, transcripts, digests, minutes, and entity sources for deeper extraction.
HIGHER-TIER-SOURCE-EXTRACTION-RESULTS-v1 completed higher-tier first-pass extraction and recommended test refinements.
USER-LANGUAGE-TEST-v1 was refined with bridge/control/diagnostic phrases and role-classification questions.
USER-LANGUAGE-TEST-TRANSCRIPT-IMPORT-v1 created a protocol to import anonymized llm-wiki transcript signals into #159.
USER-LANGUAGE-TEST-TRANSCRIPT-IMPORT-RESULTS-v1 completed first import batch.
USER-LANGUAGE-TEST-FIELD-FEEDBACK-v1 recorded Ming qualitative field feedback after asking users.
ROLE-STACK-RECOMMENDATION-v1 created recommended naming stacks.
USER-LANGUAGE-TEST-DECISION-v1 approved field-tested-provisional state with explicit boundaries.
REPEATABILITY-PILOT-CANDIDATES-v1 selected three new cross-domain cases.
REPEATABILITY-PILOT-RUN-v1 processed three new cases: 涛哥智能少年, 康康文体场馆无形资产开发, 苹果妈妈良久团购.
REPEATABILITY-PILOT-RUN-v1 completed role stacks, two-sentence expressions, user-test questions, and source-based evidence for all three cases.
#159 remains open for optional structured scorecards.
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

### 3.8 User Language Test Decision

```yaml
decision_file: skills/yuanli-category-two-sentence/USER-LANGUAGE-TEST-DECISION-v1.md
decision: approve_field_tested_provisional
candidate_state_before: user-language-test-ready
candidate_state_after: field-tested-provisional
evidence_standard: Ming qualitative field feedback + transcript imports + role-stack recommendation
formal_user_tested: false
structured_scorecards_completed: false
issue_159_close: false
b2_validation_upgrade: false
constitution_update: false
```

### 3.9 Repeatability Pilot Run

```yaml
pilot_file: skills/yuanli-category-two-sentence/REPEATABILITY-PILOT-RUN-v1.md
pilot_status: completed_from_source_material
candidate_state_before: field-tested-provisional
candidate_state_after: repeatability-pilot-passed
cases_processed:
  - PILOT-01 涛哥智能少年
  - PILOT-02 康康大型文体场馆无形资产开发
  - PILOT-03 苹果妈妈袁姐良久团购
workflow_repeatability: pass
cross_domain_fit: pass
old_category_escape_method: pass
expensive_problem_method: pass
role_stack_method: pass
two_sentence_output_method: pass
user_testing_design_method: pass
validation_status: not_user_validated
```

### 3.10 Role Stack Recommendation

```yaml
recommendation_file: skills/yuanli-category-two-sentence/ROLE-STACK-RECOMMENDATION-v1.md
status: usable_for_next_iteration
CASE-01:
  public_category: 随身寺庙
  business_explanation: 随身精神资产
  bridge_explanation: 可带走的东方精神器物
  confidence: medium_positive
CASE-05:
  public_category_candidate: 养成系稀缺美学
  plain_language_anchor: 高净值姐姐专属高端皮草
  budget_context: 轻奢复购 / 高净值朋友赠礼
  community_narrative_candidate: 养成系社交货币
  product_mechanism_candidate: 双奢结合
  confidence: mixed_positive
CASE-08:
  public_category: 游戏化社交婚礼
  premium_positioning_candidate: 归国首秀导演
  bridge_explanation: 让自己的故事被看见
  deep_narrative: 人生主权宣言
  diagnostic_internal_phrase: 人生叙事的空间翻译
  confidence: strong_positive
```

### 3.11 Current Gaps

```text
formal_validation_gap: structured participant scorecards have not been completed.
review_gap: Ming has approved provisional field-tested use and repeatability pilot pass, but not reviewed/active/canonical status.
validation_gap: no controlled naming test with 5-10 target users yet.
source_tier_gap: repeatability pilot is source-based and not formal T0 user scorecard evidence.
resolver_gap: route exists as seed and draft, but not repeated in broader live workflow.
writeback_gap: B2 module assets have not yet been updated from this pilot.
```

### 3.12 Private Case Pool Policy

```text
Private llm-wiki learner/client cases are valuable for real case testing, but raw private content must not be copied into this public repo without anonymization and Ming approval.
```

### 3.13 Next C4 Task

```text
Use one pilot output in a real user / client conversation and collect target-user feedback. Recommended first validation: PILOT-02 康康大型文体场馆无形资产开发.
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
P0 current: validate one repeatability pilot output with real target users or clients. Recommended first: PILOT-02 康康大型文体场馆无形资产开发.
P0 optional: collect structured participant scorecards if formal user-tested upgrade is desired.
P1: write provisional repeatability learnings into B2 assets after Ming approval.
```
