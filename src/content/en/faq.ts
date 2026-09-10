import { countriesEn } from "./countries";
import type { FaqItem } from "../faq";
import { businessEn } from "./business";

const destinations = countriesEn.map((country) => country.name).join(", ");

/**
 * English FAQ.
 *
 * Composed from `businessEn` the same way the Georgian file composes from
 * `business`, so an answer can never contradict the business facts — and the
 * pricing answer routes to contact rather than quoting a figure.
 */
export const faqsEn: FaqItem[] = [
  {
    question: "How do I send a parcel to Europe?",
    answer:
      "Call us or message us on Facebook, agree the details, and prepare your parcel. You then either hand it to a courier or bring it to us yourself.",
    featured: true,
  },
  {
    question: "Which countries do you send parcels to?",
    answer: `${businessEn.coverage.scope} Our main destinations are: ${destinations}. If your country is not on the list, get in touch — we will arrange the shipment.`,
    featured: true,
  },
  {
    question: "How much does it cost to send a parcel?",
    answer: `${businessEn.pricing.dependsOn} ${businessEn.pricing.copy}`,
    featured: true,
  },
  {
    question: "How long does a parcel take to arrive?",
    answer: `A parcel reaches the recipient within ${businessEn.deliveryTimeGenitive} of being sent.`,
    featured: true,
  },
  {
    question: "How should I pack my parcel?",
    answer: businessEn.packaging.join(" "),
    featured: true,
  },
  {
    question: "What can't be sent?",
    answer: `${businessEn.restrictions.prohibitedSentence}. ${businessEn.restrictions.conditional} ${businessEn.restrictions.packingLiability}`,
    featured: true,
  },
  {
    question: "How is the parcel collected?",
    answer:
      "Both options are available — you can hand the parcel to a courier or bring it to our warehouse yourself.",
  },
];

export const featuredFaqsEn = faqsEn.filter((faq) => faq.featured);
