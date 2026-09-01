import type { ResearchedFact } from "./shipping-rules";

/**
 * PRIORITY destination countries — the six the business focuses on and the six
 * SEO landing pages we build. Parcello ships across Europe, so this list is NOT
 * the limit of the service: never write copy implying only these are served.
 * Site-wide coverage wording lives in `business.coverage`.
 *
 * Country pages are generated from this config — do not hand-write six
 * near-identical page components (CLAUDE.md §6).
 *
 * TWO LAYERS, DELIBERATELY SEPARATE (CLAUDE.md §1 rule 10):
 *
 *  `facts`    — researched, sourced, country-specific information about the
 *               destination. Describes the world, never Parcello.
 *
 *  `parcello` — what Parcello itself offers for this destination. Supplied by
 *               the business only. `null` means the UI omits it; it never means
 *               "write something plausible".
 *
 * The UI must render these under visibly different framing so a reader can tell
 * a customs rule from a company claim.
 */

export type ParcelloCountryInfo = {
  /** Overrides the site-wide estimate when a destination differs. */
  deliveryDays: string | null;
  /** Anything Parcello wants to say about this destination specifically. */
  notes: string | null;
};

export type Country = {
  slug: string;
  /** Nominative: "გერმანია" */
  nameKa: string;
  /** "in" form used in headings: "გერმანიაში" */
  nameKaIn: string;
  nameEn: string;
  flag: string;
  currency: string;
  vatRate: string;
  customsAuthority: { name: string; url: string };
  h1: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  facts: ResearchedFact[];
  parcello: ParcelloCountryInfo;
};

const VERIFIED = "2026-09-01";

const VAT_SOURCE = {
  label: "Tax Foundation — VAT rates in Europe 2026",
  url: "https://taxfoundation.org/data/all/eu/value-added-tax-vat-rates-europe/",
};

/** TODO: awaiting business — replace the nulls per country as details arrive. */
const NO_PARCELLO_INFO: ParcelloCountryInfo = { deliveryDays: null, notes: null };

