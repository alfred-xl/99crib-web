import FaqSection from "@/components/FaqSection";
import DownloadBanner from "@/components/DownloadBanner";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "FAQ",
  description: "Find answers about property verification, escrow payments, cancellations, video reels, and student accommodation near Nigerian universities.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <section className="bg-brand px-5 py-20 text-center text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold text-white/85">Help</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">How can we help?</h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/85">
            Answers to the questions students and landlords ask most.
          </p>
        </div>
      </section>
      <FaqSection />
      <DownloadBanner />
    </>
  );
}
