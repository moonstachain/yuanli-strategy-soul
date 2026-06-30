# 两句话品类独创 Skill · User Language Test Decision v1

> Skill ID: `yuanli-category-two-sentence`  
> Date: 2026-06-30  
> Related C4 Issue: `#159`  
> Inputs: `USER-LANGUAGE-TEST-RESULTS-v1.md` / `USER-LANGUAGE-TEST-FIELD-FEEDBACK-v1.md` / `ROLE-STACK-RECOMMENDATION-v1.md`  
> Decision Type: lightweight field evidence decision  
> Status: field-tested-provisional approved  
> Boundary: not formal user-tested / not reviewed / not active / not canonical / not B2 Validation 3/5

---

## 0. Decision Summary

```yaml
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

Meaning:

```text
The skill may now be used in next-round real project iteration as a field-tested-provisional skill candidate.
It should not yet be treated as fully user-tested, reviewed, active, canonical, or B2 Validation 3/5.
```

---

## 1. Why This Decision Exists

The project has reached a decision point.

Before this decision, the skill had:

```text
1. Skill v0.
2. AI pre-review.
3. Real case draft transformations.
4. User language test protocol.
5. Transcript and higher-tier source extraction.
6. First transcript import batch.
7. Ming first-person field feedback after asking users.
8. Role Stack Recommendation v1.
```

The remaining choice was:

```text
Should the skill stay in test-ready state until full 9 scorecards are collected,
or can it move into a provisional field-tested state for next-round practical use?
```

Decision:

```text
Move to field-tested-provisional, while preserving all validation boundaries.
```

---

## 2. Evidence Standard Used

This decision uses a lightweight evidence standard:

```yaml
required:
  - Ming personally asked users about the three selected cases
  - feedback covers all three cases
  - feedback includes clarity / budget / referral / objection signals
  - role-stack recommendation exists
  - no participant details or scores were fabricated
  - limitations are explicitly recorded
not_required_for_this_decision:
  - full 9 participant scorecards
  - anonymized participant profiles
  - delayed recall records
  - 1-5 score tables
```

This standard supports:

```text
field-tested-provisional
```

It does not support:

```text
formal user-tested
reviewed
active
canonical
B2 Validation 3/5
```

---

## 3. Case Decisions

# 3.1 CASE-01 · 水月老师随身寺庙

Evidence:

```yaml
blind_name_signal: 用户不听故事、只看名字时，仍然比较容易理解。
after_story_signal: 听完故事、出处之后，用户愿意把它理解为精神资产。
signal_strength: medium_positive
```

Decision:

```yaml
case_decision: provisional_pass
public_category: 随身寺庙
business_explanation: 随身精神资产
bridge_explanation: 可带走的东方精神器物
confidence: medium_positive
```

Usable expression:

```text
随身寺庙
一件可带走的东方精神器物，听完出处之后，它不只是文玩，而是有精神来源的随身精神资产。
```

Remaining validation need:

```text
1. delayed recall for “随身寺庙”
2. budget-pull score after origin story
3. transferability to other spiritual / cultural object cases
```

---

# 3.2 CASE-05 · 达哥张姐低奢皮草

Evidence:

```yaml
gift_to_close_friend_signal: 暂时还不会自然想到送闺蜜。
repeat_purchase_signal: 轻奢 / 轻度奢侈方向能让用户想到复购。
high_net_worth_friend_signal: 送给高净值朋友时，会更像高净值姐姐的东西。
signal_strength: mixed_positive
```

Decision:

```yaml
case_decision: provisional_partial_pass
public_category_candidate: 养成系稀缺美学
plain_language_anchor: 高净值姐姐专属高端皮草
budget_context: 轻奢复购 / 高净值朋友赠礼
community_narrative_candidate: 养成系社交货币
product_mechanism_candidate: 双奢结合
confidence: mixed_positive
```

Usable expression:

```text
养成系稀缺美学
为高净值姐姐打造的轻奢复购型高端皮草，把一件皮草从普通服饰，变成小圈层里拿得出手的高净值朋友礼物。
```

Clearer control expression:

```text
高净值姐姐专属高端皮草
用张姐的个人审美和稀缺材质，把轻奢皮草做成可复购、可转介绍、可送给高净值朋友的小圈层身份表达。
```

Remaining validation need:

```text
1. whether “养成系稀缺美学” is user-repeatable
2. whether “轻奢复购” should enter public-facing language
3. whether 高净值姐姐专属高端皮草 converts better despite weaker originality
4. whether 双奢结合 should remain mechanism-only
```

---

# 3.3 CASE-08 · 高净值留学生游戏化婚礼

Evidence:

```yaml
story_seen_budget_signal: “自己的故事被看见”特别被认可，用户愿意为此付费。
gamification_signal: 游戏化是年轻人喜欢的，并且特别适合朋友推荐。
life_narrative_signal: 人生叙事未必特别好理解。
signal_strength: strong_positive
```

Decision:

```yaml
case_decision: provisional_pass
public_category: 游戏化社交婚礼
premium_positioning_candidate: 归国首秀导演
bridge_explanation: 让自己的故事被看见
deep_narrative: 人生主权宣言
diagnostic_internal_phrase: 人生叙事的空间翻译
confidence: strong_positive
```

Usable expression:

```text
游戏化社交婚礼
为高净值归国年轻人设计一场让自己的故事被看见的社交首秀，让婚礼不只是布置，而是朋友愿意参与和转发的人生主权宣言。
```

Premium positioning expression:

```text
归国首秀导演
把婚礼变成高净值归国年轻人的游戏化社交首秀，让自己的故事被看见，也让家人和朋友看到一个真正长大的你。
```

Remaining validation need:

```text
1. delayed recall for 游戏化社交婚礼
2. whether 归国首秀导演 supports high-end positioning
3. whether 让自己的故事被看见 should move into title / subtitle
4. whether 人生叙事的空间翻译 should remain internal only
```

---

## 4. Cross-Case Decision

```yaml
cross_case_decision: field_tested_provisional
cases_passing_provisionally:
  - CASE-01
  - CASE-08
