#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SORA_CLI="${SORA_CLI:-$HOME/.codex/skills/sora/scripts/sora.py}"
QUEUE="${1:-$ROOT/video-lessons/sora-lesson-queue.jsonl}"
OUT_DIR="${2:-$ROOT/output/videos/sora-jobs}"
CONCURRENCY="${SORA_CONCURRENCY:-1}"

if [[ ! -f "$QUEUE" ]]; then
  echo "Queue not found: $QUEUE" >&2
  echo "Run: node tools/build-video-lesson-queue.mjs" >&2
  exit 1
fi

if [[ -z "${OPENAI_API_KEY:-}" ]]; then
  echo "OPENAI_API_KEY is not set. Set it locally before rendering videos." >&2
  exit 1
fi

mkdir -p "$OUT_DIR" "$ROOT/output/videos/lessons"

uv run --with openai python "$SORA_CLI" create-batch \
  --input "$QUEUE" \
  --out-dir "$OUT_DIR" \
  --concurrency "$CONCURRENCY"
