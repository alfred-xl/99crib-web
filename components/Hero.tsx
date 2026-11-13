import Image from "next/image";

export default function Hero() {
  return (
    <section className="home-hero relative flex min-h-[100dvh] items-center overflow-hidden">
      <Image
        src="/images/sections/hero-students.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="hero-content relative mx-auto w-full max-w-7xl px-5 pb-20 pt-28 lg:px-8">
        <div className="max-w-2xl">
          <div className="hero-badge mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-400" aria-hidden="true" />
            Every listing verified in person before it goes live
          </div>

          <h1 className="hero-title mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Find verified student accommodation with zero surprises.
          </h1>
          <p className="hero-description mb-10 max-w-xl text-lg leading-relaxed text-white/75">
            99 Crib verifies every listing in person and holds every payment in escrow until move-in is confirmed.
          </p>

          <form action="/accommodations" method="get" className="hero-search mb-8 flex max-w-lg flex-col gap-2 rounded-2xl bg-white p-2 sm:flex-row">
            <label htmlFor="university" className="sr-only">University</label>
            <select id="university" name="university" className="min-w-0 flex-1 rounded-xl bg-white px-4 py-3.5 text-sm text-navy">
              <option value="">Select your university…</option>
              <option value="University of Lagos (UNILAG)">University of Lagos (UNILAG)</option>
              <option value="Obafemi Awolowo University (OAU)">Obafemi Awolowo University (OAU)</option>
              <option value="Pan-Atlantic University (PAU)">Pan-Atlantic University (PAU)</option>
              <option value="Olabisi Onabanjo University (OOU)">Olabisi Onabanjo University (OOU)</option>
              <option value="Nigerian Law School (Bwari)">Nigerian Law School (Bwari)</option>
              <option value="Akwa Ibom State University (AKSU)">Akwa Ibom State University (AKSU)</option>
              <option value="College of Education Warri">College of Education Warri</option>
            </select>
            <button type="submit" className="rounded-xl bg-brand px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-dark">
              Find Rooms
            </button>
          </form>

          <div className="hero-downloads flex flex-wrap items-center gap-3">
            <span className="text-xs text-white/60">Download the app:</span>
            <a href="https://apps.apple.com/ng/app/99crib/id6737815547" target="_blank" rel="noopener noreferrer" className="hero-download-link inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-medium text-white transition-colors hover:bg-white/20">
              <Image src="/images/icons/apple.svg" alt="" width={20} height={20} />
              App Store
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.thinkcodedevs.crib" target="_blank" rel="noopener noreferrer" className="hero-download-link inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-medium text-white transition-colors hover:bg-white/20">
              <Image src="/images/icons/google.svg" alt="" width={20} height={20} />
              Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
