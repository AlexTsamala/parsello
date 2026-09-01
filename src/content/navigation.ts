/** Navigation labels are Georgian; hrefs stay English (CLAUDE.md §5). */

export type NavLink = { href: string; label: string };

/** Desktop navbar and mobile menu, in the order the plan specifies. */
export const mainNav: NavLink[] = [
  { href: "/", label: "მთავარი" },
  { href: "/how-it-works", label: "როგორ მუშაობს" },
  { href: "/prices", label: "ფასები" },
  { href: "/countries", label: "მიმართულებები" },
  { href: "/faq", label: "ხშირად დასმული კითხვები" },
];

export const footerNav: NavLink[] = [
  { href: "/", label: "მთავარი" },
  { href: "/prices", label: "ფასები" },
  { href: "/how-it-works", label: "როგორ მუშაობს" },
  { href: "/countries", label: "მიმართულებები" },
  { href: "/faq", label: "ხშირად დასმული კითხვები" },
  { href: "/blog", label: "ბლოგი" },
  { href: "/contact", label: "კონტაქტი" },
];

export const primaryCta = { href: "/contact", label: "გაგზავნე ამანათი" };
