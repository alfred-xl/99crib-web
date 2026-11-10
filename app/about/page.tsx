import Image from "next/image";
import { Building2, Check, LockKeyhole, Video } from "lucide-react";
import DownloadBanner from "@/components/DownloadBanner";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "About Us",
  description: "Learn why 99 Crib helps Nigerian students explore real accommodation listings and protect rent payments until move-in is confirmed.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand px-5 py-20 text-center text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-medium text-white">
            <Building2 aria-hidden="true" className="h-4 w-4" />
            Our story
          </p>
          <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Know what you are renting before you pay.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            Finding a home near campus should feel like a fresh start. 99 Crib helps you explore real accommodation listings, see property photos and videos, and rent through a process that protects your payment until move-in is confirmed.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 pb-12 pt-24 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-20">
          <div className="max-w-2xl">
            <p className="font-semibold uppercase tracking-widest text-brand">About 99 Crib</p>
            <h2 className="mt-7 max-w-xl text-4xl font-bold leading-tight md:text-5xl">
              We know student accommodation can be exhausting.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-500">
              <p>
                We had experienced how hard it can be to find reliable accommodation, and seen other students face scams or feel pressured to pay before they understood their options.
              </p>
              <p>
                We founded 99 Crib to make that experience seamless. Our idea was simple: help students find accommodation near their university, give them real information about the spaces they are considering, and protect their renting payments through move-in confirmation.
              </p>
              <p>
                For landlords, the same system creates stronger listings, more serious enquiries, and a clearer path from discovery to move-in.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full max-w-md justify-self-center overflow-hidden rounded-3xl lg:justify-self-end">
            <Image
              src="/images/sections/about.jpeg"
              alt="99 Crib students discussing the app in a classroom"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 448px, (min-width: 768px) 448px, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="min-w-0 rounded-3xl border border-gray-100 bg-gray-50 p-8 md:p-10">
            <p className="font-semibold uppercase tracking-widest text-brand">Our mission</p>
            <h2 className="mt-6 break-words text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">Remove uncertainty from student accommodation.</h2>
            <p className="mt-8 text-lg leading-relaxed text-gray-500">
              You deserve enough information and time to choose a home with confidence. We bring together physical verification, real property media, and escrow-protected renting so you can make an informed decision before you pay.
            </p>
            <ul className="mt-8 space-y-4 font-semibold">
              <li className="flex items-start gap-3"><Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand" />Physical verification before publication</li>
              <li className="flex items-start gap-3"><Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand" />Real photos and property video</li>
              <li className="flex items-start gap-3"><Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand" />Escrow-protected renting payments</li>
            </ul>
          </div>
          <div className="min-w-0 rounded-3xl bg-brand-light p-8 md:p-10">
            <p className="font-semibold uppercase tracking-widest text-brand">Our vision</p>
            <h2 className="mt-6 break-words text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">A clearer path to a student home across Nigeria.</h2>
            <p className="mt-8 text-lg leading-relaxed text-gray-500">
              We want students across Nigeria to have access to reliable accommodation information and a protected renting process, wherever they study.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-gray-500">
              We are starting with our YabaTech and UNILAG pilot. Our ambition is to bring the same focus on honest information and payment protection to more universities as we grow.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-brand">
            What we stand for
          </p>
          <h2 className="mt-5 text-center text-3xl font-bold md:text-5xl">
            Two commitments at the heart of 99 Crib.
          </h2>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand">
                <Video aria-hidden="true" className="h-6 w-6" />
              </span>
              <h3 className="mt-7 text-xl font-bold">Honest information and real property media</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-500">
                Your decision should begin with a clearer picture of the property. Before publishing a listing, our team visits to confirm that the property exists at its advertised location. Real property photos and videos help you explore the spaces you are considering before deciding to rent.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand">
                <LockKeyhole aria-hidden="true" className="h-6 w-6" />
              </span>
              <h3 className="mt-7 text-xl font-bold">Protection of your renting payment</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-500">
                Paying for an accommodation is a significant commitment. During our pilot, a payment partner holds renting funds until move-in is confirmed. That confirmation step is central to our process, so your payment stays protected while you complete your move-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-brand">
            Our founding team
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">
            The people behind 99 Crib.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
            We are bringing our firsthand experience of student accommodation into a platform built around clearer information and protected renting payments.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 p-8 text-center">
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full">
                <Image src="/images/team/Rahmon.png" alt="Rahmon Ogunkunle" fill className="object-cover" sizes="128px" />
              </div>
              <h3 className="mt-5 font-bold">Rahmon Ogunkunle</h3>
              <p className="mt-1 text-brand">Chief Executive Officer (CEO)</p>
              <p className="mt-2 text-gray-500">University of Nigeria, Nsukka</p>
            </div>
            <div className="rounded-2xl border border-gray-100 p-8 text-center">
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full">
                <Image src="/images/team/Adedamola.jpeg" alt="Adedamola Famisa" fill className="object-cover" sizes="128px" />
              </div>
              <h3 className="mt-5 font-bold">Adedamola Famisa</h3>
              <p className="mt-1 text-brand">Chief Financial Officer (CFO)</p>
              <p className="mt-2 text-gray-500">University of Massachusetts Lowell</p>
            </div>
            <div className="rounded-2xl border border-gray-100 p-8 text-center">
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full">
                <Image src="/images/team/Zubayr.png" alt="Zubayr Ganiyu" fill className="object-cover" sizes="128px" />
              </div>
              <h3 className="mt-5 font-bold">Zubayr Ganiyu</h3>
              <p className="mt-1 text-brand">Chief Technology Officer (CTO)</p>
              <p className="mt-2 text-gray-500">Federal University, Lokoja</p>
            </div>
          </div>
        </div>
      </section>

      <DownloadBanner />
    </>
  );
}
