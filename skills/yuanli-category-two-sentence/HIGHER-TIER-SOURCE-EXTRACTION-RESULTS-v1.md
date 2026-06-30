# 两句话品类独创 Skill · Higher-Tier Source Extraction Results v1

> Skill ID: `yuanli-category-two-sentence`  
> Date: 2026-06-30  
> Source Index: `skills/yuanli-category-two-sentence/HIGHER-TIER-SOURCE-CANDIDATES-v1.md`  
> Source Repo: private `moonstachain/llm-wiki`  
> Status: higher-tier extraction first pass completed  
> Boundary: anonymized/paraphrased signals only; no raw private transcript copied; not T0 user test

---

## 0. Executive Summary

```text
This file extracts higher-tier source signals beyond T3 case writeups for the three selected category-language test cases.
```

Sources inspected:

```text
P0-1: 达哥张姐 Get 笔记 source
P0-2: 原力创业 day2 PM transcript
P0-3: 卷卷 entity/source links and 叙世者 strategic report
P0-4: 水月 related day2 transcript segment
```

Result:

```yaml
status: pass_for_test_refinement
source_tier_upgrade:
  CASE-01: T3 -> T2/T1-like course transcript segment
  CASE-05: T3 -> T1/T2 Get 笔记 source
  CASE-08: T3 -> T3+ strategic report with stronger first-person/source-derived framing
user_test_status: pending
skill_state_impact: no user-tested / reviewed / active upgrade
b2_validation_impact: no Validation 3/5 upgrade
recommended_next: refine USER-LANGUAGE-TEST-v1 probes, then collect real T0 target-user responses
```

---

## 1. Source Tier Map

| Case | Higher-Tier Source | Tier Candidate | Extraction Value |
|---|---|---|---|
| CASE-01 | `sources/transcripts/20260322133809-原力创业-day2-pm-2026-03-转写智能优化版-1.md` | T2 / partial T1-like live course segment | live product story, source language, customer reaction, budget proof |
| CASE-05 | `sources/get-biji/wealth/达哥张姐沟通-原力财富三角形-觉醒-创业与财富配置的底层逻辑.md` | T1/T2 Get 笔记 | strategic communication, high-net-worth product direction, private-domain optimization |
| CASE-08 | `entities/people/juan-juan.md`; `sources/transcripts/叙世者-原力创业四关完整战略报告.md` | T3+ / source-linked strategic report | stronger category logic, sweet user definition, budget account, narrative positioning |

Boundary:

```text
These sources are higher quality than pure T3 case writeups for test design.
They still do not replace T0 target-user interviews.
```

---

# 2. CASE-01 · 水月老师随身寺庙

## 2.1 Source Object

```yaml
extraction_id: HTS-CASE-01-2026-06-30
case_id: CASE-01
source_path: sources/transcripts/20260322133809-原力创业-day2-pm-2026-03-转写智能优化版-1.md
source_tier_candidate: T2 / partial T1-like live course segment
privacy_status: private-source / public-safe-paraphrase
```

## 2.2 Higher-Tier Signals

### Source-strength upgrade

```yaml
source_signal:
  paraphrased_evidence: The day2 transcript contains live course discussion and product-story sequence around 水月老师, including product video language, origin story, user encounter, exhibition test, and business model discussion.
  implication: This is stronger than a static case writeup because it preserves sequence, hesitation, and live explanatory framing.
  confidence: cited_source_path
```

### Old-category / category-confusion signal

```yaml
old_category_signal:
  paraphrased_phrase: The product is at risk of being interpreted as small religious/craft object, bead, box, or cultural product unless the story and origin are explained.
  old_category: 珠串 / 木作 / 小物件 / 寺院文创 / 文玩
  why_it_matters: The category must escape both cheap craft and generic religious commodity.
  confidence: paraphrased_from_higher_tier_source
```

### Expensive problem signal

