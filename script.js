const STORE_KEY = "lexiprep-study-state-v2";

const questionBank = [
  {
    id: "pt130-s1-q4",
    source: "PT130 S1 Q4",
    section: "Logical Reasoning",
    skill: "Flaws",
    difficulty: 2,
    status: "missed",
    answer: "B",
    prompt:
      "A columnist argues that a policy must be effective because several cities adopted it after crime rates had already begun falling. What is the most likely flaw?",
    choices: {
      A: "It treats a small decrease as though it were no decrease at all.",
      B: "It confuses a trend that preceded the policy with evidence that the policy caused the trend.",
      C: "It overlooks the possibility that the policy has some benefits.",
      D: "It assumes every city used the policy in the same way.",
      E: "It attacks the people who supported the policy rather than the policy itself.",
    },
    explanation:
      "The argument uses timing badly. If the improvement started before the policy, the policy cannot be the whole explanation. Name the causal gap before reading answer choices.",
  },
  {
    id: "pt130-s1-q5",
    source: "PT130 S1 Q5",
    section: "Logical Reasoning",
    skill: "Assumptions",
    difficulty: 2,
    status: "missed",
    answer: "A",
    prompt:
      "A researcher concludes that a new reading routine caused better comprehension because students who used it scored higher. Which assumption is required?",
    choices: {
      A: "The students using the routine were not already stronger readers before trying it.",
      B: "The routine takes less time than other study methods.",
      C: "Every student should use the routine before timed sections.",
      D: "Reading comprehension is more important than logical reasoning.",
      E: "The routine was designed by an experienced tutor.",
    },
    explanation:
      "The conclusion needs the groups to be comparable. If the routine group was already stronger, the evidence no longer supports the causal claim.",
  },
  {
    id: "pt130-s1-q6",
    source: "PT130 S1 Q6",
    section: "Logical Reasoning",
    skill: "Conditional Logic",
    difficulty: 2,
    status: "missed",
    answer: "E",
    prompt:
      "If a passage is assigned, it is discussed. If it is discussed, notes are required. Which statement must be true?",
    choices: {
      A: "If notes are required, the passage was assigned.",
      B: "If a passage is not assigned, notes are not required.",
      C: "Every discussed passage is assigned.",
      D: "Some assigned passages do not require notes.",
      E: "If a passage is assigned, notes are required.",
    },
    explanation:
      "Chain the conditionals: assigned -> discussed -> notes required. Do not reverse the arrows.",
  },
  {
    id: "pt130-s1-q12",
    source: "PT130 S1 Q12",
    section: "Logical Reasoning",
    skill: "Assumptions",
    difficulty: 2,
    status: "missed",
    answer: "D",
    prompt:
      "A tutor claims a student should skip every question that feels unfamiliar because unfamiliar questions always take too long. What assumption is most vulnerable?",
    choices: {
      A: "Some familiar questions are easy.",
      B: "Timed practice is useful for most students.",
      C: "Students should never skip difficult questions.",
      D: "A first impression of unfamiliarity reliably predicts time cost.",
      E: "No question type appears more than once on a test.",
    },
    explanation:
      "The advice depends on the link between feeling unfamiliar and actually taking too long. Attack that bridge.",
  },
  {
    id: "pt130-s1-q19",
    source: "PT130 S1 Q19",
    section: "Logical Reasoning",
    skill: "Flaws",
    difficulty: 3,
    status: "missed",
    answer: "A",
    prompt:
      "An author says a prep plan is ineffective because one student followed it and did not improve. What flaw best describes the reasoning?",
    choices: {
      A: "It draws a broad conclusion from one case without ruling out student-specific causes.",
      B: "It assumes that all prep plans are equally difficult.",
      C: "It treats improvement as impossible to measure.",
      D: "It concludes that the student did not study at all.",
      E: "It uses a term in two different senses.",
    },
    explanation:
      "The evidence is one example. One case can raise a question, but it cannot establish the plan generally fails.",
  },
  {
    id: "pt130-s1-q24",
    source: "PT130 S1 Q24",
    section: "Logical Reasoning",
    skill: "Pacing",
    difficulty: 4,
    status: "missed",
    answer: "D",
    prompt:
      "A late-section question has dense wording and five abstract choices. What is the best first move when time is tight?",
    choices: {
      A: "Read every answer twice before finding the conclusion.",
      B: "Pick the longest answer because hard questions are detailed.",
      C: "Skip the stimulus and compare answer choices.",
      D: "Identify conclusion, evidence, and task before deciding whether to skip.",
      E: "Eliminate every answer using outside knowledge.",
    },
    explanation:
      "A hard question still starts with structure. If the task and argument shape are not clear quickly, mark it and protect the rest of the section.",
  },
  {
    id: "pt130-s3-q3",
    source: "PT130 S3 Q3",
    section: "Logical Reasoning",
    skill: "Strengthen or Weaken",
    difficulty: 2,
    status: "missed",
    answer: "E",
    prompt:
      "A city predicts bike commuting will increase after adding protected lanes. Which fact would most weaken the prediction?",
    choices: {
      A: "Several residents already own bicycles.",
      B: "The city also plans to repair sidewalks.",
      C: "Protected lanes are popular in other cities.",
      D: "Some commuters dislike driving downtown.",
      E: "The new lanes do not connect residential areas to major job centers.",
    },
    explanation:
      "The plan depends on usable routes. If the lanes do not connect where people live to where they work, the prediction weakens.",
  },
  {
    id: "pt130-s3-q8",
    source: "PT130 S3 Q8",
    section: "Logical Reasoning",
    skill: "Strengthen or Weaken",
    difficulty: 4,
    status: "missed",
    answer: "A",
    prompt:
      "A study finds that students who reviewed wrong answers improved more. Which fact most strengthens the study's conclusion?",
    choices: {
      A: "The compared students had similar starting scores and study time.",
      B: "Some students enjoy keeping notebooks.",
      C: "The test contained both LR and RC sections.",
      D: "The study took place during the summer.",
      E: "Students used different brands of pens.",
    },
    explanation:
      "Strengthen causal evidence by making the groups more comparable. Similar starting scores and study time remove obvious alternate explanations.",
  },
  {
    id: "rc-structure-1",
    source: "RC Drill 1",
    section: "Reading Comprehension",
    skill: "Reading Structure",
    difficulty: 2,
    status: "unseen",
    answer: "C",
    prompt:
      "A passage introduces a theory, presents a critic's objection, then explains why the objection is too broad. What is the passage's structure?",
    choices: {
      A: "A historical narrative followed by unrelated examples.",
      B: "A list of definitions with no evaluative claim.",
      C: "A view, a challenge to that view, and a limited defense of the view.",
      D: "Two theories presented as equally flawed.",
      E: "A scientific method followed by experimental data only.",
    },
    explanation:
      "Track function, not topic. The passage moves from theory to objection to qualified defense.",
  },
  {
    id: "rc-author-2",
    source: "RC Drill 2",
    section: "Reading Comprehension",
    skill: "Reading Structure",
    difficulty: 3,
    status: "unseen",
    answer: "B",
    prompt:
      "An author says a scholar's explanation is 'useful but incomplete.' Which answer best captures the attitude?",
    choices: {
      A: "Openly hostile.",
      B: "Qualified approval.",
      C: "Total agreement.",
      D: "Detached uncertainty.",
      E: "Surprised admiration with no criticism.",
    },
    explanation:
      "Useful is positive; incomplete is a limitation. Together they signal qualified approval.",
  },
  {
    id: "lr-conclusion-1",
    source: "LR Drill 3",
    section: "Logical Reasoning",
    skill: "Conclusions",
    difficulty: 3,
    status: "unseen",
    answer: "C",
    prompt:
      "A speaker lists evidence that a rule is inconsistently applied, then says it should be rewritten. What is the main conclusion?",
    choices: {
      A: "The rule exists.",
      B: "The rule is sometimes applied.",
      C: "The rule should be rewritten.",
      D: "Inconsistency is always unfair.",
      E: "The evidence is impossible to verify.",
    },
    explanation:
      "The conclusion is the claim supported by the other statements. Here, the evidence of inconsistency supports rewriting the rule.",
  },
  {
    id: "lr-parallel-1",
    source: "LR Drill 4",
    section: "Logical Reasoning",
    skill: "Conditional Logic",
    difficulty: 4,
    status: "unseen",
    answer: "D",
    prompt:
      "Which reasoning pattern matches: if a course is advanced, it requires approval; this course lacks approval, so it is not advanced?",
    choices: {
      A: "If a book is long, it is expensive; this book is expensive, so it is long.",
      B: "If a door is locked, it is closed; this door is closed, so it is locked.",
      C: "If a plan is risky, it is delayed; this plan is risky, so it is delayed.",
      D: "If a file is archived, it is labeled; this file is not labeled, so it is not archived.",
      E: "If a plant is watered, it grows; this plant grows, so it was watered.",
    },
    explanation:
      "The original uses contrapositive reasoning: advanced -> approval, no approval -> not advanced. Choice D has the same structure.",
  },
];

const sectionData = {
  section1: {
    time: "34m",
    score: "15/27",
    priority: "Flaws + assumptions",
    rows: [
      ["1", "A", "A", "Correct", "Warm-up accuracy", "Level 1", "Keep moving"],
      ["4", "D", "B", "Missed", "Flaws", "Level 2", "Drill causal flaws"],
      ["5", "B", "A", "Missed", "Assumptions", "Level 2", "Negate answer choices"],
      ["6", "D", "E", "Missed", "Conditional Logic", "Level 2", "Diagram arrows"],
      ["19", "C", "A", "Missed", "Flaws", "Level 3", "Name the gap first"],
      ["24", "B", "D", "Missed", "Pacing", "Level 4", "Practice skip decision"],
    ],
  },
  section2: {
    time: "35m target",
    score: "Review due",
    priority: "Reading endurance",
    rows: [
      ["1", "-", "-", "Pending", "Passage mapping", "Level 1", "Mark passage roles"],
      ["8", "-", "-", "Pending", "Author attitude", "Level 2", "Track tone words"],
      ["14", "-", "-", "Pending", "Inference", "Level 3", "Prove from text"],
      ["21", "-", "-", "Pending", "Comparative reading", "Level 4", "Compare viewpoints"],
    ],
  },
  variable: {
    time: "41m",
    score: "11/26",
    priority: "Review only",
    rows: [
      ["3", "D", "E", "Missed", "Strengthen or Weaken", "Level 2", "Find the conclusion"],
      ["5", "B", "A", "Missed", "Strengthen or Weaken", "Level 4", "Check alternate causes"],
      ["8", "C", "E", "Missed", "Explain or Resolve", "Level 2", "State the surprise"],
      ["9", "D", "E", "Missed", "Flaws", "Level 2", "Label flaw type"],
      ["12", "C", "D", "Missed", "Assumptions", "Level 2", "Negation test"],
      ["13", "A", "B", "Missed", "Conclusions", "Level 3", "Separate evidence from claim"],
    ],
  },
  section4: {
    time: "35m target",
    score: "Review due",
    priority: "Final-section stamina",
    rows: [
      ["2", "-", "-", "Pending", "Main point", "Level 1", "Underline conclusion"],
      ["10", "-", "-", "Pending", "Parallel reasoning", "Level 3", "Match structure"],
      ["18", "-", "-", "Pending", "Inference", "Level 3", "Avoid outside facts"],
      ["25", "-", "-", "Pending", "Hard final-five", "Level 4", "Use skip rule"],
    ],
  },
};

