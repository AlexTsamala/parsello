import { FaqPage } from "@/components/pages/FaqPage";
import { pageMetadata } from "@/lib/seo";

const locale = "ru";

export const metadata = pageMetadata(locale, "faq", "/faq");

export default function Page() {
  return <FaqPage locale={locale} />;
}
