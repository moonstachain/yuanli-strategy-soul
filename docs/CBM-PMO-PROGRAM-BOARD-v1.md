# CBM-PMO Program Board v1

Date: 2026-06-30  
Status: draft / formal program board / not merged

## 1. Purpose

This board converts two major chat-driven workstreams into formal CBM-PMO programs.

| Program | Epic | Charter | Current Maturity | Next Milestone |
|---|---:|---|---|---|
| Yuanli Content Engine CBM-PMO Program | #183 | `docs/PROJECT-CHARTER-CONTENT-ENGINE-CBM-PMO-v1.md` | M1.5 | First Real Content Feedback Loop |
| GitHub Strategic Asset Portfolio Program | #184 | `docs/PROJECT-CHARTER-GITHUB-PORTFOLIO-CBM-PMO-v1.md` | M2 | First Weekly Portfolio Review Loop |

## 2. Program Logic

```text
Chat is input.
CBM-PMO is execution system.
GitHub is evidence and governance surface.
```

The goal is to stop advancing one scattered conversation task at a time. New work should enter one of the two programs, receive CBM mapping, become C3/C4 work, and leave evidence/evolution/writeback.

## 3. Program A · Content Engine

### Strategic Goal

Turn the Yuanli canon into a repeatable content production, distribution, feedback, evidence, and writeback system.

### PMO View

| Field | Value |
|---|---|
| Epic | #183 |
| Program Type | Production / Growth |
| Primary Domain | growth |
| Primary Cells | `growth.direct.ip-content-portfolio`, `growth.control.content-reuse-pipeline`, `growth.execute.content-draft-package` |
| Current Maturity | M1.5 |
| Stage | contract architecture reached |
| Not Yet | real content feedback loop |
| First P0 | run one content item feedback loop |

### Active / Related Work

| Item | Role | Program State |
|---:|---|---|
| #144 | original content engineering EPIC | linked |
| #147 | content cockpit / 30-day chain task | linked |
| #161 | content integration C3 gap | linked |
| #171 | content integration C4 task | linked |
| #173 | content integration contract PR | review needed |
| #175 | 30D feedback schema C4 task | linked |
| #177 | content feedback schema PR | review needed |

### First Milestone Acceptance

| Acceptance | Status |
|---|---|
| One canon topic selected | not started |
| One content feedback record created | not started |
| One content artifact produced | not started |
| One feedback signal captured | not started |
| One evidence note written | not started |
| One evolution note written | not started |
| One reuse path defined | not started |

## 4. Program B · GitHub Strategic Asset Portfolio

### Strategic Goal

Turn GitHub repositories from a repo collection into a governed strategic capability portfolio.

### PMO View

| Field | Value |
|---|---|
| Epic | #184 |
| Program Type | Governance / Strategic Asset Portfolio |
| Primary Domains | strategy / knowledge / engineering |
| Primary Cells | `strategy.control.pmo-rhythm-and-risk`, `knowledge.control.knowledge-map-consistency`, `engineering.execute.operator-skill-reuse` |
| Current Maturity | M2 |
| Stage | governance architecture + human visibility reached |
| Not Yet | recurring portfolio review |
| First P0 | run first weekly portfolio review loop |

### Active / Related Work

| Item | Role | Program State |
|---:|---|---|
| #152 | portfolio landing EPIC | linked |
| #153 | registry task | linked |
| #154 | policy task | linked |
| #155 | L1 onboarding task | linked |
| #156 | asset pool task | linked |
| #157 | dashboard rhythm task | linked |
| #165 | registry PR | review needed |
| #166 | policy PR | review first |
| #167 | L1 onboarding PR | review needed |
| #168 | asset pool PR | review needed |
| #169 | dashboard rhythm PR | review needed |
| #180 | human review index PR | entry asset |
| #181 | dashboard overlay PR | false-green guard |
| #182 | review entry page PR | human entry point |

### First Milestone Acceptance

| Acceptance | Status |
|---|---|
| Policy reviewed | not started |
| Registry reviewed | not started |
| L1 onboarding reviewed | not started |
| Asset pool reviewed | not started |
| Dashboard rhythm reviewed | not started |
| Draft items kept not-green | active guardrail |
| One portfolio review note written | not started |

## 5. Cross-Program Dependency

| Dependency | Meaning | Rule |
|---|---|---|
| GitHub Portfolio → Content Engine | Content tools must be governed as L2 assets before promotion | no tool promoted without evidence |
| Content Engine → GitHub Portfolio | Real content loops generate evidence for asset reuse | no content output marked Done without feedback |
| C2 Brain → Both Programs | Source material and knowledge routing feed both programs | no sensitive source exposure |
| Dashboard → Both Programs | Human must see status without hunting across PRs | draft items stay amber/not-green |

## 6. Program Board States

| State | Definition |
|---|---|
| chartered | EPIC and charter exist |
| review-ready | artifacts are ready for human review |
| running | first loop is executing |
| evidenced | evidence and evolution notes exist |
| reviewed | weekly review note exists |
| scalable | repeated loop exists without chat dependency |

## 7. Current Board State

| Program | State | Reason |
|---|---|---|
| Content Engine | chartered | #183 + charter created; first content loop not started |
| GitHub Portfolio | chartered / review-ready | #184 + charter + entry page exist; first weekly review not started |

## 8. Next P0 Decisions

| Decision | Owner | Timing |
|---|---|---|
| Approve #166 as first policy review candidate | human | before merge decisions |
| Choose first content topic | human + PMO | after #173/#177 review |
| Run first portfolio review note | PMO | after #166-#169 review |
| Keep #180/#181/#182 draft until final merge decision | human | current |

## 9. Guardrails

```text
No automatic merge.
No repo lifecycle mutation.
No weak evidence green.
No content output Done without feedback.
No sensitive source exposure.
No dashboard state treated as truth without review.
```

## 10. Immediate Next Actions

1. Review this program board.
2. Review #166 policy first.
3. Review #173 and #177 before first content loop.
4. Run first GitHub portfolio review note.
5. Run first content feedback loop.
