"use client";

import Link from "next/link";
import { Info } from "lucide-react";
import { useSearchParams } from "next/navigation";
import ListingCard from "@/components/ListingCard";
import { listings } from "@/data/listings";

export default function ListingsSection() {
  const searchParams = useSearchParams();
  const universityValues = searchParams.getAll("university");
  const typeValues = searchParams.getAll("type");
  const priceValues = searchParams.getAll("price");
  const university = universityValues.length === 1 ? universityValues[0] : "";
  const type = typeValues.length === 1 ? typeValues[0] : "";
  const rawPrice = priceValues.length === 1 ? priceValues[0] : "";
  const priceRange = ["under-350000", "350000-500000", "over-500000"].includes(rawPrice) ? rawPrice : "";
  const results = listings.filter((listing) => {
    const matchesPrice =
      !priceRange ||
      (priceRange === "under-350000" && listing.annualPrice < 350000) ||
      (priceRange === "350000-500000" && listing.annualPrice >= 350000 && listing.annualPrice <= 500000) ||
      (priceRange === "over-500000" && listing.annualPrice > 500000);

    return (
      (!university || listing.university === university) &&
      (!type || listing.type === type) &&
      matchesPrice
    );
  });

  return (
    <section className="bg-white px-5 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <form
          key={JSON.stringify([university, type, priceRange])}
          action="/accommodations"
          method="get"
          className="grid gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:grid-cols-2 xl:grid-cols-4"
        >
          <div>
            <label htmlFor="university" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">University</label>
            <select
              id="university"
              name="university"
              defaultValue={university}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-navy"
            >
              <option value="">All universities</option>
              <option value="University of Lagos (UNILAG)">University of Lagos (UNILAG)</option>
              <option value="Obafemi Awolowo University (OAU)">Obafemi Awolowo University (OAU)</option>
              <option value="University of Ibadan (UI)">University of Ibadan (UI)</option>
              <option value="ABU Zaria">ABU Zaria</option>
              <option value="University of Benin (UNIBEN)">University of Benin (UNIBEN)</option>
              <option value="University of Nigeria, Nsukka (UNN)">University of Nigeria, Nsukka (UNN)</option>
              <option value="Covenant University">Covenant University</option>
              <option value="Babcock University">Babcock University</option>
              <option value="University of Port Harcourt (UNIPORT)">University of Port Harcourt (UNIPORT)</option>
              <option value="Lagos State University (LASU)">Lagos State University (LASU)</option>
            </select>
          </div>

          <div>
            <label htmlFor="type" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">Room type</label>
            <select
              id="type"
              name="type"
              defaultValue={type}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-navy"
            >
              <option value="">All types</option>
              <option value="Self-Contain">Self-Contain</option>
              <option value="Single Room">Single Room</option>
              <option value="Shared Room">Shared Room</option>
              <option value="Mini Flat">Mini Flat</option>
              <option value="2 Bedroom">2 Bedroom</option>
              <option value="Hostel">Hostel</option>
            </select>
          </div>

          <div>
            <label htmlFor="price" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">Price range</label>
            <select
              id="price"
              name="price"
              defaultValue={priceRange}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-navy"
            >
              <option value="">Any price</option>
              <option value="under-350000">Under ₦350,000/yr</option>
              <option value="350000-500000">₦350,000–₦500,000/yr</option>
              <option value="over-500000">Over ₦500,000/yr</option>
            </select>
          </div>

          <div className="flex items-end">
            <button type="submit" className="w-full rounded-xl bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark">
              Search
            </button>
          </div>
        </form>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-gray-500">
            <span className="font-bold text-navy">{results.length}</span> sample {results.length === 1 ? "listing" : "listings"}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {(university || type || priceRange) && (
              <Link href="/accommodations" className="text-sm font-semibold text-brand hover:text-brand-dark">
                Clear filters
              </Link>
            )}
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand-light px-3 py-1 text-sm text-brand">
              <Info aria-hidden="true" size={16} />
              Sample previews · live catalogue coming soon
            </span>
          </div>
        </div>

        {results.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((listing) => (
              <ListingCard key={listing.title} listing={listing} featured />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-gray-100 bg-section p-10 text-center">
            <p>No sample listings match those filters yet.</p>
            <Link href="/accommodations" className="mt-4 inline-block font-semibold text-brand hover:text-brand-dark">
              See all listings
            </Link>
          </div>
        )}

        <div className="mt-20 rounded-3xl bg-brand-light px-6 py-12 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Explore more homes in the app</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Browse property details, photos, and video reels in the 99 Crib app.
          </p>
          <Link href="#download" className="mt-8 inline-flex rounded-xl bg-brand px-7 py-3 font-semibold text-white hover:bg-brand-dark">
            Get the App to Browse
          </Link>
        </div>
      </div>
    </section>
  );
}
