# C2 Evidence Routing Template v1

Date: 2026-06-30  
Source: #170 / #172  
Execution Task: #174  
Status: draft / no repo lifecycle mutation

## 0. Purpose

This template defines how C2 source material becomes usable evidence without confusing source memory, evidence notes, evolution notes, and canonical candidates.

The goal is to make C2 evidence routing repeatable:

```text
source material
→ sensitivity check
→ extraction
→ anonymized evidence note
→ evolution note
→ canonical candidate only after review
```

## 1. Guardrails

```text
Do not move repos.
Do not rename repos.
Do not archive repos.
Do not delete repos.
Do not merge repos.
Do not expose private source material.
Do not mark weak evidence as green.
```

## 2. Evidence Levels

| Level | Meaning | Allowed Location | Review Needed |
|---|---|---|---|
| Raw | original transcript, meeting note, direct source material | private source repo only | yes |
| Sensitive | includes identifiable user/client/company context | private or redacted only | yes |
| Anonymized | meaning preserved, identifiers removed | `brain/evidence/` | yes |
| Public-safe | approved for docs, teaching, or content use | docs / assets / content outputs | human approval |

## 3. Routing Map

| Step | Input | Action | Output | Target |
|---|---|---|---|---|
| 1 | raw source | classify sensitivity | sensitivity label | source repo |
| 2 | raw/sensitive source | extract pattern or claim | extraction note | local working note / private source |
| 3 | extraction note | anonymize | anonymized evidence | `brain/evidence/` |
| 4 | evidence note | interpret learning | evolution note | `brain/evolution-notes/` |
| 5 | repeated evidence + review | propose candidate | canonical candidate | `brain/canonical-learning/` only after review |

## 4. Evidence Note Template

```markdown
# Evidence · <short title>

Date:
Source Repo:
Source Type:
Sensitivity Level:
Related Canon Node:
Related Issue:
Evidence Strength: none / weak / medium / strong

## 1. Context

## 2. Anonymized Source Summary

## 3. Observed Pattern

## 4. Supporting Details

## 5. What This Evidence Supports

## 6. What It Does Not Prove

## 7. Privacy Review

- [ ] no identifiable person
- [ ] no identifiable company unless approved
- [ ] no raw transcript copied
- [ ] no private commercial detail exposed
- [ ] source path retained internally

## 8. Writeback Target

## 9. Next C3 / C4
```

## 5. Evidence Strength Rule

| Strength | Required Proof | Allowed PMO State |
|---|---|---|
| none | only source exists | observe / seed |
| weak | one plausible source or internal note | draft / needs more evidence |
| medium | repeated internal evidence or real project usage | operating candidate |
| strong | repeated usage, validated output, review, and writeback | green candidate only after review |

## 6. What Can Be Copied or Referenced

Allowed:

```text
- anonymized patterns
- generalized user language
- approved source summaries
- non-identifying evidence codes
- internal source paths
```

Not allowed:

```text
- raw transcript text
- private client context
- identifiable names
- private commercial data
- source material not reviewed for use
```

## 7. Review Checklist

Before writing to `brain/evidence/`, answer:

```text
1. What source repo does this come from?
2. What is the sensitivity level?
3. What canon node or issue does it support?
4. What claim does it support?
5. What claim does it not support?
6. What has been removed or anonymized?
7. Where should the evidence write back?
8. Does this require human approval before public use?
```

## 8. Evolution Trigger

Create an evolution note when evidence changes one of these:

```text
- module understanding
- repo ownership rule
- PMO workflow
- content-engine pattern
- client evidence pattern
- future canonical candidate
```

Evolution note path:

```text
brain/evolution-notes/YYYY-MM-DD-<topic>.md
```

## 9. False-green Prevention

```text
No source classification, no evidence.
No anonymization, no public-safe use.
No evidence note, no evolution.
No review, no canonical candidate.
No writeback, no Done.
```

## 10. Current Decision

Use this as the first-pass C2 evidence routing template. It supports #170 and PR #172, and should be reused by future C2 evidence extraction tasks.
