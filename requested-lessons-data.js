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

function requestedLessonFocus(title, skill) {
  const cleanedTitle = String(title || '')
    .replace(/\s*\|\s*(Quick Guide|Learn More|Video Lesson|Worked Example|Examples).*$/i, '')
    .replace(/^A\s+Quick\s+Guide\s+to\s+/i, '')
    .replace(/^Working\s+with\s+/i, '')
    .replace(/\s*\|\s*(Humanities|Law|Science|Social Science).*$/i, '')
    .trim();
  return (cleanedTitle || skill || 'LSAT task').toLowerCase();
}

function requestedDashboardLessonSummary(title, type, skill) {
  const lowerType = type.toLowerCase();
  const focus = requestedLessonFocus(title, skill);
  if (lowerType.includes('worked')) return `Worked example: identify the ${focus} task, predict the answer job, eliminate traps, and launch a targeted drill.`;
  if (lowerType.includes('quick')) return `Quick guide: the fastest method for ${focus}, its most tempting trap, and the next practice move.`;
  if (lowerType.includes('video')) return `Animated lesson: Professor Maya walks through ${focus} with storyboard frames, trap analysis, and mastery practice.`;
  return `Original JessiPreps lesson with examples, trap warnings, and a drill handoff for ${focus}.`;
}