const lessons = [
  {
    id: "lesson-flaws",
    title: "Flaw Questions: Name the Gap",
    focus: "Flaws",
    time: "14 min",
    body: "Find conclusion, evidence, and the missing bridge before touching the answers.",
  },
  {
    id: "lesson-assumptions",
    title: "Necessary vs. Sufficient Assumptions",
    focus: "Assumptions",
    time: "18 min",
    body: "Necessary assumptions protect the argument; sufficient assumptions prove it.",
  },
  {
    id: "lesson-conditionals",
    title: "Conditional Translation",
    focus: "Conditional Logic",
    time: "12 min",
    body: "Translate trigger words into arrows, then test contrapositives without reversing.",
  },
  {
    id: "lesson-rc",
    title: "Reading Comp Passage Map",
    focus: "Reading Structure",
    time: "16 min",
    body: "Mark viewpoint, purpose, contrast, and author's attitude after each paragraph.",
  },
];

const contentLibrary = [
  {
    id: "argument-basics",
    title: "What Is an Argument?",
    topic: "lr",
    topicLabel: "Logical Reasoning",
    category: "Start here",
    difficulty: "Beginner",
    minutes: 8,
    type: "Animated video",
    skill: "Conclusions",
    page: "lesson-argument-basics.html",
    description: "Learn the LSAT core loop: evidence supports a conclusion, and every question tests how that support works.",
  },
  {
    id: "conclusion-evidence",
    title: "Conclusion vs. Evidence",
    topic: "lr",
    topicLabel: "Logical Reasoning",
    category: "Core concepts",
    difficulty: "Beginner",
    minutes: 9,
    type: "Quick guide",
    skill: "Conclusions",
    page: "lesson-conclusion-evidence.html",
    description: "Use indicator words, sentence jobs, and the therefore test to find what the author is trying to prove.",
  },
  {
    id: "main-point-claim",
    title: "Main Point Questions",
    topic: "lr",
    topicLabel: "Logical Reasoning",
    category: "Question types",
    difficulty: "Beginner",
    minutes: 10,
    type: "Animated video",
    skill: "Conclusions",
    page: "lesson-main-point.html",
    description: "Turn the stimulus into one sentence: what claim is the author most committed to defending?",
  },
  {
    id: "role-questions",
    title: "Role Questions: Name the Job",
    topic: "lr",
    topicLabel: "Logical Reasoning",
    category: "Question types",
    difficulty: "Intermediate",
    minutes: 12,
    type: "Strategy guide",
    skill: "Conclusions",
    page: "lesson-role.html",
    description: "Classify each sentence as conclusion, support, objection, concession, example, or background.",
  },
  {
    id: "describe-technique",
    title: "Describe the Technique",
    topic: "lr",
    topicLabel: "Logical Reasoning",
    category: "Question types",
    difficulty: "Intermediate",
    minutes: 11,
    type: "Worksheet",
    skill: "Flaws",
    page: "lesson-technique.html",
    description: "Translate answer choices into plain English so you can pick the move the argument actually made.",
  },
  {
    id: "flaws-fast",
    title: "How to Spot Flaw Questions Faster",
    topic: "lr",
    topicLabel: "Logical Reasoning",
    category: "Question types",
    difficulty: "Intermediate",
    minutes: 12,
    type: "Animated video",
    skill: "Flaws",
    page: "lesson-flaws.html",
    description: "Learn the most common flaw patterns and how to identify them under time pressure.",
  },
  {
    id: "assumption-bridge",
    title: "Necessary vs. Sufficient Assumptions",
    topic: "lr",
    topicLabel: "Logical Reasoning",
    category: "Core concepts",
    difficulty: "Intermediate",
    minutes: 14,
    type: "Animated video",
    skill: "Assumptions",
    page: "lesson-assumptions.html",
    description: "See the difference between protecting an argument and proving a conclusion.",
  },
  {
    id: "rc-map",
    title: "Reading Comp Passage Mapping",
    topic: "rc",
    topicLabel: "Reading Comprehension",
    category: "Core concepts",
    difficulty: "Beginner",
    minutes: 16,
    type: "Animated video",
    skill: "Reading Structure",
    page: "lesson-rc-structure.html",
    description: "Map paragraph purpose, viewpoint shifts, author attitude, and structure.",
  },
  {
    id: "conditional-basics",
    title: "Conditional Logic Basics",
    topic: "lr",
    topicLabel: "Logical Reasoning",
    category: "Core concepts",
    difficulty: "Beginner",
    minutes: 10,
    type: "Worksheet",
    skill: "Conditional Logic",
    page: "lesson-assumptions.html",
    description: "Translate if, only if, unless, and no statements without reversing arrows.",
  },
  {
    id: "parallel-skeleton",
    title: "Parallel Reasoning: Match the Skeleton",
    topic: "lr",
    topicLabel: "Logical Reasoning",
    category: "Question types",
    difficulty: "Advanced",
    minutes: 14,
    type: "Animated video",
    skill: "Techniques, Roles, and Principles",
    page: "lesson-technique.html",
    description: "Ignore topic camouflage and compare conclusion strength, evidence shape, and conditional structure.",
  },
  {
    id: "sixteen-week-loop",
    title: "Build Your Weekly LSAT Loop",
    topic: "strategy",
    topicLabel: "Strategy",
    category: "Start here",
    difficulty: "Beginner",
    minutes: 10,
    type: "Study plan",
    skill: "Pacing",
    page: "plan.html",
    description: "Plan each week around learn, drill, review, timed practice, and one honest reset.",
  },
  {
    id: "pacing-skip",
    title: "The 20-Second Skip Decision",
    topic: "timing",
    topicLabel: "Timing",
    category: "Timed test training",
    difficulty: "Advanced",
    minutes: 9,
    type: "Strategy guide",
    skill: "Pacing",
    page: "tests.html",
    description: "Protect your section by deciding quickly whether a question deserves more time.",
  },
  {
    id: "blind-review",
    title: "Blind Review Without Wasting Hours",
    topic: "strategy",
    topicLabel: "Strategy",
    category: "Strategy",
    difficulty: "Intermediate",
    minutes: 11,
    type: "Quick guide",
    skill: "Pacing",
    page: "review.html",
    description: "Review uncertainty, not just misses, and convert blind review into specific rules.",
  },
  {
    id: "test-day-reset",
    title: "What To Do When You Panic Mid-Section",
    topic: "strategy",
    topicLabel: "Strategy",
    category: "Mindset and test day",
    difficulty: "Beginner",
    minutes: 7,
    type: "Strategy guide",
    skill: "Pacing",
    page: "tests.html",
    description: "Use a short reset routine that gets you back to structure instead of spiraling.",
  },
];

