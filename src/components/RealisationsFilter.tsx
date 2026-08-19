"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { assetPath } from "@/lib/assets";
import type { Realisation } from "@/lib/site";

type Props = {
  items: Pick<
    Realisation,
    "slug" | "title" | "category" | "location" | "year" | "cover" | "summary"
  >[];
};

type Filter = "Tous" | Realisation["category"];

export default function RealisationsFilter({ items }: Props) {
  const [activeFilter, setActiveFilter] = useState<Filter>("Tous");
  const [displayFilter, setDisplayFilter] = useState<Filter>("Tous");
  const [fading, setFading] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const categories = useMemo(
    () => Array.from(new Set(items.map((item) => item.category))),
    [items],
  );

  const filters = useMemo(
    () => [
      { label: "Tous" as Filter, count: items.length },
      ...categories.map((category) => ({
        label: category,
        count: items.filter((item) => item.category === category).length,
      })),
    ],
    [categories, items],
  );

  const visibleItems = useMemo(
    () =>
      displayFilter === "Tous"
        ? items
        : items.filter((item) => item.category === displayFilter),
    [displayFilter, items],
  );

  const announcedCount = useMemo(
    () =>
      activeFilter === "Tous"
        ? items.length
        : items.filter((item) => item.category === activeFilter).length,
    [activeFilter, items],
  );

  useEffect(
    () => () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    },
    [],
  );

  const updateFilter = (filter: Filter) => {
    if (filter === activeFilter) return;

    setActiveFilter(filter);

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setDisplayFilter(filter);
      setFading(false);
      return;
    }

    setFading(true);
    timeoutRef.current = window.setTimeout(() => {
      setDisplayFilter(filter);
      requestAnimationFrame(() => setFading(false));
      timeoutRef.current = null;
    }, 180);
  };

  return (
    <>
      <div className="sticky top-(--header-h) z-30 border-b border-ink-100 bg-white">
        <div className="container-gc">
          <div
            role="group"
            aria-label="Filtrer par catégorie"
            className="no-scrollbar flex gap-3 overflow-x-auto py-4"
          >
            {filters.map((filter) => {
              const active = filter.label === activeFilter;

              return (
                <button
                  key={filter.label}
                  type="button"
                  aria-pressed={active}
                  onClick={() => updateFilter(filter.label)}
                  className={`shrink-0 border px-5 py-3 text-para-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                    active
                      ? "border-ink-900 bg-ink-900 text-white"
                      : "border-ink-200 text-ink-600 hover:border-ink-900 hover:text-ink-900"
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <section className="section-gc bg-white">
        <div className="container-gc">
          <p aria-live="polite" className="sr-only">
            {announcedCount}{" "}
            {announcedCount > 1
              ? "réalisations affichées"
              : "réalisation affichée"}
          </p>

          <div
            className={`transition-opacity duration-300 ${
              fading ? "opacity-0" : "opacity-100"
            }`}
          >
            {visibleItems.length > 0 ? (
              <ul className="grid gap-8 md:grid-cols-2 xl:gap-10">
                {visibleItems.map((item) => (
                  <li key={item.slug} className="transition-opacity duration-300">
                    <Link href={`/realisations/${item.slug}`} className="group block">
                      <span className="relative block aspect-[4/3] overflow-hidden bg-ink-900">
                        <Image
                          src={assetPath(item.cover)}
                          alt={`${item.title} — ${item.location}`}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-[1.03]"
                        />
                      </span>

                      <span className="mt-6 flex items-center gap-3 text-para-xs font-semibold uppercase tracking-[0.16em] text-gold-500">
                        {item.category}
                        <span className="h-px w-6 bg-gold-400/60" aria-hidden="true" />
                        {item.year}
                      </span>
                      <span className="mt-3 block text-h3 font-semibold text-ink-900 transition-colors duration-300 group-hover:text-gold-600">
                        {item.title}
                      </span>
                      <span className="mt-3 block max-w-2xl text-para text-ink-600">
                        {item.summary}
                      </span>
                      <span className="mt-5 flex items-center gap-2 text-para-s text-ink-500">
                        <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
                          <path
                            d="M8 14s5-4.4 5-8A5 5 0 0 0 3 6c0 3.6 5 8 5 8Z"
                            stroke="currentColor"
                            strokeWidth="1.2"
                          />
                          <circle
                            cx="8"
                            cy="6"
                            r="1.8"
                            stroke="currentColor"
                            strokeWidth="1.2"
                          />
                        </svg>
                        {item.location}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="border border-ink-100 bg-ink-50 p-8 text-para text-ink-600">
                Aucune réalisation ne correspond à ce filtre.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
