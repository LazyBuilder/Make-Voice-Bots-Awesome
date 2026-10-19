# Publish with GitHub Pages

The repository includes an automatic publishing workflow in [`.github/workflows/pages.yml`](../.github/workflows/pages.yml). It deploys only the `site/` directory. Source CSVs, repository documentation, and the standalone download stay in the repository, outside the published site artifact.

## First publication

1. Create an empty GitHub repository named `Make-Voice-Bots_Awesome`. Do not initialize another README or Git history there.
2. In GitHub Desktop, add this existing local repository, then publish it to your account. Alternatively, add your actual GitHub repository URL as `origin` and push `main` using Git.
3. In the GitHub repository, open **Settings → Pages**. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Open **Actions → Check and publish GitHub Pages** and run the workflow on `main`, or push a new commit to `main`.
5. Wait for the **Publish website** job to succeed. The deployment environment and Settings → Pages show the live URL.

For a repository with this name, the default URL normally follows `https://YOUR-USERNAME.github.io/Make-Voice-Bots_Awesome/`. Use GitHub’s actual deployment URL when sharing it.

## What the workflow does

The check job verifies JavaScript syntax, behavior coverage, recommendation logic, filter behavior, source-document fidelity, and local asset paths. It rebuilds the standalone guide and fails if that committed copy is stale. It then uploads `site/` as the Pages artifact. The deployment job publishes that artifact only for `main`; pull requests run checks without deployment.

The deploy job uses the `github-pages` environment and the Pages and identity permissions required by GitHub’s deployment action. No manually created access token or application secret is needed for this site.

## Update the published guide

Edit `site/`, run the checks, and regenerate the standalone file:

```sh
node scripts/check.cjs
python3 scripts/check-source.py
python3 scripts/package-guide.py
```

Commit both the editable source and `downloads/VoiceScope.html`, then push to `main`. The workflow checks and republishes automatically.

## Project URLs and behavior links

All assets use relative paths, so the site works beneath the repository-name subpath. Behaviors use fragments such as `#behavior=1.1`; they do not need server routes or rewrite rules. Do not replace asset paths with `/style.css` or `/assets/...`, which would point outside the project directory.

## Troubleshooting

- **Pages configuration fails:** select GitHub Actions under Settings → Pages and confirm you can administer Pages for the repository.
- **Standalone guide is stale:** run the packaging command, commit the changed download, and push again.
- **Content check fails:** review the behavior IDs, original source wording and scores, solution coverage, and risk-tag mappings.
- **Deployment waits for approval:** review the repository’s `github-pages` environment protection rules.
- **A 404 appears:** wait for deployment to finish and open the exact URL shown by GitHub, including the repository subpath and capitalization.
- **Styles or images are missing:** check relative file paths and case-sensitive filenames; inspect the workflow’s asset check output.

## References

[GitHub: Using custom workflows with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

[GitHub: Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
