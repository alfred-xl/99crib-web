import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ImageOff, Images, ShieldCheck } from "lucide-react";
import FeaturedListingsCarousel from "@/components/FeaturedListingsCarousel";
import ListingPrice from "@/components/ListingPrice";
import { listings, type Listing } from "@/data/listings";

function RelatedCard({ listing }: { listing: Listing }) {
  const href = `/accommodations/${listing.slug}`;
  const cover = listing.images[0];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-colors hover:border-brand/40">
      <Link href={href} aria-label={`View ${listing.room} at ${listing.property}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-brand-light">
          {cover ? (
            <Image src={cover.url} alt={cover.caption} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 31vw, (min-width: 640px) 48vw, 85vw" />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-brand">
              <ImageOff aria-hidden="true" size={32} strokeWidth={1.5} />
              <span className="text-sm font-semibold">Photos coming soon</span>
            </div>
          )}
          {listing.verified && (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-green-700 shadow-sm">
              <ShieldCheck aria-hidden="true" size={15} /> Verified
            </span>
          )}
          <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-navy shadow-sm">{listing.roomType}</span>
          {listing.images.length > 0 && (
            <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-navy/85 px-2.5 py-1 text-xs font-semibold text-white">
              <Images aria-hidden="true" size={14} /> {listing.images.length}
            </span>
          )}
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm text-gray-500">{listing.university}</p>
        <Link href={href} className="mt-2 text-lg font-bold text-navy transition-colors hover:text-brand">{listing.property}</Link>
        <p className="mt-1 text-sm leading-6 text-gray-500">{listing.room} · {listing.area}</p>
        {listing.chips.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Room features">
            {listing.chips.map((chip) => <li key={chip} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">{chip}</li>)}
          </ul>
        )}
        <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-6">
          <ListingPrice price={listing.price} className="font-bold text-brand" />
          <Link href={href} className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand-light px-3 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white">
            View details <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function RelatedListings({ current }: { current: Listing }) {
  const otherListings = listings.filter((listing) => listing.slug !== current.slug);
  const sameProperty = otherListings.filter((listing) => listing.property === current.property);
  const sameUniversity = otherListings.filter((listing) => listing.university === current.university);
  const related = (sameProperty.length ? sameProperty : sameUniversity.length ? sameUniversity : otherListings.filter((listing) => listing.roomType === current.roomType)).slice(0, 8);
  if (!related.length) return null;

  const heading = sameProperty.length
    ? `Other rooms at ${current.property}`
    : sameUniversity.length
      ? `More rooms near ${current.universityShort}`
      : "Similar rooms to explore";

  return (
    <section aria-labelledby="related-listings" className="mt-12">
      <h2 id="related-listings" className="mb-[1.1rem] text-[1.4rem] font-extrabold text-navy">{heading}</h2>
      {related.length > 4 ? (
        <div>
          <FeaturedListingsCarousel label={heading}>
            {related.map((listing, index) => (
              <div key={listing.slug} role="group" aria-roledescription="slide" aria-label={`Listing ${index + 1} of ${related.length}`} className="min-w-0 shrink-0 grow-0 basis-[85%] pl-5 sm:basis-[48%] lg:basis-[31%] xl:basis-[23%]">
                <RelatedCard listing={listing} />
              </div>
            ))}
          </FeaturedListingsCarousel>
        </div>
      ) : (
        <div className="grid gap-[1.1rem] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {related.map((listing) => <RelatedCard key={listing.slug} listing={listing} />)}
        </div>
      )}
    </section>
  );
}
