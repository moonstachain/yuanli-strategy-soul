# C2 Repo Ownership Map v1

Date: 2026-06-30  
Source Gap: #160  
Execution Task: #170  
Status: draft / no repo lifecycle mutation

## 0. Purpose

This document defines the ownership, SSOT boundary, evidence routing, transcript/source-memory boundary, query routing, and writeback rules for C2 Brain related repositories.

It answers the first-principles question:

```text
C2 一个大脑相关仓库之间，哪个是 schema，哪个是 SSOT，哪个是 evidence source，哪个是 transcript/source memory，哪个负责输出回写？
```

## 1. Non-goals and Guardrails

This document does not authorize any repo lifecycle operation.

```text
Do not move repos.
Do not rename repos.
Do not archive repos.
Do not delete repos.
Do not merge repos.
Do not expose private transcript or client-sensitive content.
Do not mark weak evidence as green.
```

## 2. C2 Repo Inventory

| Repo | Proposed Role | Portfolio Layer | CBM Domain | Primary CBM Cell | Evidence Strength | Governance Status |
|---|---|---|---|---|---|---|
| `moonstachain/yuanli-brain` | C2 brain architecture, query surface, schema-facing operating docs | L1 | knowledge | knowledge.direct.knowledge-asset-architecture | medium | L1-ready |
| `moonstachain/yuanli-force-brain-ssot` | Structured SSOT, brain source spine, three-seams alignment source | L1 | knowledge | knowledge.control.knowledge-map-consistency | medium | L1-ready |
| `moonstachain/llm-wiki` | Raw / semi-raw transcript source, client records, user language, evidence source | L1 | knowledge | knowledge.execute.notebooklm-deep-routing | strong | L1-ready with privacy boundary |

## 3. Ownership Rule

### 3.1 `yuanli-brain`

`yuanli-brain` owns the C2 operating surface:

```text
- C2 query protocol
- C2 schema-facing docs
- C2 user-facing / operator-facing brain design
- C2 output format
- C2 knowledge architecture proposals
```

It should not be treated as the raw evidence store.

### 3.2 `yuanli-force-brain-ssot`

`yuanli-force-brain-ssot` owns structured source-of-truth alignment:

```text
- SSOT source spine
- three-seams alignment
- stable source indexes
- structured brain maps
- canonical source boundary proposals
```

It should not be treated as a dumping ground for raw transcripts.

### 3.3 `llm-wiki`

`llm-wiki` owns raw or semi-raw source memory:

```text
- transcripts
- client records
- meeting materials
- user language
- external evidence source material
```

It is a source repository, not a public publishing repository.

## 4. SSOT Rule

| Artifact Type | SSOT Repo | Notes |
|---|---|---|
| Raw transcript / meeting record | `llm-wiki` | Keep private. Do not copy raw material into public docs. |
| Anonymized evidence note | `yuanli-strategy-soul` | Write into `brain/evidence/` after privacy review. |
| C2 schema / query protocol | `yuanli-brain` | Use for operator-facing C2 design. |
| Structured brain source map | `yuanli-force-brain-ssot` | Use for source spine and three-seams alignment. |
| PMO-visible C2 issue/task status | `yuanli-strategy-soul` | Issues, PMO dashboard, evidence/evolution. |
| Canonical learning candidate | `yuanli-strategy-soul` | Only after evidence and evolution review. |

## 5. Evidence Routing Rule

Evidence should move through this path:

```text
llm-wiki raw source
→ anonymized extraction
→ brain/evidence/ in yuanli-strategy-soul
→ evolution note
→ canonical candidate only if review passes
```

Evidence must be classified before writeback:

| Level | Meaning | Allowed Location |
|---|---|---|
| Raw | identifiable transcript, client material, meeting notes | private source repo only |
| Sensitive | contains client/user context that can identify source | private repo or redacted evidence only |
| Anonymized | source meaning preserved, identity removed | `brain/evidence/` |
| Public-safe | approved for public docs or content | docs / assets / website after human approval |

## 6. Transcript and Source-memory Privacy Boundary

`llm-wiki` content must not be copied into public files unless it has passed anonymization and human review.

Allowed actions:

```text
- summarize into anonymized evidence
- code patterns and user language without identifiers
- cite internal evidence path, not raw transcript content
- create derived insight with sensitivity label
```

Disallowed actions:

```text
- paste raw transcript into public docs
- expose client names or private context
- mark raw transcript as public evidence
- use source material for external publishing without review
```

## 7. Query Routing Rule

| Query Type | Primary Repo | Secondary Repo | Output Target |
|---|---|---|---|
| What is the current C2 schema? | `yuanli-brain` | `yuanli-force-brain-ssot` | docs/C2* |
| What raw evidence supports B2/C2/client insight? | `llm-wiki` | `yuanli-strategy-soul` | anonymized `brain/evidence/` |
| What is the structured source boundary? | `yuanli-force-brain-ssot` | `yuanli-brain` | source map / C2 docs |
| What should PMO execute next? | `yuanli-strategy-soul` | all three | C3 Gap / C4 Task |
| What can be taught or published? | `yuanli-strategy-soul` | `llm-wiki` only after review | docs / assets / content engine |

## 8. Writeback Target Map

| Output | Writeback Target |
|---|---|
| C2 ownership decision | `docs/C2-REPO-OWNERSHIP-MAP-v1.md` |
| Evidence extracted from transcript | `brain/evidence/` |
| Learning from applying this map | `brain/evolution-notes/` |
| PMO issue status | GitHub Issues in `yuanli-strategy-soul` |
| Dashboard health | `docs/GITHUB-PORTFOLIO-REVIEW-RHYTHM-v1.md` or dashboard data patch |
| Future canonical candidate | `brain/canonical-learning/` only after review |

## 9. False-green Prevention

A repo cannot be shown as green / validated / compounding only because it exists or has recent activity.

```text
No evidence, no green.
No anonymization, no public evidence.
No writeback, no Done.
No C3/C4 link, no main PMO status.
```

Current status:

| Repo | Evidence | Display Status |
|---|---|---|
| `yuanli-brain` | medium | operating candidate, not auto-green |
| `yuanli-force-brain-ssot` | medium | operating candidate, not auto-green |
| `llm-wiki` | strong as source | strong source, but privacy-gated |

## 10. Dashboard Fields

Recommended C2 repo health fields:

```text
repo
repo_role
ssot_scope
evidence_strength
privacy_boundary
last_reviewed_at
next_c3_gap
next_c4_task
writeback_target
false_green_risk
```

## 11. Next C3 / C4 Candidates

| Type | Title | Why |
|---|---|---|
| C4 | Build C2 evidence routing template | Standardize extraction from `llm-wiki` into `brain/evidence/` |
| C4 | Build C2 query routing checklist | Make operator/Codex queries route to correct repo |
| C3 | C2 public-safe evidence boundary | Decide what C2 evidence can support content-engine outputs |

## 12. Current Decision

```text
Use this document as the first-pass ownership map for C2 related repos.
Keep all repo lifecycle actions human-gated.
Do not move, merge, archive, rename, or delete any repo.
Do not expose raw private source material.
```
