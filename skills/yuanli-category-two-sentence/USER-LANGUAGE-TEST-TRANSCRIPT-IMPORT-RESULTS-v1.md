# 两句话品类独创 Skill · User Language Test Transcript Import Results v1

> Skill ID: `yuanli-category-two-sentence`  
> Date: 2026-06-30  
> Protocol: `skills/yuanli-category-two-sentence/USER-LANGUAGE-TEST-TRANSCRIPT-IMPORT-v1.md`  
> Related C4 Issue: `#159`  
> Source Repo: private `moonstachain/llm-wiki`  
> Status: first import batch completed  
> Boundary: anonymized/paraphrased signals only; no raw private transcript copied; no fabricated target-user response

---

## 0. Executive Summary

```text
This file imports the first batch of existing llm-wiki transcripts / Get 笔记 / entity-linked reports into #159 as pre-fieldwork signals.
```

First import batch:

```text
CASE-01: 老郭团队与水月老师-原力OS沟通逐字稿
CASE-05: AI+龙虾方法论赋能轻奢皮草品牌商业操盘与战略规划研讨会议 Get 笔记
CASE-08: 卷卷 entity + 叙世者原力创业四关完整战略报告
```

Result:

```yaml
import_status: completed_first_batch
participant_responses_created: 0
count_as_159_interviews: false
user_tested_status: false
skill_upgrade: none
b2_validation_upgrade: none
use: refine #159 fieldwork questions, role classification, and objection watchlist
```

---

## 1. Source Tier Map

| Case | Source Path | Source Type | Tier | Import Use |
|---|---|---|---|---|
| CASE-01 | `sources/transcripts/20260323135813-老郭团队与水月老师-原力os沟通-转写智能优化版-1.md` | transcript / docx source summary | T1/T2 candidate | business full-picture framing, Ming live framing, source sequence |
| CASE-05 | `sources/get-biji/entrepreneurship/ai-龙虾方法论赋能轻奢皮草品牌商业操盘与战略规划研讨会议.md` | Get 笔记 / strategic consultation + private board | T1/T2 | user segmentation, gift-account test, repeat purchase, referral, budget pull |
| CASE-08 | `entities/people/juan-juan.md` + `sources/transcripts/叙世者-原力创业四关完整战略报告.md` | entity + strategic report | T3+ | founder identity, sweet user, old-category escape, role stack |

Boundary:

```text
These imports improve the fieldwork design.
They are not target-user blind-name reactions.
They cannot close #159 by themselves.
```

---

# 2. CASE-01 Import · 水月老师随身寺庙

## 2.1 Source Object

```yaml
import_id: ULTI-CASE-01-2026-06-30
case_id: CASE-01
source_path: sources/transcripts/20260323135813-老郭团队与水月老师-原力os沟通-转写智能优化版-1.md
source_tier: T1/T2 candidate
privacy_status: private-source / public-safe-paraphrase
confidence: paraphrased_from_source
count_as_participant_response: false
```

## 2.2 Import Summary

The source is a live 原力OS communication transcript involving Ming, 老郭团队, and 水月老师. It is useful less as direct target-user naming evidence and more as a live context record showing how Ming frames business full-picture analysis, source gathering, AI-assisted strategic reconstruction, and user / finance / supply-chain / strategic-event decomposition.

## 2.3 Imported Signals

### old_category_signal

```yaml
phrase_or_paraphrase: The source does not strongly record target-user confusion around “随身寺庙” itself; it mainly shows that the case needs full business-context reconstruction before category-language testing.
old_category: insufficient_direct_signal
impact_on_test: Keep old-category probes from prior extraction, but do not overclaim this source as direct evidence for 文玩 / 木作 / 寺院文创 confusion.
```

### budget_pull_signal

```yaml
phrase_or_paraphrase: The transcript emphasizes the need to read business data, user structure, supply chain, strategic events, and benchmark logic before judging business potential.
budget_reason: Budget pull for CASE-01 should be tested through “spiritual / gift / origin” value, but this source mainly supports the need for evidence-backed business explanation.
mental_account: 证据账户 / 战略可信账户 / 礼品账户待验证
impact_on_test: Ask whether “随身精神资产” feels credible only after users hear provenance, supply, and proof story.
```

### emotional_pull_signal

