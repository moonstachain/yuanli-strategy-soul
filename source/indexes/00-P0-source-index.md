# 00 · P0 正典源头逐文件索引

> Issue: #2 `[研究] P0 源头仓库逐文件索引`  
> Governance: #7 `[治理] 将原力创业第一关从“原力觉醒”升级为“原力借势”`  
> 状态：v0.2 入口级索引  
> 范围：P0 正典源头文件，并按「缘起 / 资产 / 创业 / OS / 实操 / 外显」分类。

---

## 0. v0.2 概念治理增补

本索引采用新的《原力创业》第一关口径：

```text
原力觉醒（旧创业第一关） → 迁移至《原力资产》
原力借势（新创业第一关） → 《原力创业》正式第一关
```

因此，旧源头文件中出现的：

```text
原力觉醒 → 品类独创 → 模式升维 → 壁垒锁定
```

在本仓新正典中统一解释为：

```text
原力资产完成觉醒，生成合力
原力创业从借势开局：原力借势 → 品类独创 → 模式升维 → 壁垒锁定
```

索引时保留旧源头名称，但萃取和重编时采用新裁决。

---

## 1. 索引分类口径

| 分类 | 含义 |
|---|---|
| 缘起 | 原力战略为什么诞生、母公理、白皮书、三部曲重构理由 |
| 资产 | 你 × AI、原力U、觉醒、天才区、原型、阴影、我的说明书、原力资产 |
| 创业 | 借势 × 合力、原力借势、品类独创、模式升维、壁垒锁定、通关地图 |
| OS | 文脉/大脑/地图/链路、三法印、S路径、物种转移、AI班底 |
| 实操 | checklist、工具卡、模板、Prompt、SOP、飞书底表、练习 |
| 外显 | HTML、网站、概念地图、座舱、前端展示与视觉表达 |

---

## 2. P0 正典源头仓库

```text
moonstachain/yuanli-strategy-playbook
moonstachain/yuanli-strategy-trilogy
moonstachain/yuanli-strategy-trilogy-private
moonstachain/yuanli-os-greenbook
moonstachain/yuanli-startup-map-site
moonstachain/yuanli-startup-greenbook
moonstachain/yuanli-startup-map-book
```

---

## 3. P0-A · `moonstachain/yuanli-strategy-playbook`

定位：原力战略白皮书 + 绿皮书源头。公理层与战略/创业正典源头。

| 文件 | 分类 | 优先级 | 用途 |
|---|---|---|---|
| `README.md` | 缘起 / 创业 / 外显 | P0 | 全书导航；白皮书位置、七册结构 |
| `SUMMARY.md` | 缘起 / 创业 / 实操 | P0 | 完整目录；白皮书、道体法术器守、附录工具卡 |
| `books/00-白皮书-whitepaper.md` | 缘起 / 全体系 | P0 | 母公理 ʸx；财富=借势×合力；完备性证明；单一真源裁决链 |
| `books/01-道-dao.md` | 缘起 / 创业 | P0 | 借势×合力第一性；康波势；原型力；乘法；四关总览 |
| `books/02-体-ti.md` | 创业 / 资产 | P1 | 原力战略品类、甜用户、贵问题、品类主张 |
| `books/03-法-fa.md` | 创业 / 实操 | P0 | 战略内核；四关；关键战役；OSA / MECE / 信息五层 |
| `books/04-术-shu.md` | 创业 / 实操 | P1 | 三链路；获客、转化、交付、单位经济 |
| `books/05-器-qi.md` | OS / 实操 / 外显 | P1 | AI原生产品；原力OS + 原力大脑 |
| `books/06-守-shou.md` | 创业 / 资产 / 实操 | P0 | 四维护城；数据飞轮；30法则；留存复利 |
| `books/07-附录-appendix.md` | 实操 | P0 | 术语表、工具卡、速查卡 |

---

## 4. P0-B · `moonstachain/yuanli-strategy-trilogy` 与 `moonstachain/yuanli-strategy-trilogy-private`

定位：三部曲公开 / 私有知识总纲。私有仓用于内部裁决，公开仓用于外显与公开表达。

