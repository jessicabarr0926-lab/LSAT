function createQuestionBank() {
  const bank = [];

  const families = [
    {
      family: "RC Structure",
      section: "RC",
      lessonId: "rc-structure-map",
      trapPattern: "Mistakes topic for structure",
      timingTarget: 95,
      stems: [
        {
          prompt:
            "Passage summary: Paragraph 1 introduces a traditional legal view. Paragraph 2 shows a historical exception. Paragraph 3 argues for a narrower revised rule.",
          question: "What is the best description of the passage structure?",
          options: [
            "A traditional view, a challenge, and a revised view",
            "Three unrelated historical examples",
            "A narrative about one judge's career",
            "A survey of legal terminology",
          ],
          answer: 0,
          explanation:
            "The passage moves from an old view to a challenge and then to a refined replacement.",
        },
        {
          prompt:
            "Passage summary: Paragraph 1 frames an art-history debate. Paragraph 2 explains Scholar A's view. Paragraph 3 explains Scholar B's opposing view without resolving the dispute.",
          question: "What role does the final paragraph play?",
          options: [
            "It offers a second competing viewpoint",
            "It gives the author's final endorsement",
            "It lists minor factual examples only",
            "It shifts to a different topic altogether",
          ],
          answer: 0,
          explanation:
            "The passage is comparative and the last paragraph supplies the competing position rather than settling it.",
        },
      ],
    },
    {
      family: "RC Inference",
      section: "RC",
      lessonId: "rc-inference-attitude",
      trapPattern: "Chooses a claim stronger than the passage supports",
      timingTarget: 85,
      stems: [
        {
          prompt:
            "A passage says several later studies failed to replicate a famous experiment, but the author also notes that one part of the original design remains influential.",
          question: "Which inference is best supported?",
          options: [
            "The author sees the original experiment as fully discredited",
            "Some aspects of the original work still matter despite replication problems",
            "All replication failures are caused by bias",
            "The later studies used identical methods",
          ],
          answer: 1,
          explanation:
            "The author preserves part of the original experiment's value while recognizing problems.",
        },
        {
          prompt:
            "The passage states that urban wetlands reduce flooding in many cities, though their performance depends on maintenance and surrounding land use.",
          question: "Which claim is most strongly supported?",
          options: [
            "Urban wetlands always prevent flooding",
            "Maintenance can affect how well urban wetlands work",
            "Surrounding land use never matters",
            "Cities should eliminate all concrete surfaces",
          ],
          answer: 1,
          explanation:
            "The passage directly qualifies wetland effectiveness by maintenance and land use.",
        },
      ],
    },
    {
      family: "RC Attitude",
      section: "RC",
      lessonId: "rc-inference-attitude",
      trapPattern: "Reads neutral summary as endorsement",
      timingTarget: 80,
      stems: [
        {
          prompt:
            "The author describes an early economic theory as elegant but oversimplified and later praises a newer model for handling real-world exceptions.",
          question: "The author's attitude toward the early theory is best described as",
          options: [
            "uncritical admiration",
            "qualified respect",
            "hostile dismissal",
            "confused indifference",
          ],
          answer: 1,
          explanation:
            "The author grants the theory elegance while also limiting its usefulness.",
        },
        {
          prompt:
            "A passage presents a historian's claim, then immediately notes that newly discovered records undermine that claim.",
          question: "The author's attitude toward the historian's claim is most likely",
          options: [
            "supportive",
            "skeptical",
            "reverent",
            "playful",
          ],
          answer: 1,
          explanation:
            "The new records are presented as a reason to doubt the original claim.",
        },
      ],
    },
    {
      family: "Flaw",
      section: "LR",
      lessonId: "lr-classic-flaws",
      trapPattern: "Spots topic instead of reasoning error",
      timingTarget: 75,
      stems: [
        {
          prompt:
            "After the city added bike lanes, downtown traffic fell. Therefore, the bike lanes caused the decrease in traffic.",
          question: "The reasoning is most vulnerable to criticism because it",
          options: [
            "confuses correlation with causation",
            "equates a sample with a population",
            "attacks a person instead of a claim",
            "uses a principle to justify a policy",
          ],
          answer: 0,
          explanation:
            "The timing relationship alone does not prove the lanes caused the drop in traffic.",
        },
        {
          prompt:
            "A newsletter survey of antique-map collectors found that 78% support a new cartography museum. So the city's residents support building that museum.",
          question: "Which flaw most accurately describes the argument?",
          options: [
            "It relies on an unrepresentative sample",
            "It mistakes possibility for certainty",
            "It reverses a conditional claim",
            "It assumes that old things are valuable",
          ],
          answer: 0,
          explanation:
            "Antique-map collectors are not representative of city residents generally.",
        },
      ],
    },
    {
      family: "Assumption",
      section: "LR",
      lessonId: "lr-loophole-assumptions",
      trapPattern: "Picks a helpful fact instead of a necessary bridge",
      timingTarget: 80,
      stems: [
        {
          prompt:
            "The cafe should switch to digital menus because printing paper menus every month is expensive.",
          question: "The argument depends on which assumption?",
          options: [
            "Customers enjoy reading menus on screens",
            "Digital menus would not cost more overall than the current system",
            "Every modern cafe uses digital menus",
            "Paper menus are environmentally harmful",
          ],
          answer: 1,
          explanation:
            "The conclusion assumes the digital alternative is not even more costly.",
        },
        {
          prompt:
            "The school should shorten advisory period because students say they need more lunch time.",
          question: "Which assumption is required?",
          options: [
            "Shortening advisory would be the best practical way to expand lunch time",
            "Students always know what schedule is ideal",
            "Lunch is more important than every class",
            "Advisory has no educational value",
          ],
          answer: 0,
          explanation:
            "The policy recommendation assumes that this change is the appropriate way to solve the problem.",
        },
      ],
    },
    {
      family: "Strengthen",
      section: "LR",
      lessonId: "lr-strengthen-weaken",
      trapPattern: "Chooses a true-sounding fact that does not affect the conclusion",
      timingTarget: 80,
      stems: [
        {
          prompt:
            "A bookstore owner argues that opening two hours earlier will increase profits because commuters will stop in before work.",
          question: "Which option most strengthens the argument?",
          options: [
            "Most nearby commuters pass the bookstore before work and currently have no early bookstore option",
            "The bookstore also sells stationery",
            "Some customers prefer shopping in the evening",
            "The owner enjoys early mornings",
          ],
          answer: 0,
          explanation:
            "This supports the key behavioral assumption that commuters will actually use the earlier opening hours.",
        },
        {
          prompt:
            "A museum director claims that adding more benches will increase visitor satisfaction because people often want more places to rest.",
          question: "Which answer most strengthens the director's reasoning?",
          options: [
            "Exit surveys frequently mention lack of seating as a frustration",
            "Benches can be made from oak or metal",
            "Museums often change exhibits yearly",
            "Some visitors prefer to stand while viewing art",
          ],
          answer: 0,
          explanation:
            "The surveys connect the proposed change directly to the satisfaction problem.",
        },
      ],
    },
    {
      family: "Weaken",
      section: "LR",
      lessonId: "lr-strengthen-weaken",
      trapPattern: "Targets the topic rather than the bridge",
      timingTarget: 80,
      stems: [
        {
          prompt:
            "A mayor says a new tram line will reduce traffic because commuters will have a faster option than driving.",
          question: "Which option most weakens the argument?",
          options: [
            "Most commuters served by the tram already use buses rather than cars",
            "The tram line will use modern rail cars",
            "Some drivers prefer music in their cars",
            "Traffic is usually worst during rainstorms",
          ],
          answer: 0,
          explanation:
            "If the tram mostly shifts bus riders rather than drivers, the traffic-reduction prediction is weaker.",
        },
        {
          prompt:
            "A principal argues that requiring clear backpacks will reduce cheating because students will be less able to hide notes.",
          question: "Which answer most weakens the argument?",
          options: [
            "Most cheating at the school occurs through phones and messaging, not hidden paper notes",
            "Students dislike changing backpack styles",
            "Clear backpacks are sold in many stores",
            "Teachers already monitor hallways",
          ],
          answer: 0,
          explanation:
            "The answer attacks the assumption that hidden paper notes are the real source of the cheating problem.",
        },
      ],
    },
    {
      family: "Conditional Logic",
      section: "LR",
      lessonId: "lr-conditional-formal-logic",
      trapPattern: "Reverses or negates the rule",
      timingTarget: 70,
      stems: [
        {
          prompt:
            "Only applicants who submit two recommendations are eligible for the fellowship.",
          question: "Which inference must be true?",
          options: [
            "Anyone who submits two recommendations is eligible",
            "Anyone eligible for the fellowship submitted two recommendations",
            "Anyone not eligible failed to submit two recommendations",
            "Anyone with one recommendation is ineligible for every fellowship",
          ],
          answer: 1,
          explanation:
            "Only if introduces a necessary condition: eligibility requires two recommendations.",
        },
        {
          prompt:
            "If a proposal cuts emissions and lowers household energy costs, the council will support it unanimously.",
          question: "If a proposal is not supported unanimously, what follows?",
          options: [
            "It did not lower household energy costs",
            "It did not cut emissions",
            "It failed at least one of those two requirements",
            "It increased taxes",
          ],
          answer: 2,
          explanation:
            "The contrapositive tells us that lacking unanimous support means at least one necessary condition failed.",
        },
      ],
    },
    {
      family: "Main Point",
      section: "LR",
      lessonId: "lr-method-role-mainpoint",
      trapPattern: "Chooses a premise or example instead of the conclusion",
      timingTarget: 75,
      stems: [
        {
          prompt:
            "Many cities that built floodable parks have seen lower storm-repair costs. Because those parks temporarily hold stormwater that would otherwise damage streets and buildings, more coastal cities should adopt them.",
          question: "Which statement best expresses the main conclusion?",
          options: [
            "Floodable parks temporarily hold stormwater",
            "More coastal cities should adopt floodable parks",
            "Storm-repair costs have fallen in some cities",
            "Streets and buildings can be damaged by stormwater",
          ],
          answer: 1,
          explanation:
            "The final recommendation is the conclusion supported by the earlier observations.",
        },
        {
          prompt:
            "The committee found that students using peer-led tutoring attended class more consistently. Since attendance correlates with course completion at this college, the committee concluded that peer-led tutoring should be expanded.",
          question: "The argument's main point is that",
          options: [
            "attendance correlates with course completion",
            "students in tutoring attended more consistently",
            "peer-led tutoring should be expanded",
            "the committee met last week",
          ],
          answer: 2,
          explanation:
            "The policy recommendation is what the argument is trying to establish.",
        },
      ],
    },
    {
      family: "Role / Method / Technique",
      section: "LR",
      lessonId: "lr-method-role-mainpoint",
      trapPattern: "Mislabels evidence as conclusion or vice versa",
      timingTarget: 80,
      stems: [
        {
          prompt:
            "Editorialist: No city should reduce tree cover during redevelopment. Trees lower heat and improve air quality. In addition, replacing mature trees later is far more expensive than preserving them now.",
          question: "In the argument, the statement that replacing mature trees later is far more expensive serves primarily to",
          options: [
            "state the main conclusion",
            "provide further support for the recommendation",
            "offer an opposing viewpoint",
            "define a technical term",
          ],
          answer: 1,
          explanation:
            "The statement is an additional premise supporting the anti-reduction recommendation.",
        },
        {
          prompt:
            "Speaker 1: The new rule is unnecessary because existing policy already covers the problem. Speaker 2: Existing policy may address part of it, but the new rule adds enforcement tools missing before.",
          question: "Speaker 2 responds to Speaker 1 primarily by",
          options: [
            "attacking Speaker 1 personally",
            "showing that existing policy only partially solves the issue",
            "changing the topic to enforcement budgets",
            "admitting the new rule is unnecessary",
          ],
          answer: 1,
          explanation:
            "Speaker 2 narrows and rebuts the adequacy of the existing policy.",
        },
      ],
    },
  ];

  families.forEach((group) => {
    group.stems.forEach((stem, stemIndex) => {
      ["easy", "medium", "hard"].forEach((difficulty, difficultyIndex) => {
        for (let variant = 0; variant < 2; variant += 1) {
          const id = `${group.family.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${stemIndex}-${difficulty}-${variant}`;
          bank.push({
            id,
            section: group.section,
            family: group.family,
            difficulty,
            lessonIds: [group.lessonId],
            prompt: stem.prompt,
            question: stem.question,
            options: stem.options,
            answer: stem.answer,
            explanation: stem.explanation,
            trapPattern: group.trapPattern,
            workedExampleEligible: difficulty !== "hard",
            timingTarget: group.timingTarget + difficultyIndex * 8 + variant * 3,
          });
        }
      });
    });
  });

  return bank;
}

