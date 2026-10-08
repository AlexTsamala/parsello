/**
 * Per-kg rates in GEL, supplied by the business on 2026-10-08 (Czechia and
 * the Netherlands added later the same day). Cheapest first;
 * ties keep the order the business gave them in. A destination missing from
 * this list is quoted on request — never estimate one (CLAUDE.md §1 rule 2).
 *
 * `id` is the country-page slug where one exists, so the price table links to
 * the page and the page shows its own rate.
 */
const rates = [
  { id: "greece", flag: "🇬🇷", name: "საბერძნეთი", perKg: 9 },
  { id: "poland", flag: "🇵🇱", name: "პოლონეთი", perKg: 15 },
  { id: "germany", flag: "🇩🇪", name: "გერმანია", perKg: 15 },
  { id: "hungary", flag: "🇭🇺", name: "უნგრეთი", perKg: 15 },
  { id: "czechia", flag: "🇨🇿", name: "ჩეხეთი", perKg: 15 },
  { id: "slovakia", flag: "🇸🇰", name: "სლოვაკეთი", perKg: 16 },
  { id: "austria", flag: "🇦🇹", name: "ავსტრია", perKg: 18 },
  { id: "lithuania", flag: "🇱🇹", name: "ლიტვა", perKg: 18 },
  { id: "latvia", flag: "🇱🇻", name: "ლატვია", perKg: 18 },
  { id: "estonia", flag: "🇪🇪", name: "ესტონეთი", perKg: 18 },
  { id: "france", flag: "🇫🇷", name: "საფრანგეთი", perKg: 18 },
  { id: "belgium", flag: "🇧🇪", name: "ბელგია", perKg: 18 },
  { id: "netherlands", flag: "🇳🇱", name: "ნიდერლანდები", perKg: 18 },
  { id: "sweden", flag: "🇸🇪", name: "შვედეთი", perKg: 20 },
  { id: "norway", flag: "🇳🇴", name: "ნორვეგია", perKg: 20 },
  { id: "denmark", flag: "🇩🇰", name: "დანია", perKg: 20 },
  { id: "finland", flag: "🇫🇮", name: "ფინეთი", perKg: 20 },
  { id: "portugal", flag: "🇵🇹", name: "პორტუგალია", perKg: 21 },
  { id: "bulgaria", flag: "🇧🇬", name: "ბულგარეთი", perKg: 21 },
  { id: "great-britain", flag: "🇬🇧", name: "დიდი ბრიტანეთი", perKg: 24 },
  { id: "ireland", flag: "🇮🇪", name: "ირლანდია", perKg: 24 },
] as const;

/** Lets the translations key their country names, so a missing one fails the build. */
export type RateId = (typeof rates)[number]["id"];

export const business = {
  name: "Parcello Georgia",
  shortName: "Parcello",
  phone: {
    display: "+995 551 23 15 19",
    tel: "+995551231519",
  },

  facebookUrl: "https://www.facebook.com/parcellogeorgia",

  instagramUrl: "https://www.instagram.com/parcellogeorgia",

  email: "parcellogeorgia@gmail.com",

  address: {
    lines: ["გრიგოლ რობაქიძის გამზირი 4", "თბილისი, საქართველო"],
    street: "გრიგოლ რობაქიძის გამზირი 4",
    locality: "თბილისი",
    countryCode: "GE",
  },

  workingHours: {
    display: "ყოველდღე, 08:00–22:00",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "22:00",
  },

  handover: {
    pickup: true,
    dropOff: true,
    pickupCities: null as string[] | null,
  },

  pricing: {
    // Per kg for the destinations in `rates`; on request everywhere else.
    model: "per-kg",
    rates,
    currency: "₾",

    dependsOn:
      "ღირებულება დამოკიდებულია იმაზე, თუ რომელ ქვეყანაში აგზავნით ამანათს და რა არის მისი წონა.",
    copy: "მოგვწერეთ ქვეყანა და ამანათის დაახლოებითი წონა — ზუსტ ფასს დაგიანგარიშებთ. დაგვიკავშირდით ნომერზე +995 551 23 15 19 ან მოგვწერეთ Facebook გვერდზე.",
  },

  deliveryTime: "2-3 კვირა",

  // Genitive, for "... 2-3 კვირის ვადაში". Georgian inflects, so the case form
  // is written out — never built by appending "-ის" to the nominative above.
  deliveryTimeGenitive: "2-3 კვირის",

  // Inbound, Europe → Georgia. Confirmed 2026-09-13, separately from the
  // 2-3 week outbound figure above — the two routes are not the same journey.
  inboundDeliveryTime: "2 კვირა",
  inboundDeliveryTimeGenitive: "2 კვირის",

  weightLimit: null as string | null,

  coverage: {
    scope: "ვაგზავნით ამანათებს ევროპის მასშტაბით, ნებისმიერ ქვეყანაში.",
    priorityNote: "ქვემოთ ჩამოთვლილია ჩვენი ძირითადი მიმართულებები.",
  },

  restrictions: {
    prohibited: ["მედიკამენტები", "კანონით აკრძალული ნივთები"],

    prohibitedSentence:
      "არ ვაგზავნით მედიკამენტებს, ასევე კანონით აკრძალულ ნივთებს",

    conditional:
      "მინის ნივთები სათანადოდ უნდა იყოს შეფუთული, რომ ტრანსპორტირებისას არ დაზიანდეს.",

    packingLiability: "შეფუთვაზე პასუხისმგებლობას არ ვიღებთ.",
  },

  packaging: [
    "ნივთები მოათავსეთ მუყაოს ყუთში.",
    "ყუთზე მიუთითეთ გამგზავნის სახელი, გვარი და ტელეფონის ნომერი.",
    "ყუთზე მიუთითეთ მიმღების ზუსტი მისამართი.",
  ],
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://parcello.ge";
