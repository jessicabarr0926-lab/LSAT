# Phase 1 Browser Smoke Test

Use this after each Phase 1 change or GitHub Pages deploy.

1. Open `index.html#/dashboard`.
   - Confirm the dashboard renders and the Smart Analytics strip appears.
2. Open `index.html#/learn`.
   - Confirm the syllabus renders and a lesson link opens.
3. Open `index.html#/practice`.
   - Confirm the practice page renders.
4. Open `index.html#/review`.
   - Confirm the review page renders.
5. Open `index.html#/practice/test-day`.
   - Confirm the test-day simulator renders.
6. Open `index.html#/learn/ka-lr-flaw-video`.
   - Confirm the lesson shows a visible `Sample MP4` or `Native MP4` badge and the video player loads.
7. From Review, save a note containing:
   - `<script>alert("xss")</script>`
   - Confirm the note displays as text. No alert should run.
8. Answer one sample question, then complete Blind Review for that miss.
   - Confirm dashboard/review analytics update from local data.
   - If there is no completed Blind Review yet, the gap should say `Not enough data yet`.
9. Open an old URL such as `analytics.html` or `lesson-player.html?id=rc-structure-map`.
   - Confirm it redirects into the hash SPA instead of showing the old standalone UI.
10. Test the same hash routes on GitHub Pages after deploy.
   - Direct links should remain under `index.html#/...` and survive refresh.

Quick static check:

```bash
node tools/phase-1-smoke-check.mjs
```
