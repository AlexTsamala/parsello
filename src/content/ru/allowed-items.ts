import { allowedItems, type SendableCategory } from "../allowed-items";

/**
 * Russian wording for the business's own list of what customers send.
 *
 * The same caveat as the Georgian and English files applies: the EU
 * animal-products rule is not rendered alongside this list, and the list is not
 * trimmed to agree with it (docs/OPEN-QUESTIONS.md #15).
 *
 * Georgian food names are the names Russian speakers already use — чурчхела,
 * сулугуни, ткемали, аджика — so they need no gloss.
 */
export const sendableCategoriesRu: SendableCategory[] = [
  {
    slug: "churchkhela",
    title: "Чурчхела, орехи и сухофрукты",
    body: "Традиционные грузинские сладости и сухие продукты хорошо переносят дорогу — это одна из самых популярных категорий.",
    image: "food-churchkhela.jpg",
    alt: "Чурчхела, орехи и сухофрукты, упакованные в посылку",
    items: ["Чурчхела", "Фундук и грецкие орехи", "Сухофрукты"],
  },
  {
    slug: "cheese",
    title: "Сыр",
    body: "Сулугуни, имеретинский и другие грузинские сыры — скажите, сколько хотите отправить, и мы поможем с упаковкой.",
    image: "food-cheese.jpg",
    alt: "Грузинский сыр — сулугуни и имеретинский",
    items: ["Сулугуни", "Имеретинский сыр", "Другие грузинские сыры"],
  },
  {
    slug: "tkemali",
    title: "Ткемали",
    body: "Все, что в банках, требует особой осторожности — стеклянную тару нужно правильно упаковать, чтобы она не повредилась в дороге.",
    image: "food-tkemali.jpg",
    alt: "Банки с ткемали, упакованные в посылку",
    items: ["Ткемали", "Аджика", "Соусы"],
  },
  {
    slug: "spices-honey",
    title: "Мед и специи",
    body: "Грузинские специи и мед занимают мало места, и их часто кладут в посылку вместе с другими вещами.",
    image: "food-spices-honey.jpg",
    alt: "Грузинские специи и мед",
    items: ["Мед", "Специи", "Сушеные травы"],
  },
  {
    slug: "wine",
    title: "Вино",
    body: "При отправке вина решающее значение имеет упаковка. Сообщите нам количество бутылок и страну назначения, чтобы заранее согласовать детали.",
    image: "food-wine.jpg",
    alt: "Грузинское вино, упакованное в посылку",
    items: ["Вино в бутылках", "Квеври-вино"],
  },
  {
    slug: "personal",
    title: "Одежда, обувь и личные вещи",
    body: "Одежду и личные вещи отправить проще всего — им не нужна особая упаковка, и они хорошо укладываются в коробку.",
    image: "what-you-can-send.jpg",
    alt: "Одежда, обувь и аксессуары, упакованные в посылку",
    items: [
      "Одежда и обувь",
      "Подарки",
      "Книги и аксессуары",
      "Бытовые вещи",
    ],
  },
];

/**
 * Compact list. Emoji are inherited positionally from the Georgian list so the
 * locales stay in step; only the labels are translated.
 */
const labels = [
  "Вино",
  "Ткемали",
  "Сыр",
  "Мед и специи",
  "Чурчхела, орехи, сухофрукты",
  "Самые разные продукты",
  "Одежда и обувь",
  "Подарки и личные вещи",
  "Книги и аксессуары",
  "Бытовые вещи",
];

export const allowedItemsRu = allowedItems.map((item, index) => ({
  emoji: item.emoji,
  label: labels[index],
}));
