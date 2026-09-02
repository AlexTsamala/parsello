import { CountriesSection } from "@/components/home/CountriesSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PricingSection } from "@/components/home/PricingSection";
import { TrustSection } from "@/components/home/TrustSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { featuredFaqs } from "@/content/faq";
import { faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "ამანათების გაგზავნა ევროპაში",
  description:
    "გაგზავნეთ ამანათი საქართველოდან ევროპაში მარტივად და კომფორტულად. Parcello გთავაზობთ ამანათების გაგზავნის სერვისს ევროპის სხვადასხვა ქვეყანაში.",
  path: "/",
});

/** Section order follows the visual hierarchy in plan §33. */
export default function HomePage() {
  return (
    <main id="main">
      {/* These exact Q&As are rendered below by <FaqSection />. */}
      <JsonLd data={faqSchema(featuredFaqs)} />
      <Hero />
      <TrustSection />
      <HowItWorks />
      <CountriesSection />
      <PricingSection />
      <FaqSection items={featuredFaqs} />
      <FinalCta />
    </main>
  );
}
