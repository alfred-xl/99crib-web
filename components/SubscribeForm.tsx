"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import SuccessModal from "@/components/SuccessModal";

// Footer newsletter sign-up.
// The site is a static export, so (like the contact form) this posts to a small PHP file,
// public/api/subscribe.php, which saves the address to a private file on the server.
export default function SubscribeForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/subscribe.php", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const result: { success?: boolean; message?: string } = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        throw new Error(result.message || "We could not subscribe you. Please try again.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error && error.message !== "Failed to fetch" ? error.message : "We could not subscribe you. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="footer-website">Website</label>
        <input id="footer-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <label htmlFor="footer-email" className="sr-only">Email address</label>
      <div className="flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row">
        <input
          id="footer-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Enter your email"
          className="min-w-0 flex-1 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-brand focus:ring-2 focus:ring-brand/40"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? "Subscribing..." : <>Subscribe <ArrowRight aria-hidden="true" size={16} /></>}
        </button>
      </div>
      <p className={`mt-3 text-xs leading-relaxed ${status === "error" ? "text-red-400" : "text-white/50"}`} aria-live="polite">
        {status === "error" && feedback ? feedback : "No spam. Unsubscribe anytime by emailing support@99crib.com."}
      </p>
      <SuccessModal
        open={status === "success"}
        title="You're subscribed"
        message="Thanks for joining. New verified listings and campus housing tips will land in your inbox."
        onClose={() => setStatus("idle")}
      />
    </form>
  );
}
