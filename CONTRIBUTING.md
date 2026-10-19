# Contributing

## Start locally

Use Node.js 24 and Python 3. No dependency installation is required.

```sh
python3 -m http.server 8765 --directory site
```

Open http://localhost:8765. Edit files in `site/`, then reload the page.

## Before committing

```sh
node --check site/app.js
node scripts/check.cjs
python3 scripts/check-source.py
python3 scripts/package-guide.py
```

Commit the regenerated `downloads/VoiceScope.html` alongside any website changes. The publishing workflow checks that these stay in sync.

For interface changes, check desktop and phone layouts, keyboard focus, dialog closing, text readability, and reduced-motion settings. For recommendation changes, check unanswered questions, multiple selected symptoms, combined answers from all five questions, ties, and the maximum of three focus cards.

## Content changes

Read [the content model](docs/CONTENT.md). Keep source facts distinct from editorial suggestions. Do not silently change source scores or assign new meanings to the risk labels. Never convert behavior IDs into numbers.

Keep the portal free of accounts, personal notes, analytics, and persistent user storage. Use concise wording and progressive disclosure so visitors can learn without seeing every detail at once.

## Report an issue

Include the behavior ID or symptom selections, what you expected, what happened, and the browser or screen size if relevant. Use fictional examples; do not include real caller information or credentials.
