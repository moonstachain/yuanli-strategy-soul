# PMO Weekly Review Generator v2.5

## Goal

Generate a weekly PMO review from GitHub Issues.

## What this adds

- `scripts/generate-pmo-weekly-review.js`
- `.github/workflows/pmo-weekly-review.yml`
- `docs/pmo-weekly-review-latest.md`

## Flow

```text
Weekly schedule or manual dispatch
-> GitHub Action
-> review script reads issues
-> classify C3 Gap / C4 Task / Evidence Review
-> summarize new, closed, open, and ranked items
-> write docs/pmo-weekly-review-latest.md
-> commit update
```

## Review sections

- Executive Summary
- This Week New Items
- This Week Closed Items
- C3 Gap Ranking
- C4 Execution Queue
- Evidence Review Queue
- Blockers and Risks
- Next Week Only P0
- Writeback

## Automation level

This is L3.5 automation:

```text
Issue data -> PMO Dashboard -> Weekly Review
```

It is not yet L4 because it does not calculate full Project custom fields, live DORA metrics, or automatically close/evaluate work.

## Acceptance

v2.5 is accepted if:

- weekly review can be generated manually through workflow_dispatch
- weekly review can run on schedule
- output is committed to `docs/pmo-weekly-review-latest.md`
- review identifies next week's only P0

## Next step

v2.6 should connect Weekly Review to Evolution Notes and create a weekly strategic learning writeback.