```yaml
phrase_or_paraphrase: This source does not provide strong end-user emotional language; it provides Ming's live strategic framing and case-use context.
emotion_or_identity_trigger: insufficient_direct_signal
mental_account: not_enough_evidence
impact_on_test: Do not treat this source as proof that users feel “随身寺庙”; keep emotional-pull validation for #159 interviews.
```

### objection_signal

```yaml
phrase_or_paraphrase: The case requires clear explanation before outsiders can understand the business and category.
objection_type: context_gap / explanation_gap / not_immediately_understood
implication_for_probe: In #159, test both blind-name reaction and reaction after provenance / two-sentence explanation.
```

### role_classification_signal

```yaml
phrase: 随身精神资产
likely_role: bridge_explanation / business_explanation
reason: The source strengthens the need for a business-context explanation layer rather than proving a user-repeatable public category.
```

### candidate_phrase_impact

```yaml
strengthen:
  - 随身精神资产 as business explanation
  - 可带走的东方精神器物 as bridge phrase requiring story support
weaken:
  - none
add_probe:
  - “不听故事，只看名字，你会不会误解它？”
  - “听完出处、材料、用户和供给故事后，你是否更愿意把它当成精神资产？”
add_control:
  - none
add_bridge:
  - provenance / origin story explanation
add_diagnostic:
  - Does the name need business-context explanation before budget pull appears?
```

## 2.4 Impact on #159

```yaml
use_in_USER_LANGUAGE_TEST_RESULTS_v1: true
count_as_participant_response: false
recommended_fieldwork_change:
  - Keep blind-name test strict.
  - Add a second-round probe after origin/provenance explanation.
  - Do not count this as user preference evidence.
```

---

# 3. CASE-05 Import · 达哥张姐低奢皮草

## 3.1 Source Object

```yaml
import_id: ULTI-CASE-05-2026-06-30
case_id: CASE-05
source_path: sources/get-biji/entrepreneurship/ai-龙虾方法论赋能轻奢皮草品牌商业操盘与战略规划研讨会议.md
source_tier: T1/T2
privacy_status: private-source / public-safe-paraphrase
confidence: paraphrased_from_source
count_as_participant_response: false
```

## 3.2 Import Summary

This source is highly useful for #159. It records a strategic consultation / private-board context around Zhangjie's light-luxury fur brand, with strong evidence for high-net-worth female user segmentation, gift-account testing, repeat purchase / referral logic, private-domain operations, brand tone, and high-value product direction.

## 3.3 Imported Signals

### old_category_signal

```yaml
phrase_or_paraphrase: Without category design, the business can be read as ordinary high-end fur, private-domain apparel, or e-commerce product operation.
old_category: 高端皮草 / 私域服饰 / 淘宝电商 / 产品创意库
impact_on_test: Ask participants which phrase most escapes “普通皮草电商”.
```

### budget_pull_signal

```yaml
phrase_or_paraphrase: The source identifies high-spending users, repeat purchase potential, referral through gifts, and the need to test whether users will gift custom accessories to close the gift-account loop.
budget_reason: Users may pay more and repeat when the product becomes a relationship / gift / identity object rather than a functional garment.
mental_account: 礼品账户 / 情绪账户 / 身份账户 / 关系账户 / 预算账户
impact_on_test: Add explicit questions about “复购”, “转赠闺蜜”, “送礼是否拿得出手”, and “是否愿意推荐给姐妹”.
```

### emotional_pull_signal

```yaml
phrase_or_paraphrase: The brand depends on Zhangjie's personal tone, direct user connection, and a high-intimacy private-domain relationship with older high-net-worth Chinese women and overseas Chinese women.
emotion_or_identity_trigger: 姐妹关系 / 被懂得 / 私域信任 / 设计师人格 / 小圈层身份
mental_account: 情绪账户 / 身份账户 / 社交账户
impact_on_test: Ask whether “养成系” feels intimate and emotionally sticky, or whether it weakens premium status.
```

### objection_signal

```yaml
phrase_or_paraphrase: The source strengthens the user and gift logic, but it does not prove that “养成系” is user-facing language.
objection_type: too_internet_like / not_premium_enough / category_vs_mechanism_confusion
implication_for_probe: Test whether “高净值姐姐专属高端皮草” beats the more original phrases on clarity, and whether “养成系稀缺美学” beats it on premium/emotional pull.
```

### role_classification_signal

