# Repo Governance Policy v1

Date: 2026-06-30  
Source PR: #158  
Parent Issues: #150 / #151 / #152 / #154  
Status: split review PR / human-gated policy

## Core Principle

```text
Govern capability, not repo noise.
```

A repository is not valuable merely because it is active. A repository becomes CBM-PMO governable only when it can be tied to a capability component, evidence chain, next action, and writeback path.

```text
6M active ≠ main PMO.
6M active + CBM Cell + Evidence + Next C3/C4 + Writeback Target = governable.
```

## Policy Goals

1. Prevent treating repo activity as strategic progress.
2. Prevent tool / agent / demo repos from polluting the main PMO board.
3. Preserve evidence from client, content, C2 Brain, and research workflows.
4. Prevent duplicated tools without reuse contracts.
5. Prevent false-green status without evidence.

## Governance Layers

### L1 · Core CBM-PMO Governance

A repo enters L1 only if it directly affects:

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
Asset index / input-output contract / called-by project / evidence when used
```

### L3 · Observe / Archive Candidate

A repo enters L3 if it has low or unclear current strategic value.

Typical L3 signals:

```text
clone / fork / demo
empty or near-empty repo
one-off tool
generic doc/pdf/spreadsheet/screenshot repo
duplicate skill/tool repo
no CBM Cell
no evidence
no user/project/owner
no writeback target
```

## L1 Intake Rubric

| Check | Required Answer |
|---|---|
| CBM Domain | strategy / knowledge / growth / client / investment / engineering |
| Primary CBM Cell | explicit cell name or proposed cell |
| Canon Node / Business Theme | A/B/C module, client theme, content line, investment theme, or engineering capability |
| Evidence State | none / weak / medium / strong, with explicit gap if none |
| Next Action | C3 Gap or C4 Task |
| Writeback Target | docs / assets / brain/evidence / brain/evolution / dashboard data / issue |

If any of these are missing, the repo cannot be shown as green, validated, operating, or compounding.

## L2 Capability Asset Rubric

| Field | Meaning |
|---|---|
| Asset Type | agency agent / skill pack / automation / content tool / dashboard / deploy / middleware / research tool |
| What It Does | one-sentence function |
| Reusable By | which P0/P1 project could call it |
| Input Contract | what it needs to run |
| Output Contract | what it produces |
| Evidence When Used | what proof should be captured after usage |
| Promotion Rule | what would move it into C4 or L1 |

Promotion to C4 requires:

```text
- called by a P0/P1 governed project
- clear input/output contract
- produces evidence or reusable output
- has writeback target
- human approval
```

## Evidence Strength Rubric

| Strength | Definition | Allowed Status |
|---|---|---|
| none | no proof beyond repo existence or activity | inbox / observe / seed only |
| weak | plausible purpose, limited docs/code, no real usage evidence | seed / draft |
| medium | used in internal workflow or linked to real project evidence | draft / operating candidate |
| strong | repeated real use, client/user evidence, output validated, writeback exists | operating / compounding candidate |

## False-green Prevention Rule

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

## Governance Decisions

| Decision | Meaning |
|---|---|
| govern | Enter L1 Core CBM-PMO Governance |
| govern-lite | Track as source/supporting repo; limited PMO load |
| asset-pool | Enter L2 Capability Asset Pool |
| observe | L3 index only; no PMO load |
| archive-candidate | Candidate for future human-gated archive review |
| human-review | Needs explicit human decision before any mutation |

## Human Approval Gates

Always human-gated:

```text
archive repo
delete repo
rename repo
merge repo into another repo
change repo visibility
mark repo deprecated
mark repo validated / operating / compounding
promote a capability asset into main PMO
publish customer-sensitive evidence
```

## New Repo Creation Policy

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

## Review Rhythm

Weekly review focuses on L1 repos and urgent L2 assets.

Monthly review focuses on L2/L3, duplicates, sunset candidates, archive/merge/rename candidates, and new repo intake violations.

## Current Decision

```text
Use this policy as the first-pass governance rule for registry, L1 onboarding, asset pool, and dashboard rhythm.
Do not mutate repositories.
Do not mark any repo validated without Evidence Review.
```