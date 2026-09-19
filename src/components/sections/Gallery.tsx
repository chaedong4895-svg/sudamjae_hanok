"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { GalleryContent } from "@/content/types";
import { SectionHeading, Section } from "../ui";

export function Gallery({ gallery }: { gallery: GalleryContent }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + gallery.items.length) % gallery.items.length)),
    [gallery.items.length]
  );
  const showNext = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % gallery.items.length)),
    [gallery.items.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, showPrev, showNext]);

  const active = openIndex !== null ? gallery.items[openIndex] : null;

  return (
    <Section id="gallery" className="py-20 lg:py-28">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-border mb-10">
        <SectionHeading eyebrow={gallery.eyebrow} title={gallery.title} />
        <p className="font-sans text-xs text-brown tracking-wider uppercase">{gallery.hint}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gallery.items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="relative group aspect-[4/3] overflow-hidden bg-surface text-left"
            aria-label={item.caption}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-background font-serif text-sm">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] bg-primary/95 backdrop-blur-md flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-5 right-5 text-background hover:text-border transition-colors font-sans text-sm flex items-center gap-1"
          >
            <span aria-hidden="true">✕</span>
            <span>닫기 · Close</span>
          </button>
          <button
            type="button"
            onClick={showPrev}
            className="absolute left-2 sm:left-6 text-background/80 hover:text-background text-3xl px-2"
            aria-label="이전 사진"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={showNext}
            className="absolute right-2 sm:right-6 text-background/80 hover:text-background text-3xl px-2"
            aria-label="다음 사진"
          >
            ›
          </button>
          <div className="relative max-w-4xl w-full aspect-[4/3]">
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
          <p className="absolute bottom-6 text-background font-serif text-sm text-center w-full px-4">
            {active.caption}
          </p>
        </div>
      )}
    </Section>
  );
}