| 文件 | 分类 | 优先级 | 用途 |
|---|---|---|---|
| `README.md` | 缘起 / 全体系 / 外显 | P0 | 三部曲总纲；一公理、两条腿、三本书 |
| `trilogy/原力三部曲-文脉总纲.md` | 缘起 / 全体系 | P0 | 文脉层最高优先级之一 |
| `trilogy/原力战略三部曲-重构骨架设计稿.md` | 缘起 / 全体系 | P0 | 宪法版结构裁决；白皮书上提为 umbrella |
| `trilogy/原力三部曲-基石与关键概念-全谱.md` | 全体系 / 实操 | P0 | 跨三部字典层与共享脊骨矩阵 |
| `trilogy/原力资产-基石与关键概念-全谱.md` | 资产 / 实操 | P0 | 原力资产分册全谱；原力U、你×AI、说明书、复利 |
| `trilogy/原力OS-信雅达双轨改名表.md` | OS / 外显 / 实操 | P0 | OS术语双轨改名；文脉/大脑/地图/链路四组件裁决 |
| `trilogy/原力三部曲-概念地图.html` | 外显 / 全体系 | P0 | 知识地图 v2；网页外显与概念结构验证 |
| `trilogy/_atlas/atlas-v2-*.json` | 全体系 / 外显 | P0 | 知识地图数据层 |
| `trilogy/build_atlas.py` | 外显 / 实操 | P1 | 渲染概念地图 |

---

## 5. P0-C · `moonstachain/yuanli-os-greenbook`

定位：原力OS绿皮书正典。用于重编 OS 的详细概念、实操与工具体系。

| 文件/模块 | 分类 | 优先级 | 用途 |
|---|---|---|---|
| `README.md` | OS / 缘起 / 实操 | P0 | 4部55章总目录；三法印；S路径；写作宪法 |
| `00-知识地图-v2.0.html` | OS / 外显 | P0 | OS知识地图 |
| `第一部-信念/第02章-为什么过去5次产业革命和这一次完全不一样.md` | OS / 缘起 | P0 | 第六次康波；杠杆载体物种切换 |
| `第一部-信念/第03章-两个数学公式——这是你过去做错事的根本原因.md` | OS / 缘起 | P0 | x^y vs ʸx |
| `第一部-信念/第05章-AI越发达什么东西在你身上反而越值钱.md` | OS / 资产 | P0 | 你是最贵算法；天才区与原力资产 |
| `第二部-图景/第08章-这三件事你公司里80的混乱都因为没守住.md` | OS | P0 | 三法印 |
| `第二部-图景/第11章-为什么想到就做是80项目失败的根因.md` | OS / 实操 | P0 | OSA卡；任务流节拍 |
| `第二部-图景/第12章-一份输出够好还是不够好——5层分辨率自检表.md` | OS / 实操 | P0 | 信息五层 |
| `第三部-工具/B-消化/第22章-你独自工作和你带AI班底工作是两个物种.md` | OS / 实操 | P0 | 班底第一性 |
| `第三部-工具/B-消化/第25章-同样的成功为什么有的人翻倍100次有的人只用一次.md` | OS / 实操 | P0 | case → pattern → skill 蒸馏 |
| `第四部-身份/E-S路径/第37章-你的个人OS现在是哪个版本号.md` | OS | P0 | S路径总论 |
| `附录-工具卡/附录卷-合订本.md` | OS / 实操 | P0 | 工具卡合订本 |

---

## 6. P0-D · 原力创业三仓

### 6.1 `moonstachain/yuanli-startup-map-book`

定位：借势合力·原力创业·通关地图绿皮书 v1.0。创业体系最完整结构化源头。

| 文件/模块 | 分类 | 优先级 | 用途 |
|---|---|---|---|
| `README.md` | 创业 / 实操 / 缘起 | P0 | 财富=借势×合力；七卷目录；通关规则 |
| `volume-1-zonggang.md` | 创业 / 缘起 | P0 | 总纲、第一性原理、公式、四关全景 |
| 卷二旧“原力觉醒”材料 | 资产 / 创业接口 | P0 | 迁移回《原力资产》；创业侧只作为合力输入 |
| 卷三 · 品类独创 | 创业 | P0 | 十六字真言、三角定位、心理账户、一句入脑 |
| 卷四 · 模式升维 | 创业 | P0 | 三链路、九模块、58原子、闭环测试 |
| 卷五 · 壁垒锁定 | 创业 | P0 | 四维护城、16控制点、30法则、出师机制 |
| 卷六 · 工具与案例 | 实操 | P0 | 案例库、工具手册、SABC、T1-T9、术语表 |

### 6.2 `moonstachain/yuanli-startup-greenbook`

定位：原力创业四模块通关手册 v0.2。课程型、手册型创业重编源头。

| 文件/模块 | 分类 | 优先级 | 用途 |
|---|---|---|---|
| `README.md` | 创业 / 实操 | P0 | v0.2总纲；四模块通关；工具卡；通关规则 |
| 卷一 · 总纲 | 创业 / 缘起 | P0 | 借势、合力、4×4、千日窗口 |
| 卷二旧“原力觉醒”材料 | 资产 / 创业接口 | P0 | 迁移回《原力资产》；创业侧作为合力前置输入 |
| 卷三 · 品类独创 | 创业 | P0 | JTBD、价值主张、心理账户、一句入脑 |
| 卷四 · 模式升维 | 创业 | P0 | 三链路、九模块、58商业基因、AI原生模式 |
| 卷五 · 壁垒锁定 | 创业 | P0 | VRSE/四维护城、16控制点、出师机制 |
| 卷六 · 附录工具卡 | 实操 | P0 | A1-A16 工具卡 |

