# llm-wiki · Extraction Protocol v1

Date: 2026-07-01
Related Issues: #212 / #213 / #214
Source Repo: `moonstachain/llm-wiki`
Target Repo: `moonstachain/yuanli-strategy-soul`
Module: C2 一个大脑 / C3 一张地图 / C4 一条链路

---

## 0. Purpose

Define how private `llm-wiki` materials enter Yuanli Brain as governed evidence, without confusing raw source, evidence, evolution, skill candidate, and canon.

---

## 1. Mother Rule

```text
Raw source is not evidence.
Evidence is not evolution.
Evolution is not canon.
Canon requires human approval.
```

Full path:

```text
source pointer
-> structured extraction
-> evidence coding
-> module writeback
-> evolution note
-> skill/canon candidate
-> human approval
-> active skill / canon
```

---

## 2. Allowed Source Types

| Type | Allowed Use | Boundary |
|---|---|---|
| transcript | user language, case, market signal | use source pointer and anonymized pattern |
| meeting note | project context, decision, workflow | summarize, do not publish private context |
| architecture note | C2/C3/C4/PMO design reference | verify against current canon |
| greenbook draft | concept candidate, teaching asset | does not override CONSTITUTION.md |
| synthesis | pattern detection, candidate insight | trace back to source when possible |
| client/project discussion | A4/B3/B4 evidence, PMO validation | human gate required before external publication |

---

## 3. Evidence Types

| Evidence Type | Meaning | Example Target |
|---|---|---|
| user_language | target user original problem words and old-category words | `assets/B2-品类独创/user-language.md` |
| category_signal | naming, positioning, category reaction | `assets/B2-品类独创/evidence.md` |
| purchase_signal | deposit, order, willingness, follow-up | A4/B3 validation records |
| delivery_signal | workflow, SOP, service delivery pattern | B3/C4 evidence |
| case_signal | real learner/client/project case | `brain/cases/` or module real-cases |
| capability_gap | missing capability or weak evidence cell | C3 Gap issue |
| workflow_pattern | repeatable process worth skillifying | `brain/SKILL-CANDIDATES.md` |
| governance_signal | PMO, backwrite, approval, source-of-truth rule | C2/C3/C4 evolution note |

---

## 4. Required Extraction Record

```yaml
record_id:
source_repo: moonstachain/llm-wiki
source_path:
source_date:
source_type:
privacy_level: P0 | P1 | P2 | P3
related_module:
evidence_type:
anonymized_summary:
user_language_or_signal:
old_category_or_old_process:
new_pattern_or_interpretation:
confidence: cited | inferred | unknown
source_strength: weak | medium | strong
writeback_target:
human_gate_required: true | false
next_c4_task:
```

---

## 5. Privacy and Publication Rule

Default:

```text
All llm-wiki source material is P2 private unless explicitly approved otherwise.
```

Allowed in governed artifacts:

```text
source path pointer
anonymized summary
structured pattern
aggregate signal
short non-sensitive phrase when necessary
```

Human approval required before:

```text
external publication
maturity upgrade
active skill promotion
canon candidate promotion
use of identifiable client or learner context
```

---

## 6. Module Writeback Rules

| Module | Writeback Target | Upgrade Boundary |
|---|---|---|
| A1 | `assets/A1-发现母体/evidence.md` | field language does not equal mother-body validation |
| A4 | `assets/A4-显化原力/validation-records.md` | approach/payment/reuse signals required |
| B1 | `assets/B1-原力借势/evidence.md` | trend signal must connect to user/market window |
| B2 | `assets/B2-品类独创/user-language.md` / `validation-records.md` | controlled naming test required for 3/5 |
| B3 | `assets/B3-模式升维/evidence.md` / `validation-records.md` | delivery/revenue/repeatability signal required |
| B4 | `assets/B4-壁垒锁定/evidence.md` | lock-in/reuse/moat signal required |
| C2 | `brain/sources/` / `brain/evidence/` | source indexed does not equal validated brain |
| C3 | GitHub C3 Gap / CBM registry | gap needs evidence strength and priority |
| C4 | GitHub C4 Task / SOP / skill candidate | task needs evidence + backwrite |

---

## 7. Evidence Strength Rule

| Strength | Trigger |
|---|---|
| weak | internal idea, draft, or unverified interpretation |
| medium | source file, transcript, project note, or structured internal evidence |
| medium+ | multiple structured records from real fieldwork, not controlled test |
| strong | real user/client/project validation or controlled test with clear pass criteria |
| reused | evidence was reused in a later project and improved output |

Boundary:

```text
Evidence coding from existing fieldwork can usually reach medium or medium+.
Controlled validation or real client outcome is required for strong.
```

---

## 8. Skill / Canon Boundary

Skill candidate can be created if:

```text
1. workflow repeats;
2. inputs and outputs are clear;
3. at least 3 examples or evidence records exist;
4. privacy risk is controlled;
5. next user/client test is defined.
```

Active skill requires:

```text
1. human review;
2. successful real use;
3. evidence/writeback path;
4. clear stop conditions and approval gates.
```

Canon update requires:

```text
human approval only.
```

---

## 9. False Green Check

Before closing any llm-wiki-derived task:

```text
[ ] Did we confuse source discovery with validation?
[ ] Did we assign evidence strength too high?
[ ] Did we skip module writeback?
[ ] Did we skip evolution note?
[ ] Did we imply canon change without human approval?
[ ] Did we leave no next reuse path?
```

---

## 10. Recommended First Runs

### Run 1 reference

```text
B2 品类独创 external evidence coding
```

Use as pattern, not as final standard.

### Run 2 recommended

```text
B3 模式升维 external evidence coding
```

Reason:

```text
B3 can test delivery, productization, revenue, workflow and repeatability signals.
```

### Run 3 alternative

```text
A4 显化原力 external evidence coding
```

Reason:

```text
A4 can test whether individual/expert force is approached, believed, paid for, reused or co-built.
```

---

## 11. Standard Output Format

```md
# llm-wiki Extraction · <module> · <date>

## Source Set

## Evidence Records

## Pattern Summary

## Module Interpretation

## Evidence Strength

## Validation Boundary

## C3 Gap

## C4 Task

## Writeback Targets

## Human Gate
```

---

## 12. Current Status

```text
protocol_created
source_registry_proposal_created
source_map_created
next_step: choose B3 or A4 second validation chain
```
