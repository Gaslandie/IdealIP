"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/assets";
import { services } from "@/lib/site";

/** Rail horizontal à défilement — motif « commodities » de glencore.com. */
export default function ServicesRail() {
  const railRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    update();
    const el = railRef.current;
    el?.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.clientWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <ul
        ref={railRef}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:-mx-10 md:px-10 xl:-mx-20 xl:px-20"
      >
        {services.map((s) => (
          <li
            key={s.slug}
            className="w-[80vw] shrink-0 snap-start sm:w-[22rem] xl:w-[26rem]"
          >
            <Link
              href={`/services#${s.slug}`}
              className="group flex h-full flex-col bg-ink-50 transition-colors duration-400 hover:bg-ink-900"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-ink-900">
                <Image
                  src={assetPath(s.image)}
                  alt={`IdéalTP — ${s.title}`}
                  fill
                  sizes="(min-width: 1280px) 26rem, (min-width: 640px) 22rem, 80vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
                />
                <span className="absolute left-0 top-0 bg-gold-400 px-4 py-2 text-para-xs font-bold tracking-[0.12em] text-ink-900">
                  {s.num}
                </span>
              </div>

              <div className="flex flex-grow flex-col p-6 md:p-8">
                <h3 className="text-h3 font-semibold transition-colors duration-400 group-hover:text-white">
                  {s.title}
                </h3>
                <p className="mt-4 flex-grow text-para-s text-ink-600 transition-colors duration-400 group-hover:text-white/70">
                  {s.excerpt}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="border border-ink-200 px-3 py-1 text-para-xs uppercase tracking-[0.08em] text-ink-500 transition-colors duration-400 group-hover:border-white/20 group-hover:text-white/60"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
                <span className="mt-7 inline-flex items-center gap-3 text-para-s font-semibold transition-colors duration-400 group-hover:text-gold-400">
                  En savoir plus
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 transition-transform duration-400 group-hover:translate-x-1.5">
                    <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Contrôles du rail (desktop) */}
      <div className="mt-8 hidden justify-end gap-3 md:flex">
        {([-1, 1] as const).map((dir) => (
          <button
            key={dir}
            type="button"
            onClick={() => scrollBy(dir)}
            disabled={dir === -1 ? !canPrev : !canNext}
            aria-label={dir === -1 ? "Service précédent" : "Service suivant"}
            className="flex h-12 w-12 items-center justify-center border border-ink-200 transition-colors duration-300 hover:border-gold-400 hover:bg-gold-400 disabled:pointer-events-none disabled:opacity-30"
          >
            <svg viewBox="0 0 16 16" fill="none" className={`h-4 w-4 ${dir === -1 ? "rotate-180" : ""}`}>
              <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
