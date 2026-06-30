# Content Engine Repo Integration Contract v1

Date: 2026-06-30  
Source Gap: #161  
Execution Task: #171  
Status: draft / no repo lifecycle mutation

## 0. Purpose

This document defines how content production repositories connect to the Yuanli Content Engine main workflow.

It answers the first-principles question:

```text
内容生产相关仓库如何统一进入 content-engine 主链路，而不是变成公众号工具、视频工具、小红书工具、报告工具各自为政？
```

## 1. Non-goals and Guardrails

This document does not publish content and does not authorize any repo lifecycle operation.

```text
Do not move repos.
Do not rename repos.
Do not archive repos.
Do not delete repos.
Do not merge repos.
Do not publish external content.
Do not expose private or client-sensitive source material.
Do not mark weak evidence as green.
```

## 2. Integration North Star

```text
Canon Node
→ Topic Map
→ Channel Adaptation
→ Content Production Tool
→ Publish / Test
→ Feedback
→ Evidence
→ Evolution
→ Backwrite
```

The content engine is not a content calendar only. It is a recursive production chain that turns every content output into reusable evidence and future content leverage.

## 3. Repo Inventory

| Repo | Proposed Role | Layer | CBM Domain | Evidence Strength | Governance Decision |
|---|---|---|---|---|---|
| `moonstachain/yuanli-content-engine-os` | Content-engine orchestrator | L1-candidate | growth | weak | govern after integration contract and feedback loop |
| `moonstachain/wechat-writer` | WeChat article drafting tool | L2 asset | growth | weak | asset-pool then promote if called and feedback captured |
| `moonstachain/nas-video-autoclip` | Short-video clipping automation | L2 asset | growth | weak | asset-pool then promote if clips feed evidence loop |
| `moonstachain/xhs-remote-publisher` | Xiaohongshu publishing helper | L2 asset | growth | weak | human-gated publishing only |
| `moonstachain/high-density-mckinsey-report-designer` | High-density report layout/style asset | L2 asset | growth | weak | asset-pool, promote when used by official report workflow |
| `moonstachain/high-info-density-dashboard-designer` | Dashboard layout/style asset | L2 asset | growth | weak | asset-pool, promote when used by CBM/PMO dashboard workflow |

## 4. Orchestrator Rule

`yuanli-content-engine-os` is the proposed orchestrator repo.

It should own:

```text
- content workflow design
- topic map routing
- channel adaptation rules
- production chain contracts
- publishing readiness checklist
- feedback capture protocol
- content evidence writeback
- content evolution notes
```

It should not become a dumping ground for every generated draft, media file, or raw customer source.

## 5. Input / Output Contracts

### 5.1 `wechat-writer`

| Contract | Definition |
|---|---|
| Input | canon node, topic brief, source evidence, audience, channel style, CTA goal |
| Output | WeChat article draft, title options, summary, key claims, source references |
| Evidence After Use | draft acceptance, revision notes, publish status, engagement feedback, reuse path |
| Writeback | `brain/evidence/`, `brain/evolution-notes/`, content-engine topic map |

### 5.2 `nas-video-autoclip`

| Contract | Definition |
|---|---|
| Input | source video, transcript, clip rule, target channel, emotional arc, keyword tags |
| Output | clip list, timestamps, short-video cut plan, candidate titles/hooks |
| Evidence After Use | selected clips, publish/test feedback, retention signal, reuse path |
| Writeback | content-engine feedback log, `brain/evidence/`, channel adaptation notes |

### 5.3 `xhs-remote-publisher`

| Contract | Definition |
|---|---|
| Input | Xiaohongshu card copy, image/card assets, account context, publish intent |
| Output | publish-ready package or human-gated publish action |
| Evidence After Use | publish status, saves/comments/DM signal, platform notes |
| Writeback | content feedback record and evidence note |

### 5.4 `high-density-mckinsey-report-designer`

| Contract | Definition |
|---|---|
| Input | report brief, audience, decision question, source materials, visual density target |
| Output | report structure, page rhythm, chart/table recommendations, executive narrative |
| Evidence After Use | review feedback, reuse in client/content/report asset |
| Writeback | report pattern, style rule, evidence note if used in real project |

### 5.5 `high-info-density-dashboard-designer`

