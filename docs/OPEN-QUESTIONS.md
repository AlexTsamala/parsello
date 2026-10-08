# Open questions

Business facts still needed. Nothing here may be guessed, filled with plausible copy, or inferred from what competitors do — see hard rules in `CLAUDE.md` §1.

Answered items move to `CLAUDE.md` §10 and into `src/content/business.ts`.

## Blocking — pages can't be finished without these

| # | Question | Blocks |
|---|---|---|
| 3 | Pickup is confirmed — **which cities/regions** does courier pickup actually cover? | How-it-works, trust section, FAQ |
| 6 | Image **files** saved into `public/images/` (see that folder's README). Chat-pasted images do not reach disk. The logo is needed as a clean vector/PNG — not cropped out of the courier photo. | Navbar, favicon, hero, OG image |

## Needed for content quality

| # | Question | Blocks |
|---|---|---|
| 22 | **Native-speaker review of the Russian copy.** The Russian site (2026-09-24) was translated from the approved Georgian/English copy and has not yet been proofread by a native Russian speaker. Priority: titles, H1s and meta descriptions, then country pages. | `/ru` |
| 7 | Delivery time given as 2–3 weeks — does it hold across all of Europe, or vary by destination? Calendar or working days? | FAQ, country pages |
| 8 | Maximum parcel weight / size limits | FAQ, how-it-works |
| 9 | Prohibited items (real list, not a generic one) | FAQ, blog article on what can be sent |
| 10 | Delivery to recipient's door, or to a pickup point in Europe? | Country pages, FAQ |
| 11 | When and how does the customer pay? | FAQ, order flow |
| 18 | **Online-shopping service** — how does a customer get their forwarding address? Is there registration? Which countries have an address? Where is the parcel collected in Georgia, and is there a weight/price basis? | /services |
| 14 | Parcello-specific detail per destination (routes, typical timing, what customers usually send there) | Country pages — the researched layer alone can't carry them |
| 20 | **Commercial freight — which European countries?** The service copy says only "from Europe". (The original draft named Italy for groupage consignments; the business removed that on 2026-09-13, so no specific origin is claimed anywhere.) | `/services` |
| 21 | **Commercial freight — transit time and any weight/volume floor.** No figure is published; the service carries `deliveryTimeGenitive: null` and the steps promise a quote rather than a timescale. | `/services` |

## Resolved

- **Pricing** — never published. Customers are routed to Facebook or phone. See `CLAUDE.md` §10.
- **Primary phone** — `+995 551 23 15 19`. Always rendered via `<PhoneButton />` / `<PhoneLink />`.
- **Parcel handover** — both courier pickup and drop-off are offered. Coverage details still open (#3, #4).
- **Facebook** — `https://www.facebook.com/parcellogeorgia`.
- **Instagram** — `https://www.instagram.com/parcellogeorgia`.
- **Email** (#12) — `parcellogeorgia@gmail.com`. Shown in the footer and on the contact page, and carried in the `LocalBusiness` schema.
- **Domain** (#5) — `https://parcello.ge`, apex form, with `www` redirecting to it. Set `NEXT_PUBLIC_SITE_URL` to match; see `DEPLOYMENT.md`.
- **Delivery time** — 2-3 weeks site-wide; Poland 2 weeks. Per-destination breakdown still open (#7).
- **Drop-off address** — გრიგოლ რობაქიძის გამზირი 4, თბილისი, საქართველო.
- **Working hours** — every day, 08:00–22:00. Published on the contact page and in `openingHoursSpecification`.
- **Services** — four confirmed: Georgia→Europe, Greece/Poland→Georgia and online-shopping forwarding (2026-09-03), plus commercial freight Europe→Georgia (2026-09-13), extended to Georgia→Europe as well (2026-09-29). Each has its own URL at `/services/<slug>`; `/services` is the hub and `/how-it-works` permanently redirects there.
- **Inbound handover** (#16) — the sender messages Parcello, receives the warehouse address in reply, and drops the parcel there. Confirmed 2026-09-13; the address itself is given on request, not published.
- **Inbound delivery time** (#17) — 2 weeks, Europe → Georgia. Confirmed 2026-09-13. Stored as `business.inboundDeliveryTime` / `inboundDeliveryTimeGenitive`, separate from the outbound 2–3 weeks.
- **Customer-service languages** (#19) — Georgian, English and Russian. Russian and English confirmed 2026-09-24. Declared in `availableLanguage`. The Russian site lives at `/ru`, targets Russian speakers living in Georgia, keeps English URL slugs, and its language switcher entry has no flag (text «РУС» only), by the business's choice.
- **Cheese vs the EU dairy rule** (#15) — Parcello ships cheese to Europe (confirmed 2026-10-08). The researched EU rule that meat and dairy may not be brought in from non-EU countries ([Your Europe](https://europa.eu/youreurope/citizens/travel/carry/meat-dairy-animal/index_en.htm)) stays in `src/content/shipping-rules.ts` with its source, but is **not published**, by the business's decision: the `animal-products` fact is filtered out of country pages and the FAQ. Do not remove the filter, and do not trim cheese from the list to agree with the rule. How cheese is handled at customs was not specified.
- **Country-page content** — general destination facts are researched and published with sources, kept structurally separate from Parcello claims. See `CLAUDE.md` §1 rule 10 and `docs/RESEARCH-SOURCES.md`.
