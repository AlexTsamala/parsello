# CLAUDE.md

Guidance for Claude Code working in this repository.

## Project

**Parcello Georgia** — marketing + SEO website for a Georgian parcel-delivery company that sends parcels from Georgia to Europe (Poland, Germany, France, Hungary, Italy, Bulgaria).

This is a **marketing and SEO site**, not an application. Its job: explain the service in 5 seconds, build trust, and generate order inquiries.

Stack: Next.js (App Router) · TypeScript · Tailwind CSS · deployed to Vercel.

The full product brief lives in `plan.md` (git-ignored, local only). Read it when you need business context.

---

## 1. Hard rules — never break these

These are the boundaries. If following an instruction would violate one, stop and ask.

1. **Never invent business information.** No prices, delivery times, weight limits, prohibited items, guarantees, addresses, phone numbers, emails, social links, company registration details, or legal text unless the user gave them.
2. **Never publish a price, price range, or per-kg rate anywhere on the site.** Pricing varies by destination and changes often. Every pricing context — the `/prices` page, the homepage pricing section, country pages, blog posts, FAQ, structured data — routes the customer to contact instead. This is a deliberate business decision, not missing data: do not "helpfully" add example prices, starting-from figures, or a price calculator.
3. **Unknown data goes in one place.** All business facts live in `src/content/business.ts`. Missing values are explicit `TODO` placeholders there — never hardcoded guesses scattered across components.
4. **Never make a promise the business hasn't confirmed.** No "fast delivery", "guaranteed 5 days", "cheapest prices", "insured". If it isn't verified, omit the claim entirely rather than softening it.
5. **Structured data must match visible content.** Never put a fact in JSON-LD that isn't rendered on the page. In particular: no `Offer`, `price`, or `priceRange` anywhere.
6. **No placeholder text ships.** Anything unresolved must be obviously marked (`TODO:`) and listed in `docs/OPEN-QUESTIONS.md`, not quietly filled in with plausible-sounding filler.
7. **Don't add scope.** No auth, user accounts, tracking system, dashboard, payments, database, CMS, or admin panel. Version 1 is static marketing pages.
8. **Don't redesign the brand.** Logo, colors, and identity are fixed (see §4).
9. **Never commit `plan.md`** or any file containing unpublished business data.
10. **Keep researched facts separate from Parcello claims.** General destination-country information (customs basics, common practices, postal norms) may be researched and published, but it lives in its own typed field with a source, and must never be phrased as something Parcello does, offers, or guarantees. A researched fact describes the world; a Parcello claim describes the business — only the user supplies the second kind.

## 2. When to stop and ask

Ask rather than guess when:

- A page needs a business fact that isn't in `src/content/business.ts`.
- The plan and an explicit user instruction conflict.
- A change would add a dependency, change the stack, or restructure folders.
- Georgian copy needs to state a policy or rule (packaging limits, customs, restrictions).
- You'd need to write more than ~2 paragraphs of new marketing copy that makes factual claims.

Otherwise, make the routine call yourself and note it. Don't stall on formatting or naming choices.

## 3. Working method

- **Follow the phases in `plan.md` §39.** One phase at a time. Verify previous pages still render before moving on.
- **Small, complete units.** Finish a feature (a page, a section, a system) before starting the next.
- **Read before writing.** Check existing components and `src/content/` before creating anything new — reuse over reinvention.
- **After each phase**, run `npm run build` and `npm run lint`. Both must pass before committing.
- **Don't refactor unrelated code** while doing a task. Mention it instead.
- **Don't write tests, docs, or changelogs** unless asked. This is a static marketing site.

## 4. Design system — fixed values

Never introduce colors outside this palette. Define them once in Tailwind config, use tokens everywhere.

| Token | Hex | Use |
|---|---|---|
| Primary orange | `#F47C20` | CTA buttons, icons, accents, hover states |
| Dark charcoal | `#151515` | Navbar, headings, footer, strong text |
| Secondary dark | `#252525` | Secondary dark surfaces |
| White | `#FFFFFF` | Base background |
| Light background | `#F7F7F5` | Alternating sections |
| Light border | `#E7E7E7` | Borders, dividers |
| Text gray | `#666666` | Body copy, muted text |

Rules:

- White/light backgrounds dominate. **The site is not orange** — orange is an accent only.
- Generous whitespace, large typography, moderate rounding, minimal shadows.
- Subtle animation only: button/card hover, light fade-in on scroll. **No** parallax, spinning elements, flashy gradients, or glassmorphism.
- Must feel like a real logistics company, not an AI template.

