# B2 · 品类独创 · External Evidence Coding · 2026-06

PMO Issue: #132
Parent: #130
Module: B2 品类独创
Date: 2026-06-30
Source Repo: `moonstachain/llm-wiki`

## 0. Executive Judgment

```text
B2 has enough real June 2026 learner / client fieldwork evidence to move from "pre-fieldwork ready" to "external validation started".
```

Boundary:

```text
This does not mean B2 is scaled-product ready.
It means real external user language has been coded and can now drive B2 validation iteration.
```

Recommended maturity decision:

```text
B2 Validation: 1/5 -> 2/5
Stage: External Validation Started
Evidence Strength: medium+
```

Reason:

```text
The source set contains at least 5 external user-language records, 5 category/naming signals, 5 repeatable category sentence candidates, and multiple follow-up / purchase-adjacent signals.
```

## 1. Source Set

| ID | Source | Date | Use |
|---|---|---:|---|
| S1 | `llm-wiki/sources/transcripts/20260610-D1AM-M2_学员自我介绍与三天期望-逐字稿.md` | 2026-06-10 | Individual user needs and category language |
| S2 | `llm-wiki/sources/transcripts/20260610-D1AM-M3_共性需求归纳·三天核心目标-智能纪要.md` | 2026-06-10 | Group-level demand synthesis |
| S3 | `llm-wiki/sources/transcripts/20260609-M4_达哥分享AI业务整合+讲师·知识主权-逐字稿.md` | 2026-06-09 | Business integration, OS, category reframing |
| S4 | `llm-wiki/sources/transcripts/20260618-D1AM-M11_卷卷用AI把想法变成接满的订单-逐字稿.md` | 2026-06-18 | AI-to-order productization and paid-result signal |
| S5 | `llm-wiki/sources/transcripts/20260624-LXSH-M2_一句话口述,AI做出深度市场调研-智能纪要.md` | 2026-06-24 | AI market research and positioning signal |
| S6 | `llm-wiki/sources/transcripts/20260601-安全价值证明项目落地讨论-逐字稿.md` | 2026-06-01 | Category naming and client project validation |
| S7 | `llm-wiki/sources/transcripts/20260612-原力OS与关键战役规划-逐字稿.md` | 2026-06-12 | OS product shape, teaching and delivery needs |

## 2. User-language Records

### U1 · Human-workflow automation buyer

```yaml
user_type: IT / project operator
context: wants to integrate manual work and technology
original_problem_words: 人工为主 / 技术融合 / 一部分工作自动化 / 已知模块 / 清晰步骤但仍需自己做
old_category_words: AI 工具课 / 自动化工具 / 项目工具
new_category_need: 把已知有效模块变成可运行的人机协同系统
repeatable_sentence: 把爆款技能变成可复用的人机协同系统
source: S1
```

B2 signal:

```text
Strong problem relevance. User is not asking for tool tips; they want a systemized capability container.
```

### U2 · Precision-modeling buyer

```yaml
user_type: government / B2B project builder
context: demo worked initially but became hard to tune when client needs expanded
original_problem_words: demo 拿回去后越来越难调 / 地基没打好 / 每调一个部分都累 / 想找到调好模型的方法或路径 / All in one / 人类友好 / 不要让我给工具打工
old_category_words: demo / 平台 / AI 工具
new_category_need: 精准建模路径
repeatable_sentence: 不是做更多 demo，而是把业务打成一套可持续调优的精准模型
source: S1
```

B2 signal:

```text
Strong category gap. Existing category "demo" creates wrong expectation; user wants a model-building category.
```

### U3 · CEO dashboard buyer

```yaml
user_type: ecommerce CEO / IP operator
context: needs to guide 2-3 years of work from messy operational data
original_problem_words: 经营表盘 / 指导未来 2 到 3 年工作 / 业务决策者秒懂的关键信号 / 不喜欢看数据只喜欢看结果 / 半自动化
old_category_words: 数据分析 / 报表 / BI
new_category_need: CEO strategic signal dashboard
repeatable_sentence: 把复杂经营数据变成 CEO 秒懂的战略信号
source: S1 / S3
```

B2 signal:

```text
Strong willingness driver. User has business pressure and clear operational value.
```

### U4 · Personal-experience-to-IP buyer

```yaml
user_type: expert operator / consultant
context: wants to restructure past projects, resources and experience through AI
original_problem_words: 回溯过往项目资源经验 / 把过往的自己全部找到理出来 / 用 AI 重构自己 / 可持续 IP / 爆点技能变成组织技能 / 无限放大而不是天天加班
old_category_words: 个人 IP / 咨询 / 知识库
new_category_need: personal expertise as scalable operating capability
repeatable_sentence: 把个人爆点技能升级成可持续放大的组织技能
source: S1
```

B2 signal:

```text
Strong fit with 原力资产 -> 原力创业 -> 原力OS path.
```

### U5 · Industry AI/IP framework buyer

```yaml
user_type: emergency / public safety B2B expert
context: complex industry knowledge, rules, data and client context need to become reusable framework
original_problem_words: 行业内容和规则复杂 / 多年积累但不够准确 / 客户数据没有被很好架构 / 想要 AIP 框架 / 跑一两个路径并知道其他路径怎么跑
old_category_words: 知识库 / 平台 / 咨询报告
new_category_need: industry AI/IP framework
repeatable_sentence: 把复杂行业知识沉淀成可复用的行业 AI/IP 框架
source: S1 / S6
```

B2 signal:

```text
Strong enterprise/big-B relevance. The user has customer data and complex domain rules, making the category valuable.
```

### U6 · AI-to-order productization buyer

