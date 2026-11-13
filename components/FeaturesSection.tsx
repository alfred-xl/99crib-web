import { Globe, LockKeyhole, MessageCircleMore, ShieldCheck, UsersRound, Video } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function FeaturesSection() {
  return (
    <section className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-brand">
          Everything you need
        </p>
        <h2 className="mt-4 text-center text-3xl font-bold leading-tight lg:text-4xl">
          Built for students, designed for safety
        </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0} className="h-full"><div className="group flex h-full gap-4 rounded-2xl border border-gray-100 p-6 transition-all duration-150 hover:border-brand/25 hover:bg-brand-light/30">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand transition-colors duration-150 group-hover:bg-brand group-hover:text-white">
              <Globe aria-hidden="true" size={28} strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="font-bold">Nationwide Coverage</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                Built for universities across all 36 states. Whether you&apos;re in Lagos, Zaria, Ibadan, or Nsukka 99 Crib is expanding to meet students where they study.
              </p>
            </div>
          </div></Reveal>
          <Reveal delay={60} className="h-full"><div className="group flex h-full gap-4 rounded-2xl border border-gray-100 p-6 transition-all duration-150 hover:border-brand/25 hover:bg-brand-light/30">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand transition-colors duration-150 group-hover:bg-brand group-hover:text-white">
              <ShieldCheck aria-hidden="true" size={28} strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="font-bold">Verified Space Only</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                Nothing goes live without a physical inspection. Every space you see has been visited, confirmed, and certified by a member of our team no exceptions.
              </p>
            </div>
          </div></Reveal>
          <Reveal delay={120} className="h-full"><div className="group flex h-full gap-4 rounded-2xl border border-gray-100 p-6 transition-all duration-150 hover:border-brand/25 hover:bg-brand-light/30">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand transition-colors duration-150 group-hover:bg-brand group-hover:text-white">
              <Video aria-hidden="true" size={28} strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="font-bold">Video Reels</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                Browse property video reels before ever visiting. See the living area, bedroom, bathroom, and surroundings exactly as they are so there are no surprises on move-in day.
              </p>
            </div>
          </div></Reveal>
          <Reveal delay={180} className="h-full"><div className="group flex h-full gap-4 rounded-2xl border border-gray-100 p-6 transition-all duration-150 hover:border-brand/25 hover:bg-brand-light/30">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand transition-colors duration-150 group-hover:bg-brand group-hover:text-white">
              <UsersRound aria-hidden="true" size={28} strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="font-bold">Roommate Matching</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                Find compatible roommates studying at your university. Share costs on a larger flat without the stress of posting in random WhatsApp groups.
              </p>
            </div>
          </div></Reveal>
          <Reveal delay={240} className="h-full"><div className="group flex h-full gap-4 rounded-2xl border border-gray-100 p-6 transition-all duration-150 hover:border-brand/25 hover:bg-brand-light/30">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand transition-colors duration-150 group-hover:bg-brand group-hover:text-white">
              <LockKeyhole aria-hidden="true" size={28} strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="font-bold">Wallet &amp; Escrow Payment</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                Save toward rent at your own pace in your in-app wallet. When you&apos;re ready, pay into licensed escrow your money stays protected until you confirm move-in.
              </p>
            </div>
          </div></Reveal>
          <Reveal delay={300} className="h-full"><div className="group flex h-full gap-4 rounded-2xl border border-gray-100 p-6 transition-all duration-150 hover:border-brand/25 hover:bg-brand-light/30">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand transition-colors duration-150 group-hover:bg-brand group-hover:text-white">
              <MessageCircleMore aria-hidden="true" size={28} strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="font-bold">In-App Support</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                Chat directly with landlords and our support team inside the app. Questions, issues, or move-in concerns we&apos;re accessible at every step of the journey.
              </p>
            </div>
          </div></Reveal>
        </div>
      </div>
    </section>
  );
}
