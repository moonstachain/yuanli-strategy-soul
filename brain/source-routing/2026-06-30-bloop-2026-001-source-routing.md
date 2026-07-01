# Source Routing · BLOOP-2026-001

Date: 2026-06-30  
Brain Loop ID: BLOOP-2026-001  
Status: draft / routed / not validated  
Issue anchor: #188

## 1. Routing Summary

This file records the source, sensitivity, canon, capability, and program routing for BLOOP-2026-001.

Topic:

```text
创业者不是缺能力，而是缺一个可复利的事业操作系统
```

## 2. SourceItem Registry

| Source ID | Type | Location | Sensitivity | Freshness | Summary |
|---|---|---|---|---|---|
| `SRC-BLOOP001-CHAT` | chat | current planning thread | private-default | hot | Human approved executing BLOOP-2026-001. |
| `SRC-BLOOP001-PR187` | GitHub PR | #187 | public-safe/internal | hot | Brain Loop v1 protocol package. |
| `SRC-BLOOP001-PR185` | GitHub PR | #185 | public-safe/internal | hot | Formal CBM-PMO program charter package. |
| `SRC-BLOOP001-ISSUE188` | GitHub issue | #188 | public-safe/internal | hot | Main BLOOP-2026-001 run anchor. |
| `SRC-BLOOP001-LLMWIKI` | source brain summary | LLM Wiki source radar | private-default | recent | Shows strong collection but weak routing/projection. |
| `SRC-BLOOP001-GBRAIN` | external repo reference | garrytan/gbrain | public-safe | current reference | Brain/source, resolver, maintain/dream reference architecture. |
| `SRC-BLOOP001-YC` | methodology reference | YC agent infrastructure | public-safe/internal | current reference | Organization-level shared brain and agentic operating benchmark. |
| `SRC-BLOOP001-ZHIKU` | capability market reference | yiru-cockpit-deploy / zhiku-market-skill | public-safe/internal | current reference | Capability resolver and component market reference. |

## 3. Sensitivity Review

| Source ID | Level | Allowed Use | Blocked Use | Human Gate |
|---|---|---|---|---|
| `SRC-BLOOP001-CHAT` | private-default | internal PMO reasoning, summarized evidence | raw public quote without approval | yes |
| `SRC-BLOOP001-PR187` | public-safe/internal | protocol reference | none | no |
| `SRC-BLOOP001-PR185` | public-safe/internal | program reference | none | no |
| `SRC-BLOOP001-ISSUE188` | public-safe/internal | run anchor | none | no |
| `SRC-BLOOP001-LLMWIKI` | private-default | aggregate diagnosis only | raw private material publication | yes |
| `SRC-BLOOP001-GBRAIN` | public-safe | architecture benchmark | claiming direct adoption/migration | no |
| `SRC-BLOOP001-YC` | public-safe/internal | operating benchmark | overclaiming validation | no |
| `SRC-BLOOP001-ZHIKU` | public-safe/internal | capability resolver reference | exposing private component details | yes if private component involved |

## 4. Canon Resolution

```yaml
canon_resolution:
  trilogy_part: yuanli_os
  module_primary: C2 一个大脑
  module_secondary:
    - C3 一张地图
    - C4 一条链路
  canon_node: Yuanli OS Brain Loop
  claim_type:
    - method
    - governance
    - content
    - evidence
  canonical_status: evidence-seeking internal trial
  confidence: medium
```

Supports:

```text
Yuanli OS requires a loop that connects source material, canon, capability, program routing, evidence, evolution, dream review, and backwrite.
```

Does not support:

```text
This run does not prove market validation, customer willingness to pay, content performance, or external adoption.
```

## 5. Capability Resolution

Need:

```text
Run the first internal Yuanli OS Brain Loop trial and create one content artifact plus evidence/evolution/backwrite trail.
```

Capability search result:

| Candidate | Source | Decision | Reason |
|---|---|---|---|
| Brain Loop v1 protocol | #187 | reuse | Explicit run protocol exists. |
| Content Engine Program | #183 | reuse | Formal program exists for content artifact and feedback. |
| GitHub Portfolio Program | #184 | reuse | Formal program exists for capability/source governance. |
| Zhiku Capability Market | Zhiku repos | reference | Capability discovery gate identified; no direct invocation in this run. |
| GBrain | external reference | reference | Architecture benchmark; no migration in v1. |

Decision:

```text
reuse existing programs and protocol; do not create new tooling for this run.
```

## 6. Program Route

```yaml
program_route:
  primary_program: content_engine
  primary_anchor: '#183'
  secondary_program: github_portfolio
  secondary_anchor: '#184'
  issue_anchor: '#188'
  protocol_pr: '#187'
  base_package_pr: '#185'
  cbm_cells:
    - growth.direct.ip-content-portfolio
    - growth.control.content-reuse-pipeline
    - strategy.control.pmo-rhythm-and-risk
    - knowledge.control.knowledge-map-consistency
    - engineering.execute.operator-skill-reuse
```

## 7. Execution Boundary

Allowed:

```text
Draft PR
Markdown files
internal content artifact
evidence note
evolution note
dream review
writeback delta
```

Not allowed:

```text
merge
Ready for review
green/validated label
public publication
repo lifecycle mutation
new BLOOP issue expansion
```

## 8. Next Action

Create the first internal content artifact and evidence chain, then keep the run in Draft for human review.