const QUESTION_BANK = createQuestionBank();

window.JESSI_PREPS_DATA = {
  appMeta: {
    title: "JessiPreps",
    subtitle: "A personal LSAT operating system",
    currentPrepTest: "PrepTest 130",
    readinessScore: 72,
    rawScore: 53,
    scaledScore: 161,
    targetScore: 175,
  },
  navigation: [
    { route: "dashboard", label: "Dashboard", eyebrow: "Command Center" },
    { route: "learn", label: "Learn", eyebrow: "Content Hub" },
    { route: "practice", label: "Practice", eyebrow: "Question Bank + Drills" },
    { route: "review", label: "Review", eyebrow: "Journal + Analytics" },
    { route: "plan", label: "Plan", eyebrow: "Study System" },
  ],
  settings: [
    { id: "dyslexiaFont", label: "Dyslexia font", type: "toggle" },
    { id: "focusSpacing", label: "Focus spacing", type: "toggle" },
    { id: "darkMode", label: "Dark mode", type: "toggle" },
    { id: "highContrast", label: "High contrast", type: "toggle" },
    { id: "uglyMode", label: "Ugly mode", type: "toggle" },
    { id: "predictionMode", label: "Prediction mode", type: "toggle" },
    { id: "reducedMotion", label: "Reduced motion", type: "toggle" },
  ],
  roadmapSteps: [
    { band: "140-150", focus: "Reading structure, sentence translation, and confidence rebuild" },
    { band: "151-160", focus: "Argument anatomy, loopholes, and repeatable review habits" },
    { band: "161-168", focus: "Question-family precision, adaptive drills, and timing control" },
    { band: "169-175", focus: "Trap resistance, blind review discipline, and test-day pacing" },
  ],
  studyModes: [
    { id: "warmup", title: "10-Minute Warmup", description: "One RC map, one LR structure prompt, one CLIR prediction, then review a miss." },
    { id: "deep-dive", title: "Deep Dive Lesson", description: "Complete one flagship lesson, its worked example, and mastery gate." },
    { id: "timed-set", title: "Timed Mixed Set", description: "Five questions in eight minutes, then double-time review." },
    { id: "blind-review", title: "Blind Review Block", description: "Re-answer misses without time pressure and log why the trap worked." },
  ],
  officialLinks: [
    { label: "Open Official PT Review Folder", href: "https://www.lsac.org/lsat" },
    { label: "LSAT Writing Guidance", href: "https://www.lsac.org/lsat/taking-lsat/about-lsat-writing" },
    { label: "Current LSAT Format Guide", href: "https://www.lsac.org/lsat/about/lsat-test-format" },
  ],
  supportEntries: [
    "Why did I fall for strong language on must-be-true questions?",
    "I still freeze on RC attitude questions when two answers sound balanced.",
    "I rush through weaken questions before naming the exact gap.",
  ],
  lessons: [
    {
      id: "rc-structure-map",
      title: "RC Structure and Passage Maps",
      track: "RC Core",
      sourceTags: ["LSAT Trainer", "PowerScore RC"],
      summary: "Read passages for structure, viewpoint, and paragraph jobs before chasing details.",
      statusLabel: "Featured starting lesson",
      masteryThreshold: 3,
      linkedQuestionFamilies: ["RC Structure", "RC Inference"],
      nextLessonId: "rc-inference-attitude",
      scenes: [
        { type: "concept", title: "The real job", explanation: "Your first read is for structure, not detail storage.", storyboard: "Paragraph roles, viewpoint shifts, and the passage spine.", actionCue: "Label each paragraph in under five words." },
        { type: "worked-example", title: "Worked map", explanation: "An old theory, a challenge, and a revised theory is a structure, not just a topic.", storyboard: "Old view -> challenge -> replacement.", actionCue: "Say the role of paragraph 3 before seeing the answers." },
        { type: "trap", title: "Trap answer pattern", explanation: "RC wrong answers often summarize the topic but miss the passage's movement.", storyboard: "Topic is not structure.", actionCue: "Reject any answer that names subject but not role." },
        { type: "recap", title: "What to remember", explanation: "A good passage map tells you where to return later.", storyboard: "Job labels beat detail hoarding.", actionCue: "Build a map, not a memory contest." },
        { type: "next-step", title: "Do this next", explanation: "Move into attitude and inference once you can see structure quickly.", storyboard: "Structure first -> inference second.", actionCue: "Open the linked RC inference lesson." },
      ],
      workedExample: {
        prompt: "Paragraph 1 introduces a standard view, paragraph 2 shows a limitation, paragraph 3 offers the author's alternative.",
        reasoning: "This is a classic view/challenge/replace structure. The author is not neutral because the third paragraph resolves toward the author's position.",
      },
      trapExplanation: "If an answer says only 'the passage discusses urban migration,' it is too topical and not structural enough.",
    },
    {
      id: "rc-inference-attitude",
      title: "RC Inference and Author Attitude",
      track: "RC Core",
      sourceTags: ["PowerScore RC", "LSAT Trainer"],
      summary: "Pair inference control with viewpoint tracking so you stop over-reading the passage.",
      statusLabel: "RC follow-up",
      masteryThreshold: 3,
      linkedQuestionFamilies: ["RC Inference", "RC Attitude"],
      nextLessonId: "rc-comparative-passages",
      scenes: [
        { type: "concept", title: "Inference discipline", explanation: "Pick the answer the passage forces, not the one you can imagine.", storyboard: "Supported beats clever.", actionCue: "Prefer modest language unless the passage earns more." },
        { type: "worked-example", title: "Attitude in motion", explanation: "Words like elegant, limited, oversimplified, and surprisingly useful are attitude clues.", storyboard: "Respect with limits is not endorsement.", actionCue: "Translate tone into plain English." },
        { type: "trap", title: "The common miss", explanation: "Students often turn a skeptical summary into a total rejection.", storyboard: "Qualified criticism is still qualified.", actionCue: "Reject answers stronger than the author's tone." },
        { type: "recap", title: "Control the force", explanation: "If the passage sounds measured, your answer usually should too.", storyboard: "Measured passage -> measured inference.", actionCue: "Check force words before you choose." },
        { type: "next-step", title: "Where this goes", explanation: "Comparative passages become easier once you can track attitude in each voice.", storyboard: "Voice first, comparison second.", actionCue: "Open comparative passages." },
      ],
      workedExample: {
        prompt: "The author calls a theory elegant but incomplete.",
        reasoning: "That is not hostile. It is qualified respect with a limitation, which usually rules out both glowing praise and harsh dismissal.",
      },
      trapExplanation: "An answer that says the author 'rejects the theory entirely' is too strong unless the passage explicitly goes that far.",
    },
    {
      id: "rc-comparative-passages",
      title: "Comparative Passages",
      track: "RC Advanced",
      sourceTags: ["PowerScore RC"],
      summary: "Find overlap, disagreement, and possible reconciliation between paired passages.",
      statusLabel: "RC advanced",
      masteryThreshold: 3,
      linkedQuestionFamilies: ["RC Structure", "RC Attitude"],
      nextLessonId: "lr-argument-core",
      scenes: [
        { type: "concept", title: "Two voices, one task", explanation: "Comparative RC is about the relationship between passages, not two isolated summaries.", storyboard: "Common ground / disagreement / tone.", actionCue: "State the overlap before details." },
        { type: "worked-example", title: "Comparison map", explanation: "Passage A values speed; Passage B values accuracy. The relationship is tension, not contradiction on every point.", storyboard: "A: efficiency. B: caution.", actionCue: "Name the axis of disagreement." },
        { type: "trap", title: "What goes wrong", explanation: "Students answer from only one passage or force a disagreement where there is merely a different emphasis.", storyboard: "Difference is not always conflict.", actionCue: "Ask whether both passages could still agree on part of the issue." },
        { type: "recap", title: "Fast comparative checklist", explanation: "Who agrees, where do they diverge, and does one qualify the other?", storyboard: "Overlap -> divergence -> tone.", actionCue: "Use the checklist before every paired question." },
        { type: "next-step", title: "Transition", explanation: "With RC foundations in place, shift into LR argument core.", storyboard: "Read structure -> reason through arguments.", actionCue: "Open Argument Core." },
      ],
      workedExample: {
        prompt: "Passage A praises citizen science for scale. Passage B says citizen science works if experts verify submissions.",
        reasoning: "The passages are not fully opposed. B qualifies the conditions under which A's benefit is reliable.",
      },
      trapExplanation: "Answers that describe total disagreement often ignore the qualifying language in one of the passages.",
    },
    {
      id: "lr-argument-core",
      title: "Argument Core and Conclusions",
      track: "LR Core",
      sourceTags: ["The Loophole", "LSAT Trainer"],
      summary: "Separate premises, conclusions, and intermediate claims so every later question has a stable base.",
      statusLabel: "LR foundation",
      masteryThreshold: 3,
      linkedQuestionFamilies: ["Main Point", "Role / Method / Technique"],
      nextLessonId: "lr-loophole-assumptions",
      scenes: [
        { type: "concept", title: "What is being proved?", explanation: "The conclusion is the claim the argument needs the other claims to support.", storyboard: "Support -> claim being proved.", actionCue: "Ask what would collapse if support vanished." },
        { type: "worked-example", title: "Intermediate conclusion", explanation: "Sometimes a sentence both receives support and supports the final conclusion.", storyboard: "Premise -> intermediate conclusion -> conclusion.", actionCue: "Label each sentence by role, not truth." },
        { type: "trap", title: "Most common mistake", explanation: "Students pick a vivid premise because it sounds important or memorable.", storyboard: "Memorable is not central.", actionCue: "Find the sentence the argument is trying to earn." },
        { type: "recap", title: "Role awareness", explanation: "Role questions become easier when the structure is already named before you hit the answers.", storyboard: "Name the structure early.", actionCue: "State premise or conclusion before looking down." },
        { type: "next-step", title: "Where to go next", explanation: "Once you can see the core, you can see the gap. That takes you to loopholes and assumptions.", storyboard: "Structure -> gap.", actionCue: "Open Loophole and Assumptions." },
      ],
      workedExample: {
        prompt: "The city should preserve wetlands because they reduce flooding and replacement infrastructure is costlier.",
        reasoning: "The policy recommendation is the conclusion. The flooding and cost points are premises supporting it.",
      },
      trapExplanation: "A sentence can be important and still be just support. Importance does not make it the conclusion.",
    },
    {
      id: "lr-loophole-assumptions",
      title: "Loopholes and Assumptions",
      track: "LR Core",
      sourceTags: ["The Loophole", "PowerScore LR"],
      summary: "Find the missing bridge between what the author proved and what the author claimed.",
      statusLabel: "Flagship lesson",
      masteryThreshold: 3,
      linkedQuestionFamilies: ["Assumption", "Strengthen", "Weaken"],
      nextLessonId: "lr-strengthen-weaken",
      scenes: [
        { type: "concept", title: "The gap", explanation: "A loophole is the space between the support and the conclusion.", storyboard: "Premises ... gap ... conclusion.", actionCue: "Finish the sentence: this argument assumes that..." },
        { type: "worked-example", title: "Policy gaps", explanation: "Policy conclusions often hide assumptions about alternatives, costs, and effectiveness.", storyboard: "Problem -> solution leap.", actionCue: "Ask why this solution instead of another one." },
        { type: "trap", title: "Fake assumption answers", explanation: "Many choices sound relevant or helpful but are not required by the argument.", storyboard: "Helpful is not necessary.", actionCue: "Negate the answer and see if the argument collapses." },
        { type: "recap", title: "Bridge language", explanation: "The best assumption phrasing usually sounds boring but exact.", storyboard: "Exact beats flashy.", actionCue: "Write the bridge in plain English." },
        { type: "next-step", title: "Apply the gap", explanation: "Once you can name a loophole, strengthen and weaken questions become targeted instead of random.", storyboard: "Gap -> attack or repair.", actionCue: "Open Strengthen and Weaken." },
      ],
      workedExample: {
        prompt: "Printing menus is expensive, so the cafe should switch to digital menus.",
        reasoning: "The argument assumes digital menus are not more expensive overall and that there is no better cheaper option.",
      },
      trapExplanation: "Answers about customer preference may be helpful background, but they are not necessary unless the conclusion depends on them.",
    },
    {
      id: "lr-strengthen-weaken",
      title: "Strengthen and Weaken",
      track: "LR Core",
      sourceTags: ["The Loophole", "PowerScore LR"],
      summary: "Use the exact gap to decide what would repair or damage the argument most.",
      statusLabel: "Flagship lesson",
      masteryThreshold: 3,
      linkedQuestionFamilies: ["Strengthen", "Weaken"],
      nextLessonId: "lr-classic-flaws",
      scenes: [
        { type: "concept", title: "Same gap, opposite direction", explanation: "Strengthen helps the bridge. Weaken attacks it.", storyboard: "Gap -> support or damage.", actionCue: "Name the gap before the answers." },
        { type: "worked-example", title: "Behavior prediction", explanation: "If the conclusion depends on people changing behavior, strengthen proves they will and weaken proves they won't.", storyboard: "Better option is not enough; behavior matters.", actionCue: "Ask what real people would do." },
        { type: "trap", title: "Irrelevant truth", explanation: "A true statement about the topic can still do nothing to the argument.", storyboard: "Topical is not logical.", actionCue: "Force every answer to touch the conclusion." },
        { type: "recap", title: "Prephrase first", explanation: "The better your prephrase, the less control the answer choices have over you.", storyboard: "Predict -> evaluate.", actionCue: "Say your likely answer before reading." },
        { type: "next-step", title: "Pattern recognition", explanation: "Classic flaw labels speed up strengthen and weaken review.", storyboard: "Gap -> pattern.", actionCue: "Open Classic Flaws." },
      ],
      workedExample: {
        prompt: "A new tram line will reduce traffic because it gives commuters a faster option.",
        reasoning: "A strengthener would show drivers actually switch. A weakener would show current bus riders, not drivers, are the ones most likely to use it.",
      },
      trapExplanation: "Answers that merely say the tram is modern, clean, or popular can be nice facts without touching the traffic claim.",
    },
    {
      id: "lr-classic-flaws",
      title: "Classic Flaws",
      track: "LR Core",
      sourceTags: ["The Loophole", "PowerScore LR"],
      summary: "Spot repeating reasoning errors so arguments stop feeling random.",
      statusLabel: "Flagship lesson",
      masteryThreshold: 3,
      linkedQuestionFamilies: ["Flaw", "Weaken"],
      nextLessonId: "lr-conditional-formal-logic",
      scenes: [
        { type: "concept", title: "Pattern > novelty", explanation: "The LSAT repeats causal, sample, comparison, and force-shift mistakes constantly.", storyboard: "New topic, same flaw.", actionCue: "Say the flaw in plain English." },
        { type: "worked-example", title: "Correlation vs causation", explanation: "A change after an event does not prove the event caused the change.", storyboard: "After is not because.", actionCue: "Ask what else could explain the result." },
        { type: "trap", title: "Label without meaning", explanation: "A flaw label only helps if you can explain the actual reasoning break.", storyboard: "Glossary words are not enough.", actionCue: "Translate the flaw into ordinary speech." },
        { type: "recap", title: "Fast flaw scan", explanation: "Check sampling, causation, force shifts, and conditional mistakes first.", storyboard: "Flaw shortlist.", actionCue: "Run the shortlist before the answers." },
        { type: "next-step", title: "Formal precision", explanation: "Some flaws are really conditional errors in disguise.", storyboard: "Pattern -> logic.", actionCue: "Open Conditional and Formal Logic." },
      ],
      workedExample: {
        prompt: "Traffic fell after bike lanes were added, so the bike lanes caused the improvement.",
        reasoning: "That argument ignores alternate causes and treats a sequence as proof of causation.",
      },
      trapExplanation: "A wrong answer may mention bikes or traffic instead of describing the actual error in the reasoning.",
    },
    {
      id: "lr-conditional-formal-logic",
      title: "Conditional and Formal Logic",
      track: "LR Advanced",
      sourceTags: ["The Loophole", "PowerScore LR"],
      summary: "Control if, only if, unless, quantifiers, and chained rules without panicking.",
      statusLabel: "Advanced logic",
      masteryThreshold: 3,
      linkedQuestionFamilies: ["Conditional Logic"],
      nextLessonId: "lr-method-role-mainpoint",
      scenes: [
        { type: "concept", title: "Arrow discipline", explanation: "Know what triggers the rule and what the rule guarantees.", storyboard: "Sufficient -> necessary.", actionCue: "Ask what must happen before the rule fires." },
        { type: "worked-example", title: "Contrapositive control", explanation: "When the result fails, at least one required part of the trigger failed too.", storyboard: "Not result -> not full trigger.", actionCue: "State the contrapositive out loud." },
        { type: "trap", title: "The reversal", explanation: "The most common miss is walking backward through the arrow as if the rule were biconditional.", storyboard: "Necessary is not sufficient.", actionCue: "Reject the seductive reversal." },
        { type: "recap", title: "Diagram only when needed", explanation: "Short rules can stay verbal; stacked rules deserve a diagram.", storyboard: "Clarity first.", actionCue: "Diagram when relations chain or branch." },
        { type: "next-step", title: "Back to argument roles", explanation: "Once logic is stable, method and role questions feel lighter.", storyboard: "Logic -> argument mechanics.", actionCue: "Open Method, Role, and Main Point." },
      ],
      workedExample: {
        prompt: "Only applicants with two recommendations are eligible.",
        reasoning: "Eligibility requires two recommendations. It does not follow that two recommendations guarantee eligibility.",
      },
      trapExplanation: "An answer that treats the necessary condition as enough is the standard reversal trap.",
    },
    {
      id: "lr-method-role-mainpoint",
      title: "Method, Role, and Main Point",
      track: "LR Advanced",
      sourceTags: ["LSAT Trainer", "PowerScore LR"],
      summary: "Track what each sentence is doing so method and role questions become structural rather than verbal.",
      statusLabel: "Advanced structure",
      masteryThreshold: 3,
      linkedQuestionFamilies: ["Role / Method / Technique", "Main Point"],
      nextLessonId: "lr-principle-evaluate-resolve",
      scenes: [
        { type: "concept", title: "Role awareness", explanation: "Every sentence has a job: premise, conclusion, concession, counterpoint, or example.", storyboard: "Function over wording.", actionCue: "Name the job, then the content." },
        { type: "worked-example", title: "Method response", explanation: "Some questions ask how one speaker responds to another instead of asking for the truth of either side.", storyboard: "Dialogue is structure too.", actionCue: "Track what the second speaker does to the first." },
        { type: "trap", title: "Central but not conclusive", explanation: "A vivid example can be central to your memory yet still be only evidence.", storyboard: "Memorable is not main point.", actionCue: "Ask what the author is trying to prove." },
        { type: "recap", title: "Structure language", explanation: "Words like supports, qualifies, counters, illustrates, and generalizes are your friend here.", storyboard: "Sentence jobs.", actionCue: "Translate each role answer into plain English." },
        { type: "next-step", title: "Toward abstract families", explanation: "Principle, evaluate, and resolve build on the same structure awareness.", storyboard: "Role -> higher-order tasks.", actionCue: "Open Principle, Evaluate, and Resolve." },
      ],
      workedExample: {
        prompt: "Speaker 2 says existing policy covers only part of the problem and the new rule adds missing enforcement tools.",
        reasoning: "Speaker 2 responds by conceding partial overlap while arguing the original solution is incomplete.",
      },
      trapExplanation: "Answers that say Speaker 2 changes the subject are wrong if the response still directly addresses adequacy.",
    },
    {
      id: "lr-principle-evaluate-resolve",
      title: "Principle, Evaluate, and Resolve",
      track: "LR Advanced",
      sourceTags: ["PowerScore LR", "The Loophole"],
      summary: "Handle the less frequent families by tying them back to structure and the gap.",
      statusLabel: "Flagship finisher",
      masteryThreshold: 3,
      linkedQuestionFamilies: ["Assumption", "Strengthen", "Role / Method / Technique"],
      nextLessonId: null,
      scenes: [
        { type: "concept", title: "Same core, new clothing", explanation: "Principle questions want the rule behind the reasoning. Evaluate questions want the fact that would decide the argument. Resolve questions want the fact that removes the tension.", storyboard: "Rule / decider / reconciler.", actionCue: "Classify the family before the answers." },
        { type: "worked-example", title: "Evaluate decider", explanation: "If the dispute is about whether commuters would switch, the right evaluate answer asks whether they actually would.", storyboard: "A fact that matters either way.", actionCue: "Find the hinge issue." },
        { type: "trap", title: "General but useless", explanation: "Principle answers often sound noble but miss the argument's actual logic.", storyboard: "Pretty rule, wrong rule.", actionCue: "Mirror the argument's exact burden." },
        { type: "recap", title: "Abstract with control", explanation: "These families feel abstract only when structure was never named first.", storyboard: "Core first, abstraction second.", actionCue: "Reduce the argument to a skeleton." },
        { type: "next-step", title: "Integration path", explanation: "You are ready for mixed timed work, analytics, and official-link review flow.", storyboard: "Lessons -> drills -> timed sets.", actionCue: "Jump to Timed Tests." },
      ],
      workedExample: {
        prompt: "A principal argues that a longer lunch period would improve student focus, but a teacher doubts students would use that time well.",
        reasoning: "An evaluate answer would ask whether students who receive longer breaks actually return more focused in similar settings.",
      },
      trapExplanation: "Broad rules about the value of student well-being may sound good but do not necessarily decide the specific dispute.",
    },
  ],
  questionBank: QUESTION_BANK,
  drillPresets: [
    { id: "rc-start", title: "RC Structure Reset", section: "RC", families: ["RC Structure", "RC Inference"], count: 5, rationale: "Rebuild structure and inference discipline before detail-chasing." },
    { id: "gap-work", title: "Gap Spotting", section: "LR", families: ["Assumption", "Strengthen", "Weaken"], count: 5, rationale: "Train the bridge between support and conclusion." },
    { id: "logic-control", title: "Formal Logic Control", section: "LR", families: ["Conditional Logic"], count: 5, rationale: "Reduce reversal and contrapositive mistakes." },
    { id: "mixed-timed", title: "Mixed Timed Five", section: "Mixed", families: ["Flaw", "Assumption", "Strengthen", "Weaken", "RC Structure"], count: 5, rationale: "A fast realistic section slice with mixed reasoning demands." },
  ],
  analyticsSnapshots: {
    strongestFamily: "RC Structure",
    weakestFamily: "Assumption",
    blindReviewGap: 18,
    confidenceMismatch: "High confidence on weaken misses",
    fatigueNote: "Speed drops after question 18 in longer blocks",
  },
  studyPlanDefaults: {
    targetScore: 175,
    weeklyHours: 12,
    testDate: "2026-09-12",
    emphasis: "Balanced",
  },
};