```yaml
expensive_problem_signal:
  paraphrased_phrase: Target users do not only want to buy an object; they want to take away energy, origin, story, reverence, and cultural/spiritual continuity.
  expensive_problem: 高净值用户需要把精神能量、文化出处和敬意带走，而不是买普通小物件。
  mental_account: 精神账户 / 礼品账户 / 文化归属账户 / 身份账户
  budget_or_attention_shift: from material/craft comparison to energy, story, and spiritual origin.
  confidence: paraphrased_from_higher_tier_source
```

### Budget pull signal

```yaml
budget_pull_signal:
  paraphrased_phrase: A customer repeatedly requested a not-yet-for-sale old-wood object and asked what it would take to obtain it; later an exhibition test created strong demand and surprising revenue density.
  why_user_might_pay_more: High willingness appears before conventional selling when object carries rare material, story, and spiritual energy.
  confidence: paraphrased_from_higher_tier_source
```

### New category implication

```yaml
new_category_signal:
  stronger_candidate: 随身寺庙
  secondary_candidate: 随身精神资产
  bridge_phrase: 有出处、有能量、可带走的东方精神器物
  implication: Higher-tier source strengthens 随身寺庙 as primary poetic category because live language emphasizes carrying a temple/energy/story with oneself.
```

### Objection / test implication

```yaml
objection_signal:
  objection_type: too_religious / too_small_object / not_immediately_understood
  implication_for_USER_LANGUAGE_TEST_v1:
    - Add a probe about whether users hear “寺庙” as reverent or too religious.
    - Add a probe about whether “可带走的能量” is stronger than “精神资产”.
    - Test whether “随身寺庙” creates immediate imagery even before business explanation.
```

## 2.3 Test Update

```yaml
recommended_candidate_stack:
  public_category: 随身寺庙
  business_explanation: 随身精神资产
  user_bridge: 可带走的东方精神器物
new_probe:
  - 你听到“随身寺庙”时，第一反应是高级、神圣、疗愈，还是宗教化/距离感？
  - “可带走的能量”是否比“精神资产”更像你会转述的话？
  - 这个名字是否让你愿意把它作为礼物送给重要的人？
```

---

# 3. CASE-05 · 达哥张姐低奢皮草

## 3.1 Source Object

```yaml
extraction_id: HTS-CASE-05-2026-06-30
case_id: CASE-05
source_path: sources/get-biji/wealth/达哥张姐沟通-原力财富三角形-觉醒-创业与财富配置的底层逻辑.md
source_tier_candidate: T1/T2 Get 笔记
privacy_status: private-source / public-safe-paraphrase
```

## 3.2 Higher-Tier Signals

### Source-strength upgrade

```yaml
source_signal:
  paraphrased_evidence: The Get 笔记 source records a 2h35m communication/training session involving 原力觉醒, 原力创业, and 原力财富, with direct recommendations to strengthen Zhangjie's category features and optimize private-domain operations.
  implication: This source is more operational and more founder-specific than the T3 case writeup.
  confidence: cited_source_path
```

### Old-category signal

```yaml
old_category_signal:
  paraphrased_phrase: If Zhangjie remains framed as ordinary high-end fur/e-commerce, the business stays in product, traffic, and price comparison.
  old_category: 高端皮草 / 淘宝电商 / 私域服饰 / 普通高客单产品
  why_it_matters: The source explicitly points toward strengthening category features and high-net-worth exclusive products.
  confidence: paraphrased_from_higher_tier_source
```

### Expensive problem signal

```yaml
expensive_problem_signal:
  paraphrased_phrase: The task is not simply selling fur; it is developing high-profit products for high-net-worth sisters, while improving repeat purchase and referral through private-domain operations.
  expensive_problem: 高净值姐姐需要能承载稀缺、身份和复购关系的高端皮草产品，而不是普通成交品。
  mental_account: 身份账户 / 情绪账户 / 关系账户 / 预算账户
  budget_or_attention_shift: from traffic purchase to private-domain repeat purchase, referral, and high-margin product recognition.
  confidence: paraphrased_from_higher_tier_source
```

### Budget pull signal

```yaml
budget_pull_signal:
  paraphrased_phrase: The source explicitly links high-net-worth product development with lower traffic cost, higher repeat purchase, and referral.
  why_user_might_pay_more: High-net-worth buyers need scarce/high-value products that feel worth repeating and recommending; cheapness is not the primary driver.
  confidence: paraphrased_from_higher_tier_source
```

