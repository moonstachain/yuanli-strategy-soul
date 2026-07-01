# GitHub 仓库治理路线图 · v0.1

> Issue: #208 `[治理] GitHub 仓库统一统筹与 repo-to-module map`  
> 归属：project / GitHub 统一统筹 / 仓库治理  
> 目标：把 `moonstachain` 下与原力战略相关的仓库，纳入统一角色、模块、回写、飞书同步和内容生产治理。  
> 更新日期：2026-07-01

---

## 0. 北极星

```text
所有项目从 soul 出发，所有经验回到 soul。
```

本路线图服务一个目标：

```text
让 GitHub 仓库群从“散点资产”升级为“原力战略内容与 OS 生产网络”。
```

---

## 1. 治理目标

### 1.1 短期目标

```text
把所有高价值仓库统一映射到 A1-C4、角色标签、回写位置和下一步任务。
```

### 1.2 中期目标

```text
用 B1 原力借势黄金样章，跑通 soul → source repo → trilogy → extract → content-engine → backwrite 的完整链路。
```

### 1.3 长期目标

```text
形成 GitHub × Feishu × Website × Agent 的原力战略知识生产与经营系统。
```

---

## 2. 阶段路线图

## Phase 0 · 总索引与角色裁决

状态：进行中

输出：

```text
source/indexes/github-repository-strategy-index.md
source/indexes/repo-to-module-map.md
source/indexes/repo-source-index-p0-p1.md
project/github-repo-governance-roadmap.md
```

验收：

```text
P0/P1 仓库已分层。
每个仓库有角色标签、模块归属、回写位置、下一步动作。
Issue #208 已记录。
```

---

## Phase 1 · P0/P1 仓库源抽取

目标：

```text
把最关键源料仓的 README、目录、关键文件抽成 source extract，不搬完整正文。
```

优先队列：

```text
1. yuanli-strategy-playbook
2. yuanli-startup-map-book
3. yuanli-startup-map-site
4. yuanli-os-greenbook
5. yuanli-strategy-trilogy-private
6. yuanli-brain
7. yuanli-content-engine-os
```

输出：

```text
source/extracts/repo-extracts/yuanli-strategy-playbook-extract.md
source/extracts/repo-extracts/yuanli-startup-map-book-extract.md
source/extracts/repo-extracts/yuanli-startup-map-site-extract.md
source/extracts/repo-extracts/yuanli-os-greenbook-extract.md
source/extracts/repo-extracts/yuanli-brain-extract.md
source/extracts/repo-extracts/yuanli-content-engine-os-extract.md
```

验收：

```text
每个 extract 必须包含：仓库角色、A1-C4 映射、可吸收资产、禁止搬迁内容、下一步回写位置。
```

---

## Phase 2 · Feishu 仓库总表同步

目标：

```text
把 GitHub 仓库治理从 Markdown 索引升级为可运营多维表。
```

使用仓库：

```text
github-feishu-sync
feishu-bitable-bridge
yuanli-content-engine-os
```

建议 Feishu 表结构：

| 字段 | 类型 | 说明 |
|---|---|---|
| Repo Full Name | text | `moonstachain/repo` |
| Role Tag | select | ROOT_CANON / SOURCE_CANON / AGENT_SKILL 等 |
| Primary Module | select | A1-C4 / 跨三部 / 治理 |
| Secondary Modules | multi-select | 辅模块 |
| Visibility | select | public/private |
| Priority | select | P0/P1/P2/P3 |
| Backwrite Target | multi-select | modules / glossary / templates / source/extracts / project |
| Sensitive Level | select | public-safe / private-structure / private-sensitive |
| Active Status | select | active / dormant / archive / unknown |
| Next Action | text | 下一步动作 |
| Issue | url | 对应 GitHub Issue |
| Last Checked | date | 最近检查日期 |
| Notes | text | 备注 |

验收：

```text
Feishu 中可查看全部 P0/P1 仓库及治理状态。
重复同步不追加重复行。
私有仓只同步结构，不泄露正文。
```

---

## Phase 3 · 黄金内容闭环

目标：

```text
用 B1 原力借势黄金样章，验证整个仓库治理系统不是静态目录，而是能生产内容、回写正典、支持分发。
```

调用仓库：

```text
yuanli-strategy-soul
yuanli-strategy-trilogy
yuanli-startup-map-book
yuanli-startup-map-site
yuanli-content-engine-os
```

输出：

```text
yuanli-strategy-trilogy/books/02-原力创业/第一章-原力借势.md
soul/source/extracts/startup-extracts/第一章-原力借势-extract.md
soul/project/backwrite-log.md 更新
content-engine-os 中生成一鱼多吃任务队列
```

验收：

```text
章节正文完成。
工具卡调用完成。
extract 完成。
backwrite 完成。
一鱼多吃任务生成。
```

---

## Phase 4 · 产品与外显治理

目标：

```text
把 yuanli-website、startup-map-site、content-engine-workbench、cockpit 类仓库纳入外显治理。
```

输出：

```text
source/indexes/product-surface-index.md
project/product-surface-governance.md
```

验收：

```text
每个网站/外显仓明确：服从哪个正典、读取哪些数据、展示哪些内容、不得展示哪些内容。
```

---

## Phase 5 · Agent / Skill 生产管线

目标：

```text
把重复工作沉淀为 skill，并通过 skill-pattern-publisher / yuanli-interface-skills / Codex 模板统一执行。
```

输出：

```text
source/indexes/agent-skill-index.md
project/skill-publishing-roadmap.md
templates/os/Skill蒸馏卡.md 的实战样例
```

验收：

```text
至少一个重复 workflow 被蒸馏为 skill pattern。
至少一个 skill 进入本地或 GitHub 发布流程。
```

---

## 3. 当前优先级

### 立即做

```text
1. 完成 repo-source-index-p0-p1.md。
2. 更新 project/backwrite-log.md。
3. 在 #208 回写 P0 完成情况。
```

### 下一轮做

```text
1. 建立 repo extract 目录。
2. 深抽 yuanli-startup-map-book，为 B1 黄金样章准备源料。
3. 创建 B1 黄金样章 Issue。
```

---

## 4. 风险与护栏

| 风险 | 说明 | 护栏 |
|---|---|---|
| 仓库过多，治理失焦 | 每个仓都看起来重要 | 只按 P0/P1/P2/P3 排队 |
| 私有仓误泄露 | private 仓可能含敏感数据 | 只抽结构、术语、模板，不搬正文 |
| 重复真源 | 多仓各自定义同一概念 | 统一回到 `soul/glossary` 与 `modules` |
| 外显仓抢正典 | 网站/H5 很像“主入口” | 网站只展示，不裁决 |
| Agent 仓泛化 | 技术仓太多，难以管理 | 只吸收 workflow / skill pattern |

---

## 5. Done 标准

```text
1. GitHub 仓库分层清楚。
2. P0/P1 仓库有 source index。
3. repo-to-module-map 可用于任务归属判断。
4. Feishu 同步方案可执行。
5. B1 黄金样章能调用本地图谱。
```
