import { PricesPage } from "@/components/pages/PricesPage";
import { pageMetadata } from "@/lib/seo";

const locale = "ru";

export const metadata = pageMetadata(locale, "prices", "/prices");

export default function Page() {
  return <PricesPage locale={locale} />;
}
