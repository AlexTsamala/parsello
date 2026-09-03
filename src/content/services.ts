import { business } from "./business";
import { howItWorksSteps } from "./how-it-works";

/**
 * Parcello's three services. `/services` is the single place the process is
 * described — `/how-it-works` redirects here, so there is no duplicate content.
 *
 * CONFIRMED (2026-09-03): outbound Georgia → Europe, inbound Greece/Poland →
 * Georgia, and an online-shopping forwarding service.
 *
 * The steps below describe only what each service is by definition. Anything
 * operational that has not been confirmed — how a parcel is handed over abroad,
 * how a customer obtains a forwarding address, where parcels are collected in
 * Georgia, and inbound delivery times — is left out rather than guessed. See
 * docs/OPEN-QUESTIONS.md #16–#18.
 */

export type Service = {
  slug: string;
  title: string;
  /** Short route label, e.g. "საქართველო → ევროპა". */
  direction: string;
  summary: string;
  image: string;
  alt: string;
  steps: { title: string; body: string }[];
  /** Null until the business confirms a figure for this route. */
  deliveryTime: string | null;
};

export const services: Service[] = [
  {
    slug: "send-to-europe",
    title: "ამანათის გაგზავნა ევროპაში",
    direction: "საქართველო → ევროპა",
    summary:
      "გაუგზავნეთ ამანათი ოჯახის წევრებს, მეგობრებს ან ახლობლებს ევროპაში — ქართული პროდუქტი, ტანსაცმელი, საჩუქრები და პირადი ნივთები.",
    image: "courier-handover.jpg",
    alt: "Parcello-ს კურიერი ამანათს იბარებს მომხმარებლისგან",
    steps: howItWorksSteps,
    deliveryTime: business.deliveryTime,
  },
  {
    slug: "receive-from-europe",
    title: "ამანათის გამოგზავნა საქართველოში",
    direction: "საბერძნეთი და პოლონეთი → საქართველო",
    summary:
      "საბერძნეთსა და პოლონეთში მყოფ ახლობლებს შეუძლიათ ამანათი საქართველოში გამოგზავნონ.",
    image: "parcels-tbilisi.jpg",
    alt: "Parcello-ს ამანათები თბილისში",
    steps: [
      {
        title: "დაგვიკავშირდით",
        body: "მოგვწერეთ, საიდან იგზავნება ამანათი და ვინ არის მიმღები საქართველოში.",
      },
      {
        title: "მოამზადეთ ამანათი",
        body: "ნივთები მუყაოს ყუთში მოათავსეთ და მიუთითეთ გამგზავნისა და მიმღების მონაცემები.",
      },
      {
        title: "გადმოგვეცით ამანათი",
        body: "შეთანხმებული წესით ამანათს ჩვენს გუნდს გადასცემთ.",
      },
      {
        title: "მიიღეთ ამანათი საქართველოში",
        body: "ამანათი მიემართება მითითებულ მიმღებთან საქართველოში.",
      },
    ],
    deliveryTime: null,
  },
  {
    slug: "online-shopping",
    title: "ონლაინ შოპინგი ევროპიდან",
    direction: "ევროპული ონლაინ მაღაზიები → საქართველო",
    summary:
      "შეიძინეთ ნივთები ევროპულ ონლაინ მაღაზიებში და მიიღეთ ისინი საქართველოში.",
    image: "what-you-can-send.jpg",
    alt: "ონლაინ შეძენილი ნივთები — ტანსაცმელი, ფეხსაცმელი და აქსესუარები",
    steps: [
      {
        title: "მიიღეთ მისამართი",
        body: "დაგვიკავშირდით და მიიღეთ მისამართი, რომელზეც ონლაინ შეკვეთას გამოგზავნით.",
      },
      {
        title: "შეუკვეთეთ ონლაინ",
        body: "შეარჩიეთ ნივთები ონლაინ მაღაზიაში და მიწოდების მისამართად ეს მისამართი მიუთითეთ.",
      },
      {
        title: "ჩვენ ვიღებთ შეკვეთას",
        body: "შეკვეთის მიღების შემდეგ ამანათს საქართველოს მიმართულებით ვამზადებთ.",
      },
      {
        title: "მიიღეთ ამანათი საქართველოში",
        body: "ამანათი საქართველოში ჩამოდის და თქვენ გადმოგეცემათ.",
      },
    ],
    deliveryTime: null,
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
