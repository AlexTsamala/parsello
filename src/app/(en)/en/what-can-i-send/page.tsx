import { WhatCanISendPage } from "@/components/pages/WhatCanISendPage";
import { pageMetadata } from "@/lib/seo";

const locale = "en";

export const metadata = pageMetadata(locale, "whatCanISend", "/what-can-i-send");

export default function Page() {
  return <WhatCanISendPage locale={locale} />;
}
