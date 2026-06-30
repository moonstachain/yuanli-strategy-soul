# Capability Asset Pool v1

Date: 2026-06-30  
Source PR: #158  
Parent Issues: #152 / #153 / #154 / #156  
Status: split review PR / no repo lifecycle mutation

## Purpose

Convert long-tail Agency / Skill / Tool / Automation / Writer / Publisher / Dashboard / Deployment repositories into a reusable capability asset pool.

These repos are valuable, but they should not enter the main CBM-PMO board until called by a P0/P1 governed workflow and supported by evidence.

```text
Capability Asset Pool = reusable repo assets without main-PMO noise.
```

## Promotion Rule

A capability asset can be promoted to C4 Task or L1 governance only when:

```text
1. It is called by a P0/P1 governed project.
2. It has a clear input contract.
3. It has a clear output contract.
4. It produces evidence or reusable output.
5. It has a writeback target.
6. Human approves promotion.
```

## Asset Pool Schema

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

## Content / Growth Assets

| Repository | Type | What It Does | Reusable By | Evidence | Risk | Decision |
|---|---|---|---|---|---|---|
| moonstachain/wechat-writer | content tool | WeChat article writing | #144/#147 content engine | weak | no feedback loop | asset-pool |
| moonstachain/nas-video-autoclip | automation | video autoclip pipeline | short-video content line | weak | no evidence chain | asset-pool |
| moonstachain/xhs-remote-publisher | publisher | Xiaohongshu publishing helper | content engine | weak | platform risk | asset-pool |
| moonstachain/high-density-mckinsey-report-designer | report tool | high-density report design | content/report line | weak | style duplication | asset-pool |
| moonstachain/high-info-density-dashboard-designer | dashboard tool | dashboard visual design | CBM dashboard / content products | weak | overlaps report designer | asset-pool |
| moonstachain/wechat-radar-dashboard-skill | dashboard skill | WeChat radar dashboard skill | content feedback loop | weak | duplicate with wx-radar | asset-pool |
| moonstachain/wx-radar-dashboard | dashboard | WeChat radar dashboard | content feedback loop | weak | duplicate with skill repo | human-review |
| moonstachain/GEOFlow | growth tool | GEO / AI-native distribution workflow | content engine / GEO line | weak | product experiment | asset-pool |
| moonstachain/sb7-storybrand | narrative tool | StoryBrand narrative reference | B2 / content engine | weak | model-source boundary | asset-pool |
| moonstachain/pretext | writing tool | pre-writing / text tooling | content engine | weak | unclear owner | asset-pool |

## Engineering / Automation Assets

| Repository | Type | What It Does | Reusable By | Evidence | Risk | Decision |
|---|---|---|---|---|---|---|
| moonstachain/yuanli-interface-skills | skill pack | interface skills | C4 operator workflows | weak | duplicate with skills mirror | asset-pool |
| moonstachain/yuanli-skill-server | skill server | skill serving infra | operator skill workflows | weak | unclear deployment | asset-pool |
| moonstachain/codex-plugin-cc | codex tool | Codex plugin support | Codex execution | weak | unclear current support | asset-pool |
| moonstachain/github-feishu-sync | sync tool | GitHub/Feishu sync | PMO dashboard | weak | token/security risk | human-review |
| moonstachain/feishu-bitable-bridge | bridge | Feishu bitable bridge | PMO dashboard | weak | data/security risk | human-review |
| moonstachain/feishu-dashboard-automator | automator | dashboard automation | dashboard ops | weak | overlaps PMO dashboard | asset-pool |
| moonstachain/yuanli-data-middleware | middleware | data middleware | dashboard / C2 | weak | unclear owner | asset-pool |
| moonstachain/cloudflare-deploy | deploy tool | Cloudflare deploy helper | web/product deploy | weak | infra risk | asset-pool |
| moonstachain/aliyun-h5-autodeploy | deploy tool | Aliyun H5 auto deploy | H5 projects | weak | duplicate deploy tools | asset-pool |
| moonstachain/db-reverse-engineer | tool | DB reverse engineering | data projects | weak | one-off risk | asset-pool |
| moonstachain/gh-fix-ci | GitHub skill | CI fix workflow | GitHub PR execution | weak | standalone skill | asset-pool |
| moonstachain/gh-address-comments | GitHub skill | PR review comment handling | GitHub PR workflow | weak | standalone skill | asset-pool |
| moonstachain/skill-pattern-publisher | skill publisher | publish skill patterns | skill ops | weak | unclear current use | asset-pool |
| moonstachain/strategy-skill-template | template | strategy skill template | new skills | weak | template sprawl | asset-pool |
| moonstachain/cc-harness-skills | harness | skill harness | skill testing | weak | overlap with mirror | asset-pool |
| moonstachain/yuanli-os-skills-pack | skill pack | Yuanli OS skills | operator workflows | weak | overlap with share skills | human-review |
| moonstachain/yuanli-share-skills | skill pack | shared skills | operator workflows | weak | overlap with skills mirror | human-review |
| moonstachain/skills-mirror | mirror | skills mirror | skill ops | weak | source-of-truth ambiguity | human-review |

