# Evolution Note · PMO v2.3 C3 Gap Ranking

Date: 2026-06-30
Version: v2.3

## Input

- PMO OS v2.2 field and view system
- C3 strategic judgment loop
- C4 execution loop
- GitHub Issues
- Evidence Review pattern

## Output

A real C3 Gap Ranking loop was executed through GitHub Issues:

```text
C3 Gap #63 -> C4 Task #64 -> Evidence Review #65 -> dashboard data -> evidence -> evolution
```

## What changed

PMO OS moved from specification to real issue-backed project control.

## Learning

C3 Gap Ranking needs two layers:

1. scoring model: importance x urgency x evidence strength x reversibility x writeback value
2. handoff model: selected gap -> C4 task -> evidence review

## Remaining gaps

- GitHub Projects fields are still not configured in the GitHub Projects UI.
- PMO Dashboard is static and not yet reading live GitHub Issues.
- Gap Score is manually calculated.
- Evidence Strength is manually assigned.

## Next reuse

Use this v2.3 pattern for every new C3 gap.

## Next action

v2.4 should implement selected-gap-to-C4-task templates in Whiteboard and PMO Dashboard.
