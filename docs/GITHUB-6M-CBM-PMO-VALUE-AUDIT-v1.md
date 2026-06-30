# GitHub 6M CBM-PMO Value Audit v1

Date: 2026-06-30  
Window: `pushed:>=2025-12-30`  
Parent Issues: #150 / #151 / #152 / #153  
Status: draft registry / human-gated governance

## 0. Purpose

This registry converts the last six months of GitHub activity from a loose repo list into a CBM-PMO governed portfolio view.

The goal is not to govern every repo equally. The goal is to decide which repos represent strategic capability, which repos are reusable capability assets, and which repos should remain indexed but outside the main PMO load.

```text
Repo activity is not value.
Repo value = CBM Cell + Evidence + Next C3/C4 + Writeback Target + Reuse Path.
```

## 1. Governance Layers

| Layer | Name | Meaning | Governance Load |
|---|---|---|---|
| L1 | Core CBM-PMO Governance | Strategic canon, C2 brain, content engine, client evidence, investment decision systems | C3 Gap / C4 Task / Evidence / Evolution / Dashboard / Weekly Review |
| L2 | Capability Asset Pool | Agency, skill, tool, automation, writer, publisher, dashboard, deploy, data middleware | Asset index / reuse contract / called-by project / evidence when used |
| L3 | Observe / Archive Candidate | clone, demo, empty, duplicated, one-off, no user, no evidence, no writeback | Index only / no PMO load / quarterly human review |

## 2. Registry Schema

| Field | Definition |
|---|---|
| Repository | GitHub repo full name |
| Visibility | public / private |
| Repo Role | canon / brain / evidence / content / client / investment / engineering / skill / tool / demo / clone / archive-candidate |
| Portfolio Layer | L1 / L2 / L3 |
| CBM Domain | strategy / knowledge / growth / client / investment / engineering / personal-os / observe |
| Primary CBM Cell | Primary capability cell, if known |
| Secondary CBM Cell | Supporting cell, if known |
| Canon Node / Business Theme | Related Yuanli canon node or business theme |
| Status | active / seed / draft / operating / dormant / unknown |
| Evidence Strength | none / weak / medium / strong |
| Current Use | Current known use in the portfolio |
| Risk / Duplication | Risk, overlap, false-green risk, or duplication |
| Next C3 Gap | Next judgement gap to open or connect |
| Next C4 Task | Next executable task |
| Writeback Target | Where outputs should land |
| Governance Decision | govern / asset-pool / observe / archive-candidate / human-review |

## 3. L1 · Core CBM-PMO Governance

These repos should enter the main CBM-PMO view first. They directly affect Yuanli canon, C2 brain, content engineering, client evidence, or investment decision systems.

