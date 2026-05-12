# JessiPreps Source Content Map

This file is the merged source-of-truth map for the rebuilt JessiPreps repo. It ties the live pages, curriculum objects, drills, and planning docs together so content work happens in one place.

## Primary Source Files

| File | Role |
| --- | --- |
| `index.html` | Main app shell and dashboard |
| `app.js` | Router, study-state logic, drills, analytics, journals, and lesson playback |
| `content.js` | Curriculum data, lesson objects, question bank, RC passages, and question-type lessons |
| `styles.css` | Shared platform styling |
| `script.js` | Shared browser behavior for the static multi-page flow |
| `jessipreps.css` | Alternate branded styling surface |
| `content-system-plan.md` | Curriculum seed, taxonomy, and recommendation rules |
| `platform-audit.md` | Product strategy, premium-feature audit, and upgrade priorities |

## Live Page Map

### Core study flow

| Page | Purpose |
| --- | --- |
| `index.html` | Dashboard, next-step routing, daily study loop |
| `content.html` | Searchable Content Hub |
| `drills.html` | Adaptive drill flow |
| `question-bank.html` | Filterable question bank and drill queue |
| `review.html` | Review workflow |
| `tests.html` | Timed blocks and score logging |
| `analytics.html` | Weak-area analysis and recommendations |
| `journal.html` | Wrong-answer journal and spaced review |
| `plan.html` | Weekly plan, print/export, backup/restore |

### Support and platform pages

| Page | Purpose |
| --- | --- |
| `classes.html` | Live class and recording hub |
| `support.html` | Ask/tutor queue |
| `automations.html` | In-app study automations |
| `plugins.html` | Recommended tool stack |
| `explanations.html` | Reasoning frameworks and study guidance |

### Dedicated lesson pages

| Page | Focus |
| --- | --- |
| `lesson-argument-basics.html` | Argument core |
| `lesson-conclusion-evidence.html` | Conclusion vs. evidence |
| `lesson-main-point.html` | Main point questions |
| `lesson-role.html` | Role questions |
| `lesson-technique.html` | Method / technique questions |
| `lesson-flaws.html` | Flaw questions |
| `lesson-assumptions.html` | Assumption questions |
| `lesson-rc-structure.html` | RC structure |
| `lesson-player.html` | Dynamic animated lesson player |
| `lessons.html` | Lesson library and targeting |

## Curriculum Map From `content.js`

## Static Website Curriculum From `script.js`

The static multi-page website now has a large requested-topic lesson expansion in `script.js`.

| Data block | Purpose |
| --- | --- |
| `requestedWebsiteLessonBlueprints` | 127 LR, RC, worked-example, video, and logic-toolbox lesson entries from the user-requested topic list |
| `requestedLessonDescription()` | Generates original website-ready descriptions by lesson type: quick guide, video lesson, worked example, or full lesson |
| `buildRequestedQuestionLibrary()` | Generates 127 original LSAT-style practice questions, one per requested lesson, with family, section, linked lesson, answer, explanation, and trap pattern |
| `contentLibrary.push(...)` | Adds the requested lessons into the Content Hub and Lessons pages |
| `contentLibrary.forEach(...)` | Routes every lesson through `lesson-player.html?id=...` |

These lessons are surfaced by the existing static pages:

- `content.html`: searchable Content Hub and filters
- `lessons.html`: connected lesson library
- `lesson-player.html`: animated lesson, transcript, practice gate, and drill handoff

The requested-topic IDs use a `ka-...` prefix as a source-mapping convention only. The visible product remains JessiPreps, and the lesson copy is original.

### RC foundation lessons

| Lesson ID | Title | Main outcome |
| --- | --- | --- |
| `rc-structure-map` | RC Structure and Passage Maps | See paragraph jobs before detail chasing |
| `rc-inference-attitude` | RC Inference and Author Attitude | Control inference force and tone |
| `rc-comparative-passages` | Comparative Passages | Track overlap, divergence, and stance |
| `rc-function-main-point` | RC Function and Main Point | Distinguish paragraph function from content |

