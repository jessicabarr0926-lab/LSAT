const STORE_KEY = "jessipreps-study-state-v2";
const LEGACY_STORE_KEY = "lexiprep-study-state-v2";

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

contentLibrary.push(
  {
    id: "master-manual-140-175",
    title: "140 to 175 Master Manual",
    topic: "strategy",
    topicLabel: "Strategy",
    category: "Start here",
    difficulty: "Beginner",
    minutes: 18,
    type: "Master plan",
    skill: "Pacing",
    page: "lesson-player.html",
    description: "Turn the score jump into phases: foundation repair, controlled timing, section consistency, full-test integration, and taper.",
  },
  {
    id: "loophole-gap-hunting",
    title: "Loophole Gap Hunting",
    topic: "lr",
    topicLabel: "Logical Reasoning",
    category: "Core concepts",
    difficulty: "Intermediate",
    minutes: 15,
    type: "Reasoning system",
    skill: "Flaws",
    page: "lesson-player.html",
    description: "Read every argument by asking where the evidence stops proving the conclusion before answer choices take over.",
  },
  {
    id: "question-families-playbook",
    title: "Question Families Playbook",
    topic: "lr",
    topicLabel: "Logical Reasoning",
    category: "Question types",
    difficulty: "Intermediate",
    minutes: 16,
    type: "Playbook",
    skill: "Techniques, Roles, and Principles",
    page: "lesson-player.html",
    description: "Group LR into prove, help/hurt, assumption, flaw/method, resolve, and structure families so skills compound.",
  },
  {
    id: "causal-attack-checklist",
    title: "Causal Attack Checklist",
    topic: "lr",
    topicLabel: "Logical Reasoning",
    category: "Core concepts",
    difficulty: "Intermediate",
    minutes: 13,
    type: "Checklist",
    skill: "Flaws",
    page: "lesson-player.html",
    description: "Test causal claims for reverse causation, third factors, timing, measurement, samples, and coincidence.",
  },
  {
    id: "rc-classification-instinct",
    title: "RC Classification Instinct",
    topic: "rc",
    topicLabel: "Reading Comprehension",
    category: "Core concepts",
    difficulty: "Intermediate",
    minutes: 14,
    type: "Map drill",
    skill: "Reading Structure",
    page: "lesson-player.html",
    description: "Classify passages as old/new view, theory/critique, phenomenon/explanation, debate, or descriptive-to-evaluative shifts.",
  },
  {
    id: "error-log-system",
    title: "Error Log That Actually Raises Your Score",
    topic: "strategy",
    topicLabel: "Strategy",
    category: "Strategy",
    difficulty: "Beginner",
    minutes: 11,
    type: "Review system",
    skill: "Pacing",
    page: "lesson-player.html",
    description: "Convert every miss into a cause code, loophole, fix drill, retest date, and reusable rule.",
  },
  {
    id: "accuracy-before-speed",
    title: "Accuracy Before Speed",
    topic: "timing",
    topicLabel: "Timing",
    category: "Timed test training",
    difficulty: "Beginner",
    minutes: 10,
    type: "Timing rule",
    skill: "Pacing",
    page: "lesson-player.html",
    description: "Stop treating timing as the disease. Build untimed control first, then add pressure in measured layers.",
  },
);

contentLibrary.forEach((lesson) => {
  lesson.page = "lesson-player.html";
});

const officialPrepTests = [
  158, 157, 155, 154, 153, 152, 151, 150, 149, 148, 147, 146, 145, 144, 143, 142, 141, 140, 139, 138, 137, 136, 135, 134, 133, 132, 131,
  130, 129, 127, 126, 125, 124, 123, 122, 121, 120, 119, 118, 117, 116, 115, 114, 113, 112, 111, 110, 109, 108, 107, 106, 105, 104,
  103, 102, 101,
];

const techniquePracticeQuestions = [
  {
    id: "technique-analogy-1",
    source: "Technique Drill 1",
    section: "Logical Reasoning",
    skill: "Flaws",
    difficulty: 2,
    answer: "C",
    prompt:
      "A city planner argues that the city should test a smaller bus route before expanding service, just as restaurants test a new dish before adding it to the permanent menu. Which best describes the technique?",
    choices: {
      A: "It rejects a proposal by attacking the person who made it.",
      B: "It treats a necessary condition as sufficient.",
      C: "It supports a recommendation by drawing an analogy to a familiar decision process.",
      D: "It explains a surprising result by identifying a hidden cause.",
      E: "It concludes that a plan failed because it was not attempted.",
    },
    explanation:
      "The argument says the city case is like the restaurant case. The move is an analogy used to support the recommendation.",
  },
  {
    id: "technique-alternatives-1",
    source: "Technique Drill 2",
    section: "Logical Reasoning",
    skill: "Flaws",
    difficulty: 3,
    answer: "B",
    prompt:
      "A researcher argues that a new tutoring program caused the score increase because class size, study time, and prior scores were the same across groups. Which best describes the technique?",
    choices: {
      A: "It infers a broad rule from one unusually strong example.",
      B: "It strengthens a causal claim by ruling out several alternate explanations.",
      C: "It attacks the reliability of the students instead of the data.",
      D: "It shows that two claims cannot both be true.",
      E: "It defines a key term in two different ways.",
    },
    explanation:
      "The argument protects the causal conclusion by eliminating competing causes.",
  },
  {
    id: "technique-counterexample-1",
    source: "Technique Drill 3",
    section: "Logical Reasoning",
    skill: "Flaws",
    difficulty: 3,
    answer: "D",
    prompt:
      "A columnist says the claim that all effective study plans require four-hour blocks is false, because one student improved using only 45-minute blocks. Which best describes the technique?",
    choices: {
      A: "It gives a definition of effectiveness.",
      B: "It explains why a plan was difficult to follow.",
      C: "It assumes that every student has the same schedule.",
      D: "It uses a counterexample to challenge a universal claim.",
      E: "It draws an analogy between two unrelated habits.",
    },
    explanation:
      "One case can disprove an all/every/never claim. The technique is a counterexample.",
  },
  {
    id: "technique-principle-1",
    source: "Technique Drill 4",
    section: "Logical Reasoning",
    skill: "Flaws",
    difficulty: 4,
    answer: "A",
    prompt:
      "An advocate argues that the clinic should extend evening hours because public services should be available when working people can use them. Which best describes the technique?",
    choices: {
      A: "It applies a general principle to support a specific policy.",
      B: "It undermines an expert by questioning that expert's motives.",
      C: "It resolves a contradiction by rejecting both sides.",
      D: "It predicts the future from a repeated trend.",
      E: "It weakens a conclusion by introducing a competing cause.",
    },
    explanation:
      "The broad rule about public services is used to justify the specific clinic policy.",
  },
  {
    id: "technique-source-1",
    source: "Technique Drill 5",
    section: "Logical Reasoning",
    skill: "Flaws",
    difficulty: 3,
    answer: "E",
    prompt:
      "A speaker rejects a budget report because the committee chair who presented it has supported unpopular proposals before. Which best describes the technique?",
    choices: {
      A: "It explains a phenomenon by comparing two populations.",
      B: "It proves a conclusion by eliminating all other possibilities.",
      C: "It makes a prediction from a long-term pattern.",
      D: "It concedes a minor point before defending the main claim.",
      E: "It attacks the source instead of addressing the report's reasoning.",
    },
    explanation:
      "The speaker targets the person/source, not the substance of the report.",
  },
  {
    id: "technique-concession-1",
    source: "Technique Drill 6",
    section: "Logical Reasoning",
    skill: "Flaws",
    difficulty: 3,
    answer: "B",
    prompt:
      "A dean admits that online office hours are less personal than in-person meetings, but argues that they should continue because they allow many more students to get help. Which best describes the technique?",
    choices: {
      A: "It rejects a proposal by attacking the motives of its supporters.",
      B: "It concedes a drawback while arguing that a benefit outweighs it.",
      C: "It proves a general rule by citing a single unusual case.",
      D: "It shows that two statistical claims are mathematically impossible.",
      E: "It treats a condition that is required as though it guarantees success.",
    },
    explanation:
      "The argument acknowledges a weakness, then says the competing benefit is more important.",
  },
  {
    id: "technique-phenomenon-1",
    source: "Technique Drill 7",
    section: "Logical Reasoning",
    skill: "Flaws",
    difficulty: 2,
    answer: "D",
    prompt:
      "A school explains that library visits rose after exams not because students suddenly liked the library more, but because teachers required research conferences that week. Which best describes the technique?",
    choices: {
      A: "It draws a comparison between two unrelated institutions.",
      B: "It concludes that a policy should be rejected because it is unpopular.",
      C: "It restates the phenomenon instead of explaining it.",
      D: "It explains a surprising pattern by identifying a specific cause.",
      E: "It applies a moral principle to a legal dispute.",
    },
    explanation:
      "The argument explains why the rise occurred by naming a cause for the observed pattern.",
  },
  {
    id: "technique-distinction-1",
    source: "Technique Drill 8",
    section: "Logical Reasoning",
    skill: "Flaws",
    difficulty: 4,
    answer: "A",
    prompt:
      "A critic argues that the proposal is not unfair merely because it affects people differently; unfairness requires unjustified unequal treatment, not every unequal outcome. Which best describes the technique?",
    choices: {
      A: "It draws a distinction between two ideas that the opposing view treats as the same.",
      B: "It supports a prediction by citing a repeated trend.",
      C: "It rejects evidence because the source is biased.",
      D: "It uses an analogy to a familiar everyday choice.",
      E: "It weakens a causal claim by offering an alternate cause.",
    },
    explanation:
      "The argument separates unequal effect from unfair treatment and uses that distinction to challenge the opposing view.",
  },
  {
    id: "technique-definition-1",
    source: "Technique Drill 9",
    section: "Logical Reasoning",
    skill: "Flaws",
    difficulty: 3,
    answer: "C",
    prompt:
      "A policy analyst argues that the program counts as successful because success should mean serving the intended group reliably, and the program did that. Which best describes the technique?",
    choices: {
      A: "It attacks an opponent's character instead of the opponent's argument.",
      B: "It resolves a paradox by denying that both facts are true.",
      C: "It defines a key standard and then applies that standard to the case.",
      D: "It proves a conditional claim by reversing the conditional relationship.",
      E: "It rejects a universal claim with one counterexample.",
    },
    explanation:
      "The argument states what success should mean, then uses that definition to classify the program.",
  },
  {
    id: "technique-comparison-1",
    source: "Technique Drill 10",
    section: "Logical Reasoning",
    skill: "Flaws",
    difficulty: 4,
    answer: "E",
    prompt:
      "A report argues that the pilot program should be expanded because a similar program worked in a neighboring county with the same budget, population size, and staffing model. Which best describes the technique?",
    choices: {
      A: "It rejects a statistical pattern because the sample is too small.",
      B: "It proves that a plan is necessary by showing that it is sufficient.",
      C: "It explains why two claims cannot both be accurate.",
      D: "It concedes that a plan is flawed and therefore rejects it.",
      E: "It supports a recommendation by comparing the case to a similar successful case.",
    },
    explanation:
      "The argument relies on a comparison to a similar case where the relevant plan worked.",
  },
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
      source: `JessiPreps Original Q${number}`,
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
    id: "lr-traps",
    title: "Logical Reasoning Trap Answers",
    time: "Thursday, 7:00 PM",
    match: "Flaws + assumptions",
    recording: "Trap answer replay",
    mood: "stuck",
    status: "Next up",
    duration: "18 min",
    focus: "Basic theory and answer translation",
    skill: "Flaws",
    preview: "Trap answers feel familiar because they borrow words. Your job is to match the move, not the topic.",
  },
  {
    id: "rc-structure",
    title: "Reading Comp Structure Lab",
    time: "Saturday, 11:00 AM",
    match: "Passage mapping",
    recording: "RC structure replay",
    mood: "drill",
    status: "Replay",
    duration: "24 min",
    focus: "Strategy lab plus passage map drill",
    skill: "Reading Structure",
    preview: "Listen for paragraph jobs: view, objection, response, and author attitude.",
  },
  {
    id: "timed-review",
    title: "Timed Section Review",
    time: "Tuesday, 6:30 PM",
    match: "Pacing",
    recording: "Pacing checkpoint replay",
    mood: "tired",
    status: "Short recap",
    duration: "10 min",
    focus: "Low-energy timing reset",
    skill: "Pacing",
    preview: "When you are tired, protect the section with a 20-second task check and a clean skip.",
  },
  {
    id: "assumption-lab",
    title: "Assumption Bridge Lab",
    time: "Friday, 5:30 PM",
    match: "Necessary + sufficient assumptions",
    recording: "Bridge method replay",
    mood: "drill",
    status: "Replay",
    duration: "21 min",
    focus: "Prediction, negation test, and three-question gate",
    skill: "Assumptions",
    preview: "Find the evidence, say the missing bridge, then test whether the answer is required.",
  },
];

