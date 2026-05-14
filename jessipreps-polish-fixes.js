(function () {
  "use strict";

  function lessonFocus(title, fallback) {
    return String(title || "")
      .replace(/\s*\|\s*(Quick Guide|Learn More|Video Lesson|Worked Example|Examples).*$/i, "")
      .replace(/^A\s+Quick\s+Guide\s+to\s+/i, "")
      .replace(/^Working\s+with\s+/i, "")
      .replace(/\s*\|\s*(Humanities|Law|Science|Social Science).*$/i, "")
      .trim()
      .toLowerCase() || String(fallback || "LSAT task").toLowerCase();
  }

  function normalizeLessonSummaries() {
    const data = window.JESSI_PREPS_DATA;
    if (!data || !Array.isArray(data.lessons)) return;
    data.lessons.forEach((lesson) => {
      if (!/\|\s*Quick Guide/i.test(lesson.title || "")) return;
      const focus = lessonFocus(lesson.title, lesson.linkedQuestionFamilies?.[0] || lesson.videoTheme);
      lesson.summary = `Quick guide: the fastest method for ${focus}, its most tempting trap, and the next practice move.`;
    });
  }

  function patchActivityBars() {
    const bars = document.querySelectorAll(".activity-bars section");
    if (!bars.length) return;
    const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
    bars.forEach((section, index) => {
      const bar = section.querySelector("i");
      if (!bar) return;
      section.classList.toggle("is-today", index === todayIndex);
      if (/No local activity/i.test(section.title || "")) {
        bar.style.height = "0%";
      }
      if (index === todayIndex && !section.title) {
        section.title = "Today";
      }
    });
  }

  function patchLessonRows() {
    document.querySelectorAll(".lesson-row").forEach((row) => {
      const title = row.querySelector("strong")?.textContent || "";
      const summary = row.querySelector("small");
      if (!summary || !/\|\s*Quick Guide/i.test(title)) return;
      const focus = lessonFocus(title);
      const next = `Quick guide: the fastest method for ${focus}, its most tempting trap, and the next practice move.`;
      if (summary.textContent !== next) summary.textContent = next;
    });
  }

  function patchDashboardCopy() {
    const studyQuality = document.querySelector(".metric-tile--green h3")?.nextElementSibling;
    if (studyQuality && /Study quality/i.test(studyQuality.textContent || "")) {
      const next = studyQuality.textContent.replace(/Study quality\s+(\d+\/100).*/, "Study quality $1 · streak + review habits");
      if (studyQuality.textContent !== next) studyQuality.textContent = next;
      studyQuality.title = "Study quality combines streak, answered questions, Blind Review, journal rules, and saved plan setup.";
    }

    const brGap = document.querySelector(".metric-tile--navy h3")?.nextElementSibling;
    if (brGap) {
      const next = brGap.textContent.replace(/due today.*/, "due today · first try vs second pass");
      if (brGap.textContent !== next) brGap.textContent = next;
      brGap.title = "Estimated spread between first-try performance and second-pass Blind Review performance. Lower is better.";
    }

    const activityCopy = document.querySelector(".dashboard-card--activity .microcopy");
    if (activityCopy) {
      let next = activityCopy.textContent;
      if (!/Daily target:[^.]+from Plan\./.test(next)) {
        next = next.replace(/Daily target: ([^.]+)\./, "Daily target: $1 from Plan.");
      }
      if (!/Next LSAT: \d+ days from saved date\./.test(next)) {
        next = next.replace(/Next LSAT: (\d+) days\./, "Next LSAT: $1 days from saved date.");
      }
      if (activityCopy.textContent !== next) activityCopy.textContent = next;
    }
  }

  function patchFooter() {
    const footer = document.querySelector(".app-footer");
    if (!footer) return;
    if (footer.dataset.polished === "true") return;
    footer.dataset.polished = "true";
    footer.innerHTML = `
      <span>© JessiPreps</span>
      <span>Personal localStorage LSAT workspace</span>
      <a href="mailto:jessipreps@example.com">Contact</a>
      <a href="#/plan">Plan setup</a>
    `;
  }

  function patchFlowLinks() {
    document.querySelectorAll("[data-flow-step]").forEach((link) => {
      if (link.dataset.flowPatched === "true") return;
      link.dataset.flowPatched = "true";
      link.addEventListener("click", () => {
        try {
          const raw = localStorage.getItem("jessipreps-v1") || localStorage.getItem("jessipreps-study-state-v2");
          if (!raw) return;
          const state = JSON.parse(raw);
          state.notifications = state.notifications || [];
          state.notifications.unshift({
            id: `flow-${Date.now()}`,
            title: `Today Flow: ${link.dataset.flowStep}`,
            body: "The daily sprint is learn, drill, review, log, then stop with tomorrow's target set.",
            read: true,
          });
          state.lastSavedAt = new Date().toISOString();
          state.journalEntries = state.journal || state.journalEntries || [];
          const serialized = JSON.stringify(state);
          ["jessipreps-v1", "jessipreps-study-state-v2", "lexiprep-study-state-v2"].forEach((key) => localStorage.setItem(key, serialized));
        } catch {
          // Flow links should still navigate if localStorage is unavailable.
        }
      }, { once: true });
    });
  }

  function patchSidebarDefault() {
    if (window.matchMedia("(min-width: 1201px)").matches) {
      document.body.classList.remove("sidebar-collapsed");
    }
  }

  function patchCoachCopy() {
    const consolePanel = document.querySelector(".coach-console");
    if (!consolePanel || consolePanel.querySelector("[data-local-coach-note]")) return;
    if (/Coach answers locally from your lesson content/i.test(consolePanel.textContent || "")) return;
    const note = document.createElement("p");
    note.className = "microcopy";
    note.dataset.localCoachNote = "true";
    note.textContent = "Coach answers locally from your lesson content, original questions, answered-question history, journal tags, and mistake patterns. No backend is required for typed help.";
    consolePanel.querySelector(".recommendation-box")?.after(note);
  }

  function applyPolishFixes() {
    patchSidebarDefault();
    patchActivityBars();
    patchLessonRows();
    patchDashboardCopy();
    patchFooter();
    patchFlowLinks();
    patchCoachCopy();
  }

  normalizeLessonSummaries();

  const style = document.createElement("style");
  style.textContent = `
    .nav__link[data-route="dashboard"]::before { content: "🏠" !important; }
    .activity-bars section { min-height: 132px; }
    .activity-bars i { min-height: 0; }
    .activity-bars section:not(.is-today) i[style*="height: 0%"],
    .activity-bars section:not(.is-today) i[style*="height:0%"] {
      background: transparent;
      border-top: 2px solid rgba(110, 106, 137, 0.18);
    }
    .activity-bars section.is-today span {
      color: var(--ink);
      font-weight: 800;
    }
    body:not([data-route="learn"]):not([data-route="live"]) .maya-teacher {
      display: none;
    }
    @media (min-width: 1201px) {
      body:not(.sidebar-collapsed):not(.sidebar-auto-hide) .sidebar-fab { display: none; }
    }
  `;
  document.head.appendChild(style);

  window.addEventListener("hashchange", () => setTimeout(applyPolishFixes, 0));
  new MutationObserver(() => applyPolishFixes()).observe(document.body, { childList: true, subtree: true });
  setTimeout(applyPolishFixes, 0);
})();
