import { Info } from "lucide-react";
import DownloadBanner from "@/components/DownloadBanner";
import HowItWorksSteps from "@/components/HowItWorksSteps";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "How It Works",
  description: "See how students find inspected accommodation and landlords list properties with 99 Crib, from verification through move-in confirmation.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-brand px-5 py-20 text-center text-white lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-1.5 text-sm font-medium text-white">
            <Info aria-hidden="true" size={18} />
            How 99 Crib works
          </p>
          <h1 className="mx-auto mt-6 text-4xl font-bold leading-tight lg:text-5xl">
            Simple, safe, and transparent from start to finish
          </h1>
          <p className="mx-auto mt-5 text-lg leading-relaxed text-white/85">
            Whether you&apos;re a student looking for a verified home near campus or a landlord wanting reliable tenants, 99 Crib makes the process straightforward and secure.
          </p>
        </div>
      </section>

      <HowItWorksSteps />
      <DownloadBanner />
    </>
  );
}
