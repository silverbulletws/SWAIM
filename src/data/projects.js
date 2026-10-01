// src/data/projects.js
//
// ONE entry per project. Adding a project means adding an object here —
// the index page, the detail page, and the homepage cards all read from
// this file. No new .astro file needed.
//
// Every field except `slug`, `name` and `published` is optional. The
// template only renders the sections it has data for, so a project with
// nothing but a name and a location still produces a clean page.
//
// FIELDS
//   slug       URL segment → /projects/<slug>
//   published  false = shows as "Coming soon", no page generated
//   featured   true  = appears on the homepage grid
//   discipline "Engineering" | "Surveying" | "Engineering & Surveying"
//   status     short phrase — "Under construction", "Complete", "In design"
//   hero       full-bleed image at the top of the detail page
//   gallery    [{ src, alt, caption }] photo strip
//   plans      [{ src, alt, caption }] rendered plan sheets (images, not PDFs)
//   downloads  [{ label, file, size }] PDFs — keep each under 25 MB,
//              which is Cloudflare Pages' per-file limit
//
// ASSETS live in: public/projects/<slug>/

export const projects = [
  {
    slug: "adobe-interiors",
    name: "Adobe Interiors",
    published: true,
    featured: true,

    client: "Adobe Interiors",
    location: "Willow Park, Texas",
    county: "Parker County",
    discipline: "Engineering",
    status: "Under construction",
    date: "2025",
    scope: "Commercial site development",
    legal: "Lot 1R-1, Block F, Crown Pointe Addition Phase 4",

    summary:
      "A commercial building on Jimma Drive fronting Interstate 20 in Willow Park, " +
      "taken from raw lot through full civil design and into construction. Swaim " +
      "prepared the site development plans, including water and sewer improvements, " +
      "fire protection, grading, and paving.",

    storyTitle: "Tying a new building into an existing system",
    story:
      "The site had to connect to the city's existing water and sewer along a " +
      "frontage already built out, which meant fitting new service, a fire line, " +
      "and an FDC into the space that was left — and relocating an existing fire " +
      "hydrant assembly to make it work. The utility plan went through eight " +
      "revisions before it was issued for construction.",

    services: [
      "Site development",
      "Water and sewer design",
      "Drainage design",
      "Paving and grading",
      "Construction management",
    ],

    hero: "/projects/adobe-interiors/hero.webp",
    ogImage: "/projects/adobe-interiors/og.jpg",

    gallery: [
      {
        src: "/projects/adobe-interiors/aerial-1.webp",
        alt: "Aerial view of the Adobe Interiors site with foundation piers placed",
        caption: "Pier caps and grade beams in, looking north toward I-20",
      },
      {
        src: "/projects/adobe-interiors/aerial-2.webp",
        alt: "Aerial view of the Adobe Interiors building pad",
        caption: "Building pad and surrounding site work",
      },
      {
        src: "/projects/adobe-interiors/aerial-3.webp",
        alt: "Aerial view of the Adobe Interiors site and parking",
        caption: "Paving poured on the south side of the lot",
      },
    ],

    // First entry is the feature sheet shown large beside the story.
    // Everything after it becomes the thumbnail index below.
    plans: [
      {
        src: "/projects/adobe-interiors/plan-c6.webp",
        alt: "Sheet C6.0, water and sewer plan for Adobe Interiors",
        caption: "Sheet C6.0 — Water and Sewer Plan",
      },
      // TODO — replace these captions with the real sheet numbers
      // and titles off each drawing's title block.
      { src: "/projects/adobe-interiors/adobe-ifc-p03.webp", alt: "Adobe Interiors plan sheet", caption: "Plan sheet" },
      { src: "/projects/adobe-interiors/adobe-ifc-p04.webp", alt: "Adobe Interiors plan sheet", caption: "Plan sheet" },
      { src: "/projects/adobe-interiors/adobe-ifc-p05.webp", alt: "Adobe Interiors plan sheet", caption: "Plan sheet" },
      { src: "/projects/adobe-interiors/adobe-ifc-p06.webp", alt: "Adobe Interiors plan sheet", caption: "Plan sheet" },
      { src: "/projects/adobe-interiors/adobe-ifc-p07.webp", alt: "Adobe Interiors plan sheet", caption: "Plan sheet" },
      { src: "/projects/adobe-interiors/adobe-ifc-p08.webp", alt: "Adobe Interiors plan sheet", caption: "Plan sheet" },
    ],

    // TODO — decide with Jason which sheets can be published.
    // The full 78-page IFC set is 45 MB, over Cloudflare's 25 MB
    // per-file limit, and is a sealed construction document. See notes.
    downloads: [],
  },

  // ---------------------------------------------------------------
  // Placeholders. Flip `published: true` and fill in the fields as
  // the material comes in. Until then they show as "Coming soon".
  // ---------------------------------------------------------------
  {
    slug: "kingdom-ridge",
    name: "Kingdom Ridge",
    published: false,
    featured: true,
    discipline: "Engineering",
    location: "Montague County, Texas",
  },
  {
    slug: "crown-point",
    name: "Crown Point",
    published: false,
    featured: true,
    discipline: "Engineering",
  },
  {
    slug: "united-storage",
    name: "United Storage",
    published: false,
    featured: true,
    discipline: "Engineering",
  },
];

/** Projects with real pages, newest first. */
export const publishedProjects = projects.filter((p) => p.published);

/** What the homepage grid shows. */
export const featuredProjects = projects.filter((p) => p.featured);