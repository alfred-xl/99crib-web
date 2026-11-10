import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Press" };

export default function PressPage() {
  return (
    <section className="bg-white px-5 py-24 text-center">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold">Press</h1>
        <p className="mt-6 text-gray-500">
          For press and media enquiries, email <a href="mailto:support@99crib.com" className="underline">support@99crib.com</a> or use our <Link href="/contact" className="underline">contact page</Link>.
        </p>
      </div>
    </section>
  );
}
