"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, ImageOff, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type GalleryImage = { url: string; caption: string };

export default function ListingGallery({ images, property, noPhotoNote }: { images: GalleryImage[]; property: string; noPhotoNote?: string }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const previousRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const selected = images[selectedIndex];

  function showRelative(offset: number) {
    setSelectedIndex((index) => (index + offset + images.length) % images.length);
  }

  function openLightbox(index: number, trigger: HTMLElement) {
    triggerRef.current = trigger;
    setSelectedIndex(index);
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }

  useEffect(() => {
    if (!lightboxOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setLightboxOpen(false);
        requestAnimationFrame(() => triggerRef.current?.focus());
      } else if (event.key === "ArrowLeft") {
        setSelectedIndex((index) => (index - 1 + images.length) % images.length);
      } else if (event.key === "ArrowRight") {
        setSelectedIndex((index) => (index + 1) % images.length);
      } else if (event.key === "Tab") {
        const controls = [closeRef.current, previousRef.current, nextRef.current].filter((item): item is HTMLButtonElement => Boolean(item));
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxOpen, images.length]);

  if (images.length === 0) {
    return (
      <section aria-label={`${property} photos`} className="mt-8">
        <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-3xl bg-brand-light px-6 text-center text-brand sm:aspect-[16/9] lg:aspect-[2/1]">
          <ImageOff aria-hidden="true" size={42} strokeWidth={1.5} />
          <p className="text-lg font-semibold">Photos coming soon</p>
          {noPhotoNote && <p className="max-w-md text-sm text-gray-600">{noPhotoNote}</p>}
        </div>
      </section>
    );
  }

  return (
    <section aria-label={`${property} photos`} className="mt-8">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100 sm:aspect-[16/9] lg:aspect-[2/1]">
        <button
          type="button"
          onClick={(event) => openLightbox(selectedIndex, event.currentTarget)}
          aria-label={`Open photo ${selectedIndex + 1} of ${images.length}: ${selected.caption}`}
          className="relative block h-full w-full cursor-zoom-in"
        >
          <Image src={selected.url} alt={selected.caption} fill priority={selectedIndex === 0} className="object-cover" sizes="(min-width: 1280px) 80vw, 100vw" />
        </button>
        <span className="absolute bottom-4 left-4 rounded-full bg-black/65 px-3 py-1.5 text-sm text-white">
          {selectedIndex + 1} / {images.length}
        </span>
        {images.length > 1 && <div className="absolute bottom-4 right-4 flex gap-2">
          <button type="button" onClick={() => showRelative(-1)} aria-label="Previous photo" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy shadow-sm transition-colors hover:bg-brand-light">
            <ChevronLeft aria-hidden="true" size={20} />
          </button>
          <button type="button" onClick={() => showRelative(1)} aria-label="Next photo" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy shadow-sm transition-colors hover:bg-brand-light">
            <ChevronRight aria-hidden="true" size={20} />
          </button>
        </div>}
      </div>
      <div className="mt-3 flex gap-3 overflow-x-auto pb-2" aria-label="Open a photo">
        {images.map((image, index) => (
          <button
            key={image.url}
            type="button"
            onClick={(event) => openLightbox(index, event.currentTarget)}
            aria-label={`Open photo ${index + 1}: ${image.caption}`}
            className={`relative h-20 w-24 shrink-0 overflow-hidden rounded-xl border-2 sm:h-24 sm:w-32 ${selectedIndex === index ? "border-brand" : "border-transparent"}`}
          >
            <Image src={image.url} alt="" fill className="object-cover" sizes="128px" />
          </button>
        ))}
      </div>
      {noPhotoNote && <p className="mt-2 text-sm text-gray-600">{noPhotoNote}</p>}
      <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-gray-500"><Expand aria-hidden="true" size={15} /> Select a photo to view it full size</p>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          onClick={(event) => { if (event.target === event.currentTarget) closeLightbox(); }}
        >
          <div role="dialog" aria-modal="true" aria-label={`${property} photo ${selectedIndex + 1} of ${images.length}`} className="relative flex h-full w-full max-w-6xl flex-col items-center justify-center">
            <button ref={closeRef} type="button" onClick={closeLightbox} aria-label="Close photo viewer" className="absolute right-0 top-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25">
              <X aria-hidden="true" size={24} />
            </button>
            <div className="relative h-[60vh] w-full sm:h-[75vh]">
              <Image src={selected.url} alt={selected.caption} fill className="object-contain" sizes="100vw" />
            </div>
            <p className="mt-4 text-center text-sm text-white/80">{selected.caption} · {selectedIndex + 1} of {images.length}</p>
            {images.length > 1 && <div className="mt-5 flex gap-4">
              <button ref={previousRef} type="button" onClick={() => showRelative(-1)} aria-label="Previous photo" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25">
                <ChevronLeft aria-hidden="true" size={24} />
              </button>
              <button ref={nextRef} type="button" onClick={() => showRelative(1)} aria-label="Next photo" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25">
                <ChevronRight aria-hidden="true" size={24} />
              </button>
            </div>}
          </div>
        </div>
      )}
    </section>
  );
}