### LR foundation lessons

| Lesson ID | Title | Main outcome |
| --- | --- | --- |
| `lr-argument-core` | Argument Core and Conclusions | Find what the argument is trying to prove |
| `lr-loophole-assumptions` | Loopholes and Assumptions | Name the missing bridge |
| `lr-strengthen-weaken` | Strengthen and Weaken | Repair or attack the exact gap |
| `lr-classic-flaws` | Classic Flaws | Recognize repeated reasoning errors |
| `lr-conditional-formal-logic` | Conditional and Formal Logic | Control arrows, contrapositives, and reversals |
| `lr-method-role-mainpoint` | Method, Role, and Main Point | Label sentence jobs and argument method |
| `lr-principle-evaluate-resolve` | Principle, Evaluate, and Resolve | Handle abstract families through structure |
| `lr-provable-parallel` | Provable, Parallel, and Point at Issue | Match force, form, and true disagreement |

## Question-Type Video Lesson Inventory

Each question-type lesson includes two videos, one method-first and one trap-answer focused.

| Lesson ID | Family |
| --- | --- |
| `qt-rc-structure` | RC Structure |
| `qt-rc-inference` | RC Inference |
| `qt-rc-attitude` | RC Attitude |
| `qt-rc-function` | RC Function |
| `qt-rc-main-point` | RC Main Point |
| `qt-lr-flaw` | Flaw |
| `qt-lr-assumption` | Assumption |
| `qt-lr-strengthen` | Strengthen |
| `qt-lr-weaken` | Weaken |
| `qt-lr-conditional` | Conditional Logic |
| `qt-lr-main-point` | LR Main Point |
| `qt-lr-method-role` | Role / Method / Technique |
| `qt-lr-mbt` | Must Be True |
| `qt-lr-evaluate` | Evaluate |
| `qt-lr-resolve` | Resolve / Explain |
| `qt-lr-principle` | Principle |
| `qt-lr-parallel-flaw` | Parallel Flaw |
| `qt-lr-poi` | Point at Issue |

## Reading Comprehension Passage Assets

| Passage ID | Title |
| --- | --- |
| `rc-coral-reefs` | The Adaptive Capacity of Coral Reefs |
| `rc-stare-decisis` | Stare Decisis and the Evolution of Common Law |
| `rc-documentary-photography` | Documentary Photography and the Question of Art |
| `rc-informal-credit` | Informal Credit Networks in Nineteenth-Century America |

Each RC passage currently carries five questions and is suitable for structure, inference, function, attitude, and main-point drills.

## Drill Pack Map

| Drill ID | Focus |
| --- | --- |
| `rc-start` | RC Structure + RC Inference |
| `gap-work` | Assumption + Strengthen + Weaken |
| `logic-control` | Conditional Logic |
| `mixed-timed` | Mixed timed set |
| `rc-depth` | RC Function + RC Main Point + RC Attitude |
| `advanced-lr` | Evaluate + Resolve + Principle + Parallel Flaw + Point at Issue + Must Be True |

## Content Workflow

1. Plan curriculum in `content-system-plan.md`.
2. Add or revise lesson data in `content.js`.
3. Expose or route the lesson through `app.js`.
4. Reflect discoverability in `content.html`, `lessons.html`, or dedicated lesson pages.
5. Tie the lesson to questions, drills, and analytics.
6. Update `platform-audit.md` when a feature meaningfully changes product scope.

## Practical Source Of Truth Rules

- Lesson copy, question data, RC passages, and question-type videos live in `content.js`.
- Navigation and study behavior live in `app.js`.
- Static page framing lives in the relevant `.html` files.
- Strategy and roadmap docs live in markdown, not inside page copy.
- New curriculum should be added once in structured data, then surfaced through the UI, not hand-copied into multiple pages.
