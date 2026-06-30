# 两句话品类独创 Skill · Repeatability Pilot Candidates v1

> Skill ID: `yuanli-category-two-sentence`  
> Date: 2026-06-30  
> Source Repo: private `moonstachain/llm-wiki`  
> Related Decision: `USER-LANGUAGE-TEST-DECISION-v1.md`  
> Status: candidate pool created for B2 Skill Repeatability Pilot  
> Boundary: source-path and paraphrased strategic signals only; no raw private transcript copied

---

## 0. Purpose

```text
This file identifies candidate cases for the next B2 Skill Repeatability Pilot.
```

Pilot goal:

```text
Use ROLE-STACK-RECOMMENDATION-v1 method on 3 new real cases.
```

Each selected case should produce:

```text
1. 原始表达
2. 旧品类陷阱
3. 贵问题
4. 角色栈
5. 两句话品类表达
6. 用户测试问题
7. 回写证据
```

---

## 1. Selection Criteria

A strong repeatability pilot candidate should have:

```text
1. Old-category trap is obvious.
2. Expensive problem is clear.
3. Target user has budget or strategic urgency.
4. New category can be expressed as role stack, not just slogan.
5. Source material exists in llm-wiki.
6. The case is meaningfully different from the three already used cases.
```

Already used cases:

```text
CASE-01 水月老师随身寺庙
CASE-05 达哥张姐低奢皮草
CASE-08 高净值留学生游戏化婚礼
```

Therefore the next pilot should intentionally include different business types.

---

## 2. Recommended P0 Pilot Set

```yaml
recommended_cases:
  - P0-1 涛哥智能少年
  - P0-2 康康大型文体场馆无形资产开发
  - P0-3 苹果妈妈袁姐良久团购
```

Why this set:

```text
It tests whether the skill works beyond high-aesthetic / high-net-worth / wedding cases.

P0-1 tests education and high-net-worth family anxiety.
P0-2 tests B2B / government-linked / asset-operation strategic services.
P0-3 tests mass-market reverse-cycle / supply-chain / community distribution.
```

---

# 3. P0-1 · 涛哥智能少年

## 3.1 Source

```yaml
case_id: PILOT-01
case_name: 涛哥智能少年
source_path: sources/talent-startup/案例拆解涛哥文涛的智能少年项目.md
source_type: case breakdown
source_tier: T3+ / structured case analysis
```

## 3.2 Why Candidate

```text
This is a high-quality B2 repeatability candidate because the old category trap is extremely obvious: traditional tutoring / test-score improvement / AI education.
```

But the expensive problem is not score improvement.

It is:

```text
high-net-worth family class-downgrade anxiety in the AI cycle.
```

## 3.3 Preliminary B2 Mapping

```yaml
raw_expression_candidates:
  - 智能少年
  - 超级学霸
  - 原力少年
old_category_trap:
  - 学科辅导
  - AI教育课
  - 补习班
  - 编程课
expensive_problem:
  - 高净值家庭害怕孩子在 AI 时代阶层跌落
  - 老钱家庭需要下一代拿到科技周期入场券
  - 家长不只是买提分，而是买未来资产与身份安全
mental_accounts:
  - 避险账户
  - 投资账户
  - 家庭传承账户
  - 身份账户
role_stack_hypothesis:
  public_category: 智能少年
  premium_positioning: AI时代的家族周期穿越教育
  bridge_explanation: 让孩子用AI做出人生作品
  business_explanation: 不是补习班，而是下一代能力与家族资产的会师系统
  deep_narrative: 老钱孩子的新未来船票
```

## 3.4 Why Good for Pilot

```text
This case tests whether the skill can handle education without falling back into “AI教育” or “素质教育”.
```

Suggested output to create later:

```text
skills/yuanli-category-two-sentence/REPEATABILITY-PILOT-CASE-01-TAOGE-SMART-YOUTH-v1.md
```

---

# 4. P0-2 · 康康大型文体场馆无形资产开发

## 4.1 Source

```yaml
case_id: PILOT-02
case_name: 康康大型文体场馆无形资产开发
source_path: sources/get-biji/wealth/康康沟通-01-大型文体场馆运营与无形资产开发战略咨询.md
source_type: Get 笔记 / work meeting
source_tier: T1/T2
recording_duration: about 3 hours
```

## 4.2 Why Candidate

```text
This is the strongest B2B / strategic-service candidate found in this scan.
```

Old category trap:

```text
场馆运营咨询 / 体育产业咨询 / 资源对接 / 政企项目服务
```

Expensive problem:

```text
大型文体场馆一号位需要把低收益、重资产、重建设轻运营的场馆，变成可持续增值的无形资产系统。
```

## 4.3 Preliminary B2 Mapping

