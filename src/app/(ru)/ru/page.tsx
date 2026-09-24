import { HomePage } from "@/components/pages/HomePage";
import { pageMetadata } from "@/lib/seo";

const locale = "ru";

export const metadata = pageMetadata(locale, "home", "/");

export default function Page() {
  return <HomePage locale={locale} />;
}
