import { business } from "@/content/business";

/**
 * Global 404, for URLs that match no route in either locale.
 *
 * It sits at the app root, outside both locale route groups, because an
 * unmatched URL belongs to neither — so Next renders it without a root layout
 * and therefore without `globals.css`, the navbar or the footer. Everything
 * here is inline-styled and self-contained for that reason; do not reach for
 * Tailwind classes in this file, they will not be applied.
 *
 * Bilingual for the same reason: with no route to read a locale from, there is
 * nothing to pick a language by, and guessing one would be wrong half the time.
 * Palette values are the fixed brand tokens (CLAUDE.md §4), written literally
 * because the stylesheet that defines them is not loaded here.
 */
export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        padding: "2rem 1.25rem",
        textAlign: "center",
        backgroundColor: "#ffffff",
        color: "#151515",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "0.875rem",
          fontWeight: 600,
          letterSpacing: "0.18em",
          color: "#f47c20",
        }}
      >
        404
      </p>

      <div>
        <h1 style={{ margin: 0, fontSize: "1.75rem", lineHeight: 1.35 }}>
          გვერდი ვერ მოიძებნა
        </h1>
        <p style={{ margin: "0.75rem 0 0", color: "#666666" }}>
          შესაძლოა გვერდი წაშლილია ან მისამართი არასწორად არის აკრეფილი.
        </p>
      </div>

      <div
        style={{
          borderTop: "1px solid #e7e7e7",
          paddingTop: "1.5rem",
          maxWidth: "32rem",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "1.25rem", lineHeight: 1.4 }}>
          Page not found
        </h2>
        <p style={{ margin: "0.75rem 0 0", color: "#666666" }}>
          The page may have been removed, or the address may be mistyped.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
          justifyContent: "center",
        }}
      >
        {/*
          Plain anchors, not next/link. This page renders outside both root
          layouts, and moving from here into either locale crosses a root
          layout boundary — which Next serves as a full document load however
          it is triggered. A client-side Link would buy nothing and has no
          layout context to navigate within.
        */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" style={buttonStyle}>
          მთავარი გვერდი
        </a>
        <a href="/en" style={buttonStyle}>
          English home
        </a>
        <a href={`tel:${business.phone.tel}`} style={secondaryButtonStyle}>
          {business.phone.display}
        </a>
      </div>
    </main>
  );
}

const buttonStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "2.75rem",
  padding: "0 1.25rem",
  borderRadius: "0.5rem",
  backgroundColor: "#f47c20",
  color: "#ffffff",
  fontWeight: 600,
  textDecoration: "none",
};

const secondaryButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  backgroundColor: "transparent",
  color: "#151515",
  border: "1px solid #e7e7e7",
};
