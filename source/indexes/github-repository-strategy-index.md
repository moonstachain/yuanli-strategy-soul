# GitHub 仓库战略索引 · v0.1

> 归属：source/indexes / GitHub 统一统筹  
> 来源：GitHub owner `moonstachain` 仓库搜索与关键 README 核验  
> 目标：识别哪些仓库对“原力战略三部曲 · soul 正典根仓 · trilogy 内容工程仓”战略任务有参考价值，并给出统一统筹口径。  
> 更新日期：2026-07-01

---

## 0. 总裁决

```text
yuanli-strategy-soul
= 正典根仓 / 龙骨仓 / 基石概念体系 / 任务入口 / 递归回写中心

其他所有仓库
= 源料仓 / 内容工程仓 / 产品外显仓 / OS 执行仓 / 同步治理仓 / 历史参考仓

所有项目从 soul 出发，所有经验回到 soul。
```

---

## 1. 仓库分层总览

| 层级 | 功能 | 代表仓库 | 统筹策略 |
|---|---|---|---|
| L0 正典根仓 | 公理、龙骨、模块、术语、接口、模板、回写 | `yuanli-strategy-soul` | 唯一入口，所有战略任务先开 Issue |
| L1 内容工程母仓 | 三部曲书稿、课程、概念地图、样章、外显 | `yuanli-strategy-trilogy`、`yuanli-strategy-trilogy-private` | 服从 soul，产出后回写 soul |
| L2 正典源料仓 | 旧正典、绿皮书、白皮书、创业/OS 源材料 | `yuanli-strategy-playbook`、`yuanli-startup-map-book`、`yuanli-startup-map-site`、`yuanli-os-greenbook`、`yuanli-startup-greenbook` | 作为 source，抽取而不整仓搬迁 |
| L3 OS / Brain 系统仓 | 专家大脑、OS 架构、agent、skills、协作运行时 | `yuanli-brain`、`yuanli-interface-skills`、`yuanli-skill-server`、`yuanli-os-*`、`agency-*` | 归 C2-C4，按模板提炼机制与 skill |
| L4 内容经营 / 数据治理仓 | 飞书、多维表、内容工程、GitHub 同步、公开驾驶舱 | `yuanli-content-engine-os`、`github-feishu-sync`、`feishu-bitable-bridge`、`feishu-dashboard-automator` | 归 C2/C4 与项目治理，服务内容飞轮 |
| L5 网站 / 外显 / 产品仓 | 官网、H5、驾驶舱、健康 OS、战略 cockpit | `yuanli-website`、`yuanli-health-os`、`dixin-strategy-cockpit`、`ip-company-strategy-cockpit` | 归产品外显，不抢正典 |
| L6 历史 / 旁支 / 实验仓 | 早期 clone、实验、客户项目、量化、素材工具 | `os-yuanli`、`yuan-li-os-clone-01`、`quant-*`、`youquant-*` 等 | 降级为参考或隔离治理 |

---

## 2. L0 · 正典根仓

| 仓库 | 角色 | 关键判断 | 管理动作 |
|---|---|---|---|
| `moonstachain/yuanli-strategy-soul` | 唯一正典根仓 / 任务入口 / 回写中心 | 已建立三部十二模块、术语、接口、模板、回写日志 | 所有战略任务先开 Issue；所有仓库产出回写这里 |

---

## 3. L1 · 内容工程母仓

| 仓库 | 角色 | 对当前战略任务价值 | 管理动作 |
|---|---|---|---|
| `moonstachain/yuanli-strategy-trilogy` | 三部曲内容工程工作仓 / 书稿课程孵化 / 概念地图外显 | 直接承接 soul 的 A1-C4，生产章节、课程、地图、样章 | 使用 `templates/chapter-template.md`；输出回写 `source/extracts/` |
| `moonstachain/yuanli-strategy-trilogy-private` | 私有三部曲知识与骨架仓 | 大体量私有材料，可能含未公开样章、源稿、过渡稿 | 建立 private-source-index；只抽取正典原子，不搬隐私正文 |

---

## 4. L2 · 正典源料仓

| 仓库 | 角色 | 对应模块 | 关键价值 | 管理动作 |
|---|---|---|---|---|
| `moonstachain/yuanli-strategy-playbook` | 原力战略绿皮书 / 白皮书源 | A/B/共享脊骨 | 含白皮书、公理层、道体法术器守、7 册正文与工具卡 | 抽取 `ʸx`、财富公式、道体法术器守、工具卡，回写 glossary/modules/templates |
| `moonstachain/yuanli-startup-map-book` | 借势合力 · 原力创业 · 通关地图绿皮书 | B1-B4 | 含财富公式、四关、58 商业原子、16 控制点、工具卡 | 作为 B 轴最重要源料；优先抽 B1 黄金样章 |
| `moonstachain/yuanli-startup-map-site` | 原力创业通关地图网站版 | B1-B4 / 外显 | 含交互单页、AI 教练、data 层、四关视图 | 抽取数据层与外显结构；不搬 HTML 正典 |
| `moonstachain/yuanli-startup-greenbook` | 原力创业早期/私有绿皮书 | B1-B4 | 可能保留 v0.2 四模块通关手册 | 对照 `startup-map-book`，决定保留/吸收/归档 |
| `moonstachain/yuanli-os-greenbook` | 原力 OS 绿皮书 | C1-C4 | 4 部 55 章，含 OSA、信息五层、IDA、Evolution Note、skill 蒸馏等 | C 轴核心源料；重点抽 C4、C2、C3 工具链 |

