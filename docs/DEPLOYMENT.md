# Deployment & SEO checklist

## Before the first deploy

**1. Set the domain.** Everything canonical depends on it. `src/content/business.ts` falls back to `https://parcello.ge`; the real value comes from an env var:

```
NEXT_PUBLIC_SITE_URL=https://your-real-domain.ge
```

Set it in Vercel → Project → Settings → Environment Variables, for Production *and* Preview. Wrong or missing, and every canonical URL, the sitemap and every OG tag point at a domain you may not own.

**2. Resolve the open items** in `OPEN-QUESTIONS.md`. Blocking ones are the courier pickup coverage, the drop-off address, and #15 (cheese vs the EU dairy rule).

**3. Check nothing unresolved is visible.**

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

| # | Step | Where |
|---|---|---|
| 1 | Connect the custom domain | Vercel → Domains |
| 2 | Confirm HTTPS and the www → apex redirect | browser |
| 3 | Verify the property | [Google Search Console](https://search.google.com/search-console) |
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

## Analytics — not installed

No Google Analytics or Tag Manager is in the code. Nothing was added speculatively (plan §25). When you want it, the events worth tracking are: CTA clicks, `tel:` clicks, Facebook clicks, and country-page engagement. Ask and it takes a few minutes.

## Recurring

- **After changing an EU customs fact**, update `verifiedOn` in `src/content/shipping-rules.ts` and the corresponding row in `RESEARCH-SOURCES.md`. Those rules change; the €3 flat duty is explicitly temporary and expires 1 July 2028.
- **After adding a country or blog post**, nothing to do — the sitemap, footer links and country grids all generate from the config.
