# llm-wiki · Source Map v1

Date: 2026-07-01
Related Issues: #212 / #213 / #214
Source Repo: `moonstachain/llm-wiki`
Target Repo: `moonstachain/yuanli-strategy-soul`
Type: C2 source-map / C3 routing map / C4 execution input

---

## 0. Purpose

Map `moonstachain/llm-wiki` private sources into Yuanli Strategy Brain governance so C2 can retrieve, C3 can judge gaps, C4 can create action chains, and PMO can review evidence without copying raw private materials.

---

## 1. Governance Boundary

```text
llm-wiki is a private Field Evidence Lake.
It is not canon.
It is not a public content source.
It is not allowed to dump raw transcripts into public artifacts.
```

Allowed use:

```text
source pointer -> anonymized pattern -> structured evidence -> module writeback -> evolution note -> human-gated candidate
```

---

## 2. Source Types

| Source Type | Example Path Pattern | Use |
|---|---|---|
| transcript | `sources/transcripts/*.md` | user language, cases, market signals, purchase signals |
| meeting minutes | `minutes/*/transcript.txt` | project context, decision evidence, C4 chain cases |
| architecture note | `sources/force-claw/*` | C2/C3/C4 architecture, PMO governance, Agent/Codex collaboration |
| greenbook draft | `_factory/yuanli-startup-greenbook-*/*` | B1-B4 concept candidates and teaching assets |
| talent-startup source | `sources/talent-startup/*` | A/B module cases and teaching assets |
| synthesis | `syntheses/*` | candidate concepts, cross-source patterns |

---

## 3. Confirmed Source Candidates from Existing Evidence Chain

| ID | Source Pointer | Source Type | Known Use | Current Status |
|---|---|---|---|---|
| S1 | `sources/transcripts/20260610-D1AM-M2_学员自我介绍与三天期望-逐字稿.md` | transcript | B2 user language / category demand | coded for B2 |
| S2 | `sources/transcripts/20260610-D1AM-M3_共性需求归纳·三天核心目标-智能纪要.md` | synthesis / meeting note | group-level needs aggregation | coded for B2 |
| S3 | `sources/transcripts/20260609-M4_达哥分享AI业务整合+讲师·知识主权-逐字稿.md` | transcript | business integration / knowledge sovereignty language | coded for B2 |
| S4 | `sources/transcripts/20260618-D1AM-M11_卷卷用AI把想法变成接满的订单-逐字稿.md` | transcript | AI-to-order productization, paid-result signal | coded for B2 / candidate for B3 |
| S5 | `sources/transcripts/20260624-LXSH-M2_一句话口述,AI做出深度市场调研-智能纪要.md` | meeting note | AI market research / opportunity validation | coded for B2 / candidate for B1 |
| S6 | `sources/transcripts/20260601-安全价值证明项目落地讨论-逐字稿.md` | transcript | client project / category validation / C2-C3-C4 task input | coded for B2 / candidate for A4-B3-C3 |
| S7 | `sources/transcripts/20260612-原力OS与关键战役规划-逐字稿.md` | transcript | C2/C3/C4 real task validation | candidate |
| S8 | `sources/force-claw/原力os-整体架构.md` | architecture note | OS architecture, Claude/Codex/Ray roles, GitHub/Feishu positioning | source indexed |
| S9 | `_factory/yuanli-startup-greenbook-v0.2/volume-3-pinlei.md` | greenbook draft | B2 category definition, naming criteria, budget test | extracted for B2 |
| S10 | `sources/transcripts/20251221132810-原力创业-day3-pm-转写智能优化版-1.md` | transcript | testing card logic, user task validation | extracted for B2 |

---

## 4. A1-C4 Routing Map

