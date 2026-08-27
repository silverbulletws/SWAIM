# Sitemap + robots.txt

## 1. Install the integration

```powershell
npm install @astrojs/sitemap
```

## 2. Merge `astro.config.mjs`

Use the file included here. If you already have an
`astro.config.mjs` with settings in it, merge rather than overwrite —
add the `site` line and the `integrations` array to what's there.

The `site` value is required. Without a real domain the sitemap
can't be generated at all.

**It currently says `https://swaimengineering.com`.** If Swaim's
domain isn't pointed at Cloudflare yet, set it to your live
`.pages.dev` URL for now and change it at launch. A sitemap full
of URLs that 404 is worse than no sitemap.

## 3. Drop `public/robots.txt` in

Same note — the Sitemap line at the bottom has the domain hardcoded.
Update it when the domain changes.

## What you get

Built into `dist/` on every build:

- `sitemap-index.xml` — the entry point you submit to Google
- `sitemap-0.xml` — the actual URL list

Currently four pages: `/`, `/about`, `/surveying`, `/engineering`.

`/start` and `/projects/kingdom-ridge` are filtered out on purpose.
Both are `noindex`, and listing a page in a sitemap while telling
Google not to index it is a contradiction Search Console will flag
as an error. When Kingdom Ridge gets real content, remove its
`noindex`, drop it from the `filter` in the config, and remove the
`Disallow` from robots.txt — three edits, all in this file set.

## 4. After launch

Submit `https://swaimengineering.com/sitemap-index.xml` in Google
Search Console. That's what actually gets the pages crawled —
the file existing does nothing on its own.
