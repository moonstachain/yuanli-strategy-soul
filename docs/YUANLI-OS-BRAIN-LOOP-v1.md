# Yuanli OS Brain Loop v1

Date: 2026-06-30  
Status: draft / shared operating protocol / not merged  
Applies to: #183, #184, #185

## 1. One-line Definition

Yuanli OS Brain Loop v1 is the first runnable neural loop of Yuanli OS.

It connects source material, canon, capabilities, programs, execution, evidence, evolution, dream review, and backwrite into one auditable operating chain.

```text
Source → Sensitivity → Canon → Capability → Program → C3/C4 → Artifact → Feedback → Evidence → Evolution → Dream → Backwrite
```

## 2. Why This Exists

Yuanli OS already has strong ideas, strong source collection, strong GitHub assets, strong content ambition, and strong tool/capability assets.

The bottleneck is not lack of material.

The bottleneck is:

```text
strong collection + strong tools + weak routing + weak projection + weak evidence loop
```

Brain Loop v1 turns chat-driven work into system-driven work.

## 3. Strategic Position

Brain Loop v1 is not a third big program.

It is the shared operating protocol beneath the two current CBM-PMO programs:

| Program | Role in Brain Loop |
|---|---|
| #183 Yuanli Content Engine CBM-PMO Program | Produces content artifacts, feedback signals, evidence, and evolution. |
| #184 GitHub Strategic Asset Portfolio Program | Governs repos, capabilities, source boundaries, dashboards, and review rhythm. |

## 4. Reference Architecture Inputs

| Input | Role |
|---|---|
| GBrain | Reference architecture for agent memory, brain/source routing, resolver, health checks, and dream cycle. |
| LLM Wiki | Yuanli Source Brain / Layer 1.5 durable knowledge and source material layer. |
| YC agent infrastructure method | Operating benchmark for organization-level shared intelligence, tool registry, artifacts, and self-improving skills. |
| Zhiku Capability Market | Capability discovery gate before creating new tools, skills, agents, commands, MCPs, settings, or hooks. |
| GitHub CBM-PMO | Execution governance surface for C3/C4, evidence, evolution, dashboard, and review. |

## 5. Eight Loop Nodes

### 5.1 Source Intake

Every meaningful input becomes a SourceItem before it becomes a task.

Allowed source types:

```text
chat
GitHub issue
GitHub PR
LLM Wiki page
transcript
Get note
content feedback
Zhiku catalog item
client case
investment note
external article
external video
external repo
```

Output:

```text
SourceItem
```

### 5.2 Sensitivity Gate

Every source receives a sensitivity level before use.

Allowed sensitivity levels:

```text
raw
sensitive
private-default
anonymized
public-safe
canonical
```

Hard rule:

```text
Private or sensitive source material cannot be used for public content unless it is anonymized and human-approved.
```

### 5.3 Canon Resolver

Every source or task must be mapped to Yuanli canon before entering main PMO.

Resolution dimensions:

```text
trilogy_part
module
canon_node
claim_type
canonical_status
```

If it cannot be mapped, it goes to observe/source radar, not main PMO.

### 5.4 Capability Resolver

Before creating a new C4 task, check whether existing capability already exists.

Capability sources:

```text
Zhiku Market
GitHub L1/L2 asset pool
existing repo
existing skill
existing agent
existing command
existing MCP
existing dashboard
```

Allowed decisions:

```text
reuse
adapt
build_new
reject
observe
```

Hard rule:

```text
Capability before build.
```

### 5.5 Program Router

Routes the work to a formal CBM-PMO program.

Current routes:

| Route | Program |
|---|---|
| content topic, article, card, script, channel, feedback | #183 |
| repo governance, asset pool, dashboard, capability classification | #184 |
| source routing, evidence, anonymization, evolution | C2 Brain layer |
| skill/agent/tool discovery | Zhiku Capability Layer |

### 5.6 C3/C4 Execution

The task becomes a C3 Gap or C4 Task only after source, sensitivity, canon, capability, and program routing are known.

Hard rule:

```text
No C3/C4 without route.
```

### 5.7 Evidence + Evolution

Every meaningful output must produce or update evidence.

Evidence answers:

```text
What happened?
What does it support?
What does it not prove?
What source does it come from?
What canon node does it affect?
What next C3/C4 does it imply?
```

Evolution answers:

```text
What assumption changed?
What pattern emerged?
What decision changes?
Should this become a canonical candidate?
```

### 5.8 Dream / Pattern / Backwrite

At least weekly, review recent evidence, content feedback, GitHub activity, and source additions to extract recurring patterns.

Dream review outputs:

```text
recurring_patterns
new_risks
repeated_capability_needs
canon_candidate_signals
stale_assumptions
suggested_c3_gaps
suggested_c4_tasks
```

Backwrite targets:

```text
Program Board
Project Charter
brain/evidence
brain/evolution-notes
brain/canonical-learning
content topic map
GitHub portfolio registry
CBM cockpit
```

## 6. Core Iron Rules

```text
Chat is input, not system of record.
Source before claim.
Canon before content.
Capability before build.
Route before C3/C4.
Evidence before green.
Evolution before Done.
Backwrite before compounding.
Human gate before public or irreversible action.
```

中文版本：

```text
聊天只是输入，不是真相源。
先有来源，再有判断。
先归文脉，再做内容。
先查能力，再造工具。
先有路由，再立 C3/C4。
先有证据，再标绿。
先有演化，再完成。
先有回写，再复利。
公开和不可逆动作，必须有人审。
```

## 7. Minimum Viable Loop

First MVP loop:

```text
Topic: 创业者不是缺能力，而是缺一个可复利的事业操作系统
Canon Node: C2 一个大脑 / C4 一条链路
Programs: #183 and #184
Sources: YC methodology, GBrain, LLM Wiki source radar, Zhiku capability market
Output: one content artifact, one feedback record, one evidence note, one evolution note, one dream review, one program-board backwrite
```

## 8. Maturity Model

| Level | Meaning |
|---|---|
| M0 | Only chat and scattered files |
| M1 | Intake and routing documents exist |
| M2 | One source-to-evidence-to-evolution loop completed |
| M3 | Weekly dream review runs |
| M4 | System detects pattern, duplication, stale truth, and false-green risk |
| M5 | System proposes C3/C4 tasks that humans approve and agents execute |

Current target:

```text
Current: M1.2
30-day target: M2.5
90-day target: M3.5
```

## 9. Initial Dashboard Metrics

| Metric | Meaning |
|---|---|
| source_items_registered | Count of registered inputs |
| sensitivity_reviews_completed | Count of sources with sensitivity gate |
| canon_resolutions_completed | Count of sources/tasks mapped to canon |
| capability_preflights_completed | Count of C4 tasks with capability check |
| program_routes_completed | Count of tasks routed to formal programs |
| c4_tasks_created | Count of executable tasks created after routing |
| evidence_notes_written | Count of evidence notes |
| evolution_notes_written | Count of evolution notes |
| dream_reviews_completed | Count of dream/pattern reviews |
| backwrites_completed | Count of completed backwrites |

## 10. Status Color Rules

| Color | Meaning |
|---|---|
| gray | registered only |
| amber | routed but no evidence |
| blue | evidence exists but not reviewed |
| green | reviewed + evolution + backwrite complete |
| red | sensitivity violation or false-green risk |

Hard rule:

```text
draft ≠ green
feedback missing ≠ Done
source unclear ≠ evidence
private source ≠ public content
```
