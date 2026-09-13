import { business } from "./business";
import { howItWorksSteps } from "./how-it-works";

/**
 * Parcello's four services. `/services` is the single place the process is
 * described — `/how-it-works` redirects here, so there is no duplicate content.
 *
 * CONFIRMED (2026-09-03): outbound Georgia → Europe, inbound Greece/Poland →
 * Georgia, and an online-shopping forwarding service.
 * CONFIRMED (2026-09-13): commercial freight, Europe → Georgia.
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
  /**
   * Optional prose for the detail section, shown under the summary.
   *
   * Only commercial freight carries this: it is a quoted, business-to-business
   * service rather than a fixed consumer flow, so the business supplied real
   * copy describing it. The three consumer services are fully described by
   * their summary and steps.
   */
  body?: string[];
  image: string;
  alt: string;
  steps: { title: string; body: string }[];
  /**
   * Genitive, for "... ვადაში" — see business.deliveryTimeGenitive.
   * Null until the business confirms a figure for this route.
   */
  deliveryTimeGenitive: string | null;
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
    deliveryTimeGenitive: business.deliveryTimeGenitive,
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
    deliveryTimeGenitive: null,
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
    deliveryTimeGenitive: null,
  },
  {
    slug: "commercial-freight",
    title: "კომერციული ტვირთები",
    direction: "ევროპა → საქართველო",
    summary:
      "Parcello გთავაზობთ კომერციული ტვირთების ტრანსპორტირებას ევროპიდან საქართველოში.",
    body: [
      "ინდუსტრიაში მრავალწლიანი გამოცდილების მქონე გუნდი ზრუნავს იმაზე, რომ თქვენი ტვირთი უსაფრთხოდ, ეფექტურად და დროულად ჩავიდეს დანიშნულების ადგილზე.",
      "თუ თქვენი ბიზნესისთვის პროდუქციის იმპორტი ან ექსპორტი გესაჭიროებათ, სერვისს თქვენს მოთხოვნებზე მოვარგებთ.",
      "დაინტერესების შემთხვევაში მოგვწერეთ შეკვეთის დეტალები ან დაგვიკავშირდით ტელეფონით — და ჩვენ დაგიკავშირდებით.",
    ],
    image: "commercial-freight.jpg",
    alt: "მომხმარებელი Parcello-ს ბრენდირებულ ყუთს ხელში უჭირავს",
    steps: [
      {
        title: "მოგვწერეთ ტვირთის დეტალები",
        body: "მოგვწერეთ, საიდან იგზავნება ტვირთი, რა ტიპისაა და დაახლოებით რა მოცულობა და წონა აქვს.",
      },
      {
        title: "ჩვენ დაგიკავშირდებით",
        body: "თქვენს მოთხოვნებს გავეცნობით და შემოგთავაზებთ ბიზნესზე მორგებულ პირობებს.",
      },
      {
        title: "ტვირთს ჩავიბარებთ",
        body: "შეთანხმებული წესით ტვირთი ევროპაში ჩვენს გუნდს გადაეცემა.",
      },
      {
        title: "ტვირთი ჩამოდის საქართველოში",
        body: "ჩვენ ვიზრუნებთ ტრანსპორტირების პროცესის ორგანიზებაზე დანიშნულების ადგილამდე.",
      },
    ],
    deliveryTimeGenitive: null,
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
