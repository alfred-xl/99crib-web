import { Building, Check, LockKeyhole, ShieldCheck } from "lucide-react";

export default function TrustSection() {
  return (
    <section className="bg-section px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-brand">
          Our core differentiator
        </p>
        <h2 className="mx-auto mt-3 max-w-5xl text-center text-3xl font-bold md:text-5xl">
          Every listing is verified in person. Every payment is protected.
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/20">
              <ShieldCheck aria-hidden="true" size={32} strokeWidth={1.75} />
            </span>
            <h3 className="mt-8 text-2xl font-bold">Physical Verification</h3>
            <p className="mt-4 leading-7 text-gray-500">
              Our field team visits every property before it goes live. We confirm it exists at the stated address, matches the photos, video and description exactly, and meets our minimum safety and habitability standards.
            </p>
            <div className="mt-auto pt-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm font-semibold text-green-700">
                <Check aria-hidden="true" size={16} />
                3-Point Check
              </span>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/20">
              <LockKeyhole aria-hidden="true" size={32} strokeWidth={1.75} />
            </span>
            <h3 className="mt-8 text-2xl font-bold">Escrow-Protected Payments</h3>
            <p className="mt-4 leading-7 text-gray-500">
              Your money is held securely and only released to the landlord after move-in is confirmed by both you and our verification staff. No confirmation, no release. It&apos;s that simple.
            </p>
            <div className="mt-auto pt-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm font-semibold text-green-700">
                <Check aria-hidden="true" size={16} />
                100% Protected
              </span>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/20">
              <Building aria-hidden="true" size={32} strokeWidth={1.75} />
            </span>
            <h3 className="mt-8 text-2xl font-bold">Licensed Payment Partner</h3>
            <p className="mt-4 leading-7 text-gray-500">
              All payments and wallet savings are processed through a licensed, regulated payment partner not held informally by 99 Crib. Your money is subject to full financial regulation at all times.
            </p>
            <div className="mt-auto pt-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm font-semibold text-green-700">
                <Check aria-hidden="true" size={16} />
                Regulated &amp; Licensed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
