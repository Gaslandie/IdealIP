"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/assets";

type LightboxImage = {
  src: string;
  alt: string;
};

type Props = {
  images: LightboxImage[];
};

const focusableSelector =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function Lightbox({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const shouldRestoreFocusRef = useRef(false);
  const open = currentIndex !== null;

  const showPrevious = useCallback(() => {
    setCurrentIndex((index) =>
      index === null ? index : (index - 1 + images.length) % images.length,
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setCurrentIndex((index) => (index === null ? index : (index + 1) % images.length));
  }, [images.length]);

  const close = useCallback(() => {
    shouldRestoreFocusRef.current = true;
    setCurrentIndex(null);
  }, []);

  useEffect(() => {
    if (open || !shouldRestoreFocusRef.current) return;

    shouldRestoreFocusRef.current = false;
    requestAnimationFrame(() => lastTriggerRef.current?.focus());
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusCloseButton = () => {
      const closeButton = dialogRef.current?.querySelector<HTMLButtonElement>(
        "[data-lightbox-close]",
      );
      closeButton?.focus();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
        return;
      }

      if (event.key !== "Tab") return;

      const dialog = dialogRef.current;
      if (!dialog) return;

      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(focusableSelector),
      ).filter((element) => !element.hasAttribute("disabled"));

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    requestAnimationFrame(focusCloseButton);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [close, open, showNext, showPrevious]);

  const currentImage = currentIndex === null ? null : images[currentIndex];

  return (
    <>
      <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {images.map((image, index) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={(event) => {
                lastTriggerRef.current = event.currentTarget;
                setCurrentIndex(index);
              }}
              className="group block w-full text-left"
            >
              <span className="relative block aspect-[4/3] overflow-hidden bg-ink-900">
                <Image
                  src={assetPath(image.src)}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-[1.03]"
                />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {open && currentImage && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-[80] flex flex-col bg-ink-900/95 p-4 text-white md:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <h2 id="lightbox-title" className="sr-only">
            Galerie photos
          </h2>

          <div className="flex items-center justify-between gap-4">
            <p className="text-para-xs font-semibold uppercase tracking-[0.16em] text-white/60">
              {currentIndex + 1} / {images.length}
            </p>
            <button
              type="button"
              data-lightbox-close
              onClick={close}
              aria-label="Fermer la galerie"
              className="flex h-12 w-12 items-center justify-center border border-white/20 text-white transition-colors duration-300 hover:border-gold-400 hover:text-gold-400"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-[auto_1fr_auto] items-center gap-3 py-4 md:gap-6 md:py-8">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Photo précédente"
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors duration-300 hover:border-gold-400 hover:text-gold-400 md:h-14 md:w-14"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M15 5 8 12l7 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="relative min-h-[16rem] overflow-hidden bg-ink-900 md:min-h-[32rem]">
              <Image
                src={assetPath(currentImage.src)}
                alt={currentImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label="Photo suivante"
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors duration-300 hover:border-gold-400 hover:text-gold-400 md:h-14 md:w-14"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="m9 5 7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
