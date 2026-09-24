import { ServicesPage } from "@/components/pages/ServicesPage";
import { pageMetadata } from "@/lib/seo";

const locale = "ru";

export const metadata = pageMetadata(locale, "services", "/services");

export default function Page() {
  return <ServicesPage locale={locale} />;
}