| Repository | Visibility | Repo Role | Layer | CBM Domain | Primary CBM Cell | Secondary CBM Cell | Canon Node / Theme | Status | Evidence | Current Use | Risk / Duplication | Next C3 Gap | Next C4 Task | Writeback Target | Decision |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| moonstachain/yuanli-strategy-soul | public | canon / PMO | L1 | strategy | strategy.control.pmo-rhythm-and-risk | knowledge.control.knowledge-map-consistency | cross-trilogy / C3 / C4 | operating | medium | Operating Base, Issues, CBM-PMO, evidence/evolution | Too many entrypoints can fragment governance | Portfolio intake needs registry/policy | Execute #153/#154/#155 | docs/, brain/, issues | govern |
| moonstachain/yuanli-strategy-trilogy-private | private | canon source | L1 | strategy | strategy.direct.os-governance-core | knowledge.direct.knowledge-asset-architecture | A/B/C 12 modules | active | weak | private trilogy source | private source must not leak sensitive content | Canon-source boundary | Map source to canon registry | source/, docs/manuscript/ | govern |
| moonstachain/yuanli-strategy-trilogy | public | canon product | L1 | strategy | strategy.direct.os-governance-core | growth.direct.ip-content-portfolio | public trilogy expression | active | weak | public trilogy repo | can drift from private source | public/private sync | define source-of-truth contract | docs/, source registry | govern |
| moonstachain/yuanli-strategy-playbook | public | canon / playbook | L1 | strategy | strategy.execute.strategy-brief-package | growth.execute.content-draft-package | Yuanli strategy playbook | active | weak | playbook material | may duplicate trilogy modules | playbook-to-canon mapping | create module-source map | source/extracts | govern |
| moonstachain/yuanli-os-greenbook | public | canon / OS book | L1 | strategy | strategy.direct.os-governance-core | knowledge.direct.knowledge-asset-architecture | C1-C4 Yuanli OS | active | weak | OS source text | older OS terms may conflict with current constitution | OS term alignment | map greenbook to C1-C4 | source/SOURCE_REGISTRY.md | govern |
| moonstachain/yuanli-os-orange-book | private | canon / OS source | L1 | strategy | strategy.direct.os-governance-core | knowledge.control.knowledge-map-consistency | Yuanli OS variants | seed | weak | OS source variant | overlap with greenbook | color-book source governance | classify as source or deprecated variant | source registry | govern-lite |
| moonstachain/yuanli-startup-map-site | public | canon / external site | L1 | strategy | strategy.execute.strategy-brief-package | growth.direct.ip-content-portfolio | B1-B4 startup map | active | weak | startup map external expression | can drift from current B modules | B module alignment | map site pages to B1-B4 | docs/modules, source registry | govern |
| moonstachain/yuanli-startup-greenbook | private | canon / startup source | L1 | strategy | strategy.direct.os-governance-core | client.control.project-portfolio-governance | B1-B4 startup | seed | weak | startup manuscript/source | private/public mismatch | source boundary | extract to B module evidence | source/extracts | govern-lite |
| moonstachain/yuanli-startup-map-book | private | canon / book | L1 | strategy | strategy.execute.strategy-brief-package | growth.execute.content-draft-package | B1-B4 startup book | seed | weak | book source | potential duplication with startup site | manuscript consolidation | create book-source map | docs/manuscript | govern-lite |
| moonstachain/yuanli-narrative-strategy-map | public | canon / narrative map | L1 | strategy | strategy.execute.strategy-brief-package | growth.direct.ip-content-portfolio | narrative strategy / B2 | seed | weak | narrative map | concept drift from canon | narrative-to-canon mapping | classify narrative atoms | source/extracts | govern-lite |
| moonstachain/yuanli-brain | private | brain | L1 | knowledge | knowledge.direct.knowledge-asset-architecture | strategy.control.pmo-rhythm-and-risk | C2 一个大脑 | active | medium | C2 brain material | C2 SSOT split across repos | C2 SSOT boundary | define brain ownership map | docs/C2*, brain/ | govern |
| moonstachain/yuanli-force-brain-ssot | private | brain / SSOT | L1 | knowledge | knowledge.control.knowledge-map-consistency | engineering.execute.operator-skill-reuse | C2 / three seams | active | medium | SSOT brain source | default branch is feature branch; risk of divergence | SSOT convergence | map SSOT to C2 schema | docs/C2*, brain/ | govern |
| moonstachain/llm-wiki | private | evidence source | L1 | knowledge | knowledge.execute.notebooklm-deep-routing | client.execute.meeting-metadata-recall | external evidence / B2 / client | operating | strong | transcripts, client records, evidence source | privacy and sensitivity risk | evidence coding boundary | B2 external evidence coding | assets/B2, brain/evidence | govern |
| moonstachain/yuanli-content-engine-os | private | content OS | L1 | growth | growth.control.content-reuse-pipeline | growth.execute.content-draft-package | content engineering / cross-trilogy | seed | weak | content-engine repo | may duplicate #144 if not mapped | content-engine governance | connect to #144/#147 | docs/CONTENT-ENGINE-v1.md | govern |
| moonstachain/mingge-cbm-osa-private | private | strategy/client source | L1 | strategy | strategy.control.pmo-rhythm-and-risk | client.control.project-portfolio-governance | CBM / OSA / Mingge | active | medium | private CBM/OSA material | sensitive client/internal material | private-source boundary | classify source to CBM cells | docs/CBM*, brain/evidence | govern |
| moonstachain/yuanli-os-cbm-company-brain-map | private | CBM map | L1 | strategy | strategy.direct.os-governance-core | client.control.project-portfolio-governance | C3 / company brain map | seed | weak | CBM company brain map | duplicate with soul CBM docs | map ownership | align to CBM registry | docs/CBM-CELL-REGISTRY-v1.md | govern |
| moonstachain/yuanli-os-three-seams-roadmap | private | roadmap | L1 | strategy | strategy.control.pmo-rhythm-and-risk | knowledge.control.knowledge-map-consistency | OS three seams | seed | weak | roadmap source | can become parallel planning doc | roadmap alignment | connect seams to C2/C3/C4 | docs/roadmap | govern-lite |
| moonstachain/yiru-macro-cockpit | private | investment / cockpit | L1 | investment | investment.direct.wealth-research-framework | client.control.project-portfolio-governance | macro cockpit / Yiru | operating | medium | macro cockpit | overlaps investment + client domains | dual-domain governance | define investment/client boundary | investment docs/evidence | govern |
| moonstachain/wechat-writer | public | content tool | L1/L2 | growth | growth.execute.content-draft-package | engineering.execute.operator-skill-reuse | WeChat content | seed | weak | WeChat writer | should be content-engine asset not standalone PMO | content tool integration | create reuse contract | docs/CAPABILITY-ASSET-POOL-v1.md | asset-pool then govern when called |
| moonstachain/nas-video-autoclip | public | content automation | L1/L2 | growth | growth.control.content-reuse-pipeline | engineering.execute.operator-skill-reuse | video clipping / content engine | seed | weak | video automation | no feedback chain yet | video evidence loop | connect to content calendar | content-engine evidence | asset-pool then govern when called |

