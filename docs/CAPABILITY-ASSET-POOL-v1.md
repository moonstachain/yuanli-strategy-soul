# Capability Asset Pool v1

Date: 2026-06-30  
Parent Issues: #152 / #153 / #154 / #156  
Status: draft asset pool / no repo lifecycle mutation

## 0. Purpose

This file executes #156 by converting long-tail Agency / Skill / Tool / Automation / Writer / Publisher / Dashboard / Deployment repositories into a reusable capability asset pool.

These repos are valuable, but they should not enter the main CBM-PMO board until called by a P0/P1 governed workflow and supported by evidence.

```text
Capability Asset Pool = reusable repo assets without main-PMO noise.
```

## 1. Promotion Rule

A capability asset can be promoted to C4 Task or L1 governance only when:

```text
1. It is called by a P0/P1 governed project.
2. It has a clear input contract.
3. It has a clear output contract.
4. It produces evidence or reusable output.
5. It has a writeback target.
6. Human approves promotion.
```

## 2. Asset Pool Schema

| Field | Meaning |
|---|---|
| Repository | GitHub full name |
| Asset Type | agency agent / skill pack / automation / content tool / dashboard / deploy / middleware / research tool |
| Capability Category | design / marketing / engineering / testing / support / data / project / growth / investment / knowledge |
| What It Does | one-line capability |
| Reusable By | which L1/P0/P1 workflow can call it |
| Input Contract | what input it needs |
| Output Contract | what output it creates |
| Status | seed / draft / active / unknown |
| Evidence | none / weak / medium / strong |
| Risk | duplication / security / stale / unclear owner / platform risk |
| Called By | current known caller |
| Promotion Rule | trigger for C4/L1 promotion |
| Decision | asset-pool / observe / human-review |

## 3. Content / Growth Assets

| Repository | Asset Type | Category | What It Does | Reusable By | Input Contract | Output Contract | Status | Evidence | Risk | Called By | Promotion Rule | Decision |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| moonstachain/wechat-writer | content tool | growth | WeChat article writing | #144 content engine / #147 content cockpit | topic map + source evidence + channel style | WeChat draft | seed | weak | no feedback loop | none yet | called by content calendar and captures publish feedback | asset-pool |
| moonstachain/nas-video-autoclip | automation | growth | video autoclip pipeline | short-video content line | source video + clip rules + transcript | short-video clips / cut list | seed | weak | no evidence chain | none yet | used by 30-day content calendar | asset-pool |
| moonstachain/xhs-remote-publisher | publisher | growth | Xiaohongshu publishing helper | content engine | xhs cards + account/session config | publish-ready or published item | seed | weak | platform risk | none yet | used under human-gated publishing workflow | asset-pool |
| moonstachain/high-density-mckinsey-report-designer | report tool | growth | high-density report design | content/report line | analysis brief + source material | report layout/spec | active | weak | style duplication | none yet | reused for official Yuanli report package | asset-pool |
| moonstachain/high-info-density-dashboard-designer | dashboard tool | growth | dashboard visual design | CBM dashboard / content products | metrics + layout goals | dashboard spec | active | weak | overlaps report designer | none yet | used by #157 dashboard patch | asset-pool |
| moonstachain/wechat-radar-dashboard-skill | dashboard skill | growth | WeChat radar dashboard skill | content feedback loop | WeChat data + query | dashboard/readout | seed | weak | duplicate with wx-radar | none yet | selected as canonical WeChat radar tool | asset-pool |
| moonstachain/wx-radar-dashboard | dashboard | growth | WeChat radar dashboard | content feedback loop | WeChat data | dashboard | seed | weak | duplicate with skill repo | none yet | used for actual feedback evidence | human-review |
| moonstachain/GEOFlow | growth tool | growth | GEO/AI-native distribution workflow | content engine / GEO line | content asset + channel targets | GEO distribution workflow | active | weak | product experiment | none yet | linked to content-engine GEO loop | asset-pool |
| moonstachain/sb7-storybrand | narrative tool | growth | StoryBrand narrative reference | B2 / content engine | product story / audience | story framework | seed | weak | model-source boundary | none yet | used in B2 narrative evidence | asset-pool |
| moonstachain/pretext | writing tool | growth | pre-writing / text tooling | content engine | idea/source note | draft or pretext | active | weak | unclear owner | none yet | called by content brief pipeline | asset-pool |
| moonstachain/slides | content tool | growth | slide production support | course/report line | outline + assets | slides | seed | weak | generic repo | none yet | used by course or client deck workflow | asset-pool |
| moonstachain/speech | content tool | growth | speech drafting support | course/public speaking | speech brief | speech draft | seed | weak | generic repo | none yet | used by official speaking workflow | asset-pool |

