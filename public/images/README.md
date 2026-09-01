# Brand images

Drop the real Parcello assets here with these exact filenames — the components already expect them.

| Filename | Image | Used for | Status |
|---|---|---|---|
| `logo.svg` | Orange cube + "Parcello GEORGIA" wordmark | Navbar | ✅ added |
| `logo-mark.svg` | Cube only | Footer, favicon (`src/app/icon.svg`), image fallbacks | ✅ added |
| `courier-handover.jpg` | Courier in branded jacket handing a box to a customer | Hero, trust section | ⬜ needed |
| `parcels-tbilisi.jpg` | Stacked Parcello boxes by the Bridge of Peace | Countries section, how-it-works | ⬜ needed |
| `what-you-can-send.jpg` | Flat-lay of clothes, shoes, electronics with Georgia→EU map | `/what-can-i-send`, prices page | ⬜ needed |
| `og-default.jpg` | 1200×630 branded share image | Open Graph / Twitter cards | ⬜ needed |

Georgian food photography for `/what-can-i-send` (churchkhela, tkemali, cheese, wine, spices, dried fruit) is still needed — see `plan.md` §42.

`logo.svg` keeps the supplied artwork unchanged; only its viewBox was cropped to the artwork bounds. The original canvas was 920×220 with roughly 48% empty space on the right, which made the mark render too small in the navbar.

Until `og-default.jpg` exists, no `og:image` tag is emitted at all — a tag pointing at a missing file produces a broken preview when someone shares a link.

## Rules

- Export at 2× the largest rendered size, then let `next/image` handle the rest.
- Every image needs descriptive Georgian alt text at the usage site, not here. No keyword stuffing (CLAUDE.md §6).
- Prefer the real delivery photography over anything generic.
