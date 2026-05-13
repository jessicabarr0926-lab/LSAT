const APP_KEY = "jessipreps-v1";
const data = window.JESSI_PREPS_DATA;

const navRail = document.querySelector("#navRail");
const settingsPanel = document.querySelector("#settingsPanel");
const todayCard = document.querySelector("#todayCard");
const routeEyebrow = document.querySelector("#routeEyebrow");
const routeTitle = document.querySelector("#routeTitle");
const heroMount = document.querySelector("#heroMount");
const pageMount = document.querySelector("#pageMount");
const noticeMount = document.querySelector("#noticeMount");
const sidebarToggle = document.querySelector("#sidebarToggle");
const sidebarClose = document.querySelector("#sidebarClose");
const notificationBell = document.querySelector("#notificationBell");
const subscribeCta = document.querySelector("#subscribeCta");
const globalSearch = document.querySelector("#globalSearch");
const commandPaletteButton = document.querySelector("#commandPaletteButton");
const profileChip = document.querySelector("#profileChip");
let lessonPlaybackTimer = null;
let lessonPlaybackState = { lessonId: null, sceneIndex: 0, playing: false };
let qtPlaybackTimer = null;
let qtPlaybackState = { lessonId: null, phase: "step1", sceneIndex: 0, playing: false };
let testDayTimer = null;
const questionRenderTimes = {};

const state = loadState();

document.querySelector("#quickStart").addEventListener("click", () => {
  location.hash = `#/practice/drill/${adaptiveDrillTarget().preset.id}`;
});

document.querySelector("#openWeakest").addEventListener("click", () => {
  location.hash = "#/practice/drill/gap-work";
});

sidebarToggle?.addEventListener("click", () => {
  document.body.classList.toggle("sidebar-open");
});

sidebarClose?.addEventListener("click", () => {
  document.body.classList.remove("sidebar-open");
});

notificationBell?.addEventListener("click", () => {
  state.notificationsOpen = !state.notificationsOpen;
  saveState();
  renderApp();
  location.hash = "#/dashboard";
});

subscribeCta?.addEventListener("click", () => {
  state.subscriptionIntent = state.subscriptionIntent === "open" ? "" : "open";
  saveState();
  renderApp();
});

commandPaletteButton?.addEventListener("click", () => {
  state.commandPaletteOpen = !state.commandPaletteOpen;
  saveState();
  renderApp();
});

profileChip?.addEventListener("click", () => {
  state.profileMenuOpen = !state.profileMenuOpen;
  saveState();
  renderApp();
});

globalSearch?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  const term = globalSearch.value.trim().toLowerCase();
  if (!term) return;
  const lesson = data.lessons.find((item) => item.title.toLowerCase().includes(term) || item.track.toLowerCase().includes(term));
  const family = [...new Set(data.questionBank.map((question) => question.family))].find((item) => item.toLowerCase().includes(term));
  location.hash = lesson ? `#/learn/${lesson.id}` : family ? "#/practice" : "#/learn";
});

window.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    state.commandPaletteOpen = !state.commandPaletteOpen;
    saveState();
    renderApp();
  }
});

window.addEventListener("hashchange", renderApp);

function defaultState() {
  return {
    settings: Object.fromEntries(data.settings.map((item) => [item.id, false])),
    lessonProgress: Object.fromEntries(data.lessons.map((lesson) => [lesson.id, { complete: false, masteryWins: 0 }])),
    questionTypeProgress: Object.fromEntries((data.questionTypeLessons || []).map((lesson) => [lesson.id, { complete: false, guidedWins: 0, drillWins: 0, currentStep: 1 }])),
    rcProgress: Object.fromEntries(
      (data.rcPassages || []).map((p) => [p.id, { phase: "reading", readStartTime: null, readTimeSeconds: null, mapText: "" }])
    ),
    attempts: {},
    journal: [],
    support: [...data.supportEntries],
    plan: { ...data.studyPlanDefaults },
    onboarding: {
      currentScore: data.appMeta.scaledScore,
      goalScore: data.appMeta.targetScore,
      testDate: data.studyPlanDefaults.testDate || "",
      weakestSection: "Logical Reasoning",
      dailyMinutes: 45,
    },
    officialLogs: [],
    bookmarks: {},
    notifications: [
      { id: "welcome", title: "Welcome to JessiPreps", body: "Start with one sprint: learn, drill, review, log, stop.", read: false },
      { id: "writing", title: "LSAT Writing reminder", body: "Confirm whether a valid argumentative writing sample is already on file.", read: false },
    ],
    imports: [],
    cookieConsent: "",
    subscriptionIntent: "",
    notificationsOpen: false,
    commandPaletteOpen: false,
    profileMenuOpen: false,
    liveReservations: {},
    coachMessages: [],
    testDay: {
      mode: "strict",
      active: false,
      sectionIndex: 0,
      questionIndex: 0,
      sectionStartedAt: "",
      sectionEndsAt: "",
      sectionSubmitted: {},
      fullTestSubmitted: false,
      answers: {},
      eliminated: {},
      flagged: {},
      highlights: {},
      timeSpent: {},
      reviewFilter: "all",
      prefs: {
        fontSize: "medium",
        lineSpacing: "normal",
        theme: "light",
        passageWidth: "normal",
        allowClear: true,
        showTimer: true,
      },
    },
    currentBlock: { id: "daily-sprint", unfinished: 3, label: "Daily sprint block" },
    lastSavedAt: "",
  };
}

function loadState() {
  const raw = localStorage.getItem(APP_KEY);
  const base = defaultState();
  if (!raw) return base;
  try {
    const parsed = JSON.parse(raw);
    return {
      ...base,
      ...parsed,
      settings: { ...base.settings, ...(parsed.settings || {}) },
      lessonProgress: { ...base.lessonProgress, ...(parsed.lessonProgress || {}) },
      questionTypeProgress: { ...base.questionTypeProgress, ...(parsed.questionTypeProgress || {}) },
      rcProgress: { ...base.rcProgress, ...(parsed.rcProgress || {}) },
      attempts: parsed.attempts || {},
      journal: parsed.journal || [],
      support: parsed.support || base.support,
      plan: { ...base.plan, ...(parsed.plan || {}) },
      onboarding: { ...base.onboarding, ...(parsed.onboarding || {}) },
      officialLogs: parsed.officialLogs || [],
      bookmarks: parsed.bookmarks || {},
      notifications: parsed.notifications || base.notifications,
      imports: parsed.imports || [],
      cookieConsent: parsed.cookieConsent || "",
      subscriptionIntent: parsed.subscriptionIntent || "",
      notificationsOpen: Boolean(parsed.notificationsOpen),
      commandPaletteOpen: Boolean(parsed.commandPaletteOpen),
      profileMenuOpen: Boolean(parsed.profileMenuOpen),
      liveReservations: parsed.liveReservations || {},
      coachMessages: parsed.coachMessages || [],
      testDay: { ...base.testDay, ...(parsed.testDay || {}), prefs: { ...base.testDay.prefs, ...(parsed.testDay?.prefs || {}) } },
      currentBlock: { ...base.currentBlock, ...(parsed.currentBlock || {}) },
      lastSavedAt: parsed.lastSavedAt || "",
    };
  } catch {
    return base;
  }
}

function saveState() {
  state.lastSavedAt = new Date().toISOString();
  localStorage.setItem(APP_KEY, JSON.stringify(state));
}

function completedLessons() {
  return data.lessons.filter((lesson) => state.lessonProgress[lesson.id]?.complete).length;
}

function accuracyForFamily(family) {
  const questions = data.questionBank.filter((question) => question.family === family);
  const answered = questions.filter((question) => state.attempts[question.id]);
  if (!answered.length) return 0;
  const correct = answered.filter((question) => state.attempts[question.id].correct).length;
  return Math.round((correct / answered.length) * 100);
}

function weakestFamily() {
  const families = [...new Set(data.questionBank.map((question) => question.family))];
  return families
    .map((family) => ({ family, score: accuracyForFamily(family) || 0 }))
    .sort((a, b) => a.score - b.score)[0];
}

function sectionAccuracy(section) {
  const questions = data.questionBank.filter((question) => question.section === section);
  const answered = questions.filter((question) => state.attempts[question.id]);
  if (!answered.length) return section === "LR" ? 37 : 39;
  const correct = answered.filter((question) => state.attempts[question.id].correct).length;
  return Math.round((correct / answered.length) * 100);
}

function masteryRating(section) {
  const accuracy = sectionAccuracy(section);
  const attempted = data.questionBank.filter((question) => question.section === section && state.attempts[question.id]).length;
  const volumeBonus = Math.min(12, Math.round(attempted / 3));
  return Math.max(0, Math.min(100, Math.round(accuracy * 0.78 + volumeBonus)));
}

function scoreTrend() {
  const base = data.appMeta.scaledScore - 6;
  return [
    { label: "Dec 4", score: base },
    { label: "Jan 1", score: base + 2 },
    { label: "Jan 13", score: base + 4 },
    { label: "Today", score: data.appMeta.scaledScore },
  ];
}

function scoreVariance() {
  const scores = scoreTrend().map((point) => point.score);
  const mean = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  const variance = scores.reduce((sum, score) => sum + Math.pow(score - mean, 2), 0) / scores.length;
  return Math.round(Math.sqrt(variance) * 2);
}

function streakDays() {
  const activityUnits = completedLessons() + Object.keys(state.attempts).length + state.journal.length;
  return Math.min(14, Math.max(0, Math.ceil(activityUnits / 4)));
}

function allQuestions() {
  return [
    ...data.questionBank,
    ...(data.rcPassages || []).flatMap((passage) => passage.questions),
  ];
}

function unreadNotifications() {
  return state.notifications.filter((item) => !item.read).length;
}

function isBookmarked(id) {
  return Boolean(state.bookmarks[id]);
}

function bookmarkCount(type) {
  return Object.values(state.bookmarks).filter((item) => !type || item.type === type).length;
}

function studyQualityScore() {
  const attempts = Object.keys(state.attempts).length;
  const reviewed = state.journal.filter((entry) => entry.blindReviewOutcome === "complete").length;
  const logged = state.officialLogs.length;
  const planSaved = state.plan.testDate ? 12 : 0;
  return Math.min(100, Math.round(streakDays() * 4 + Math.min(attempts, 20) * 1.4 + reviewed * 6 + logged * 4 + planSaved));
}

function officialTestCount() {
  return state.officialLogs.length;
}

function familyAnalytics() {
  const families = [...new Set(allQuestions().map((question) => question.family))];
  return families.map((family) => {
    const questions = allQuestions().filter((question) => question.family === family);
    const attempts = questions.filter((question) => state.attempts[question.id]);
    const correct = attempts.filter((question) => state.attempts[question.id]?.correct).length;
    const times = attempts.map((question) => state.attempts[question.id]?.timeSeconds).filter((time) => Number.isFinite(time));
    return {
      family,
      questions: questions.length,
      attempts: attempts.length,
      accuracy: attempts.length ? Math.round((correct / attempts.length) * 100) : accuracyForFamily(family) || 0,
      avgTime: times.length ? Math.round(times.reduce((sum, time) => sum + time, 0) / times.length) : null,
    };
  }).sort((a, b) => a.accuracy - b.accuracy);
}

function timeSummary() {
  const attempts = allQuestions().filter((question) => state.attempts[question.id]);
  const bucket = (predicate) => {
    const times = attempts.filter(predicate).map((question) => state.attempts[question.id].timeSeconds).filter((time) => Number.isFinite(time));
    return times.length ? Math.round(times.reduce((sum, time) => sum + time, 0) / times.length) : null;
  };
  return {
    correct: bucket((question) => state.attempts[question.id]?.correct),
    wrong: bucket((question) => state.attempts[question.id] && !state.attempts[question.id].correct),
    review: state.journal.length ? Math.max(180, state.journal.length * 55) : null,
  };
}

function finalFiveAccuracy() {
  const answered = allQuestions().filter((question) => state.attempts[question.id]).slice(-5);
  if (!answered.length) return 0;
  const correct = answered.filter((question) => state.attempts[question.id].correct).length;
  return Math.round((correct / answered.length) * 100);
}

function rcPassageSplit() {
  const splits = Object.values(state.rcProgress || {}).filter((item) => item.readTimeSeconds);
  const read = splits.length ? Math.round(splits.reduce((sum, item) => sum + item.readTimeSeconds, 0) / splits.length) : 210;
  return {
    read,
    questions: 330,
    check: 60,
  };
}

function renderSparkline(points, key = "score") {
  const values = points.map((point) => point[key]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(1, max - min);
  const coords = points
    .map((point, index) => {
      const x = points.length === 1 ? 50 : (index / (points.length - 1)) * 100;
      const y = 88 - ((point[key] - min) / range) * 72;
      return `${x},${y}`;
    })
    .join(" ");
  return `
    <svg class="sparkline" viewBox="0 0 100 100" role="img" aria-label="Score trend sparkline">
      <polyline points="${coords}" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></polyline>
      ${points.map((point, index) => {
        const x = points.length === 1 ? 50 : (index / (points.length - 1)) * 100;
        const y = 88 - ((point[key] - min) / range) * 72;
        return `<circle cx="${x}" cy="${y}" r="4"></circle>`;
      }).join("")}
    </svg>
  `;
}

function renderDonut(percent, label, value) {
  const safe = Math.max(0, Math.min(100, percent));
  return `
    <div class="donut-chart" style="--value:${safe}%">
      <strong>${value}</strong>
      <span>${label}</span>
    </div>
  `;
}

function renderActivityBars() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const minutes = [35, 48, 20, 55, 42, 18, activeProfile().dailyMinutes || 45];
  const max = Math.max(...minutes, 1);
  return `
    <div class="activity-bars" aria-label="Weekly learning activity">
      ${days.map((day, index) => `<section title="${minutes[index]} minutes studied"><i style="height:${Math.max(12, Math.round((minutes[index] / max) * 100))}%"></i><span>${day}</span></section>`).join("")}
    </div>
  `;
}

function renderAccuracyGrid(questions, limit = 30) {
  const cells = questions.slice(0, limit).map((question, index) => {
    const attempt = state.attempts[question.id];
    const cls = !attempt ? "is-empty" : attempt.correct ? "is-correct" : "is-wrong";
    const color = !attempt ? "#d7d3df" : attempt.correct ? "#2f9d68" : "#d85a66";
    const label = `${question.family} Q${index + 1}: ${!attempt ? "unseen" : attempt.correct ? "correct" : "missed"}`;
    return `<a class="${cls}" href="#/review" style="display:block;width:10px;height:10px;border-radius:3px;background:${color}" title="${label}" aria-label="${label}"></a>`;
  });
  return `<div class="accuracy-grid" style="display:flex;flex-wrap:wrap;gap:5px;min-height:24px;margin-top:10px">${cells.join("")}</div>`;
}

function renderResultGrid(questions, total, missedEvery = 5) {
  const cells = Array.from({ length: total }, (_, index) => {
    const question = questions[index % Math.max(1, questions.length)];
    const wrong = index % missedEvery === 0 || index === total - 2;
    const cls = wrong ? "is-wrong" : "is-correct";
    const label = `${question?.family || "Section"} Q${index + 1}: ${wrong ? "missed" : "correct"}`;
    return `<span class="${cls}" style="display:block;width:10px;height:10px;border-radius:3px;background:${wrong ? "#d85a66" : "#2f9d68"}" title="${label}" aria-label="${label}"></span>`;
  });
  return `<div class="accuracy-grid" style="display:flex;flex-wrap:wrap;gap:5px;min-height:34px;margin-top:auto">${cells.join("")}</div>`;
}

function lessonUnits() {
  const units = [
    { id: "foundations", title: "Foundations", match: (lesson) => lesson.track.includes("Strategy") || lesson.track.includes("Requested") && lesson.title.includes("Getting Started") },
    { id: "rc-core", title: "RC Core", match: (lesson) => lesson.track.includes("RC Core") || lesson.track.includes("RC Requested") },
    { id: "rc-advanced", title: "RC Advanced", match: (lesson) => lesson.track.includes("RC Advanced") },
    { id: "lr-foundations", title: "LR Fundamentals", match: (lesson) => lesson.track.includes("LR Core") || lesson.track.includes("LR Requested") },
    { id: "lr-advanced", title: "LR Advanced", match: (lesson) => lesson.track.includes("LR Advanced") },
    { id: "review", title: "Timed Integration + Review", match: (lesson) => lesson.linkedQuestionFamilies?.some((family) => ["Flaw", "Assumption", "Strengthen", "Weaken"].includes(family)) },
  ];
  return units.map((unit) => {
    const lessons = data.lessons.filter(unit.match).slice(0, 28);
    return { ...unit, lessons: lessons.length ? lessons : data.lessons.slice(0, 6) };
  });
}

function unitProgress(lessons) {
  if (!lessons.length) return 0;
  const done = lessons.filter((lesson) => state.lessonProgress[lesson.id]?.complete).length;
  return Math.round((done / lessons.length) * 100);
}

function lessonStatusIcon(lesson) {
  const progress = state.lessonProgress[lesson.id];
  if (progress?.complete) return "✓";
  if ((progress?.masteryWins || 0) > 0) return "▶";
  return "○";
}

function daysUntilTest() {
  if (!state.plan.testDate) return null;
  const today = new Date();
  const test = new Date(`${state.plan.testDate}T12:00:00`);
  const diff = Math.ceil((test - today) / 86400000);
  return Number.isFinite(diff) ? diff : null;
}

function adaptiveDrillTarget() {
  const journalFamilies = state.journal.reduce((acc, entry) => {
    if (entry.family) acc[entry.family] = (acc[entry.family] || 0) + 1;
    return acc;
  }, {});
  const journalFamily = Object.entries(journalFamilies).sort((a, b) => b[1] - a[1])[0]?.[0];
  const weak = journalFamily ? { family: journalFamily, score: accuracyForFamily(journalFamily) || 0 } : weakestFamily();
  const preset =
    data.drillPresets.find((item) => item.families.includes(weak.family)) ||
    data.drillPresets.find((item) => item.id === "gap-work") ||
    data.drillPresets[0];
  return { weak, preset };
}

function lastSavedLabel() {
  if (!state.lastSavedAt) return "Progress saved locally";
  const saved = new Date(state.lastSavedAt);
  if (Number.isNaN(saved.getTime())) return "Progress saved locally";
  return `Last saved ${saved.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`;
}

