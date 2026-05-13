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
let lessonPlaybackTimer = null;
let lessonPlaybackState = { lessonId: null, sceneIndex: 0, playing: false };
let qtPlaybackTimer = null;
let qtPlaybackState = { lessonId: null, phase: "step1", sceneIndex: 0, playing: false };
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
  if (notificationBell) notificationBell.textContent = String(unreadNotifications());
  if (subscribeCta) subscribeCta.classList.toggle("is-active", state.subscriptionIntent === "open");
  if (notificationBell) notificationBell.classList.toggle("is-active", state.notificationsOpen);
  if (!document.querySelector(".sidebar-backdrop")) {
    const backdrop = document.createElement("div");
    backdrop.className = "sidebar-backdrop";
    backdrop.addEventListener("click", () => document.body.classList.remove("sidebar-open"));
    document.body.appendChild(backdrop);
  }
  document.body.classList.remove("sidebar-open");
  const route = routeInfo();
  renderRouteMeta(route);
  renderPage(route);
  wireNoticeLayer();
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
  heroMount.innerHTML = route.page === "dashboard" ? renderDashboardHero() : "";
  const pageRenderers = {
    dashboard: renderDashboardPage,
    learn: renderLearnPage,
    practice: renderPracticePage,
    review: renderReviewPage,
    plan: renderPlanPage,
  };
  pageMount.innerHTML = (pageRenderers[route.page] || renderDashboardPage)(route);
  wireInteractions(route);
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
          <section><strong>Core</strong><span>Self-study, lessons, drills, journal</span></section>
          <section><strong>Live</strong><span>Future classes, office hours, recorded sessions</span></section>
          <section><strong>Coach</strong><span>Future admissions and one-on-one review</span></section>
        </div>
        <p class="microcopy">Premium surfaces are product placeholders until the course is ready to sell.</p>
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
  const studyModes = data.studyModes.slice(0, 3);
  const trend = scoreTrend();
  const testDays = daysUntilTest();
  const profile = activeProfile();
  // SRS-lite: a journal entry is "due" until its blindReviewOutcome is
  // marked complete. Treats missing/undefined outcomes as still pending
  // so older entries surface here too.
  const journalCount = state.journal.length;
  const dueEntries = state.journal.filter(
    (entry) => !entry.blindReviewOutcome || entry.blindReviewOutcome === "pending"
  );
  const dueCount = dueEntries.length;
  const dueHeadline =
    dueCount > 0
      ? `${dueCount} ${dueCount === 1 ? "question" : "questions"} ready for re-attempt`
      : journalCount === 0
      ? "Review queue starts after your first miss"
      : "All caught up. Nice work.";
  const dueBlurb =
    dueCount > 0
      ? "Blind-review misses that haven't been re-attempted. Clearing this queue is the single highest-leverage thing you can do today."
      : journalCount === 0
      ? "Answer practice questions and any miss will land here automatically for spaced re-attempt."
      : "Every recorded miss has been reviewed. New misses will appear here as you drill.";
  const dueCta = dueCount > 0 ? "Start review session" : "Open review log";
  return `
    <section class="dashboard-grid">
      <article class="dashboard-card dashboard-card--hero">
        <div class="dashboard-card__head">
          <div>
            <p class="mini-card__label">Start today</p>
            <h3>12-minute LSAT sprint</h3>
          </div>
          <span class="status-pill">${lastSavedLabel()}</span>
        </div>
        <p>6 ${weak.family} questions -> Blind Review misses -> journal one rule. One rule per miss.</p>
        <div class="dashboard-actions">
          <a class="button button--primary sprint-cta" href="#/practice/drill/${adaptive.preset.id}">Start today's sprint</a>
          <a class="button button--ghost" href="#/practice/drill/${adaptive.preset.id}">Build adaptive drill</a>
          <a class="button button--ghost" href="#/practice/timed">Timed section</a>
        </div>
        <div class="dashboard-metrics">
          <section class="mini-card"><p class="mini-card__label">Scaled score</p><h4>${data.appMeta.scaledScore}</h4><p>Current snapshot from ${data.appMeta.currentPrepTest}</p></section>
          <section class="mini-card"><p class="mini-card__label">Projected range</p><h4>${data.appMeta.scaledScore - scoreVariance()}-${data.appMeta.scaledScore + scoreVariance()}</h4><p>Variance ${scoreVariance()} points</p></section>
          <section class="mini-card"><p class="mini-card__label">Blind review gap</p><h4>${data.analyticsSnapshots.blindReviewGap} pts</h4><p>${data.analyticsSnapshots.confidenceMismatch}</p></section>
        </div>
      </article>

      <article class="dashboard-card dashboard-card--profile">
        <div class="dashboard-profile">
          <div class="dashboard-avatar">JB</div>
          <div>
            <h3>Jessica Barr</h3>
            <p class="microcopy">JessiPreps study profile</p>
          </div>
        </div>
        <div class="today-stack">
          <div class="today-pill"><span>Target</span><strong>${data.appMeta.targetScore}</strong></div>
          <div class="today-pill"><span>Weakest family</span><strong>${weak.family}</strong></div>
          <div class="today-pill"><span>Streak</span><strong>${streakDays()} days</strong></div>
          <div class="today-pill"><span>Next LSAT</span><strong>${testDays === null ? "Set date" : `${testDays} days`}</strong></div>
          <div class="today-pill"><span>Daily time</span><strong>${profile.dailyMinutes} min</strong></div>
        </div>
      </article>

      <article class="dashboard-card dashboard-card--table">
        <div class="dashboard-card__head">
          <div>
            <p class="mini-card__label">First-click fix</p>
            <h3>Every shared dashboard URL opens complete.</h3>
          </div>
          <span class="status-pill">Route guard on</span>
        </div>
        <p>/LSAT/, /LSAT/index.html, and /LSAT/index.html#/dashboard all land on this full command center with useful fallback states instead of a sparse shell.</p>
        <div class="dashboard-actions">
          <a class="button button--ghost" href="#/practice/drill/${adaptive.preset.id}">Build recommended drill</a>
          <a class="button button--ghost" href="#/plan">Build study plan</a>
        </div>
      </article>

      <article class="dashboard-card dashboard-card--table">
        <div class="dashboard-card__head">
          <h3>Today Flow</h3>
          <span class="status-pill">Learn · Drill · Review · Log · Stop</span>
        </div>
        <div class="today-flow-grid">
          <a href="#/learn/${lesson.id}"><strong>Learn</strong><span>${lesson.title}</span></a>
          <a href="#/practice/drill/${adaptive.preset.id}"><strong>Drill</strong><span>6 ${weak.family} questions</span></a>
          <a href="#/review"><strong>Review</strong><span>Blind Review misses</span></a>
          <a href="#/review"><strong>Log</strong><span>One reusable rule</span></a>
          <a href="#/dashboard"><strong>Stop</strong><span>Protect tomorrow's streak</span></a>
        </div>
      </article>

      <article class="dashboard-card dashboard-card--progress">
        <div class="dashboard-card__head">
          <h3>Family mastery</h3>
          <button class="status-pill status-pill--button" type="button" data-add-notification="ratings">Understand your ratings</button>
        </div>
        <div class="mastery-stack">
          <section class="mastery-row"><span>Logical Reasoning</span><strong>${masteryRating("LR")}</strong><div><i style="width:${masteryRating("LR")}%"></i></div></section>
          <section class="mastery-row"><span>Reading Comprehension</span><strong>${masteryRating("RC")}</strong><div><i style="width:${masteryRating("RC")}%"></i></div></section>
          <section class="official-pips"><span>Official logs</span><strong>${"●".repeat(Math.min(5, officialTestCount()))}${"○".repeat(Math.max(0, 5 - Math.min(5, officialTestCount())))}</strong></section>
          <p class="microcopy">Ratings blend accuracy, completed attempts, and recent review behavior so the next drill is chosen for you.</p>
        </div>
      </article>

      <article class="dashboard-card dashboard-card--progress">
        <div class="dashboard-card__head">
          <h3>Study Quality</h3>
          <span class="status-pill">${studyQualityScore()}/100</span>
        </div>
        <div class="quality-dial" style="--quality:${studyQualityScore()}%">
          <strong>${studyQualityScore()}</strong>
          <span>habit score</span>
        </div>
        <p class="microcopy">Measures consistency, Blind Review follow-through, onboarding, and logged official work.</p>
      </article>

      <article class="dashboard-card dashboard-card--due" style="border-left: 4px solid ${dueCount > 0 ? "#f59e0b" : "#9ca3af"};">
        <div class="dashboard-card__head">
          <div>
            <p class="mini-card__label" style="color:${dueCount > 0 ? "#b45309" : "inherit"};">Due today</p>
            <h3>${dueHeadline}</h3>
          </div>
          <span class="status-pill" aria-label="Pending review items">${dueCount}</span>
        </div>
        <p>${dueBlurb}</p>
        <div class="dashboard-actions">
          <a class="button button--primary" href="#/review">${dueCta}</a>
          ${
            dueCount > 0
              ? `<span class="microcopy" style="align-self:center;">Cleared queues correlate with the biggest blind-review-gap drops.</span>`
              : ""
          }
        </div>
      </article>

      <article class="dashboard-card dashboard-card--courses">
        <div class="dashboard-card__head">
          <h3>Study Tracks</h3>
          <a class="text-link" href="#/learn">View all</a>
        </div>
        <div class="course-strip">
          ${data.lessons.slice(0, 3).map((item, index) => `
            <a class="course-card course-card--${index + 1}" href="#/learn/${item.id}">
              <p class="mini-card__label">${item.track}</p>
              <h4>${item.title}</h4>
              <p>${item.summary}</p>
            </a>
          `).join("")}
        </div>
      </article>

      <article class="dashboard-card dashboard-card--table">
        <div class="dashboard-card__head">
          <h3>Adaptive Study Queue</h3>
          <a class="text-link" href="#/plan">Open plan</a>
        </div>
        <div class="queue-list">
          <section class="queue-row">
            <strong>1. Auto-built drill: ${adaptive.weak.family}</strong>
            <span>Now</span>
            <p>${adaptive.preset.rationale}. This replaces manual drill picking when you want one-click practice.</p>
          </section>
          ${studyModes.map((mode, index) => `
            <section class="queue-row">
              <strong>${index + 2}. ${mode.title}</strong>
              <span>${index === 0 ? "Today" : index === 1 ? "After lesson" : "This week"}</span>
              <p>${mode.description}</p>
            </section>
          `).join("")}
        </div>
      </article>

      <article class="dashboard-card dashboard-card--progress">
        <div class="dashboard-card__head">
          <h3>Score Trend</h3>
          <span class="status-pill">90 days</span>
        </div>
        <div class="trend-chart" aria-label="Score trend chart">
          ${trend.map((point) => `<section style="--score:${Math.max(8, (point.score - 130) * 2)}%"><span>${point.score}</span><i></i><small>${point.label}</small></section>`).join("")}
          <p class="microcopy">Use this with variance to see whether your score is stabilizing, not just rising once.</p>
        </div>
      </article>

      <article class="dashboard-card dashboard-card--roadmap">
        <div class="dashboard-card__head">
          <h3>Practice Modes</h3>
          <a class="text-link" href="#/practice">Open practice</a>
        </div>
        <div class="roadmap dashboard-roadmap">
          <a class="roadmap__step" href="#/practice/drill/${adaptive.preset.id}"><strong>Adaptive Drill</strong><p>One-click session based on weakest family.</p></a>
          <a class="roadmap__step" href="#/practice/timed"><strong>Timed Section</strong><p>35-minute proctored section mode.</p></a>
          <a class="roadmap__step" href="#/practice/timed"><strong>Practice Test</strong><p>Four-section simulator with review handoff.</p></a>
          <a class="roadmap__step" href="#/review"><strong>Blind Review</strong><p>Re-answer before explanations unlock.</p></a>
        </div>
      </article>

      <article class="dashboard-card dashboard-card--table">
        <div class="dashboard-card__head">
          <h3>Scale features, staged safely</h3>
          <span class="status-pill">Below the line</span>
        </div>
        <div class="feature-lane">
          <section><strong>Community</strong><span>Discussion forum, tutor chat, leaderboard</span></section>
          <section><strong>Live</strong><span>Classes, office hours, recorded sessions</span></section>
          <section><strong>Admissions</strong><span>Applications, school data, scholarship estimator</span></section>
        </div>
        <p class="microcopy">These are visible as product lanes but kept secondary until the core study loop is strong.</p>
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
  return `
    <article class="panel panel--wide">
      <div class="panel__head">
        <h3>Content Hub</h3>
        <a href="#/learn/${nextLesson().id}" class="text-link">Open featured lesson</a>
      </div>
      <p>Guided sequence: RC structure first, then LR fundamentals, then advanced LR families, then timed integration and review.</p>
      <div class="learn-focus">
        <section class="learn-focus__lead">
          <p class="mini-card__label">Featured next step</p>
          <h4>${nextLesson().title}</h4>
          <p>${nextLesson().summary}</p>
          <a class="button button--primary" href="#/learn/${nextLesson().id}">Continue lesson path</a>
        </section>
        <section class="learn-focus__meta">
          <div class="today-pill">
            <span>Flagship lessons</span>
            <strong>${data.lessons.length}</strong>
          </div>
          <div class="today-pill">
            <span>Question-type academy</span>
            <strong>${(data.questionTypeLessons || []).length}</strong>
          </div>
          <div class="today-pill">
            <span>Best use</span>
            <strong>Learn first, then drill</strong>
          </div>
        </section>
      </div>
    </article>
    <article class="panel panel--wide">
      <div class="panel__head">
        <h3>Flagship Lesson Path</h3>
      </div>
      <div class="card-grid card-grid--two">
        ${data.lessons
          .map((lesson) => `
            <a class="lesson-card" href="#/learn/${lesson.id}">
              <p class="mini-card__label">${lesson.track}</p>
              <h4>${lesson.title}</h4>
              <p>${lesson.summary}</p>
              <span class="status-pill ${state.lessonProgress[lesson.id]?.complete ? "is-done" : ""}">${state.lessonProgress[lesson.id]?.complete ? "Completed" : lesson.statusLabel}</span>
            </a>
          `)
          .join("")}
      </div>
    </article>
    <article class="panel">
      <div class="panel__head">
        <h3>Explanations</h3>
      </div>
      <p>Frameworks here are designed to turn misses into reusable rules: structure before detail, bridge before answer choice, and trap pattern before retry.</p>
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
  const video = buildLessonVideo(lesson);
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
    <article class="panel panel--wide">
      <div class="panel__head">
        <h3>${lesson.title}</h3>
        <span class="status-pill ${progress.complete ? "is-done" : ""}">${progress.complete ? "Mastered" : `${progress.masteryWins}/${lesson.masteryThreshold} mastery wins`}</span>
      </div>
      <p>${lesson.summary}</p>
      <section class="lesson-video">
        <div class="lesson-video__player">
          <div class="lesson-mp4-slot" data-mp4-slot="${lesson.id}"></div>
          <p class="mini-card__label">Video lesson</p>
          <h4>${lesson.title} in ${video.runtime}</h4>
          <p>This lesson is structured like a 5-10 minute walkthrough: concept first, then worked example, then trap-answer coaching, then your practice launch.</p>
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
          <div class="video-progress">
            <span style="width:${progressPercent}"></span>
          </div>
          <div class="video-timeline">
            ${video.chapters.map((chapter, index) => `<span class="${index === lessonPlaybackState.sceneIndex ? "is-active" : ""}" style="flex:${chapter.minutes}">${chapter.title}</span>`).join("")}
          </div>
        </div>
        <div class="lesson-video__chapters">
          ${video.chapters
            .map(
              (chapter, index) => `
                <section class="video-chapter ${index === lessonPlaybackState.sceneIndex ? "is-active" : ""}">
                  <strong>0${index + 1}. ${chapter.title}</strong>
                  <span>${chapter.minutes} min</span>
                  <p>${chapter.summary}</p>
                </section>
              `,
            )
            .join("")}
        </div>
      </section>
      <div class="scene-stack">
        ${lesson.scenes
          .map(
            (scene, index) => `
              <section class="scene-card">
                <p class="mini-card__label">${scene.type} scene ${index + 1}</p>
                <h4>${scene.title}</h4>
                <p>${scene.explanation}</p>
                <div class="scene-card__story">${scene.storyboard}</div>
                <div class="scene-card__cue">${scene.actionCue}</div>
              </section>
            `,
          )
          .join("")}
      </div>
    </article>
    <article class="panel">
      <div class="panel__head">
        <h3>Worked Example</h3>
      </div>
      <p><strong>Prompt:</strong> ${lesson.workedExample.prompt}</p>
      <p>${lesson.workedExample.reasoning}</p>
      <p class="microcopy"><strong>Trap pattern:</strong> ${lesson.trapExplanation}</p>
      <div class="transcript-block">
        <p class="mini-card__label">Video transcript excerpt</p>
        <p>Start by naming the core move: ${lesson.scenes[0]?.explanation || lesson.summary}</p>
        <p>Then walk the learner through the worked example: ${lesson.workedExample.reasoning}</p>
        <p>Close by warning against the trap: ${lesson.trapExplanation}</p>
      </div>
    </article>
    <article class="panel">
      <div class="panel__head">
        <h3>Linked Practice</h3>
      </div>
      <div class="practice-list">
        ${linkedQuestions.map((question) => renderQuestionCard(question, "lesson")).join("")}
      </div>
      <button class="button button--primary" data-complete-lesson="${lesson.id}" ${progress.masteryWins < lesson.masteryThreshold ? "disabled" : ""}>Pass mastery gate</button>
      <a class="text-link" href="${lesson.nextLessonId ? `#/learn/${lesson.nextLessonId}` : "#/practice/timed"}">What to do next</a>
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

