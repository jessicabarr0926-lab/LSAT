const APP_KEY = "jessipreps-v1";
const data = window.JESSI_PREPS_DATA;

const navRail = document.querySelector("#navRail");
const settingsPanel = document.querySelector("#settingsPanel");
const todayCard = document.querySelector("#todayCard");
const routeEyebrow = document.querySelector("#routeEyebrow");
const routeTitle = document.querySelector("#routeTitle");
const heroMount = document.querySelector("#heroMount");
const pageMount = document.querySelector("#pageMount");
const sidebarToggle = document.querySelector("#sidebarToggle");
const sidebarClose = document.querySelector("#sidebarClose");
let lessonPlaybackTimer = null;
let lessonPlaybackState = { lessonId: null, sceneIndex: 0, playing: false };
let qtPlaybackTimer = null;
let qtPlaybackState = { lessonId: null, phase: "step1", sceneIndex: 0, playing: false };

const state = loadState();

document.querySelector("#quickStart").addEventListener("click", () => {
  location.hash = `#/learn/${nextLesson().id}`;
});

document.querySelector("#openWeakest").addEventListener("click", () => {
  location.hash = "#/practice/drill/gap-work";
});

sidebarToggle?.addEventListener("click", () => {
  if (window.innerWidth <= 1200) {
    document.body.classList.toggle("sidebar-open");
  } else {
    document.body.classList.toggle("sidebar-collapsed");
  }
});

sidebarClose?.addEventListener("click", () => {
  document.body.classList.remove("sidebar-open");
});

window.addEventListener("hashchange", renderApp);

function defaultState() {
  return {
    settings: Object.fromEntries(data.settings.map((item) => [item.id, false])),
    lessonProgress: Object.fromEntries(data.lessons.map((lesson) => [lesson.id, { complete: false, masteryWins: 0 }])),
    questionTypeProgress: Object.fromEntries((data.questionTypeLessons || []).map((lesson) => [lesson.id, { complete: false, guidedWins: 0, drillWins: 0 }])),
    attempts: {},
    journal: [],
    support: [...data.supportEntries],
    plan: { ...data.studyPlanDefaults },
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
      attempts: parsed.attempts || {},
      journal: parsed.journal || [],
      support: parsed.support || base.support,
      plan: { ...base.plan, ...(parsed.plan || {}) },
    };
  } catch {
    return base;
  }
}

