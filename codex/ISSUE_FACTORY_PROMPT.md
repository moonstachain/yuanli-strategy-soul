# Issue Factory Prompt

Use this prompt to turn a whiteboard node into a GitHub Issue draft.

## Input

- Node ID
- Node name
- Area
- First principle question
- Current status
- Missing pieces
- Desired output
- Acceptance standard
- Backwrite target

## Output Shape

```markdown
## 背景

## 归属
- Area:
- Spine:
- Node:

## 第一性目标

## 输入

## 输出

## 验收标准

## 回写位置

## Codex 是否可执行

## 禁止事项
```

## Rules

- One issue should produce one clear output.
- Every issue must include acceptance and backwrite.
- If the issue changes canon, mark it as governance first.
- If the issue is vague, split before execution.