function renderPracticePage(route) {
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
    const lrQuestions = data.questionBank.filter((question) => question.section === "LR").slice(0, 10);
    const rcQuestions = data.questionBank.filter((question) => question.section === "RC").slice(0, 5);
    return `
      <article class="panel panel--wide">
        <div class="panel__head">
          <h3>Timed Section + Practice Test Center</h3>
          <span class="status-pill">35 min section mode</span>
        </div>
        <div class="card-grid card-grid--four">
          <section class="mini-card"><p class="mini-card__label">Resume</p><h4>Timed Section · PT 152.3</h4><p>29 min left · LR mixed set</p></section>
          <section class="mini-card"><p class="mini-card__label">Timed Section</p><h4>35:00 proctor</h4><p>One scored section with review handoff.</p></section>
          <section class="mini-card"><p class="mini-card__label">Practice Test</p><h4>4 sections</h4><p>LR, RC, LR, variable with full-test score summary.</p></section>
          <section class="mini-card"><p class="mini-card__label">Skip protection</p><h4>3 unfinished items</h4><p>Skipping replaces the block with a new analytics-built set.</p></section>
        </div>
        <p class="microcopy">Use local simulated sections for skill-building, then jump out to official materials for licensed PrepTest review.</p>
        <div class="link-list">
          ${data.officialLinks.map((link) => `<a class="chip-link" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}
        </div>
      </article>
      <article class="panel">
        <div class="panel__head">
          <h3>35-minute LR Section</h3>
          <button class="status-pill status-pill--button" type="button" data-bookmark="timed:lr-section" data-bookmark-type="section">${isBookmarked("timed:lr-section") ? "Saved" : "Save section"}</button>
        </div>
        <div class="practice-list">${lrQuestions.slice(0, 3).map((question) => renderQuestionCard(question, "timed")).join("")}</div>
      </article>
      <article class="panel">
        <div class="panel__head">
          <h3>Sample RC Block</h3>
        </div>
        <div class="practice-list">${rcQuestions.slice(0, 2).map((question) => renderQuestionCard(question, "timed")).join("")}</div>
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
        <a class="button button--ghost" href="#/practice/timed">Start timed section</a>
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

function renderReviewPage() {
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
        <label><span>Test date</span><input name="testDate" type="date" value="${profile.testDate}" /></label>
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

function wireInteractions(route) {
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