### 6.3 `moonstachain/yuanli-startup-map-site`

定位：原力创业通关地图网站版。用于四关交互、数据层、AI教练与外显表达。

| 文件/目录 | 分类 | 优先级 | 用途 |
|---|---|---|---|
| `README.md` | 创业 / 外显 | P0 | 网站版总说明；财富=借势×合力；四关；目录结构 |
| `index.html` | 外显 | P0 | 入口页；AI教练 shim |
| `app.jsx` | 外显 / 实操 | P0 | 主应用 |
| `components/` | 外显 / 创业 | P0 | 通关地图、四关口、原型、商业原子、战略控点、AI教练等 |
| `data/gates.jsx` | 创业 / 实操 | P0 | 旧四关数据层；新正典中需将第一关解释为资产前置/借势开局 |
| `data/archetypes.*` | 资产 / 创业接口 | P1 | 12人格原型数据；迁移入资产侧主解释 |
| `data/atoms.*` | 创业 | P1 | 58商业原子数据 |
| `data/controls.*` | 创业 | P1 | 16战略控点数据 |
| `data/toolkit.*` | 实操 | P1 | 通关工具与锦囊 |
| `styles/luxe.css` | 外显 | P1 | luxe视觉样式 |
| `volume-1..6-*.md` | 创业 / 实操 | P0 | 绿皮书六卷正文；页内AI教练知识库 |

---

## 7. 主题萃取路径

### 7.1 缘起

```text
yuanli-strategy-playbook/books/00-白皮书-whitepaper.md
yuanli-strategy-trilogy-private/trilogy/原力三部曲-文脉总纲.md
yuanli-strategy-trilogy-private/trilogy/原力战略三部曲-重构骨架设计稿.md
yuanli-os-greenbook/第一部-信念/第02章-为什么过去5次产业革命和这一次完全不一样.md
yuanli-os-greenbook/第一部-信念/第03章-两个数学公式——这是你过去做错事的根本原因.md
```

### 7.2 原力资产

```text
yuanli-strategy-trilogy-private/trilogy/原力资产-基石与关键概念-全谱.md
yuanli-os-greenbook/第一部-信念/第05章-AI越发达什么东西在你身上反而越值钱.md
yuanli-startup-map-book/README.md 旧卷二觉醒材料
yuanli-startup-greenbook/README.md 旧卷二觉醒材料
```

### 7.3 原力创业

新正典萃取顺序：

```text
第一关：原力借势
  - yuanli-strategy-playbook/books/00-白皮书-whitepaper.md
  - yuanli-startup-map-book/volume-1-zonggang.md
  - yuanli-startup-map-book/README.md 卷一
  - yuanli-startup-greenbook/README.md 卷一
  - 后续新增 PEST / 康波 / 技术势 / 产业势 / 用户心智势源头

第二关：品类独创
  - yuanli-startup-map-book/README.md 卷三
  - yuanli-startup-greenbook/README.md 卷三
  - yuanli-startup-map-site/data/gates.jsx 第二关

第三关：模式升维
  - yuanli-startup-map-book/README.md 卷四
  - yuanli-startup-greenbook/README.md 卷四
  - yuanli-startup-map-site/data/atoms.*

第四关：壁垒锁定
  - yuanli-startup-map-book/README.md 卷五
  - yuanli-startup-greenbook/README.md 卷五
  - yuanli-startup-map-site/data/controls.*
```

### 7.4 原力OS

```text
yuanli-os-greenbook/README.md
yuanli-os-greenbook/第二部-图景/第08章-这三件事你公司里80的混乱都因为没守住.md
yuanli-os-greenbook/第二部-图景/第11章-为什么想到就做是80项目失败的根因.md
yuanli-os-greenbook/第二部-图景/第12章-一份输出够好还是不够好——5层分辨率自检表.md
yuanli-os-greenbook/第三部-工具/B-消化/第22章-你独自工作和你带AI班底工作是两个物种.md
yuanli-os-greenbook/第三部-工具/B-消化/第25章-同样的成功为什么有的人翻倍100次有的人只用一次.md
yuanli-os-greenbook/第四部-身份/E-S路径/第37章-你的个人OS现在是哪个版本号.md
```

---

## 8. 下一步

继续执行：

```text
#6 萃取原力OS概念与实操材料
```

同时新增后续任务建议：

```text
[研究] 补强原力借势：PEST / 康波 / 技术范式 / 产业势 / 用户心智势源头萃取
[治理] 对齐旧四关“原力觉醒”与新四关“原力借势”的外显口径
[模板] 生成原力借势卡、PEST势能扫描卡、康波窗口判断卡、机会假设卡
```
