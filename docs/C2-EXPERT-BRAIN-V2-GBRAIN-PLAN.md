# C2 专家大脑 v2 · gbrain 引擎落地技术方案

- **版本**：v1.0（2026-07-02）
- **归属裁决**：C2 一个大脑（主服务脊骨：递归回写；次级：ʸx）
- **决策前提（已定）**：v2 采用 gbrain 作引擎，原力语义以自定义 Schema Pack + Source 布局 + 薄胶水 Skills 表达；不自建引擎
- **上游钉版**：garrytan/gbrain v0.42.53.0，commit `814258dda67945ffec9457a1e73980e947b7e462`，本地克隆 `/Users/liming/AI Project/gbrain`，bun link 安装，self-upgrade 不启用
- **本地补丁（钉版偏差，共 3 个，均已本地 commit）**：① ollama recipe 声明 bge-m3 + dims_options [768,1024]（否则 init 拒绝 1024 维）；② import-file.ts 的 frontmatter 推断在 schema pack 激活时不再合成 `type:`（否则兜底规则把所有裸 md 钉成 note，pack 的 path_prefixes 永远轮不到）；③ ollama recipe 声明 chat 触点（否则 probeChatModel 拒绝本地模型，think 降级"no LLM"）。另：think 走 tier 体系而非 chat_model 键——`models.tier.deep/reasoning/utility` 已设 ollama:deepseek-r1:8b。升级窗合并上游时需重放这三个补丁或确认上游已修
- **回写位置**：`docs/C2-ONE-BRAIN-STRATEGY-v1.md`（架构实现状态）、#128 / #141 Issue
- **配套边界正典**：`docs/C2-GBRAIN-BOUNDARY-V1.md`

---

## 0. 关键实证表（全部在 gbrain 源码核对）

| 断言 | 结果 | 证据位置 |
|---|---|---|
| 运行时 | 需要 Bun（"Bun is required"） | INSTALL_FOR_AGENTS.md Step 1、package.json |
| 中文关键词检索 | `to_tsvector('english')` 不切中文；**PGLite 引擎有 CJK ILIKE 兜底，Postgres 引擎没有** | src/core/pglite-engine.ts:1524-1613（hasCJK→ILIKE）；postgres-engine.ts:1641 仅 english tsquery |
| 中文 slug/分块 | v0.32.7 CJK wave 已支持（中文 slug、CJK 感知分块） | src/core/cjk.ts、operations.ts:163-212 |
| 嵌入供应商 | 默认 ZeroEntropy；OpenAI/Voyage/DashScope/智谱/ollama 皆有 recipe；本部署实际采用 **ollama:bge-m3（本地，1024 维，零成本，中文强）** | src/core/ai/recipes/、init 实测 |
| Schema Pack | `extends: gbrain-base`；primitive 封闭五元枚举；frontmatter_links 的 page_type 必填 | src/core/schema-pack/base/gbrain-base.yaml、manifest-v1.ts:146 |
| 单脑多源隔离 | `sources add --no-federated` 默认不进跨源检索；v0.34 source-scoped token | src/core/operations.ts:3687-3760 |
| 每源不同 pack | 支持但跨源异 pack 会 permission_denied → **全脑单 pack** | docs/architecture/schema-packs.md:72-85 |
| MCP | Claude Code：stdio（`claude mcp add gbrain -- gbrain serve`）；Codex：仅 HTTP（v0.130+） | docs/mcp/CLAUDE_CODE.md、CODEX.md |
| 正本契约 | repo 是 system of record，DB 不备份、可 rebuild | docs/architecture/system-of-record.md |
| soul 仓 frontmatter 现状 | **零 YAML frontmatter**；元数据为 H1 下 `Date:/Module:` 明文行；导入不被阻塞（type 靠路径前缀、title 取 H1），但图谱边需归一化后点亮 | 全仓抽查 |

## 1. 原力 Schema Pack v1【已部署激活】

- 位置：`~/.gbrain/schema-packs/yuanli-brain-v1/pack.yaml`；`gbrain schema validate/lint` 全绿
- 16 个页面类型：canon(docs/)、module(assets/,modules/)、evidence、evolution_note、decision、record、canonical_candidate、case、client(entity,expert_routing)、student_output、market_signal、yuanli_project(project/)、playbook、yuanli_skill、assignment(无前缀,frontmatter 显式)、script(同)
- 8 条类型化边：supports、validates、updates、backwrites、promotes_to、enrolled_in、produces、generates_task（中文正则推断无 \b，用裸模式）
- frontmatter_links：evidence.supports/validates→supports、evidence.writeback_target→backwrites、evolution_note.writeback_target→updates、canonical_candidate.promotes_to→promotes_to、client.enrolled_in→enrolled_in、yuanli_project.produces→produces 等
- 注意：`extractable: true` 当前版本是语义声明，实抽取需显式 `gbrain extract-facts --type <t> --force`（ELIGIBLE_TYPES 硬编码至 v0.42+）；C2 的 status/source_strength 不进 pack，留 frontmatter 字段由 list_pages 过滤器与胶水 skill 消费

