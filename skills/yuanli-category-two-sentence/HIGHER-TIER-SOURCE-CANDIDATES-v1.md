# 两句话品类独创 Skill · Higher-Tier Source Candidates v1

> Skill ID: `yuanli-category-two-sentence`  
> Date: 2026-06-30  
> Source Repo: private `moonstachain/llm-wiki`  
> Status: source candidates indexed; deeper extraction pending  
> Boundary: source paths only; no raw private transcript copied

---

## 0. Purpose

```text
Identify higher-tier llm-wiki sources that can improve USER-LANGUAGE-TEST-v1 beyond T3 case writeups.
```

Previous extraction used mostly:

```text
T3 case writeups / strategy summaries
```

This file identifies possible:

```text
T1 founder/client/learner interviews
T2 course/private-board/work-meeting transcripts
Get 笔记 sources
Feishu / meeting transcripts
chat transcript artifacts
```

Goal:

```text
Use these sources to refine candidate names, objections, repeatable phrases, and user-language probes before collecting T0 target-user interviews.
```

---

## 1. Source Tier Reminder

| Tier | Source Type | Validation Role |
|---|---|---|
| T0 | Target-user user-language test transcript | Can support user-tested evidence |
| T1 | Founder / client / learner interview transcript | Can support real language and case understanding |
| T2 | Course / private-board / work meeting transcript | Can support strategic reasoning and Ming judgment pattern |
| T3 | Digest / summary / case writeup | Can support candidate framing but not final validation |

Boundary:

```text
T1/T2 sources improve extraction quality.
They still do not replace T0 target-user testing.
```

---

## 2. Candidate Source Types Found in llm-wiki

Search confirmed the presence of:

```text
sources/get-biji/...
sources/transcripts/...
operations/digests/... from transcripts / Get 笔记
minutes/.../transcript.txt
entities/people/...
```

These are higher-value than pure case writeups because they may contain:

```text
speaker turns
raw language
hesitation / objections
Ming's live judgment pattern
founder/client self-description
unpolished category language
```

---

# 3. CASE-01 · 水月老师随身寺庙

## 3.1 Current T3 Source Already Used

```yaml
case_id: CASE-01
source_path: sources/talent-startup/学员案例旧物造-水月老师.md
source_tier: T3
status: extracted_in_TRANSCRIPT_EVIDENCE_RESULTS_v1
```

## 3.2 Higher-Tier Candidate Search Status

```yaml
search_terms_used:
  - 水月 随身寺庙 旧物造
  - sources/get-biji 水月 随身寺庙
  - sources/transcripts 水月老师 随身寺庙 原力创业 day
candidate_status: partial
```

Observed candidate class:

```text
原力创业 day2 / 品类独创相关课程逐字稿 may contain Ming's live teaching or case discussion around 水月 / 随身寺庙.
```

Candidate paths to inspect next:

```text
operations/digests/2026-05-04/get-biji-education-原力觉醒与品类独创创业课程分享.md
operations/digests/2026-05-04/transcripts-20260321110655-原力创业-day2-am-2026-03-转写智能优化版-1.md
sources/transcripts/20260322133809-原力创业-day2-pm-2026-03-转写智能优化版-1.md
```

Expected value:

```text
1. Ming's live wording for 无法分类 / 重新定义 / 自带预算.
2. More precise objections around 宗教化 / 精神资产 / 高净值礼品预算.
3. Possible repeatable phrases not present in T3 case writeup.
```

---

# 4. CASE-05 · 达哥张姐低奢皮草

## 4.1 Current T3 Source Already Used

```yaml
case_id: CASE-05
source_path: sources/talent-startup/学员案例低奢皮草-达哥.md
source_tier: T3
status: extracted_in_TRANSCRIPT_EVIDENCE_RESULTS_v1
```

## 4.2 Higher-Tier Candidate Found

```yaml
source_path: sources/get-biji/wealth/达哥张姐沟通-原力财富三角形-觉醒-创业与财富配置的底层逻辑.md
source_type: Get 笔记 / communication summary
source_tier_candidate: T1/T2
recording_duration: about 2h35m
content_type: training/share/communication
status: fetched_previously
```

Related digest:

```text
operations/digests/2026-05-08/get-biji-wealth-达哥张姐沟通-原力财富三角形-觉醒-创业与财富配置的底层逻辑.md
```

Expected value:

```text
1. Better evidence for 张姐品类特色.
2. More founder/family/wealth context behind high-net-worth product strategy.
3. More concrete phrases around 高净值姐姐 / 高端皮草 / 随身寺庙 analogy / 私域运营.
4. Possible objections and business constraints not visible in T3 case writeup.
```

Immediate extraction question:

```text
Does this source strengthen 养成系稀缺美学, 养成系社交货币, or 双奢结合?
```

---

# 5. CASE-08 · 高净值留学生游戏化婚礼

## 5.1 Current T3 Source Already Used

```yaml
case_id: CASE-08
source_path: sources/talent-startup/学员案例游戏化婚庆-卷卷.md
source_tier: T3
status: extracted_in_TRANSCRIPT_EVIDENCE_RESULTS_v1
```

## 5.2 Higher-Tier Candidate Search Status

```yaml
search_terms_used:
  - 卷卷 游戏化婚庆 逐字稿 留学生 婚礼
  - 卷卷 游戏化婚庆 飞书 妙记 会议 逐字稿 留学生
  - 来自 get 笔记 原力创业 day2 品类独创
candidate_status: partial
```

Candidate paths to inspect next:

```text
entities/people/juan-juan.md
sources/transcripts/20260322133809-原力创业-day2-pm-2026-03-转写智能优化版-1.md
operations/digests/2026-05-04/transcripts-商业方法论课程-商业模式构建与ai原生教育创业案例分享-2026年03月22日-来自-get-笔记.md
```

Expected value:

```text
1. More exact language around 留子 / 游戏化婚礼 / 回国首秀.
2. Whether “人生主权宣言” appears as live language or is later strategic abstraction.
3. Stronger user-language probes for 游戏化社交婚礼 vs 归国首秀导演.
4. Potential evidence from course discussion about why traditional wedding category fails.
```

---

## 6. Prioritized Next Inspection

Recommended order:

```text
P0-1: 达哥张姐 Get 笔记 source, because it is directly matched and long-form.
P0-2: 原力创业 day2 transcripts, because they likely contain 品类独创 live teaching and case discussion.
P0-3: 卷卷 entity/source links, because search found entity path but not direct Get note yet.
P0-4: 水月 related course transcripts and digests, because direct case source may be embedded in day2 teaching.
```

---

## 7. Output After Inspection

Create or update:

```text
skills/yuanli-category-two-sentence/HIGHER-TIER-SOURCE-EXTRACTION-RESULTS-v1.md
```

Expected extraction objects:

```text
source_path
source_tier
case_id
old_category_signal
expensive_problem_signal
new_category_signal
budget_pull_signal
objection_signal
repeatable_phrase
impact_on_USER_LANGUAGE_TEST_v1
```

---

## 8. Boundary

```text
This file is an index of candidate sources only.
It does not contain raw private transcript content.
It does not upgrade source tier evidence to T0.
It does not mark skill as user-tested.
It does not upgrade B2 Validation.
```
