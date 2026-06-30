# GitHub 6M CBM-PMO Value Audit v1

Date: 2026-06-30  
Window: `pushed:>=2025-12-30`  
Source PR: #158  
Parent Issues: #150 / #151 / #152 / #153  
Status: split review PR / draft registry

## Purpose

Convert the past six months of GitHub activity from a loose repo list into a CBM-PMO governed portfolio view.

```text
Repo activity is not value.
Repo value = CBM Cell + Evidence + Next C3/C4 + Writeback Target + Reuse Path.
```

## Governance Layers

| Layer | Name | Governance Meaning | Review Load |
|---|---|---|---|
| L1 | Core CBM-PMO Governance | Strategic canon, C2 Brain, content engine, client evidence, investment decision systems | C3 / C4 / Evidence / Evolution / Dashboard / Weekly Review |
| L2 | Capability Asset Pool | Agency, skill, tool, automation, writer, publisher, dashboard, deploy, middleware | Asset index / reuse contract / evidence when called |
| L3 | Observe / Archive Candidate | clone, demo, empty, duplicate, one-off, no evidence, no writeback | Index only / quarterly human review |

## Registry Schema

| Field | Definition |
|---|---|
| Repository | GitHub repo full name |
| Visibility | public / private |
| Repo Role | canon / brain / evidence / content / client / investment / engineering / skill / tool / demo / clone |
| Portfolio Layer | L1 / L2 / L3 |
| CBM Domain | strategy / knowledge / growth / client / investment / engineering / personal-os / observe |
| Primary CBM Cell | Primary capability cell |
| Secondary CBM Cell | Supporting capability cell |
| Canon Node / Business Theme | Related canon node or business theme |
| Status | active / seed / draft / operating / dormant / unknown |
| Evidence Strength | none / weak / medium / strong |
| Current Use | Current known use |
| Risk / Duplication | Risk, overlap, false-green risk, duplication |
| Next C3 Gap | Next judgement gap |
| Next C4 Task | Next executable task |
| Writeback Target | docs / assets / brain / dashboard / issue |
| Governance Decision | govern / govern-lite / asset-pool / observe / archive-candidate / human-review |

## L1 First-pass Registry

| Repository | Layer | Domain | Primary CBM Cell | Theme | Evidence | Decision |
|---|---|---|---|---|---|---|
| moonstachain/yuanli-strategy-soul | L1 | strategy | strategy.control.pmo-rhythm-and-risk | Operating Base / CBM-PMO | medium | govern |
| moonstachain/yuanli-strategy-trilogy-private | L1 | strategy | strategy.direct.os-governance-core | private canon source | weak | govern-lite |
| moonstachain/yuanli-strategy-trilogy | L1 | strategy | strategy.direct.os-governance-core | public canon expression | weak | govern-lite |
| moonstachain/yuanli-strategy-playbook | L1 | strategy | strategy.execute.strategy-brief-package | strategic playbook | weak | govern-lite |
| moonstachain/yuanli-os-greenbook | L1 | strategy | strategy.direct.os-governance-core | Yuanli OS source | weak | govern-lite |
| moonstachain/yuanli-startup-map-site | L1 | strategy | strategy.execute.strategy-brief-package | startup map site | weak | govern-lite |
| moonstachain/yuanli-startup-greenbook | L1 | strategy | strategy.direct.os-governance-core | startup source | weak | govern-lite |
| moonstachain/yuanli-brain | L1 | knowledge | knowledge.direct.knowledge-asset-architecture | C2 Brain | medium | govern |
| moonstachain/yuanli-force-brain-ssot | L1 | knowledge | knowledge.control.knowledge-map-consistency | C2 SSOT | medium | govern |
| moonstachain/llm-wiki | L1 | knowledge | knowledge.execute.notebooklm-deep-routing | evidence source / transcripts | strong | govern |
| moonstachain/yuanli-content-engine-os | L1 candidate | growth | growth.control.content-reuse-pipeline | content engineering | weak | govern after contract |
| moonstachain/mingge-cbm-osa-private | L1 | strategy | strategy.control.pmo-rhythm-and-risk | CBM / OSA source | medium | govern |
| moonstachain/yuanli-os-cbm-company-brain-map | L1 candidate | strategy | strategy.direct.os-governance-core | company brain map | weak | govern after alignment |
| moonstachain/yiru-macro-cockpit | L1 candidate | investment | investment.direct.wealth-research-framework | macro cockpit | medium | govern in investment lane |
| moonstachain/wechat-writer | L1/L2 bridge | growth | growth.execute.content-draft-package | WeChat content tool | weak | asset-pool then promote |
| moonstachain/nas-video-autoclip | L1/L2 bridge | growth | growth.control.content-reuse-pipeline | video clipping | weak | asset-pool then promote |

## L2 Capability Buckets

| Bucket | Examples | Decision |
|---|---|---|
| Content / growth tools | wechat-writer, nas-video-autoclip, xhs-remote-publisher, GEOFlow | capability asset pool |
| Engineering automation | github-feishu-sync, feishu-bitable-bridge, cloudflare-deploy, gh-fix-ci | capability asset pool / human-review |
| Agency role agents | agency-design-*, agency-marketing-*, agency-engineering-*, agency-testing-* | capability asset pool |
| Investment / research tools | quant-factor-dashboard, quant-workspace, roigpt, worldmonitor-private | investment asset pool |
| Personal OS / experiments | yuanli-health-os, looki-life-os, self-evolution-max | P2 / observe / asset-pool |

## L3 Observe Examples

| Repo / Type | Reason | Decision |
|---|---|---|
| clone / fork / demo repos | no direct strategic evidence | observe |
| empty or near-empty repos | no current value proof | archive-candidate after human review |
| generic utility names | no clear CBM interface | observe |
| duplicate skill/tool repos | possible consolidation | human-review only |
| no CBM cell + no evidence repos | false-green risk | observe |

## Candidate C3 Gaps

1. C2 Brain repos need ownership and SSOT convergence.
2. Content production repos need content-engine integration contract.
3. Strategy canon source repos need source-of-truth boundary.
4. Client evidence repos need privacy and writeback boundary.
5. Investment research repos need decision-record evidence loop.

## Guardrails

```text
No repo lifecycle mutation.
No green without evidence.
No archive / merge / delete / rename without human approval.
This registry is a review artifact, not an execution authorization.
```