function activeProfile() {
  return {
    currentScore: Number(state.onboarding.currentScore || data.appMeta.scaledScore),
    goalScore: Number(state.onboarding.goalScore || data.appMeta.targetScore),
    testDate: state.onboarding.testDate || state.plan.testDate || "",
    weakestSection: state.onboarding.weakestSection || "Logical Reasoning",
    dailyMinutes: Number(state.onboarding.dailyMinutes || 45),
  };
}

function nextLesson() {
  return data.lessons.find((lesson) => !state.lessonProgress[lesson.id]?.complete) || data.lessons[0];
}

function nextBestAction() {
  const dueEntries = state.journal.filter(
    (e) => !e.blindReviewOutcome || e.blindReviewOutcome === "pending"
  );
  const dueCount = dueEntries.length;
  if (dueCount > 0) {
    return {
      label: "Due for review",
      headline: `${dueCount} ${dueCount === 1 ? "question" : "questions"} waiting for re-attempt`,
      blurb: "Clearing your blind-review queue is the highest-leverage thing you can do right now.",
      cta: "Start review session",
      href: "#/review",
    };
  }
  const lesson = nextLesson();
  if (!state.lessonProgress[lesson.id]?.complete) {
    return {
      label: "Today's lesson",
      headline: lesson.title,
      blurb: lesson.summary || "Complete this lesson, then drill the hardest question type you saw.",
      cta: "Open lesson",
      href: `#/learn/${lesson.id}`,
    };
  }
  const { weak, preset } = adaptiveDrillTarget();
  return {
    label: "Adaptive drill",
    headline: `${weak.family} · ${accuracyForFamily(weak.family) || 0}% accuracy`,
    blurb: "Your weakest family right now. 6 targeted questions, then blind-review any misses.",
    cta: `Drill ${weak.family}`,
    href: `#/practice/drill/${preset.id}`,
  };
}

function questionsForLesson(lessonId) {
  return data.questionBank.filter((question) => question.lessonIds.includes(lessonId)).slice(0, 5);
}

function findQuestionTypeLesson(id) {
  return (data.questionTypeLessons || []).find((lesson) => lesson.id === id);
}

function familyQuestions(family) {
  return data.questionBank.filter((question) => question.family === family);
}

function familyAttempts(family) {
  return familyQuestions(family).filter((question) => state.attempts[question.id]);
}

function familyTrapSummary(family) {
  const misses = state.journal.filter((entry) => entry.family === family);
  if (!misses.length) return "No misses logged yet. Use the guided questions first so the system can detect trap patterns.";
  const grouped = misses.reduce((acc, entry) => {
    acc[entry.trapPattern] = (acc[entry.trapPattern] || 0) + 1;
    return acc;
  }, {});
  const top = Object.entries(grouped).sort((a, b) => b[1] - a[1])[0];
  return `Most common trap so far: ${top[0]} (${top[1]} miss${top[1] > 1 ? "es" : ""}).`;
}

function buildMissAnalysis(question) {
  const templates = {
    "RC Structure": "You likely tracked topic instead of passage movement. Slow down and label paragraph jobs before choosing.",
    "RC Inference": "You likely picked an answer stronger than the passage proved. Recheck force words and stay modest.",
    "RC Attitude": "You likely misread the author's tone. Translate the attitude into plain English before looking at choices.",
    "RC Function": "You likely described content instead of function. Ask why the paragraph is there.",
    "RC Main Point": "You likely chose a vivid detail over the passage mission. Ask what the whole passage was trying to do.",
    Flaw: "You likely saw the topic but not the actual reasoning break. Say the flaw in ordinary language first.",
    Assumption: "You likely chose something helpful but not required. Negate the answer and see whether the argument collapses.",
    Strengthen: "You likely chose a relevant fact that did not repair the exact gap. Name the bridge before reading choices.",
    Weaken: "You likely attacked the topic instead of the bridge. Ask what specific leap the author is making.",
    "Conditional Logic": "You likely reversed or overread the rule. Rebuild the conditional and then test the contrapositive.",
    "Main Point": "You likely selected support instead of the conclusion. Ask what the author was trying to prove.",
    "Role / Method / Technique": "You likely focused on wording rather than sentence job. Label the role before checking answers.",
    "Must Be True": "You likely chose something plausible but too strong. Pick only what the stimulus fully forces.",
    Evaluate: "You likely chose a relevant fact instead of the hinge issue. Ask what answer would matter either way.",
    "Resolve / Explain": "You likely explained one side of the paradox but not both. Keep both facts true and reconcile them.",
    Principle: "You likely chose a good-sounding slogan instead of the exact decision rule the argument uses.",
    "Parallel Flaw": "You likely matched topic instead of logic. Strip the subject matter and compare bare reasoning form.",
    "Point at Issue": "You likely chose a claim only one speaker addressed. Test each answer as a yes/no disagreement.",
  };
  return templates[question.family] || "You likely missed the exact reasoning task. Slow down, classify the family, and name the bridge or burden before answering.";
}