### New category implication

```yaml
new_category_signal:
  strongest_public_candidate: 养成系稀缺美学
  strongest_community_candidate: 养成系社交货币
  mechanism_candidate: 双奢结合
  implication: The higher-tier source strengthens “高净值姐姐” and “高端皮草产品” but does not fully prove “养成系” as user language. It suggests “养成系稀缺美学” should be tested as a refined public category, while “双奢结合” remains mechanism language.
```

### Objection / test implication

```yaml
objection_signal:
  objection_type: too_internet_like / not_premium_enough / mechanism_vs_category_confusion
  implication_for_USER_LANGUAGE_TEST_v1:
    - Test whether 高净值女性 prefer “稀缺美学” over “社交货币”.
    - Test whether “双奢结合” is easy to understand but too product-mechanism-like.
    - Add a phrase around 高净值姐姐专属高端皮草产品 as plain-language control.
```

## 3.3 Test Update

```yaml
recommended_candidate_stack:
  public_category: 养成系稀缺美学
  community_narrative: 养成系社交货币
  product_mechanism: 双奢结合
  plain_language_control: 高净值姐姐专属高端皮草
new_probe:
  - 哪个名字让你觉得这是高净值姐姐才会买的东西？
  - 哪个名字更能解释“复购”和“转介绍”？
  - “养成系”会让你觉得亲近，还是不够高级？
  - “双奢结合”是让你更懂产品，还是不够有情绪？
```

---

# 4. CASE-08 · 高净值留学生游戏化婚礼

## 4.1 Source Object

```yaml
extraction_id: HTS-CASE-08-2026-06-30
case_id: CASE-08
source_paths:
  - entities/people/juan-juan.md
  - sources/transcripts/叙世者-原力创业四关完整战略报告.md
source_tier_candidate: T3+ / source-linked strategic report
privacy_status: private-source / public-safe-paraphrase
```

## 4.2 Higher-Tier Signals

### Source-strength upgrade

```yaml
source_signal:
  paraphrased_evidence: The entity file identifies 卷卷 as a wedding design founder with 13 years of front-line design capability, tagged as 原力创业学员 / 婚礼设计 / 品类独创. The strategic report gives a full four-gate analysis from source structure to category, business model, and barriers.
  implication: Stronger than generic case summary for founder-fit and category-language design, though still not T0 target-user evidence.
  confidence: cited_source_path
```

### Old-category signal

```yaml
old_category_signal:
  paraphrased_phrase: The report distinguishes the offering from traditional wedding packages, design-only studios, and independent planning/process coordination.
  old_category: 婚庆套餐 / 婚礼设计方案 / 独立策划师 / 流程统筹
  why_it_matters: The service must avoid being perceived as only decoration, only planning, or only design.
  confidence: paraphrased_from_higher_tier_source
```

### Expensive problem signal

```yaml
expensive_problem_signal:
  paraphrased_phrase: The sweet user is not generic wealthy people but high-net-worth returnee young couples with taste and decision rights; their wedding budget belongs to an account of life-authority proof, not ordinary wedding spending.
  expensive_problem: 高净值海归年轻夫妻需要通过婚礼证明审美、主导权、长大成人和家庭信任兑现。
  mental_account: 身份账户 / 家庭信任账户 / 社交账户 / 预算账户
  budget_or_attention_shift: from wedding consumption to life-authority proof and narrative ownership.
  confidence: paraphrased_from_higher_tier_source
```

### Budget pull signal

```yaml
budget_pull_signal:
  paraphrased_phrase: The report explicitly notes that this budget is not compared with ordinary wedding companies when users are paying for life narrative rather than decoration.
  why_user_might_pay_more: High-end returnee users pay for personal narrative, taste proof, decision rights, and founder-led end-to-end delivery.
  confidence: paraphrased_from_higher_tier_source
```

### New category implication

