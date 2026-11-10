import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import TrustSection from "@/components/TrustSection";
import FeaturesSection from "@/components/FeaturesSection";
import FeaturedListings from "@/components/FeaturedListings";
import FaqSection from "@/components/FaqSection";
import DownloadBanner from "@/components/DownloadBanner";

export default function Home() {
  return (
    <>
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