## Agency Role Agent Assets

| Category | Repos | Reusable By | Decision |
|---|---|---|---|
| design | agency-design-ux-architect, agency-design-ui-designer, agency-design-image-prompt-engineer, agency-design-whimsy-injector | product-design / dashboard / content line | asset-pool |
| marketing | agency-marketing-content-creator, agency-marketing-growth-hacker, agency-marketing-social-media-strategist, agency-marketing-tiktok-strategist, agency-marketing-app-store-optimizer | content engine / growth PMO | asset-pool |
| product / project | agency-product-sprint-prioritizer, agency-product-feedback-synthesizer, agency-project-management-project-shepherd, agency-project-management-experiment-tracker | PMO / evidence review | asset-pool |
| engineering | agency-engineering-devops-automator, agency-engineering-mobile-app-builder, agency-engineering-senior-developer, agency-engineering-rapid-prototyper | implementation / deployment / prototype tasks | asset-pool |
| testing | agency-testing-api-tester, agency-testing-reality-checker, agency-testing-performance-benchmarker, agency-testing-workflow-optimizer, agency-testing-test-results-analyzer | CI / validation / evidence review | asset-pool |
| support / data / report | agency-support-support-responder, agency-support-executive-summary-generator, agency-support-legal-compliance-checker, agency-data-consolidation-agent, agency-report-distribution-agent, agency-sales-data-extraction-agent | support / client / evidence / report workflows | asset-pool |
| XR | agency-xr-immersive-developer, agency-xr-interface-architect, agency-xr-cockpit-interaction-specialist | XR projects only | asset-pool |

## Investment / Research Assets

| Repository | Type | Reusable By | Evidence | Risk | Decision |
|---|---|---|---|---|---|
| moonstachain/quant-factor-dashboard | dashboard | investment cockpit | weak | no decision record | asset-pool |
| moonstachain/quant-workspace | workspace | research workflow | weak | tool sprawl | asset-pool |
| moonstachain/youquant-backtest | backtest | quant tests | weak | no decision record | asset-pool |
| moonstachain/youquant-backtest-automation | automation | quant tests | weak | no decision record | asset-pool |
| moonstachain/xueqiu-smart-money-2026 | research | smart money study | weak | time-sensitive | human-review |
| moonstachain/yuanli-research-max | research | broad research | weak | broad scope | asset-pool |
| moonstachain/roigpt | research tool | ROI/research | weak | unclear owner | asset-pool |
| moonstachain/worldmonitor-private | monitor | macro watch | weak | source quality/time-sensitive | human-review |

## Operating Rules

```text
1. L2 assets do not appear on the main PMO board by default.
2. L2 assets appear in the asset pool and can be searched by capability category.
3. When an L1 project calls an L2 asset, the asset must record Called By.
4. If output is useful, write evidence.
5. If repeated use appears, create C3 Gap or C4 Task for promotion.
6. If no use after quarterly review, keep observe or mark human-review.
```

## Current Decision

```text
Capability Asset Pool v1 is ready for dashboard linkage under #157.
No capability asset is promoted automatically.
No repo lifecycle mutation is authorized.
```