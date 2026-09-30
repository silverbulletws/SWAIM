// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { site as swaim } from "./src/data/site.js";

// Which domain the sitemap should list.
//
//   Cloudflare build  ->  the real .pages.dev URL it was deployed to
//   Local / anything  ->  the domain set in src/data/site.js
//
// So the sitemap is always accurate without you changing anything.
// Once swaimengineering.com points at Cloudflare, Cloudflare reports the
// custom domain and it lines up on its own.
const siteUrl = process.env.CF_PAGES_URL || swaim.url;

export default defineConfig({
  site: siteUrl,

  integrations: [
    sitemap({
      // Unfinished / noindex pages stay out of the sitemap.
      // /start is a noindex intake form — keep it out of the sitemap.
      filter: (page) => !page.includes("/start"),
      changefreq: "monthly",
      lastmod: new Date(),
    }),
  ],
});
