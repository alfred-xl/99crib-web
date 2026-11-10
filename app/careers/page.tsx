import type { Metadata } from "next";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <section className="bg-white px-5 py-24 text-center">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold">Careers at 99 Crib</h1>
        <p className="mt-6 text-gray-500">
          Interested in working with us? Email <a href="mailto:support@99crib.com" className="underline">support@99crib.com</a> and tell us how you&apos;d like to help.
        </p>
      </div>
    </section>
  );
}