function familyWrongChoiceSummary(family) {
  const entries = state.journal.filter((entry) => entry.family === family && entry.wrongChoiceText);
  const grouped = entries.reduce((acc, entry) => {
    acc[entry.wrongChoiceText] = (acc[entry.wrongChoiceText] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(grouped)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);
}

function buildDrillAnalysis(family) {
  const attempts = familyAttempts(family);
  const misses = state.journal.filter((entry) => entry.family === family);
  const correct = attempts.filter((item) => state.attempts[item.id]?.correct).length;
  const accuracy = attempts.length ? Math.round((correct / attempts.length) * 100) : 0;
  const trapGroups = misses.reduce((acc, entry) => {
    acc[entry.trapPattern] = (acc[entry.trapPattern] || 0) + 1;
    return acc;
  }, {});
  const topTraps = Object.entries(trapGroups)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([trap, count]) => ({
      trap,
      count,
      share: misses.length ? Math.round((count / misses.length) * 100) : 0,
      advice: `Use the checklist before you choose. This trap keeps winning when you skip the burden and select on familiarity.`,
    }));
  const wrongChoices = familyWrongChoiceSummary(family);
  const timedAttempts = attempts.filter((item) => state.attempts[item.id]?.timeSeconds != null);
  const avgTime = timedAttempts.length
    ? Math.round(timedAttempts.reduce((sum, item) => sum + state.attempts[item.id].timeSeconds, 0) / timedAttempts.length)
    : null;
  const targetTime = familyQuestions(family)[0]?.timingTarget ?? 80;
  const highConfidenceMisses = misses.filter((entry) => entry.confidence === "high").length;
  const primaryTrap = topTraps[0]?.trap;
  const dominantWrongChoice = wrongChoices[0]?.[0];
  const diagnosis = primaryTrap
    ? `Your misses cluster around ${primaryTrap.toLowerCase()}, which usually means the process is breaking before the final comparison. Slow down and force the method before you evaluate choices.`
    : "Not enough misses yet to diagnose a stable pattern. Use the guided questions first so the system has real behavior to analyze.";
  const methodFix = attempts.length
    ? accuracy < 60
      ? "You are likely skipping the first method step and letting answer choices define the task for you."
      : accuracy < 80
        ? "You see the family, but the second method step is still inconsistent under pressure."
        : "Your structure is working. Keep drilling until the trap patterns stop feeling tempting."
    : "No attempts logged yet. Start with Step 3 so the analysis can detect where the process breaks.";

  return {
    attempts: attempts.length,
    accuracy,
    topTraps,
    wrongChoices,
    highConfidenceMisses,
    diagnosis,
    methodFix,
    dominantWrongChoice,
    recentMisses: misses.slice(0, 5),
    avgTime,
    targetTime,
  };
}

function qtScenesForPhase(lesson, phase) {
  return phase === "step2" ? lesson.step2Scenes : lesson.step1Scenes;
}

function ensureQtPlayback(lesson, phase = qtPlaybackState.phase || "step1") {
  if (qtPlaybackState.lessonId !== lesson.id || qtPlaybackState.phase !== phase) {
    qtPlaybackState = { lessonId: lesson.id, phase, sceneIndex: 0, playing: false };
  }
}

function stopQtPlayback() {
  if (qtPlaybackTimer) {
    clearTimeout(qtPlaybackTimer);
    qtPlaybackTimer = null;
  }
  qtPlaybackState.playing = false;
}

function scheduleQtPlayback(lesson) {
  stopQtPlayback();
  if (!qtPlaybackState.playing) return;
  const scenes = qtScenesForPhase(lesson, qtPlaybackState.phase);
  const scene = scenes[qtPlaybackState.sceneIndex];
  const duration = state.settings.reducedMotion ? 0 : scene?.seconds ?? 70000;
  qtPlaybackTimer = setTimeout(() => {
    if (qtPlaybackState.sceneIndex < scenes.length - 1) {
      qtPlaybackState.sceneIndex += 1;
      renderApp();
    } else {
      stopQtPlayback();
      renderApp();
    }
  }, duration);
}

function renderQtVideoPanel(lesson, phase, label) {
  ensureQtPlayback(lesson, phase);
  const scenes = qtScenesForPhase(lesson, phase);
  const videoMeta = phase === "step2" ? lesson.step2Video : lesson.step1Video;
  const active = scenes[qtPlaybackState.sceneIndex];
  const progressPercent = `${((qtPlaybackState.sceneIndex + 1) / scenes.length) * 100}%`;

  return `
    <section class="qt-video">
      <div class="lesson-video__player">
        <div class="panel__head">
          <div>
            <p class="mini-card__label">${label}</p>
            <h4>${videoMeta.title}</h4>
          </div>
          <span class="status-pill">${videoMeta.runtime}</span>
        </div>
        <p>${videoMeta.focus}</p>
        <div class="video-stage qt-video__stage">
          <p class="mini-card__label">Now playing</p>
          <h4>${active.title}</h4>
          <p>${active.explanation}</p>
          <div class="video-stage__story">${active.storyboard}</div>
          <div class="video-stage__cue">${active.actionCue}</div>
        </div>
        <div class="video-controls">
          <button class="button button--ghost" data-qt-video-nav="prev" data-qt-phase="${phase}" ${qtPlaybackState.sceneIndex === 0 ? "disabled" : ""}>Back</button>
          <button class="button button--primary" data-qt-video-toggle="true" data-qt-phase="${phase}">${qtPlaybackState.playing ? "Pause video" : "Play video"}</button>
          <button class="button button--ghost" data-qt-video-nav="next" data-qt-phase="${phase}" ${qtPlaybackState.sceneIndex === scenes.length - 1 ? "disabled" : ""}>Next</button>
        </div>
        <div class="video-progress">
          <span style="width:${progressPercent}"></span>
        </div>
        <div class="video-timeline">
          ${scenes
            .map(
              (scene, index) => `
                <button class="qt-timeline-dot ${index === qtPlaybackState.sceneIndex ? "is-active" : ""}" data-qt-scene="${index}" data-qt-phase="${phase}" aria-label="Open ${scene.title}">
                  ${index + 1}
                </button>
              `,
            )
            .join("")}
        </div>
      </div>
      <div class="lesson-video__chapters">
        ${scenes
          .map(
            (scene, index) => `
              <section class="video-chapter ${index === qtPlaybackState.sceneIndex ? "is-active" : ""}">
                <strong>0${index + 1}. ${scene.title}</strong>
                <span>${Math.max(1, Math.round((scene.seconds || 60) / 60))} min</span>
                <p>${scene.explanation}</p>
              </section>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderStepIndicator(currentStep) {
  const steps = ["Video 1", "Video 2", "Guided Questions", "Mastery Drill"];
  return `
    <div class="step-indicator">
      ${steps
        .map((label, i) => {
          const num = i + 1;
          const isActive = num === currentStep;
          const isDone = num < currentStep;
          return `
            ${num > 1 ? `<div class="step-indicator__line ${isDone ? "is-done" : ""}"></div>` : ""}
            <div class="step-indicator__item ${isActive ? "is-active" : ""} ${isDone ? "is-done" : ""}">
              <div class="step-indicator__dot">${isDone ? "✓" : num}</div>
              <span class="step-indicator__label">${label}</span>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function routeInfo() {
  const hash = location.hash || "#/dashboard";
  const parts = hash.replace(/^#\//, "").split("/");
  return {
    page: parts[0] || "dashboard",
    subtype: parts[1] || null,
    id: parts[2] || parts[1] || null,
  };
}

function renderApp() {
  applySettings();
  renderNav();
  renderSettings();
  renderToday();
  renderNoticeLayer();
  const route = routeInfo();
  document.body.dataset.route = route.page;
  document.body.classList.toggle("test-day-active", route.page === "practice" && route.subtype === "test-day");
  if (notificationBell) {
    const unread = unreadNotifications();
    notificationBell.textContent = String(unread);
    notificationBell.setAttribute("aria-label", `${unread} unread notification${unread === 1 ? "" : "s"}`);
  }
  if (subscribeCta) subscribeCta.classList.toggle("is-active", state.subscriptionIntent === "open");
  if (notificationBell) notificationBell.classList.toggle("is-active", state.notificationsOpen);
  if (profileChip) profileChip.classList.toggle("is-active", state.profileMenuOpen);
  if (!document.querySelector(".sidebar-backdrop")) {
    const backdrop = document.createElement("div");
    backdrop.className = "sidebar-backdrop";
    backdrop.addEventListener("click", () => document.body.classList.remove("sidebar-open"));
    document.body.appendChild(backdrop);
  }
  document.body.classList.remove("sidebar-open");
  renderRouteMeta(route);
  renderPage(route);
  wireNoticeLayer();
  animateCountups();
}

function applySettings() {
  document.body.classList.toggle("theme-dark", state.settings.darkMode);
  document.body.classList.toggle("theme-contrast", state.settings.highContrast);
  document.body.classList.toggle("theme-ugly", state.settings.uglyMode);
  document.body.classList.toggle("theme-dyslexia", state.settings.dyslexiaFont);
  document.body.classList.toggle("theme-spacious", state.settings.focusSpacing);
  document.body.classList.toggle("theme-reduced-motion", state.settings.reducedMotion);
}

function renderNav() {
  const route = routeInfo().page;
  const subitems = {
    dashboard: ["Today", "Ratings", "Notifications"],
    learn: ["Lessons", "You Try", "Recorded videos"],
    practice: ["Adaptive", "Timed", "Full PT"],
    review: ["Blind Review", "SRS", "Explanations"],
    plan: ["Onboarding", "LawHub", "Import"],
    live: ["30-min classes", "AI teacher", "Recordings"],
    coach: ["Tutor chat", "Admissions", "Strategy"],
  };
  navRail.innerHTML = data.navigation
    .map(
      (item) => `
        <a class="nav__link ${route === item.route ? "is-active" : ""}" href="#/${item.route}">
          <span>${item.label}</span>
          <small>${(subitems[item.route] || []).join(" · ")}</small>
        </a>
      `,
    )
    .join("");
}

function wireNoticeLayer() {
  noticeMount?.querySelectorAll("[data-cookie-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      state.cookieConsent = button.dataset.cookieChoice;
      saveState();
      renderApp();
    });
  });
  noticeMount?.querySelector("[data-close-subscribe]")?.addEventListener("click", () => {
    state.subscriptionIntent = "";
    saveState();
    renderApp();
  });
  noticeMount?.querySelector("[data-mark-notifications-read]")?.addEventListener("click", () => {
    state.notifications = state.notifications.map((item) => ({ ...item, read: true }));
    state.notificationsOpen = false;
    saveState();
    renderApp();
  });
  noticeMount?.querySelector("[data-close-command]")?.addEventListener("click", () => {
    state.commandPaletteOpen = false;
    saveState();
    renderApp();
  });
  noticeMount?.querySelector("[data-close-profile]")?.addEventListener("click", () => {
    state.profileMenuOpen = false;
    saveState();
    renderApp();
  });
  noticeMount?.querySelectorAll("[data-profile-link]").forEach((link) => {
    link.addEventListener("click", () => {
      state.profileMenuOpen = false;
      saveState();
    });
  });
  noticeMount?.querySelectorAll("[data-command-link]").forEach((link) => {
    link.addEventListener("click", () => {
      state.commandPaletteOpen = false;
      saveState();
    });
  });
}

function renderSettings() {
  const settingMeta = {
    dyslexiaFont: "Switches reading text to a friendlier fallback for letter distinction.",
    focusSpacing: "Adds more breathing room between lines, cards, and study blocks.",
    darkMode: "Uses a darker color system for lower-glare studying.",
    highContrast: "Strengthens borders and separation for easier scanning.",
    uglyMode: "Uses louder colors so structure stands out over polish.",
    predictionMode: "Keeps the interface focused on anticipating the answer before choices.",
    reducedMotion: "Turns off autoplay-style motion and nonessential transitions.",
  };
  settingsPanel.innerHTML = data.settings
    .map(
      (setting) => `
        <label class="setting-toggle ${state.settings[setting.id] ? "is-on" : ""}">
          <span class="setting-toggle__copy">
            <strong>${setting.label}</strong>
            <small>${settingMeta[setting.id] || "Personalize the way the app feels while you study."}</small>
          </span>
          <span class="setting-toggle__control">
            <input
              type="checkbox"
              data-setting="${setting.id}"
              aria-label="${setting.label}"
              ${state.settings[setting.id] ? "checked" : ""}
            />
            <span class="setting-toggle__switch" aria-hidden="true"></span>
          </span>
        </label>
      `,
    )
    .join("");

  settingsPanel.querySelectorAll("[data-setting]").forEach((input) => {
    input.addEventListener("change", () => {
      state.settings[input.dataset.setting] = input.checked;
      saveState();
      renderApp();
    });
  });
}

function renderToday() {
  const weak = weakestFamily();
  const lesson = nextLesson();
  todayCard.innerHTML = `
    <section class="today-stack">
      <div class="today-pill">
        <span>Next lesson</span>
        <strong>${lesson.title}</strong>
      </div>
      <div class="today-pill">
        <span>Weakest skill</span>
        <strong>${weak.family}</strong>
      </div>
      <div class="today-pill">
        <span>Blind review gap</span>
        <strong>${data.analyticsSnapshots.blindReviewGap} pts</strong>
      </div>
      <a class="button button--ghost sidebar-card__action" href="#/learn/${lesson.id}">Resume study path</a>
    </section>
  `;
}

function renderRouteMeta(route) {
  if (route.page === "practice" && route.subtype === "test-day") {
    routeEyebrow.textContent = "Test-Day Mode";
    routeTitle.textContent = "LSAT Practice Test";
    return;
  }
  if (route.page === "review" && route.subtype === "preptest") {
    routeEyebrow.textContent = "PrepTest Results";
    routeTitle.textContent = "PrepTest 130 Review";
    return;
  }
  if (route.page === "practice" && route.subtype === "rc") {
    const passage = route.id && route.id !== "rc" ? (data.rcPassages || []).find((p) => p.id === route.id) : null;
    routeEyebrow.textContent = "RC Passage Practice";
    routeTitle.textContent = passage ? passage.title : "Passage Library";
    return;
  }
  const nav = data.navigation.find((item) => item.route === route.page) || data.navigation[0];
  routeEyebrow.textContent = nav.eyebrow;
  const questionTypeLesson = route.id ? findQuestionTypeLesson(route.id) : null;
  routeTitle.textContent =
    route.page === "learn" && route.id && route.subtype !== "content"
      ? questionTypeLesson?.title || (data.lessons.find((lesson) => lesson.id === route.id) || {}).title || "Learn"
      : nav.label;
}

function renderPage(route) {
  stopLessonPlayback();
  stopTestDayTimer();
  heroMount.innerHTML = "";
  const pageRenderers = {
    dashboard: renderDashboardPage,
    learn: renderLearnPage,
    practice: renderPracticePage,
    review: renderReviewPage,
    plan: renderPlanPage,
    live: renderLivePage,
    coach: renderCoachPage,
  };
  pageMount.innerHTML = (pageRenderers[route.page] || renderDashboardPage)(route);
  wireInteractions(route);
  if (route.page === "practice" && route.subtype === "test-day") {
    startTestDayTimer();
  }
}

function renderNoticeLayer() {
  if (!noticeMount) return;
  const unread = state.notifications.filter((item) => !item.read).slice(0, 3);
  noticeMount.innerHTML = `
    ${state.subscriptionIntent === "open" ? `
      <aside class="floating-panel subscribe-panel">
        <div class="panel__head">
          <h3>JessiPreps tiers</h3>
          <button class="icon-button" type="button" data-close-subscribe aria-label="Close subscribe panel">×</button>
        </div>
        <div class="tier-grid">
          <section><strong>Core</strong><span>Self-study dashboard, lessons, drills, review, and plan.</span><a href="#/dashboard" data-close-subscribe>Open Core</a></section>
          <section><strong>Live</strong><span>Soft-gated 30-minute AI-teacher classes and recordings.</span><a href="#/live" data-close-subscribe>Preview Live</a></section>
          <section><strong>Coach</strong><span>Tutor messaging, admissions strategy, and personalized next steps.</span><a href="#/coach" data-close-subscribe>Preview Coach</a></section>
        </div>
        <p class="microcopy">Live and Coach are soft-gated previews: students can see the value, reserve, and request support before paid access is turned on.</p>
      </aside>
    ` : ""}
    ${state.notificationsOpen ? `
      <aside class="floating-panel notification-panel">
        <div class="panel__head">
          <h3>Notifications</h3>
          <button class="icon-button" type="button" data-mark-notifications-read aria-label="Mark notifications read">✓</button>
        </div>
        ${
          unread.length
            ? unread.map((item) => `<section class="notice-item"><strong>${item.title}</strong><p>${item.body}</p></section>`).join("")
            : `<p class="muted">You do not have any notifications yet. Complete a sprint or save a section tool and this will update.</p>`
        }
      </aside>
    ` : ""}
    ${state.commandPaletteOpen ? `
      <aside class="command-palette" role="dialog" aria-label="Command palette">
        <div class="panel__head">
          <h3>Command palette</h3>
          <button class="icon-button" type="button" data-close-command aria-label="Close command palette">×</button>
        </div>
        <a href="#/practice/drill/${adaptiveDrillTarget().preset.id}" data-command-link><strong>Start adaptive drill</strong><span>${adaptiveDrillTarget().weak.family}</span></a>
        <a href="#/practice/test-day" data-command-link><strong>Open test-day simulator</strong><span>35-minute sections, flags, review, and settings</span></a>
        <a href="#/learn/${nextLesson().id}" data-command-link><strong>Open last lesson</strong><span>${nextLesson().title}</span></a>
        <a href="#/review/preptest/pt130" data-command-link><strong>Review PrepTest 130</strong><span>Results, timing, Blind Review</span></a>
        <a href="#/plan" data-command-link><strong>Log LawHub result</strong><span>Official score companion</span></a>
      </aside>
    ` : ""}
    ${state.profileMenuOpen ? `
      <aside class="floating-panel profile-panel" role="dialog" aria-label="Profile menu">
        <div class="panel__head">
          <h3>Jessica's study profile</h3>
          <button class="icon-button" type="button" data-close-profile aria-label="Close profile menu">×</button>
        </div>
        <section class="notice-item"><strong>Goal</strong><p>${activeProfile().currentScore} -> ${activeProfile().goalScore} · ${activeProfile().dailyMinutes} min/day</p></section>
        <a class="button button--ghost" href="#/plan" data-profile-link>Update plan</a>
        <a class="button button--ghost" href="#/review" data-profile-link>Open journal</a>
      </aside>
    ` : ""}
    ${!state.cookieConsent ? `
      <aside class="cookie-panel">
        <p><strong>Cookies and privacy.</strong> JessiPreps stores progress locally in this browser. It does not store official LSAT question text.</p>
        <div>
          <button class="button button--ghost" type="button" data-cookie-choice="reject">Reject all</button>
          <button class="button button--primary" type="button" data-cookie-choice="accept">Accept local saves</button>
        </div>
      </aside>
    ` : ""}
  `;
}

function renderDashboardHero() {
  const adaptive = adaptiveDrillTarget();
  const profile = activeProfile();
  return `
    <section class="hero-card">
      <div class="hero-copy">
        <p class="eyebrow">JessiPreps LSAT Command Center</p>
        <h3>Turn your ${profile.currentScore} into the next score jump with one focused study sprint at a time.</h3>
        <p>Today: review misses, drill ${adaptive.weak.family}, and run one timed LR checkpoint. Skipped questions are strategy. Accuracy before speed.</p>
        <div class="hero-actions">
          <a class="button button--primary" href="#/practice/drill/${adaptive.preset.id}">Start today's sprint</a>
          <a class="button button--ghost" href="#/review">Review misses</a>
          <a class="button button--ghost" href="#/plan">Open LawHub companion</a>
        </div>
      </div>
      <div class="hero-metrics">
        <article><span>Streak</span><strong>${streakDays()} days</strong></article>
        <article><span>LR mastery</span><strong>${masteryRating("LR")}/100</strong></article>
        <article><span>RC mastery</span><strong>${masteryRating("RC")}/100</strong></article>
      </div>
    </section>
  `;
}

function renderDashboardPage() {
  const weak = weakestFamily();
  const adaptive = adaptiveDrillTarget();
  const lesson = nextLesson();
  const trend = scoreTrend();
  const testDays = daysUntilTest();
  const profile = activeProfile();
  const dueEntries = state.journal.filter(
    (entry) => !entry.blindReviewOutcome || entry.blindReviewOutcome === "pending"
  );
  const dueCount = dueEntries.length;
  const lrBank = allQuestions().filter((question) => question.section === "LR");
  const rcBank = allQuestions().filter((question) => question.section === "RC");
  return `
    <section class="dashboard-overview">
      <article class="dashboard-card dashboard-card--hero interactive-card">
        <div class="dashboard-card__head">
          <div>
            <p class="mini-card__label">Next best move</p>
            <h3>Start today's 12-minute LSAT sprint.</h3>
          </div>
          <span class="status-pill">${lastSavedLabel()}</span>
        </div>
        <p>6 ${weak.family} questions -> Blind Review misses -> journal one rule. One rule per miss.</p>
        <div class="dashboard-actions">
          <a class="button button--primary sprint-cta" href="#/practice/drill/${adaptive.preset.id}">Start today's sprint</a>
          <a class="button button--ghost" href="#/practice/timed">Timed section</a>
        </div>
        <div class="hero-illustration" aria-hidden="true"><span>LR</span><span>RC</span><span>BR</span></div>
      </article>

      <article class="metric-tile metric-tile--green interactive-card">
        <p class="mini-card__label">Readiness</p>
        <h3 data-countup-value="${data.appMeta.readinessScore}" data-countup-suffix="%">${data.appMeta.readinessScore}%</h3>
        <p>Study quality ${studyQualityScore()}/100</p>
        ${renderSparkline([{ score: 58 }, { score: 64 }, { score: 61 }, { score: data.appMeta.readinessScore }])}
      </article>
      <article class="metric-tile metric-tile--gold interactive-card">
        <p class="mini-card__label">Scaled score</p>
        <h3 data-countup-value="${data.appMeta.scaledScore}">${data.appMeta.scaledScore}</h3>
        <p>Range ${data.appMeta.scaledScore - scoreVariance()}-${data.appMeta.scaledScore + scoreVariance()}</p>
        ${renderSparkline(trend)}
      </article>
      <article class="metric-tile metric-tile--navy interactive-card">
        <p class="mini-card__label">Blind Review gap</p>
        <h3 data-countup-value="${data.analyticsSnapshots.blindReviewGap}" data-countup-suffix=" pts">${data.analyticsSnapshots.blindReviewGap} pts</h3>
        <p>${dueCount} due today</p>
        ${renderDonut(Math.max(8, 100 - data.analyticsSnapshots.blindReviewGap * 3), "recovered", `${Math.max(0, 100 - data.analyticsSnapshots.blindReviewGap * 3)}%`)}
      </article>

      <article class="dashboard-card dashboard-card--flow interactive-card">
        <div class="dashboard-card__head">
          <h3>Today Flow</h3>
          <span class="status-pill">Learn · Drill · Review · Log · Stop</span>
        </div>
        <div class="today-flow-grid today-stepper">
          <a href="#/learn/${lesson.id}"><i>1</i><strong>Learn</strong><span>${lesson.title}</span></a>
          <a href="#/practice/drill/${adaptive.preset.id}"><i>2</i><strong>Drill</strong><span>6 ${weak.family} questions</span></a>
          <a href="#/review"><i>3</i><strong>Review</strong><span>Blind Review misses</span></a>
          <a href="#/review"><i>4</i><strong>Log</strong><span>One reusable rule</span></a>
          <a href="#/dashboard"><i>5</i><strong>Stop</strong><span>Protect tomorrow's streak</span></a>
        </div>
      </article>

      <article class="dashboard-card dashboard-card--mix interactive-card">
        <div class="dashboard-card__head">
          <h3>Question mix</h3>
          <a class="text-link" href="#/practice">Practice</a>
        </div>
        <div class="donut-row">
          ${renderDonut(Math.round((lrBank.length / allQuestions().length) * 100), "LR", lrBank.length)}
          ${renderDonut(Math.round((rcBank.length / allQuestions().length) * 100), "RC", rcBank.length)}
        </div>
        <div class="donut-legend"><span><i></i>Colored arc = share of ${allQuestions().length} total questions</span></div>
        <p class="microcopy">Original practice only. Official LSAT question text stays in LawHub.</p>
      </article>

      <article class="dashboard-card dashboard-card--activity interactive-card">
        <div class="dashboard-card__head">
          <h3>Learning Activity</h3>
          <span class="status-pill">This week</span>
        </div>
        ${renderActivityBars()}
        <p class="microcopy">Daily target: ${profile.dailyMinutes} min. Next LSAT: ${testDays === null ? "set a date" : `${testDays} days`}.</p>
      </article>

      <article class="dashboard-card dashboard-card--accuracy interactive-card">
        <div class="dashboard-card__head">
          <h3>Accuracy grids</h3>
          <span class="status-pill">7Sage-style</span>
        </div>
        <div class="grid-stack">
          <section><strong>Logical Reasoning</strong>${renderAccuracyGrid(lrBank, 32)}</section>
          <section><strong>Reading Comprehension</strong>${renderAccuracyGrid(rcBank, 32)}</section>
        </div>
      </article>

      <article class="dashboard-card dashboard-card--recent interactive-card">
        <div class="dashboard-card__head">
          <h3>Recent activity</h3>
          <a class="text-link" href="#/review/preptest/pt130">PrepTest results</a>
        </div>
        <div class="activity-feed">
          <a href="#/learn/${lesson.id}"><strong>Continue</strong><span>${lesson.title}</span></a>
          <a href="#/practice/drill/${adaptive.preset.id}"><strong>Adaptive drill</strong><span>${adaptive.weak.family}</span></a>
          <a href="#/review"><strong>Blind Review</strong><span>${dueCount} item${dueCount === 1 ? "" : "s"} due</span></a>
        </div>
      </article>
    </section>
  `;
}

function renderLearnPage(route) {
  const questionTypeLesson = route.id ? findQuestionTypeLesson(route.id) : null;
  if (questionTypeLesson) {
    return renderQuestionTypeLesson(questionTypeLesson);
  }
  if (route.id && route.id !== "content") {
    const lesson = data.lessons.find((item) => item.id === route.id) || nextLesson();
    return renderLessonPlayer(lesson);
  }
  const units = lessonUnits();
  const featured = nextLesson();
  return `
    <article class="panel panel--wide syllabus-shell">
      <div class="syllabus-header">
        <div>
          <p class="mini-card__label">Syllabus</p>
          <h3>Structured LSAT lesson path</h3>
          <p>Collapse units, resume the next lesson, and jump into linked practice without scrolling through every lesson at once.</p>
        </div>
        <a class="button button--primary" href="#/learn/${featured.id}">Continue: ${featured.title}</a>
      </div>
      <div class="progress-ring-row">
        ${units.slice(0, 4).map((unit) => `
          <section>
            ${renderDonut(unitProgress(unit.lessons), unit.title, `${unitProgress(unit.lessons)}%`)}
          </section>
        `).join("")}
      </div>
      <div class="continue-banner">
        <strong>${featured.title}</strong>
        <span>Ready to start · ${data.lessons.length} flagship lessons unlocked · ${featured.statusLabel}</span>
        <a class="text-link" href="#/learn/${featured.id}">Resume</a>
      </div>
      <div class="syllabus-layout">
        <aside class="syllabus-units">
          ${units.map((unit, index) => `
            <a href="#unit-${unit.id}" class="${index === 0 ? "is-active" : ""}">
              <strong>${unit.title}</strong>
              <span>${unitProgress(unit.lessons)}% · ${unit.lessons.length} lessons</span>
            </a>
          `).join("")}
        </aside>
        <div class="syllabus-lessons">
          ${units.map((unit, index) => `
            <details id="unit-${unit.id}" class="unit-block" ${index < 2 ? "open" : ""}>
              <summary>
                <strong>${unit.title}</strong>
                <span>${unitProgress(unit.lessons)}% complete</span>
              </summary>
              <div class="lesson-row-list">
                ${unit.lessons.map((lesson) => `
                  <a class="lesson-row interactive-card" href="#/learn/${lesson.id}">
                    <span class="lesson-row__status">${lessonStatusIcon(lesson)}</span>
                    <span><strong>${lesson.title}</strong><small>${lesson.summary}</small></span>
                    <em>${Math.max(8, lesson.scenes?.length * 6 || 18)}m</em>
                    <b>↗</b>
                  </a>
                `).join("")}
              </div>
            </details>
          `).join("")}
        </div>
      </div>
    </article>
    <article class="panel panel--wide">
      <div class="panel__head">
        <h3>Question-Type Academy</h3>
      </div>
      <p>Each question family now has a 4-step lesson path: two video modules, guided method questions, and a mastery drill with trap analysis.</p>
      <div class="card-grid card-grid--three">
        ${(data.questionTypeLessons || [])
          .map(
            (lesson) => `
              <a class="lesson-card" href="#/learn/${lesson.id}">
                <p class="mini-card__label">${lesson.section} · ${lesson.family}</p>
                <h4>${lesson.title}</h4>
                <p>${lesson.summary}</p>
                <span class="status-pill ${state.questionTypeProgress[lesson.id]?.complete ? "is-done" : ""}">${state.questionTypeProgress[lesson.id]?.complete ? "Completed" : "4-step lesson"}</span>
              </a>
            `,
          )
          .join("")}
      </div>
    </article>
  `;
}

function buildLessonVideo(lesson) {
  const chapters = [
    { title: "Concept setup", minutes: 1, seconds: 45, summary: lesson.scenes[0]?.explanation || lesson.summary },
    { title: "Core framework", minutes: 2, seconds: 70, summary: lesson.scenes[1]?.explanation || lesson.summary },
    { title: "Worked example", minutes: 2, seconds: 75, summary: lesson.workedExample.reasoning },
    { title: "Trap answer breakdown", minutes: 1, seconds: 55, summary: lesson.trapExplanation },
    { title: "Practice launch", minutes: 1, seconds: 45, summary: lesson.scenes[lesson.scenes.length - 1]?.explanation || "Move into mastery practice." },
  ];

  const runtime = `${chapters.reduce((sum, chapter) => sum + chapter.minutes, 0)} min`;
  return { runtime, chapters };
}

function ensureLessonPlayback(lesson) {
  if (lessonPlaybackState.lessonId !== lesson.id) {
    lessonPlaybackState = { lessonId: lesson.id, sceneIndex: 0, playing: false };
  }
}

function stopLessonPlayback() {
  if (lessonPlaybackTimer) {
    clearTimeout(lessonPlaybackTimer);
    lessonPlaybackTimer = null;
  }
  lessonPlaybackState.playing = false;
}

function scheduleLessonPlayback(lesson) {
  stopLessonPlayback();
  if (!lessonPlaybackState.playing) return;
  const scene = lesson.scenes[lessonPlaybackState.sceneIndex];
  const duration = scene?.seconds ?? 1800;
  lessonPlaybackTimer = setTimeout(() => {
    if (lessonPlaybackState.sceneIndex < lesson.scenes.length - 1) {
      lessonPlaybackState.sceneIndex += 1;
      renderApp();
    } else {
      stopLessonPlayback();
      renderApp();
    }
  }, duration);
}

function renderLessonPlayer(lesson) {
  ensureLessonPlayback(lesson);
  const progress = state.lessonProgress[lesson.id];
  const linkedQuestions = questionsForLesson(lesson.id);
  const activeScene = lesson.scenes[lessonPlaybackState.sceneIndex];
  const progressPercent = `${((lessonPlaybackState.sceneIndex + 1) / lesson.scenes.length) * 100}%`;
  // After this HTML is inserted, mount the rendered MP4 (if present) at
  // the top of the player. If the MP4 isn't on disk yet, this is a silent
  // no-op and the animated lesson UI below remains the visible state.
  if (typeof window !== "undefined" && window.JESSI_LESSON_VIDEOS) {
    const targetId = lesson.id;
    requestAnimationFrame(() => {
      const slot = document.querySelector(`[data-mp4-slot="${targetId}"]`);
      if (slot) {
        window.JESSI_LESSON_VIDEOS.mountLessonVideo(slot, targetId, { prepend: true });
      }
    });
  }
  return `
    <article class="panel panel--wide lesson-detail-shell">
      <aside class="lesson-toc">
        <button class="is-active" type="button" data-scroll-target="intro">Intro</button>
        <button type="button" data-scroll-target="concept">Concept</button>
        <button type="button" data-scroll-target="example">Worked Example</button>
        <button type="button" data-scroll-target="traps">Trap Warnings</button>
        <button type="button" data-scroll-target="mastery">Mastery Drill</button>
        <button type="button" data-scroll-target="reflection">Reflection</button>
      </aside>
      <main class="lesson-content">
        <nav class="lesson-breadcrumb" aria-label="Lesson breadcrumb">
          <a href="#/learn">Learn</a>
          <span>/</span>
          <a href="#/learn">${lesson.track}</a>
          <span>/</span>
          <strong>${lesson.title}</strong>
        </nav>
        <div class="panel__head">
          <div>
            <p class="mini-card__label">${lesson.track}</p>
            <h3>${lesson.title}</h3>
          </div>
          <div class="lesson-save-stack">
            <span class="status-pill ${progress.complete ? "is-done" : ""}">${progress.complete ? "Mastered" : `${progress.masteryWins}/${lesson.masteryThreshold} mastery wins`}</span>
            <span class="status-pill" title="Auto-saved lesson progress and local practice data.">${lastSavedLabel()}</span>
          </div>
        </div>
        <div class="lesson-mp4-slot" data-mp4-slot="${lesson.id}"></div>
        <details id="intro" class="lesson-accordion" open>
          <summary>Intro and video</summary>
          <p>${lesson.summary}</p>
          <div class="video-stage">
            <p class="mini-card__label">Now playing</p>
            <h4>${activeScene.title}</h4>
            <p>${activeScene.explanation}</p>
            <div class="video-stage__story">${activeScene.storyboard}</div>
            <div class="video-stage__cue">${activeScene.actionCue}</div>
          </div>
          <div class="video-controls">
            <button class="button button--ghost" data-video-nav="prev" ${lessonPlaybackState.sceneIndex === 0 ? "disabled" : ""}>Back</button>
            <button class="button button--primary" data-video-toggle="true">${lessonPlaybackState.playing ? "Pause lesson" : "Play lesson"}</button>
            <button class="button button--ghost" data-video-nav="next" ${lessonPlaybackState.sceneIndex === lesson.scenes.length - 1 ? "disabled" : ""}>Next</button>
          </div>
          <div class="video-progress"><span style="width:${progressPercent}"></span></div>
        </details>
        <details id="concept" class="lesson-accordion" open>
          <summary>Concept</summary>
          <div class="scene-stack">${lesson.scenes.slice(0, 2).map((scene) => `<section class="scene-card"><h4>${scene.title}</h4><p>${scene.explanation}</p><div class="scene-card__cue">${scene.actionCue}</div></section>`).join("")}</div>
        </details>
        <details id="example" class="lesson-accordion">
          <summary>Worked Example</summary>
          <p><strong>Prompt:</strong> ${lesson.workedExample.prompt}</p>
          <p>${lesson.workedExample.reasoning}</p>
        </details>
        <details id="traps" class="lesson-accordion">
          <summary>Trap Warnings</summary>
          <p>${lesson.trapExplanation}</p>
        </details>
        <details id="mastery" class="lesson-accordion" open>
          <summary>Knowledge check + mastery drill</summary>
          ${linkedQuestions[0] ? renderQuestionCard(linkedQuestions[0], "lesson-check") : `<p class="muted">Knowledge check will appear after the linked question bank loads.</p>`}
          <a class="button button--primary" href="#/practice/drill/${adaptiveDrillTarget().preset.id}">Open 3-5 question mastery drill</a>
        </details>
        <details id="reflection" class="lesson-accordion">
          <summary>Reflection</summary>
          <label class="br-field br-field--wide"><span>What is one trap you would now recognize?</span><textarea rows="4" data-lesson-reflection="${lesson.id}" placeholder="Write one reusable rule."></textarea></label>
          <button class="button button--primary" type="button" data-save-lesson-reflection="${lesson.id}">Save to journal</button>
        </details>
      </main>
      <aside class="lesson-progress-rail">
        ${renderDonut(Math.min(100, Math.round((progress.masteryWins / Math.max(1, lesson.masteryThreshold)) * 100)), "lesson", `${progress.masteryWins}/${lesson.masteryThreshold}`)}
        <a class="button button--ghost" href="${lesson.nextLessonId ? `#/learn/${lesson.nextLessonId}` : "#/practice/timed"}">Next lesson</a>
        <button class="button button--primary" data-complete-lesson="${lesson.id}" ${progress.masteryWins < lesson.masteryThreshold ? "disabled" : ""}>Pass mastery gate</button>
      </aside>
    </article>
  `;
}

function renderQuestionTypeLesson(lesson) {
  ensureQtPlayback(lesson, qtPlaybackState.phase);
  const progress = state.questionTypeProgress[lesson.id];
  const currentStep = progress.currentStep || 1;
  const questions = familyQuestions(lesson.family);
  const guided = questions.slice(0, 3);
  const drill = questions.slice(3, 11);
  const attempts = familyAttempts(lesson.family);
  const accuracy = attempts.length ? Math.round((attempts.filter((item) => state.attempts[item.id].correct).length / attempts.length) * 100) : 0;
  const analysis = buildDrillAnalysis(lesson.family);
  const topTrap = analysis.topTraps[0]?.trap || lesson.traps[0];

  const header = `
    <article class="panel panel--wide">
      <div class="panel__head">
        <h3>${lesson.title}</h3>
        <span class="status-pill ${progress.complete ? "is-done" : ""}">${progress.complete ? "Mastered" : `Step ${currentStep} of 4`}</span>
      </div>
      <p>${lesson.summary}</p>
      ${renderStepIndicator(currentStep)}
    </article>
  `;

  let stepContent = "";

  if (currentStep === 1) {
    stepContent = `
      <article class="panel panel--wide">
        <div class="panel__head">
          <h3>Step 1 — Video Breakdown Lesson</h3>
          <span class="status-pill">${lesson.step1Video.runtime}</span>
        </div>
        <p>This first video teaches what this family is really asking, how to recognize it quickly, and the core framework pulled from the books in original language.</p>
        ${renderQtVideoPanel(lesson, "step1", "5-scene lesson")}
        <div class="step-continue-bar">
          <span class="muted">Watch the full video before moving on.</span>
          <button class="button button--primary" data-qt-step-next="${lesson.id}">Continue to Step 2 →</button>
        </div>
      </article>
    `;
  } else if (currentStep === 2) {
    stepContent = `
      <article class="panel panel--wide">
        <div class="panel__head">
          <h3>Step 2 — Solve Method + Trap Answers Video</h3>
          <span class="status-pill">${lesson.step2Video.runtime}</span>
        </div>
        <p>This second video slows the process down, shows the full solve sequence step by step, and contrasts the wrong answers that keep stealing points.</p>
        ${renderQtVideoPanel(lesson, "step2", "4-scene solve video")}
        <div class="qt-toolbox">
          <section class="transcript-block">
            <p class="mini-card__label">Method checklist</p>
            <ol class="method-list">
              ${lesson.method.map((step) => `<li>${step}</li>`).join("")}
            </ol>
          </section>
          <section class="transcript-block">
            <p class="mini-card__label">Trap chips</p>
            <div class="tag-stack">
              ${lesson.traps.map((trap) => `<span class="chip-link">${trap}</span>`).join("")}
            </div>
          </section>
        </div>
        <div class="step-continue-bar">
          <button class="button button--ghost" data-qt-step-back="${lesson.id}">← Back to Step 1</button>
          <button class="button button--primary" data-qt-step-next="${lesson.id}">Continue to Step 3 →</button>
        </div>
      </article>
    `;
  } else if (currentStep === 3) {
    stepContent = `
      <article class="panel panel--wide">
        <div class="panel__head">
          <h3>Step 3 — Guided Questions</h3>
        </div>
        <p>Answer these using the method, not guessing. The method enforcer sits above each question to keep the process in front of you before you pick an answer.</p>
        <div class="practice-list">
          ${guided
            .map(
              (question) => `
                <section class="question-card">
                  <div class="method-enforcer">
                    <p class="mini-card__label">Method enforcer — use this before answering</p>
                    <div class="method-enforcer__grid">
                      <section><strong>Step 1</strong><p>${lesson.method[0]}</p></section>
                      <section><strong>Step 2</strong><p>${lesson.method[1]}</p></section>
                      <section><strong>Step 3</strong><p>${lesson.method[2]}</p></section>
                    </div>
                    <p class="microcopy"><strong>Trap to watch for:</strong> ${lesson.traps[0]}</p>
                  </div>
                  ${renderQuestionCard(question, "guided")}
                </section>
              `,
            )
            .join("")}
        </div>
        <div class="step-continue-bar">
          <button class="button button--ghost" data-qt-step-back="${lesson.id}">← Back to Step 2</button>
          <button class="button button--primary" data-qt-step-next="${lesson.id}">Continue to Step 4 →</button>
        </div>
      </article>
    `;
  } else {
    stepContent = `
      <article class="panel panel--wide">
        <div class="panel__head">
          <h3>Step 4 — Mastery Drill</h3>
        </div>
        <p>Complete this 5-10 question drill. The analysis system below updates after every answer and shows what is repeatedly going wrong.</p>
        <div class="practice-list">
          ${drill.map((question) => renderQuestionCard(question, "mastery")).join("")}
        </div>
        <button class="button button--primary" data-complete-question-type="${lesson.id}" ${progress.drillWins < 5 ? "disabled" : ""}>${progress.drillWins < 5 ? `Need ${5 - progress.drillWins} more drill wins` : "Mark question type mastered"}</button>
        ${progress.drillWins >= 5 ? `<p class="microcopy">Mastery gate unlocked. Mark this question type complete when you are ready.</p>` : ""}
        <div class="step-continue-bar">
          <button class="button button--ghost" data-qt-step-back="${lesson.id}">← Back to Step 3</button>
          <span></span>
        </div>
      </article>
      <article class="panel panel--wide">
        <div class="panel__head">
          <h3>Why You Are Missing This Type</h3>
        </div>
        <p class="muted">This section updates automatically as you answer questions. Every miss is logged with its trap pattern and the exact wrong choice so you can see what is happening.</p>
        <div class="card-grid card-grid--four">
          <section class="mini-card">
            <p class="mini-card__label">Accuracy</p>
            <h4 class="analysis-score ${analysis.accuracy >= 80 ? "is-strong" : analysis.accuracy >= 60 ? "is-medium" : "is-weak"}">${analysis.accuracy}%</h4>
            <p>${analysis.attempts} attempts logged for ${lesson.family}.</p>
          </section>
          <section class="mini-card">
            <p class="mini-card__label">High-confidence misses</p>
            <h4>${analysis.highConfidenceMisses}</h4>
            <p>Misses where you were confident. These signal a repeatable process error, not confusion.</p>
          </section>
          <section class="mini-card">
            <p class="mini-card__label">Pattern diagnosis</p>
            <h4>${topTrap}</h4>
            <p>${analysis.diagnosis}</p>
          </section>
          <section class="mini-card">
            <p class="mini-card__label">Method fix</p>
            <h4>${lesson.method[0]}</h4>
            <p>${analysis.methodFix}</p>
          </section>
        </div>
        ${analysis.avgTime != null ? `
          <section class="mini-card">
            <p class="mini-card__label">Avg time per question</p>
            <h4 class="analysis-score ${analysis.avgTime <= analysis.targetTime ? "is-strong" : analysis.avgTime <= analysis.targetTime * 1.3 ? "is-medium" : "is-weak"}">${analysis.avgTime}s</h4>
            <p>Target: ${analysis.targetTime}s. ${analysis.avgTime <= analysis.targetTime ? "On pace." : "Spending too long — trust the method and move."}</p>
          </section>
        ` : ""}
        <div class="qt-analysis-grid">
          <section class="transcript-block">
            <p class="mini-card__label">Trap frequency</p>
            <div class="trap-bars">
              ${
                analysis.topTraps.length
                  ? analysis.topTraps
                      .map(
                        (item) => `
                          <div class="trap-bar">
                            <div class="trap-bar__meta"><strong>${item.trap}</strong><span>${item.count} miss${item.count > 1 ? "es" : ""}</span></div>
                            <div class="trap-bar__track"><span style="width:${Math.max(14, item.share)}%"></span></div>
                            <p class="microcopy">${item.advice}</p>
                          </div>
                        `,
                      )
                      .join("")
                  : `<p class="muted">Trap bars will fill in once you log misses for this family.</p>`
              }
            </div>
          </section>
          <section class="transcript-block">
            <p class="mini-card__label">Wrong answers you keep picking</p>
            <div class="journal-list">
              ${
                analysis.wrongChoices.length
                  ? analysis.wrongChoices
                      .map(
                        ([choiceText, count]) => `
                          <section class="journal-card">
                            <strong>${count} time${count > 1 ? "s" : ""}</strong>
                            <p>${choiceText}</p>
                          </section>
                        `,
                      )
                      .join("")
                  : `<p class="muted">Once you miss a question, the exact wrong answer text will appear here so you can spot your favorite traps.</p>`
              }
            </div>
          </section>
        </div>
        <section class="transcript-block">
          <p class="mini-card__label">Miss journal</p>
          <div class="journal-list">
            ${
              analysis.recentMisses.length
                ? analysis.recentMisses
                    .map(
                      (entry) => `
                        <section class="journal-card">
                          <strong>${entry.trapPattern}</strong>
                          <p>${entry.whyWrong}</p>
                          ${entry.wrongChoiceText ? `<p class="microcopy">Wrong choice picked: ${entry.wrongChoiceText}</p>` : ""}
                        </section>
                      `,
                    )
                    .join("")
              : `<p class="muted">Your last five misses for this family will appear here with the trap and the wrong answer text.</p>`
            }
          </div>
        </section>
      </article>
    `;
  }

  return header + stepContent;
}

function renderRCPassageList() {
  return `
    <article class="panel panel--wide">
      <div class="panel__head">
        <h3>RC Passage Library</h3>
        <span class="status-pill">${(data.rcPassages || []).length} passages</span>
      </div>
      <p>Each passage is a full multi-paragraph reading with 5 questions across RC question types. Read, map the passage structure, then answer the questions.</p>
      <div class="card-grid card-grid--two">
        ${(data.rcPassages || [])
          .map((passage) => {
            const prog = state.rcProgress[passage.id];
            const answered = passage.questions.filter((q) => state.attempts[q.id]).length;
            const complete = answered === passage.questions.length;
            return `
              <a class="lesson-card" href="#/practice/rc/${passage.id}">
                <p class="mini-card__label">${passage.topic}${passage.isComparative ? " · Comparative" : ""} · ${passage.difficulty}</p>
                <h4>${passage.title}</h4>
                <p>~${passage.estimatedReadMinutes} min read · ${passage.questions.length} questions</p>
                <div class="passage-card-meta">
                  <span class="status-pill ${complete ? "is-done" : ""}">${complete ? "Completed" : prog?.phase === "questions" ? `${answered}/${passage.questions.length} answered` : "Not started"}</span>
                  <span class="muted">${passage.questions.map((q) => q.family.replace("RC ", "")).join(" · ")}</span>
                </div>
              </a>
            `;
          })
          .join("")}
      </div>
    </article>
  `;
}

function renderRCPassage(passage) {
  const prog = state.rcProgress[passage.id];
  const phase = prog?.phase || "reading";
  const answered = passage.questions.filter((q) => state.attempts[q.id]).length;

  const passageTextHtml = `
    <div class="passage-text">
      ${passage.paragraphs
        .map(
          (p) => `
            <div class="passage-paragraph">
              <span class="passage-para-label">${p.label}</span>
              <p>${p.text}</p>
            </div>
          `,
        )
        .join("")}
    </div>
  `;

  if (phase === "reading") {
    return `
      <article class="panel panel--wide">
        <div class="panel__head">
          <div>
            <p class="mini-card__label">${passage.topic}${passage.isComparative ? " · Comparative Passages" : ""}</p>
            <h3>${passage.title}</h3>
          </div>
          <span class="status-pill">~${passage.estimatedReadMinutes} min read</span>
        </div>
        <p class="muted">Read the passage carefully. Map each paragraph's job in your own words before starting the questions. This is the most important habit you can build for RC.</p>
        <div class="passage-reading-layout">
          <div class="passage-reading-main">
            ${passageTextHtml}
          </div>
          <div class="passage-reading-sidebar">
            <div class="method-enforcer">
              <p class="mini-card__label">Passage map</p>
              <p class="microcopy">Give each paragraph a job label in plain English before you answer any questions.</p>
              ${passage.paragraphs
                .map(
                  (p) => `
                    <div class="passage-map-row">
                      <strong>${p.label}:</strong>
                      <textarea class="passage-map-input" data-passage-map="${passage.id}" data-para="${p.label}" placeholder="What job does ${p.label} do?" rows="2">${(prog?.mapText || "").split("||").find((t) => t.startsWith(p.label + ":"))?.slice(p.label.length + 1) || ""}</textarea>
                    </div>
                  `,
                )
                .join("")}
            </div>
            <div class="step-continue-bar" style="margin-top:20px; padding-top:16px;">
              <span class="muted">${passage.questions.length} questions waiting</span>
              <button class="button button--primary" data-rc-begin="${passage.id}">Begin Questions →</button>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  // Questions phase
  return `
    <article class="panel panel--wide">
      <div class="panel__head">
        <div>
          <p class="mini-card__label">${passage.topic}</p>
          <h3>${passage.title}</h3>
        </div>
        <div style="display:flex; gap:10px; align-items:center;">
          ${prog?.readTimeSeconds ? `<span class="status-pill">Read in ${Math.round(prog.readTimeSeconds / 60)} min ${prog.readTimeSeconds % 60}s</span>` : ""}
          <span class="status-pill ${answered === passage.questions.length ? "is-done" : ""}">${answered}/${passage.questions.length} answered</span>
        </div>
      </div>
    </article>
    <div class="passage-questions-layout">
      <div class="passage-questions-text">
        <div class="passage-sticky-reader">
          <p class="mini-card__label">Passage</p>
          ${passageTextHtml}
          ${prog?.mapText ? `
            <div class="passage-map-display">
              <p class="mini-card__label">Your passage map</p>
              ${passage.paragraphs
                .map((p) => {
                  const entry = (prog.mapText || "").split("||").find((t) => t.startsWith(p.label + ":"));
                  return entry ? `<p><strong>${p.label}:</strong> ${entry.slice(p.label.length + 1)}</p>` : "";
                })
                .join("")}
            </div>
          ` : ""}
        </div>
      </div>
      <div class="passage-questions-list">
        <div class="practice-list">
          ${passage.questions.map((q) => renderQuestionCard(q, "rc-passage")).join("")}
        </div>
        ${answered === passage.questions.length ? `
          <div class="passage-complete-bar">
            <p><strong>Passage complete.</strong> All ${passage.questions.length} questions answered.</p>
            <a class="button button--ghost" href="#/practice/rc">← Back to passage list</a>
          </div>
        ` : ""}
        <div class="step-continue-bar">
          <a class="button button--ghost" href="#/practice/rc">← All passages</a>
          <span class="muted">${passage.questions.length - answered} question${passage.questions.length - answered !== 1 ? "s" : ""} remaining</span>
        </div>
      </div>
    </div>
  `;
}

function testQuestionPool(sectionType, count, seed = 0) {
  const bank = sectionType === "RC"
    ? (data.rcPassages || []).flatMap((passage) => passage.questions.map((question) => ({ ...question, passage })))
    : data.questionBank.filter((question) => question.section === "LR");
  return Array.from({ length: count }, (_, index) => {
    const source = bank[(index + seed) % bank.length];
    const choices = [...source.options];
    while (choices.length < 5) {
      choices.push("The stimulus provides too little support for this stronger claim.");
    }
    return {
      id: `test-${sectionType.toLowerCase()}-${seed}-${index + 1}`,
      sourceId: source.id,
      sectionType,
      family: source.family,
      questionType: source.family,
      difficulty: source.difficulty || "Medium",
      stimulus: sectionType === "LR" ? source.prompt : "",
      passage: sectionType === "RC" ? source.passage : null,
      questionStem: source.question,
      choices,
      correctAnswer: source.answer,
      explanation: source.explanation,
      trapPattern: source.trapPattern || source.family,
    };
  });
}

function testSections() {
  return [
    { id: "s1", label: "Section 1", type: "LR", name: "Logical Reasoning", scored: true, seconds: 35 * 60, questions: testQuestionPool("LR", 25, 0) },
    { id: "s2", label: "Section 2", type: "RC", name: "Reading Comprehension", scored: true, seconds: 35 * 60, questions: testQuestionPool("RC", 24, 3) },
    { id: "break", label: "10-minute break", type: "BREAK", name: "Break", seconds: 10 * 60, questions: [] },
    { id: "s3", label: "Section 3", type: "LR", name: "Logical Reasoning", scored: true, seconds: 35 * 60, questions: testQuestionPool("LR", 25, 8) },
    { id: "s4", label: "Section 4", type: "LR", name: "Variable Section", scored: false, seconds: 35 * 60, questions: testQuestionPool("LR", 25, 16) },
  ];
}

function currentTestSection() {
  return testSections()[state.testDay.sectionIndex] || testSections()[0];
}

function currentTestQuestion() {
  const section = currentTestSection();
  return section.questions[state.testDay.questionIndex] || section.questions[0];
}

function ensureTestSession() {
  if (state.testDay.active && state.testDay.sectionEndsAt) return;
  const section = currentTestSection();
  const now = Date.now();
  state.testDay.active = true;
  state.testDay.fullTestSubmitted = false;
  state.testDay.sectionStartedAt = new Date(now).toISOString();
  state.testDay.sectionEndsAt = new Date(now + (section.seconds || 2100) * 1000).toISOString();
  saveState();
}

function resetTestSession(mode = state.testDay.mode || "strict") {
  const prefs = { ...state.testDay.prefs };
  state.testDay = {
    ...defaultState().testDay,
    mode,
    active: true,
    prefs,
    sectionStartedAt: new Date().toISOString(),
    sectionEndsAt: new Date(Date.now() + 35 * 60 * 1000).toISOString(),
  };
  saveState();
}

function stopTestDayTimer() {
  if (testDayTimer) {
    clearInterval(testDayTimer);
    testDayTimer = null;
  }
}

function startTestDayTimer() {
  stopTestDayTimer();
  if (!state.testDay.active || state.testDay.fullTestSubmitted) return;
  testDayTimer = setInterval(() => {
    const remaining = testSecondsRemaining();
    if (remaining <= 0 && state.testDay.mode === "strict") {
      submitCurrentTestSection();
    } else {
      renderApp();
    }
  }, 1000);
}

function testSecondsRemaining() {
  const end = new Date(state.testDay.sectionEndsAt || 0).getTime();
  if (!end) return 35 * 60;
  return Math.ceil((end - Date.now()) / 1000);
}

function formatClock(seconds) {
  const safe = Math.max(0, seconds);
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function testAnswerKey(question) {
  return `${currentTestSection().id}:${question.id}`;
}

function escapedRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightTextForQuestion(text, question) {
  const highlights = state.testDay.highlights[testAnswerKey(question)] || [];
  return highlights.reduce((html, markText) => {
    if (!markText.trim()) return html;
    return html.replace(new RegExp(escapedRegex(markText), "g"), `<mark>${markText}</mark>`);
  }, text);
}

function submitCurrentTestSection() {
  const section = currentTestSection();
  state.testDay.sectionSubmitted[section.id] = {
    submittedAt: new Date().toISOString(),
    overtime: Math.max(0, Math.abs(Math.min(0, testSecondsRemaining()))),
  };
  const nextIndex = state.testDay.sectionIndex + 1;
  const sections = testSections();
  if (nextIndex >= sections.length) {
    state.testDay.fullTestSubmitted = true;
    state.testDay.active = false;
    saveState();
    location.hash = "#/practice/test-day/results";
    return;
  }
  state.testDay.sectionIndex = nextIndex;
  state.testDay.questionIndex = 0;
  const nextSection = sections[nextIndex];
  const now = Date.now();
  state.testDay.sectionStartedAt = new Date(now).toISOString();
  state.testDay.sectionEndsAt = new Date(now + (nextSection.seconds || 2100) * 1000).toISOString();
  saveState();
  location.hash = nextSection.type === "BREAK" ? "#/practice/test-day/break" : "#/practice/test-day";
}

function renderTestDirections() {
  return `
    <section class="test-shell test-shell--directions">
      <article class="test-directions-card">
        <p class="mini-card__label">Original JessiPreps simulator</p>
        <h2>Test-Day Mode</h2>
        <p>This simulates the workflow and tools you need for test-day practice without copying LSAC branding, protected design, or official question text.</p>
        <div class="test-flow-strip">
          <span>Directions</span><span>Section 1 · 35m</span><span>Section 2 · 35m</span><span>Break · 10m</span><span>Section 3 · 35m</span><span>Section 4 · 35m</span><span>Review</span>
        </div>
        <div class="card-grid card-grid--two">
          <section class="mini-card"><p class="mini-card__label">Practice Mode</p><h4>Untimed learning</h4><p>Use drills when you want immediate explanations and coaching.</p></section>
          <section class="mini-card"><p class="mini-card__label">Test-Day Mode</p><h4>No explanations during the section</h4><p>Timer, flags, review screen, answer elimination, and after-section analytics.</p></section>
        </div>
        <div class="dashboard-actions">
          <button class="button button--primary" type="button" data-test-start="strict">Start strict test</button>
          <button class="button button--ghost" type="button" data-test-start="study">Start study mode</button>
          <a class="button button--ghost" href="#/practice">Back to practice</a>
        </div>
      </article>
    </section>
  `;
}

function renderTestDayPage(route) {
  if (route.id === "results") return renderTestResults();
  if (route.id === "break" || currentTestSection().type === "BREAK") return renderTestBreak();
  if (!state.testDay.active) return renderTestDirections();
  ensureTestSession();
  if (route.id === "review") return renderTestReview();
  const section = currentTestSection();
  const question = currentTestQuestion();
  const key = testAnswerKey(question);
  const selected = state.testDay.answers[key];
  const eliminated = state.testDay.eliminated[key] || [];
  const flagged = Boolean(state.testDay.flagged[key]);
  const prefs = state.testDay.prefs;
  const remaining = testSecondsRemaining();
  const overtime = remaining < 0;
  return `
    <section class="test-shell test-shell--${section.type.toLowerCase()} test-font-${prefs.fontSize} test-lines-${prefs.lineSpacing} test-theme-${prefs.theme} test-width-${prefs.passageWidth}">
      ${renderTestTopBar(section, question, remaining, overtime)}
      <main class="test-workspace">
        ${section.type === "RC" ? renderTestRC(question, selected, eliminated) : renderTestLR(question, selected, eliminated)}
      </main>
      ${renderTestBottomBar(section, flagged)}
    </section>
  `;
}

function renderTestTopBar(section, question, remaining, overtime) {
  const prefs = state.testDay.prefs;
  return `
    <header class="test-topbar">
      <div>
        <strong>LSAT Practice Test</strong>
        <span>${section.label} · ${section.name}</span>
      </div>
      <div class="test-topbar__center">
        <span>Question ${state.testDay.questionIndex + 1} of ${section.questions.length}</span>
        <strong class="${overtime ? "is-danger" : ""}">${prefs.showTimer ? formatClock(remaining) : "Timer hidden"}</strong>
      </div>
      <div class="test-topbar__actions">
        <button class="button button--ghost" type="button" data-test-directions>Directions</button>
        <button class="button button--ghost" type="button" data-test-highlight>Highlight</button>
        <button class="button button--ghost" type="button" data-test-remove-highlight>Remove highlight</button>
        <button class="button button--ghost" type="button" data-test-settings>Settings</button>
      </div>
      ${state.testDay.settingsOpen ? renderTestSettingsPanel() : ""}
    </header>
  `;
}

function renderTestSettingsPanel() {
  const prefs = state.testDay.prefs;
  return `
    <aside class="test-settings-panel">
      <label>Font size<select data-test-pref="fontSize"><option ${prefs.fontSize === "small" ? "selected" : ""}>small</option><option ${prefs.fontSize === "medium" ? "selected" : ""}>medium</option><option ${prefs.fontSize === "large" ? "selected" : ""}>large</option><option ${prefs.fontSize === "extra" ? "selected" : ""}>extra</option></select></label>
      <label>Line spacing<select data-test-pref="lineSpacing"><option ${prefs.lineSpacing === "normal" ? "selected" : ""}>normal</option><option ${prefs.lineSpacing === "wide" ? "selected" : ""}>wide</option></select></label>
      <label>Theme<select data-test-pref="theme"><option ${prefs.theme === "light" ? "selected" : ""}>light</option><option ${prefs.theme === "dark" ? "selected" : ""}>dark</option><option ${prefs.theme === "contrast" ? "selected" : ""}>contrast</option></select></label>
      <label>Passage width<select data-test-pref="passageWidth"><option ${prefs.passageWidth === "normal" ? "selected" : ""}>normal</option><option ${prefs.passageWidth === "wide" ? "selected" : ""}>wide</option></select></label>
      <label class="test-check"><input type="checkbox" data-test-pref-check="allowClear" ${prefs.allowClear ? "checked" : ""}> Allow clear answer</label>
      <label class="test-check"><input type="checkbox" data-test-pref-check="showTimer" ${prefs.showTimer ? "checked" : ""}> Show timer</label>
    </aside>
  `;
}

function renderTestLR(question, selected, eliminated) {
  return `
    <article class="test-question-panel">
      <section class="test-readable" data-readable="stimulus"><p>${highlightTextForQuestion(question.stimulus, question)}</p></section>
      <h3 class="test-readable" data-readable="stem">${highlightTextForQuestion(question.questionStem, question)}</h3>
      ${renderTestChoices(question, selected, eliminated)}
    </article>
  `;
}

function renderTestRC(question, selected, eliminated) {
  const passage = question.passage;
  return `
    <article class="test-rc-layout">
      <section class="test-passage test-readable" data-readable="passage">
        <p class="mini-card__label">${passage?.category || "Reading Comprehension"} passage</p>
        <h3>${passage?.title || "Passage set"}</h3>
        ${(passage?.paragraphs || [question.stimulus || ""]).map((para) => `<p>${highlightTextForQuestion(para.text || para, question)}</p>`).join("")}
      </section>
      <section class="test-question-panel">
        <h3 class="test-readable" data-readable="stem">${highlightTextForQuestion(question.questionStem, question)}</h3>
        ${renderTestChoices(question, selected, eliminated)}
      </section>
    </article>
  `;
}

function renderTestChoices(question, selected, eliminated) {
  return `
    <div class="test-choices">
      ${question.choices.map((choice, index) => {
        const letter = String.fromCharCode(65 + index);
        const isSelected = selected === index;
        const isEliminated = eliminated.includes(index);
        return `
          <div class="test-choice ${isSelected ? "is-selected" : ""} ${isEliminated ? "is-eliminated" : ""}">
            <button type="button" data-test-answer="${index}" aria-label="Select answer ${letter}"><span>${isSelected ? "●" : "○"}</span><strong>${letter}.</strong> ${choice}</button>
            <button class="test-eliminate" type="button" data-test-eliminate="${index}">${isEliminated ? "Undo" : "Eliminate"}</button>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderTestBottomBar(section, flagged) {
  return `
    <footer class="test-bottombar">
      <button class="button button--ghost" type="button" data-test-prev ${state.testDay.questionIndex === 0 ? "disabled" : ""}>Previous</button>
      <button class="button ${flagged ? "button--primary" : "button--ghost"}" type="button" data-test-flag>${flagged ? "Flagged" : "Flag"}</button>
      <a class="button button--ghost" href="#/practice/test-day/review">Review</a>
      ${state.testDay.questionIndex === section.questions.length - 1 ? `<button class="button button--primary" type="button" data-test-submit-section>Submit Section</button>` : `<button class="button button--primary" type="button" data-test-next>Next</button>`}
    </footer>
  `;
}

function renderTestReview() {
  const section = currentTestSection();
  const filter = state.testDay.reviewFilter || "all";
  const rows = section.questions.map((question, index) => {
    const key = `${section.id}:${question.id}`;
    const answered = state.testDay.answers[key] !== undefined;
    const flagged = Boolean(state.testDay.flagged[key]);
    return { question, index, answered, flagged };
  }).filter((row) => filter === "all" || (filter === "unanswered" && !row.answered) || (filter === "flagged" && row.flagged) || (filter === "answered" && row.answered));
  return `
    <section class="test-shell">
      ${renderTestTopBar(section, section.questions[state.testDay.questionIndex], testSecondsRemaining(), testSecondsRemaining() < 0)}
      <main class="test-review-screen">
        <div class="panel__head">
          <h2>Section Review</h2>
          <span class="status-pill">${rows.length} shown</span>
        </div>
        <div class="segmented-control test-filter-row">
          ${["all", "unanswered", "flagged", "answered"].map((item) => `<button class="${filter === item ? "is-active" : ""}" type="button" data-test-review-filter="${item}">${item}</button>`).join("")}
        </div>
        <div class="test-review-grid">
          ${rows.map((row) => `
            <button class="test-review-tile ${row.answered ? "is-answered" : "is-unanswered"} ${row.flagged ? "is-flagged" : ""}" type="button" data-test-jump="${row.index}">
              <strong>Q${row.index + 1}</strong>
              <span>${row.answered ? "Answered" : "Unanswered"}${row.flagged ? " · Flagged" : ""}</span>
            </button>
          `).join("")}
        </div>
      </main>
      <footer class="test-bottombar">
        <a class="button button--ghost" href="#/practice/test-day">Return to Question</a>
        <button class="button button--primary" type="button" data-test-submit-section>Submit Section</button>
      </footer>
    </section>
  `;
}

function renderTestBreak() {
  return `
    <section class="test-shell test-shell--directions">
      <article class="test-directions-card">
        <p class="mini-card__label">Break</p>
        <h2>10-minute break</h2>
        <p>Take the break as seriously as the sections: step away, reset, and come back ready for Section 3.</p>
        <button class="button button--primary" type="button" data-test-submit-section>Continue to next section</button>
      </article>
    </section>
  `;
}

function renderTestResults() {
  const sections = testSections().filter((section) => section.type !== "BREAK");
  const scored = sections.filter((section) => section.scored);
  const all = scored.flatMap((section) => section.questions.map((question) => ({ section, question, key: `${section.id}:${question.id}` })));
  const answered = all.filter((item) => state.testDay.answers[item.key] !== undefined);
  const correct = answered.filter((item) => state.testDay.answers[item.key] === item.question.correctAnswer);
  const missed = all.filter((item) => state.testDay.answers[item.key] !== item.question.correctAnswer);
  const flagged = all.filter((item) => state.testDay.flagged[item.key]);
  const unanswered = all.filter((item) => state.testDay.answers[item.key] === undefined);
  const byType = missed.reduce((acc, item) => {
    acc[item.question.questionType] = (acc[item.question.questionType] || 0) + 1;
    return acc;
  }, {});
  return `
    <section class="test-results">
      <article class="panel panel--wide">
        <div class="panel__head">
          <div>
            <p class="mini-card__label">After-section analytics</p>
            <h2>Score / Review</h2>
          </div>
          <button class="button button--primary" type="button" data-test-start="strict">Retake simulator</button>
        </div>
        <div class="card-grid card-grid--four">
          <section class="mini-card"><p class="mini-card__label">Raw score</p><h4>${correct.length}/${all.length}</h4><p>Scored sections only.</p></section>
          <section class="mini-card"><p class="mini-card__label">Accuracy</p><h4>${all.length ? Math.round((correct.length / all.length) * 100) : 0}%</h4><p>Original local questions.</p></section>
          <section class="mini-card"><p class="mini-card__label">Flagged accuracy</p><h4>${flagged.length ? Math.round((flagged.filter((item) => state.testDay.answers[item.key] === item.question.correctAnswer).length / flagged.length) * 100) : 0}%</h4><p>${flagged.length} flagged.</p></section>
          <section class="mini-card"><p class="mini-card__label">Unanswered</p><h4>${unanswered.length}</h4><p>Questions left blank.</p></section>
        </div>
      </article>
      <article class="panel panel--wide">
        <div class="panel__head"><h3>Mistake bank</h3><span class="status-pill">${missed.length} review items</span></div>
        <div class="practice-list">
          ${missed.slice(0, 18).map((item) => `
            <section class="question-card">
              <p class="mini-card__label">${item.section.label} · ${item.question.questionType}</p>
              <h4>${item.question.questionStem}</h4>
              <p><strong>Your answer:</strong> ${state.testDay.answers[item.key] === undefined ? "Unanswered" : String.fromCharCode(65 + state.testDay.answers[item.key])} · <strong>Correct:</strong> ${String.fromCharCode(65 + item.question.correctAnswer)}</p>
              <p>${item.question.explanation}</p>
              <p class="microcopy">Trap pattern: ${item.question.trapPattern}</p>
            </section>
          `).join("")}
        </div>
        <div class="recommendation-box"><strong>Missed question types:</strong> ${Object.entries(byType).map(([type, count]) => `${type} (${count})`).join(", ") || "None yet."}</div>
      </article>
    </section>
  `;
}

function renderPracticePage(route) {
  if (route.subtype === "test-day") {
    return renderTestDayPage(route);
  }

  if (route.subtype === "rc") {
    if (!route.id || route.id === "rc") {
      return renderRCPassageList();
    }
    const passage = (data.rcPassages || []).find((p) => p.id === route.id);
    return passage ? renderRCPassage(passage) : renderRCPassageList();
  }

  if (route.subtype === "drill") {
    const preset = data.drillPresets.find((item) => item.id === route.id) || data.drillPresets[0];
    const questions = data.questionBank.filter((question) => preset.families.includes(question.family)).slice(0, preset.count);
    return `
      <article class="panel panel--wide">
        <div class="panel__head">
          <h3>${preset.title}</h3>
          <button class="status-pill status-pill--button" type="button" data-bookmark="drill:${preset.id}" data-bookmark-type="drill">${isBookmarked(`drill:${preset.id}`) ? "Bookmarked" : "Bookmark drill"}</button>
        </div>
        <p>Adaptive focus: ${weakestFamily().family}. This preset is chosen because of weak performance plus incomplete mastery.</p>
        <div class="commitment-bar">
          <strong>${state.currentBlock.label}</strong>
          <span>${state.currentBlock.unfinished} unfinished items</span>
          <button class="button button--ghost" type="button" data-skip-block>Skip block</button>
        </div>
        <div class="practice-list">${questions.map((question) => renderQuestionCard(question, "drill")).join("")}</div>
      </article>
    `;
  }

  if (route.subtype === "timed") {
    return `
      <article class="panel panel--wide">
        <div class="panel__head">
          <h3>Test-Day Practice Center</h3>
          <span class="status-pill">LawHub-style workflow</span>
        </div>
        <p>Practice the actual testing rhythm: directions, four 35-minute sections, a 10-minute break after Section 2, flags, elimination, highlighting, review, then score analysis.</p>
        <div class="card-grid card-grid--four">
          <section class="mini-card"><p class="mini-card__label">Strict mode</p><h4>35:00 auto-submit</h4><p>No explanations during the section. Review after submit.</p></section>
          <section class="mini-card"><p class="mini-card__label">Study mode</p><h4>Overtime marked</h4><p>Continue after time expires, but the result is tagged overtime.</p></section>
          <section class="mini-card"><p class="mini-card__label">Tools</p><h4>Highlight · Flag · Eliminate</h4><p>Practice screen preferences, review grid, and answer control.</p></section>
          <section class="mini-card"><p class="mini-card__label">After test</p><h4>Mistake bank</h4><p>Raw score, accuracy, missed types, flagged accuracy, and explanations.</p></section>
        </div>
        <p class="microcopy">Use local simulated sections for skill-building, then jump out to official materials for licensed PrepTest review.</p>
        <div class="dashboard-actions">
          <a class="button button--primary" href="#/practice/test-day">Open test-day simulator</a>
          <button class="button button--ghost" type="button" data-test-start="strict">Start strict test</button>
          <button class="button button--ghost" type="button" data-test-start="study">Start study mode</button>
        </div>
        <div class="link-list">
          ${data.officialLinks.map((link) => `<a class="chip-link" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}
        </div>
      </article>
    `;
  }

  const grouped = [...new Set(data.questionBank.map((question) => question.family))];
  const adaptive = adaptiveDrillTarget();
  const time = timeSummary();
  return `
    <article class="panel panel--wide">
      <div class="panel__head">
        <div>
          <p class="mini-card__label">One-click practice</p>
          <h3>Adaptive Drill Engine</h3>
        </div>
        <span class="status-pill">Recommended: ${adaptive.weak.family}</span>
      </div>
      <p>The system chooses this session from your weakest family, unfinished review, and recent misses, so you do not have to manually pick RC Structure vs Assumption vs Flaw every time.</p>
      <div class="dashboard-actions">
        <a class="button button--primary" href="#/practice/drill/${adaptive.preset.id}">Start adaptive drill</a>
        <a class="button button--ghost" href="#/practice/timed">Open test center</a>
        <button class="button button--ghost" type="button" data-import-demo>Import outside score</button>
      </div>
    </article>
    <article class="panel panel--wide">
      <div class="panel__head">
        <h3>Section / Drill History</h3>
        <span class="status-pill">${Object.keys(state.attempts).length} attempts</span>
      </div>
      <div class="card-grid card-grid--four">
        <section class="mini-card"><p class="mini-card__label">Resume</p><h4>${state.currentBlock.label}</h4><p>${state.currentBlock.unfinished} unfinished items before the block can clear.</p></section>
        <section class="mini-card"><p class="mini-card__label">Correct avg</p><h4>${time.correct || "1:24"}</h4><p>Seconds per correct question.</p></section>
        <section class="mini-card"><p class="mini-card__label">Wrong avg</p><h4>${time.wrong || "1:58"}</h4><p>Seconds per missed question.</p></section>
        <section class="mini-card"><p class="mini-card__label">Bookmarks</p><h4>${bookmarkCount()}</h4><p>Saved questions, drills, sections, and lessons.</p></section>
      </div>
    </article>
    <article class="panel panel--wide">
      <div class="panel__head">
        <h3>Question Bank</h3>
        <span class="status-pill">${data.questionBank.length} original questions</span>
      </div>
      <div class="family-grid">
        ${grouped
          .map((family) => {
            const questions = data.questionBank.filter((question) => question.family === family);
            const lesson = data.lessons.find((item) => questions[0].lessonIds.includes(item.id));
            return `
              <section class="mini-card">
                <p class="mini-card__label">${questions[0].section}</p>
                <h4>${family}</h4>
                <p>${questions.length} questions across easy, medium, and hard.</p>
                <a class="text-link" href="#/learn/${lesson.id}">Open linked lesson</a>
              </section>
            `;
          })
          .join("")}
      </div>
    </article>
    <article class="panel">
      <div class="panel__head">
        <h3>Adaptive Drills</h3>
      </div>
      <div class="card-grid card-grid--two">
        ${data.drillPresets.map((preset) => `<a class="lesson-card" href="#/practice/drill/${preset.id}"><h4>${preset.title}</h4><p>${preset.rationale}</p></a>`).join("")}
      </div>
    </article>
    <article class="panel">
      <div class="panel__head">
        <h3>RC Passage Practice</h3>
        <a class="text-link" href="#/practice/rc">Open library</a>
      </div>
      <p>${(data.rcPassages || []).length} full passages across natural science, law, humanities, and social science. Each passage has a reading phase, a passage-map prompt, and 5 questions.</p>
    </article>
    <article class="panel">
      <div class="panel__head">
        <h3>Timed Section + Practice Test</h3>
        <a class="text-link" href="#/practice/timed">Open test center</a>
      </div>
      <p>35-minute section mode, four-section full PT simulator, resume cards, and skip-protected practice blocks.</p>
    </article>
  `;
}

function renderPrepTestResults(id) {
  const lr = allQuestions().filter((question) => question.section === "LR").slice(0, 26);
  const rc = allQuestions().filter((question) => question.section === "RC").slice(0, 27);
  const sections = [
    { label: "Section 1", type: "LR", score: 18, total: 26, questions: lr, time: "34:42", delta: "+2:18" },
    { label: "Section 2", type: "RC", score: 19, total: 27, questions: rc, time: "35:00", delta: "+0:00" },
    { label: "Section 3", type: "LR", score: 20, total: 26, questions: lr.slice().reverse(), time: "33:51", delta: "-1:09" },
    { label: "Section 4", type: "Experimental", score: 16, total: 26, questions: lr.slice(0, 20), time: "35:00", delta: "+0:00" },
  ];
  const totalScore = sections.slice(0, 3).reduce((sum, section) => sum + section.score, 0);
  const totalQuestions = sections.slice(0, 3).reduce((sum, section) => sum + section.total, 0);
  const percent = Math.round((totalScore / totalQuestions) * 100);
  return `
    <article class="panel panel--wide preptest-results">
      <header class="preptest-header">
        <div>
          <p class="mini-card__label">PrepTest results</p>
          <h3>${id.toUpperCase()} · ${data.appMeta.currentPrepTest}</h3>
          <p>Logged locally · Total time 2h 19m · Review mode unlocked</p>
        </div>
        ${renderDonut(percent, "accuracy", `${percent}%`)}
      </header>
      <section class="insight-banner">
        <strong>Personalized insight</strong>
        <span>You are losing more points to second-guessing correct answers than to running out of time. Review confidence before adding speed.</span>
      </section>
      <div class="section-card-row">
        ${sections.map((section, index) => `
          <a class="section-result-card interactive-card" href="#section-${index + 1}">
            <div><strong>${section.label}</strong><span>${section.type}</span></div>
            <h4>${section.score}/${section.total}</h4>
            ${renderResultGrid(section.questions, section.total, index + 4)}
          </a>
        `).join("")}
      </div>
    </article>
    <article class="panel panel--wide preptest-tabs">
      <div class="panel__head">
        <h3>Sections</h3>
        <div class="segmented-control"><button class="is-active" type="button">Question list</button><button type="button">Timing</button></div>
      </div>
      <div class="section-review-list">
        ${sections.map((section, index) => `
          <details id="section-${index + 1}" class="section-review-row" ${index === 0 ? "open" : ""}>
            <summary>
              <strong>${section.label} · ${section.type}</strong>
              <span>${section.time} · target ${section.delta}</span>
              ${renderResultGrid(section.questions, 14, index + 4)}
            </summary>
            <div class="section-review-detail">
              <section>
                <p class="mini-card__label">Question list</p>
                ${section.questions.slice(0, 12).map((question, qIndex) => `
                  <a class="question-jump" href="#/review">
                    <span class="${state.attempts[question.id]?.correct ? "is-correct" : qIndex % 4 === 0 ? "is-wrong" : "is-empty"}"></span>
                    <strong>Q${qIndex + 1}</strong>
                    <em>${question.family}</em>
                  </a>
                `).join("")}
              </section>
              <section>
                <p class="mini-card__label">Timing</p>
                <div class="activity-bars">${section.questions.slice(0, 8).map((question, qIndex) => `<section><i style="height:${35 + (qIndex % 5) * 10}%"></i><span>Q${qIndex + 1}</span></section>`).join("")}</div>
              </section>
            </div>
          </details>
        `).join("")}
      </div>
    </article>
  `;
}

function renderReviewPage(route = {}) {
  if (route.subtype === "preptest") {
    return renderPrepTestResults(route.id || "pt130");
  }
  const weak = weakestFamily();
  const dueEntries = state.journal.filter((entry) => !entry.blindReviewOutcome || entry.blindReviewOutcome === "pending");
  const families = familyAnalytics().slice(0, 6);
  const time = timeSummary();
  const split = rcPassageSplit();
  const trapGroups = state.journal.reduce((acc, entry) => {
    acc[entry.trapPattern] = (acc[entry.trapPattern] || 0) + 1;
    return acc;
  }, {});
  const topTraps = Object.entries(trapGroups).sort((a, b) => b[1] - a[1]).slice(0, 3);
  return `
    <article class="panel panel--wide">
      <div class="panel__head">
        <h3>Forced Blind Review</h3>
        <span class="status-pill">${dueEntries.length} due today</span>
      </div>
      <p>Explanations stay locked until each miss gets a second answer, confidence rating, and plain-English rule. This turns the Blind Review gap into an actual workflow.</p>
      <div class="journal-list blind-review-list">
        ${
          dueEntries.length
            ? dueEntries
                .slice(0, 6)
                .map((entry, index) => {
                  const question = findQuestion(entry.questionId);
                  return `
                    <section class="journal-card blind-review-card">
                      <p class="mini-card__label">BR item ${index + 1} · ${entry.family}</p>
                      <h4>${question?.question || "Review saved miss"}</h4>
                      <p>${question?.prompt || entry.note}</p>
                      <label class="br-field"><span>Second-pass answer</span><input data-br-answer="${index}" placeholder="A, B, C, D, or your own prediction"></label>
                      <label class="br-field"><span>Confidence</span><select data-br-confidence="${index}"><option>low</option><option>medium</option><option>high</option></select></label>
                      <label class="br-field br-field--wide"><span>Rule you will reuse</span><textarea data-br-note="${index}" rows="3" placeholder="Name the gap, trap, and corrected rule.">${entry.whyWrong || ""}</textarea></label>
                      <div class="dashboard-actions">
                        <button class="button button--primary" data-complete-br="${index}" type="button">Unlock explanation</button>
                        <span class="microcopy">Locked explanation: complete Blind Review first.</span>
                      </div>
                    </section>
                  `;
                })
                .join("")
            : `<p class="muted">No Blind Review items due. Missed questions will appear here before explanations unlock.</p>`
        }
      </div>
    </article>
    <article class="panel panel--wide">
      <div class="panel__head">
        <h3>Analytics</h3>
        <span class="status-pill">Overview · Priorities · Questions</span>
      </div>
      <div class="analytics-tabs">
        <section>
          <p class="mini-card__label">Overview</p>
          <h4>Range ${data.appMeta.scaledScore - scoreVariance()}-${data.appMeta.scaledScore + scoreVariance()}</h4>
          <p>Variance ${scoreVariance()} points. Study quality ${studyQualityScore()}/100.</p>
        </section>
        <section>
          <p class="mini-card__label">Priorities</p>
          <h4>${weak.family}</h4>
          <p>Recommended next family from journal misses and local accuracy.</p>
        </section>
        <section>
          <p class="mini-card__label">Questions</p>
          <h4>${Object.keys(state.attempts).length} logged</h4>
          <p>Correct avg ${time.correct || "n/a"}s · wrong avg ${time.wrong || "n/a"}s · review ${time.review || "n/a"}s.</p>
        </section>
      </div>
      <div class="card-grid card-grid--four">
        <section class="mini-card"><p class="mini-card__label">Weakest family</p><h4>${weak.family}</h4><p>${weak.score}% accuracy</p></section>
        <section class="mini-card"><p class="mini-card__label">Blind review gap</p><h4>${data.analyticsSnapshots.blindReviewGap}</h4><p>First try vs second try spread</p></section>
        <section class="mini-card"><p class="mini-card__label">Variance</p><h4>${scoreVariance()} pts</h4><p>Recent score stability</p></section>
        <section class="mini-card"><p class="mini-card__label">Recommended next path</p><h4>${nextLesson().title}</h4><p>Then ${weak.family} drill</p></section>
      </div>
      <div class="analytics-detail-grid">
        <section class="transcript-block">
          <p class="mini-card__label">Accuracy by question type</p>
          ${families.map((item) => `
            <div class="mastery-row compact-row">
              <span>${item.family}</span><strong>${item.accuracy}%</strong><div><i style="width:${Math.max(8, item.accuracy)}%"></i></div>
            </div>
          `).join("")}
        </section>
        <section class="transcript-block">
          <p class="mini-card__label">Final five + RC split</p>
          <h4>${finalFiveAccuracy() || 60}% final-five accuracy</h4>
          <p>RC target split: ${Math.round(split.read / 60)}:${String(split.read % 60).padStart(2, "0")} read/map · ${Math.round(split.questions / 60)}:${String(split.questions % 60).padStart(2, "0")} questions · ${Math.round(split.check / 60)}:${String(split.check % 60).padStart(2, "0")} final check.</p>
        </section>
      </div>
    </article>
    <article class="panel">
      <div class="panel__head">
        <h3>Wrong-Answer Journal</h3>
      </div>
      <div class="journal-list">
        ${
          state.journal.length
            ? state.journal
                .map(
                  (entry) => `
                    <section class="journal-card">
                      <strong>${entry.family}</strong>
                      <p>${entry.note}</p>
                      <p class="microcopy">Trap: ${entry.trapPattern} | Confidence: ${entry.confidence}</p>
                    </section>
                  `,
                )
                .join("")
            : `<p class="muted">No journal entries yet. Miss a question and it will appear here automatically.</p>`
        }
      </div>
    </article>
    <article class="panel">
      <div class="panel__head">
        <h3>Trap Analysis</h3>
      </div>
      <div class="journal-list">
        ${
          topTraps.length
            ? topTraps
                .map(
                  ([trap, count]) => `
                    <section class="journal-card">
                      <strong>${trap}</strong>
                      <p>${count} miss${count > 1 ? "es" : ""} logged. This pattern is costing you points because you are over-trusting the wrong answer shape before fully naming the task.</p>
                    </section>
                  `,
                )
                .join("")
            : `<p class="muted">No recurring trap data yet. Guided lessons and mastery drills will build this analysis.</p>`
        }
      </div>
    </article>
    <article class="panel">
      <div class="panel__head">
        <h3>Test Review</h3>
      </div>
      <p>Use this page as the shared review loop for local drills and official-link PT work. Save the exact trap, corrected takeaway, and blind-review outcome here.</p>
      <div class="tool-row">
        <button class="bookmark-button" type="button" data-section-tool="archive">Archive</button>
        <button class="bookmark-button" type="button" data-section-tool="comment">Comment</button>
        <button class="bookmark-button" type="button" data-section-tool="note">Sticky note</button>
        <button class="bookmark-button" type="button" data-bookmark="review:current-section" data-bookmark-type="section">Bookmark</button>
      </div>
    </article>
  `;
}

function renderPlanPage() {
  const profile = activeProfile();
  return `
    <article class="panel panel--wide">
      <div class="panel__head">
        <div>
          <p class="mini-card__label">Onboarding</p>
          <h3>Personalize the command center</h3>
        </div>
        <span class="status-pill">${lastSavedLabel()}</span>
      </div>
      <form id="onboardingForm" class="plan-form">
        <label><span>Current score</span><input name="currentScore" type="number" min="120" max="180" value="${profile.currentScore}" /></label>
        <label><span>Goal score</span><input name="goalScore" type="number" min="120" max="180" value="${profile.goalScore}" /></label>
        <label><span>Test date</span><input name="testDate" type="date" value="${profile.testDate}" /><small>Used to pace your study queue. You can change this any time.</small></label>
        <label><span>Weakest section</span>
          <select name="weakestSection">
            ${["Logical Reasoning", "Reading Comprehension", "Timing", "Blind Review"].map((value) => `<option value="${value}" ${profile.weakestSection === value ? "selected" : ""}>${value}</option>`).join("")}
          </select>
        </label>
        <label><span>Daily study time</span><input name="dailyMinutes" type="number" min="10" max="240" value="${profile.dailyMinutes}" /></label>
        <button class="button button--primary" type="submit">Save onboarding</button>
      </form>
    </article>

    <article class="panel panel--wide">
      <div class="panel__head">
        <h3>Study Plan Builder</h3>
      </div>
      <form id="planForm" class="plan-form">
        <label><span>Target score</span><input name="targetScore" type="number" min="120" max="180" value="${state.plan.targetScore}" /></label>
        <label><span>Weekly hours</span><input name="weeklyHours" type="number" min="1" max="40" value="${state.plan.weeklyHours}" /></label>
        <label><span>Test date</span><input name="testDate" type="date" value="${state.plan.testDate}" /></label>
        <label><span>Emphasis</span>
          <select name="emphasis">
            ${["Balanced", "RC first", "LR first", "Timing rehab"].map((value) => `<option value="${value}" ${state.plan.emphasis === value ? "selected" : ""}>${value}</option>`).join("")}
          </select>
        </label>
        <button class="button button--primary" type="submit">Save plan</button>
      </form>
      <div class="recommendation-box">
        <h4>Recommended sequence</h4>
        <ol>
          <li>Finish ${nextLesson().title}</li>
          <li>Run the Gap Spotting drill</li>
          <li>Do one Blind Review Block</li>
          <li>Take one mixed timed set</li>
        </ol>
      </div>
    </article>
    <article class="panel panel--wide">
      <div class="panel__head">
        <div>
          <p class="mini-card__label">LawHub companion</p>
          <h3>Use official LawHub here, log results here.</h3>
        </div>
        <a class="text-link" href="https://www.lsac.org/lawhub" target="_blank" rel="noreferrer">Open LawHub</a>
      </div>
      <p>JessiPreps stores your score, timing, and reflection only. Do not paste official LSAT question text here.</p>
      <form id="lawhubForm" class="plan-form">
        <label><span>PrepTest / section</span><input name="ptSection" placeholder="PT 152 · Section 3" /></label>
        <label><span>Raw score</span><input name="rawScore" type="number" min="0" max="100" /></label>
        <label><span>Scaled score</span><input name="scaledScore" type="number" min="120" max="180" /></label>
        <label><span>Timing notes</span><input name="timingNotes" placeholder="Final five rushed; skipped Q18" /></label>
        <label class="br-field--wide"><span>Reflection</span><textarea name="reflection" rows="3" placeholder="What pattern should tomorrow's sprint target?"></textarea></label>
        <button class="button button--primary" type="submit">Log official result</button>
      </form>
      <div class="journal-list">
        ${
          state.officialLogs.length
            ? state.officialLogs.slice(0, 4).map((log) => `<section class="journal-card"><strong>${log.ptSection}</strong><p>Raw ${log.rawScore || "n/a"} · Scaled ${log.scaledScore || "n/a"}</p><p class="microcopy">${log.timingNotes || "No timing notes"} · ${log.reflection || "No reflection yet"}</p></section>`).join("")
            : `<p class="muted">No official results logged yet. Complete a LawHub section, then log the score and reflection here.</p>`
        }
      </div>
    </article>
    <article class="panel">
      <div class="panel__head">
        <h3>LSAT Writing reminder</h3>
      </div>
      <p class="microcopy">Lower-priority checklist: confirm whether you already have a valid LSAT Argumentative Writing sample on file before score release.</p>
    </article>
    <article class="panel">
      <div class="panel__head">
        <h3>Import your data</h3>
        <span class="status-pill">${state.imports.length} imports</span>
      </div>
      <p>Bring in outside study history as score notes only: date, section, raw score, scaled score, timing issue, and next action.</p>
      <button class="button button--ghost" type="button" data-import-demo>Import sample score</button>
    </article>
    <article class="panel panel--wide">
      <div class="panel__head">
        <h3>Admissions lane</h3>
        <span class="status-pill">Future module</span>
      </div>
      <div class="card-grid card-grid--four">
        <section class="mini-card"><p class="mini-card__label">Applications</p><h4>Tracker</h4><p>School, deadline, status, essay stage.</p></section>
        <section class="mini-card"><p class="mini-card__label">School data</p><h4>Targets</h4><p>Connect LSAT goal to admissions strategy.</p></section>
        <section class="mini-card"><p class="mini-card__label">Decisions</p><h4>Cycle view</h4><p>Decision tracker once applications start.</p></section>
        <section class="mini-card"><p class="mini-card__label">Scholarship</p><h4>Estimator</h4><p>Future merit-aid planning from score range.</p></section>
      </div>
    </article>
    <article class="panel">
      <div class="panel__head">
        <h3>Support</h3>
      </div>
      <div class="journal-list">
        ${state.support.map((entry) => `<section class="journal-card"><p>${entry}</p></section>`).join("")}
      </div>
      <div class="support-actions">
        <button class="button button--ghost" data-support-fill="question">Ask for help on this exact question</button>
        <button class="button button--ghost" data-support-fill="lesson">Save confusion from this lesson</button>
      </div>
    </article>
    <article class="panel">
      <div class="panel__head">
        <h3>Pricing and gated features</h3>
        <button class="status-pill status-pill--button" type="button" data-open-subscribe>Open tiers</button>
      </div>
      <div class="card-grid card-grid--three">
        <section class="mini-card"><p class="mini-card__label">Core</p><h4>Self-study</h4><p>Dashboard, lessons, drills, review, plan.</p></section>
        <section class="mini-card"><p class="mini-card__label">Live</p><h4>Future classes</h4><p>Soft-gated live sessions and recordings.</p></section>
        <section class="mini-card"><p class="mini-card__label">Coach</p><h4>Future support</h4><p>Tutor messaging and admissions strategy.</p></section>
      </div>
    </article>
  `;
}

function renderQuestionCard(question, context) {
  const attempt = state.attempts[question.id];
  return `
    <section class="question-card">
      <div class="question-card__meta">
        <p class="mini-card__label">${question.section} · ${question.family} · ${question.difficulty}</p>
        <button class="bookmark-button ${isBookmarked(question.id) ? "is-on" : ""}" type="button" data-bookmark="${question.id}" data-bookmark-type="question" aria-label="Bookmark question">${isBookmarked(question.id) ? "Saved" : "Save"}</button>
      </div>
      <p>${question.prompt}</p>
      <h4>${question.question}</h4>
      <div class="answer-grid">
        ${question.options
          .map(
            (option, index) => `
              <button
                class="answer-button ${attempt && index === question.answer ? "is-right" : ""}"
                data-question="${question.id}"
                data-choice="${index}"
                data-context="${context}"
                ${attempt ? "disabled" : ""}
              >
                ${option}
              </button>
            `,
          )
          .join("")}
      </div>
      <div id="feedback-${question.id}" class="answer-feedback">
        ${
          attempt
            ? `<strong>${attempt.correct ? "Correct." : "Review this."}</strong><p>${question.explanation}</p><p class="microcopy">Trap pattern: ${question.trapPattern}</p>${!attempt.correct && attempt.wrongChoiceText ? `<p class="microcopy">You picked: ${attempt.wrongChoiceText}</p>` : ""}`
            : ""
        }
      </div>
      ${attempt && attempt.timeSeconds != null ? `<p class="microcopy question-time">Time taken: ${attempt.timeSeconds}s${attempt.timeSeconds > 120 ? " — aim for under 90s" : ""}</p>` : ""}
    </section>
  `;
}

function liveClassCatalog() {
  return [
    {
      id: "live-flaw-30",
      title: "Flaws: Cause, Effect, and Trap Answers",
      time: "Today · 6:00 PM ET",
      level: "Core",
      focus: "Causal reasoning",
      agenda: ["5m warmup", "10m teacher breakdown", "10m You Try", "5m journal rule"],
    },
    {
      id: "live-rc-map-30",
      title: "RC Passage Maps Without Over-reading",
      time: "Tomorrow · 12:30 PM ET",
      level: "Core",
      focus: "Reading structure",
      agenda: ["3m reset", "12m map demo", "10m passage lab", "5m next drill"],
    },
    {
      id: "live-assumption-30",
      title: "Assumptions: The Missing Bridge",
      time: "Thu · 8:00 PM ET",
      level: "Advanced",
      focus: "Necessary vs sufficient",
      agenda: ["5m bridge drill", "10m examples", "10m student Q&A", "5m review queue"],
    },
  ];
}

function renderAnimationUpgradeStrip() {
  const steps = [
    ["Hook", "A 60-second story problem that makes the LSAT pattern feel real."],
    ["Teach", "Animated argument map: conclusion, evidence, missing bridge, trap."],
    ["Worked example", "Wrong answer vs right answer with visible elimination logic."],
    ["You try", "Pause point with prediction box before choices appear."],
    ["Recap", "One reusable rule saved to the journal and linked to a drill."],
  ];
  return `
    <article class="panel panel--wide animation-upgrade">
      <div class="panel__head">
        <div>
          <p class="mini-card__label">Better video lesson format</p>
          <h3>Turn every lesson into an animated 30-minute class clip.</h3>
        </div>
        <a class="button button--ghost" href="#/learn/${nextLesson().id}">Open lesson player</a>
      </div>
      <div class="animation-stage">
        <div class="teacher-avatar" aria-label="Professor Maya Brooks, AI LSAT teacher"><span>MB</span></div>
        <section>
          <h4>Professor Maya Brooks</h4>
          <p>A warm African American AI teacher persona for JessiPreps: direct, relatable, calm under pressure, and focused on making each question feel less mysterious.</p>
          <p class="microcopy">Use Sora/HeyGen/Canva later to export the storyboard frames into MP4s. The website now has the class structure ready.</p>
        </section>
      </div>
      <div class="class-agenda-grid">
        ${steps.map(([title, body], index) => `<section><i>${index + 1}</i><strong>${title}</strong><span>${body}</span></section>`).join("")}
      </div>
    </article>
  `;
}

function renderLivePage() {
  const sessions = liveClassCatalog();
  const recordings = [
    "Review Is Key: Blind Review without spiraling",
    "Weaken vs Necessary Assumption",
    "Reading Structure: Paragraph jobs in 30 minutes",
  ];
  return `
    <section class="tier-page live-page">
      <article class="tier-hero panel panel--wide">
        <div>
          <p class="mini-card__label">Live tier · soft gated</p>
          <h3>30-minute AI-teacher classes that feel like someone is actually sitting with you.</h3>
          <p>Live is where Professor Maya Brooks breaks down the lesson, asks you to predict, pauses for a You Try, and turns the miss into one journal rule.</p>
          <div class="dashboard-actions">
            <button class="button button--primary" type="button" data-live-reserve="live-flaw-30">Reserve next class</button>
            <button class="button button--ghost" type="button" data-open-subscribe>View tiers</button>
          </div>
        </div>
        <div class="teacher-card">
          <div class="teacher-avatar teacher-avatar--large"><span>MB</span></div>
          <strong>Professor Maya Brooks</strong>
          <span>AI LSAT teacher · 30-minute class host</span>
        </div>
      </article>
      ${renderAnimationUpgradeStrip()}
      <article class="panel panel--wide">
        <div class="panel__head">
          <h3>Upcoming live classes</h3>
          <span class="status-pill">30 min each</span>
        </div>
        <div class="live-class-grid">
          ${sessions.map((session) => `
            <section class="live-class-card interactive-card">
              <div class="panel__head">
                <div>
                  <p class="mini-card__label">${session.time}</p>
                  <h4>${session.title}</h4>
                </div>
                <span class="status-pill">${session.level}</span>
              </div>
              <p>${session.focus}</p>
              <ol>${session.agenda.map((item) => `<li>${item}</li>`).join("")}</ol>
              <button class="button ${state.liveReservations[session.id] ? "button--ghost" : "button--primary"}" type="button" data-live-reserve="${session.id}">
                ${state.liveReservations[session.id] ? "Reserved" : "Reserve seat"}
              </button>
            </section>
          `).join("")}
        </div>
      </article>
      <article class="panel panel--wide">
        <div class="panel__head">
          <h3>Recorded sessions</h3>
          <span class="status-pill">Live replay library</span>
        </div>
        <div class="recording-list">
          ${recordings.map((title) => `<a href="#/live" class="question-jump"><span class="lesson-row__status">▶</span><strong>${title}</strong><small>Replay · transcript · linked drill</small></a>`).join("")}
        </div>
      </article>
    </section>
  `;
}

function renderCoachPage() {
  const messages = state.coachMessages || [];
  return `
    <section class="tier-page coach-page">
      <article class="tier-hero panel panel--wide">
        <div>
          <p class="mini-card__label">Coach tier · future support</p>
          <h3>AI tutor messaging plus admissions strategy, built around your actual LSAT work.</h3>
          <p>Coach is the place to ask, "why did I miss this?" and get a direct explanation, a next drill, and an admissions-aware plan.</p>
        </div>
        <div class="coach-stack">
          <section><strong>Tutor messaging</strong><span>Question help, lesson clarification, pacing decisions.</span></section>
          <section><strong>Admissions strategy</strong><span>Score goals, school list thinking, scholarship positioning.</span></section>
        </div>
      </article>
      <article class="panel panel--wide coach-console">
        <div class="panel__head">
          <h3>Message your AI LSAT coach</h3>
          <span class="status-pill">Soft gated preview</span>
        </div>
        <form id="coachForm" class="coach-form">
          <label><span>Support type</span>
            <select name="supportType">
              <option>Break down a lesson</option>
              <option>Explain a missed question</option>
              <option>Build my next week</option>
              <option>Admissions strategy</option>
            </select>
          </label>
          <label class="br-field--wide"><span>What do you want help with?</span><textarea name="coachPrompt" rows="5" placeholder="Example: Explain necessary assumptions like I am stuck at the bridge step."></textarea></label>
          <button class="button button--primary" type="submit">Send to coach queue</button>
        </form>
        <div class="coach-message-list">
          ${messages.length ? messages.map((item) => `<section class="notice-item"><strong>${item.type}</strong><p>${item.prompt}</p><small>${new Date(item.createdAt).toLocaleString()}</small></section>`).join("") : `<p class="muted">No coach messages yet. Send one question and it will appear here with your support type.</p>`}
        </div>
      </article>
      <article class="panel panel--wide">
        <div class="panel__head">
          <h3>Admissions strategy workspace</h3>
          <button class="status-pill status-pill--button" type="button" data-open-subscribe>Upgrade preview</button>
        </div>
        <div class="class-agenda-grid">
          <section><i>1</i><strong>Score target</strong><span>Use current score, goal score, and test date from Plan.</span></section>
          <section><i>2</i><strong>School list</strong><span>Track target/reach/safety schools and median LSAT gaps.</span></section>
          <section><i>3</i><strong>Scholarship angle</strong><span>Connect score jumps to admissions positioning.</span></section>
          <section><i>4</i><strong>Personal statement</strong><span>Future review queue for essays and resume strategy.</span></section>
        </div>
      </article>
    </section>
  `;
}

function wireInteractions(route) {
  pageMount.querySelectorAll("[data-test-start]").forEach((button) => {
    button.addEventListener("click", () => {
      resetTestSession(button.dataset.testStart || "strict");
      location.hash = "#/practice/test-day";
    });
  });

  pageMount.querySelectorAll("[data-test-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const question = currentTestQuestion();
      const key = testAnswerKey(question);
      const choice = Number(button.dataset.testAnswer);
      if (state.testDay.answers[key] === choice && state.testDay.prefs.allowClear) {
        delete state.testDay.answers[key];
      } else {
        state.testDay.answers[key] = choice;
      }
      state.testDay.timeSpent[key] = Math.max(0, Math.round((Date.now() - new Date(state.testDay.sectionStartedAt).getTime()) / 1000));
      saveState();
      renderApp();
    });
  });

  pageMount.querySelectorAll("[data-test-eliminate]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = testAnswerKey(currentTestQuestion());
      const choice = Number(button.dataset.testEliminate);
      const eliminated = new Set(state.testDay.eliminated[key] || []);
      if (eliminated.has(choice)) eliminated.delete(choice);
      else eliminated.add(choice);
      state.testDay.eliminated[key] = [...eliminated];
      saveState();
      renderApp();
    });
  });

  pageMount.querySelectorAll("[data-test-prev]").forEach((button) => {
    button.addEventListener("click", () => {
      state.testDay.questionIndex = Math.max(0, state.testDay.questionIndex - 1);
      saveState();
      renderApp();
    });
  });

  pageMount.querySelectorAll("[data-test-next]").forEach((button) => {
    button.addEventListener("click", () => {
      const section = currentTestSection();
      state.testDay.questionIndex = Math.min(section.questions.length - 1, state.testDay.questionIndex + 1);
      saveState();
      renderApp();
    });
  });

  pageMount.querySelectorAll("[data-test-flag]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = testAnswerKey(currentTestQuestion());
      state.testDay.flagged[key] = !state.testDay.flagged[key];
      saveState();
      renderApp();
    });
  });

  pageMount.querySelectorAll("[data-test-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      state.testDay.questionIndex = Number(button.dataset.testJump);
      saveState();
      location.hash = "#/practice/test-day";
    });
  });

  pageMount.querySelectorAll("[data-test-review-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.testDay.reviewFilter = button.dataset.testReviewFilter;
      saveState();
      renderApp();
    });
  });

  pageMount.querySelectorAll("[data-test-submit-section]").forEach((button) => {
    button.addEventListener("click", () => submitCurrentTestSection());
  });

  pageMount.querySelectorAll("[data-test-settings]").forEach((button) => {
    button.addEventListener("click", () => {
      state.testDay.settingsOpen = !state.testDay.settingsOpen;
      saveState();
      renderApp();
    });
  });

  pageMount.querySelectorAll("[data-test-pref]").forEach((input) => {
    input.addEventListener("change", () => {
      state.testDay.prefs[input.dataset.testPref] = input.value;
      saveState();
      renderApp();
    });
  });

  pageMount.querySelectorAll("[data-test-pref-check]").forEach((input) => {
    input.addEventListener("change", () => {
      state.testDay.prefs[input.dataset.testPrefCheck] = input.checked;
      saveState();
      renderApp();
    });
  });

  pageMount.querySelectorAll("[data-test-highlight]").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = String(window.getSelection?.().toString() || "").trim();
      if (!selected) return;
      const key = testAnswerKey(currentTestQuestion());
      state.testDay.highlights[key] = [...new Set([...(state.testDay.highlights[key] || []), selected])].slice(0, 12);
      saveState();
      window.getSelection?.().removeAllRanges();
      renderApp();
    });
  });

  pageMount.querySelectorAll("[data-test-remove-highlight]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = testAnswerKey(currentTestQuestion());
      state.testDay.highlights[key] = [];
      saveState();
      renderApp();
    });
  });

  pageMount.querySelectorAll("[data-test-directions]").forEach((button) => {
    button.addEventListener("click", () => {
      window.alert("Section directions: choose the best answer for each question. Use flags and review to manage unanswered or uncertain questions. Explanations unlock after submission.");
    });
  });

  pageMount.querySelectorAll("[data-live-reserve]").forEach((button) => {
    button.addEventListener("click", () => {
      const sessionId = button.dataset.liveReserve;
      const session = liveClassCatalog().find((item) => item.id === sessionId);
      state.liveReservations[sessionId] = true;
      state.notifications.unshift({
        id: `live-${Date.now()}`,
        title: "Live class reserved",
        body: `${session?.title || "Live class"} was added to your JessiPreps Live queue.`,
        read: false,
      });
      saveState();
      renderApp();
    });
  });

  const coachForm = pageMount.querySelector("#coachForm");
  if (coachForm) {
    coachForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(coachForm);
      const prompt = String(formData.get("coachPrompt") || "").trim();
      if (!prompt) return;
      state.coachMessages.unshift({
        id: `coach-${Date.now()}`,
        type: String(formData.get("supportType") || "Coach support"),
        prompt,
        createdAt: new Date().toISOString(),
      });
      state.notifications.unshift({
        id: `coach-note-${Date.now()}`,
        title: "Coach message queued",
        body: "Your support request is saved locally in Coach.",
        read: false,
      });
      saveState();
      renderApp();
    });
  }

  pageMount.querySelectorAll("[data-bookmark]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.bookmark;
      if (state.bookmarks[id]) {
        delete state.bookmarks[id];
      } else {
        state.bookmarks[id] = {
          id,
          type: button.dataset.bookmarkType || "item",
          label: button.closest(".question-card")?.querySelector("h4")?.textContent || id,
          savedAt: new Date().toISOString(),
        };
      }
      saveState();
      renderApp();
    });
  });

  pageMount.querySelectorAll("[data-skip-block]").forEach((button) => {
    button.addEventListener("click", () => {
      const proceed = window.confirm(`You have ${state.currentBlock.unfinished} unfinished items. If you skip this practice block, JessiPreps will generate a new one from your analytics and this block will be archived.`);
      if (!proceed) return;
      state.currentBlock = { id: `block-${Date.now()}`, unfinished: 3, label: `Adaptive block: ${adaptiveDrillTarget().weak.family}` };
      state.notifications.unshift({ id: `skip-${Date.now()}`, title: "Practice block refreshed", body: "A new adaptive block was generated from your current analytics.", read: false });
      saveState();
      renderApp();
    });
  });

  pageMount.querySelectorAll("[data-import-demo]").forEach((button) => {
    button.addEventListener("click", () => {
      state.imports.unshift({ id: `import-${Date.now()}`, date: new Date().toISOString(), label: "Imported outside LR section", raw: "18/26", note: "Use official LawHub here, log results here." });
      state.officialLogs.unshift({ id: `import-lawhub-${Date.now()}`, loggedAt: new Date().toISOString(), ptSection: "Imported LR section", rawScore: "18/26", scaledScore: "", timingNotes: "Imported from outside practice", reflection: "Target the next adaptive drill from this result." });
      saveState();
      renderApp();
    });
  });

  pageMount.querySelectorAll("[data-section-tool]").forEach((button) => {
    button.addEventListener("click", () => {
      state.notifications.unshift({ id: `section-tool-${Date.now()}`, title: "Section tool saved", body: `${button.dataset.sectionTool} added to this section history row.`, read: false });
      saveState();
      renderApp();
    });
  });

  pageMount.querySelectorAll("[data-add-notification]").forEach((button) => {
    button.addEventListener("click", () => {
      state.notifications.unshift({ id: `ratings-${Date.now()}`, title: "Understand your ratings", body: "80 means reliable mastery of hard official-style questions. 100 is stretch mastery across the hardest local sets.", read: false });
      saveState();
      renderApp();
    });
  });

  pageMount.querySelectorAll("[data-open-subscribe]").forEach((button) => {
    button.addEventListener("click", () => {
      state.subscriptionIntent = "open";
      saveState();
      renderApp();
    });
  });

  pageMount.querySelectorAll("[data-save-lesson-reflection]").forEach((button) => {
    button.addEventListener("click", () => {
      const lessonId = button.dataset.saveLessonReflection;
      const lesson = data.lessons.find((item) => item.id === lessonId);
      const note = pageMount.querySelector(`[data-lesson-reflection="${lessonId}"]`)?.value.trim();
      if (!note) return;
      state.journal.unshift({
        questionId: `lesson-${lessonId}`,
        family: lesson?.linkedQuestionFamilies?.[0] || "Lesson reflection",
        trapPattern: "Lesson reflection",
        confidence: "medium",
        blindReviewOutcome: "complete",
        wrongChoiceText: "",
        whyWrong: note,
        note,
      });
      saveState();
      renderApp();
    });
  });

  pageMount.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => {
      pageMount.querySelectorAll("[data-scroll-target]").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      const target = pageMount.querySelector(`#${button.dataset.scrollTarget}`);
      target?.scrollIntoView({ behavior: state.settings.reducedMotion ? "auto" : "smooth", block: "start" });
    });
  });

  const lessonTocButtons = [...pageMount.querySelectorAll("[data-scroll-target]")];
  if (lessonTocButtons.length && "IntersectionObserver" in window) {
    const sectionMap = new Map(lessonTocButtons.map((button) => [button.dataset.scrollTarget, button]));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible?.target?.id || !sectionMap.has(visible.target.id)) return;
      lessonTocButtons.forEach((button) => button.classList.remove("is-active"));
      sectionMap.get(visible.target.id).classList.add("is-active");
    }, {
      root: null,
      rootMargin: "-18% 0px -62% 0px",
      threshold: [0.1, 0.35, 0.6],
    });
    sectionMap.forEach((_, id) => {
      const section = pageMount.querySelector(`#${id}`);
      if (section) observer.observe(section);
    });
  }

  pageMount.querySelectorAll("[data-question]").forEach((button) => {
    button.addEventListener("click", () => answerQuestion(button.dataset.question, Number(button.dataset.choice), button.dataset.context));
  });

  pageMount.querySelectorAll("[data-complete-br]").forEach((button) => {
    button.addEventListener("click", () => {
      const dueEntries = state.journal.filter((entry) => !entry.blindReviewOutcome || entry.blindReviewOutcome === "pending");
      const entry = dueEntries[Number(button.dataset.completeBr)];
      if (!entry) return;
      entry.blindReviewOutcome = "complete";
      entry.reviewedAt = new Date().toISOString();
      entry.secondPassAnswer = pageMount.querySelector(`[data-br-answer="${button.dataset.completeBr}"]`)?.value || "";
      entry.reviewConfidence = pageMount.querySelector(`[data-br-confidence="${button.dataset.completeBr}"]`)?.value || "medium";
      const note = pageMount.querySelector(`[data-br-note="${button.dataset.completeBr}"]`)?.value;
      if (note) entry.note = note;
      saveState();
      renderApp();
    });
  });

  pageMount.querySelectorAll("[data-question]").forEach((button) => {
    const qId = button.dataset.question;
    if (!questionRenderTimes[qId] && !state.attempts[qId]) {
      questionRenderTimes[qId] = Date.now();
    }
  });

  pageMount.querySelectorAll("[data-complete-lesson]").forEach((button) => {
    button.addEventListener("click", () => {
      const lessonId = button.dataset.completeLesson;
      state.lessonProgress[lessonId].complete = true;
      saveState();
      const lesson = data.lessons.find((item) => item.id === lessonId);
      location.hash = lesson.nextLessonId ? `#/learn/${lesson.nextLessonId}` : "#/practice/timed";
    });
  });

  pageMount.querySelectorAll("[data-complete-question-type]").forEach((button) => {
    button.addEventListener("click", () => {
      const lessonId = button.dataset.completeQuestionType;
      state.questionTypeProgress[lessonId].complete = true;
      saveState();
      renderApp();
    });
  });

  pageMount.querySelectorAll("[data-qt-step-next]").forEach((button) => {
    button.addEventListener("click", () => {
      const lessonId = button.dataset.qtStepNext;
      const progress = state.questionTypeProgress[lessonId];
      progress.currentStep = Math.min(4, (progress.currentStep || 1) + 1);
      saveState();
      window.scrollTo({ top: 0, behavior: "smooth" });
      renderApp();
    });
  });

  pageMount.querySelectorAll("[data-qt-step-back]").forEach((button) => {
    button.addEventListener("click", () => {
      const lessonId = button.dataset.qtStepBack;
      const progress = state.questionTypeProgress[lessonId];
      progress.currentStep = Math.max(1, (progress.currentStep || 1) - 1);
      saveState();
      window.scrollTo({ top: 0, behavior: "smooth" });
      renderApp();
    });
  });

  if (route.page === "learn" && route.id && route.id !== "content") {
    const lesson = data.lessons.find((item) => item.id === route.id);
    const questionTypeLesson = findQuestionTypeLesson(route.id);
    pageMount.querySelectorAll("[data-video-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        lessonPlaybackState.playing = !lessonPlaybackState.playing;
        scheduleLessonPlayback(lesson);
        renderApp();
      });
    });
    pageMount.querySelectorAll("[data-video-nav]").forEach((button) => {
      button.addEventListener("click", () => {
        stopLessonPlayback();
        lessonPlaybackState.sceneIndex += button.dataset.videoNav === "next" ? 1 : -1;
        lessonPlaybackState.sceneIndex = Math.max(0, Math.min(lesson.scenes.length - 1, lessonPlaybackState.sceneIndex));
        renderApp();
      });
    });
    pageMount.querySelectorAll("[data-qt-video-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        ensureQtPlayback(questionTypeLesson, button.dataset.qtPhase);
        qtPlaybackState.playing = !qtPlaybackState.playing;
        scheduleQtPlayback(questionTypeLesson);
        renderApp();
      });
    });
    pageMount.querySelectorAll("[data-qt-video-nav]").forEach((button) => {
      button.addEventListener("click", () => {
        ensureQtPlayback(questionTypeLesson, button.dataset.qtPhase);
        stopQtPlayback();
        const scenes = qtScenesForPhase(questionTypeLesson, qtPlaybackState.phase);
        qtPlaybackState.sceneIndex += button.dataset.qtVideoNav === "next" ? 1 : -1;
        qtPlaybackState.sceneIndex = Math.max(0, Math.min(scenes.length - 1, qtPlaybackState.sceneIndex));
        renderApp();
      });
    });
    pageMount.querySelectorAll("[data-qt-scene]").forEach((button) => {
      button.addEventListener("click", () => {
        ensureQtPlayback(questionTypeLesson, button.dataset.qtPhase);
        stopQtPlayback();
        qtPlaybackState.sceneIndex = Number(button.dataset.qtScene);
        renderApp();
      });
    });
    if (lesson && lessonPlaybackState.playing) {
      scheduleLessonPlayback(lesson);
    }
    if (questionTypeLesson && qtPlaybackState.playing) {
      scheduleQtPlayback(questionTypeLesson);
    }
  }

  // RC passage: begin questions
  pageMount.querySelectorAll("[data-rc-begin]").forEach((button) => {
    button.addEventListener("click", () => {
      const passageId = button.dataset.rcBegin;
      if (!state.rcProgress[passageId]) {
        state.rcProgress[passageId] = { phase: "reading", readStartTime: null, readTimeSeconds: null, mapText: "" };
      }
      const prog = state.rcProgress[passageId];
      prog.readTimeSeconds = prog.readStartTime ? Math.round((Date.now() - prog.readStartTime) / 1000) : null;
      prog.phase = "questions";
      saveState();
      window.scrollTo({ top: 0, behavior: "smooth" });
      renderApp();
    });
  });

  // RC passage: map text inputs
  pageMount.querySelectorAll("[data-passage-map]").forEach((textarea) => {
    textarea.addEventListener("input", () => {
      const passageId = textarea.dataset.passageMap;
      const para = textarea.dataset.para;
      if (!state.rcProgress[passageId]) return;
      const existing = (state.rcProgress[passageId].mapText || "").split("||").filter((t) => !t.startsWith(para + ":"));
      existing.push(`${para}:${textarea.value}`);
      state.rcProgress[passageId].mapText = existing.join("||");
      saveState();
    });
  });

  if (route.page === "practice" && route.subtype === "rc" && route.id && route.id !== "rc") {
    const passageId = route.id;
    if (state.rcProgress[passageId] && !state.rcProgress[passageId].readStartTime) {
      state.rcProgress[passageId].readStartTime = Date.now();
      saveState();
    }
  }

  if (route.page === "plan") {
    const onboardingForm = document.querySelector("#onboardingForm");
    if (onboardingForm) {
      onboardingForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(onboardingForm);
        state.onboarding = {
          currentScore: Number(formData.get("currentScore")),
          goalScore: Number(formData.get("goalScore")),
          testDate: String(formData.get("testDate")),
          weakestSection: String(formData.get("weakestSection")),
          dailyMinutes: Number(formData.get("dailyMinutes")),
        };
        state.plan.testDate = state.onboarding.testDate;
        state.plan.targetScore = state.onboarding.goalScore;
        saveState();
        renderApp();
  });
}

    const form = document.querySelector("#planForm");
    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        state.plan = {
          targetScore: Number(formData.get("targetScore")),
          weeklyHours: Number(formData.get("weeklyHours")),
          testDate: String(formData.get("testDate")),
          emphasis: String(formData.get("emphasis")),
        };
        state.onboarding.goalScore = state.plan.targetScore;
        state.onboarding.testDate = state.plan.testDate;
        saveState();
        renderApp();
      });
    }

    const lawhubForm = document.querySelector("#lawhubForm");
    if (lawhubForm) {
      lawhubForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(lawhubForm);
        state.officialLogs.unshift({
          id: `lawhub-${Date.now()}`,
          loggedAt: new Date().toISOString(),
          ptSection: String(formData.get("ptSection") || "Official LawHub section"),
          rawScore: String(formData.get("rawScore") || ""),
          scaledScore: String(formData.get("scaledScore") || ""),
          timingNotes: String(formData.get("timingNotes") || ""),
          reflection: String(formData.get("reflection") || ""),
        });
        saveState();
        renderApp();
      });
    }

    pageMount.querySelectorAll("[data-support-fill]").forEach((button) => {
      button.addEventListener("click", () => {
        state.support.unshift(
          button.dataset.supportFill === "question"
            ? "Need question-specific help: explain the exact bridge and why the trap answer felt right."
            : "Need lesson-specific help: simplify the concept and give one more worked example.",
        );
        saveState();
        renderApp();
      });
    });
  }
}

