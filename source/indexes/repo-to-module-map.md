# Repo-to-Module Map · v0.1

> Issue: #208 `[治理] GitHub 仓库统一统筹与 repo-to-module map`  
> 归属：source/indexes / GitHub 仓库治理 / A1-C4 映射  
> 目标：把 `moonstachain` 下与原力战略相关的仓库，统一映射到 A1-C4 模块、仓库角色、回写位置和下一步治理动作。  
> 更新日期：2026-07-01

---

## 0. 总裁决

```text
只有 yuanli-strategy-soul 是正典根仓。
其他仓库必须被角色化、模块化、回写化。
```

任何仓库不得凭自身 README 或历史定位抢占最高真源位置。

---

## 1. 角色标签

| 标签 | 定义 |
|---|---|
| ROOT_CANON | 正典根仓，负责母公理、龙骨、模块、术语、接口、模板、回写 |
| CONTENT_WORKBENCH | 内容工程工作仓，负责书稿、课程、章节、样章、外显 |
| SOURCE_CANON | 正典源料仓，包含旧正典、绿皮书、白皮书、工具卡 |
| OS_BRAIN | 大脑/知识系统/专家经验系统化仓 |
| AGENT_SKILL | Agent、Skill、Workflow、Codex 执行仓 |
| DATA_SYNC | GitHub / Feishu / 数据同步治理仓 |
| CONTENT_ENGINE | 内容经营、矩阵、分发、公开驾驶舱仓 |
| PRODUCT_SURFACE | 网站、H5、产品外显仓 |
| RESEARCH_SOURCE | 研究资料、智库、外部素材仓 |
| CLIENT_COCKPIT | 客户/项目看板与驾驶舱仓 |
| EXPERIMENT_ARCHIVE | 实验、早期 clone、通用技术参考仓 |

---

## 2. P0 仓库映射

| 仓库 | 角色标签 | 主模块 | 辅模块 | 私密等级 | 回写位置 | 下一步动作 | Feishu 同步 |
|---|---|---|---|---|---|---|---|
| `yuanli-strategy-soul` | ROOT_CANON | 跨三部 / 治理 | A1-C4 | public | 本仓全部目录 | 继续作为唯一入口与回写中心 | 是 |
| `yuanli-strategy-trilogy` | CONTENT_WORKBENCH | 跨三部 | A1-C4 | public | `source/extracts/`、`modules/`、`templates/` | 以 B1 黄金样章跑通内容闭环 | 是 |
| `yuanli-strategy-trilogy-private` | CONTENT_WORKBENCH / SOURCE_CANON | 跨三部 | A1-C4 | private | `source/indexes/`、`source/extracts/` | 建立 private source index，只抽结构与正典原子 | 是，需脱敏 |
| `yuanli-strategy-playbook` | SOURCE_CANON | 共享脊骨 | A/B/C | public | `glossary/`、`modules/`、`templates/` | 抽白皮书/绿皮书公理与工具卡 | 是 |
| `yuanli-startup-map-book` | SOURCE_CANON | B1-B4 | B/C接口 | public | `modules/B-原力创业/`、`templates/startup/` | 作为 B1 黄金样章核心源 | 是 |
| `yuanli-startup-map-site` | SOURCE_CANON / PRODUCT_SURFACE | B1-B4 | C3/C4 | public | `source/extracts/startup-extracts/`、`templates/startup/` | 抽 data 层、AI coach、四关外显模式 | 是 |
| `yuanli-os-greenbook` | SOURCE_CANON | C1-C4 | A/C接口 | public | `modules/C-原力OS/`、`templates/os/` | 抽 C2/C3/C4 工具链与章节结构 | 是 |

---

## 3. P1 仓库映射

| 仓库 | 角色标签 | 主模块 | 辅模块 | 私密等级 | 回写位置 | 下一步动作 | Feishu 同步 |
|---|---|---|---|---|---|---|---|
| `yuanli-content-engine-os` | CONTENT_ENGINE / DATA_SYNC | C4 | C2/C3 | private | `templates/os/`、`project/`、`source/indexes/` | 接入内容生产与公开驾驶舱治理 | 是，需脱敏 |
| `yuanli-brain` | OS_BRAIN | C2 | C3/C4 | private | `modules/C-原力OS/`、`templates/os/` | 抽 11 层大脑、OSA 金卡、CBM 棋盘 | 是，需脱敏 |
| `yuanli-interface-skills` | AGENT_SKILL | C4 | C1/C2 | public | `templates/os/`、`codex/` | 抽 skill、viewer、偏好学习、连续进化机制 | 是 |
| `skill-pattern-publisher` | AGENT_SKILL | C4 | C2 | public | `templates/os/Skill蒸馏卡.md`、`codex/` | 打通 workflow → skill 发布机制 | 是 |
| `github-feishu-sync` | DATA_SYNC | C2/C4 | 治理 | public | `project/`、`source/indexes/` | 用于 GitHub 仓库总表同步到飞书 | 是 |
| `feishu-bitable-bridge` | DATA_SYNC | C2/C4 | 治理 | public | `project/`、`source/indexes/` | 用于 Feishu Base schema 与 record 同步 | 是 |
| `yuanli-website` | PRODUCT_SURFACE | C3/C4 | 跨三部外显 | public | `docs/`、`templates/os/战略地图.md` | 补 README，明确服从 soul | 是 |

