#!/usr/bin/env python3
"""Render compact MP4 lesson videos from the existing LSAT storyboard prompts."""

from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
import tempfile
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

try:
    import imageio_ffmpeg
except Exception as exc:  # pragma: no cover - friendly CLI failure
    raise SystemExit(
        "imageio-ffmpeg is required. Run: python3 -m pip install --user imageio-ffmpeg"
    ) from exc


ROOT = Path(__file__).resolve().parents[1]
MAP_PATH = ROOT / "video-lessons" / "download-map.json"
PROMPTS_DIR = ROOT / "video-lessons" / "prompts"
WIDTH = 854
HEIGHT = 480
FPS = 12
SLIDE_SECONDS = 4


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Supplemental/Helvetica.ttc",
        "/Library/Fonts/Arial.ttf",
    ]
    for path in candidates:
        if path and Path(path).exists():
            return ImageFont.truetype(path, size=size)
    return ImageFont.load_default()


TITLE_FONT = font(38, bold=True)
SUBTITLE_FONT = font(22, bold=True)
BODY_FONT = font(24)
SMALL_FONT = font(17)
TINY_FONT = font(14)


def wrap_text(draw: ImageDraw.ImageDraw, text: str, face: ImageFont.ImageFont, max_width: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if draw.textbbox((0, 0), candidate, font=face)[2] <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def extract_field(prompt: str, field: str) -> str:
    pattern = rf"^{re.escape(field)}:\s*(.*?)(?=^[A-Z][A-Za-z /()\"|.-]+:\s|\Z)"
    match = re.search(pattern, prompt, re.MULTILINE | re.DOTALL)
    return re.sub(r"\s+", " ", match.group(1)).strip() if match else ""


def extract_beats(prompt: str) -> list[str]:
    timing = extract_field(prompt, "Timing/beats")
    beats = re.findall(r"\d+\.\s*(.*?)(?=\s+\d+\.|\Z)", timing)
    cleaned = [re.sub(r"\s+", " ", beat).strip() for beat in beats if beat.strip()]
    return cleaned[:4]


def prompt_file_for(entry: dict) -> Path:
    stem = Path(entry["jobJson"]).with_suffix(".txt").name
    return PROMPTS_DIR / stem


def lesson_slides(entry: dict, prompt: str) -> list[dict[str, str]]:
    beats = extract_beats(prompt)
    while len(beats) < 4:
        beats.append("Practice the task, predict the answer's job, and review every miss for the reusable rule.")
    return [
        {
            "label": "JessiPreps LSAT",
            "headline": entry["title"],
            "body": "A focused lesson for naming the task, spotting the logic, and avoiding attractive trap answers.",
        },
        {"label": "What this trains", "headline": "Read for the job", "body": beats[0]},
        {"label": "Core method", "headline": "Do the work first", "body": beats[1]},
        {"label": "Trap control", "headline": "Reject close-but-wrong", "body": beats[2]},
        {"label": "Next move", "headline": "Turn it into points", "body": beats[3]},
    ]


def narration(entry: dict, prompt: str) -> str:
    beats = extract_beats(prompt)
    parts = [
        f"{entry['title']}.",
        "First, name the question's job before reading the answers.",
    ]
    if beats:
        parts.append(beats[1] if len(beats) > 1 else beats[0])
    parts.extend(
        [
            "Reject answers that merely reuse familiar words while changing the logical force.",
            "After the lesson, drill a few examples and journal the rule you want to reuse.",
        ]
    )
    return " ".join(parts)


def draw_slide(slide: dict[str, str], number: str, total: int, index: int, out_path: Path) -> None:
    image = Image.new("RGB", (WIDTH, HEIGHT), "#f7faf8")
    draw = ImageDraw.Draw(image)

    draw.rectangle((0, 0, WIDTH, 82), fill="#10233f")
    draw.rectangle((0, 82, WIDTH, 92), fill="#28d6a3")
    draw.rounded_rectangle((34, 26, 184, 56), radius=10, fill="#1f3556")
    draw.text((52, 34), f"Lesson {number}", fill="#baf7df", font=TINY_FONT)
    draw.text((WIDTH - 136, 34), f"{index + 1} / {total}", fill="#ffffff", font=TINY_FONT)

    y = 128
    draw.text((58, y), slide["label"].upper(), fill="#247762", font=SMALL_FONT)
    y += 34
    for line in wrap_text(draw, slide["headline"], TITLE_FONT, WIDTH - 116)[:2]:
        draw.text((58, y), line, fill="#10233f", font=TITLE_FONT)
        y += 46

    y += 16
    draw.rounded_rectangle((58, y, WIDTH - 58, HEIGHT - 84), radius=18, fill="#ffffff", outline="#d8e7df", width=2)
    draw.rectangle((58, y, 68, HEIGHT - 84), fill="#f6b44b")
    text_y = y + 34
    for line in wrap_text(draw, slide["body"], BODY_FONT, WIDTH - 160)[:6]:
        draw.text((94, text_y), line, fill="#21354d", font=BODY_FONT)
        text_y += 34

    draw.text((58, HEIGHT - 42), "Generic LSAT-style instruction. No official LSAT questions.", fill="#64758a", font=TINY_FONT)
    image.save(out_path)


def render_video(entry: dict, force: bool = False) -> bool:
    out_path = ROOT / entry["outFile"]
    if out_path.exists() and not force:
        return False

    prompt_path = prompt_file_for(entry)
    if not prompt_path.exists():
        raise FileNotFoundError(f"Missing prompt file: {prompt_path}")
    prompt = prompt_path.read_text(encoding="utf-8")
    slides = lesson_slides(entry, prompt)
    out_path.parent.mkdir(parents=True, exist_ok=True)

    ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
    with tempfile.TemporaryDirectory(prefix=f"lesson-{entry['number']}-") as tmp_name:
        tmp = Path(tmp_name)
        slide_paths = []
        for idx, slide in enumerate(slides):
            slide_path = tmp / f"slide-{idx}.png"
            draw_slide(slide, entry["number"], len(slides), idx, slide_path)
            slide_paths.append(slide_path)

        audio_path = tmp / "voiceover.aiff"
        subprocess.run(
            ["say", "-v", "Samantha", "-r", "178", "-o", str(audio_path), narration(entry, prompt)],
            check=True,
        )

        cmd = [ffmpeg, "-y"]
        for slide_path in slide_paths:
            cmd.extend(["-loop", "1", "-t", str(SLIDE_SECONDS), "-i", str(slide_path)])
        cmd.extend(["-i", str(audio_path)])

        concat_inputs = "".join(f"[{idx}:v]" for idx in range(len(slide_paths)))
        filter_complex = (
            f"{concat_inputs}concat=n={len(slide_paths)}:v=1:a=0,"
            f"fps={FPS},format=yuv420p[v]"
        )
        tmp_video = tmp / "lesson.mp4"
        cmd.extend(
            [
                "-filter_complex",
                filter_complex,
                "-map",
                "[v]",
                "-map",
                f"{len(slide_paths)}:a",
                "-c:v",
                "libx264",
                "-preset",
                "veryfast",
                "-crf",
                "34",
                "-c:a",
                "aac",
                "-b:a",
                "48k",
                "-shortest",
                "-movflags",
                "+faststart",
                str(tmp_video),
            ]
        )
        subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        shutil.move(str(tmp_video), out_path)
    return True


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--limit", type=int, default=None, help="Render only the first N lessons.")
    parser.add_argument("--force", action="store_true", help="Overwrite existing MP4s.")
    args = parser.parse_args()

    entries = json.loads(MAP_PATH.read_text(encoding="utf-8"))
    if args.limit:
        entries = entries[: args.limit]

    rendered = 0
    skipped = 0
    for entry in entries:
        changed = render_video(entry, force=args.force)
        rendered += int(changed)
        skipped += int(not changed)
        print(f"{'rendered' if changed else 'skipped'} {entry['number']} {entry['title']}")
    print(f"Done. Rendered {rendered}; skipped {skipped}.")


if __name__ == "__main__":
    main()