```yaml
signals:
  - phrase: 养成系稀缺美学
    likely_role: public_category / premium_positioning
    reason: Best candidate for combining intimacy, scarcity, and aesthetics, but still needs user test.
  - phrase: 养成系社交货币
    likely_role: community_narrative / deep_narrative
    reason: Strong for private-domain behavior explanation, possibly less premium as public title.
  - phrase: 双奢结合
    likely_role: bridge_explanation / product_mechanism
    reason: Clarifies product difference but may not carry enough emotion.
  - phrase: 高净值姐姐专属高端皮草
    likely_role: control / plain_language_title
    reason: Very clear target-user language, but may not escape old category enough.
```

### candidate_phrase_impact

```yaml
strengthen:
  - 养成系稀缺美学
  - 高净值姐姐专属高端皮草 as control phrase
  - 双奢结合 as product mechanism
weaken:
  - none, but 养成系社交货币 requires premium-feel test
add_probe:
  - “这个词会不会让你想送给闺蜜？”
  - “哪个词最能解释为什么会复购？”
  - “哪个词听起来最像高净值姐姐而不是普通皮草用户？”
add_control:
  - 高净值姐姐专属高端皮草
add_bridge:
  - 礼品心理账户
add_diagnostic:
  - Is “养成系” emotionally sticky or too internet-like?
```

## 3.4 Impact on #159

```yaml
use_in_USER_LANGUAGE_TEST_RESULTS_v1: true
count_as_participant_response: false
recommended_fieldwork_change:
  - Make gift-account and referral questions mandatory for CASE-05.
  - Record whether participants naturally say “姐姐”, “闺蜜”, “复购”, “送礼”, or “稀缺”.
  - Score premium feel separately from clarity.
```

---

# 4. CASE-08 Import · 高净值留学生游戏化婚礼

## 4.1 Source Object

```yaml
import_id: ULTI-CASE-08-2026-06-30
case_id: CASE-08
source_paths:
  - entities/people/juan-juan.md
  - sources/transcripts/叙世者-原力创业四关完整战略报告.md
source_tier: T3+ / source-linked strategic report
privacy_status: private-source / public-safe-paraphrase
confidence: paraphrased_from_source
count_as_participant_response: false
```

## 4.2 Import Summary

This source set is highly useful for founder essence and category-role design. It confirms the founder's identity as a senior wedding design practitioner, and the strategic report gives strong language around spatial narrative, high-net-worth returnee couples, decision rights, family trust, old-category escape, and “life narrative” as the true object of payment.

## 4.3 Imported Signals

### old_category_signal

```yaml
phrase_or_paraphrase: The offering must escape wedding packages, wedding decoration, design-only studios, independent planners, and process coordination.
old_category: 婚庆套餐 / 婚礼布置 / 设计方案 / 独立策划师 / 流程统筹
impact_on_test: Ask which candidate phrase most clearly avoids being heard as ordinary wedding planning.
```

### budget_pull_signal

```yaml
phrase_or_paraphrase: The target user is a high-net-worth returnee couple with taste and decision rights; wedding spending belongs to a psychological account of life-authority proof, family trust, and personal narrative, not just decoration.
budget_reason: Users pay more when the service is framed as making their own story visible and proving adult decision rights to family.
mental_account: 身份账户 / 家庭信任账户 / 人生主导权账户 / 社交账户 / 预算账户
impact_on_test: Ask whether the participant feels they are paying for “婚礼布置” or “自己的故事被看见”.
```

### emotional_pull_signal

```yaml
phrase_or_paraphrase: The strongest emotional trigger is not “wedding” itself, but being understood, having one's story translated into space, and having parents/guests recognize a coming-of-age identity.
emotion_or_identity_trigger: 被看见 / 长大成人 / 家庭信任兑现 / 审美被证明 / 身份亮相
mental_account: 身份账户 / 家庭信任账户 / 社交账户
impact_on_test: Test whether “归国首秀导演” creates more identity pull than “游戏化社交婚礼”.
```

### objection_signal

```yaml
phrase_or_paraphrase: The accurate founder-essence phrase may be too abstract for user repetition; the clear product phrase may be too narrow.
objection_type: too_abstract / too_narrow / too_design-service_like / not_immediately_wedding
implication_for_probe: Test “人生叙事的空间翻译” as diagnostic phrase, not necessarily as title; test “归国首秀导演” as premium positioning.
```

### role_classification_signal

