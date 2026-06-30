# GitHub CBM-PMO Human Review Index v1

Date: 2026-06-30  
Execution Task: #178  
Status: draft / human-review index / no repo lifecycle mutation

## 0. Purpose

This document is the human-readable control index for the current GitHub CBM-PMO workstream.

It turns a distributed set of Issues, PRs, and docs into one review surface:

```text
Can I see what exists?
Can I see what each item is for?
Can I see what needs review?
Can I see what must not be merged yet?
Can I see the next action?
```

## 1. Current Human Visibility Judgment

```text
Issues / PRs / docs are visible.
A unified human review index is now created.
A fully automated dashboard data layer is still pending #179.
```

## 2. Guardrails

```text
Do not merge automatically.
Do not move repos.
Do not rename repos.
Do not archive repos.
Do not delete repos.
Do not change repo visibility.
Do not mark weak evidence as green.
```

## 3. Portfolio Governance Review Unit

| Layer | Issue | PR | Artifact | State | Evidence | Human Review Need | Next Action |
|---|---:|---:|---|---|---|---|---|
| Registry | #153 | #165 | `docs/GITHUB-6M-CBM-PMO-VALUE-AUDIT-v1.md` | Draft PR / not merged | weak | Review whether repo classification is useful and conservative | Decide merge or revise |
| Policy | #154 | #166 | `docs/REPO-GOVERNANCE-POLICY-v1.md` | Draft PR / not merged | weak | Review L1/L2/L3 policy and human gates | Decide merge or revise |
| L1 Onboarding | #155 | #167 | `docs/GITHUB-PORTFOLIO-L1-ONBOARDING-v1.md` | Draft PR / not merged | weak | Review Top L1 repo mapping | Decide whether to use as source for dashboard |
| Capability Asset Pool | #156 | #168 | `docs/CAPABILITY-ASSET-POOL-v1.md` | Draft PR / not merged | weak | Review whether tools/agents are kept out of main PMO | Decide merge or revise |
| Dashboard Rhythm | #157 | #169 | `docs/GITHUB-PORTFOLIO-REVIEW-RHYTHM-v1.md` | Draft PR / not merged | weak | Review dashboard metrics and cadence | Execute #179 data patch |

## 4. C2 Execution Review Unit

| Layer | Issue | PR | Artifact | State | Evidence | Human Review Need | Next Action |
|---|---:|---:|---|---|---|---|---|
| C3 Gap | #160 | - | C2 ownership / SSOT gap | Open issue | medium candidate | Confirm the gap is the correct C2 priority | Keep open until #170/#174 are reviewed |
| Ownership Map | #170 | #172 | `docs/C2-REPO-OWNERSHIP-MAP-v1.md` | Draft PR / not merged | medium candidate | Review roles of `yuanli-brain`, `yuanli-force-brain-ssot`, `llm-wiki` | Merge only after human review |
| Evidence Routing | #174 | #176 | `docs/C2-EVIDENCE-ROUTING-TEMPLATE-v1.md` | Draft PR / not merged | weak-to-medium candidate | Review whether routing is safe for real evidence extraction | Select first evidence trial |

## 5. Content Engine Execution Review Unit

| Layer | Issue | PR | Artifact | State | Evidence | Human Review Need | Next Action |
|---|---:|---:|---|---|---|---|---|
| C3 Gap | #161 | - | content production integration gap | Open issue | weak | Confirm content-engine as orchestrator | Keep open until #171/#175 are reviewed |
| Integration Contract | #171 | #173 | `docs/CONTENT-ENGINE-REPO-INTEGRATION-CONTRACT-v1.md` | Draft PR / not merged | weak | Review content repo input/output contracts | Merge only after human review |
| 30D Feedback Schema | #175 | #177 | `docs/CONTENT-30D-FEEDBACK-SCHEMA-v1.md` | Draft PR / not merged | weak | Review whether content feedback schema is usable | Select first content item trial |

## 6. Remaining C3 Gap Review Unit

| Issue | Theme | State | Why It Exists | Next Action |
|---:|---|---|---|---|
| #162 | Strategy canon source boundary | Open | Canon source repos need source-of-truth hierarchy | Create C4 for `docs/CANON-SOURCE-HIERARCHY-v1.md` when prioritized |
| #163 | Client evidence privacy boundary | Open | Client evidence needs privacy and writeback boundary | Create C4 for `docs/CLIENT-EVIDENCE-PRIVACY-BOUNDARY-v1.md` when prioritized |
| #164 | Investment decision-record loop | Open | Investment/research repos need decision evidence loop | Create C4 for `docs/INVESTMENT-DECISION-RECORD-TEMPLATE-v1.md` when prioritized |

## 7. Current Draft PR Queue

Recommended review order:

```text
1. #166 Repo Governance Policy
2. #165 GitHub 6M Registry
3. #167 L1 Onboarding
4. #168 Capability Asset Pool
5. #169 Dashboard Rhythm
6. #172 C2 Repo Ownership Map
7. #176 C2 Evidence Routing Template
8. #173 Content Engine Integration Contract
9. #177 Content 30D Feedback Schema
```

Reason:

```text
Policy should precede registry merge.
Registry should precede onboarding merge.
Onboarding should precede dashboard patch.
C2 and content execution docs should be reviewed before real trials.
```

## 8. Current Milestone Status

| Milestone | Status | Evidence |
|---|---|---|
| GitHub Portfolio Governance Architecture v1 | Reached / review pending | #165-#169 |
| C2 executable contract layer | Reached / review pending | #172 / #176 |
| Content executable contract layer | Reached / review pending | #173 / #177 |
| Unified human review index | Reached by this doc | #178 |
| Dashboard data patch | Pending | #179 |
| First real evidence loop | Not yet | needs C2 trial |
| First real content feedback loop | Not yet | needs content item trial |

## 9. What Human Should Review First

### First review: policy and guardrails

```text
#166: Are L1/L2/L3 rules correct?
#169: Are dashboard states and false-green rules correct?
```

### Second review: C2 safety

```text
#172: Are repo roles correct?
#176: Is evidence routing safe enough for llm-wiki-derived material?
```

### Third review: content execution

```text
#173: Are content repo contracts correct?
#177: Is the feedback schema light enough to actually use?
```

## 10. Decision Board

| Decision | Recommended State |
|---|---|
| Merge #158 umbrella PR? | No. Keep Draft as master package until split PRs are reviewed. |
| Merge split PRs now? | Not yet. Review first. |
| Start C2 real evidence trial? | After #172 and #176 human review. |
| Start content 30D feedback trial? | After #173 and #177 human review. |
| Patch dashboard data? | Yes, execute #179 next, using draft/review-needed status. |

## 11. Current Summary

```text
The workstream is now human-visible as an index.
The next visibility layer is machine-readable dashboard data.
No repo lifecycle mutation is authorized.
No weak evidence is green.
```