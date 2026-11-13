import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ListingCard from "@/components/ListingCard";
import FeaturedListingsCarousel from "@/components/FeaturedListingsCarousel";
import { listings } from "@/data/listings";
import Reveal from "@/components/Reveal";

export default function FeaturedListings() {
  return (
    <section className="bg-section px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal><div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Featured properties</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight lg:text-4xl">Featured Listings</h2>
            <p className="mt-2 text-sm text-gray-500">Explore verified accommodation near campus.</p>
          </div>
          <Link href="/accommodations" className="group inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors hover:text-brand-dark">
            Browse all listings
            <ChevronRight aria-hidden="true" size={20} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div></Reveal>

        {listings.length === 1 ? (
          <div className="mt-10 max-w-sm">
            <ListingCard listing={listings[0]} featured />
          </div>
        ) : (
          <div className="mt-10">
            <FeaturedListingsCarousel>
              {listings.map((listing, index) => (
                <div
                  key={listing.slug}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Listing ${index + 1} of ${listings.length}`}
                  className="min-w-0 shrink-0 grow-0 basis-[85%] pl-5 sm:basis-[48%] lg:basis-[31%] xl:basis-[23%]"
                >
                  <ListingCard listing={listing} featured />
                </div>
              ))}
            </FeaturedListingsCarousel>
          </div>
        )}
      </div>
    </section>
  );
}
