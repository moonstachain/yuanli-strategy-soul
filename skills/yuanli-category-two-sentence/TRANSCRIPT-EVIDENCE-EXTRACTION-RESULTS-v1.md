# 两句话品类独创 Skill · Transcript Evidence Extraction Results v1

> Skill ID: `yuanli-category-two-sentence`  
> Date: 2026-06-30  
> Protocol: `skills/yuanli-category-two-sentence/TRANSCRIPT-EVIDENCE-EXTRACTION-v1.md`  
> Source Pool: private `moonstachain/llm-wiki`  
> Status: first-pass extraction completed  
> Boundary: anonymized/paraphrased signals only; no raw private transcript copied

---

## 0. Executive Summary

```text
This first-pass extraction converts the three Ming-selected cases into structured evidence signals for USER-LANGUAGE-TEST-v1.
```

Selected cases:

```text
CASE-01 水月老师随身寺庙
CASE-05 达哥张姐低奢皮草
CASE-08 高净值留学生游戏化婚礼
```

Source tier judgment:

```text
Current sources are mainly T3 case writeups and strategy summaries.
They are valuable for designing tests and extracting category signals.
They are not T0 target-user language-test evidence.
```

Result:

```yaml
extraction_status: pass_for_test_design
user_test_status: pending
skill_state_impact: no active/reviewed upgrade
b2_validation_impact: no Validation 3/5 upgrade
recommended_next: run USER-LANGUAGE-TEST-v1 with target participants
```

---

## 1. Source Tier Map

| Case | Primary Source Path | Tier | Use |
|---|---|---|---|
| CASE-01 | `moonstachain/llm-wiki/sources/talent-startup/学员案例旧物造-水月老师.md` | T3 | case framing, category signals, budget signals |
| CASE-05 | `moonstachain/llm-wiki/sources/talent-startup/学员案例低奢皮草-达哥.md` | T3 | old-category escape, emotional commerce signals, budget signals |
| CASE-08 | `moonstachain/llm-wiki/sources/talent-startup/学员案例游戏化婚庆-卷卷.md` | T3 | category shift, social account, budget and referral signals |

Evidence tier note:

```text
T3 evidence can support test design and candidate naming.
T3 evidence cannot by itself support user-tested status or B2 Validation 3/5.
```

---

# 2. CASE-01 · 水月老师随身寺庙

## 2.1 Source Object

```yaml
extraction_id: TEE-CASE-01-2026-06-30
case_id: CASE-01
case_name_anonymized: 东方美学精神器物 / 随身寺庙
source_repo: moonstachain/llm-wiki
source_path: sources/talent-startup/学员案例旧物造-水月老师.md
source_tier: T3
privacy_status: private-source / public-safe-paraphrase
selected_for_public_repo: true
```

## 2.2 Extracted Signals

### Old Category Signal

```yaml
old_category_signal:
  paraphrased_phrase: traditional observers would classify it as wood carving, collectible plaything, ornament, art object, or cultural product.
  old_category: 文玩 / 木作 / 手串 / 艺术收藏 / 文创
  why_it_matters: if interpreted as craft or collectible, the product falls into material, craftsmanship, and price comparison.
  confidence: paraphrased_from_T3
```

### Expensive Problem Signal

```yaml
expensive_problem_signal:
  paraphrased_phrase: high-net-worth users have spiritual-supply and premium-gift budgets but often cannot find objects with enough origin, meaning, and reverence.
  expensive_problem: 有精神供养预算和顶级礼品预算，但买不到真正有精神出处、有敬意密度的东西。
  mental_account: 精神账户 / 礼品账户 / 身份账户 / 预算账户
  budget_or_attention_shift: from buying beautiful objects to buying spiritual origin and gift-worthy reverence.
  confidence: paraphrased_from_T3
```

### New Category Signal

```yaml
new_category_signal:
  paraphrased_phrase: the case reframes the product as a portable temple or portable spiritual asset rather than ordinary craft.
  candidate_category: 随身寺庙 / 随身精神资产
  new_frame: a spiritual-aesthetic asset with origin, time, blessing, and gift value.
  old_category_escape: escapes craft, woodwork, jewelry, and art-object comparison.
  confidence: paraphrased_from_T3
```

### Budget Pull Signal

```yaml
budget_pull_signal:
  paraphrased_phrase: high-end users may already have an unused budget for spiritual offering or premium gifting; the product gives that budget a legitimate object.
  why_user_might_pay_more: price sensitivity drops when the object is treated as spiritual origin, rare material, and gift dignity rather than craft.
  price_or_value_hint: high-net-worth premium-gift budget / spiritual-supply budget.
  confidence: paraphrased_from_T3
```

