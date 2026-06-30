# 两句话品类独创 Skill · User Language Test Results v1

> Skill ID: `yuanli-category-two-sentence`  
> Date: 2026-06-30  
> Protocol: `skills/yuanli-category-two-sentence/USER-LANGUAGE-TEST-v1.md`  
> Evidence Prep: `skills/yuanli-category-two-sentence/TRANSCRIPT-EVIDENCE-EXTRACTION-RESULTS-v1.md` / `skills/yuanli-category-two-sentence/HIGHER-TIER-SOURCE-EXTRACTION-RESULTS-v1.md`  
> Status: lightweight 9-interview run prepared; interviews pending  
> Boundary: no fabricated responses; not user-tested / not reviewed / not active / not canonical / not B2 Validation 3/5

---

## 0. Purpose

```text
USER-LANGUAGE-TEST-RESULTS-v1 records target-user reactions to candidate category names.
```

It tests whether target users can:

```text
1. Understand the name.
2. Repeat it after delay.
3. Feel emotional / identity pull.
4. Justify paying more or reallocating attention.
5. Escape the old category trap.
6. Assign each phrase to the right role in the naming stack.
```

Current status:

```yaml
interviews_completed: 0
minimum_lightweight_target: 9
recommended_target: 15
result_status: fieldwork_prepared
skill_state_change: none
b2_validation_change: none
```

---

## 1. Non-Fabrication Rule

```text
Do not invent participant responses.
Do not mark a name as winner until real participant feedback is recorded.
Do not upgrade the skill to user-tested without interview evidence.
```

Allowed before interviews:

```text
1. Prepare intake templates.
2. Define scoring sheets.
3. Define decision rules.
4. Record transcript-evidence-based hypotheses.
5. Wait for real participant answers or approved transcript imports.
```

---

## 2. Lightweight Fieldwork Plan

Run:

```text
3 cases × 3 participants = 9 interviews
```

Participant allocation:

| Interview ID | Case | Target Participant | Status |
|---|---|---|---|
| C01-P1 | CASE-01 水月老师随身寺庙 | 高净值女性 / 海外华人 / 东方美学收藏者 / 高端礼品购买者 | pending |
| C01-P2 | CASE-01 水月老师随身寺庙 | 高净值女性 / 海外华人 / 东方美学收藏者 / 高端礼品购买者 | pending |
| C01-P3 | CASE-01 水月老师随身寺庙 | 高净值女性 / 海外华人 / 东方美学收藏者 / 高端礼品购买者 | pending |
| C05-P1 | CASE-05 达哥张姐低奢皮草 | 高净值女性 / 私域高复购用户 / 女性消费创业者 | pending |
| C05-P2 | CASE-05 达哥张姐低奢皮草 | 高净值女性 / 私域高复购用户 / 女性消费创业者 | pending |
| C05-P3 | CASE-05 达哥张姐低奢皮草 | 高净值女性 / 私域高复购用户 / 女性消费创业者 | pending |
| C08-P1 | CASE-08 高净值留学生游戏化婚礼 | 海归年轻人 / 高净值年轻人 / 婚礼服务潜在客户 / 家族企业二代 | pending |
| C08-P2 | CASE-08 高净值留学生游戏化婚礼 | 海归年轻人 / 高净值年轻人 / 婚礼服务潜在客户 / 家族企业二代 | pending |
| C08-P3 | CASE-08 高净值留学生游戏化婚礼 | 海归年轻人 / 高净值年轻人 / 婚礼服务潜在客户 / 家族企业二代 | pending |

---

## 3. Test Scope

Selected cases:

```text
CASE-01 水月老师随身寺庙
CASE-05 达哥张姐低奢皮草
CASE-08 高净值留学生游戏化婚礼
```

Candidate names and refined phrases:

```text
CASE-01: 随身寺庙 vs 随身精神资产 + bridge: 可带走的东方精神器物
CASE-05: 养成系社交货币 vs 养成系稀缺美学 vs 双奢结合 + control: 高净值姐姐专属高端皮草
CASE-08: 游戏化社交婚礼 vs 归国首秀导演 vs 人生主权宣言 + diagnostic: 人生叙事的空间翻译
```

---

## 4. Scoring Dimensions

Each participant scores each candidate phrase 1-5:

| Dimension | Meaning |
|---|---|
| First-glance clarity | 不看解释，第一眼是否知道大概是什么 |
| Target-user fit | 是否知道这是给谁的 |
| Old-category escape | 是否逃离旧品类比较 |
| Emotional pull | 是否心动、好奇、被击中、有身份感 |
| Repeatability | 3-5 分钟后是否还能记住并复述 |
| Budget pull | 是否愿意重新分配预算或注意力 |
| Premium feel | 是否足够高级、能支撑溢价 |
| Yuanli fit | 是否保留原力审美、战略压缩感和非普通文案感 |
| Role clarity | 是否清楚这个词更适合主品类、定位语、解释语还是叙事语 |

