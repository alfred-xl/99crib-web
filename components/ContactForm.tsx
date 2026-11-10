"use client";

import type { FormEvent } from "react";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fullName = String(formData.get("fullName") ?? "");
    const email = String(formData.get("email") ?? "");
    const university = String(formData.get("university") ?? "");
    const subject = String(formData.get("subject") ?? "");
    const message = String(formData.get("message") ?? "");

    const emailSubject = `${subject} from ${fullName}`;
    const emailBody = `Name: ${fullName}\nEmail: ${email}\nUniversity: ${university}\nMessage: ${message}`;
    window.location.href = `mailto:support@99crib.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold uppercase text-gray-500">Full Name</label>
          <input id="fullName" name="fullName" type="text" required autoComplete="name" placeholder="Adaobi Okonkwo" className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold uppercase text-gray-500">Email Address</label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="ada@university.edu.ng" className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="university" className="block text-sm font-semibold uppercase text-gray-500">University</label>
        <select id="university" name="university" defaultValue="" className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20">
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

      <div className="mt-6">
        <label htmlFor="subject" className="block text-sm font-semibold uppercase text-gray-500">Subject</label>
        <select id="subject" name="subject" required defaultValue="" className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20">
          <option value="">Select a topic</option>
          <option value="General enquiry">General enquiry</option>
          <option value="Listing my property">Listing my property</option>
          <option value="Student support">Student support</option>
          <option value="Partnership / investment">Partnership / investment</option>
          <option value="Press / media">Press / media</option>
        </select>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-semibold uppercase text-gray-500">Message</label>
        <textarea id="message" name="message" required rows={6} placeholder="Tell us what’s on your mind..." className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
      </div>

      <button type="submit" className="mt-6 w-full rounded-xl bg-brand px-6 py-4 text-lg font-semibold text-white shadow-lg shadow-brand/20 hover:bg-brand-dark">
        Send Message
      </button>
      <p className="mt-3 text-center text-sm text-gray-500">
        This opens your email app with your message filled in. Send it from there.
      </p>
    </form>
  );
}
