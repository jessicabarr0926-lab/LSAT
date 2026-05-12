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
      family: "RC Function",
      section: "RC",
      lessonId: "rc-function-main-point",
      trapPattern: "Confuses paragraph topic with paragraph job",
      timingTarget: 88,
      stems: [
        {
          prompt:
            "In a passage on environmental law, the second paragraph lists three failed regulatory experiments before the third paragraph introduces a narrower rule.",
          question: "The primary role of the second paragraph is to",
          options: [
            "provide failed examples that motivate the narrower rule",
            "state the author's final recommendation",
            "define a technical legal term",
            "summarize an unrelated historical dispute",
          ],
          answer: 0,
          explanation:
            "The failed experiments matter because they create the need for the narrower rule introduced later.",
        },
        {
          prompt:
            "A science passage opens by describing a common theory, then gives one paragraph to a rival explanation, and ends by comparing the evidence for both.",
          question: "The paragraph presenting the rival explanation serves mainly to",
          options: [
            "introduce a competing account for later evaluation",
            "reveal the author's final endorsement",
            "list side notes with no structural purpose",
            "change the subject away from the main passage topic",
          ],
          answer: 0,
          explanation:
            "The rival explanation is part of the passage's argumentative structure because the passage later compares it with the original theory.",
        },
      ],
    },
    {
      family: "RC Main Point",
      section: "RC",
      lessonId: "rc-function-main-point",
      trapPattern: "Picks a major detail instead of the overall mission",
      timingTarget: 90,
      stems: [
        {
          prompt:
            "A passage reviews an old archaeological theory, shows new carbon-dating evidence against it, and argues for a revised chronology.",
          question: "Which statement best captures the passage's main point?",
          options: [
            "New evidence supports replacing the older chronology with a revised one",
            "Carbon dating is an exact science with no limitations",
            "Archaeologists disagree frequently",
            "Ancient settlements are difficult to excavate",
          ],
          answer: 0,
          explanation:
            "The whole passage is moving toward defending the revised chronology, not merely discussing dating methods.",
        },
        {
          prompt:
            "A comparative passage presents two critics who disagree about whether a novel's fragmented style improves or harms its emotional force.",
          question: "The main point of the paired passages is to",
          options: [
            "present and contrast two interpretations of the novel's style",
            "prove that fragmented novels are always superior",
            "show that emotional force cannot be discussed critically",
            "provide a biography of the novelist",
          ],
          answer: 0,
          explanation:
            "The paired passages are organized around contrasting interpretations rather than proving one broad rule about fiction.",
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
    {
      family: "Must Be True",
      section: "LR",
      lessonId: "lr-provable-parallel",
      trapPattern: "Chooses a statement that sounds likely but is too strong",
      timingTarget: 82,
      stems: [
        {
          prompt:
            "All of the committee's approved proposals included cost estimates. The library renovation proposal was approved.",
          question: "Which statement must be true?",
          options: [
            "The library renovation proposal included a cost estimate",
            "Only approved proposals included cost estimates",
            "The committee approved very few proposals",
            "Every proposal with a cost estimate was approved",
          ],
          answer: 0,
          explanation:
            "If all approved proposals included cost estimates and the renovation proposal was approved, then it too must have included a cost estimate.",
        },
        {
          prompt:
            "No students in the robotics club skipped the regional competition, and some robotics-club students volunteered at the science fair.",
          question: "Which inference is most strongly supported?",
          options: [
            "Some science-fair volunteers did not skip the regional competition",
            "All science-fair volunteers were in the robotics club",
            "Anyone who skipped the regional competition was not a volunteer",
            "The robotics club had more volunteers than nonvolunteers",
          ],
          answer: 0,
          explanation:
            "Because some robotics-club students volunteered and no robotics-club students skipped, at least some volunteers did not skip the competition.",
        },
      ],
    },
    {
      family: "Evaluate",
      section: "LR",
      lessonId: "lr-principle-evaluate-resolve",
      trapPattern: "Picks a relevant fact rather than the hinge issue",
      timingTarget: 84,
      stems: [
        {
          prompt:
            "A department chair argues that moving office hours online will improve attendance, but a professor doubts students will use the new format.",
          question: "Which answer would be most useful to evaluate the argument?",
          options: [
            "Whether students in comparable departments attended office hours more often after online scheduling was introduced",
            "Whether the department chair prefers remote work",
            "Whether office doors are clearly labeled",
            "Whether some students enjoy in-person conversation",
          ],
          answer: 0,
          explanation:
            "The deciding issue is whether the online format actually increases attendance in comparable circumstances.",
        },
        {
          prompt:
            "A bookstore owner claims that adding a cafe will increase book sales because customers will stay longer in the store.",
          question: "Which question is most important to answer in evaluating the argument?",
          options: [
            "Do customers who stay longer in similar stores buy more books?",
            "Are cafes expensive to maintain?",
            "Does the owner like coffee?",
            "How many tables can fit near the windows?",
          ],
          answer: 0,
          explanation:
            "The argument rises or falls on whether longer customer visits actually translate into more book sales.",
        },
      ],
    },
    {
      family: "Resolve / Explain",
      section: "LR",
      lessonId: "lr-principle-evaluate-resolve",
      trapPattern: "Restates one side of the paradox instead of reconciling both",
      timingTarget: 86,
      stems: [
        {
          prompt:
            "A neighborhood market lowered prices on fresh produce, yet produce sales remained flat while overall store traffic increased.",
          question: "Which answer best resolves the apparent discrepancy?",
          options: [
            "The market reduced produce prices mainly on items that were already selling poorly",
            "Some customers enjoy visiting neighborhood markets",
            "Other stores in the area also sell produce",
            "Fresh produce can spoil quickly if unsold",
          ],
          answer: 0,
          explanation:
            "If the price cuts were concentrated on weak sellers, store traffic could rise without total produce sales rising much.",
        },
        {
          prompt:
            "A professor's lectures became shorter this semester, but students report spending more time taking notes than before.",
          question: "Which answer most helps explain the result?",
          options: [
            "The professor now presents denser slides and pauses less often for repetition",
            "Students prefer lectures to textbooks",
            "The semester began during unusually cold weather",
            "Some students sit closer to the front than others",
          ],
          answer: 0,
          explanation:
            "Shorter lectures can still generate more note-taking if the information is delivered more densely.",
        },
      ],
    },
    {
      family: "Principle",
      section: "LR",
      lessonId: "lr-principle-evaluate-resolve",
      trapPattern: "Chooses a broad slogan instead of the argument's rule",
      timingTarget: 84,
      stems: [
        {
          prompt:
            "An editor argues that anonymous sources should be used only when the information is highly important and cannot be obtained otherwise.",
          question: "Which principle most justifies the editor's reasoning?",
          options: [
            "Risky reporting tools are justified only when the value of the information outweighs the costs and no safer alternative is available",
            "Anonymous sources are usually unreliable",
            "Editors should always trust experienced reporters",
            "Important information should be published immediately",
          ],
          answer: 0,
          explanation:
            "The correct principle mirrors the argument's exact balancing rule and its insistence on no better alternative.",
        },
        {
          prompt:
            "A committee recommends funding school repairs before building a new sports complex because unsafe classrooms should be addressed before nonessential upgrades.",
          question: "Which principle most supports the committee's recommendation?",
          options: [
            "When resources are limited, urgent safety needs should take priority over desirable but nonessential improvements",
            "Sports complexes are too expensive for schools",
            "Committees should avoid controversial decisions",
            "Older buildings are always inefficient",
          ],
          answer: 0,
          explanation:
            "The committee's recommendation depends on prioritizing urgent safety needs over less essential improvements.",
        },
      ],
    },
    {
      family: "Parallel Flaw",
      section: "LR",
      lessonId: "lr-provable-parallel",
      trapPattern: "Matches topic similarity instead of reasoning form",
      timingTarget: 92,
      stems: [
        {
          prompt:
            "Argument: If a policy is fair, it treats similar cases similarly. This policy treats similar cases similarly, so it is fair.",
          question: "Which argument is flawed in the most similar way?",
          options: [
            "If a food is nutritious, it contains vitamins. This soup contains vitamins, so it is nutritious.",
            "If an engine is defective, it makes noise. This engine is defective, so it makes noise.",
            "If a player practices, performance often improves. This player practiced, so performance improved.",
            "If a law is unconstitutional, courts may strike it down. Courts struck this law down, so it was unconstitutional.",
          ],
          answer: 0,
          explanation:
            "Both arguments treat a necessary condition as if it were sufficient.",
        },
        {
          prompt:
            "Argument: One customer disliked the tutoring program, so the program must be ineffective for students generally.",
          question: "Which argument uses the same flawed pattern?",
          options: [
            "One commuter found the tram inconvenient, so the tram system will not help the city overall",
            "Several students improved after tutoring, so the program helped them",
            "A few restaurants raised prices after inflation increased",
            "One coach prefers shorter practices to longer ones",
          ],
          answer: 0,
          explanation:
            "Both arguments overgeneralize from a single case to a broad conclusion.",
        },
      ],
    },
    {
      family: "Point at Issue",
      section: "LR",
      lessonId: "lr-provable-parallel",
      trapPattern: "Picks a claim only one speaker mentions",
      timingTarget: 88,
      stems: [
        {
          prompt:
            "Speaker 1: The city should extend library hours because evening demand is rising. Speaker 2: Rising evening demand does not justify the cost because most branches are already underused during current hours.",
          question: "The speakers disagree over whether",
          options: [
            "rising evening demand is sufficient reason to extend library hours",
            "libraries lend books",
            "some branches are underused during current hours",
            "cities should have public libraries at all",
          ],
          answer: 0,
          explanation:
            "Speaker 1 says yes, while Speaker 2 says the demand does not justify the cost.",
        },
        {
          prompt:
            "Speaker 1: The student newspaper should publish unsigned editorials only rarely. Speaker 2: Unsigned editorials are acceptable whenever they reflect the staff's majority view.",
          question: "The point at issue between the speakers is whether",
          options: [
            "unsigned editorials are acceptable whenever they represent the staff majority",
            "student newspapers exist on college campuses",
            "editorials are a form of opinion writing",
            "staff members sometimes disagree with one another",
          ],
          answer: 0,
          explanation:
            "Speaker 2 endorses that broader condition while Speaker 1's 'only rarely' position rejects it.",
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

const QUESTION_TYPE_LESSONS = [
  {
    id: "qt-rc-structure",
    family: "RC Structure",
    section: "RC",
    sourceTags: ["PowerScore RC", "LSAT Trainer"],
    title: "RC Structure",
    summary: "Learn to read passages by movement, not by detail accumulation.",
    step1Video: {
      runtime: "6 min",
      title: "Video 1: Structure breakdown",
      focus: "Paragraph jobs, viewpoint shifts, and passage shape.",
    },
    step2Video: {
      runtime: "5 min",
      title: "Video 2: Solve + trap answers",
      focus: "How to spot topic-only answers and fake summaries.",
    },
    method: [
      "Read paragraph by paragraph and give each paragraph a job label.",
      "Track whether the author is presenting a view, attacking it, or refining it.",
      "Choose answers that describe the passage's movement, not just its topic.",
    ],
    traps: [
      "Topic-only summary",
      "Detail from one paragraph treated like the whole passage",
      "Neutral description when the author clearly takes a side",
    ],
  },
  {
    id: "qt-rc-inference",
    family: "RC Inference",
    section: "RC",
    sourceTags: ["PowerScore RC", "LSAT Trainer"],
    title: "RC Inference",
    summary: "Train yourself to choose only what the passage actually forces.",
    step1Video: {
      runtime: "6 min",
      title: "Video 1: Inference control",
      focus: "How to stay modest and evidence-bound.",
    },
    step2Video: {
      runtime: "5 min",
      title: "Video 2: Trap answers and overreach",
      focus: "How strong wording turns tempting answers into wrong answers.",
    },
    method: [
      "Locate the line or paragraph that supports the answer.",
      "Check force words like all, always, only, best, and reject unnecessary strength.",
      "Prefer the answer the author is forced to accept, not the answer that sounds insightful.",
    ],
    traps: [
      "Strong wording beyond the passage",
      "Outside knowledge disguised as inference",
      "Author would agree vs passage proves",
    ],
  },
  {
    id: "qt-rc-attitude",
    family: "RC Attitude",
    section: "RC",
    sourceTags: ["PowerScore RC"],
    title: "RC Attitude",
    summary: "Read tone precisely so you stop confusing qualified praise, skepticism, and neutrality.",
    step1Video: {
      runtime: "5 min",
      title: "Video 1: Tone language",
      focus: "How descriptive words reveal respect, skepticism, or criticism.",
    },
    step2Video: {
      runtime: "5 min",
      title: "Video 2: Tone traps",
      focus: "How balanced or extreme answer choices distort the author's attitude.",
    },
    method: [
      "Mark value-loaded adjectives and adverbs.",
      "Translate tone into plain English before checking choices.",
      "Reject answers more positive or negative than the actual wording.",
    ],
    traps: [
      "Extreme tone",
      "Neutral answer when the author is clearly skeptical",
      "Hostility where the author only shows qualified doubt",
    ],
  },
  {
    id: "qt-rc-function",
    family: "RC Function",
    section: "RC",
    sourceTags: ["PowerScore RC"],
    title: "RC Function",
    summary: "Figure out why a sentence or paragraph is there, not just what it says.",
    step1Video: {
      runtime: "6 min",
      title: "Video 1: Function over content",
      focus: "Examples, concessions, pivots, support, and rival views.",
    },
    step2Video: {
      runtime: "5 min",
      title: "Video 2: Function traps",
      focus: "How to avoid confusing content description with structural role.",
    },
    method: [
      "Ask what job the line or paragraph does for the larger passage.",
      "Connect the local detail back to the author's broader mission.",
      "Choose role language like support, challenge, illustrate, qualify, or contrast.",
    ],
    traps: [
      "Repeats the content but not the function",
      "Mistakes example for conclusion",
      "Treats setup as author's final view",
    ],
  },
  {
    id: "qt-rc-main-point",
    family: "RC Main Point",
    section: "RC",
    sourceTags: ["PowerScore RC", "LSAT Trainer"],
    title: "RC Main Point",
    summary: "Compress the entire passage into the author's real mission.",
    step1Video: {
      runtime: "6 min",
      title: "Video 1: Passage mission",
      focus: "How to locate the author's overall objective.",
    },
    step2Video: {
      runtime: "5 min",
      title: "Video 2: Main-point traps",
      focus: "How detail-heavy answers and topic summaries mislead you.",
    },
    method: [
      "Ask what the author is doing after all the setup and competing viewpoints.",
      "Prefer answers broad enough to cover the full passage but narrow enough to stay accurate.",
      "Reject answers that capture only one paragraph or one supporting detail.",
    ],
    traps: [
      "Major detail mistaken for main point",
      "Too broad summary",
      "Topic label without author's mission",
    ],
  },
  {
    id: "qt-lr-flaw",
    family: "Flaw",
    section: "LR",
    sourceTags: ["The Loophole", "PowerScore LR"],
    title: "Flaw",
    summary: "Recognize recurring reasoning errors so you can name the break before reading choices.",
    step1Video: {
      runtime: "7 min",
      title: "Video 1: Flaw pattern library",
      focus: "Causation, sampling, overgeneralization, and force shifts.",
    },
    step2Video: {
      runtime: "5 min",
      title: "Video 2: Trap answer wording",
      focus: "How answer choices describe flaws abstractly and why topic words distract you.",
    },
    method: [
      "State the conclusion and the support first.",
      "Say in plain English why the support does not get you to the conclusion.",
      "Then match that idea to the answer choice language.",
    ],
    traps: [
      "Topic-focused answer",
      "Abstract flaw label you cannot explain",
      "Answer that sounds logical but does not match the actual break",
    ],
  },
  {
    id: "qt-lr-assumption",
    family: "Assumption",
    section: "LR",
    sourceTags: ["The Loophole", "PowerScore LR"],
    title: "Assumption",
    summary: "Find the missing bridge the author must believe for the argument to work.",
    step1Video: {
      runtime: "7 min",
      title: "Video 1: Find the bridge",
      focus: "How to phrase the hidden link in plain English.",
    },
    step2Video: {
      runtime: "5 min",
      title: "Video 2: Necessary-assumption traps",
      focus: "Helpful vs required answers and how negation exposes the difference.",
    },
    method: [
      "Identify the conclusion and the last unsupported jump.",
      "Finish the sentence: this argument assumes that...",
      "Use negation to test whether the answer is truly required.",
    ],
    traps: [
      "Helpful but unnecessary fact",
      "Background fact about the topic",
      "Answer stronger than the argument needs",
    ],
  },
  {
    id: "qt-lr-strengthen",
    family: "Strengthen",
    section: "LR",
    sourceTags: ["The Loophole", "PowerScore LR"],
    title: "Strengthen",
    summary: "Repair the exact bridge the argument depends on.",
    step1Video: {
      runtime: "6 min",
      title: "Video 1: Strengthen the gap",
      focus: "How to prephrase the right kind of support before reading answers.",
    },
    step2Video: {
      runtime: "5 min",
      title: "Video 2: Strengthen traps",
      focus: "Why relevant facts often do nothing to the argument.",
    },
    method: [
      "Name the loophole before looking at the options.",
      "Ask which answer most directly makes the bridge more believable.",
      "Reject answers that are true-sounding but do not help the conclusion.",
    ],
    traps: [
      "Topical but irrelevant fact",
      "Support for a premise instead of the conclusion",
      "Answer that only sounds good emotionally",
    ],
  },
  {
    id: "qt-lr-weaken",
    family: "Weaken",
    section: "LR",
    sourceTags: ["The Loophole", "PowerScore LR"],
    title: "Weaken",
    summary: "Attack the exact point where the argument is most vulnerable.",
    step1Video: {
      runtime: "6 min",
      title: "Video 1: Attack the bridge",
      focus: "How to identify the specific jump to undermine.",
    },
    step2Video: {
      runtime: "5 min",
      title: "Video 2: Weaken traps",
      focus: "How to distinguish direct weakening from mere disagreement with the topic.",
    },
    method: [
      "Prephrase the loophole first.",
      "Look for an answer that introduces an alternate cause, downside, or missing comparison.",
      "Reject answers that criticize the topic without damaging the reasoning.",
    ],
    traps: [
      "Opinionated but logically weak answer",
      "Attacks a premise the conclusion does not need",
      "Misses the exact bridge",
    ],
  },
  {
    id: "qt-lr-conditional",
    family: "Conditional Logic",
    section: "LR",
    sourceTags: ["The Loophole", "PowerScore LR"],
    title: "Conditional Logic",
    summary: "Control if, only if, unless, and chained rules without reversing them.",
    step1Video: {
      runtime: "7 min",
      title: "Video 1: Rule translation",
      focus: "Sufficient and necessary conditions, contrapositives, and chaining.",
    },
    step2Video: {
      runtime: "5 min",
      title: "Video 2: Logic traps",
      focus: "Reversal, negation, and forcing certainty where the rule does not allow it.",
    },
    method: [
      "Translate the rule accurately before making inferences.",
      "State or diagram the contrapositive.",
      "Reject any answer that walks backward through the arrow without justification.",
    ],
    traps: [
      "Reversal",
      "Negation error",
      "Overstating what the rule guarantees",
    ],
  },
  {
    id: "qt-lr-main-point",
    family: "Main Point",
    section: "LR",
    sourceTags: ["LSAT Trainer", "PowerScore LR"],
    title: "Main Point",
    summary: "Find the conclusion the argument is actually trying to prove.",
    step1Video: {
      runtime: "5 min",
      title: "Video 1: Conclusion hunting",
      focus: "How to distinguish support from the sentence being supported.",
    },
    step2Video: {
      runtime: "5 min",
      title: "Video 2: Main-point traps",
      focus: "Why vivid premises and background details feel tempting.",
    },
    method: [
      "Ask which statement the rest of the argument is there to support.",
      "Treat premise indicators as clues, not crutches.",
      "Reject answers that merely restate evidence.",
    ],
    traps: [
      "Premise instead of conclusion",
      "Background detail instead of main point",
      "Too broad policy summary",
    ],
  },
  {
    id: "qt-lr-method-role",
    family: "Role / Method / Technique",
    section: "LR",
    sourceTags: ["LSAT Trainer", "PowerScore LR"],
    title: "Role / Method / Technique",
    summary: "Track sentence jobs and reasoning moves so structure questions become mechanical.",
    step1Video: {
      runtime: "6 min",
      title: "Video 1: Sentence jobs",
      focus: "Premise, conclusion, concession, example, and dialogue moves.",
    },
    step2Video: {
      runtime: "5 min",
      title: "Video 2: Method traps",
      focus: "Why content familiarity does not tell you role or method.",
    },
    method: [
      "Label what each sentence is doing before reading the answers.",
      "In dialogue questions, identify how the second speaker treats the first speaker's claim.",
      "Translate abstract answer wording into a plain-English job description.",
    ],
    traps: [
      "Content description instead of role",
      "Confusing example with conclusion",
      "Missing concession or qualification",
    ],
  },
  {
    id: "qt-lr-mbt",
    family: "Must Be True",
    section: "LR",
    sourceTags: ["PowerScore LR"],
    title: "Must Be True",
    summary: "Choose only what the stimulus forces and nothing stronger.",
    step1Video: {
      runtime: "6 min",
      title: "Video 1: Provable discipline",
      focus: "How to stay text-bound on inference questions.",
    },
    step2Video: {
      runtime: "5 min",
      title: "Video 2: Overstatement traps",
      focus: "Why stronger-sounding answers often lose on provable questions.",
    },
    method: [
      "Use only the stimulus, not outside common sense.",
      "Prefer modest language that is fully earned.",
      "Reject answers that require one extra assumption.",
    ],
    traps: [
      "Too strong",
      "Could be true but not must be true",
      "Outside-knowledge answer",
    ],
  },
  {
    id: "qt-lr-evaluate",
    family: "Evaluate",
    section: "LR",
    sourceTags: ["PowerScore LR"],
    title: "Evaluate",
    summary: "Find the hinge question whose answer would help either side.",
    step1Video: {
      runtime: "6 min",
      title: "Video 1: Find the hinge",
      focus: "How to isolate the one fact that would actually decide the argument.",
    },
    step2Video: {
      runtime: "5 min",
      title: "Video 2: Evaluate traps",
      focus: "Relevant facts vs deciding facts.",
    },
    method: [
      "Ask what the argument needs to know next.",
      "Pick a question whose yes and no answers would matter in opposite ways.",
      "Reject facts that are merely relevant but not decisive.",
    ],
    traps: [
      "Relevant but not decisive",
      "Background fact",
      "One-sided answer that helps only one direction",
    ],
  },
  {
    id: "qt-lr-resolve",
    family: "Resolve / Explain",
    section: "LR",
    sourceTags: ["PowerScore LR", "The Loophole"],
    title: "Resolve / Explain",
    summary: "Explain how both surprising facts can be true at the same time.",
    step1Video: {
      runtime: "5 min",
      title: "Video 1: Reconcile both sides",
      focus: "How to keep both facts alive while finding the hidden condition.",
    },
    step2Video: {
      runtime: "5 min",
      title: "Video 2: Paradox traps",
      focus: "Why restating one side or choosing a new mystery does not resolve the paradox.",
    },
    method: [
      "Keep both facts fixed and look for a missing condition.",
      "Prefer answers that make the two facts fit together.",
      "Reject answers that explain only one side or make the paradox worse.",
    ],
    traps: [
      "Explains only one fact",
      "Restates the discrepancy",
      "Introduces a fresh problem instead of resolving the old one",
    ],
  },
  {
    id: "qt-lr-principle",
    family: "Principle",
    section: "LR",
    sourceTags: ["PowerScore LR"],
    title: "Principle",
    summary: "Match the argument to the exact rule that would justify or apply its logic.",
    step1Video: {
      runtime: "6 min",
      title: "Video 1: Abstract the rule",
      focus: "How to turn an argument into its hidden principle.",
    },
    step2Video: {
      runtime: "5 min",
      title: "Video 2: Principle traps",
      focus: "Broad slogans vs the actual decision rule used by the argument.",
    },
    method: [
      "State the argument's rule in plain English before reading answers.",
      "Match the answer to the exact burden and comparison in the stimulus.",
      "Reject answers that are generally attractive but structurally off.",
    ],
    traps: [
      "Pretty slogan",
      "Too broad moral statement",
      "Correct topic, wrong rule",
    ],
  },
  {
    id: "qt-lr-parallel-flaw",
    family: "Parallel Flaw",
    section: "LR",
    sourceTags: ["PowerScore LR"],
    title: "Parallel Flaw",
    summary: "Match arguments by flawed reasoning skeleton, not by topic.",
    step1Video: {
      runtime: "7 min",
      title: "Video 1: Strip the topic",
      focus: "How to reduce the original argument to its bare flawed form.",
    },
    step2Video: {
      runtime: "5 min",
      title: "Video 2: Match-form traps",
      focus: "Why topic similarity and strong language distract from the real pattern.",
    },
    method: [
      "Identify the exact flaw in the original argument first.",
      "Reduce it to a bare form or variable pattern.",
      "Ignore topic overlap unless the logic also matches.",
    ],
    traps: [
      "Topic lookalike",
      "Similar conclusion type, different flaw",
      "Correct flaw family but wrong force or structure",
    ],
  },
  {
    id: "qt-lr-poi",
    family: "Point at Issue",
    section: "LR",
    sourceTags: ["PowerScore LR", "LSAT Trainer"],
    title: "Point at Issue",
    summary: "Find the claim one speaker would accept and the other would reject.",
    step1Video: {
      runtime: "5 min",
      title: "Video 1: Find the disagreement",
      focus: "How to test whether each answer gets a yes from one side and a no from the other.",
    },
    step2Video: {
      runtime: "5 min",
      title: "Video 2: Dialogue traps",
      focus: "Why claims mentioned by only one speaker are wrong.",
    },
    method: [
      "Treat each answer as a yes/no test.",
      "Ask what Speaker 1 says and what Speaker 2 says about that exact claim.",
      "Reject any answer that one speaker never actually addresses.",
    ],
    traps: [
      "Mentioned by only one speaker",
      "Both speakers would agree",
      "Both speakers would reject",
    ],
  },
];

function runtimeToSeconds(runtime) {
  const minutes = Number.parseInt(runtime, 10);
  return Number.isNaN(minutes) ? 75 : Math.max(45, Math.round((minutes * 60) / 5));
}

function buildQuestionTypeScenes(lesson) {
  const method = lesson.method;
  const traps = lesson.traps;
  const step1Seconds = runtimeToSeconds(lesson.step1Video.runtime);
  const step2Seconds = runtimeToSeconds(lesson.step2Video.runtime);

  return {
    step1Scenes: [
      {
        type: "concept",
        title: `What ${lesson.family} is really asking`,
        explanation: `${lesson.summary} The goal is to understand the burden before the answer choices start steering you around.`,
        storyboard: `${lesson.section} task -> identify the real burden -> keep the standard fixed while you solve.`,
        actionCue: `Say out loud what a winning ${lesson.family} answer would have to do.`,
        seconds: step1Seconds,
      },
      {
        type: "recognition",
        title: "How to spot it fast",
        explanation: `${lesson.step1Video.focus} Your first job is recognition, because hesitation makes trap answers look more persuasive.`,
        storyboard: `Question stem language + stimulus clues + family-specific burden = recognition pattern.`,
        actionCue: `Before reading choices, classify the family and predict the job.`,
        seconds: step1Seconds,
      },
      {
        type: "framework",
        title: "Core framework from the books",
        explanation: `This lesson blends the big ideas from ${lesson.sourceTags.join(", ")} into an original study script: ${method[0]} Then ${method[1].toLowerCase()}`,
        storyboard: `${lesson.sourceTags[0]} pattern + ${lesson.sourceTags[lesson.sourceTags.length - 1]} discipline + plain-English execution.`,
        actionCue: `Write the framework in your own words before moving on.`,
        seconds: step1Seconds,
      },
      {
        type: "worked-example",
        title: "Worked example: wrong vs right",
        explanation: `Watch the process, not just the result: start with ${method[0].toLowerCase()} and compare a tempting wrong path against the answer that actually satisfies the burden.`,
        storyboard: `Tempting answer -> why it feels right -> missing logical requirement -> credited answer.`,
        actionCue: `Explain why the wrong answer is attractive before you defend the right one.`,
        seconds: step1Seconds,
      },
      {
        type: "recap",
        title: "The strong-answer rule",
        explanation: `The answer is strong when it follows the right burden and weak when it gives you ${traps[0].toLowerCase()}. Your recap rule is: ${method[2]}`,
        storyboard: `Burden check -> trap check -> final selection rule.`,
        actionCue: `Finish the sentence: for ${lesson.family}, the right answer must...`,
        seconds: step1Seconds,
      },
    ],
    step2Scenes: [
      {
        type: "method",
        title: "Solve method, step by step",
        explanation: `Use the same sequence every time: ${method.join(" ")}`,
        storyboard: `Step 1 -> Step 2 -> Step 3.`,
        actionCue: `Keep the checklist visible while you solve the next guided question.`,
        seconds: step2Seconds,
      },
      {
        type: "trap",
        title: `Trap pattern 1: ${traps[0]}`,
        explanation: `This trap works because it feels relevant before you test whether it actually satisfies the burden. Slow down and run your method against it.`,
        storyboard: `Tempting wording -> false sense of relevance -> method exposes mismatch.`,
        actionCue: `Ask exactly which method step would eliminate this trap.`,
        seconds: step2Seconds,
      },
      {
        type: "trap",
        title: `Trap pattern 2: ${traps[1]}`,
        explanation: `This wrong-answer family usually wins when you skip the middle of the process. ${method[1]}`,
        storyboard: `Missed process step -> distorted choice comparison -> preventable miss.`,
        actionCue: `Name the skipped step before you choose.`,
        seconds: step2Seconds,
      },
      {
        type: "contrast",
        title: "Live wrong-vs-right contrast",
        explanation: `Put the credited answer and the best trap side by side. The right answer survives every method step; the trap fails on the burden or overreaches in a way this family cannot support.`,
        storyboard: `Compare two finalists -> test burden -> eliminate the trap with evidence.`,
        actionCue: `Practice saying why the wrong answer fails in one sentence.`,
        seconds: step2Seconds,
      },
    ],
  };
}

QUESTION_TYPE_LESSONS.forEach((lesson) => Object.assign(lesson, buildQuestionTypeScenes(lesson)));

const RC_PASSAGES = [
  {
    id: "rc-coral-reefs",
    title: "The Adaptive Capacity of Coral Reefs",
    topic: "Natural Science",
    difficulty: "Medium",
    estimatedReadMinutes: 3,
    paragraphs: [
      {
        label: "P1",
        text: "Coral reefs depend on a symbiotic relationship between coral polyps and photosynthetic algae called zooxanthellae. The algae provide the coral with up to 90 percent of its energy through photosynthesis, while the coral offers the algae shelter and access to nutrients. When seawater temperatures rise even slightly above seasonal norms, this relationship breaks down: the coral expels its algae, turns white—a process called bleaching—and, if temperatures remain elevated, dies. For decades, marine biologists largely agreed that accelerating ocean warming posed an existential threat to reef ecosystems worldwide, with mass bleaching events becoming more frequent and more severe."
      },
      {
        label: "P2",
        text: "Recent field research has complicated that consensus. Studies on reef systems in the Great Barrier Reef and the wider Caribbean have documented populations of coral that survive temperatures lethal to nearby colonies of the same species. Crucially, offspring of these heat-tolerant individuals also displayed elevated thermal tolerance, suggesting a heritable genetic basis rather than individual acclimation. This finding challenged the assumption that all coral populations face uniform extinction risk and raised the possibility that natural selection could, given sufficient time and population size, propagate heat-resistant traits across reef systems."
      },
      {
        label: "P3",
        text: "Critics of this optimistic interpretation point to a fundamental mismatch in timescales. Evolutionary adaptation through natural selection operates across hundreds of generations, a process that for slow-reproducing corals spans centuries. Contemporary ocean warming, by contrast, is occurring over decades. Even granting that heat tolerance is heritable and that selection pressure is strong, the pace of adaptation almost certainly cannot match the pace of environmental change. Additionally, the survival of individual coral colonies is not equivalent to reef recovery: a functional reef ecosystem requires fish, invertebrates, and complex trophic interactions that bleaching events disrupt regardless of whether some coral polyps endure."
      },
      {
        label: "P4",
        text: "The author argues that this framing—natural selection versus extinction—presents a false binary. The practical question is not whether unaided evolution can rescue reefs on its own but whether human intervention using thermally tolerant coral stock can supplement natural selection and slow the rate of loss sufficiently to allow broader ecosystem stabilization. Selective breeding programs and assisted gene flow, where tolerant colonies are transplanted to stressed reef zones, are already underway at several research institutions. Whether these efforts can be scaled from experimental plots to reef-wide restoration remains uncertain, but they reposition the scientific and policy debate from passive prognosis to active strategy."
      }
    ],
    modelMap: [
      "P1: Establishes coral-algae symbiosis and the traditional doom consensus",
      "P2: Introduces heritable thermal tolerance — evidence that complicates the consensus",
      "P3: Critics respond — timescale mismatch makes natural selection too slow",
      "P4: Author's synthesis — the real question is intervention strategy, not natural selection vs. extinction"
    ],
    questions: [
      {
        id: "rc-coral-q1",
        section: "RC",
        family: "RC Main Point",
        difficulty: "medium",
        lessonIds: ["rc-function-main-point"],
        prompt: "",
        question: "The main point of the passage is that",
        options: [
          "the debate over coral reef survival should be reframed as a question about intervention strategy rather than natural selection alone",
          "heritable thermal tolerance in coral populations proves that reefs can survive current warming trends",
          "the timescale mismatch between evolution and climate change makes coral reef preservation impossible",
          "the symbiotic relationship between coral polyps and zooxanthellae is more fragile than previously understood"
        ],
        answer: 0,
        explanation: "The author's final paragraph explicitly repositions the debate: not natural selection vs. extinction, but whether human intervention can supplement natural selection. This is the passage's mission, not any of the intermediate findings.",
        trapPattern: "Picks a major detail instead of the overall mission"
      },
      {
        id: "rc-coral-q2",
        section: "RC",
        family: "RC Function",
        difficulty: "medium",
        lessonIds: ["rc-function-main-point"],
        prompt: "",
        question: "The primary function of the second paragraph is to",
        options: [
          "introduce evidence of heritable thermal tolerance that complicates the traditional pessimistic view",
          "prove that coral reefs will survive accelerating ocean warming",
          "explain the biochemical mechanism by which coral expels zooxanthellae",
          "argue that the traditional consensus on reef extinction is entirely wrong"
        ],
        answer: 0,
        explanation: "Paragraph 2 introduces the heritable tolerance finding, which the passage immediately frames as complicating ('complicated that consensus') the view established in P1. It doesn't prove survival or explain bleaching biochemistry.",
        trapPattern: "Confuses paragraph topic with paragraph job"
      },
      {
        id: "rc-coral-q3",
        section: "RC",
        family: "RC Inference",
        difficulty: "medium",
        lessonIds: ["rc-inference-attitude"],
        prompt: "",
        question: "Based on the passage, which of the following can most reasonably be inferred about assisted gene flow programs?",
        options: [
          "They are currently being tested at some research institutions but have not yet been applied at reef-wide scale",
          "They have already demonstrated the ability to restore full reef ecosystems in bleaching-affected zones",
          "They represent the scientific consensus on the best strategy for reef preservation",
          "They were developed in response to the criticism described in the third paragraph"
        ],
        answer: 0,
        explanation: "The final paragraph explicitly states that selective breeding and assisted gene flow 'are already underway at several research institutions' and that scaling to reef-wide restoration 'remains uncertain.' This directly supports answer A.",
        trapPattern: "Chooses a claim stronger than the passage supports"
      },
      {
        id: "rc-coral-q4",
        section: "RC",
        family: "RC Attitude",
        difficulty: "hard",
        lessonIds: ["rc-inference-attitude"],
        prompt: "",
        question: "The author's attitude toward the critics described in the third paragraph is best characterized as",
        options: [
          "partial agreement — their timescale objection is accepted, but the author argues it motivates intervention rather than pessimism",
          "full endorsement — the critics are correct that natural selection cannot save reefs",
          "dismissal — the critics ignore the evidence of heritable tolerance presented in the second paragraph",
          "confusion — the author is uncertain whether the critics or the optimists are correct"
        ],
        answer: 0,
        explanation: "The author does not refute the timescale mismatch argument; the fourth paragraph concedes that 'unaided evolution' cannot rescue reefs, which accepts the critics' point. But the author redirects to intervention strategy rather than concluding doom, suggesting partial agreement rather than full endorsement or dismissal.",
        trapPattern: "Reads neutral summary as endorsement"
      },
      {
        id: "rc-coral-q5",
        section: "RC",
        family: "RC Structure",
        difficulty: "medium",
        lessonIds: ["rc-structure-map"],
        prompt: "",
        question: "Which of the following best describes the overall structure of the passage?",
        options: [
          "An established scientific consensus is introduced, complicating evidence is presented, that evidence is criticized, and the author synthesizes a new framing",
          "Two competing scientific theories are presented and the author selects one as superior",
          "A biological process is explained and its implications for policy are described without critical analysis",
          "A series of failed experiments is described leading to a new experimental design"
        ],
        answer: 0,
        explanation: "P1 = consensus, P2 = complicating evidence, P3 = criticism of the evidence, P4 = author's synthesis that reframes the debate. This is a classic LSAT passage structure.",
        trapPattern: "Mistakes topic for structure"
      }
    ]
  },
  {
    id: "rc-stare-decisis",
    title: "Stare Decisis and the Evolution of Common Law",
    topic: "Law",
    difficulty: "Hard",
    estimatedReadMinutes: 3,
    paragraphs: [
      {
        label: "P1",
        text: "The common law of English-speaking legal systems develops not through comprehensive legislative codes but through the accumulation of judicial decisions over time. Courts are bound by the doctrine of stare decisis—standing by decisions—which requires that courts follow the rulings of higher courts in cases involving materially similar facts. Proponents of the doctrine argue that it provides the legal predictability on which commerce, planning, and private ordering depend. A rule that shifts with each new judicial appointment is, in this view, no rule at all."
      },
      {
        label: "P2",
        text: "A school of reform-minded legal scholars has contested this view with increasing force. They argue that stare decisis creates institutional inertia that preserves unjust or outdated precedents long past their utility. Legal history offers familiar examples: courts sustained legally enforced segregation, coverture rules that stripped married women of property rights, and liability rules that immunized industrial polluters, in each case citing the need for continuity. These scholars contend that the value of predictability is routinely overstated relative to the costs of entrenching substantively wrong rules, and that legislative correction—often the traditionalist's preferred remedy—operates too slowly and unevenly to serve as a reliable check."
      },
      {
        label: "P3",
        text: "Traditionalists respond that the predictability stare decisis provides is not a mere convenience but a structural feature of markets and personal planning. Firms make long-term investments based on their legal environment; individuals organize their affairs in reliance on settled rules. Abrupt judicial overruling can retroactively invalidate those reliance interests in ways that the reformers' cost-benefit framing fails to capture. The traditionalists also note that what looks like harmful entrenchment in hindsight was often defensible under the epistemic conditions that obtained when the precedent was set—a point the reformers' selective use of historical examples tends to obscure."
      },
      {
        label: "P4",
        text: "The author argues that both camps treat stare decisis as a binary choice between following and overruling precedent, and in doing so miss the most common technique by which common law actually evolves: distinguishing. When a court distinguishes a precedent, it rules that the prior case does not govern the present facts because of some material difference between the two, without formally overruling the earlier decision. Distinguishing allows courts to adapt legal rules to new circumstances incrementally and without the disruptive finality of overruling. The real debate, the author contends, is not whether to follow precedent but whether distinguishing is being used honestly to identify genuine factual differences or dishonestly as a pretext for sub rosa overruling that avoids the institutional costs of saying so openly."
      }
    ],
    modelMap: [
      "P1: Explains stare decisis and the traditionalist case for it",
      "P2: Reform scholars attack — stare decisis entrenches unjust rules",
      "P3: Traditionalists respond — predictability has real structural value",
      "P4: Author's synthesis — both miss 'distinguishing,' the real mechanism of common law evolution"
    ],
    questions: [
      {
        id: "rc-stare-q1",
        section: "RC",
        family: "RC Main Point",
        difficulty: "hard",
        lessonIds: ["rc-function-main-point"],
        prompt: "",
        question: "Which statement best expresses the main point of the passage?",
        options: [
          "The debate over stare decisis is misdirected because both sides ignore the technique of distinguishing, which is how common law actually evolves",
          "Stare decisis should be abolished because it has historically entrenched unjust legal rules",
          "The doctrine of stare decisis provides essential predictability that markets depend on",
          "Reform-minded legal scholars have the better of the argument about the costs of following precedent"
        ],
        answer: 0,
        explanation: "The author's thesis appears in P4: both camps treat stare decisis as a binary, missing distinguishing. The author's goal is to reframe the debate, not to endorse either the reform or traditionalist position.",
        trapPattern: "Picks a major detail instead of the overall mission"
      },
      {
        id: "rc-stare-q2",
        section: "RC",
        family: "RC Function",
        difficulty: "medium",
        lessonIds: ["rc-function-main-point"],
        prompt: "",
        question: "The primary role of the third paragraph in the passage is to",
        options: [
          "present the traditionalist counterargument before the author introduces a synthesis that reframes the debate",
          "show that the reform scholars in the second paragraph are wrong about the costs of stare decisis",
          "explain why the doctrine of stare decisis was originally developed by English courts",
          "describe the legal rules that stare decisis has historically preserved"
        ],
        answer: 0,
        explanation: "P3 gives the traditionalist response to P2's reform critique. Its structural job in the passage is to complete the two-sided debate that P4 then reframes. It doesn't declare a winner or explain the doctrine's historical origins.",
        trapPattern: "Confuses paragraph topic with paragraph job"
      },
      {
        id: "rc-stare-q3",
        section: "RC",
        family: "RC Inference",
        difficulty: "hard",
        lessonIds: ["rc-inference-attitude"],
        prompt: "",
        question: "Based on the passage, which of the following can most reasonably be inferred about the technique of distinguishing?",
        options: [
          "Courts use it to adapt legal rules incrementally without the disruptive finality of formally overruling prior decisions",
          "It is viewed by reform scholars as an adequate substitute for legislative correction of unjust precedents",
          "It requires courts to identify precedents that are substantively wrong before declining to follow them",
          "The doctrine was developed as a response to the traditionalist critique described in the third paragraph"
        ],
        answer: 0,
        explanation: "P4 explicitly states that distinguishing 'allows courts to adapt legal rules to new circumstances incrementally and without the disruptive finality of overruling.' Answer A paraphrases this directly.",
        trapPattern: "Chooses a claim stronger than the passage supports"
      },
      {
        id: "rc-stare-q4",
        section: "RC",
        family: "RC Attitude",
        difficulty: "hard",
        lessonIds: ["rc-inference-attitude"],
        prompt: "",
        question: "The author's attitude toward both the reform scholars and the traditionalists is best described as",
        options: [
          "critical of both for framing the debate too narrowly and overlooking the central mechanism of common law evolution",
          "sympathetic to the reform scholars but skeptical that their proposals would be practically effective",
          "neutral — the author presents both views without taking any evaluative position",
          "fully endorsing the traditionalist view while acknowledging some merit in the reform critique"
        ],
        answer: 0,
        explanation: "The author explicitly criticizes both camps in P4 for treating the question as binary and missing distinguishing. This is critical of both, not neutral and not aligned with either side.",
        trapPattern: "Reads neutral summary as endorsement"
      },
      {
        id: "rc-stare-q5",
        section: "RC",
        family: "RC Structure",
        difficulty: "medium",
        lessonIds: ["rc-structure-map"],
        prompt: "",
        question: "Which of the following best describes how the passage is organized?",
        options: [
          "A legal doctrine is introduced, two opposing critiques of it are presented, and the author argues both critiques miss a more important distinction",
          "A legal doctrine is explained and the author argues it should be abolished based on its historical record",
          "Two legal scholars debate a doctrine and the author endorses one position over the other",
          "A series of historical legal examples is presented to show that a doctrine has been applied inconsistently"
        ],
        answer: 0,
        explanation: "P1 introduces stare decisis; P2 gives the reform critique; P3 gives the traditionalist response; P4 argues both miss distinguishing. Answer A accurately describes this four-part structure.",
        trapPattern: "Mistakes topic for structure"
      }
    ]
  },
  {
    id: "rc-documentary-photography",
    title: "Documentary Photography and the Question of Art",
    topic: "Humanities",
    difficulty: "Medium",
    estimatedReadMinutes: 3,
    isComparative: true,
    paragraphs: [
      {
        label: "Passage A",
        text: "Documentary photography and fine art photography differ not in medium but in purpose. The documentary photographer's primary obligation is accuracy: the image must faithfully represent the conditions, events, or subjects it depicts. Aesthetic choices—framing, light, moment of capture—are instrumentalized in service of this evidentiary function. When those choices conflict with accurate representation, the documentary photographer must subordinate aesthetic preference to factual fidelity. This purposive distinction matters because it determines how photographs are properly evaluated. We assess documentary work by asking whether it is an accurate and informative record; we ask whether fine art photography achieves expressive originality and aesthetic force. Conflating the two categories distorts both standards and produces confused criticism."
      },
      {
        label: "Passage B",
        text: "The distinction between documentary and fine art photography that Passage A relies on is philosophically incoherent. Every photographic decision—what to frame, when to release the shutter, how to set the exposure, where to position the body—is an expressive choice, not a mechanical transcription of fact. The claim that documentary photographers subordinate aesthetics to accuracy misunderstands what photography does: two photographers with identical equipment facing the same scene will produce meaningfully different images because they make different choices. Those choices constitute aesthetic expression regardless of intent. The greatest documentary photographers are widely exhibited in major art institutions not as historical curiosities but as artists, because their work demonstrates that expressive power and documentary purpose are not merely compatible but mutually reinforcing. Passage A's categorical distinction survives only if we pretend that aesthetic decisions can be factored out of photographic practice—a pretense the history of the medium does not support."
      }
    ],
    modelMap: [
      "Passage A: Documentary and fine art photography differ in purpose; evaluation criteria differ accordingly",
      "Passage B: The art/document distinction is incoherent; every photographic choice is expressive"
    ],
    questions: [
      {
        id: "rc-photo-q1",
        section: "RC",
        family: "RC Main Point",
        difficulty: "medium",
        lessonIds: ["rc-function-main-point"],
        prompt: "",
        question: "The main point of Passage B is that",
        options: [
          "the distinction between documentary and fine art photography is philosophically incoherent because all photographic choices are inherently expressive",
          "documentary photographers should aspire to the same aesthetic standards as fine art photographers",
          "documentary photographs are superior to fine art photographs because they serve a social purpose",
          "the evaluation of photography should focus exclusively on expressive originality rather than accuracy"
        ],
        answer: 0,
        explanation: "Passage B's central claim is that the documentary/art distinction fails because photography is always expressive — the distinction 'is philosophically incoherent.' It does not argue for superior standards or exclusive focus on one criterion.",
        trapPattern: "Picks a major detail instead of the overall mission"
      },
      {
        id: "rc-photo-q2",
        section: "RC",
        family: "RC Inference",
        difficulty: "medium",
        lessonIds: ["rc-inference-attitude"],
        prompt: "",
        question: "Based on Passage A, which of the following can most reasonably be inferred?",
        options: [
          "The author of Passage A believes documentary photographs should be evaluated primarily by how accurately they represent their subjects",
          "The author of Passage A believes documentary photographs cannot achieve genuine aesthetic quality",
          "The author of Passage A agrees with Passage B that photographic choices are always expressive",
          "The author of Passage A argues that all photography should serve documentary purposes"
        ],
        answer: 0,
        explanation: "Passage A states directly that documentary work is 'properly evaluated' by asking 'whether it is an accurate and informative record.' This strongly supports A. Passage A does not claim documentary work lacks aesthetic quality, only that aesthetic choices are secondary to accuracy.",
        trapPattern: "Chooses a claim stronger than the passage supports"
      },
      {
        id: "rc-photo-q3",
        section: "RC",
        family: "RC Attitude",
        difficulty: "medium",
        lessonIds: ["rc-inference-attitude"],
        prompt: "",
        question: "The author of Passage B's attitude toward the central distinction drawn in Passage A is best described as",
        options: [
          "dismissive — the author considers the distinction philosophically incoherent and historically unsupported",
          "partially sympathetic — the author agrees that evaluation criteria differ but disputes the reason",
          "neutral — the author presents Passage A's view fairly before offering a mild qualification",
          "uncertain — the author raises doubts but stops short of rejecting the distinction"
        ],
        answer: 0,
        explanation: "Passage B calls the distinction 'philosophically incoherent' and says it 'survives only if we pretend' something false. This is dismissive, not partial or neutral.",
        trapPattern: "Reads neutral summary as endorsement"
      },
      {
        id: "rc-photo-q4",
        section: "RC",
        family: "RC Function",
        difficulty: "hard",
        lessonIds: ["rc-function-main-point"],
        prompt: "",
        question: "In Passage B, the reference to major art institutions primarily serves to",
        options: [
          "provide concrete evidence that documentary photographers are recognized as artists, undermining Passage A's categorical distinction",
          "argue that fine art museums should collect more documentary photography",
          "show that institutional recognition is the correct standard for defining art",
          "establish that Passage A's evaluation criteria are used by art critics worldwide"
        ],
        answer: 0,
        explanation: "The gallery/institution reference is evidence that documentary photographers are exhibited as artists — this directly undermines Passage A's claim that the two categories should be kept distinct. It is an evidentiary move in support of Passage B's argument, not a normative claim about what museums should do.",
        trapPattern: "Confuses paragraph topic with paragraph job"
      },
      {
        id: "rc-photo-q5",
        section: "RC",
        family: "RC Structure",
        difficulty: "medium",
        lessonIds: ["rc-structure-map"],
        prompt: "",
        question: "The two passages are related in which of the following ways?",
        options: [
          "Passage B directly attacks the central distinction that Passage A relies on to differentiate documentary from fine art photography",
          "Passage B extends Passage A's argument by providing additional historical evidence",
          "Passage A responds to the arguments made in Passage B",
          "The two passages agree on evaluation criteria but disagree on which photographers qualify as artists"
        ],
        answer: 0,
        explanation: "Passage B explicitly targets and rejects the documentary/art distinction that is the foundation of Passage A's argument. Passage B does not extend A; A does not respond to B; and the passages disagree on evaluation criteria themselves.",
        trapPattern: "Mistakes topic for structure"
      }
    ]
  },
  {
    id: "rc-informal-credit",
    title: "Informal Credit Networks in Nineteenth-Century America",
    topic: "Social Science",
    difficulty: "Medium",
    estimatedReadMinutes: 3,
    paragraphs: [
      {
        label: "P1",
        text: "Economic historians have long credited formal banking institutions with financing the rapid expansion of the American economy in the nineteenth century. In this account, chartered banks, commercial paper markets, and eventually the national banking system created during the Civil War era provided the credit that allowed businesses to invest beyond their immediate cash reserves and farmers to purchase equipment and land before harvests came in. The infrastructure of formal finance is visible in the historical record—bank charters, balance sheets, regulatory filings—and has attracted correspondingly extensive scholarly attention."
      },
      {
        label: "P2",
        text: "A revisionist strand of economic history has recently drawn attention to a parallel credit system that the formal-banking account largely ignores. Using merchant account books, personal correspondence, and the records of fraternal organizations and mutual aid societies, these scholars have documented extensive informal credit networks operating throughout rural and small-town America. Country storekeepers routinely extended credit on what was called the 'open book'—recording balances in ledgers without formal legal instruments—to farming families who would settle accounts in labor, produce, or cash months or even years later. These arrangements were more flexible than bank loans, required no collateral, and extended to populations—recent immigrants, tenant farmers, freed people in the post-war South—that formal banks consistently refused to serve."
      },
      {
        label: "P3",
        text: "The revisionist account acknowledges significant weaknesses in informal credit. These networks depended on the personal knowledge and reputational information that relationships in small, stable communities generate; they could not easily be transplanted to the anonymous transactions of large cities or extended across unfamiliar populations. When an anchor figure—a long-established storekeeper or the leader of a fraternal society—died, relocated, or faced personal financial crisis, the network often collapsed, sometimes taking decades of accumulated obligations with it. The informal system also lacked the diversification that formal banks could achieve: a crop failure or local economic shock could render dozens of customers unable to repay simultaneously, cascading through the network in ways a bank with geographically distributed assets could absorb."
      },
      {
        label: "P4",
        text: "Despite these limitations, the author argues that informal credit should be understood not as a primitive precursor that the formal banking system eventually displaced, but as a structural complement that co-evolved with formal institutions throughout the period. As bank networks expanded, storekeepers increasingly used formal banking relationships to backstop their book credit—depositing trade receipts and accessing lines of credit that allowed them to absorb local shocks that would previously have destroyed the network. At the same time, formal banks used informal networks as distribution channels, directing customers to local storekeepers for the small, relationship-intensive transactions that formal banking found unprofitable to service directly. The two systems addressed different needs within the same economy simultaneously, and the expansion of one did not crowd out the other."
      }
    ],
    modelMap: [
      "P1: Traditional account — formal banking drove 19th century American economic expansion",
      "P2: Revisionist scholarship — informal credit networks were extensive and served populations banks ignored",
      "P3: Weaknesses of informal credit — local, fragile, not diversified",
      "P4: Author's argument — informal credit was a structural complement, not a primitive precursor"
    ],
    questions: [
      {
        id: "rc-credit-q1",
        section: "RC",
        family: "RC Main Point",
        difficulty: "medium",
        lessonIds: ["rc-function-main-point"],
        prompt: "",
        question: "The main argument of the passage is that",
        options: [
          "informal credit networks were not primitive precursors to formal banking but structural complements that co-evolved with formal institutions throughout the nineteenth century",
          "the traditional account of formal banking's role in American economic expansion is entirely mistaken",
          "informal credit networks were superior to formal banking for most nineteenth-century Americans because they were more flexible",
          "the weaknesses of informal credit eventually caused it to be displaced by the expanding formal banking system"
        ],
        answer: 0,
        explanation: "The author's thesis is stated in P4: informal credit was a 'structural complement that co-evolved' with formal institutions — not displaced by them and not their precursor. The author is not arguing the traditional account is entirely wrong, only incomplete.",
        trapPattern: "Picks a major detail instead of the overall mission"
      },
      {
        id: "rc-credit-q2",
        section: "RC",
        family: "RC Function",
        difficulty: "medium",
        lessonIds: ["rc-function-main-point"],
        prompt: "",
        question: "The third paragraph primarily functions to",
        options: [
          "acknowledge the real limitations of informal credit before the author argues for its structural importance alongside formal banking",
          "argue that informal credit was not economically significant because of its fragility and geographic constraints",
          "explain why the formal banking system eventually displaced informal credit networks",
          "provide historical examples that support the revisionist account described in the second paragraph"
        ],
        answer: 0,
        explanation: "P3 follows the revisionist case in P2 with an acknowledgment of informal credit's weaknesses. Its structural job is concession: granting real problems before P4 makes the stronger claim about co-evolution. It is not an argument against informal credit's significance.",
        trapPattern: "Confuses paragraph topic with paragraph job"
      },
      {
        id: "rc-credit-q3",
        section: "RC",
        family: "RC Inference",
        difficulty: "medium",
        lessonIds: ["rc-inference-attitude"],
        prompt: "",
        question: "Based on the passage, which of the following is most strongly supported regarding formal banks in nineteenth-century America?",
        options: [
          "They did not generally extend credit to tenant farmers, recent immigrants, and freed people in the post-war South",
          "They were entirely dependent on informal credit networks to distribute their services",
          "Their geographic diversification meant they were unaffected by regional economic shocks",
          "They operated primarily in rural areas rather than cities"
        ],
        answer: 0,
        explanation: "P2 explicitly states that informal credit 'extended to populations—recent immigrants, tenant farmers, freed people in the post-war South—that formal banks consistently refused to serve.' Answer A paraphrases this directly.",
        trapPattern: "Chooses a claim stronger than the passage supports"
      },
      {
        id: "rc-credit-q4",
        section: "RC",
        family: "RC Attitude",
        difficulty: "medium",
        lessonIds: ["rc-inference-attitude"],
        prompt: "",
        question: "The author's attitude toward the traditional economic historians described in the first paragraph is best characterized as",
        options: [
          "critical of their incomplete account — they have overlooked a significant parallel credit system",
          "strongly dismissive — the traditional account is wrong in all of its major claims",
          "fully endorsing — the author accepts the traditional account and adds minor details",
          "confused — the author is uncertain whether the traditional account or the revisionist account is correct"
        ],
        answer: 0,
        explanation: "The author endorses the revisionist scholarship in P2 and builds on it in P4, implying the traditional account is incomplete rather than entirely wrong. The author never says formal banking was unimportant, only that informal credit was equally important and has been neglected.",
        trapPattern: "Reads neutral summary as endorsement"
      },
      {
        id: "rc-credit-q5",
        section: "RC",
        family: "RC Structure",
        difficulty: "medium",
        lessonIds: ["rc-structure-map"],
        prompt: "",
        question: "Which of the following best describes the overall organization of the passage?",
        options: [
          "A dominant historical account is presented, revisionist scholarship is introduced that expands that account, the limitations of the new scholarship are acknowledged, and the author presents a synthesis",
          "Two competing economic systems are described and the author argues one was more effective than the other",
          "A historical phenomenon is described, its causes are analyzed, and policy recommendations are offered",
          "A series of case studies is used to demonstrate a general principle about economic development"
        ],
        answer: 0,
        explanation: "P1 = traditional account; P2 = revisionist scholarship; P3 = limits of the new view; P4 = author's synthesis about co-evolution. This matches answer A precisely.",
        trapPattern: "Mistakes topic for structure"
      }
    ]
  }
];

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
  questionTypeLessons: QUESTION_TYPE_LESSONS,
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
      nextLessonId: "rc-function-main-point",
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
      id: "rc-function-main-point",
      title: "RC Function and Main Point",
      track: "RC Advanced",
      sourceTags: ["PowerScore RC", "LSAT Trainer"],
      summary: "Move from paragraph maps to function and main-point control so RC questions feel structurally predictable.",
      statusLabel: "RC capstone",
      masteryThreshold: 3,
      linkedQuestionFamilies: ["RC Function", "RC Main Point"],
      nextLessonId: "lr-argument-core",
      scenes: [
        { type: "concept", title: "Paragraph job first", explanation: "Function questions ask what the author made a paragraph do, not what the paragraph happened to mention.", storyboard: "Example, challenge, concession, support, or pivot.", actionCue: "Label the job before the content." },
        { type: "worked-example", title: "Main point compression", explanation: "The main point is the passage's mission after all the setup, not the most interesting detail along the way.", storyboard: "Setup -> tension -> author's move.", actionCue: "Ask what the whole passage was trying to earn." },
        { type: "trap", title: "Detail trap", explanation: "A detailed statement can be important and still be only evidence for the larger mission.", storyboard: "Important detail is not the whole point.", actionCue: "Reject answers that sound too local." },
        { type: "recap", title: "Fast RC control", explanation: "If you know each paragraph's job and the author's mission, most RC stems become location questions instead of mystery questions.", storyboard: "Job map + mission = control.", actionCue: "Summarize each passage in one sentence." },
        { type: "next-step", title: "Transition to LR", explanation: "You now have a full RC foundation. Next comes LR structure and gaps.", storyboard: "RC map complete -> LR anatomy.", actionCue: "Open Argument Core." },
      ],
      workedExample: {
        prompt: "A passage gives two failed experiments before proposing a narrower theory.",
        reasoning: "Those failed experiments are not the main point. Their function is to motivate why the narrower theory is needed.",
      },
      trapExplanation: "A tempting wrong answer often repeats a vivid detail from the middle of the passage rather than the author's final mission.",
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
      nextLessonId: "lr-provable-parallel",
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
    {
      id: "lr-provable-parallel",
      title: "Provable, Parallel, and Point at Issue",
      track: "LR Advanced",
      sourceTags: ["PowerScore LR", "LSAT Trainer"],
      summary: "Finish the LR sequence with tighter provable-question discipline and better pattern matching on parallel and dialogue questions.",
      statusLabel: "LR capstone",
      masteryThreshold: 3,
      linkedQuestionFamilies: ["Must Be True", "Parallel Flaw", "Point at Issue"],
      nextLessonId: null,
      scenes: [
        { type: "concept", title: "Provable means modest", explanation: "Must-be-true and most-strongly-supported questions reward the answer that the stimulus fully earns, not the one that sounds most ambitious.", storyboard: "Text first, force second.", actionCue: "Check whether the wording is stronger than the evidence." },
        { type: "worked-example", title: "Parallel by skeleton", explanation: "Parallel questions are solved by matching reasoning form and force, not by matching subject matter.", storyboard: "Strip the topic, keep the logic.", actionCue: "Reduce the original argument to a bare pattern." },
        { type: "trap", title: "Dialogue miss", explanation: "Point-at-issue questions are missed when you choose a claim mentioned by only one speaker instead of a claim one affirms and the other denies.", storyboard: "Need yes/no opposition.", actionCue: "Test each choice for disagreement on both sides." },
        { type: "recap", title: "Final LR discipline", explanation: "Strong language, topic similarity, and one-sided dialogue answers are the usual traps here.", storyboard: "Force, form, and true disagreement.", actionCue: "Run the three-check list before selecting." },
        { type: "next-step", title: "Mixed review", explanation: "You are ready for broader mixed drills, realistic timed sets, and analytics-driven review.", storyboard: "Advanced LR -> mixed sets.", actionCue: "Jump to Practice." },
      ],
      workedExample: {
        prompt: "If all approved proposals included cost estimates and this proposal was approved, what follows?",
        reasoning: "The provable answer is only that this proposal included a cost estimate. Anything stronger goes beyond the text.",
      },
      trapExplanation: "Parallel-flaw questions love topic lookalikes that do not commit the same logical mistake, and dialogue questions love claims only one speaker ever mentions.",
    },
  ],
  questionBank: QUESTION_BANK,
  rcPassages: RC_PASSAGES,
  drillPresets: [
    { id: "rc-start", title: "RC Structure Reset", section: "RC", families: ["RC Structure", "RC Inference"], count: 5, rationale: "Rebuild structure and inference discipline before detail-chasing." },
    { id: "gap-work", title: "Gap Spotting", section: "LR", families: ["Assumption", "Strengthen", "Weaken"], count: 5, rationale: "Train the bridge between support and conclusion." },
    { id: "logic-control", title: "Formal Logic Control", section: "LR", families: ["Conditional Logic"], count: 5, rationale: "Reduce reversal and contrapositive mistakes." },
    { id: "mixed-timed", title: "Mixed Timed Five", section: "Mixed", families: ["Flaw", "Assumption", "Strengthen", "Weaken", "RC Structure"], count: 5, rationale: "A fast realistic section slice with mixed reasoning demands." },
    { id: "rc-depth", title: "RC Main Point + Function", section: "RC", families: ["RC Function", "RC Main Point", "RC Attitude"], count: 6, rationale: "Deepen passage-map payoff with function and main-point control." },
    { id: "advanced-lr", title: "Advanced LR Families", section: "LR", families: ["Evaluate", "Resolve / Explain", "Principle", "Parallel Flaw", "Point at Issue", "Must Be True"], count: 6, rationale: "Widen coverage into the families that often feel abstract late in prep." },
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