```yaml
raw_expression_candidates:
  - 大型文体场馆运营
  - 无形资产开发
  - 场馆赋能平台
  - 战略外脑
old_category_trap:
  - 咨询公司
  - 场馆运营服务商
  - 资源中介
  - 广告代理
expensive_problem:
  - 场馆无形资产收益占比低
  - 一号位需要创收、政绩、行业标杆和长期资产保值增值
  - 从一次性咨询费升级到长期运营分润
mental_accounts:
  - 政绩账户
  - 资产增值账户
  - 风险账户
  - 预算账户
role_stack_hypothesis:
  public_category: 文体场馆无形资产开发
  premium_positioning: 一号位资产运营工程
  bridge_explanation: 把场馆从租金生意变成权益、冠名、IP和长期分润系统
  business_explanation: 不是运营咨询，而是帮场馆一号位把沉睡资产变成可持续现金流
  deep_narrative: 让城市公共资产重新长出复利能力
```

## 4.4 Why Good for Pilot

```text
This case tests whether the skill works in B2B / government-linked / complex asset operation contexts, where user language must balance clarity, seriousness, and strategic value.
```

Suggested output to create later:

```text
skills/yuanli-category-two-sentence/REPEATABILITY-PILOT-CASE-02-KANGKANG-VENUE-ASSET-v1.md
```

---

# 5. P0-3 · 苹果妈妈袁姐良久团购

## 5.1 Source

```yaml
case_id: PILOT-03
case_name: 苹果妈妈袁姐良久团购
source_path: sources/talent-startup/案例拆解苹果妈妈袁姐的良久团购则代表了k型社会最底盘99大众的极致性价比霸主s级.md
source_type: case breakdown
source_tier: T3+ / structured case analysis
```

## 5.2 Why Candidate

```text
This is the best mass-market / reverse-cycle / supply-chain candidate.
```

It is strategically valuable because it sits at the opposite end of 水月老师.

```text
水月: 极高客单价 + 极低频 + 极度唯美
良久: 极低客单价 + 极高频 + 极致务实
```

## 5.3 Preliminary B2 Mapping

```yaml
raw_expression_candidates:
  - 良久团购
  - 极致性价比霸主
  - 逆周期印钞机
old_category_trap:
  - 社群团购
  - 白牌团购
  - 私域卖货
  - 低价电商
expensive_problem:
  - 下沉市场消费者想用更少钱买到确定性的好货
  - 代理商/实体老板需要逆周期副业和现金流门票
  - 消费降级时代需要风险兜底和确定性信任
mental_accounts:
  - 功能/成本账户
  - 情绪确定性账户
  - 搞钱门票账户
  - 现金流账户
role_stack_hypothesis:
  public_category: 下沉市场极致性价比生活刚需系统
  premium_positioning: 逆周期现金流网络
  bridge_explanation: 轻奢品质，十分之一价格，闭眼买不吃亏
  business_explanation: 不是低价团购，而是用供应链和信任网络重构生活刚需分发
  deep_narrative: K型社会底盘的确定性生意
```

## 5.4 Why Good for Pilot

```text
This case tests whether the skill can handle low-price / high-frequency / mass-market cases without forcing high-end vocabulary.
```

Suggested output to create later:

```text
skills/yuanli-category-two-sentence/REPEATABILITY-PILOT-CASE-03-LIANGJIU-GROUPBUY-v1.md
```

---

## 6. Backup Candidates

## 6.1 Matthew · 悉尼小地主 / 开维咨询

```yaml
source_path: entities/people/matthew-sydney-landlord.md
fit: high
reason: strong overseas property / high-net-worth risk-avoidance case; good for investment-account and avoidance-account testing
old_category_trap:
  - 海外房产中介
  - 建房咨询
  - 开发顾问
possible_public_category: 海外建房价值贡献模型
reason_not_top_3: source currently appears more entity-level; may need fuller case source before Pilot
```

## 6.2 花姐 · 政企健康体检与医疗服务

```yaml
source_path: sources/talent-startup/12个最具代表性的标杆学员案例.md
fit: medium_high
reason: strong risk-account / political-safety case
old_category_trap:
  - 体检供应商
  - 医疗服务商
possible_public_category: 体制内医疗安全供应商
reason_not_top_3: currently only found in overview source; needs dedicated transcript/case source
```

## 6.3 若非 · 机器人出海

```yaml
source_path: sources/talent-startup/12个最具代表性的标杆学员案例.md
fit: medium
reason: strong macro-trend / Belt-and-Road technology export case
old_category_trap:
  - 机器人贸易
  - 出海服务
possible_public_category: 一带一路机器人产业方案
reason_not_top_3: currently only found in overview source; needs stronger case material
```

---

## 7. Recommended Next C4 Task

Create:

```text
skills/yuanli-category-two-sentence/REPEATABILITY-PILOT-RUN-v1.md
```

Then process the three P0 cases:

```text
PILOT-01 涛哥智能少年
PILOT-02 康康大型文体场馆无形资产开发
PILOT-03 苹果妈妈袁姐良久团购
```

Each case should output:

```text
1. 原始表达
2. 旧品类陷阱
3. 贵问题
4. 角色栈
5. 两句话品类表达
6. 用户测试问题
7. 回写证据
```

---

## 8. Boundary

```text
This file only selects candidate materials.
It does not run the repeatability pilot.
It does not upgrade the skill state.
It does not upgrade B2 Validation.
It does not copy raw private transcript text.
```
