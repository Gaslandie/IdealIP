"use client";

import { useEffect, useRef, useState } from "react";

type AnchorItem = {
  slug: string;
  num: string;
  title: string;
};

type Props = {
  items: AnchorItem[];
};

export default function AnchorNav({ items }: Props) {
  const [activeSlug, setActiveSlug] = useState(items[0]?.slug ?? "");
  const linkRefs = useRef(new Map<string, HTMLAnchorElement>());

  useEffect(() => {
    const sections = items
      .map(({ slug }) => document.getElementById(slug))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          setActiveSlug(visibleEntry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const activeLink = linkRefs.current.get(activeSlug);

    if (!activeLink) return;

    const nav = activeLink.closest("nav");
    const scroller = activeLink.closest("ul");

    if (!nav || !scroller) return;

    const navRect = nav.getBoundingClientRect();
    const scrollerRect = scroller.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();
    const navIsVisible = navRect.top >= 0 && navRect.bottom <= window.innerHeight;
    const linkIsVisible =
      linkRect.left >= scrollerRect.left && linkRect.right <= scrollerRect.right;

    if (!navIsVisible || linkIsVisible) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    activeLink.scrollIntoView({
      ...(reducedMotion ? {} : { behavior: "smooth" as const }),
      block: "nearest",
      inline: "center",
    });
  }, [activeSlug]);

  return (
    <nav
      aria-label="Sommaire"
      className="sticky top-(--header-h) z-30 border-b border-ink-100 bg-white"
    >
      <div className="container-gc">
        <ul className="no-scrollbar flex gap-8 overflow-x-auto py-4 text-para-xs font-semibold uppercase tracking-[0.12em] md:gap-12">
          {items.map((item) => {
            const active = item.slug === activeSlug;

            return (
              <li key={item.slug} className="shrink-0">
                <a
                  ref={(node) => {
                    if (node) {
                      linkRefs.current.set(item.slug, node);
                    } else {
                      linkRefs.current.delete(item.slug);
                    }
                  }}
                  href={`#${item.slug}`}
                  aria-current={active ? "location" : undefined}
                  className={`group inline-flex items-center gap-3 transition-colors duration-300 hover:text-ink-900 ${
                    active ? "text-ink-900" : "text-ink-500"
                  }`}
                >
                  <span aria-hidden="true" className="text-gold-500">
                    {item.num}
                  </span>
                  <span
                    className={`border-b pb-1 transition-colors duration-300 group-hover:border-gold-400 ${
                      active ? "border-gold-400" : "border-transparent"
                    }`}
                  >
                    {item.title}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