Pass threshold:

```text
Average >= 4.0
Repeatability >= 4
Budget pull >= 4
No dimension below 3
```

Revise threshold:

```text
Average 3.2-3.9
Or repeatability / budget pull below 4
```

No-go threshold:

```text
Average < 3.2
Or users consistently misclassify it as the old category
```

---

## 5. Interview Intake Format

Use this format for each participant:

```yaml
participant_id:
case_id:
participant_profile:
privacy_status: anonymized
interview_date:
interview_mode: voice/text/in-person/wechat/other

blind_name_reactions:
  - name:
    first_glance_meaning:
    who_is_it_for:
    old_category_guess:
    curiosity_level_1_5:
    raw_or_paraphrased_quote:

two_sentence_reactions:
  clarity_after_explanation:
  can_repeat_in_own_words: true/false
  repeated_phrase:
  perceived_difference_from_old_category:
  most_moving_word:
  confusing_or_off_word:

role_classification:
  public_category_name:
  premium_positioning:
  bridge_explanation:
  deep_narrative_line:
  not_recommended:
  reason:

budget_reaction:
  would_pay_more_or_shift_attention: true/false/unclear
  reason:
  premium_legitimacy_1_5:

repeatability_check_after_3_to_5_minutes:
  remembered_name:
  friend_referral_sentence:

scores:
  first_glance_clarity:
  target_user_fit:
  old_category_escape:
  emotional_pull:
  repeatability:
  budget_pull:
  premium_feel:
  yuanli_fit:
  role_clarity:

researcher_notes:
```

---

# 6. CASE-01 Results · 水月老师随身寺庙

## 6.1 Hypothesis Before Interviews

Based on transcript and higher-tier evidence extraction:

```yaml
public_poetic_name_hypothesis: 随身寺庙
business_explanation_hypothesis: 随身精神资产
bridge_phrase_hypothesis: 可带走的东方精神器物
main_objection_to_test:
  - 寺庙是否过于宗教化
  - 精神资产是否太商业化或太冷
  - 可带走的东方精神器物是否更像用户会转述的话
```

## 6.2 Candidate Names

```text
A. 随身寺庙
B. 随身精神资产
C. 可带走的东方精神器物
```

## 6.3 Participant Score Table

| Participant | Name | Role Chosen | First-glance clarity | Target-user fit | Old-category escape | Emotional pull | Repeatability | Budget pull | Premium feel | Yuanli fit | Role clarity | Notes |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| C01-P1 | 随身寺庙 |  |  |  |  |  |  |  |  |  |  |  |
| C01-P1 | 随身精神资产 |  |  |  |  |  |  |  |  |  |  |  |
| C01-P1 | 可带走的东方精神器物 |  |  |  |  |  |  |  |  |  |  |  |
| C01-P2 | 随身寺庙 |  |  |  |  |  |  |  |  |  |  |  |
| C01-P2 | 随身精神资产 |  |  |  |  |  |  |  |  |  |  |  |
| C01-P2 | 可带走的东方精神器物 |  |  |  |  |  |  |  |  |  |  |  |
| C01-P3 | 随身寺庙 |  |  |  |  |  |  |  |  |  |  |  |
| C01-P3 | 随身精神资产 |  |  |  |  |  |  |  |  |  |  |  |
| C01-P3 | 可带走的东方精神器物 |  |  |  |  |  |  |  |  |  |  |  |

## 6.4 Participant Intake Slots

### C01-P1

```yaml
participant_id: C01-P1
case_id: CASE-01
participant_profile:
privacy_status: anonymized
interview_date:
interview_mode:
response_status: pending
```

### C01-P2

```yaml
participant_id: C01-P2
case_id: CASE-01
participant_profile:
privacy_status: anonymized
interview_date:
interview_mode:
response_status: pending
```

### C01-P3

```yaml
participant_id: C01-P3
case_id: CASE-01
participant_profile:
privacy_status: anonymized
interview_date:
interview_mode:
response_status: pending
```

## 6.5 Result Summary

```yaml
participant_count: 0
winner_name:
secondary_name:
bridge_or_diagnostic_phrase:
losing_names:
role_stack:
  public_category:
  premium_positioning:
  bridge_explanation:
  deep_narrative_line:
average_scores:
repeatability_quotes:
budget_pull_quotes:
confusing_words:
recommended_category_name:
recommended_secondary_narrative:
result_status: pending
```

---

# 7. CASE-05 Results · 达哥张姐低奢皮草

## 7.1 Hypothesis Before Interviews

Based on transcript and higher-tier evidence extraction:

