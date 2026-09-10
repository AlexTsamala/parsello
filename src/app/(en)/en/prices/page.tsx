import { PricesPage } from "@/components/pages/PricesPage";
import { pageMetadata } from "@/lib/seo";

const locale = "en";

export const metadata = pageMetadata(locale, "prices", "/prices");

export default function Page() {
  return <PricesPage locale={locale} />;
}
