import { allowedItems, type SendableCategory } from "./allowed-items";
import { business } from "./business";
import { countries, getCountry, relatedCountries, type Country } from "./countries";
import { faqs, featuredFaqs, type FaqItem } from "./faq";
import { howItWorksSteps } from "./how-it-works";
import { defaultLocale, type Locale } from "./locales";
import { footerNav, mainNav, primaryCta, type NavLink } from "./navigation";
import { euImportRules, type ResearchedFact } from "./shipping-rules";
import { services, type Service } from "./services";
import type { BusinessContent, HowItWorksStep } from "./types";
import { ui, type UiStrings } from "./ui";

import { allowedItemsEn, sendableCategoriesEn } from "./en/allowed-items";
import { businessEn } from "./en/business";
import {
  countriesEn,
  getCountryEn,
  relatedCountriesEn,
} from "./en/countries";
import { faqsEn, featuredFaqsEn } from "./en/faq";
import { howItWorksStepsEn } from "./en/how-it-works";
import {
  footerNavEn,
  mainNavEn,
  primaryCtaEn,
} from "./en/navigation";
import { servicesEn, getServiceEn } from "./en/services";
import { euImportRulesEn } from "./en/shipping-rules";
import { uiEn } from "./en/ui";

import { allowedItemsRu, sendableCategoriesRu } from "./ru/allowed-items";
import { businessRu } from "./ru/business";
import {
  countriesRu,
  getCountryRu,
  relatedCountriesRu,
} from "./ru/countries";
import { faqsRu, featuredFaqsRu } from "./ru/faq";
import { howItWorksStepsRu } from "./ru/how-it-works";
import { footerNavRu, mainNavRu, primaryCtaRu } from "./ru/navigation";
import { getServiceRu, servicesRu } from "./ru/services";
import { euImportRulesRu } from "./ru/shipping-rules";
import { uiRu } from "./ru/ui";

import { sendableCategories } from "./allowed-items";
import { getService } from "./services";

/**
 * Everything a page needs, in one locale.
 *
 * Pages take a `Locale` and call `getContent(locale)` — they never import a
 * language's content files directly. That is what lets one component render
 * every site, which in turn is what keeps the design identical between them.
 *
 * The blog is deliberately absent: it exists only in Georgian, so its pages
 * import `./blog` directly rather than going through here.
 */
export type SiteContent = {
  locale: Locale;
  business: BusinessContent;
  ui: UiStrings;
  mainNav: NavLink[];
  footerNav: NavLink[];
  primaryCta: NavLink;
  countries: Country[];
  getCountry: (slug: string) => Country | undefined;
  relatedCountries: (slug: string, limit?: number) => Country[];
  faqs: FaqItem[];
  featuredFaqs: FaqItem[];
  howItWorksSteps: HowItWorksStep[];
  services: Service[];
  getService: (slug: string) => Service | undefined;
  sendableCategories: SendableCategory[];
  allowedItems: { emoji: string; label: string }[];
  euImportRules: ResearchedFact[];
};

const ka: SiteContent = {
  locale: "ka",
  business,
  ui,
  mainNav,
  footerNav,
  primaryCta,
  countries,
  getCountry,
  relatedCountries,
  faqs,
  featuredFaqs,
  howItWorksSteps,
  services,
  getService,
  sendableCategories,
  allowedItems: [...allowedItems],
  euImportRules,
};

const en: SiteContent = {
  locale: "en",
  business: businessEn,
  ui: uiEn,
  mainNav: mainNavEn,
  footerNav: footerNavEn,
  primaryCta: primaryCtaEn,
  countries: countriesEn,
  getCountry: getCountryEn,
  relatedCountries: relatedCountriesEn,
  faqs: faqsEn,
  featuredFaqs: featuredFaqsEn,
  howItWorksSteps: howItWorksStepsEn,
  services: servicesEn,
  getService: getServiceEn,
  sendableCategories: sendableCategoriesEn,
  allowedItems: allowedItemsEn,
  euImportRules: euImportRulesEn,
};

const ru: SiteContent = {
  locale: "ru",
  business: businessRu,
  ui: uiRu,
  mainNav: mainNavRu,
  footerNav: footerNavRu,
  primaryCta: primaryCtaRu,
  countries: countriesRu,
  getCountry: getCountryRu,
  relatedCountries: relatedCountriesRu,
  faqs: faqsRu,
  featuredFaqs: featuredFaqsRu,
  howItWorksSteps: howItWorksStepsRu,
  services: servicesRu,
  getService: getServiceRu,
  sendableCategories: sendableCategoriesRu,
  allowedItems: allowedItemsRu,
  euImportRules: euImportRulesRu,
};

const byLocale: Record<Locale, SiteContent> = { ka, en, ru };

export function getContent(locale: Locale = defaultLocale): SiteContent {
  return byLocale[locale];
}