```yaml
public_category_hypothesis: 养成系稀缺美学
community_narrative_hypothesis: 养成系社交货币
product_mechanism_hypothesis: 双奢结合
plain_language_control: 高净值姐姐专属高端皮草
main_objection_to_test:
  - 养成系是否亲近但不够高级
  - 社交货币是否太互联网化
  - 双奢结合是否清楚但不够有情绪
  - 高净值姐姐专属高端皮草是否最清楚但不够独创
```

## 7.2 Candidate Names

```text
A. 养成系社交货币
B. 养成系稀缺美学
C. 双奢结合
D. 高净值姐姐专属高端皮草
```

## 7.3 Participant Score Table

| Participant | Name | Role Chosen | First-glance clarity | Target-user fit | Old-category escape | Emotional pull | Repeatability | Budget pull | Premium feel | Yuanli fit | Role clarity | Notes |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| C05-P1 | 养成系社交货币 |  |  |  |  |  |  |  |  |  |  |  |
| C05-P1 | 养成系稀缺美学 |  |  |  |  |  |  |  |  |  |  |  |
| C05-P1 | 双奢结合 |  |  |  |  |  |  |  |  |  |  |  |
| C05-P1 | 高净值姐姐专属高端皮草 |  |  |  |  |  |  |  |  |  |  |  |
| C05-P2 | 养成系社交货币 |  |  |  |  |  |  |  |  |  |  |  |
| C05-P2 | 养成系稀缺美学 |  |  |  |  |  |  |  |  |  |  |  |
| C05-P2 | 双奢结合 |  |  |  |  |  |  |  |  |  |  |  |
| C05-P2 | 高净值姐姐专属高端皮草 |  |  |  |  |  |  |  |  |  |  |  |
| C05-P3 | 养成系社交货币 |  |  |  |  |  |  |  |  |  |  |  |
| C05-P3 | 养成系稀缺美学 |  |  |  |  |  |  |  |  |  |  |  |
| C05-P3 | 双奢结合 |  |  |  |  |  |  |  |  |  |  |  |
| C05-P3 | 高净值姐姐专属高端皮草 |  |  |  |  |  |  |  |  |  |  |  |

## 7.4 Participant Intake Slots

### C05-P1

```yaml
participant_id: C05-P1
case_id: CASE-05
participant_profile:
privacy_status: anonymized
interview_date:
interview_mode:
response_status: pending
```

### C05-P2

```yaml
participant_id: C05-P2
case_id: CASE-05
participant_profile:
privacy_status: anonymized
interview_date:
interview_mode:
response_status: pending
```

### C05-P3

```yaml
participant_id: C05-P3
case_id: CASE-05
participant_profile:
privacy_status: anonymized
interview_date:
interview_mode:
response_status: pending
```

## 7.5 Result Summary

```yaml
participant_count: 0
winner_name:
secondary_name:
bridge_or_diagnostic_phrase:
losing_names:
role_stack:
  public_category:
  premium_positioning:
  bridge_explanation:
  deep_narrative_line:
average_scores:
repeatability_quotes:
budget_pull_quotes:
confusing_words:
recommended_category_name:
recommended_secondary_narrative:
result_status: pending
```

---

# 8. CASE-08 Results · 高净值留学生游戏化婚礼

## 8.1 Hypothesis Before Interviews

Based on transcript and higher-tier evidence extraction:

```yaml
public_category_hypothesis: 游戏化社交婚礼
premium_positioning_hypothesis: 归国首秀导演
deep_narrative_line_hypothesis: 人生主权宣言
diagnostic_phrase: 人生叙事的空间翻译
main_objection_to_test:
  - 游戏化社交婚礼是否清楚但太窄
  - 归国首秀导演是否更能表达身份亮相
  - 人生主权宣言是否动人但太抽象
  - 人生叙事的空间翻译是否更准确但不像用户会转述的话
```

## 8.2 Candidate Names

```text
A. 游戏化社交婚礼
B. 归国首秀导演
C. 人生主权宣言
D. 人生叙事的空间翻译
```

## 8.3 Participant Score Table

