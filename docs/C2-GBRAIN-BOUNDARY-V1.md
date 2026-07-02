# C2-GBRAIN 边界正典 v1 —— 脑 = 纯记忆器官

- **版本**：v1.0（2026-07-02）
- **归属裁决**：C2 一个大脑 × 治理层（主服务脊骨：ʸx；防"第二治理层"侵蚀）
- **地位**：宪法层之下、执行层之上的边界裁决文件。任何 gbrain 相关的安装、配置、skill 决策先查本文件
- **回写位置**：违规案例与边界修订记入本文件 §5

---

## 1. 唯一定位

**gbrain 在原力OS 中是且仅是：记忆器官。** 它负责记住、检索、合成、发现矛盾与缺口、接受回写。它不做判断路由、不做任务调度、不做身份人格、不做治理裁决。

## 2. 器官分工（既有格局不变）

| 器官 | 职责 | 仓 |
|---|---|---|
| ai-da-guan-jia | 判断与路由（六判断、skill 路由、闭环进化） | moonstachain/ai-da-guan-jia |
| os-yuanli | 运行协议（治理三原则、工作OS三层） | moonstachain/os-yuanli |
| yuan-os-claude | 任务规格桥（Claude 战略 → Codex task spec） | 本地 |
| **gbrain** | **记忆（存、查、合成、矛盾、缺口、回写）** | ~/.gbrain + 各 source 仓 |
| soul | 正典与 INTAKE（唯一任务入口，不变） | moonstachain/yuanli-strategy-soul |

## 3. 允许 / 禁止清单

### 3.1 允许安装/启用的 gbrain 能力
- 检索面：search / query / think / graph-query / backlinks / get/put/list pages
- 大脑运维：sync / embed / extract / extract-facts / doctor / stats / schema / sources
- 证据环：capture / put_page / add_link / find_contradictions / eval suspected-contradictions
- 夜航：dream（cron）、autopilot 的大脑维护相位
- MCP：serve（stdio 给 Claude Code）、serve --http（给 Codex）
- brain-ops / filing / query 类 skill（如 memory-search、smart-linker 等纯记忆技能）

### 3.2 禁止安装/启用
- ❌ cron-scheduler、daily-task-manager 等任务调度类 skill（与 ai-da-guan-jia / C4 链路抢路由权）
- ❌ SOUL.md / agent-voice 人格机制（一纸文脉是唯一身份层，由 founder 源承载并向外分发摘要）
- ❌ gbrain 的 skillpack scaffold --all 全量安装（逐个审查，按 3.1/3.2 裁决）
- ❌ self-upgrade（升级走月度升级窗 runbook）
- ❌ 任何绕过 MCP 工具面直连 PGLite/Postgres 的 yuanli 侧代码或 skill

### 3.3 三条纪律
1. gbrain 侧只装记忆类 skill；判断路由永远在 ai-da-guan-jia
2. yuanli 侧所有 skill 通过 MCP 工具面调脑，永不直连 DB
3. 夜航日报**只建议不改分**：成熟度、绿灯、Validated 状态的变更必须人批（守 CANONICAL-APPROVAL 门与"无 Evidence → 无绿灯"硬规则）

## 4. 升级窗 runbook（月度）

1. 快照当前 commit 与 `gbrain --version`
2. 拉上游 → 读 CHANGELOG 增量 → 评估 schema-pack/MCP 面破坏性变更
3. 升级后依次：`gbrain schema validate yuanli-brain-v1` → `gbrain doctor --json` → 20 条中文金标回归 → 抽 3 条 think 查询对拍
4. 任一失败 → 回滚到钉版 commit；md 是正本，最坏 `gbrain rebuild --confirm-destructive` 重建

## 5. 违规案例与修订记录

（空。首例违规发生时记录于此，并回写 INTAKE 裁决。）
