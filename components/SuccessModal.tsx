"use client";

import { useEffect, useId, useRef } from "react";
import { Check, X } from "lucide-react";

// Confirmation pop-up shown after a form is sent (contact form, footer subscribe form).
// Uses the browser's own <dialog>, which keeps keyboard focus inside the pop-up and closes
// on Esc. Clicking the dark area around it also closes it.
export default function SuccessModal({ open, title, message, onClose }: { open: boolean; title: string; message: string; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const doneRef = useRef<HTMLButtonElement>(null);
  const id = useId(); // the contact page shows two of these (contact form + footer)

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      doneRef.current?.focus(); // so Enter closes it, instead of focus landing on the X
    }
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(event) => { if (event.target === ref.current) onClose(); }}
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-message`}
      className="success-modal m-auto w-[calc(100%-2rem)] max-w-sm rounded-2xl bg-white p-0 text-navy shadow-2xl backdrop:bg-navy/60"
    >
      <div className="relative px-6 pb-6 pt-10 text-center">
        <button type="button" onClick={onClose} aria-label="Close" className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-navy">
          <X aria-hidden="true" size={18} />
        </button>
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-light text-brand">
          <Check aria-hidden="true" size={30} strokeWidth={2.5} />
        </span>
        <h2 id={`${id}-title`} className="mt-5 text-xl font-bold">{title}</h2>
        <p id={`${id}-message`} className="mt-2 text-sm leading-relaxed text-gray-600">{message}</p>
        <button ref={doneRef} type="button" onClick={onClose} className="mt-6 w-full rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark">
          Done
        </button>
      </div>
    </dialog>
  );
}
