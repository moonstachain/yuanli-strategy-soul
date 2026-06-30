# Operator Skill Reuse Dry-run v1

> Task: #117  
> Source Gap: #114  
> Parent Pilot: #109  
> EPIC: #106  
> CBM Cell: `engineering.execute.operator-skill-reuse`  
> Dry-run Scenario: `client-project-governance-to-evidence-backwrite`  
> Boundary: dry-run only. No external write. No publish. No canonical update.

---

## 0. 一句话定义

```text
Operator Skill 多机复用，是把一个已验证过的治理流程，抽象成可被 ChatGPT / Codex / Agent / Claude 复用的任务链，让它在固定边界内执行、产出证据、准备回写，但不越过人类审批门。
```

它不是：

```text
不是自动化一切。
不是让 Agent 自主决策战略优先级。
不是绕过明哥审批。
不是自动发布、自动写正典、自动外部写入。
```

它必须回答：

```text
这个流程能否被抽象成 Skill？
输入边界是什么？
允许输出什么？
哪些动作必须人工审批？
如何生成 Evidence Review 与 Evolution Note？
如何回写 CBM Cell，但不污染正典？
```

---

## 1. Dry-run 选择

### 1.1 Skill Candidate

```text
client-project-governance-to-evidence-backwrite
```

### 1.2 来源流程

```text
#116 Client Project Portfolio Governance Pilot
```

### 1.3 选择理由

```text
该流程低风险、结构清晰、已有匿名样本，适合验证 Operator Skill 是否能把业务项目治理流程变成可复用的 C4 执行链。
```

---

## 2. Skill Contract

```yaml
skill_id: client-project-governance-to-evidence-backwrite
version: v0.1-dryrun
cbm_cell: engineering.execute.operator-skill-reuse
source_workflow: client.control.project-portfolio-governance
source_task: '#116'
autonomy_level: L2
allowed_inputs:
  - anonymized_project_context
  - project_type
  - strategic_goal
  - commitments
  - risks
  - existing_artifacts
allowed_outputs:
  - meeting_quartet
  - risk_list
  - next_c4_task
  - evidence_review_draft
  - evolution_note_draft
  - cbm_backwrite_proposal
forbidden_outputs:
  - external_client_write
  - identifiable_client_detail
  - canonical_update
  - automatic_publish
  - budget_or_contract_decision
human_approval_required:
  - any identifiable client data
  - publishing a case
  - marking evidence as strong
  - marking a Cell as validated
  - writing into CONSTITUTION.md
```

---

## 3. Tools Allowed

### 3.1 ChatGPT

```text
Read context, draft strategy, identify gap, generate review and note drafts.
```

### 3.2 Codex

```text
Create or update repository artifacts after explicit approval.
Run file structure changes.
Prepare repeatable scripts later.
```

### 3.3 Agent / Operator

```text
Perform dry-run inside fixed boundary.
Generate output package.
Report status.
Prepare backwrite, but do not publish or write canon.
```

### 3.4 Claude / Other LLM

```text
Cross-check structure, rewrite drafts, compare reasoning, but no source-of-truth authority.
```

---

## 4. Dry-run Input Template

```yaml
anonymized_project_context:
project_type:
strategic_goal:
current_commitments:
risks:
existing_artifacts:
cbm_cell:
human_approval_gate:
```

---

## 5. Dry-run Output Package

```yaml
meeting_quartet:
  goal:
  commitment:
  risk:
  next_step:
risk_list:
next_c4_task:
evidence_review_draft:
evolution_note_draft:
cbm_backwrite_proposal:
  cell:
  previous_status:
  proposed_status:
  previous_evidence:
  proposed_evidence:
  validated:
  reason:
```

---

## 6. Dry-run Execution

### 6.1 Input Used

