export const business = {
  name: "Parcello Georgia",
  shortName: "Parcello",
  phone: {
    display: "+995 551 23 15 19",
    tel: "+995551231519",
  },

  facebookUrl: "https://www.facebook.com/parcellogeorgia",

  instagramUrl: "https://www.instagram.com/parcellogeorgia",

  email: null as string | null,

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
    model: "on-request",

    dependsOn:
      "ღირებულება დამოკიდებულია იმაზე, თუ რომელ ქვეყანაში აგზავნით ამანათს და რა არის მისი წონა.",
    copy: "მოგვწერეთ ქვეყანა და ამანათის დაახლოებითი წონა — ზუსტ ფასს დაგიანგარიშებთ. დაგვიკავშირდით ნომერზე +995 551 23 15 19 ან მოგვწერეთ Facebook გვერდზე.",
  },

  deliveryTime: "2-3 კვირა",

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
