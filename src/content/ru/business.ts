import { business, type RateId } from "../business";
import type { BusinessContent } from "../types";

/** Country names for the price table; the rates themselves are inherited. */
const rateNames: Record<RateId, string> = {
  greece: "Греция",
  poland: "Польша",
  germany: "Германия",
  hungary: "Венгрия",
  czechia: "Чехия",
  slovakia: "Словакия",
  austria: "Австрия",
  lithuania: "Литва",
  latvia: "Латвия",
  estonia: "Эстония",
  france: "Франция",
  belgium: "Бельгия",
  netherlands: "Нидерланды",
  sweden: "Швеция",
  norway: "Норвегия",
  denmark: "Дания",
  finland: "Финляндия",
  portugal: "Португалия",
  bulgaria: "Болгария",
  "great-britain": "Великобритания",
  ireland: "Ирландия",
};

/**
 * Russian business copy.
 *
 * Built exactly like the English file: every fact is spread from the Georgian
 * record and only wording is overridden, so the three locales cannot disagree
 * about the business itself.
 *
 * This is a TRANSLATION, not a rewrite. Nothing here may claim anything the
 * Georgian copy does not already claim — no speed, no guarantee, no insurance,
 * and no price beyond the inherited rates (CLAUDE.md §1 rules 2 and 4).
 *
 * Russian inflects, like Georgian. Case forms are written out in full (see
 * `deliveryTimeGenitive`) and never built by gluing an ending onto a word.
 */
export const businessRu: BusinessContent = {
  ...business,

  address: {
    ...business.address,
    lines: ["проспект Григола Робакидзе, 4", "Тбилиси, Грузия"],
    street: "проспект Григола Робакидзе, 4",
    locality: "Тбилиси",
  },

  workingHours: {
    ...business.workingHours,
    display: "Ежедневно, 08:00–22:00",
  },

  pricing: {
    ...business.pricing,
    rates: business.pricing.rates.map((rate) => ({
      ...rate,
      name: rateNames[rate.id],
    })),
    currency: "₾",
    dependsOn:
      "Стоимость зависит от того, в какую страну вы отправляете посылку, и от ее веса.",
    copy: "Напишите нам страну назначения и примерный вес посылки — мы рассчитаем точную стоимость. Позвоните нам по номеру +995 551 23 15 19 или напишите на нашу страницу в Facebook.",
  },

  deliveryTime: "2–3 недели",
  // Genitive, for "в течение 2–3 недель". Written out, never derived.
  deliveryTimeGenitive: "2–3 недель",

  inboundDeliveryTime: "2 недели",
  inboundDeliveryTimeGenitive: "2 недель",

  coverage: {
    scope: "Мы отправляем посылки в любую страну Европы.",
    priorityNote: "Ниже перечислены наши основные направления.",
  },

  restrictions: {
    prohibited: ["Лекарства", "Предметы, запрещенные законом"],
    prohibitedSentence:
      "Мы не отправляем лекарства, а также предметы, запрещенные законом",
    conditional:
      "Изделия из стекла должны быть надежно упакованы, чтобы не повредиться при перевозке.",
    packingLiability: "Мы не несем ответственности за упаковку.",
  },

  packaging: [
    "Положите вещи в картонную коробку.",
    "Напишите на коробке имя, фамилию и номер телефона отправителя.",
    "Напишите на коробке полный адрес получателя.",
  ],
};
