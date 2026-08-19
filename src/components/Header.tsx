"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site, whatsappLink } from "@/lib/site";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Le header est transparent au-dessus du hero, puis devient plein.
  const DARK_HERO_ROUTES = ["/", "/services", "/realisations", "/a-propos"];
  const hasDarkHero = DARK_HERO_ROUTES.includes(pathname);
  const solid = scrolled || !hasDarkHero || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setOpen(false));
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex h-(--header-h) items-stretch transition-colors duration-400 ease-[cubic-bezier(0.33,1,0.68,1)] ${
          solid ? "bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.08)]" : "bg-transparent"
        }`}
      >
        <div className="flex flex-grow items-center pl-4 md:pl-10">
          <Link href="/" aria-label={`${site.name} — accueil`} className="inline-block">
            <Logo light={!solid} />
          </Link>
        </div>

        {/* Navigation desktop */}
        <nav aria-label="Navigation principale" className="hidden xl:block">
          <ul
            className={`flex h-full items-center text-para-s uppercase tracking-[0.08em] ${
              solid ? "text-ink-900" : "text-white"
            }`}
          >
            {nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href} className="mx-5 h-full">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex h-full items-center border-b-2 transition-colors duration-300 hover:border-gold-400 ${
                      active ? "border-gold-400" : "border-transparent"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Boutons carrés — motif Glencore */}
        <Link
          href="/contact"
          className="ml-5 hidden h-full w-auto items-center justify-center bg-gold-400 px-8 text-para-s font-semibold uppercase tracking-[0.08em] text-ink-900 transition-colors duration-300 hover:bg-gold-300 md:flex"
        >
          Demander un devis
        </Link>
        <a
          href={whatsappLink(`Bonjour ${site.name}, je souhaite un devis.`)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nous écrire sur WhatsApp"
          className="flex aspect-square h-full items-center justify-center bg-ink-800 text-white transition-colors duration-300 hover:bg-ink-700"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 md:h-6 md:w-6">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.66.31-.23.24-.87.85-.87 2.07s.89 2.4 1.02 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.47-.29Z" />
          </svg>
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex aspect-square h-full items-center justify-center bg-ink-900 text-white transition-colors duration-300 hover:bg-ink-700"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-current transition-transform duration-300 ${
                open ? "top-1/2 rotate-45" : "top-0.5"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-current transition-transform duration-300 ${
                open ? "top-1/2 -rotate-45" : "bottom-0.5"
              }`}
            />
          </span>
        </button>
      </header>

      {/* Menu plein écran */}
      <div
        id="menu-principal"
        hidden={!open}
        className={`fixed inset-0 z-40 bg-white pt-(--header-h) transition-opacity duration-400 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="container-gc h-full overflow-y-auto pb-16 pt-10 md:pt-16">
          <p className="eyebrow text-ink-500">Menu</p>
          <ul className="mt-8 grid gap-x-16 border-t border-ink-100 md:grid-cols-2">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-ink-100">
                <Link
                  href={item.href}
                  className="group flex items-baseline gap-5 py-5 text-h2 font-semibold tracking-[-0.025em] transition-colors duration-300 hover:text-gold-600 md:py-7"
                >
                  <span
                    aria-hidden="true"
                    className="text-para-xs font-semibold text-ink-300"
                  >
                    {String(nav.indexOf(item) + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-8 text-para-s md:grid-cols-3">
            <div>
              <p className="eyebrow text-ink-500">Téléphone</p>
              <ul className="mt-4 space-y-1">
                {site.phones.map((p) => (
                  <li key={p}>
                    <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-gold-600">
                      {p}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-ink-500">E-mail</p>
              <a href={`mailto:${site.email}`} className="mt-4 block hover:text-gold-600">
                {site.email}
              </a>
            </div>
            <div>
              <p className="eyebrow text-ink-500">Adresse</p>
              <p className="mt-4 text-ink-600">{site.address}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
