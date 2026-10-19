# Make Voice Bots Awesome

An interactive field guide to **104 voice bot behavior failures across 12 segments**, for product and project managers.

The guide starts with the problems people notice: robotic responses, awkward conversations, wrong data, real-call failures, and lost trust. Visitors can narrow the library and open a behavior to understand its failure mode, risks, suggested handling, and test scenario.

## Publish on GitHub Pages

The repository is configured to deploy `site/` through GitHub Actions when `main` changes. After publishing this local repository to GitHub, select **Settings → Pages → Source → GitHub Actions**, then run the included workflow. See the [complete publishing guide](docs/PUBLISHING.md) for setup and troubleshooting.

## Open the guide

Open **`downloads/VoiceScope.html`** in a browser. It includes the artwork, styles, and application data in one shareable file.

For development, serve the `site` folder:

```sh
python3 -m http.server 8765 --directory site
```

Then visit http://localhost:8765. The website needs no installation, build step, API key, or backend.

## Features

- Five symptom questions evaluated together. Unanswered questions are treated as not applicable.
- At most three focus segments, with a notice when additional segments match.
- Equal weight per applicable question, shared across its selected symptoms. Ties favor broader question coverage, then original segment order.
- Search, segment navigation, risk-score filters, risk-type filters, and primary handling-stage filters.
- Eight risk categories: experience, trust, data, operational, financial, privacy/security, consent/boundaries, and accessibility.
- Problem details and suggested solutions for all 104 behaviors, including **Handle in live call** and **Handle after call** sections.
- Original numerical risk scores, expandable source notes, glossary, and behavior links.
- Responsive layout, readable contrast, keyboard controls, and reduced-motion support.
- No accounts, saved user answers, notes, cookies, browser storage, analytics, or backend collection. Filters exist only in memory while the page is open.

A behavior link points to the copy of the guide being viewed. To share a useful web link with other people, host the `site` folder at a public URL; local `file:` and `localhost` addresses only work on the viewer’s own machine.

## Repository contents

| Location | Contents |
| --- | --- |
| `site/` | Editable website: HTML, CSS, application logic, structured content, and artwork |
| `source-documents/` | Both original CSV documents |
| `downloads/VoiceScope.html` | Self-contained shareable version |
| `docs/Artwork-brief.txt` | ImageGen artwork brief and generation prompt |
| `scripts/check.cjs` | Content, recommendation, filtering, and detail checks |
| `scripts/package-guide.py` | Regenerates the shareable HTML after edits |
| `scripts/check-source.py` | Verifies original CSV content and Pages-compatible asset paths |
| `.github/workflows/pages.yml` | Automated checks and GitHub Pages deployment |

## Edit and verify

Edit files in `site/`. The structured content is split into:

- `data.js`: source segment descriptions, behavior examples, failure modes, notes, and scores.
- `solutions.js`: handling recommendations and segment-level test guidance.
- `risk-tags.js`: risk categories, behavior classifications, primary handling stages, and follow-up guidance.
- `app.js`: interactions, filtering, recommendation ranking, and detail views.

Run the checks with Node.js, then rebuild the shareable file with Python:

```sh
node scripts/check.cjs
python3 scripts/check-source.py
python3 scripts/package-guide.py
```

The checks validate content coverage, combined symptom ranking, skipped-question behavior, the three-segment limit, risk and handling filters, and detail rendering. They do not replace browser-based visual checks.

## Content provenance

The `source-documents` folder contains **Master Sheet-Table 1.csv** and **Details - 12 Segments-Table 1.csv**, from *Voice Bot Behavioral Ailments — 12 Segments — Part 1*.

The source supplies 12 segment descriptions, 104 behaviors, examples, failure modes, notes, and three numerical risk dimensions. The website retains the source scores and wording. Symptom mappings, risk-category tags, primary handling stages, suggested solutions, tests, and interface copy are editorial additions. These should be reviewed in the context of the product being built.

Implementation references are linked inside the guide’s Sources & glossary dialog. The custom waveform artwork was generated with the built-in ImageGen tool; its prompt is included in `docs/Artwork-brief.txt`.

## Sharing and hosting

Share `downloads/VoiceScope.html` directly, or publish the contents of `site/` using a static hosting service. This repository is local; creating it does not create a GitHub remote or publish the website.

## Further documentation

- [Publishing and troubleshooting](docs/PUBLISHING.md)
- [Content model, risk tags, privacy, and recommendation rules](docs/CONTENT.md)
- [Contributing and verification](CONTRIBUTING.md)

No license has been assigned by this project setup. Decide the intended reuse terms for the supplied documents and generated content before inviting reuse.