### Emotional Pull Signal

```yaml
emotional_pull_signal:
  paraphrased_phrase: the pull comes from peace, reverence, time, blessing, origin, and the ability to give respect in object form.
  emotion_or_identity_trigger: spiritual peace, cultural belonging, reverence, gift dignity.
  related_account: 精神账户 / 礼品账户 / 身份账户
  confidence: paraphrased_from_T3
```

### Objection Signal

```yaml
objection_signal:
  paraphrased_phrase: the strongest poetic name may also create religious or mystical concern for some users.
  objection_type: religious_concern / too_mystical / too_commercial
  implication_for_test: test whether 随身寺庙 should be public category name and 随身精神资产 should be business explanation.
  confidence: inferred_from_T3
```

### Repeatable Phrase Candidates

```yaml
repeatable_phrase:
  - phrase: 随身寺庙
    candidate_use: primary_category_name
    confidence: paraphrased_from_T3
  - phrase: 随身精神资产
    candidate_use: secondary_explanation / business category
    confidence: paraphrased_from_T3
  - phrase: 有精神出处的器物
    candidate_use: sales_phrase / explanatory bridge
    confidence: inferred_from_T3
```

## 2.3 User Language Test Update

```yaml
recommended_test:
  primary_test: 随身寺庙 vs 随身精神资产
  add_probe:
    - 是否觉得“寺庙”有敬意还是过于宗教化？
    - 是否觉得“精神资产”更贵但更冷？
    - 送礼时你更愿意说哪个名字？
  likely_category_stack:
    public_poetic_name: 随身寺庙
    business_explanation: 随身精神资产
    sales_bridge: 有精神出处的东方美学器物
```

---

# 3. CASE-05 · 达哥张姐低奢皮草

## 3.1 Source Object

```yaml
extraction_id: TEE-CASE-05-2026-06-30
case_id: CASE-05
case_name_anonymized: 高净值女性稀缺美学 / 低奢皮草
source_repo: moonstachain/llm-wiki
source_path: sources/talent-startup/学员案例低奢皮草-达哥.md
source_tier: T3
privacy_status: private-source / public-safe-paraphrase
selected_for_public_repo: true
```

## 3.2 Extracted Signals

### Old Category Signal

```yaml
old_category_signal:
  paraphrased_phrase: the original business could be seen as fur, bags, Taobao fashion e-commerce, or live-commerce products.
  old_category: 普通皮草 / 普通皮包 / 淘宝服饰电商 / 直播带货 / 标品服饰
  why_it_matters: old-category comparison pulls the business into traffic cost, price war, and commodity differentiation.
  confidence: paraphrased_from_T3
```

### Expensive Problem Signal

```yaml
expensive_problem_signal:
  paraphrased_phrase: the target users are not merely buying warmth or bags; they want scarcity, emotional companionship, identity expression, and small-circle social currency.
  expensive_problem: 高净值女性需要有独特审美、情绪关系和小圈层面子的稀缺产品，而不是普通商品。
  mental_account: 情绪账户 / 身份账户 / 社交账户 / 预算账户
  budget_or_attention_shift: from comparing products to participating in a relationship/IP/scarcity system.
  confidence: paraphrased_from_T3
```

### New Category Signal

```yaml
new_category_signal:
  paraphrased_phrase: the case creates a new object by combining rare fur and rare leather/bag craftsmanship through Zhangjie's personal aesthetic and IP.
  candidate_category: 养成系社交货币 / 养成系稀缺美学 / 双奢结合
  new_frame: users buy scarcity, a living designer relationship, and private-domain identity rather than standard product.
  old_category_escape: escapes Taobao commodity e-commerce, live-selling, and ordinary fur/bag comparison.
  confidence: paraphrased_from_T3
```

### Budget Pull Signal

```yaml
budget_pull_signal:
  paraphrased_phrase: the target user is value-sensitive but not price-sensitive; cheaper pricing may even weaken perceived status and giftability.
  why_user_might_pay_more: high-net-worth users pay for uniqueness, Zhangjie's aesthetic/IP, private relationship, and small-circle face.
  price_or_value_hint: high-ticket, high-repeat, low marketing-cost private-domain model.
  confidence: paraphrased_from_T3
```

### Emotional Pull Signal

```yaml
emotional_pull_signal:
  paraphrased_phrase: the pull comes from sisterhood, watching a real designer grow, protecting Zhangjie's authentic aesthetic, and owning something only this circle understands.
  emotion_or_identity_trigger: sisterhood, nurture, pride, insider identity, scarcity.
  related_account: 情绪账户 / 身份账户 / 社交账户
  confidence: paraphrased_from_T3
```

