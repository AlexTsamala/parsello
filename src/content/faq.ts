import { business } from "./business";
import { countries } from "./countries";

/**
 * Only questions answerable from verified business information (CLAUDE.md §1).
 *
 * Deliberately NOT here until the business supplies answers — see
 * docs/OPEN-QUESTIONS.md:
 *   - რამდენი კილოგრამის ამანათის გაგზავნა შემიძლია?  (weight limit unknown)
 *   - რა ნივთების გაგზავნა შეიძლება?                   (prohibited list unknown)
 */

export type FaqItem = {
  question: string;
  answer: string;
  /** Shown on the homepage's short FAQ, as well as the full /faq page. */
  featured?: boolean;
};

const destinations = countries.map((country) => country.nameKa).join(", ");

export const faqs: FaqItem[] = [
  {
    question: "როგორ გავაგზავნო ამანათი ევროპაში?",
    answer:
      "დაგვიკავშირდით ტელეფონით ან მოგვწერეთ Facebook-ზე, შეათანხმეთ დეტალები და მოამზადეთ ამანათი. შემდეგ კურიერს გადააბარებთ ან თავად ჩააბარებთ ამანათს.",
    featured: true,
  },
  {
    question: "რომელ ქვეყნებში აგზავნით ამანათებს?",
    answer: `ამჟამად ვაგზავნით ექვსი მიმართულებით: ${destinations}.`,
    featured: true,
  },
  {
    question: "როგორ ხდება ამანათის აღება?",
    answer:
      "ორივე ვარიანტი შესაძლებელია — ამანათი შეგიძლიათ კურიერს გადააბაროთ ან თავად ჩააბაროთ.",
    featured: true,
  },
  {
    question: "რა ღირს ამანათის გაგზავნა?",
    answer: business.pricing.copy,
    featured: true,
  },
  {
    question: "რამდენ ხანში მიდის ამანათი?",
    answer: `ამანათი ადრესატამდე დაახლოებით ${business.deliveryDays} დღეში ჩადის.`,
    featured: true,
  },
];

export const featuredFaqs = faqs.filter((faq) => faq.featured);
