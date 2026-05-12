# JessiPreps Video Production Manifest

This manifest merges the current curriculum plan with the live lesson inventory in `content.js`. It is the working production list for every video-backed lesson in the rebuilt repo.

## Website Curriculum Expansion

`script.js` now adds 127 site-ready curriculum entries from the requested LSAT topic list. Each entry appears in the static website Content Hub, opens through `lesson-player.html?id=...`, and inherits the animated storyboard, transcript, plain-English lesson kit, mastery practice, save/completion state, and drill handoff from the existing player.

The new entries are intentionally original JessiPreps lessons mapped to the requested topic coverage. They are not copied Khan Academy scripts.

### New Coverage Blocks

| Block | Coverage | Website behavior |
| --- | --- | --- |
| LR articles and guides | Arguments, question catalog, conclusions, evidence, flaws, conclusion ID, entailment, inferences, disputes, technique, role, principle, structure matching, flaw matching, assumptions, strengthen/weaken, helpful-to-know, explain/resolve | Searchable lesson cards with quick-guide or deep-dive metadata |
| LR video lessons | Conclusion, entailment, strong inference, disputes, technique, role, principle, match structure, match principles, flaw, match flaws, assumptions, strengthen, weaken, helpful-to-know, explain, resolve | Animated lesson player with frames, transcript, lesson kit, and mastery practice |
| LR worked examples | Worked-example versions of each major LR question family | Worked example cards routed to the same player with example-forward descriptions |
| RC articles | Getting started, question catalog, main point, recognition, clarifying meaning, purpose of reference, organizing information, inferences, application, principles/analogies, additional evidence, primary purpose | RC Content Hub lessons filtered under Reading Comprehension |
| RC worked examples | Law, humanities, science, and social science passage sets from the requested list | Worked example cards focused on passage mapping and question family practice |
| Logic toolbox | Conditional equivalence, sufficiency/necessity, if vs. only if, quick conditional guide | Logic toolbox video lessons tied to Conditional Logic drills |

### New Dynamic Lesson ID Pattern

New requested lessons use the `ka-...` prefix so they stay visibly grouped in the code while remaining branded as JessiPreps in the UI. Examples:

- `ka-lr-identify-conclusion-video`
- `ka-lr-necessary-assumptions-worked`
- `ka-rc-science-sun-overview`
- `ka-logic-if-only-if`

All of these are appended to `contentLibrary` and then normalized to `lesson-player.html`, so one player template can power the whole website lesson catalog.

## Production Standard

Every video lesson should include:

1. A short hook that names the exact LSAT pain point.
2. One core method, stated in plain language.
3. A worked example or structure breakdown.
4. One trap-answer warning.
5. A concrete next action: drill, journal, or timed set.

## Flagship Curriculum Videos

These are the primary concept lessons that anchor the platform.

| Lesson ID | Title | Video goal |
| --- | --- | --- |
| `rc-structure-map` | RC Structure and Passage Maps | Teach paragraph jobs and passage spine mapping |
| `rc-inference-attitude` | RC Inference and Author Attitude | Control force and tone |
| `rc-comparative-passages` | Comparative Passages | Track overlap, divergence, and stance |
| `rc-function-main-point` | RC Function and Main Point | Separate paragraph job from paragraph topic |
| `lr-argument-core` | Argument Core and Conclusions | Locate the claim being proved |
| `lr-loophole-assumptions` | Loopholes and Assumptions | Surface the missing bridge |
| `lr-strengthen-weaken` | Strengthen and Weaken | Show how to repair or attack the gap |
| `lr-classic-flaws` | Classic Flaws | Build pattern recognition for recurring flaws |
| `lr-conditional-formal-logic` | Conditional and Formal Logic | Stabilize rule translation and contrapositives |
| `lr-method-role-mainpoint` | Method, Role, and Main Point | Label sentence jobs and response moves |
| `lr-principle-evaluate-resolve` | Principle, Evaluate, and Resolve | Make abstract families concrete through structure |
| `lr-provable-parallel` | Provable, Parallel, and Point at Issue | Control force, form, and disagreement |

