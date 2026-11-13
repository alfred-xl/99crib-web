import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import DownloadBanner from "@/components/DownloadBanner";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Contact Us",
  description: "Contact 99 Crib about student support, property listings, partnerships, or press. Reach our team by email or phone in Lagos, Nigeria.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand px-5 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white">
            <Mail aria-hidden="true" className="h-4 w-4" />
            Get in touch
          </p>
          <h1 className="mx-auto mt-6 text-4xl font-bold leading-tight lg:text-5xl">We&apos;d love to hear from you</h1>
          <p className="mx-auto mt-5 text-lg leading-relaxed text-white/80">
            Have a question about a listing, want to partner with us, or need support? Our team typically responds within one business day.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <Reveal>
            <h2 className="text-2xl font-bold leading-tight">Contact information</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              Reach out through any of the channels below, or use the form and we&apos;ll get back to you promptly.
            </p>

            <dl className="mt-6 space-y-6">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand">
                  <Mail aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">Email</dt>
                  <dd className="mt-0.5 font-medium"><a className="transition-colors hover:text-brand" href="mailto:support@99crib.com">support@99crib.com</a></dd>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand">
                  <Phone aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">Phone</dt>
                  <dd className="mt-0.5 font-medium"><a className="transition-colors hover:text-brand" href="tel:+2349060915430">+234 (0) 906 091 5430</a></dd>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand">
                  <MapPin aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">Office</dt>
                  <dd className="mt-0.5 font-medium">Lagos, Nigeria</dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 rounded-2xl bg-brand-light p-5">
              <p className="text-sm font-semibold">Are you a landlord or agent?</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                List your property for free through the 99 Crib app. Our team will contact you to schedule a physical verification visit and shoot your reels.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}><ContactForm /></Reveal>
        </div>
      </section>

      <DownloadBanner />
    </>
  );
}