```yaml
signals:
  - phrase: 游戏化社交婚礼
    likely_role: public_category
    reason: Clear, externally understandable, but may be narrower than founder essence.
  - phrase: 归国首秀导演
    likely_role: premium_positioning
    reason: Strongly maps to returnee identity and social debut.
  - phrase: 人生主权宣言
    likely_role: deep_narrative
    reason: Emotionally powerful but likely too abstract as first-glance category.
  - phrase: 人生叙事的空间翻译
    likely_role: diagnostic / founder_essence
    reason: Highly accurate to founder essence, but may not be user-repeatable.
```

### candidate_phrase_impact

```yaml
strengthen:
  - 归国首秀导演 as premium positioning
  - 人生主权宣言 as deep narrative line
  - 人生叙事的空间翻译 as diagnostic phrase
weaken:
  - none, but 游戏化社交婚礼 must be tested for being too narrow
add_probe:
  - “你是在为婚礼布置付费，还是为自己的故事被看见付费？”
  - “归国首秀导演是否比游戏化社交婚礼更像高端服务？”
  - “人生叙事的空间翻译准确吗？你会转述给朋友吗？”
add_control:
  - none
add_bridge:
  - 让自己的故事被看见
add_diagnostic:
  - 人生叙事的空间翻译
```

## 4.4 Impact on #159

```yaml
use_in_USER_LANGUAGE_TEST_RESULTS_v1: true
count_as_participant_response: false
recommended_fieldwork_change:
  - Force role classification rather than single-winner selection.
  - Track whether “归国首秀” appears in participant's own retelling.
  - Track whether “人生叙事的空间翻译” is admired but not repeated.
```

---

# 5. Cross-Case Imported Findings

## 5.1 Strongest Import Result

```text
The import reinforces that #159 should not ask only “which name wins?”
It should map each phrase into a role stack.
```

Role stack:

```yaml
public_category: user-repeatable first-glance phrase
premium_positioning: budget-pull and status phrase
bridge_explanation: sales explanation / plain language / mechanism phrase
deep_narrative: Yuanli essence / founder-level story phrase
diagnostic: internal strategic accuracy phrase
control: plain-language comparison phrase
```

## 5.2 Updated Case Role Stack Hypotheses

```yaml
CASE-01:
  public_category_candidate: 随身寺庙
  business_explanation: 随身精神资产
  bridge_explanation: 可带走的东方精神器物
  gap: emotional-pull evidence still requires T0 test

CASE-05:
  public_category_candidate: 养成系稀缺美学
  community_narrative: 养成系社交货币
  bridge_explanation: 双奢结合
  control: 高净值姐姐专属高端皮草
  strongest_import_signal: gift-account / referral / repeat-purchase logic

CASE-08:
  public_category_candidate: 游戏化社交婚礼
  premium_positioning: 归国首秀导演
  deep_narrative: 人生主权宣言
  diagnostic: 人生叙事的空间翻译
  strongest_import_signal: life-authority / family-trust / spatial-narrative logic
```

## 5.3 Fieldwork Questions to Add or Emphasize

```text
1. 这个词更像标题、副标题、销售解释、品牌故事，还是不适合对外？
2. 听完解释后，你愿意为什么多付钱？
3. 3-5 分钟后，你自然记住的是哪个词？
4. 你会怎么介绍给朋友？
5. 这个名字有没有把你拉回旧品类？
```

---

## 6. Import Decisions

```yaml
import_batch_id: ULTI-BATCH-001
status: imported
use_in_USER_LANGUAGE_TEST_RESULTS_v1: true
count_as_participant_response: false
requires_Ming_approval_for_validation: true
safe_to_reference_publicly: source paths and paraphrased signals only
```

---

## 7. Remaining Gaps

```text
1. No target-user blind-name reaction has been recorded.
2. No participant delayed recall has been recorded.
3. No participant budget-pull score has been recorded.
4. CASE-01 still lacks direct user-language support from this import batch.
5. #159 still requires 9 real interviews or Ming-approved alternative evidence standard.
```

---

## 8. Next C4 Task

```text
Update USER-LANGUAGE-TEST-RESULTS-v1.md with an Imported Pre-Fieldwork Signals section.
Then collect real target-user responses for #159.
```

Suggested next writeback:

```text
skills/yuanli-category-two-sentence/USER-LANGUAGE-TEST-RESULTS-v1.md
#159 issue comment
brain/WRITEBACK-LOG.md
```
