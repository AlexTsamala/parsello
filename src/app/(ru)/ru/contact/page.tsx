import { ContactPage } from "@/components/pages/ContactPage";
import { pageMetadata } from "@/lib/seo";

const locale = "ru";

export const metadata = pageMetadata(locale, "contact", "/contact");

export default function Page() {
  return <ContactPage locale={locale} />;
}