## 4. L2 · Capability Asset Pool

These repos should be indexed as reusable capabilities. They are valuable, but they should not create main PMO load until called by a P0/P1 project.

| Repository | Visibility | Repo Role | Layer | CBM Domain | Primary CBM Cell | Theme | Status | Evidence | Current Use | Risk / Duplication | Next Action | Writeback Target | Decision |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| moonstachain/yuanli-interface-skills | public | skill pack | L2 | engineering | engineering.direct.skill-mcp-reuse-strategy | interface skills | active | weak | skill source | may duplicate skills-mirror | index contracts | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/yuanli-skill-server | private | skill server | L2 | engineering | engineering.execute.operator-skill-reuse | skill serving | seed | weak | skill infra | unclear current use | define I/O | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/codex-plugin-cc | public | codex tool | L2 | engineering | engineering.execute.operator-skill-reuse | Codex plugin | seed | weak | Codex integration | duplicate with future operator skills | reuse contract | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/github-feishu-sync | private | sync tool | L2 | engineering | engineering.control.github-channel-share-sync | GitHub/Feishu sync | seed | weak | sync utility | security / token risk | security review if used | engineering evidence | asset-pool |
| moonstachain/feishu-bitable-bridge | private | bridge | L2 | engineering | engineering.control.github-channel-share-sync | Feishu bitable bridge | seed | weak | data bridge | operational risk | define data contract | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/feishu-dashboard-automator | private | dashboard automator | L2 | engineering | engineering.control.github-channel-share-sync | Feishu dashboard | seed | weak | dashboard automation | may overlap PMO dashboard | map to dashboard use | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/yuanli-data-middleware | public | middleware | L2 | engineering | engineering.execute.operator-skill-reuse | data middleware | seed | weak | data integration | unclear owner | define interfaces | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/cloudflare-deploy | private | deploy tool | L2 | engineering | engineering.execute.operator-skill-reuse | deployment | seed | weak | deploy helper | infra drift | only call by deploy tasks | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/aliyun-h5-autodeploy | public | deploy tool | L2 | engineering | engineering.execute.operator-skill-reuse | H5 deploy | seed | weak | deploy helper | duplicate deploy tools | consolidate deploy patterns | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/db-reverse-engineer | public | tool | L2 | engineering | engineering.execute.operator-skill-reuse | DB reverse engineering | seed | weak | DB analysis | one-off risk | promote only when used | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/gh-fix-ci | private | GitHub skill | L2 | engineering | engineering.execute.operator-skill-reuse | CI fix workflow | seed | weak | PR/CI workflow | standalone skill repo | index as GitHub skill | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/gh-address-comments | private | GitHub skill | L2 | engineering | engineering.execute.operator-skill-reuse | review comments | seed | weak | review workflow | standalone skill repo | index as GitHub skill | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/skill-pattern-publisher | public | skill publisher | L2 | engineering | engineering.direct.skill-mcp-reuse-strategy | skill publishing | seed | weak | skill distribution | unclear use | define publishing contract | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/strategy-skill-template | public | template | L2 | engineering | engineering.direct.skill-mcp-reuse-strategy | skill template | seed | weak | template | template sprawl | use as canonical template candidate | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/cc-harness-skills | public | skill harness | L2 | engineering | engineering.execute.operator-skill-reuse | harness skills | seed | weak | test harness | overlap with skills-mirror | map harness role | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/yuanli-os-skills-pack | private | skill pack | L2 | engineering | engineering.direct.skill-mcp-reuse-strategy | Yuanli skills | seed | weak | skill pack | overlaps share skills | compare packages | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/yuanli-share-skills | private | skill pack | L2 | engineering | engineering.direct.skill-mcp-reuse-strategy | shared skills | active | weak | skill pack | duplicate with skills-mirror | index and dedupe | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/skills-mirror | private | mirror | L2 | engineering | engineering.direct.skill-mcp-reuse-strategy | skills mirror | active | weak | skill mirror | source-of-truth unclear | define mirror policy | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/yuanli-os-starter | private | starter | L2 | engineering | engineering.execute.operator-skill-reuse | OS starter | active | weak | starter kit | may duplicate OS repos | define starter role | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/yuanli-os-ops | private | ops | L2 | engineering | engineering.control.github-channel-share-sync | OS operations | seed | weak | ops material | unclear current use | ops map | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/yuanli-os-claude | private | tool / agent | L2 | engineering | engineering.execute.operator-skill-reuse | Claude workflow | seed | weak | Claude integration | obsolete risk | review current relevance | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/yuanli-os-platform-handoff | private | handoff | L2 | engineering | engineering.execute.operator-skill-reuse | platform handoff | seed | weak | handoff package | branch default feature branch | handoff closeout review | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/claude-code | public | agent/tool | L2 | engineering | engineering.execute.operator-skill-reuse | Claude Code | active | weak | imported/reference tool | external project drift | keep as reference asset | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/claude-code-run-version | private | tool | L2 | engineering | engineering.execute.operator-skill-reuse | Claude Code runtime | active | weak | runtime backup | large repo / uncertain role | review before use | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/hermes-agent | public | agent | L2 | engineering | engineering.direct.skill-mcp-reuse-strategy | agent platform | active | weak | agent reference | external/experimental | index as agent reference | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/deer-flow | public | agent workflow | L2 | engineering | engineering.direct.skill-mcp-reuse-strategy | workflow agent | active | weak | reference repo | may not be owned product | index as reference | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/GEOFlow | public | growth / agent | L2 | growth | growth.control.content-reuse-pipeline | GEO / content distribution | active | weak | GEO workflow | may be product experiment | connect to content engine if used | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/wechat-radar-dashboard-skill | public | dashboard skill | L2 | growth | growth.control.content-reuse-pipeline | WeChat radar | seed | weak | channel insight tool | overlap with wx-radar-dashboard | dedupe radar tools | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/wx-radar-dashboard | private | dashboard | L2 | growth | growth.control.content-reuse-pipeline | WeChat radar | seed | weak | WeChat dashboard | duplicate with skill repo | choose owner | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/xhs-remote-publisher | public | publisher | L2 | growth | growth.execute.content-draft-package | Xiaohongshu publishing | seed | weak | publishing helper | platform risk | use only via content-engine | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/high-density-mckinsey-report-designer | public | report tool | L2 | growth | growth.execute.content-draft-package | high-density report | active | weak | report design | duplication with dashboard designer | create style contract | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/high-info-density-dashboard-designer | public | dashboard tool | L2 | growth | growth.execute.content-draft-package | dashboard design | active | weak | dashboard style | duplication with report designer | create reusable style spec | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/ai-website-cloner-template | public | template | L2 | engineering | engineering.execute.operator-skill-reuse | website cloning | active | weak | prototype template | clone risk | only call under product-design tasks | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/ai-da-guan-jia | private | product / assistant | L2 | personal-os | engineering.execute.operator-skill-reuse | AI housekeeper | active | weak | product experiment | unclear strategic link | intake before promotion | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/Understand-Anything | public | tool/product | L2 | knowledge | knowledge.direct.knowledge-asset-architecture | understand anything | active | weak | knowledge tool | overlap with C2 brain | map to C2 or keep reference | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/CLI-Anything | public | tool | L2 | engineering | engineering.execute.operator-skill-reuse | CLI generation | active | weak | automation tool | broad scope | use as utility only | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/MiroFish | public | product/tool | L2 | engineering | engineering.execute.operator-skill-reuse | visual workspace | active | weak | visual tool | unclear CBM tie | keep as asset | CAPABILITY-ASSET-POOL | asset-pool |
| moonstachain/ViewTurbo | public | product/tool | L2 | engineering | engineering.execute.operator-skill-reuse | viewing/tooling | active | weak | reference/product | unclear strategic tie | keep as asset | CAPABILITY-ASSET-POOL | asset-pool |

