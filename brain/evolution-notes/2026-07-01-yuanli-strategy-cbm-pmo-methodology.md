# Evolution Note · 2026-07-01 · 原力战略-CBM-PMO 方法论沉淀

> 归属：治理 / C3 一张地图 / C4 一条链路  
> 服务脊骨：ʸx / OSA / 递归回写  
> Evidence：`brain/evidence/2026-07-01-yuanli-strategy-cbm-pmo-methodology.md`

---

## 1. Source

- 来源任务：用户要求将「原力战略-CBM-PMO」工作方法论沉淀为以后复用的关键资产。
- 来源仓库：`moonstachain/yuanli-strategy-soul`
- 相关既有文件：
  - `CONSTITUTION.md`
  - `INTAKE.md`
  - `docs/CBM-PMO-INTEGRATION-SPEC-v1.md`
  - `project/KANBAN_TEMPLATE.md`
  - `codex/CODEX_TASK_TEMPLATE.md`

---

## 2. What happened

本次将对话中形成的「原力战略-CBM-PMO」方法论正式沉淀为仓库资产，新增三类可复用文件：

```text
docs/原力战略-CBM-PMO方法论-v1.md
project/CBM-PMO_PROJECT_PROTOCOL.md
.github/ISSUE_TEMPLATE/04-cbm-pmo-strategy-project.md
```

并新增本 Evolution Note 与 Evidence 记录，使方法论沉淀本身也满足递归回写规则。

---

## 3. What changed in capability

### 3.1 C3 一张地图

原本 CBM-PMO 已有 integration spec，但更偏技术集成协议；本次新增方法论总纲后，C3 层获得了更清晰的「战略项目能力组件化」解释：

```text
Soul 裁决 → CBM 拆能 → PMO 排程 → GitHub 留痕 → Codex 执行 → Evidence 验收 → OS 回写
```

### 3.2 C4 一条链路

新增 `project/CBM-PMO_PROJECT_PROTOCOL.md` 后，每个未来战略项目可以直接按标准协议启动、拆解、执行、验收、回写。

### 3.3 GitHub Intake

新增 `.github/ISSUE_TEMPLATE/04-cbm-pmo-strategy-project.md` 后，GitHub Issue 可以直接承载 Strategy Brief、CBM Cell、C3 Gap、C4 Task、Evidence Review、Writeback Target。

---

## 4. Evidence

```text
E2 internal：文件已写入仓库，可被未来任务直接调用。
```

证据路径：

```text
docs/原力战略-CBM-PMO方法论-v1.md
project/CBM-PMO_PROJECT_PROTOCOL.md
.github/ISSUE_TEMPLATE/04-cbm-pmo-strategy-project.md
brain/evidence/2026-07-01-yuanli-strategy-cbm-pmo-methodology.md
```

---

## 5. What became reusable

以后用户发起战略项目时，可直接触发：

```text
按照原力战略-CBM-PMO处理
```

系统默认输出：

```text
1. Soul 战略裁决
2. CBM 能力组件地图
3. C3 Gap 清单
4. C4 Task 清单
5. GitHub Issue / Project 字段建议
6. Codex-ready 任务包
7. 验收标准
8. Evidence 设计
9. 回写路径
10. 下一轮复用方式
```

---

## 6. What remains blocked

```text
1. README.md 尚未加入 CBM-PMO 总入口导航。
2. GitHub Project 自定义字段尚未通过 API 配置。
3. 现有 CBM-PMO dashboard 是否读取该 protocol，仍需后续 C4 Task 验证。
4. 需要在下一次真实战略项目中跑完一次完整闭环，才能从 E2 升级到 E3 / E4。
```

---

## 7. Canonical Learning Candidate

```text
战略项目不是任务集合，而是能力组件的成熟度迁移。
```

可候选进入：

```text
glossary/shared-共享脊骨术语.md
docs/04-跨三部脊骨矩阵.md
```

---

## 8. Next C3 Gap

```text
[C3 Gap] README / Dashboard / Project Fields 仍未形成统一 CBM-PMO 入口
```

---

## 9. Next C4 Task

```text
[C4 Task] 将 CBM-PMO 方法论入口补入 README、PMO Dashboard 与 weekly review 生成逻辑
```

---

## 10. Writeback

```text
C1 一纸文脉：新增“默认战略项目工作协议”候选。
C2 一个大脑：新增方法论、协议、Issue 模板、Evidence、Evolution Note。
C3 一张地图：明确战略项目能力组件化治理法。
C4 一条链路：新增可复用项目协议与 Issue 模板。
```

---

## 11. 收口句

```text
这一步我做完了，结果是原力战略-CBM-PMO 已从对话方法升级为仓库可复用资产，新增资产是方法论总纲、项目协议、Issue 模板、Evidence 与 Evolution Note，回写位置是 docs / project / .github / brain，接下来该在真实战略项目中跑一次完整闭环。
```
