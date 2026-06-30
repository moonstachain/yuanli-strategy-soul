# C2 · GBrain Reference Study v1

Date: 2026-06-30
Module: C2 一个大脑
Reference: garrytan/gbrain

## Purpose

从 GBrain 中提炼可迁移到原力 OS 的大脑架构原则，但不照搬其产品边界。

## Reference Summary

GBrain 的核心定位是：

```text
Search gives raw pages. Brain gives the answer.
```

它强调：一个真正的大脑层，不能只是检索，还要具备 synthesis、graph traversal、gap analysis。

## Transferable Principles

### 1. Search is not Brain

普通 search 返回页面，大脑必须返回综合答案。

Yuanli Translation:

```text
原力大脑不能只返回相关文件；必须返回带证据的战略判断、未知缺口和下一步行动。
```

### 2. Think Mode matters

GBrain 区分 raw retrieval 和 synthesized answer。

Yuanli Translation:

```text
C2 应定义 Search Mode、Think Mode、Gap Mode、Writeback Mode。
```

### 3. Every answer needs citations and gaps

GBrain 的答案会包含引用，也会说明 brain 不知道什么。

Yuanli Translation:

```text
C2 回答必须区分 cited、inferred、unknown。
```

### 4. Graph beats pure vector

GBrain 用实体和 typed edges 增强检索。

Yuanli Translation:

```text
原力大脑需要 module、case、evidence、evolution、task、candidate 之间的关系图谱。
```

### 5. Dream cycle is the compounding loop

GBrain 强调后台持续摄入、整理、修复引用、合并记忆。

Yuanli Translation:

```text
原力大脑需要 daily / weekly / monthly dream cycle：扫描新内容、识别缺口、生成复盘、更新成熟度。
```

### 6. Company brain requires scoped access

GBrain 的 company brain 设计包含多 source、per-user login、scope 和隔离。

Yuanli Translation:

```text
原力大脑未来需要分层访问：Founder Brain、Trilogy Brain、Client Brain、PMO Brain、Agent Skill Brain。
```

## What Not to Copy Directly

不应直接照搬：

```text
VC/portfolio-company 默认 schema
通用 people/company/deal 图谱
以工程 agent 为中心的全部操作协议
```

原力大脑必须围绕：

```text
正典、课程、案例、作业、客户、证据、演化、PMO、正典候选
```

## Yuanli Adaptation

| GBrain Idea | Yuanli Adaptation |
|---|---|
| raw search | Search Mode |
| think | Yuanli Think Protocol |
| gap analysis | Maturity + Evidence Gap |
| knowledge graph | Yuanli Canon Graph |
| sources | Five Logical Brains |
| dream cycle | Weekly PMO + Evolution + Canon Review |
| MCP tools | Agent Skill Brain |

## Strategic Conclusion

GBrain 的启发不是“装一个知识库”，而是：

```text
让记忆成为 AI agent 的战略基础设施。
```

原力 OS 的 C2 应进一步定义为：

```text
让原力文脉、内容资产、客户案例、PMO 证据和正典候选形成一个可查询、可判断、可回写、可进化的战略记忆系统。
```

## Next

把本研究回写到：

- docs/C2-ONE-BRAIN-STRATEGY-v1.md
- docs/C2-YUANLI-BRAIN-SCHEMA-v1.md
- docs/C2-BRAIN-QUERY-PROTOCOL-v1.md
- docs/C2-BRAIN-WRITEBACK-PROTOCOL-v1.md
- assets/C2-一个大脑/teaching-outline.md
- docs/TRILOGY-ASSET-MATURITY-SCORECARD-v1.md
