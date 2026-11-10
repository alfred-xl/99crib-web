import { Eye, Search, TriangleExclamationPoint } from "lucide-react";

export default function ProblemSection() {
  return (
    <section className="bg-dark-section px-5 py-24 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-white/70">
          The problem we solve
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-bold md:text-4xl">
          Off-campus housing shouldn&apos;t feel like a gamble.
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <Search aria-hidden="true" className="mb-6 text-blue-400" size={32} strokeWidth={1.75} />
            <h3 className="text-xl font-semibold">A stressful search</h3>
            <p className="mt-3 text-white/70">
              Students spend too much time finding accommodation with little confidence in the location, price, or condition.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <TriangleExclamationPoint aria-hidden="true" className="mb-6 text-red-400" size={32} strokeWidth={1.75} />
            <h3 className="text-xl font-semibold">Fake listings and scam agents</h3>
            <p className="mt-3 text-white/70">
              Unverified accommodations and dishonest agents put students and families at risk of losing money.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <Eye aria-hidden="true" className="mb-6 text-amber-400" size={32} strokeWidth={1.75} />
            <h3 className="text-xl font-semibold">Payment without protection</h3>
            <p className="mt-3 text-white/70">
              Students are often pressured to pay before they can confirm that the accommodation exists and matches what they were shown.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