export const countries: Country[] = [
  {
    slug: "poland",
    nameKa: "პოლონეთი",
    nameKaIn: "პოლონეთში",
    nameEn: "Poland",
    flag: "🇵🇱",
    currency: "ზლოტი (PLN)",
    vatRate: "23%",
    customsAuthority: {
      name: "Krajowa Administracja Skarbowa (KAS)",
      url: "https://www.gov.pl/web/kas",
    },
    h1: "ამანათის გაგზავნა პოლონეთში საქართველოდან",
    seoTitle: "ამანათის გაგზავნა პოლონეთში",
    seoDescription:
      "როგორ გავაგზავნოთ ამანათი საქართველოდან პოლონეთში: საბაჟო წესები, რა ნივთების გაგზავნაა დაშვებული და როგორ დაიწყოთ შეკვეთა Parcello-სთან.",
    intro:
      "პოლონეთი ერთ-ერთი ყველაზე მოთხოვნადი მიმართულებაა საქართველოდან გაგზავნილი ამანათებისთვის. ვინაიდან პოლონეთი ევროკავშირის წევრია, გზავნილზე ევროკავშირის საბაჟო წესები ვრცელდება — თუმცა ქვეყანას ეროვნული ვალუტა შენარჩუნებული აქვს, რაც ღირებულების დეკლარირებისას გასათვალისწინებელია.",
    facts: [
      {
        id: "pl-currency-vat",
        title: "ვალუტა და დღგ",
        body: "პოლონეთი ევროკავშირის წევრია, მაგრამ ევროზონაში არ შედის და ეროვნულ ვალუტად ზლოტი (PLN) აქვს შენარჩუნებული. სტანდარტული დღგ-ის განაკვეთი 23%-ია. საბაჟო შეღავათების ზღვრები ევროშია დადგენილი და გადაანგარიშდება ზლოტში.",
        source: VAT_SOURCE,
        verifiedOn: VERIFIED,
      },
    ],
    parcello: NO_PARCELLO_INFO,
  },
  {
    slug: "germany",
    nameKa: "გერმანია",
    nameKaIn: "გერმანიაში",
    nameEn: "Germany",
    flag: "🇩🇪",
    currency: "ევრო (EUR)",
    vatRate: "19%",
    customsAuthority: {
      name: "Zoll — German Customs",
      url: "https://www.zoll.de",
    },
    h1: "ამანათის გაგზავნა გერმანიაში საქართველოდან",
    seoDescription:
      "როგორ გავაგზავნოთ ამანათი საქართველოდან გერმანიაში: საბაჟო წესები, საჩუქრის შეღავათი, აკრძალული ნივთები და შეკვეთის დაწყება Parcello-სთან.",
    seoTitle: "ამანათის გაგზავნა გერმანიაში",
    intro:
      "გერმანიაში საქართველოდან ამანათის გაგზავნა ხშირად ოჯახის წევრებთან ან მეგობრებთან გზავნილს უკავშირდება. გერმანიის საბაჟო სამსახური დეტალურად აქვეყნებს კერძო პირებისთვის განკუთვნილ წესებს, რაც გაგზავნამდე შემოწმების საშუალებას იძლევა.",
    facts: [
      {
        id: "de-currency-vat",
        title: "ვალუტა და დღგ",
        body: "გერმანიაში სტანდარტული დღგ-ის განაკვეთი 19%-ია — ერთ-ერთი ყველაზე დაბალი ევროკავშირში. ვალუტა — ევრო.",
        source: VAT_SOURCE,
        verifiedOn: VERIFIED,
      },
      {
        id: "de-food-imports",
        title: "საკვების შეტანის წესები ცალკე ქვეყნდება",
        body: "გერმანიის სოფლის მეურნეობის სამინისტრო ცალკე აქვეყნებს ცხოველური წარმოშობის პროდუქტების პირადი მოხმარებისთვის შემოტანის პირობებს. საკვების გაგზავნამდე მიზანშეწონილია ამ ინფორმაციის გადამოწმება.",
        source: {
          label: "BMLEH — Importation of products of animal origin for personal consumption",
          url: "https://www.bmleh.de/EN/topics/consumer-protection/food-hygiene-safety/importation-products-animal-origin.html",
        },
        verifiedOn: VERIFIED,
      },
    ],
    parcello: NO_PARCELLO_INFO,
  },
  {
    slug: "france",
    nameKa: "საფრანგეთი",
    nameKaIn: "საფრანგეთში",
    nameEn: "France",
    flag: "🇫🇷",
    currency: "ევრო (EUR)",
    vatRate: "20%",
    customsAuthority: {
      name: "Douane — French Customs",
      url: "https://www.douane.gouv.fr",
    },
    h1: "ამანათის გაგზავნა საფრანგეთში საქართველოდან",
    seoTitle: "ამანათის გაგზავნა საფრანგეთში",
    seoDescription:
      "ამანათის გაგზავნა საქართველოდან საფრანგეთში: საბაჟო წესები, საჩუქრის შეღავათი, დასაშვები ნივთები და შეკვეთის დაწყება Parcello-სთან.",
    intro:
      "საფრანგეთში ამანათის გაგზავნისას მოქმედებს ევროკავშირის ერთიანი საბაჟო წესები. ღირებულების სწორად დეკლარირება მნიშვნელოვანია — სწორედ ის განსაზღვრავს, დაერიცხება თუ არა მიმღებს დღგ.",
    facts: [
      {
        id: "fr-currency-vat",
        title: "ვალუტა და დღგ",
        body: "საფრანგეთში სტანდარტული დღგ-ის განაკვეთი 20%-ია. ვალუტა — ევრო.",
        source: VAT_SOURCE,
        verifiedOn: VERIFIED,
      },
    ],
    parcello: NO_PARCELLO_INFO,
  },
  {
    slug: "hungary",
    nameKa: "უნგრეთი",
    nameKaIn: "უნგრეთში",
    nameEn: "Hungary",
    flag: "🇭🇺",
    currency: "ფორინტი (HUF)",
    vatRate: "27%",
    customsAuthority: {
      name: "NAV — Hungarian Tax and Customs Administration",
      url: "https://nav.gov.hu",
    },
    h1: "ამანათის გაგზავნა უნგრეთში საქართველოდან",
    seoTitle: "ამანათის გაგზავნა უნგრეთში",
    seoDescription:
      "ამანათის გაგზავნა საქართველოდან უნგრეთში: საბაჟო წესები, დღგ-ის განაკვეთი, დასაშვები ნივთები და შეკვეთის დაწყება Parcello-სთან.",
    intro:
      "უნგრეთში ამანათის გაგზავნისას განსაკუთრებით მნიშვნელოვანია გზავნილის ღირებულება: ქვეყანაში ევროკავშირის ყველაზე მაღალი დღგ-ის განაკვეთი მოქმედებს, ამიტომ საჩუქრის შეღავათის ზღვრის გადაჭარბება შესამჩნევად ზრდის მიმღების ხარჯს.",
    facts: [
      {
        id: "hu-currency-vat",
        title: "ევროკავშირის ყველაზე მაღალი დღგ",
        body: "უნგრეთში სტანდარტული დღგ-ის განაკვეთი 27%-ია — ყველაზე მაღალი მთელ ევროკავშირში. ქვეყანა ევროზონაში არ შედის და ეროვნული ვალუტა ფორინტია (HUF).",
        source: VAT_SOURCE,
        verifiedOn: VERIFIED,
      },
    ],
    parcello: NO_PARCELLO_INFO,
  },
  {
    slug: "italy",
    nameKa: "იტალია",
    nameKaIn: "იტალიაში",
    nameEn: "Italy",
    flag: "🇮🇹",
    currency: "ევრო (EUR)",
    vatRate: "22%",
    customsAuthority: {
      name: "Agenzia delle Dogane e dei Monopoli (ADM)",
      url: "https://www.adm.gov.it",
    },
    h1: "ამანათის გაგზავნა იტალიაში საქართველოდან",
    seoTitle: "ამანათის გაგზავნა იტალიაში",
    seoDescription:
      "ამანათის გაგზავნა საქართველოდან იტალიაში: საბაჟო წესები, საჩუქრის შეღავათი, აკრძალული ნივთები და შეკვეთის დაწყება Parcello-სთან.",
    intro:
      "იტალიაში ამანათის გაგზავნა ევროკავშირის საბაჟო წესებს ექვემდებარება. გზავნილის შიგთავსის ზუსტი აღწერა ეხმარება საბაჟოს პროცედურის სწრაფად დასრულებაში.",
    facts: [
      {
        id: "it-currency-vat",
        title: "ვალუტა და დღგ",
        body: "იტალიაში სტანდარტული დღგ-ის განაკვეთი 22%-ია. ვალუტა — ევრო.",
        source: VAT_SOURCE,
        verifiedOn: VERIFIED,
      },
    ],
    parcello: NO_PARCELLO_INFO,
  },
  {
    slug: "bulgaria",
    nameKa: "ბულგარეთი",
    nameKaIn: "ბულგარეთში",
    nameEn: "Bulgaria",
    flag: "🇧🇬",
    currency: "ევრო (EUR)",
    vatRate: "20%",
    customsAuthority: {
      name: "Агенция „Митници“ — Bulgarian Customs Agency",
      url: "https://customs.bg",
    },
    h1: "ამანათის გაგზავნა ბულგარეთში საქართველოდან",
    seoTitle: "ამანათის გაგზავნა ბულგარეთში",
    seoDescription:
      "ამანათის გაგზავნა საქართველოდან ბულგარეთში: საბაჟო წესები, ევროზე გადასვლა, დასაშვები ნივთები და შეკვეთის დაწყება Parcello-სთან.",
    intro:
      "ბულგარეთი ბოლო პერიოდში მნიშვნელოვან ცვლილებას გადაეყარა — ქვეყანამ ევრო შემოიღო. ეს პირდაპირ ეხება ამანათის გამგზავნს, რადგან გზავნილის ღირებულება და საბაჟო შეღავათების ზღვრები ახლა ერთსა და იმავე ვალუტაშია.",
    facts: [
      {
        id: "bg-euro-2026",
        title: "ბულგარეთმა ევრო შემოიღო",
        body: "2026 წლის 1 იანვრიდან ბულგარეთი ევროზონის წევრი გახდა და ლევი ევრომ ჩაანაცვლა ფიქსირებული კურსით — 1 ევრო = 1.95583 ლევი. 2026 წლის 1 თებერვლიდან ევრო ქვეყნის ერთადერთი კანონიერი გადახდის საშუალებაა.",
        source: {
          label: "European Commission Access2Markets — Bulgaria adopts the euro",
          url: "https://trade.ec.europa.eu/access-to-markets/en/news/bulgaria-adopts-euro-1-january-2026",
        },
        verifiedOn: VERIFIED,
      },
      {
        id: "bg-vat",
        title: "დღგ-ის განაკვეთი",
        body: "ბულგარეთში სტანდარტული დღგ-ის განაკვეთი 20%-ია.",
        source: VAT_SOURCE,
        verifiedOn: VERIFIED,
      },
    ],
    parcello: NO_PARCELLO_INFO,
  },
];

export const countrySlugs = countries.map((c) => c.slug);

export function getCountry(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug);
}

/** Related destinations for internal linking (CLAUDE.md §6). */
export function relatedCountries(slug: string, limit = 3): Country[] {
  const index = countries.findIndex((c) => c.slug === slug);
  if (index === -1) return countries.slice(0, limit);
  return [...countries.slice(index + 1), ...countries.slice(0, index)].slice(0, limit);
}
