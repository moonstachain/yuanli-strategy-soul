# PMO Metrics Engine v3.0

## Goal

Move PMO metrics from labels to computed signals.

## Script

```text
scripts/calc-pmo-metrics.js
```

## Output

```text
docs/pmo-metrics-latest.json
```

## First metrics

1. Evidence Coverage
2. Strong Evidence Rate
3. Backwrite Rate
4. C3 Gap Close Rate
5. Blocked Age signal

## Acceptance

- Each metric has numerator, denominator, value, unit, and interpretation.
- Metrics can be used by PMO Dashboard and Weekly Review.

## Current baseline

- Evidence Coverage: 50%
- Strong Evidence Rate: 17%
- Backwrite Rate: 100% planned
- C3 Gap Close Rate: 0%
- Blocked Age: 0 current blocked items
