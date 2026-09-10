import { Button } from "@/components/ui/Button";
import { PhoneButton } from "@/components/ui/Phone";
import { ui } from "@/content/ui";

export function FinalCta() {
  return (
    <section className="bg-charcoal text-white">
      <div className="container-page py-16 text-center md:py-20">
        <h2 className="text-2xl font-bold md:text-4xl">{ui.finalCta.heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          {ui.finalCta.body}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/contact" size="lg">
            {ui.finalCta.cta}
          </Button>
          <PhoneButton size="lg" variant="onDark" />
        </div>
      </div>
    </section>
  );
}