## 4. Engineering / Automation Assets

| Repository | Asset Type | Category | What It Does | Reusable By | Input Contract | Output Contract | Status | Evidence | Risk | Called By | Promotion Rule | Decision |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| moonstachain/yuanli-interface-skills | skill pack | engineering | interface skills | C4 operator workflows | skill spec | reusable skill | active | weak | duplicate with skills mirror | none yet | selected as canonical interface pack | asset-pool |
| moonstachain/yuanli-skill-server | skill server | engineering | skill serving infra | operator skill workflows | skill package | served skill | seed | weak | unclear deployment | none yet | used by real skill deployment | asset-pool |
| moonstachain/codex-plugin-cc | codex tool | engineering | Codex plugin support | Codex execution | task/spec | plugin behavior | seed | weak | unclear current support | none yet | used by Codex workflow | asset-pool |
| moonstachain/github-feishu-sync | sync tool | engineering | GitHub/Feishu sync | PMO dashboard | GitHub issue/PR data | Feishu synced data | seed | weak | token/security risk | none yet | used by PMO sync | human-review |
| moonstachain/feishu-bitable-bridge | bridge | engineering | Feishu bitable bridge | PMO dashboard | structured data | Bitable entries | seed | weak | data/security risk | none yet | used by dashboard integration | human-review |
| moonstachain/feishu-dashboard-automator | automator | engineering | dashboard automation | dashboard ops | dashboard spec/data | dashboard update | seed | weak | overlap with PMO dashboard | none yet | used by #157 review rhythm | asset-pool |
| moonstachain/yuanli-data-middleware | middleware | engineering | data middleware | dashboard / C2 | input dataset/API | normalized data | seed | weak | unclear owner | none yet | called by dashboard data patch | asset-pool |
| moonstachain/cloudflare-deploy | deploy tool | engineering | Cloudflare deploy helper | web/product deploy | site build | deployed site | seed | weak | infra risk | none yet | used by website deployment | asset-pool |
| moonstachain/aliyun-h5-autodeploy | deploy tool | engineering | Aliyun H5 auto deploy | H5 projects | H5 build | deployed H5 | seed | weak | duplicate deploy tools | none yet | used by H5 project | asset-pool |
| moonstachain/db-reverse-engineer | tool | engineering | DB reverse engineering | data projects | DB/schema | reverse map | seed | weak | one-off risk | none yet | called by data modernization task | asset-pool |
| moonstachain/gh-fix-ci | GitHub skill | engineering | CI fix workflow | GitHub PR execution | failing checks/logs | fix plan/patch | seed | weak | standalone skill | none yet | used in CI failure task | asset-pool |
| moonstachain/gh-address-comments | GitHub skill | engineering | PR review comment handling | GitHub PR workflow | review threads | addressed comments | seed | weak | standalone skill | none yet | used in PR review task | asset-pool |
| moonstachain/skill-pattern-publisher | skill publisher | engineering | publish skill patterns | skill ops | skill pattern | published pattern | seed | weak | unclear current use | none yet | used by skill release | asset-pool |
| moonstachain/strategy-skill-template | template | engineering | strategy skill template | new skills | skill requirements | template repo/files | seed | weak | template sprawl | none yet | becomes canonical skill template | asset-pool |
| moonstachain/cc-harness-skills | harness | engineering | skill harness | skill testing | skill pack | test harness | seed | weak | overlap with mirror | none yet | used in skill validation | asset-pool |
| moonstachain/yuanli-os-skills-pack | skill pack | engineering | Yuanli OS skills | operator workflows | OS task | skill output | seed | weak | overlap with share skills | none yet | deduped into canonical pack | human-review |
| moonstachain/yuanli-share-skills | skill pack | engineering | shared skills | operator workflows | task | skill output | active | weak | overlap with skills mirror | none yet | selected as source or mirror | human-review |
| moonstachain/skills-mirror | mirror | engineering | skills mirror | skill ops | upstream skill | mirrored skill | active | weak | source-of-truth ambiguity | none yet | mirror policy defined | human-review |
| moonstachain/yuanli-os-starter | starter | engineering | OS starter kit | new Yuanli OS projects | project brief | starter scaffold | active | weak | duplicate OS repos | none yet | used by new project intake | asset-pool |
| moonstachain/yuanli-os-ops | ops | engineering | OS ops materials | PMO ops | ops task | ops output | seed | weak | unclear current use | none yet | used by operating rhythm | asset-pool |
| moonstachain/yuanli-os-claude | tool | engineering | Claude workflow support | AI ops | Claude task | output/process | seed | weak | stale risk | none yet | current relevance verified | human-review |
| moonstachain/yuanli-os-platform-handoff | handoff | engineering | platform handoff | platform migration | handoff gaps | handoff plan | seed | weak | feature branch default | none yet | handoff closed and reviewed | human-review |
| moonstachain/CLI-Anything | tool | engineering | CLI generation/support | automation workflows | CLI spec | CLI tool | active | weak | broad scope | none yet | used by C4 execution | asset-pool |
| moonstachain/ai-website-cloner-template | template | engineering | website clone template | prototype workflows | URL/design target | cloned frontend | active | weak | clone/copyright risk | none yet | used under safe product-design task | human-review |
| moonstachain/claude-code | reference/tool | engineering | Claude Code reference | AI dev workflows | dev task | code workflow | active | weak | external project drift | none yet | used as reference only | asset-pool |
| moonstachain/claude-code-run-version | tool/runtime | engineering | Claude runtime/version | AI dev workflows | environment | runtime | active | weak | large/stale risk | none yet | current use verified | human-review |
| moonstachain/hermes-agent | agent | engineering | agent platform | agentic OS | agent task | agent workflow | active | weak | experimental | none yet | used by Yuanli operator skill | asset-pool |
| moonstachain/deer-flow | workflow agent | engineering | deep research/workflow agent | research/C2 | research task | workflow output | active | weak | external/reference | none yet | used in research workstream | asset-pool |

