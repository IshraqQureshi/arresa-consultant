# Arresa Consultant — One-Page Website

React + Vite one-page marketing site for Arresa Consultant (U.S. LLC formation for Kenyan entrepreneurs), built to match the approved design in `design/homepage.png`.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Project structure

- `src/components/` — one component per section (Header, Hero, Services, HowItWorks, Benefits, WhoWeAre, CTA, Footer)
- `src/data/content.js` — all editable copy (nav links, service tabs, steps, benefits, footer links)
- `src/config/hubspot.js` — HubSpot form configuration (see below)
- `public/` — static assets served as-is: favicons, `robots.txt`, `sitemap.xml`, `site.webmanifest`, `img/`

## Connecting the HubSpot "Get Started" form

The CTA section currently renders a placeholder enquiry form that matches the design pixel-for-pixel. To switch to the real HubSpot form once it's ready:

1. Open `src/config/hubspot.js`.
2. Fill in `region`, `portalId`, and `formId` from HubSpot's embed code (Marketing → Forms → your form → Embed code).
3. Save — the site automatically renders the live HubSpot form instead of the placeholder. No other code changes needed.

## Before going live — required updates

- **Domain**: `index.html`, `public/robots.txt`, and `public/sitemap.xml` currently use the placeholder domain `https://www.arresaconsultant.com/`. Replace every occurrence with the real production domain.
- **HubSpot form**: see above.
- Re-run `npm run build` and deploy the contents of `dist/`.

## SEO

- Unique `<title>` and meta description, canonical URL, Open Graph + Twitter Card tags, and `ProfessionalService` JSON-LD structured data are set in `index.html`.
- `public/robots.txt` allows all crawlers and points to `public/sitemap.xml`.
- Favicons (`favicon.ico`, PNG sizes, Apple touch icon) and a generated `og-image.jpg` are included in `public/img/`.
