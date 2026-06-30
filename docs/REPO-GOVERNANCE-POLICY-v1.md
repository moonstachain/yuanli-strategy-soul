# Repo Governance Policy v1

Date: 2026-06-30  
Parent Issues: #150 / #151 / #152 / #154  
Status: draft policy / human-gated

## 0. Core Principle

```text
Govern capability, not repo noise.
```

A repository is not valuable merely because it is active. A repository becomes CBM-PMO governable only when it can be tied to a capability component, evidence chain, next action, and writeback path.

```text
6M active ≠ main PMO.
6M active + CBM Cell + Evidence + Next C3/C4 + Writeback Target = governable.
```

## 1. Policy Goals

This policy exists to prevent five failure modes:

1. Treating repo activity as strategic progress.
2. Polluting the main CBM-PMO board with tool/agent/demo noise.
3. Losing evidence from client, content, C2 brain, and research work.
4. Creating duplicated tools without reuse contracts.
5. Marking repos green without evidence.

## 2. Governance Layers

### L1 · Core CBM-PMO Governance

A repo enters L1 only if it directly affects at least one of the following:

```text
- Yuanli Strategy canon
- C2 Brain / SSOT / llm-wiki evidence chain
- Content Engineering OS
- Client / company-brain / project cockpit evidence
- Investment / macro / decision-support system
- CBM-PMO dashboard or operating rhythm
```

Governance load:

```text
C3 Gap / C4 Task / Evidence Review / Evolution Note / Dashboard / Weekly Review
```

### L2 · Capability Asset Pool

A repo enters L2 if it is reusable but not yet a core governed project.

Typical L2 repos:

```text
Agency role agents
Skill packs
Automation tools
Writer / publisher tools
Dashboard / report generators
Deployment / sync bridges
Data middleware
Research utilities
Templates / harnesses
```

Governance load:

```text
Asset index / I-O contract / called-by project / evidence when used
```

### L3 · Observe / Archive Candidate

A repo enters L3 if it has low or unclear current strategic value.

Typical L3 repos:

```text
Clone / fork / demo
Empty or near-empty repo
One-off tool
Generic doc/pdf/spreadsheet/screenshot repo
Duplicate skill/tool repo
No CBM Cell
No evidence
No user/project/owner
No writeback target
```

Governance load:

```text
Index only / no PMO load / quarterly human review
```

## 3. L1 Intake Rubric

A repo can enter L1 only if all six checks are answered.

| Check | Required Answer |
|---|---|
| CBM Domain | strategy / knowledge / growth / client / investment / engineering |
| Primary CBM Cell | Explicit cell name or proposed cell |
| Canon Node / Business Theme | A/B/C module, client theme, content line, investment theme, or engineering capability |
| Evidence State | none / weak / medium / strong, with explicit gap if none |
| Next Action | C3 Gap or C4 Task |
| Writeback Target | docs / assets / brain/evidence / brain/evolution / dashboard data / issue |

If any of these are missing, the repo cannot be shown as green, validated, operating, or compounding.

## 4. L2 Capability Asset Rubric

A repo belongs in L2 when it has reusable capability value but does not yet deserve main PMO load.

Required fields:

| Field | Meaning |
|---|---|
| Asset Type | agency agent / skill pack / automation / content tool / dashboard / deploy / middleware / research tool |
| What It Does | One-sentence function |
| Reusable By | Which P0/P1 project could call it |
| Input Contract | What it needs to run |
| Output Contract | What it produces |
| Evidence When Used | What proof should be captured after usage |
| Promotion Rule | What would move it into C4 or L1 |

Promotion to C4 requires:

```text
- Called by a P0/P1 governed project
- Clear input/output contract
- Produces evidence or reusable output
- Has writeback target
- Human approval
```

## 5. L3 Observe Rubric

A repo should remain L3 if two or more of the following are true:

```text
- no CBM Cell
- no current use
- no evidence
- no owner or owning workflow
- no writeback target
- duplicated with another repo
- created as clone/demo/template
- empty or near-empty
- generic name with unclear role
- cannot be tied to C3/C4
```

L3 does not mean worthless. It means no main PMO load now.

## 6. Evidence Strength Rubric

| Strength | Definition | Allowed Status |
|---|---|---|
| none | No proof beyond repo existence or activity | inbox / observe / seed only |
| weak | Purpose is plausible; limited code/docs; no real usage evidence | seed / draft |
| medium | Used in an internal workflow or linked to real project evidence | draft / operating candidate |
| strong | Repeated real use, client/user evidence, output validated, writeback exists | operating / compounding candidate |

## 7. False-green Prevention Rule

```text
No evidence, no green.
No writeback, no Done.
No C3/C4, no main PMO status.
No human approval, no archive/merge/delete/rename.
```

