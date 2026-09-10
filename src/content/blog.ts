import { business } from "./business";
import { countries } from "./countries";

/**
 * Blog architecture. Posts are structured data, not raw HTML, so headings stay
 * consistent and every article can be rendered by one component.
 *
 * CONTENT RULE (plan §36): fewer, better articles. Do not pad this list with
 * thin AI-written posts to fill the plan's list of ten titles. Every article
 * must answer a real customer question using verified information — the same
 * standard as the rest of the site. An article that would need invented facts
 * does not get written until the business supplies them.
 */

export type BlogSection = {
  heading: string;
  body: string[];
  /** Rendered as a checklist under the paragraphs. */
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  /** ISO date — drives <time> and OG publishedTime. */
  publishedAt: string;
  excerpt: string;
  sections: BlogSection[];
  /** Internal links rendered at the end (CLAUDE.md §6). */
  related: { href: string; label: string }[];
};

const destinationList = countries.map((c) => c.name).join(", ");

export const posts: BlogPost[] = [
  {
    slug: "send-parcel-to-europe",
    title: "როგორ გავაგზავნოთ ამანათი საქართველოდან ევროპაში?",
    seoTitle: "როგორ გავაგზავნოთ ამანათი საქართველოდან ევროპაში",
    description:
      "სრული გზამკვლევი: როგორ მოვამზადოთ და გავაგზავნოთ ამანათი საქართველოდან ევროპაში, რა მოქმედებს ფასზე და რა უნდა ვიცოდეთ საბაჟო წესების შესახებ.",
    publishedAt: "2026-09-02",
    excerpt:
      "პირველად აგზავნით ამანათს ევროპაში? აი, რა უნდა იცოდეთ წინასწარ — შეფუთვიდან საბაჟო წესებამდე.",
    sections: [
      {
        heading: "რა უნდა ვიცოდეთ წინასწარ?",
        body: [
          "ევროპაში ამანათის გაგზავნა რთული არ არის, მაგრამ რამდენიმე რამის წინასწარ ცოდნა დაგეხმარებათ, რომ პროცესი შეფერხების გარეშე წარიმართოს.",
          "პირველი და მთავარი: საქართველო ევროკავშირის წევრი არ არის, ამიტომ ევროპაში გაგზავნილი ამანათი ევროკავშირში შესვლისას საბაჟო პროცედურას გადის. ეს ნიშნავს, რომ ამანათის შიგთავსი და ღირებულება სწორად უნდა იყოს მითითებული.",
          "მეორე: ყველა ნივთის გაგზავნა არ შეიძლება. ზოგიერთ კატეგორიაზე შეზღუდვები მოქმედებს, ამიტომ გაგზავნამდე ჯობია გადაამოწმოთ.",
        ],
      },
      {
        heading: "როგორ მოვამზადოთ ამანათი?",
        body: [
          "ამანათის მომზადება ორ ნაწილად იყოფა: შეფუთვა და მონიშვნა. ორივე მნიშვნელოვანია — არასწორად შეფუთული ან არასრულად მონიშნული ამანათი ტრანსპორტირებისას შეიძლება დაზიანდეს ან შეფერხდეს.",
        ],
        list: business.packaging.map((step) => step),
      },
      {
        heading: "რისი გაგზავნა არ შეიძლება?",
        body: [
          business.restrictions.prohibitedSentence,
          business.restrictions.conditional,
          `${business.restrictions.packingLiability} სწორედ ამიტომ ღირს დროის დათმობა სათანადო შეფუთვაზე, განსაკუთრებით მსხვრევადი ნივთების შემთხვევაში.`,
        ],
      },
      {
        heading: "როგორ ხდება გაგზავნის პროცესი?",
        body: [
          "პროცესი მარტივია და რამდენიმე ნაბიჯისგან შედგება: დაგვიკავშირდებით და შეათანხმებთ დეტალებს, მოამზადებთ ამანათს, გადააბარებთ კურიერს ან თავად ჩააბარებთ, შემდეგ კი ამანათი ევროპის მიმართულებით იგზავნება.",
          `ამანათი ადრესატთან ჩადის გაგზავნიდან ${business.deliveryTimeGenitive} ვადაში. ზუსტი ვადა დამოკიდებულია მიმართულებაზე.`,
        ],
      },
      {
        heading: "რა გავლენას ახდენს ფასზე?",
        body: [
          business.pricing.dependsOn,
          "ვინაიდან ტარიფები იცვლება, ფიქსირებულ ფასს არ ვაქვეყნებთ — ის თითოეული შეკვეთისთვის ინდივიდუალურად ითვლება. ასე თავიდან ავიცილებთ იმას, რომ საიტზე მოძველებული ინფორმაცია დაგხვდეთ.",
          business.pricing.copy,
        ],
      },
      {
        heading: "რომელ ქვეყნებში შეიძლება გაგზავნა?",
        body: [
          `${business.coverage.scope} ძირითადი მიმართულებებია: ${destinationList}.`,
          business.coverage.priorityNote,
        ],
      },
      {
        heading: "რა უნდა ვიცოდეთ საბაჟო წესების შესახებ?",
        body: [
          "კერძო პირისგან კერძო პირისთვის გაგზავნილი საჩუქარი, რომლის ღირებულებაც 45 ევროს არ აღემატება, თავისუფლდება საბაჟო გადასახადისა და დღგ-სგან. შეღავათი მხოლოდ არარეგულარულ, არაკომერციულ გზავნილებზე ვრცელდება. თუ ღირებულება 45 ევროს გადააჭარბებს, დღგ მთლიან ამანათს დაერიცხება.",
          "2026 წლის 1 ივლისიდან ევროკავშირმა გააუქმა 150 ევრომდე ღირებულების გზავნილების საბაჟო გადასახადისგან გათავისუფლება. მის ნაცვლად მოქმედებს 3 ევროს ფიქსირებული განაკვეთი, რომელიც თითოეულ სასაქონლო კოდზე ითვლება. ეს წესი პირველ რიგში ონლაინ ვაჭრობით შემოტანილ გზავნილებს ეხება.",
          "ალკოჰოლსა და თამბაქოზე ცალკე წესები ვრცელდება — ამ პროდუქტებზე დღგ და აქციზი მაინც დაერიცხება.",
        ],
      },
    ],
    related: [
      { href: "/what-can-i-send", label: "რისი გაგზავნა შეიძლება ევროპაში" },
      { href: "/prices", label: "ამანათის გაგზავნის ფასი" },
      { href: "/services", label: "Parcello-ს სერვისები" },
      { href: "/faq", label: "ხშირად დასმული კითხვები" },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