### Objection Signal

```yaml
objection_signal:
  paraphrased_phrase: some candidate names may sound too internet-like, too abstract, or not premium enough for high-net-worth female buyers.
  objection_type: not_premium_enough / too_abstract / product_difference_unclear
  implication_for_test: test whether “养成系稀缺美学” carries more premium feel than “养成系社交货币”, while “双奢结合” may work as mechanism rather than category.
  confidence: inferred_from_T3
```

### Repeatable Phrase Candidates

```yaml
repeatable_phrase:
  - phrase: 养成系稀缺美学
    candidate_use: primary_category_name
    confidence: inferred_from_T3
  - phrase: 养成系社交货币
    candidate_use: community/private-domain narrative
    confidence: inferred_from_T3
  - phrase: 双奢结合
    candidate_use: product mechanism / proof bridge
    confidence: paraphrased_from_T3
  - phrase: 姐姐粉情绪资产
    candidate_use: internal strategy phrase / emotional-account label
    confidence: inferred_from_T3
```

## 3.3 User Language Test Update

```yaml
recommended_test:
  primary_test: 养成系社交货币 vs 养成系稀缺美学 vs 双奢结合
  add_probe:
    - 哪个名字最高级？
    - 哪个名字最像你会转述给姐妹？
    - 哪个名字最能解释你为什么愿意复购？
    - 哪个名字最不像普通皮草电商？
  likely_category_stack:
    public_category_candidate: 养成系稀缺美学
    community_narrative: 养成系社交货币
    product_mechanism: 双奢结合
```

---

# 4. CASE-08 · 高净值留学生游戏化婚礼

## 4.1 Source Object

```yaml
extraction_id: TEE-CASE-08-2026-06-30
case_id: CASE-08
case_name_anonymized: 高净值留学生游戏化婚礼
source_repo: moonstachain/llm-wiki
source_path: sources/talent-startup/学员案例游戏化婚庆-卷卷.md
source_tier: T3
privacy_status: private-source / public-safe-paraphrase
selected_for_public_repo: true
```

## 4.2 Extracted Signals

### Old Category Signal

```yaml
old_category_signal:
  paraphrased_phrase: traditional framing sees the business as wedding planning, wedding decoration, high-end wedding service, or design outsourcing.
  old_category: 婚庆策划 / 婚礼布置 / 高端婚礼 / 留学生婚礼服务
  why_it_matters: old-category comparison makes the business compete on venue, flowers, photography, installation, and budget.
  confidence: paraphrased_from_T3
```

### Expensive Problem Signal

```yaml
expensive_problem_signal:
  paraphrased_phrase: the target user is not buying a wedding; they are buying a coming-home identity reveal, social circle activation, family face, and self-sovereignty moment.
  expensive_problem: 高净值归国年轻人需要把婚礼变成身份亮相、圈层社交和人生主权表达，而不是尴尬仪式。
  mental_account: 社交账户 / 身份账户 / 家庭面子账户 / 预算账户
  budget_or_attention_shift: from paying for wedding decoration to paying for identity and social capital design.
  confidence: paraphrased_from_T3
```

### New Category Signal

```yaml
new_category_signal:
  paraphrased_phrase: the case reframes wedding as a gamified social party / return-home debut, using game mechanics, personality insight, guest-group entry, and SOP-backed nonstandard delivery.
  candidate_category: 游戏化社交婚礼 / 归国首秀导演 / 人生主权宣言
  new_frame: a wedding becomes a designed social operating system for returnees and next-generation high-net-worth youth.
  old_category_escape: escapes wedding planning, decoration, and high-end event comparison.
  confidence: paraphrased_from_T3
```

### Budget Pull Signal

```yaml
budget_pull_signal:
  paraphrased_phrase: 60-100万 wedding budget becomes easier to justify when framed as family face, taste proof, fun, and social capital instead of installation cost.
  why_user_might_pay_more: users pay for high-touch identity design, social-game experience, guest-circle activation, and parent-recognized spending quality.
  price_or_value_hint: high-end wedding budget / identity-event budget.
  confidence: paraphrased_from_T3
```

### Emotional Pull Signal

```yaml
emotional_pull_signal:
  paraphrased_phrase: the pull comes from being understood as a returnee, avoiding awkward traditional wedding performance, and turning the wedding into an enjoyable social game.
  emotion_or_identity_trigger: fun, identity reveal, circle belonging, adulthood, sovereignty.
  related_account: 社交账户 / 身份账户 / 家庭面子账户
  confidence: paraphrased_from_T3
```