| Canon Node | Question | llm-wiki Source Use | First Target |
|---|---|---|---|
| A1 发现母体 | 我真正不可复制的源头是什么？ | learner self-introductions, repeated questions, high-energy/low-energy language | source candidates pending |
| A2 回到母体 | 哪些事保留，哪些事停止？ | boundary language, attention patterns, taste function signals | source candidates pending |
| A3 获得原力 | 母体如何变成可调用能力？ | AI externalization examples, workshop outputs, method samples | source candidates pending |
| A4 显化原力 | 这个原力是否被世界需要？ | approach/belief/payment/reuse/co-build signals | second validation chain candidate |
| B1 原力借势 | 这个时代为什么现在需要我？ | AI adoption, market shift, budget migration, opportunity scan | candidate via S5/S7 |
| B2 品类独创 | 市场如何认得我？ | user language, old category words, naming/category reactions | first validated route |
| B3 模式升维 | 如何持续赚钱、可复制？ | delivery workflow, deposit/order signals, high-ticket service workbench | second validation chain candidate |
| B4 壁垒锁定 | 如何守住、不被拿走？ | trust, repeat use, project seriousness, data/process lock-in | source candidates pending |
| C1 一纸文脉 | AI 如何真正懂我？ | Ray/Ming language, judgment boundary, style and forbidden patterns | source candidates pending |
| C2 一个大脑 | 系统应该记住什么？ | source/case/evidence/market_signal records | active |
| C3 一张地图 | 什么更重要、先做什么？ | capability gaps, bottlenecks, control points, PMO decisions | active via #213 |
| C4 一条链路 | 如何把判断变成行动？ | repeatable workflows, action chains, Codex/Agent task patterns | active via #214 |

---

## 5. Priority Extraction Routes

### Route 1 · B2 already started

```text
llm-wiki transcripts
-> B2 user-language coding
-> B2 evidence / validation-records / scorecard
-> C2 writeback
-> controlled naming test pending
```

Status:

```text
external_validation_started
controlled_test_pending
```

### Route 2 · Recommended next: B3 模式升维

Reason:

```text
B3 tests whether field evidence contains productization, delivery, order, deposit, repeatability and workflow signals.
```

Candidate sources:

- S4 AI-to-order productization and paid-result signal
- S6 safety value proof client project
- S7 OS and key battle planning

Target artifacts:

- `assets/B3-模式升维/external-evidence-coding-2026-06.md`
- `assets/B3-模式升维/validation-records.md`
- `assets/B3-模式升维/evidence.md`

### Route 3 · Alternative next: A4 显化原力

Reason:

```text
A4 tests whether an individual/expert force is actually approached, believed, paid for, reused or co-built.
```

Candidate sources:

- S1 learner self-introductions and expectations
- S4 AI-supported order signal
- S6 real client project signal

Target artifacts:

- `assets/A4-显化原力/external-evidence-coding-2026-06.md`
- `assets/A4-显化原力/validation-records.md`
- `assets/A4-显化原力/evidence.md`

---

## 6. Privacy Levels

| Level | Meaning | Allowed Output |
|---|---|---|
| P0 public | already public source | citation and summary allowed |
| P1 internal | internal but non-sensitive | source pointer + summary |
| P2 private | learner/client/project private | source pointer + anonymized pattern only |
| P3 sensitive | personal, commercial, financial, or client-sensitive | no direct quote; human approval required |

Default for `llm-wiki`:

```text
P2 private unless explicitly approved otherwise.
```

---

## 7. Extraction Status Values

```text
source_discovered
source_indexed
evidence_coding_started
evidence_coded
validation_started
controlled_test_pending
evolution_note_created
skill_candidate_created
human_approved
canon_candidate
canon_approved
```

---

## 8. Backwrite Targets

| Output Type | Backwrite Target |
|---|---|
| source map | `brain/sources/llm-wiki-source-map-v1.md` |
| extraction protocol | `brain/sources/llm-wiki-extraction-protocol-v1.md` |
| source registry proposal | `brain/sources/llm-wiki-source-registry-proposal-v1.md` |
| module evidence | `assets/<module>/evidence.md` |
| validation record | `assets/<module>/validation-records.md` |
| user language | `assets/<module>/user-language.md` |
| evolution note | `brain/evolution-notes/` |
| skill candidate | `brain/SKILL-CANDIDATES.md` |
| PMO status | GitHub Issue / `docs/pmo-dashboard-data.js` |

---

## 9. Current Decision

```text
Use llm-wiki as the first governed Field Evidence Lake for Yuanli Brain.
Do not promote raw source into canon.
Use B2 as reference pattern.
Run next route through B3 or A4.
```

---

## 10. Next C4 Action

```text
Choose Route 2 B3 or Route 3 A4, then run 5+ coded evidence records from llm-wiki private sources with source pointers and anonymized patterns only.
```
