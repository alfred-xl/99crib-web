import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Careers",
  description: "Interested in working with 99 Crib? Contact the team to tell us how you would like to help make student accommodation safer.",
  path: "/careers",
});

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
