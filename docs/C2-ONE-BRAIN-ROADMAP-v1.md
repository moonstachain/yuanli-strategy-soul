# C2 · One Brain Roadmap v1

Date: 2026-06-30
Module: C2 一个大脑
Priority: P0.5

## Goal

把 C2 从课程模块升级为整个原力战略三部曲的记忆中枢。

## Phase 1 · Strategy Package

Status: completed

Artifacts:

- docs/C2-ONE-BRAIN-STRATEGY-v1.md
- docs/C2-YUANLI-BRAIN-SCHEMA-v1.md
- docs/C2-BRAIN-QUERY-PROTOCOL-v1.md
- docs/C2-BRAIN-WRITEBACK-PROTOCOL-v1.md
- docs/C2-GBRAIN-REFERENCE-STUDY-v1.md
- docs/C2-ONE-BRAIN-ROADMAP-v1.md

## Phase 2 · Markdown Brain

Goal: 不写复杂系统，先让现有 GitHub 仓库成为轻量原力大脑。

Artifacts:

```text
brain/INDEX.md
brain/SCHEMA.md
brain/QUERY-EXAMPLES.md
brain/WRITEBACK-LOG.md
```

Acceptance:

- 能索引正典、12 模块资产、Evidence、Evolution Notes、Canonical Candidates。
- 每次回答能输出结论、证据、缺口、下一步、回写建议。

## Phase 3 · Graph and Gap Layer

Goal: 建立原力知识图谱和缺口识别机制。

Artifacts:

```text
brain/GRAPH-SPEC.md
brain/GAP-TYPES.md
brain/CANON-GRAPH.md
scripts/build-yuanli-brain-index.js
```

Acceptance:

- 能识别 module -> asset -> evidence -> evolution -> candidate 的关系。
- 能输出缺证据、缺案例、缺作业、缺验证、缺商业化测试等 gap。

## Phase 4 · PMO Integration

Goal: 让 C2 与 PMO Dashboard 和成熟度评分卡双向同步。

Artifacts:

```text
docs/PMO-C2-BRAIN-INTEGRATION-v1.md
scripts/sync-brain-maturity.js
```

Acceptance:

- 新增 evidence 后能提示是否更新 maturity scorecard。
- 新增 gap 后能提示是否创建 C4 task。
- 新增 evolution 后能提示是否进入 canonical candidate。

## Phase 5 · Real Validation

Goal: 用真实学员、客户或项目验证 C2。

Artifacts:

```text
assets/C2-一个大脑/retrieval-test.md
assets/C2-一个大脑/tagging-template.md
assets/C2-一个大脑/writeback-examples.md
assets/C2-一个大脑/validation-records.md
```

Acceptance:

- 至少 3 个真实使用场景。
- 至少 5 个查询样例。
- 至少 3 个回写样例。
- C2 validation score 从 1/5 提升到 3/5。

## Phase 6 · Productization

Goal: 把 C2 产品化为“原力大脑工作坊 / Agent 记忆系统咨询 / 原力OS工具包”。

Potential Products:

- 原力大脑 2 小时工作坊
- 个人战略大脑搭建营
- 企业创始人大脑咨询包
- Yuanli Brain Schema Pack
- Yuanli Brain MCP / Agent 接入方案

Productization Gate:

```text
Total >= 30 / 40
Evidence >= 4 / 5
Validation >= 3 / 5
Commercialization >= 4 / 5
```

## Next Immediate Actions

1. Create `brain/SCHEMA.md`.
2. Create `brain/QUERY-EXAMPLES.md`.
3. Create C2 retrieval and writeback templates.
4. Run one real use case: “用 C2 查询 B2 是否可以产品化”。
5. Update maturity scorecard after validation.