## 5. L2 · Agency Role-based Agent Repos

These repos should be grouped as role capabilities. They are not main PMO projects unless invoked by an L1/L2 governed workflow.

| Repository | Visibility | Repo Role | Layer | Category | Primary Use | Evidence | Promotion Rule | Decision |
|---|---|---|---|---|---|---|---|---|
| moonstachain/agency-design-ux-architect | private | agency agent | L2 | design | UX architecture | weak | promote when used in product/design workstream | asset-pool |
| moonstachain/agency-design-ui-designer | private | agency agent | L2 | design | UI design | weak | promote when used by product prototype | asset-pool |
| moonstachain/agency-design-image-prompt-engineer | private | agency agent | L2 | design | image prompt | weak | promote when used by content/design engine | asset-pool |
| moonstachain/agency-design-whimsy-injector | private | agency agent | L2 | design | creative polish | weak | promote when reused in design workflow | asset-pool |
| moonstachain/agency-marketing-content-creator | private | agency agent | L2 | marketing | content creation | weak | promote when called by content-engine | asset-pool |
| moonstachain/agency-marketing-growth-hacker | private | agency agent | L2 | marketing | growth experiments | weak | promote when linked to growth evidence | asset-pool |
| moonstachain/agency-marketing-social-media-strategist | private | agency agent | L2 | marketing | social strategy | weak | promote when linked to content channels | asset-pool |
| moonstachain/agency-marketing-tiktok-strategist | private | agency agent | L2 | marketing | short-video strategy | weak | promote when used by short-video line | asset-pool |
| moonstachain/agency-marketing-app-store-optimizer | private | agency agent | L2 | marketing | ASO | weak | promote only for app/project | asset-pool |
| moonstachain/agency-product-sprint-prioritizer | private | agency agent | L2 | product | sprint prioritization | weak | promote when used in P0/P1 sprint | asset-pool |
| moonstachain/agency-product-feedback-synthesizer | private | agency agent | L2 | product | feedback synthesis | weak | promote when used in evidence review | asset-pool |
| moonstachain/agency-project-management-project-shepherd | private | agency agent | L2 | project management | project shepherd | weak | promote when linked to PMO review | asset-pool |
| moonstachain/agency-project-management-experiment-tracker | private | agency agent | L2 | project management | experiment tracking | weak | promote when linked to growth experiments | asset-pool |
| moonstachain/agency-engineering-devops-automator | private | agency agent | L2 | engineering | DevOps automation | weak | promote when used by deploy workstream | asset-pool |
| moonstachain/agency-engineering-mobile-app-builder | private | agency agent | L2 | engineering | mobile app build | weak | promote only for app project | asset-pool |
| moonstachain/agency-engineering-senior-developer | private | agency agent | L2 | engineering | senior dev | weak | promote when used by implementation task | asset-pool |
| moonstachain/agency-engineering-rapid-prototyper | private | agency agent | L2 | engineering | prototyping | weak | promote when called by product-design | asset-pool |
| moonstachain/agency-testing-api-tester | private | agency agent | L2 | testing | API testing | weak | promote when used in CI/test task | asset-pool |
| moonstachain/agency-testing-reality-checker | private | agency agent | L2 | testing | reality check | weak | promote when used in validation | asset-pool |
| moonstachain/agency-testing-performance-benchmarker | private | agency agent | L2 | testing | performance testing | weak | promote when used in benchmark | asset-pool |
| moonstachain/agency-testing-workflow-optimizer | private | agency agent | L2 | testing | workflow optimization | weak | promote when used in PMO/ops | asset-pool |
| moonstachain/agency-testing-test-results-analyzer | private | agency agent | L2 | testing | test result analysis | weak | promote when linked to CI evidence | asset-pool |
| moonstachain/agency-support-support-responder | private | agency agent | L2 | support | support response | weak | promote when used with customer support | asset-pool |
| moonstachain/agency-support-executive-summary-generator | private | agency agent | L2 | support | executive summary | weak | promote when used in report workflow | asset-pool |
| moonstachain/agency-support-legal-compliance-checker | private | agency agent | L2 | support | compliance check | weak | promote when required by publishing/client work | asset-pool |
| moonstachain/agency-data-consolidation-agent | private | agency agent | L2 | data | data consolidation | weak | promote when used by C2/PMO data | asset-pool |
| moonstachain/agency-report-distribution-agent | private | agency agent | L2 | report | report distribution | weak | promote when used by content/report line | asset-pool |
| moonstachain/agency-sales-data-extraction-agent | private | agency agent | L2 | sales | data extraction | weak | promote when used in client/growth evidence | asset-pool |
| moonstachain/agency-xr-immersive-developer | private | agency agent | L2 | XR | immersive dev | weak | promote only for XR project | asset-pool |
| moonstachain/agency-xr-interface-architect | private | agency agent | L2 | XR | XR interface | weak | promote only for XR project | asset-pool |
| moonstachain/agency-xr-cockpit-interaction-specialist | private | agency agent | L2 | XR | cockpit interaction | weak | promote only for XR project | asset-pool |

