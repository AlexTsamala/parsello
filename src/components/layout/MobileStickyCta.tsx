import { Button } from "@/components/ui/Button";
import { MobilePhoneIcon } from "@/components/ui/icons";
import { business } from "@/content/business";
import { primaryCta } from "@/content/navigation";

/**
 * Mobile-only sticky bar so ordering and calling are always one tap away
 * (plan §6, §26). Hidden from md upwards, where the navbar CTA is visible.
 */
export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-4 py-3 backdrop-blur-sm md:hidden">
      <div className="flex gap-2">
        <Button href={primaryCta.href} className="flex-1">
          {primaryCta.label}
        </Button>
        <Button
          href={`tel:${business.phone.tel}`}
          variant="secondary"
          aria-label={`დარეკვა ნომერზე ${business.phone.display}`}
          className="px-4"
        >
          <MobilePhoneIcon className="text-brand" />
        </Button>
      </div>
    </div>
  );
}
