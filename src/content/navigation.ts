/** Navigation labels are Georgian; hrefs stay English (CLAUDE.md §5). */

export type NavLink = { href: string; label: string };

/**
 * Desktop navbar and mobile menu.
 *
 * Labels here are deliberately shorter than the page titles — six Georgian
 * items do not fit one row otherwise. The footer keeps the full wording, so the
 * longer anchor text is still present on every page.
 */
export const mainNav: NavLink[] = [
  { href: "/", label: "მთავარი" },
  { href: "/how-it-works", label: "როგორ მუშაობს" },
  { href: "/prices", label: "ფასები" },
  { href: "/countries", label: "მიმართულებები" },
  { href: "/what-can-i-send", label: "დასაშვები ნივთები" },
  { href: "/faq", label: "კითხვები" },
];

export const footerNav: NavLink[] = [
  { href: "/", label: "მთავარი" },
  { href: "/prices", label: "ფასები" },
  { href: "/how-it-works", label: "როგორ მუშაობს" },
  { href: "/countries", label: "მიმართულებები" },
  { href: "/what-can-i-send", label: "რისი გაგზავნა შეიძლება" },
  { href: "/faq", label: "ხშირად დასმული კითხვები" },
  { href: "/blog", label: "ბლოგი" },
  { href: "/contact", label: "კონტაქტი" },
];

export const primaryCta = { href: "/contact", label: "გაგზავნე ამანათი" };

/** Shared active-route test, so the navbar and mobile menu never disagree. */
export function isActivePath(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}
