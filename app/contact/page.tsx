import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import DownloadBanner from "@/components/DownloadBanner";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand px-5 py-20 text-center text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-medium text-white">
            <Mail aria-hidden="true" className="h-4 w-4" />
            Get in touch
          </p>
          <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">We&apos;d love to hear from you</h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            Have a question about a listing, want to partner with us, or need support? Our team typically responds within one business day.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold">Contact information</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Reach out through any of the channels below, or use the form and we&apos;ll get back to you promptly.
            </p>

            <dl className="mt-8 space-y-7">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand">
                  <Mail aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-sm font-semibold uppercase text-gray-500">Email</dt>
                  <dd className="mt-1 text-lg font-semibold"><a className="hover:text-brand" href="mailto:support@99crib.com">support@99crib.com</a></dd>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand">
                  <Phone aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-sm font-semibold uppercase text-gray-500">Phone</dt>
                  <dd className="mt-1 text-lg font-semibold"><a className="hover:text-brand" href="tel:+2349060915430">+234 (0) 906 091 5430</a></dd>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand">
                  <MapPin aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-sm font-semibold uppercase text-gray-500">Office</dt>
                  <dd className="mt-1 text-lg font-semibold">Lagos, Nigeria</dd>
                </div>
              </div>
            </dl>

            <div className="mt-10 rounded-2xl bg-brand-light p-6">
              <p className="text-lg font-bold">Are you a landlord or agent?</p>
              <p className="mt-3 leading-relaxed text-gray-500">
                List your property for free through the 99 Crib app. Our team will contact you to schedule a physical verification visit and shoot your reels.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <DownloadBanner />
    </>
  );
}
