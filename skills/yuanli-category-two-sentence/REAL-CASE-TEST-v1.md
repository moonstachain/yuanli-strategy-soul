# 两句话品类独创 Skill · Real Case Test v1

> Skill ID: `yuanli-category-two-sentence`  
> Date: 2026-06-30  
> Selected by: Ming  
> Source: private `moonstachain/llm-wiki` case pool  
> Status: real-case transformation draft; Ming review pending; controlled user test pending

---

## 0. Purpose

```text
Use 3 Ming-selected real founder/client/student cases to test whether 两句话品类独创 Skill can produce high-quality category-creation statements across different business archetypes.
```

Selected cases:

```text
CASE-01 水月老师随身寺庙
CASE-05 达哥张姐低奢皮草
CASE-08 高净值留学生游戏化婚礼
```

Boundary:

```text
This file uses anonymized summaries only.
It does not copy raw private llm-wiki source text.
It does not mark the skill as reviewed / active / canonical.
It does not upgrade B2 Validation 3/5.
It is not a controlled naming test with target users.
```

---

## 1. Test Method

For each selected case, produce:

```text
1. Structured input
2. Old category trap
3. Expensive problem
4. Unique mechanism
5. Two-sentence category expression v1
6. Why it works
7. Weakness / unknown gap
8. Next user test
9. Writeback suggestion
```

Scoring dimensions:

```text
Target User Clarity
Expensive Problem
Old Category Escape
New Category Claim
Unique Mechanism
Evidence Link
Repeatability
Budget Pull
Yuanli Taste
Testability
```

---

# 2. CASE-01 · 水月老师随身寺庙

## 2.1 Structured Input

```yaml
case_id: CASE-01
case_name: 水月老师随身寺庙
old_category: 文创 / 木作 / 手串 / 艺术收藏 / 文玩
target_user: 顶级高净值人群 / 海外华人高净值人群 / 精神供养与顶级礼品需求者
expensive_problem: 有精神供养预算和顶级礼品预算，但买不到真正有来历、有精神出处、有敬意密度的东西
unique_mechanism: 寺院旧木 + 百年时间加持 + 非遗匠人 + 宗教美学隐知识 + 展览定价 + 公益赋能
proof_signal: 爱马仕级客户一眼相中并愿意退货购买；嘉德拍卖行无法分类；独占稀缺材料和匠人产能
new_category_candidate: 随身寺庙 / 随身精神资产
```

## 2.2 Old Category Trap

```text
如果被理解为文创、木作、手串或艺术收藏，它就会进入材质、工艺、价格和审美的红海比较。
```

## 2.3 Two-Sentence Category Expression v1

```text
旧物造帮助顶级高净值人群，把东方美学收藏从好看的文玩，升级为可安顿内心、可证明来历、可送出敬意的随身寺庙。
它不同于普通木作或手串，因为它用寺院旧木、百年时间加持、非遗匠人和宗教美学隐知识，把一件器物变成有精神出处的随身精神资产。
```

## 2.4 Why It Works

```text
1. 清楚逃离“文玩/木作/手串”旧品类。
2. 明确贵问题：高净值人群有精神供养与顶级礼品预算，但缺少真正有精神出处的器物。
3. 新品类“随身寺庙 / 随身精神资产”高度原力化，有审美与精神张力。
4. 证据链强：无法分类、自带预算、稀缺材料、非遗匠人、客户一眼相中。
```

## 2.5 AI Score

```yaml
target_user_clarity: 4
expensive_problem: 5
old_category_escape: 5
new_category_claim: 5
unique_mechanism: 5
evidence_link: 5
repeatability: 4
budget_pull: 5
yuanli_taste: 5
testability: 4
average: 4.7 / 5
```

## 2.6 Weakness / Unknown Gap

```text
“随身寺庙”非常有记忆点，但需要测试目标用户是否会觉得过于宗教化，或是否更喜欢“随身精神资产”这种更商业化表达。
```

## 2.7 Next User Test

```text
向 5 位高净值女性 / 海外华人 / 东方美学收藏者测试两种命名：
A. 随身寺庙
B. 随身精神资产

评分：理解度、向往感、价格承受度、送礼场景、复述率。
```

## 2.8 Writeback Suggestion

