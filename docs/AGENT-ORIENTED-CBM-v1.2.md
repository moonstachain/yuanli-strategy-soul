# Agent-Oriented CBM v1.2

## Purpose

Whiteboard v1.2 is an operating map for AI and agent systems. It is not only a human dashboard.

The map should help AI read context, draft strategy, ask for human approval, create tasks, report feedback, and prepare writeback.

## Roles

Human owns values, boundaries, strategic tradeoffs, approval gates, taste, and final judgment.

AI owns context reading, knowledge retrieval, strategy drafting, gap detection, task decomposition, and feedback notes.

Agent owns approved execution, dry-run simulation, state reporting, artifact generation, and writeback preparation.

## Agent Contract

Each capability component becomes an Agent Contract.

Required fields:

- canon_node
- capability_domain
- responsibility_layer
- status
- control_point
- bottleneck
- human_role
- agent_role
- autonomy_level
- context_required
- tools_allowed
- outputs_allowed
- approval_gates
- evidence_required
- feedback_signals
- writeback_targets

## Autonomy Levels

- L0 Read Only: read, summarize, explain.
- L1 Draft: create drafts, options, issues, tasks.
- L2 Dry Run: simulate execution and prepare mappings.
- L3 Execute With Approval: execute approved actions.
- L4 Autonomous Loop: execute, verify, and write back inside fixed boundaries.

Default level is L1 or L2.

## Cell Structure

```json
{
  "id": "C3.strategy.design",
  "canon_node": "C3",
  "capability_domain": "strategy_map",
  "responsibility_layer": "design",
  "status": "draft",
  "control_point": "capability configuration",
  "bottleneck": "missing evidence",
  "human_role": "approve strategic tradeoffs",
  "agent_role": "generate map options",
  "autonomy_level": "L2",
  "context_required": ["CONSTITUTION", "brain index"],
  "tools_allowed": ["GitHub read", "local draft"],
  "outputs_allowed": ["strategy draft", "Codex task"],
  "approval_gates": ["status change", "priority change"],
  "evidence_required": ["source", "case", "decision"],
  "feedback_signals": ["covered", "missing", "risk", "next"],
  "writeback_targets": ["whiteboard", "brain", "project", "codex"]
}
```

## Negotiation Protocol

1. AI reads context and cell.
2. AI drafts a strategy.
3. AI names evidence and uncertainty.
4. Human approves, edits, rejects, or asks for another option.
5. Agent acts inside the approved boundary.

## Execution Protocol

Each task needs objective, input context, allowed tools, output artifacts, acceptance criteria, approval gate, and writeback target.

## Feedback and Writeback

After execution, the agent should create a feedback note, evidence references, state proposal, remaining gaps, next action, Evolution Note, and writeback target.

Missing evidence is never green. Risk cells stay visible until resolved or accepted.
