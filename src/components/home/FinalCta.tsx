import { Button } from "@/components/ui/Button";
import { PhoneButton } from "@/components/ui/Phone";

export function FinalCta() {
  return (
    <section className="bg-charcoal text-white">
      <div className="container-page py-16 text-center md:py-20">
        <h2 className="text-2xl font-bold md:text-4xl">
          გსურთ ამანათის გაგზავნა ევროპაში?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          დაიწყეთ შეკვეთა Parcello-სთან — დაგვირეკეთ ან მოგვწერეთ Facebook-ზე.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/contact" size="lg">
            ამანათის გაგზავნა
          </Button>
          <PhoneButton size="lg" variant="secondary" className="border-white/25 bg-transparent text-white hover:border-white hover:bg-white/10" />
        </div>
      </div>
    </section>
  );
}
