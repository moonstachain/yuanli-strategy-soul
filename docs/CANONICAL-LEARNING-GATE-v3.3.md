# Canonical Learning Gate v3.3

## Goal

Prevent automatically generated Evolution Notes from becoming canonical strategy without human review.

## Script

```text
node scripts/promote-canonical-learning.js <evolution_note> <approve|reject|candidate>
```

## States

- candidate: useful learning, not canonical yet
- approved: can be treated as canonical learning
- rejected: not valid for reuse

## Output

```text
brain/canonical-learning/*.md
```

## Governance rule

Evolution Note is not Canon.

Only human-approved Canonical Learning can update strategy, curriculum, or agent operating rules.

## Acceptance

- Gate script exists.
- States are explicit.
- Human approval rule is documented.
- Brain writeback path exists.
