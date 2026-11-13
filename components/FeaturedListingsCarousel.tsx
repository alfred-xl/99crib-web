"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, type ReactNode } from "react";

export default function FeaturedListingsCarousel({ children, label = "Featured listings" }: { children: ReactNode; label?: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
  const [selectedSnap, setSelectedSnap] = useState(0);
  const [snapCount, setSnapCount] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const updateControls = () => {
      setSelectedSnap(emblaApi.selectedScrollSnap());
      setSnapCount(emblaApi.scrollSnapList().length);
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    updateControls();
    emblaApi.on("select", updateControls);
    emblaApi.on("reInit", updateControls);

    return () => {
      emblaApi.off("select", updateControls);
      emblaApi.off("reInit", updateControls);
    };
  }, [emblaApi]);

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="-ml-5 flex touch-pan-y touch-pinch-zoom">{children}</div>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-gray-200" aria-hidden="true">
          <div
            className="h-full rounded-full bg-brand"
            style={{ width: snapCount ? `${((selectedSnap + 1) / snapCount) * 100}%` : "0%" }}
          />
        </div>
        <button
          type="button"
          aria-label="Previous listings"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
          className="rounded-full border border-gray-200 bg-white p-2 text-navy disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft aria-hidden="true" size={20} />
        </button>
        <button
          type="button"
          aria-label="Next listings"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
          className="rounded-full border border-gray-200 bg-white p-2 text-navy disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight aria-hidden="true" size={20} />
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        {snapCount ? `Position ${selectedSnap + 1} of ${snapCount}` : ""}
      </p>
    </div>
  );
}
