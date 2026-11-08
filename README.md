# Medicare for All Website v1.2

This is a complete GitHub Pages website. It retains the existing banner, independent Article #1 cover, articles and archive. No comments are enabled.

## Install
Copy **all contents** of this ZIP (not the containing folder) to your MedicareForAll GitHub repository folder, replacing existing files. Commit and Push origin in GitHub Desktop.

## Activate page-by-page traffic analytics (one-time setup)

The website is **prepared for Cloudflare Web Analytics**, but tracking is **not yet active**. Cloudflare requires an account and a site-specific token, which cannot be invented or generated offline.

1. Sign in to https://dash.cloudflare.com/ (create a free account if necessary).
2. Go to **Web Analytics** and add a site. Use `terranovadevelopment.github.io` as the hostname (not `truth-party.com`, since the redirect sends visitors to GitHub Pages). Cloudflare may label the setup screen differently.
3. Select manual JavaScript installation. Copy the token from the supplied beacon snippet. The token is usually in the `data-cf-beacon` attribute.
4. Edit `assets/analytics-config.js` and paste the token between the quotes after `CLOUDFLARE_WEB_ANALYTICS_TOKEN =`.
5. Save, commit and push. Then visit the homepage and an article and check the Cloudflare Web Analytics dashboard after data has had time to arrive.

The same loader is included on **every HTML page** (homepage, archive, and individual articles), allowing per-page statistics. The dashboard may use URL paths for page breakdowns. The tracking service is separate from GitHub and Render.

## Revised DOCX matching
`articles/article-catalog.json` provides stable article IDs and paths. When a revised DOCX is uploaded, match its title and text to the catalog, preserve the existing article URL and separate thumbnail, and update the HTML page. Confirm ambiguous matches.

## Comments
No public commenting service has been added. This decision is deferred.


## v1.3 — Cloudflare Analytics Activated

Cloudflare Web Analytics token 10b4ae29f7da46d3a38502a8db7331bb is configured in assets/analytics-config.js. The tracking script is included on homepage, archive, and all article pages. Publish all files through GitHub Desktop; then visit the website and check Cloudflare Web Analytics after data has had time to arrive. GitHub Pages itself does not provide the Cloudflare dashboard. Public comments remain disabled.
