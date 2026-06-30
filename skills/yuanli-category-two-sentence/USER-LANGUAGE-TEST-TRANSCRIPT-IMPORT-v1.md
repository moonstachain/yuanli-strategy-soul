# 两句话品类独创 Skill · User Language Test Transcript Import v1

> Skill ID: `yuanli-category-two-sentence`  
> Date: 2026-06-30  
> Related C4 Issue: `#159`  
> Source Repo: private `moonstachain/llm-wiki`  
> Status: transcript import protocol created; imports pending  
> Boundary: anonymized/paraphrased signals only; no raw private transcript copied; no fabricated target-user feedback

---

## 0. Purpose

```text
USER-LANGUAGE-TEST-TRANSCRIPT-IMPORT-v1 turns existing llm-wiki transcripts / Get 笔记 / 飞书妙记 into anonymized pre-fieldwork signals for #159.
```

It exists to do one job:

```text
Eat existing transcript material before asking 9 new target users.
```

The import should improve:

```text
1. Candidate phrase selection.
2. Interview probes.
3. Objection watchlist.
4. Role classification options.
5. Budget-pull hypotheses.
6. Safe paraphrased evidence for USER-LANGUAGE-TEST-RESULTS-v1.
```

It must not:

```text
1. Fabricate participant responses.
2. Copy raw private transcript text into public repo.
3. Replace T0 target-user testing.
4. Declare winning names.
5. Upgrade the skill to user-tested / reviewed / active.
6. Upgrade B2 Validation 3/5.
7. Update CONSTITUTION.md.
```

---

## 1. Relationship to #159

#159 requires real target-user feedback:

```text
3 cases × 3 participants = 9 interviews
```

Transcript import is a pre-fieldwork step.

```yaml
input: private llm-wiki transcripts / Get 笔记 / 飞书妙记
output: anonymized signals
use_in_159: refine fieldwork, seed evidence notes, improve prompts
not_use_in_159: count as participant interviews unless Ming explicitly approves a different evidence standard
```

---

## 2. Source Tier Rules

| Tier | Source Type | Can it count as #159 participant? | Use |
|---|---|---:|---|
| T0 | Target-user blind-name test transcript | Yes | user-tested evidence |
| T1 | Founder / client / learner interview transcript | No by default | real language, objections, category framing |
| T2 | Course / private board / work meeting transcript | No | Ming judgment pattern, source sequence, strategic language |
| T3 | Digest / summary / case writeup | No | weak framing evidence, candidate discovery |

Import principle:

```text
T1/T2/T3 can strengthen the test design.
Only T0, or an explicitly approved lightweight equivalent, can support user-tested status.
```

---

## 3. Candidate Source Queue

## 3.1 CASE-01 · 水月老师随身寺庙

```yaml
case_id: CASE-01
candidate_sources:
  - path: sources/transcripts/20260323135813-老郭团队与水月老师-原力os沟通-转写智能优化版-1.md
    source_type: transcript / docx source summary
    tier_candidate: T1/T2
    expected_value:
      - live source sequence
      - Ming live framing
      - business full-picture language
      - product / user / strategy context around 水月老师
  - path: sources/transcripts/20260321134945-原力创业-day2-pm-2026-03-转写智能优化版-1.md
    source_type: course transcript
    tier_candidate: T2
    expected_value:
      - 品类独创 live teaching
      - 随身寺庙 category-language context
      - old-category escape logic
  - path: operations/digests/2026-05-04/transcripts-20260323135813-老郭团队与水月老师-原力os沟通-转写智能优化版-1.md
    source_type: digest
    tier_candidate: T3
    expected_value:
      - quick navigation / summary only
```

Candidate phrases to impact:

```text
随身寺庙
随身精神资产
可带走的东方精神器物
```

---

## 3.2 CASE-05 · 达哥张姐低奢皮草

```yaml
case_id: CASE-05
candidate_sources:
  - path: sources/get-biji/entrepreneurship/ai-龙虾方法论赋能轻奢皮草品牌商业操盘与战略规划研讨会议.md
    source_type: Get 笔记 / strategic consultation + private board
    tier_candidate: T1/T2
    expected_value:
      - high-net-worth sister user segmentation
      - gift-account test logic
      - repeat purchase and referral language
      - Zhangjie brand tone
      - private-domain operation signals
      - budget-pull evidence
  - path: sources/get-biji/wealth/达哥张姐沟通-原力财富三角形-觉醒-创业与财富配置的底层逻辑.md
    source_type: Get 笔记 / communication + training
    tier_candidate: T1/T2
    expected_value:
      - founder-specific strategic context
      - private-domain growth direction
      - high-net-worth product direction
  - path: sources/get-biji/education/商业模式课程分享-达哥张姐ip驱动电商案例与借势合力战略总结.md
    source_type: Get 笔记 / course source
    tier_candidate: T2
    expected_value:
      - IP-driven e-commerce language
      - role of 张姐 personality / brand tone
```