function requestedDashboardScenes(title, type, skill, topicLabel) {
  const isRc = topicLabel === 'Reading Comprehension';
  const isWorked = type.toLowerCase().includes('worked');
  const focus = requestedLessonFocus(title, skill);
  const target = isRc ? 'passage' : 'stimulus';
  return [
    { type: 'concept', title: 'What this trains', explanation: title + ' trains you to name the task before answer choices start borrowing familiar words.', storyboard: 'Task -> method -> proof.', actionCue: 'Say the job in plain English first.' },
    { type: 'worked-example', title: isWorked ? 'Worked example flow' : 'Core method', explanation: isRc ? 'Map the passage movement, locate proof, then choose the answer that matches the author role and wording.' : 'Find the conclusion or fact set, name the bridge or burden, then choose the answer that performs the exact job.', storyboard: target + ' -> proof -> answer job.', actionCue: 'Predict before you look down.' },
    { type: 'trap', title: 'Trap to reject', explanation: 'Wrong answers often match the topic while changing the force, viewpoint, role, or logical direction.', storyboard: 'Familiar words are not proof.', actionCue: 'Eliminate the answer that sounds related but misses the job.' },
    { type: 'recap', title: 'Next move', explanation: 'After the lesson, run a short ' + focus + ' drill and journal one reusable rule from any miss.', storyboard: 'Watch -> drill -> journal.', actionCue: 'Turn the lesson into one action.' },
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

const v2VideoSamples = {
  'ka-lr-flaw-video': {
    status: 'sample-mp4',
    path: 'output/videos/lessons/047-identify-a-flaw-video-lesson.mp4',
    theme: 'LR Flaws',
  },
  'ka-lr-necessary-assumptions-video': {
    status: 'sample-mp4',
    path: 'output/videos/lessons/055-necessary-assumptions-video-lesson.mp4',
    theme: 'Necessary Assumptions',
  },
  'ka-lr-strengthen-video': {
    status: 'sample-mp4',
    path: 'output/videos/lessons/063-strengthen-video-lesson.mp4',
    theme: 'Strengthen / Weaken',
  },
  'rc-structure-map': {
    status: 'sample-mp4',
    path: 'output/videos/lessons/079-main-point-quick-guide.mp4',
    theme: 'RC Passage Mapping',
  },
  'ka-logic-if-then': {
    status: 'sample-mp4',
    path: 'output/videos/lessons/125-if-x-then-y-sufficiency-and-necessity.mp4',
    theme: 'Conditional Logic',
  },
  'ka-about-lsat-lessons': {
    status: 'sample-mp4',
    path: 'output/videos/lessons/001-about-lsat-lessons.mp4',
    theme: 'Blind Review Method',
  },
};

const v2FallbackVideoPaths = Object.values(v2VideoSamples).map((sample) => sample.path);

const v2YouTubeLessonVideos = [
  ['yt-strengthen-1428', 'How To Solve a Strengthen Question | Demon Daily, Ep. 1428', 'eJbG2-Oyyfk', '14:47', ['strengthen'], ['ka-lr-strengthen-video', 'ka-lr-strengthen-worked', 'ka-lr-strengthen-weaken-quick', 'ka-lr-strengthen-weaken-learn']],
  ['yt-assumptions-1424', 'Sufficient and Necessary Assumptions Made Easy | Demon Daily, Ep. 1424', 'tt109wjSeDE', '10:40', ['assumption', 'assumptions', 'necessary', 'sufficient'], ['ka-lr-necessary-assumptions-video', 'ka-lr-sufficient-assumptions-video', 'ka-lr-necessary-assumptions-quick', 'ka-lr-sufficient-assumptions-quick']],
  ['yt-flaw-1404', 'Solving Flaw Questions | Demon Daily, Ep. 1404', 'ZNjW-HPC5uM', '16:37', ['flaw', 'flaws'], ['ka-lr-flaw-video', 'ka-lr-flaw-worked', 'ka-lr-flaw-quick']],
  ['yt-parallel-1388', 'Achieve Parallel Perfection | Demon Daily, Ep. 1388', 'aqYE88KvHyo', '14:10', ['parallel', 'match structure'], ['ka-lr-match-structure-video', 'ka-lr-match-structure-worked']],
  ['yt-five-stages', 'The Five Stages of Answering a Logical Reasoning Question', '32YBN7DdEpg', '12:37', ['logical reasoning', 'question type', 'core strategy'], ['ka-lr-getting-started', 'ka-lr-catalog-question-types']],
  ['yt-closed-open', 'LSAT Logical Reasoning: Closed vs. Open Question Types', '2OsCKySYUes', '6:41', ['question type', 'question types'], ['ka-lr-catalog-question-types']],
  ['yt-dont-diagram', "LSAT Logical Reasoning: Don't Diagram", '1S7_rS6DviE', '10:41', ['diagram', 'conditional'], ['ka-logic-conditional-quick', 'ka-logic-if-then']],
  ['yt-except-questions', 'LSAT Logical Reasoning: How to Answer "Except" Questions', 'G_xlojiHMm8', '6:46', ['except', 'question type'], ['ka-lr-catalog-question-types']],
  ['yt-causation-1', 'LSAT Logical Reasoning: Correlation vs. Causation', 'iUQ_lZ1RnqM', '4:04', ['correlation', 'causation', 'cause'], ['ka-lr-types-flaws', 'ka-lr-flaw-video']],
  ['yt-conclusion-ways', 'LSAT Logical Reasoning: Three Ways to Find the Conclusion of an Argument', 'sPWTRkzjw1k', '6:24', ['conclusion', 'argument'], ['ka-lr-identify-conclusion-video', 'ka-lr-identify-conclusion-quick', 'ka-lr-introduction-arguments']],
  ['yt-specific-general-predictions', 'Specific and General Predictions', 'ozRbeXj8XuY', '6:06', ['predict', 'prediction'], ['ka-lr-technique-video', 'ka-lr-catalog-question-types']],
  ['yt-predicting-answers', 'Predicting Answers in LSAT Logical Reasoning', 'yXD9GOKxIqU', '3:17', ['predict', 'prediction'], ['ka-lr-technique-video', 'ka-lr-catalog-question-types']],
  ['yt-assessing-arguments', 'Assessing Arguments in LSAT Logical Reasoning', 'JVLKjJNFnFo', '8:03', ['argument', 'evidence', 'conclusion'], ['ka-lr-introduction-arguments', 'ka-lr-types-evidence']],
  ['yt-causation-2', 'Correlation vs. Causation | LSAT Logical Reasoning', 'ANBYwj3IZNA', '3:05', ['correlation', 'causation', 'cause'], ['ka-lr-types-flaws', 'ka-lr-flaw-learn']],
  ['yt-finding-flaws', 'Finding Flaws in the Argument on LSAT Logical Reasoning', 'Z204XH6xhto', '4:43', ['flaw', 'argument'], ['ka-lr-flaw-video', 'ka-lr-flaw-learn']],
  ['yt-lr-goal', 'Your #1 Goal on LSAT Logical Reasoning', 'AuOX9y8z9Ao', '4:05', ['logical reasoning', 'core strategy'], ['ka-lr-getting-started', 'ka-lr-introduction-arguments']],
  ['yt-wrong-conclusion', 'Common Wrong Answers on Conclusion Questions | LSAT Logical Reasoning', 'Pqfh-eqQAMY', '1:55', ['conclusion', 'wrong answer'], ['ka-lr-identify-conclusion-examples', 'ka-lr-identify-conclusion-worked']],
  ['yt-conclusion-indicators', 'Conclusion Indicators on the LSAT', 'oeJhGmUc7D4', '2:08', ['conclusion', 'indicator'], ['ka-lr-identify-conclusion-video', 'ka-lr-types-conclusions']],
  ['yt-reasoning-intro', 'Intro to Reasoning Questions | LSAT Logical Reasoning', 'dUeSQF5-4hA', '2:22', ['reasoning', 'question type'], ['ka-lr-getting-started', 'ka-lr-catalog-question-types']],
  ['yt-two-common-flaws', "LSAT Logical Reasoning's Two Most Common Flaws", 'WF-zfjgLWso', '16:50', ['flaw', 'flaws'], ['ka-lr-types-flaws', 'ka-lr-flaw-video']],
  ['yt-easy-way', 'Do the LSAT the Easy Way | LSAT Logical Reasoning', 'MBnr9PRf1Dc', '1:44', ['core strategy', 'logical reasoning'], ['ka-lr-getting-started']],
  ['yt-parallel-approach', 'How to Approach Parallel Questions | LSAT Logical Reasoning', 'wtqj9aMSMSI', '3:36', ['parallel', 'match structure'], ['ka-lr-match-structure-video', 'ka-lr-match-principles-video']],
  ['yt-parallel-intro', 'Intro to Parallel Questions | LSAT Logical Reasoning', 'Y0g29oXztPQ', '4:42', ['parallel', 'match structure'], ['ka-lr-match-structure-quick', 'ka-lr-match-principles-quick']],
  ['yt-disagree-intro', 'Intro to Disagree Questions | LSAT Logical Reasoning', 'R1EH2CHhguw', '4:28', ['disagree', 'dispute'], ['ka-lr-disputes-video', 'ka-lr-disputes-quick']],
  ['yt-paradox-intro', 'Intro to Paradox Questions | LSAT Logical Reasoning', 'yZDldMokOWc', '4:45', ['paradox', 'resolve', 'explain'], ['ka-lr-resolve-video', 'ka-lr-explain-video']],
  ['yt-dont-skip', "LSAT Logical Reasoning | Don't Skip Questions", 'gJmSZnZoSGI', '0:52', ['strategy', 'pacing'], ['ka-about-lsat-lessons', 'ka-lr-getting-started']],
  ['yt-predict-short', 'How to Predict Answers in Logical Reasoning | LSAT', 'W_0hEvXkkSo', '2:06', ['predict', 'prediction'], ['ka-lr-technique-video']],
  ['yt-abstract-answers', 'LSAT Logical Reasoning | Understanding Abstract Answer Choices', 'uWBAIQ8FeHE', '1:05', ['abstract', 'answer choices'], ['ka-lr-match-structure-video', 'ka-lr-technique-video']],
  ['yt-single-types', "LSAT Logical Reasoning | Why You Shouldn't Drill Single Question Types", 'pBcq9pzMbPY', '1:58', ['drill', 'question types'], ['ka-lr-catalog-question-types']],
  ['yt-question-types', 'LSAT Logical Reasoning Question Types', 'mZRtAT0iVl0', '3:02', ['question type', 'question types'], ['ka-lr-catalog-question-types']],
  ['yt-all-rc', 'The Entire LSAT Is a Test of Reading Comprehension', 'xXc3D0LwfrU', '2:10', ['reading comprehension', 'rc'], ['ka-rc-getting-started', 'ka-lr-getting-started']],
  ['yt-spot-assumptions', 'LSAT Logical Reasoning | Spotting Assumptions in the Argument', 'fDZZ7ftqpW0', '1:11', ['assumption', 'assumptions'], ['ka-lr-necessary-assumptions-video', 'ka-lr-necessary-assumptions-learn']],
  ['yt-reviewing-specifically', 'Reviewing Specifically-Improving on the LSAT and in Life', 'GzTO1sPwBOk', '2:30', ['review', 'blind review'], ['ka-about-lsat-lessons']],
  ['yt-core-strategy', 'LSAT Logical Reasoning Core Strategy', 'Em-4IwKyPhI', '4:23', ['core strategy', 'logical reasoning'], ['ka-lr-getting-started', 'ka-lr-introduction-arguments']],
  ['yt-parallel-strategy', 'LSAT Logical Reasoning | Parallel Reasoning Strategy', '90eU1u58PAQ', '3:54', ['parallel', 'reasoning'], ['ka-lr-match-structure-video']],
  ['yt-principle', 'LSAT Logical Reasoning | "Principle" Questions', 'kLmWC-krogA', '2:16', ['principle', 'principles'], ['ka-lr-principle-video', 'ka-lr-match-principles-video']],
  ['yt-inference', 'Tackling LSAT Inference Questions', '4jCeb348bGY', '1:58', ['inference', 'must be true', 'entailment'], ['ka-lr-entailment-video', 'ka-lr-strong-inferences-video']],
  ['yt-mbt-approach', 'LSAT Logical Reasoning | How to Approach Must Be True Questions', 'RcoPmKgFtHk', '1:02', ['must be true', 'entailment'], ['ka-lr-entailment-video', 'ka-lr-strong-inferences-video']],
  ['yt-should', 'What Does "Should" Mean on the LSAT?', 'NpKhY94d0d8', '2:15', ['principle', 'should'], ['ka-lr-principle-video']],
  ['yt-success-depend', 'LSAT Logical Reasoning | What Does Your Success Depend On?', 'pv1gnkQZ2zI', '1:29', ['assumption', 'depend'], ['ka-lr-necessary-assumptions-video']],
  ['yt-top-down', 'LSAT Logical Reasoning | Top Down vs. Bottom Up Questions', '0SRGbM0UQKQ', '3:49', ['technique', 'question type'], ['ka-lr-technique-video', 'ka-lr-catalog-question-types']],
  ['yt-mbt', 'LSAT Logical Reasoning | Must Be True Questions', 'xps3otQTf5g', '3:04', ['must be true', 'entailment'], ['ka-lr-entailment-video']],
  ['yt-fails-takes', 'LSAT Logical Reasoning | Fails to Consider vs. Takes for Granted', 'ttBsSnUZ7DI', '2:20', ['flaw', 'assumption', 'takes for granted'], ['ka-lr-flaw-video', 'ka-lr-necessary-assumptions-video']],
  ['yt-anxiety', 'LSAT Logical Reasoning Anxiety and Owning the Test', 'iZ0QCB2UeGc', '1:08', ['anxiety', 'pacing'], ['ka-about-lsat-lessons']],
  ['yt-15-right', "LSAT Logical Reasoning | Help! I'm only getting 15 questions right.", 'U23ykqrAiOo', '1:46', ['strategy', 'logical reasoning'], ['ka-lr-getting-started']],
  ['yt-down-to-two', 'LSAT Logical Reasoning | Narrowing it Down to Two Answers', 'NH6VqFvb6tA', '2:46', ['wrong answer', 'answer choices'], ['ka-lr-technique-video']],
  ['yt-quiz-assumption', "LSAT Logical Reasoning Quiz | What's an assumption on the LSAT?", '5rjJMDF_rgI', '5:05', ['assumption', 'quiz'], ['ka-lr-necessary-assumptions-video']],
  ['yt-quiz-causation', "LSAT Logical Reasoning Quiz | What's the Correlation to Causation Flaw?", 'Ajzviz1ayjQ', '3:31', ['correlation', 'causation', 'flaw'], ['ka-lr-flaw-video']],
  ['yt-quiz-intermediate-conclusion', "LSAT Logical Reasoning Quiz | What's an Intermediate Conclusion?", '9uZhlIKRV_E', '1:22', ['conclusion', 'intermediate conclusion'], ['ka-lr-types-conclusions', 'ka-lr-identify-conclusion-video']],
  ['yt-quiz-relative-absolute', "LSAT Logical Reasoning Quiz | What's the Relative to Absolute Flaw?", 'pnxaVTZ7xvc', '1:07', ['flaw', 'relative', 'absolute'], ['ka-lr-types-flaws', 'ka-lr-flaw-video']],
  ['yt-quiz-suff-nec-flaw', "LSAT Logical Reasoning Quiz | What's the Confusing Sufficient for Necessary Flaw?", 'caepqX4CdtU', '2:48', ['conditional', 'sufficient', 'necessary', 'flaw'], ['ka-logic-if-then', 'ka-lr-types-flaws']],
  ['yt-predict-not-hyperfocus', "LSAT Logical Reasoning | Predict the Answers but Don't Hyper Focus on Them", 'U3A7r4q02vI', '1:02', ['predict', 'prediction'], ['ka-lr-technique-video']],
  ['yt-outside-knowledge', 'LSAT Logical Reasoning Using Outside Knowledge on the LSAT', 'mkV1Yr-ohdE', '3:02', ['outside knowledge', 'inference'], ['ka-lr-entailment-video', 'ka-lr-strong-inferences-video']],
  ['yt-should-diagram', 'Should I Diagram on LSAT Logical Reasoning?', 'AgULtMYNeyk', '3:25', ['diagram', 'conditional'], ['ka-logic-conditional-quick', 'ka-logic-if-only-if']],
  ['yt-necessary-approach', 'How Should I Approach Necessary Assumption Questions?', '4pirpH2ebk8', '4:20', ['necessary assumption', 'assumption'], ['ka-lr-necessary-assumptions-video', 'ka-lr-necessary-assumptions-worked']],
  ['yt-do-you-get-it', 'LSAT Logical Reasoning | Do You Get It?', 'RXvga2niWJg', '4:47', ['review', 'understanding'], ['ka-about-lsat-lessons', 'ka-lr-getting-started']],
  ['yt-rc-reading-between-lines-1407', 'Stop Reading Between the Lines on RC | Demon Daily, Ep. 1407', 'mbp_uPqMd1c', '8:07', ['rc', 'reading comprehension', 'inference', 'supported', 'between the lines'], ['ka-rc-info-inference-quick', 'ka-rc-views-inference-quick', 'ka-rc-attitude-inference-quick', 'ka-rc-getting-started']],
  ['yt-rc-outside-knowledge', 'Using Outside Knowledge on the LSAT', '3BpG_h2qAu8', '3:04', ['outside knowledge', 'rc', 'reading comprehension'], ['ka-rc-getting-started', 'ka-rc-info-inference-quick', 'ka-rc-new-contexts-quick']],
  ['yt-rc-main-point-1', 'LSAT Reading Comprehension: Finding the Main Point', '8edED5Tb7gU', '9:56', ['main point', 'primary purpose', 'rc', 'reading comprehension'], ['ka-rc-main-point-quick', 'ka-rc-primary-purpose-quick', 'ka-rc-law-cosmic-main-point', 'ka-rc-law-copyright-main-point']],
  ['yt-rc-slow-down', 'Slow Down and Understand the Passage', 'zMnqL8RlqgQ', '8:36', ['passage', 'understand', 'slow down', 'rc structure', 'reading structure'], ['ka-rc-getting-started', 'ka-rc-organizing-info-quick', 'rc-structure-map']],
  ['yt-rc-main-point-2', 'Finding the Main Point on LSAT Reading Comprehension', 'dsJDrHZoCWo', '1:57', ['main point', 'primary purpose', 'rc'], ['ka-rc-main-point-quick', 'ka-rc-primary-purpose-quick']],
  ['yt-rc-notes', 'Should I take notes on LSAT Reading Comprehension?', 'c8ebYsoeMJs', '2:33', ['notes', 'passage map', 'rc structure', 'reading structure'], ['ka-rc-getting-started', 'ka-rc-organizing-info-quick', 'rc-structure-map']],
  ['yt-rc-predicting', 'LSAT Reading Comprehension | Predicting Answers', '09tEMct_l7Q', '1:09', ['predict', 'rc', 'reading comprehension'], ['ka-rc-info-inference-quick', 'ka-rc-recognition-quick', 'ka-rc-main-point-quick']],
  ['yt-rc-meaning', 'LSAT Reading Comprehension | Interpreting Words in the Passage', '2ukbiWSIzOM', '4:43', ['meaning', 'words', 'clarifying', 'reference'], ['ka-rc-clarifying-meaning-quick', 'ka-rc-purpose-reference-quick']],
  ['yt-rc-slow-speed', 'LSAT Reading Comprehension | Slowing Down to Speed Up', '82Bn0R0Lgfk', '1:54', ['speed', 'slow down', 'pacing', 'rc'], ['ka-rc-getting-started', 'ka-rc-organizing-info-quick']],
  ['yt-rc-focus', 'LSAT Reading Comprehension | Meditation and Focusing on the Passage', 's5F14yemG5M', '2:18', ['focus', 'passage', 'rc'], ['ka-rc-getting-started', 'rc-structure-map']],
  ['yt-rc-myth', 'Debunking the LSAT Reading Comprehension Myth', '2bBhNkyOQLU', '2:40', ['myth', 'reading comprehension', 'rc'], ['ka-rc-getting-started', 'ka-rc-catalog-question-types']],
  ['yt-rc-passage-review', 'LSAT Reading Comprehension | Proper Passage Review', 'I9e7TdS0QnQ', '1:50', ['review', 'passage review', 'rc'], ['ka-rc-getting-started', 'ka-rc-organizing-info-quick', 'rc-structure-map']],
  ['yt-rc-three-mistakes', "Three Ways You're Messing Up LSAT Reading Comprehension", '-R0sJR2kXKo', '1:42', ['mistake', 'rc', 'reading comprehension'], ['ka-rc-getting-started', 'ka-rc-catalog-question-types']],
  ['yt-rc-faster', 'How to Get Faster at LSAT Reading Comprehension', 'M7rmRgNC_QE', '1:06', ['speed', 'faster', 'pacing', 'rc'], ['ka-rc-getting-started', 'ka-rc-organizing-info-quick']],
  ['yt-rc-improve-effective', 'LSAT Reading Comprehension | The Most Effective Way To Improve', 'j0BNIDUsVHk', '2:36', ['improve', 'review', 'rc'], ['ka-rc-getting-started', 'ka-rc-catalog-question-types']],
  ['yt-rc-101', 'LSAT Reading Comprehension 101 with Ben Olson', 'fwKUrVWASdA', '5:43', ['rc 101', 'reading comprehension', 'start here'], ['ka-rc-getting-started', 'ka-rc-catalog-question-types']],
  ['yt-rc-approach-questions', 'How to Approach LSAT Reading Comprehension Questions', 'xOcfqoIOVLw', '5:39', ['approach', 'question types', 'rc'], ['ka-rc-catalog-question-types', 'ka-rc-recognition-quick', 'ka-rc-info-inference-quick']],
  ['yt-rc-number-one-skill', 'The #1 Skill to Work on to Improve on LSAT Reading Comprehension', 'rD_z5Yv5ElM', '2:08', ['skill', 'improve', 'rc'], ['ka-rc-getting-started', 'rc-structure-map']],
  ['yt-rc-how-to-improve', 'How To Improve on LSAT Reading Comprehension', 'qIKQg1AD2us', '2:39', ['improve', 'rc', 'reading comprehension'], ['ka-rc-getting-started', 'ka-rc-catalog-question-types']],
  ['yt-rc-predict-main-point', 'LSAT Reading Comprehension | Predict the Answer on Main Point Questions', 'OBuZh7PVsOY', '2:59', ['main point', 'predict', 'primary purpose'], ['ka-rc-main-point-quick', 'ka-rc-primary-purpose-quick']],
  ['yt-rc-main-point-questions', 'LSAT Reading Comprehension | Main Point Questions', '-2-wB72CWwI', '2:24', ['main point', 'primary purpose'], ['ka-rc-main-point-quick', 'ka-rc-primary-purpose-quick']],
].map(([id, title, youtubeId, duration, keywords, lessonIds]) => ({
  id,
  title,
  youtubeId,
  duration,
  keywords,
  lessonIds,
  sourceChannel: 'LSAT Demon',
  sourcePlaylist: id.startsWith('yt-rc-') ? 'LSAT Reading Comprehension Strategies' : 'LSAT Logical Reasoning Strategies',
  watchUrl: `https://www.youtube.com/watch?v=${youtubeId}`,
  embedUrl: `https://www.youtube.com/embed/${youtubeId}`,
}));


const v2MyGuruEdgeVideoRows = [
  ['yt-myguru-rc-hard-001', "How to Find the Main Idea of a LSAT Passage Using LawHub Reading Comprehension Drill Set 1", '9YK5XWg3__U', '14:44', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-002', "How to Find Details in a LSAT Passage Using LawHub Reading Comprehension Drill Set 1", 'QNvGTJOGXZQ', '5:12', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-003', "How to Identify Author Purpose in a LSAT Passage Using LawHub Reading Comprehension Drill Set 1", '1VfQ6buUj3g', '5:23', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-004', "How to Address Three LSAT Inference Questions Using LawHub Reading Comprehension Drill Set 1", '_tNa89s-uHo', '13:00', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-005', "How to Locate LSAT Passage Details Using the Find Tool of LawHub Reading Comprehension Drill Set 1", 'dqNfIhTbA_k', '4:31', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-006', "How to Address a LSAT Dual Passage RC Question Set Using LawHub Reading Comprehension Drill Set 1", 'vSg_XxJ9bfY', '20:52', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-007', "Up Front Reading & Finding a LSAT Humanities Main Idea w/ LawHub Reading Comprehension Drill Set 5", 'EgqE6G4Xg70', '12:49', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-008', "How to Find a Detail in a LSAT Humanities Passage w/ LawHub Reading Comprehension Drill Set 5", 'DEVhbekiUCY', '3:02', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-009', "Finding a Specific Detail in a LSAT Humanities Passage w/ LawHub Reading Comprehension Drill Set 5", '-yzElGxHpU8', '3:52', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-010', "Describing Organization of a LSAT Humanities Passage w/ LawHub Reading Comprehension Drill Set 5", 'YIqsyXzmVEw', '2:28', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-011', "Inferring a LSAT Humanities Passage Author Perspective w/ LawHub Reading Comprehension Drill Set 5", 'jCUlrXsJybQ', '4:09', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-012', "How to Find a LSAT Humanities Passage Analogy Using LawHub Reading Comprehension Drill Set 5", '6nVnfRekeu0', '4:25', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-013', "How to Weaken a LSAT Humanities Passage Argument Using LawHub Reading Comprehension - Drill Set 5", 'K5SC0pUR5vo', '4:40', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-014', "Full Law Reading Comprehension Walkthrough Using LawHub LSAT PrepTest 157 Section 4 Passage 4", 'oP8oZJyACl4', '21:44', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-015', "How to Up-Front Read a Dual Passage in LawHub LSAT PrepTest 157 Sec. 1, Reading Comprehension", '2uQuRzbOoYI', '12:48', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-016', "Addressing a Detail \"Except\" Task Using LawHub LSAT PrepTest 157 Reading Comp. Sec. 1, Question 13", 'goycffgnWyo', '3:32', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-017', "Finding a Passage \"Hidden Main Idea\" in LawHub LSAT PrepTest 157 Reading Comp. Sec. 1, Question 14", 'QtVcn7N1YIA', '5:16', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-018', "Dual Passage Logical Reasoning in Reading Comp. Using LawHub LSAT PrepTest 157 Sec. 1, Question 15", 'u2u33WjsRrY', '2:56', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-019', "Addressing a Detail \"Except\" Task Using LawHub LSAT PrepTest 157 Reading Comp. Sec. 1, Question 16", 'e_cXeyJ2IPk', '2:35', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-020', "How to ID a Detail in Both Passages Using LawHub LSAT PrepTest 157 Reading Comp. Sec. 1, Question 17", 'O8lrcIBFykg', '3:32', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-021', "Applying One Passage to Another in Reading Comp. Using LawHub LSAT PrepTest 157 Sec. 1, Question 18", 'JiKOXveIyH4', '3:05', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-022', "Finding an Analogous Passage Relationship Using LawHub LSAT PrepTest 157 Sec. 1, Question 19", 'Cdk4_T-75OI', '2:38', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-023', "Up-Front Reading to Find a Law Passage Main Idea Using LawHub LSAT PrepTest 141 Section 3", 'I64kvcNUNXk', '12:46', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-024', "Targeted Re-Reading to Find a Specific Law Passage Detail Using LawHub LSAT PrepTest 141 Section 3", '5defb5wbZis', '2:37', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-025', "Finding a Specific Law Passage Detail Using LawHub LSAT PrepTest 141 Section 3 #readingcomprehension", '8oEtWiiIzM8', '2:33', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-026', "Finding What the Author Would Agree with from a Law Passage Using LawHub LSAT PrepTest 141 Section 3", 'u1FOaJVG1tY', '6:32', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-027', "Targeted Re-Reading to Find a Specific Law Passage Purpose Using LawHub LSAT PrepTest 141 Section 3", 'Q7UVkk-EDgk', '3:54', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-028', "Finding What the Author Would Believe Based on a Law Passage w/ LawHub LSAT PrepTest 141 Section 3", 'A7ZThrQgVic', '5:01', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-029', "Determining the Author Attitude Regarding a Law Passage Using LawHub LSAT PrepTest 141 Section 3", 'uHhX_WrQTe0', '4:09', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-030', "Finding the Primary Concern of a Dual Social Science Passage w/ LawHub LSAT PrepTest 141 Section 3", 'ro_ZCR1gh6w', '14:54', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-031', "What Would a Dual Social Science Passage Author Would Agree to w/ LawHub LSAT PrepTest 141 Section 3", 'f0ub6N9EkQ0', '3:58', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-032', "Making Cross Text Connections in a Dual Social Science Passage w/ LawHub LSAT PrepTest 141 Section 3", 'SAxa3hGKTUg', '3:36', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-033', "Determining the Purpose of Dual Social Science Passage Content w/ LawHub LSAT PrepTest 141 Section 3", 'xc4jOrUDtdM', '3:19', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-034', "Applying Concepts from a Dual Social Science Passage Using LawHub LSAT PrepTest 141 Section 3", 'H-qdqQkda8g', '2:50', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-035', "Identifying Dual Social Science Passage Methods of Argument w/ LawHub LSAT PrepTest 141 Section 3", 'kLgZ4RddwgM', '2:52', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-036', "Up Front Read & Find a LSAT Passage Specific Inference w/ LawHub Reading Comprehension Drill Set 6", 'Fjd93tJZif8', '10:58', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-037', "Identifying a LSAT Passage Comparative Inference Using LawHub Reading Comprehension Drill Set 6", 'tY0kWRqQM-M', '5:18', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-038', "How to ID a LSAT Passage Author's Specific Implication w/ LawHub Reading Comprehension Drill Set 6", 'jw0MnXYCDnU', '4:12', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-039', "How to Identify a LSAT Passage Specific Suggestion Using LawHub Reading Comprehension Drill Set 6", 'Oc7UnqcPoLM', '5:02', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-040', "How to Identify a LSAT Passage Specific Inference Using LawHub Reading Comprehension Drill Set 6", '2AY7uF0SIMA', '5:00', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-041', "Determining What the Use of a LSAT Passage Term Suggests w/ LawHub Reading Comprehension Drill Set 6", 'NpcvwHJ6ZIU', '5:21', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-rc-hard-042', "Social Science Reading Comprehension Walkthrough w/ LawHub LSAT PrepTest 141 Section 1 Passage 3", '6jY_QtUkbP4', '24:11', 'RC', "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-001', "How to Identify a LSAT Logical Reasoning Inference Using LawHub Logical Reasoning Drill Set 1", 'OUN2rECXA4g', '6:40', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-002', "Finding a LSAT Inference without Conditional Logic Using LawHub LSAT Logical Reasoning Drill Set 2", 'ileaOGYN0g4', '7:22', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-003', "How to Address a LSAT Conditional Logic Flaw Using LawHub Logical Reasoning Drill Set 3", 'hzCBetKj9ic', '5:07', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-004', "How to Apply a Principle to Support a LSAT Argument Using LawHub Logical Reasoning Drill Set 3", 'NS7BXQoCCFA', '5:57', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-005', "How to ID an Assumption within a Complex LSAT Argument Using LawHub Logical Reasoning Drill Set 3", '7WrzoO_BBgg', '7:25', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-006', "How to Predict a LSAT Flaw Using Logical Reasoning Drill Set 4", 'ImVZ-5bp6CA', '4:50', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-007', "How to Address a LSAT Conditional Inference Using LawHub Logical Reasoning Drill Set 4", 'IDVbTFagUsM', '5:59', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-008', "How to Predict a Real Life Situation LSAT Flaw Using LawHub Logical Reasoning Drill Set 5", 'Z_F7ooxb2FI', '5:06', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-009', "How to Identify a LSAT Parallel Flaw in an Argument Using LawHub Logical Reasoning Drill Set 5", 'eXeu6WcLoYQ', '8:47', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-010', "How to Justify a LSAT Argument with a Principle Using LawHub Logical Reasoning Drill Set 5", 'pVxQbsFTs7w', '5:15', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-011', "Strengthening a LSAT Argument by Finding a Term Shift Using LawHub Logical Reasoning Drill Set 6", 'O4u3J5Ce75c', '5:38', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-012', "How to Identify a LSAT Justified Inference Using LawHub Logical Reasoning Drill Set 6", '93Pezy0Ovt4', '5:06', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-013', "How to Infer a LSAT Logical Reasoning Statement Using PrepTest 157 Section 2, Question 19", 'M8qfKy7LRbk', '3:52', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-014', "How to Justify LSAT Logical Reasoning with a Principle Using PrepTest 157 Section 2, Question 21", 'dzWRQTGNNbo', '4:34', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-015', "How to Identify a LSAT Logical Reasoning Term Shift Flaw Using PrepTest 157 Section 3, Question 12", 'X2sRELBfIJE', '4:30', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-016', "Identifying a Reasonable LSAT Logical Reasoning Conclusion Using PrepTest 157 Section 3, Question 21", 'frcDw3PIw9g', '5:32', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-017', "Identifying a Supported LSAT Logical Reasoning Inference Using PrepTest 157 Section 3, Question 23", 'M8Knz-Y9fNg', '5:00', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-018', "Identifying a LSAT Similar Pattern of Logical Reasoning Using PrepTest 157 Section 3, Question 24", 'q6U7yjbKQn8', '7:26', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-019', "Using a LSAT Logical Reasoning Biased Sample to Weaken PrepTest 157 Section 3, Question 25", 'lGQTt4jusdA', '4:41', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-020', "How to Criticize a LSAT Logical Reasoning Argument w/ Official PrepTest 158 Section 2, Question 18", 'W9eN9PQiZVU', '5:53', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-021', "How to Identify a LSAT Logical Reasoning Assumption w/ Official PrepTest 158 Section 2, Question 19", 'pfK1tm7Hwbs', '4:47', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-022', "How to Address LSAT Logical Reasoning EXCEPT tasks w/ Official PrepTest 158 Section 2, Question 20", 'QyDdRsmgY3c', '4:28', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-023', "Identifying a Method of LSAT Logical Reasoning w/ Official PrepTest 158 Section 3, Question 22", '9yEGBpnn3Q8', '3:54', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-024', "How to Find a LSAT Logical Reasoning Inference Using Official PrepTest 158 Section 3, Question 23", 'x7Nk0KfLW4A', '4:27', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-025', "Weakening a Technical LSAT Logical Reasoning Claim w/ Official PrepTest 158 Section 4, Question 22", 'bFcpoKOT1Ro', '4:56', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-026', "How to Find What Must be True from a LSAT Prompt Using LawHub Logical Reasoning Drill Set 8", 'lYLVtLnMoHE', '4:49', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-027', "Weakening a LSAT Logical Reasoning Real-Life Claim w/ Official PrepTest 141 Section 2, Question 19", 'TqmfurXNcHY', '4:52', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-028', "Finding a LSAT Logical Reasoning Required Assumption w/ Official PrepTest 141 Section 2, Question 20", 'UxnmmT1h3NE', '4:51', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-029', "Identifying a LSAT Logical Reasoning Inference Using Official PrepTest 141 Section 2, Question 21", 'xYlA-4KZAD4', '5:13', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-030', "Strengthening a LSAT Logical Reasoning Conclusion w/ Official PrepTest 141 Section 2, Question 22", 'Ue5sJFRah0M', '5:40', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-031', "How to Explain a LSAT Logical Reasoning Conflict w/ Official PrepTest 141 Section 2, Question 24", 'fM0liLnGdxU', '4:56', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-032', "How to Identify a LSAT Necessary Assumption w/ Details Using LawHub Logical Reasoning Drill Set 10", 'EFyfj3bis4U', '7:23', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-033', "Identifying LSAT Logical Reasoning Similar Reasoning w/ Official PrepTest 141 Section 4, Question 21", 'Vypkk_rlR4o', '8:30', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-034', "Using a LSAT Logical Reasoning Principle to Justify w/ Official PrepTest 141 Section 4, Question 23", 'oqrP_ypEj1Y', '6:42', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-035', "Identifying a Role Played by a Statement in a LSAT Argument w/ LawHub Logical Reasoning Drill Set 10", 'xkjrl5U4_g4', '6:29', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-036', "Predicting How a LSAT Logical Reasoning \"Proceeds\" Using Official PrepTest 140 Section 1, Question 9", 'qsXvo0yU83A', '5:04', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-037', "Finding a LSAT Logical Reasoning Principle Violation w/ Official PrepTest 140 Section 1, Question 19", 'gnVWpL4z2hg', '8:34', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-038', "How to Resolve a LSAT Logical Reasoning Paradox Using Official PrepTest 140 Section 1, Question 20", 'K3hTfNDOVgE', '7:07', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-039', "How to Find a LSAT Logical Reasoning Assumption Using Official PrepTest 140 Section 1, Question 22", 'Xb1oG2vpxlc', '6:03', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-040', "How to Identify a Point of Disagreement for LSAT Speakers w/ LawHub Logical Reasoning Drill Set 11", 'bqVb0fDkFVA', '7:06', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-041', "Highlight to Find Similar LSAT Logical Reasoning Using Official PrepTest 140 Section 2, Question 17", '6g1jAjynqbI', '8:19', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-042', "How to ID LSAT Logical Reasoning Conditional Logic w/ Official PrepTest 140 Section 2, Question 21", 'DANkQ7wb0dU', '4:34', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-043', "Noting Specific Details to Strengthen a LSAT Argument Using LawHub Logical Reasoning Drill Set 11", 'X-5Ezc1rTi4', '5:41', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-044', "How to Find a Parallel LSAT Logical Reasoning Flaw w/ Official PrepTest 140 Section 2, Question 23", 'gefGlTDf44U', '6:45', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-045', "Identifying How LSAT Logical Reasoning Proceeds Using Official PrepTest 140 Section 2, Question 26", 'NXhTa2dtC3I', '5:16', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-046', "Find What LSAT Logical Reasoning Statements Support w/ Official PrepTest 140 Section 3, Question 17", '_T9AIBbDUAU', '5:22', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-047', "Find What Weakens LSAT Logical Reasoning EXCEPT w/ Official PrepTest 140 Section 3, Question 21", 'RvY_00AP5c0', '4:11', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-048', "Justify LSAT Logical Reasoning Principle Application w/ Official PrepTest 140 Section 3, Question 22", 'LhPLh6_saLs', '5:55', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-049', "Find a LSAT Logical Reasoning Supported Inference w/ Official PrepTest 140 Section 3, Question 23", 'UAJMk6_5oKU', '6:03', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-050', "How to Use the Negation Test to Confirm a LSAT Assumption w/ LawHub Logical Reasoning Drill Set 12", 'XRNBh806ZiY', '4:56', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-051', "How to Find an Application of a Given LSAT Principle Using LawHub Logical Reasoning Drill Set 13", 'y0BwNVDyk0w', '6:40', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-052', "Identifying a Required Assumption for a LSAT Plan of Action w/ LawHub Logical Reasoning Drill Set 13", '-_Tj8TSZq4w', '5:54', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
  ['yt-myguru-lr-hard-053', "How to Find a Most Strongly Supported Statement Using LawHub Logical Reasoning Drill Set 14", 'Ph_xGu8oaqA', '6:16', 'LR', "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests"],
];

function v2MyGuruKeywords(title, section) {
  const lower = String(title || '').toLowerCase();
  const keywords = [section === 'RC' ? 'rc' : 'logical reasoning', section === 'RC' ? 'reading comprehension' : 'lr'];
  if (/main idea|main point|primary concern/.test(lower)) keywords.push('main point', 'primary purpose');
  if (/detail|locate|specific/.test(lower)) keywords.push('detail', 'recognition');
  if (/purpose|author purpose|function/.test(lower)) keywords.push('purpose', 'reference');
  if (/infer|inference|implication|suggests|supported|must be true/.test(lower)) keywords.push('inference', 'must be true', 'entailment');
  if (/author perspective|author attitude|agree|believe/.test(lower)) keywords.push('attitude', 'views');
  if (/organization|methods of argument|proceeds|method/.test(lower)) keywords.push('organization', 'method', 'technique');
  if (/analogy|analogous|relationship/.test(lower)) keywords.push('analogy', 'principle');
  if (/dual|both passages|cross text|one passage to another/.test(lower)) keywords.push('dual passage', 'comparative');
  if (/weaken|weakening|criticize|criticism/.test(lower)) keywords.push('weaken', 'flaw');
  if (/strengthen|strengthening/.test(lower)) keywords.push('strengthen');
  if (/assumption|required|negation/.test(lower)) keywords.push('assumption', 'necessary');
  if (/conditional/.test(lower)) keywords.push('conditional');
  if (/flaw|parallel flaw|term shift|biased sample/.test(lower)) keywords.push('flaw');
  if (/parallel|similar pattern|similar reasoning/.test(lower)) keywords.push('parallel', 'match structure');
  if (/principle|justify|application/.test(lower)) keywords.push('principle');
  if (/role played|role/.test(lower)) keywords.push('role');
  if (/resolve|explain|conflict|paradox/.test(lower)) keywords.push('resolve', 'explain');
  if (/point of disagreement|speakers/.test(lower)) keywords.push('dispute', 'disagree');
  if (/conclusion/.test(lower)) keywords.push('conclusion');
  return [...new Set(keywords)];
}

function v2MyGuruLessonIds(title, section) {
  const lower = String(title || '').toLowerCase();
  const ids = [];
  if (section === 'RC') {
    ids.push('ka-rc-getting-started');
    if (/main idea|main point|primary concern/.test(lower)) ids.push('ka-rc-main-point-quick', 'ka-rc-primary-purpose-quick');
    if (/detail|locate|specific/.test(lower)) ids.push('ka-rc-recognition-quick');
    if (/purpose|function/.test(lower)) ids.push('ka-rc-purpose-reference-quick');
    if (/infer|inference|implication|suggests/.test(lower)) ids.push('ka-rc-info-inference-quick', 'ka-rc-views-inference-quick');
    if (/author perspective|author attitude|agree|believe/.test(lower)) ids.push('ka-rc-attitude-inference-quick', 'ka-rc-views-inference-quick');
    if (/organization|methods/.test(lower)) ids.push('ka-rc-organizing-info-quick');
    if (/analogy|analogous|applying concepts/.test(lower)) ids.push('ka-rc-principles-analogies-quick', 'ka-rc-new-contexts-quick');
    if (/dual|both passages|cross text|one passage to another/.test(lower)) ids.push('ka-rc-principles-analogies-quick');
    if (/weaken/.test(lower)) ids.push('ka-rc-additional-evidence-quick');
  } else {
    ids.push('ka-lr-getting-started');
    if (/infer|inference|supported|must be true/.test(lower)) ids.push('ka-lr-entailment-video', 'ka-lr-strong-inferences-video');
    if (/conditional/.test(lower)) ids.push('ka-logic-if-then', 'ka-logic-conditional-quick');
    if (/flaw|criticize|criticism|biased sample|term shift/.test(lower)) ids.push('ka-lr-flaw-video', 'ka-lr-types-flaws');
    if (/principle|justify|application/.test(lower)) ids.push('ka-lr-principle-video', 'ka-lr-match-principles-video');
    if (/assumption|required|negation/.test(lower)) ids.push('ka-lr-necessary-assumptions-video', 'ka-lr-necessary-assumptions-quick');
    if (/parallel|similar pattern|similar reasoning/.test(lower)) ids.push('ka-lr-match-structure-video', 'ka-lr-match-flaw-video');
    if (/strengthen|strengthening/.test(lower)) ids.push('ka-lr-strengthen-video', 'ka-lr-strengthen-weaken-quick');
    if (/weaken|weakening/.test(lower)) ids.push('ka-lr-weaken-video', 'ka-lr-strengthen-weaken-quick');
    if (/method|proceeds/.test(lower)) ids.push('ka-lr-technique-video');
    if (/role played|role/.test(lower)) ids.push('ka-lr-role-video');
    if (/resolve|explain|conflict|paradox/.test(lower)) ids.push('ka-lr-resolve-video', 'ka-lr-explain-video');
    if (/point of disagreement|speakers/.test(lower)) ids.push('ka-lr-disputes-video');
    if (/conclusion/.test(lower)) ids.push('ka-lr-identify-conclusion-video');
  }
  return [...new Set(ids)];
}

v2YouTubeLessonVideos.push(...v2MyGuruEdgeVideoRows.map(([id, title, youtubeId, duration, section, playlist]) => ({
  id,
  title,
  youtubeId,
  duration,
  keywords: v2MyGuruKeywords(title, section),
  lessonIds: v2MyGuruLessonIds(title, section),
  sourceChannel: 'MyGuruEdge',
  sourcePlaylist: playlist,
  watchUrl: `https://www.youtube.com/watch?v=${youtubeId}`,
  embedUrl: `https://www.youtube.com/embed/${youtubeId}`,
})));


const v2MyGuruEdgePlaylistDirectory = [
  { title: "LSAT Logical Reasoning LSAC LawHub - Drill Set 14 Explanations", playlistId: 'PLE39rYnOi8ZrL54qaR7AWvsJ7zHmr57yZ', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZrL54qaR7AWvsJ7zHmr57yZ', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Reading Comprehension LSAC LawHub - Drill Set 7 Explanations", playlistId: 'PLE39rYnOi8Zq2qITYnHl_p2BzQex_V6We', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8Zq2qITYnHl_p2BzQex_V6We', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Logical Reasoning LSAC LawHub - Drill Set 13 Explanations", playlistId: 'PLE39rYnOi8Zqvf-zBpgg5Ek9siA6p3MOi', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8Zqvf-zBpgg5Ek9siA6p3MOi', sourceChannel: 'MyGuruEdge' },
  { title: "Official LSAT PrepTest 140 Section 4 Reading Comprehension Video Explanations", playlistId: 'PLE39rYnOi8ZowsaX9D8o8dSLg0g9FvyB4', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZowsaX9D8o8dSLg0g9FvyB4', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Logical Reasoning LSAC LawHub - Drill Set 12 Explanations", playlistId: 'PLE39rYnOi8ZobLalSxbDuqMGH5PjIfstq', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZobLalSxbDuqMGH5PjIfstq', sourceChannel: 'MyGuruEdge' },
  { title: "Official LSAT PrepTest 140 Section 3 Logical Reasoning Video Explanations", playlistId: 'PLE39rYnOi8Zo-IXTt7zhvGTakqDXc1JLx', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8Zo-IXTt7zhvGTakqDXc1JLx', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Reading Comprehension LSAC LawHub - Drill Set 6 Explanations", playlistId: 'PLE39rYnOi8Zru9HyFgJtk3fGPPCunKEF4', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8Zru9HyFgJtk3fGPPCunKEF4', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Logical Reasoning LSAC LawHub - Drill Set 11 Explanations", playlistId: 'PLE39rYnOi8ZreHmINmpPLAYHozCLYVikk', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZreHmINmpPLAYHozCLYVikk', sourceChannel: 'MyGuruEdge' },
  { title: "Official LSAT PrepTest 140 Section 2 Logical Reasoning Video Explanations", playlistId: 'PLE39rYnOi8ZppaeqqB1L1zIFk_8HPqgfg', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZppaeqqB1L1zIFk_8HPqgfg', sourceChannel: 'MyGuruEdge' },
  { title: "Official LSAT PrepTest 140 Section 1 Logical Reasoning Video Explanations", playlistId: 'PLE39rYnOi8ZqL-u1r8F2mBUlrLToEZKUt', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZqL-u1r8F2mBUlrLToEZKUt', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Logical Reasoning LSAC LawHub - Drill Set 10 Explanations", playlistId: 'PLE39rYnOi8Zo5yHAhuvfn-V5iE-ID9d7b', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8Zo5yHAhuvfn-V5iE-ID9d7b', sourceChannel: 'MyGuruEdge' },
  { title: "Official LSAT PrepTest 141 Section 4 Logical Reasoning Video Explanations", playlistId: 'PLE39rYnOi8ZrfdegZ8lP7ryZCPrJpfb0h', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZrfdegZ8lP7ryZCPrJpfb0h', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Logical Reasoning LSAC LawHub - Drill Set 9 Explanations", playlistId: 'PLE39rYnOi8Zq1lKryPSpw6Q_KslHJBK9i', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8Zq1lKryPSpw6Q_KslHJBK9i', sourceChannel: 'MyGuruEdge' },
  { title: "Official LSAT PrepTest 141 Section 3 Reading Comprehension Video Explanations", playlistId: 'PLE39rYnOi8ZpZE_2NsULZ2YE4orVWO-pL', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZpZE_2NsULZ2YE4orVWO-pL', sourceChannel: 'MyGuruEdge' },
  { title: "Official LSAT PrepTest 141 Section 1 Reading Comprehension Full Passage Video Walkthroughs", playlistId: 'PLE39rYnOi8ZrAxdZFt927E2qJz10cmbJ2', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZrAxdZFt927E2qJz10cmbJ2', sourceChannel: 'MyGuruEdge' },
  { title: "Official LSAT PrepTest 141 Section 2 Logical Reasoning Video Explanations", playlistId: 'PLE39rYnOi8ZofNUnTsQHQEhMO4rEFhdea', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZofNUnTsQHQEhMO4rEFhdea', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Reading Comprehension Science Passages & Questions Explained Using Free LSAC LawHub Drill Sets & PrepTests", playlistId: 'PLE39rYnOi8ZrcyzXvIGCUk3289nWkrDq8', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZrcyzXvIGCUk3289nWkrDq8', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Reading Comprehension Social Science Passages & Questions Explained Using Free LSAC LawHub Drill Sets & PrepTests", playlistId: 'PLE39rYnOi8ZocpAUIpkMuEzWQbt8Bq20E', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZocpAUIpkMuEzWQbt8Bq20E', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Reading Comprehension Law Passages & Questions Explained Using Free LSAC LawHub Drill Sets & PrepTests", playlistId: 'PLE39rYnOi8Zo_P7LCngN2H9wahRsAdR4p', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8Zo_P7LCngN2H9wahRsAdR4p', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Reading Comprehension Humanities Passages & Questions Explained Using Free LSAC LawHub Drill Sets & PrepTests", playlistId: 'PLE39rYnOi8Zq-KFLNza12yUgObMEKj1-2', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8Zq-KFLNza12yUgObMEKj1-2', sourceChannel: 'MyGuruEdge' },
  { title: "How to Identify LSAT Logical Reasoning Argument Main Conclusions Using Free Questions from Official LSAC LawHub Drill Sets & PrepTests", playlistId: 'PLE39rYnOi8ZrhOZjCf4mtgUSJ4vqHD-37', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZrhOZjCf4mtgUSJ4vqHD-37', sourceChannel: 'MyGuruEdge' },
  { title: "How to Identify a Point at Issue Between Two LSAT Logical Reasoning Speakers Using Free Questions from Official LSAC LawHub Drill Sets & PrepTests", playlistId: 'PLE39rYnOi8Zq1FCb2BnpxvKCD0oRBn7o1', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8Zq1FCb2BnpxvKCD0oRBn7o1', sourceChannel: 'MyGuruEdge' },
  { title: "How to Weaken LSAT Logical Reasoning Arguments Using Free Questions from Official LSAC LawHub Drill Sets & PrepTests", playlistId: 'PLE39rYnOi8ZoQJtkhkExAbwHFYCjo6UyV', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZoQJtkhkExAbwHFYCjo6UyV', sourceChannel: 'MyGuruEdge' },
  { title: "Identifying Roles Played by Statements or Argument Methods in LSAT Logical Reasoning w/ Free Questions in Official LSAC LawHub Drill Sets & PrepTests", playlistId: 'PLE39rYnOi8ZqxhuHIc4uP_Zpr67SchIg3', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZqxhuHIc4uP_Zpr67SchIg3', sourceChannel: 'MyGuruEdge' },
  { title: "How to Justify LSAT Logical Reasoning with Principles Using Free Questions from Official LSAC LawHub Drill Sets & PrepTests", playlistId: 'PLE39rYnOi8ZpqWiHeVn-Ma88q-Ua3yK4y', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZpqWiHeVn-Ma88q-Ua3yK4y', sourceChannel: 'MyGuruEdge' },
  { title: "How to Explain or Resolve a LSAT Logical Reasoning Discrepancy or Paradox Using Free Questions from Official LSAC LawHub Drill Sets & PrepTests", playlistId: 'PLE39rYnOi8ZrlzEFw5TJ1sRxPPUxBdXCK', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZrlzEFw5TJ1sRxPPUxBdXCK', sourceChannel: 'MyGuruEdge' },
  { title: "How to Identify LSAT Logical Reasoning Parallel Reasoning or Parallel Flaws Using Free Questions from Official LSAC LawHub Drill Sets & PrepTests", playlistId: 'PLE39rYnOi8ZpHoSTFvepCtVksklNJXmSB', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZpHoSTFvepCtVksklNJXmSB', sourceChannel: 'MyGuruEdge' },
  { title: "How to Identify LSAT Logical Reasoning Assumptions Using Free Questions from Official LSAC LawHub Drill Sets & PrepTests", playlistId: 'PLE39rYnOi8ZrGEOrGWpEQ9jIRc8f-ULuh', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZrGEOrGWpEQ9jIRc8f-ULuh', sourceChannel: 'MyGuruEdge' },
  { title: "How to Strengthen a LSAT Logical Reasoning Argument Using Free Questions from Official LSAC LawHub Drill Sets & PrepTests", playlistId: 'PLE39rYnOi8ZpZVTGwdOKjyOwcReZ6v6Ag', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZpZVTGwdOKjyOwcReZ6v6Ag', sourceChannel: 'MyGuruEdge' },
  { title: "How to Identify LSAT Logical Reasoning Inferences Using Free Questions from Official LSAC LawHub Drill Sets & PrepTests", playlistId: 'PLE39rYnOi8ZrfVcsvvudGJacvmnzWqeVc', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZrfVcsvvudGJacvmnzWqeVc', sourceChannel: 'MyGuruEdge' },
  { title: "How to Identify LSAT Logical Reasoning Flaws in Arguments Using Free Questions from Official LSAC LawHub Drill Sets & PrepTests", playlistId: 'PLE39rYnOi8Zq-OxGE5t9hsMY7dlVasVEt', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8Zq-OxGE5t9hsMY7dlVasVEt', sourceChannel: 'MyGuruEdge' },
  { title: "Hard LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests", playlistId: 'PLE39rYnOi8ZqKRXfny0ZQteUqWdWgyx5q', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZqKRXfny0ZQteUqWdWgyx5q', sourceChannel: 'MyGuruEdge' },
  { title: "Easy LSAT Reading Comprehension Passages Explained from Free LSAC LawHub Drill Sets & PrepTests", playlistId: 'PLE39rYnOi8ZpFVn5EqSCUffYkCbkbuBVR', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZpFVn5EqSCUffYkCbkbuBVR', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Reading Comprehension LSAC LawHub - Drill Set 5 Explanations", playlistId: 'PLE39rYnOi8ZosExiadrJn7pRFqBgL7YI-', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZosExiadrJn7pRFqBgL7YI-', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Logical Reasoning LSAC LawHub - Drill Set 8 Explanations", playlistId: 'PLE39rYnOi8Zo8RnR_dbZUAjoUbjJz0O9z', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8Zo8RnR_dbZUAjoUbjJz0O9z', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Logical Reasoning LSAC LawHub - Drill Set 7 Explanations", playlistId: 'PLE39rYnOi8ZqhzW0dpSuyseB2mLIBtwTC', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZqhzW0dpSuyseB2mLIBtwTC', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Prep Tips", playlistId: 'PLE39rYnOi8ZqY-3kx0vifhowdUr3GTdOC', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZqY-3kx0vifhowdUr3GTdOC', sourceChannel: 'MyGuruEdge' },
  { title: "Official LSAT PrepTest 157 Section 4 Reading Comprehension Full Passage Video Walkthroughs", playlistId: 'PLE39rYnOi8ZqhmvZLeVu6s8Txlkcj_kXe', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZqhmvZLeVu6s8Txlkcj_kXe', sourceChannel: 'MyGuruEdge' },
  { title: "Official LSAT PrepTest 157 Section 3 Logical Reasoning Video Explanations", playlistId: 'PLE39rYnOi8ZowGg_r2Ajx0SRVGoyqGng2', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZowGg_r2Ajx0SRVGoyqGng2', sourceChannel: 'MyGuruEdge' },
  { title: "Easy LSAT Logical Reasoning Questions Explained from Free LSAC LawHub Drill Sets & PrepTests", playlistId: 'PLE39rYnOi8Zrphg2IyS7qaLVuPP-dCuI-', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8Zrphg2IyS7qaLVuPP-dCuI-', sourceChannel: 'MyGuruEdge' },
  { title: "Hard LSAT Logical Reasoning Questions Explained from LSAC LawHub Drill Sets & PrepTests", playlistId: 'PLE39rYnOi8ZpFe5-2EwZ5Hx9LuhowGK3e', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZpFe5-2EwZ5Hx9LuhowGK3e', sourceChannel: 'MyGuruEdge' },
  { title: "Official LSAT PrepTest 157 Section 2 Logical Reasoning Video Explanations", playlistId: 'PLE39rYnOi8ZpRBhn-4cuGrJS7-apJU9wQ', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZpRBhn-4cuGrJS7-apJU9wQ', sourceChannel: 'MyGuruEdge' },
  { title: "Official LSAT PrepTest 157 Section 1 Reading Comprehension Video Explanations", playlistId: 'PLE39rYnOi8ZoSy5vVJsWYEaOde6tsu79w', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZoSy5vVJsWYEaOde6tsu79w', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Logical Reasoning LSAC LawHub - Drill Set 6 Explanations", playlistId: 'PLE39rYnOi8ZoNfuaCXu111kxh-hHcyucy', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZoNfuaCXu111kxh-hHcyucy', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Logical Reasoning LSAC LawHub - Drill Set 5 Explanations", playlistId: 'PLE39rYnOi8Zr5kLExlkfwnBttUrLaf6-7', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8Zr5kLExlkfwnBttUrLaf6-7', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Reading Comprehension LSAC LawHub - Drill Set 4 Explanations", playlistId: 'PLE39rYnOi8ZqwIVbSTw9D8Dt4E7lHWjvx', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZqwIVbSTw9D8Dt4E7lHWjvx', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Logical Reasoning LSAC LawHub - Drill Set 4 Explanations", playlistId: 'PLE39rYnOi8Zqplg6hDXUSkQzjRWf91-rY', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8Zqplg6hDXUSkQzjRWf91-rY', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Reading Comprehension LSAC LawHub - Drill Set 3 Explanations", playlistId: 'PLE39rYnOi8Zpnogxk98rMJ0pOoHVAAui_', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8Zpnogxk98rMJ0pOoHVAAui_', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Logical Reasoning LSAC LawHub - Drill Set 3 Explanations", playlistId: 'PLE39rYnOi8ZqSRSiiXeAvuozY-GPjhdaq', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZqSRSiiXeAvuozY-GPjhdaq', sourceChannel: 'MyGuruEdge' },
  { title: "Official LSAT PrepTest 158 Video Explanations", playlistId: 'PLE39rYnOi8Zqdp6QfGC1auS5cvWniEXi4', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8Zqdp6QfGC1auS5cvWniEXi4', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Logical Reasoning LSAC LawHub - Drill Set 2 Explanations", playlistId: 'PLE39rYnOi8ZqcrwC8Pg8lTjIzdUCEFe4K', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZqcrwC8Pg8lTjIzdUCEFe4K', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Reading Comprehension LSAC LawHub - Drill Set 2 Explanations", playlistId: 'PLE39rYnOi8Zo3q64W0d9x7g7VMaduIlsK', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8Zo3q64W0d9x7g7VMaduIlsK', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Reading Comprehension LSAC LawHub - Drill Set 1 Explanations", playlistId: 'PLE39rYnOi8ZoOvek-wffZK69EKEpIuBoU', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZoOvek-wffZK69EKEpIuBoU', sourceChannel: 'MyGuruEdge' },
  { title: "LSAT Logical Reasoning LSAC LawHub - Drill Set 1 Explanations", playlistId: 'PLE39rYnOi8ZplZMiyS62HHiwloouY4iLl', url: 'https://www.youtube.com/playlist?list=PLE39rYnOi8ZplZMiyS62HHiwloouY4iLl', sourceChannel: 'MyGuruEdge' },
];

function v2YouTubeMatchScore(video, lesson, family) {
  const text = `${lesson.id || ''} ${lesson.title || ''} ${lesson.track || ''} ${lesson.summary || ''} ${family || ''}`.toLowerCase();
  const familyLower = String(family || '').toLowerCase();
  const explicitLessonMatch = video.lessonIds.includes(lesson.id);
  const videoTitle = String(video.title || '').toLowerCase();
  const playlistTitle = String(video.sourcePlaylist || '').toLowerCase();
  const isRcVideo = video.id.startsWith('yt-rc-') || video.id.startsWith('yt-myguru-rc-') || videoTitle.includes('reading comprehension') || playlistTitle.includes('reading comprehension');
  const isLrVideo = video.id.startsWith('yt-myguru-lr-') || (videoTitle.includes('logical reasoning') && !videoTitle.includes('reading comprehension')) || playlistTitle.includes('logical reasoning');
  const isRcLesson = text.includes('reading comprehension') || text.includes('rc ');
  if (isRcVideo && !isRcLesson && !explicitLessonMatch) return 0;
  if (isLrVideo && isRcLesson && !explicitLessonMatch) return 0;
  let score = 0;
  if (explicitLessonMatch) score += 12;
  (video.keywords || []).forEach((keyword) => {
    const normalized = String(keyword || '').toLowerCase();
    if (normalized && text.includes(normalized)) score += 3;
  });
  if (familyLower.includes('flaw') && video.keywords.includes('flaw')) score += 8;
  if (familyLower.includes('assumption') && video.keywords.includes('assumption')) score += 8;
  if (familyLower.includes('strengthen') && video.keywords.includes('strengthen')) score += 8;
  if (familyLower.includes('conditional') && video.keywords.includes('conditional')) score += 8;
  if (familyLower.includes('must be true') && video.keywords.includes('must be true')) score += 8;
  if (familyLower.includes('conclusion') && video.keywords.includes('conclusion')) score += 8;
  if (familyLower.includes('principle') && video.keywords.includes('principle')) score += 8;
  if (familyLower.includes('resolve') && (video.keywords.includes('resolve') || video.keywords.includes('paradox'))) score += 8;
  if (familyLower.includes('dispute') && (video.keywords.includes('dispute') || video.keywords.includes('disagree'))) score += 8;
  if (familyLower.includes('reading') && (video.keywords.includes('rc') || video.keywords.includes('reading comprehension'))) score += 8;
  if (familyLower.includes('main point') && video.keywords.includes('main point')) score += 8;
  if (familyLower.includes('primary purpose') && video.keywords.includes('primary purpose')) score += 8;
  if (familyLower.includes('structure') && (video.keywords.includes('rc structure') || video.keywords.includes('passage map'))) score += 8;
  if (familyLower.includes('inference') && video.keywords.includes('inference')) score += 8;
  if (familyLower.includes('function') && (video.keywords.includes('reference') || video.keywords.includes('meaning'))) score += 8;
  return score;
}

function v2YouTubeVideosForLesson(lesson, family) {
  const seen = new Set();
  return v2YouTubeLessonVideos
    .map((video) => ({ ...video, matchScore: v2YouTubeMatchScore(video, lesson, family) }))
    .filter((video) => video.matchScore >= 8)
    .sort((a, b) => b.matchScore - a.matchScore || a.title.localeCompare(b.title))
    .filter((video) => {
      if (seen.has(video.youtubeId)) return false;
      seen.add(video.youtubeId);
      return true;
    })
    .slice(0, 3)
    .map(({ matchScore, ...video }) => video);
}

function v2SyncExternalMedia(lesson) {
  lesson.youtubeEmbedUrl = lesson.youtubeVideos?.[0]?.embedUrl || lesson.youtubeEmbedUrl || '';
  lesson.externalMedia = (lesson.youtubeVideos || []).map((video) => ({
    type: 'youtube',
    title: video.title,
    embedUrl: video.embedUrl,
    watchUrl: video.watchUrl,
    duration: video.duration,
    source: video.sourceChannel,
    playlist: video.sourcePlaylist,
  }));
  lesson.youtubeStatus = lesson.youtubeVideos?.length ? 'linked' : 'not-linked';
}

function v2AttachAllYouTubeVideosToLessons(data) {
  if (!Array.isArray(data.lessons)) return;
  const lessonById = new Map(data.lessons.map((lesson) => [lesson.id, lesson]));
  const usedVideoIds = new Set();
  data.lessons.forEach((lesson) => {
    (lesson.youtubeVideos || []).forEach((video) => usedVideoIds.add(video.id));
  });

  v2YouTubeLessonVideos.forEach((video) => {
    if (usedVideoIds.has(video.id)) return;
    const target =
      (video.lessonIds || []).map((lessonId) => lessonById.get(lessonId)).find(Boolean) ||
      data.lessons
        .map((lesson) => ({
          lesson,
          score: v2YouTubeMatchScore(video, lesson, lesson.linkedQuestionFamilies?.[0] || lesson.videoTheme || ''),
        }))
        .sort((a, b) => b.score - a.score)[0]?.lesson;
    if (!target) return;
    target.youtubeVideos = target.youtubeVideos || [];
    if (!target.youtubeVideos.some((item) => item.id === video.id)) {
      target.youtubeVideos.push(video);
      usedVideoIds.add(video.id);
      v2SyncExternalMedia(target);
    }
  });
}

function v2Slug(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function v2GeneratedVideoPathForLesson(lessonId) {
  const index = requestedWebsiteLessonBlueprints.findIndex(([id]) => id === lessonId);
  if (index < 0) return '';
  const title = requestedWebsiteLessonBlueprints[index][1];
  return `output/videos/lessons/${String(index + 1).padStart(3, '0')}-${v2Slug(title)}.mp4`;
}

const v2QuestionFamilies = [
  { section: 'LR', family: 'Flaw', lesson: 'ka-lr-flaw-video', stem: 'The reasoning is most vulnerable to criticism because it', trap: 'Treats a correlation as causation', target: 84 },
  { section: 'LR', family: 'Assumption', lesson: 'ka-lr-necessary-assumptions-video', stem: 'Which one of the following is an assumption required by the argument?', trap: 'Chooses a helpful but unnecessary fact', target: 92 },
  { section: 'LR', family: 'Strengthen', lesson: 'ka-lr-strengthen-video', stem: 'Which one of the following, if true, most strengthens the argument?', trap: 'Supports the topic rather than the bridge', target: 86 },
  { section: 'LR', family: 'Weaken', lesson: 'ka-lr-weaken-video', stem: 'Which one of the following, if true, most weakens the argument?', trap: 'Attacks a side issue', target: 86 },
  { section: 'LR', family: 'Conditional Logic', lesson: 'ka-logic-if-then', stem: 'Which one of the following must be true?', trap: 'Reverses the sufficient and necessary terms', target: 95 },
  { section: 'LR', family: 'Must Be True', lesson: 'ka-lr-entailment-video', stem: 'Which one of the following is most strongly supported?', trap: 'Picks a claim that is plausible but too strong', target: 88 },
  { section: 'LR', family: 'Role / Method / Technique', lesson: 'ka-lr-role-video', stem: 'The highlighted claim plays which one of the following roles?', trap: 'Describes content instead of function', target: 82 },
  { section: 'LR', family: 'Resolve / Explain', lesson: 'ka-lr-resolve-video', stem: 'Which one of the following most helps resolve the apparent conflict?', trap: 'Explains only one side of the surprise', target: 88 },
  { section: 'RC', family: 'RC Structure', lesson: 'rc-structure-map', stem: 'Which one of the following best describes the organization of the passage?', trap: 'Mistakes topic for structure', target: 96 },
  { section: 'RC', family: 'RC Inference', lesson: 'ka-rc-info-inference-quick', stem: 'Which one of the following is most strongly supported by the passage?', trap: 'Goes beyond the passage', target: 100 },
  { section: 'RC', family: 'RC Main Point', lesson: 'ka-rc-main-point-quick', stem: 'Which one of the following best states the main point of the passage?', trap: 'Picks a major detail', target: 95 },
  { section: 'RC', family: 'RC Function', lesson: 'ka-rc-purpose-reference-quick', stem: 'The referenced detail primarily functions to', trap: 'Confuses paragraph topic with paragraph job', target: 98 },
  { section: 'RC', family: 'RC Attitude', lesson: 'ka-rc-attitude-inference-quick', stem: 'The author attitude is best described as', trap: 'Reads neutral analysis as endorsement', target: 95 },
];

const v2DifficultyCycle = ['easy', 'medium', 'medium', 'hard'];
const v2MistakeReasons = ['Misread stimulus', 'Wrong answer trap', 'Timing issue', 'Narrowed to two', 'Careless error', 'Did not understand argument'];

function contentBoostMethodSteps(family) {
  const shared = {
    'RC Structure': ['Read for paragraph jobs, not facts.', 'Name the shift: old view, complication, author response.', 'Choose the answer that describes movement, not topic.'],
    'RC Inference': ['Locate the proof sentence.', 'Soften the answer until it is fully supported.', 'Reject choices that require outside knowledge or stronger force.'],
    'RC Main Point': ['Find the author final position.', 'Attach the reason or contrast that makes it matter.', 'Reject answers that are only one paragraph wide.'],
    'RC Function': ['Identify the local claim.', 'Ask why the author included it.', 'Match the answer to support, contrast, example, concession, or qualification.'],
    'RC Attitude': ['Underline evaluative words.', 'Translate tone into plain English.', 'Avoid extreme emotions unless the passage earns them.'],
    Flaw: ['Find the conclusion.', 'Name what the evidence fails to prove.', 'Match the answer to that exact broken move.'],
    Assumption: ['Find the gap between evidence and conclusion.', 'Prephrase the missing bridge.', 'Negate contenders and keep only what breaks the argument.'],
    Strengthen: ['Name the weak bridge.', 'Look for new information that supports that bridge.', 'Prefer direct support over background relevance.'],
    Weaken: ['Name the weak bridge.', 'Look for new information that makes the bridge fail.', 'Avoid answers that merely discuss the topic.'],
    'Conditional Logic': ['Translate the rule into X -> Y.', 'Check the contrapositive.', 'Do not reverse or negate unless the stimulus permits it.'],
    'Must Be True': ['List only proven facts.', 'Match the weakest true claim.', 'Reject choices that are plausible but not forced.'],
    'Role / Method / Technique': ['Mark conclusion and support.', 'Name the sentence job.', 'Choose function language, not content summary.'],
    'Resolve / Explain': ['Keep both facts true.', 'Find what makes the surprise unsurprising.', 'Reject explanations that solve only one side.'],
    Principle: ['Name the decision rule.', 'Match the rule to the exact conduct or judgment.', 'Avoid broad slogans.'],
    'Parallel Flaw': ['Abstract the bad skeleton.', 'Ignore topic camouflage.', 'Match the same invalid move.'],
    'Point at Issue': ['Turn the answer into a yes/no question.', 'Ask how each speaker would answer.', 'Keep only direct disagreement.'],
  };
  return shared[family] || ['Classify the task.', 'Predict the job before answers.', 'Choose the answer that proves the exact job.'];
}

function contentBoostTrapWarnings(family) {
  const warnings = {
    Flaw: ['Causal answers are tempting when the stimulus only shows timing or correlation.', 'A true criticism is not enough unless it criticizes the argument actually made.'],
    Assumption: ['Many answers strengthen without being required.', 'If negating the answer only makes the argument less pretty, keep looking.'],
    Strengthen: ['Background facts feel helpful but may not touch the gap.', 'Do not reward an answer for supporting the conclusion topic in general.'],
    Weaken: ['Attacking a premise is different from attacking the support relationship.', 'A weakener can be modest; it only needs to hurt the argument.'],
    'RC Structure': ['A topic summary is not a structure answer.', 'Do not choose an answer that skips the author final turn.'],
    'RC Inference': ['Strong words like all, never, and proves usually overreach.', 'An answer can be true in real life and still unsupported by the passage.'],
    'Conditional Logic': ['Only if introduces the necessary condition.', 'Contrapositive is valid; reverse is not.'],
  };
  return warnings[family] || ['Familiar wording is not proof.', 'Reject answers that change force, role, direction, or scope.'];
}

function contentBoostMiniDrill(family) {
  return {
    prompt: `Before answers, write one plain-English prediction for this ${family} task.`,
    steps: ['Name the question family.', 'Say the burden in one sentence.', 'Predict what the right answer must do.', 'Eliminate anything that changes the job.'],
    successRule: `You are ready to move on when you can explain why the trap is attractive and why it still fails the ${family} job.`,
  };
}

function contentDepthProfile(family, lesson) {
  const title = lesson.title || family;
  const generic = {
    learningObjectives: [
      `Name the exact job ${title} asks you to perform before reading answers.`,
      'Separate proof from familiar wording so tempting traps lose their shine.',
      'Leave with one repeatable rule you can use under time pressure.',
    ],
    whyItMatters: 'Score jumps come from recognizing the task early enough that answer choices stop steering your reasoning.',
    coreIdea: 'The credited answer does one precise job. Your first move is to name that job, your second is to predict what would satisfy it, and your third is to reject anything merely related.',
    coldReadPrompts: ['What is the task?', 'What would a right answer have to do?', 'What kind of tempting wrong answer should I expect?'],
    decisionTree: ['Classify the task.', 'Locate the proof or gap.', 'Predict the answer job.', 'Compare each choice to that job only.'],
    exampleWalkthrough: [
      { label: '1. Read', text: 'Translate the stem into a plain-English burden before looking down.' },
      { label: '2. Predict', text: 'Say what the credited answer must accomplish in one sentence.' },
      { label: '3. Compare', text: 'Keep the answer that performs the burden; cut answers that only echo words from the prompt.' },
    ],
    errorClinic: [
      { symptom: 'Two answers both feel close.', cause: 'You are comparing topic overlap instead of answer job.', fix: 'Restate the burden, then ask which choice actually completes it.' },
      { symptom: 'You changed from right to wrong.', cause: 'A flashy trap overrode your first clean prediction.', fix: 'Before changing, state the exact reason the original answer fails.' },
    ],
    timingPlan: ['0-20 sec: classify the task.', '20-55 sec: find the proof or gap and prephrase.', 'Final pass: compare contenders against the burden, not each other.'],
    masteryCriteria: ['You can define the task without jargon.', 'You can predict a right-answer job before choices.', 'You can explain one attractive wrong answer in plain English.'],
    journalPrompt: `What trap does ${title} make you most likely to fall for, and what sentence will you say to yourself next time to stop it?`,
  };

  const profiles = {
    Flaw: {
      learningObjectives: [
        'Find the conclusion before judging the argument.',
        'Name the leap the evidence fails to justify.',
        'Match the credited answer to the same broken move, not merely a criticism that is true.',
      ],
      whyItMatters: 'Flaw questions reward diagnosis. If you can name the bad move before choices, the right answer often feels almost boring.',
      coreIdea: 'A flaw is not “something imperfect.” It is the exact reason the evidence does not earn the conclusion.',
      coldReadPrompts: ['What did the author conclude?', 'What evidence was offered?', 'Why does that evidence not quite get there?'],
      decisionTree: ['Underline the conclusion.', 'Describe the support in one line.', 'Name the missing bridge or invalid move.', 'Choose the answer that criticizes that same move.'],
      exampleWalkthrough: [
        { label: 'Stimulus', text: 'A tutoring group improved after using a new planner, so the planner must have caused the improvement.' },
        { label: 'Diagnosis', text: 'The author treats improvement after adoption as proof of cause without ruling out another explanation.' },
        { label: 'Credited answer', text: 'Choose the choice that says the argument confuses correlation with causation, not one that merely says tutoring matters.' },
      ],
      errorClinic: [
        { symptom: 'You pick an answer that sounds negative.', cause: 'You are criticizing the topic instead of the reasoning.', fix: 'Ask, “Would this answer still hurt if the conclusion were different?” If yes, it may be too generic.' },
        { symptom: 'Causal flaws keep slipping by.', cause: 'You are reading chronology as proof.', fix: 'Whenever you see “after,” ask what else could have changed.' },
      ],
      timingPlan: ['15 sec: find conclusion.', '25 sec: name support.', '20 sec: say the bad move.', 'Use the rest to match wording, not rediscover the argument.'],
      masteryCriteria: ['You can label the flaw before choices.', 'You can reject a true-but-wrong criticism.', 'You can explain why the conclusion is not yet earned.'],
      journalPrompt: 'Which bad move fooled you here, and what signal word or argument pattern will alert you next time?',
    },
    Assumption: {
      learningObjectives: [
        'Find the gap between evidence and conclusion.',
        'Separate a required bridge from a merely helpful fact.',
        'Use negation to test whether the argument collapses.',
      ],
      whyItMatters: 'Assumption questions expose the hidden beam holding up the argument. If you confuse “helps” with “required,” you donate points.',
      coreIdea: 'A necessary assumption is something the author must believe. If it is false, the conclusion can no longer stand as argued.',
      coldReadPrompts: ['What new idea appears in the conclusion?', 'What must be true for the evidence to reach it?', 'What happens if that candidate is false?'],
      decisionTree: ['Find conclusion and evidence.', 'Name the bridge.', 'Test contenders by negating them.', 'Keep the answer whose negation wrecks the argument.'],
      exampleWalkthrough: [
        { label: 'Stimulus', text: 'Students who attended office hours improved, so office hours caused the improvement.' },
        { label: 'Gap', text: 'The author assumes the attendees were not already more likely to improve for another reason.' },
        { label: 'Negation test', text: 'If they were already stronger or more motivated, the causal conclusion weakens badly; that bridge is required.' },
      ],
      errorClinic: [
        { symptom: 'You choose a very helpful answer.', cause: 'Helpful is not the same as necessary.', fix: 'Negate it. If the argument merely becomes less impressive, keep looking.' },
        { symptom: 'You freeze between two bridges.', cause: 'You have not identified which one the conclusion actually depends on.', fix: 'Point to the exact word in the conclusion that needs support.' },
      ],
      timingPlan: ['20 sec: map evidence and conclusion.', '20 sec: prephrase the gap.', '30 sec: negate close contenders.'],
      masteryCriteria: ['You can state the bridge in your own words.', 'You use negation only after predicting the gap.', 'You distinguish required from merely useful information.'],
      journalPrompt: 'What was the hidden bridge, and how did the tempting wrong answer strengthen without being required?',
    },
    Strengthen: {
      learningObjectives: [
        'Identify the weak bridge in the argument.',
        'Predict the kind of new fact that would support that bridge.',
        'Prefer direct reinforcement over interesting background facts.',
      ],
      whyItMatters: 'Strengthen rewards disciplined targeting. You are not looking for “good news”; you are repairing the one link the author needs most.',
      coreIdea: 'The right answer makes the argument more likely by supporting its weakest connection.',
      coldReadPrompts: ['Where is the gap?', 'What fact would make that gap less worrying?', 'Which answers merely sound favorable?'],
      decisionTree: ['Find the conclusion.', 'Name the weak bridge.', 'Imagine what evidence would help.', 'Choose the answer that most directly supports the bridge.'],
      exampleWalkthrough: [
        { label: 'Stimulus', text: 'A school claims a new reading program caused score gains because participating classes improved.' },
        { label: 'Bridge', text: 'We need to know whether the participating classes were comparable before the program.' },
        { label: 'Credited answer', text: 'Evidence that classes started at similar levels strengthens the causal claim more than praise for the program.' },
      ],
      errorClinic: [
        { symptom: 'You choose a positive-sounding fact.', cause: 'You are helping the topic, not the argument.', fix: 'Say the gap aloud before evaluating choices.' },
        { symptom: 'You overvalue extreme answers.', cause: 'You think stronger wording means stronger support.', fix: 'Choose the answer that touches the gap most directly, even if modest.' },
      ],
      timingPlan: ['20 sec: conclusion + gap.', '20 sec: predict support.', 'Final pass: rank by directness to the bridge.'],
      masteryCriteria: ['You can name the bridge.', 'You can say why the credited answer helps.', 'You can explain why a flattering answer is still irrelevant.'],
      journalPrompt: 'What exact bridge needed support, and which tempting answer sounded good without touching it?',
    },
    Weaken: {
      learningObjectives: [
        'Identify the argument bridge before attacking it.',
        'Predict what kind of fact would make the conclusion less likely.',
        'Distinguish weakening the support from merely discussing the topic.',
      ],
      whyItMatters: 'Weaken questions become much easier when you attack the bridge instead of spraying skepticism everywhere.',
      coreIdea: 'The right answer does not need to prove the conclusion false. It only needs to make the author’s route to that conclusion less trustworthy.',
      coldReadPrompts: ['What does the author need to be true?', 'What alternative explanation or missing condition would hurt that route?', 'Which answers are side issues?'],
      decisionTree: ['Find the conclusion.', 'Name the support relationship.', 'Imagine the best rival explanation.', 'Choose the answer that damages the relationship most directly.'],
      exampleWalkthrough: [
        { label: 'Stimulus', text: 'A city concludes bike lanes reduced traffic because congestion fell after lanes opened.' },
        { label: 'Bridge', text: 'The claim assumes nothing else caused the drop.' },
        { label: 'Credited answer', text: 'A simultaneous bridge closure that diverted cars elsewhere weakens more than a complaint about bike-lane cost.' },
      ],
      errorClinic: [
        { symptom: 'You attack a premise that is already given.', cause: 'You are trying to disprove facts instead of the inference.', fix: 'Ask what the premises still fail to prove even if they are true.' },
        { symptom: 'You reject subtle weakeners.', cause: 'You expect demolition rather than damage.', fix: 'Remember: a weakener only needs to lower confidence.' },
      ],
      timingPlan: ['20 sec: isolate the bridge.', '20 sec: imagine a rival explanation.', 'Use remaining time to compare damage, not drama.'],
      masteryCriteria: ['You can state the author’s vulnerable bridge.', 'You can invent one possible weakener before choices.', 'You can explain why a side issue is not enough.'],
      journalPrompt: 'What bridge did you attack, and what kind of weaker would you predict faster next time?',
    },
    'Conditional Logic': {
      learningObjectives: [
        'Translate English rules into clean if-then form.',
        'Build valid contrapositives without reversing terms.',
        'Use only what the rule licenses.',
      ],
      whyItMatters: 'Conditional logic questions punish tiny direction mistakes. One arrow pointed the wrong way can contaminate the whole set.',
      coreIdea: 'If X then Y means X is sufficient and Y is necessary. The contrapositive is valid; the reverse is not.',
      coldReadPrompts: ['What triggers the rule?', 'What must follow?', 'What happens when the necessary condition is absent?'],
      decisionTree: ['Underline indicator words.', 'Write X -> Y.', 'Write not Y -> not X.', 'Reject reverse and mistaken-negation answers.'],
      exampleWalkthrough: [
        { label: 'Rule', text: 'Only applicants with references receive interviews.' },
        { label: 'Translation', text: 'Interview -> references. References are necessary, not sufficient.' },
        { label: 'Use', text: 'If someone lacks references, they cannot receive an interview. Having references alone proves nothing about receiving one.' },
      ],
      errorClinic: [
        { symptom: 'You reverse “only if.”', cause: 'You are reading English order instead of logical role.', fix: 'Ask which thing is required, then put that on the right side of the arrow.' },
        { symptom: 'You infer too much from satisfying the necessary term.', cause: 'Necessary is not sufficient.', fix: 'Say, “needed does not mean enough.”' },
      ],
      timingPlan: ['10 sec: mark indicators.', '20 sec: diagram.', '15 sec: write contrapositive.', 'Then test answers one by one.'],
      masteryCriteria: ['You can diagram only if correctly.', 'You can produce the contrapositive instantly.', 'You do not treat necessary conditions as guarantees.'],
      journalPrompt: 'Which direction mistake are you most prone to, and what translation phrase will prevent it?',
    },
    'Must Be True': {
      learningObjectives: [
        'Collect only facts that are actually given.',
        'Favor the weakest fully supported answer.',
        'Reject attractive claims that add new assumptions.',
      ],
      whyItMatters: 'Must Be True is where discipline pays. The right answer is often less exciting because it stays inside the proof.',
      coreIdea: 'You are not choosing what seems likely. You are choosing what the stimulus forces.',
      coldReadPrompts: ['What do I know for sure?', 'Which relationships can be combined safely?', 'Which answer adds something new?'],
      decisionTree: ['List facts.', 'Combine only licensed relationships.', 'Test each answer against the facts.', 'Keep the answer with zero extra assumptions.'],
      exampleWalkthrough: [
        { label: 'Facts', text: 'Every archived document is indexed. Some museum letters are archived.' },
        { label: 'Inference', text: 'At least some museum letters are indexed.' },
        { label: 'Trap', text: 'Do not conclude every indexed item is archived; that reverses the rule.' },
      ],
      errorClinic: [
        { symptom: 'You pick the “most reasonable” answer.', cause: 'You are solving a real-world question, not a proof question.', fix: 'Demand a line-by-line path from the stimulus to the answer.' },
        { symptom: 'Extreme answers scare you automatically.', cause: 'You are using tone instead of logic.', fix: 'If the stimulus earns “all,” then “all” can be right.' },
      ],
      timingPlan: ['20 sec: list facts.', '20 sec: connect them.', 'Final pass: ask whether each answer is forced or merely plausible.'],
      masteryCriteria: ['You can separate forced from likely.', 'You can combine rules without reversing them.', 'You can prove the credited answer aloud.'],
      journalPrompt: 'What unsupported extra idea tempted you, and what exact proof chain earns the right answer?',
    },
    'Role / Method / Technique': {
      learningObjectives: [
        'Separate what a sentence says from what it does.',
        'Label claims as evidence, conclusion, objection, example, concession, or background.',
        'Choose function language over content summary.',
      ],
      whyItMatters: 'Role questions are a reading-comprehension test inside LR. Once you see the structure, the content becomes much less distracting.',
      coreIdea: 'The answer must describe the sentence’s job in the argument, not merely repeat its topic.',
      coldReadPrompts: ['Is this claim supporting, opposing, conceding, or concluding?', 'What would disappear from the argument if this sentence vanished?', 'Does the answer describe function or just content?'],
      decisionTree: ['Find the main conclusion.', 'Mark the target sentence.', 'Ask how it relates to the conclusion.', 'Choose the answer that names that relationship.'],
      exampleWalkthrough: [
        { label: 'Argument', text: 'The city should fund the library expansion because circulation rose 20 percent last year.' },
        { label: 'Target claim', text: '“Circulation rose 20 percent last year” is evidence.' },
        { label: 'Trap', text: 'An answer saying the sentence “discusses library use” is content summary, not argumentative role.' },
      ],
      errorClinic: [
        { symptom: 'You like an answer because it mentions the same subject.', cause: 'You are tracking nouns instead of structure.', fix: 'Replace the sentence with a blank and ask what argumentative job is missing.' },
        { symptom: 'You confuse objection with concession.', cause: 'You missed whether the author accepts or rejects the point.', fix: 'Check the sentence immediately before and after the target claim.' },
      ],
      timingPlan: ['15 sec: find conclusion.', '15 sec: locate the target.', '20 sec: name its relation to the conclusion.'],
      masteryCriteria: ['You can label the target sentence’s job.', 'You reject topic-summary answers.', 'You can distinguish concession from objection.'],
      journalPrompt: 'What function label did you miss, and what nearby words should have revealed it?',
    },
    'Resolve / Explain': {
      learningObjectives: [
        'Hold both facts true at once.',
        'Identify what makes the pair surprising.',
        'Choose the answer that removes the surprise without denying either fact.',
      ],
      whyItMatters: 'Resolve questions reward flexibility. The right answer often introduces a distinction you had not noticed yet.',
      coreIdea: 'You are not choosing a side. You are finding a world in which both facts can coexist.',
      coldReadPrompts: ['What two facts must stay true?', 'Why do they seem to conflict?', 'What distinction could make both sensible?'],
      decisionTree: ['State fact A.', 'State fact B.', 'Name the tension.', 'Choose the answer that explains both facts together.'],
      exampleWalkthrough: [
        { label: 'Facts', text: 'Fewer people started an online application, yet more people completed it.' },
        { label: 'Tension', text: 'A drop in starts seems like it should lower completions too.' },
        { label: 'Resolution', text: 'A shorter form may deter casual starts while helping serious applicants finish, explaining both facts.' },
      ],
      errorClinic: [
        { symptom: 'You choose an answer that explains one side beautifully.', cause: 'You forgot the other side must remain true too.', fix: 'After each choice, say “Does this explain both?”' },
        { symptom: 'You treat the paradox as a flaw question.', cause: 'You are trying to attack rather than reconcile.', fix: 'Picture both facts on the board with a plus sign between them, not an X.' },
      ],
      timingPlan: ['15 sec: write A / B.', '15 sec: state the surprise.', 'Use the rest to hunt for a distinction that preserves both.'],
      masteryCriteria: ['You can restate both facts precisely.', 'You reject one-sided explanations.', 'You can articulate the resolving distinction.'],
      journalPrompt: 'What distinction made the paradox dissolve, and how could you have looked for that sooner?',
    },
    'RC Structure': {
      learningObjectives: [
        'Read each paragraph for job rather than detail.',
        'Track the passage turn from old view to complication to author position.',
        'Choose structure answers that describe movement, not topic.',
      ],
      whyItMatters: 'Structure is the skeleton of RC. If you can see the skeleton, main point, function, and attitude questions all become easier.',
      coreIdea: 'A passage map is a sequence of paragraph jobs. Facts matter because of the role they play in that sequence.',
      coldReadPrompts: ['What job does this paragraph do?', 'Where does the passage turn?', 'What is the author doing by the end?'],
      decisionTree: ['Tag each paragraph in 3-6 words.', 'Mark the major turn.', 'State the author final move.', 'Match the answer to the sequence of jobs.'],
      exampleWalkthrough: [
        { label: 'P1', text: 'Introduces a familiar interpretation of a musical movement.' },
        { label: 'P2', text: 'Complicates that interpretation with archival evidence.' },
        { label: 'P3', text: 'Offers the author’s narrower, qualified account.' },
      ],
      errorClinic: [
        { symptom: 'You remember details but cannot answer organization questions.', cause: 'You read for facts without labeling jobs.', fix: 'After each paragraph, force a 3-word margin note such as “old view challenged.”' },
        { symptom: 'You choose a topic summary.', cause: 'The answer has the right nouns but no movement.', fix: 'Look for verbs: introduces, challenges, qualifies, defends.' },
      ],
      timingPlan: ['During reading: one paragraph tag each.', 'After passage: one-line map.', 'On questions: return to the map before rereading details.'],
      masteryCriteria: ['You can summarize every paragraph by role.', 'You can identify the passage turn.', 'You reject topic-only answers.'],
      journalPrompt: 'What was the passage map, and which paragraph job did you fail to name quickly enough?',
    },
    'RC Inference': {
      learningObjectives: [
        'Locate textual proof before evaluating answers.',
        'Choose the answer that is safest, not most interesting.',
        'Control force words so you do not overread the passage.',
      ],
      whyItMatters: 'RC inference points are often lost through overconfidence, not ignorance. The safest answer wins.',
      coreIdea: 'The right answer is boring because the passage already earns it. Your job is to stay inside the text.',
      coldReadPrompts: ['Where is the proof?', 'How strong can the answer safely be?', 'What extra idea would overreach?'],
      decisionTree: ['Find the relevant lines.', 'Translate them literally.', 'Prefer softer supported wording.', 'Reject any answer that needs a new assumption.'],
      exampleWalkthrough: [
        { label: 'Text', text: 'The author says one account is “useful but incomplete.”' },
        { label: 'Inference', text: 'The author sees some value in that account but does not accept it fully.' },
        { label: 'Trap', text: 'An answer claiming the author rejects the account entirely goes beyond the text.' },
      ],
      errorClinic: [
        { symptom: 'You pick a vivid answer.', cause: 'You are rewarding plausibility or memorability.', fix: 'Ask which answer you could underline back to the passage.' },
        { symptom: 'You miss force shifts.', cause: 'You are reading nouns and ignoring qualifiers.', fix: 'Circle words like some, often, may, all, never, proves.' },
      ],
      timingPlan: ['15 sec: locate lines.', '20 sec: paraphrase proof.', 'Final pass: choose the least-strong fully supported answer.'],
      masteryCriteria: ['You can point to proof lines.', 'You soften claims appropriately.', 'You explain why a stronger choice overreaches.'],
      journalPrompt: 'Which force word changed the answer, and what exact passage phrase should have controlled you?',
    },
    'RC Main Point': {
      learningObjectives: [
        'Separate the passage subject from the author’s claim about it.',
        'Track how the final paragraph changes the earlier material.',
        'Choose an answer broad enough for the whole passage but specific enough to show the author’s position.',
      ],
      whyItMatters: 'Main point is the north star of RC. When you miss it, every later detail becomes harder to place.',
      coreIdea: 'Main point equals subject plus author claim plus the reason that claim matters.',
      coldReadPrompts: ['What issue is the passage about?', 'What does the author want me to believe about it?', 'Which paragraph contains the final turn?'],
      decisionTree: ['Map the paragraphs.', 'Find the author’s final position.', 'Blend the whole passage, not one paragraph.', 'Reject detail-only and topic-only answers.'],
      exampleWalkthrough: [
        { label: 'Topic', text: 'How scholars preserve jazz improvisation.' },
        { label: 'Author claim', text: 'Recordings alone are insufficient because process matters too.' },
        { label: 'Main point', text: 'Preservation should document improvisational process, not merely finished performances.' },
      ],
      errorClinic: [
        { symptom: 'You choose a true detail.', cause: 'You mistook importance within one paragraph for the whole-passage claim.', fix: 'Ask whether the answer explains why all paragraphs are here.' },
        { symptom: 'Your answer is too vague.', cause: 'You captured the subject but not the author’s stance.', fix: 'Add a verb: argues, qualifies, challenges, proposes.' },
      ],
      timingPlan: ['During reading: notice the turn.', 'Before choices: state the passage in one sentence.', 'Use choices to refine, not discover, the claim.'],
      masteryCriteria: ['You can state subject and stance separately.', 'Your answer covers the whole passage.', 'You reject major-detail traps.'],
      journalPrompt: 'What was the author actually arguing, and which tempting answer gave only the subject or a detail?',
    },
    'RC Function': {
      learningObjectives: [
        'Identify the local claim or detail.',
        'Ask why the author included it in the passage architecture.',
        'Match the detail to its job: example, contrast, support, concession, or qualification.',
      ],
      whyItMatters: 'Function questions test whether you see the passage as built, not merely read.',
      coreIdea: 'A detail matters because of the work it performs in the author’s larger plan.',
      coldReadPrompts: ['What is this detail doing here?', 'What sentence before or after gives it purpose?', 'Is the answer naming job or just content?'],
      decisionTree: ['Locate the reference.', 'Read one sentence before and after.', 'Name the local job.', 'Connect that job to the passage map.'],
      exampleWalkthrough: [
        { label: 'Detail', text: 'The author cites an archival letter from a composer.' },
        { label: 'Local job', text: 'The letter complicates the familiar interpretation introduced earlier.' },
        { label: 'Passage job', text: 'It supports the author’s broader claim that the conventional account is incomplete.' },
      ],
      errorClinic: [
        { symptom: 'You answer with what the detail says.', cause: 'You are summarizing content, not function.', fix: 'Start your answer with “to…”' },
        { symptom: 'You miss why the example appears.', cause: 'You read it in isolation.', fix: 'Check the sentence before and after every cited detail.' },
      ],
      timingPlan: ['10 sec: locate.', '20 sec: reread the neighborhood.', '20 sec: name the job before choices.'],
      masteryCriteria: ['You can answer with a verb phrase.', 'You connect local job to whole passage.', 'You reject content-summary traps.'],
      journalPrompt: 'What did the referenced detail do, not merely say, and where did you see that in the passage map?',
    },
    'RC Attitude': {
      learningObjectives: [
        'Spot evaluative wording without exaggerating it.',
        'Translate tone into ordinary language.',
        'Distinguish qualification from hostility or endorsement.',
      ],
      whyItMatters: 'Attitude questions are often lost by emotional inflation. The LSAT usually prefers precise, restrained tone words.',
      coreIdea: 'Author attitude is earned by evaluative language plus structure, not by your reaction to the topic.',
      coldReadPrompts: ['Which words reveal evaluation?', 'How strong is the author really?', 'Is the author qualifying, endorsing, doubting, or rejecting?'],
      decisionTree: ['Underline evaluative words.', 'Translate tone plainly.', 'Check the final paragraph.', 'Reject emotional overstatements.'],
      exampleWalkthrough: [
        { label: 'Text', text: 'The author calls one model “useful but incomplete.”' },
        { label: 'Tone', text: 'That is qualified approval, not enthusiasm and not contempt.' },
        { label: 'Credited answer', text: 'Choose “measured” or “qualified,” not “dismissive” or “celebratory.”' },
      ],
      errorClinic: [
        { symptom: 'You choose a dramatic tone word.', cause: 'You are substituting your feeling for the author’s language.', fix: 'Point to the exact evaluative phrase that earns the emotion.' },
        { symptom: 'Neutral passages feel impossible.', cause: 'You expect every author to sound emotional.', fix: 'Remember that analytical, measured, and qualified are real attitudes too.' },
      ],
      timingPlan: ['While reading: underline tone words.', 'At question time: reread the final turn.', 'Choose the narrowest tone label that fits all evidence.'],
      masteryCriteria: ['You can cite the tone words.', 'You avoid emotional inflation.', 'You distinguish qualified support from rejection.'],
      journalPrompt: 'Which word carried the author’s attitude, and how did the tempting answer overstate it?',
    },
  };

  return { ...generic, ...(profiles[family] || {}) };
}

function contentBoostQuestionDiagnostics(question) {
  const steps = contentBoostMethodSteps(question.family);
  const traps = contentBoostTrapWarnings(question.family);
  return {
    explanationSteps: [
      `Task: this is a ${question.family} question, so the answer must perform that specific job.`,
      `Proof: ${question.explanation}`,
      `Method: ${steps[0]} ${steps[1] || ''}`,
    ],
    wrongAnswerDiagnostics: [
      `Trap pattern: ${question.trapPattern || 'familiar wording without proof'}.`,
      `Likely mistake: ${question.mistakeReason || 'Wrong answer trap'}.`,
      `Fix now: ${traps[0] || 'Return to the task before choosing.'}`,
    ],
    onTheSpotFix: steps.join(' -> '),
  };
}

function v2LessonSummary(lesson, family) {
  const title = lesson.title || 'this lesson';
  if (String(lesson.track || '').includes('RC')) {
    return `${title} teaches you to map the passage by paragraph job, author viewpoint, and proof boundaries before answering. The goal is to leave with one clean passage map and one trap rule.`;
  }
  return `${title} teaches you to identify the argument task, name the missing logical move, and reject answers that sound related but do not perform the job.`;
}

function v2WorkedExampleForLesson(lesson, family) {
  const title = lesson.title || 'this lesson';
  const examples = {
    Flaw: {
      prompt: 'Original stimulus: after a neighborhood installed new streetlights, reported thefts fell, so a council member concludes the lights caused the entire drop.',
      reasoning: 'Find the causal conclusion, notice that timing alone is the evidence, then prephrase the gap: another change may have caused the decline. The credited answer should criticize the causal leap, not merely mention crime policy.',
    },
    Assumption: {
      prompt: 'Original stimulus: students who used a new review checklist improved more than classmates who did not, so the teacher concludes the checklist caused the gains.',
      reasoning: 'The conclusion depends on the two groups being otherwise comparable. Negating that bridge -- for example, if checklist users were already more prepared -- makes the causal claim collapse.',
    },
    Strengthen: {
      prompt: 'Original stimulus: a clinic claims reminder texts reduced missed appointments because no-show rates fell after the texts began.',
      reasoning: 'The argument needs support for its causal bridge. Evidence that appointment mix, staffing, and patient population stayed similar would strengthen more directly than praise for the clinic.',
    },
    Weaken: {
      prompt: 'Original stimulus: a museum says a new exhibit increased attendance because visitor counts rose after opening week.',
      reasoning: 'Attack the bridge, not the topic. If the city also launched a free-admission festival that week, the exhibit is no longer the cleanest explanation for the rise.',
    },
    'Conditional Logic': {
      prompt: 'Original rule set: only applicants with references receive interviews; every interviewed applicant receives a schedule notice.',
      reasoning: 'Translate carefully: interview -> references and interview -> notice. Lacking references proves no interview; having references alone does not prove an interview.',
    },
    'Must Be True': {
      prompt: 'Original fact set: every archived letter is indexed, and some jazz manuscripts are archived letters.',
      reasoning: 'Only combine what is forced. At least some jazz manuscripts are indexed; it would overreach to say every indexed item is archived.',
    },
    'Role / Method / Technique': {
      prompt: 'Original stimulus: because circulation rose sharply last year, the library should extend weekend hours.',
      reasoning: 'The circulation claim is evidence offered in support of the recommendation. The credited answer describes that function, not merely the topic of library use.',
    },
    'Resolve / Explain': {
      prompt: 'Original facts: after a university shortened its application, fewer students began it, yet a larger share completed it successfully.',
      reasoning: 'Keep both facts true. A shorter form could deter casual starts while helping committed applicants finish, resolving the apparent conflict without denying either side.',
    },
    'RC Structure': {
      prompt: `Original passage capsule for ${title}: paragraph 1 presents a familiar interpretation, paragraph 2 complicates it with archival evidence, and paragraph 3 offers the author's narrower final view.`,
      reasoning: 'Map paragraph jobs before answer choices. The correct structure answer should describe the movement from old view to complication to qualified conclusion, not simply list the topic.',
    },
    'RC Inference': {
      prompt: `Original passage capsule for ${title}: the author says a common explanation is useful but incomplete because it misses one recurring pattern in the evidence.`,
      reasoning: 'A safe inference is that the author sees some value in the common explanation while rejecting it as a complete account. Answers saying the author dismisses it entirely go too far.',
    },
    'RC Main Point': {
      prompt: `Original passage capsule for ${title}: scholars often preserve only finished performances, but the author argues that documenting process is also necessary to understand the art form.`,
      reasoning: `Blend the subject with the author's claim. The main point is not merely “preservation matters”; it is that preservation should include process, not only finished products.`,
    },
    'RC Function': {
      prompt: `Original passage capsule for ${title}: the author cites a composer's letter immediately after introducing a familiar interpretation of the work.`,
      reasoning: `Read locally and globally. The letter functions as evidence that complicates the earlier interpretation and supports the author's later qualification.`,
    },
    'RC Attitude': {
      prompt: `Original passage capsule for ${title}: the author calls one model “useful but incomplete” before proposing a narrower alternative.`,
      reasoning: 'The author is measured and qualified, not hostile or celebratory. Tone answers must match the actual evaluative language used in the passage.',
    },
  };
  if (examples[family]) return examples[family];
  if (String(lesson.track || '').includes('RC')) {
    return {
      prompt: `Original passage capsule for ${title}: a first paragraph introduces a familiar interpretation, a second paragraph complicates it with a rival detail, and a final paragraph gives the author's qualified position.`,
      reasoning: 'The worked example maps each paragraph by job, predicts the answer in plain English, then eliminates choices that describe topic instead of structure, attitude, or textual proof.',
    };
  }
  return {
    prompt: `Original stimulus for ${title}: evidence is offered for a conclusion, but the support depends on a bridge the author has not fully proven.`,
    reasoning: `The worked example finds the conclusion, names the gap, predicts the answer's job, and rejects traps that change the force, scope, or role required by ${family}.`,
  };
}

function v2PromptForFamily(family, index) {
  const topic = ['public transit', 'museum funding', 'school tutoring', 'workplace scheduling', 'city gardens', 'digital archives'][index % 6];
  if (family.section === 'RC') {
    return `Passage capsule: Paragraph 1 introduces a debate about ${topic}. Paragraph 2 complicates the familiar account with evidence from a second field. Paragraph 3 argues for a narrower, qualified conclusion.`;
  }
  if (family.family === 'Conditional Logic') {
    return `If a ${topic} policy is adopted, then the committee must publish monthly results. Any policy with monthly results requires reliable baseline data. The committee adopted the ${topic} policy.`;
  }
  if (family.family === 'Resolve / Explain') {
    return `After the city shortened the ${topic} application, fewer residents began the form, yet a larger percentage completed it successfully.`;
  }
  return `A consultant argues that a new ${topic} plan caused better outcomes because the group using the plan improved more than a comparison group that did not use it.`;
}

function v2ChoicesForFamily(family, index) {
  const variants = {
    Flaw: ['takes an observed association as sufficient evidence of cause', 'rejects a claim because of who proposed it', 'uses a word in two unrelated senses', 'states a conclusion narrower than the evidence'],
    Assumption: ['The group using the plan was not already more likely to improve', 'Every participant preferred the new plan', 'The plan was less expensive than all alternatives', 'No participant ever changed study methods'],
    Strengthen: ['The two groups had similar starting conditions before the plan began', 'Some participants liked the plan name', 'The plan was described in a short memo', 'The consultant has evaluated other plans'],
    Weaken: ['The group using the plan had a major advantage before the plan started', 'The plan can be taught quickly', 'Some participants discussed the plan afterward', 'The consultant recorded the results'],
    'Conditional Logic': ['The committee must have reliable baseline data', 'Every policy with baseline data is adopted', 'Policies without monthly results always fail', 'The committee did not adopt the policy'],
    'Must Be True': ['At least one adopted policy requires reliable baseline data', 'Every policy with baseline data is adopted', 'No policy can publish monthly results without public meetings', 'The committee adopted every proposed policy'],
    'Role / Method / Technique': ['It is evidence offered to support the recommendation', 'It is the final recommendation itself', 'It is an opposing view the author rejects', 'It is an unrelated definition'],
    'Resolve / Explain': ['The shorter form screened out casual starts but made completion easier for serious applicants', 'The form was never available online', 'Residents stopped applying altogether', 'The completion rate was measured before the change'],
    'RC Structure': ['It presents a familiar view, introduces a complication, and defends a qualified conclusion', 'It lists three unrelated examples', 'It offers only a personal narrative', 'It defines terms without any argumentative shift'],
    'RC Inference': ['The author sees the familiar view as useful but incomplete', 'The author rejects every version of the familiar view', 'The passage proves the rival account impossible', 'The passage gives no reason to distinguish the views'],
    'RC Main Point': ['A familiar account should be narrowed in light of complicating evidence', 'The passage is only a chronology of events', 'Every rival account is false', 'The author refuses to evaluate the issue'],
    'RC Function': ['to support a later qualification of the initial view', 'to state the final conclusion by itself', 'to change the topic to an unrelated debate', 'to prove that all rival views are false'],
    'RC Attitude': ['qualified and analytical', 'openly hostile', 'uncritically enthusiastic', 'confused and indifferent'],
  };
  const options = variants[family.family] || ['It performs the exact task requested', 'It changes the topic', 'It is too strong', 'It describes only background'];
  return options.map((choice, choiceIndex) => choiceIndex === 0 ? choice : `${choice}${index % 5 === 0 ? '' : ''}`);
}

function buildV2OriginalQuestion(index) {
  const family = v2QuestionFamilies[index % v2QuestionFamilies.length];
  const difficulty = v2DifficultyCycle[index % v2DifficultyCycle.length];
  const question = {
    id: `v2-original-${String(index + 1).padStart(3, '0')}`,
    section: family.section,
    family: family.family,
    questionType: family.family,
    difficulty,
    timingTarget: family.target + (difficulty === 'hard' ? 18 : difficulty === 'easy' ? -12 : 0),
    lessonIds: [family.lesson],
    linkedLessonIds: [family.lesson],
    prompt: v2PromptForFamily(family, index),
    question: family.stem,
    options: v2ChoicesForFamily(family, index),
    answer: 0,
    explanation: `The credited answer solves the ${family.family} task by matching the exact logical burden. The traps are attractive because they sound relevant while changing force, role, or proof.`,
    trapPattern: family.trap,
    mistakeReason: v2MistakeReasons[index % v2MistakeReasons.length],
    source: 'JessiPreps original V2',
  };
  return Object.assign(question, contentBoostQuestionDiagnostics(question));
}

function v2LessonQuestionStem(family) {
  if (family === 'RC Main Point') return 'Which one of the following best states the main point of the passage capsule?';
  if (family === 'RC Inference') return 'Which one of the following is most strongly supported by the passage capsule?';
  if (family === 'RC Function') return 'The referenced detail primarily functions to';
  if (family === 'RC Attitude') return 'The author attitude in the passage capsule is best described as';
  if (family === 'Assumption') return 'Which one of the following is an assumption required by the argument?';
  if (family === 'Strengthen') return 'Which one of the following, if true, most strengthens the argument?';
  if (family === 'Weaken') return 'Which one of the following, if true, most weakens the argument?';
  if (family === 'Flaw') return 'The reasoning is most vulnerable to criticism because it';
  if (family === 'Conditional Logic') return 'Which one of the following must be true?';
  if (family === 'Must Be True') return 'Which one of the following is most strongly supported?';
  if (family === 'Resolve / Explain') return 'Which one of the following most helps resolve the apparent conflict?';
  return 'Which answer best performs the task?';
}

function buildV2LessonSpecificQuestion(lesson, index) {
  const family = lesson.linkedQuestionFamilies?.[index % lesson.linkedQuestionFamilies.length] || requestedQuestionFamily('', lesson.track || '', lesson.title);
  const isRc = String(lesson.track || '').includes('RC') || family.startsWith('RC');
  const title = lesson.title;
  const prompt = isRc
    ? `Original passage capsule for ${title}: Paragraph 1 introduces a familiar view about the lesson topic. Paragraph 2 complicates that view with a rival explanation or limitation. Paragraph 3 gives the author's qualified final position.`
    : `Original stimulus for ${title}: A student group adopts a new review method and improves, so the coordinator concludes that the method itself caused the entire improvement.`;
  const options = isRc
    ? [
        'It presents a familiar view, complicates it, and ends with a qualified author position',
        'It lists unrelated facts without an organizing claim',
        'It proves every rival interpretation false',
        'It shifts to a personal story without returning to the issue',
      ]
    : v2ChoicesForFamily(v2QuestionFamilies.find((item) => item.family === family) || { family }, index);
  const question = {
    id: `lesson-${lesson.id}-q${index + 1}`,
    section: isRc ? 'RC' : 'LR',
    family,
    questionType: family,
    difficulty: index === 0 ? 'easy' : index === 3 ? 'hard' : 'medium',
    lessonIds: [lesson.id],
    linkedLessonIds: [lesson.id],
    prompt,
    question: v2LessonQuestionStem(family),
    options,
    answer: 0,
    explanation: `This is a ${title} practice item. The credited answer matches the lesson method: ${contentBoostMethodSteps(family).join(' ')}`,
    trapPattern: contentBoostTrapWarnings(family)[0] || 'Changes the task',
    timingTarget: isRc ? 98 : 86,
    mistakeReason: v2MistakeReasons[index % v2MistakeReasons.length],
    source: 'JessiPreps original lesson-specific practice',
  };
  return Object.assign(question, contentBoostQuestionDiagnostics(question));
}

const v2AdditionalRcPassages = [
  ['rc-v2-oral-history', 'Oral History and Legal Memory', 'Law', 'A debate over whether oral histories should be treated as legal evidence, ending with a qualified standard for corroboration.'],
  ['rc-v2-urban-trees', 'Urban Tree Canopies', 'Natural Science', 'A study of urban heat, tree cover, and the limits of translating ecological models into policy.'],
  ['rc-v2-jazz-archives', 'Jazz Archives and Improvisation', 'Humanities', 'An argument that preserving jazz requires documenting process, not just finished recordings.'],
  ['rc-v2-platform-labor', 'Platform Labor Studies', 'Social Science', 'A comparison of flexibility claims and worker-control evidence in app-based labor.'],
  ['rc-v2-water-rights', 'Indigenous Water Rights', 'Law', 'A passage weighing treaty language, historical practice, and modern environmental enforcement.'],
  ['rc-v2-solar-flares', 'Solar Flare Forecasting', 'Natural Science', 'A discussion of prediction models, uncertainty, and why accuracy improves unevenly across flare types.'],
  ['rc-v2-museum-labels', 'Museum Labels and Interpretation', 'Humanities', 'A critique of neutral museum labels that argues interpretation is unavoidable but can be transparent.'],
  ['rc-v2-food-deserts', 'Food Deserts and Mobility', 'Social Science', 'A passage challenging distance-only models of food access by adding transit and work schedule data.'],
  ['rc-v3-climate-litigation', 'Climate Litigation and Standing', 'Law', 'A passage about courts weighing future injury, causation, and institutional limits in climate-related suits.'],
  ['rc-v3-deep-sea-microbes', 'Deep-Sea Microbial Communities', 'Natural Science', 'A passage challenging the assumption that sunlight-based ecosystems provide the best model for all biological communities.'],
  ['rc-v3-translation-poetry', 'Translation and Poetic Form', 'Humanities', 'A passage arguing that translated poetry should preserve function and effect rather than mirror literal surface structure.'],
  ['rc-v3-housing-mobility', 'Housing Mobility Studies', 'Social Science', 'A passage qualifying claims about neighborhood relocation programs by distinguishing opportunity access from measured outcomes.'],
  ['rc-v3-algorithmic-evidence', 'Algorithmic Evidence in Courts', 'Law', 'A passage evaluating whether predictive tools can be useful while still requiring transparent standards of review.'],
  ['rc-v3-plant-communication', 'Plant Signaling Research', 'Natural Science', 'A passage about chemical signaling among plants and the risks of overstating intentional language in biology.'],
  ['rc-v3-oral-performance', 'Oral Performance Traditions', 'Humanities', 'A passage arguing that performance traditions should be studied as adaptive systems rather than imperfect written texts.'],
  ['rc-v3-voting-behavior', 'Voting Behavior and Local Information', 'Social Science', 'A passage complicating simple turnout theories by adding social networks, ballot design, and local news access.'],
];

function buildV2RcPassage([id, title, topic, summary], index) {
  const families = ['RC Structure', 'RC Main Point', 'RC Inference', 'RC Function', 'RC Attitude'];
  return {
    id,
    title,
    topic,
    category: topic,
    difficulty: index % 3 === 0 ? 'Medium' : index % 3 === 1 ? 'Hard' : 'Easy',
    estimatedReadMinutes: 3,
    passageMapPrompts: ['Name the old view.', 'Name the complication.', 'Name the author final qualified claim.'],
    paragraphs: [
      { label: 'P1', text: `${summary} The opening paragraph introduces the conventional view and explains why it became attractive to researchers or policymakers.` },
      { label: 'P2', text: `The second paragraph complicates that view with evidence that appears to pull in a different direction. Rather than treating the familiar view as useless, the evidence shows that it works only under narrower conditions.` },
      { label: 'P3', text: `The author concludes that the strongest position is qualified: the original framework should guide inquiry, but only after students identify the missing conditions, rival explanations, and limits on the evidence.` },
    ],
    questions: families.map((family, qIndex) => {
      const familyConfig = v2QuestionFamilies.find((item) => item.family === family);
      return {
        id: `${id}-q${qIndex + 1}`,
        section: 'RC',
        family,
        questionType: family,
        difficulty: qIndex === 4 ? 'hard' : qIndex === 0 ? 'easy' : 'medium',
        lessonIds: [familyConfig?.lesson || 'rc-structure-map'],
        linkedLessonIds: [familyConfig?.lesson || 'rc-structure-map'],
        prompt: `${title} question ${qIndex + 1}`,
        question: familyConfig?.stem || 'Which answer is best supported by the passage?',
        options: v2ChoicesForFamily(familyConfig || { family }, qIndex),
        answer: 0,
        explanation: `The credited answer stays inside the passage map for ${title}: old view, complication, qualified conclusion.`,
        trapPattern: familyConfig?.trap || 'Overstates the passage',
        timingTarget: familyConfig?.target || 98,
        mistakeReason: v2MistakeReasons[(index + qIndex) % v2MistakeReasons.length],
        source: 'JessiPreps original V2 RC passage',
      };
    }),
  };
}

(function polishV2StaticProductDepth() {
  const data = window.JESSI_PREPS_DATA;
  if (!data) return;

  if (Array.isArray(data.lessons)) {
    data.lessons.forEach((lesson, index) => {
      const sample = v2VideoSamples[lesson.id];
      const family = lesson.linkedQuestionFamilies?.[0] || requestedQuestionFamily('', lesson.track || '', lesson.title);
      const genericSummary = !lesson.summary || /^Worked example: identify the task/.test(lesson.summary) || /^Original JessiPreps lesson/.test(lesson.summary);
      if (genericSummary) lesson.summary = v2LessonSummary(lesson, family);
      lesson.script = lesson.script || `Professor Maya Brooks opens ${lesson.title} by naming the LSAT job in plain English, models the method on a clean original example, then asks the student to predict before evaluating answer choices. The closing rule is: ${lesson.trapExplanation || 'prove the answer with the task, not familiar wording.'}`;
      lesson.storyboard = lesson.storyboard || (lesson.scenes || []).map((scene, sceneIndex) => ({
        beat: sceneIndex + 1,
        title: scene.title,
        board: scene.storyboard,
        caption: scene.actionCue,
      }));
      lesson.conceptSummary = genericSummary || !lesson.conceptSummary ? v2LessonSummary(lesson, family) : lesson.conceptSummary;
      lesson.methodSteps = lesson.methodSteps || contentBoostMethodSteps(family);
      lesson.trapWarnings = lesson.trapWarnings || contentBoostTrapWarnings(family);
      lesson.miniDrill = lesson.miniDrill || contentBoostMiniDrill(family);
      const depth = contentDepthProfile(family, lesson);
      lesson.learningObjectives = lesson.learningObjectives || depth.learningObjectives;
      lesson.whyItMatters = lesson.whyItMatters || depth.whyItMatters;
      lesson.coreIdea = lesson.coreIdea || depth.coreIdea;
      lesson.coldReadPrompts = lesson.coldReadPrompts || depth.coldReadPrompts;
      lesson.decisionTree = lesson.decisionTree || depth.decisionTree;
      lesson.exampleWalkthrough = lesson.exampleWalkthrough || depth.exampleWalkthrough;
      lesson.errorClinic = lesson.errorClinic || depth.errorClinic;
      lesson.timingPlan = lesson.timingPlan || depth.timingPlan;
      lesson.masteryCriteria = lesson.masteryCriteria || depth.masteryCriteria;
      lesson.journalPrompt = lesson.journalPrompt || depth.journalPrompt;
      lesson.professorNotes = lesson.professorNotes || [
        `Professor Maya framing: ${lesson.title} is not about memorizing labels; it is about knowing what job the answer must do.`,
        `Relatable check: if two answers feel close, slow down and ask which one actually proves the task instead of sounding familiar.`,
      ];
      lesson.quiz = lesson.quiz || {
        prompt: `What is the safest first move for ${lesson.title}?`,
        choices: ['Name the task before reading answers', 'Pick the answer with familiar words', 'Choose the strongest-sounding claim', 'Skip the stem and scan choices'],
        answer: 0,
        explanation: 'Naming the task first keeps the answer choices from steering the process.',
      };
      lesson.masteryDrillId = lesson.masteryDrillId || `mastery-${lesson.id}`;
      if (!lesson.workedExample || /^A passage uses multiple viewpoints/.test(lesson.workedExample.prompt) || /^A stimulus gives evidence/.test(lesson.workedExample.prompt)) {
        lesson.workedExample = v2WorkedExampleForLesson(lesson, family);
      }
      lesson.videoStatus = sample?.status || 'youtube-linked / script-ready';
      lesson.videoPath = sample?.path || '';
      lesson.videoTheme = sample?.theme || family;
      lesson.youtubeVideos = v2YouTubeVideosForLesson(lesson, family);
      v2SyncExternalMedia(lesson);
    });
    v2AttachAllYouTubeVideosToLessons(data);
  }

  if (Array.isArray(data.questionBank)) {
    data.questionBank.forEach((question, index) => {
      question.questionType = question.questionType || question.family;
      question.timingTarget = question.timingTarget || (question.section === 'RC' ? 98 : 84);
      question.linkedLessonIds = question.linkedLessonIds || question.lessonIds || [];
      question.mistakeReason = question.mistakeReason || v2MistakeReasons[index % v2MistakeReasons.length];
      question.source = question.source || 'JessiPreps original';
      Object.assign(question, contentBoostQuestionDiagnostics(question));
    });
    const existingIds = new Set(data.questionBank.map((question) => question.id));
    if (Array.isArray(data.lessons)) {
      data.lessons.forEach((lesson) => {
        const exactCount = data.questionBank.filter((question) => (question.lessonIds || []).includes(lesson.id)).length;
        for (let index = exactCount; index < 5; index += 1) {
          const question = buildV2LessonSpecificQuestion(lesson, index);
          if (!existingIds.has(question.id)) {
            data.questionBank.push(question);
            existingIds.add(question.id);
          }
        }
      });
    }
    let index = 0;
    while (data.questionBank.length < 1000) {
      const question = buildV2OriginalQuestion(index);
      if (!existingIds.has(question.id)) {
        data.questionBank.push(question);
        existingIds.add(question.id);
      }
      index += 1;
    }
  }

  if (Array.isArray(data.rcPassages)) {
    const existingPassageIds = new Set(data.rcPassages.map((passage) => passage.id));
    v2AdditionalRcPassages.forEach((item, index) => {
      if (!existingPassageIds.has(item[0])) data.rcPassages.push(buildV2RcPassage(item, index));
    });
    data.rcPassages.forEach((passage) => {
      passage.passageMapPrompts = passage.passageMapPrompts || ['Main point', 'Viewpoint shift', 'Author attitude'];
      (passage.questions || []).forEach((question, index) => {
        question.questionType = question.questionType || question.family;
        question.timingTarget = question.timingTarget || 98;
        question.linkedLessonIds = question.linkedLessonIds || question.lessonIds || ['rc-structure-map'];
        question.mistakeReason = question.mistakeReason || v2MistakeReasons[index % v2MistakeReasons.length];
        question.source = question.source || 'JessiPreps original RC';
        Object.assign(question, contentBoostQuestionDiagnostics(question));
      });
    });
  }

  data.videoSamples = Object.entries(v2VideoSamples).map(([lessonId, sample]) => ({
    lessonId,
    title: sample.theme,
    videoPath: sample.path,
    status: sample.status,
  }));
  data.videoCoverage = {
    lessons: Array.isArray(data.lessons) ? data.lessons.length : 0,
    playableLessons: Array.isArray(data.lessons) ? data.lessons.filter((lesson) => lesson.videoPath || lesson.youtubeVideos?.length).length : 0,
    youtubePlaylistVideos: v2YouTubeLessonVideos.length,
    youtubeLinkedLessons: Array.isArray(data.lessons) ? data.lessons.filter((lesson) => lesson.youtubeVideos?.length).length : 0,
    uniqueRenderedMp4s: 127,
    sharedFallbackSamples: v2FallbackVideoPaths.length,
  };
  data.youtubeMedia = v2YouTubeLessonVideos;
  data.youtubePlaylistDirectory = v2MyGuruEdgePlaylistDirectory;
})();
