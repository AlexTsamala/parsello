import { Button } from "@/components/ui/Button";
import { MobilePhoneIcon } from "@/components/ui/icons";
import { business } from "@/content/business";
import { getContent } from "@/content";
import { localePath, type Locale } from "@/content/locales";

/**
 * Mobile-only sticky bar so ordering and calling are always one tap away
 * (plan §6, §26). Hidden from lg upwards, where the navbar CTA is visible.
 */
export function MobileStickyCta({ locale }: { locale: Locale }) {
  const { ui, primaryCta } = getContent(locale);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-4 py-3 backdrop-blur-sm lg:hidden">
      <div className="flex gap-2">
        <Button href={localePath(locale, primaryCta.href)} className="flex-1">
          {primaryCta.label}
        </Button>
        <Button
          href={`tel:${business.phone.tel}`}
          variant="secondary"
          aria-label={ui.aria.callNumber(business.phone.display)}
          className="px-4"
        >
          <MobilePhoneIcon className="text-brand" />
        </Button>
      </div>
    </div>
  );
}