## 5. Agency Role Agent Assets

| Repository | Category | What It Does | Reusable By | Input Contract | Output Contract | Evidence | Promotion Rule | Decision |
|---|---|---|---|---|---|---|---|---|
| moonstachain/agency-design-ux-architect | design | UX architecture | product-design/client cockpit | product context + user flow | UX architecture proposal | weak | used in P0/P1 design task | asset-pool |
| moonstachain/agency-design-ui-designer | design | UI design | product-design/dashboard | wireframe/brief | UI design spec | weak | used in dashboard/prototype task | asset-pool |
| moonstachain/agency-design-image-prompt-engineer | design | image prompt engineering | content/design line | image goal/style | prompt set | weak | used in content visual workflow | asset-pool |
| moonstachain/agency-design-whimsy-injector | design | creative polish | design/content line | draft design | polish suggestions | weak | reused in official design workflow | asset-pool |
| moonstachain/agency-marketing-content-creator | marketing | content creation | content engine | content brief | content draft | weak | called by #144/#147 | asset-pool |
| moonstachain/agency-marketing-growth-hacker | marketing | growth experiments | growth PMO | growth hypothesis | experiment ideas | weak | linked to feedback evidence | asset-pool |
| moonstachain/agency-marketing-social-media-strategist | marketing | social media strategy | content engine | channel goals | strategy plan | weak | linked to channel calendar | asset-pool |
| moonstachain/agency-marketing-tiktok-strategist | marketing | short-video strategy | short video line | audience/clip source | TikTok/video plan | weak | called by short-video workflow | asset-pool |
| moonstachain/agency-marketing-app-store-optimizer | marketing | app-store optimization | app project | app metadata | ASO recommendations | weak | only for app launch | asset-pool |
| moonstachain/agency-product-sprint-prioritizer | product | sprint prioritization | PMO/Codex | backlog + goals | priority list | weak | used in P0/P1 sprint | asset-pool |
| moonstachain/agency-product-feedback-synthesizer | product | feedback synthesis | evidence review | feedback set | insights / gap list | weak | used by evidence review | asset-pool |
| moonstachain/agency-project-management-project-shepherd | project | project shepherd | PMO | project plan | risks / next actions | weak | linked to weekly PMO | asset-pool |
| moonstachain/agency-project-management-experiment-tracker | project | experiment tracking | growth experiments | experiment setup | tracking log | weak | used in growth validation | asset-pool |
| moonstachain/agency-engineering-devops-automator | engineering | DevOps automation | deployment workflows | repo/build target | deploy automation | weak | used by deploy C4 task | asset-pool |
| moonstachain/agency-engineering-mobile-app-builder | engineering | mobile app builder | app projects | app spec | app scaffold | weak | only for app project | asset-pool |
| moonstachain/agency-engineering-senior-developer | engineering | senior dev reasoning | implementation tasks | issue/spec | code plan/patch | weak | used by Codex implementation | asset-pool |
| moonstachain/agency-engineering-rapid-prototyper | engineering | rapid prototype | prototype work | brief/design | prototype | weak | used by product prototype | asset-pool |
| moonstachain/agency-testing-api-tester | testing | API testing | engineering QA | API spec | test result | weak | used by CI/test task | asset-pool |
| moonstachain/agency-testing-reality-checker | testing | reality check | validation | claim/output | validation notes | weak | used in evidence review | asset-pool |
| moonstachain/agency-testing-performance-benchmarker | testing | performance benchmark | engineering QA | app/metric | benchmark report | weak | used by performance task | asset-pool |
| moonstachain/agency-testing-workflow-optimizer | testing | workflow optimization | PMO/ops | workflow | improvement plan | weak | used by ops review | asset-pool |
| moonstachain/agency-testing-test-results-analyzer | testing | test result analysis | CI/test work | test output | diagnosis | weak | used in failing checks task | asset-pool |
| moonstachain/agency-support-support-responder | support | support response | customer ops | user issue | response draft | weak | used in support workflow | asset-pool |
| moonstachain/agency-support-executive-summary-generator | support | executive summary | client/report line | source material | executive summary | weak | used in report workflow | asset-pool |
| moonstachain/agency-support-legal-compliance-checker | support | compliance check | publishing/client | draft/claim | compliance notes | weak | used before external publishing | asset-pool |
| moonstachain/agency-data-consolidation-agent | data | data consolidation | C2/PMO data | data sources | consolidated table | weak | used by dashboard data task | asset-pool |
| moonstachain/agency-report-distribution-agent | report | report distribution | report/content line | report + recipients | distribution plan | weak | used by report release | asset-pool |
| moonstachain/agency-sales-data-extraction-agent | sales | sales data extraction | growth/client evidence | sales data | extracted fields | weak | used by client evidence task | asset-pool |
| moonstachain/agency-xr-immersive-developer | XR | immersive development | XR projects | XR brief | implementation plan | weak | only for XR project | asset-pool |
| moonstachain/agency-xr-interface-architect | XR | XR interface architecture | XR projects | interface brief | XR interface spec | weak | only for XR project | asset-pool |
| moonstachain/agency-xr-cockpit-interaction-specialist | XR | cockpit interaction | XR/cockpit projects | cockpit design goal | interaction proposal | weak | only for XR cockpit project | asset-pool |

