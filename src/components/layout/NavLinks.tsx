"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { isActivePath, type NavLink } from "@/content/navigation";

/**
 * Desktop navigation. Client-side only because the current route decides which
 * link is highlighted — `usePathname` is the only way a layout can know it.
 *
 * Links and labels arrive as props rather than being imported: this component
 * ships to the browser, and importing the content registry would bundle both
 * locales' copy into every page.
 */
export function NavLinks({
  links,
  ariaLabel,
}: {
  /** Already locale-prefixed by the server. */
  links: NavLink[];
  ariaLabel: string;
}) {
  const pathname = usePathname();

  return (
    <nav aria-label={ariaLabel} className="hidden lg:block">
      <ul className="flex items-center gap-6">
        {links.map((link) => {
          const active = isActivePath(pathname, link.href);

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-1 text-[15px] transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:transition-colors ${
                  active
                    ? "font-semibold text-brand after:bg-brand"
                    : "text-charcoal after:bg-transparent hover:text-brand"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
