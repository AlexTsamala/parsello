import type { NavLink } from "../navigation";

/**
 * English navigation.
 *
 * `href` values stay in their locale-agnostic form — the `/en` prefix is added
 * at render time by `localePath()`, so these must never be written with it.
 *
 * `/blog` is deliberately absent: the blog is Georgian-only, and sending an
 * English reader into Georgian long-form copy is worse than not linking to it.
 */
export const mainNavEn: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/prices", label: "Prices" },
  { href: "/countries", label: "Destinations" },
  { href: "/what-can-i-send", label: "What you can send" },
  { href: "/faq", label: "FAQ" },
];

export const footerNavEn: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/prices", label: "Prices" },
  { href: "/services", label: "Services" },
  { href: "/countries", label: "Destinations" },
  { href: "/what-can-i-send", label: "What you can send" },
  { href: "/faq", label: "Frequently asked questions" },
  { href: "/contact", label: "Contact" },
];

export const primaryCtaEn = { href: "/contact", label: "Send a parcel" };