## 6. Investment / Research Pool

These repos may become L1 for the investment domain, but they should not interrupt current Yuanli Strategy P0 work unless they have active decision/evidence loops.

| Repository | Visibility | Repo Role | Layer | CBM Domain | Primary CBM Cell | Status | Evidence | Current Use | Risk | Decision |
|---|---|---|---|---|---|---|---|---|---|---|
| moonstachain/yiru-macro-cockpit | private | investment cockpit | L1 | investment | investment.direct.wealth-research-framework | operating | medium | macro cockpit | dual client/investment role | govern |
| moonstachain/quant-factor-dashboard | private | dashboard | L2 | investment | investment.execute.research-output-package | active | weak | factor dashboard | no explicit PMO loop | asset-pool |
| moonstachain/quant-workspace | private | research workspace | L2 | investment | investment.execute.research-output-package | seed | weak | quant workspace | tool sprawl | asset-pool |
| moonstachain/youquant-backtest | public | backtest | L2 | investment | investment.execute.research-output-package | seed | weak | backtest | no decision record | asset-pool |
| moonstachain/youquant-backtest-automation | public | automation | L2 | investment | investment.execute.research-output-package | seed | weak | backtest automation | no decision record | asset-pool |
| moonstachain/xueqiu-smart-money-2026 | private | research | L2 | investment | investment.control.research-risk-router | active | weak | smart money research | time-sensitive inputs | human-review |
| moonstachain/yuanli-research-max | public | research | L2 | investment | investment.direct.wealth-research-framework | seed | weak | research hub | broad scope | asset-pool |
| moonstachain/roigpt | private | research/tool | L2 | investment | investment.execute.research-output-package | active | weak | ROI/research tool | unclear owner | asset-pool |
| moonstachain/worldmonitor-private | private | monitor | L2 | investment | investment.control.research-risk-router | active | weak | world monitor | time-sensitive / source quality | human-review |
| moonstachain/zhuoliqi-quant-intel | private | research | L2 | investment | investment.execute.research-output-package | seed | weak | quant intel | unclear relevance | observe/asset-pool |

