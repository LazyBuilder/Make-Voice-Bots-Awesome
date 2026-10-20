# Publishing the multi-page guide

1. Apply the update files to the existing repository. Keep its `.git` history and `source-documents/` folder.
2. Run `node scripts/check.cjs`, `python3 scripts/check-source.py`, and `python3 scripts/package-guide.py` from the repository root.
3. Commit the update, including `site/segments/`, `segment-guide.js`, the revised checks, and the rebuilt download entry point.
4. In GitHub Settings → Pages, select GitHub Actions as the publishing source.
5. Push to `main` or run **Check and publish GitHub Pages** manually.

The workflow uploads `site/`, including all 12 segment pages and local assets. Do not upload only the home HTML file. No Jekyll setup is needed.

The supplied workflow includes the Pages permissions fix: Configure Pages runs in the deployment job alongside Pages write permission. Pull requests run checks without publication.

Static links and assets are relative, so the site supports GitHub Pages project URLs. Behavior details use URL fragments and require no server routing.

If only the home page appears, confirm that the `site/segments/` folder was committed and that the artifact uploads the entire `site/` directory. If Pages configuration is denied, verify GitHub Actions is enabled as the Pages source and that the fixed workflow is pushed.
