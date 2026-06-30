# Content 30D Feedback Schema v1

Date: 2026-06-30  
Source: #171 / #173  
Execution Task: #175  
Status: draft / no repo lifecycle mutation / no external publishing

## 0. Purpose

This schema defines the minimum feedback record for each content item in the first 30-day content-engine execution cycle.

The goal is to prevent content production from becoming one-time output:

```text
Content item
→ feedback
→ evidence
→ evolution
→ reuse path
→ backwrite
```

## 1. Guardrails

```text
Do not publish content from this schema alone.
Do not move repos.
Do not rename repos.
Do not archive repos.
Do not delete repos.
Do not merge repos.
Do not expose private or client-sensitive source material.
Do not mark weak evidence as green.
```

## 2. Content Item Identity Fields

| Field | Required | Meaning |
|---|---|---|
| content_id | yes | stable ID, e.g. `2026-07-001` |
| title | yes | working title |
| owner | optional | human/operator owner |
| status | yes | brief / draft / ready / published / tested / paused / retired |
| created_at | yes | date created |
| last_updated_at | yes | date reviewed |
| source_issue | optional | linked C3/C4 issue |
| source_pr | optional | linked PR |

## 3. Canon and Topic Fields

| Field | Required | Meaning |
|---|---|---|
| canon_node | yes | A1-A4 / B1-B4 / C1-C4 / cross-trilogy |
| module_asset | optional | related module asset pack path |
| topic_map_node | yes | topic-map location |
| audience | yes | target audience |
| pain_or_job | yes | user pain / JTBD |
| source_evidence | yes | evidence path or explicit `none` |
| claim_type | yes | concept / case / method / story / tool / CTA |

## 4. Channel and Format Fields

| Field | Required | Meaning |
|---|---|---|
| channel | yes | WeChat / Xiaohongshu / short-video / podcast / course / book / report / dashboard |
| format | yes | long article / card / clip / script / outline / report / table |
| tool_repo | optional | called tool repo, e.g. `wechat-writer` |
| output_artifact | yes | file path, draft path, or package path |
| adaptation_notes | optional | channel-specific rewrite notes |
| approval_gate | yes | none / editorial / sensitive-source / external-publish |

## 5. Publish or Test Status Fields

| Field | Required | Meaning |
|---|---|---|
| publish_status | yes | not-published / scheduled / published / test-only / intentionally-paused |
| publish_date | optional | actual or planned date |
| publish_url | optional | only if public-safe |
| test_scope | optional | internal / small group / public / client / course |
| reason_not_published | optional | required if paused |

## 6. Feedback Metric Fields

Use channel-appropriate metrics. Do not require every metric for every channel.

| Field | Required | Meaning |
|---|---|---|
| review_feedback | yes | human editorial or operator feedback |
| audience_feedback | optional | comments, replies, DM, client/student response |
| reach_metric | optional | views / reads / impressions |
| depth_metric | optional | completion / read depth / watch retention |
| resonance_metric | optional | saves / shares / comments / likes |
| conversion_metric | optional | DM / signup / call booked / purchase / lead |
| qualitative_signal | optional | notable language, objection, praise, confusion |
| feedback_summary | yes | short conclusion from feedback |

## 7. Evidence and Evolution Fields

| Field | Required | Meaning |
|---|---|---|
| evidence_strength | yes | none / weak / medium / strong |
| evidence_path | optional | `brain/evidence/...` |
| evolution_path | optional | `brain/evolution-notes/...` |
| supported_claim | optional | what the content feedback supports |
| unsupported_claim | optional | what it does not prove |
| next_iteration | yes | keep / revise / expand / retire / convert channel |
| reuse_path | yes | course / book / short-video / xhs / podcast / case / none |
| writeback_target | yes | docs / assets / brain / content repo |

## 8. Done Rule

A content item cannot be marked Done unless:

```text
1. It has a status.
2. It has a canon_node.
3. It has source_evidence or explicit evidence gap.
4. It has at least one feedback record or explicit reason for no publish/test.
5. It has next_iteration.
6. It has writeback_target.
```

If feedback is missing, allowed status is:

```text
published-no-feedback
tested-no-feedback
paused-no-feedback
```

not:

```text
Done
green
validated
compounding
```

## 9. Feedback Record Template

```markdown
# Content Feedback · <content_id> · <title>

Date:
Owner:
Canon Node:
Channel:
Format:
Status:
Source Evidence:
Tool Repo:
Output Artifact:

## 1. Content Intent

## 2. Publish / Test Status

## 3. Feedback Captured

### Human Review

### Audience / Market Signal

### Metrics

## 4. What This Supports

## 5. What This Does Not Prove

## 6. Evidence Strength

## 7. Next Iteration

## 8. Reuse Path

## 9. Writeback Target
```

## 10. First 30-day Review Cadence

| Cadence | Review Focus |
|---|---|
| Daily | published/tested items missing feedback |
| Weekly | evidence strength, reuse candidates, channel learning |
| End of 30 days | which topics/tools/channels produced reusable evidence |

## 11. Current Decision

Use this schema as the first-pass feedback protocol for content-engine execution. It supports #171 and PR #173, and should be reused before promoting content tools from L2 asset pool into C4 execution status.