## 2. Brain × Source 拓扑：一脑五源

判据（gbrain docs/architecture/brains-and-sources.md）："数据所有者变了才是 brain 边界"。五个逻辑脑同属一人 → 全是 source 边界。

| Source | 逻辑脑 | Git 仓 | federated |
|---|---|---|---|
| `soul` | Trilogy + PMO Brain（回写环耦合紧，不拆） | yuanli-strategy-soul【已注册】 | true |
| `founder` | Founder Brain（一纸文脉、C1、声纹/FTF） | 新建 yuanli-founder-dna（Phase 2） | true |
| `clients` | Client/Case Brain | 新建 yuanli-client-brain（Phase 2） | **false** |
| `zhiku-skills` | Agent Skill Brain | yuanli-os-skills-pack 只读入脑索引 | true |
| `inbox`（默认源） | 捕获缓冲 | 无仓，`gbrain capture` 落 inbox/，夜航归档 | true |

第二脑（客户保密）触发条件：签保密条款需给外部人查询权 / 需独立 OAuth 与备份生命周期。Phase 3 决策。

soul 仓根已放 `gbrain.yml`（db_tracked: docs/ brain/ assets/ modules/ project/ interfaces/ manuscript/ codex/；db_only: source/raw/）与 `.gbrain-source`（内容 `soul`）。

## 3. 迁移步骤与工作量

1. ✅ Bun + gbrain 钉版安装（v0.42.53.0）
2. ✅ `gbrain init --pglite --embedding-model ollama:bge-m3 --non-interactive`（bge-m3 固定 1024 维，不支持自定义 dims，勿传 --embedding-dimensions）
3. ✅ Schema Pack v1 validate/use/lint
4. ✅ `gbrain sources add soul --path <soul> --federated`
5. `gbrain sync --repo <soul>` → embed → extract（canon/module/evidence 显式 extract-facts）→ doctor 全绿 → schema review-orphans
6. frontmatter 归一化（唯一真正迁移劳动）：明文行（Date:/Module:/PMO Issue:）→ YAML 头（type/node/module/status/source_strength/related/writeback_target/supports），一次性脚本放 `scripts/`，全仓约 350+ md，需人工抽查
7. 对拍验收：#141 B2 真查询跑 `gbrain think`，对照 Markdown Brain Trial 1 人工答案

**诚实工作量**：脚手架到 doctor 全绿 2-3 个工作日（归一化脚本 0.5 天 + 抽查 1 天）；长尾在中文检索调优与金标评测集，1-2 周持续投入。不按"装完即好"排期。

## 4. C2 四查询模式 → gbrain 面映射

| C2 模式 | gbrain 面 | 胶水 skill |
|---|---|---|
| Search | `search`/`query`（混合检索；PGLite 中文走 ILIKE 兜底）+ `traverse_graph`/`get_backlinks` | 薄：按 C2 引用格式整形 |
| Think | `think`（多跳合成 + 引用 + 冲突/缺口分析，与 C2 七段契约同构） | 强制七段输出 + Cited/Inferred/Unknown 三分 |
| Gap | `think` 缺口段 + `find_contradictions`(MCP) + `eval suspected-contradictions`(CLI 夜跑) + `find_orphans`/`run_doctor` + 记分卡对读 | 最厚：按 GAP-TYPES 分类、排 P0、生成 C4 任务建议 |
| Writeback | `put_page`（写 brain/evidence/ 等，写穿磁盘 md）+ `add_link`（类型化边）+ `gbrain capture`(CLI) | 执行"无Evidence→无绿灯"门 |

**#141 四件套归宿**：GAP-TYPES.md → skill 参考资产 + canon 页入脑；CANON-GRAPH.md → 被真图谱取代（pack 边物化为 DB，graph-query 直查），保留夜航人读快照；RESOLVER.md → 仿 gbrain skills/RESOLVER.md 派发表（"意图触发词 → 四模式 skill → 模块路由"）；SKILL-CANDIDATES.md → `type: yuanli_skill, status: candidate` 脑页，成熟者 skillify 转正。

需写 4 个薄胶水 skill（放 soul `skills/` 或 yuanli-os-skills-pack）：`yuanli-resolver`、`yuanli-brain-query`、`yuanli-gap-report`、`yuanli-writeback`。全部只调 MCP 工具面，永不直连 DB。

## 5. 回写/证据环仪表化

