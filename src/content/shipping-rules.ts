/**
 * Researched EU import rules that apply to every destination we ship to.
 *
 * PROVENANCE RULE (CLAUDE.md §1 rule 10):
 * Everything in this file describes *the world* — EU customs and import law —
 * and is backed by a named source. Nothing here describes what Parcello does,
 * offers, charges, or guarantees. Parcello claims live in `business.ts` and the
 * `parcello` field of each country, and only the business supplies them.
 *
 * `verifiedOn` is the date the wording was last checked against the source.
 * These rules change; re-check before relying on them.
 */

export type ResearchedFact = {
  id: string;
  /** Customer-facing Georgian heading. */
  title: string;
  /** Customer-facing Georgian body. */
  body: string;
  source: { label: string; url: string };
  /** ISO date the fact was last verified against its source. */
  verifiedOn: string;
};

const VERIFIED = "2026-09-01";

/** EU-wide, so it applies to every destination — country pages and the FAQ. */
export const euImportRules: ResearchedFact[] = [
  {
    id: "customs-clearance",
    title: "ამანათი საბაჟო კონტროლს გადის",
    body: "საქართველო ევროკავშირის წევრი არ არის, ამიტომ ევროპაში გაგზავნილი ამანათი ევროკავშირში შესვლისას საბაჟო პროცედურას გადის. მიმღებს შესაძლოა დაერიცხოს დამატებული ღირებულების გადასახადი (დღგ) და, ცალკეულ შემთხვევებში, საბაჟო გადასახადიც.",
    source: {
      label: "European Commission — Taxation and Customs Union",
      url: "https://taxation-customs.ec.europa.eu/",
    },
    verifiedOn: VERIFIED,
  },
  {
    id: "gift-relief-45",
    title: "საჩუქარი 45 ევრომდე — გადასახადის გარეშე",
    body: "თუ ამანათს კერძო პირი უგზავნის კერძო პირს პირადი ან ოჯახური მოხმარებისთვის და მისი ღირებულება 45 ევროს არ აღემატება, გზავნილი თავისუფლდება საბაჟო გადასახადისა და დღგ-სგან. შეღავათი მხოლოდ არარეგულარულ, არაკომერციულ საჩუქრებზე ვრცელდება — მაგალითად, დაბადების დღის გზავნილზე. თუ ღირებულება 45 ევროს გადააჭარბებს, დღგ მთლიან ამანათს დაერიცხება.",
    source: {
      label: "Irish Revenue — EU gift consignment relief (Council Regulation 1186/2009)",
      url: "https://www.revenue.ie/en/customs/individuals/relief-gifts-low-value/rules-gifts.aspx",
    },
    verifiedOn: VERIFIED,
  },
  {
    id: "duty-july-2026",
    title: "2026 წლის 1 ივლისიდან მოქმედი ახალი წესი",
    body: "ევროკავშირმა გააუქმა 150 ევრომდე ღირებულების გზავნილების საბაჟო გადასახადისგან გათავისუფლება. მის ნაცვლად 2026 წლის 1 ივლისიდან მოქმედებს 3 ევროს ფიქსირებული საბაჟო გადასახადი, რომელიც ითვლება არა ერთ ამანათზე, არამედ თითოეულ სასაქონლო კოდზე. წესი პირველ რიგში ონლაინ ვაჭრობით შემოტანილ გზავნილებს ეხება და დროებითია — 2028 წლის 1 ივლისამდე.",
    source: {
      label: "European Commission — €3 customs duty for low-value parcels",
      url: "https://commission.europa.eu/news-and-media/news/ensuring-fairness-and-safety-eur3-customs-duty-low-value-parcels-2026-06-29_en",
    },
    verifiedOn: VERIFIED,
  },
  {
    id: "animal-products",
    title: "ხორცი და რძის პროდუქტები — აკრძალული",
    body: "ევროკავშირის გარედან ხორცისა და რძის პროდუქტების შეტანა აკრძალულია ცხოველთა დაავადებების გავრცელების პრევენციის მიზნით. გამონაკლისია მცირე რაოდენობა: თაფლი და სხვა, არახორცეული და არარძის, ცხოველური წარმოშობის პროდუქტი 2 კგ-მდე, ასევე ბავშვის საკვები და სამედიცინო დანიშნულების საკვები 2 კგ-მდე. დაუდეკლარირებელი პროდუქტი ექვემდებარება ჩამორთმევასა და განადგურებას.",
    source: {
      label: "Your Europe — Taking animal products, food or plants into the EU",
      url: "https://europa.eu/youreurope/citizens/travel/carry/meat-dairy-animal/index_en.htm",
    },
    verifiedOn: VERIFIED,
  },
  {
    id: "alcohol-tobacco",
    title: "ალკოჰოლსა და თამბაქოზე ცალკე წესები ვრცელდება",
    body: "საჩუქრის შეღავათი ალკოჰოლსა და თამბაქოს სრულად არ მოიცავს: ამ პროდუქტებზე დღგ და აქციზი მაინც დაერიცხება. საბაჟო გადასახადისგან გათავისუფლება მხოლოდ მკაცრად შეზღუდულ რაოდენობაზე ვრცელდება — მაგალითად, 50 ღერი სიგარეტი ან 1 ლიტრი მაღალალკოჰოლური სასმელი.",
    source: {
      label: "Irish Revenue — EU gift consignment relief (Council Regulation 1186/2009)",
      url: "https://www.revenue.ie/en/customs/individuals/relief-gifts-low-value/rules-gifts.aspx",
    },
    verifiedOn: VERIFIED,
  },
];
