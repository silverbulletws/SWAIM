# Swaim site — normalized structure

Replace your whole `src/` folder with this one. Nothing outside `src/`
changes — `public/`, `package.json`, and `astro.config` stay as they are.

```powershell
# from the project root, with everything committed first
Remove-Item -Recurse -Force src
# then copy the new src/ folder in
npm run dev
```

## What's where now

```
src/
  data/site.js              phone, email, address, socials, nav, footer columns
  styles/global.css         tokens, base type, buttons, labels, header,
                            footer, county chips, seals, lightbox
  styles/service-page.css   shared by /surveying and /engineering only
  components/
    Header.astro            solid | overlay | minimal
    Footer.astro            titleblock | slim
    Icon.astro              map, phone, mail, facebook, linkedin, pdf
    Seal.astro              one clickable seal
    Lightbox.astro          markup + script, wires to every .seal-btn
  layouts/Base.astro        head, fonts, header, slot, footer, lightbox
  pages/                    content only
```

## Using the layout

```astro
---
import Base from "../layouts/Base.astro";
---
<Base title="Page — Swaim" description="...">
  <section>...</section>
</Base>

<style>
  /* page-only CSS, automatically scoped */
</style>
```

Props: `title` (required), `description`, `theme` (`light`|`dark`),
`header` (`solid`|`overlay`|`minimal`|`none`), `footer`
(`titleblock`|`slim`|`none`), `lightbox`, `noindex`.

## Two bugs this fixed

**The footer seals were dead on Kingdom Ridge.** That page had the
title-block footer with two clickable seals but no lightbox markup, so
clicking them did nothing. The lightbox now ships with the title-block
footer automatically — you can't have one without the other.

**The homepage pull quote wasn't rendering in Source Serif.** The
`.contact-figure .quote` rule asked for it, but index.astro never
loaded that font, so it silently fell back to Georgia. The layout loads
all four families for every page now, so the quote finally looks the way
it was supposed to.

## Things I normalized — check these

- **Footer seals: 135px everywhere.** They were 135px on index and about,
  104px on surveying, engineering, and Kingdom Ridge. Change
  `--footer-seal` in global.css if you want a different number.
- **Section labels: 1.25rem bottom margin.** Index used 1rem, everything
  else 1.25rem. About 4px of movement on the homepage.
- **Homepage project grid now collapses** to 2 columns under 1100px and 1
  under 560px. It was locked at 4 and would have been unusable on a phone.
- **The 7-item filler cell on /surveying hides on mobile** instead of
  leaving an empty box at the bottom of the list.

## Adding a page

```astro
---
import Base from "../layouts/Base.astro";
import { site } from "../data/site.js";
---
<Base title="Projects — Swaim Engineering and Surveying">
  ...
</Base>
```

Header, footer, fonts, tokens, and lightbox come free. For another
project page, copy `pages/projects/kingdom-ridge.astro` and edit the
`project` object at the top.

## Still open

- `/projects` index page doesn't exist; the breadcrumb on Kingdom Ridge
  404s.
- `/start` still discards submissions. It's `noindex` now, but it needs a
  real handler.
- Kingdom Ridge content is invented. It's `noindex` too — leave that in
  place until Jason gives you the real details.
- Facebook link still points at facebook.com. One line in
  `src/data/site.js` when they set up a page.
