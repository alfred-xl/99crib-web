import { MapPin } from "lucide-react";
import { Suspense } from "react";
import DownloadBanner from "@/components/DownloadBanner";
import { createPageMetadata } from "../seo";
import ListingsSection from "./ListingsSection";

export const metadata = createPageMetadata({
  title: "Accommodations",
  description: "Browse sample student accommodation listings near Nigerian universities. Filter by university, room type, or annual price.",
  path: "/accommodations",
});

export default function AccommodationsPage() {
  return (
    <>
      <section className="bg-brand px-5 py-24 text-center text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-5 py-2 text-sm font-medium">
            <MapPin aria-hidden="true" size={18} />
            Sample listings near campus
          </p>
          <h1 className="mt-8 text-3xl font-bold sm:text-4xl md:text-6xl">Browse Accommodations</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/85 md:text-xl">
            Filter by your university to see what&apos;s available near you. Sample listings are shown while we prepare our live catalogue.
          </p>
        </div>
      </section>

      <Suspense fallback={<section className="bg-white px-5 py-24" />}>
        <ListingsSection />
      </Suspense>

      <DownloadBanner />
    </>
  );
}
