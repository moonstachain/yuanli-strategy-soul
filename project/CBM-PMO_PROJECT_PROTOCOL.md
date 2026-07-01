# CBM-PMO Project Protocol · 原力战略项目执行协议

> 状态：v1 · 可复用操作协议  
> 归属：project / PMO / C3 一张地图 / C4 一条链路  
> 服务脊骨：ʸx / OSA / 递归回写  
> 上位方法论：`docs/原力战略-CBM-PMO方法论-v1.md`

---

## 0. 适用范围

当用户发起以下任务时，默认使用本协议：

```text
战略项目
内容工程
课程 / 书稿 / 栏目工程
客户项目
GitHub 仓库治理
Agent / Codex / 自动化工程
知识库 / Brain / Evidence 工程
产品 / 网站 / Dashboard 工程
```

触发语：

```text
按照原力战略-CBM-PMO处理
按 CBM-PMO 拆一下
帮我系统性完成和管理这个战略项目
把这个项目沉淀成以后可复用的方法
```

---

## 1. 总链路

```text
战略请求
→ Intake
→ Strategy Brief
→ CBM Cell Map
→ C3 Gap
→ C4 Task
→ GitHub Project / Issue
→ Codex / Human Execution
→ PR / Artifact
→ Evidence Review
→ Evolution Note
→ Backwrite
→ Next Reuse
```

---

## 2. Step 1：Intake

### 2.1 必填信息

```text
任务名：
背景：
用户想要的结果：
已有材料：
预期输出：
是否需要 GitHub：是 / 否 / 待判断
是否需要 Codex：是 / 否 / 待判断
是否需要形成长期资产：是 / 否 / 待判断
```

### 2.2 Intake 裁决

```text
所属部：原力资产 / 原力创业 / 原力 OS / 跨三部 / 治理
所属模块：A1 / A2 / A3 / A4 / B1 / B2 / B3 / B4 / C1 / C2 / C3 / C4 / 无
服务脊骨：ʸx / 你×AI / 借势×合力 / 信息五层 / OSA / 递归回写 / 其他
任务类型：EPIC / C3 Gap / C4 Task / Evidence / Evolution / Backwrite
优先级：P0 / P1 / P2 / P3
```

---

## 3. Step 2：Strategy Brief

每个战略项目先生成 Strategy Brief。

```markdown
# Strategy Brief

## 一句话目标

## 为什么现在做

## 第一性问题

## 所属模块
- Area:
- Module:
- Spine:

## 不做什么

## 最小可交付物

## 成功定义

## Evidence 要求

## Writeback Target

## Next Reuse
```

---

## 4. Step 3：CBM Cell Map

### 4.1 最小表格

| CBM Cell | 能力名称 | Layer | Canon Node | 控制点 | 当前状态 | 瓶颈 | Evidence | 下一步 |
|---|---|---|---|---|---|---|---|---|
| `<domain>.<layer>.<capability>` |  | direct/control/execute | A1-C4 |  | missing/seed/draft/validated/operating/compounding |  | E0-E4 | C3/C4 |

### 4.2 Cell 选择标准

一个能力组件只有满足以下条件，才进入 CBM Map：

```text
1. 它影响战略方向、控制点、瓶颈或复用路径。
2. 它能生成 C3 Gap 或 C4 Task。
3. 它能被 Evidence 验证。
4. 它有明确回写位置。
5. 它完成后会让下一次项目更强。
```

---

## 5. Step 4：C3 Gap

C3 Gap 是战略判断缺口，不是执行任务。

```markdown
# [C3 Gap] <能力缺口名称>

## Type
C3 Gap / <领域>

## Source
- Strategy Brief:
- CBM Cell:

## First性问题

## Capability Context
- CBM Cell ID:
- Capability Domain:
- Responsibility Layer:
- Canon Node:
- Control Point:

## Current State

## Bottleneck

## Evidence Strength
E0 / E1 / E2 / E3 / E4

## Why Now

## Expected C4 Task

## Human Decision Needed

## Writeback Target
```

---

## 6. Step 5：C4 Task

C4 Task 是可执行任务。

```markdown
# [C4 Task] <执行任务名称>

## Type
C4 Task / <任务类型>

## Parent
- C3 Gap:
- EPIC:

## Objective

## Input Context

## Allowed Tools

## Steps
1.
2.
3.

## Output Artifacts
- Path:
- Purpose:
- Owner:

## Acceptance Criteria
- [ ] 功能验收
- [ ] 内容验收
- [ ] 结构验收
- [ ] 风格验收
- [ ] Evidence 验收
- [ ] Backwrite 验收

## Evidence Required

## Approval Gate

## Writeback Target

## Next Reuse
```

---

## 7. Step 6：GitHub Project 字段

建议所有 CBM-PMO 项目至少配置以下字段：

| 字段 | 值 |
|---|---|
| Area | asset / startup / os / cross-trilogy / governance |
| Module | A1-C4 |
| Spine | ʸx / OSA / 递归回写 / 借势×合力 / 你×AI |
| CBM Domain | strategy / growth / client / knowledge / engineering / investment |
| CBM Cell | `<domain>.<layer>.<capability>` |
| Type | EPIC / C3 Gap / C4 Task / Evidence / Evolution / Backwrite |
| Priority | P0 / P1 / P2 / P3 |
| Status | Inbox / Triage / Concept / Design / Codex Ready / In Progress / Review / Done / Backwrite |
| Evidence Strength | E0 / E1 / E2 / E3 / E4 |
| Codex Ready | Yes / No / Needs Context |
| Human Gate | Required / Not Required |
| Writeback Target | docs / brain / project / codex / templates / source |
| Reuse Path | text |

