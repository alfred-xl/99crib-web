import { Suspense } from "react";
import { MapPin } from "lucide-react";
import DownloadBanner from "@/components/DownloadBanner";
import { createPageMetadata } from "../seo";
import ListingsSection from "./ListingsSection";

export const metadata = createPageMetadata({
  title: "Browse Student Accommodations",
  description: "Browse verified student rooms, self-contains and hostels near universities across Nigeria. Filter by university, room type and price.",
  path: "/accommodations",
});

export default function AccommodationsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-linear-to-br from-brand to-[#1a35d4] px-5 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium">
            <MapPin aria-hidden="true" className="h-4 w-4" />
            Verified listings across Nigeria
          </div>
          <h1 className="mb-5 text-4xl font-bold leading-tight lg:text-5xl">Browse Accommodations</h1>
          <p className="text-lg leading-relaxed text-white/75">
            Browse rooms near your university and open each listing for available photos, amenities and pricing information.
          </p>
        </div>
      </section>

      <Suspense fallback={<section className="mx-auto max-w-7xl px-5 py-8 lg:px-8" aria-label="Loading listings" />}>
        <ListingsSection />
      </Suspense>

      <DownloadBanner />
    </div>
  );
}
