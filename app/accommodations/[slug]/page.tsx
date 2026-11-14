import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AirVent, Archive, Bath, BedDouble, BookOpen, CalendarDays, Check, Cctv, Droplets, Dumbbell, House, LampDesk, Map, MapPin, MessageCircle, Refrigerator, ShieldCheck, Sparkles, Tag, Tv, UsersRound, Utensils, Wifi, Zap, type LucideIcon } from "lucide-react";
import DownloadBanner from "@/components/DownloadBanner";
import ListingGallery from "@/components/ListingGallery";
import RelatedListings from "@/components/RelatedListings";
import ShareListingButton from "@/components/ShareListingButton";
import { listings } from "@/data/listings";
import { createPageMetadata } from "../../seo";

export const dynamicParams = false;

type PageProps = { params: Promise<{ slug: string }> };
const factIcons: Record<string, LucideIcon> = {
  "Room type": House,
  Occupancy: UsersRound,
  Bathroom: Bath,
  Tenancy: CalendarDays,
  Billing: Tag,
  Area: MapPin,
  "Open to": UsersRound,
};
const amenityIcons: Record<string, LucideIcon> = {
  "Air conditioning": AirVent,
  "Bunk beds": BedDouble,
  "CCTV and security": Cctv,
  Cafeteria: Utensils,
  "Common lounge": House,
  "Common-area cleaning": Sparkles,
  "Electricity and water": Droplets,
  Fridge: Refrigerator,
  Gym: Dumbbell,
  Kitchenette: Utensils,
  "On-site management": ShieldCheck,
  "Power backup": Zap,
  "Shoe rack and shelves": Archive,
  "Smart TV": Tv,
  "Study desk": LampDesk,
  "Study room": BookOpen,
  Wardrobe: Archive,
  "Water heater": Droplets,
  "Wi-Fi": Wifi,
};
const bookingSteps = [
  { title: "Get the app", description: "Download 99 Crib on iOS or Android and create your student account." },
  { title: "Pick this room", description: "Choose your room and check the total, including fees, before you pay." },
  { title: "Pay into escrow", description: "Pay inside the app only. Your money is held safely through Rubies Payment." },
  { title: "Move in, then release", description: "Confirm move-in and the payment is released to the property. Never pay a landlord or agent outside the app." },
];

