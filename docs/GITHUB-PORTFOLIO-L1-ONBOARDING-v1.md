# GitHub Portfolio L1 Onboarding v1

Date: 2026-06-30  
Parent Issues: #152 / #153 / #154 / #155  
Status: draft onboarding plan / no repo lifecycle mutation

## 0. Purpose

This file executes #155 by converting the first wave of must-govern GitHub repositories into explicit CBM-PMO governance objects.

It does not merge, delete, archive, rename, or mutate any repository. It only defines onboarding status, capability mapping, evidence strength, next C3 Gap, next C4 Task, and writeback target.

```text
L1 onboarding means: repo → CBM Cell → Evidence Strength → C3/C4 → Writeback.
```

## 1. L1 Entry Rule

A repository enters L1 only when all six checks are explicit:

| Check | Required |
|---|---|
| CBM Domain | strategy / knowledge / growth / client / investment / engineering |
| Primary CBM Cell | named or proposed |
| Canon Node / Business Theme | explicit |
| Evidence Strength | none / weak / medium / strong |
| Next Action | C3 Gap or C4 Task |
| Writeback Target | docs / assets / brain / dashboard / issue |

## 2. Onboarding Status Codes

| Status | Meaning |
|---|---|
| L1-ready | Can enter L1 now, but still needs ongoing evidence review |
| L1-source | Important source repo; limited governance load, mostly source boundary |
| L1-candidate | Likely L1, but needs sharper evidence / ownership boundary |
| L1/L2-bridge | Strategically important but should first behave as capability asset |
| not-green | Must not be marked validated / green yet |

## 3. Top L1 Onboarding Register

| # | Repository | L1 Status | CBM Domain | Primary CBM Cell | Secondary Cell | Theme | Evidence | Current Gap | Next C3 Gap | Next C4 Task | Writeback Target | Governance Decision |
|---:|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | moonstachain/yuanli-strategy-soul | L1-ready | strategy | strategy.control.pmo-rhythm-and-risk | knowledge.control.knowledge-map-consistency | Operating Base / CBM-PMO | medium | Portfolio governance now spans many repos | #150/#152 already opened | Maintain registry/policy as PMO source | docs/, brain/, issues | govern |
| 2 | moonstachain/yuanli-strategy-trilogy-private | L1-source | strategy | strategy.direct.os-governance-core | knowledge.direct.knowledge-asset-architecture | private canon source | weak | private/public source boundary unclear | Canon source boundary gap | source extraction map | source/extracts, docs/manuscript | govern-lite |
| 3 | moonstachain/yuanli-strategy-trilogy | L1-source | strategy | strategy.direct.os-governance-core | growth.direct.ip-content-portfolio | public canon expression | weak | drift risk from private source | public/private canon sync gap | public canon contract | docs/, source registry | govern-lite |
| 4 | moonstachain/yuanli-strategy-playbook | L1-source | strategy | strategy.execute.strategy-brief-package | growth.execute.content-draft-package | playbook / strategic application | weak | module mapping unclear | playbook-to-canon gap | module-source map | source/extracts | govern-lite |
| 5 | moonstachain/yuanli-os-greenbook | L1-source | strategy | strategy.direct.os-governance-core | knowledge.control.knowledge-map-consistency | Yuanli OS source | weak | older terms may conflict with constitution | OS term alignment gap | C1-C4 source map | source/SOURCE_REGISTRY.md | govern-lite |
| 6 | moonstachain/yuanli-startup-map-site | L1-source | strategy | strategy.execute.strategy-brief-package | growth.direct.ip-content-portfolio | startup map public site | weak | B1-B4 alignment needed | startup site-to-canon gap | map pages to B modules | docs/modules, source registry | govern-lite |
| 7 | moonstachain/yuanli-startup-greenbook | L1-source | strategy | strategy.direct.os-governance-core | client.control.project-portfolio-governance | startup source | weak | source duplication with site/book | startup source boundary | extract reusable B evidence | source/extracts | govern-lite |
| 8 | moonstachain/yuanli-brain | L1-ready | knowledge | knowledge.direct.knowledge-asset-architecture | strategy.control.pmo-rhythm-and-risk | C2 一个大脑 | medium | C2 source split across repos | C2 ownership map gap | C2 brain ownership map | docs/C2*, brain/ | govern |
| 9 | moonstachain/yuanli-force-brain-ssot | L1-ready | knowledge | knowledge.control.knowledge-map-consistency | engineering.execute.operator-skill-reuse | C2 / SSOT / three seams | medium | default branch / SSOT convergence risk | SSOT convergence gap | map SSOT to C2 schema | docs/C2*, brain/ | govern |
| 10 | moonstachain/llm-wiki | L1-ready | knowledge | knowledge.execute.notebooklm-deep-routing | client.execute.meeting-metadata-recall | evidence source / transcripts | strong | privacy and evidence coding boundary | evidence privacy/coding gap | B2 evidence coding / source router | assets/B2, brain/evidence | govern |
| 11 | moonstachain/yuanli-content-engine-os | L1-candidate | growth | growth.control.content-reuse-pipeline | growth.execute.content-draft-package | content engineering OS | weak | needs binding to #144/#147 | content-engine repo governance gap | content-engine integration contract | docs/CONTENT-ENGINE-v1.md | govern after contract |
| 12 | moonstachain/mingge-cbm-osa-private | L1-ready | strategy | strategy.control.pmo-rhythm-and-risk | client.control.project-portfolio-governance | Mingge CBM / OSA | medium | private sensitive material boundary | private-source evidence boundary | classify to CBM cells | docs/CBM*, brain/evidence | govern |
| 13 | moonstachain/yuanli-os-cbm-company-brain-map | L1-candidate | strategy | strategy.direct.os-governance-core | client.control.project-portfolio-governance | C3 company brain map | weak | overlap with soul CBM docs | CBM map ownership gap | align to CBM registry | docs/CBM-CELL-REGISTRY-v1.md | govern after alignment |
| 14 | moonstachain/yiru-macro-cockpit | L1-candidate | investment | investment.direct.wealth-research-framework | client.control.project-portfolio-governance | macro cockpit | medium | dual investment/client role | investment/client boundary gap | define decision record template | investment evidence docs | govern in investment lane |
| 15 | moonstachain/wechat-writer | L1/L2-bridge | growth | growth.execute.content-draft-package | engineering.execute.operator-skill-reuse | WeChat content production | weak | tool not yet tied to feedback loop | content tool integration gap | reuse contract with content-engine | docs/CAPABILITY-ASSET-POOL-v1.md | asset-pool then promote |
| 16 | moonstachain/nas-video-autoclip | L1/L2-bridge | growth | growth.control.content-reuse-pipeline | engineering.execute.operator-skill-reuse | video clipping | weak | no content feedback/evidence loop | video evidence loop gap | reuse contract with content calendar | content-engine evidence | asset-pool then promote |