### Objection Signal

```yaml
objection_signal:
  paraphrased_phrase: the most philosophical name may be powerful but too abstract for first-glance understanding; the most literal name may be clear but less premium.
  objection_type: too_abstract / too_event-like / insufficiently_wedding
  implication_for_test: test whether 游戏化社交婚礼 wins clarity, 归国首秀导演 wins identity pull, and 人生主权宣言 works best as narrative line.
  confidence: inferred_from_T3
```

### Repeatable Phrase Candidates

```yaml
repeatable_phrase:
  - phrase: 游戏化社交婚礼
    candidate_use: product_category_name
    confidence: paraphrased_from_T3
  - phrase: 归国首秀导演
    candidate_use: premium_positioning / founder-role label
    confidence: inferred_from_T3
  - phrase: 人生主权宣言
    candidate_use: campaign_line / deep narrative
    confidence: paraphrased_from_T3
  - phrase: 回国首秀
    candidate_use: user-friendly short phrase
    confidence: inferred_from_T3
```

## 4.3 User Language Test Update

```yaml
recommended_test:
  primary_test: 游戏化社交婚礼 vs 归国首秀导演 vs 人生主权宣言
  add_probe:
    - 哪个名字一听就懂？
    - 哪个名字让你觉得这是高端服务？
    - 哪个名字最能让你想转发给朋友？
    - 哪个名字最能让父母觉得“这钱花得有水平”？
  likely_category_stack:
    public_category: 游戏化社交婚礼
    premium_positioning: 归国首秀导演
    narrative_line: 人生主权宣言
```

---

## 5. Cross-Case Extraction Findings

### 5.1 Strong shared pattern

```text
All three cases create new categories by moving from visible product/service to invisible account:

CASE-01: object → spiritual/gift account
CASE-05: product → emotional/identity account
CASE-08: wedding → social/identity account
```

### 5.2 Skill-level learning

```text
The two-sentence skill is strongest when it names:

1. The old category trap.
2. The hidden mental account.
3. The unique mechanism that makes the new account believable.
4. The budget reason.
```

### 5.3 Language stack principle

```text
Each case likely needs a three-layer naming stack:

1. Public category name: clearest and repeatable.
2. Premium positioning: creates status and budget pull.
3. Deep narrative line: gives Yuanli taste and emotional depth.
```

### 5.4 Candidate stacks

```yaml
CASE-01:
  public_category: 随身寺庙
  business_explanation: 随身精神资产
  bridge_phrase: 有精神出处的东方美学器物

CASE-05:
  public_category_candidate: 养成系稀缺美学
  community_narrative: 养成系社交货币
  product_mechanism: 双奢结合

CASE-08:
  public_category: 游戏化社交婚礼
  premium_positioning: 归国首秀导演
  narrative_line: 人生主权宣言
```

---

## 6. User-Language-Test Changes Recommended

Update or emphasize these probes in `USER-LANGUAGE-TEST-v1.md`:

```text
1. Which name can you repeat after 3-5 minutes?
2. Which name would you use when introducing it to a friend?
3. Which name makes the product/service feel more expensive and legitimate?
4. Which name sounds too abstract, too commercial, or too old-category?
5. Which phrase creates a new mental account for you?
```

---

## 7. Writeback Suggestions

```yaml
writeback_targets:
  - skills/yuanli-category-two-sentence/TRANSCRIPT-EVIDENCE-EXTRACTION-RESULTS-v1.md
  - skills/yuanli-category-two-sentence/USER-LANGUAGE-TEST-v1.md after optional refinement
  - assets/B2-品类独创/user-language.md after Ming approval
  - assets/B2-品类独创/workshop-scorecard.md after target-user testing
  - brain/SKILL-CANDIDATES.md
  - brain/WRITEBACK-LOG.md
```

---

## 8. Boundary

```text
This file is first-pass evidence extraction, not user-language-test results.
It does not prove target users prefer any name.
It does not upgrade the skill to user-tested / reviewed / active.
It does not upgrade B2 Validation 3/5.
It does not update CONSTITUTION.md.
```

---

## 9. Next C4 Task

```text
Run USER-LANGUAGE-TEST-v1 with target participants and create USER-LANGUAGE-TEST-RESULTS-v1.md.
```

Recommended minimum test:

```text
3 cases × 5 target participants = 15 interviews
```

Fallback lightweight test:

```text
3 cases × 3 target participants = 9 interviews
```
