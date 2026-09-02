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

## Food photography for /what-can-i-send

| Filename | Size | Notes |
|---|---|---|
| `food-churchkhela.jpg` | 547×365 | soft on retina — 1200px+ preferred |
| `food-cheese.jpg` | 547×365 | soft on retina — 1200px+ preferred |
| `food-tkemali.jpg` | 635×357 | acceptable |
| `food-spices-honey.jpg` | 840×559 | good |
| `food-wine.jpg` | 1000×666 | good |
| `parcel-packed.jpg` | 1254×1254 | branded box — hero of /what-can-i-send |

All were supplied with mixed extensions (`.jpeg`, `.webp`) and re-encoded to JPEG at quality 86 so the config can assume `.jpg` throughout.

**Row slots render about 600px wide on desktop and 1200px on a retina screen.** Anything under ~1000px source width will look soft there. Replacing the two 547px images is the single easiest visual upgrade to this page.

## Replacing an image in place

`next/image` caches optimised variants under `.next/cache/images`, keyed by URL — not by file contents. Overwriting a file while keeping its name serves the **old** picture until that cache is cleared:

```
rm -rf .next/cache/images
```

Then hard-reload the browser (Cmd+Shift+R), which holds its own copy. Both caches must be cleared or the old image persists.

Always check the real format too — `file public/images/*.jpg`. Supplied images have repeatedly been PNG or WebP data carrying a `.jpg` name; they render, but ship several times the necessary bytes.