cases_partial:
  - CASE-05
overall_signal: sufficient_for_next_iteration
```

Strategic learning:

```text
用户语言比战略语言更具体。
```

Implication:

```text
The skill should not optimize for clever category names alone.
It should create a role-stack that separates strategic essence from user-facing language.
```

Role stack to preserve:

```yaml
public_category: user-repeatable entry phrase
premium_positioning: status and budget-pull phrase
business_explanation: context/proof-based business explanation
bridge_explanation: sales-friendly comprehension phrase
deep_narrative: founder / Yuanli emotional language
community_narrative: private-domain identity language
product_mechanism: mechanism of difference
diagnostic_internal_phrase: strategic internal diagnosis
plain_language_anchor: clarity control phrase
```

---

## 5. State Change

Approved state change:

```yaml
candidate_id: yuanli-category-two-sentence
from: user-language-test-ready
to: field-tested-provisional
reason: Ming qualitative field feedback covers all three selected cases and supports a role-stack recommendation for next-round practical use.
```

Not approved:

```yaml
formal_user_tested: false
reviewed: false
active: false
canonical: false
b2_validation_3_5: false
issue_159_close: false
constitution_update: false
```

---

## 6. How This Skill Can Be Used Now

Allowed use:

```text
1. Use Role Stack Recommendation v1 in next-round real case work.
2. Use the skill to produce public category / positioning / bridge / narrative stacks.
3. Use the three cases as provisional reference examples.
4. Use field-tested-provisional status to route future B2 category work through this skill candidate.
```

Not allowed use:

```text
1. Do not claim full validation.
2. Do not claim statistically validated user preference.
3. Do not turn this into canonical B2 doctrine yet.
4. Do not close #159 solely from this decision.
5. Do not update CONSTITUTION.md.
```

---

## 7. Next C4 Tasks

Immediate next task:

```text
Update brain/SKILL-CANDIDATES.md to add state `field-tested-provisional` and move Candidate 001 into that state.
```

Then:

```text
Update brain/WRITEBACK-LOG.md with this decision.
Comment on #159 with the decision summary.
Keep #159 open for optional structured scorecard completion.
```

Optional validation task:

```text
Collect participant-level scorecards for the three cases if formal user-tested upgrade is desired.
```

---

## 8. Decision Boundary

```text
This decision creates a provisional field-tested state.
It does not fabricate user data.
It does not complete structured 9-interview validation.
It does not close #159.
It does not make the skill reviewed / active / canonical.
It does not upgrade B2 Validation 3/5.
It does not update CONSTITUTION.md.
```
