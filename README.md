# Make Voice Bots Awesome

A voice bot behavior guide for product and project managers: **12 segments and 104 behaviors**, with risk tags, suggested solutions, live-call handling, after-call follow-up, and test guidance.

## Open or run

Open `site/index.html` in a browser, or serve the site:

```sh
python3 -m http.server 8765 --directory site
```

Visit http://localhost:8765. No installation, API keys, or backend are required.

## How the site works

The home page preserves the hero and introductory panels, then presents 12 segment cards. Each has a one-sentence description and flags for live-call experience and post-call processing impact. There is no questionnaire or individual behavior list on the home page.

Each card opens a dedicated HTML page in `site/segments/`. That page introduces the segment, its overall approach, and its behaviors. Filters operate only within that segment. Open a behavior for the problem, risk explanations, live-call response, after-call follow-up, and verification steps. Use the home-page link to choose another segment. The problems-and-solutions section has no left menu and uses the full available width.

Impact flags describe possible consequences; handling-stage tags describe when to respond or improve the system. They are distinct. “Post-call processing: direct risk” indicates a central data or workflow concern; “possible risk” depends on the particular behavior and implementation.

## Visual learning

Every segment has an interactive four-step comparison: **Where it breaks** and **Better handling**. Every segment includes its own labeled white-background stick-figure illustration with a recurring caller, USER and AI VOICE BOT labels, and a short problem-versus-better-handling caption. Home-page cards show visual previews. Open a segment illustration at full size when needed. Each segment includes a clickable chart of how many documented behaviors carry each risk tag. These are editorial coverage counts, not likelihoods or incident rates. All 104 behavior details include a small source-score visual.

## Application setup and applicability

Every segment and behavior explains when it applies and when it may be out of scope. These notes consider call direction and transfer legs, simultaneous input/output, speaker isolation and authorization, controlled devices, input channels, task fields, downstream actions, verification, and sensitive data. A mitigation is not automatically an exclusion. Read the behavior-specific condition before ruling out an entire segment.

## Files to edit

| File | Purpose |
| --- | --- |
| `site/index.html` | Home page with the 12 segment cards |
| `site/segments/*.html` | Twelve dedicated segment pages |
| `site/segment-guide.js` | Segment IDs, slugs, short descriptions, counts, and impact flags |
| `site/app.js` | Shared behavior views, filters, dialogs, and navigation |
| `site/applicability.js` | Application-setup scoping guidance for 12 segments and 104 behaviors |
| `site/concepts.js` | Twelve illustrative failure/fix scenarios |
| `site/visuals.js` | Interactive comparison diagrams, risk-coverage charts, and source-score visuals |
| `site/style.css` | Shared visual design and responsive layout |
| `site/data.js` | Original descriptions, examples, failures, notes, and scores |
| `site/solutions.js` | Specific recommendations and segment-level testing guidance |
| `site/risk-tags.js` | Editorial risk classifications and handling stages |
| `source-documents/` | Original CSVs; preserve these when applying this update |
| `downloads/VoiceScope.html` | Portable home entry point; requires the companion `site/` folder |

The original scores and source examples remain unchanged. Risk tags, summaries, impact flags, solutions, and tests are editorial guidance.

## Verify changes

Use Node.js and Python 3.9 or later:

```sh
node scripts/check.cjs
python3 scripts/check-source.py
python3 scripts/package-guide.py
```

The checks cover all 104 behaviors, page isolation, filters, resets, deep links, source fidelity, and all static links. Visually review desktop and phone layouts after styling changes.

## GitHub Pages

The included `.github/workflows/pages.yml` deploys the entire `site/` directory. Keep the directory structure intact: the segment pages use relative asset paths and work beneath a GitHub project subpath. In GitHub Settings → Pages, select GitHub Actions as the publishing source. Push the source and refreshed portable entry point to `main` to run the checks and publish.

The workflow configures Pages in the publishing job, which has Pages write permission. It does not attempt to configure Pages in the read-only checks job.

## Share the whole website

This is now a multi-page website. Share the hosted URL or zip the **entire `site/` directory**. Sending only `index.html` or `downloads/VoiceScope.html` omits the dedicated pages and assets.

No accounts, saved user answers, notes, browser storage, or analytics are used. Navigation and filters run locally in the browser.
