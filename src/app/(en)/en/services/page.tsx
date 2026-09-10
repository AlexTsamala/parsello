import { ServicesPage } from "@/components/pages/ServicesPage";
import { pageMetadata } from "@/lib/seo";

const locale = "en";

export const metadata = pageMetadata(locale, "services", "/services");

export default function Page() {
  return <ServicesPage locale={locale} />;
}
