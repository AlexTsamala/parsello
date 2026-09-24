import { CountriesPage } from "@/components/pages/CountriesPage";
import { pageMetadata } from "@/lib/seo";

const locale = "ru";

export const metadata = pageMetadata(locale, "countries", "/countries");

export default function Page() {
  return <CountriesPage locale={locale} />;
}
