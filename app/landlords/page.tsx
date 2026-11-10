import DownloadBanner from "@/components/DownloadBanner";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "List a Property",
  description: "List student accommodation for free on 99 Crib. Learn how property verification, photos, video reels, and move-in payment work.",
  path: "/landlords",
});

export default function LandlordsPage() {
  return (
    <>
      <section className="bg-brand px-5 py-20 text-center text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold text-white/85">For landlords</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">List your property for free</h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/85">
            Reach students searching near your university, with no listing fees or upfront costs.
          </p>
          <a href="#download" className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-brand">
            Get the App
          </a>
        </div>
      </section>

      <section className="bg-white px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold">How listing works</h2>
          <ol className="mt-10 max-w-3xl space-y-10">
            <li className="flex gap-5">
              <span className="shrink-0 font-bold text-brand">01</span>
              <div>
                <h3 className="font-bold">List your property for free</h3>
                <p className="mt-2 text-gray-500">Download the app and submit your property details. There are no listing fees or upfront costs. Our team will contact you to schedule a visit.</p>
              </div>
            </li>
            <li className="flex gap-5">
              <span className="shrink-0 font-bold text-brand">02</span>
              <div>
                <h3 className="font-bold">Our team visits, verifies, and shoots your reels</h3>
                <p className="mt-2 text-gray-500">A 99 Crib field agent visits your property, confirms the details match your listing, shoots photos and video reels, and completes our 3-point verification.</p>
              </div>
            </li>
            <li className="flex gap-5">
              <span className="shrink-0 font-bold text-brand">03</span>
              <div>
                <h3 className="font-bold">Get discovered by students</h3>
                <p className="mt-2 text-gray-500">Your verified listing is shown to students searching near your university.</p>
              </div>
            </li>
            <li className="flex gap-5">
              <span className="shrink-0 font-bold text-brand">04</span>
              <div>
                <h3 className="font-bold">Get paid securely once the tenant moves in</h3>
                <p className="mt-2 text-gray-500">Funds are released from escrow once move-in is confirmed.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section id="faq" className="bg-section px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold">Landlord FAQ</h2>
          <div className="mt-10 max-w-3xl">
            <details className="group border-b border-gray-100">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 font-semibold [&::-webkit-details-marker]:hidden">
                How do I get verified as a landlord?
                <span aria-hidden="true" className="inline-block shrink-0 text-2xl font-normal leading-none text-brand group-open:rotate-45">+</span>
              </summary>
              <p className="pb-6 text-gray-500">List your property through the app and our team will contact you to schedule an in-person verification visit.</p>
            </details>
            <details className="group border-b border-gray-100">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 font-semibold [&::-webkit-details-marker]:hidden">
                Does it cost anything to list?
                <span aria-hidden="true" className="inline-block shrink-0 text-2xl font-normal leading-none text-brand group-open:rotate-45">+</span>
              </summary>
              <p className="pb-6 text-gray-500">No. There are no listing fees or upfront costs.</p>
            </details>
            <details className="group border-b border-gray-100">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 font-semibold [&::-webkit-details-marker]:hidden">
                Who shoots the photos and videos?
                <span aria-hidden="true" className="inline-block shrink-0 text-2xl font-normal leading-none text-brand group-open:rotate-45">+</span>
              </summary>
              <p className="pb-6 text-gray-500">A 99 Crib field agent shoots photos and video reels during the verification visit.</p>
            </details>
            <details className="group border-b border-gray-100">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 font-semibold [&::-webkit-details-marker]:hidden">
                When do I get paid?
                <span aria-hidden="true" className="inline-block shrink-0 text-2xl font-normal leading-none text-brand group-open:rotate-45">+</span>
              </summary>
              <p className="pb-6 text-gray-500">Funds are released from escrow once move-in is confirmed.</p>
            </details>
          </div>
        </div>
      </section>

      <DownloadBanner />
    </>
  );
}
