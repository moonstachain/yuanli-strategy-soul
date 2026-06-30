# 两句话品类独创 Skill · Transcript Evidence Extraction v1

> Skill ID: `yuanli-category-two-sentence`  
> Date: 2026-06-30  
> Source Pool: private `moonstachain/llm-wiki` transcripts / meeting notes / case summaries  
> Status: extraction protocol created; extraction pending  
> Boundary: private raw transcripts must not be copied into public repo

---

## 0. Purpose

```text
TRANSCRIPT-EVIDENCE-EXTRACTION-v1 turns llm-wiki interview transcripts into anonymized evidence for B2 品类独创 and C2 一个大脑.
```

It answers:

```text
Which words did real people use?
Which old categories did they naturally fall into?
Which expensive problems did they reveal?
Which phrases show budget pull, emotional pull, or category shift?
Which objections should be tested in USER-LANGUAGE-TEST-v1?
```

This protocol does not replace target-user testing. It prepares better test material.

---

## 1. Evidence Tier

Classify every source before extraction:

| Tier | Source Type | Use |
|---|---|---|
| T0 | Target-user user-language test transcript | Can support user-tested evidence |
| T1 | Founder / client / learner interview transcript | Can support real language and case understanding |
| T2 | Course / private board / work meeting transcript | Can support strategic reasoning and Ming judgment pattern |
| T3 | Digest / summary / case writeup | Can support candidate framing but not final validation |

Current expected use:

```text
Most llm-wiki sources are T1 / T2 / T3.
They are valuable for extraction, but they are not controlled user-language-test evidence yet.
```

---

## 2. Privacy Boundary

```text
Do not copy raw private transcript text into public yuanli-strategy-soul.
```

Allowed:

```text
1. case_id
2. source_path
3. source_tier
4. anonymized short quote fragment if approved
5. paraphrased user-language signal
6. extracted old category / expensive problem / budget pull / objection
```

Not allowed without Ming approval:

```text
1. full raw transcript excerpt
2. identifiable private client / learner details
3. names + business details that expose identity
4. sensitive financial numbers from private context
5. non-anonymized objections or personal statements
```

---

## 3. Extraction Objects

For each transcript, extract the following objects:

```yaml
source_id:
source_repo: moonstachain/llm-wiki
source_path:
source_tier: T0/T1/T2/T3
case_id:
case_name_anonymized:
privacy_status: private/anonymized/public-safe
selected_for_public_repo: true/false
```

### 3.1 Old category signal

```yaml
old_category_signal:
  raw_or_paraphrased_phrase:
  old_category:
  why_it_matters:
  confidence: cited/paraphrased/inferred
```

### 3.2 Expensive problem signal

```yaml
expensive_problem_signal:
  raw_or_paraphrased_phrase:
  expensive_problem:
  mental_account:
  budget_or_attention_shift:
  confidence: cited/paraphrased/inferred
```

### 3.3 New category signal

```yaml
new_category_signal:
  raw_or_paraphrased_phrase:
  candidate_category:
  new_frame:
  old_category_escape:
  confidence: cited/paraphrased/inferred
```

### 3.4 Budget pull signal

```yaml
budget_pull_signal:
  raw_or_paraphrased_phrase:
  why_user_might_pay_more:
  price_or_value_hint:
  confidence: cited/paraphrased/inferred
```

### 3.5 Emotional pull signal

```yaml
emotional_pull_signal:
  raw_or_paraphrased_phrase:
  emotion_or_identity_trigger:
  related_account: 精神账户/情绪账户/社交账户/身份账户/礼品账户/预算账户
  confidence: cited/paraphrased/inferred
```

### 3.6 Objection / confusion signal

```yaml
objection_signal:
  raw_or_paraphrased_phrase:
  objection_type: unclear/religious_concern/too_generic/too_commercial/too_abstract/old_category_pull/privacy_risk
  implication_for_user_test:
  confidence: cited/paraphrased/inferred
```

### 3.7 Repeatable phrase

```yaml
repeatable_phrase:
  phrase:
  who_said_it:
  why_it_is_repeatable:
  candidate_use: category_name/secondary_explanation/campaign_line/sales_phrase
  confidence: cited/paraphrased/inferred
```

---

## 4. Case-Specific Extraction Guide

## 4.1 CASE-01 · 水月老师随身寺庙

Target extraction:

```text
Does the language support “随身寺庙” as primary category, or “随身精神资产” as business explanation?
```

Extract:

```text
1. Words related to spiritual peace, gift, blessing, origin, time, temple, old wood, craft, reverence.
2. Any concern that “寺庙” is too religious.
3. Any phrase showing high-net-worth budget logic.
4. Any evidence that old categories like 文玩 / 木作 / 手串 / 艺术收藏 are insufficient.
```

Potential signals to code:

```yaml
old_category_candidates: [文玩, 木作, 手串, 艺术收藏, 文创]
new_category_candidates: [随身寺庙, 随身精神资产, 东方美学精神资产]
mental_accounts: [精神账户, 礼品账户, 身份账户, 预算账户]
objection_watch: [宗教化, 太玄, 太商业化]
```

---

## 4.2 CASE-05 · 达哥张姐低奢皮草

