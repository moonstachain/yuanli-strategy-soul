# Evidence Acceptance Loop v3.2

## Goal

Move Evidence Review from free-form notes to accepted / missing / rejected states.

## Script

```text
node scripts/evaluate-evidence-review.js <evidence_markdown>
```

## States

- accepted: evidence has enough required sections
- missing: evidence is incomplete and needs repair
- rejected: evidence is too weak to support completion

## Required sections

- Work Items
- Evidence Path
- Evidence Strength
- Finding
- Evolution Note
- Next Reuse

## Output

```text
docs/evidence-evaluations/*.json
```

## Human rule

The script can recommend a state, but the final acceptance decision remains human-reviewed until the PMO reaches L4 automation.