| Participant | Name | Role Chosen | First-glance clarity | Target-user fit | Old-category escape | Emotional pull | Repeatability | Budget pull | Premium feel | Yuanli fit | Role clarity | Notes |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| C08-P1 | 游戏化社交婚礼 |  |  |  |  |  |  |  |  |  |  |  |
| C08-P1 | 归国首秀导演 |  |  |  |  |  |  |  |  |  |  |  |
| C08-P1 | 人生主权宣言 |  |  |  |  |  |  |  |  |  |  |  |
| C08-P1 | 人生叙事的空间翻译 |  |  |  |  |  |  |  |  |  |  |  |
| C08-P2 | 游戏化社交婚礼 |  |  |  |  |  |  |  |  |  |  |  |
| C08-P2 | 归国首秀导演 |  |  |  |  |  |  |  |  |  |  |  |
| C08-P2 | 人生主权宣言 |  |  |  |  |  |  |  |  |  |  |  |
| C08-P2 | 人生叙事的空间翻译 |  |  |  |  |  |  |  |  |  |  |  |
| C08-P3 | 游戏化社交婚礼 |  |  |  |  |  |  |  |  |  |  |  |
| C08-P3 | 归国首秀导演 |  |  |  |  |  |  |  |  |  |  |  |
| C08-P3 | 人生主权宣言 |  |  |  |  |  |  |  |  |  |  |  |
| C08-P3 | 人生叙事的空间翻译 |  |  |  |  |  |  |  |  |  |  |  |

## 8.4 Participant Intake Slots

### C08-P1

```yaml
participant_id: C08-P1
case_id: CASE-08
participant_profile:
privacy_status: anonymized
interview_date:
interview_mode:
response_status: pending
```

### C08-P2

```yaml
participant_id: C08-P2
case_id: CASE-08
participant_profile:
privacy_status: anonymized
interview_date:
interview_mode:
response_status: pending
```

### C08-P3

```yaml
participant_id: C08-P3
case_id: CASE-08
participant_profile:
privacy_status: anonymized
interview_date:
interview_mode:
response_status: pending
```

## 8.5 Result Summary

```yaml
participant_count: 0
winner_name:
secondary_name:
bridge_or_diagnostic_phrase:
losing_names:
role_stack:
  public_category:
  premium_positioning:
  bridge_explanation:
  deep_narrative_line:
average_scores:
repeatability_quotes:
budget_pull_quotes:
confusing_words:
recommended_category_name:
recommended_secondary_narrative:
result_status: pending
```

---

## 9. Cross-Case Result Summary

```yaml
total_participants_completed: 0
case_completion:
  CASE-01: 0 / 3
  CASE-05: 0 / 3
  CASE-08: 0 / 3
validated_winners:
  CASE-01:
  CASE-05:
  CASE-08:
cross_case_pattern:
user_language_status: pending
skill_upgrade_recommendation: no_upgrade_until_results
b2_validation_recommendation: no_upgrade_until_T0_evidence
```

---

## 10. Decision Rules After Results

### 10.1 Case-level pass

A case passes if:

```text
1. At least 3 valid participant responses are recorded.
2. One name or naming stack has average >= 4.0.
3. Repeatability >= 4.
4. Budget pull >= 4.
5. No critical privacy or old-category confusion issue remains.
```

### 10.2 Skill-level user-tested threshold

The skill can move toward `user-tested` only if:

```text
1. At least 2 of 3 cases pass.
2. Each passed case has at least 3 target participant responses.
3. Evidence includes repeatability and budget-pull quotes or paraphrased signals.
4. Ming approves the interpretation.
```

### 10.3 B2 Validation 3/5 threshold

B2 can only be considered for Validation 3/5 if:

```text
1. Controlled naming evidence exists with 5-10 target users or a clearly accepted lightweight equivalent.
2. User-language results are written back to `assets/B2-品类独创/user-language.md`.
3. Workshop scorecard / validation record is updated.
4. Ming approves the upgrade.
```

---

## 11. Writeback Targets After Real Results

After interviews are completed, write back to:

```text
skills/yuanli-category-two-sentence/USER-LANGUAGE-TEST-RESULTS-v1.md
assets/B2-品类独创/user-language.md
assets/B2-品类独创/workshop-scorecard.md
assets/B2-品类独创/validation-records.md
brain/SKILL-CANDIDATES.md
brain/WRITEBACK-LOG.md
```

Do not update:

```text
CONSTITUTION.md
canonical status
active skill status
B2 Validation 3/5
```

without explicit Ming approval and qualifying evidence.

---

## 12. Fieldwork Collection Instructions

For each interview, collect:

```text
1. Target participant profile, anonymized.
2. Blind reaction to each candidate phrase.
3. Reaction after two-sentence explanation.
4. Role classification: title / subtitle / sales explanation / narrative / do not use.
5. Budget-pull reason.
6. 3-5 minute delayed recall.
7. Scores for all dimensions.
8. Any direct user phrase that is safe to paraphrase.
```

Suggested collection mode:

```text
Start with 9 lightweight interviews:
CASE-01: 3 participants
CASE-05: 3 participants
CASE-08: 3 participants

If early signal is promising, expand to 15 interviews.
```

---

## 13. Next Action

```text
Collect real target-user responses and paste them into this file or provide transcripts for extraction.
```

Once responses are collected, update this file from:

```yaml
result_status: fieldwork_prepared
```

to:

```yaml
result_status: user_language_results_recorded
```
