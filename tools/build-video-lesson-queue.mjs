import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const ROOT = path.resolve(import.meta.dirname, "..");
const DATA_FILE = path.join(ROOT, "requested-lessons-data.js");
const OUT_DIR = path.join(ROOT, "video-lessons");
const PROMPT_DIR = path.join(OUT_DIR, "prompts");
const JSONL_FILE = path.join(OUT_DIR, "sora-lesson-queue.jsonl");
const MANIFEST_FILE = path.join(OUT_DIR, "lesson-video-manifest.md");
const DOWNLOAD_MAP_FILE = path.join(OUT_DIR, "download-map.json");

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72);
}

function tableCell(value) {
  return String(value).replace(/\|/g, "\\|");
}

function loadLessons() {
  const code = fs.readFileSync(DATA_FILE, "utf8");
  const sandbox = {
    window: {
      JESSI_PREPS_DATA: {
        lessons: [],
      },
    },
  };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: DATA_FILE });
  return sandbox.window.JESSI_PREPS_DATA.lessons;
}

function promptForLesson(lesson, index) {
  const sceneLines = lesson.scenes
    .map((scene, sceneIndex) => `${sceneIndex + 1}. ${scene.title}: ${scene.explanation}`)
    .join("\n");
  const isReading = lesson.track.startsWith("RC");
  const palette = isReading ? "deep teal, soft white, ink navy, warm coral" : "midnight blue, white, electric mint, warm amber";
  const subject = isReading
    ? "animated LSAT Reading Comprehension passage map with moving paragraph labels, viewpoint arrows, and proof highlights"
    : "animated LSAT Logical Reasoning explainer with evidence, conclusion, gap, and answer-choice cards";

  return `Use case: JessiPreps website video lesson
Primary request: Create a concise animated LSAT explainer for "${lesson.title}".
Scene/background: Clean premium educational dashboard, crisp white workspace, subtle dark sidebar hints, no clutter.
Subject: ${subject}.
Action: Show a short title card, then animate the lesson method through four storyboard beats.
Camera: Locked 16:9 screen-recording style composition with gentle push-ins and smooth card transitions.
Lighting/mood: Bright, calm, focused, polished, student-friendly.
Color palette: ${palette}.
Style/format: Modern 2D motion graphics, readable UI cards, minimal icons, no human presenters.
Timing/beats:
${sceneLines}
Audio: Clear friendly educational voiceover summarizing the method; no music lyrics.
Text (verbatim): "${lesson.title}"
Dialogue:
- Narrator: "${lesson.summary}"
Constraints: Keep on-screen text short and legible. Use only generic LSAT-style examples, not official LSAT questions. Avoid real people, faces, copyrighted brands, copyrighted music, and dense paragraphs.
Avoid: shaky camera, tiny text, fake official logos, legal advice, cluttered slides, unreadable answer choices.`;
}

function build() {
  const lessons = loadLessons();
  fs.mkdirSync(PROMPT_DIR, { recursive: true });

  const queueLines = [];
  const manifestRows = [];
  const downloadMap = [];

  lessons.forEach((lesson, index) => {
    const prompt = promptForLesson(lesson, index);
    const number = String(index + 1).padStart(3, "0");
    const promptPath = path.join(PROMPT_DIR, `${number}-${lesson.id}.txt`);
    const jobJson = `${number}-${lesson.id}.json`;
    const outFile = `output/videos/lessons/${number}-${slugify(lesson.title)}.mp4`;
    fs.writeFileSync(promptPath, `${prompt}\n`);
    queueLines.push(
      JSON.stringify({
        prompt,
        model: "sora-2",
        size: "1280x720",
        seconds: "20",
        out: jobJson,
      }),
    );
    downloadMap.push({
      number,
      id: lesson.id,
      title: lesson.title,
      jobJson,
      outFile,
    });
    manifestRows.push(`| ${number} | \`${lesson.id}\` | ${tableCell(lesson.title)} | ${tableCell(lesson.track)} | ${tableCell(lesson.statusLabel)} | \`${outFile}\` |`);
  });

  fs.writeFileSync(JSONL_FILE, `${queueLines.join("\n")}\n`);
  fs.writeFileSync(DOWNLOAD_MAP_FILE, `${JSON.stringify(downloadMap, null, 2)}\n`);
  fs.writeFileSync(
    MANIFEST_FILE,
    `# JessiPreps MP4 Lesson Video Manifest

Generated from \`requested-lessons-data.js\`.

## Render Settings

- Provider queue: Sora
- Model: \`sora-2\`
- Size: \`1280x720\`
- Duration: \`20\` seconds per lesson
- Prompt queue: \`video-lessons/sora-lesson-queue.jsonl\`
- Prompt files: \`video-lessons/prompts/\`
- Download map: \`video-lessons/download-map.json\`
- Intended MP4 output folder: \`output/videos/lessons/\`

## Important

This manifest prepares the 127 MP4 render jobs. Running the queue will call the paid video API once per lesson.

## Lessons

| # | Lesson ID | Title | Track | Type | Intended MP4 |
| --- | --- | --- | --- | --- | --- |
${manifestRows.join("\n")}
`,
  );

  console.log(`Prepared ${lessons.length} lesson video prompts.`);
  console.log(JSONL_FILE);
  console.log(DOWNLOAD_MAP_FILE);
  console.log(MANIFEST_FILE);
}

build();