function saveState() {
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

function nextLesson() {
  return data.lessons.find((lesson) => !state.lessonProgress[lesson.id]?.complete) || data.lessons[0];
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
  if (window.innerWidth <= 1200) {
    document.body.classList.remove("sidebar-open");
  }
  const route = routeInfo();
  renderRouteMeta(route);
  renderPage(route);
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
  navRail.innerHTML = data.navigation
    .map(
      (item) => `
        <a class="nav__link ${route === item.route ? "is-active" : ""}" href="#/${item.route}">
          <span>${item.label}</span>
        </a>
      `,
    )
    .join("");
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

function renderDashboardHero() {
  const lesson = nextLesson();
  const weak = weakestFamily();
  return `
    <section class="hero-card">
      <div class="hero-copy">
        <p class="eyebrow">${data.appMeta.currentPrepTest}</p>
        <h3>Your LSAT command center should tell you what to do next, not make you decide from scratch.</h3>
        <p class="hero-copy">
          Readiness ${data.appMeta.readinessScore}. Raw ${data.appMeta.rawScore}. Scaled ${data.appMeta.scaledScore}. Target ${data.appMeta.targetScore}.
        </p>
        <div class="hero-actions">
          <a class="button button--primary" href="#/learn/${lesson.id}">Start ${lesson.title}</a>
          <a class="button button--ghost" href="#/practice/drill/gap-work">Drill ${weak.family}</a>
        </div>
      </div>
      <div class="hero-metrics">
        <article><span>Completed lessons</span><strong>${completedLessons()}/${data.lessons.length}</strong></article>
        <article><span>Question bank</span><strong>${data.questionBank.length}</strong></article>
        <article><span>Journal entries</span><strong>${state.journal.length}</strong></article>
      </div>
    </section>
  `;
}

function renderDashboardPage() {
  const weak = weakestFamily();
  const lesson = nextLesson();
  const studyModes = data.studyModes.slice(0, 3);
  return `
    <section class="dashboard-grid">
      <article class="dashboard-card dashboard-card--hero">
        <div class="dashboard-card__head">
          <div>
            <p class="mini-card__label">Next best move</p>
            <h3>${lesson.title}</h3>
          </div>
          <span class="status-pill">Readiness ${data.appMeta.readinessScore}</span>
        </div>
        <p>${lesson.summary}</p>
        <div class="dashboard-actions">
          <a class="button button--primary" href="#/learn/${lesson.id}">Start lesson</a>
          <a class="button button--ghost" href="#/practice/drill/gap-work">Drill ${weak.family}</a>
        </div>
        <div class="dashboard-metrics">
          <section class="mini-card"><p class="mini-card__label">Scaled score</p><h4>${data.appMeta.scaledScore}</h4><p>Current snapshot from ${data.appMeta.currentPrepTest}</p></section>
          <section class="mini-card"><p class="mini-card__label">Question bank</p><h4>${data.questionBank.length}</h4><p>Original questions across RC and LR families</p></section>
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
          <div class="today-pill"><span>Journal entries</span><strong>${state.journal.length}</strong></div>
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
          <h3>Study Queue</h3>
          <a class="text-link" href="#/plan">Open plan</a>
        </div>
        <div class="queue-list">
          ${studyModes.map((mode, index) => `
            <section class="queue-row">
              <strong>${index + 1}. ${mode.title}</strong>
              <span>${index === 0 ? "Today" : index === 1 ? "After lesson" : "This week"}</span>
              <p>${mode.description}</p>
            </section>
          `).join("")}
        </div>
      </article>

      <article class="dashboard-card dashboard-card--progress">
        <div class="dashboard-card__head">
          <h3>Homework Progress</h3>
        </div>
        <div class="progress-stack">
          <section class="progress-item progress-item--primary"><strong>${lesson.title}</strong><p>${state.lessonProgress[lesson.id]?.masteryWins || 0}/${data.lessons.find((item) => item.id === lesson.id)?.masteryThreshold || 3} mastery wins</p></section>
          <section class="progress-item"><strong>${weak.family}</strong><p>${weak.score}% accuracy so far</p></section>
          <section class="progress-item"><strong>Review loop</strong><p>${state.journal.length} misses saved for analysis</p></section>
        </div>
      </article>

      <article class="dashboard-card dashboard-card--roadmap">
        <div class="dashboard-card__head">
          <h3>Roadmap</h3>
        </div>
        <div class="roadmap dashboard-roadmap">
          ${data.roadmapSteps.map((step) => `<section class="roadmap__step"><strong>${step.band}</strong><p>${step.focus}</p></section>`).join("")}
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
  return `
    <article class="panel panel--wide">
      <div class="panel__head">
        <h3>${lesson.title}</h3>
        <span class="status-pill ${progress.complete ? "is-done" : ""}">${progress.complete ? "Mastered" : `${progress.masteryWins}/${lesson.masteryThreshold} mastery wins`}</span>
      </div>
      <p>${lesson.summary}</p>
      <section class="lesson-video">
        <div class="lesson-video__player">
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
  const questions = familyQuestions(lesson.family);
  const guided = questions.slice(0, 3);
  const drill = questions.slice(3, 11);
  const attempts = familyAttempts(lesson.family);
  const accuracy = attempts.length ? Math.round((attempts.filter((item) => state.attempts[item.id].correct).length / attempts.length) * 100) : 0;
  const analysis = buildDrillAnalysis(lesson.family);
  const topTrap = analysis.topTraps[0]?.trap || lesson.traps[0];
  return `
    <article class="panel panel--wide">
      <div class="panel__head">
        <h3>${lesson.title}</h3>
        <span class="status-pill ${progress.complete ? "is-done" : ""}">${progress.complete ? "Mastered" : `${progress.guidedWins + progress.drillWins} wins logged`}</span>
      </div>
      <p>${lesson.summary}</p>
      <div class="card-grid card-grid--three">
        <section class="mini-card">
          <p class="mini-card__label">Family</p>
          <h4>${lesson.family}</h4>
          <p>${lesson.section} question type</p>
        </section>
        <section class="mini-card">
          <p class="mini-card__label">Accuracy so far</p>
          <h4>${accuracy}%</h4>
          <p>${attempts.length} attempts logged</p>
        </section>
        <section class="mini-card">
          <p class="mini-card__label">Trap pattern</p>
          <h4>${topTrap}</h4>
          <p>${familyTrapSummary(lesson.family)}</p>
        </section>
      </div>
    </article>
    <article class="panel">
      <div class="panel__head">
        <h3>Step 1. Video Breakdown Lesson</h3>
      </div>
      <p>This first video teaches what this family is really asking, how to recognize it quickly, and the core framework pulled into original language from the books.</p>
      ${renderQtVideoPanel(lesson, "step1", "5-scene lesson")}
    </article>
    <article class="panel">
      <div class="panel__head">
        <h3>Step 2. Solve Method + Trap Answers Video</h3>
      </div>
      <p>This second video slows the process down, shows the solve sequence, and contrasts the wrong answers that keep stealing points from you.</p>
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
    </article>
    <article class="panel panel--wide">
      <div class="panel__head">
        <h3>Step 3. Guided Questions</h3>
      </div>
      <p>Answer these by forcing the method, not by guessing. Each guided question puts the process in front of you before you pick an answer.</p>
      <div class="practice-list">
        ${guided
          .map(
            (question) => `
              <section class="question-card">
                <div class="method-enforcer">
                  <p class="mini-card__label">Method enforcer</p>
                  <div class="method-enforcer__grid">
                    <section><strong>Step 1</strong><p>${lesson.method[0]}</p></section>
                    <section><strong>Step 2</strong><p>${lesson.method[1]}</p></section>
                    <section><strong>Step 3</strong><p>${lesson.method[2]}</p></section>
                  </div>
                  <p class="microcopy"><strong>Trap warning:</strong> ${lesson.traps[0]}</p>
                </div>
                ${renderQuestionCard(question, "guided")}
              </section>
            `,
          )
          .join("")}
      </div>
    </article>
    <article class="panel panel--wide">
      <div class="panel__head">
        <h3>Step 4. Mastery Drill</h3>
      </div>
      <p>Complete this 5-10 question drill for mastery. The analysis system below updates after every answer and shows what is repeatedly going wrong.</p>
      <div class="practice-list">
        ${drill.map((question) => renderQuestionCard(question, "mastery")).join("")}
      </div>
      <button class="button button--primary" data-complete-question-type="${lesson.id}" ${progress.drillWins < 5 ? "disabled" : ""}>${progress.drillWins < 5 ? `Need ${5 - progress.drillWins} more drill wins` : "Mark question type mastered"}</button>
      ${progress.drillWins >= 5 ? `<p class="microcopy">Mastery gate unlocked. You have enough drill wins to mark this question type complete.</p>` : ""}
    </article>
    <article class="panel panel--wide">
      <div class="panel__head">
        <h3>Why You Are Missing This Type</h3>
      </div>
      <div class="card-grid card-grid--four">
        <section class="mini-card">
          <p class="mini-card__label">Accuracy</p>
          <h4 class="analysis-score ${analysis.accuracy >= 80 ? "is-strong" : analysis.accuracy >= 60 ? "is-medium" : "is-weak"}">${analysis.accuracy}%</h4>
          <p>${analysis.attempts} attempts logged for ${lesson.family}.</p>
        </section>
        <section class="mini-card">
          <p class="mini-card__label">High-confidence misses</p>
          <h4>${analysis.highConfidenceMisses}</h4>
          <p>These are the misses most likely caused by a repeatable process error, not simple confusion.</p>
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
          <p class="mini-card__label">Wrong answer choices you keep picking</p>
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

function renderPracticePage(route) {
  if (route.subtype === "drill") {
    const preset = data.drillPresets.find((item) => item.id === route.id) || data.drillPresets[0];
    const questions = data.questionBank.filter((question) => preset.families.includes(question.family)).slice(0, preset.count);
    return `
      <article class="panel panel--wide">
        <div class="panel__head">
          <h3>${preset.title}</h3>
          <span class="status-pill">${preset.rationale}</span>
        </div>
        <p>Adaptive focus: ${weakestFamily().family}. This preset is chosen because of weak performance plus incomplete mastery.</p>
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
          <h3>Timed Tests</h3>
          <span class="status-pill">Official-link hybrid</span>
        </div>
        <div class="card-grid card-grid--four">
          <section class="mini-card"><p class="mini-card__label">Section 1</p><h4>Scored LR</h4><p>10 original questions</p></section>
          <section class="mini-card"><p class="mini-card__label">Section 2</p><h4>Scored RC</h4><p>5 original questions</p></section>
          <section class="mini-card"><p class="mini-card__label">Section 3</p><h4>Scored LR</h4><p>10 original questions</p></section>
          <section class="mini-card"><p class="mini-card__label">Section 4</p><h4>Variable</h4><p>Original mixed section</p></section>
        </div>
        <p class="microcopy">Use local simulated sections for skill-building, then jump out to official materials for licensed PrepTest review.</p>
        <div class="link-list">
          ${data.officialLinks.map((link) => `<a class="chip-link" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}
        </div>
      </article>
      <article class="panel">
        <div class="panel__head">
          <h3>Sample Scored LR Block</h3>
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
  return `
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
        <h3>Timed Tests</h3>
        <a class="text-link" href="#/practice/timed">Open test center</a>
      </div>
      <p>Local simulated sections plus official review links. No copied official LSAT content is stored locally.</p>
    </article>
  `;
}

function renderReviewPage() {
  const weak = weakestFamily();
  const trapGroups = state.journal.reduce((acc, entry) => {
    acc[entry.trapPattern] = (acc[entry.trapPattern] || 0) + 1;
    return acc;
  }, {});
  const topTraps = Object.entries(trapGroups).sort((a, b) => b[1] - a[1]).slice(0, 3);
  return `
    <article class="panel panel--wide">
      <div class="panel__head">
        <h3>Analytics</h3>
      </div>
      <div class="card-grid card-grid--four">
        <section class="mini-card"><p class="mini-card__label">Weakest family</p><h4>${weak.family}</h4><p>${weak.score}% accuracy</p></section>
        <section class="mini-card"><p class="mini-card__label">Blind review gap</p><h4>${data.analyticsSnapshots.blindReviewGap}</h4><p>First try vs second try spread</p></section>
        <section class="mini-card"><p class="mini-card__label">Confidence mismatch</p><h4>Watch weaken + assumption</h4><p>${data.analyticsSnapshots.confidenceMismatch}</p></section>
        <section class="mini-card"><p class="mini-card__label">Recommended next path</p><h4>${nextLesson().title}</h4><p>Then ${weak.family} drill</p></section>
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
    </article>
  `;
}

function renderPlanPage() {
  return `
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
        <h3>Classes, Automations, Plugins</h3>
      </div>
      <div class="card-grid card-grid--three">
        <section class="mini-card"><p class="mini-card__label">Classes</p><h4>Weekly live review slot</h4><p>Placeholder for future class scheduling.</p></section>
        <section class="mini-card"><p class="mini-card__label">Automations</p><h4>Remind me to blind review</h4><p>Product extension surface reserved for future integration.</p></section>
        <section class="mini-card"><p class="mini-card__label">Plugins</p><h4>Calendar + question help</h4><p>Reserved product surface for future workflows.</p></section>
      </div>
    </article>
  `;
}

function renderQuestionCard(question, context) {
  const attempt = state.attempts[question.id];
  return `
    <section class="question-card">
      <p class="mini-card__label">${question.section} · ${question.family} · ${question.difficulty}</p>
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
    </section>
  `;
}

function wireInteractions(route) {
  pageMount.querySelectorAll("[data-question]").forEach((button) => {
    button.addEventListener("click", () => answerQuestion(button.dataset.question, Number(button.dataset.choice), button.dataset.context));
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

  if (route.page === "plan") {
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

function answerQuestion(questionId, choice, context) {
  const question = data.questionBank.find((item) => item.id === questionId);
  const correct = choice === question.answer;
  const wrongChoiceText = correct ? null : question.options[choice];
  state.attempts[questionId] = {
    correct,
    choice,
    context,
    wrongChoiceText,
    confidence: correct ? "steady" : "shaky",
  };

  question.lessonIds.forEach((lessonId) => {
    if (correct) {
      state.lessonProgress[lessonId].masteryWins += 1;
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

renderApp();