## 4. Immediate C3 Gap Candidates

| Priority | Gap | Source Repos | Why It Matters | Suggested Issue |
|---|---|---|---|---|
| P0 | C2 Brain ownership and SSOT convergence | yuanli-brain / yuanli-force-brain-ssot / llm-wiki | C2 must know which repo is schema, evidence, transcript, and output | `[C3 Gap] C2 Brain repos need ownership and SSOT convergence` |
| P0 | Content-engine repo integration | yuanli-content-engine-os / wechat-writer / nas-video-autoclip | Content engineering must not split into tool islands | `[C3 Gap] Content production repos need content-engine integration contract` |
| P1 | Canon source boundary | trilogy-private / trilogy / playbook / greenbook / startup repos | Canon sources can drift if no source hierarchy exists | `[C3 Gap] Strategy canon source repos need source-of-truth boundary` |
| P1 | Client evidence privacy boundary | mingge-cbm-osa-private / llm-wiki / company brain repos | Client evidence must be reusable without leakage | `[C3 Gap] Client evidence repos need privacy and writeback boundary` |
| P1 | Investment cockpit decision evidence | yiru-macro-cockpit / quant/research repos | Cockpit output needs decision records, not just dashboards | `[C3 Gap] Investment research repos need decision-record evidence loop` |

## 5. Immediate C4 Task Candidates

| Priority | Task | Output |
|---|---|---|
| P0 | Build C2 repo ownership map | `docs/C2-REPO-OWNERSHIP-MAP-v1.md` |
| P0 | Build content-engine integration contract | `docs/CONTENT-ENGINE-REPO-INTEGRATION-CONTRACT-v1.md` |
| P1 | Build canon source hierarchy map | `docs/CANON-SOURCE-HIERARCHY-v1.md` |
| P1 | Build client evidence privacy boundary | `docs/CLIENT-EVIDENCE-PRIVACY-BOUNDARY-v1.md` |
| P1 | Build investment decision record template | `docs/INVESTMENT-DECISION-RECORD-TEMPLATE-v1.md` |

## 6. Dashboard Onboarding Fields

L1 repos should appear in dashboard with these fields:

```text
repo
portfolio_layer
cbm_domain
primary_cbm_cell
evidence_strength
current_gap
next_c3_gap
next_c4_task
writeback_target
false_green_risk
last_reviewed_at
```

## 7. False-green Review

Current false-green risk exists for all active repos with weak evidence.

Repos that must not be marked green yet:

```text
yuanli-strategy-trilogy-private
yuanli-strategy-trilogy
yuanli-strategy-playbook
yuanli-os-greenbook
yuanli-startup-map-site
yuanli-startup-greenbook
yuanli-content-engine-os
yuanli-os-cbm-company-brain-map
wechat-writer
nas-video-autoclip
```

## 8. Done Criteria for #155

#155 is ready for review when:

```text
- at least 15 L1 repos are mapped
- each repo has CBM Domain / Primary CBM Cell
- each repo has Evidence Strength
- each repo has Next C3 Gap or C4 Task
- no repo is marked validated without evidence
- lifecycle mutation remains zero
```

## 9. Current Decision

```text
#155 first-pass onboarding is complete as a draft.
Next: use this file to generate issue candidates and dashboard patch plan under #157.
```