Target extraction:

```text
Does the language support “养成系社交货币”, “养成系稀缺美学”, or “双奢结合”?
```

Extract:

```text
1. Words related to sisterhood, private-domain trust, repeat purchase, Zhangjie's personality, design growth, scarcity, fur + bag combination.
2. Evidence that users buy relationship / identity / emotional companionship, not just product.
3. Evidence that old categories like 淘宝电商 / 皮草 / 直播带货 are insufficient.
4. Budget or repeat-purchase signals.
```

Potential signals to code:

```yaml
old_category_candidates: [皮草电商, 淘宝服饰, 直播带货, 标品服饰]
new_category_candidates: [养成系社交货币, 养成系稀缺美学, 双奢结合, 姐姐粉情绪资产]
mental_accounts: [情绪账户, 身份账户, 社交账户, 预算账户]
objection_watch: [不够高端, 太互联网, 太抽象, 产品差异不清楚]
```

---

## 4.3 CASE-08 · 高净值留学生游戏化婚礼

Target extraction:

```text
Does the language support “游戏化社交婚礼”, “归国首秀导演”, or “人生主权宣言”?
```

Extract:

```text
1. Words related to wedding, party, game, identity, return-home, social circle, family face, self-expression, successor.
2. Evidence that the buyer wants more than wedding decoration.
3. Evidence of referral / guest group / private-domain spread.
4. Any objection that “人生主权宣言” is too abstract.
```

Potential signals to code:

```yaml
old_category_candidates: [婚庆策划, 婚礼布置, 高端婚礼, 留学生婚礼服务]
new_category_candidates: [游戏化社交婚礼, 归国首秀导演, 人生主权宣言, 社交首秀]
mental_accounts: [社交账户, 身份账户, 礼品账户, 预算账户]
objection_watch: [太高概念, 不够婚礼, 太像活动策划]
```

---

## 5. Extraction Workflow

### Step 1 · Source discovery

Search private `llm-wiki` for:

```text
case name
founder / learner name
old category keywords
new category keywords
逐字稿
访谈
会议
沟通
```

### Step 2 · Source tiering

Classify each source as T0 / T1 / T2 / T3.

### Step 3 · Signal extraction

Extract signals into the object templates in Section 3.

### Step 4 · Anonymization

Remove or generalize:

```text
personal names
specific private finances
private client identities
sensitive family details
private operating details not needed for B2 validation
```

### Step 5 · Evidence coding

Code each signal as:

```text
old_category_signal
expensive_problem_signal
new_category_signal
budget_pull_signal
emotional_pull_signal
objection_signal
repeatable_phrase
```

### Step 6 · Writeback

Write only anonymized evidence to public repo.

Recommended public target:

```text
skills/yuanli-category-two-sentence/TRANSCRIPT-EVIDENCE-EXTRACTION-RESULTS-v1.md
```

B2 targets after Ming approval:

```text
assets/B2-品类独创/user-language.md
assets/B2-品类独创/workshop-scorecard.md
assets/B2-品类独创/validation-records.md
brain/SKILL-CANDIDATES.md
brain/WRITEBACK-LOG.md
```

---

## 6. Extraction Result Template

```yaml
extraction_id:
date:
case_id:
case_name_anonymized:
source_path:
source_tier:
privacy_status:

signals:
  old_category_signal:
    phrase:
    old_category:
    confidence:

  expensive_problem_signal:
    phrase:
    expensive_problem:
    mental_account:
    confidence:

  new_category_signal:
    phrase:
    candidate_category:
    old_category_escape:
    confidence:

  budget_pull_signal:
    phrase:
    why_user_might_pay_more:
    confidence:

  emotional_pull_signal:
    phrase:
    emotion_or_identity_trigger:
    related_account:
    confidence:

  objection_signal:
    phrase:
    objection_type:
    implication_for_test:
    confidence:

  repeatable_phrase:
    phrase:
    candidate_use:
    confidence:

recommended_user_language_test_update:
recommended_writeback:
human_gate:
```

---

## 7. Quality Bar

A signal is strong only if:

```text
1. It is grounded in a source path.
2. It maps to a concrete old category, expensive problem, new category, or budget reason.
3. It can change a candidate name, test question, or scorecard.
4. It is anonymized enough for public use.
5. It does not overclaim validation.
```

Weak signals:

```text
1. Generic praise.
2. Beautiful but non-testable phrasing.
3. Ming-only strategic inference without user language support.
4. Summary claims without source tier or context.
```

---

## 8. Decision Boundary

This protocol can produce:

```text
better test questions
better candidate names
better objection list
better B2 user-language evidence
better C2 artifact capture
```

It cannot produce by itself:

```text
user-tested status
active skill approval
canonical approval
B2 Validation 3/5
CONSTITUTION.md update
```

---

## 9. Next C4 Task

```text
Run transcript extraction on the three selected cases and create TRANSCRIPT-EVIDENCE-EXTRACTION-RESULTS-v1.md.
```

Recommended first pass:

```text
CASE-01 水月老师随身寺庙
CASE-05 达哥张姐低奢皮草
CASE-08 高净值留学生游戏化婚礼
```