## 7. Personal OS / Health / Experimental Product Pool

These repos should remain P2 or L2/L3 until they show sustained use, evidence, and writeback into a strategic lane.

| Repository | Visibility | Repo Role | Layer | CBM Domain | Status | Evidence | Current Use | Governance Decision |
|---|---|---|---|---|---|---|---|---|
| moonstachain/yuanli-health-os | public | personal OS | L2 | personal-os | active | weak | health OS | asset-pool / P2 |
| moonstachain/yuanli-health-apple | private | health data | L2 | personal-os | active | weak | Apple health data | asset-pool / P2 |
| moonstachain/looki-life-os | private | life OS | L2 | personal-os | active | weak | life OS | asset-pool / P2 |
| moonstachain/self-evolution-max | private | self evolution | L2 | personal-os | seed | weak | personal growth | asset-pool / P2 |
| moonstachain/suishen-jinnang | private | app/tool | L2 | personal-os | active | weak | personal tool | human-review |
| moonstachain/os-sm-84000-art | private | art/project | L3 | observe | seed | none | art experiment | observe |
| moonstachain/force-claw | private | product/tool | L2 | engineering | seed | weak | force tool | asset-pool |
| moonstachain/ai-metacognitive-core | private | cognition | L2 | knowledge | seed | weak | metacognition | asset-pool |
| moonstachain/cascading-causal-cockpit | public | cockpit | L2 | strategy | seed | weak | causal cockpit | asset-pool / possible C3 |
| moonstachain/pretext | public | writing/tool | L2 | growth | active | weak | pretext/writing | asset-pool |
| moonstachain/sb7-storybrand | public | narrative tool | L2 | growth | seed | weak | StoryBrand | asset-pool |
| moonstachain/os-yuanli-share-max | public | share asset | L2 | growth | seed | weak | OS share | asset-pool |
| moonstachain/os-yuanli-info-5l | public | info 5 layers | L2 | knowledge | seed | weak | information five layers | asset-pool |

