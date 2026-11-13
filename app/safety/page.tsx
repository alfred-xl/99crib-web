import DownloadBanner from "@/components/DownloadBanner";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Safety & Verification",
  description: "Learn how 99 Crib checks properties in person and protects student rent payments until move-in is confirmed.",
  path: "/safety",
});

export default function SafetyPage() {
  return (
    <>
      <section className="bg-brand px-5 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold text-white/85">Safety and verification</p>
          <h1 className="mt-6 text-4xl font-bold leading-tight lg:text-5xl">How we work to keep you safe</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            Our team visits listings in person, and your payment stays in escrow until move-in is confirmed.
          </p>
        </div>
      </section>

      <section id="verification" className="bg-white px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold leading-tight lg:text-4xl">Our 3-point verification</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-bold">It exists</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">A member of our field team visits the property and confirms it exists at the stated address.</p>
            </div>
            <div className="rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-bold">It matches</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">We check that the property matches its photos, videos and description.</p>
            </div>
            <div className="rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-bold">It meets our standards</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">We confirm it meets our minimum safety and habitability standards.</p>
            </div>
          </div>
          <p className="mt-8 text-gray-500">Only after passing all three checks does a listing go live.</p>
        </div>
      </section>

      <section className="bg-section px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold leading-tight lg:text-4xl">How your payment is protected</h2>
          <p className="mt-5 text-gray-500">
            Your payment is held in escrow until move-in is confirmed, and landlords can&apos;t access it before then.
          </p>
          <h2 className="mt-12 text-3xl font-bold leading-tight lg:text-4xl">If something isn&apos;t right</h2>
          <p className="mt-5 text-gray-500">
            Don&apos;t confirm move-in. If anything doesn&apos;t match, such as the condition, size or amenities, raise it with our support team. Your payment stays in escrow while we help resolve the issue.
          </p>
        </div>
      </section>

      <DownloadBanner />
    </>
  );
}
