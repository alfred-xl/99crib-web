"use client";

import Link from "next/link";
import { CircleCheck, House, Info, LockKeyhole, ShieldCheck, Smartphone, Users, Video, Wallet } from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/Reveal";

const studentSteps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Download the app and sign up with your university",
    description: "See listings near your campus that our team has inspected in person.",
  },
  {
    number: "02",
    icon: Video,
    title: "Watch property reels",
    description:
      "Browse photo galleries and video reels shot during our verification visit. See the living area, bedroom, bathroom, kitchen, and surroundings so you know what you're getting before you pay.",
  },
  {
    number: "03",
    icon: LockKeyhole,
    title: "Pay securely, with funds held in escrow",
    description:
      "When you're ready, pay through the app. Your money is held in escrow and doesn't go to the landlord until move-in is confirmed.",
  },
  {
    number: "04",
    icon: CircleCheck,
    title: "Move in with confidence",
    description:
      "Check that the space matches the listing. Funds are released to the landlord once move-in is confirmed, not before.",
  },
];

const landlordSteps = [
  {
    number: "01",
    icon: House,
    title: "List your property for free",
    description:
      "Download the app and submit your property details. There are no listing fees or upfront costs. Our team will contact you to schedule a visit.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Our team visits, verifies, and shoots your reels",
    description:
      "A 99 Crib field agent visits your property, confirms the details match your listing, shoots photos and video reels, and completes our 3-point verification.",
  },
  {
    number: "03",
    icon: Users,
    title: "Get discovered by students",
    description: "Your verified listing is shown to students searching near your university.",
  },
  {
    number: "04",
    icon: Wallet,
    title: "Get paid securely once the tenant moves in",
    description:
      "Funds are released from escrow directly to you as soon as move-in is confirmed—no chasing, no delays, no risk of disputes. Reliable, on-time payment every single time.",
  },
];

export default function HowItWorksSteps() {
  const [audience, setAudience] = useState<"students" | "landlords">("students");
  const steps = audience === "students" ? studentSteps : landlordSteps;

  return (
    <section className="bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex justify-center">
          <div role="group" aria-label="How it works for" className="inline-flex rounded-2xl bg-gray-100 p-1.5">
            <button
              type="button"
              aria-pressed={audience === "students"}
              aria-controls="how-it-works-steps"
              onClick={() => setAudience("students")}
              className={`whitespace-nowrap rounded-xl px-4 py-3 text-sm font-semibold transition-all sm:px-7 ${audience === "students" ? "bg-white text-brand shadow-sm" : "text-gray-500"}`}
            >
              For Students
            </button>
            <button
              type="button"
              aria-pressed={audience === "landlords"}
              aria-controls="how-it-works-steps"
              onClick={() => setAudience("landlords")}
              className={`whitespace-nowrap rounded-xl px-4 py-3 text-sm font-semibold transition-all sm:px-7 ${audience === "landlords" ? "bg-white text-brand shadow-sm" : "text-gray-500"}`}
            >
              For Landlords
            </button>
          </div>
        </div>

        <div id="how-it-works-steps" className="mx-auto max-w-5xl">
          <div className="relative mt-12">
            <span aria-hidden="true" className="absolute bottom-9 left-9 top-9 w-px bg-brand/20" />
            <ol>
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <li key={`${audience}-${step.number}`} className="relative pb-8 last:pb-0">
                  <Reveal delay={index * 80}>
                  <div className="group flex items-start gap-6">
                  <div className="relative z-10 flex h-[72px] w-[72px] shrink-0 flex-col items-center justify-center gap-1 rounded-2xl bg-brand-light text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon aria-hidden="true" size={26} strokeWidth={1.75} />
                    <span className="text-[10px] font-bold">{step.number}</span>
                  </div>
                  <div className="pt-1">
                    <h2 className="text-lg font-bold leading-tight">{step.title}</h2>
                    <p className="mt-2 text-base leading-relaxed text-gray-500">{step.description}</p>
                  </div>
                  </div>
                  </Reveal>
                </li>
              );
            })}
            </ol>
          </div>

          {audience === "students" && (
            <Reveal className="mt-12"><div className="flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <Info aria-hidden="true" size={23} />
              </span>
              <div>
                <h2 className="font-semibold text-amber-900">Changed your mind?</h2>
                <p className="mt-1 text-sm leading-relaxed text-amber-800">
                  Contact support before move-in is confirmed and we&apos;ll guide you through your cancellation.
                </p>
              </div>
            </div></Reveal>
          )}

          {audience === "landlords" && (
            <Reveal className="mt-12"><div className="flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <Info aria-hidden="true" size={23} />
              </span>
              <div>
                <h2 className="font-semibold text-amber-900">Want more visibility?</h2>
                <p className="mt-1 text-sm leading-relaxed text-amber-800">
                  Boost your listing into our Premium carousel and get shown first to students searching your university from ₦5,000/week.
                </p>
              </div>
            </div></Reveal>
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">Everything happens inside the 99 Crib app</p>
          <Link href="#download" className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-8 py-4 font-semibold text-white transition-colors hover:bg-brand-dark">
            <Smartphone aria-hidden="true" size={19} />
            Get the App
          </Link>
        </div>
      </div>
    </section>
  );
}
