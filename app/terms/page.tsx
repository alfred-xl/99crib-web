import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-5 text-center">
      <h1 className="text-4xl font-bold">Terms of Service</h1>
    </div>
  );
}
