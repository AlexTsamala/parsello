# Deployment & SEO checklist

## Live

The site is deployed and serving at **`https://parcello.ge`** (apex). `www.parcello.ge` redirects to it.

The apex is the canonical form: canonical tags, the sitemap and all Open Graph URLs use it, and Vercel's domain settings must keep the redirect pointing that way. Reversing it in Vercel without also setting `NEXT_PUBLIC_SITE_URL` would put every canonical URL back in conflict with the server.

Set the env var explicitly rather than relying on the fallback in `src/content/business.ts`, which only happens to match:

```
NEXT_PUBLIC_SITE_URL=https://parcello.ge
```

## Still to do before launch

**1. Resolve the open items** in `OPEN-QUESTIONS.md`. Blocking ones are the courier pickup coverage, the drop-off address, and #15 (cheese vs the EU dairy rule).

**2. Check nothing unresolved is visible.**

```
grep -rn "TODO" src/content/     # every one should still be genuinely unknown
npm run lint && npm run build    # both must pass clean
```

## Deploy

```
npm run build          # must pass locally first
vercel                 # or connect the GitHub repo in the Vercel dashboard
```

The site is fully static — every route prerenders — so any static host works. Vercel is the least effort.

## After deploy

| # | Step | Where | |
|---|---|---|---|
| 1 | Connect the custom domain | Vercel → Domains | done |
| 2 | Confirm HTTPS and the www → apex redirect | browser | done |
| 2b | Switch that redirect from 307 to **308 Permanent**, so Google consolidates signals onto the apex | Vercel → Domains | |
| 3 | Verify the property — use a **Domain** property, which covers apex and www together | [Google Search Console](https://search.google.com/search-console) | |
| 4 | Submit `/sitemap.xml` | Search Console → Sitemaps |
| 5 | Request indexing for `/` and the six country pages | Search Console → URL Inspection |
| 6 | Confirm `/robots.txt` resolves and allows crawling | `your-domain/robots.txt` |
| 7 | Check mobile usability | Search Console → Experience |
| 8 | Validate structured data | [Rich Results Test](https://search.google.com/test/rich-results) |
| 9 | Check the OG card renders | [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) |
| 10 | Run Lighthouse on mobile | Chrome DevTools |
| 11 | Add the site link to Facebook and Instagram bios | — |
| 12 | Create / update the Google Business Profile | name must read exactly `Parcello Georgia` |

## What is already handled in code

- Unique `<title>` and meta description on every page, via `buildMetadata`
- Canonical URL on every page
- Open Graph + Twitter tags, with `og-default.jpg` (1200×630)
- `sitemap.xml` and `robots.txt` — generated, not hand-maintained
- JSON-LD: Organization + WebSite site-wide, BreadcrumbList, FAQPage where FAQs are visible, Article on blog posts
- One `<h1>` per page, logical `h2`/`h3` order
- `lang="ka"`, Georgian-capable webfont, skip link, visible focus states
- Static prerendering for all 15 routes; only the mobile menu and the desktop nav (for active-link highlighting) ship client JS

## Verified on 2026-09-02

Against a local production build: 15 routes all 200, one `<h1>` each, valid JSON-LD on every page, **zero broken internal links**, sitemap listing all 15 URLs.

## Verified on 2026-09-03

Against the live site: apex serves 200, `www` redirects to it, canonical tags and every sitemap URL name the apex, and the GA4 tag with its consent defaults is present in the served HTML.

## Analytics — live

GA4 is collecting, confirmed in the served HTML on 2026-09-03. The Measurement ID lives only in Vercel → Settings → Environment Variables, never in the repo:

```
NEXT_PUBLIC_GA_ID=G-…
```

The whole feature is inert without that variable — no script, no cookies, no banner — which is what keeps local development and preview builds out of the reporting. Vercel injects env vars at build time, so **changing it requires a redeploy**, not just a save.

The `NEXT_PUBLIC_` prefix is required, not an oversight: two of the three analytics components run in the browser and read the ID there. A Measurement ID is public by design — it ships in the page source of every GA-tracked site — so there is nothing to hide. Dropping the prefix would leave the tag loading while silently collecting no events.

What it does:

- **Page views and scroll depth** — automatic, via GA4 enhanced measurement.
- **Custom events**, from one delegated listener in `ContactClickTracking.tsx`: `phone_click`, `email_click`, `facebook_click`, `instagram_click`, `cta_click`. Each carries `page_path`, so you can see which page produced the call. GA4 ignores `tel:` and `mailto:` clicks on its own, which is why these exist. Mark them as key events in GA4 → Admin → Events.
- **Consent Mode v2** — advertising signals are denied always (the site runs no ads). `analytics_storage` defaults to denied in the EEA, UK and Switzerland, granted elsewhere; Google resolves the region from the visitor's IP, so no geolocation code runs here.
- **Cookie banner** — shown to every visitor once, answer kept in their browser's `localStorage`. Declining leaves GA4 in its cookie-free state rather than removing it.

Still to do in the GA interface: mark `phone_click` and `cta_click` as key events (Admin → Events → Recent events → star). Custom events only appear in that list once received and processed, which takes up to 24 hours — Realtime and DebugView show them immediately.

Not set up: Google Search Console. It needs no code — just domain verification — and for an SEO site it matters more than GA4, since it is what reports actual search queries and rankings. Link it to the GA4 property afterwards so search queries surface there too.

## Recurring

- **After changing an EU customs fact**, update `verifiedOn` in `src/content/shipping-rules.ts` and the corresponding row in `RESEARCH-SOURCES.md`. Those rules change; the €3 flat duty is explicitly temporary and expires 1 July 2028.
- **After adding a country or blog post**, nothing to do — the sitemap, footer links and country grids all generate from the config.
