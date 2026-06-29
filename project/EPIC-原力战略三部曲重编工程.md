# EPIC · 原力战略三部曲重编工程

> 从旧有 GitHub 全范围信息中，重新萃取、编排和固化“原力战略”的缘起、序章、三部详细概念体系、关键内容与实操系统。

---

## 0. Epic 定义

本 Epic 是 `yuanli-strategy-soul` 的第一个大型母工程。

目标不是简单整理资料，而是建立一套可递归生长的内容生产系统：

```text
源头仓库 → 全域萃取 → 概念裁决 → 正文重编 → 实操模板 → 外显网站 → 回写入口仓
```

---

## 1. 第一性目标

本项目不是为了“把旧资料搬过来”，而是为了：

> **把散落在旧 GitHub 仓库中的原力战略知识，重新压缩成一套究竟、完备、递进、递归的三部曲正典与实操系统。**

完成后，它应该让未来所有任务更容易：

```text
写书更容易
写课程更容易
做网站更容易
交给 Codex 更容易
搭 Agent 更容易
管理项目更容易
```

---

## 2. 总输出物

### 2.1 工程治理层

```text
source/SOURCE_REGISTRY.md
project/EPIC-原力战略三部曲重编工程.md
project/issues/*.md
```

### 2.2 萃取层

```text
source/extracts/00-缘起与序章-萃取.md
source/extracts/01-原力资产-萃取.md
source/extracts/02-原力创业-萃取.md
source/extracts/03-原力OS-萃取.md
source/extracts/04-跨三部脊骨-萃取.md
```

### 2.3 正文重编层

```text
manuscript/00-缘起与序章.md
manuscript/01-原力资产-概念与实操.md
manuscript/02-原力创业-概念与实操.md
manuscript/03-原力OS-概念与实操.md
manuscript/04-三部递归飞轮与总收束.md
```

### 2.4 外显层

```text
docs/index.html 升级版
外显网站章节导航
三部概念地图
实操入口页
```

---

## 3. 阶段路线图

### Phase 0 · 工程启动

状态：进行中。

输出：

```text
总入口 Issue
源头台账
Epic 路线图
缘起与序章蓝图
```

### Phase 1 · 全域源头索引

目标：把 P0 / P1 源头仓库逐一建立文件索引。

任务：

```text
1. 索引 yuanli-strategy-playbook
2. 索引 yuanli-strategy-trilogy-private
3. 索引 yuanli-os-greenbook
4. 索引 yuanli-startup-map-site
5. 索引 yuanli-startup-greenbook
6. 索引 yuanli-brain / skills / orange-book
```

输出：

```text
source/indexes/*.md
```

### Phase 2 · 主题萃取

目标：按主题而非按仓库萃取。

主题：

```text
缘起与序章
原力资产
原力创业
原力OS
跨三部脊骨
实操模板
```

输出：

```text
source/extracts/*.md
```

### Phase 3 · 概念裁决与重编

目标：将萃取材料裁决为新的正典结构。

输出：

```text
manuscript/*.md
docs/*.md 更新
```

### Phase 4 · 外显网站升级

目标：把重编成果变成一个人类可看、Codex 可对齐、团队可协作的网站。

输出：

```text
docs/index.html v1.0
```

### Phase 5 · 递归回写

目标：把过程中沉淀出的模板、Prompt、SOP、Agent 任务全部回写到入口仓。

输出：

```text
codex/PROMPT_PACK.md 更新
codex/CODEX_TASK_TEMPLATE.md 更新
project/KANBAN_TEMPLATE.md 更新
```

---

## 4. 重编后的内容结构建议

```text
00 缘起与序章
  00.1 为什么需要原力战略
  00.2 AI时代的个体危机与机会
  00.3 ʸx：做会自我繁殖的事
  00.4 原力战略为什么上提为公理层
  00.5 三部曲如何诞生：资产 / 创业 / OS

01 原力资产
  01.1 你 × AI
  01.2 原力U
  01.3 三圈交集 / 12原型 / 天才区
  01.4 阴影与整合
  01.5 我的说明书与元AI
  01.6 资产复利与穿越周期
  01.7 实操：母体定义卡 / 我的说明书 V3 / 天才区雷达

02 原力创业
  02.1 借势 × 合力
  02.2 四关与四端口
  02.3 品类独创与心理账户
  02.4 模式升维与利润容器
  02.5 壁垒锁定与财富飞轮
  02.6 实操：四关 checklist / 三角定位 / 三链画布 / 四维护城

03 原力OS
  03.1 工作维度的 ʸx
  03.2 文脉 / 大脑 / 地图 / 链路
  03.3 递归回写
  03.4 三法印
  03.5 S路径
  03.6 四部作为教学路径
  03.7 实操：文脉卡 / 大脑库 / 决策地图 / 自动化链路

04 三部递归飞轮
  04.1 找到你 → 变现你 → 系统你
  04.2 现金流回流为资产
  04.3 OS 回写资产与创业
  04.4 从一次性劳动到自繁殖系统
```

---

## 5. 第一批 Issue 拆解建议

1. `[研究] P0 源头仓库逐文件索引`
2. `[研究] 萃取原力战略缘起与序章材料`
3. `[研究] 萃取原力资产概念与实操材料`
4. `[研究] 萃取原力创业概念与实操材料`
5. `[研究] 萃取原力OS概念与实操材料`
6. `[治理] 建立概念裁决表：正典 / 待核 / 丢弃 / Spin-off`
7. `[Codex] 生成 source/extracts 与 manuscript 目录骨架`
8. `[网站] 升级 Soul Cockpit 为重编工程外显网站`

---

## 6. Done 标准

本 Epic 第一阶段 Done 的标准：

```text
总入口 Issue 已创建
源头台账已创建
Epic 路线图已创建
缘起与序章蓝图已创建
第一批子任务已拆解
```

整个 Epic Done 的标准：

```text
完成源头索引
完成主题萃取
完成正文重编
完成实操模板
完成外显网站
完成回写沉淀
```
