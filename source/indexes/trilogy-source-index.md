# trilogy 源头索引 · v0.1

> Issue: #206 `[治理] trilogy 原子级拆解并吸收回 soul`  
> 来源仓：`moonstachain/yuanli-strategy-trilogy`  
> 目标：把 `trilogy` 中的知识地图、书稿骨架、概念全谱、样章与外显材料，拆解为可进入 `soul` 的正典概念原子、模块接口、术语词典、模板与回写规则。  
> 裁决：本索引不搬运完整正文，不把 `trilogy` 物理合仓；只标注吸收策略与回写位置。

---

## 0. 总裁决

```text
yuanli-strategy-soul = 正典根仓 / 龙骨仓 / 基石概念体系 / 任务入口 / 递归回写中心

yuanli-strategy-trilogy = 三部曲内容工程工作仓 / 书稿与课程孵化仓 / 外显表达仓
```

本索引的核心动作：

```text
trilogy 文件 → 信息五层萃取 → 概念原子 → A1-C4 模块 → 模板 / 工具 / Issue / Codex task → 回写 soul
```

---

## 1. 分层口径

| 层级 | 含义 | 吸收策略 |
|---|---|---|
| P0 正典候选 | 改变三部曲结构、模块边界、术语正名、接缝裁决的文件 | 原子化吸收进 `canon/`、`modules/`、`glossary/`、`interfaces/` |
| P1 模块素材 | 支撑 A1-C4 模块拆解、章节映射、概念地图的数据层 | 建立索引，按模块吸收到 `modules/` 与 `source/extracts/` |
| P2 内容样章 | 已成稿章节、教学章、叙事样本、练习动作 | 正文留 `trilogy`，只抽取方法、工具卡、写作范式 |
| P3 外显/构建 | HTML、构建脚本、门户、导航、review 看板 | 不进正典；只抽取通用构建规则或外显目录 |
| P4 历史/归档 | 旧口径、历史重构稿、阶段性文脉盘点 | 保留引用，标注被 `soul` 龙骨覆盖 |

---

## 2. P0 正典候选文件

| 文件 | 当前用途 | 主归属 | 吸收策略 | 回写位置 |
|---|---|---|---|---|
| `README.md` | 仓库定位、当前状态、目录、构建方式、真源说明 | 治理 / 跨三部 | 提炼 `trilogy` 未来角色：内容工程工作仓；不再作为最高 SSOT | `source/indexes/`、后续 `interfaces/` |
| `trilogy/原力战略三部曲-重构骨架设计稿.md` | 三本书边界、接缝法、去重三缝、结构重构 | 跨三部 / 正典结构 | 吸收三本边界、去重三缝、两条腿与三本书兼容关系 | `canon/`、`interfaces/去重三缝.md`、`modules/` |
| `trilogy/原力三部曲-文脉总纲.md` | 旧阶段文脉总纲、三部传动、真源挂回 | 跨三部 / 历史文脉 | 保留为历史脉络；吸收传动接力与真源台账；旧“两条腿”口径降级为证明模型 | `source/extracts/`、`canon/三部边界.md` |
| `trilogy/原力三部曲-基石与关键概念-全谱.md` | 三部曲字典层，全局基石与关键概念 | 术语 / 共享脊骨 | 吸收共享脊骨术语、局部术语、SHARED/LOCAL 标记 | `glossary/`、`canon/04-跨三部脊骨矩阵.md` |
| `trilogy/原力资产-基石与关键概念-全谱.md` | 《原力资产》字典层、原力U、去重三缝 | A 轴 / 资产术语 | 吸收 A1-A4 素材、原力U叙事模型、资产边界、工具卡候选 | `modules/A-原力资产/`、`glossary/asset-资产术语.md` |
| `trilogy/原力OS-信雅达双轨改名表.md` | OS 双轨改名、元AI四件套、结构修建议 | C 轴 / OS术语 | 吸收 C1-C4 四件套、双轨命名规则、OS 术语别名 | `modules/C-原力OS/`、`glossary/os-OS术语.md` |

---

## 3. P1 模块素材文件

| 文件 | 当前用途 | 主归属 | 吸收策略 | 回写位置 |
|---|---|---|---|---|
| `trilogy/_atlas/trilogy-master-outline.json` | 一体化四级大纲，三书、章节、节、目 | 跨三部 / 内容工程 | 建立“龙骨模块 → 章节 → 节目”的映射表；不直接替代 A1-C4 | `source/indexes/module-to-file-map.md` |
| `trilogy/_atlas/atlas-chuangye.json` | 原力创业概念地图，B1-B4 四关数据层 | B 轴 | 抽取 B1-B4 工具包、术语、原子模块 | `modules/B-原力创业/`、`templates/startup/` |
| `trilogy/_atlas/atlas-v2-chuangye.json` | 创业地图 v2 数据层 | B 轴 | 与 `atlas-chuangye.json` 对照，确认命名与冗余 | `source/extracts/startup-extracts/` |
| `trilogy/_atlas/atlas-v2-zichan.json` | 资产地图数据层 | A 轴 | 抽取 A1-A4 概念节点、练习节点、章节对应 | `modules/A-原力资产/` |
| `trilogy/_atlas/atlas-v2-os.json` | OS 地图数据层 | C 轴 | 抽取 C1-C4 组件节点与任务链路 | `modules/C-原力OS/` |
| `trilogy/_atlas/outline.json` | 提纲架构数据 | 内容工程 | 仅作为章节映射参考 | `source/indexes/` |
| `trilogy/_atlas/chuangye-outline.json` | 创业四级目录 | B 轴 | 映射 B1-B4 正典模块与内容展开 | `source/indexes/module-to-file-map.md` |
| `trilogy/_atlas/os-outline.json` | OS 四级目录 | C 轴 | 映射 C1-C4 正典模块与内容展开 | `source/indexes/module-to-file-map.md` |

