import { HomePage } from "@/components/pages/HomePage";
import { pageMetadata } from "@/lib/seo";

const locale = "ka";

export const metadata = pageMetadata(locale, "home", "/");

export default function Page() {
  return <HomePage locale={locale} />;
}