---

## 4. P2 仓库映射

| 仓库 | 角色标签 | 主模块 | 辅模块 | 私密等级 | 回写位置 | 下一步动作 |
|---|---|---|---|---|---|---|
| `yuanli-health-os` | PRODUCT_SURFACE | C4 | 健康垂直应用 | public | `source/extracts/product-extracts/` | 作为垂直 OS 案例，不进三部正典 |
| `yuanli-health-apple` | PRODUCT_SURFACE / DATA_SYNC | C4 | 健康数据 | private | `source/extracts/product-extracts/` | 只抽数据输入结构 |
| `yuanli-os-agent-team` | AGENT_SKILL | C4 | C2/C3 | public | `source/extracts/os-extracts/` | 判断是否 active，抽 agent 班底模式 |
| `yuanli-os-ops` | AGENT_SKILL / DATA_SYNC | C4 | 治理 | private | `project/`、`codex/` | 抽运维机制 |
| `yuanli-os-bootstrap` | AGENT_SKILL | C4 | C1-C4 | private | `codex/`、`templates/os/` | 抽 OS 启动模板 |
| `dixin-strategy-cockpit` | CLIENT_COCKPIT | C3 | B3/B4 | public | `templates/os/战略地图.md` | 抽战略 cockpit 视觉/结构 |
| `ip-company-strategy-cockpit` | CLIENT_COCKPIT | C3 | B3/B4 | public | `templates/os/战略地图.md` | 抽 IP 公司战略看板模式 |
| `xushizhe-osa-cockpit` | CLIENT_COCKPIT | C3/C4 | OSA | private | `templates/os/闭环检查卡.md` | 抽 OSA cockpit 模式 |
| `business-structure-designer` | RESEARCH_SOURCE / PRODUCT_SURFACE | B3 | B4 | private | `templates/startup/三链路画布.md` | 抽商业结构设计模式 |
| `osa-strategy-card-distiller` | AGENT_SKILL | C4 | C3 | public | `templates/os/Skill蒸馏卡.md` | 打通 OSA 卡蒸馏 |

---

## 5. P3 / 暂缓仓库

| 仓库族 | 标签 | 处理方式 |
|---|---|---|
| `quant-*` / `youquant-*` | EXPERIMENT_ARCHIVE / RESEARCH_SOURCE | 暂缓，仅保留检索索引；如进入财富章节再抽取 |
| `Resume-Matcher` | EXPERIMENT_ARCHIVE | 暂缓 |
| `reflex-llm-examples` | EXPERIMENT_ARCHIVE | 暂缓 |
| `bolt.diy` | EXPERIMENT_ARCHIVE | 暂缓 |
| `typescript-sdk` | EXPERIMENT_ARCHIVE | 暂缓 |
| `obsidian-image-hosting` | PRODUCT_SURFACE / ASSET_HOST | 暂缓，作为图片资产托管参考 |
| `nas-video-autoclip` | CONTENT_ENGINE | 后续内容矩阵阶段再纳入 |
| `ai-news-*` | RESEARCH_SOURCE | 只作资讯源，不进正典 |

---

## 6. 回写位置规则

| 仓库产物类型 | 回写位置 |
|---|---|
| 公理 / 龙骨 / 三部边界 | `CONSTITUTION.md`、`docs/07-龙骨总纲.md`、`docs/04-跨三部脊骨矩阵.md` |
| 模块定义 / 输入输出 / 判断标准 | `modules/A-B-C/*` |
| 正名 / 别名 / 禁用名 | `glossary/*` |
| 三部接缝 / 上下游接口 | `interfaces/*` |
| 工具卡 / 章节模板 / Codex 任务模板 | `templates/*`、`codex/*` |
| 仓库/源文件/章节映射 | `source/indexes/*` |
| 样章/案例/工具抽取 | `source/extracts/*` |
| 项目治理 / 路线图 / 回写记录 | `project/*` |

---

## 7. 当前最高优先级

```text
P0：用 B1 原力借势黄金样章验证跨仓闭环。

需要调用：
- yuanli-strategy-soul：模块、模板、接口、回写
- yuanli-strategy-trilogy：章节生产位置
- yuanli-startup-map-book：B1 源料
- yuanli-startup-map-site：外显/数据层参考
- yuanli-content-engine-os：后续一鱼多吃与分发治理
```

---

## 8. 下一步

```text
1. 为 P0 仓库建立 repo source extract。
2. 建立 Feishu 仓库总表字段。
3. 用 B1 黄金样章跑通 repo-to-module-map 的第一条真实闭环。
```
