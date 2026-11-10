import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "99 Crib Terms of Service. The full terms are being prepared.",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-5 text-center">
      <h1 className="text-4xl font-bold">Terms of Service</h1>
    </div>
  );
}
