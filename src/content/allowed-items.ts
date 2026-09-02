/**
 * What customers actually send with Parcello — the business's own list.
 *
 * RESTRICTIONS (confirmed 2026-09-02): the only things Parcello will not send
 * are medicines and items restricted by law (weapons, drugs). Everything else
 * on this page is offered.
 *
 * The EU animal-products rule is deliberately NOT rendered alongside this list
 * — see docs/OPEN-QUESTIONS.md #15. Do not add it here, and do not trim the
 * list to agree with it.
 *
 * `image` names a file in `public/images/`. Rows render with or without their
 * photo, so the page is publishable before the photography arrives.
 */

export type SendableCategory = {
  slug: string;
  title: string;
  body: string;
  /** Filename in public/images/, or null while the photo is missing. */
  image: string | null;
  alt: string;
  items: string[];
};

export const sendableCategories: SendableCategory[] = [
  {
    slug: "churchkhela",
    title: "ჩურჩხელა, თხილი და ჩირი",
    body: "ტრადიციული ქართული ტკბილეული და მშრალი პროდუქტი კარგად იტანს ტრანსპორტირებას — ეს ერთ-ერთი ყველაზე ხშირად გაგზავნილი კატეგორიაა.",
    image: "food-churchkhela.jpg",
    alt: "ჩურჩხელა, თხილი და ჩირი ამანათისთვის",
    items: ["ჩურჩხელა", "თხილი და ნიგოზი", "ჩირი"],
  },
  {
    slug: "cheese",
    title: "ყველი",
    body: "სულგუნი, იმერული და სხვა ქართული ყველი — მოგვწერეთ, რა რაოდენობის გაგზავნა გსურთ, და შეფუთვაში დაგეხმარებით.",
    image: "food-cheese.jpg",
    alt: "ქართული ყველი — სულგუნი და იმერული",
    items: ["სულგუნი", "იმერული ყველი", "სხვა ქართული ყველი"],
  },
  {
    slug: "tkemali",
    title: "ტყემალი",
    body: "ქილაში ჩაწყობილი პროდუქტი განსაკუთრებულ ყურადღებას საჭიროებს — მინის ნივთები სათანადოდ უნდა შეიფუთოს, რომ გზაში არ დაზიანდეს.",
    image: "food-tkemali.jpg",
    alt: "ტყემალი ქილებში ამანათისთვის",
    items: ["ტყემალი", "აჯიკა", "სოუსები"],
  },
  {
    slug: "spices-honey",
    title: "თაფლი და სუნელები",
    body: "ქართული სუნელები და თაფლი მცირე ადგილს იკავებს და ხშირად ემატება სხვა ნივთებთან ერთად ერთ ამანათში.",
    image: "food-spices-honey.jpg",
    alt: "ქართული სუნელები და თაფლი",
    items: ["თაფლი", "სუნელები", "ხმელი მწვანილი"],
  },
  {
    slug: "wine",
    title: "ღვინო",
    body: "ღვინის გაგზავნისას შეფუთვა გადამწყვეტია. მოგვწერეთ ბოთლების რაოდენობა და დანიშნულების ქვეყანა, რომ დეტალები წინასწარ შევათანხმოთ.",
    image: "food-wine.jpg",
    alt: "ქართული ღვინო ამანათისთვის",
    items: ["ბოთლის ღვინო", "ქვევრის ღვინო"],
  },
  {
    slug: "personal",
    title: "ტანსაცმელი, ფეხსაცმელი და პირადი ნივთები",
    body: "ტანსაცმელი და პირადი ნივთები ყველაზე მარტივად იგზავნება — არ საჭიროებს განსაკუთრებულ შეფუთვას და კარგად ეწყობა ყუთში.",
    image: "what-you-can-send.jpg",
    alt: "ტანსაცმელი, ფეხსაცმელი და აქსესუარები ამანათისთვის",
    items: [
      "ტანსაცმელი და ფეხსაცმელი",
      "საჩუქრები",
      "წიგნები და აქსესუარები",
      "ყოველდღიური მოხმარების ნივთები",
    ],
  },
];

/** Compact list used where a full photo row would be too heavy. */
export const allowedItems = [
  { emoji: "🍇", label: "ღვინო" },
  { emoji: "🫒", label: "ტყემალი" },
  { emoji: "🧀", label: "ყველი" },
  { emoji: "🍯", label: "თაფლი, სუნელები" },
  { emoji: "🌰", label: "ჩურჩხელა, თხილი, ჩირი" },
  { emoji: "🫓", label: "ყველა სახის პროდუქტი" },
  { emoji: "👕", label: "ტანსაცმელი და ფეხსაცმელი" },
  { emoji: "🎁", label: "საჩუქრები და პირადი ნივთები" },
  { emoji: "📚", label: "წიგნები და აქსესუარები" },
  { emoji: "🧴", label: "ყოველდღიური მოხმარების ნივთები" },
];
