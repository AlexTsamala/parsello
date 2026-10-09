import { formatRateTiers } from "@/lib/rates";

import { business } from "./business";
import { countries } from "./countries";

export type FaqItem = {
  question: string;
  answer: string;
  /** Shown in the homepage's short FAQ as well as the full /faq page. */
  featured?: boolean;
};

const destinations = countries.map((country) => country.name).join(", ");

export const faqs: FaqItem[] = [
  {
    question: "როგორ გავაგზავნო ამანათი ევროპაში?",
    answer:
      "დაგვიკავშირდით ტელეფონით ან მოგვწერეთ Facebook-ზე, შეათანხმეთ დეტალები და მოამზადეთ ამანათი. შემდეგ ამანათს კურიერს გადასცემთ ან თავად ჩააბარებთ.",
    featured: true,
  },
  {
    question: "რომელ ქვეყნებში აგზავნით ამანათებს?",
    answer: `${business.coverage.scope} ძირითადი მიმართულებებია: ${destinations}. თუ თქვენი ქვეყანა სიაში არ არის, დაგვიკავშირდით — გაგზავნას შევათანხმებთ.`,
    featured: true,
  },
  {
    question: "რა ღირს ამანათის გაგზავნა?",
    answer: `ფასი 1 კილოგრამზე: ${formatRateTiers(business.pricing.rates, business.pricing.currency)}. სხვა ქვეყანაში აგზავნით? ${business.pricing.copy}`,
    featured: true,
  },
  {
    question: "რამდენ ხანში ჩადის ამანათი?",
    answer: `ამანათი ადრესატთან ჩადის გაგზავნიდან ${business.deliveryTimeGenitive} ვადაში.`,
    featured: true,
  },
  {
    question: "როგორ იღებს მიმღები ამანათს?",
    answer: business.doorDelivery,
    featured: true,
  },
  {
    question: "როგორ შევფუთოთ ამანათი?",
    answer: business.packaging.join(" "),
    featured: true,
  },
  {
    question: "რისი გაგზავნა არ შეიძლება?",
    answer: `${business.restrictions.prohibitedSentence} ${business.restrictions.conditional} ${business.restrictions.packingLiability}`,
    featured: true,
  },
  {
    question: "როგორ ხდება ამანათის აღება?",
    answer:
      "ორივე ვარიანტი შესაძლებელია — ამანათი შეგიძლიათ კურიერს გადასცეთ ან თავად ჩააბაროთ ჩვენს საწყობში.",
  },
];

export const featuredFaqs = faqs.filter((faq) => faq.featured);
