// Supplemental LSAT lesson catalog for the dashboard app.
// Loaded after content.js and before app.js so state initialization includes these lessons.
const requestedWebsiteLessonBlueprints = [
  ["ka-about-lsat-lessons", "About LSAT Lessons", "strategy", "Strategy", "Start here", "Beginner", 5, "Orientation video", "Pacing"],
  ["ka-lr-getting-started", "Getting Started with Logical Reasoning", "lr", "Logical Reasoning", "Start here", "Beginner", 8, "Article + video lesson", "Conclusions"],
  ["ka-lr-introduction-arguments", "Introduction to Arguments", "lr", "Logical Reasoning", "Start here", "Beginner", 9, "Article + video lesson", "Conclusions"],
  ["ka-lr-catalog-question-types", "Logical Reasoning Question Type Catalog", "lr", "Logical Reasoning", "Question types", "Beginner", 12, "Catalog lesson", "Techniques, Roles, and Principles"],
  ["ka-lr-types-conclusions", "Types of Conclusions", "lr", "Logical Reasoning", "Core concepts", "Beginner", 8, "Article lesson", "Conclusions"],
  ["ka-lr-types-evidence", "Types of Evidence", "lr", "Logical Reasoning", "Core concepts", "Beginner", 8, "Article lesson", "Conclusions"],
  ["ka-lr-types-flaws", "Types of Flaws", "lr", "Logical Reasoning", "Core concepts", "Intermediate", 12, "Article lesson", "Flaws"],
  ["ka-lr-identify-conclusion-quick", "Identify the Conclusion | Quick Guide", "lr", "Logical Reasoning", "Question types", "Beginner", 6, "Quick guide", "Conclusions"],
  ["ka-lr-identify-conclusion-learn", "Identify the Conclusion | Learn More", "lr", "Logical Reasoning", "Question types", "Beginner", 10, "Deep-dive lesson", "Conclusions"],
  ["ka-lr-identify-conclusion-examples", "Identify the Conclusion | Examples", "lr", "Logical Reasoning", "Question types", "Beginner", 12, "Worked examples", "Conclusions"],
  ["ka-lr-identify-conclusion-video", "Identify the Conclusion | Video Lesson", "lr", "Logical Reasoning", "Question types", "Beginner", 9, "Video lesson", "Conclusions"],
  ["ka-lr-identify-conclusion-worked", "Identify the Conclusion | Worked Example", "lr", "Logical Reasoning", "Question types", "Beginner", 9, "Worked example", "Conclusions"],
  ["ka-lr-entailment-quick", "Identify an Entailment | Quick Guide", "lr", "Logical Reasoning", "Question types", "Intermediate", 7, "Quick guide", "Must Be True"],
  ["ka-lr-entailment-learn", "Identify an Entailment | Learn More", "lr", "Logical Reasoning", "Question types", "Intermediate", 11, "Deep-dive lesson", "Must Be True"],
  ["ka-lr-entailment-video", "Identify an Entailment | Video Lesson", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Video lesson", "Must Be True"],
  ["ka-lr-entailment-worked", "Identify an Entailment | Worked Example", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Worked example", "Must Be True"],
  ["ka-lr-strong-inferences-quick", "Strongly Supported Inferences | Quick Guide", "lr", "Logical Reasoning", "Question types", "Intermediate", 7, "Quick guide", "Must Be True"],
  ["ka-lr-strong-inferences-learn", "Strongly Supported Inferences | Learn More", "lr", "Logical Reasoning", "Question types", "Intermediate", 11, "Deep-dive lesson", "Must Be True"],
  ["ka-lr-strong-inferences-video", "Strongly Supported Inferences | Video Lesson", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Video lesson", "Must Be True"],
  ["ka-lr-strong-inferences-worked", "Strongly Supported Inferences | Worked Example", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Worked example", "Must Be True"],
  ["ka-lr-disputes-quick", "Disputes | Quick Guide", "lr", "Logical Reasoning", "Question types", "Beginner", 7, "Quick guide", "Conclusions"],
  ["ka-lr-disputes-learn", "Disputes | Learn More", "lr", "Logical Reasoning", "Question types", "Beginner", 10, "Deep-dive lesson", "Conclusions"],
  ["ka-lr-disputes-video", "Disputes | Video Lesson", "lr", "Logical Reasoning", "Question types", "Beginner", 8, "Video lesson", "Conclusions"],
  ["ka-lr-disputes-worked", "Working with Disputes | Worked Example", "lr", "Logical Reasoning", "Question types", "Beginner", 9, "Worked example", "Conclusions"],
  ["ka-lr-technique-quick", "Identify the Technique | Quick Guide", "lr", "Logical Reasoning", "Question types", "Intermediate", 7, "Quick guide", "Techniques, Roles, and Principles"],
  ["ka-lr-technique-learn", "Identify the Technique | Learn More", "lr", "Logical Reasoning", "Question types", "Intermediate", 11, "Deep-dive lesson", "Techniques, Roles, and Principles"],
  ["ka-lr-technique-video", "Identify the Technique | Video Lesson", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Video lesson", "Techniques, Roles, and Principles"],
  ["ka-lr-technique-worked", "Identify the Technique | Worked Example", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Worked example", "Techniques, Roles, and Principles"],
  ["ka-lr-role-quick", "Identify the Role | Quick Guide", "lr", "Logical Reasoning", "Question types", "Intermediate", 7, "Quick guide", "Techniques, Roles, and Principles"],
  ["ka-lr-role-learn", "Identify the Role | Learn More", "lr", "Logical Reasoning", "Question types", "Intermediate", 11, "Deep-dive lesson", "Techniques, Roles, and Principles"],
  ["ka-lr-role-video", "Identify the Role | Video Lesson", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Video lesson", "Techniques, Roles, and Principles"],
  ["ka-lr-role-worked", "Identify the Role | Worked Example", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Worked example", "Techniques, Roles, and Principles"],
  ["ka-lr-principle-quick", "Identify the Principle | Quick Guide", "lr", "Logical Reasoning", "Question types", "Intermediate", 7, "Quick guide", "Techniques, Roles, and Principles"],
  ["ka-lr-principle-learn", "Identify the Principle | Learn More", "lr", "Logical Reasoning", "Question types", "Intermediate", 11, "Deep-dive lesson", "Techniques, Roles, and Principles"],
  ["ka-lr-principle-video", "Identify the Principle | Video Lesson", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Video lesson", "Techniques, Roles, and Principles"],
  ["ka-lr-principle-worked", "Identify the Principle | Worked Example", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Worked example", "Techniques, Roles, and Principles"],
  ["ka-lr-match-structure-quick", "Match Structure | Quick Guide", "lr", "Logical Reasoning", "Question types", "Advanced", 8, "Quick guide", "Techniques, Roles, and Principles"],
  ["ka-lr-match-structure-learn", "Match Structure | Learn More", "lr", "Logical Reasoning", "Question types", "Advanced", 12, "Deep-dive lesson", "Techniques, Roles, and Principles"],
  ["ka-lr-match-structure-video", "Match the Structure | Video Lesson", "lr", "Logical Reasoning", "Question types", "Advanced", 10, "Video lesson", "Techniques, Roles, and Principles"],
  ["ka-lr-match-structure-worked", "Match the Structure | Worked Example", "lr", "Logical Reasoning", "Question types", "Advanced", 10, "Worked example", "Techniques, Roles, and Principles"],
  ["ka-lr-match-principles-quick", "Match Principles | Quick Guide", "lr", "Logical Reasoning", "Question types", "Advanced", 8, "Quick guide", "Techniques, Roles, and Principles"],
  ["ka-lr-match-principles-learn", "Match Principles | Learn More", "lr", "Logical Reasoning", "Question types", "Advanced", 12, "Deep-dive lesson", "Techniques, Roles, and Principles"],
  ["ka-lr-match-principles-video", "Match Principles | Video Lesson", "lr", "Logical Reasoning", "Question types", "Advanced", 10, "Video lesson", "Techniques, Roles, and Principles"],
  ["ka-lr-match-principles-worked", "Match Principles | Worked Example", "lr", "Logical Reasoning", "Question types", "Advanced", 10, "Worked example", "Techniques, Roles, and Principles"],
  ["ka-lr-flaw-quick", "Identify a Flaw | Quick Guide", "lr", "Logical Reasoning", "Question types", "Intermediate", 7, "Quick guide", "Flaws"],
  ["ka-lr-flaw-learn", "Identify a Flaw | Learn More", "lr", "Logical Reasoning", "Question types", "Intermediate", 12, "Deep-dive lesson", "Flaws"],
  ["ka-lr-flaw-video", "Identify a Flaw | Video Lesson", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Video lesson", "Flaws"],
  ["ka-lr-flaw-worked", "Identify a Flaw | Worked Example", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Worked example", "Flaws"],
  ["ka-lr-match-flaw-quick", "Match a Flaw | Quick Guide", "lr", "Logical Reasoning", "Question types", "Advanced", 8, "Quick guide", "Flaws"],
  ["ka-lr-match-flaw-learn", "Match a Flaw | Learn More", "lr", "Logical Reasoning", "Question types", "Advanced", 12, "Deep-dive lesson", "Flaws"],
  ["ka-lr-match-flaw-video", "Match Flaws | Video Lesson", "lr", "Logical Reasoning", "Question types", "Advanced", 10, "Video lesson", "Flaws"],
  ["ka-lr-match-flaw-worked", "Match Flaws | Worked Example", "lr", "Logical Reasoning", "Question types", "Advanced", 10, "Worked example", "Flaws"],
  ["ka-lr-necessary-assumptions-quick", "Necessary Assumptions | Quick Guide", "lr", "Logical Reasoning", "Question types", "Intermediate", 7, "Quick guide", "Assumptions"],
  ["ka-lr-necessary-assumptions-learn", "Necessary Assumptions | Learn More", "lr", "Logical Reasoning", "Question types", "Intermediate", 12, "Deep-dive lesson", "Assumptions"],
  ["ka-lr-necessary-assumptions-video", "Necessary Assumptions | Video Lesson", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Video lesson", "Assumptions"],
  ["ka-lr-necessary-assumptions-worked", "Necessary Assumptions | Worked Example", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Worked example", "Assumptions"],
  ["ka-lr-sufficient-assumptions-quick", "Sufficient Assumptions | Quick Guide", "lr", "Logical Reasoning", "Question types", "Advanced", 8, "Quick guide", "Assumptions"],
  ["ka-lr-sufficient-assumptions-learn", "Sufficient Assumptions | Learn More", "lr", "Logical Reasoning", "Question types", "Advanced", 12, "Deep-dive lesson", "Assumptions"],
  ["ka-lr-sufficient-assumptions-video", "Sufficient Assumptions | Video Lesson", "lr", "Logical Reasoning", "Question types", "Advanced", 10, "Video lesson", "Assumptions"],
  ["ka-lr-sufficient-assumptions-worked", "Sufficient Assumptions | Worked Example", "lr", "Logical Reasoning", "Question types", "Advanced", 10, "Worked example", "Assumptions"],
  ["ka-lr-strengthen-weaken-quick", "Strengthen and Weaken | Quick Guide", "lr", "Logical Reasoning", "Question types", "Intermediate", 7, "Quick guide", "Strengthen or Weaken"],
  ["ka-lr-strengthen-weaken-learn", "Strengthen and Weaken | Learn More", "lr", "Logical Reasoning", "Question types", "Intermediate", 12, "Deep-dive lesson", "Strengthen or Weaken"],
  ["ka-lr-strengthen-video", "Strengthen | Video Lesson", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Video lesson", "Strengthen or Weaken"],
  ["ka-lr-strengthen-worked", "Strengthen | Worked Example", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Worked example", "Strengthen or Weaken"],
  ["ka-lr-weaken-video", "Weaken | Video Lesson", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Video lesson", "Strengthen or Weaken"],
  ["ka-lr-weaken-worked", "Weaken | Worked Example", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Worked example", "Strengthen or Weaken"],
  ["ka-lr-helpful-quick", "Helpful to Know | Quick Guide", "lr", "Logical Reasoning", "Question types", "Intermediate", 7, "Quick guide", "Assumptions"],
  ["ka-lr-helpful-learn", "Helpful to Know | Learn More", "lr", "Logical Reasoning", "Question types", "Intermediate", 11, "Deep-dive lesson", "Assumptions"],
  ["ka-lr-helpful-video", "Helpful to Know | Video Lesson", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Video lesson", "Assumptions"],
  ["ka-lr-helpful-worked", "Helpful to Know | Worked Example", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Worked example", "Assumptions"],
  ["ka-lr-explain-resolve-quick", "Explain or Resolve | Quick Guide", "lr", "Logical Reasoning", "Question types", "Intermediate", 7, "Quick guide", "Strengthen or Weaken"],
  ["ka-lr-explain-resolve-learn", "Explain or Resolve | Learn More", "lr", "Logical Reasoning", "Question types", "Intermediate", 11, "Deep-dive lesson", "Strengthen or Weaken"],
  ["ka-lr-explain-video", "Explain | Video Lesson", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Video lesson", "Strengthen or Weaken"],
  ["ka-lr-explain-worked", "Explain | Worked Example", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Worked example", "Strengthen or Weaken"],
  ["ka-lr-resolve-video", "Resolve a Conflict | Video Lesson", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Video lesson", "Strengthen or Weaken"],
  ["ka-lr-resolve-worked", "Resolve a Conflict | Worked Example", "lr", "Logical Reasoning", "Question types", "Intermediate", 9, "Worked example", "Strengthen or Weaken"],
  ["ka-rc-getting-started", "Getting Started with Reading Comprehension", "rc", "Reading Comprehension", "Start here", "Beginner", 8, "Article + video lesson", "Reading Structure"],
  ["ka-rc-catalog-question-types", "Reading Comprehension Question Type Catalog", "rc", "Reading Comprehension", "Question types", "Beginner", 10, "Catalog lesson", "Reading Structure"],
  ["ka-rc-main-point-quick", "Main Point | Quick Guide", "rc", "Reading Comprehension", "Question types", "Beginner", 7, "Quick guide", "Reading Structure"],
  ["ka-rc-recognition-quick", "Recognition | Quick Guide", "rc", "Reading Comprehension", "Question types", "Beginner", 7, "Quick guide", "Reading Structure"],
  ["ka-rc-clarifying-meaning-quick", "Clarifying Meaning | Quick Guide", "rc", "Reading Comprehension", "Question types", "Intermediate", 7, "Quick guide", "Reading Structure"],
  ["ka-rc-purpose-reference-quick", "Purpose of Reference | Quick Guide", "rc", "Reading Comprehension", "Question types", "Intermediate", 7, "Quick guide", "Reading Structure"],
  ["ka-rc-organizing-info-quick", "Organizing Information | Quick Guide", "rc", "Reading Comprehension", "Question types", "Intermediate", 7, "Quick guide", "Reading Structure"],
  ["ka-rc-views-inference-quick", "Inferences About Views | Quick Guide", "rc", "Reading Comprehension", "Question types", "Intermediate", 7, "Quick guide", "Reading Structure"],
  ["ka-rc-info-inference-quick", "Inferences About Information | Quick Guide", "rc", "Reading Comprehension", "Question types", "Intermediate", 7, "Quick guide", "Reading Structure"],
  ["ka-rc-attitude-inference-quick", "Inferences About Attitudes | Quick Guide", "rc", "Reading Comprehension", "Question types", "Intermediate", 7, "Quick guide", "Reading Structure"],
  ["ka-rc-new-contexts-quick", "Applying to New Contexts | Quick Guide", "rc", "Reading Comprehension", "Question types", "Advanced", 8, "Quick guide", "Reading Structure"],
  ["ka-rc-principles-analogies-quick", "Principles and Analogies | Quick Guide", "rc", "Reading Comprehension", "Question types", "Advanced", 8, "Quick guide", "Reading Structure"],
  ["ka-rc-additional-evidence-quick", "Additional Evidence | Quick Guide", "rc", "Reading Comprehension", "Question types", "Advanced", 8, "Quick guide", "Reading Structure"],
  ["ka-rc-primary-purpose-quick", "Primary Purpose | Quick Guide", "rc", "Reading Comprehension", "Question types", "Beginner", 7, "Quick guide", "Reading Structure"],
  ["ka-rc-law-cosmic-overview", "Law Passage Overview | Cosmic Justice", "rc", "Reading Comprehension", "Question types", "Intermediate", 10, "Worked example", "Reading Structure"],
  ["ka-rc-law-cosmic-main-point", "Main Point | Law Passage | Cosmic Justice", "rc", "Reading Comprehension", "Question types", "Intermediate", 9, "Worked example", "Reading Structure"],
  ["ka-rc-law-cosmic-recognition", "Recognition | Law Passage | Cosmic Justice", "rc", "Reading Comprehension", "Question types", "Intermediate", 9, "Worked example", "Reading Structure"],
  ["ka-rc-law-cosmic-views", "Inferences About Views | Law Passage | Cosmic Justice", "rc", "Reading Comprehension", "Question types", "Intermediate", 9, "Worked example", "Reading Structure"],
  ["ka-rc-law-cosmic-info", "Inferences About Info | Law Passage | Cosmic Justice", "rc", "Reading Comprehension", "Question types", "Intermediate", 9, "Worked example", "Reading Structure"],
  ["ka-rc-law-cosmic-principles", "Principles | Law Passage | Cosmic Justice", "rc", "Reading Comprehension", "Question types", "Advanced", 9, "Worked example", "Reading Structure"],
  ["ka-rc-law-cosmic-analogies", "Analogies | Law Passage | Cosmic Justice", "rc", "Reading Comprehension", "Question types", "Advanced", 9, "Worked example", "Reading Structure"],
  ["ka-rc-law-copyright-overview", "Law Passage Overview | Copyright", "rc", "Reading Comprehension", "Question types", "Intermediate", 10, "Worked example", "Reading Structure"],
  ["ka-rc-law-copyright-main-point", "Main Point | Law Passage | Copyright", "rc", "Reading Comprehension", "Question types", "Intermediate", 9, "Worked example", "Reading Structure"],
  ["ka-rc-law-copyright-reference", "Purpose of Reference | Law Passage | Copyright", "rc", "Reading Comprehension", "Question types", "Intermediate", 9, "Worked example", "Reading Structure"],
  ["ka-rc-law-copyright-contexts", "Applying to New Contexts | Law Passage | Copyright", "rc", "Reading Comprehension", "Question types", "Advanced", 9, "Worked example", "Reading Structure"],
  ["ka-rc-humanities-music-overview", "Humanities Passage Overview | Music", "rc", "Reading Comprehension", "Question types", "Intermediate", 10, "Worked example", "Reading Structure"],
  ["ka-rc-humanities-music-main-point-1", "Main Point 1 | Humanities Passage | Music", "rc", "Reading Comprehension", "Question types", "Intermediate", 9, "Worked example", "Reading Structure"],
  ["ka-rc-humanities-music-main-point-2", "Main Point 2 | Humanities Passage | Music", "rc", "Reading Comprehension", "Question types", "Intermediate", 9, "Worked example", "Reading Structure"],
  ["ka-rc-humanities-music-recognition", "Recognition | Humanities Passage | Music", "rc", "Reading Comprehension", "Question types", "Intermediate", 9, "Worked example", "Reading Structure"],
  ["ka-rc-humanities-music-views", "Inferences About Views | Humanities Passage | Music", "rc", "Reading Comprehension", "Question types", "Intermediate", 9, "Worked example", "Reading Structure"],
  ["ka-rc-humanities-music-principles", "Principles and Analogies | Humanities Passage | Music", "rc", "Reading Comprehension", "Question types", "Advanced", 9, "Worked example", "Reading Structure"],
  ["ka-rc-humanities-music-evidence", "Additional Evidence | Humanities Passage | Music", "rc", "Reading Comprehension", "Question types", "Advanced", 9, "Worked example", "Reading Structure"],
  ["ka-rc-humanities-music-purpose", "Primary Purpose | Humanities Passage | Music", "rc", "Reading Comprehension", "Question types", "Intermediate", 9, "Worked example", "Reading Structure"],
  ["ka-rc-science-sun-overview", "Science Passage Overview | The Sun", "rc", "Reading Comprehension", "Question types", "Beginner", 10, "Worked example", "Reading Structure"],
  ["ka-rc-science-sun-recognition-1", "Recognition 1 | Science Passage | The Sun", "rc", "Reading Comprehension", "Question types", "Beginner", 9, "Worked example", "Reading Structure"],
  ["ka-rc-science-sun-recognition-2", "Recognition 2 | Science Passage | The Sun", "rc", "Reading Comprehension", "Question types", "Beginner", 9, "Worked example", "Reading Structure"],
  ["ka-rc-science-sun-organizing", "Organizing Info | Science Passage | The Sun", "rc", "Reading Comprehension", "Question types", "Intermediate", 9, "Worked example", "Reading Structure"],
  ["ka-rc-science-sun-views-1", "Inferences About Views 1 | Science Passage | The Sun", "rc", "Reading Comprehension", "Question types", "Intermediate", 9, "Worked example", "Reading Structure"],
  ["ka-rc-science-sun-views-2", "Inferences About Views 2 | Science Passage | The Sun", "rc", "Reading Comprehension", "Question types", "Intermediate", 9, "Worked example", "Reading Structure"],
  ["ka-rc-science-sun-views-3", "Inferences About Views 3 | Science Passage | The Sun", "rc", "Reading Comprehension", "Question types", "Intermediate", 9, "Worked example", "Reading Structure"],
  ["ka-rc-science-sun-info", "Inferences About Info | Science Passage | The Sun", "rc", "Reading Comprehension", "Question types", "Intermediate", 9, "Worked example", "Reading Structure"],
  ["ka-rc-social-wool-overview", "Social Science Passage Overview | Wool", "rc", "Reading Comprehension", "Question types", "Beginner", 10, "Worked example", "Reading Structure"],
  ["ka-rc-social-wool-main-point", "Main Point | Social Science Passage | Wool", "rc", "Reading Comprehension", "Question types", "Beginner", 9, "Worked example", "Reading Structure"],
  ["ka-rc-social-wool-recognition-1", "Recognition 1 | Social Science Passage | Wool", "rc", "Reading Comprehension", "Question types", "Beginner", 9, "Worked example", "Reading Structure"],
  ["ka-rc-social-wool-recognition-2", "Recognition 2 | Social Science Passage | Wool", "rc", "Reading Comprehension", "Question types", "Beginner", 9, "Worked example", "Reading Structure"],
  ["ka-rc-social-wool-info", "Inferences About Info | Social Science Passage | Wool", "rc", "Reading Comprehension", "Question types", "Intermediate", 9, "Worked example", "Reading Structure"],
  ["ka-rc-social-wool-attitudes", "Inferences About Attitudes | Social Science Passage | Wool", "rc", "Reading Comprehension", "Question types", "Intermediate", 9, "Worked example", "Reading Structure"],
  ["ka-logic-equivalence", "Conditional Reasoning and Logical Equivalence", "lr", "Logical Reasoning", "Core concepts", "Intermediate", 12, "Logic toolbox video", "Conditional Logic"],
  ["ka-logic-if-then", "If X, Then Y | Sufficiency and Necessity", "lr", "Logical Reasoning", "Core concepts", "Beginner", 10, "Logic toolbox video", "Conditional Logic"],
  ["ka-logic-if-only-if", "The Logic of If vs. Only If", "lr", "Logical Reasoning", "Core concepts", "Intermediate", 10, "Logic toolbox video", "Conditional Logic"],
  ["ka-logic-conditional-quick", "A Quick Guide to Conditional Logic", "lr", "Logical Reasoning", "Core concepts", "Beginner", 8, "Quick guide", "Conditional Logic"],
];

function requestedDashboardLessonSummary(title, type, skill) {
  const lowerType = type.toLowerCase();
  if (lowerType.includes('worked')) return 'Worked example: identify the task, predict the answer job, eliminate traps, and launch a related ' + skill.toLowerCase() + ' drill.';
  if (lowerType.includes('quick')) return 'Quick guide: the minimum method, the common trap, and the next practice move for this LSAT task.';
  if (lowerType.includes('video')) return 'Animated video lesson with storyboard frames, transcript-style notes, trap control, and mastery practice.';
  return 'Original JessiPreps lesson with examples, trap warnings, and a drill handoff for ' + skill.toLowerCase() + '.';
}

function requestedDashboardScenes(title, type, skill, topicLabel) {
  const isRc = topicLabel === 'Reading Comprehension';
  const isWorked = type.toLowerCase().includes('worked');
  const target = isRc ? 'passage' : 'stimulus';
  return [
    { type: 'concept', title: 'What this trains', explanation: title + ' trains you to name the task before answer choices start borrowing familiar words.', storyboard: 'Task -> method -> proof.', actionCue: 'Say the job in plain English first.' },
    { type: 'worked-example', title: isWorked ? 'Worked example flow' : 'Core method', explanation: isRc ? 'Map the passage movement, locate proof, then choose the answer that matches the author role and wording.' : 'Find the conclusion or fact set, name the bridge or burden, then choose the answer that performs the exact job.', storyboard: target + ' -> proof -> answer job.', actionCue: 'Predict before you look down.' },
    { type: 'trap', title: 'Trap to reject', explanation: 'Wrong answers often match the topic while changing the force, viewpoint, role, or logical direction.', storyboard: 'Familiar words are not proof.', actionCue: 'Eliminate the answer that sounds related but misses the job.' },
    { type: 'recap', title: 'Next move', explanation: 'After the lesson, run a short ' + skill.toLowerCase() + ' drill and journal one reusable rule from any miss.', storyboard: 'Watch -> drill -> journal.', actionCue: 'Turn the lesson into one action.' },
  ];
}

function requestedQuestionFamily(skill, topicLabel, title) {
  if (topicLabel === 'Reading Comprehension') {
    if (/main point|primary purpose/i.test(title)) return 'RC Main Point';
    if (/attitude|views/i.test(title)) return 'RC Attitude';
    if (/reference|organizing|recognition|meaning/i.test(title)) return 'RC Function';
    if (/inference|additional evidence|context|analog/i.test(title)) return 'RC Inference';
    return 'RC Structure';
  }
  if (skill === 'Conditional Logic') return 'Conditional Logic';
  if (skill === 'Flaws' && /match/i.test(title)) return 'Parallel Flaw';
  if (skill === 'Flaws') return 'Flaw';
  if (skill === 'Assumptions' && /helpful|sufficient|necessary/i.test(title)) return 'Assumption';
  if (skill === 'Strengthen or Weaken' && /weaken/i.test(title)) return 'Weaken';
  if (skill === 'Strengthen or Weaken' && /explain|resolve|conflict/i.test(title)) return 'Resolve / Explain';
  if (skill === 'Strengthen or Weaken') return 'Strengthen';
  if (/entailment|supported inference/i.test(title)) return 'Must Be True';
  if (/dispute/i.test(title)) return 'Point at Issue';
  if (/principle/i.test(title)) return 'Principle';
  if (/role|technique|method|structure/i.test(title)) return 'Role / Method / Technique';
  return 'Main Point';
}

function requestedTrapPattern(family) {
  const traps = {
    'RC Structure': 'Mistakes topic for structure',
    'RC Inference': 'Chooses a claim stronger than the passage supports',
    'RC Attitude': 'Reads neutral summary as endorsement',
    'RC Function': 'Confuses paragraph topic with paragraph job',
    'RC Main Point': 'Picks a major detail instead of the overall mission',
    Flaw: 'Spots topic instead of reasoning error',
    Assumption: 'Picks a helpful fact instead of a necessary bridge',
    Strengthen: 'Supports the topic instead of the argument',
    Weaken: 'Attacks the topic instead of the bridge',
    'Conditional Logic': 'Reverses the conditional arrow',
    'Main Point': 'Selects evidence instead of conclusion',
    'Role / Method / Technique': 'Describes content instead of function',
    'Must Be True': 'Picks plausible but unproven information',
    'Resolve / Explain': 'Explains only one side of the surprise',
    Principle: 'Chooses an attractive slogan instead of the exact rule',
    'Parallel Flaw': 'Matches topic instead of flawed structure',
    'Point at Issue': 'Chooses a claim only one speaker addressed',
  };
  return traps[family] || 'Matches familiar words instead of the task';
}

function requestedQuestionStem(family) {
  const stems = {
    'RC Structure': 'Which answer best describes the passage structure?',
    'RC Inference': 'Which answer is most strongly supported by the passage?',
    'RC Attitude': 'The author attitude is best described as',
    'RC Function': 'The referenced detail primarily functions to',
    'RC Main Point': 'Which answer best states the passage main point?',
    Flaw: 'The reasoning is most vulnerable to criticism because it',
    Assumption: 'Which assumption is required by the argument?',
    Strengthen: 'Which answer would most strengthen the argument?',
    Weaken: 'Which answer would most weaken the argument?',
    'Conditional Logic': 'Which answer must be true?',
    'Main Point': 'Which answer best states the main conclusion?',
    'Role / Method / Technique': 'The highlighted claim plays which role?',
    'Must Be True': 'Which answer must be true based on the statements above?',
    'Resolve / Explain': 'Which answer best resolves the apparent conflict?',
    Principle: 'Which principle best justifies the reasoning?',
    'Parallel Flaw': 'Which answer contains the same flaw?',
    'Point at Issue': 'The speakers disagree about whether',
  };
  return stems[family] || 'Which answer best completes the task?';
}

function requestedPrompt(family, title, index) {
  if (family.startsWith('RC')) {
    return `Passage summary for ${title}: Paragraph 1 introduces a familiar view. Paragraph 2 gives a limitation or rival view. Paragraph 3 states a careful author response with one qualified conclusion.`;
  }
  if (family === 'Conditional Logic') {
    return `If a study plan is adaptive, then it includes review checkpoints. Any plan with review checkpoints requires logged misses. Plan ${index + 1} is adaptive.`;
  }
  if (family === 'Point at Issue') {
    return `Speaker A says the new study schedule should be adopted because it increased accuracy. Speaker B says the schedule should not be adopted unless it also reduces fatigue.`;
  }
  if (family === 'Resolve / Explain') {
    return `Students using a new review method answered fewer questions per hour, yet their timed-section scores rose after two weeks.`;
  }
  return `A tutor argues that because students who used a new review routine improved more than students who did not, the routine caused the improvement and should be assigned to everyone.`;
}

function requestedOptions(family) {
  const byFamily = {
    'RC Structure': ['It presents a view, introduces a challenge, and offers a qualified response', 'It lists unrelated facts with no organizing claim', 'It argues only through personal narrative', 'It defines terms without any shift in viewpoint'],
    'RC Inference': ['The author would reject all versions of the familiar view', 'The author sees the familiar view as useful but incomplete', 'The passage proves the rival view is impossible', 'The passage gives no reason to distinguish the views'],
    'RC Attitude': ['qualified and analytical', 'openly hostile', 'uncritically enthusiastic', 'confused and indifferent'],
    'RC Function': ['support a later qualification of the main view', 'state the author final conclusion by itself', 'change the subject to an unrelated issue', 'prove that all rival views are false'],
    'RC Main Point': ['A familiar view needs qualification in light of a limitation or rival view', 'Every familiar view is completely wrong', 'The passage is only a list of definitions', 'The author refuses to evaluate the issue'],
    Flaw: ['treats a correlation as enough to prove causation', 'attacks the source instead of the claim', 'uses a word in two unrelated senses', 'states a conclusion that is narrower than the evidence'],
    Assumption: ['The students using the routine were not already more likely to improve', 'All students prefer routines with more steps', 'The routine is the cheapest possible option', 'No student ever dislikes assigned review'],
    Strengthen: ['The groups had similar starting scores and study time before the routine began', 'Some students like having a routine', 'The routine has a memorable name', 'The tutor has used other routines before'],
    Weaken: ['The students who chose the routine already had much higher starting scores', 'The routine can be written on one page', 'Some students completed the assignment at home', 'The tutor explained the routine clearly'],
    'Conditional Logic': ['Plan 1 includes logged misses', 'Every plan with logged misses is adaptive', 'Plans without review checkpoints are always effective', 'Plan 1 is not adaptive'],
    'Main Point': ['The routine should be assigned to everyone', 'Some students improved', 'The tutor observed two groups', 'Improvement can be measured'],
    'Role / Method / Technique': ['It is evidence offered to support the recommendation', 'It is the final recommendation itself', 'It is an opposing view the author rejects', 'It is an unrelated background claim'],
    'Must Be True': ['At least one adaptive plan includes logged misses', 'Every plan with logged misses is adaptive', 'No nonadaptive plan includes review checkpoints', 'All study plans are adaptive'],
    'Resolve / Explain': ['The method slowed practice but made review accurate enough to reduce repeated mistakes', 'The students stopped studying after two weeks', 'The questions became impossible to answer', 'The score increase happened before the method began'],
    Principle: ['A routine should be assigned when it improves performance for comparable students and no relevant downside is shown', 'Any popular routine should be required', 'A routine is good only if every student likes it', 'No routine should ever be assigned'],
    'Parallel Flaw': ['A group using a tool improved, so the tool alone must have caused the improvement', 'If a rule applies, a result follows; the rule applies, so the result follows', 'A claim is rejected because a critic dislikes it', 'Two speakers disagree about a policy goal'],
    'Point at Issue': ['accuracy improvement alone is enough to justify adopting the schedule', 'the schedule increased accuracy', 'students need some kind of schedule', 'fatigue can affect performance'],
  };
  return byFamily[family] || ['The answer performs the exact requested task', 'The answer changes the topic', 'The answer is too strong', 'The answer describes only background'];
}

function requestedExplanation(family, title) {
  return `${title} is testing ${family}. The credited answer does the exact job of the stem; the traps use familiar LSAT words while changing force, role, viewpoint, or support.`;
}

function buildRequestedQuestionLibrary() {
  return requestedWebsiteLessonBlueprints.map(([id, title, topic, topicLabel, category, difficulty, minutes, type, skill], index) => {
    const family = requestedQuestionFamily(skill, topicLabel, title);
    return {
      id: `rq-${String(index + 1).padStart(3, '0')}-${id}`,
      section: topicLabel === 'Reading Comprehension' ? 'RC' : 'LR',
      family,
      difficulty: difficulty.toLowerCase(),
      lessonIds: [id],
      prompt: requestedPrompt(family, title, index),
      question: requestedQuestionStem(family),
      options: requestedOptions(family),
      answer: 0,
      explanation: requestedExplanation(family, title),
      trapPattern: requestedTrapPattern(family),
    };
  });
}

(function addRequestedWebsiteLessons() {
  const data = window.JESSI_PREPS_DATA;
  if (!data || !Array.isArray(data.lessons)) return;
  const existing = new Set(data.lessons.map((lesson) => lesson.id));
  const additions = requestedWebsiteLessonBlueprints
    .filter(([id]) => !existing.has(id))
    .map(([id, title, topic, topicLabel, category, difficulty, minutes, type, skill], index) => ({
      id,
      title,
      track: topicLabel === 'Reading Comprehension' ? 'RC Requested Lessons' : topic === 'strategy' ? 'Strategy Requested Lessons' : 'LR Requested Lessons',
      sourceTags: ['Requested curriculum', type, category],
      summary: requestedDashboardLessonSummary(title, type, skill),
      statusLabel: type,
      masteryThreshold: 3,
      linkedQuestionFamilies: topicLabel === 'Reading Comprehension' ? ['RC Structure', 'RC Inference', 'RC Main Point'] : skill === 'Conditional Logic' ? ['Conditional Logic', 'Must Be True'] : skill === 'Flaws' ? ['Flaw', 'Parallel Flaw'] : skill === 'Assumptions' ? ['Assumption', 'Evaluate'] : skill === 'Strengthen or Weaken' ? ['Strengthen', 'Weaken', 'Resolve / Explain'] : ['Main Point', 'Role / Method / Technique'],
      nextLessonId: requestedWebsiteLessonBlueprints[index + 1]?.[0] || null,
      scenes: requestedDashboardScenes(title, type, skill, topicLabel),
      workedExample: {
        prompt: topicLabel === 'Reading Comprehension' ? 'A passage uses multiple viewpoints, examples, and qualifying language.' : 'A stimulus gives evidence and asks you to perform a specific LSAT reasoning task.',
        reasoning: topicLabel === 'Reading Comprehension' ? 'The correct answer must match the passage role, author attitude, and textual proof.' : 'The correct answer must perform the stem job: prove, describe, strengthen, weaken, assume, resolve, or match structure.',
      },
      trapExplanation: 'The common trap is choosing an answer because it sounds familiar instead of because it performs the exact requested job.',
    }));
  data.lessons.push(...additions);
  if (Array.isArray(data.questionBank)) {
    const existingQuestionIds = new Set(data.questionBank.map((question) => question.id));
    const questions = buildRequestedQuestionLibrary().filter((question) => !existingQuestionIds.has(question.id));
    data.questionBank.push(...questions);
  }
})();