```yaml
anonymized_project_context: client-anon-001-high-ticket-service-growth
project_type: 高客单价专业服务 / 增长与交付治理
strategic_goal: 把客户项目从一次性交付升级为可复盘、可证据化、可回写的项目组合治理样本。
current_commitments:
  - 建立客户项目组合治理模板
  - 识别项目最大瓶颈
  - 派生下一步 C4 Task
risks:
  - 模板化过强，脱离真实客户语境
  - 缺少客户真实反馈
  - 客户数据隐私风险
existing_artifacts:
  - docs/CLIENT-PROJECT-PORTFOLIO-PILOT-v1.md
  - brain/evidence/2026-06-30-client-project-portfolio-pilot.md
  - brain/evolution-notes/2026-06-30-client-project-portfolio-pilot.md
cbm_cell: client.control.project-portfolio-governance
human_approval_gate:
  - external client data
  - publish
  - validated / strong evidence status
```

### 6.2 Output Produced

```yaml
meeting_quartet:
  goal: 把客户项目治理标准化为 CBM-PMO 对象。
  commitment: 输出项目四元组、风险清单、下一步任务、Evidence Review、Evolution Note。
  risk: 没有客户侧确认前不得 validated / strong。
  next_step: 将该流程封装成 Operator Skill dry-run，并进入工程复用验证。
risk_list:
  - privacy_leakage
  - false_green
  - over_template_without_real_signal
  - automatic_canon_pollution
next_c4_task: '#117 operator skill reuse dry-run pilot'
evidence_review_draft: brain/evidence/2026-06-30-operator-skill-reuse-dryrun.md
evolution_note_draft: brain/evolution-notes/2026-06-30-operator-skill-reuse-dryrun.md
cbm_backwrite_proposal:
  cell: engineering.execute.operator-skill-reuse
  previous_status: seed
  proposed_status: draft
  previous_evidence: weak
  proposed_evidence: medium
  validated: no
  reason: dry-run contract and output package exist, but no live autonomous multi-tool execution yet.
```

---

## 7. Approval Gates

| Gate | Required? | Reason |
|---|---|---|
| External write | yes | Prevent uncontrolled publication or data leak |
| Client identifiable detail | yes | Privacy and trust boundary |
| Mark as strong evidence | yes | Requires real client signal or operational data |
| Mark as validated | yes | Requires repeated or external validation |
| Canonical update | yes | Prevent canon pollution |
| Dashboard sync | yes | Requires post-pilot consolidation |

---

## 8. OS Governance Control Loop Check

| Gate | Result |
|---|---|
| CBM Cell | pass: `engineering.execute.operator-skill-reuse` |
| Control Point | pass: skill reuse / cross-tool execution / approval gates |
| C3 Gap | pass: #114 |
| C4 Task | pass: #117 |
| Evidence Required | pass |
| Backwrite Target | pass |
| Human Gate | pass |

Conclusion:

```text
#115 governance loop can be applied to an engineering automation dry-run.
```

---

## 9. Cross-tool Reuse Judgment

| Tool | Reusable? | Boundary |
|---|---|---|
| ChatGPT | yes | Draft / analyze / evidence note |
| Codex | yes | Repository file creation after approval |
| Agent / Operator | yes, dry-run only | Can prepare package, cannot publish or update canon |
| Claude / Other LLM | yes | Secondary review only |

---

## 10. State Judgment

`engineering.execute.operator-skill-reuse` can move from:

```text
seed / weak evidence
```

to:

```text
draft / medium evidence
```

Reason:

```text
The skill contract, dry-run input/output package, approval gates, evidence review, and evolution note now exist.
```

But it must not move to validated because:

```text
No live multi-tool autonomous run has occurred; this is a dry-run, not an operating automation.
```

---

## 11. Next Step

```text
Create CBM-PMO Pilot Report v1 and move to Dashboard Capability Cockpit design.
```

Reason:

```text
P1, P2, and P3 now provide enough evidence to summarize the pilot and prepare #110 Dashboard work.
```
