import { Eye, Search, TriangleExclamationPoint } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ProblemSection() {
  return (
    <section className="bg-dark-section px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-white/70">
          The problem we solve
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl font-bold leading-tight lg:text-4xl">
          Off-campus housing shouldn&apos;t feel like a gamble.
        </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          <Reveal className="h-full"><div className="h-full rounded-2xl border border-blue-400/25 bg-blue-500/10 p-7">
            <Search aria-hidden="true" className="mb-6 text-blue-400" size={32} strokeWidth={1.75} />
            <h3 className="text-lg font-bold">A stressful search</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Students spend too much time finding accommodation with little confidence in the location, price, or condition.
            </p>
          </div></Reveal>
          <Reveal delay={100} className="h-full"><div className="h-full rounded-2xl border border-red-400/25 bg-red-500/10 p-7">
            <TriangleExclamationPoint aria-hidden="true" className="mb-6 text-red-400" size={32} strokeWidth={1.75} />
            <h3 className="text-lg font-bold">Fake listings and scam agents</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Unverified accommodations and dishonest agents put students and families at risk of losing money.
            </p>
          </div></Reveal>
          <Reveal delay={200} className="h-full"><div className="h-full rounded-2xl border border-amber-400/25 bg-amber-400/10 p-7">
            <Eye aria-hidden="true" className="mb-6 text-amber-400" size={32} strokeWidth={1.75} />
            <h3 className="text-lg font-bold">Payment without protection</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Students are often pressured to pay before they can confirm that the accommodation exists and matches what they were shown.
            </p>
          </div></Reveal>
        </div>
      </div>
    </section>
  );
}
