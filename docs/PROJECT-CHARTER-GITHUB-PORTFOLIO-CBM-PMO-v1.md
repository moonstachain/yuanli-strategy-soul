# Project Charter · GitHub Strategic Asset Portfolio Program v1

Date: 2026-06-30  
Epic: #184  
Status: draft / formal charter / not merged

## 1. North Star

Turn GitHub repositories from a repo collection into a governed strategic capability portfolio.

```text
Repo → Portfolio Layer → CBM Cell → C3 Gap → C4 Task → Evidence → Evolution → Dashboard → Review Rhythm
```

## 2. Why This Program Exists

GitHub activity is not value by itself. A repository becomes strategically governable only when it has a capability role, evidence boundary, next task, reuse path, and writeback target.

This program prevents scattered repos, tools, dashboards, agents, and experiments from polluting the main PMO while preserving valuable assets for reuse.

## 3. Program Type

Governance program / strategic asset portfolio program.

## 4. Portfolio Layers

| Layer | Meaning | Governance Mode |
|---|---|---|
| L1 Core CBM-PMO Governance | Strategic, canon, C2 brain, content, client evidence, or decision-critical assets | C3/C4/Evidence/Evolution/Dashboard |
| L2 Capability Asset Pool | Tools, agents, skills, automations, dashboards, writers, publishers | Asset contract / reuse path / promote only after evidence |
| L3 Observe / Archive Candidate | Demos, clones, inactive experiments, low-evidence projects | Index only / quarterly review / no automatic deletion |

## 5. CBM Mapping

### Primary CBM Cells

| Cell | Role |
|---|---|
| `strategy.control.pmo-rhythm-and-risk` | Owns portfolio governance rhythm, false-green risk, review gates. |
| `knowledge.control.knowledge-map-consistency` | Owns source-of-truth boundaries across brain, canon, and evidence repos. |
| `engineering.execute.operator-skill-reuse` | Owns reusable technical and agent assets as capability pool. |

### Secondary CBM Cells

| Cell | Why It Matters |
|---|---|
| `growth.control.content-reuse-pipeline` | Content tools and production repos must be routed into content program. |
| `client.control.project-portfolio-governance` | Client evidence repos need privacy and writeback boundary. |
| `investment.direct.wealth-research-framework` | Research repos need decision-record evidence loop. |

## 6. Shared Operating Protocol

This program uses Yuanli OS Brain Loop v1 as its shared operating protocol.

Protocol files:

```text
docs/YUANLI-OS-BRAIN-LOOP-v1.md
docs/YUANLI-OS-BRAIN-LOOP-RUNBOOK-v1.md
docs/YUANLI-OS-BRAIN-LOOP-DATA-MODEL-v1.md
```

GitHub Portfolio's role in the Brain Loop:

```text
Repo / Skill / Agent / Source → capability classification → C3/C4 governance → evidence → evolution → dashboard → review rhythm
```

Portfolio work must now pass these gates before it is treated as strategic progress:

1. Source or repo role is known.
2. Sensitivity / visibility boundary is known.
3. Canon Node or Program route is assigned.
4. Capability Resolver checks Zhiku / L1/L2 asset pool before build-new.
5. Program Router confirms #184 or related program.
6. Evidence exists for L1/L2 promotion.
7. Evolution and backwrite exist before compounding.

## 7. Current Maturity

```text
M2 / 5
```

| Dimension | State |
|---|---|
| Strategic maturity | high |
| Governance maturity | medium-high |
| Human visibility | medium |
| Operating rhythm | low |
| Evidence maturity | low-to-medium |

Current interpretation:

```text
Governance architecture and human visibility reached. Recurring portfolio review not yet run. Brain Loop v1 now defines the shared source/capability/evidence protocol.
```

## 8. Current Assets

| Asset | State |
|---|---|
| #152 GitHub Portfolio Landing Program | open |
| #153 Registry task | open |
| #154 Policy task | open |
| #155 L1 onboarding task | open |
| #156 Asset pool task | open |
| #157 Dashboard rhythm task | open |
| #165 Registry PR | draft |
| #166 Policy PR | draft |
| #167 L1 onboarding PR | draft |
| #168 Asset pool PR | draft |
| #169 Dashboard rhythm PR | draft |
| #180 Human Review Index PR | draft |
| #181 Dashboard visibility overlay PR | draft |
| #182 Review entry page PR | draft |
| Brain Loop v1 protocol | draft protocol |

## 9. First Milestone

Milestone name:

```text
M3 · First Weekly Portfolio Review Loop
```

Completion criteria:

1. Review #166 policy.
2. Review #165 registry.
3. Review #167 L1 onboarding.
4. Review #168 asset pool.
5. Review #169 dashboard rhythm.
6. Keep all draft / weak items not-green.
7. Produce one portfolio review note.
8. Update the program board with next P0.
9. Run one Brain Loop capability/source review.

## 10. First C3 Gaps

| Gap | Source | Expected C4 |
|---|---|---|
| Repo activity is not yet reliably translated into value governance | #150 / #152 | Review registry and policy |
| Draft work can be auto-synced into misleading green states | #179 / #181 | Keep visibility overlay not-green |
| Humans need one entry point instead of hunting across PRs | #178 / #180 / #182 | Use review entry page |
| L2 tools need asset contracts before promotion | #156 / #168 | Review capability asset pool |
| Source, capability, and program routing are not yet one loop | Brain Loop v1 | Use Brain Loop data model for next review |

## 11. First C4 Backlog

| Priority | Task | Output |
|---|---|---|
| P0 | Review #166 | policy decision |
| P0 | Review #165-#169 | portfolio governance decision |
| P0 | Use #182 as entry point | one visible review page |
| P0 | Produce first portfolio review note | weekly review artifact |
| P0 | Run Brain Loop capability/source review | BLOOP-2026-001 source/capability routing |
| P1 | Link entry page into cockpit | cockpit navigation update |
| P1 | Run false-green audit after review | dashboard correction plan |

## 12. KPIs

| KPI | Initial Target |
|---|---:|
| L1 repo mapping reviewed | yes/no |
| L2 asset pool reviewed | yes/no |
| draft PRs reviewed | 5+ |
| capability preflights completed | 1+ |
| false-green risks accepted | 0 |
| repo lifecycle mutations | 0 |
| weekly portfolio review notes | 1 |
| dream reviews completed | 1 |

## 13. Guardrails

```text
No repo lifecycle mutation without human approval.
No automatic merge.
No evidence, no green.
No evolution, no Done.
No backwrite, no compounding.
No dashboard false-green.
No archive/delete/rename/visibility change from automation.
```

## 14. Review Rhythm

| Rhythm | Review Question |
|---|---|
| Daily during setup | Is any draft work being misread as green? |
| Weekly | Which repo assets move, stay, or remain observe-only? |
| Monthly | Which L2 assets deserve promotion or deprecation review? |
| Dream Review | Which repeated capability needs imply reusable skill/agent/repo consolidation? |

## 15. Immediate Next Action

```text
Use #182 as the human entry point, review #166 before registry/onboarding/dashboard merge decisions, and run Brain Loop v1 as the source/capability routing protocol.
```
