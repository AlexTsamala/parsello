import { allowedItems, type SendableCategory } from "../allowed-items";

/**
 * English wording for the business's own list of what customers send.
 *
 * As in the Georgian file, the EU animal-products rule is deliberately NOT
 * rendered alongside this list, and the list is not trimmed to agree with it
 * (docs/OPEN-QUESTIONS.md #15). Translate what the business says it carries;
 * do not resolve the contradiction here.
 *
 * Georgian food names are kept as themselves — churchkhela, sulguni, tkemali —
 * with a short gloss where an English reader would need one. Translating them
 * into approximations ("Georgian fruit-and-nut candy") would make the page
 * harder to search for and less accurate, not more.
 */
export const sendableCategoriesEn: SendableCategory[] = [
  {
    slug: "churchkhela",
    title: "Churchkhela, nuts and dried fruit",
    body: "Traditional Georgian sweets and dried goods travel well — this is one of the most frequently sent categories.",
    image: "food-churchkhela.jpg",
    alt: "Churchkhela, nuts and dried fruit packed for a parcel",
    items: ["Churchkhela", "Hazelnuts and walnuts", "Dried fruit"],
  },
  {
    slug: "cheese",
    title: "Cheese",
    body: "Sulguni, Imeretian and other Georgian cheeses — tell us how much you would like to send and we will help with the packing.",
    image: "food-cheese.jpg",
    alt: "Georgian cheese — sulguni and Imeretian",
    items: ["Sulguni", "Imeretian cheese", "Other Georgian cheeses"],
  },
  {
    slug: "tkemali",
    title: "Tkemali",
    body: "Anything in jars needs particular care — glassware has to be packed properly so it is not damaged on the way.",
    image: "food-tkemali.jpg",
    alt: "Jars of tkemali packed for a parcel",
    items: ["Tkemali", "Ajika", "Sauces"],
  },
  {
    slug: "spices-honey",
    title: "Honey and spices",
    body: "Georgian spices and honey take up little room and are often added to a parcel alongside other things.",
    image: "food-spices-honey.jpg",
    alt: "Georgian spices and honey",
    items: ["Honey", "Spices", "Dried herbs"],
  },
  {
    slug: "wine",
    title: "Wine",
    body: "Packing is decisive when sending wine. Tell us the number of bottles and the destination country so we can agree the details in advance.",
    image: "food-wine.jpg",
    alt: "Georgian wine packed for a parcel",
    items: ["Bottled wine", "Qvevri wine"],
  },
  {
    slug: "personal",
    title: "Clothing, footwear and personal belongings",
    body: "Clothing and personal belongings are the simplest things to send — they need no special packing and pack well into a box.",
    image: "what-you-can-send.jpg",
    alt: "Clothing, footwear and accessories packed for a parcel",
    items: [
      "Clothing and footwear",
      "Gifts",
      "Books and accessories",
      "Everyday items",
    ],
  },
];

/**
 * Compact list, used where a full photo row would be too heavy.
 *
 * Emoji are inherited positionally from the Georgian list so the two stay in
 * step; only the labels are translated.
 */
const labels = [
  "Wine",
  "Tkemali",
  "Cheese",
  "Honey and spices",
  "Churchkhela, nuts, dried fruit",
  "Food of every kind",
  "Clothing and footwear",
  "Gifts and personal belongings",
  "Books and accessories",
  "Everyday items",
];

export const allowedItemsEn = allowedItems.map((item, index) => ({
  emoji: item.emoji,
  label: labels[index],
}));
