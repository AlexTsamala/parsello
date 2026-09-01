# Brand images

Drop the real Parcello assets here with these exact filenames — the components already expect them.

| Filename | Image | Used for | Status |
|---|---|---|---|
| `logo.svg` | Orange cube + "Parcello GEORGIA" wordmark | Navbar | ✅ added |
| `logo-mark.svg` | Cube only | Footer, favicon (`src/app/icon.svg`), image fallbacks | ✅ added |
| `courier-handover.jpg` | Courier in branded jacket handing a box to a customer | Hero, trust section | ✅ in use |
| `parcels-tbilisi.jpg` | Stacked Parcello boxes by the Bridge of Peace | `/countries` hero (Phase 5) | ✅ added |
| `what-you-can-send.jpg` | Flat-lay of clothes, shoes, electronics with Georgia→EU map | `/what-can-i-send` (Phase 6) | ✅ added |
| `og-default.jpg` | 1200×630 branded share image | Open Graph / Twitter cards | ✅ generated |

Georgian food photography for `/what-can-i-send` (churchkhela, tkemali, cheese, wine, spices, dried fruit) is still needed — see `plan.md` §42.

`logo.svg` keeps the supplied artwork unchanged; only its viewBox was cropped to the artwork bounds. The original canvas was 920×220 with roughly 48% empty space on the right, which made the mark render too small in the navbar.

`og-default.jpg` is generated, not photographed. Its source is `docs/assets/og-default.svg`; regenerate after editing with:

```
node -e "require('sharp')('docs/assets/og-default.svg',{density:300}).resize(1200,630,{fit:'contain',background:'#ffffff'}).jpeg({quality:88,chromaSubsampling:'4:4:4'}).toFile('public/images/og-default.jpg')"
```

The wordmark in that file is vector paths, not text, so it renders identically regardless of installed fonts. The Georgian headline is real text and does need a Georgian font present when rasterizing.

If `og-default.jpg` is ever removed, no `og:image` tag is emitted at all — a tag pointing at a missing file produces a broken preview when someone shares a link.

## Photos

The three photographs arrived as PNG data carrying `.jpg` extensions. They were re-encoded to actual JPEG at quality 86, which cut them from 5.5 MB to 1.1 MB with no visible loss. Originals are not kept in the repo. If you replace any of them, save as real JPEG — `next/image` serves WebP/AVIF to browsers either way, but the source file still ships in the repo and the build.

## Rules

- Export at 2× the largest rendered size, then let `next/image` handle the rest.
- Every image needs descriptive Georgian alt text at the usage site, not here. No keyword stuffing (CLAUDE.md §6).
- Prefer the real delivery photography over anything generic.