const premiumLessonBlueprints = [
  ["lr-intro", "Intro to Logical Reasoning", "lr", "Logical Reasoning", "Start here", "Beginner", 7, "Video", "Conclusions"],
  ["lr-question-stem", "Read the Question Stem First", "lr", "Logical Reasoning", "Core concepts", "Beginner", 6, "Video", "Pacing"],
  ["lr-argument-parts", "Claim, Support, Background, and Counterpoint", "lr", "Logical Reasoning", "Core concepts", "Beginner", 10, "Video", "Conclusions"],
  ["lr-prediction", "Predict Before You Look Down", "lr", "Logical Reasoning", "Strategy", "Beginner", 8, "Video", "Pacing"],
  ["lr-wrong-answer-types", "Wrong Answer Families", "lr", "Logical Reasoning", "Strategy", "Intermediate", 13, "Video", "Flaws"],
  ["lr-must-be-true", "Must Be True and Inference", "lr", "Logical Reasoning", "Question types", "Beginner", 11, "Video", "Conclusions"],
  ["lr-must-be-false", "Must Be False", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Video", "Conditional Logic"],
  ["lr-soft-must", "Most Strongly Supported", "lr", "Logical Reasoning", "Question types", "Intermediate", 10, "Video", "Conclusions"],
  ["lr-strengthen", "Strengthen Questions", "lr", "Logical Reasoning", "Question types", "Intermediate", 14, "Video", "Strengthen or Weaken"],
  ["lr-weaken", "Weaken Questions", "lr", "Logical Reasoning", "Question types", "Intermediate", 14, "Video", "Strengthen or Weaken"],
  ["lr-evaluate", "Evaluate the Argument", "lr", "Logical Reasoning", "Question types", "Advanced", 13, "Video", "Assumptions"],
  ["lr-explain", "Explain or Resolve", "lr", "Logical Reasoning", "Question types", "Intermediate", 12, "Video", "Strengthen or Weaken"],
  ["lr-principle", "Principle Questions", "lr", "Logical Reasoning", "Question types", "Intermediate", 12, "Video", "Techniques, Roles, and Principles"],
  ["lr-apply-principle", "Apply the Principle", "lr", "Logical Reasoning", "Question types", "Intermediate", 12, "Video", "Techniques, Roles, and Principles"],
  ["lr-parallel-flaw", "Parallel Flaw", "lr", "Logical Reasoning", "Question types", "Advanced", 15, "Video", "Flaws"],
  ["lr-disagreement", "Point at Issue", "lr", "Logical Reasoning", "Question types", "Beginner", 9, "Video", "Conclusions"],
  ["lr-method", "Method of Reasoning", "lr", "Logical Reasoning", "Question types", "Intermediate", 12, "Video", "Techniques, Roles, and Principles"],
  ["lr-formal-logic", "Formal Logic Foundations", "lr", "Logical Reasoning", "Core concepts", "Beginner", 13, "Video", "Conditional Logic"],
  ["lr-contrapositive", "Contrapositives Without Panic", "lr", "Logical Reasoning", "Core concepts", "Intermediate", 10, "Video", "Conditional Logic"],
  ["lr-unless", "Unless, Until, Except", "lr", "Logical Reasoning", "Core concepts", "Intermediate", 12, "Video", "Conditional Logic"],
  ["lr-causal", "Causal Reasoning", "lr", "Logical Reasoning", "Core concepts", "Intermediate", 14, "Video", "Flaws"],
  ["lr-survey", "Survey and Sampling Flaws", "lr", "Logical Reasoning", "Core concepts", "Intermediate", 11, "Video", "Flaws"],
  ["lr-analogy", "Analogy Reasoning", "lr", "Logical Reasoning", "Core concepts", "Intermediate", 10, "Video", "Techniques, Roles, and Principles"],
  ["lr-quantifiers", "Some, Most, All, None", "lr", "Logical Reasoning", "Core concepts", "Intermediate", 11, "Video", "Conditional Logic"],
  ["rc-intro", "Intro to Reading Comprehension", "rc", "Reading Comprehension", "Start here", "Beginner", 8, "Video", "Reading Structure"],
  ["rc-low-annotation", "Low-Annotation Reading", "rc", "Reading Comprehension", "Strategy", "Beginner", 9, "Video", "Reading Structure"],
  ["rc-viewpoints", "Viewpoints and Author Attitude", "rc", "Reading Comprehension", "Core concepts", "Beginner", 11, "Video", "Reading Structure"],
  ["rc-main-point", "RC Main Point", "rc", "Reading Comprehension", "Question types", "Beginner", 10, "Video", "Reading Structure"],
  ["rc-primary-purpose", "Primary Purpose", "rc", "Reading Comprehension", "Question types", "Intermediate", 10, "Video", "Reading Structure"],
  ["rc-structure", "Passage Structure Questions", "rc", "Reading Comprehension", "Question types", "Intermediate", 12, "Video", "Reading Structure"],
  ["rc-detail", "Detail Questions", "rc", "Reading Comprehension", "Question types", "Beginner", 9, "Video", "Reading Structure"],
  ["rc-inference", "RC Inference", "rc", "Reading Comprehension", "Question types", "Intermediate", 12, "Video", "Reading Structure"],
  ["rc-function", "Function Questions", "rc", "Reading Comprehension", "Question types", "Intermediate", 10, "Video", "Reading Structure"],
  ["rc-analogy", "Analogy and Application", "rc", "Reading Comprehension", "Question types", "Advanced", 13, "Video", "Reading Structure"],
  ["rc-comparative", "Comparative Passages", "rc", "Reading Comprehension", "Question types", "Advanced", 15, "Video", "Reading Structure"],
  ["rc-science", "Science Passages", "rc", "Reading Comprehension", "Strategy", "Intermediate", 11, "Video", "Reading Structure"],
  ["rc-law", "Law and Policy Passages", "rc", "Reading Comprehension", "Strategy", "Intermediate", 11, "Video", "Reading Structure"],
  ["timing-lr", "35-Minute LR Pacing", "timing", "Timing", "Timed test training", "Intermediate", 10, "Video", "Pacing"],
  ["timing-rc", "35-Minute RC Pacing", "timing", "Timing", "Timed test training", "Intermediate", 10, "Video", "Pacing"],
  ["timing-flagging", "Flag, Skip, Return", "timing", "Timing", "Timed test training", "Beginner", 8, "Video", "Pacing"],
  ["blind-review-loop", "Blind Review Loop", "strategy", "Strategy", "Strategy", "Intermediate", 12, "Video", "Pacing"],
  ["wrong-answer-journal", "Wrong-Answer Journal That Works", "strategy", "Strategy", "Strategy", "Beginner", 9, "Video", "Pacing"],
  ["adhd-study-sprints", "ADHD Study Sprints", "strategy", "Strategy", "Mindset and test day", "Beginner", 8, "Video", "Pacing"],
  ["dyslexia-reading-rhythm", "Dyslexia Reading Rhythm", "strategy", "Strategy", "Mindset and test day", "Beginner", 8, "Video", "Reading Structure"],
  ["score-plateaus", "Break a Score Plateau", "strategy", "Strategy", "Strategy", "Advanced", 12, "Video", "Pacing"],
  ["argumentative-writing", "Argumentative Writing", "strategy", "Strategy", "Core concepts", "Beginner", 12, "Video", "Conclusions"],
  ["test-day-routine", "Test-Day Routine", "strategy", "Strategy", "Mindset and test day", "Beginner", 9, "Video", "Pacing"],
  ["accommodations-plan", "Accommodation-Aware Practice", "strategy", "Strategy", "Mindset and test day", "Beginner", 7, "Video", "Pacing"],
];

contentLibrary.push(
  ...premiumLessonBlueprints.map(([id, title, topic, topicLabel, category, difficulty, minutes, type, skill]) => ({
    id,
    title,
    topic,
    topicLabel,
    category,
    difficulty,
    minutes,
    type: `${type} lesson`,
    skill,
    page: "lesson-player.html",
    description: `A focused ${minutes}-minute lesson with animated scenes, plain-language notes, transcript, and a linked drill for ${skill.toLowerCase()}.`,
  })),
);

contentLibrary.forEach((lesson) => {
  lesson.page = "lesson-player.html";
});

const officialPrepTests = [
  158, 157, 155, 154, 153, 152, 151, 150, 149, 148, 147, 146, 145, 144, 143, 142, 141, 140, 139, 138, 137, 136, 135, 134, 133, 132, 131,
  130, 129, 127, 126, 125, 124, 123, 122, 121, 120, 119, 118, 117, 116, 115, 114, 113, 112, 111, 110, 109, 108, 107, 106, 105, 104,
  103, 102, 101,
];

const scenarioBank = [
  "a city transit study",
  "a university tutoring program",
  "a courthouse scheduling policy",
  "an online class attendance report",
  "a public library reading initiative",
  "a workplace training survey",
  "a neighborhood safety proposal",
  "a hospital intake process",
  "a museum membership campaign",
  "a state scholarship program",
  "a legal clinic outreach project",
  "a remote-work productivity memo",
];

const generatedQuestionTypes = [
  {
    skill: "Flaws",
    section: "Logical Reasoning",
    stem: "Which answer best describes the flaw in the reasoning?",
    pattern: "causal leap",
    correct: "It treats a sequence of events as enough to prove that the first caused the second.",
    distractors: ["It rejects a claim because of who made it.", "It proves a conclusion by restating that conclusion.", "It assumes a term has no possible exceptions.", "It mistakes a necessary condition for a sufficient one."],
    explanation: "The argument needs more than timing. Strong LSAT flaw work names the missing bridge between evidence and conclusion.",
  },
  {
    skill: "Assumptions",
    section: "Logical Reasoning",
    stem: "Which assumption is required by the argument?",
    pattern: "comparison gap",
    correct: "The groups being compared did not already differ in the trait used to support the conclusion.",
    distractors: ["The proposed plan is cheaper than every alternative.", "The evidence was collected by a famous researcher.", "No one disagrees with the conclusion.", "The conclusion would be popular if adopted."],
    explanation: "A required assumption protects the evidence. If the groups were already different, the conclusion loses support.",
  },
  {
    skill: "Strengthen or Weaken",
    section: "Logical Reasoning",
    stem: "Which fact would most weaken the argument?",
    pattern: "alternate cause",
    correct: "A separate change occurred at the same time and would predict the same result.",
    distractors: ["Some people liked the policy.", "The author uses a neutral tone.", "The report was published online.", "The issue has been discussed before."],
    explanation: "Alternate causes weaken causal conclusions because they explain the evidence without accepting the author's story.",
  },
  {
    skill: "Conclusions",
    section: "Logical Reasoning",
    stem: "Which answer best states the main conclusion?",
    pattern: "main claim",
    correct: "The policy should be revised because the stated evidence supports that recommendation.",
    distractors: ["The policy exists.", "Some evidence has been gathered.", "Several people have opinions about the policy.", "The topic is complicated."],
    explanation: "The conclusion is the claim the other statements support, not just a true detail from the stimulus.",
  },
  {
    skill: "Conditional Logic",
    section: "Logical Reasoning",
    stem: "Which statement must be true?",
    pattern: "contrapositive",
    correct: "If the required result is absent, then the sufficient condition was not met.",
    distractors: ["If the result appears, the sufficient condition must have occurred.", "The condition and result are identical.", "The rule has no exceptions in ordinary life.", "The result can never occur another way."],
    explanation: "Do not reverse the arrow. The contrapositive preserves truth; the converse usually does not.",
  },
  {
    skill: "Techniques, Roles, and Principles",
    section: "Logical Reasoning",
    stem: "The highlighted claim plays which role?",
    pattern: "sentence function",
    correct: "It is evidence offered in support of the author's final conclusion.",
    distractors: ["It is the author's final conclusion.", "It is an objection the author rejects.", "It defines the central term.", "It is a prediction unrelated to the argument."],
    explanation: "Role questions test sentence job. Label the whole argument, then describe how the target sentence functions.",
  },
  {
    skill: "Reading Structure",
    section: "Reading Comprehension",
    stem: "Which answer best describes the passage structure?",
    pattern: "view-challenge-response",
    correct: "It presents a view, introduces a challenge, and then offers a qualified response.",
    distractors: ["It lists unrelated historical facts.", "It argues that two views are equally unsupported.", "It defines terms without taking a position.", "It narrates an event with no analysis."],
    explanation: "Reading Comp rewards structural memory. Track paragraph jobs rather than trying to memorize every detail.",
  },
  {
    skill: "Pacing",
    section: "Logical Reasoning",
    stem: "What is the best next move under timed conditions?",
    pattern: "skip decision",
    correct: "Mark the question, write a short task label, and return after securing easier points.",
    distractors: ["Spend three more minutes because hard questions matter more.", "Pick the longest answer.", "Ignore the question stem.", "Start over from the first sentence every time."],
    explanation: "A perfect-score plan still protects time. Smart skipping is a control skill, not a weakness.",
  },
];

function buildGeneratedQuestions() {
  const generated = [];
  for (let index = 0; index < 120; index += 1) {
    const blueprint = generatedQuestionTypes[index % generatedQuestionTypes.length];
    const scenario = scenarioBank[index % scenarioBank.length];
    const number = String(index + 1).padStart(3, "0");
    const answer = ["A", "B", "C", "D", "E"][index % 5];
    const choices = {};
    const allChoices = [...blueprint.distractors];
    allChoices.splice(index % 5, 0, blueprint.correct);
    ["A", "B", "C", "D", "E"].forEach((letter, choiceIndex) => {
      choices[letter] = allChoices[choiceIndex];
    });
    generated.push({
      id: `lexi-original-${number}`,
      source: `LexiPrep Original Q${number}`,
      section: blueprint.section,
      skill: blueprint.skill,
      difficulty: (index % 5) + 1,
      status: "unseen",
      answer,
      pattern: blueprint.pattern,
      prompt: `In ${scenario}, an author uses limited evidence to support a broader LSAT-style claim. ${blueprint.stem}`,
      choices,
      explanation: `${blueprint.explanation} Pattern tag: ${blueprint.pattern}.`,
    });
  }
  return generated;
}

questionBank.push(...buildGeneratedQuestions());

const classes = [
  {
    title: "Logical Reasoning Trap Answers",
    time: "Thursday, 7:00 PM",
    match: "Flaws + assumptions",
    recording: "Trap answer replay",
  },
  {
    title: "Reading Comp Structure Lab",
    time: "Saturday, 11:00 AM",
    match: "Passage mapping",
    recording: "RC structure replay",
  },
  {
    title: "Timed Section Review",
    time: "Tuesday, 6:30 PM",
    match: "Pacing",
    recording: "Pacing checkpoint replay",
  },
];

const automations = [
  {
    id: "daily-review",
    title: "Daily weak-area review",
    cadence: "Every study day",
    body: "Open with the lowest skill score and queue a 6-question drill.",
  },
  {
    id: "missed-sweep",
    title: "Missed question sweep",
    cadence: "After each drill",
    body: "Add every miss to the review table until it is answered correctly once.",
  },
  {
    id: "timed-section",
    title: "Timed section reminder",
    cadence: "Twice weekly",
    body: "Run one 35-minute section and log the raw score plus pacing notes.",
  },
  {
    id: "ask-followup",
    title: "Ask queue follow-up",
    cadence: "Weekly",
    body: "Review open support asks and turn repeated confusion into a lesson block.",
  },
];

const plugins = [
  {
    title: "Computer Use",
    use: "Walk through the app in a real browser, check screenshots, and validate the study flow visually.",
    bestFor: ["Browser testing", "UI walkthroughs", "Screenshot review"],
  },
  {
    title: "Google Calendar",
    use: "Put live classes, timed sections, and review blocks onto a real weekly calendar.",
    bestFor: ["Class reminders", "Study blocks", "Weekly planning"],
  },
  {
    title: "Google Drive / Docs",
    use: "Keep a wrong-answer journal, lesson notes, and instructor questions in organized study files.",
    bestFor: ["Wrong-answer journal", "Study notes", "Exportable plans"],
  },
  {
    title: "Google Sheets",
    use: "Track raw scores, section timing, question types, and rolling accuracy over time.",
    bestFor: ["Score tracker", "Charts", "Weak-area tables"],
  },
  {
    title: "Gmail",
    use: "Draft questions to tutors, class follow-ups, or accountability check-ins.",
    bestFor: ["Tutor emails", "Support messages", "Weekly recaps"],
  },
  {
    title: "Canva",
    use: "Make printable study trackers, flashcards, and visual cheat sheets.",
    bestFor: ["Flashcards", "Study posters", "Printable plans"],
  },
];

const baseSkillScores = {
  Flaws: 44,
  Assumptions: 48,
  "Conditional Logic": 55,
  "Strengthen or Weaken": 50,
  "Reading Structure": 66,
  Pacing: 52,
  Conclusions: 58,
};

const defaultState = {
  reviewedQuestions: [],
  completedLessons: [],
  supportQueue: [],
  journalEntries: [],
  reviewItems: [],
  generatedPlan: [],
  savedContent: [],
  completedContent: [],
  watchedContent: [],
  contentCategory: "all",
  lessonMastery: {},
  writingDrafts: [],
  accessibility: {
    dyslexia: true,
    focus: true,
    reducedMotion: false,
  },
  activity: ["PrepTest 130 review plan loaded."],
  automations: {
    "daily-review": true,
    "missed-sweep": true,
    "timed-section": false,
    "ask-followup": false,
  },
  drillStats: {
    answered: 0,
    correct: 0,
    bySkill: {},
  },
};

let state = loadState();
let currentFocus = "Flaws";
let currentDrill = [];
let currentQuestionIndex = 0;
let selectedChoice = "";
let currentTimerSeconds = 35 * 60;
let timerDurationSeconds = 35 * 60;
let timerId = null;
let drillResults = [];
let submittedCurrentQuestion = false;
let fullTest = {
  questions: [],
  index: 0,
  answers: {},
  submitted: false,
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function has(selector) {
  return Boolean($(selector));
}

function on(selector, eventName, handler) {
  const element = $(selector);
  if (element) element.addEventListener(eventName, handler);
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORE_KEY);
    if (!saved) return freshDefaultState();
    return { ...freshDefaultState(), ...JSON.parse(saved) };
  } catch {
    return freshDefaultState();
  }
}

