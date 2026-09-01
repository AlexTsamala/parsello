import Link from "next/link";

/**
 * Brand lockup: orange cube mark + "Parcello Georgia" wordmark, matching the
 * identity used on Parcello courier uniforms.
 *
 * PLACEHOLDER MARK — this draws the cube in SVG because the real logo file has
 * not been added to the repo yet. When `public/images/logo.svg` (or .png)
 * arrives, swap the <svg> for next/image here. Do not redesign the logo
 * (CLAUDE.md §1 rule 8); this is a stand-in, not a new mark.
 */
export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5"
      aria-label="Parcello Georgia — მთავარი გვერდი"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M16 3 28 9v14l-12 6-12-6V9z" fill="#F47C20" />
        <path d="M4 9l12 6 12-6M16 15v14" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
      <span className="leading-none">
        <span
          className={`block text-lg font-bold tracking-tight ${
            inverted ? "text-white" : "text-charcoal"
          }`}
        >
          Parcello
        </span>
        <span
          className={`block text-[10px] font-medium tracking-[0.18em] ${
            inverted ? "text-white/60" : "text-muted"
          }`}
        >
          GEORGIA
        </span>
      </span>
    </Link>
  );
}
