# Open questions

Business facts still needed. Nothing here may be guessed, filled with plausible copy, or inferred from what competitors do — see hard rules in `CLAUDE.md` §1.

Answered items move to `CLAUDE.md` §10 and into `src/content/business.ts`.

## Blocking — pages can't be finished without these

### 15. Food categories vs EU import rules ⚠️

Parcello's own list of what customers send includes **ყველი (cheese)**, **ღვინო (wine)**, **თაფლი (honey)** and "ყველა სახის პროდუქტი" (all kinds of food products).

Researched EU rules say otherwise:

| Category | EU rule | Source |
|---|---|---|
| Cheese / dairy | **Prohibited** from non-EU countries | [Your Europe](https://europa.eu/youreurope/citizens/travel/carry/meat-dairy-animal/index_en.htm) |
| Honey | Allowed, **2 kg** limit | same |
| Wine / alcohol | Allowed, but excise + VAT apply; strict quantity limits under gift relief | [Irish Revenue](https://www.revenue.ie/en/customs/individuals/relief-gifts-low-value/rules-gifts.aspx) |

This is the site's only direct contradiction between a Parcello claim and a researched fact, and it cannot be resolved by writing around it. **What the business needs to confirm:** does Parcello actually ship cheese to the EU, and if so, how is it handled at customs?

Until answered:

- `src/content/allowed-items.ts` carries the business's full list unchanged, with affected categories flagged via `euNote`.
- The list is not published on any page that also states the animal-products rule.
- Neither the list nor the EU rule may be softened to make them agree.


| # | Question | Blocks |
|---|---|---|
| 3 | Pickup is confirmed — **which cities/regions** does courier pickup actually cover? | How-it-works, trust section, FAQ |
| 5 | Domain name | Canonical URLs, sitemap, Open Graph |
| 6 | Image **files** saved into `public/images/` (see that folder's README). Chat-pasted images do not reach disk. The logo is needed as a clean vector/PNG — not cropped out of the courier photo. | Navbar, favicon, hero, OG image |

## Needed for content quality

| # | Question | Blocks |
|---|---|---|
| 7 | Delivery time given as 2–3 weeks — does it hold across all of Europe, or vary by destination? Calendar or working days? | FAQ, country pages |
| 8 | Maximum parcel weight / size limits | FAQ, how-it-works |
| 9 | Prohibited items (real list, not a generic one) | FAQ, blog article on what can be sent |
| 10 | Delivery to recipient's door, or to a pickup point in Europe? | Country pages, FAQ |
| 11 | When and how does the customer pay? | FAQ, order flow |
| 12 | Email address | Contact page |
| 14 | Parcello-specific detail per destination (routes, typical timing, what customers usually send there) | Country pages — the researched layer alone can't carry them |

## Resolved

- **Pricing** — never published. Customers are routed to Facebook or phone. See `CLAUDE.md` §10.
- **Primary phone** — `+995 551 23 15 19`. Always rendered via `<PhoneButton />` / `<PhoneLink />`.
- **Parcel handover** — both courier pickup and drop-off are offered. Coverage details still open (#3, #4).
- **Facebook** — `https://www.facebook.com/parcellogeorgia`.
- **Instagram** — `https://www.instagram.com/parcellogeorgia`.
- **Delivery time** — 2-3 weeks site-wide; Poland 2 weeks. Per-destination breakdown still open (#7).
- **Drop-off address** — გრიგოლ რობაქიძის გამზირი 4, თბილისი, საქართველო.
- **Working hours** — every day, 08:00–22:00. Published on the contact page and in `openingHoursSpecification`.
- **Country-page content** — general destination facts are researched and published with sources, kept structurally separate from Parcello claims. See `CLAUDE.md` §1 rule 10 and `docs/RESEARCH-SOURCES.md`.
