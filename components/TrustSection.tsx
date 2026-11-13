import { Building, Check, LockKeyhole, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function TrustSection() {
  return (
    <section className="bg-section px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-brand">
          Our core differentiator
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl font-bold leading-tight lg:text-4xl">
          Every listing is verified in person. Every payment is protected.
        </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <Reveal className="h-full"><div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-150 hover:border-brand/20 hover:shadow-md">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/20">
              <ShieldCheck aria-hidden="true" size={32} strokeWidth={1.75} />
            </span>
            <h3 className="mt-8 text-xl font-bold">Physical Verification</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Our field team visits every property before it goes live. We confirm it exists at the stated address, matches the photos, video and description exactly, and meets our minimum safety and habitability standards.
            </p>
            <div className="mt-auto pt-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                <Check aria-hidden="true" size={16} />
                3-Point Check
              </span>
            </div>
          </div></Reveal>
          <Reveal delay={100} className="h-full"><div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-150 hover:border-brand/20 hover:shadow-md">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/20">
              <LockKeyhole aria-hidden="true" size={32} strokeWidth={1.75} />
            </span>
            <h3 className="mt-8 text-xl font-bold">Escrow-Protected Payments</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Your money is held securely and only released to the landlord after move-in is confirmed by both you and our verification staff. No confirmation, no release. It&apos;s that simple.
            </p>
            <div className="mt-auto pt-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                <Check aria-hidden="true" size={16} />
                100% Protected
              </span>
            </div>
          </div></Reveal>
          <Reveal delay={200} className="h-full"><div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-150 hover:border-brand/20 hover:shadow-md">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/20">
              <Building aria-hidden="true" size={32} strokeWidth={1.75} />
            </span>
            <h3 className="mt-8 text-xl font-bold">Licensed Payment Partner</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              All payments and wallet savings are processed through a licensed, regulated payment partner not held informally by 99 Crib. Your money is subject to full financial regulation at all times.
            </p>
            <div className="mt-auto pt-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                <Check aria-hidden="true" size={16} />
                Regulated &amp; Licensed
              </span>
            </div>
          </div></Reveal>
        </div>
      </div>
    </section>
  );
}
