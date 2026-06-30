# Operator Skill Live Execution Contract v1

Date: 2026-06-30
Parent: #134 / #137
Source Dry-run: `docs/OPERATOR-SKILL-REUSE-DRYRUN-v1.md`
First Candidate Use Case: #132 B2 External Evidence Coding

## 0. Executive Decision

```text
Operator Skill can move from dry-run to bounded live execution.
```

Boundary:

```text
Live execution means it may read sources, create internal PMO artifacts, draft issues, and write evidence/evolution notes inside the repository.
It does not mean autonomous external publishing, client-facing output, canon update, or maturity upgrade.
```

## 1. Allowed Inputs

```text
GitHub issue URL / number
source file pointers
module asset paths
C3 Gap issue
C4 Task issue
PMO acceptance criteria
approved repository paths
```

## 2. Allowed Actions

The Operator Skill may:

```text
read repository files
search repository files
create internal evidence files
create internal evolution notes
create or update PMO issues
add PMO comments
prepare scorecards
prepare runbooks
prepare review drafts
```

## 3. Forbidden Outputs Without Human Approval

The Operator Skill must not:

```text
publish external artifacts
send client-facing messages
update CONSTITUTION.md
upgrade status to validated / operating / compounding
upgrade evidence strength to strong
merge PRs
change permissions
expose private raw transcripts outside approved internal evidence summaries
```

## 4. Approval Gate Matrix

| Action | Default Level | Human Approval Required? |
|---|---|---|
| Read source pointers | L0 | No |
| Draft evidence/evolution file | L1 | No |
| Create internal PMO issue | L1 | No |
| Update validation score to 2/5 after scorecard | L2 | Yes if maturity changes |
| Close PMO issue after acceptance | L2 | Yes / explicit task approval |
| Publish client-facing artifact | L3 | Yes |
| Update canon / CONSTITUTION.md | L4 | Yes |
| Autonomous recurring write | L4 | Yes and bounded |

## 5. Live-run Runbook

```text
1. Read parent issue and acceptance criteria.
2. Resolve source files and module assets.
3. Extract only necessary evidence; do not copy raw transcript blocks.
4. Produce structured artifact: context / evidence / decision / boundary / writeback.
5. Create or update evidence file.
6. Create evolution note if reusable learning exists.
7. Add PMO comment with outputs.
8. Close issue only if acceptance is fully met and closure is within task authorization.
```

## 6. Evidence Record Template

```md
# Operator Skill Live-run Evidence

Date:
Issue:
Source:
Allowed Actions:
Artifacts Created:
Artifacts Updated:
Maturity Impact:
Boundary:
Next Reuse:
```

## 7. First Live-run Candidate Result

Candidate:

```text
#132 B2 External Evidence Coding
```

Result:

```text
PASS_WITH_BOUNDARY
```

Created / updated:

```text
assets/B2-品类独创/external-evidence-coding-2026-06.md
assets/B2-品类独创/workshop-scorecard.md
assets/B2-品类独创/validation-records.md
assets/B2-品类独创/evidence.md
brain/WRITEBACK-LOG.md
```

Maturity impact:

```text
B2 Validation: 1/5 -> 2/5
Stage: External Validation Started
```

Boundary:

```text
Not scaled product validation.
Not controlled naming-test completion.
Do not upgrade beyond 2/5 without controlled test.
```

## 8. Next Live-run Candidate

```text
#140 Safety Value Proof project cockpit runbook and evidence chain
```

## 9. Reuse Pattern

```text
C3 Gap -> C4 Task -> Source Evidence -> Structured Artifact -> Evidence Review -> Evolution Note -> PMO Comment -> Optional Close
```
