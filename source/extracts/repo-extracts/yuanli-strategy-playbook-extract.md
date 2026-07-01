# Repo Extract · yuanli-strategy-playbook · v0.1

> Issue: #208  
> 来源仓库：`moonstachain/yuanli-strategy-playbook`  
> 角色标签：SOURCE_CANON  
> 归属模块：共享脊骨 / A-B-C 总源料  
> 私密等级：public  
> 抽取原则：抽取白皮书、公理、财富公式、道体法术器守、工具卡结构，不搬完整正文。

---

## 0. 仓库定位

`yuanli-strategy-playbook` 是《原力战略 · 绿皮书》与白皮书源料仓。

它对当前战略任务的价值：

```text
它是 soul 母公理、财富公式、道体法术器守、工具卡结构的重要 source canon。
```

---

## 1. 与 soul 的模块映射

| 源内容 | soul 模块 | 说明 |
|---|---|---|
| 白皮书 | 共享脊骨 / CONSTITUTION | 母公理 ʸx 与为什么是这套体系 |
| 财富 = 借势 × 合力 | B1 / shared | B1 与创业四关最高公式 |
| 道 | shared / B1 | 借势合力第一性 |
| 体 | A/B接口 | 原力战略品类与身份定义 |
| 法 | B1-B4 / C3 | 战略生产流程与四关收编 |
| 术 | B3 | 三链路与获客/转化/交付 |
| 器 | C1-C4 | AI 原生产品与原力 OS |
| 守 | B4 / C4 | 壁垒、伦理、复利 |
| 附录工具卡 | templates/* | 可抽为工具卡与章节作业 |

---

## 2. 可吸收核心判断

### 2.1 母公理

```text
ʸx：做会自我繁殖的事。
```

回写位置：

```text
CONSTITUTION.md
docs/07-原力战略三部曲-龙骨总纲.md
glossary/shared-共享脊骨术语.md
```

---

### 2.2 财富公式

```text
财富 = 借势 × 合力
```

对 B1 黄金样章的意义：

```text
B1 不是“找风口”，而是判断外部势能如何放大已经显化的原力。
```

回写位置：

```text
modules/B-原力创业/B1-原力借势.md
templates/startup/原力借势卡.md
```

---

### 2.3 章节统一结构：究竟完备五件套

可吸收为 `templates/chapter-template.md` 的增强项：

```text
1. 本体定义：第一性是什么
2. 操作模板：怎么照着动手
3. 合格性自检：什么算做对
4. 反本能 / 失败模式：人最容易在哪翻车
5. 真源引用：出处链接，防失真
```

回写位置：

```text
templates/chapter-template.md
codex/CODEX_TASK_TEMPLATE.md
```

---

## 3. 对 B1 黄金样章的直接价值

B1 样章可从本仓吸收：

```text
1. 财富 = 借势 × 合力 的公理级表达。
2. “不是创业技巧，而是财富归因公式”的定位。
3. 章节写作的究竟完备五件套。
4. 工具卡化的附录结构。
5. 白皮书作为公理层，不与下游冲突的裁决原则。
```

建议 B1 样章的章法：

```text
先用白皮书/绿皮书公式确立“为什么创业必须先借势”。
再用 startup-map-book 的康波/千日窗口做 B1 的主论证。
最后落到原力借势卡。
```

---

## 4. 禁止搬迁内容

```text
不要把 playbook 七册正文整仓搬进 soul。
不要让旧“道体法术器守”替代现在 A/B/C 十二模块。
不要把白皮书中的历史结构直接覆盖当前龙骨。
应作为 source canon，经过 soul 的模块裁决后吸收。
```

---

## 5. 回写位置

```text
glossary/shared-共享脊骨术语.md
modules/B-原力创业/B1-原力借势.md
templates/chapter-template.md
templates/startup/原力借势卡.md
source/indexes/repo-to-module-map.md
source/extracts/startup-extracts/
```

---

## 6. 下一步任务

```text
1. 读取 books/00-白皮书-whitepaper.md，抽取母公理与 MECE 裁决。
2. 读取 books/07-附录-appendix.md，抽取工具卡结构。
3. 将“究竟完备五件套”加入 chapter-template v0.2。
```
