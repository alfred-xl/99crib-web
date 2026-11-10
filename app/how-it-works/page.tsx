import type { Metadata } from "next";
import { Info } from "lucide-react";
import DownloadBanner from "@/components/DownloadBanner";
import HowItWorksSteps from "@/components/HowItWorksSteps";

export const metadata: Metadata = { title: "How It Works" };

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-brand px-5 py-24 text-center text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-5 py-2 text-sm font-medium text-white">
            <Info aria-hidden="true" size={18} />
            How 99 Crib works
          </p>
          <h1 className="mx-auto mt-8 max-w-5xl text-4xl font-bold md:text-6xl">
            Simple, safe, and transparent from start to finish
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg text-white/85 md:text-xl">
            Whether you&apos;re a student looking for a verified home near campus or a landlord wanting reliable tenants, 99 Crib makes the process straightforward and secure.
          </p>
        </div>
      </section>

      <HowItWorksSteps />
      <DownloadBanner />
    </>
  );
}
