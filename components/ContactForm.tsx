"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const result: { success?: boolean; message?: string } = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        throw new Error(result.message || "We could not send your message. Please try again.");
      }

      form.reset();
      setStatus("success");
      setFeedback(result.message || "Your message has been sent.");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "We could not send your message. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wide text-gray-500">Full Name</label>
          <input id="fullName" name="fullName" type="text" required autoComplete="name" placeholder="Adaobi Okonkwo" className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/15" />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-gray-500">Email Address</label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="ada@university.edu.ng" className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/15" />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="university" className="block text-xs font-semibold uppercase tracking-wide text-gray-500">University</label>
        <select id="university" name="university" defaultValue="" className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/15">
          <option value="">Select your university (optional)</option>
          <option value="University of Lagos (UNILAG)">University of Lagos (UNILAG)</option>
          <option value="Obafemi Awolowo University (OAU)">Obafemi Awolowo University (OAU)</option>
          <option value="University of Ibadan (UI)">University of Ibadan (UI)</option>
          <option value="ABU Zaria">ABU Zaria</option>
          <option value="University of Benin (UNIBEN)">University of Benin (UNIBEN)</option>
          <option value="University of Nigeria, Nsukka (UNN)">University of Nigeria, Nsukka (UNN)</option>
          <option value="Covenant University">Covenant University</option>
          <option value="Babcock University">Babcock University</option>
          <option value="University of Port Harcourt (UNIPORT)">University of Port Harcourt (UNIPORT)</option>
          <option value="Lagos State University (LASU)">Lagos State University (LASU)</option>
          <option value="Other / Not listed">Other / Not listed</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wide text-gray-500">Subject</label>
        <select id="subject" name="subject" required defaultValue="" className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/15">
          <option value="">Select a topic</option>
          <option value="General enquiry">General enquiry</option>
          <option value="Listing my property">Listing my property</option>
          <option value="Student support">Student support</option>
          <option value="Partnership / investment">Partnership / investment</option>
          <option value="Press / media">Press / media</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide text-gray-500">Message</label>
        <textarea id="message" name="message" required rows={6} placeholder="Tell us what’s on your mind..." className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/15" />
      </div>

      <button type="submit" disabled={status === "sending"} className="mt-5 w-full rounded-xl bg-brand px-6 py-4 font-semibold text-white shadow-lg shadow-brand/20 transition-colors hover:bg-brand-dark disabled:cursor-wait disabled:opacity-60">
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {feedback && (
        <p role="status" aria-live="polite" className={`mt-3 text-center text-sm ${status === "error" ? "text-red-600" : "text-green-700"}`}>
          {feedback}
        </p>
      )}
    </form>
  );
}
