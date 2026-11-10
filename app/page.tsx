import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import TrustSection from "@/components/TrustSection";
import FeaturesSection from "@/components/FeaturesSection";
import FeaturedListings from "@/components/FeaturedListings";
import FaqSection from "@/components/FaqSection";
import DownloadBanner from "@/components/DownloadBanner";
import { createPageMetadata, siteUrl } from "./seo";

export const metadata = createPageMetadata({
  title: "99 Crib | Verified student accommodation in Nigeria",
  description:
    "Find student accommodation near Nigerian universities, verified in person, with payments held in escrow until move-in.",
  path: "/",
  absoluteTitle: true,
});

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "99 Crib",
  url: `${siteUrl}/`,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <TrustSection />
      <FeaturesSection />
      <FeaturedListings />
      <FaqSection />
      <DownloadBanner />
    </>
  );
}