## 5. Language

- **Primary language is Georgian.** All customer-facing copy is Georgian.
- Write natural Georgian a native speaker would write. **Never translate English word-for-word.**
- Structure content so English can be added later (locale-ready content files), but do not build i18n machinery in v1.
- Code, comments, filenames, commit messages, and URL slugs stay in English.

## 6. SEO rules

- One `<h1>` per page; logical `h2`/`h3` hierarchy.
- Every page: unique `title`, unique `description`, canonical URL, Open Graph + Twitter metadata.
- Use Next.js `generateMetadata` for country and blog pages — never duplicate metadata objects by hand.
- Country and blog pages are generated from typed config (`src/content/countries.ts`, blog content), **not** copy-pasted JSX.
- **The six country pages must not be the same text with the country name swapped.** Each needs genuinely country-specific information.
- Keywords appear naturally in titles, headings, body copy, internal links, and URLs. **No keyword stuffing**, including in alt text.
- Every meaningful image gets useful, descriptive Georgian alt text.
- Internal linking is deliberate: homepage → countries/prices/how-it-works/FAQ/blog; country pages → prices/FAQ/related countries/blog; blog → country page/pricing/contact.
- `robots.txt` and `sitemap.xml` are generated, not hand-maintained.
- **Write for humans first.** Never produce filler paragraphs that exist only to hit a keyword. Thin content is worse than no content.

## 7. Code standards

- **Server Components by default.** Add `"use client"` only where interaction genuinely requires it (mobile menu, FAQ accordion, form). Never make a page client-side.
- TypeScript everywhere. Type all content data — no `any`.
- Reusable components over duplication; content in `src/content/`, presentation in `src/components/`.
- Use `next/image` for images and `next/font` for fonts.
- Minimal dependencies. **Adding a package requires asking first.**
- Semantic HTML: real `<nav>`, `<main>`, `<section>`, `<button>`, `<a>`. Accessible focus states, keyboard navigation, labeled form fields, sufficient contrast.
- Mobile-first. No horizontal scroll at any breakpoint. Thumb-friendly tap targets.

## 8. Git workflow

- **Commit each time a feature or phase is complete** and the build passes — not at the end of everything.
- **Commit messages: 1–2 sentences, plain and factual.** No bullet lists, no long bodies, no ceremony.
  - Good: `Add homepage hero and trust sections`
  - Good: `Generate country pages from typed config with per-country metadata`
  - Bad: multi-paragraph messages explaining every file changed
- Never commit `plan.md`, `.env*`, or unverified business data.
- Don't push, tag, or open PRs unless asked.

## 9. Content boundary example

Do this:

```ts
// src/content/business.ts
export const business = {
  name: "Parcello Georgia",
  phone: { display: "551 23 15 19", tel: "+995551231519" },
  deliveryDays: null, // TODO: awaiting business — do not render a range
  pricing: "on-request", // never a number; see hard rule #2
} as const;
```

Not this:

```tsx
<p>ამანათი ევროპაში მიდის 5-7 დღეში</p>       // invented delivery time
<p>ფასი იწყება 5 ლარიდან</p>                   // invented price
```

If a section can't be written without a missing fact, build the section shell and leave a `TODO` — don't fabricate content to fill it.

## 10. Confirmed business facts

The only verified facts so far. Everything else is an open question (`docs/OPEN-QUESTIONS.md`).

| Fact | Value |
|---|---|
| Business name | Parcello Georgia |
| Phone | `551 23 15 19` → `tel:+995551231519` |
| Pricing model | Quoted on request only — never published |
| Destinations | Poland, Germany, France, Hungary, Italy, Bulgaria |
| Parcel handover | **Both** courier pickup and drop-off are offered (specific cities/addresses still TBC) |
| Delivery time | 16–21 days (per-destination breakdown not yet confirmed) |
| Facebook | `https://www.facebook.com/parcellogeorgia` |
| Instagram | `https://www.instagram.com/parcellogeorgia` |

The phone number is the **primary contact** — it belongs in the footer, the contact page, every pricing context, and the mobile sticky CTA. Always render it as a `tel:` link so mobile users can tap to call.

**Pricing copy** (single source, reused everywhere pricing is mentioned):

> ფასის გამოსათვლელად მოგვწერეთ ჩვენს Facebook გვერდზე ან დაგვიკავშირდით ნომერზე 551 23 15 19

Store this string once in `src/content/business.ts` and import it. Do not rewrite or paraphrase it per page.
