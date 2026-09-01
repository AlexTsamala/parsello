import { Section, SectionHeading } from "@/components/ui/Section";

/**
 * Every claim here is confirmed business information (CLAUDE.md §10).
 * Courier pickup and drop-off are both offered, so both may be stated.
 */
const benefits = [
  {
    title: "სწრაფი კომუნიკაცია",
    body: "თქვენს კითხვებსა და შეკვეთაზე სწრაფად ვპასუხობთ ტელეფონით ან Facebook-ზე.",
  },
  {
    title: "მარტივი პროცესი",
    body: "ამანათის გაგზავნა რამდენიმე გასაგები ნაბიჯით სრულდება.",
  },
  {
    title: "კურიერი ან ჩაბარება",
    body: "ამანათი შეგიძლიათ კურიერს გადააბაროთ ან თავად ჩააბაროთ — როგორც თქვენთვის მოსახერხებელია.",
  },
  {
    title: "ევროპის მიმართულებები",
    body: "ამანათებს ევროპის მასშტაბით ვაგზავნით — ძირითადი მიმართულებებით და მათ მიღმაც.",
  },
];

export function TrustSection() {
  return (
    <Section>
      <SectionHeading
        title="რატომ Parcello?"
        description="ევროპაში ამანათის გაგზავნა შეიძლება რთულად ჩანდეს, მაგრამ Parcello-ს მიზანია პროცესი თქვენთვის მაქსიმალურად მარტივი გახადოს."
      />

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => (
          <li
            key={benefit.title}
            className="rounded-xl border border-line bg-white p-6 transition-colors hover:border-brand"
          >
            <h3 className="text-lg font-semibold">{benefit.title}</h3>
            <p className="mt-2 text-sm text-muted">{benefit.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
