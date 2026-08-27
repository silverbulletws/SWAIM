// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Required for the sitemap — it needs to know the real domain.
  site: "https://swaimengineering.com",

  integrations: [
    sitemap({
      // Keep unfinished / noindex pages out of the sitemap.
      // A sitemap that lists a page you told Google not to index
      // is a contradiction Search Console will flag.
      filter: (page) =>
        !page.includes("/start") && !page.includes("/projects/kingdom-ridge"),

      changefreq: "monthly",
      lastmod: new Date(),
    }),
  ],
});