| Contract | Definition |
|---|---|
| Input | metric set, decision questions, user role, dashboard scope |
| Output | dashboard layout, KPI grouping, interaction/narrative recommendations |
| Evidence After Use | dashboard review feedback, usage note, decision supported |
| Writeback | dashboard spec, PMO review notes, evidence/evolution if used |

## 6. Topic-map to Channel Adaptation Flow

Each content item should follow this path:

```text
Canon Node
→ Topic Brief
→ Source Evidence
→ Channel Choice
→ Tool Invocation
→ Draft / Cut / Card / Report
→ Human Review
→ Publish or Test
→ Feedback Capture
→ Evidence Note
→ Evolution Note
→ Backwrite
```

Required fields:

```text
canon_node
audience
pain_or_job
source_evidence
channel
format
tool_repo
output_artifact
feedback_metric
writeback_target
reuse_path
```

## 7. Feedback Capture Rule

No published or tested content item should be marked Done without at least one feedback record.

Feedback can include:

```text
- human editorial review
- publish status
- view / read / completion signal
- save / share / comment / DM signal
- client or learner response
- reuse in course / book / script / case
- explicit reason for no publish
```

## 8. Evidence and Evolution Writeback Rule

Content output should not directly become canon.

Correct path:

```text
content output
→ feedback
→ evidence note
→ evolution note
→ canonical candidate only after review
```

Writeback targets:

| Output Type | Writeback Target |
|---|---|
| Tool contract | `docs/CONTENT-ENGINE-REPO-INTEGRATION-CONTRACT-v1.md` |
| Content feedback | `brain/evidence/` |
| Learning about content production | `brain/evolution-notes/` |
| Channel reusable pattern | content-engine repo or `assets/*/channel-adaptation.md` |
| Canonical candidate | `brain/canonical-learning/` only after review |

## 9. L2 Asset Promotion Rule

A content tool can move from L2 asset to C4 Task only when:

```text
1. It is called by a P0/P1 governed content workflow.
2. It has clear input/output contract.
3. It produces a reusable content artifact.
4. Feedback is captured.
5. Evidence is written.
6. Human approves promotion.
```

Until then, it remains:

```text
asset-pool / active-but-unvalidated / not-green
```

## 10. Sensitive-source Boundary

Client-sensitive source material should not be passed into content tools unless explicitly approved and anonymized.

Allowed:

```text
- anonymized insight
- approved teaching case
- generalized pain point
- public-safe claim with source path
```

Not allowed:

```text
- raw transcript
- customer-identifying context
- private commercial data
- source material not approved for content use
```

## 11. Dashboard Fields

Recommended fields for content-engine portfolio dashboard:

```text
repo
repo_role
asset_layer
called_by
input_contract_status
output_contract_status
feedback_status
evidence_strength
promotion_status
false_green_risk
writeback_target
last_reviewed_at
```

## 12. False-green Prevention

```text
No feedback, no Done.
No evidence, no green.
No writeback, no compounding.
No human approval, no external publish from sensitive source.
```

Current status:

| Repo | Evidence | Display Status |
|---|---|---|
| `yuanli-content-engine-os` | weak | L1-candidate, not green |
| `wechat-writer` | weak | L2 asset, not green |
| `nas-video-autoclip` | weak | L2 asset, not green |
| `xhs-remote-publisher` | weak | L2 asset, human-gated |
| `high-density-mckinsey-report-designer` | weak | L2 asset, not green |
| `high-info-density-dashboard-designer` | weak | L2 asset, not green |

## 13. Next C3 / C4 Candidates

| Type | Title | Why |
|---|---|---|
| C4 | Build 30-day content item feedback schema | Required before content outputs can become evidence |
| C4 | Build content topic-map to channel adaptation template | Required for one fish many meals workflow |
| C4 | Build WeChat writer first real content test | First actual use of `wechat-writer` asset |
| C4 | Build short-video clip evidence loop | First actual use of `nas-video-autoclip` asset |

## 14. Current Decision

```text
Use this document as the first-pass repo integration contract for content-engine related repos.
Keep content tools in L2 until called by a governed workflow and supported by feedback evidence.
Do not move, merge, archive, rename, or delete any repo.
Do not publish sensitive source material.
Do not mark weak evidence as green.
```
