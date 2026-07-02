# 原力战略统筹总纲 V2 —— 从"扩写正典"到"接通真实能量源"

- **版本**：v2.0（2026-07-02）
- **归属裁决**：跨三部 · 治理层（主服务脊骨：ʸx 母公理 + 递归回写；次级：信息五层/OSA）
- **输入**：yuanli-strategy-soul 全仓深读、GBRAIN（garrytan/gbrain v0.42.53.0）源码级研读、YC Pete Koomen 内部 AI 基础设施分享、本地七仓生态调查（cc-yuanli/os-yuanli/ai-da-guan-jia/yuan-os-claude/yuanli-os-ops/yuanli-os-skills-pack/codex-force-claw）
- **输出**：本总纲 + `docs/C2-EXPERT-BRAIN-V2-GBRAIN-PLAN.md` + `docs/C2-GBRAIN-BOUNDARY-V1.md`
- **回写位置**：`docs/YUANLI-OVERALL-MATURITY-ASSESSMENT-v1.md`（阶段判断更新）、`docs/YUANLI-NEXT-KEY-TASKS-v1.md`（关键任务序列更新）、PMO Dashboard
- **验收标准**：见 §6 各阶段验收门

---

## 1. 第一性诊断：用母公理审判系统自身

母公理 ʸx：**做会自我繁殖的事，不做一次性的事。**

以此裁决当前系统（数据截至 2026-07-02）：

| 维度 | 现状 | 裁决 |
|---|---|---|
| 结构繁殖 | 正典 4.5/5 稳定、12 模块 Seed 包全覆盖、本地七仓生态、随身智库 2056+ 组件 | ✅ 繁殖旺盛 |
| 验证繁殖 | 12 模块真实验证均值 **1.17/5**；CBM 18 单元 **0 个 Validated**；N=1 飞轮 34 个赌注 **0 结算**；C2 停留在 Markdown Brain（Trial 1 内部通过，Trial 2/3 未做） | ❌ 不繁殖 |

**结论：飞轮在纸面上转。** 系统能生产内容、记录证据格式、生成 PMO 视图，但缺少真实世界的能量输入端（真实学员、客户、市场、交易）。按本仓自己的硬边界规则——"无 Evidence → 无绿灯"——当前大部分绿灯自身不成立。

一个没有外部能量输入的飞轮，是永动机声明，不是战略系统。

## 2. 三方外部参照（同向印证）

### 2.1 YC 内部 AI 基础设施（Pete Koomen）
演进路径：SQL 查询工具（给 agent 唯一 PostgreSQL 库的无限制只读权）→ 工具注册表（一年 20 → 350+，按真实需求生长而非预建）→ 组织共享大脑（夜间循环读取全部员工-agent 真实对话，自主升级 skills，洞察写回内部数据库）。

**对原力的启示**：大脑变聪明不是因为先写好正典，而是因为接上了"唯一真实数据库 + 全部工作痕迹 + 以真实反馈为食的自改进循环"。能量源是本来就在发生的真实工作。YC 的"两句话描述"skill 超过合伙人本人水平，靠的是真实 office hours 逐字稿喂养 + 递归改写自身提示词——这正是 C2 回写层想要而未得的东西。

### 2.2 GBRAIN（Garry Tan，开源，生产级）
- 定位：agent 原生的"大脑层"，合成答案而非罗列文档；生产规模 14.6 万页，混合检索 P@5 49.1%（比纯向量 RAG 高 31.4 个点）
- 核心契约：**Markdown 是系统正本（system of record），数据库只是可随时重建的派生缓存**——与 C2 当前 Markdown Brain 形态天然兼容，迁移是"升级"不是"重写"
- 自我修复：夜间梦境循环（sync→extract→embed→consolidate→enrich→synthesize）自动去重、修引用、检测矛盾
- Schema Pack 机制允许用 YAML 声明原力自己的 11 类数据类型和类型化边

**对原力的启示**：大脑基础设施已经存在且开源。自建 C2 引擎 = 一次性劳动，直接违反 ʸx。

### 2.3 本仓既定判断
`docs/YUANLI-NEXT-KEY-TASKS-v1.md` 已判定："不应继续无限扩写，应进入验证驱动的内容资产加厚"；最快验证通道 = B2 品类独创 5-10 人小范围工作坊（#129）。本总纲不推翻这个判断，而是给它装上仪表化的执行底盘。

## 3. 战略主轴切换

```
旧主轴：扩写正典 → 内容更完整 → （期待）有人来验证
新主轴：接通真实能量源 → 一切真实工作痕迹入脑 → 大脑驱动验证 → 验证回写正典
```

**新版原力OS-专家大脑 = gbrain 引擎 × 原力 Schema Pack × 真实工作流全量入脑 × 夜航自改进循环。**

第一个真实能量源 = B2 品类独创工作坊（#129），专家大脑全程仪表化该验证闭环：工作坊的每一份逐字稿、学员输出、市场信号当日入脑，夜航自动产出缺口/矛盾/成熟度增量日报。

## 4. 四支柱重定位（C1-C4 在新主轴下的角色）

