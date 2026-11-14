"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/Reveal";

const studentSteps = [
  {
    number: "01",
    title: "Choose your university",
    description: "Explore verified accommodation close to your campus.",
  },
  {
    number: "02",
    title: "Explore every space",
    description: "Compare details, photos, and video reels before visiting.",
  },
  {
    number: "03",
    title: "Pay securely",
    description: "Your payment stays protected in escrow until move-in.",
  },
  {
    number: "04",
    title: "Confirm and move in",
    description: "Approve the space before funds are released to the landlord.",
  },
];

const landlordSteps = [
  {
    number: "01",
    title: "List for free",
    description: "Submit your property details with no upfront fee.",
  },
  {
    number: "02",
    title: "Complete verification",
    description: "Our field team inspects and captures your property.",
  },
  {
    number: "03",
    title: "Reach more students",
    description: "Connect with students searching near your university.",
  },
  {
    number: "04",
    title: "Get paid securely",
    description: "Receive payment once move-in is confirmed.",
  },
];

export default function HowItWorks() {
  const [audience, setAudience] = useState<"students" | "landlords">("students");
  const steps = audience === "students" ? studentSteps : landlordSteps;

  return (
    <section className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-brand">
          Simple by design
        </p>
        <h2 className="mt-4 text-center text-3xl font-bold leading-tight lg:text-4xl">
          How 99 Crib works
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-gray-500">
          A process built around your protection from the first search to the day you move in.
        </p>
        </Reveal>

        <div className="mt-12 flex justify-center">
          <div role="group" aria-label="How it works for" className="inline-flex rounded-2xl bg-gray-100 p-1.5">
            <button
              type="button"
              aria-pressed={audience === "students"}
              onClick={() => setAudience("students")}
              className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition-all sm:px-6 ${audience === "students" ? "bg-white text-brand shadow-sm" : "text-gray-500"}`}
            >
              For Students
            </button>
            <button
              type="button"
              aria-pressed={audience === "landlords"}
              onClick={() => setAudience("landlords")}
              className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition-all sm:px-6 ${audience === "landlords" ? "bg-white text-brand shadow-sm" : "text-gray-500"}`}
            >
              For Landlords
            </button>
          </div>
        </div>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={`${audience}-${step.number}`} className="h-full"><Reveal delay={index * 80} className="h-full"><div className="group h-full rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all duration-[250ms] ease-[ease] hover:-translate-y-0.5 hover:border-brand/20 hover:bg-white hover:shadow-md">
              <span className="text-3xl font-extrabold leading-none text-gray-200 transition-colors group-hover:text-brand">{step.number}</span>
              <h3 className="mt-3 text-sm font-bold leading-snug">{step.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-gray-500">{step.description}</p>
            </div></Reveal></li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <Link href="/how-it-works" className="group inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark">
            See full walkthrough
            <ChevronRight aria-hidden="true" size={20} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
