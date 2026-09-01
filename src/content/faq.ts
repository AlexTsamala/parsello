import { business } from "./business";
import { countries } from "./countries";

/**
 * Answers come from the business's own published FAQ (CLAUDE.md §1).
 * Nothing here is inferred or filled in.
 *
 * Still missing — see docs/OPEN-QUESTIONS.md:
 *   - რამდენი კილოგრამის ამანათის გაგზავნა შემიძლია?  (no weight limit stated)
 */

export type FaqItem = {
  question: string;
  answer: string;
  /** Shown in the homepage's short FAQ as well as the full /faq page. */
  featured?: boolean;
};

const destinations = countries.map((country) => country.nameKa).join(", ");

export const faqs: FaqItem[] = [
  {
    question: "როგორ გავაგზავნო ამანათი ევროპაში?",
    answer:
      "დაგვიკავშირდით ტელეფონით ან მოგვწერეთ Facebook-ზე, შეათანხმეთ დეტალები და მოამზადეთ ამანათი. შემდეგ ამანათს კურიერს გადააბარებთ ან თავად ჩააბარებთ.",
    featured: true,
  },
  {
    question: "რომელ ქვეყნებში აგზავნით ამანათებს?",
    answer: `ამჟამად ვაგზავნით ექვსი მიმართულებით: ${destinations}.`,
    featured: true,
  },
  {
    question: "რა ღირს ამანათის გაგზავნა?",
    answer: `${business.pricing.dependsOn} ${business.pricing.copy}`,
    featured: true,
  },
  {
    question: "რამდენ ხანში ჩადის ამანათი?",
    answer: `ამანათი ადრესატთან ჩადის გაგზავნიდან ${business.deliveryTime}-ის ვადაში.`,
    featured: true,
  },
  {
    question: "როგორ შევფუთოთ ამანათი?",
    answer: business.packaging.join(" "),
    featured: true,
  },
  {
    question: "რისი გაგზავნა არ შეიძლება?",
    answer: `არ ვაგზავნით ${business.restrictions.prohibited.join(", ")}-ს. ${business.restrictions.conditional} ${business.restrictions.packingLiability}`,
    featured: true,
  },
  {
    question: "როგორ ხდება ამანათის აღება?",
    answer:
      "ორივე ვარიანტი შესაძლებელია — ამანათი შეგიძლიათ კურიერს გადააბაროთ ან თავად ჩააბაროთ.",
  },
];

export const featuredFaqs = faqs.filter((faq) => faq.featured);
