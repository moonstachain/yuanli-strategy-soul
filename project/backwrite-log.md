# 回写日志 · Backwrite Log

> 归属：project / 递归回写 / 任务治理  
> 作用：记录所有从执行仓、内容仓、Agent、Codex、网站、课程、书稿回流到 `yuanli-strategy-soul` 的正典变化。  
> 母法：输出必须成为下一次输入，否则不是原力资产。

---

## 0. 回写总原则

```text
任何任务结束，都不得只报“完成”。
必须说明：
1. 产生了什么新资产？
2. 回写到了哪里？
3. 更新了哪个模块、术语、模板、接口或地图？
4. 下一次如何复用？
```

---

## 1. 回写对象分类

| 类型 | 说明 | 回写位置 |
|---|---|---|
| 正典裁决 | 改变母公理、三部边界、十二模块、核心术语 | `CONSTITUTION.md`、`docs/`、`canon/` |
| 模块更新 | A1-C4 的定义、输入、输出、判断标准变化 | `modules/` |
| 术语更新 | 新增正名、别名、弃用名、边界说明 | `glossary/` |
| 接口更新 | A→B、B→C、C→A 的输入输出变化 | `interfaces/` |
| 模板更新 | 新增工具卡、任务模板、章节模板、工作流 | `templates/`、`codex/` |
| 索引更新 | 源文件映射、章节映射、案例映射 | `source/indexes/` |
| 案例抽取 | 从项目、客户、样章提炼案例或 pattern | `source/extracts/` |
| 看板治理 | 项目状态、优先级、路线图、Issue 回写 | `project/` |

---

## 2. 回写记录模板

```text
## YYYY-MM-DD · 回写标题

- 来源任务 / Issue：
- 来源仓库：
- 来源文件 / 输出物：
- 归属模块：A1 / A2 / A3 / A4 / B1 / B2 / B3 / B4 / C1 / C2 / C3 / C4 / 跨三部 / 治理
- 服务脊骨：ʸx / 你×AI / 借势×合力 / 信息五层 / OSA / 递归回写 / 其他
- 回写类型：正典裁决 / 模块更新 / 术语更新 / 接口更新 / 模板更新 / 索引更新 / 案例抽取 / 看板治理
- 已回写位置：
- 产生的新资产：
- 下一次如何复用：
- 仍需人工裁决：
- Commit / PR / Issue：
```

---

## 3. 已回写记录

## 2026-07-01 · trilogy 原子级吸收 P0/P1/P1-A/B/C

- 来源任务 / Issue：#206 `[治理] trilogy 原子级拆解并吸收回 soul`
- 来源仓库：`moonstachain/yuanli-strategy-trilogy`
- 来源文件 / 输出物：README、重构骨架、文脉总纲、基石全谱、资产全谱、OS 双轨改名表、atlas JSON、资产样章、OS 最小闭环样章
- 归属模块：A1-C4 / 跨三部 / 治理
- 服务脊骨：ʸx / 信息五层 / 递归回写 / OSA
- 回写类型：模块更新 / 术语更新 / 接口更新 / 模板更新 / 索引更新
- 已回写位置：
  - `source/indexes/trilogy-source-index.md`
  - `source/indexes/module-to-file-map.md`
  - `modules/A-原力资产/*`
  - `modules/B-原力创业/*`
  - `modules/C-原力OS/*`
  - `glossary/*`
  - `interfaces/*`
  - `templates/asset/*`
  - `templates/startup/*`
  - `templates/os/*`
- 产生的新资产：十二模块正典文件、术语词典、三部接口、样章工具卡、模块源文件映射
- 下一次如何复用：后续所有 `trilogy` 内容吸收、书稿写作、课程拆解、Codex 任务生成，均先挂靠 A1-C4 与对应模板
- 仍需人工裁决：是否更新 `CONSTITUTION.md`，是否将 `canon/` 目录正式引入仓库结构
- Commit / PR / Issue：#206

---

## 2026-07-01 · GitHub 仓库统一统筹 P0

- 来源任务 / Issue：#208 `[治理] GitHub 仓库统一统筹与 repo-to-module map`
- 来源仓库：`moonstachain/*`
- 来源文件 / 输出物：GitHub 仓库搜索结果、P0/P1 关键仓 README、仓库战略索引
- 归属模块：跨三部 / 治理 / C2 / C3 / C4
- 服务脊骨：ʸx / 信息五层 / OSA / 递归回写
- 回写类型：索引更新 / 看板治理 / 项目治理
- 已回写位置：
  - `source/indexes/github-repository-strategy-index.md`
  - `source/indexes/repo-to-module-map.md`
  - `source/indexes/repo-source-index-p0-p1.md`
  - `project/github-repo-governance-roadmap.md`
  - `project/backwrite-log.md`
- 产生的新资产：GitHub 仓库角色标签体系、repo-to-module 映射表、P0/P1 仓库源索引、仓库治理路线图
- 下一次如何复用：后续任何新仓库、旧仓库、源料仓、产品仓、Agent 仓，都先通过 repo-to-module-map 判断角色、模块和回写位置
- 仍需人工裁决：是否执行 GitHub → Feishu 仓库总表同步；是否给 `yuanli-website` 补 README；是否正式创建 `source/extracts/repo-extracts/`
- Commit / PR / Issue：#208

---

## 4. 回写验收

每条回写必须通过五问：

```text
1. 它是否有来源？
2. 它是否有归属模块？
3. 它是否产生可复用资产？
4. 它是否更新了 soul 中的某个位置？
5. 它是否让下一次任务更容易、更高级、更可复用？
```

任一项不能回答，不算完成回写。