export function generateStaticParams() {
  return listings.map((listing) => ({ slug: listing.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const listing = listings.find((item) => item.slug === slug);
  if (!listing) notFound();

  return createPageMetadata({
    title: listing.metaTitle,
    description: listing.metaDescription,
    path: `/accommodations/${listing.slug}`,
    absoluteTitle: true,
    image: listing.images[0] ? { url: listing.images[0].url, alt: listing.images[0].caption } : undefined,
  });
}

export default async function AccommodationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const listing = listings.find((item) => item.slug === slug);
  if (!listing) notFound();

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(listing.mapQuery)}`;
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(listing.mapQuery)}&output=embed`;
  const universityUrl = `/accommodations/?university=${encodeURIComponent(listing.university)}#listings`;
  const enquiryUrl = `mailto:support@99crib.com?subject=${encodeURIComponent(`Question about ${listing.property} - ${listing.room}`)}`;

  return (
    <>
      <article className="bg-section px-5 pb-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 pb-[0.9rem] pt-5 text-[0.8rem] text-gray-500">
            <Link href="/" className="transition-colors hover:text-brand">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/accommodations" className="transition-colors hover:text-brand">Accommodations</Link>
            <span aria-hidden="true">/</span>
            <Link href={universityUrl} className="transition-colors hover:text-brand">{listing.universityShort}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="font-semibold text-navy">{listing.property}</span>
          </nav>

          <div className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                {listing.verified && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-sm font-semibold text-green-700">
                    <ShieldCheck aria-hidden="true" size={17} /> Verified
                  </span>
                )}
                <span className="rounded-full bg-brand-light px-3 py-1.5 text-sm font-semibold text-brand">{listing.roomType}</span>
                {listing.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-gray-600">{tag}</span>
                ))}
              </div>
              <h1 className="mt-4 text-[1.6rem] font-extrabold leading-tight tracking-[-0.01em] text-navy lg:text-[2.4rem]">{listing.property}</h1>
              <p className="mt-2 text-[1.05rem] font-medium text-gray-600">{listing.room}</p>
              <p className="mt-3 flex items-start gap-2 text-[0.95rem] text-gray-500">
                <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-brand" size={19} /> {listing.locationLine}
              </p>
            </div>
            <ShareListingButton title={`${listing.property} · ${listing.room}`} />
          </div>

          <ListingGallery key={listing.slug} images={listing.images} property={listing.property} noPhotoNote={listing.noPhotoNote} />

          <div className="mt-12 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-10">
            <div className="min-w-0 space-y-8">
              <section aria-labelledby="at-a-glance" className="rounded-[1.25rem] border border-gray-200 bg-white p-6 sm:p-[1.9rem]">
                <h2 id="at-a-glance" className="mb-4 text-[1.2rem] font-extrabold text-navy">At a glance</h2>
                <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {listing.facts.map((fact) => {
                    const Icon = factIcons[fact.label] ?? House;
                    return (
                      <div key={fact.label} className="flex min-w-0 items-center gap-3 rounded-[0.9rem] bg-section px-4 py-[0.85rem]">
                        <Icon aria-hidden="true" className="shrink-0 text-brand" size={22} strokeWidth={1.8} />
                        <div className="min-w-0">
                          <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">{fact.label}</dt>
                          <dd className="mt-1 font-bold text-navy">{fact.value}</dd>
                        </div>
                      </div>
                    );
                  })}
                </dl>
              </section>

              <section aria-labelledby="about-room" className="rounded-[1.25rem] border border-gray-200 bg-white p-6 sm:p-[1.9rem]">
                <h2 id="about-room" className="mb-4 text-[1.2rem] font-extrabold text-navy">About this room</h2>
                <p className="text-[0.95rem] font-medium leading-[1.8] text-navy">{listing.lead}</p>
                {listing.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-[0.9rem] text-[0.95rem] leading-[1.8] text-gray-600">{paragraph}</p>
                ))}
              </section>

              {listing.video && (
                <section aria-label={`${listing.property} video tour`} className="overflow-hidden rounded-[1.25rem] border border-gray-200 bg-white p-6 sm:p-[1.9rem]">
                  <h2 className="mb-4 text-[1.2rem] font-extrabold text-navy">Video tour</h2>
                  <video controls preload="none" poster={listing.video.poster} className="aspect-video w-full rounded-2xl bg-black" aria-label={`Video tour of ${listing.room} at ${listing.property}`}>
                    <source src={listing.video.src} type="video/mp4" />
                    Your browser does not support this video.
                  </video>
                </section>
              )}

              <section aria-labelledby="place-offers" className="rounded-[1.25rem] border border-gray-200 bg-white p-6 sm:p-[1.9rem]">
                <h2 id="place-offers" className="mb-4 text-[1.2rem] font-extrabold text-navy">What this place offers</h2>
                <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {listing.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity] ?? Check;
                    return (
                      <li key={amenity} className="flex min-h-16 items-center gap-3 rounded-[0.9rem] border border-gray-200 px-4 py-3 text-[0.95rem] text-gray-600">
                        <Icon aria-hidden="true" className="shrink-0 text-brand" size={22} strokeWidth={1.8} />
                        {amenity}
                      </li>
                    );
                  })}
                </ul>
              </section>

              <section aria-labelledby="location" className="rounded-[1.25rem] border border-gray-200 bg-white p-6 sm:p-[1.9rem]">
                <h2 id="location" className="mb-4 text-[1.2rem] font-extrabold text-navy">Location</h2>
                <div className="flex flex-wrap items-start justify-between gap-4 text-[0.95rem] leading-[1.8]">
                  <div>
                    <p className="font-bold text-navy">{listing.property}</p>
                    <p className="mt-1 text-gray-500">{listing.address}</p>
                    {listing.locationNote && <p className="mt-1 text-gray-500">{listing.locationNote}</p>}
                  </div>
                  <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-brand transition-colors hover:text-brand-dark">
                    <Map aria-hidden="true" size={19} /> Open in Google Maps
                  </a>
                </div>
                <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
                  <iframe src={mapEmbedUrl} title={`Map of ${listing.property} in ${listing.area}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-72 w-full sm:h-80" />
                </div>
              </section>

              <section aria-labelledby="landlord" className="rounded-[1.25rem] border border-gray-200 bg-white p-6 sm:p-[1.9rem]">
                <h2 id="landlord" className="mb-4 text-[1.2rem] font-extrabold text-navy">Your landlord</h2>
                <div className="flex flex-wrap items-center justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-4 border-brand-light bg-gray-100">
                      <Image src={listing.landlord.image} alt={listing.landlord.name} fill className="object-cover" sizes="64px" />
                    </div>
                    <div>
                      <p className="font-bold text-navy">{listing.landlord.name}</p>
                      <p className="text-sm text-gray-500">{listing.landlord.subtitle}</p>
                      {listing.landlord.verified && (
                        <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                          <ShieldCheck aria-hidden="true" size={15} /> Verified
                        </span>
                      )}
                    </div>
                  </div>
                  <a href="#download" aria-label="Get the app to message the landlord" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 font-semibold text-navy transition-colors hover:border-brand/30 hover:text-brand">
                    <MessageCircle aria-hidden="true" size={19} /> Message landlord
                  </a>
                </div>
              </section>

              <section aria-labelledby="booking-works" className="rounded-[1.25rem] border border-gray-200 bg-white p-6 sm:p-[1.9rem]">
                <h2 id="booking-works" className="mb-4 text-[1.2rem] font-extrabold text-navy">How booking works</h2>
                <ol className="grid gap-6 sm:grid-cols-2">
                  {bookingSteps.map((step, index) => (
                    <li key={step.title} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light font-bold text-brand">{index + 1}</span>
                      <div>
                        <h3 className="font-bold text-navy">{step.title}</h3>
                        <p className="mt-1 text-[0.95rem] leading-[1.8] text-gray-600">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            </div>

            <aside className="lg:sticky lg:top-24" aria-label="Price and booking summary">
              <div className="rounded-[1.4rem] border border-gray-200 bg-white p-[1.6rem] shadow-xl shadow-brand/10">
                <p className="text-[2rem] font-extrabold leading-tight text-navy">
                  {listing.price?.amount ?? "Price on request"}
                  {listing.price && <span className="ml-1 text-lg font-medium text-gray-500">{listing.price.period}</span>}
                </p>
                <p className="mt-2 text-gray-500">{listing.unitLine}</p>
                {listing.summary.length > 0 && (
                  <dl className="mt-6 space-y-3 border-t border-gray-100 pt-5">
                    {listing.summary.map((item) => (
                      <div key={item.label} className="flex justify-between gap-3 text-sm sm:text-base">
                        <dt className="text-gray-600">{item.label}</dt>
                        <dd className="shrink-0 font-semibold text-navy">{item.value}</dd>
                      </div>
                    ))}
                    {listing.estimatedTotal && (
                      <div className="flex justify-between gap-3 border-t border-dashed border-gray-200 pt-4 text-lg font-bold">
                        <dt className="text-navy">Estimated total</dt>
                        <dd className="text-brand">{listing.estimatedTotal}</dd>
                      </div>
                    )}
                  </dl>
                )}
                {listing.estimatedTotal && <p className="mt-5 text-sm leading-6 text-gray-500">Estimate only. The exact amount, including any property fees, is shown in the app before you pay.</p>}
                {listing.price && <a href="#download" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3.5 font-semibold text-white shadow-lg shadow-brand/20 transition-colors hover:bg-brand-dark">
                  <Check aria-hidden="true" size={20} /> Book in the 99 Crib app
                </a>}
                <a href={enquiryUrl} className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-semibold ${listing.price ? "mt-3 border border-gray-200 text-navy hover:border-brand/30 hover:text-brand" : "mt-6 bg-brand text-white hover:bg-brand-dark"}`}>
                  <MessageCircle aria-hidden="true" size={20} /> Ask about this room
                </a>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-gray-600">
                  <li className="flex items-start gap-2"><ShieldCheck aria-hidden="true" className="mt-0.5 shrink-0 text-green-600" size={19} />Payments are held in escrow through Rubies Payment until move-in is confirmed.</li>
                  <li className="flex items-start gap-2"><Check aria-hidden="true" className="mt-0.5 shrink-0 text-green-600" size={19} /><span>Refunds are available before move-in. <Link href="/terms" className="text-brand hover:underline">Read the terms.</Link></span></li>
                  <li className="flex items-start gap-2"><Check aria-hidden="true" className="mt-0.5 shrink-0 text-green-600" size={19} />Pay only inside the app, never to a landlord or agent directly.</li>
                </ul>
              </div>
            </aside>
          </div>
          <RelatedListings current={listing} />
        </div>
      </article>
      <DownloadBanner />
    </>
  );
}