```yaml
new_category_signal:
  strongest_category_candidate: 人生叙事的空间翻译服务
  strongest_test_candidate_from_current_set: 归国首秀导演
  product_category_candidate: 游戏化社交婚礼
  narrative_line: 人生主权宣言
  implication: Higher-tier source suggests “人生主权宣言” is not random poetry; it maps to decision rights and life-authority proof. However, “人生叙事的空间翻译服务” may be more accurate to founder essence than the current three candidate names.
```

### Objection / test implication

```yaml
objection_signal:
  objection_type: too_abstract / too_design-service_like / not_immediately_wedding
  implication_for_USER_LANGUAGE_TEST_v1:
    - Keep testing current three names, but add “人生叙事的空间翻译” as a diagnostic phrase.
    - Test whether “归国首秀导演” better captures sweet user and decision-right moment.
    - Test whether “游戏化社交婚礼” is too narrow if founder category is actually spatial narrative.
```

## 4.3 Test Update

```yaml
recommended_candidate_stack:
  public_category: 游戏化社交婚礼
  premium_positioning: 归国首秀导演
  deep_narrative_line: 人生主权宣言
  diagnostic_phrase: 人生叙事的空间翻译
new_probe:
  - “归国首秀导演”是否比“游戏化社交婚礼”更能表达身份亮相？
  - “人生主权宣言”是否让你心动，还是太抽象？
  - “人生叙事的空间翻译”是否更准确，但不像用户会转述的话？
  - 你是在为婚礼布置付费，还是为自己的故事被看见付费？
```

---

# 5. Cross-Case Higher-Tier Findings

## 5.1 Evidence quality improved, but not to T0

```text
The three cases now have better source support than pure T3 writeups:

CASE-01 has live course transcript/story sequence.
CASE-05 has long-form Get 笔记 / communication source.
CASE-08 has entity link + strategic four-gate report.
```

Still:

```text
None of these are target-user blind name reactions.
They improve hypotheses; they do not validate winners.
```

## 5.2 Stronger language-stack principle

Higher-tier extraction strengthens the three-layer naming stack:

```text
1. User-repeatable public category
2. Premium positioning
3. Founder/deep narrative language
```

Case stacks after higher-tier extraction:

```yaml
CASE-01:
  public_category: 随身寺庙
  business_explanation: 随身精神资产
  user_bridge: 可带走的东方精神器物

CASE-05:
  public_category: 养成系稀缺美学
  community_narrative: 养成系社交货币
  product_mechanism: 双奢结合
  plain_language_control: 高净值姐姐专属高端皮草

CASE-08:
  public_category: 游戏化社交婚礼
  premium_positioning: 归国首秀导演
  deep_narrative_line: 人生主权宣言
  diagnostic_phrase: 人生叙事的空间翻译
```

## 5.3 Test-design implication

```text
USER-LANGUAGE-TEST-v1 should not merely force one winner.
It should identify which phrase plays which role in the naming stack.
```

---

## 6. Recommended USER-LANGUAGE-TEST-v1 Refinements

Before running interviews, add or emphasize:

```text
1. A plain-language control for CASE-05: 高净值姐姐专属高端皮草.
2. A diagnostic phrase for CASE-08: 人生叙事的空间翻译.
3. A bridge phrase for CASE-01: 可带走的东方精神器物.
4. A role-classification question: 这个词更像主品类名、高端定位、解释语，还是广告语？
```

Recommended new question:

```text
如果这几个词都可以留下，你会把哪个词放在封面标题？哪个词放在副标题？哪个词放在销售解释里？
```

---

## 7. Boundary

```text
This is higher-tier extraction, not target-user validation.
No participant has completed blind-name testing.
No name is declared winner.
No skill status upgrade.
No B2 Validation 3/5 upgrade.
No CONSTITUTION.md update.
```

---

## 8. Next C4 Task

```text
Option A: refine USER-LANGUAGE-TEST-v1 with the added control / diagnostic / bridge phrases.
Option B: proceed directly to target-user interviews and fill USER-LANGUAGE-TEST-RESULTS-v1.md.
```

Recommended:

```text
Do Option A first, because it improves the quality of the upcoming T0 test without overbuilding architecture.
```