## 6. Investment / Research Assets

| Repository | Asset Type | Category | Reusable By | Evidence | Risk | Decision |
|---|---|---|---|---|---|---|
| moonstachain/quant-factor-dashboard | dashboard | investment | investment cockpit | weak | no decision record | asset-pool |
| moonstachain/quant-workspace | workspace | investment | research workflow | weak | tool sprawl | asset-pool |
| moonstachain/youquant-backtest | backtest | investment | quant tests | weak | no decision record | asset-pool |
| moonstachain/youquant-backtest-automation | automation | investment | quant tests | weak | no decision record | asset-pool |
| moonstachain/xueqiu-smart-money-2026 | research | investment | smart money study | weak | time-sensitive | human-review |
| moonstachain/yuanli-research-max | research | investment | broad research | weak | broad scope | asset-pool |
| moonstachain/roigpt | research tool | investment | ROI/research | weak | unclear owner | asset-pool |
| moonstachain/worldmonitor-private | monitor | investment | macro watch | weak | source quality/time-sensitive | human-review |
| moonstachain/zhuoliqi-quant-intel | research | investment | quant intel | weak | unclear relevance | observe/asset-pool |

## 7. Asset Pool Operating Rules

```text
1. L2 assets do not appear on the main PMO board by default.
2. L2 assets appear in the asset pool and can be searched by capability category.
3. When an L1 project calls an L2 asset, the asset must record Called By.
4. If output is useful, write evidence.
5. If repeated use appears, create C3 Gap or C4 Task for promotion.
6. If no use after quarterly review, keep observe or mark human-review.
```

## 8. Done Criteria for #156

#156 is draft-complete when:

```text
- at least 30 capability repos are indexed
- agency repos are grouped by capability category
- content/growth tools have reuse rules
- engineering/automation tools have input/output contracts
- investment/research tools are separated from main PMO
- promotion rule is explicit
- no asset is marked validated without evidence
```

## 9. Current Decision

```text
Capability Asset Pool v1 is ready for dashboard linkage under #157.
No capability asset is promoted automatically.
No repo lifecycle mutation is authorized.
```