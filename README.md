# LexiPrep LSAT Study Dashboard

Open `index.html` in a browser. The app is now a multi-page local website that shares one `styles.css` file and one `script.js` study engine.

## Pages

- `index.html` - dashboard and daily study loop
- `content.html` - searchable Content Hub for lessons, videos, guides, and worksheets
- `lesson-argument-basics.html` - start-here argument structure lesson
- `lesson-conclusion-evidence.html` - conclusion and evidence lesson
- `lesson-main-point.html` - main point question lesson
- `lesson-role.html` - role question lesson
- `lesson-technique.html` - describe-the-technique lesson
- `lesson-player.html` - dynamic animated lesson player for the full curriculum library
- `lesson-flaws.html` - sample animated flaw lesson
- `lesson-assumptions.html` - sample animated assumption lesson
- `lesson-rc-structure.html` - sample animated reading-comprehension lesson
- `question-bank.html` - filter questions and queue drills
- `drills.html` - adaptive drill flow with answer checking
- `review.html` - PrepTest 130 section review
- `explanations.html` - reasoning frameworks
- `tests.html` - timed section tools and practice log
- `lessons.html` - targeted lessons
- `classes.html` - live class and recording hub
- `support.html` - ask/support queue
- `analytics.html` - weak-area recommendations
- `journal.html` - wrong-answer journal and spaced review
- `plan.html` - weekly plan, print, calendar export, backup/restore
- `automations.html` - in-app study automations
- `plugins.html` - recommended plugin stack

## Daily Study Flow

1. Start on `index.html`.
2. Click **Start next drill**.
3. Answer the drill questions on `drills.html`.
4. Save one wrong-answer journal note on `journal.html`.
5. Run a timed block on `tests.html`.
6. Log the result.
7. Check `analytics.html` for the next recommendation.
8. Generate or update the weekly plan on `plan.html`.

## Persistence

Progress saves in browser `localStorage`, so the pages share the same local study state:

- completed lessons
- reviewed questions
- drill accuracy
- support asks
- wrong-answer journal notes
- spaced-review queue
- generated weekly plan
- automation toggles
- saved, watched, and completed content

Use **Download backup** on `plan.html` to export your progress as JSON, and **Restore backup** to load it again.

## Content System

The Content Hub works like a mini course library:

- search by keyword
- filter by topic, difficulty, status, and short lessons
- browse categories such as Start here, Core concepts, Question types, Strategy, Timed test training, and Mindset
- save lessons for later
- mark lessons complete
- open dedicated lesson pages
- start a related drill from a lesson
- show recommended content on the dashboard

`content-system-plan.md` is the source-informed production plan for the first lesson set, animated video scripts, tagging taxonomy, and recommendation rules. It is written as original LexiPrep teaching material rather than copied book text.

`platform-audit.md` compares LexiPrep against premium LSAT prep features and lists the next upgrades needed for a serious custom study system.

## Notes

The practice questions are original LSAT-style examples, not copied official question text. Your PrepTest 130 score and review patterns are used as study analytics.