```yaml
writeback_targets:
  - skills/yuanli-category-two-sentence/REAL-CASE-TEST-v1.md
  - assets/B2-品类独创/user-language.md after user test
  - assets/B2-品类独创/workshop-scorecard.md after user test
  - brain/SKILL-CANDIDATES.md after Ming review
```

---

# 3. CASE-05 · 达哥张姐低奢皮草

## 3.1 Structured Input

```yaml
case_id: CASE-05
case_name: 达哥张姐低奢皮草
old_category: 普通皮草 / 普通皮包 / 淘宝服饰电商 / 直播带货
target_user: 全球高净值华人女性 / 姐姐粉 / 价值敏感但价格不敏感用户
expensive_problem: 不是买包保暖，而是小圈子的社交货币、独特审美、养成系情感陪伴
unique_mechanism: 张姐真实人格 IP + 稀有皮草与稀有皮包双奢结合 + 达哥供应链战略护航 + 极低投流私域复购
proof_signal: 投流成本从流水 10% 降至 0.5% 以内；高溢价高复购；张姐人格/IP 是核心壁垒
new_category_candidate: 高净值姐姐粉养成系稀缺美学 / 双奢结合
```

## 3.2 Old Category Trap

```text
如果被理解为普通皮草、普通皮包或淘宝服饰电商，它就会被拉进价格战、流量战和材质比较。
```

## 3.3 Two-Sentence Category Expression v1

```text
张姐品牌帮助高净值华人姐姐，把买皮草和包从淘宝比价，升级为参与一个真实设计师成长、拥有双重稀缺美学的养成系社交货币。
它不同于普通皮草电商，因为它不是卖标品，而是用张姐的天真审美、稀有材质组合和私域情感关系，把一件产品变成小圈层里拿得出手的独特身份表达。
```

## 3.4 Why It Works

```text
1. 从“货”转成“人 + 关系 + 稀缺美学”。
2. 清楚逃离淘宝电商、直播带货、普通皮草旧品类。
3. “养成系社交货币”能解释为什么用户不是买便宜，而是买陪伴、成长、独特审美和小圈子面子。
4. 达哥与张姐的人格互补成为壁垒：审美 IP 在前，供应链战略在后。
```

## 3.5 AI Score

```yaml
target_user_clarity: 5
expensive_problem: 4
old_category_escape: 5
new_category_claim: 5
unique_mechanism: 5
evidence_link: 5
repeatability: 4
budget_pull: 5
yuanli_taste: 5
testability: 5
average: 4.8 / 5
```

## 3.6 Weakness / Unknown Gap

```text
“养成系社交货币”很有解释力，但可能不够高端。需要测试目标用户更喜欢“养成系稀缺美学”“姐姐粉情绪资产”还是“双奢结合”。
```

## 3.7 Next User Test

```text
向 5 位高净值女性 / 私域高复购用户 / 女性消费创业者测试三种命名：
A. 养成系社交货币
B. 养成系稀缺美学
C. 双奢结合

评分：高级感、复述率、购买理由清晰度、是否愿意推荐给姐妹。
```

## 3.8 Writeback Suggestion

```yaml
writeback_targets:
  - skills/yuanli-category-two-sentence/REAL-CASE-TEST-v1.md
  - assets/B2-品类独创/user-language.md after user test
  - assets/B2-品类独创/workshop-scorecard.md after user test
  - brain/SKILL-CANDIDATES.md after Ming review
```

---

# 4. CASE-08 · 高净值留学生游戏化婚礼

## 4.1 Structured Input

```yaml
case_id: CASE-08
case_name: 高净值留学生游戏化婚礼
old_category: 婚庆策划 / 婚礼布置 / 高端婚礼 / 留学生婚礼服务
target_user: 美英归国高净值留学生 / 接班前年轻人 / 高净值家庭二代
expensive_problem: 不是办一场婚礼，而是完成归国后的身份亮相、圈层社交、人生主权宣言和社交货币建立
unique_mechanism: 游戏机制 + 荣格性格洞察 + 非标高定婚礼 + 宾客群渗透 + 私域裂变 + SOP 标准化非标交付
proof_signal: 游戏规则进入精准高净值圈层；婚礼成为社交 Party；宾客群带来下一批高净值用户
new_category_candidate: 高净值留学生游戏化社交婚礼 / 归国首秀导演
```

