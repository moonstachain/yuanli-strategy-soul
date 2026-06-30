# PMO Automation Bridge v2.4

## Goal

Move PMO OS from human-assisted dashboard updates to issue-driven dashboard synchronization.

## What this bridge adds

- `scripts/sync-pmo-dashboard.js`
- `.github/workflows/pmo-sync.yml`
- issue and PR event triggers
- automatic rebuild of `docs/pmo-dashboard-data.js`

## Flow

```text
GitHub Issue / PR event
-> GitHub Action
-> sync script reads open issues
-> parse PMO issue bodies
-> regenerate docs/pmo-dashboard-data.js
-> commit dashboard update
-> PMO page refreshes with new data
```

## Current parser rules

The sync script reads open issues and classifies them by title/body:

- C3 Gap -> gap
- C4 Task -> task
- Evidence Review -> evidence

It extracts:

- Type
- Gap Score
- Next C4 Task

Then it builds:

- seed_items
- gap_ranking
- version v2.4
- sync metadata

## Automation level

This is L3 automation:

```text
Issue data -> Dashboard data
```

It is not yet L4/L5 because:

- it does not create GitHub Projects custom fields
- it does not create issues automatically
- it does not generate evidence or evolution notes automatically
- metric calculation is still basic

## Acceptance

PMO v2.4 is accepted if:

- issue or PR change can trigger PMO Sync workflow
- sync script can regenerate `docs/pmo-dashboard-data.js`
- PMO Dashboard can display the generated data

## Next step

v2.5 should add stronger metric calculation and a live PMO Weekly Review generator.
