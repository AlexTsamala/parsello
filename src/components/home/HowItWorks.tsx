import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { business } from "@/content/business";

const steps = [
  {
    title: "შეუკვეთე მომსახურება",
    body: "დაგვიკავშირდით ტელეფონით ან მოგვწერეთ Facebook-ზე და შეათანხმეთ დეტალები.",
  },
  {
    title: "მოამზადე ამანათი",
    body: "შეფუთეთ ნივთები ისე, რომ ტრანსპორტირებისას დაცული იყოს.",
  },
  {
    title: "ჩვენ ვიღებთ ამანათს",
    body: "ამანათს კურიერს გადააბარებთ ან თავად ჩააბარებთ.",
  },
  {
    title: "ამანათი მიემგზავრება ევროპაში",
    body: `ამანათი ევროპის მიმართულებით იგზავნება და ადრესატთან ჩადის გაგზავნიდან ${business.deliveryTime}-ის ვადაში.`,
  },
];

export function HowItWorks() {
  return (
    <Section tone="surface" id="how-it-works">
      <SectionHeading
        title="როგორ მუშაობს Parcello?"
        description="ოთხი ნაბიჯი შეკვეთიდან ამანათის გამგზავრებამდე."
      />

      <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title} className="rounded-xl border border-line bg-white p-6">
            <span
              className="inline-flex size-9 items-center justify-center rounded-lg bg-brand-soft text-base font-bold text-brand"
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-muted">{step.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-8">
        <Button href="/how-it-works" variant="secondary">
          დეტალურად — როგორ მუშაობს Parcello
        </Button>
      </div>
    </Section>
  );
}