## 8. L3 · Observe / Archive Candidate Examples

These are not decisions to archive. They are flags for low PMO load and quarterly human review.

| Repository / Type | Reason | Decision |
|---|---|---|
| moonstachain/yuan-li-os-clone-01 | empty/clone-like | observe |
| moonstachain/clone-alpha | clone/test signal | observe |
| moonstachain/doc | generic name / unclear purpose | observe |
| moonstachain/pdf | generic name / unclear purpose | observe |
| moonstachain/spreadsheet | generic name / unclear purpose | observe |
| moonstachain/screenshot | generic name / support utility | observe |
| moonstachain/playwright | generic tool repo | observe / asset-pool only when called |
| moonstachain/playwright-interactive | generic tool repo | observe / asset-pool only when called |
| moonstachain/openai-docs | reference/docs | observe |
| moonstachain/claude-env-backup | environment backup | observe / infra asset |
| moonstachain/github-skill-naming-audit | narrow audit tool | observe until called |
| moonstachain/openclaw-feishu-coach | empty/unclear | observe |
| moonstachain/qiqiao-linglong | unclear strategy interface | observe |
| moonstachain/jiyao-youyao-haiyao | small/unclear | observe |
| moonstachain/jiyao-youyao-haiyao-zaiyao | small/unclear duplicate | observe |
| clone / fork / template repos | no direct strategic evidence | observe unless called |
| empty repos | no current value proof | archive-candidate after human review |
| one-off deployment repos | utility only | asset-pool or observe |
| duplicated skill repos | possible consolidation | human-review only |
| no CBM cell + no evidence repos | false-green risk | observe |

