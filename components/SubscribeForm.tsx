"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

// Footer newsletter sign-up.
// The site is a static export with no backend, so (like the contact form) this opens the
// visitor's email app with a subscribe request to support@99crib.com.
// To use a newsletter service later (Mailchimp, Brevo, etc.), replace the mailto line with a
// fetch() to that service's sign-up endpoint.
export default function SubscribeForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get("email") ?? "").trim();
    const subject = "Subscribe me to 99 Crib updates";
    const body = `Please add ${email} to the 99 Crib mailing list.`;
    window.location.href = `mailto:support@99crib.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
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
          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Subscribe <ArrowRight aria-hidden="true" size={16} />
        </button>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-white/50" aria-live="polite">
        {sent ? "Your email app should open. Send the message to finish subscribing." : "Opens your email app to confirm. No spam, unsubscribe anytime."}
      </p>
    </form>
  );
}