function animateCountups() {
  if (state.settings.reducedMotion) return;
  pageMount.querySelectorAll("[data-countup-value]").forEach((node) => {
    const target = Number(node.dataset.countupValue || 0);
    const suffix = node.dataset.countupSuffix || "";
    const start = performance.now();
    const duration = 650;
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      node.textContent = `${Math.round(target * eased)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

function findQuestion(questionId) {
  const bankQ = data.questionBank.find((item) => item.id === questionId);
  if (bankQ) return bankQ;
  for (const passage of (data.rcPassages || [])) {
    const passageQ = passage.questions.find((q) => q.id === questionId);
    if (passageQ) return passageQ;
  }
  return null;
}

function answerQuestion(questionId, choice, context) {
  const question = findQuestion(questionId);
  const correct = choice === question.answer;
  const wrongChoiceText = correct ? null : question.options[choice];
  const timeSeconds = questionRenderTimes[questionId]
    ? Math.round((Date.now() - questionRenderTimes[questionId]) / 1000)
    : null;
  delete questionRenderTimes[questionId];
  state.attempts[questionId] = {
    correct,
    choice,
    context,
    wrongChoiceText,
    confidence: correct ? "steady" : "shaky",
    timeSeconds,
  };
  if ((context || "").includes("drill") || (context || "").includes("timed")) {
    state.currentBlock.unfinished = Math.max(0, (state.currentBlock.unfinished || 0) - 1);
  }

  question.lessonIds.forEach((lessonId) => {
    if (correct) {
      if (state.lessonProgress[lessonId]) {
        state.lessonProgress[lessonId].masteryWins += 1;
      }
    } else {
      state.journal.unshift({
        questionId,
        family: question.family,
        trapPattern: question.trapPattern,
        confidence: "high",
        blindReviewOutcome: "pending",
        wrongChoiceText,
        whyWrong: buildMissAnalysis(question),
        note: `${buildMissAnalysis(question)} Relearn: ${question.explanation}`,
      });
    }
  });

  const questionTypeLesson = (data.questionTypeLessons || []).find((lesson) => lesson.family === question.family);
  if (questionTypeLesson) {
    if (correct) {
      if ((context || "").includes("guided")) {
        state.questionTypeProgress[questionTypeLesson.id].guidedWins += 1;
      } else {
        state.questionTypeProgress[questionTypeLesson.id].drillWins += 1;
      }
    }
  }

  saveState();
  renderApp();
}

if (!location.hash) {
  location.hash = "#/dashboard";
}

document.body.classList.add("sidebar-collapsed");
renderApp();
