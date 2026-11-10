import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ListingCard from "@/components/ListingCard";
import FeaturedListingsCarousel from "@/components/FeaturedListingsCarousel";
import { listings } from "@/data/listings";

export default function FeaturedListings() {
  return (
    <section className="bg-section px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Featured properties</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Featured Listings</h2>
            <p className="mt-3 text-gray-500">Sample listings shown while we prepare our live catalogue.</p>
          </div>
          <Link href="/accommodations" className="inline-flex items-center gap-1 font-semibold text-brand hover:text-brand-dark">
            Browse all listings
            <ChevronRight aria-hidden="true" size={20} />
          </Link>
        </div>

        <div className="mt-10">
          <FeaturedListingsCarousel>
            {listings.map((listing, index) => (
              <div
                key={listing.title}
                role="group"
                aria-roledescription="slide"
                aria-label={`Sample listing ${index + 1} of ${listings.length}`}
                className="min-w-0 shrink-0 grow-0 basis-[85%] pl-5 sm:basis-[48%] lg:basis-[31%] xl:basis-[23%]"
              >
                <ListingCard listing={listing} featured />
              </div>
            ))}
          </FeaturedListingsCarousel>
        </div>
      </div>
    </section>
  );
}
