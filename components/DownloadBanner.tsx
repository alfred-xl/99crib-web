import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function DownloadBanner() {
  return (
    <section id="download" className="relative flex min-h-[520px] items-center overflow-hidden bg-brand px-5 py-24 text-center text-white md:px-8">
      <Image
        src="/images/sections/footer-background.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-brand/85" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-2 text-sm font-medium text-white">
          <ShieldCheck aria-hidden="true" size={18} />
          Every listing verified. Every payment protected.
        </p>
        <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-bold md:text-6xl">
          Ready to find your next home near campus?
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-white/85 md:text-xl">
          Download the 99 Crib app to find accommodation near your campus, with your payment protected until move-in is confirmed.
        </p>
        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row sm:justify-center">
          <a href="https://apps.apple.com/ng/app/99crib/id6737815547" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 font-semibold text-brand sm:min-w-60">
            <Image src="/images/icons/apple-brand.svg" alt="" width={22} height={22} />
            Download on App Store
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.thinkcodedevs.crib" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/30 bg-white/15 px-7 py-4 font-semibold text-white sm:min-w-60">
            <Image src="/images/icons/google.svg" alt="" width={22} height={22} />
            Get it on Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
