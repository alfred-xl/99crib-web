import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ImageOff, MapPin, ShieldCheck } from "lucide-react";
import type { Listing } from "@/data/listings";
import ListingPrice from "@/components/ListingPrice";

export default function ListingCard({ listing, featured = false }: { listing: Listing; featured?: boolean }) {
  const href = `/accommodations/${listing.slug}`;
  const cover = listing.images[0];

  return (
    <article className="lcard group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <Link href={href} className="block" aria-label={`View ${listing.room} at ${listing.property}`}>
        <div className={`relative overflow-hidden ${featured ? "aspect-[3/2]" : "aspect-[4/3]"}`}>
          {cover ? (
            <Image
              src={cover.url}
              alt={cover.caption}
              fill
              className="lcard-img object-cover"
              sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-brand-light text-brand">
              <ImageOff aria-hidden="true" size={32} strokeWidth={1.5} />
              <span className="text-sm font-semibold">Photos coming soon</span>
            </div>
          )}
          {listing.verified && (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-green-700 shadow-sm">
              <ShieldCheck aria-hidden="true" size={15} /> Verified
            </span>
          )}
          <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-navy shadow-sm">
            {listing.roomType}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs text-gray-500">{listing.university}</p>
        <Link href={href} className="mt-1 block text-base font-bold leading-snug text-navy transition-colors hover:text-brand">
          {listing.room}
        </Link>
        <p className="mt-1 text-sm font-medium text-gray-600">{listing.property}</p>
        <p className="mb-4 mt-3 flex items-center gap-1 text-xs text-gray-500">
          <MapPin aria-hidden="true" size={15} /> {listing.area}
        </p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-2 gap-y-3 border-t border-gray-100 pt-4">
          <ListingPrice price={listing.price} className="text-sm font-extrabold text-brand" />
          <Link href={href} className="lcard-cta inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-brand-light px-3 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white group-hover:bg-brand group-hover:text-white">
            View details <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
