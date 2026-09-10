"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { isActivePath, mainNav } from "@/content/navigation";
import { ui } from "@/content/ui";

/**
 * Desktop navigation. Client-side only because the current route decides which
 * link is highlighted — `usePathname` is the only way a layout can know it.
 */
export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label={ui.aria.mainNav} className="hidden lg:block">
      <ul className="flex items-center gap-6">
        {mainNav.map((link) => {
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
