# Yuanli OS Brain Loop Runbook v1

Date: 2026-06-30  
Status: draft / operating runbook / not merged  
Protocol: `docs/YUANLI-OS-BRAIN-LOOP-v1.md`

## 1. Purpose

This runbook tells a human or agent how to run one complete Yuanli OS Brain Loop without scattering work across chat.

A run is valid only if it produces visible routing, evidence, evolution, and backwrite.

## 2. Standard Run Shape

```text
BLOOP-YYYY-NNN
```

Example:

```text
BLOOP-2026-001
```

## 3. Preflight Checklist

Before starting a run, confirm:

```text
[ ] Source is known.
[ ] Sensitivity level is assigned.
[ ] Canon node is selected or observe route is chosen.
[ ] Capability preflight has been performed or explicitly skipped with reason.
[ ] Program route is selected.
[ ] Human gate is identified for public or irreversible action.
```

## 4. Phase 1 · Source Intake

Create a SourceItem entry.

Minimum fields:

```yaml
brain_loop_id:
source_id:
date:
source_type:
source_location:
owner:
freshness:
initial_summary:
initial_question:
```

Accepted source types:

```text
chat
GitHub issue
GitHub PR
LLM Wiki page
transcript
Get note
content feedback
Zhiku catalog item
client case
investment note
external article
external video
external repo
```

## 5. Phase 2 · Sensitivity Gate

Assign one level:

```text
raw
sensitive
private-default
anonymized
public-safe
canonical
```

Record allowed use:

```yaml
allowed_use:
  - internal_reasoning
  - anonymized_evidence
  - content_publication
  - canon_candidate
blocked_use:
  - raw_publication
  - external_install
human_approval_required: true/false
```

Rules:

```text
Client, meeting, private coaching, personal archive, finance, and private transcript sources default to sensitive or private-default.
Public GitHub repos, public articles, and public YC/GBrain materials may be public-safe but still require citation and no overclaim.
```

## 6. Phase 3 · Canon Resolver

Map the run to Yuanli canon.

Minimum fields:

```yaml
trilogy_part:
module:
canon_node:
claim_type:
canonical_status:
confidence:
supports:
does_not_support:
```

If canon cannot be resolved:

```text
Route to observe/source radar.
Do not create main PMO C3/C4.
```

## 7. Phase 4 · Capability Resolver

Before creating or executing a C4 task, check existing capabilities.

Search order:

```text
1. Zhiku Capability Market
2. GitHub L1/L2 asset pool
3. Existing repo in moonstachain
4. Existing skill/agent/command/MCP
5. Build-new only if no credible route exists
```

Decision options:

```text
reuse
adapt
build_new
reject
observe
```

Minimum record:

```yaml
need:
searched_zhiku:
searched_github_assets:
candidates:
final_decision:
reason:
risk:
writeback_target:
```

## 8. Phase 5 · Program Router

Route to one primary program.

| Route | Program |
|---|---|
| content topic, article, card, script, channel, feedback | #183 Content Engine |
| repo governance, L1/L2/L3, dashboard, capability classification | #184 GitHub Portfolio |
| source routing, anonymization, evidence, evolution | C2 Brain layer |
| skill/agent/tool discovery | Zhiku Capability Layer |

Minimum record:

```yaml
primary_program:
secondary_program:
cbm_cell:
existing_issue:
new_issue_required:
next_c3_gap:
next_c4_task:
```

## 9. Phase 6 · C3/C4 Execution

Only after routing is complete, create or update C3/C4.

C3 means:

```text
A capability gap, evidence gap, governance gap, or maturity gap.
```

C4 means:

```text
A concrete executable task that produces artifact, evidence, or backwrite.
```

Done rule:

```text
No route, no C3/C4.
No evidence, no green.
No evolution, no Done.
No backwrite, no compounding.
```

## 10. Phase 7 · Artifact + Feedback

Artifacts may include:

```text
content draft
article
XHS card structure
short video script
repo registry entry
dashboard overlay
review note
protocol file
evidence note
evolution note
```

Feedback may include:

```text
human review
internal review
publish/test metrics
qualitative audience signal
GitHub PR review
dashboard state change
capability reuse result
```

If no feedback exists, status must remain:

```text
published-no-feedback
tested-no-feedback
paused-no-feedback
review-needed
```

Not allowed:

```text
Done
green
validated
compounding
```

## 11. Phase 8 · Evidence Note

Write evidence using this minimum structure:

```yaml
evidence_note:
  title:
  date:
  brain_loop_id:
  source_id:
  sensitivity_level:
  canon_node:
  program:
  related_issue:
  related_pr:
  evidence_strength: none / weak / medium / strong
  what_happened:
  what_this_supports:
  what_this_does_not_prove:
  anonymized_details:
  next_c3_or_c4:
  writeback_target:
```

Location:

```text
brain/evidence/
```

## 12. Phase 9 · Evolution Note

Write evolution using this minimum structure:

```yaml
evolution_note:
  title:
  date:
  brain_loop_id:
  triggered_by:
  previous_assumption:
  new_observation:
  pattern:
  decision_change:
  canon_candidate:
  next_test:
```

Location:

```text
brain/evolution-notes/
```

## 13. Phase 10 · Dream Review

Dream review can be weekly or after a major run.

Inputs:

```text
recent evidence notes
recent evolution notes
GitHub Issues/PRs
content feedback
LLM Wiki source changes
Zhiku/capability decisions
conversation conclusions
```

Output fields:

```yaml
dream_review:
  week:
  recurring_patterns:
  new_risks:
  repeated_capability_needs:
  canon_candidate_signals:
  stale_assumptions:
  suggested_c3_gaps:
  suggested_c4_tasks:
  writebacks:
```

Location:

```text
brain/dream-reviews/
```

## 14. Phase 11 · Backwrite

Backwrite only after evidence/evolution exists.

Targets:

```text
Program Board
Project Charter
brain/canonical-learning
content topic map
GitHub portfolio registry
CBM dashboard
Canon candidate list
```

Backwrite record:

```yaml
backwrite:
  target:
  change:
  evidence_path:
  evolution_path:
  human_review:
  status:
```

## 15. First Run Recommendation

```text
BLOOP-2026-001
```

Topic:

```text
创业者不是缺能力，而是缺一个可复利的事业操作系统
```

Sources:

```text
YC AI agent infrastructure methodology
GBrain reference architecture
LLM Wiki source radar
Zhiku capability market
```

Programs:

```text
#183 Content Engine
#184 GitHub Portfolio
```

Outputs:

```text
one content artifact
one feedback record
one evidence note
one evolution note
one dream review
one program-board backwrite
```

## 16. Failure Modes

| Failure | Correction |
|---|---|
| Chat conclusion not recorded | Create SourceItem or evidence note |
| Private source used publicly | Stop, anonymize, human review |
| C4 created before capability check | Run capability resolver and update task |
| Draft item marked green | Revert to amber/review-needed |
| Artifact exists but no evidence | Keep status not-Done |
| Evolution missing | Do not backwrite to canon |
| Backwrite missing | Do not mark compounding |
