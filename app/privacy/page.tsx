import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "99 Crib Privacy Policy. The full policy is being prepared.",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-5 text-center">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
    </div>
  );
}