---

## 8. Step 7：Execution

### 8.1 Human Execution

适合：战略判断、正典裁决、客户理解、审美判断、最终验收。

必须输出：

```text
判断依据
取舍说明
不可自动化部分
下一步可交给 Codex 的 C4 Task
```

### 8.2 Codex Execution

适合：代码实现、文件重构、页面生成、脚本生成、批量模板、自动化流程。

必须先满足：

```text
输入明确
输出明确
允许修改范围明确
禁止事项明确
验收标准明确
回写位置明确
```

### 8.3 Agent Execution

适合：重复性检查、周期性 review、数据同步、索引刷新、Evidence 汇总。

必须设置 Human Gate：

```text
正典层改动
删除 / 合并 / 归档仓库
成熟度升级
自动 merge
敏感资料外显
```

---

## 9. Step 8：Evidence Review

```markdown
# Evidence Review

## Artifact

## Source

## What changed

## Evidence Strength
E0 / E1 / E2 / E3 / E4

## Validation
- 文件是否存在：
- 是否可运行 / 可阅读：
- 是否有人类审查：
- 是否有用户 / 客户 / 数据反馈：
- 是否被复用：

## False Green Check
- [ ] 没有 Evidence 却标绿？
- [ ] Issue Done 但无 Evolution Note？
- [ ] Task closed 但没有回写 CBM Cell？
- [ ] Dashboard 显示完成但 Brain 无记录？

## Verdict
green / yellow / red

## Required Backwrite
```

---

## 10. Step 9：Evolution Note

```markdown
# Evolution Note · YYYY-MM-DD · <项目名>

## Source
- Issue:
- PR:
- Artifact:
- CBM Cell:

## What happened

## What changed in capability

## Evidence

## What became reusable

## What remains blocked

## Canonical Learning Candidate

## Next C3 Gap

## Next C4 Task

## Writeback
```

建议路径：

```text
brain/evolution-notes/YYYY-MM-DD-<slug>.md
```

---

## 11. Step 10：Backwrite

每个项目结束必须回写：

```text
C1 一纸文脉：身份、边界、风格、禁止事项是否变化？
C2 一个大脑：知识、案例、术语、样例、数据是否入库？
C3 一张地图：能力组件状态、成熟度、瓶颈、优先级是否更新？
C4 一条链路：SOP、Codex Task、Agent workflow 是否可复用？
```

最小回写记录：

```markdown
## YYYY-MM-DD · <回写标题>

- 来源任务 / Issue：
- 来源仓库：
- 来源文件 / 输出物：
- 归属模块：
- 服务脊骨：
- 回写类型：
- 已回写位置：
- 产生的新资产：
- 下一次如何复用：
- 仍需人工裁决：
- Commit / PR / Issue：
```

---

## 12. Done Definition

一个 CBM-PMO 战略项目只有同时满足以下条件，才算 Done：

```text
1. Strategy Brief 已完成。
2. 至少一个 CBM Cell 被明确映射。
3. C3 Gap / C4 Task 已拆解。
4. 输出物已交付。
5. Acceptance Criteria 已满足。
6. Evidence Review 已完成。
7. Evolution Note 已生成，或明确说明为何暂不需要。
8. Writeback Target 已更新或记录。
9. Next Reuse 已写明。
10. 如果涉及自动化或正典层，Human Gate 已通过。
```

硬规则：

```text
No Evidence, No Done.
No Backwrite, No Done.
No Reuse Path, No Green.
```

---

## 13. 推荐节奏

### 13.1 单项目节奏

```text
Day 0：Intake + Strategy Brief
Day 1：CBM Cell Map + C3 Gap
Day 2-N：C4 Task 执行
Review：Evidence + PR Review
Close：Evolution + Backwrite
```

### 13.2 周节奏

```text
1. 本周哪些 CBM Cell 变强？
2. 哪些 Issue 完成但没有 Evidence？
3. 哪些 PR 合并但没有 Evolution Note？
4. 哪些 Dashboard 是假绿？
5. 下周唯一 P0 Capability 是什么？
```

### 13.3 月节奏

```text
1. 哪些能力进入 operating / compounding？
2. 哪些 repo 应进入主 PMO / 能力资产池 / 观察池 / 归档候选？
3. 哪些 C3 Gap 长期未解决？
4. 哪些 C4 Task 可自动化？
5. 哪些经验应升级为正典候选？
```

---

## 14. 助手默认输出格式

当用户发起战略项目时，助手默认输出：

```markdown
## 1. Soul 裁决

## 2. Strategy Brief

## 3. CBM 能力组件地图

## 4. C3 Gap 清单

## 5. C4 Task 清单

## 6. GitHub Issue / Project 建议

## 7. Codex-ready 任务包

## 8. Evidence 设计

## 9. 回写路径

## 10. 下一轮复用方式
```

---

## 15. 收口句

每次任务完成时，用以下格式收口：

```text
这一步我做完了，结果是 ______，新增资产是 ______，回写位置是 ______，接下来该 ______ 做 ______。
```
