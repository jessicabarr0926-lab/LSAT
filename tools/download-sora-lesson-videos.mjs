import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = path.resolve(import.meta.dirname, "..");
const MAP_FILE = path.join(ROOT, "video-lessons", "download-map.json");
const JOB_DIR = process.argv[2] || path.join(ROOT, "output", "videos", "sora-jobs");
const SORA_CLI = process.env.SORA_CLI || path.join(process.env.HOME || "", ".codex", "skills", "sora", "scripts", "sora.py");

function readJobId(jobPath) {
  const raw = fs.readFileSync(jobPath, "utf8");
  const json = JSON.parse(raw);
  return json.id || json.video?.id || json.data?.id || json.response?.id;
}

function run() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is not set.");
  }
  const map = JSON.parse(fs.readFileSync(MAP_FILE, "utf8"));
  fs.mkdirSync(path.join(ROOT, "output", "videos", "lessons"), { recursive: true });

  for (const item of map) {
    const jobPath = path.join(JOB_DIR, item.jobJson);
    if (!fs.existsSync(jobPath)) {
      console.log(`skip missing job json: ${item.jobJson}`);
      continue;
    }
    const outPath = path.join(ROOT, item.outFile);
    if (fs.existsSync(outPath)) {
      console.log(`skip existing mp4: ${item.outFile}`);
      continue;
    }
    const id = readJobId(jobPath);
    if (!id) {
      console.log(`skip no video id in: ${item.jobJson}`);
      continue;
    }
    console.log(`poll/download ${item.number} ${item.title}`);
    const result = spawnSync(
      "uv",
      [
        "run",
        "--with",
        "openai",
        "python",
        SORA_CLI,
        "poll",
        "--id",
        id,
        "--download",
        "--variant",
        "video",
        "--out",
        outPath,
      ],
      { stdio: "inherit" },
    );
    if (result.status !== 0) {
      process.exit(result.status || 1);
    }
  }
}

run();
