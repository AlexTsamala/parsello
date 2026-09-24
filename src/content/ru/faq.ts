import type { FaqItem } from "../faq";
import { businessRu } from "./business";
import { countriesRu } from "./countries";

const destinations = countriesRu.map((country) => country.name).join(", ");

/**
 * Russian FAQ.
 *
 * Composed from `businessRu` exactly as the other locales compose from their
 * business records, so an answer can never contradict the business facts.
 */
export const faqsRu: FaqItem[] = [
  {
    question: "Как отправить посылку в Европу?",
    answer:
      "Позвоните нам или напишите в Facebook, согласуйте детали и подготовьте посылку. Затем передайте ее курьеру или привезите к нам сами.",
    featured: true,
  },
  {
    question: "В какие страны вы отправляете посылки?",
    answer: `${businessRu.coverage.scope} Наши основные направления: ${destinations}. Если вашей страны нет в списке, свяжитесь с нами — мы организуем отправку.`,
    featured: true,
  },
  {
    question: "Сколько стоит отправить посылку?",
    answer: `${businessRu.pricing.dependsOn} ${businessRu.pricing.copy}`,
    featured: true,
  },
  {
    question: "Сколько идет посылка?",
    answer: `Посылка доходит до получателя в течение ${businessRu.deliveryTimeGenitive} после отправки.`,
    featured: true,
  },
  {
    question: "Как упаковать посылку?",
    answer: businessRu.packaging.join(" "),
    featured: true,
  },
  {
    question: "Что нельзя отправлять?",
    answer: `${businessRu.restrictions.prohibitedSentence}. ${businessRu.restrictions.conditional} ${businessRu.restrictions.packingLiability}`,
    featured: true,
  },
  {
    question: "Как передать посылку?",
    answer:
      "Возможны оба варианта — вы можете передать посылку курьеру или сами привезти ее на наш склад.",
  },
];

export const featuredFaqsRu = faqsRu.filter((faq) => faq.featured);
