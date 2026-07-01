# Repo Extract · yuanli-startup-map-site · v0.1

> Issue: #208  
> 来源仓库：`moonstachain/yuanli-startup-map-site`  
> 角色标签：SOURCE_CANON / PRODUCT_SURFACE  
> 归属模块：B1-B4 / C3 / C4  
> 私密等级：public  
> 抽取原则：抽取网站数据层、交互结构、AI 教练与四关外显模式，不搬 HTML 成为正典。

---

## 0. 仓库定位

`yuanli-startup-map-site` 是《原力创业 · 通关地图》的交互式单页网站版本。

它对当前战略任务的价值：

```text
不是正典根仓，而是 B 轴通关地图的产品外显与交互验证仓。
它可以为 B1-B4 章节、工具卡、战略地图和内容工程提供外显结构。
```

---

## 1. 与 soul 的模块映射

| 源内容 | soul 模块 | 说明 |
|---|---|---|
| 一个公式：财富 = 借势 × 合力 | 共享脊骨 / B1 | B1 的公式入口 |
| 四个关口 | B1-B4 | 原力借势/觉醒、品类独创、模式升维、壁垒锁定 |
| 12 人格原型 | A1-A4 / A→B 接口 | 作为合力侧素材，B1 只引用，不做深 |
| 58 商业原子 | B3 | 模式升维源料 |
| 16 战略控点 | B4 | 壁垒锁定源料 |
| AI 教练 | C4 | 未来章节/工具卡交互化参考 |
| data 层 | C2/C3 | 可抽为结构化知识与地图数据 |
| luxe 视觉样式 | C3 / PRODUCT_SURFACE | 外显审美参考，不进入正典层 |

---

## 2. 可吸收资产

### 2.1 data 层

源仓 README 显示其 `data/` 包含：

```text
archetypes
atoms
cases
controls
gates
toolkit
```

吸收方式：

```text
archetypes → A 轴 / A→B 接口引用
atoms → B3 模式升维
controls → B4 壁垒锁定
cases → source/extracts/case-extracts
gates → B1-B4 通关检查
toolkit → templates/startup
```

---

### 2.2 交互视图

源仓包含 11 个视图组件：

```text
通关地图
四关口
12 人格原型
58 商业原子
16 战略控点
康波案例
AI 教练
```

吸收方式：

```text
通关地图 → C3 战略地图 / B 轴地图
四关口 → B1-B4 模块导航
康波案例 → B1 原力借势样章案例池
AI 教练 → C4 agent workflow / 章节工具卡交互化
```

---

## 3. 对 B1 黄金样章的直接价值

B1 样章可以从该仓吸收：

```text
1. 通关地图的外显顺序。
2. 康波案例作为“势”的案例解释。
3. AI 教练结构作为章节末尾互动练习雏形。
4. gates 数据作为通关检查结构参考。
```

建议 B1 样章中加入：

```text
本章完成后，你要输出一张“我的势能地图”。
这张地图未来可以进入网站/AI 教练，成为交互式自测。
```

---

## 4. 禁止搬迁内容

```text
不要把 app.jsx / components / HTML 直接搬进 soul。
不要把 luxe.css 作为正典审美定义。
不要让网站版结构反过来裁决 B1-B4。
网站只做外显和验证，不做正典定义。
```

---

## 5. 回写位置

```text
modules/B-原力创业/B1-原力借势.md
modules/B-原力创业/B2-品类独创.md
modules/B-原力创业/B3-模式升维.md
modules/B-原力创业/B4-壁垒锁定.md
modules/C-原力OS/C3-一张地图.md
modules/C-原力OS/C4-一条链路.md
templates/startup/原力借势卡.md
templates/os/战略地图.md
source/extracts/startup-extracts/
source/extracts/product-extracts/
```

---

## 6. 下一步任务

```text
1. 后续读取 data/gates、data/controls、data/atoms，建立 B 轴结构化 source extract。
2. 为 B1 黄金样章提取“康波案例 + 通关检查 + AI 教练互动问题”。
3. 未来接入 content-engine-os，把 B1 样章一鱼多吃为网站模块、测评卡、互动工具。
```