const roadmapPhases = [
  {
    id: "foundations",
    title: "Foundations",
    range: "140 -> 150",
    focus: "Untimed accuracy before speed.",
    tasks: ["Conclusion vs. evidence", "Assumption spotting", "Conditional arrows", "RC paragraph jobs"],
    action: "content.html",
    button: "Open foundation lessons",
  },
  {
    id: "controlled-timing",
    title: "Controlled timing",
    range: "150 -> 160",
    focus: "Short timed sets with blind review.",
    tasks: ["6-question LR sets", "17-minute checkpoints", "Confidence marking", "Miss cause tags"],
    action: "drills.html",
    button: "Start controlled drill",
  },
  {
    id: "section-consistency",
    title: "Section consistency",
    range: "160 -> 168",
    focus: "Turn skills into repeatable section scores.",
    tasks: ["35-minute LR sections", "RC passage map timing", "Pacing checkpoints", "Retest missed families"],
    action: "tests.html",
    button: "Run timed section",
  },
  {
    id: "full-pt",
    title: "Full PrepTests",
    range: "168 -> 172",
    focus: "Use LawHub-style four-section stamina.",
    tasks: ["Two LR scored sections", "One RC scored section", "One variable section", "Deep review after test"],
    action: "tests.html",
    button: "Start full test",
  },
  {
    id: "variance-control",
    title: "Variance control",
    range: "172 -> 175",
    focus: "Shrink lucky guesses, panic misses, and late-section drops.",
    tasks: ["Near-miss review", "High-confidence misses", "Sleep and recovery", "Final taper"],
    action: "analytics.html",
    button: "Open analytics",
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
    id: "computer-use",
    title: "Computer Use",
    use: "Walk through the app in a real browser, check screenshots, and validate the study flow visually.",
    bestFor: ["Browser testing", "UI walkthroughs", "Screenshot review"],
    action: "Run visual check",
  },
  {
    id: "google-calendar",
    title: "Google Calendar",
    use: "Put live classes, timed sections, and review blocks onto a real weekly calendar.",
    bestFor: ["Class reminders", "Study blocks", "Weekly planning"],
    action: "Export calendar",
  },
  {
    id: "google-drive",
    title: "Google Drive / Docs",
    use: "Keep a wrong-answer journal, lesson notes, and instructor questions in organized study files.",
    bestFor: ["Wrong-answer journal", "Study notes", "Exportable plans"],
    action: "Open journal",
  },
  {
    id: "google-sheets",
    title: "Google Sheets",
    use: "Track raw scores, section timing, question types, and rolling accuracy over time.",
    bestFor: ["Score tracker", "Charts", "Weak-area tables"],
    action: "Open analytics",
  },
  {
    id: "gmail",
    title: "Gmail",
    use: "Draft questions to tutors, class follow-ups, or accountability check-ins.",
    bestFor: ["Tutor emails", "Support messages", "Weekly recaps"],
    action: "Open support",
  },
  {
    id: "canva",
    title: "Canva",
    use: "Make printable study trackers, flashcards, and visual cheat sheets.",
    bestFor: ["Flashcards", "Study posters", "Printable plans"],
    action: "Make worksheet",
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
  classMood: "all",
  lessonMastery: {},
  writingDrafts: [],
  targetScore: 170,
  weeklyHours: 8,
  dashboardTestDate: "",
  accessibility: {
    dyslexia: true,
    focus: true,
    reducedMotion: false,
    darkMode: false,
    highContrast: false,
  },
  activity: ["PrepTest 130 review plan loaded."],
  automations: {
    "daily-review": true,
    "missed-sweep": true,
    "timed-section": false,
    "ask-followup": false,
  },
  pluginConnections: {},
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
    const saved = localStorage.getItem(STORE_KEY) || localStorage.getItem(LEGACY_STORE_KEY);
    if (!saved) return freshDefaultState();
    const parsed = { ...freshDefaultState(), ...JSON.parse(saved) };
    localStorage.setItem(STORE_KEY, JSON.stringify(parsed));
    return parsed;
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
  renderDashboardCommandCenter();
  renderStudyCheckIn();
  renderDashboardDrillPreview();
  renderDashboardCharts();
  renderRoadmap();
  hydrateDashboardSettings();
  renderContinueLearning();
}

function renderDashboardCommandCenter() {
  renderDashboardRatings();
  renderDashboardSectionHistory();
  renderDashboardTodayFlow();
}

function renderDashboardRatings() {
  if (!has("#dashboardRatings")) return;
  const ratings = [
    {
      label: "LR",
      score: Math.round((getSkillScore("Flaws") + getSkillScore("Assumptions") + getSkillScore("Conditional Logic")) / 3),
      target: "90+",
      action: "content.html?skill=lr",
    },
    {
      label: "RC",
      score: getSkillScore("Reading Structure"),
      target: "88+",
      action: "content.html?skill=rc",
    },
  ];
  const streak = Math.min(8, Math.max(0, state.activity.length));
  $("#dashboardRatings").innerHTML = `
    ${ratings
      .map(
        (rating) => `
          <button class="rating-gauge" type="button" data-page-target="${escapeHtml(rating.action)}" style="--rating: ${rating.score}%">
            <span>${escapeHtml(rating.label)}</span>
            <strong>${rating.score}</strong>
            <small>Goal ${escapeHtml(rating.target)}</small>
          </button>
        `
      )
      .join("")}
    <button class="streak-pill" type="button" data-page-target="plan.html">
      <strong>${streak}</strong>
      <span>recent study actions</span>
    </button>
  `;
}

function renderDashboardSectionHistory() {
  if (!has("#dashboardSectionHistory")) return;
  const rows = [
    { date: "Today", test: "PT130", type: "LR", score: sectionData.section1.score, accuracy: "56%", action: "review.html" },
    { date: "Next", test: "Targeted", type: getWeakSkills()[0], score: "6 Q", accuracy: "90% gate", action: "drills.html" },
    { date: "Due", test: "RC map", type: "RC", score: "1 passage", accuracy: "structure", action: "content.html" },
  ];
  $("#dashboardSectionHistory").innerHTML = `
    <table class="mini-history-table">
      <thead><tr><th>Date</th><th>Test</th><th>Type</th><th>Score</th><th>Action</th></tr></thead>
      <tbody>
        ${rows
          .map(
            (row) => `
              <tr>
                <td>${escapeHtml(row.date)}</td>
                <td>${escapeHtml(row.test)}</td>
                <td>${escapeHtml(row.type)}</td>
                <td><strong>${escapeHtml(row.score)}</strong><span>${escapeHtml(row.accuracy)}</span></td>
                <td><button class="mini-button" type="button" data-page-target="${escapeHtml(row.action)}">Open</button></td>
              </tr>
            `
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function renderDashboardTodayFlow() {
  if (!has("#dashboardTodayFlow")) return;
  const weakSkill = getWeakSkills()[0];
  const items = [
    { time: "Warm-up", title: `Watch ${weakSkill} micro-lesson`, meta: "8-12 min. Read aloud on.", action: "content.html" },
    { time: "Main set", title: `Do a ${weakSkill} drill`, meta: "6 questions. Confidence before answer check.", action: "drills.html" },
    { time: "Review", title: "Blind review every miss", meta: "Write the trap in plain English.", action: "journal.html" },
  ];
  $("#dashboardTodayFlow").innerHTML = `
    <ol class="today-checklist">
      ${items
        .map(
          (item, index) => `
            <li>
              <button class="today-step" type="button" data-page-target="${escapeHtml(item.action)}">
                <span>${index + 1}</span>
                <div><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.time)} · ${escapeHtml(item.meta)}</small></div>
              </button>
            </li>
          `
        )
        .join("")}
    </ol>
  `;
}

function renderStudyCheckIn() {
  if (!has("#studyCheckIn")) return;
  const weakSkill = getWeakSkills()[0];
  const lesson = contentLibrary.find((item) => item.skill === weakSkill) || getRecommendedContent();
  const pendingReviews = state.reviewItems.filter((item) => !item.mastered).length;
  const answered = state.drillStats.answered || 0;
  const accuracy = answered ? Math.round((state.drillStats.correct / answered) * 100) : 0;
  const completedToday = state.activity.slice(0, 3);
  const blockType = pendingReviews >= 4 ? "Blind review reset" : accuracy && accuracy < 80 ? "Accuracy repair" : "New points block";
  const nextStep = pendingReviews >= 4 ? "Clear 4 journal items before new questions." : `Run a ${weakSkill} lesson-to-drill block.`;
  $("#studyCheckIn").innerHTML = `
    <article class="checkin-card primary-checkin">
      <span class="metric-label">Next block</span>
      <strong>${escapeHtml(blockType)}</strong>
      <p>${escapeHtml(nextStep)}</p>
      <div class="checkin-actions">
        <button class="button primary" type="button" data-open-content="${escapeHtml(lesson.id)}">Open lesson</button>
        <button class="button secondary dark" type="button" data-start-content-drill="${escapeHtml(weakSkill)}">Start drill</button>
        <button class="button secondary dark" type="button" data-log-study-block="${escapeHtml(weakSkill)}">Log done</button>
      </div>
    </article>
    <article class="checkin-card">
      <span class="metric-label">Weakest skill</span>
      <strong>${escapeHtml(weakSkill)}</strong>
      <p>Current local mastery: ${getSkillScore(weakSkill)}%. Your goal is 90% before raising difficulty.</p>
    </article>
    <article class="checkin-card">
      <span class="metric-label">Review queue</span>
      <strong>${pendingReviews}</strong>
      <p>${pendingReviews ? "Review these before a full timed section." : "Queue clear. Add misses from the next drill."}</p>
      <button class="mini-button" type="button" data-page-target="journal.html">Open journal</button>
    </article>
    <article class="checkin-card">
      <span class="metric-label">Latest progress</span>
      <strong>${state.completedContent.length}</strong>
      <p>Completed lessons. Recent work: ${escapeHtml(completedToday.join(" | ") || "Start with today's block.")}</p>
    </article>
  `;
}

function getCurrentRoadmapPhase(readiness) {
  if (readiness < 66) return roadmapPhases[0];
  if (readiness < 74) return roadmapPhases[1];
  if (readiness < 82) return roadmapPhases[2];
  if (readiness < 88) return roadmapPhases[3];
  return roadmapPhases[4];
}

function renderRoadmap() {
  if (!has("#roadmapPhases")) return;
  const answered = state.drillStats.answered;
  const correct = state.drillStats.correct;
  const accuracy = answered ? Math.round((correct / answered) * 100) : 0;
  const completed = state.completedContent.length;
  const readiness = Math.min(92, 58 + completed * 4 + Math.min(answered, 16) + (answered ? Math.round((correct / answered) * 12) : 0));
  const current = getCurrentRoadmapPhase(readiness);
  if (has("#roadmapStatus")) {
    $("#roadmapStatus").innerHTML = `
      <div><span class="metric-label">Current phase</span><strong>${escapeHtml(current.title)}</strong></div>
      <div><span class="metric-label">Local accuracy</span><strong>${accuracy || "Start"}${accuracy ? "%" : ""}</strong></div>
      <div><span class="metric-label">Next rule</span><strong>${escapeHtml(current.focus)}</strong></div>
    `;
  }
  $("#roadmapPhases").innerHTML = roadmapPhases
    .map(
      (phase, index) => `
        <article class="roadmap-card ${phase.id === current.id ? "active" : ""}">
          <span class="roadmap-number">${index + 1}</span>
          <h3>${escapeHtml(phase.title)}</h3>
          <p><strong>${escapeHtml(phase.range)}:</strong> ${escapeHtml(phase.focus)}</p>
          <ul>${phase.tasks.map((task) => `<li>${escapeHtml(task)}</li>`).join("")}</ul>
          <button class="mini-button" type="button" data-roadmap-action="${escapeHtml(phase.action)}">${escapeHtml(phase.button)} -></button>
        </article>
      `
    )
    .join("");
}

function renderDashboardDrillPreview() {
  if (!has("#dashboardDrillPreview")) return;
  const weakSkill = getWeakSkills()[0];
  const pool = questionBank.filter((question) => question.skill === weakSkill || getQuestionStatus(question) === "missed").slice(0, 6);
  const localScore = getSkillScore(weakSkill);
  const masteryPercent = Math.min(90, Math.max(24, localScore));
  $("#dashboardDrillPreview").innerHTML = `
    <h3>${escapeHtml(weakSkill)} drill</h3>
    <p>${pool.length} questions queued from missed patterns and weakest local skill data.</p>
    <div class="mastery-meter">
      <div class="mastery-ring" style="--mastery: ${masteryPercent}%">${masteryPercent}%</div>
      <p>Gate target: score 90% or higher before moving to the next level.</p>
    </div>
    <div class="lesson-meta">
      <span class="tag">Difficulty ${Math.max(...pool.map((question) => question.difficulty)) || 2}</span>
      <span class="tag">90% mastery gate</span>
      <span class="tag">Video explanations</span>
    </div>
    <button class="button primary" type="button" data-start-drill>Start this drill</button>
  `;
}

function renderDashboardCharts() {
  if (has("#scoreTrendChart")) {
    const scores = [148, 151, 149, 154, Math.max(154, Math.min(180, Number(state.targetScore || 170) - 8))];
    const points = scores.map((score, index) => {
      const x = 34 + index * 62;
      const y = 150 - (score - 140) * 4.4;
      return { score, x, y, label: `PT ${index + 126}` };
    });
    $("#scoreTrendChart").innerHTML = `
      <svg viewBox="0 0 320 190" role="img" aria-label="Scaled score trend from 148 to ${scores.at(-1)}">
        <path d="M30 154H300" stroke="#eadde6" stroke-width="2"/>
        <path d="M30 110H300" stroke="#eadde6" stroke-width="2"/>
        <path d="M30 66H300" stroke="#eadde6" stroke-width="2"/>
        <polyline points="${points.map((point) => `${point.x},${point.y}`).join(" ")}" fill="none" stroke="#8f5f74" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        ${points
          .map(
            (point) => `
              <circle cx="${point.x}" cy="${point.y}" r="6" fill="#d96b7b"/>
              <text class="chart-label" x="${point.x}" y="${point.y - 12}" text-anchor="middle">${point.score}</text>
              <text class="chart-label" x="${point.x}" y="178" text-anchor="middle">${point.label}</text>
            `
          )
          .join("")}
      </svg>`;
  }
  if (has("#dashboardSkillBars")) {
    $("#dashboardSkillBars").innerHTML = Object.keys(baseSkillScores)
      .map((skill) => {
        const score = getSkillScore(skill);
        return `<div class="skill-row"><header><span>${escapeHtml(skill)}</span><span>${score}%</span></header><div class="skill-bar"><span style="width: ${score}%"></span></div></div>`;
      })
      .join("");
  }
  renderBlindReviewSnapshot();
  renderFocusSignals();
}

function renderBlindReviewSnapshot() {
  if (!has("#blindReviewSnapshot")) return;
  const pending = state.reviewItems.filter((item) => !item.mastered).length;
  const missed = questionBank.filter((question) => getQuestionStatus(question) === "missed").length;
  const nearMisses = Math.max(3, Math.round(missed * 0.6));
  $("#blindReviewSnapshot").innerHTML = `
    <div><strong>${pending}</strong><span>pending blind-review items</span></div>
    <div><strong>${nearMisses}</strong><span>near misses to re-check before explanations</span></div>
    <button class="button primary" type="button" data-page-target="journal.html">Open review queue</button>
  `;
}

function renderFocusSignals() {
  if (!has("#focusSignals")) return;
  const answered = state.drillStats.answered || 0;
  const accuracy = answered ? Math.round((state.drillStats.correct / answered) * 100) : 64;
  const fatigueRisk = answered > 18 && accuracy < 75 ? "High" : answered > 8 ? "Moderate" : "Low";
  $("#focusSignals").innerHTML = `
    <div class="focus-signal"><strong>${accuracy}%</strong><span>current drill accuracy</span></div>
    <div class="focus-signal"><strong>${fatigueRisk}</strong><span>fatigue risk after long sessions</span></div>
    <div class="focus-signal"><strong>Track</strong><span>confidence before checking answers: high-confidence misses become priority lessons.</span></div>
  `;
}

function quickFindItems(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];
  const lessonMatches = contentLibrary
    .filter((item) => `${item.title} ${item.skill} ${item.topicLabel} ${item.description}`.toLowerCase().includes(normalized))
    .slice(0, 3)
    .map((item) => ({ title: item.title, meta: `${item.skill} lesson`, action: `content.html?lesson=${item.id}` }));
  const questionMatches = questionBank
    .filter((item) => `${item.source} ${item.section} ${item.skill} ${item.prompt}`.toLowerCase().includes(normalized))
    .slice(0, 3)
    .map((item) => ({ title: item.source, meta: `${item.skill} practice`, action: "question-bank.html" }));
  return [...lessonMatches, ...questionMatches].slice(0, 5);
}

function renderQuickFind() {
  if (!has("#quickFindResults")) return;
  const query = $("#quickFindInput")?.value || "";
  const matches = quickFindItems(query);
  $("#quickFindResults").innerHTML = matches.length
    ? matches
        .map(
          (item) => `
            <a class="quick-find-result" href="${escapeHtml(item.action)}">
              <span>${escapeHtml(item.title)}</span>
              <strong>${escapeHtml(item.meta)}</strong>
            </a>
          `
        )
        .join("")
    : query.trim()
      ? `<p>No exact match yet. Save it as an ask and JessiPreps will keep it in your support queue.</p>`
      : "";
}

function hydrateDashboardSettings() {
  if (has("#targetScoreInput")) $("#targetScoreInput").value = state.targetScore || 170;
  if (has("#dashboardWeeklyHours")) $("#dashboardWeeklyHours").value = String(state.weeklyHours || 8);
  if (has("#dashboardTestDate")) $("#dashboardTestDate").value = state.dashboardTestDate || state.testDate || "";
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
  renderStartPath();
  const filtered = getFilteredContent();
  const completed = state.completedContent.length;
  const saved = state.savedContent.length;
  const watched = state.watchedContent.length;
  const minutes = contentLibrary
    .filter((item) => state.completedContent.includes(item.id))
    .reduce((sum, item) => sum + item.minutes, 0);
  $("#contentSummary").innerHTML = `
    <button class="summary-card" type="button" data-content-status-shortcut="completed">
      <span class="metric-label">Completed</span><strong>${completed ? `${completed}/${contentLibrary.length}` : "Start first"}</strong>
      <div class="lesson-progress" aria-hidden="true"><span style="width: ${(completed / contentLibrary.length) * 100}%"></span></div>
    </button>
    <button class="summary-card" type="button" data-content-status-shortcut="saved">
      <span class="metric-label">Saved</span><strong>${saved}</strong><small>Open saved lessons</small>
    </button>
    <button class="summary-card" type="button" data-content-status-shortcut="unwatched">
      <span class="metric-label">Watched</span><strong>${watched}</strong><small>Keep the streak warm</small>
    </button>
    <button class="summary-card" type="button" data-content-category="Start here">
      <span class="metric-label">Minutes</span><strong>${minutes || "12 min"}</strong><small>${minutes ? "completed" : "first block"}</small>
    </button>
  `;
  $("#contentGrid").innerHTML = filtered.length
    ? filtered.map(renderContentCard).join("")
    : `<p>No content matches those filters yet.</p>`;
  $$("[data-content-category]").forEach((button) => {
    button.classList.toggle("active", button.dataset.contentCategory === (state.contentCategory || "all"));
  });
}

function renderStartPath() {
  if (!has("#startPathGrid")) return;
  const pathIds = ["master-manual-140-175", "argument-basics", "loophole-gap-hunting"];
  $("#startPathGrid").innerHTML = pathIds
    .map((id, index) => {
      const item = contentLibrary.find((lesson) => lesson.id === id);
      if (!item) return "";
      const completed = state.completedContent.includes(item.id);
      return `
        <button class="start-path-step ${completed ? "done" : ""}" type="button" data-open-content="${escapeHtml(item.id)}">
          <span>${completed ? "Done" : `Step ${index + 1}`}</span>
          <strong>${escapeHtml(item.title)}</strong>
          <small>${escapeHtml(item.minutes)} min | ${escapeHtml(item.skill)}</small>
        </button>
      `;
    })
    .join("");
}

function renderContentCard(item) {
  const completed = state.completedContent.includes(item.id);
  const saved = state.savedContent.includes(item.id);
  const watched = state.watchedContent.includes(item.id);
  const progress = completed ? 100 : watched ? 45 : 0;
  const icon = getLessonIcon(item);
  return `
    <article class="lesson-card">
      <div class="lesson-thumb ${escapeHtml(item.topic)}-thumb">
        <span>${escapeHtml(icon)}</span>
        <strong>${escapeHtml(item.skill)}</strong>
      </div>
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
          <button class="mini-button" type="button" data-open-content="${item.id}" title="Unlock by scoring 90% or higher on 10 lesson practice attempts.">${completed ? "Review again" : "Mastery gate"}</button>
        </div>
      </div>
    </article>
  `;
}

function getLessonIcon(item) {
  const icons = {
    Flaws: "Gap",
    Assumptions: "Bridge",
    "Strengthen or Weaken": "Move",
    Conclusions: "Claim",
    "Conditional Logic": "If",
    "Reading Structure": "Map",
    Pacing: "Timer",
    "Techniques, Roles, and Principles": "Method",
  };
  return icons[item.skill] || item.type.replace(" lesson", "");
}

const lessonDeepDives = {
  "master-manual-140-175": {
    scenes: [
      ["Current LSAT priority", "The current test is two scored LR sections, one scored RC section, and one unscored LR or RC variable section. LR is the biggest score engine."],
      ["Transformation goal", "A 140 to 175 jump is not a few lucky questions. It is a new reading, review, timing, and pressure-management system."],
      ["Four-phase climb", "Repair foundations, add controlled timing, stabilize full sections, then integrate full tests and taper."],
    ],
    concept: "Your goal is not to do more LSAT work. Your goal is to make every study block produce a reusable skill.",
    example: "A weak block is 30 random questions. A strong block is one flaw lesson, six flaw questions, blind review, and one error-log rule.",
    breakdown: "At 140, fundamentals are unstable. At 175, the same fundamentals survive pressure. That is why accuracy comes before speed.",
    trap: "The trap is full-test panic: taking test after test before your untimed reasoning is strong enough to learn from the scores.",
    practice: "For every block, write: skill, task, miss pattern, next drill, retest date.",
  },
  "argument-basics": {
    scenes: [
      ["Argument skeleton", "Every LR argument has a claim the author wants you to accept and a reason offered for that claim."],
      ["Plain English move", "Before answer choices, say: because of this evidence, the author thinks this conclusion follows."],
      ["Your anchor", "If the question gets wordy, return to one line: evidence, arrow, conclusion."],
    ],
    concept: "An argument is not a topic. It is a support relationship: evidence is supposed to make a conclusion more believable.",
    example: "Applications rose after the school added evening events, so the events caused the increase.",
    breakdown: "Evidence: applications rose after the events. Conclusion: the events caused the rise. The argument needs a bridge that rules out other causes.",
    trap: "A tempting answer may discuss applications or events but fail to evaluate the support relationship.",
    practice: "Mark E for evidence and C for conclusion. Then ask: does E really prove C?",
  },
  "conclusion-evidence": {
    scenes: [
      ["Find the defended claim", "The conclusion is the sentence the author is trying to prove, not necessarily the final sentence."],
      ["Use the because test", "If one sentence explains why another should be believed, the explained sentence is usually the conclusion."],
      ["Avoid detail traps", "True supporting facts can be wrong answers when the stem asks for the main conclusion."],
    ],
    concept: "Conclusion questions reward sentence jobs. The right answer is the claim supported by the other parts of the stimulus.",
    example: "Because the pilot program reduced wait times, the city should expand it.",
    breakdown: "Reduced wait times is evidence. Expand the program is the conclusion.",
    trap: "A trap answer repeats the evidence and sounds safe, but it is not what the author is trying to prove.",
    practice: "Ask: which sentence makes the other sentences sound like reasons?",
  },
  "flaws-fast": {
    scenes: [
      ["Name the gap", "A flaw is the missing bridge between evidence and conclusion."],
      ["Classify the pattern", "Most misses come from causal gaps, comparison gaps, sampling gaps, or conditional reversals."],
      ["Pick the precise diagnosis", "The right answer describes the mistake actually made, not a mistake that could have appeared in a similar argument."],
    ],
    concept: "Flaw questions ask you to diagnose why the proof is not enough.",
    example: "Students who used flashcards scored higher, so flashcards caused the higher scores.",
    breakdown: "The argument ignores that stronger students may have chosen flashcards before the study began.",
    trap: "A trap answer says the argument ignores a benefit or drawback, but the real problem is cause versus correlation.",
    practice: "Say the flaw in five words before answer choices: correlation is not causation.",
  },
  "loophole-gap-hunting": {
    scenes: [
      ["Find the break", "Every LR argument has a place where the evidence stops proving the conclusion. That place is the loophole."],
      ["Ask before answers", "Why does this not fully prove the conclusion? What else could explain the facts? What is the author assuming?"],
      ["Plain English wins", "Do not only say causal flaw. Say: the author assumes the policy caused the improvement even though another change may have caused it."],
    ],
    concept: "Loophole thinking means you attack the support relationship before answer choices try to control your attention.",
    example: "Students using a new schedule improved, so the schedule caused the improvement.",
    breakdown: "The loophole is that stronger or more motivated students may have chosen the schedule before the results appeared.",
    trap: "A trap answer may sound sophisticated but name a different flaw, like attacking a source or confusing necessary and sufficient.",
    practice: "Before answer choices, force one sentence: this does not prove the conclusion because...",
  },
  "assumption-bridge": {
    scenes: [
      ["Necessary protects", "A necessary assumption is something the argument needs to survive."],
      ["Sufficient proves", "A sufficient assumption is strong enough to complete the argument."],
      ["Use the right test", "Negate necessary assumptions. For sufficient assumptions, plug the answer into the gap and see if the conclusion follows."],
    ],
    concept: "Assumption work is bridge work. Necessary answers keep the bridge from collapsing; sufficient answers build the whole bridge.",
    example: "The new reading plan improved scores, so every student should use it.",
    breakdown: "Necessary: the improvement was not caused by a different change. Sufficient: any plan that improves scores should be required for every student.",
    trap: "A helpful answer can strengthen the argument without being required or sufficient.",
    practice: "Label the stem first: necessary or sufficient. Then use the matching test.",
  },
  "conditional-basics": {
    scenes: [
      ["Triggers and results", "If A then B means A guarantees B. It does not mean B guarantees A."],
      ["Contrapositive only", "If A then B also means if not B, then not A."],
      ["Slow down on unless", "Unless means the required condition is the thing that must be present to avoid the result."],
    ],
    concept: "Conditional logic is about guaranteed relationships, not common sense likelihood.",
    example: "If a class is recorded, students receive a link.",
    breakdown: "Recorded -> link. No link -> not recorded. Link does not prove recorded.",
    trap: "Mistaken reversal: link -> recorded.",
    practice: "Write one arrow and one contrapositive. Do not write the reversal.",
  },
  "question-families-playbook": {
    scenes: [
      ["Group the tasks", "LR becomes easier when question types live in families: prove, help/hurt, assumptions, flaw/method, resolve, and structure."],
      ["Know the job", "Inference stays inside evidence. Strengthen and weaken move support. Assumptions bridge the gap. Resolve lets both facts be true."],
      ["Compound skills", "Main point, flaw, strengthen, weaken, and assumptions overlap because they all depend on argument structure."],
    ],
    concept: "Question families reduce cognitive load. You stop memorizing stems and start recognizing what the answer must do.",
    example: "A causal stimulus can become a weaken, strengthen, necessary assumption, flaw, or evaluate question.",
    breakdown: "The stimulus skill is causal reasoning. The stem changes the action: expose, support, protect, diagnose, or test the cause.",
    trap: "The trap is treating each question type like a separate universe and missing the shared reasoning underneath.",
    practice: "After each stimulus, label the family before reading choices: prove, help/hurt, assumption, method/flaw, resolve, or structure.",
  },
  "causal-attack-checklist": {
    scenes: [
      ["Causal claim pattern", "A happened, B happened, therefore A caused B. That pattern is high-yield and high-risk."],
      ["Attack list", "Check reverse causation, third factors, bad timing, weak measurement, biased samples, coincidence, and ignored alternatives."],
      ["Strengthen or weaken", "Strengthen by ruling out alternatives or showing mechanism. Weaken by adding another explanation or attacking the data."],
    ],
    concept: "Causal reasoning is one of the fastest ways to gain LR points because the same checklist repeats constantly.",
    example: "Injuries dropped after bike lanes were added, so bike lanes caused the drop.",
    breakdown: "A weaken answer might say enforcement increased at the same time. A strengthen answer might say enforcement stayed unchanged.",
    trap: "Do not pick an answer just because it mentions bike lanes or injuries. It must affect the causal explanation.",
    practice: "Run the seven-question causal checklist before looking at answers.",
  },
  "rc-map": {
    scenes: [
      ["Read for jobs", "Each paragraph has a job: background, old view, problem, response, implication, or author position."],
      ["Track viewpoint shifts", "Words like however, although, critics, and proponents tell you the passage is turning."],
      ["Answer from structure", "Main point and function questions become easier when you know why each paragraph exists."],
    ],
    concept: "RC is not memorization. It is structure plus proof.",
    example: "Paragraph 1 introduces a theory. Paragraph 2 gives a criticism. Paragraph 3 defends a narrower version of the theory.",
    breakdown: "The passage movement is theory, challenge, qualified defense.",
    trap: "A detail can be true but too narrow for main point or structure questions.",
    practice: "After each paragraph, write one tiny job label in plain English.",
  },
  "rc-classification-instinct": {
    scenes: [
      ["Classify early", "Passages repeat structures: old view vs new view, theory plus critique, phenomenon plus explanation, debate, or descriptive then evaluative shift."],
      ["Track voices", "Separate traditional view, critics, researchers, scholars, and the author. Many traps assign a belief to the wrong voice."],
      ["Map jobs", "Use short paragraph tags: old theory, new critique, evidence, author response, implication."],
    ],
    concept: "RC is a structure contest. Classification makes a dense passage feel less random.",
    example: "Paragraph 1 gives an old theory. Paragraph 2 introduces critics. Paragraph 3 gives evidence for a qualified author position.",
    breakdown: "The classification is old view, critique, qualified response. That predicts main point, function, and attitude questions.",
    trap: "Over-highlighting turns every sentence into noise. If everything is important, nothing guides you.",
    practice: "After each paragraph, write a two-word job tag and one author attitude word.",
  },
  "lr-strengthen": {
    scenes: [
      ["Find the bridge", "Strengthen answers make the evidence support the conclusion better."],
      ["Predict the help", "Before answers, ask what missing fact would make the conclusion more likely."],
      ["Small can be enough", "A strengthen answer does not need to prove the conclusion. It only needs to help."],
    ],
    concept: "Strengthen questions reward support movement. The credited answer pushes the conclusion upward.",
    example: "A tutoring program is credited with score gains after participants improved.",
    breakdown: "A strong answer says participants were not already improving before the program.",
    trap: "An answer praising tutoring generally may be true but not connected to this evidence.",
    practice: "Ask: does this answer make the evidence matter more?",
  },
  "lr-weaken": {
    scenes: [
      ["Attack the bridge", "Weaken answers make the evidence support the conclusion less well."],
      ["Look for alternatives", "Causal arguments are weakened by other causes, reverse causation, biased samples, or measurement problems."],
      ["Do not overkill", "The answer does not need to destroy the conclusion; it only needs to damage support."],
    ],
    concept: "Weaken questions are precision attacks on the support relationship.",
    example: "A school says its new app caused higher attendance because attendance rose after launch.",
    breakdown: "A weakening answer says a new attendance policy started the same week.",
    trap: "A negative fact about the app is irrelevant unless it touches the attendance explanation.",
    practice: "State the bridge, then ask what would make that bridge less believable.",
  },
  "pacing-skip": {
    scenes: [
      ["Protect easy points", "Skipping is not quitting. It is preserving time for questions you can win."],
      ["Use a 20-second check", "If the task, conclusion, or answer type is unclear after a short check, flag and move."],
      ["Return with a label", "When you come back, your task label tells your brain where to restart."],
    ],
    concept: "Pacing is an accuracy tool. It prevents one hard question from stealing several easier points.",
    example: "A parallel flaw stem with dense conditional answer choices appears at question 22.",
    breakdown: "Mark it, write 'match flaw skeleton,' and secure the next easier question first.",
    trap: "Staying longer can feel disciplined while actually lowering your section score.",
    practice: "Practice leaving on purpose: flag, label, breathe, next.",
  },
  "error-log-system": {
    scenes: [
      ["Review creates growth", "Doing questions creates exposure. Reviewing questions creates improvement."],
      ["Write the real miss", "Bad lesson: be careful. Good lesson: I treated a relative claim as absolute and picked a too-strong answer."],
      ["Retest the pattern", "Every miss needs a cause code, loophole, fix drill, retest date, and resolution status."],
    ],
    concept: "Your error log is a diagnostic tool, not a shame diary.",
    example: "PT130 S1 Q19, Flaw, chose C, correct A, miss reason: topic match before naming the gap.",
    breakdown: "The useful lesson is not that you missed it. The useful lesson is the repeatable move that caused the miss.",
    trap: "The trap is writing vague notes like rushed, careless, or confusing. Those do not tell future Jessica what to drill.",
    practice: "Use this sentence: I missed this because I ___. Next time I will ___. Retest on ___.",
  },
  "accuracy-before-speed": {
    scenes: [
      ["Timing is a symptom", "If you are slow, the disease is usually unstable structure, weak prediction, rereading, or trap-answer overthinking."],
      ["Untimed first", "If you cannot do a skill slowly, timing will only expose the weakness more loudly."],
      ["Add pressure carefully", "Move from untimed accuracy to short timed sets, then sections, then full tests."],
    ],
    concept: "Speed is built from repeatable accuracy. Timing is not where the score is born.",
    example: "Instead of forcing a full section, do six untimed assumption questions until you can name the bridge before answers.",
    breakdown: "Once bridge naming is reliable, add a 12-minute set. Then review uncertainty before checking answers.",
    trap: "Intensity can feel like discipline, but constant timed tests without deep review trains panic and repetition.",
    practice: "Before speed work, require 90% accuracy on the same skill in short untimed sets.",
  },
  "argumentative-writing": {
    scenes: [
      ["Pick a side fast", "The writing sample rewards organized reasoning, not a perfect moral answer."],
      ["Use both criteria", "Tie your choice to the stated goals and explain why the other side is weaker."],
      ["Keep structure visible", "Use clear paragraphs: thesis, reason one, reason two, concession, conclusion."],
    ],
    concept: "LSAT Writing is an argument task. Your job is to choose a position and defend it with organized tradeoffs.",
    example: "A city must choose between a cheaper short-term plan and a more expensive long-term plan.",
    breakdown: "Strong writing names the decision criteria, picks a side, and explains why the tradeoff is acceptable.",
    trap: "Summarizing both sides without committing creates a weak essay.",
    practice: "Write a one-sentence thesis before drafting anything else.",
  },
};

function getLessonScenes(item) {
  if (lessonDeepDives[item.id]?.scenes) {
    return lessonDeepDives[item.id].scenes.map(([title, body]) => ({ title, body }));
  }
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
  if (lessonDeepDives[item.id]) return lessonDeepDives[item.id];
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
  const id = params.get("id") || $("#dynamicLesson")?.dataset.lessonId || state.lastContentId || contentLibrary[0].id;
  const item = contentLibrary.find((lesson) => lesson.id === id) || contentLibrary[0];
  const scenes = getLessonScenes(item);
  const kit = getLessonKit(item);
  const practice = getLessonPractice(item);
  const mastery = state.lessonMastery[item.id] || { answered: 0, correct: 0, passed: false };
  const masteryScore = mastery.answered ? Math.round((mastery.correct / mastery.answered) * 100) : 0;
  const completed = state.completedContent.includes(item.id);
  const stepItems = [
    ["Watch/Read", true],
    ["Translate", mastery.answered > 0],
    ["Practice", mastery.answered >= Math.min(2, practice.length)],
    ["Mastery Check", mastery.passed || completed],
  ];
  $("#dynamicLesson").innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">${escapeHtml(item.category)}</p>
      <h1>${escapeHtml(item.title)}</h1>
      <p>${escapeHtml(item.description)}</p>
    </div>
    <div class="lesson-stepper" aria-label="Lesson progress">
      ${stepItems
        .map(
          ([label, done], index) => `
            <div class="${done ? "done" : ""}">
              <span>${done ? "✓" : index + 1}</span>
              <strong>${escapeHtml(label)}</strong>
            </div>
          `,
        )
        .join("")}
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
        <div id="lessonText">
          <p>${escapeHtml(scenes.map((scene) => `${scene.title}: ${scene.body}`).join(" "))}</p>
        </div>
        <button class="button secondary dark" type="button" data-read-lesson>Listen and read</button>
        <section class="plain-english-box" aria-label="Plain English simplifier">
          <h2>Plain English Summary</h2>
          <p id="simpleLogic">Paste a confusing LSAT sentence below, then simplify it into core logic.</p>
          <textarea id="simplifierInput" rows="3" placeholder="Paste a confusing sentence here."></textarea>
          <button class="button secondary dark" type="button" data-simplify-text>Simplify now</button>
        </section>
        ${item.id === "describe-technique" ? renderTechniqueSupport() : ""}
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
        <section class="lesson-drill-brief" aria-label="How to use this lesson on a real question">
          <h2>One-question routine</h2>
          <ol>
            <li><strong>Task:</strong> name exactly what the stem is asking.</li>
            <li><strong>Proof:</strong> underline the sentence or relationship that controls the answer.</li>
            <li><strong>Prediction:</strong> say the answer in your own words before looking down.</li>
            <li><strong>Trap check:</strong> reject answers that only reuse familiar words.</li>
          </ol>
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
          <p>You need 90% or higher on 10 attempts before this lesson counts as complete. Current lesson mastery: ${masteryScore}% after ${mastery.answered} attempts.</p>
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
  if (item.id === "describe-technique") return techniquePracticeQuestions;
  const pool = questionBank.filter((question) => question.skill === item.skill);
  return (pool.length ? pool : questionBank).slice(0, 10);
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
      <details class="practice-explanation">
        <summary>Show explanation after you try it</summary>
        <p>${escapeHtml(question.explanation || "Name the task, prove the answer from the stimulus, and write the trap in your journal if you miss it.")}</p>
      </details>
    </article>
  `;
}

function renderTechniqueSupport() {
  const rows = [
    ["Draws an analogy", "Says: this is like that other thing."],
    ["Rules out alternatives", "Shows other explanations do not work."],
    ["Uses a counterexample", "Breaks an all/every/never claim with one case."],
    ["Applies a principle", "Uses a broad rule to justify a specific choice."],
    ["Calls into question", "Gives a reason to doubt the other side."],
    ["Implicitly assumes", "Leaves out a needed bridge."],
    ["Counters a phenomenon", "Explains why something happened."],
    ["Attacks the source", "Focuses on the person/source instead of the reasoning."],
  ];
  return `
    <section class="technique-lab" aria-label="Describe the Technique support tools">
      <div class="logic-map">
        <h2>Logic map</h2>
        <div class="map-row"><span>Premise</span><strong>→</strong><span>Conclusion</span><em>Basic support</em></div>
        <div class="map-row"><span>Case A</span><strong>≈</strong><span>Case B</span><em>Analogy</em></div>
        <div class="map-row"><span>Other causes</span><strong>✕</strong><span>Main cause</span><em>Eliminating alternatives</em></div>
        <div class="map-row"><span>Universal claim</span><strong>✕</strong><span>One exception</span><em>Counterexample</em></div>
      </div>
      <aside class="translation-sidebar" aria-label="Technique translation guide">
        <h2>Translation guide</h2>
        ${rows
          .map(
            ([phrase, meaning]) => `
              <div>
                <strong>${escapeHtml(phrase)}</strong>
                <span>${escapeHtml(meaning)}</span>
              </div>
            `,
          )
          .join("")}
      </aside>
    </section>
  `;
}

function readLesson() {
  const target = $("#lessonText") || $("#lessonDetail") || $("#dynamicLesson");
  if (!target) return;
  speakText(target.innerText);
}

function speakText(text) {
  if (!("speechSynthesis" in window)) {
    showToast("Read aloud is not available in this browser.");
    return;
  }
  window.speechSynthesis.cancel();
  const speech = new SpeechSynthesisUtterance(text);
  speech.rate = 0.88;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
  showToast("Playing audio preview.");
}

function answerLessonPractice(questionId, choice) {
  const question = [...questionBank, ...techniquePracticeQuestions].find((item) => item.id === questionId);
  if (!question || !has("#dynamicLesson")) return;
  const params = new URLSearchParams(window.location.search);
  const lessonId = params.get("id") || $("#dynamicLesson")?.dataset.lessonId || state.lastContentId || contentLibrary[0].id;
  const mastery = state.lessonMastery[lessonId] || { answered: 0, correct: 0, passed: false };
  mastery.answered += 1;
  if (choice === question.answer) mastery.correct += 1;
  mastery.passed = mastery.answered >= 10 && mastery.correct / mastery.answered >= 0.9;
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
  const mood = state.classMood || "all";
  const visible = classes.filter((item) => mood === "all" || item.mood === mood);
  const spotlight = visible[0] || classes[0];
  $("[data-class-mood]") &&
    $$("[data-class-mood]").forEach((button) => {
      button.classList.toggle("active", button.dataset.classMood === mood);
    });
  if (has("#classSpotlight")) {
    $("#classSpotlight").innerHTML = `
      <div>
        <p class="eyebrow">${escapeHtml(spotlight.status)}</p>
        <h2>${escapeHtml(spotlight.title)}</h2>
        <p>${escapeHtml(spotlight.preview)}</p>
        <div class="lesson-meta">
          <span class="tag">${escapeHtml(spotlight.time)}</span>
          <span class="tag">${escapeHtml(spotlight.duration)}</span>
          <span class="tag">${escapeHtml(spotlight.match)}</span>
        </div>
      </div>
      <div class="spotlight-actions">
        <button class="button primary" type="button" data-class-action="${escapeHtml(spotlight.id)}">Join or watch -></button>
        <button class="button secondary dark" type="button" data-class-drill="${escapeHtml(spotlight.skill)}">Start class drill -></button>
      </div>
    `;
  }
  $("#classList").innerHTML = visible
    .map(
      (item, index) => `
        <article class="class-item class-card" data-mood="${escapeHtml(item.mood)}">
          <span class="timeline-dot" aria-hidden="true">${index + 1}</span>
          <header>
            <div>
              <p class="eyebrow">${escapeHtml(item.status)}</p>
              <h3>${escapeHtml(item.title)}</h3>
            </div>
            <span class="tag">${escapeHtml(item.time)}</span>
          </header>
          <p>${escapeHtml(item.focus)} Best match: ${escapeHtml(item.match)}.</p>
          <div class="class-checklist" aria-label="Class study loop">
            <label><input type="checkbox"> Watch ${escapeHtml(item.duration)} segment</label>
            <label><input type="checkbox"> Complete 3-question trap drill</label>
            <label><input type="checkbox"> Log one takeaway in journal</label>
          </div>
          <div class="class-actions">
            <button class="mini-button" type="button" data-class-action="${escapeHtml(item.id)}">Watch replay -> ${escapeHtml(item.recording)}</button>
            <button class="mini-button" type="button" data-class-drill="${escapeHtml(item.skill)}">Drill this skill -></button>
            <button class="mini-button" type="button" data-class-preview="${escapeHtml(item.id)}">Play preview</button>
          </div>
        </article>
      `
    )
    .join("") || `<p>No class matches that filter yet. Try All or use the shortest recap.</p>`;
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
  document.body.classList.toggle("dark-mode", Boolean(state.accessibility?.darkMode));
  document.body.classList.toggle("high-contrast", Boolean(state.accessibility?.highContrast));
}

function renderAccessibilityDock() {
  if ($("#accessibilityDock")) return;
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div class="accessibility-dock" id="accessibilityDock" aria-label="Personal study settings">
      <button class="accessibility-toggle" type="button" data-toggle-accessibility-panel aria-expanded="false">Jessica mode</button>
      <div class="accessibility-options">
        <strong>Reading tools</strong>
        <button class="mini-button" type="button" data-toggle-accessibility="dyslexia">Dyslexia font</button>
        <button class="mini-button" type="button" data-toggle-accessibility="focus">Focus spacing</button>
        <button class="mini-button" type="button" data-toggle-accessibility="darkMode">Dark mode</button>
        <button class="mini-button" type="button" data-toggle-accessibility="highContrast">High contrast</button>
        <button class="mini-button" type="button" data-toggle-accessibility="reducedMotion">Reduce motion</button>
      </div>
    </div>`,
  );
}

function simplifyText() {
  if (!has("#simpleLogic")) return;
  const text = $("#simplifierInput")?.value.trim();
  if (!text) {
    $("#simpleLogic").textContent = "Paste one confusing sentence first. Short chunks work best.";
    return;
  }
  const cleaned = text.replace(/\s+/g, " ");
  const becauseParts = cleaned.split(/\b(because|since|given that|as)\b/i);
  const contrastParts = cleaned.split(/\b(however|but|although|nevertheless)\b/i);
  const resultParts = cleaned.split(/\b(therefore|thus|so|hence|consequently)\b/i);
  let summary = `Core idea: ${cleaned}`;
  if (resultParts.length > 2) {
    summary = `Conclusion: ${resultParts.slice(2).join(" ").trim()} Evidence: ${resultParts[0].trim()}`;
  } else if (becauseParts.length > 2) {
    summary = `Conclusion: ${becauseParts[0].trim()} Evidence: ${becauseParts.slice(2).join(" ").trim()}`;
  } else if (contrastParts.length > 2) {
    summary = `Contrast: ${contrastParts[0].trim()} / ${contrastParts.slice(2).join(" ").trim()}`;
  }
  $("#simpleLogic").textContent = `${summary}. Ask: what is the author trying to prove, and what support did they give?`;
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
    app: "JessiPreps",
    state,
  };
  downloadText("jessipreps-study-backup.json", "application/json", JSON.stringify(backup, null, 2));
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
        `UID:jessipreps-${index}-${eventDate.getTime()}@local`,
        `DTSTAMP:${format(new Date())}`,
        `DTSTART:${format(eventDate)}`,
        `DTEND:${format(endDate)}`,
        `SUMMARY:LSAT study - ${day.focus}`,
        `DESCRIPTION:${day.tasks.join("\\n")}`,
        "END:VEVENT",
      ].join("\n");
    })
    .join("\n");
  const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//JessiPreps//Study Plan//EN", events, "END:VCALENDAR"].join("\n");
  downloadText("jessipreps-weekly-study-plan.ics", "text/calendar", ics);
  showToast("Calendar file downloaded.");
}

function renderPlugins() {
  if (!has("#pluginGrid")) return;
  $("#pluginGrid").innerHTML = plugins
    .map(
      (plugin) => {
        const connected = Boolean(state.pluginConnections?.[plugin.id]);
        return `
        <article class="plugin-item ${connected ? "enabled" : ""}">
          <header>
            <h3>${escapeHtml(plugin.title)}</h3>
            <span class="tag">${connected ? "Connected" : "Recommended"}</span>
          </header>
          <p>${escapeHtml(plugin.use)}</p>
          <ul>
            ${plugin.bestFor.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
          <div class="plugin-controls">
            <button class="mini-button" type="button" data-plugin-connect="${escapeHtml(plugin.id)}">${connected ? "Disconnect" : "Connect"}</button>
            <button class="mini-button" type="button" data-plugin-action="${escapeHtml(plugin.id)}">${escapeHtml(plugin.action)}</button>
          </div>
        </article>
      `;
      }
    )
    .join("");
}

function runPluginAction(id) {
  const plugin = plugins.find((item) => item.id === id);
  if (!plugin) return;
  addActivity(`Plugin action: ${plugin.title}.`);
  if (id === "google-calendar") {
    downloadCalendar();
    return;
  }
  const routes = {
    "computer-use": "index.html",
    "google-drive": "journal.html",
    "google-sheets": "analytics.html",
    gmail: "support.html",
    canva: "content.html",
  };
  window.location.href = routes[id] || "plugins.html";
}

function runAutomation(id) {
  const automation = automations.find((item) => item.id === id);
  if (!automation) return;
  addActivity(`Automation ran: ${automation.title}.`);
  if (id === "daily-review") {
    buildRecommendedDrill();
    return;
  }
  if (id === "missed-sweep") {
    ensureReviewItems();
    renderReviewQueue();
    window.location.href = "journal.html";
    return;
  }
  if (id === "timed-section") {
    window.location.href = "tests.html";
    return;
  }
  if (id === "ask-followup") {
    window.location.href = "support.html";
    return;
  }
  showToast("Automation ran and updated activity.");
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
  const variablePool = logical.slice(25, 50).length >= 25 ? logical.slice(25, 50) : reading.concat(logical).slice(0, 25);
  fullTest = {
    questions: [...logical.slice(0, 25), ...logical.slice(25, 50), ...reading.slice(0, 25), ...variablePool],
    index: 0,
    answers: {},
    submitted: false,
  };
  showToast("Current-format test started: LR, LR, RC, variable.");
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
  const sectionLabels = ["LR scored", "LR scored", "RC scored", "Variable unscored"];
  const sectionLabel = sectionLabels[sectionNumber - 1] || `Section ${sectionNumber}`;
  const chosen = fullTest.answers[question.id] || "";
  $("#fullTestCard").innerHTML = `
    <div class="drill-meta"><span>Section ${sectionNumber}: ${sectionLabel}</span><span>Question ${sectionQuestion}</span><span>${fullTest.index + 1}/${fullTest.questions.length}</span></div>
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

function saveDashboardSettings() {
  state.targetScore = Number($("#targetScoreInput")?.value || 170);
  state.weeklyHours = Number($("#dashboardWeeklyHours")?.value || 8);
  state.dashboardTestDate = $("#dashboardTestDate")?.value || "";
  saveState();
  renderDashboard();
  addActivity(`Updated profile settings: target ${state.targetScore}, ${state.weeklyHours} hours/week.`);
  showToast("Dashboard settings saved.");
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
  enhanceNavigation();
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

function enhanceNavigation() {
  const nav = $(".nav-list");
  if (!nav || nav.dataset.enhanced === "true") return;
  const groups = [
    [
      "Learn",
      [
        ["content.html", "Content"],
        ["lessons.html", "Lessons"],
        ["explanations.html", "Explanations"],
      ],
    ],
    [
      "Practice",
      [
        ["question-bank.html", "Question bank"],
        ["drills.html", "Adaptive drills"],
        ["tests.html", "Timed tests"],
      ],
    ],
    [
      "Review",
      [
        ["review.html", "Test review"],
        ["journal.html", "Wrong-answer journal"],
        ["analytics.html", "Analytics"],
      ],
    ],
    [
      "Plan",
      [
        ["index.html", "Dashboard"],
        ["plan.html", "Study plan"],
        ["classes.html", "Classes"],
        ["support.html", "Ask support"],
        ["automations.html", "Automations"],
        ["plugins.html", "Plugins"],
      ],
    ],
  ];
  nav.innerHTML = groups
    .map(([label, items]) => {
      const links = items.map(([href, text]) => `<a href="${href}">${text}</a>`).join("");
      return `<section class="nav-group"><span>${label}</span>${links}</section>`;
    })
    .join("");
  nav.dataset.enhanced = "true";
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
      const classItem = classes.find((item) => item.id === classButton.dataset.classAction);
      addActivity(`Opened class recording plan: ${classItem?.title || classButton.dataset.classAction}.`);
      showToast("Class added to today's study loop.");
    }

    const classDrill = event.target.closest("[data-class-drill]");
    if (classDrill) {
      startContentDrill(classDrill.dataset.classDrill);
    }

    const classPreview = event.target.closest("[data-class-preview]");
    if (classPreview) {
      const classItem = classes.find((item) => item.id === classPreview.dataset.classPreview);
      speakText(classItem?.preview || "This class preview is ready.");
    }

    const classMood = event.target.closest("[data-class-mood]");
    if (classMood) {
      state.classMood = classMood.dataset.classMood;
      saveState();
      renderClasses();
      showToast(`Class filter: ${classMood.textContent.trim()}.`);
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

    const statusShortcut = event.target.closest("[data-content-status-shortcut]");
    if (statusShortcut && has("#contentStatusFilter")) {
      $("#contentStatusFilter").value = statusShortcut.dataset.contentStatusShortcut;
      renderContentHub();
      showToast(`Content filter: ${statusShortcut.textContent.trim()}.`);
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
      runAutomation(automationRun.dataset.runAutomation);
    }

    const pluginConnect = event.target.closest("[data-plugin-connect]");
    if (pluginConnect) {
      const id = pluginConnect.dataset.pluginConnect;
      state.pluginConnections = state.pluginConnections || {};
      state.pluginConnections[id] = !state.pluginConnections[id];
      saveState();
      renderPlugins();
      showToast(`Plugin ${state.pluginConnections[id] ? "connected" : "disconnected"}.`);
    }

    const pluginAction = event.target.closest("[data-plugin-action]");
    if (pluginAction) {
      runPluginAction(pluginAction.dataset.pluginAction);
    }

    const studyBlock = event.target.closest("[data-log-study-block]");
    if (studyBlock) {
      addActivity(`Completed study block: ${studyBlock.dataset.logStudyBlock}.`);
      renderDashboard();
      showToast("Study block logged. Nice and clean.");
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

    const roadmapButton = event.target.closest("[data-roadmap-action]");
    if (roadmapButton) {
      window.location.href = roadmapButton.dataset.roadmapAction;
    }

    const startDrill = event.target.closest("[data-start-drill]");
    if (startDrill) {
      buildRecommendedDrill();
    }

    const askToggle = event.target.closest("[data-toggle-ask]");
    if (askToggle && has("#quickAskPanel")) {
      $("#quickAskPanel").hidden = !$("#quickAskPanel").hidden;
      if (!$("#quickAskPanel").hidden) $("#quickAskInput")?.focus();
    }

    const accessibilityPanel = event.target.closest("[data-toggle-accessibility-panel]");
    if (accessibilityPanel) {
      const dock = $("#accessibilityDock");
      dock?.classList.toggle("open");
      accessibilityPanel.setAttribute("aria-expanded", String(dock?.classList.contains("open")));
    }

    const mobileMenu = event.target.closest("[data-toggle-mobile-menu]");
    if (mobileMenu) {
      document.body.classList.toggle("nav-open");
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

    if (event.target.closest("[data-simplify-text]")) {
      simplifyText();
    }

    if (event.target.closest("[data-read-lesson]")) {
      readLesson();
    }
  });

  on("#sectionFilter", "change", renderQuestionBank);
  on("#skillFilter", "change", renderQuestionBank);
  on("#statusFilter", "change", renderQuestionBank);
  on("#contentSearch", "input", renderContentHub);
  on("#contentTopicFilter", "change", renderContentHub);
  on("#contentDifficultyFilter", "change", renderContentHub);
  on("#contentStatusFilter", "change", renderContentHub);
  on("#quickFindInput", "input", renderQuickFind);
  on("#dashboardWeeklyHours", "change", () => {
    state.weeklyHours = Number($("#dashboardWeeklyHours")?.value || 8);
    saveState();
    showToast(`Weekly hours saved: ${state.weeklyHours}.`);
  });
  on("#targetScoreInput", "change", () => {
    state.targetScore = Number($("#targetScoreInput")?.value || 170);
    saveState();
    renderDashboard();
    showToast(`Target score saved: ${state.targetScore}.`);
  });
  on("#dashboardTestDate", "change", () => {
    state.dashboardTestDate = $("#dashboardTestDate")?.value || "";
    saveState();
    showToast("Test date saved.");
  });

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

  on("#quickAskForm", "submit", (event) => {
    event.preventDefault();
    const textarea = $("#quickAskInput");
    const text = textarea.value.trim();
    if (!text) {
      showToast("Add a question before saving.");
      return;
    }
    state.supportQueue.unshift({
      text,
      date: new Date().toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }),
    });
    state.supportQueue = state.supportQueue.slice(0, 8);
    textarea.value = "";
    $("#quickAskPanel").hidden = true;
    saveState();
    addActivity("Saved a dashboard ask.");
    showToast("Ask saved to support queue.");
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
  on("#saveDashboardSettings", "click", saveDashboardSettings);

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
  enhanceNavigation();
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