---

## 4. P2 内容样章文件

| 文件 | 当前用途 | 主归属 | 吸收策略 | 回写位置 |
|---|---|---|---|---|
| `books/01-原力资产/第一章-觉察.md` | 《原力资产》样章；算力鸿沟、你×AI、关窍五步法、路径反转 | A1 发现母体 | 正文留 `trilogy`；抽取“算力活/原力活清算卡”“同质化能力清算” | `templates/asset/`、`modules/A-原力资产/A1-发现母体.md` |
| `books/03-原力OS/最小闭环.md` | OS 教学章；最小闭环、真实证据、writeback、skill蒸馏 | C4 一条链路 | 正文留 `trilogy`；抽取“闭环检查卡”“收口句模板”“最小闭环任务模板” | `templates/os/`、`modules/C-原力OS/C4-一条链路.md` |

---

## 5. P3 外显与构建文件

| 文件 | 当前用途 | 主归属 | 吸收策略 | 回写位置 |
|---|---|---|---|---|
| `trilogy/原力三部曲-概念地图.html` | 知识地图外显 | 外显 | 不进正典；保留为内容工程产物 | 后续 `docs/canon-map.html` 可参考 |
| `trilogy/原力三部曲-文脉骨架座舱.html` | 体系关系图 | 外显 / 跨三部 | 抽取展示结构，不搬 HTML | `docs/` 外显规则候选 |
| `trilogy/build_atlas.py` | atlas 渲染脚本 | 构建 | 仅在需要统一外显构建时吸收 | `codex/` 后续候选 |
| `trilogy/build_master_outline.py` | 总纲渲染脚本 | 构建 | 仅抽取构建策略 | `codex/` 后续候选 |
| `trilogy/build_outline.py` | 提纲渲染脚本 | 构建 | 仅抽取构建策略 | `codex/` 后续候选 |
| `review/build_review.py` | 写作复盘看板 | 项目治理 | 后续可升级为 soul 的回写看板 | `project/` 后续候选 |
| `build_portal.py` | 门户首页构建 | 外显 | 后续统一 Pages 入口时参考 | `docs/` 后续候选 |
| `apply_nav.py` | 导航注入 | 外显 | 非正典，保留在执行仓 | 不吸收 |

---

## 6. 第一批吸收对象：A1-C4 十二模块

| 模块 | 主要来源 | 当前吸收状态 |
|---|---|---|
| A1 发现母体 | 资产样章、资产全谱、龙骨总纲 | 已建立模块文件 v0.1 |
| A2 回到母体 | 资产全谱、原力U、龙骨总纲 | 已建立模块文件 v0.1 |
| A3 获得原力 | 资产全谱、元AI、自我说明书 | 已建立模块文件 v0.1 |
| A4 显化原力 | 资产全谱、天选用户、贵问题、市场验证 | 已建立模块文件 v0.1 |
| B1 原力借势 | 创业 atlas、重构骨架、龙骨总纲 | 已建立模块文件 v0.1 |
| B2 品类独创 | 创业 atlas、心理账户、三角定位 | 已建立模块文件 v0.1 |
| B3 模式升维 | 创业 atlas、三链路、利润容器 | 已建立模块文件 v0.1 |
| B4 壁垒锁定 | 创业 atlas、16 控制点、财富飞轮 | 已建立模块文件 v0.1 |
| C1 一纸文脉 | OS 双轨改名表、龙骨总纲 | 已建立模块文件 v0.1 |
| C2 一个大脑 | OS 双轨改名表、知识库/案例库/术语库 | 已建立模块文件 v0.1 |
| C3 一张地图 | OS 双轨改名表、战略地图/能力地图裁决 | 已建立模块文件 v0.1 |
| C4 一条链路 | 最小闭环样章、OSA、Codex task | 已建立模块文件 v0.1 |

---

## 7. 后续 P1 待办

```text
1. 从 trilogy 全谱提炼 glossary/术语正典词典.md
2. 从重构骨架提炼 interfaces/去重三缝.md
3. 从样章提炼 templates/asset/算力活-原力活清算卡.md
4. 从最小闭环提炼 templates/os/闭环检查卡.md 与 收口句模板.md
5. 建立 source/indexes/module-to-file-map.md
6. 更新 Issue #206，标注 P0 已完成，进入 P1 术语与模板阶段
```

---

## 8. 回写纪律

任何从 `trilogy` 吸收的新概念，必须满足：

```text
属于哪个模块？
来源文件是什么？
输入是什么？
输出是什么？
判断标准是什么？
回写到哪里？
下一次如何复用？
```

不能回答以上问题的内容，不进入 `soul` 正典层，只保留为参考素材。
