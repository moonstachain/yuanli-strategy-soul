# GitHub Portfolio Review Rhythm v1

Date: 2026-06-30  
Parent Issues: #152 / #153 / #154 / #155 / #156 / #157  
Status: draft dashboard + review rhythm spec

## 0. Purpose

This file executes #157 by connecting GitHub Portfolio Governance to CBM-PMO dashboard rhythm.

The goal is to make portfolio governance recurring, evidence-based, and low-noise.

```text
Dashboard should show capability health, not repo vanity metrics.
```

## 1. Dashboard Sections

### 1.1 Portfolio Summary

| Metric | Definition | Source |
|---|---|---|
| total_active_repos_30d | Repos pushed in last 30 days | GitHub search |
| total_active_repos_6m | Repos pushed in last 6 months | GitHub search |
| l1_core_governance_count | Repos marked L1 | `GITHUB-6M-CBM-PMO-VALUE-AUDIT-v1.md` |
| l2_capability_asset_count | Repos marked L2 | `CAPABILITY-ASSET-POOL-v1.md` |
| l3_observe_count | Repos marked L3 | registry |
| repos_missing_cbm_cell | Repos with no CBM cell | registry |
| repos_missing_evidence | Repos with none/weak evidence | registry |
| repos_with_c3_gap | Repos linked to C3 Gap | registry/issues |
| repos_with_c4_task | Repos linked to C4 Task | registry/issues |
| false_green_risk_count | Active repos with weak/no evidence but high status | registry/policy |
| archive_candidate_count | L3 repos marked archive-candidate | registry |

### 1.2 L1 Health Table

| Field | Meaning |
|---|---|
| repo | repository full name |
| cbm_domain | strategy / knowledge / growth / client / investment / engineering |
| primary_cbm_cell | primary capability cell |
| evidence_strength | none / weak / medium / strong |
| current_gap | current governance gap |
| next_c3_gap | linked or candidate C3 Gap |
| next_c4_task | linked or candidate C4 Task |
| false_green_risk | yes / no |
| writeback_target | where output lands |
| last_reviewed_at | review date |
| decision | govern / govern-lite / asset-pool / observe |

### 1.3 Capability Asset Pool Table

| Field | Meaning |
|---|---|
| repo | repository full name |
| asset_type | agency / skill / tool / automation / dashboard / deploy / research |
| category | design / marketing / engineering / testing / support / data / growth / investment |
| reusable_by | L1 project or workflow that can call it |
| input_contract | required input |
| output_contract | produced output |
| evidence_when_used | what evidence should be written |
| called_by | known current caller |
| promotion_rule | trigger for C4/L1 promotion |
| decision | asset-pool / human-review / observe |

## 2. PMO Columns

Recommended Portfolio PMO columns:

```text
Inbox
Classified
Needs CBM Cell
Needs Evidence
C3 Gap Ready
C4 Task Ready
In Execution
Evidence Review
Backwrite Done
Observe
Archive Candidate
```

Column rules:

| Column | Entry Rule | Exit Rule |
|---|---|---|
| Inbox | repo/activity not yet classified | classified as L1/L2/L3 |
| Classified | layer assigned | CBM cell/evidence check completed |
| Needs CBM Cell | no primary CBM cell | cell proposed or assigned |
| Needs Evidence | evidence none/weak | evidence written or explicit gap created |
| C3 Gap Ready | judgement gap identified | C3 issue opened or linked |
| C4 Task Ready | executable task defined | C4 issue opened or linked |
| In Execution | C4 active | output artifact created |
| Evidence Review | output exists | evidence strength reviewed |
| Backwrite Done | evidence/evolution/writeback completed | dashboard updated |
| Observe | L3 or low-value repo | monthly review decision |
| Archive Candidate | possible sunset | human decision only |

## 3. Review Rhythm

### 3.1 Daily Lightweight Check

Scope:

```text
new P0/P1 issues
blocked C4 tasks
false-green risk
new evidence
new repo created without intake
```

Do not review every repo daily.

Output:

```text
Daily note or dashboard status update only if something changed.
```

### 3.2 Weekly Portfolio Review

Scope:

```text
L1 Core Governance repos
P0/P1 repo gaps
C3/C4 pipeline
Evidence strength changes
False-green risks
Blocked writebacks
```