| 支柱 | 旧形态 | 新定位 |
|---|---|---|
| C1 一纸文脉 | 静态正典文档 | **常驻注入的约束**：正本落 founder 源，夜航重编译 ≤500 token 摘要块，分发到 os-yuanli SKILL.md 序言、yuan-os-claude 任务规格头、soul 仓 CLAUDE.md——所有 agent 开口前先"懂我" |
| C2 一个大脑 | Markdown Brain（Trial 1） | **gbrain 记忆器官**：一脑五源（soul/founder/clients/zhiku-skills/inbox），四查询模式映射到 search/think/gap 组合面/writeback 组合面，详见技术方案 |
| C3 一张地图 | 手工维护的 CBM 看板 | **从脑数据派生的视图**：成熟度、缺口排序、矛盾清单由夜航从真实证据流生成"建议"，人批准后改分——地图不再靠手喂，靠脑长 |
| C4 一条链路 | Whiteboard Task Bridge（已验证）+ Resolver（规划中） | **带回写契约的技能链**：每个 Codex 任务规格标配"Brain Contract"节（执行前 query/think 预读，交付时 put_page 证据回写），任务天然进证据环 |

## 5. 生态收敛规划（本地七仓 → os-yuanli / 84K-OS 组织）

当前碎片化：两处 FORCE-CLAW（codex-force-claw 与 yuanli-os-ops/FORCE-CLAW）、三个版本 yuanli-os-claude 无版本标记、cc-yuanli 与三接缝路线图文档重叠、soul（GitHub）与 cc-yuanli/原力OS-总览.md 两套账本并行。

目标五仓格局（Phase 3 执行，先规划后动手）：

| 组织仓 | 定位 | 来源 |
|---|---|---|
| `yuanli-strategy-soul` | 正典 + PMO + 证据环（唯一 INTAKE 入口，不变） | 现仓迁移 |
| `yuanli-founder-dna` | 一纸文脉正本（founder 源） | 从 soul assets/C1 + cc-yuanli 文脉骨架抽出 |
| `yuanli-client-brain` | 客户/学员/市场信号（clients 源，federated=false） | 新建 |
| `yuanli-os-ops` + `yuanli-os-skills-pack` | 运行时与技能（合并评估） | 现仓迁移，消除 FORCE-CLAW 重复 |
| `yuanli-public-showcase` | 公开外显（已存在于组织） | 现仓 |

收敛纪律：**账本唯一化**——soul 是唯一正典账本；cc-yuanli/原力OS-总览.md 降级为"门户视图"，其数据改为从脑派生。

## 6. 90 天三阶段路线图

### Phase 1 · Bootstrap（≤2 周，对齐 #141 + #128 Trial 2）【已启动 2026-07-02】
- 钉版安装 gbrain（v0.42.53.0，commit 814258d，bun link，关闭 self-upgrade）✅
- 原力 Schema Pack v1（16 页面类型 + 8 类型化边）✅
- soul 源注册 + 全仓入脑 + 本地嵌入（ollama:bge-m3，零成本、中文强、数据不出机）
- Claude Code MCP 接入（stdio）
- B2 真查询走 `think` 出带引用答案（#141 契约对拍）
- 余项：frontmatter 归一化脚本（350+ md）、4 个胶水 skill（yuanli-resolver/brain-query/gap-report/writeback）、20 条中文金标查询评测集
- **验收门**：doctor 全绿；B2 查询满足 #141 十点契约且引用真实 slug；金标 top5 命中 ≥16/20；git 工作区无脏写
- **timebox 纪律**：≤2 周，超期即砍范围保 #128 Trial 2（防基建成瘾，见风险 R5）

### Phase 2 · 真实验证接线（第 3-6 周，对齐 #128 Trial 3 + #129 B2 工作坊）
- 回写环上线：工作坊证据当日 put_page 入脑（带 supports/writeback_target 边）
- 夜航 dream + 自建 yuanli-nightly cron：三份日报（缺口 / 矛盾 / 成熟度增量建议——只建议不改分，人批后回写记分卡）
- clients 源上线（federated=false，客户信息不渗入通用回答）
- Codex HTTP MCC 接入（`gbrain serve --http` + bearer token）
- **验收门**：#129 工作坊 100% 证据 24h 内入脑带 supports 边；缺口日报连续 7 天自动产出；≥1 条成熟度增量建议被人批并回写记分卡
- **这是全项目从 L3.4 向 L4 突破的主战役：验证密度 1.17/5 → 3/5**

### Phase 3 · 组织化外扩（第 7-12 周）
- os-yuanli/84K-OS 组织迁移（§5 五仓收敛）
- 客户保密二脑决策（触发条件：数据所有者变更 / 需独立 OAuth 面）
- source-scoped token 零泄漏实测
- ≥3 个 SKILL-CANDIDATES 经 skillify 转正（YC 模式：工具注册表从真实使用中生长，不预建 350 个）
- 上游升级 runbook 演练一次；语料 >1000 页评估 Supabase 迁移

## 7. 风险与缓解（摘要，全表见技术方案 §7）

R1 Bun+上游高速演进（钉版+月度升级窗+markdown 正本兜底）· R2 中文 BM25 弱（PGLite ILIKE 兜底+多语嵌入主力+金标评测集）· R3 嵌入供应商（本地 ollama:bge-m3 起步，零成本零泄漏；升级路径 openai/voyage/dashscope）· R4 Schema Pack 机制新（全脑单 pack+显式 extract-facts）· R5 基建成瘾复写治理层（边界正典 `docs/C2-GBRAIN-BOUNDARY-V1.md` + Phase 1 timebox）。

## 8. 本总纲的回写承诺

- 产生新资产：本总纲 + 技术方案 + 边界正典三份正典文档；gbrain 大脑实例（~/.gbrain）+ 原力 Schema Pack v1
- 回写位置：如文档头声明
- 下一次如何更强：Phase 1 验收门通过后，本总纲 §6 的勾选状态即为下一轮 PMO 输入；夜航日报接管缺口追踪
