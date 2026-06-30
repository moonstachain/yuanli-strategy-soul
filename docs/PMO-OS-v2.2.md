# Yuanli PMO OS v2.2

## Purpose

Yuanli PMO OS is the project control layer for the Yuanli Strategy Trilogy.

It combines:

- GitHub Projects fields, views, automation, and status updates
- Apache DevLake style engineering metrics
- Backstage style asset catalog
- Plane and OpenProject object model
- C3 strategic map and C4 execution loop
- Evidence, Evolution Note, and Brain writeback

## Core formula

```text
PMO OS = Canon Node + Capability Gap + Priority + Agent Contract + Issue + Evidence + Evolution Note + Review
```

## Object model

- Portfolio: Yuanli Strategy Trilogy
- Project: Whiteboard OS / PMO OS / Brain OS
- Work Item: GitHub Issue or PR
- Gap: C3 capability gap
- Task: C4 execution item
- Evidence: proof or source record
- Evolution Note: reusable learning
- Asset: docs, data, template, page, agent contract
- Review: weekly or milestone PMO check

## GitHub Projects fields

- Canon Node: A1-C4
- Work Type: canon, ui, data, brain, evidence, automation, qa, docs
- Strategic Layer: strategy, design, execution, validation, recursive
- Capability Domain: matrix, user, content, product, delivery, growth, data, moat
- Status: idea, draft, ready, in_progress, blocked, qa, done, archived
- PMO Health: green, yellow, red
- Priority: P0, P1, P2, P3
- Gap Score: number
- Evidence Strength: none, weak, medium, strong
- Agent Level: L0, L1, L2, L3, L4
- Approval Gate: none, status_change, priority_change, publish, external_write, budget
- Writeback Target: whiteboard, brain, project, codex, docs, evidence
- Owner: human, AI, Codex, agent, mixed
- Review Cadence: daily, weekly, milestone, ad hoc

## Six PMO views

### 1. Strategic Cockpit

Purpose: see project health and next strategic decision.

Fields: Canon Node, PMO Health, Priority, Gap Score, Evidence Strength, Risk, Next Action.

### 2. C3 Gap Ranking

Purpose: rank capability gaps before execution.

Fields: Capability Domain, Strategic Layer, Gap Score, Evidence Strength, Selected Gap, Next C4 Task.

Formula:

```text
Gap Score = importance x urgency x evidence_strength x reversibility x writeback_value
```

### 3. C4 Execution Board

Purpose: convert selected gaps into executable work.

Columns: To Do, In Progress, Dry Run, Approval, Done, Backwritten.

### 4. Evidence Ledger

Purpose: check whether work is proven, not only claimed.

Fields: Work Item, Evidence Path, Evidence Strength, Accepted, Missing, Next Reuse.

### 5. Evolution Review

Purpose: verify that every output becomes reusable input.

Fields: Evolution Note, What Changed, Next Reuse, Writeback Target, System Improvement.

### 6. Roadmap / Milestone

Purpose: manage release sequence.

Milestones:

- v2.2 PMO OS
- v2.3 C3 Gap Ranking
- v2.4 Selected Gap to C4 Task
- v2.5 PMO Dashboard
- v3.0 Agent Execution Bridge

## Automation rules

- New issue with label c3-gap -> Status: ready
- New issue with label c4-task -> Status: todo
- PR opened -> Status: in_progress
- PR merged -> Status: done
- Evidence file added -> Evidence Strength at least weak
- Evolution note added -> Writeback complete
- Issue blocked for 7 days -> PMO Health: red

## Weekly PMO review

Every review asks:

- What changed this week?
- Which C3 gaps were ranked or closed?
- Which C4 tasks finished?
- Which evidence files were added?
- Which evolution notes created reuse?
- Which blockers are older than 7 days?
- What is next week's only P0?

## Implementation boundary

This repository can store specs, templates, dashboards, evidence, and notes.

Actual GitHub Projects views must be configured in GitHub Projects UI or GraphQL automation because the current connector does not expose project view creation.
