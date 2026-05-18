// Keep old standalone URLs useful while making the hash SPA the one canonical app.
(function redirectLegacyPageToSpa() {
  const fileName = window.location.pathname.split("/").pop();
  const staticRoutes = {
    "analytics.html": "#/review",
    "automations.html": "#/plan",
    "classes.html": "#/live",
    "content.html": "#/learn",
    "drills.html": "#/practice",
    "explanations.html": "#/review",
    "journal.html": "#/review",
    "jessipreps-v2.html": "#/dashboard",
    "lessons.html": "#/learn",
    "plan.html": "#/plan",
    "plugins.html": "#/settings",
    "question-bank.html": "#/practice",
    "review.html": "#/review",
    "support.html": "#/coach",
    "tests.html": "#/practice/timed",
    "lesson-argument-basics.html": "#/learn/ka-lr-introduction-arguments",
    "lesson-assumptions.html": "#/learn/ka-lr-necessary-assumptions-video",
    "lesson-conclusion-evidence.html": "#/learn/ka-lr-types-conclusions",
    "lesson-flaws.html": "#/learn/ka-lr-flaw-video",
    "lesson-main-point.html": "#/learn/ka-lr-identify-conclusion-quick",
    "lesson-rc-structure.html": "#/learn/rc-structure-map",
    "lesson-role.html": "#/learn/ka-lr-role-video",
    "lesson-technique.html": "#/learn/ka-lr-technique-video",
  };

  let targetHash = staticRoutes[fileName];
  if (fileName === "lesson-player.html") {
    const lessonId = new URLSearchParams(window.location.search).get("id");
    targetHash = lessonId ? `#/learn/${encodeURIComponent(lessonId)}` : "#/learn";
  }
  if (!targetHash) return;

  const destination = new URL("./index.html", window.location.href);
  destination.hash = targetHash;
  window.location.replace(destination.href);
})();