## 4.2 Old Category Trap

```text
如果被理解为婚庆策划或婚礼布置，它就会被拉进场地、花艺、摄影、预算和视觉效果的传统比较。
```

## 4.3 Two-Sentence Category Expression v1

```text
我们帮助高净值归国留学生，把传统婚礼变成一场证明审美、身份与圈层主权的游戏化社交首秀。
它不同于婚庆策划，因为它不是布置一场仪式，而是用游戏机制、人格洞察和圈层传播，把婚礼变成年轻接班人的人生主权宣言。
```

## 4.4 Why It Works

```text
1. 新品类极清楚：不是婚礼服务，而是归国首秀 / 社交资产 / 人生主权宣言。
2. 目标用户明确：高净值归国留学生和接班前年轻人。
3. 贵问题强：身份亮相、圈层社交、审美证明、家庭面子与自我主权。
4. 机制独特：游戏机制与人格洞察让婚礼从非标活动变成可设计、可传播、可复制的社交系统。
```

## 4.5 AI Score

```yaml
target_user_clarity: 5
expensive_problem: 5
old_category_escape: 5
new_category_claim: 5
unique_mechanism: 5
evidence_link: 5
repeatability: 5
budget_pull: 5
yuanli_taste: 5
testability: 5
average: 5.0 / 5
```

## 4.6 Weakness / Unknown Gap

```text
“人生主权宣言”非常强，但可能比目标用户日常语言更高概念。需要测试用户更喜欢“归国首秀”“游戏化社交婚礼”还是“人生主权宣言”。
```

## 4.7 Next User Test

```text
向 5 位留学生 / 海归高净值年轻人 / 婚礼策划潜在客户测试三种命名：
A. 高净值留学生游戏化社交婚礼
B. 归国首秀导演
C. 人生主权宣言

评分：理解度、兴奋度、是否愿意转介绍、是否能复述、是否愿意为此支付溢价。
```

## 4.8 Writeback Suggestion

```yaml
writeback_targets:
  - skills/yuanli-category-two-sentence/REAL-CASE-TEST-v1.md
  - assets/B2-品类独创/user-language.md after user test
  - assets/B2-品类独创/workshop-scorecard.md after user test
  - brain/SKILL-CANDIDATES.md after Ming review
```

---

## 5. Cross-Case Findings

### 5.1 What the three cases prove

```text
The selected three cases are not merely different industries. They represent three different high-value account systems:

CASE-01: 精神账户 / 顶级礼品账户 / 东方美学资产
CASE-05: 情绪账户 / 姐妹关系账户 / 小圈层身份账户
CASE-08: 社交账户 / 身份亮相账户 / 人生主权账户
```

### 5.2 B2 Skill signal

```text
两句话品类独创 Skill works best when the case has:

1. A painful old comparison trap.
2. A high-value psychological or economic account.
3. A unique mechanism that makes the new category defensible.
4. A proof signal that shows users already behave differently.
```

### 5.3 Shared weakness

```text
The strongest Yuanli language is often more powerful than user language.
Next validation must test which words users naturally repeat.
```

---

## 6. Overall AI Test Result

```yaml
case_count: 3
average_score:
  CASE-01: 4.7 / 5
  CASE-05: 4.8 / 5
  CASE-08: 5.0 / 5
overall_average: 4.83 / 5
status: transformation_pass
human_review: pending
controlled_user_test: pending
skill_upgrade: no
b2_validation_upgrade: no
```

Interpretation:

```text
The skill can produce strong category-creation drafts across spiritual-aesthetic, emotional-commerce, and social-ritual cases. It is ready for Ming human review and then small-scale user language testing.
```

---

## 7. Next C4 Task

```text
Ming reviews the three outputs and selects which names should enter controlled user language test.
```

Recommended naming tests:

```text
CASE-01: 随身寺庙 vs 随身精神资产
CASE-05: 养成系社交货币 vs 养成系稀缺美学 vs 双奢结合
CASE-08: 游戏化社交婚礼 vs 归国首秀导演 vs 人生主权宣言
```

Expected next file:

```text
skills/yuanli-category-two-sentence/USER-LANGUAGE-TEST-v1.md
```