## Question-Type Video Series

Each question-type lesson is a two-video sequence:
- Video 1 teaches the solve method.
- Video 2 teaches trap control and wrong-answer detection.

| Lesson ID | Family | Video 1 | Video 2 |
| --- | --- | --- | --- |
| `qt-rc-structure` | RC Structure | Structure breakdown | Solve + trap answers |
| `qt-rc-inference` | RC Inference | Inference control | Trap answers and overreach |
| `qt-rc-attitude` | RC Attitude | Tone language | Tone traps |
| `qt-rc-function` | RC Function | Function over content | Function traps |
| `qt-rc-main-point` | RC Main Point | Passage mission | Main-point traps |
| `qt-lr-flaw` | Flaw | Flaw pattern library | Trap answer wording |
| `qt-lr-assumption` | Assumption | Find the bridge | Necessary-assumption traps |
| `qt-lr-strengthen` | Strengthen | Strengthen the gap | Strengthen traps |
| `qt-lr-weaken` | Weaken | Attack the bridge | Weaken traps |
| `qt-lr-conditional` | Conditional Logic | Rule translation | Logic traps |
| `qt-lr-main-point` | Main Point | Conclusion hunting | Main-point traps |
| `qt-lr-method-role` | Role / Method / Technique | Sentence jobs | Method traps |
| `qt-lr-mbt` | Must Be True | Provable discipline | Overstatement traps |
| `qt-lr-evaluate` | Evaluate | Find the hinge | Evaluate traps |
| `qt-lr-resolve` | Resolve / Explain | Reconcile both sides | Paradox traps |
| `qt-lr-principle` | Principle | Abstract the rule | Principle traps |
| `qt-lr-parallel-flaw` | Parallel Flaw | Strip the topic | Match-form traps |
| `qt-lr-poi` | Point at Issue | Find the disagreement | Dialogue traps |

## Existing Script Direction From The Curriculum Seed

The current written seed already establishes production direction for:

- What Is an Argument?
- Conclusion vs. Evidence
- Flaw Questions
- Main Point Questions
- Role Questions
- Necessary vs. Sufficient Assumptions
- Conditional Logic Basics
- Parallel Reasoning
- Reading Comp Passage Mapping
- Weekly study loop and pacing lessons

Those seed scripts live conceptually in `content-system-plan.md` and should be expanded into full storyboards before recording or animating.

## Recommended Production Order

### Tier 1: first-watch essentials

1. `lr-argument-core`
2. `lr-loophole-assumptions`
3. `lr-classic-flaws`
4. `rc-structure-map`
5. `rc-inference-attitude`

### Tier 2: score-growth lessons

1. `lr-strengthen-weaken`
2. `lr-conditional-formal-logic`
3. `lr-method-role-mainpoint`
4. `rc-function-main-point`
5. `rc-comparative-passages`

### Tier 3: abstract-family mastery

1. `lr-principle-evaluate-resolve`
2. `lr-provable-parallel`
3. Full question-type two-video series

## Production Checklist Per Video

- Confirm the target family and lesson ID.
- Write a 60 to 180 second script with one method and one trap.
- Pair the script to a worked example already represented in `content.js`.
- Add transcript text if the player supports it.
- Attach a direct next step: drill pack, journal prompt, or timed block.
- Verify that the recommendation engine can route to the lesson.

## Integration Rules

- Video IDs and lesson IDs should stay aligned with `content.js`.
- Every new video should map to a question family, not just a general topic.
- If a lesson is split into two videos, one must stay method-first and the other trap-first.
- If a video introduces a process, there should be a linked drill immediately after playback.
- Platform copy, transcripts, and recommendations should be updated together so the lesson is discoverable from `content.html`, `lessons.html`, and analytics-driven routing.