---

## 5. L3 · OS / Brain / Agent / Skill 系统仓

| 仓库 | 角色 | 对应模块 | 关键价值 | 管理动作 |
|---|---|---|---|---|
| `moonstachain/yuanli-brain` | 专家大脑系统 / 多专家 IP 大脑 | C2/C3/C4 | 隐性经验系统化、11 层大脑、OSA 三轴金卡、CBM 棋盘、自进化飞轮 | 抽取为 C2 一个大脑、C3 地图、C4 链路的系统实现参考 |
| `moonstachain/yuanli-interface-skills` | Pneuma Skills / 人 × Code Agent 协作基础设施 | C4 / Agent 工作台 | 模式、viewer、skill、偏好学习、连续进化、Codex/Claude 后端 | 作为未来原力内容生产工作台/skill 平台参考 |
| `moonstachain/yuanli-skill-server` | 原力 skill server | C4 | skill 服务化候选 | 待读 README/结构，纳入 skill 发布管线 |
| `moonstachain/skill-pattern-publisher` | workflow → reusable skill 发布管线 | C4 | 把确认 workflow 转为本地 skill 并发布 GitHub | 与 `templates/os/Skill蒸馏卡.md` 打通 |
| `moonstachain/strategy-skill-template` | strategy skill 模板 | C4 / 模板 | 战略类 skill 的种子模板 | 统一成 soul 的 Codex/skill 模板参考 |
| `moonstachain/yuanli-os-agent-team` | OS agent team | C4 | Agent 班底 / 工作流素材 | 需做二次索引，判断是否 active |
| `moonstachain/agency-*` | 具体 agent 能力仓 | C4 / 执行层 | data、report、sales、content、orchestrator 等单 agent | 作为可调用执行仓，不进入正典层 |

---

## 6. L4 · 内容经营 / 飞书 / 同步治理仓

| 仓库 | 角色 | 对应模块 | 关键价值 | 管理动作 |
|---|---|---|---|---|
| `moonstachain/yuanli-content-engine-os` | 原力内容工程 OS | C2/C3/C4 / 内容飞轮 | GitHub × 飞书 × 网站的内容经营协同中枢，T01-T30，public-safe bundle | 与 trilogy 章节生产、内容矩阵、一鱼多吃打通 |
| `moonstachain/github-feishu-sync` | GitHub → 飞书同步 skill | C2/C4 / 治理 | 扫描 GitHub 仓库、分类 skill pattern、同步飞书多维表、webhook 更新 | 作为 GitHub 全仓统筹自动化底座 |
| `moonstachain/feishu-bitable-bridge` | 飞书 Bitable inspection/upsert bridge | C2/C4 | 检查飞书 wiki/base、导出 schema、dry-run 后安全写回 | 与 `soul` 的 repo index / content index 双向同步 |
| `moonstachain/feishu-dashboard-automator` | 飞书看板自动化 | C3/C4 | 自动化仪表盘候选 | 纳入内容工程 OS 的执行仓 |
| `moonstachain/ai-news-feishu-collector` | AI 新闻飞书采集 | C2 / 内容源 | 外部资讯入库 | 作为研究素材，不进入正典层 |
| `moonstachain/ai-news-aggregator` | AI 新闻聚合 | C2 / 内容源 | 外部资讯源与聚合 | 只作为内容源输入 |

---

## 7. L5 · 网站 / 外显 / 产品仓

| 仓库 | 角色 | 对应模块 | 管理动作 |
|---|---|---|---|
| `moonstachain/yuanli-website` | 原力官网 / 外显入口候选 | C3/C4 / 外显 | 需补 README；服从 soul 的正典入口 |
| `moonstachain/yuanli-health-os` | 原力健康 OS 产品仓 | C4 / 产品分支 | 作为“原力 OS 垂直应用”参考，不进入三部曲正典层 |
| `moonstachain/yuanli-health-apple` | Apple 健康数据连接 | C4 / 健康数据 | 健康 OS 数据输入层 |
| `moonstachain/dixin-strategy-cockpit` | 客户/项目战略 cockpit | C3 / 外显 | 可抽取战略地图/看板模式 |
| `moonstachain/ip-company-strategy-cockpit` | IP 公司战略 cockpit | C3 / 外显 | 可抽取 IP 公司战略看板模式 |
| `moonstachain/xushizhe-osa-cockpit` | OSA cockpit | C3/C4 | 可抽 OSA 看板模板 |
| `moonstachain/ai-website-cloner-template` | 网站克隆模板 | C4 / 生产工具 | 可作为外显快速生成工具，不进正典 |
| `moonstachain/aliyun-h5-autodeploy` | H5 自动部署 | C4 / 发布链路 | 可接入内容外显发布链 |