function freshDefaultState() {
  return JSON.parse(JSON.stringify(defaultState));
}

function saveState() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function todayStamp(offsetDays = 0) {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + offsetDays);
  return date.toISOString().slice(0, 10);
}

function prettyDate(dateValue) {
  return new Date(`${dateValue}T12:00:00`).toLocaleDateString([], {
    month: "short",
    day: "numeric",
    weekday: "short",
  });
}

function ensureReviewItems() {
  const existing = new Set(state.reviewItems.map((item) => item.questionId));
  let changed = false;
  questionBank
    .filter((question) => question.status === "missed")
    .forEach((question) => {
      if (!existing.has(question.id)) {
        state.reviewItems.push({
          questionId: question.id,
          nextReview: todayStamp(),
          stage: 0,
          mastered: false,
        });
        changed = true;
      }
    });
  if (changed) saveState();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("visible"), 2200);
}

function addActivity(message) {
  state.activity.unshift(message);
  state.activity = state.activity.slice(0, 8);
  saveState();
  if (has("#activityList")) renderActivity();
}

function getQuestionStatus(question) {
  if (state.reviewedQuestions.includes(question.id)) return "reviewed";
  return question.status;
}

function getFilteredQuestions() {
  const section = $("#sectionFilter")?.value || "all";
  const skill = $("#skillFilter")?.value || "all";
  const status = $("#statusFilter")?.value || "all";
  return questionBank.filter((question) => {
    const computedStatus = getQuestionStatus(question);
    return (
      (section === "all" || question.section === section) &&
      (skill === "all" || question.skill === skill) &&
      (status === "all" || computedStatus === status)
    );
  });
}

function getSkillScore(skill) {
  const skillStats = state.drillStats.bySkill[skill] || { answered: 0, correct: 0 };
  const base = baseSkillScores[skill] || 55;
  if (!skillStats.answered) return base;
  const drillAccuracy = Math.round((skillStats.correct / skillStats.answered) * 100);
  return Math.min(95, Math.round(base * 0.65 + drillAccuracy * 0.35));
}

function getWeakSkills() {
  return Object.keys(baseSkillScores).sort((a, b) => getSkillScore(a) - getSkillScore(b));
}

function renderDashboard() {
  if (!has("#readinessScore")) return;
  const completed = state.completedLessons.length;
  const answered = state.drillStats.answered;
  const correct = state.drillStats.correct;
  const accuracyBoost = answered ? Math.round((correct / answered) * 12) : 0;
  const readiness = Math.min(92, 58 + completed * 4 + Math.min(answered, 16) + accuracyBoost);
  const weakSkill = getWeakSkills()[0];
  $("#readinessScore").textContent = `${readiness}%`;
  $("#readinessBar").style.width = `${readiness}%`;
  $("#readinessText").textContent = `Next target: ${weakSkill}. Complete one focused drill, review every miss, then log a timed set.`;
  renderContinueLearning();
}

function getRecommendedContent() {
  const weakSkill = getWeakSkills()[0];
  return contentLibrary.find((item) => item.skill === weakSkill) || contentLibrary[0];
}

function renderContinueLearning() {
  if (!has("#continueLessonCard")) return;
  const lesson = getRecommendedContent();
  const completedCount = state.completedContent.length;
  const savedCount = state.savedContent.length;
  const watchedMinutes = contentLibrary
    .filter((item) => state.completedContent.includes(item.id))
    .reduce((sum, item) => sum + item.minutes, 0);
  $("#continueLessonCard").innerHTML = `
    <h3>${escapeHtml(lesson.title)}</h3>
    <p>${escapeHtml(lesson.description)}</p>
    <div class="lesson-meta">
      <span class="tag">${escapeHtml(lesson.topicLabel)}</span>
      <span class="tag">${escapeHtml(lesson.minutes)} min</span>
      <span class="tag">${escapeHtml(lesson.difficulty)}</span>
    </div>
    <div class="hero-actions">
      <button class="button primary" type="button" data-open-content="${lesson.id}">Continue lesson</button>
      <button class="button secondary dark" type="button" data-start-content-drill="${lesson.skill}">Start related drill</button>
    </div>
  `;
  $("#contentProgressMini").innerHTML = `
    <div class="skill-row"><header><span>Completed lessons</span><span>${completedCount}/${contentLibrary.length}</span></header><div class="skill-bar"><span style="width: ${(completedCount / contentLibrary.length) * 100}%"></span></div></div>
    <div class="skill-row"><header><span>Saved lessons</span><span>${savedCount}</span></header><div class="skill-bar"><span style="width: ${Math.min(savedCount * 18, 100)}%"></span></div></div>
    <div class="skill-row"><header><span>Lesson minutes</span><span>${watchedMinutes}</span></header><div class="skill-bar"><span style="width: ${Math.min(watchedMinutes * 2, 100)}%"></span></div></div>
  `;
}

function renderQuestionBank() {
  if (!has("#questionRows")) return;
  const rows = getFilteredQuestions()
    .map((question) => {
      const status = getQuestionStatus(question);
      return `
        <tr>
          <td>${escapeHtml(question.source)}</td>
          <td>${escapeHtml(question.section)}</td>
          <td><span class="tag">${escapeHtml(question.skill)}</span></td>
          <td>Level ${question.difficulty}</td>
          <td><span class="status-pill ${status}">${escapeHtml(status)}</span></td>
          <td><button class="mini-button" type="button" data-add-question="${question.id}">Add to drill</button></td>
        </tr>
      `;
    })
    .join("");

  $("#questionRows").innerHTML =
    rows || `<tr><td colspan="6">No questions match those filters yet.</td></tr>`;
}

function renderJournalQuestionOptions() {
  if (!has("#journalQuestion")) return;
  $("#journalQuestion").innerHTML = questionBank
    .map((question) => `<option value="${question.id}">${escapeHtml(question.source)} - ${escapeHtml(question.skill)}</option>`)
    .join("");
}

function buildDrill(pool, label = "Custom drill") {
  const candidates = pool.length ? pool : questionBank.filter((question) => question.skill === getWeakSkills()[0]);
  currentDrill = candidates.slice(0, 6);
  currentQuestionIndex = 0;
  selectedChoice = "";
  drillResults = [];
  submittedCurrentQuestion = false;
  state.pendingDrillIds = currentDrill.map((question) => question.id);
  state.pendingDrillLabel = label;
  saveState();
  if (!has("#drillCard")) {
    window.location.href = "drills.html";
    return;
  }
  $("#drillTitle").textContent = label;
  renderCurrentQuestion();
  showToast(`${currentDrill.length} questions queued.`);
}

function buildRecommendedDrill() {
  const weakSkill = getWeakSkills()[0];
  currentFocus = weakSkill;
  const pool = questionBank
    .filter((question) => question.skill === weakSkill || getQuestionStatus(question) === "missed")
    .sort((a, b) => {
      const aMiss = getQuestionStatus(a) === "missed" ? -1 : 1;
      const bMiss = getQuestionStatus(b) === "missed" ? -1 : 1;
      return aMiss - bMiss || b.difficulty - a.difficulty;
    });
  buildDrill(pool, `Adaptive drill: ${weakSkill}`);
  $("#drills")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderCurrentQuestion() {
  if (!has("#drillCard")) return;
  const count = currentDrill.length;
  $("#drillCount").textContent = `${count} question${count === 1 ? "" : "s"} queued`;
  $("#drillFocus").textContent = `Focus: ${currentFocus}`;
  $("#drillFeedback").textContent = "";
  submittedCurrentQuestion = false;

  if (!count) {
    $("#drillPrompt").textContent = "Start a drill to load your first question.";
    $("#answerChoices").innerHTML = "";
    $("#submitAnswer").disabled = true;
    $("#nextQuestion").disabled = true;
    if (has("#drillMastery")) $("#drillMastery").textContent = "Mastery gate: score 90% or higher to clear this set.";
    return;
  }

  const question = currentDrill[currentQuestionIndex];
  $("#drillPrompt").textContent = `${question.source}: ${question.prompt}`;
  $("#answerChoices").innerHTML = Object.entries(question.choices)
    .map(
      ([letter, text]) => `
        <button class="choice-button" type="button" data-choice="${letter}">
          <strong>${letter}.</strong> ${escapeHtml(text)}
        </button>
      `
    )
    .join("");
  $("#submitAnswer").disabled = false;
  $("#nextQuestion").disabled = true;
  if (has("#drillMastery")) {
    const correct = drillResults.filter(Boolean).length;
    $("#drillMastery").textContent = `Mastery gate: ${correct}/${drillResults.length} correct so far. You need 90% or higher to clear this set.`;
  }
}

function submitCurrentAnswer() {
  const question = currentDrill[currentQuestionIndex];
  if (!question || !selectedChoice) {
    showToast("Choose an answer first.");
    return;
  }

  const isCorrect = selectedChoice === question.answer;
  submittedCurrentQuestion = true;
  drillResults[currentQuestionIndex] = isCorrect;
  state.drillStats.answered += 1;
  if (isCorrect) state.drillStats.correct += 1;

  const skillStats = state.drillStats.bySkill[question.skill] || { answered: 0, correct: 0 };
  skillStats.answered += 1;
  if (isCorrect) skillStats.correct += 1;
  state.drillStats.bySkill[question.skill] = skillStats;

  if (!state.reviewedQuestions.includes(question.id)) {
    state.reviewedQuestions.push(question.id);
  }

  saveState();
  addActivity(`${question.source}: ${isCorrect ? "correct" : "missed"} ${question.skill} drill.`);

  $$(".choice-button").forEach((button) => {
    const choice = button.dataset.choice;
    button.classList.toggle("correct-choice", choice === question.answer);
    button.classList.toggle("wrong-choice", choice === selectedChoice && !isCorrect);
    button.disabled = true;
  });
  $("#submitAnswer").disabled = true;

  const currentScore = Math.round((drillResults.filter(Boolean).length / drillResults.length) * 100);
  const isLast = currentQuestionIndex >= currentDrill.length - 1;
  $("#drillFeedback").innerHTML = `
    <strong>${isCorrect ? "Correct." : `Not quite. Credited answer: ${question.answer}.`}</strong>
    <p>${escapeHtml(question.explanation)}</p>
    ${renderQuestionVideoExplanation(question)}
    ${isLast ? renderMasteryGate(currentScore) : ""}
  `;
  $("#nextQuestion").disabled = isLast;
  if (has("#drillMastery")) {
    $("#drillMastery").textContent = isLast
      ? `Final score: ${currentScore}%. ${currentScore >= 90 ? "Mastery cleared." : "Repeat this set until it is 90% or higher."}`
      : `Current score: ${currentScore}%. Keep going.`;
  }

  renderAll();
}

function renderQuestionVideoExplanation(question) {
  const correctText = question.choices[question.answer];
  return `
    <div class="question-video">
      <div class="video-scene static-scene">
        <span>${escapeHtml(question.skill)}</span>
        <strong>Task</strong>
        <p>${escapeHtml(question.prompt)}</p>
      </div>
      <div class="video-scene static-scene">
        <span>Credited answer</span>
        <strong>${escapeHtml(question.answer)}.</strong>
        <p>${escapeHtml(correctText)}</p>
      </div>
      <div class="video-scene static-scene">
        <span>Why</span>
        <strong>Proof</strong>
        <p>${escapeHtml(question.explanation)}</p>
      </div>
    </div>
  `;
}

function renderMasteryGate(score) {
  if (score >= 90) {
    return `<div class="mastery-pass"><strong>Mastery unlocked.</strong><p>You cleared this set. Move to the next weak area or a timed section.</p></div>`;
  }
  return `<div class="mastery-lock"><strong>Locked.</strong><p>This set is below 90%. Review the video explanations, then start another targeted drill before moving on.</p><button class="button primary" type="button" data-start-drill>Retry targeted set</button></div>`;
}

function renderReviewRows(sectionKey = "section1") {
  if (!has("#reviewRows")) return;
  const data = sectionData[sectionKey];
  $("#sectionTime").textContent = data.time;
  $("#sectionScore").textContent = data.score;
  $("#sectionPriority").textContent = data.priority;
  $("#reviewRows").innerHTML = data.rows
    .map(([number, response, answer, status, subtype, difficulty, action]) => {
      const statusClass = status === "Correct" ? "correct" : status === "Missed" ? "missed" : "";
      return `
        <tr>
          <td>${escapeHtml(number)}</td>
          <td>${escapeHtml(response)}</td>
          <td>${escapeHtml(answer)}</td>
          <td class="${statusClass}">${escapeHtml(status)}</td>
          <td>${escapeHtml(subtype)}</td>
          <td>${escapeHtml(difficulty)}</td>
          <td>${escapeHtml(action)}</td>
        </tr>
      `;
    })
    .join("");

  $$("[data-section-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.sectionTab === sectionKey);
  });
}

