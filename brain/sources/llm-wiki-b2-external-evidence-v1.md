# llm-wiki · B2 External Evidence Source v1

Date: 2026-06-30
Source Repo: moonstachain/llm-wiki
Source Type: private external fieldwork transcripts / meeting notes
Target Module: B2 品类独创
Related PMO Issue: #130

## 0. Executive Judgment

```text
llm-wiki can be used as a valid external information source for B2 evidence.
```

But it should be treated as:

```text
external evidence source discovered / extraction pending
```

not yet:

```text
B2 validation completed
```

Reason:

```text
The transcripts contain real learner/client problem language, business contexts, category confusion, desired outcomes, and purchase-adjacent signals. However, #130 pass criteria require structured extraction: at least 5 naming samples, 5 user-language notes, 3 repeatable category sentences, validation-records update, and scorecard update.
```

## 1. Source Candidates Found

| Source | Date | Evidence Use |
|---|---|---|
| `moonstachain/llm-wiki/sources/transcripts/20260610-D1AM-M2_学员自我介绍与三天期望-逐字稿.md` | 2026-06-10 | Strongest immediate source for B2 user language and category demand extraction |
| `moonstachain/llm-wiki/sources/transcripts/20260610-D1AM-M3_共性需求归纳·三天核心目标-智能纪要.md` | 2026-06-10 | Candidate source for group-level needs aggregation |
| `moonstachain/llm-wiki/sources/transcripts/20260609-M4_达哥分享AI业务整合+讲师·知识主权-逐字稿.md` | 2026-06-09 | Candidate source for business integration / knowledge sovereignty language |
| `moonstachain/llm-wiki/sources/transcripts/20260618-D1AM-M11_卷卷用AI把想法变成接满的订单-逐字稿.md` | 2026-06-18 | Candidate source for AI-to-order productization signal |
| `moonstachain/llm-wiki/sources/transcripts/20260624-LXSH-M2_一句话口述,AI做出深度市场调研-智能纪要.md` | 2026-06-24 | Candidate source for AI market research product language |
| `moonstachain/llm-wiki/sources/transcripts/20260601-安全价值证明项目落地讨论-逐字稿.md` | 2026-06-01 | Candidate source for client-project weekly review input |
| `moonstachain/llm-wiki/sources/transcripts/20260612-原力OS与关键战役规划-逐字稿.md` | 2026-06-12 | Candidate source for C2/C3/C4 real task validation |

## 2. Preliminary B2 Evidence Patterns

### Pattern A · 从人工项目到人机协同系统

Source pointer:

```text
llm-wiki/sources/transcripts/20260610-D1AM-M2_学员自我介绍与三天期望-逐字稿.md
```

Observed language:

```text
人工为主 / 技术融合 / 一部分工作自动化 / 已知模块 / 爆款技能 + 自动化流程
```

B2 interpretation:

```text
用户不是在买“AI工具课”，而是在买“把已知有效工作模块变成可运行的人机协同系统”。
```

Potential category sentence:

```text
把爆款技能变成可复用的人机协同系统。
```

### Pattern B · 从零散 demo 到精准建模路径

Observed language:

```text
demo 拿回去后越来越难调 / 地基没打好 / 每调一个部分都很累 / 想找到调好模型的方法或路径 / All in one / 人类友好 / 不要让我给工具打工
```

B2 interpretation:

```text
用户真正要的不是更多 demo，而是一个能把复杂业务打成稳定底层模型的精准建模路径。
```

Potential category sentence:

```text
不是做更多 demo，而是把业务打成一套可持续调优的精准模型。
```

### Pattern C · CEO 需要战略仪表盘和秒懂信号

Observed language:

```text
经营表盘 / 指导未来 2 到 3 年工作 / 业务决策者秒懂的关键信号 / 不喜欢看数据，只喜欢看结果 / 半自动化
```

B2 interpretation:

```text
用户不是要数据分析，而是要把复杂经营数据转译成 CEO 可行动的战略信号。
```

Potential category sentence:

```text
把复杂经营数据变成 CEO 秒懂的战略信号。
```

### Pattern D · 过往经验重构成可持续 IP / 组织技能

Observed language:

```text
回溯过往项目、资源、经验 / 把过往的自己全部找到理出来 / 用 AI 重构自己 / 可持续的 IP / 最强爆点技能变成独特组织技能 / 无限放大而不是天天加班
```

B2 interpretation:

```text
用户不是要单点能力提升，而是要把个人经验、资源和项目方法重构为可持续 IP 与组织技能。
```

Potential category sentence:

```text
把个人爆点技能升级成可持续放大的组织技能。
```

### Pattern E · 行业复杂知识需要 AIP 框架

Observed language:

```text
应急和公共安全 / 行业内容和规则复杂 / 多年积累很多但不够准确 / 世界上更多好的东西应该被集成起来服务世界 / 想要一个 AIP 框架 / 跑一两个路径，并知道其他路径怎么跑
```

B2 interpretation:

```text
用户不是要普通知识库，而是要把复杂行业知识、规则、客户数据和路径沉淀为可复用的行业 AI/IP 框架。
```

Potential category sentence:

```text
把复杂行业知识沉淀成可复用的行业 AI/IP 框架。
```

## 3. B2 Scorecard Mapping

| #130 Criterion | Current Status From llm-wiki | Judgment |
|---|---|---|
| at least 5 naming samples | Not yet extracted as naming samples | Pending |
| at least 5 user language notes | Strong candidate evidence exists | Source discovered |
| at least 3 repeatable category sentences | 5 candidates drafted above | Needs user/client repeatability check |
| validation-records.md updated | This file should be referenced there | Pending writeback |
| scorecard updated if validation improves | Do not improve yet | Human review needed |

## 4. PMO Decision

```text
#130 should not be treated as waiting for future fieldwork from zero.
It should be reframed as: extract and score existing June 2026 client / learner fieldwork from llm-wiki, then decide whether an additional live workshop is still needed.
```

## 5. Recommended Next C4 Task

```text
Create B2 External Evidence Coding Task:
1. Pull 5-10 source excerpts from llm-wiki June 2026 transcripts.
2. Fill user-language.md with structured user language records.
3. Produce at least 5 naming/category reaction samples if available.
4. Test 3 repeatable category sentences against the transcript language.
5. Update validation-records.md and workshop-scorecard.md.
6. Only then decide whether B2 moves from Validation 1/5 to 2/5.
```

## 6. Boundary

```text
Do not copy large raw transcript blocks into public or semi-public artifacts.
Use source pointers, distilled user language, anonymized patterns, and scorecard evidence.
```

## 7. Writeback Targets

- `assets/B2-品类独创/user-language.md`
- `assets/B2-品类独创/validation-records.md`
- `assets/B2-品类独创/evidence.md`
- `assets/B2-品类独创/workshop-scorecard.md`
- `brain/WRITEBACK-LOG.md`
- `docs/TRILOGY-ASSET-MATURITY-SCORECARD-v1.md`
- `docs/pmo-dashboard-data.js`
