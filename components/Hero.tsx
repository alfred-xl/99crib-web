import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[600px] items-center overflow-hidden pt-24 md:pt-32">
      <Image
        src="/images/sections/hero-students.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 md:px-8">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white">
            <span className="h-2 w-2 shrink-0 rounded-full bg-green-400" aria-hidden="true" />
            Every listing verified in person before it goes live
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            Find verified student accommodation with zero surprises.
          </h1>
          <p className="mt-5 text-lg text-white/75">
            99 Crib verifies every listing in person and holds every payment in escrow until move-in is confirmed.
          </p>

          <form action="/accommodations" method="get" className="mt-8 flex flex-col gap-3 rounded-2xl bg-white p-2 sm:flex-row">
            <label htmlFor="university" className="sr-only">University</label>
            <select id="university" name="university" className="min-w-0 flex-1 rounded-xl bg-white px-4 py-3 text-navy">
              <option value="">Select your university…</option>
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
            <button type="submit" className="rounded-xl bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark">
              Find Rooms
            </button>
          </form>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-white/60">Download the app:</span>
            <a href="https://apps.apple.com/ng/app/99crib/id6737815547" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white">
              <Image src="/images/icons/apple.svg" alt="" width={20} height={20} />
              App Store
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.thinkcodedevs.crib" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white">
              <Image src="/images/icons/google.svg" alt="" width={20} height={20} />
              Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