```yaml
user_type: wedding / event studio founder
context: AI helps present user-specific plans, generate landing page, manage project workflow and fill order pipeline
original_problem_words: 把产品亮点自动提出来 / 现场根据用户需求做方案 / 客户把想要的东西都呈现出来了 / 订单接满 / 工作台管理客户环节
old_category_words: 婚礼策划 / 设计服务 / AI 方案生成
new_category_need: AI-native high-ticket service workbench
repeatable_sentence: 把高客单服务变成现场可视化、可成交、可管理的 AI 工作台
source: S4
```

B2 signal:

```text
Strong purchase / result signal. The source includes order and payment-adjacent evidence.
```

### U7 · One-sentence AI market research buyer

```yaml
user_type: market-research / opportunity explorer
context: one-sentence prompt produces deep market report, questions, benchmarking and differentiation scan
original_problem_words: 一句话口述 / AI 做深度市场调研 / 主动提问收敛信息 / 自主找对标 / 分析预算空白 / 找差异化
old_category_words: 市场调研 / 竞品分析 / 咨询报告
new_category_need: AI-native opportunity validation report
repeatable_sentence: 把一句话机会假设变成可决策的 AI 原生市场验证报告
source: S5
```

B2 signal:

```text
Useful B1-B2 bridge: category creation depends on market sizing, budget account and differentiation evidence.
```

## 3. Category / Naming Signals

These are not all controlled naming-test responses. They are real field naming/category signals extracted from external transcripts.

| Signal | Source | Type | B2 Value |
|---|---|---|---|
| 安全价值证明 | S6 | explicit category name | Strong: user/client uses and remembers a new category frame |
| CEO 战略仪表盘 / 经营表盘 | S1 / S3 | category object | Strong: user can name the desired output |
| 精准建模路径 | S1 | category need | Strong: replaces vague demo/tool category |
| AI 原生战略诊断报告 | S5 / S7 | category output | Medium: needs further naming test |
| 行业 AI/IP 框架 | S1 / S6 | category frame | Strong for expert/B2B users |
| 东方含蓄美学的一件解决方案 | S3 | category reframe | Strong: moves from old product category to meaning/solution category |
| 高净值女性的品质入口 | S3 | category reframe | Strong: moves from product-selling to user-mind account |

## 4. Repeatable Category Sentences

| # | Sentence | Evidence Fit | Next Test |
|---:|---|---|---|
| 1 | 把爆款技能变成可复用的人机协同系统。 | Strong for U1 | Test with IT/project users |
| 2 | 不是做更多 demo，而是把业务打成一套可持续调优的精准模型。 | Strong for U2 | Test clarity and desire |
| 3 | 把复杂经营数据变成 CEO 秒懂的战略信号。 | Strong for U3 | Test with ecommerce/CEO users |
| 4 | 把个人爆点技能升级成可持续放大的组织技能。 | Strong for U4 | Test with expert founders |
| 5 | 把复杂行业知识沉淀成可复用的行业 AI/IP 框架。 | Strong for U5 | Test with B2B experts |
| 6 | 把高客单服务变成现场可视化、可成交、可管理的 AI 工作台。 | Strong for U6 | Test in high-ticket service scenarios |
| 7 | 把一句话机会假设变成可决策的 AI 原生市场验证报告。 | Medium+ for U7 | Test with B1/B2 learners |

## 5. Purchase / Follow-up Signals

| Signal | Source | Strength | Notes |
|---|---|---|---|
| Customer paid half deposit after AI-supported presentation | S4 | strong | Direct paid-result signal, though not specifically B2 naming test |
| 2026 orders already filled / taking next-year orders | S4 | strong | Strong productization result signal |
| User says safety value proof should become benchmark case | S6 | medium+ | B2 category has client-project seriousness |
| CEO wants dashboard to guide next 2-3 years | S1 | medium+ | Strong business desire, not direct payment evidence |
| Users expect to take away business map, brain, CEO dashboard and scenarios | S2 / S7 | medium | Group-level program output demand |

## 6. #132 Acceptance Check

| Acceptance | Target | Actual | Result |
|---|---:|---:|---|
| External user-language records | >=5 | 7 | Pass |
| Naming / category reaction samples | >=5 | 7 | Pass with caveat: uncontrolled field signals |
| Repeatable category sentences | >=3 | 7 | Pass |
| Purchase / follow-up signals | >=1 | 5 | Pass |
| Scorecard update | required | yes | Pass |
| Validation records update | required | yes | Pass |
| Evidence update | required | yes | Pass |

## 7. Maturity Decision

Recommended:

```text
B2 Validation: 1/5 -> 2/5
Stage: External Validation Started
Evidence Strength: medium+
```

Do not upgrade beyond 2/5 because:

```text
- This was evidence coding from existing fieldwork, not a controlled workshop.
- Candidate names still need direct naming-test response.
- The strongest paid signal is from a downstream AI workbench/productization case, not only B2 naming.
- More segmented validation is needed before productization or scale.
```

## 8. Next C4 Task

```text
Run a controlled B2 naming and repeatability test with 5-10 target users, using the 7 category sentences above as test candidates.
```

## 9. Writeback Targets Completed

- `assets/B2-品类独创/external-evidence-coding-2026-06.md`
- `assets/B2-品类独创/user-language.md`
- `assets/B2-品类独创/workshop-scorecard.md`
- `assets/B2-品类独创/validation-records.md`
- `assets/B2-品类独创/evidence.md`
- `brain/WRITEBACK-LOG.md`

Pending:

- `docs/TRILOGY-ASSET-MATURITY-SCORECARD-v1.md`
- `docs/pmo-dashboard-data.js`
