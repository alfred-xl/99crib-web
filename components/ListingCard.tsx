import Image from "next/image";
import Link from "next/link";
import type { Listing } from "@/data/listings";

export default function ListingCard({ listing, featured = false }: { listing: Listing; featured?: boolean }) {
  if (featured) {
    return (
      <article className="h-full overflow-hidden rounded-2xl border border-gray-100 bg-white hover:border-brand/30">
        <div className="relative aspect-[3/2]">
          <Image
            src={listing.image}
            alt={listing.title}
            fill
            className="object-cover"
            sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 31vw, (min-width: 640px) 48vw, 85vw"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-gray-700">
            Sample listing
          </span>
          <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-navy">
            {listing.type}
          </span>
        </div>
        <div className="p-5">
          <p className="text-sm text-gray-500">{listing.university}</p>
          <h3 className="mt-1 text-lg font-bold">{listing.title}</h3>
          <p className="mt-1 text-sm text-gray-500">{listing.location}</p>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
            <p className="font-bold text-brand">{listing.price}</p>
            <Link href="#download" className="rounded-lg bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-500 hover:text-brand">
              Get the app →
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
      <div className="relative aspect-[4/3]">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs text-gray-700">
          Sample listing
        </span>
      </div>
      <div className="p-6">
        <p className="text-sm font-semibold text-brand">{listing.type}</p>
        <h3 className="mt-2 text-xl font-bold">{listing.title}</h3>
        <p className="mt-3 text-gray-500">{listing.university}</p>
        <p className="text-gray-500">{listing.location}</p>
        <p className="mt-5 font-bold text-brand">{listing.price}</p>
      </div>
    </article>
  );
}
