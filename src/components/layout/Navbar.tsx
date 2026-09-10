import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { NavLinks } from "@/components/layout/NavLinks";
import { Button } from "@/components/ui/Button";
import { getContent } from "@/content";
import { localePath, type Locale } from "@/content/locales";

/**
 * Desktop nav appears at `lg`, not `md`: six Georgian labels plus the logo and
 * CTA do not fit a 768px row. Below that the hamburger menu takes over.
 */
export function Navbar({ locale }: { locale: Locale }) {
  const { ui, mainNav, primaryCta } = getContent(locale);
  const links = mainNav.map((link) => ({
    ...link,
    href: localePath(locale, link.href),
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-sm">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo locale={locale} />

        <NavLinks links={links} ariaLabel={ui.aria.mainNav} />

        <div className="flex items-center gap-1">
          <LocaleSwitcher locale={locale} className="hidden lg:flex" />
          <Button
            href={localePath(locale, primaryCta.href)}
            className="hidden lg:inline-flex"
          >
            {primaryCta.label}
          </Button>
          <MobileMenu
            links={links}
            cta={{ href: localePath(locale, primaryCta.href), label: primaryCta.label }}
            labels={{
              nav: ui.aria.mobileNav,
              open: ui.aria.openMenu,
              close: ui.aria.closeMenu,
            }}
            locale={locale}
          />
        </div>
      </div>
    </header>
  );
}
