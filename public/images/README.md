# Brand images

Drop the real Parcello assets here with these exact filenames — the components already expect them.

| Filename | Image | Used for |
|---|---|---|
| `logo.svg` (or `logo.png`) | The Parcello mark | Navbar, footer, favicon, Open Graph |
| `courier-handover.jpg` | Courier in branded jacket handing a box to a customer | Hero, trust section |
| `parcels-tbilisi.jpg` | Stacked Parcello boxes by the Bridge of Peace | Countries section, how-it-works |
| `what-you-can-send.jpg` | Flat-lay of clothes, shoes, electronics with Georgia→EU map | Blog "what can I send", prices page |

Until `logo.svg` exists, `src/components/layout/Logo.tsx` draws a temporary SVG cube lockup. Replace it with `next/image` once the file is here.

## Rules

- Export at 2× the largest rendered size, then let `next/image` handle the rest.
- Every image needs descriptive Georgian alt text at the usage site, not here. No keyword stuffing (CLAUDE.md §6).
- Prefer the real delivery photography over anything generic.
