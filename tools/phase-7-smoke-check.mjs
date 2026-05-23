import fs from "node:fs";
import vm from "node:vm";

const root = new URL("../", import.meta.url);
const read = (path) => fs.readFileSync(new URL(path, root), "utf8");
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const indexSource = read("index.html");
const appSource = read("app.js");
const contentSource = read("content.js");
const safetySource = read("js/safety.js");

assert(indexSource.includes("./js/safety.js"), "index.html does not load js/safety.js.");
assert(indexSource.indexOf("./js/safety.js") < indexSource.indexOf("./app.js"), "js/safety.js must load before app.js.");
assert(!appSource.includes("function escapeHtml(value)"), "escapeHtml should stay in js/safety.js, not app.js.");
assert(!appSource.includes("function safeContentUrl(value)"), "safeContentUrl should stay in js/safety.js, not app.js.");

const safetyContext = {};
vm.createContext(safetyContext);
vm.runInContext(safetySource, safetyContext, { filename: "js/safety.js" });
assert(
  safetyContext.escapeHtml('<script>alert("xss")</script>') === "&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;",
  "escapeHtml did not escape script text.",
);
assert(safetyContext.safeContentUrl("javascript:alert(1)") === "", "safeContentUrl allowed javascript: URLs.");
assert(safetyContext.safeContentUrl("#/dashboard") === "#/dashboard", "safeContentUrl blocked hash routes.");

[
  "dashboard",
  "learn",
  "content",
  "practice",
  "review",
  "plan",
  "live",
  "coach",
  "settings",
  "roadmap",
].forEach((route) => {
  assert(contentSource.includes(`route: "${route}"`), `Missing active SPA route: ${route}`);
});

[
  "testAttempts",
  "lessonProgress",
  "contentDrafts",
  "documentLinks",
  "reviewNotes",
  "reviewStatus",
  "studyPlanTasks",
  "tutorWorkspace",
  "backupTools",
].forEach((key) => {
  assert(appSource.includes(key), `State/data safety key missing from app.js: ${key}`);
});

[
  "renderTestDayPage",
  "renderContentPage",
  "renderReviewPage",
  "renderPlanPage",
  "renderCoachPage",
  "renderRoadmapPage",
  "renderSettingsPage",
].forEach((renderer) => {
  assert(appSource.includes(`function ${renderer}`), `Missing renderer: ${renderer}`);
});

const legacyFiles = [
  "analytics.html",
  "content.html",
  "drills.html",
  "journal.html",
  "lesson-player.html",
  "plan.html",
  "review.html",
  "tests.html",
];
legacyFiles.forEach((file) => {
  assert(read(file).includes("legacy-redirect.js"), `Legacy redirect missing from ${file}`);
});

console.log("Phase 7 architecture smoke checks passed.");