Candidate phrases to impact:

```text
养成系社交货币
养成系稀缺美学
双奢结合
高净值姐姐专属高端皮草
```

---

## 3.3 CASE-08 · 高净值留学生游戏化婚礼

```yaml
case_id: CASE-08
candidate_sources:
  - path: entities/people/juan-juan.md
    source_type: entity profile
    tier_candidate: T3+
    expected_value:
      - founder identity
      - source links
      - category tags
  - path: sources/transcripts/叙世者-原力创业四关完整战略报告.md
    source_type: strategic report
    tier_candidate: T3+
    expected_value:
      - sweet user definition
      - life narrative / decision-right language
      - old-category escape from wedding planning
  - path: sources/transcripts/20260322133809-原力创业-day2-pm-2026-03-转写智能优化版-1.md
    source_type: course transcript
    tier_candidate: T2
    expected_value:
      - 品类独创 live teaching
      - possible wedding / spatial narrative teaching context
```

Candidate phrases to impact:

```text
游戏化社交婚礼
归国首秀导演
人生主权宣言
人生叙事的空间翻译
```

---

## 4. Import Signal Schema

Each imported signal must use this schema:

```yaml
import_id:
date:
case_id:
source_path:
source_tier:
privacy_status: anonymized / paraphrased / public-safe
confidence: cited / paraphrased / inferred

old_category_signal:
  phrase_or_paraphrase:
  old_category:
  impact_on_test:

budget_pull_signal:
  phrase_or_paraphrase:
  budget_reason:
  mental_account:
  impact_on_test:

emotional_pull_signal:
  phrase_or_paraphrase:
  emotion_or_identity_trigger:
  mental_account:
  impact_on_test:

objection_signal:
  phrase_or_paraphrase:
  objection_type:
  implication_for_probe:

role_classification_signal:
  phrase:
  likely_role: public_category / premium_positioning / bridge_explanation / deep_narrative / control / not_recommended
  reason:

candidate_phrase_impact:
  strengthen:
  weaken:
  add_probe:
  add_control:
  add_bridge:
  add_diagnostic:

safe_paraphrased_evidence:
  -

import_decision:
  use_in_USER_LANGUAGE_TEST_RESULTS_v1: true/false
  count_as_participant_response: false
  requires_Ming_approval: true/false
```

---

## 5. Signal Types

### 5.1 old_category_signal

Look for:

```text
用户/创始人/旁观者自然把它说成什么旧东西？
```

Examples:

```text
文玩 / 木作 / 寺院文创
普通皮草 / 淘宝电商 / 直播带货
婚庆策划 / 婚礼布置 / 独立策划师
```

Use:

```text
Add or sharpen old-category trap questions in #159.
```

### 5.2 budget_pull_signal

Look for:

```text
为什么用户愿意多花钱、复购、转介绍、给礼物预算、从旧品类迁移预算？
```

Use:

```text
Add budget-pull probes and score notes.
```

### 5.3 emotional_pull_signal

Look for:

```text
心动、身份、圈层、精神安顿、姐妹关系、家庭信任、被看见、被理解。
```

Use:

```text
Add emotional-pull probes and role-classification choices.
```

### 5.4 objection_signal

Look for:

```text
太宗教化、太商业化、太互联网、太抽象、太普通、太像旧品类。
```

Use:

```text
Add objection watchlist to interviewer notes.
```

### 5.5 role_classification_signal

Look for:

```text
这个词更像标题、副标题、销售解释、广告语、内部战略语，还是不该对外用？
```

Use:

```text
Improve role stack in USER-LANGUAGE-TEST-RESULTS-v1.
```

### 5.6 candidate_phrase_impact

Classify impact on each candidate phrase:

```text
strengthen
weaken
add_probe
add_control
add_bridge
add_diagnostic
```

Use:

```text
Make #159 interviews sharper without declaring winners.
```

---

## 6. Case-Specific Import Questions

## 6.1 CASE-01 · 水月老师随身寺庙

Import questions:

```text
1. Does source language strengthen “随身寺庙” as user-repeatable public category?
2. Does “随身精神资产” sound like user language, business language, or investor language?
3. Is “可带走的东方精神器物” closer to real user referral language?
4. What old category appears most often: 文玩, 木作, 寺院文创, 艺术收藏, 礼品?
5. Is the main objection religious distance, abstraction, or price legitimacy?
```

