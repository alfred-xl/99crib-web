"use client";

import Link from "next/link";
import SortSelect from "@/components/accommodations/SortSelect";
import ListingCard from "@/components/ListingCard";
import { listings } from "@/data/listings";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import Reveal from "@/components/Reveal";

const selectClass = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-navy transition-colors focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15";
const roomTypeOrder = ["Bed Space", "Single Room", "Shared Room", "En-suite Room", "Mini Flat"];
const roomTypes = roomTypeOrder.filter((type) => listings.some((listing) => listing.roomType === type));
const universities = Array.from(new Set(listings.map((listing) => listing.university))).sort((a, b) =>
  listings.filter((listing) => listing.university === b).length - listings.filter((listing) => listing.university === a).length,
);

function singleValue(params: Pick<URLSearchParams, "getAll">, name: string) {
  const values = params.getAll(name);
  return values.length === 1 ? values[0] : "";
}

export default function ListingsSection() {
  const params = useSearchParams();
  const rawUniversity = singleValue(params, "university");
  const rawType = singleValue(params, "type");
  const rawPrice = singleValue(params, "price");
  const rawSort = singleValue(params, "sort");
  const university = universities.includes(rawUniversity) ? rawUniversity : "";
  const type = roomTypes.includes(rawType) ? rawType : "";
  const price = ["0", "1", "2", "3", "4", "5"].includes(rawPrice) ? rawPrice : "0";
  const sort = ["low", "high"].includes(rawSort) ? rawSort : "";
  const formKey = JSON.stringify([university, type, price, sort]);

  const results = listings
    .filter((listing) => {
      if (!listing.verified) return false;
      if (university && listing.university !== university) return false;
      if (type && listing.roomType !== type) return false;
      if (price === "0") return true;
      const value = listing.price?.value;
      if (value == null) return false;
      if (price === "1") return value < 500000;
      if (price === "2") return value >= 500000 && value < 1000000;
      if (price === "3") return value >= 1000000 && value < 2000000;
      if (price === "4") return value >= 2000000 && value <= 3000000;
      return value > 3000000;
    })
    .sort((a, b) => {
      if (!sort) return a.id - b.id;
      const aPrice = a.price?.value;
      const bPrice = b.price?.value;
      if (aPrice == null) return bPrice == null ? a.id - b.id : 1;
      if (bPrice == null) return -1;
      return (sort === "low" ? aPrice - bPrice : bPrice - aPrice) || a.id - b.id;
    });
  const universityShort = listings.find((listing) => listing.university === university)?.universityShort;

  return (
    <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8" id="listings">
      <form key={`filters-${formKey}`} method="get" action="/accommodations/#listings" className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        {sort && <input type="hidden" name="sort" value={sort} />}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label htmlFor="f-university" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">University</label>
            <select id="f-university" name="university" defaultValue={university} className={selectClass}>
              <option value="">All universities</option>
              {universities.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="f-type" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">Room Type</label>
            <select id="f-type" name="type" defaultValue={type} className={selectClass}>
              <option value="">All types</option>
              {roomTypes.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="f-price" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">Price Range</label>
            <select id="f-price" name="price" defaultValue={price} className={selectClass}>
              <option value="0">Any price</option>
              <option value="1">Under ₦500,000</option>
              <option value="2">₦500,000 – ₦1,000,000</option>
              <option value="3">₦1,000,000 – ₦2,000,000</option>
              <option value="4">₦2,000,000 – ₦3,000,000</option>
              <option value="5">Above ₦3,000,000</option>
            </select>
          </div>
          <div className="flex flex-col justify-end gap-2">
            <button type="submit" className="w-full rounded-xl bg-brand py-3 text-sm font-semibold text-white shadow-md shadow-brand/20 transition-colors hover:bg-brand-dark">Search</button>
          </div>
        </div>
      </form>

      <div className="mb-5 mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-gray-500" aria-live="polite">
          <span className="font-semibold text-navy">{results.length}</span> verified {results.length === 1 ? "listing" : "listings"} {universityShort ? `near ${universityShort}` : "across Nigeria"}
        </p>
        <form key={`sort-${formKey}`} method="get" action="/accommodations/#listings" className="flex items-center gap-2">
          {university && <input type="hidden" name="university" value={university} />}
          {type && <input type="hidden" name="type" value={type} />}
          {price !== "0" && <input type="hidden" name="price" value={price} />}
          <label htmlFor="f-sort" className="text-xs font-semibold uppercase tracking-wide text-gray-500">Sort</label>
          <SortSelect defaultValue={sort} />
          <noscript><button type="submit" className="text-sm font-semibold text-brand">Apply</button></noscript>
        </form>
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 pb-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((listing) => <ListingCard key={listing.slug} listing={listing} />)}
        </div>
      ) : (
        <div className="py-20 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100">
            <Search aria-hidden="true" className="h-8 w-8 text-gray-400" strokeWidth={1.5} />
          </div>
          <h2 className="mb-2 text-lg font-semibold text-navy">No listings found</h2>
          <p className="mb-5 text-sm text-gray-500">Try adjusting your filters. We&apos;re adding new universities and listings regularly.</p>
          <Link href="/accommodations/#listings" className="text-sm font-semibold text-brand hover:underline">Clear filters</Link>
        </div>
      )}

      <Reveal><div className="mb-8 rounded-2xl bg-brand-light p-8 text-center">
        <h2 className="mb-2 text-xl font-bold text-navy">Found a place you like? Book it in the app</h2>
        <p className="mb-6 text-sm text-gray-500">Reserve your room, pay into escrow and track your move-in, all inside the 99 Crib app.</p>
        <a href="#download" className="inline-flex items-center gap-2 rounded-xl bg-brand px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/25 transition-colors hover:bg-brand-dark">Get the App to Book</a>
      </div></Reveal>
    </section>
  );
}
