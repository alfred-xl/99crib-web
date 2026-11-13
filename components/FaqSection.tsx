import { Plus } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function FaqSection() {
  return (
    <section className="bg-section px-5 py-24 lg:px-8">
      <Reveal className="mx-auto max-w-3xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-brand">
          Got questions?
        </p>
        <h2 className="mt-4 text-center text-3xl font-bold leading-tight lg:text-4xl">
          Frequently asked questions
        </h2>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gray-100 bg-white px-6 py-2 shadow-sm sm:px-8">
          <details className="group border-b border-gray-100 last:border-b-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-semibold leading-snug [&::-webkit-details-marker]:hidden">
              How does physical verification actually work?
              <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-150 group-open:border-brand group-open:bg-brand group-open:text-white"><Plus size={18} className="transition-transform group-open:rotate-45" /></span>
            </summary>
            <p className="faq-answer pb-5 pr-12 text-sm leading-relaxed text-gray-500">
              A member of our field team visits every property before it&apos;s listed. They confirm the property exists at the stated address, matches the photos, videos and description, and meets our minimum safety and habitability standards. Only after passing all three checks does a listing go live.
            </p>
          </details>
          <details className="group border-b border-gray-100 last:border-b-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-semibold leading-snug [&::-webkit-details-marker]:hidden">
              What happens if the property doesn&apos;t match the listing on move-in day?
              <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-150 group-open:border-brand group-open:bg-brand group-open:text-white"><Plus size={18} className="transition-transform group-open:rotate-45" /></span>
            </summary>
            <p className="faq-answer pb-5 pr-12 text-sm leading-relaxed text-gray-500">
              Don&apos;t confirm move-in. If anything doesn&apos;t match, such as the condition, size or amenities, raise it with our support team. Your payment stays in escrow while we help resolve the issue.
            </p>
          </details>
          <details className="group border-b border-gray-100 last:border-b-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-semibold leading-snug [&::-webkit-details-marker]:hidden">
              What happens if I need to cancel before moving in?
              <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-150 group-open:border-brand group-open:bg-brand group-open:text-white"><Plus size={18} className="transition-transform group-open:rotate-45" /></span>
            </summary>
            <p className="faq-answer pb-5 pr-12 text-sm leading-relaxed text-gray-500">
              Contact support before move-in is confirmed and we&apos;ll guide you through your cancellation.
            </p>
          </details>
          <details className="group border-b border-gray-100 last:border-b-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-semibold leading-snug [&::-webkit-details-marker]:hidden">
              Is my money safe in escrow?
              <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-150 group-open:border-brand group-open:bg-brand group-open:text-white"><Plus size={18} className="transition-transform group-open:rotate-45" /></span>
            </summary>
            <p className="faq-answer pb-5 pr-12 text-sm leading-relaxed text-gray-500">
              Your payment is held in escrow until move-in is confirmed, and landlords can&apos;t access it before then.
            </p>
          </details>
          <details className="group border-b border-gray-100 last:border-b-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-semibold leading-snug [&::-webkit-details-marker]:hidden">
              How do I get verified as a landlord?
              <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-150 group-open:border-brand group-open:bg-brand group-open:text-white"><Plus size={18} className="transition-transform group-open:rotate-45" /></span>
            </summary>
            <p className="faq-answer pb-5 pr-12 text-sm leading-relaxed text-gray-500">
              List your property through the app and our team will contact you to schedule an in-person verification visit. There&apos;s no listing fee. After verification, your property goes live and is visible to students searching near your university.
            </p>
          </details>
          <details className="group border-b border-gray-100 last:border-b-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-semibold leading-snug [&::-webkit-details-marker]:hidden">
              Which universities are currently supported?
              <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-150 group-open:border-brand group-open:bg-brand group-open:text-white"><Plus size={18} className="transition-transform group-open:rotate-45" /></span>
            </summary>
            <p className="faq-answer pb-5 pr-12 text-sm leading-relaxed text-gray-500">
              We&apos;re expanding across Nigerian universities. Download the app to see where we&apos;re currently available.
            </p>
          </details>
          <details className="group border-b border-gray-100 last:border-b-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-semibold leading-snug [&::-webkit-details-marker]:hidden">
              Can I watch a video reel of a property before visiting?
              <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-150 group-open:border-brand group-open:bg-brand group-open:text-white"><Plus size={18} className="transition-transform group-open:rotate-45" /></span>
            </summary>
            <p className="faq-answer pb-5 pr-12 text-sm leading-relaxed text-gray-500">
              Yes. Listings include photos and video reels shot by our field team during the verification visit, so you can see the space and its surroundings before you visit.
            </p>
          </details>
          <details className="group border-b border-gray-100 last:border-b-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-semibold leading-snug [&::-webkit-details-marker]:hidden">
              Can parents or guardians book on behalf of a student?
              <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-150 group-open:border-brand group-open:bg-brand group-open:text-white"><Plus size={18} className="transition-transform group-open:rotate-45" /></span>
            </summary>
            <p className="faq-answer pb-5 pr-12 text-sm leading-relaxed text-gray-500">
              Yes. A parent or guardian can fund the booking and start the process while the student completes the move-in confirmation. Contact our support team in the app for help setting this up.
            </p>
          </details>
        </div>
      </Reveal>
    </section>
  );
}