A repo with activity but no evidence should be marked:

```text
active-but-unvalidated
```

not:

```text
validated / operating / compounding / green
```

## 8. Governance Decisions

| Decision | Meaning |
|---|---|
| govern | Enter L1 Core CBM-PMO Governance |
| govern-lite | Track as source or supporting repo; limited PMO load |
| asset-pool | Enter L2 Capability Asset Pool |
| observe | L3 index only; no PMO load |
| archive-candidate | Candidate for future human-gated archive review |
| human-review | Needs explicit human decision before any mutation |

## 9. Human Approval Gates

These actions are always human-gated:

```text
- archive repo
- delete repo
- rename repo
- merge repo into another repo
- change repo visibility
- mark repo deprecated
- mark repo validated / operating / compounding
- promote a capability asset into main PMO
- publish customer-sensitive evidence
```

The governance system may recommend these actions, but it must not perform them automatically.

## 10. New Repo Creation Policy

Before creating a new repo, answer:

| Question | Required Answer |
|---|---|
| What CBM Domain does this repo serve? | strategy / knowledge / growth / client / investment / engineering / personal-os / observe |
| Which existing repo could own this instead? | existing repo or reason for new repo |
| Is this source, product, tool, evidence, or demo? | explicit role |
| What is the writeback target? | docs/assets/brain/dashboard/issue |
| What would count as Done? | acceptance criteria |
| What would make this repo obsolete? | sunset rule |

If a new repo cannot answer these, create an Issue in `yuanli-strategy-soul` first instead of creating the repo.

## 11. Repo Naming Policy

Preferred naming pattern:

```text
<domain>-<capability>-<artifact>
```

Examples:

```text
yuanli-content-engine-os
yuanli-c2-brain-ssot
yuanli-cbm-portfolio-cockpit
client-yufo-expert-brain
tool-wechat-writer
skill-github-fix-ci
```

Avoid:

```text
doc
pdf
spreadsheet
clone-alpha
new-test
final-final
```

Generic names should not be used for new strategic repos.

## 12. Repo Sunset Policy

A repo becomes a sunset candidate when:

```text
- no push / issue / PR activity for 6 months
- no known current use
- no evidence
- duplicated by a stronger repo
- no CBM Cell or writeback path
- owner/workflow is unknown
```

Sunset does not mean immediate archive. It means:

```text
Quarterly human review → decide keep / merge / archive / rename / ignore.
```

## 13. Monthly Repo Governance Review

Monthly review questions:

```text
1. Which L1 repos changed status?
2. Which L1 repos lack evidence?
3. Which L2 assets were called by P0/P1 work?
4. Which L2 assets should be promoted to C4?
5. Which L3 repos should remain observe?
6. Which repos are archive candidates?
7. Which repos are duplicated?
8. Which repos create false-green risk?
9. Which new repos were created without intake?
10. Which writebacks are missing?
```

## 14. Weekly Portfolio Review

Weekly review should focus only on L1 and urgent L2 assets.

```text
L1 repos:
- status
- evidence strength
- C3 Gap
- C4 Task
- blocked state
- writeback state

L2 assets:
- called by any P0/P1 project?
- output produced?
- evidence captured?
```

Do not review every repo weekly.

## 15. Daily Lightweight Check

Daily check should only inspect:

```text
- newly created P0/P1 issues
- new C3/C4 candidates
- false-green risks
- blocked C4 tasks
- newly captured evidence
```

## 16. PMO Column Policy

Recommended portfolio columns:

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

## 17. Dashboard Metrics

Minimum metrics:

```text
Total Active Repos 30D
Total Active Repos 6M
L1 Core Governance Count
L2 Capability Asset Pool Count
L3 Observe Count
Repos Missing CBM Cell
Repos Missing Evidence
Repos With C3 Gap
Repos With C4 Task
False-green Risk Count
Archive Candidate Count
```

## 18. Governance Sequence

Use this order:

```text
1. Build registry (#153)
2. Apply policy (#154)
3. Onboard Top 15 L1 repos (#155)
4. Build Capability Asset Pool (#156)
5. Add dashboard/review rhythm (#157)
```

Do not onboard everything before policy exists.

## 19. Done Criteria for #154

This policy is done when:

```text
- rules are concrete enough for Codex to classify repos
- L1/L2/L3 criteria are explicit
- evidence rubric exists
- false-green prevention is explicit
- human approval gates are explicit
- new repo creation and sunset policies exist
```

## 20. Current Decision

```text
Use this policy as the first-pass governance rule for #153, #155, #156, and #157.
Do not mutate repositories.
Do not mark any repo validated without Evidence Review.
```