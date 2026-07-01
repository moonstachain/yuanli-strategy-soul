# llm-wiki · Source Registry Proposal v1

Date: 2026-07-01
Related Issues: #212 / #213 / #214
Repository: `moonstachain/llm-wiki`
Target System: `moonstachain/yuanli-strategy-soul`

---

## 0. Executive Proposal

```text
Add moonstachain/llm-wiki to SOURCE_REGISTRY as B+ Private Field Evidence Lake.
```

This proposal does **not** directly update `source/SOURCE_REGISTRY.md`. It is a human-gated governance proposal.

---

## 1. Proposed Source Tier

| Field | Value |
|---|---|
| Repository | `moonstachain/llm-wiki` |
| Tier | B+ |
| Role | Private Field Evidence Lake |
| Priority | P0.5 |
| Owner | Ray / Ming human-gated governance |
| Primary Canon Nodes | C2 / C3 / C4 |
| Secondary Nodes | A4 / B2 / B3 / B1 / B4 |
| Visibility | private |
| Public Copy Rule | source pointers and anonymized patterns only |

---

## 2. Why B+ Instead of A or B

### Not A-level canon source

`llm-wiki` contains field transcripts, meeting notes, historical materials and workshop evidence. It should not define canon directly.

### Stronger than normal B-level support source

It contains real learner/client/project language, which can raise validation density across the Yuanli system.

### Proposed B+ definition

```text
B+ = private high-value field evidence source.
It can support evidence, validation, case, user language, skill mining and PMO decisions, but cannot directly update canon.
```

---

## 3. Extraction Focus

| Extraction Dimension | Use |
|---|---|
| user language | B2 category creation, A4 manifestation, B3 offer language |
| case evidence | A4/B2/B3/B4 validation records |
| purchase signal | B3 commercial model, A4 market validation |
| category signal | B2 naming, psychological account, old-category escape |
| workflow pattern | C4 SOP / Agent workflow / Codex-ready task |
| project signal | C3 capability gap / PMO task / client portfolio governance |
| strategy language | C1 context, C2 schema, C3 map judgment |

---

## 4. Proposed SOURCE_REGISTRY Entry

```md
### B+ 级 · Private Field Evidence Lake

| 仓库 | 角色 | 萃取重点 | 优先级 |
|---|---|---|---|
| `moonstachain/llm-wiki` | 私有真实世界证据湖 / 客户学员语料源 | 用户语言、案例证据、购买信号、品类反应、项目链路、Skill 模式 | P0.5 |

治理边界：

```text
llm-wiki 不是正典源头，不直接进入 CONSTITUTION.md。
原始语料不得大段复制进 public / semi-public artifacts。
只允许使用 source pointer、匿名化摘要、结构化 evidence、可验证模式。
所有 maturity upgrade、canon candidate、active skill upgrade 均需 human gate。
```
```

---

## 5. Human Gate

Human approval required before:

```text
1. updating source/SOURCE_REGISTRY.md;
2. exposing private-source-derived content in public pages;
3. upgrading maturity score based on llm-wiki evidence;
4. promoting any llm-wiki-derived pattern into active skill or canon;
5. adding raw transcript content to public/semi-public repositories.
```

---

## 6. Backwrite Target

If approved, write back to:

- `source/SOURCE_REGISTRY.md`
- `brain/sources/llm-wiki-source-map-v1.md`
- `brain/sources/llm-wiki-extraction-protocol-v1.md`
- `brain/WRITEBACK-LOG.md`
- #212 / #213 / #214

---

## 7. Status

```text
proposal_created
human_approval_pending
```
