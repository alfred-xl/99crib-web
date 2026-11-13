import Image from "next/image";
import { Building2, Check, LockKeyhole, Video } from "lucide-react";
import DownloadBanner from "@/components/DownloadBanner";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "About Us",
  description: "Learn why 99 Crib helps Nigerian students explore real accommodation listings and protect rent payments until move-in is confirmed.",
  path: "/about",
});

type TeamMember = {
  name: string;
  role: string;
  school: string;
  photo?: string;
  initials?: string; // shown when there is no photo yet
};

const team: TeamMember[] = [
  { name: "Rahmon Ogunkunle", role: "Chief Executive Officer (CEO)", school: "University of Nigeria, Nsukka", photo: "/images/team/Rahmon.png" },
  { name: "---------", role: "Chief Operating Officer (COO)", school: "University of Nigeria, Nsukka", initials: "CO" },
  { name: "Adedamola Famisa", role: "Chief Financial Officer (CFO)", school: "University of Massachusetts Lowell", photo: "/images/team/Adedamola.jpeg" },
  { name: "Zubayr Ganiyu", role: "Chief Technology Officer (CTO)", school: "Federal University, Lokoja", photo: "/images/team/Zubayr.png" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand px-5 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white">
            <Building2 aria-hidden="true" className="h-4 w-4" />
            Our story
          </p>
          <h1 className="mx-auto mt-6 text-4xl font-bold leading-tight lg:text-5xl">
            Know what you are renting before you pay.
          </h1>
          <p className="mx-auto mt-5 text-lg leading-relaxed text-white/80">
            Finding a home near campus should feel like a fresh start. 99 Crib helps you explore real accommodation listings, see property photos and videos, and rent through a process that protects your payment until move-in is confirmed.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">About 99 Crib</p>
            <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight lg:text-4xl">
              We know student accommodation can be exhausting.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-500">
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
          </Reveal>
          <Reveal delay={100} className="relative aspect-[4/5] w-full max-w-md justify-self-center overflow-hidden rounded-3xl lg:justify-self-end">
            <Image
              src="/images/sections/about.jpeg"
              alt="99 Crib students discussing the app in a classroom"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 448px, (min-width: 768px) 448px, 100vw"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <Reveal className="h-full"><div className="h-full min-w-0 rounded-2xl border border-gray-100 bg-gray-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Our mission</p>
            <h2 className="mt-4 break-words text-3xl font-bold leading-tight">Remove uncertainty from student accommodation.</h2>
            <p className="mt-5 text-sm leading-relaxed text-gray-500 lg:text-base">
              You deserve enough information and time to choose a home with confidence. We bring together physical verification, real property media, and escrow-protected renting so you can make an informed decision before you pay.
            </p>
            <ul className="mt-6 space-y-3 text-sm font-semibold">
              <li className="flex items-start gap-3"><Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand" />Physical verification before publication</li>
              <li className="flex items-start gap-3"><Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand" />Real photos and property video</li>
              <li className="flex items-start gap-3"><Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand" />Escrow-protected renting payments</li>
            </ul>
          </div></Reveal>
          <Reveal delay={100} className="h-full"><div className="h-full min-w-0 rounded-2xl bg-brand-light p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Our vision</p>
            <h2 className="mt-4 break-words text-3xl font-bold leading-tight">A clearer path to a student home across Nigeria.</h2>
            <p className="mt-5 text-sm leading-relaxed text-gray-500 lg:text-base">
              We want students across Nigeria to have access to reliable accommodation information and a protected renting process, wherever they study.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-gray-500 lg:text-base">
              We are starting with our YabaTech and UNILAG pilot. Our ambition is to bring the same focus on honest information and payment protection to more universities as we grow.
            </p>
          </div></Reveal>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal><p className="text-center text-sm font-semibold uppercase tracking-widest text-brand">
            What we stand for
          </p>
          <h2 className="mt-4 text-center text-3xl font-bold leading-tight lg:text-4xl">
            Two commitments at the heart of 99 Crib.
          </h2></Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            <Reveal className="h-full"><div className="h-full rounded-2xl border border-gray-100 bg-white p-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand">
                <Video aria-hidden="true" className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-bold">Honest information and real property media</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                Your decision should begin with a clearer picture of the property. Before publishing a listing, our team visits to confirm that the property exists at its advertised location. Real property photos and videos help you explore the spaces you are considering before deciding to rent.
              </p>
            </div></Reveal>
            <Reveal delay={100} className="h-full"><div className="h-full rounded-2xl border border-gray-100 bg-white p-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand">
                <LockKeyhole aria-hidden="true" className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-bold">Protection of your renting payment</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                Paying for an accommodation is a significant commitment. During our pilot, a payment partner holds renting funds until move-in is confirmed. That confirmation step is central to our process, so your payment stays protected while you complete your move-in.
              </p>
            </div></Reveal>
          </div>
        </div>
      </section>

      <section className="bg-section px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal><p className="text-center text-sm font-semibold uppercase tracking-widest text-brand">
            Our founding team
          </p>
          <h2 className="mt-4 text-center text-3xl font-bold leading-tight lg:text-4xl">
            The people behind 99 Crib.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
            We are bringing our firsthand experience of student accommodation into a platform built around clearer information and protected renting payments.
          </p></Reveal>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <li key={member.role} className="h-full">
                <Reveal delay={index * 80} className="h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md">
                    <div className="relative aspect-[4/5] overflow-hidden bg-brand-light">
                      {member.photo ? (
                        <Image src={member.photo} alt={member.name} fill className="object-cover object-top" sizes="(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw" />
                      ) : (
                        <div aria-hidden="true" className="flex h-full items-center justify-center bg-gradient-to-br from-brand-light to-[#dfe3ff] text-6xl font-extrabold tracking-tight text-brand">
                          {member.initials}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 p-6">
                      <h3 className="text-lg font-bold text-navy">{member.name}</h3>
                      <p className="mt-2 text-sm font-medium text-brand">{member.role}</p>
                      <p className="mt-3 text-sm leading-relaxed text-gray-500">{member.school}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <DownloadBanner />
    </>
  );
}