Template:

```markdown
# Weekly GitHub Portfolio Review

Date:

## 1. L1 Repo Status Changes

## 2. Evidence Strength Changes

## 3. New / Updated C3 Gaps

## 4. New / Updated C4 Tasks

## 5. False-green Risks

## 6. Blocked Writebacks

## 7. Decisions Needed

## 8. Next Week Focus
```

### 3.3 Monthly Repo Governance Review

Scope:

```text
L2 capability asset usage
L3 observe repos
duplicated repos
stale repos
archive/merge/rename candidates
new repo policy violations
```

Template:

```markdown
# Monthly Repo Governance Review

Date:

## 1. L2 Assets Called by P0/P1 Projects

## 2. L2 Assets to Promote / Keep / Observe

## 3. L3 Repos to Keep Observing

## 4. Archive / Merge / Rename Candidates

## 5. Duplicate or Overlapping Repos

## 6. New Repo Intake Violations

## 7. Human-gated Decisions

## 8. Next Month Governance Focus
```

## 4. Dashboard Patch Plan

### 4.1 Patch `docs/cbm-capability-cockpit-data.js`

Add a `githubPortfolio` section:

```js
export const githubPortfolio = {
  updatedAt: '2026-06-30',
  activeRepos30d: null,
  activeRepos6m: null,
  layers: {
    l1CoreGovernance: null,
    l2CapabilityAssetPool: null,
    l3Observe: null
  },
  risk: {
    reposMissingCbmCell: null,
    reposMissingEvidence: null,
    falseGreenRisk: null,
    archiveCandidates: null
  },
  pipeline: {
    reposWithC3Gap: null,
    reposWithC4Task: null,
    blockedWritebacks: null
  }
}
```

Use `null` until counts are generated by a real sync script. Do not fake counts.

### 4.2 Patch `docs/pmo-dashboard-data.js`

Add portfolio lane:

```js
{
  id: 'github-portfolio-governance',
  title: 'GitHub Portfolio Governance',
  status: 'draft',
  priority: 'P1.5',
  evidenceStrength: 'weak',
  parentIssues: [150, 151, 152, 153, 154, 155, 156, 157],
  nextReview: 'weekly',
  guardrails: [
    'no evidence, no green',
    'no repo lifecycle mutation without human approval',
    'capability assets do not enter main PMO until called'
  ]
}
```

### 4.3 Future Sync Script

Possible future script:

```text
scripts/sync-github-portfolio-dashboard.js
```

Inputs:

```text
docs/GITHUB-6M-CBM-PMO-VALUE-AUDIT-v1.md
docs/CAPABILITY-ASSET-POOL-v1.md
GitHub issue/PR data
```

Outputs:

```text
docs/cbm-capability-cockpit-data.js
docs/pmo-dashboard-data.js
brain/evidence/<date>-github-portfolio-review.md
```

## 5. False-green Rules for Dashboard

Dashboard must not display green if:

```text
- evidence_strength is none or weak
- writeback_target is empty
- current_gap exists but no C3 issue is linked
- next_c4_task exists but no output artifact exists
- repo is L2 but not called by an L1/P0/P1 project
```

Allowed labels:

| Evidence | Dashboard State |
|---|---|
| none | grey / observe / missing evidence |
| weak | amber / draft / active-but-unvalidated |
| medium | blue / operating candidate |
| strong | green candidate, only after review |

## 6. Dashboard Acceptance for #157

#157 is draft-complete when:

```text
- dashboard metrics are defined
- PMO columns are defined
- daily/weekly/monthly review rhythm is defined
- dashboard patch plan exists
- false-green rules are explicit
- no fake counts are inserted
- no repo is upgraded automatically
```

## 7. Next Execution

After #157 draft review:

```text
1. Generate dashboard data patch using real counts.
2. Create weekly review evidence template.
3. Create monthly repo governance review template.
4. Decide whether PR #158 should remain one PR or split into registry/policy/onboarding/asset/dashboard PRs.
```

## 8. Current Decision

```text
Keep PR #158 as draft.
Do not merge yet.
Do not generate fake dashboard counts.
Do not mutate any repository lifecycle state.
```