---

## 8. L6 · 知识/研究/旁支参考仓

| 仓库 | 角色 | 管理动作 |
|---|---|---|
| `moonstachain/yuanli-Research` | 研究资料仓 | 进入 C2 索引，按主题抽取，不抢正典 |
| `moonstachain/yuanli-narrative-strategy-map` | 叙事战略地图 | 可抽取叙事/内容工程模板 |
| `moonstachain/business-structure-designer` | 商业结构设计器 | 可抽 B3/B4 工具模式 |
| `moonstachain/embedded-strategy-brain` | 嵌入式战略大脑 | 可作为 C2/C3 参考 |
| `moonstachain/osa-strategy-card-distiller` | OSA 战略卡蒸馏器 | 可接入 C4 Skill 蒸馏卡 |
| `moonstachain/self-evolution-max` | 自进化实验仓 | 可抽 C4/Evolution Note 模式 |
| `moonstachain/zhiku-market-private` | 智库市场私有仓 | 私有市场/知识资料，需单独 source index |
| `moonstachain/zhiku-market-skill` | 智库市场 skill | 可作为知识提取/市场分析 skill 参考 |
| `moonstachain/yuanli-zhiku-link-state` | 原力智库 link state | 可能是飞书/GitHub 链接状态桥 | 纳入 C2/C4 同步治理 |

---

## 9. 当前优先级队列

### P0 · 必须进入 soul 统筹

```text
yuanli-strategy-soul
yuanli-strategy-trilogy
yuanli-strategy-trilogy-private
yuanli-strategy-playbook
yuanli-startup-map-book
yuanli-startup-map-site
yuanli-os-greenbook
```

### P1 · 支撑内容工程和 OS 生产

```text
yuanli-content-engine-os
yuanli-brain
yuanli-interface-skills
skill-pattern-publisher
github-feishu-sync
feishu-bitable-bridge
yuanli-website
```

### P2 · 作为产品/工具/外显/垂直应用参考

```text
yuanli-health-os
yuanli-health-apple
yuanli-os-agent-team
yuanli-os-ops
yuanli-os-bootstrap
dixin-strategy-cockpit
ip-company-strategy-cockpit
xushizhe-osa-cockpit
business-structure-designer
osa-strategy-card-distiller
```

### P3 · 暂缓，仅保留检索索引

```text
quant-*
youquant-*
Resume-Matcher
reflex-llm-examples
bolt.diy
typescript-sdk
obsidian-image-hosting
nas-video-autoclip
其他通用实验仓
```

---

## 10. 统一统筹机制

### 10.1 每个仓必须有角色标签

```text
ROOT_CANON
CONTENT_WORKBENCH
SOURCE_CANON
OS_BRAIN
AGENT_SKILL
DATA_SYNC
CONTENT_ENGINE
PRODUCT_SURFACE
RESEARCH_SOURCE
CLIENT_COCKPIT
EXPERIMENT_ARCHIVE
```

### 10.2 每个仓必须回答六问

```text
1. 它服务 A1-C4 哪个模块？
2. 它是正典源、内容工作仓、产品仓、执行仓，还是参考仓？
3. 它的产物是否需要回写 soul？
4. 回写到 modules / glossary / interfaces / templates / source/indexes / source/extracts / project 哪个位置？
5. 是否含私有/敏感信息，需要脱敏或只抽取结构？
6. 它是否应该被保留、合并、归档，还是继续独立运行？
```

### 10.3 GitHub → Feishu 统筹建议

优先使用：

```text
github-feishu-sync
feishu-bitable-bridge
yuanli-content-engine-os
```

建立 Feishu 多维表：

```text
T01 仓库总表
T02 仓库角色标签
T03 A1-C4 模块映射
T04 回写位置
T05 私密等级
T06 当前活跃度
T07 下一步任务
T08 关联 Issue / PR / Commit
```

### 10.4 soul 内部统筹建议

新增/维护：

```text
source/indexes/github-repository-strategy-index.md
source/indexes/repo-to-module-map.md
project/github-repo-governance-roadmap.md
project/backwrite-log.md
```

---

## 11. 下一步建议

```text
1. 为 P0/P1 仓库逐一建立 repo source index。
2. 在 soul 建立 repo-to-module-map.md。
3. 用 github-feishu-sync 把 GitHub 仓库总表同步到飞书。
4. 用 feishu-bitable-bridge 建立 repo governance 多维表。
5. 以 B1 原力借势黄金样章作为第一条跨仓内容生产流水线。
```
