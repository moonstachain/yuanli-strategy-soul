# P0/P1 仓库源索引 · v0.1

> Issue: #208 `[治理] GitHub 仓库统一统筹与 repo-to-module map`  
> 归属：source/indexes / repo source index  
> 目标：为最优先纳入 `soul` 治理的 P0/P1 仓库建立源索引，标注 README 核验状态、可抽取资产和下一步 extract 计划。  
> 更新日期：2026-07-01

---

## 0. 索引原则

```text
不整仓搬迁。
不复制私有正文。
不让源料仓抢正典。
只抽取：结构、术语、工具、模板、章节路径、外显模式、workflow、回写规则。
```

---

## 1. P0 仓库源索引

| 仓库 | 角色 | README 核验 | 主要资产 | A1-C4 映射 | 下一步 extract |
|---|---|---|---|---|---|
| `yuanli-strategy-soul` | ROOT_CANON | 已核验 | 母公理、龙骨、模块、术语、接口、模板、回写日志 | A1-C4 / 治理 | 持续维护，不需要 extract |
| `yuanli-strategy-trilogy` | CONTENT_WORKBENCH | 已核验 | 三部曲内容工程、书稿、课程、概念地图、样章、构建脚本 | A1-C4 | 已有 `trilogy-source-index.md`，下一步 B1 样章 |
| `yuanli-strategy-trilogy-private` | CONTENT_WORKBENCH / SOURCE_CANON | 待读 | 私有三部曲源稿、骨架、未公开材料 | A1-C4 | 建立 private-source-index，只抽结构 |
| `yuanli-strategy-playbook` | SOURCE_CANON | 已核验 | 白皮书、绿皮书、财富公式、道体法术器守、工具卡 | 共享脊骨 / A/B/C | `source/extracts/repo-extracts/yuanli-strategy-playbook-extract.md` |
| `yuanli-startup-map-book` | SOURCE_CANON | 已核验 | 原力创业通关地图、财富公式、四关、58 商业原子、16 控制点 | B1-B4 | `source/extracts/repo-extracts/yuanli-startup-map-book-extract.md` |
| `yuanli-startup-map-site` | SOURCE_CANON / PRODUCT_SURFACE | 已核验 | 交互网站、AI 教练、data 层、四关视图、12 原型、58 原子、16 控点 | B1-B4 / C3/C4 | `source/extracts/repo-extracts/yuanli-startup-map-site-extract.md` |
| `yuanli-os-greenbook` | SOURCE_CANON | 已核验 | 4 部 55 章，OSA、信息五层、IDA、Evolution Note、Skill 蒸馏 | C1-C4 | `source/extracts/repo-extracts/yuanli-os-greenbook-extract.md` |

---

## 2. P1 仓库源索引

| 仓库 | 角色 | README 核验 | 主要资产 | A1-C4 映射 | 下一步 extract |
|---|---|---|---|---|---|
| `yuanli-content-engine-os` | CONTENT_ENGINE / DATA_SYNC | 已核验 | GitHub × 飞书 × 网站内容经营中枢，T01-T30，public-safe bundle，发布门 | C2/C3/C4 | `source/extracts/repo-extracts/yuanli-content-engine-os-extract.md` |
| `yuanli-brain` | OS_BRAIN | 已核验 | 专家大脑、11 层架构、OSA 三轴金卡、CBM 棋盘、自进化飞轮 | C2/C3/C4 | `source/extracts/repo-extracts/yuanli-brain-extract.md` |
| `yuanli-interface-skills` | AGENT_SKILL | 已核验 | Pneuma Skills、visual environment、skills、偏好学习、连续学习、distribution | C4 | `source/extracts/repo-extracts/yuanli-interface-skills-extract.md` |
| `skill-pattern-publisher` | AGENT_SKILL | 已核验 | workflow → reusable local skill → GitHub publish | C4 | `source/extracts/repo-extracts/skill-pattern-publisher-extract.md` |
| `github-feishu-sync` | DATA_SYNC | 已核验 | GitHub 仓库扫描、skill pattern 分类、Feishu Bitable 同步、webhook 更新 | C2/C4 / 治理 | `source/extracts/repo-extracts/github-feishu-sync-extract.md` |
| `feishu-bitable-bridge` | DATA_SYNC | 已核验 | Feishu wiki/base 检查、schema/records 导出、dry-run upsert | C2/C4 / 治理 | `source/extracts/repo-extracts/feishu-bitable-bridge-extract.md` |
| `yuanli-website` | PRODUCT_SURFACE | README 缺失 | 原力官网 / 外显入口候选 | C3/C4 | 先补 README，再纳入外显治理 |

---

## 3. P0/P1 仓库的 source extract 标准

每个 repo extract 文件必须包含：

```text
1. 仓库角色
2. A1-C4 映射
3. README 核心判断
4. 关键目录 / 文件
5. 可吸收资产
6. 禁止搬迁内容
7. 回写位置
8. 下一步任务
9. 私密与脱敏要求
```

---

## 4. 首批 extract 优先级

### 第一优先级：服务 B1 黄金样章

```text
1. yuanli-startup-map-book-extract.md
2. yuanli-startup-map-site-extract.md
3. yuanli-strategy-playbook-extract.md
```

### 第二优先级：服务 C4 / OS 工具链

```text
4. yuanli-os-greenbook-extract.md
5. yuanli-brain-extract.md
6. yuanli-interface-skills-extract.md
7. skill-pattern-publisher-extract.md
```

### 第三优先级：服务内容工程与飞书同步

```text
8. yuanli-content-engine-os-extract.md
9. github-feishu-sync-extract.md
10. feishu-bitable-bridge-extract.md
```

---

## 5. 当前缺口

```text
1. 尚未读取 trilogy-private。
2. 尚未为 P0/P1 仓库创建 repo-extracts 文件。
3. 尚未执行 GitHub → Feishu 仓库总表同步。
4. yuanli-website 缺 README，需要补仓库定位。
5. P2/P3 仓库仍需逐步排查 active/dormant 状态。
```

---

## 6. 下一步

```text
1. 先创建 source/extracts/repo-extracts/yuanli-startup-map-book-extract.md。
2. 以 B1 原力借势为目标，启动黄金样章 Issue。
3. 用 repo-to-module-map 作为之后所有仓库任务归属判断底表。
```
