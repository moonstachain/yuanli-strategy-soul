# 两句话品类独创 Skill v0

> Skill ID: `yuanli-category-two-sentence`  
> Issue: #142  
> Related Module: B2 品类独创 / C2 一个大脑  
> Status: `v0-sampled`  
> Boundary: not canonical, not fully validated, not B2 Validation 3/5

---

## 0. Purpose

```text
把一个创业者、专家或项目的模糊表达，压缩成两句话品类独创表达。
```

This skill is inspired by YC's two-sentence company description pattern, translated into Yuanli OS's category-creation context.

---

## 1. When to Use

Use this skill when the user has:

```text
1. A founder / expert / project with a blurry positioning.
2. A target user or customer group.
3. A painful or expensive problem.
4. An old category or comparison trap they want to escape.
5. A unique mechanism, method, system, or proof signal.
6. A need to create a new category sentence for testing.
```

Do not use it when:

```text
1. There is no target user.
2. There is no expensive problem.
3. The output is only slogan writing.
4. The user wants polished copy without validation logic.
5. The case contains private client data that has not been anonymized.
```

---

## 2. Input Contract

```yaml
founder_or_expert_context:
target_user:
expensive_problem:
old_category_or_comparison:
unique_mechanism:
evidence_or_signal:
desired_budget_or_attention_shift:
constraints:
```

Required minimum:

```text
target_user + expensive_problem + unique_mechanism
```

---

## 3. Output Contract

### 3.1 Two-sentence category expression

```text
第一句话：你是谁，为谁解决什么贵问题？
第二句话：为什么你不同，为什么值得用户重新分配心智预算或预算？
```

### 3.2 Required output fields

```yaml
two_sentence_category:
old_category_escape:
new_category_claim:
evidence_strength:
unknown_gap:
next_test:
writeback_target:
```

---

## 4. Method

### Step 1 · Identify the old comparison trap

Ask:

```text
用户现在会把你误分类为什么？
你最想逃离哪个旧品类？
```

### Step 2 · Name the expensive problem

Ask:

```text
目标用户愿意为哪个问题重新分配注意力、时间或预算？
这个问题为什么不是轻微痛点，而是贵问题？
```

### Step 3 · Extract the unique mechanism

Ask:

```text
你的新方法、新系统、新路径、新组合是什么？
为什么它不是旧方案的更好版本，而是一个新分类？
```

### Step 4 · Write two sentences

Format:

```text
[主体] 帮助 [目标用户] 把 [贵问题/旧状态] 变成 [新结果/新系统]。
它不同于 [旧品类/旧比较]，因为 [独特机制/证据]，让用户愿意重新分配 [心智预算/行动预算/真实预算]。
```

### Step 5 · Test for category clarity

Check:

```text
Can a target user repeat it?
Can they explain who it is for?
Can they explain what problem it solves?
Can they explain why it is different?
Would they compare it to the old category or adopt the new one?
```

---

## 5. Quality Rubric

Score each output 1-5:

| Dimension | Question |
|---|---|
| Clarity | Can the target user understand it without explanation? |
| Expensive Problem | Does it name a problem worth attention or budget? |
| Old Category Escape | Does it escape an old comparison? |
| New Category Claim | Does it create a memorable new frame? |
| Evidence Link | Is there at least one proof signal? |
| Repeatability | Can users repeat it after hearing once? |
| Budget Pull | Does it suggest a reason to reallocate budget or effort? |

Pass threshold for v0 sample:

```text
Average >= 3.5/5 and no dimension below 3.
```

Pass threshold for controlled B2 validation:

```text
5-10 target users complete clarity / repeatability / budget-pull test.
```

---

## 6. Before / After Samples

Full sample pack:

```text
assets/C2-一个大脑/skillify-examples.md
```

Current status:

```text
3 before/after examples created.
Human review pending.
Controlled naming test pending.
```

---

## 7. Writeback

When this skill produces a useful result, write back to:

```text
assets/B2-品类独创/user-language.md
assets/B2-品类独创/workshop-scorecard.md
assets/B2-品类独创/validation-records.md
brain/SKILL-CANDIDATES.md
brain/WRITEBACK-LOG.md
```

If the output becomes a repeated rule:

```text
brain/canonical-learning/
```

Do not update:

```text
CONSTITUTION.md
```

without explicit human approval.

---

## 8. Human Gates

```text
1. Publishing this as an official public skill requires Ming approval.
2. Marking this skill active requires at least 3 reviewed samples and one evidence/writeback loop.
3. Upgrading B2 Validation requires controlled naming and repeatability test.
4. Canonicalizing the two-sentence formula requires separate canon review.
```

---

## 9. Current Status

```yaml
state: v0-sampled
sample_count: 3
human_review: pending
controlled_user_test: pending
b2_validation_upgrade: no
canonical_status: no
next_c4_task: choose 3-5 real founder/client cases and run human review
```