**三条捕获路径**（按摩擦排序）：
1. Agent 会话内（主路）：任务收尾 skill 强制 `put_page` 写 `brain/evidence/YYYY-MM-DD-<slug>.md`（frontmatter 带 supports/writeback_target → 自动生成边）+ 需要时第二个 put_page 写 evolution note。"无Evolution Note→无Done"由 yuanli-writeback skill 契约执行
2. 碎片想法：`gbrain capture "..."` → inbox 源，夜航归档分流
3. 外部材料（逐字稿/工作坊）：按 `docs/C2-SOURCE-INGESTION-PROTOCOL-v1.md` 五阶段，大宗原文落 `source/raw/`（db_only），抽取件 put_page 进 brain/

**夜航（Phase 2 上线）**：
- `gbrain dream`（cron 每晚，先 --dry-run）：lint→backlinks→sync→synthesize→extract→extract_facts→patterns→consolidate→embed→orphans→purge
- 自建 `yuanli-nightly.sh`（launchd，三份日报全 put_page 写回 brain/records/，守 md 正本契约）：
  - 缺口日报：`gbrain think "过去24小时新增证据后各模块最大缺口与P0排序"` + doctor --json + orphans → `brain/records/gap-report-<date>.md`
  - 矛盾日报：`eval suspected-contradictions` 摘要 → `brain/records/contradiction-report-<date>.md`
  - 成熟度增量建议：diff 近 24h evidence 页 vs `docs/TRILOGY-ASSET-MATURITY-SCORECARD-v1.md`，产出"建议 X 从 1/5→2/5，依据 <slug>"——**只建议不改分**，人批后才动记分卡（守 CANONICAL-APPROVAL 门），可 gh issue comment 同步 PMO

## 6. Agent 集成

- Claude Code：`claude mcp add gbrain -- gbrain serve`（stdio，user scope）
- Codex：`gbrain serve --http --port 3001`（launchd 常驻）+ `gbrain auth create codex` + `codex mcp add gbrain --url http://127.0.0.1:3001/mcp --bearer-token-env-var GBRAIN_REMOTE_TOKEN`。同机双通道并存无冲突
- 一纸文脉常驻注入：正本唯一化落 founder 源；夜航重编译 ≤500 token 摘要块分发三消费点（os-yuanli SKILL.md 序言 / yuan-os-claude 任务规格头 / soul CLAUDE.md）。**不用** gbrain 的 SOUL.md/agent-voice 人格机制（防第二身份层）
- 器官分工三纪律（防第二治理层，详见边界正典）：ai-da-guan-jia=判断与路由，os-yuanli=运行协议，yuan-os-claude=任务规格桥，**gbrain=纯记忆器官**；yuan-os-claude 任务规格模板加"Brain Contract"节（执行前 query/think 预读，交付时 put_page 回写）

## 7. 风险 Top5

| # | 风险 | 缓解 |
|---|---|---|
| R1 | Bun + 上游高速演进（数月 v0.32→v0.42；全局安装 postinstall 有已知坑） | clone+commit 钉版（814258d）+ bun link；月度升级窗跑 schema validate+金标回归；self-upgrade 关闭；兜底：md 是正本，最坏 `gbrain rebuild --confirm-destructive` 全量重建 |
| R2 | 中文 BM25 弱（tsvector english 不切中文；ILIKE 兜底仅 PGLite） | 留 PGLite（语料 <1000 文件，正是推荐区间）；检索主力=多语嵌入+图谱边；20 条中文金标评测集；未来迁 Supabase 前先给上游补 Postgres 引擎 CJK 兜底（pglite-engine.ts 有样板） |
| R3 | 嵌入质量/成本 | 本地 ollama:bge-m3（MTEB 中文强、零成本、数据不出机）；若召回不达标升级 openai:text-embedding-3-large 或 dashscope（换模型需全量 re-embed，语料小、成本可忽略） |
| R4 | Schema Pack 机制新（v0.38/39 落地；extractable 未接夜航兜底；跨源异 pack 拒查） | 全脑单 pack；显式 extract-facts；pack 只增不改 base；升级后跑 parity 对拍 |
| R5 | 基建成瘾复写治理层（gbrain 自带 resolver/skills/人格，与 os-yuanli 重叠；搭脑比跑真实验证"好玩"） | 边界正典 `docs/C2-GBRAIN-BOUNDARY-V1.md`；Phase 1 timebox ≤2 周，超期砍范围保 #128 Trial 2 |

## 8. 与既定里程碑对齐

- #141 C2 Query Pack Resolver → 本方案 §4（Phase 1 验收）
- #128 C2 Brain Validation Trial 2 → Phase 1 验收查询；Trial 3 → Phase 2 工作坊接线
- #129 B2 Deepening + 工作坊 → Phase 2 主战役（验证密度 1.17→3/5）
- 里程碑 v1.2（C2 Validation 3/5 + B2 产品化验证包）→ Phase 2 验收门
