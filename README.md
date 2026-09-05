# Parcello Georgia

Marketing and SEO website for [Parcello Georgia](https://parcello.ge), a parcel delivery
company sending packages from Georgia to Europe.

**Live:** [parcello.ge](https://parcello.ge)

The site's job is narrow and deliberate: explain the service in five seconds, build enough
trust to be called, and rank for the searches Georgians actually make when they need to send
a parcel abroad. It is not an application — there is no account system, no order tracking and
no checkout. Every page is static HTML.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Hosting | Vercel |
| Analytics | GA4 with Consent Mode v2 |

Three runtime dependencies — `next`, `react`, `react-dom`. Nothing else is installed, and
adding a package is a deliberate decision rather than a reflex.

## Getting started

Requires Node 20 or newer.

```bash
npm install
npm run dev          # http://localhost:3000
```

| Script | |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build — must pass before any commit |
| `npm run start` | Serve the production build locally |
| `npm run lint` | ESLint |

### Environment variables

Both are optional in development and neither contains a secret.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for canonical tags, sitemap and Open Graph. Falls back to `https://parcello.ge` |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID. Without it no analytics script loads, no cookies are set and no consent banner appears |

Leaving `NEXT_PUBLIC_GA_ID` unset locally is intentional: development traffic never reaches
the production analytics property.

## Structure

```
src/
  app/          Routes. Server Components; page files hold layout, not copy
  components/   Presentation, grouped by area (home, country, layout, ui, analytics, seo)
  content/      All copy and business data, typed
  lib/          Metadata, JSON-LD builders, asset helpers
docs/           Deployment checklist, open questions, research sources
```

15 routes, all prerendered at build time: eight static pages, six country pages and the blog.

## How content works

The rule the codebase is built around: **components render, they never author.**

Everything a visitor reads lives in `src/content/` as typed data. Country pages, the FAQ, the
allowed-items list and the services page are all generated from those files, not hand-written
JSX. Adding a seventh destination means adding one object to `countries.ts` — the page, the
sitemap entry, the footer link and the country grid all follow automatically.

`business.ts` is the single source of truth for business facts. A value that isn't confirmed
is `null` there, and the UI omits the section rather than filling it with a plausible guess.
Unresolved questions are tracked in [docs/OPEN-QUESTIONS.md](docs/OPEN-QUESTIONS.md) rather
than as TODOs scattered through components.

### Two kinds of fact

Country pages mix two categories that are kept structurally separate:

- **Researched facts** describe the world — EU customs thresholds, VAT rates, national customs
  authorities. Each carries a `source` and a `verifiedOn` date.
- **Parcello claims** describe the business — what it ships, how handover works, how long
  delivery takes. These come only from the business.

The distinction exists so the two can never blur into each other. A customs rule with a
citation is checkable; a delivery promise is a commitment. Sources aren't rendered on the
page, but they are never deleted from the data — they're what makes a published claim
re-verifiable a year later.

### Pricing

No price, price range or per-kg rate appears anywhere on the site — not in copy, not in
structured data. Rates vary by destination and change often, so every pricing context routes
the customer to contact instead. This is a product decision, not missing content.

## Georgian

All customer-facing copy is Georgian, and the language shapes the code more than expected.

Georgian is inflected: the stem changes with case, so a suffix cannot be appended to a
nominative form. `{deliveryTime}-ის` renders as `2-3 კვირა-ის`, which is simply a broken word.
Inflected forms are therefore stored as their own fields in the content files
(`deliveryTimeGenitive`, `nameKaIn`) or written out as complete sentences. Components never
decline a word.

Hyphenated suffixes are correct only after Latin script — `Parcello-ს`, `Facebook-ზე`.

## SEO

- `generateMetadata` on every dynamic route; no hand-written metadata objects, so canonical
  URLs cannot drift
- `sitemap.xml` and `robots.txt` are generated from the same content files the pages use
- `lastModified` carries real revision dates, never the build timestamp — search engines stop
  trusting the field when every page claims to have changed on every deploy
- JSON-LD for LocalBusiness, WebSite, BreadcrumbList, FAQPage and Article
- Structured data may only assert what the page visibly says

The six country pages carry genuinely different content — local customs rules, city names,
country-specific context — rather than one template with the country name swapped.

## Analytics and consent

GA4 loads behind Consent Mode v2. Advertising signals are denied unconditionally, since the
site runs no ads. `analytics_storage` defaults to denied across the EEA, UK and Switzerland
and granted elsewhere; Google resolves the visitor's region from their IP, so no geolocation
code runs on the site and it stays fully static.

Contact conversions — `tel:` and `mailto:` clicks — are tracked through a single delegated
listener, because GA4's enhanced measurement ignores both. Delegation keeps every link a
Server Component.

## Documentation

| | |
|---|---|
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | Deployment and SEO checklist, environment setup |
| [docs/OPEN-QUESTIONS.md](docs/OPEN-QUESTIONS.md) | Business facts still unconfirmed |
| [docs/RESEARCH-SOURCES.md](docs/RESEARCH-SOURCES.md) | Citations for every researched fact |
| [CLAUDE.md](CLAUDE.md) | Working rules for AI-assisted development on this repo |

## Conventions

Commits are prefixed by type — `feat`, `fix`, `content`, `docs`, `chore`, `refactor`, `style`
— with one type per commit and a one-line description. Code, comments and commit messages are
English; only customer-facing copy is Georgian.

`npm run build` and `npm run lint` must both pass before a commit.
