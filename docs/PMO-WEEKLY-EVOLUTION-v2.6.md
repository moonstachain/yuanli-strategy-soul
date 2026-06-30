# PMO Weekly Evolution Writeback v2.6

## Goal

Turn weekly PMO review into organizational learning.

## What this adds

- `scripts/generate-pmo-weekly-evolution.js`
- weekly PMO review to evolution-note conversion
- seed evolution note in `brain/evolution-notes`

## Flow

```text
PMO Weekly Review
-> evolution script reads docs/pmo-weekly-review-latest.md
-> extract executive summary, C3 gaps, C4 queue, evidence queue, risks, next P0
-> write brain/evolution-notes/YYYY-MM-DD-weekly-pmo-review.md
```

## Automation level

This is L3.8 automation:

```text
Issue data -> Weekly Review -> Evolution Note
```

It is not yet L4 because the evolution note still needs human review before becoming canonical strategy.

## Acceptance

v2.6 is accepted if:

- a weekly review exists
- an evolution note can be generated from the weekly review
- the evolution note names next P0 and writeback targets

## Next step

v2.7 should upgrade the PMO dashboard from local dispatch chain to a true overview-first cockpit.
