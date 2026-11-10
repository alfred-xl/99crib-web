import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-5 text-center">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
    </div>
  );
}
