# LexiPrep Content System Seed

This seed turns the starter LSAT files into original platform content. It uses the source files as a high-level curriculum reference only; lessons, scripts, drills, and explanations below are newly written for LexiPrep.

## Curriculum Map

Start here:
- What is an argument?
- Conclusion vs. evidence
- How to use a weekly study loop

Core concepts:
- Conditional logic basics
- Reading Comp passage mapping
- Necessary vs. sufficient assumptions

Question types:
- Main Point
- Role
- Describe the Technique
- Flaw
- Parallel Reasoning
- Strengthen and Weaken

Strategy:
- Blind review
- Skip decisions
- Timed section recovery
- Wrong-answer journal habits

## Tag Taxonomy

```json
{
  "section": "Logical Reasoning",
  "type": "Flaw",
  "difficulty": "Medium",
  "pattern": "causal leap",
  "skill": "argument gap",
  "mistake": "accepted evidence as sufficient",
  "recommendedContent": "flaws-fast"
}
```

## First 12 Lesson Cards

| Lesson | Category | Skill | Output |
| --- | --- | --- | --- |
| What Is an Argument? | Start here | Conclusions | animated video |
| Conclusion vs. Evidence | Core concepts | Conclusions | quick guide |
| Main Point Questions | Question types | Conclusions | animated video |
| Role Questions | Question types | Conclusions | strategy guide |
| Describe the Technique | Question types | Flaws | worksheet |
| How to Spot Flaw Questions Faster | Question types | Flaws | animated video |
| Necessary vs. Sufficient Assumptions | Core concepts | Assumptions | animated video |
| Conditional Logic Basics | Core concepts | Conditional Logic | worksheet |
| Parallel Reasoning: Match the Skeleton | Question types | Techniques | animated video |
| Reading Comp Passage Mapping | Core concepts | Reading Structure | animated video |
| Build Your Weekly LSAT Loop | Start here | Pacing | study plan |
| The 20-Second Skip Decision | Timed test training | Pacing | strategy guide |

## Animated Video Scripts

### 1. What Is an Argument?

Hook: The LSAT is not asking whether an author sounds smart. It is asking whether the author's support actually earns the conclusion.

Core concept: An argument has a claim the author wants accepted and evidence offered for that claim.

Visual: Put three cards on screen: background, evidence, conclusion. Move background to the side, draw an arrow from evidence to conclusion.

Example: A city expanded bus routes and downtown parking complaints decreased. Therefore, the bus expansion reduced parking pressure.

Breakdown: The conclusion is the causal claim about bus expansion. The evidence is the drop in complaints. The gap is whether something else caused the drop.

Rule: Before answer choices, write C for conclusion and E for evidence.

Bridge: Now drill five conclusion questions before touching flaws.

### 2. Conclusion vs. Evidence

Hook: If you label the wrong sentence as the conclusion, every answer choice starts lying to you politely.

Core concept: Evidence answers why. The conclusion answers what the author wants you to believe.

Visual: Show "because" arrows pointing toward a final claim. Then flip one sentence and test whether the support still makes sense.

Example: A study found fewer absences after flexible scheduling. The author concludes that flexible scheduling improved attendance.

Breakdown: The study is evidence. The claim about what improved attendance is the conclusion.

Rule: Use the therefore test: if "therefore" naturally belongs before a sentence, it is probably the conclusion.

Bridge: Next, main point questions ask for that conclusion in answer-choice form.

### 3. Flaw Questions

Hook: A flaw is not just a bad vibe. It is the exact place where the evidence stops short.

Core concept: A flaw answer describes why the support does not prove the conclusion.

Visual: Draw a bridge from evidence to conclusion with one missing plank labeled assumption.

Example: The mayor took office before crime fell, so the mayor's policies caused the decline.

Breakdown: The timing is real, but timing alone does not prove cause. Other changes could explain the decline.

Rule: Ask two questions: is this answer happening in the argument, and is it actually a problem?

Bridge: After the lesson, do a flaw drill and journal the gap in one sentence.

## Original Drill Seeds

1. Main Point: Identify the author's defended claim in a short policy argument.
2. Role: Label whether a quoted sentence is evidence, concession, objection, or conclusion.
3. Technique: Choose the answer that describes an argument using an analogy.
4. Flaw: Spot a causal leap from sequence to cause.
5. Assumption: Find the missing bridge between a survey result and a broad conclusion.
6. RC Structure: Map a passage paragraph as background, challenge, response, or implication.

## Recommendation Rules

- If missed skill is Flaws, recommend `flaws-fast`, then queue a 6-question flaw drill.
- If missed skill is Conclusions, recommend `argument-basics`, `conclusion-evidence`, or `main-point-claim`.
- If missed skill is Assumptions, recommend `assumption-bridge`, then require one journal note.
- If missed skill is Pacing, recommend `pacing-skip`, then start a 12-minute timed block.
- If missed skill is Reading Structure, recommend `rc-map`, then start an RC passage map drill.