function renderExplanations() {
  if (!has("#explanationGrid")) return;
  const frameworks = [
    {
      title: "Flaws",
      steps: ["Find the conclusion.", "Find the evidence.", "Say what the argument assumes.", "Match the gap to the answer."],
    },
    {
      title: "Assumptions",
      steps: ["Ask what must be true.", "Negate contenders.", "Choose the answer that breaks the argument."],
    },
    {
      title: "Strengthen or Weaken",
      steps: ["Identify the causal or logical bridge.", "Predict what would help or hurt it.", "Avoid choices that only discuss the topic."],
    },
    {
      title: "Conditional Logic",
      steps: ["Translate trigger words.", "Chain arrows.", "Use contrapositives.", "Do not reverse or negate incorrectly."],
    },
    {
      title: "Reading Structure",
      steps: ["Label each paragraph's job.", "Track viewpoint shifts.", "Separate author's view from others."],
    },
    {
      title: "Pacing",
      steps: ["Know the task within 20 seconds.", "Skip if structure is unclear.", "Return with a cleaner eye."],
    },
  ];

  $("#explanationGrid").innerHTML = frameworks
    .map(
      (framework) => `
        <article class="framework">
          <h3>${escapeHtml(framework.title)}</h3>
          <ol>
            ${framework.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
          </ol>
        </article>
      `
    )
    .join("");
}

function renderLessons() {
  if (!has("#lessonList")) return;
  $("#lessonList").innerHTML = lessons
    .map((lesson) => {
      const done = state.completedLessons.includes(lesson.id);
      return `
        <article class="lesson-item">
          <header>
            <h3>${escapeHtml(lesson.title)}</h3>
            <span class="tag">${escapeHtml(lesson.time)}</span>
          </header>
          <p>${escapeHtml(lesson.body)}</p>
          <button class="mini-button" type="button" data-complete-lesson="${lesson.id}">
            ${done ? "Completed" : "Mark complete"}
          </button>
        </article>
      `;
    })
    .join("");
}

function getFilteredContent() {
  const search = ($("#contentSearch")?.value || "").trim().toLowerCase();
  const topic = $("#contentTopicFilter")?.value || "all";
  const difficulty = $("#contentDifficultyFilter")?.value || "all";
  const status = $("#contentStatusFilter")?.value || "all";
  const category = state.contentCategory || "all";
  return contentLibrary.filter((item) => {
    const haystack = `${item.title} ${item.description} ${item.skill} ${item.topicLabel} ${item.category}`.toLowerCase();
    const matchesSearch = !search || haystack.includes(search);
    const matchesTopic = topic === "all" || item.topic === topic;
    const matchesDifficulty = difficulty === "all" || item.difficulty === difficulty;
    const matchesCategory = category === "all" || item.category === category;
    const matchesStatus =
      status === "all" ||
      (status === "saved" && state.savedContent.includes(item.id)) ||
      (status === "completed" && state.completedContent.includes(item.id)) ||
      (status === "unwatched" && !state.watchedContent.includes(item.id)) ||
      (status === "short" && item.minutes <= 10);
    return matchesSearch && matchesTopic && matchesDifficulty && matchesCategory && matchesStatus;
  });
}

function renderContentHub() {
  if (!has("#contentGrid")) return;
  const featured = getRecommendedContent();
  $("#featuredContentTitle").textContent = featured.title;
  $("#featuredContentBody").textContent = featured.description;
  const filtered = getFilteredContent();
  const completed = state.completedContent.length;
  const saved = state.savedContent.length;
  const watched = state.watchedContent.length;
  const minutes = contentLibrary
    .filter((item) => state.completedContent.includes(item.id))
    .reduce((sum, item) => sum + item.minutes, 0);
  $("#contentSummary").innerHTML = `
    <div><span class="metric-label">Completed</span><strong>${completed}/${contentLibrary.length}</strong></div>
    <div><span class="metric-label">Saved</span><strong>${saved}</strong></div>
    <div><span class="metric-label">Watched</span><strong>${watched}</strong></div>
    <div><span class="metric-label">Minutes</span><strong>${minutes}</strong></div>
  `;
  $("#contentGrid").innerHTML = filtered.length
    ? filtered.map(renderContentCard).join("")
    : `<p>No content matches those filters yet.</p>`;
  $$("[data-content-category]").forEach((button) => {
    button.classList.toggle("active", button.dataset.contentCategory === (state.contentCategory || "all"));
  });
}

function renderContentCard(item) {
  const completed = state.completedContent.includes(item.id);
  const saved = state.savedContent.includes(item.id);
  const watched = state.watchedContent.includes(item.id);
  const progress = completed ? 100 : watched ? 45 : 0;
  return `
    <article class="lesson-card">
      <div class="lesson-thumb">${escapeHtml(item.type)}</div>
      <div class="lesson-card-body">
        <div class="lesson-meta">
          <span class="tag">${escapeHtml(item.topicLabel)}</span>
          <span class="tag">${escapeHtml(item.minutes)} min</span>
          <span class="tag">${escapeHtml(item.difficulty)}</span>
        </div>
        <h3>${escapeHtml(item.title)} ${completed ? "✓" : ""}</h3>
        <p>${escapeHtml(item.description)}</p>
        <div class="lesson-progress" aria-hidden="true"><span style="width: ${progress}%"></span></div>
        <div class="lesson-actions">
          <button class="mini-button" type="button" data-open-content="${item.id}">Watch lesson</button>
          <button class="mini-button" type="button" data-save-content="${item.id}">${saved ? "Saved" : "Save"}</button>
          <button class="mini-button" type="button" data-complete-content="${item.id}">${completed ? "Completed" : "Mark complete"}</button>
        </div>
      </div>
    </article>
  `;
}

function getLessonScenes(item) {
  const skill = item.skill || "LSAT";
  return [
    {
      title: "Spot the job",
      body: `Start by naming the job: conclusion, evidence, viewpoint, exception, or timing decision. This lowers working-memory load before answer choices.`,
    },
    {
      title: "Make a prediction",
      body: `Say the answer in plain words before looking down. For ${skill}, the right answer must match the task and the actual support relationship.`,
    },
    {
      title: "Choose with proof",
      body: `Pick the answer because it does the required job, not because it sounds familiar. Then save one sentence in the journal if you miss it.`,
    },
  ];
}

function getLessonKit(item) {
  const kits = {
    Flaws: {
      concept: "A flaw answer describes the exact place where the evidence stops proving the conclusion.",
      example: "The report came out before applications rose, so the report caused the rise.",
      breakdown: "The evidence is sequence. The conclusion is cause. The missing proof is that no other change explains the rise.",
      trap: "A trap answer talks about the same topic but names a flaw the argument did not make.",
      practice: "Before answering, say: evidence, conclusion, missing bridge, then choose.",
    },
    Assumptions: {
      concept: "An assumption is the quiet bridge the argument needs but does not say.",
      example: "Students using a new schedule improved, so the schedule caused the improvement.",
      breakdown: "The argument needs the students not to have been stronger already.",
      trap: "Helpful is not enough. Necessary means the argument breaks when the answer is false.",
      practice: "Negate the answer. If the conclusion loses support, keep it.",
    },
    "Strengthen or Weaken": {
      concept: "Strengthen and weaken answers change the support relationship, not just the topic.",
      example: "A city predicts bike commuting will increase after adding lanes.",
      breakdown: "A connected lane network strengthens. Lanes that do not reach jobs weaken.",
      trap: "Popularity answers feel relevant but may not affect whether the prediction follows.",
      practice: "Predict what would help or hurt the bridge before looking down.",
    },
    Conclusions: {
      concept: "The conclusion is the claim the author is trying to prove.",
      example: "The rule is inconsistently applied, so the rule should be rewritten.",
      breakdown: "Inconsistency is evidence. Rewriting the rule is the defended claim.",
      trap: "True details from the stimulus are often wrong because they are not the main claim.",
      practice: "Ask: which sentence makes the others sound like reasons?",
    },
    "Conditional Logic": {
      concept: "Conditional logic is about triggers and guaranteed results.",
      example: "If a passage is assigned, notes are required.",
      breakdown: "Assigned triggers notes. No notes proves not assigned. Notes does not prove assigned.",
      trap: "The most common trap reverses the arrow.",
      practice: "Write the arrow, then write only the contrapositive.",
    },
    "Reading Structure": {
      concept: "RC structure is the job each paragraph does for the passage.",
      example: "A theory appears, a critic objects, and the author gives a limited defense.",
      breakdown: "That is view, challenge, response. The topic matters less than the movement.",
      trap: "A detail can be true but too small for a structure question.",
      practice: "After each paragraph, write one word: background, view, challenge, response, implication.",
    },
    Pacing: {
      concept: "Pacing is a scoring skill. It protects the questions you can win.",
      example: "A dense final-five question has abstract answer choices and no clear task.",
      breakdown: "If task and structure are not clear quickly, mark it and return.",
      trap: "Spending more time can feel responsible while quietly stealing easier points.",
      practice: "Use a 20-second task check before investing full effort.",
    },
  };
  return kits[item.skill] || {
    concept: "Every LSAT task becomes easier when you name the job before reading answer choices.",
    example: "A stimulus gives evidence, then asks you to evaluate how strongly it supports a claim.",
    breakdown: "Find the task, find the conclusion, then prove the credited answer from the text.",
    trap: "Familiar words are not proof. Match function, not vibes.",
    practice: "Write a task label, make a prediction, then choose.",
  };
}

