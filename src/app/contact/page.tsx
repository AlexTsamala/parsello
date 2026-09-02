import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { business } from "@/content/business";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "კონტაქტი და შეკვეთა",
  description:
    "დაიწყეთ ამანათის შეკვეთა Parcello-სთან — დაგვირეკეთ ან მოგვწერეთ Facebook-ზე. მოგვწერეთ ქვეყანა, წონა და შიგთავსი, და ზუსტ ფასს დაგიანგარიშებთ.",
  path: "/contact",
});

/**
 * No submission form: there is no backend and no email address yet
 * (docs/OPEN-QUESTIONS.md #12). A form that silently discards messages would be
 * worse than none, so the page routes to the channels that actually work.
 */
const orderDetails = [
  { label: "სახელი და გვარი", hint: "ვისთან დავუკავშირდეთ" },
  { label: "ტელეფონი", hint: "თქვენი საკონტაქტო ნომერი" },
  { label: "დანიშნულების ქვეყანა და ქალაქი", hint: "სად იგზავნება ამანათი" },
  { label: "ამანათის დაახლოებითი წონა", hint: "ფასის დასათვლელად" },
  { label: "ამანათის შიგთავსი", hint: "რა ნივთებია ყუთში" },
  { label: "ამანათის აღების ადგილი", hint: "კურიერს გადააბარებთ თუ თავად ჩააბარებთ" },
];

export default function ContactPage() {
  return (
    <main id="main">
      <section className="border-b border-line bg-surface">
        <div className="container-page py-10 md:py-16">
          <Breadcrumbs items={[{ href: "/", label: "მთავარი" }, { label: "კონტაქტი" }]} />
          <h1 className="mt-6 max-w-3xl text-3xl font-bold md:text-5xl">
            ამანათის შეკვეთა
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted md:text-lg">
            შეკვეთის დასაწყებად დაგვირეკეთ ან მოგვწერეთ Facebook-ზე. ქვემოთ ჩამოთვლილი
            ინფორმაცია დაგვეხმარება, რომ ზუსტი ფასი მალევე გითხრათ.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`tel:${business.phone.tel}`} size="lg">
              {business.phone.display}
            </Button>
            {business.facebookUrl ? (
              <Button href={business.facebookUrl} size="lg" variant="secondary">
                Facebook-ზე მოწერა
              </Button>
            ) : null}
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">რა მოგვწეროთ შეკვეთისას</h2>
            <ul className="mt-6 space-y-4">
              {orderDetails.map((item, index) => (
                <li key={item.label} className="flex gap-4">
                  <span
                    className="inline-flex size-7 shrink-0 items-center justify-center rounded-md bg-brand-soft text-sm font-bold text-brand"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <span>
                    <span className="block font-medium">{item.label}</span>
                    <span className="block text-sm text-muted">{item.hint}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold md:text-3xl">საკონტაქტო არხები</h2>

            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-sm font-semibold tracking-wide text-muted">ტელეფონი</dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${business.phone.tel}`}
                    className="text-xl font-semibold transition-colors hover:text-brand"
                  >
                    {business.phone.display}
                  </a>
                </dd>
              </div>

              {business.facebookUrl ? (
                <div>
                  <dt className="text-sm font-semibold tracking-wide text-muted">Facebook</dt>
                  <dd className="mt-1">
                    <a
                      href={business.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-4 transition-colors hover:text-brand"
                    >
                      {business.name}
                    </a>
                  </dd>
                </div>
              ) : null}

              {business.instagramUrl ? (
                <div>
                  <dt className="text-sm font-semibold tracking-wide text-muted">Instagram</dt>
                  <dd className="mt-1">
                    <a
                      href={business.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-4 transition-colors hover:text-brand"
                    >
                      {business.name}
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>

            <p className="mt-8 rounded-xl border border-line bg-surface p-5 text-sm text-muted">
              {business.pricing.copy}
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
