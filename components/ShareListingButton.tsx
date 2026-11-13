"use client";

import { Check, Share2 } from "lucide-react";
import { useState } from "react";

export default function ShareListingButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  async function shareListing() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // Closing the native share dialog does not need a visible error.
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      window.prompt("Copy this listing link:", url);
    }
  }

  return (
    <button type="button" onClick={shareListing} className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 font-semibold text-navy transition-colors hover:border-brand/30 hover:text-brand">
      {copied ? <Check aria-hidden="true" size={18} /> : <Share2 aria-hidden="true" size={18} />}
      {copied ? "Link copied" : "Share"}
    </button>
  );
}