function renderLessonPlayer() {
  if (!has("#dynamicLesson")) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || state.lastContentId || contentLibrary[0].id;
  const item = contentLibrary.find((lesson) => lesson.id === id) || contentLibrary[0];
  const scenes = getLessonScenes(item);
  const kit = getLessonKit(item);
  const practice = getLessonPractice(item);
  const mastery = state.lessonMastery[item.id] || { answered: 0, correct: 0, passed: false };
  const masteryScore = mastery.answered ? Math.round((mastery.correct / mastery.answered) * 100) : 0;
  const completed = state.completedContent.includes(item.id);
  $("#dynamicLesson").innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">${escapeHtml(item.category)}</p>
      <h1>${escapeHtml(item.title)}</h1>
      <p>${escapeHtml(item.description)}</p>
    </div>
    <div class="lesson-layout">
      <div class="lesson-video animated-video" aria-label="Animated lesson for ${escapeHtml(item.title)}">
        ${scenes
          .map(
            (scene, index) => `
              <div class="video-scene" style="--scene-index: ${index}">
                <span>${escapeHtml(item.topicLabel)}</span>
                <strong>${escapeHtml(scene.title)}</strong>
                <p>${escapeHtml(scene.body)}</p>
              </div>
            `,
          )
          .join("")}
      </div>
      <div class="lesson-notes">
        <div class="lesson-meta">
          <span class="tag">${escapeHtml(item.minutes)} min</span>
          <span class="tag">${escapeHtml(item.difficulty)}</span>
          <span class="tag">${escapeHtml(item.skill)}</span>
        </div>
        <h2>Transcript</h2>
        <p>${escapeHtml(scenes.map((scene) => `${scene.title}: ${scene.body}`).join(" "))}</p>
        <section class="lesson-kit" aria-label="Concept example breakdown trap and practice">
          <h2>Short concept</h2>
          <p>${escapeHtml(kit.concept)}</p>
          <h2>Example</h2>
          <p>${escapeHtml(kit.example)}</p>
          <h2>Breakdown</h2>
          <p>${escapeHtml(kit.breakdown)}</p>
          <h2>Trap answer</h2>
          <p>${escapeHtml(kit.trap)}</p>
          <h2>Practice rule</h2>
          <p>${escapeHtml(kit.practice)}</p>
        </section>
        <h2>ADHD + dyslexia supports</h2>
        <ul>
          <li>Use the lesson in one sprint: watch, drill, journal, stop.</li>
          <li>Read answer choices one line at a time and cover the rest if needed.</li>
          <li>Write the task label before answer choices so your brain has an anchor.</li>
        </ul>
        <h2>Next action</h2>
        <p>Do not just watch. Run a short ${escapeHtml(item.skill)} drill while the pattern is warm.</p>
        <section class="lesson-practice" aria-label="Lesson mastery practice">
          <h2>Mastery practice</h2>
          <p>You need 90% or higher before this lesson counts as complete. Current lesson mastery: ${masteryScore}%.</p>
          ${practice.map(renderLessonPracticeQuestion).join("")}
          <div class="mastery-meter">Lesson gate: ${mastery.passed ? "Unlocked" : "Locked until 90%."}</div>
        </section>
        <div class="hero-actions">
          <button class="button primary" type="button" data-complete-content="${item.id}" ${mastery.passed ? "" : "disabled"}>${completed ? "Completed" : "Mark complete"}</button>
          <button class="button secondary dark" type="button" data-start-content-drill="${escapeHtml(item.skill)}">Start related drill</button>
          <button class="button secondary dark" type="button" data-page-target="content.html">Back to Content</button>
        </div>
      </div>
    </div>
  `;
}

function getLessonPractice(item) {
  const pool = questionBank.filter((question) => question.skill === item.skill);
  return (pool.length ? pool : questionBank).slice(0, 5);
}

function renderLessonPracticeQuestion(question) {
  return `
    <article class="practice-question">
      <h3>${escapeHtml(question.source)}</h3>
      <p>${escapeHtml(question.prompt)}</p>
      <div class="practice-choices">
        ${Object.entries(question.choices)
          .map(
            ([letter, text]) => `
              <button class="mini-button" type="button" data-lesson-practice="${question.id}" data-practice-choice="${letter}">
                ${letter}. ${escapeHtml(text)}
              </button>
            `,
          )
          .join("")}
      </div>
    </article>
  `;
}

function answerLessonPractice(questionId, choice) {
  const question = questionBank.find((item) => item.id === questionId);
  if (!question || !has("#dynamicLesson")) return;
  const params = new URLSearchParams(window.location.search);
  const lessonId = params.get("id") || state.lastContentId || contentLibrary[0].id;
  const mastery = state.lessonMastery[lessonId] || { answered: 0, correct: 0, passed: false };
  mastery.answered += 1;
  if (choice === question.answer) mastery.correct += 1;
  mastery.passed = mastery.answered >= 5 && mastery.correct / mastery.answered >= 0.9;
  state.lessonMastery[lessonId] = mastery;
  saveState();
  showToast(choice === question.answer ? "Correct practice answer." : `Not quite. Answer: ${question.answer}.`);
  renderLessonPlayer();
}

function openContent(id) {
  const item = contentLibrary.find((lesson) => lesson.id === id);
  if (!item) return;
  if (!state.watchedContent.includes(id)) state.watchedContent.push(id);
  state.lastContentId = id;
  saveState();
  window.location.href = item.page === "lesson-player.html" ? `lesson-player.html?id=${encodeURIComponent(id)}` : item.page;
}

function toggleSaveContent(id) {
  if (state.savedContent.includes(id)) {
    state.savedContent = state.savedContent.filter((item) => item !== id);
    showToast("Removed from saved lessons.");
  } else {
    state.savedContent.push(id);
    showToast("Saved for later.");
  }
  saveState();
  renderContentHub();
  renderContinueLearning();
}

function completeContent(id) {
  if (has("#dynamicLesson") && !state.lessonMastery[id]?.passed) {
    showToast("Score 90% or higher on lesson practice before marking complete.");
    return;
  }
  if (!state.completedContent.includes(id)) state.completedContent.push(id);
  if (!state.watchedContent.includes(id)) state.watchedContent.push(id);
  state.lastContentId = id;
  saveState();
  addActivity(`Completed content: ${contentLibrary.find((item) => item.id === id)?.title || id}.`);
  renderContentHub();
  renderContinueLearning();
  showToast("Lesson marked complete.");
}

function startContentDrill(skill) {
  const pool = questionBank.filter((question) => question.skill === skill);
  currentFocus = skill;
  buildDrill(pool, `Lesson drill: ${skill}`);
}

function renderClasses() {
  if (!has("#classList")) return;
  $("#classList").innerHTML = classes
    .map(
      (item) => `
        <article class="class-item">
          <header>
            <h3>${escapeHtml(item.title)}</h3>
            <span class="tag">${escapeHtml(item.time)}</span>
          </header>
          <p>Best match: ${escapeHtml(item.match)}</p>
          <button class="mini-button" type="button" data-class-action="${escapeHtml(item.title)}">Use recording: ${escapeHtml(item.recording)}</button>
        </article>
      `
    )
    .join("");
}

function renderSupportQueue() {
  if (!has("#supportQueue")) return;
  const queue = state.supportQueue.slice(0, 5);
  $("#supportQueue").innerHTML = queue.length
    ? queue
        .map(
          (item) => `
            <article class="queue-item">
              <p>${escapeHtml(item.text)}</p>
              <span class="metric-label">${escapeHtml(item.date)}</span>
            </article>
          `
        )
        .join("")
    : `<p>No support asks yet. Save the first confusing question here.</p>`;
}

function renderJournal() {
  if (!has("#journalList")) return;
  renderJournalQuestionOptions();
  const entries = state.journalEntries.slice(0, 8);
  $("#journalList").innerHTML = entries.length
    ? entries
        .map(
          (entry) => `
            <article class="journal-item">
              <h3>${escapeHtml(entry.source)} - ${escapeHtml(entry.reason)}</h3>
              <p>${escapeHtml(entry.takeaway)}</p>
              <span class="metric-label">Next review: ${prettyDate(entry.nextReview)}</span>
            </article>
          `
        )
        .join("")
    : `<p>No journal notes yet. Save one after your next miss or confusing review.</p>`;
}

function renderReviewQueue() {
  if (!has("#reviewQueue")) return;
  const today = todayStamp();
  const queue = state.reviewItems
    .filter((item) => !item.mastered)
    .sort((a, b) => a.nextReview.localeCompare(b.nextReview))
    .slice(0, 8);

  $("#reviewQueue").innerHTML = queue.length
    ? queue
        .map((item) => {
          const question = questionBank.find((candidate) => candidate.id === item.questionId);
          if (!question) return "";
          const due = item.nextReview <= today;
          return `
            <article class="review-item ${due ? "due" : ""}">
              <h3>${escapeHtml(question.source)} - ${escapeHtml(question.skill)}</h3>
              <p>${escapeHtml(question.explanation)}</p>
              <span class="metric-label">${due ? "Due now" : `Due ${prettyDate(item.nextReview)}`} - Stage ${item.stage + 1}</span>
              <div class="review-actions">
                <button class="mini-button" type="button" data-review-now="${question.id}">Review now</button>
                <button class="mini-button" type="button" data-snooze-review="${question.id}">Snooze 2 days</button>
                <button class="mini-button" type="button" data-master-review="${question.id}">Mastered</button>
              </div>
            </article>
          `;
        })
        .join("")
    : `<p>Your spaced review queue is clear. Add a journal note or miss a drill question to schedule one.</p>`;
}

function renderActivity() {
  if (!has("#activityList")) return;
  $("#activityList").innerHTML = state.activity
    .map(
      (item) => `
        <article class="activity-item">
          <p>${escapeHtml(item)}</p>
        </article>
      `
    )
    .join("");
}

function renderPlan() {
  if (!has("#weeklyPlan")) return;
  const plan = state.generatedPlan.length ? state.generatedPlan : generateStudyPlan(false);
  $("#weeklyPlan").innerHTML = plan
    .map(
      (day) => `
        <article class="plan-day">
          <strong>${escapeHtml(day.day)}</strong>
          <div>
            <h3>${escapeHtml(day.focus)}</h3>
            <ul>
              ${day.tasks.map((task) => `<li>${escapeHtml(task)}</li>`).join("")}
            </ul>
          </div>
          <span class="tag">${escapeHtml(day.minutes)} min</span>
        </article>
      `
    )
    .join("");
}

function generateStudyPlan(shouldSave = true) {
  const hours = Number($("#weeklyHours")?.value || 8);
  const weakSkills = getWeakSkills();
  const minutesByDay = Math.max(35, Math.round((hours * 60) / 6));
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const plan = days.map((day, index) => {
    const focus = weakSkills[index % weakSkills.length];
    const timed = index === 2 || index === 5;
    return {
      day,
      focus,
      minutes: timed ? Math.max(70, minutesByDay) : minutesByDay,
      tasks: timed
        ? [
            `Run one timed ${index === 2 ? "17-minute checkpoint" : "35-minute section"}.`,
            `Review every miss and save one journal note.`,
            `Log raw score, timing issue, and next action.`,
          ]
        : [
            `Complete a ${focus} lesson or framework review.`,
            `Drill 6 targeted questions.`,
            `Write one takeaway for every miss.`,
          ],
    };
  });

  if (shouldSave) {
    state.generatedPlan = plan;
    state.testDate = $("#testDate").value;
    state.weeklyHours = hours;
    saveState();
    addActivity("Generated a weekly LSAT study plan.");
  }

  return plan;
}

function renderAnalytics() {
  if (!has("#recommendationList")) return;
  const weakSkills = getWeakSkills();
  const recommendations = weakSkills.slice(0, 3).map((skill, index) => {
    const labels = ["Highest impact", "Next support", "Maintenance"];
    return { skill, label: labels[index] };
  });

  $("#recommendationList").innerHTML = recommendations
    .map(
      (item) => `
        <button class="recommendation ${item.skill === currentFocus ? "selected" : ""}" type="button" data-focus="${escapeHtml(item.skill)}">
          <span>${escapeHtml(item.skill)}</span>
          <strong>${escapeHtml(item.label)}</strong>
        </button>
      `
    )
    .join("");

  const focus = currentFocus || recommendations[0].skill;
  const focusScore = getSkillScore(focus);
  $("#insightCard").innerHTML = `
    <h3>${escapeHtml(focus)}</h3>
    <p>${getRecommendationText(focus, focusScore)}</p>
    <button class="button primary" type="button" data-start-drill>Build this drill</button>
  `;

  $("#skillChart").innerHTML = Object.keys(baseSkillScores)
    .map((skill) => {
      const score = getSkillScore(skill);
      return `
        <div class="skill-row">
          <header>
            <span>${escapeHtml(skill)}</span>
            <span>${score}%</span>
          </header>
          <div class="skill-bar" aria-hidden="true"><span style="width: ${score}%"></span></div>
        </div>
      `;
    })
    .join("");
  if (state.completedContent.length) {
    $("#insightCard").insertAdjacentHTML(
      "beforeend",
      `<p><strong>Content progress:</strong> ${state.completedContent.length} lessons completed. Keep pairing lessons with drills.</p>`
    );
  }
}

function getRecommendationText(skill, score) {
  const copy = {
    Flaws: "Name the conclusion, evidence, and missing bridge before reading answers. Your next drill should be mostly flaw and causal-gap questions.",
    Assumptions: "Use the negation test on contenders. If the negated answer breaks the argument, it is doing necessary work.",
    "Conditional Logic": "Translate into arrows and test contrapositives. Most misses here come from reversing or over-reading the rule.",
    "Strengthen or Weaken": "Predict what changes the support relationship before answer choices. Avoid answers that merely repeat the topic.",
    "Reading Structure": "Map paragraph function and author attitude. The goal is to know why each paragraph exists.",
    Pacing: "Use a 17-minute checkpoint. If task and structure are not clear quickly, mark it, move, and protect the section.",
    Conclusions: "Separate evidence from the claim being proven. Conclusion questions become easier when you ask 'why should I believe this?'",
  };
  return `${copy[skill] || "Review the missed pattern, then drill it immediately."} Current local mastery: ${score}%.`;
}

function renderAutomations() {
  if (!has("#automationGrid")) return;
  $("#automationGrid").innerHTML = automations
    .map((automation) => {
      const enabled = Boolean(state.automations[automation.id]);
      return `
        <article class="automation-item ${enabled ? "enabled" : ""}">
          <header>
            <h3>${escapeHtml(automation.title)}</h3>
            <button class="mini-button toggle" type="button" data-toggle-automation="${automation.id}">
              ${enabled ? "On" : "Off"}
            </button>
          </header>
          <p><strong>${escapeHtml(automation.cadence)}:</strong> ${escapeHtml(automation.body)}</p>
          <button class="mini-button" type="button" data-run-automation="${automation.id}">Run now</button>
        </article>
      `;
    })
    .join("");
}

function applyAccessibility() {
  document.body.classList.toggle("dyslexia-mode", Boolean(state.accessibility?.dyslexia));
  document.body.classList.toggle("focus-mode", Boolean(state.accessibility?.focus));
  document.body.classList.toggle("reduced-motion-mode", Boolean(state.accessibility?.reducedMotion));
}

function renderAccessibilityDock() {
  if ($("#accessibilityDock")) return;
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div class="accessibility-dock" id="accessibilityDock" aria-label="Personal study settings">
      <strong>Jessica mode</strong>
      <button class="mini-button" type="button" data-toggle-accessibility="dyslexia">Dyslexia font</button>
      <button class="mini-button" type="button" data-toggle-accessibility="focus">Focus spacing</button>
      <button class="mini-button" type="button" data-toggle-accessibility="reducedMotion">Reduce motion</button>
    </div>`,
  );
}

