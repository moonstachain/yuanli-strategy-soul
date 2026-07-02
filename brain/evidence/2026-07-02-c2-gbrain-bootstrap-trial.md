---
type: evidence
title: Evidence · C2 专家大脑 v2 gbrain Bootstrap Trial（Phase 1 启动验收）
date: '2026-07-02T00:00:00.000Z'
supports:
  - docs/c2-expert-brain-v2-gbrain-plan
  - assets/c2-一个大脑/module-canon
pmo_issue: '#128 #141'
writeback_target: docs/trilogy-asset-maturity-scorecard-v1
evidence_strength: medium
ingested_via: put_page
ingested_at: '2026-07-02T05:29:29.835Z'
source_kind: put_page
---

# Evidence · C2 专家大脑 v2 gbrain Bootstrap Trial

## Work Items
- 蓝图三件套：docs/YUANLI-GRAND-STRATEGY-V2.md / docs/C2-EXPERT-BRAIN-V2-GBRAIN-PLAN.md / docs/C2-GBRAIN-BOUNDARY-V1.md（已 commit）
- gbrain v0.42.53.0 钉版部署（3 个本地补丁），PGLite + ollama:bge-m3(1024维) + yuanli-brain-v1 Schema Pack（16 类型 + 8 边）
- soul 源全量入脑：405 页 / 1469 块 / 100% 嵌入 / 0 错误；类型分布 module 127 · concept 116 · canon 88 · evolution_note 39 · evidence 21 · yuanli_project 6 · canonical_candidate 5 · record 3
- Claude Code MCP 已接入（stdio 握手验证通过）

## Findings
1. 中文混合检索达标：B2 真查询 top4 全部命中正确资产页（workshop-runbook 0.9149 / participant-screening 0.8861 / candidate-names 0.8754 / evolution 0.8532）
2. think 管线端到端可跑，但本地 deepseek-r1:8b 合成质量不合格（0 引用、内容幻觉）→ 佐证架构决策：合成层由调用方 agent（Claude/胶水 skill）承担，大脑只做记忆与检索；或配 ANTHROPIC_API_KEY 后用 think
3. 上游缺口 ×3 已打本地补丁（bge-m3 维度声明 / pack 感知的 frontmatter 推断 / ollama chat 触点），升级窗需重放
4. 图谱边为 0：等待 frontmatter 归一化（Phase 1 余项）点亮 frontmatter_links

## Evolution Note
- 学到：gbrain 的 embedding_dimensions 在 init 时锁定表结构，事后不可改；frontmatter 推断兜底规则会抢占 pack 类型推断——两者都是"装完即好"假设的反例
- 下次复用：本地补丁清单与安装序列已写入 docs/C2-EXPERT-BRAIN-V2-GBRAIN-PLAN.md §3

## Next
- #128 Trial 2 判定：本试验 = 内部 Trial 2（真实数据库大脑替代 Markdown Brain），建议 C2 Validation 维持 3/5 并标注"gbrain 实装"
- P0 余项：frontmatter 归一化脚本 → 图谱边点亮 → 4 个胶水 skill → 20 条中文金标
