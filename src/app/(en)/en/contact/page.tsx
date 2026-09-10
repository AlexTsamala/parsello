import { ContactPage } from "@/components/pages/ContactPage";
import { pageMetadata } from "@/lib/seo";

const locale = "en";

export const metadata = pageMetadata(locale, "contact", "/contact");

export default function Page() {
  return <ContactPage locale={locale} />;
}
