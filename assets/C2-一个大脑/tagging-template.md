# C2 · 一个大脑 · Tagging Template

Date: 2026-06-30
PMO Issue: #95
Priority: P0.5

## Purpose

为进入原力大脑的材料提供统一标签模板，确保材料可检索、可关联、可判断、可回写。

## Frontmatter Template

```yaml
type:
node:
module:
status: seed
source_strength: weak | medium | strong
created_at:
updated_at:
related:
  -
writeback_target:
  -
```

## Type Options

```text
canon
module
concept
case
assignment
script
evidence
evolution_note
canonical_candidate
decision
project
client
student_output
market_signal
source
playbook
skill
```

## Example · Evidence

```yaml
type: evidence
node: B2
module: 品类独创
status: seed
source_strength: medium
created_at: 2026-06-30
updated_at: 2026-06-30
related:
  - docs/TRILOGY-ASSET-MATURITY-SCORECARD-v1.md
  - assets/B2-品类独创/
writeback_target:
  - assets/B2-品类独创/evidence.md
  - docs/TRILOGY-ASSET-MATURITY-SCORECARD-v1.md
```

## Example · Case

```yaml
type: case
node: A1
module: 发现母体
status: candidate
source_strength: strong
created_at: 2026-06-30
updated_at: 2026-06-30
related:
  - assets/A1-发现母体/assignments.md
writeback_target:
  - assets/A1-发现母体/real-learner-cases.md
  - assets/A1-发现母体/evidence.md
```

## Required Questions

给任何新材料打标签前，必须回答：

```text
它是什么类型？
它支撑哪个模块？
它证据强度如何？
它和哪些文件相关？
它未来会在哪些查询里被调用？
它应该回写到哪里？
```
