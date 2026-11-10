import { Globe, LockKeyhole, MessageCircleMore, ShieldCheck, UsersRound, Video } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="bg-white px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-brand">
          Everything you need
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold md:text-5xl">
          Built for students, designed for safety
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="group flex gap-5 rounded-2xl border border-gray-100 p-6 hover:border-brand/30 hover:bg-section">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand group-hover:bg-brand group-hover:text-white">
              <Globe aria-hidden="true" size={28} strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="text-xl font-bold">Nationwide Coverage</h3>
              <p className="mt-3 leading-7 text-gray-500">
                Built for universities across all 36 states. Whether you&apos;re in Lagos, Zaria, Ibadan, or Nsukka 99 Crib is expanding to meet students where they study.
              </p>
            </div>
          </div>
          <div className="group flex gap-5 rounded-2xl border border-gray-100 p-6 hover:border-brand/30 hover:bg-section">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand group-hover:bg-brand group-hover:text-white">
              <ShieldCheck aria-hidden="true" size={28} strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="text-xl font-bold">Verified Space Only</h3>
              <p className="mt-3 leading-7 text-gray-500">
                Nothing goes live without a physical inspection. Every space you see has been visited, confirmed, and certified by a member of our team no exceptions.
              </p>
            </div>
          </div>
          <div className="group flex gap-5 rounded-2xl border border-gray-100 p-6 hover:border-brand/30 hover:bg-section">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand group-hover:bg-brand group-hover:text-white">
              <Video aria-hidden="true" size={28} strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="text-xl font-bold">Video Reels</h3>
              <p className="mt-3 leading-7 text-gray-500">
                Browse property video reels before ever visiting. See the living area, bedroom, bathroom, and surroundings exactly as they are so there are no surprises on move-in day.
              </p>
            </div>
          </div>
          <div className="group flex gap-5 rounded-2xl border border-gray-100 p-6 hover:border-brand/30 hover:bg-section">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand group-hover:bg-brand group-hover:text-white">
              <UsersRound aria-hidden="true" size={28} strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="text-xl font-bold">Roommate Matching</h3>
              <p className="mt-3 leading-7 text-gray-500">
                Find compatible roommates studying at your university. Share costs on a larger flat without the stress of posting in random WhatsApp groups.
              </p>
            </div>
          </div>
          <div className="group flex gap-5 rounded-2xl border border-gray-100 p-6 hover:border-brand/30 hover:bg-section">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand group-hover:bg-brand group-hover:text-white">
              <LockKeyhole aria-hidden="true" size={28} strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="text-xl font-bold">Wallet &amp; Escrow Payment</h3>
              <p className="mt-3 leading-7 text-gray-500">
                Save toward rent at your own pace in your in-app wallet. When you&apos;re ready, pay into licensed escrow your money stays protected until you confirm move-in.
              </p>
            </div>
          </div>
          <div className="group flex gap-5 rounded-2xl border border-gray-100 p-6 hover:border-brand/30 hover:bg-section">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand group-hover:bg-brand group-hover:text-white">
              <MessageCircleMore aria-hidden="true" size={28} strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="text-xl font-bold">In-App Support</h3>
              <p className="mt-3 leading-7 text-gray-500">
                Chat directly with landlords and our support team inside the app. Questions, issues, or move-in concerns we&apos;re accessible at every step of the journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