function downloadText(filename, mimeType, text) {
  const blob = new Blob([text], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function downloadBackup() {
  const backup = {
    exportedAt: new Date().toISOString(),
    app: "LexiPrep",
    state,
  };
  downloadText("lexiprep-study-backup.json", "application/json", JSON.stringify(backup, null, 2));
  showToast("Backup downloaded.");
}

function downloadCalendarFile() {
  const plan = state.generatedPlan.length ? state.generatedPlan : generateStudyPlan(false);
  const start = new Date();
  start.setHours(18, 0, 0, 0);
  const events = plan
    .map((day, index) => {
      const eventDate = new Date(start);
      eventDate.setDate(start.getDate() + index);
      const endDate = new Date(eventDate);
      endDate.setMinutes(eventDate.getMinutes() + day.minutes);
      const format = (date) => date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
      return [
        "BEGIN:VEVENT",
        `UID:lexiprep-${index}-${eventDate.getTime()}@local`,
        `DTSTAMP:${format(new Date())}`,
        `DTSTART:${format(eventDate)}`,
        `DTEND:${format(endDate)}`,
        `SUMMARY:LSAT study - ${day.focus}`,
        `DESCRIPTION:${day.tasks.join("\\n")}`,
        "END:VEVENT",
      ].join("\n");
    })
    .join("\n");
  const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//LexiPrep//Study Plan//EN", events, "END:VCALENDAR"].join("\n");
  downloadText("lexiprep-weekly-study-plan.ics", "text/calendar", ics);
  showToast("Calendar file downloaded.");
}

function renderPlugins() {
  if (!has("#pluginGrid")) return;
  $("#pluginGrid").innerHTML = plugins
    .map(
      (plugin) => `
        <article class="plugin-item">
          <header>
            <h3>${escapeHtml(plugin.title)}</h3>
            <span class="tag">Recommended</span>
          </header>
          <p>${escapeHtml(plugin.use)}</p>
          <ul>
            ${plugin.bestFor.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderOfficialExplanations() {
  if (!has("#officialExplanationGrid")) return;
  $("#officialExplanationGrid").innerHTML = officialPrepTests
    .map(
      (test) => `
        <article class="explanation-link-card">
          <h3>PrepTest ${test}</h3>
          <p>Review the official question first, then compare your reasoning to right and wrong answer explanations.</p>
          <a class="mini-button" href="https://lsathacks.com/explanations/lsat-preptest-${test}/" target="_blank" rel="noopener">Open explanations</a>
        </article>
      `,
    )
    .join("");
}

function formatTimer(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
}

function renderTimer() {
  if (!has("#timerDisplay")) return;
  $("#timerDisplay").textContent = formatTimer(currentTimerSeconds);
}

function startFullTest() {
  const logical = questionBank.filter((question) => question.section === "Logical Reasoning");
  const reading = questionBank.filter((question) => question.section === "Reading Comprehension");
  fullTest = {
    questions: [...logical.slice(0, 25), ...reading.slice(0, 25), ...logical.slice(25, 50)],
    index: 0,
    answers: {},
    submitted: false,
  };
  showToast("Full test started. Treat each 25-question block like a section.");
  renderFullTest();
}

function renderFullTest() {
  if (!has("#fullTestCard")) return;
  if (!fullTest.questions.length) {
    $("#fullTestCard").innerHTML = `<p>Start a full test to load Section 1, Question 1.</p>`;
    return;
  }
  const question = fullTest.questions[fullTest.index];
  const sectionNumber = Math.floor(fullTest.index / 25) + 1;
  const sectionQuestion = (fullTest.index % 25) + 1;
  const chosen = fullTest.answers[question.id] || "";
  $("#fullTestCard").innerHTML = `
    <div class="drill-meta"><span>Section ${sectionNumber}, Question ${sectionQuestion}</span><span>${fullTest.index + 1}/${fullTest.questions.length}</span></div>
    <p class="prompt">${escapeHtml(question.prompt)}</p>
    <div class="choices">
      ${Object.entries(question.choices)
        .map(
          ([letter, text]) => `
            <button class="choice-button ${chosen === letter ? "selected" : ""}" type="button" data-test-choice="${letter}">
              <strong>${letter}.</strong> ${escapeHtml(text)}
            </button>
          `,
        )
        .join("")}
    </div>
    <div class="drill-actions">
      <button class="button secondary dark" type="button" data-test-prev ${fullTest.index === 0 ? "disabled" : ""}>Previous</button>
      <button class="button primary" type="button" data-test-next>${fullTest.index === fullTest.questions.length - 1 ? "Finish test" : "Next"}</button>
    </div>
    <div class="feedback">${fullTest.submitted ? renderFullTestScore() : "Answer every question, then finish for score and video explanations."}</div>
  `;
}

function renderFullTestScore() {
  const correct = fullTest.questions.filter((question) => fullTest.answers[question.id] === question.answer).length;
  const score = Math.round((correct / fullTest.questions.length) * 100);
  const missed = fullTest.questions.filter((question) => fullTest.answers[question.id] !== question.answer).slice(0, 6);
  return `
    <strong>Full test score: ${correct}/${fullTest.questions.length} (${score}%). ${score >= 90 ? "Mastery cleared." : "Below 90%, review and retake."}</strong>
    ${missed.map(renderQuestionVideoExplanation).join("")}
  `;
}

function finishFullTest() {
  fullTest.submitted = true;
  const correct = fullTest.questions.filter((question) => fullTest.answers[question.id] === question.answer).length;
  addActivity(`Completed full practice test: ${correct}/${fullTest.questions.length}.`);
  saveState();
  renderFullTest();
}

function resetFullTest() {
  fullTest = { questions: [], index: 0, answers: {}, submitted: false };
  renderFullTest();
  showToast("Full test reset.");
}

function saveWritingPractice() {
  const draft = $("#writingDraft")?.value.trim();
  if (!draft) {
    showToast("Write a draft before saving.");
    return;
  }
  state.writingDrafts.unshift({
    id: `writing-${Date.now()}`,
    createdAt: new Date().toISOString(),
    draft,
  });
  state.writingDrafts = state.writingDrafts.slice(0, 10);
  saveState();
  addActivity("Saved Argumentative Writing practice.");
  $("#writingDraft").value = "";
  showToast("Writing practice saved.");
}

function startTimer() {
  if (timerId) return;
  timerId = setInterval(() => {
    currentTimerSeconds -= 1;
    renderTimer();
    if (currentTimerSeconds <= 0) {
      clearInterval(timerId);
      timerId = null;
      currentTimerSeconds = 0;
      renderTimer();
      addActivity("Timed practice block completed.");
      showToast("Timer complete. Log the result while it is fresh.");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerId);
  timerId = null;
}

function resetTimer() {
  pauseTimer();
  currentTimerSeconds = timerDurationSeconds;
  renderTimer();
}

function renderAll() {
  ensureReviewItems();
  applyAccessibility();
  renderAccessibilityDock();
  renderDashboard();
  renderQuestionBank();
  renderLessons();
  renderSupportQueue();
  renderJournal();
  renderReviewQueue();
  renderPlan();
  renderContentHub();
  renderContinueLearning();
  renderActivity();
  renderAnalytics();
  renderAutomations();
  renderLessonPlayer();
}

function setActiveNavigation() {
  const page = window.location.pathname.split("/").pop() || "index.html";
  const activePage = page.startsWith("lesson-") ? "content.html" : page;
  $$(".nav-list a").forEach((link) => {
    const href = link.getAttribute("href");
    link.classList.toggle("active", href === activePage || (!href && activePage === "index.html"));
  });
  state.lastPage = page;
  saveState();
}

function hydratePendingDrill() {
  if (!has("#drillCard") || !state.pendingDrillIds?.length) return;
  const pending = state.pendingDrillIds
    .map((id) => questionBank.find((question) => question.id === id))
    .filter(Boolean);
  currentDrill = pending;
  currentQuestionIndex = 0;
  selectedChoice = "";
  $("#drillTitle").textContent = state.pendingDrillLabel || "Queued drill";
  currentFocus = pending[0]?.skill || currentFocus;
  state.pendingDrillIds = [];
  state.pendingDrillLabel = "";
  saveState();
  renderCurrentQuestion();
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const choice = event.target.closest("[data-choice]");
    if (choice) {
      if (submittedCurrentQuestion) return;
      selectedChoice = choice.dataset.choice;
      $$(".choice-button").forEach((button) => {
        button.classList.toggle("selected", button === choice);
      });
    }

    const lessonPractice = event.target.closest("[data-lesson-practice]");
    if (lessonPractice) {
      answerLessonPractice(lessonPractice.dataset.lessonPractice, lessonPractice.dataset.practiceChoice);
    }

    const addQuestion = event.target.closest("[data-add-question]");
    if (addQuestion) {
      const question = questionBank.find((item) => item.id === addQuestion.dataset.addQuestion);
      if (!question) return;
      buildDrill([question], `Single question: ${question.skill}`);
      $("#drills")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const lessonButton = event.target.closest("[data-complete-lesson]");
    if (lessonButton) {
      const id = lessonButton.dataset.completeLesson;
      if (!state.completedLessons.includes(id)) {
        state.completedLessons.push(id);
        const lesson = lessons.find((item) => item.id === id);
        addActivity(`Completed lesson: ${lesson.title}.`);
        saveState();
        renderAll();
      }
    }

    const reviewNow = event.target.closest("[data-review-now]");
    if (reviewNow) {
      const question = questionBank.find((item) => item.id === reviewNow.dataset.reviewNow);
      if (!question) return;
      buildDrill([question], `Spaced review: ${question.skill}`);
      $("#drills")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const snoozeReview = event.target.closest("[data-snooze-review]");
    if (snoozeReview) {
      const item = state.reviewItems.find((review) => review.questionId === snoozeReview.dataset.snoozeReview);
      if (item) {
        item.nextReview = todayStamp(2);
        saveState();
        renderReviewQueue();
        showToast("Review snoozed for 2 days.");
      }
    }

    const masterReview = event.target.closest("[data-master-review]");
    if (masterReview) {
      const item = state.reviewItems.find((review) => review.questionId === masterReview.dataset.masterReview);
      if (item) {
        item.mastered = true;
        saveState();
        renderReviewQueue();
        addActivity("Marked a spaced-review item mastered.");
      }
    }

    const classButton = event.target.closest("[data-class-action]");
    if (classButton) {
      addActivity(`Opened class recording plan: ${classButton.dataset.classAction}.`);
      showToast("Recording added to today's plan.");
    }

    const openContentButton = event.target.closest("[data-open-content]");
    if (openContentButton) {
      openContent(openContentButton.dataset.openContent);
    }

    const featuredContentButton = event.target.closest("[data-open-featured-content]");
    if (featuredContentButton) {
      openContent(getRecommendedContent().id);
    }

    const saveFeaturedContentButton = event.target.closest("[data-save-featured-content]");
    if (saveFeaturedContentButton) {
      toggleSaveContent(getRecommendedContent().id);
    }

    const saveContentButton = event.target.closest("[data-save-content]");
    if (saveContentButton) {
      toggleSaveContent(saveContentButton.dataset.saveContent);
    }

    const completeContentButton = event.target.closest("[data-complete-content]");
    if (completeContentButton) {
      completeContent(completeContentButton.dataset.completeContent);
    }

    const contentDrillButton = event.target.closest("[data-start-content-drill]");
    if (contentDrillButton) {
      startContentDrill(contentDrillButton.dataset.startContentDrill);
    }

    const categoryButton = event.target.closest("[data-content-category]");
    if (categoryButton) {
      state.contentCategory = categoryButton.dataset.contentCategory;
      saveState();
      renderContentHub();
    }

    const focusButton = event.target.closest("[data-focus]");
    if (focusButton) {
      currentFocus = focusButton.dataset.focus;
      renderAnalytics();
    }

    const sectionButton = event.target.closest("[data-section-tab]");
    if (sectionButton) {
      renderReviewRows(sectionButton.dataset.sectionTab);
    }

    const timerPreset = event.target.closest("[data-minutes]");
    if (timerPreset) {
      timerDurationSeconds = Number(timerPreset.dataset.minutes) * 60;
      currentTimerSeconds = timerDurationSeconds;
      $$(".timer-presets [data-minutes]").forEach((button) => {
        button.classList.toggle("active", button === timerPreset);
      });
      resetTimer();
    }

    const automationToggle = event.target.closest("[data-toggle-automation]");
    if (automationToggle) {
      const id = automationToggle.dataset.toggleAutomation;
      state.automations[id] = !state.automations[id];
      saveState();
      renderAutomations();
      showToast(`Automation ${state.automations[id] ? "enabled" : "paused"}.`);
    }

    const automationRun = event.target.closest("[data-run-automation]");
    if (automationRun) {
      const automation = automations.find((item) => item.id === automationRun.dataset.runAutomation);
      addActivity(`Automation ran: ${automation.title}.`);
      showToast("Automation ran and updated activity.");
    }

    const scrollButton = event.target.closest("[data-scroll-target]");
    if (scrollButton) {
      const target = $(`#${scrollButton.dataset.scrollTarget}`);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.href = `${scrollButton.dataset.scrollTarget}.html`;
      }
    }

    const pageButton = event.target.closest("[data-page-target]");
    if (pageButton) {
      window.location.href = pageButton.dataset.pageTarget;
    }

    const startDrill = event.target.closest("[data-start-drill]");
    if (startDrill) {
      buildRecommendedDrill();
    }

    const testChoice = event.target.closest("[data-test-choice]");
    if (testChoice && fullTest.questions.length && !fullTest.submitted) {
      const question = fullTest.questions[fullTest.index];
      fullTest.answers[question.id] = testChoice.dataset.testChoice;
      renderFullTest();
    }

    if (event.target.closest("[data-test-prev]")) {
      fullTest.index = Math.max(0, fullTest.index - 1);
      renderFullTest();
    }

    if (event.target.closest("[data-test-next]")) {
      const question = fullTest.questions[fullTest.index];
      if (question && !fullTest.answers[question.id]) {
        showToast("Answer this question before moving on.");
        return;
      }
      if (fullTest.index >= fullTest.questions.length - 1) {
        finishFullTest();
      } else {
        fullTest.index += 1;
        renderFullTest();
      }
    }

    const accessibilityButton = event.target.closest("[data-toggle-accessibility]");
    if (accessibilityButton) {
      const key = accessibilityButton.dataset.toggleAccessibility;
      state.accessibility[key] = !state.accessibility[key];
      saveState();
      applyAccessibility();
      showToast("Personal reading settings updated.");
    }
  });

  on("#sectionFilter", "change", renderQuestionBank);
  on("#skillFilter", "change", renderQuestionBank);
  on("#statusFilter", "change", renderQuestionBank);
  on("#contentSearch", "input", renderContentHub);
  on("#contentTopicFilter", "change", renderContentHub);
  on("#contentDifficultyFilter", "change", renderContentHub);
  on("#contentStatusFilter", "change", renderContentHub);

  on("#buildFilteredDrill", "click", () => {
    const pool = getFilteredQuestions();
    const skill = $("#skillFilter")?.value === "all" ? "filtered set" : $("#skillFilter")?.value;
    currentFocus = skill === "filtered set" ? getWeakSkills()[0] : skill;
    buildDrill(pool, `Filtered drill: ${skill}`);
    $("#drills")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  on("#resetProgress", "click", () => {
    if (!confirm("Reset local progress for this dashboard?")) return;
    state = freshDefaultState();
    saveState();
    currentDrill = [];
    selectedChoice = "";
    renderAll();
    renderCurrentQuestion();
    showToast("Local progress reset.");
  });

  on("#submitAnswer", "click", submitCurrentAnswer);

  on("#nextQuestion", "click", () => {
    if (!submittedCurrentQuestion) {
      showToast("Submit this answer before moving on.");
      return;
    }
    if (currentQuestionIndex < currentDrill.length - 1) {
      currentQuestionIndex += 1;
      selectedChoice = "";
      renderCurrentQuestion();
    }
  });

  on("#startTimer", "click", startTimer);
  on("#pauseTimer", "click", pauseTimer);
  on("#resetTimer", "click", resetTimer);
  on("#startFullTest", "click", startFullTest);
  on("#resetFullTest", "click", resetFullTest);
  on("#saveWriting", "click", saveWritingPractice);

  on("#scoreLogForm", "submit", (event) => {
    event.preventDefault();
    const input = $("#scoreLogInput");
    const value = input.value.trim();
    if (!value) return;
    addActivity(`Logged practice: ${value}`);
    input.value = "";
    showToast("Practice result logged.");
  });

  on("#journalForm", "submit", (event) => {
    event.preventDefault();
    const question = questionBank.find((item) => item.id === $("#journalQuestion").value);
    const takeaway = $("#journalTakeaway").value.trim();
    if (!question || !takeaway) {
      showToast("Add a takeaway before saving.");
      return;
    }
    const nextReview = todayStamp(1);
    state.journalEntries.unshift({
      id: `journal-${Date.now()}`,
      questionId: question.id,
      source: question.source,
      skill: question.skill,
      reason: $("#missReason").value,
      takeaway,
      createdAt: new Date().toISOString(),
      nextReview,
    });
    const reviewItem = state.reviewItems.find((item) => item.questionId === question.id);
    if (reviewItem) {
      reviewItem.nextReview = nextReview;
      reviewItem.mastered = false;
    } else {
      state.reviewItems.push({
        questionId: question.id,
        nextReview,
        stage: 0,
        mastered: false,
      });
    }
    $("#journalTakeaway").value = "";
    saveState();
    addActivity(`Saved journal note for ${question.source}.`);
    renderJournal();
    renderReviewQueue();
  });

  on("#supportForm", "submit", (event) => {
    event.preventDefault();
    const textarea = $("#supportQuestion");
    const text = textarea.value.trim();
    if (!text) return;
    state.supportQueue.unshift({
      text,
      date: new Date().toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }),
    });
    state.supportQueue = state.supportQueue.slice(0, 8);
    textarea.value = "";
    saveState();
    addActivity("Saved a support ask.");
    renderSupportQueue();
    showToast("Ask saved.");
  });

  on("#generatePlan", "click", () => {
    generateStudyPlan(true);
    renderPlan();
    showToast("Weekly plan generated.");
  });

  on("#printPlan", "click", () => {
    window.print();
  });

  on("#downloadIcs", "click", downloadCalendarFile);
  on("#downloadBackup", "click", downloadBackup);

  on("#restoreBackup", "change", (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      try {
        const backup = JSON.parse(reader.result);
        if (!backup.state) throw new Error("Missing state");
        state = { ...freshDefaultState(), ...backup.state };
        saveState();
        renderAll();
        renderCurrentQuestion();
        showToast("Backup restored.");
      } catch {
        showToast("That backup file could not be restored.");
      }
    });
    reader.readAsText(file);
  });
}

function init() {
  setActiveNavigation();
  renderReviewRows("section1");
  renderExplanations();
  renderClasses();
  renderPlugins();
  renderOfficialExplanations();
  renderTimer();
  renderFullTest();
  renderCurrentQuestion();
  renderAll();
  hydratePendingDrill();
  bindEvents();
}

init();