## 9. Top 15 Must-Govern Repos v1

```text
1. moonstachain/yuanli-strategy-soul
2. moonstachain/yuanli-strategy-trilogy-private
3. moonstachain/yuanli-strategy-trilogy
4. moonstachain/yuanli-strategy-playbook
5. moonstachain/yuanli-os-greenbook
6. moonstachain/yuanli-startup-map-site
7. moonstachain/yuanli-startup-greenbook
8. moonstachain/yuanli-brain
9. moonstachain/yuanli-force-brain-ssot
10. moonstachain/llm-wiki
11. moonstachain/yuanli-content-engine-os
12. moonstachain/mingge-cbm-osa-private
13. moonstachain/yuanli-os-cbm-company-brain-map
14. moonstachain/yiru-macro-cockpit
15. moonstachain/wechat-writer
16. moonstachain/nas-video-autoclip
```

Note: `wechat-writer` and `nas-video-autoclip` are both included because content engineering needs text and video production chains. The Top 15 slot is intentionally treated as a 15+1 content pair for the first pass.

## 10. Top Candidate C3 Gaps

| Candidate | Why |
|---|---|
| C3 Gap: Strategy canon sources need source-of-truth boundary | public/private/playbook/greenbook/startup repos can diverge |
| C3 Gap: C2 Brain repos need SSOT convergence | `yuanli-brain`, `yuanli-force-brain-ssot`, `llm-wiki` must have clear roles |
| C3 Gap: Content tools need content-engine integration | `wechat-writer`, `nas-video-autoclip`, XHS/publisher tools need one chain |
| C3 Gap: Customer/company-brain repos need evidence privacy boundary | customer evidence should be usable without leaking sensitive material |
| C3 Gap: Investment/research repos need decision record and risk router | macro/quant outputs need decision evidence, not just dashboards |
| C3 Gap: Agency repo sprawl needs capability asset pool | dozens of role repos will pollute PMO if not indexed |
| C3 Gap: Skill/tool duplication needs reuse contract | skills, mirrors, deploy tools, bridges need clear ownership |
| C3 Gap: false-green risk across active repos | active repos can look healthy without evidence |
| C3 Gap: repo creation lacks intake rubric | new repos can bypass CBM-PMO |
| C3 Gap: observe/archive candidates need human-gated review | prevent accidental deletion while reducing noise |

## 11. Top Candidate C4 Tasks

| Candidate | Output |
|---|---|
| Create `docs/REPO-GOVERNANCE-POLICY-v1.md` | policy and intake rubric |
| Create `docs/CAPABILITY-ASSET-POOL-v1.md` | L2 asset pool registry |
| Onboard Top 15 must-govern repos into CBM-PMO | L1 mapped registry entries |
| Add GitHub portfolio metrics to dashboard data | cockpit and PMO dashboard patch |
| Build weekly Portfolio Review template | recurring review format |
| Build monthly Repo Governance Review template | L2/L3 review format |
| Create content-engine repo integration contract | growth chain alignment |
| Create C2 repo ownership map | C2 SSOT convergence |
| Create client evidence privacy boundary | client evidence governance |
| Create investment research decision record template | investment evidence loop |

## 12. Current Governance Decision

```text
Proceed with #154 policy before broad repo onboarding.
Do not mutate repositories.
Do not archive/merge/delete/rename any repository.
Do not mark any repo green or validated without evidence review.
Use this registry as a draft working source for #155/#156/#157.
```