Expected import outputs:

```yaml
old_category_signal:
budget_pull_signal:
emotional_pull_signal:
objection_signal:
role_classification_signal:
candidate_phrase_impact:
```

---

## 6.2 CASE-05 · 达哥张姐低奢皮草

Import questions:

```text
1. Does source language support “养成系稀缺美学” as public category?
2. Is “养成系社交货币” user language or internal strategy language?
3. Does “双奢结合” work as product mechanism rather than category?
4. Does “高净值姐姐专属高端皮草” work as plain-language control?
5. What budget-pull signals appear:复购、转介绍、礼品心理账户、高净值姐姐、海外华人姐姐、张姐调调？
```

Expected import outputs:

```yaml
old_category_signal:
budget_pull_signal:
emotional_pull_signal:
objection_signal:
role_classification_signal:
candidate_phrase_impact:
```

---

## 6.3 CASE-08 · 高净值留学生游戏化婚礼

Import questions:

```text
1. Does source language support “游戏化社交婚礼” as public category?
2. Does “归国首秀导演” reflect target-user identity and timing?
3. Is “人生主权宣言” user-facing language or deep narrative line?
4. Is “人生叙事的空间翻译” an accurate diagnostic phrase but not user-repeatable?
5. What old category appears most often: 婚庆策划、婚礼布置、独立策划师、设计方案、party？
```

Expected import outputs:

```yaml
old_category_signal:
budget_pull_signal:
emotional_pull_signal:
objection_signal:
role_classification_signal:
candidate_phrase_impact:
```

---

## 7. Import Workflow

### Step 1 · Source read

Read candidate sources from private `llm-wiki`.

### Step 2 · Tier assignment

Mark source as T1 / T2 / T3.

### Step 3 · Signal extraction

Extract only anonymized/paraphrased signals using the schema in Section 4.

### Step 4 · Safety check

Remove:

```text
full raw transcript excerpts
private names not already approved
specific sensitive finance details
private family details
identifiable third-party client information
```

### Step 5 · Impact classification

Mark whether the signal:

```text
strengthens a phrase
weakens a phrase
adds an objection
adds a role-classification probe
adds a budget-pull probe
```

### Step 6 · Writeback

Write safe signals into:

```text
skills/yuanli-category-two-sentence/USER-LANGUAGE-TEST-TRANSCRIPT-IMPORT-RESULTS-v1.md
```

Then update:

```text
skills/yuanli-category-two-sentence/USER-LANGUAGE-TEST-RESULTS-v1.md
brain/SKILL-CANDIDATES.md
brain/WRITEBACK-LOG.md
#159 issue comment
```

---

## 8. Import Result Template

```yaml
import_batch_id:
date:
related_issue: "#159"
status: imported / partial / skipped

case_imports:
  - case_id:
    source_path:
    source_tier:
    source_type:
    privacy_status:
    imported_signals:
      old_category_signal:
      budget_pull_signal:
      emotional_pull_signal:
      objection_signal:
      role_classification_signal:
      candidate_phrase_impact:
    safe_paraphrased_evidence:
    impact_on_159:
    count_as_participant_response: false

cross_case_findings:
fieldwork_refinements:
remaining_gaps:
```

---

## 9. Quality Bar

A transcript import is useful only if it changes at least one of:

```text
1. A question we ask in #159.
2. A phrase we test.
3. A role classification choice.
4. A budget-pull hypothesis.
5. An objection watchlist.
6. A decision rule after interviews.
```

Weak import signals:

```text
1. Generic praise.
2. Long context without user language.
3. Beautiful phrasing that cannot affect the test.
4. Strategic inference without source grounding.
5. Raw private text that cannot be safely paraphrased.
```

---

## 10. Boundary

```text
Transcript import is not target-user validation.
Transcript import cannot close #159 by itself.
Transcript import cannot upgrade the skill to user-tested / reviewed / active.
Transcript import cannot upgrade B2 Validation 3/5.
Transcript import cannot update CONSTITUTION.md.
```

---

## 11. Next C4 Task

```text
Run the first import batch and create USER-LANGUAGE-TEST-TRANSCRIPT-IMPORT-RESULTS-v1.md.
```

Recommended first batch:

```text
CASE-01: sources/transcripts/20260323135813-老郭团队与水月老师-原力os沟通-转写智能优化版-1.md
CASE-05: sources/get-biji/entrepreneurship/ai-龙虾方法论赋能轻奢皮草品牌商业操盘与战略规划研讨会议.md
CASE-08: entities/people/juan-juan.md + sources/transcripts/叙世者-原力创业四关完整战略报告.md
```
