import type { Locale } from "./locales";

/**
 * 404 copy, one entry per locale.
 *
 * `Record<Locale, …>` makes a new locale without its 404 text a build error.
 * The Georgian wording is the one the site already shipped.
 */
export type NotFoundCopy = {
  heading: string;
  body: string;
  homeCta: string;
};

export const notFoundCopy: Record<Locale, NotFoundCopy> = {
  ka: {
    heading: "გვერდი ვერ მოიძებნა",
    body: "შესაძლოა გვერდი წაშლილია ან მისამართი არასწორად არის აკრეფილი.",
    homeCta: "მთავარი გვერდი",
  },
  en: {
    heading: "Page not found",
    body: "The page may have been removed, or the address may be mistyped.",
    homeCta: "Back to home",
  },
  ru: {
    heading: "Страница не найдена",
    body: "Возможно, страница удалена или адрес введен с ошибкой.",
    homeCta: "На главную",
  },
};
