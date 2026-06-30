# PMO Overview-first Cockpit v2.7

## Goal

Upgrade the PMO dashboard from local dispatch-chain display to overview-first cockpit.

## Design principle

```text
Overview first -> Operating chain -> Six PMO views -> Details
```

A PMO cockpit should answer global health before showing local tasks.

## New first screen

The top section now shows:

- PMO Health
- UI Version
- Data Version
- Open Items
- Evidence Coverage
- Next P0

## Strategic signal

The cockpit shows a plain-language strategic signal:

```text
PMO has moved from local dispatch to overview-first management.
```

It links to:

- `docs/pmo-weekly-review-latest.md`
- `brain/evolution-notes/2026-06-30-weekly-pmo-review.md`

## Operating chain

The local chain remains visible, but is now the second layer:

```text
C3 Gap -> C4 Task -> Evidence Review -> Weekly Review -> Evolution Note
```

## Why this matters

Before v2.7, the dashboard emphasized #63 -> #64 -> #65.

After v2.7, it first answers:

- Is the PMO healthy?
- What is the system version?
- What changed this week?
- What is the only P0?
- Is evidence strong enough?
- Has learning been written back?

## Acceptance

v2.7 is accepted if:

- PMO dashboard opens with executive overview
- local dispatch chain is still visible
- weekly review and evolution note are linked
- six PMO views and raw items remain accessible

## Next step

v2.8 should add interactive view switching so each of the six PMO views becomes a drill-down panel.
