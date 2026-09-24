import type { NavLink } from "../navigation";

/**
 * Russian navigation.
 *
 * `href` values stay locale-agnostic — `localePath()` adds `/ru` at render
 * time. `/blog` is absent for the same reason as in English: the blog is
 * Georgian-only.
 */
export const mainNavRu: NavLink[] = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/prices", label: "Цены" },
  { href: "/countries", label: "Страны" },
  { href: "/what-can-i-send", label: "Что можно отправить" },
  { href: "/faq", label: "Вопросы" },
];

export const footerNavRu: NavLink[] = [
  { href: "/", label: "Главная" },
  { href: "/prices", label: "Цены" },
  { href: "/services", label: "Услуги" },
  { href: "/countries", label: "Страны" },
  { href: "/what-can-i-send", label: "Что можно отправить" },
  { href: "/faq", label: "Частые вопросы" },
  { href: "/contact", label: "Контакты" },
];

export const primaryCtaRu = { href: "/contact", label: "Отправить посылку" };
