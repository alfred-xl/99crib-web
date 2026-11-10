import type { Metadata } from "next";

export const metadata: Metadata = { title: "Cookie Policy", robots: { index: false } };

export default function CookiesPage() {
  return (
    <section className="bg-white px-5 py-24 text-center">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold">Cookie Policy</h1>
        <p className="mt-6 text-gray-500">
          We&apos;re finalising our Cookie Policy. If you have a question in the meantime, contact us at <a href="mailto:support@99crib.com" className="underline">support@99crib.com</a>.
        </p>
      </div>
    </section>
  );
}
