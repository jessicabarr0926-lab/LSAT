import fs from "node:fs";
import vm from "node:vm";

const root = new URL("../", import.meta.url);
const read = (path) => fs.readFileSync(new URL(path, root), "utf8");
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const appSource = read("app.js");
const contentSource = read("content.js");
const manifestSource = read("video-lessons/media-manifest.js");
const lessonsSource = read("requested-lessons-data.js");
const safetySource = read("js/safety.js");
const indexSource = read("index.html");

const dataContext = { window: {}, console };
dataContext.window = dataContext;
vm.createContext(dataContext);
vm.runInContext(contentSource, dataContext, { filename: "content.js" });
vm.runInContext(manifestSource, dataContext, { filename: "media-manifest.js" });
vm.runInContext(lessonsSource, dataContext, { filename: "requested-lessons-data.js" });

const data = dataContext.JESSI_PREPS_DATA;
const renderedLessons = data.lessons.filter((lesson) => lesson.videoPath);
const renderedFiles = new Set((dataContext.JESSI_VIDEO_MANIFEST || []).map((entry) => entry.outFile));

assert(appSource.includes('page: parts[0] || "dashboard"'), "SPA route parser is missing.");
["dashboard", "learn", "practice", "review", "plan", "live", "coach", "settings"].forEach((route) => {
  assert(contentSource.includes(`route: "${route}"`), `Missing active SPA route: ${route}`);
});
assert(renderedLessons.length > 0, "No MP4-backed lessons were found after normalization.");
assert(renderedFiles.size === 127, `Expected 127 unique MP4 files, found ${renderedFiles.size}.`);
assert(data.videoCoverage.nativeMp4Lessons >= 127, `Expected at least 127 MP4-backed lessons, found ${data.videoCoverage.nativeMp4Lessons}.`);
assert(!appSource.includes("data.analyticsSnapshots.blindReviewGap"), "Static Blind Review Gap is still referenced.");

const escapeContext = {};
vm.createContext(escapeContext);
vm.runInContext(`${safetySource}; globalThis.result = escapeHtml('<script>alert(\"xss\")</script>');`, escapeContext);
assert(
  escapeContext.result === "&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;",
  "escapeHtml did not render script markup as text.",
);
assert(indexSource.indexOf("js/safety.js") < indexSource.indexOf("app.js"), "safety helpers must load before app.js.");

const legacyFiles = [
  "analytics.html",
  "automations.html",
  "classes.html",
  "content.html",
  "drills.html",
  "explanations.html",
  "journal.html",
  "lessons.html",
  "plan.html",
  "plugins.html",
  "question-bank.html",
  "review.html",
  "support.html",
  "tests.html",
  "jessipreps-v2.html",
  "lesson-argument-basics.html",
  "lesson-assumptions.html",
  "lesson-conclusion-evidence.html",
  "lesson-flaws.html",
  "lesson-main-point.html",
  "lesson-player.html",
  "lesson-rc-structure.html",
  "lesson-role.html",
  "lesson-technique.html",
];
legacyFiles.forEach((file) => {
  assert(read(file).includes("legacy-redirect.js"), `Legacy redirect missing from ${file}`);
});

console.log("Phase 1 smoke checks passed.");
console.log(`MP4-backed lessons: ${renderedLessons.length}`);
console.log(`Unique rendered MP4 files: ${renderedFiles.size}`);
