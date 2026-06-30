# Task Bridge v3.1

## Goal

Generate a C4 task draft from a selected C3 gap issue without autonomous project mutation.

## Script

```text
node scripts/generate-c4-task-from-gap.js <issue_number>
```

## Output

```text
drafts/c4-task-from-<issue>.md
```

## Safety boundary

The script creates a draft only. It must not create, close, or mutate issues without human approval.

## Draft fields

- Source Gap
- Objective
- Context
- Gap Score
- Evidence Strength
- Steps
- Acceptance Criteria
- Evidence Required
- Human Approval Boundary

## Acceptance

- Deterministic draft output
- Human approval explicit
- Source gap traceable
