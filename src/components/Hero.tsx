import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assets";
import { site } from "@/lib/site";
import Arrow from "./Arrow";

export default function Hero() {
  return (
    <section className="relative flex min-h-[max(100svh,36rem)] flex-col justify-end overflow-hidden bg-ink-900 pt-(--header-h)">
      <Image
        src={assetPath("/images/hero.jpg")}
        alt="Pelle mécanique sur un chantier de terrassement"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Voiles de lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/45 to-ink-900/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900/85 via-ink-900/40 to-transparent" />

      <div className="container-gc relative pb-14 md:pb-20 xl:pb-24">
        <p className="eyebrow text-gold-400">
          {site.city} — {site.country}
        </p>

        <h1 className="mt-6 max-w-[22ch] text-display font-semibold text-white md:max-w-[16ch]">
          Mesurer<span className="text-gold-400">.</span> Implanter
          <span className="text-gold-400">.</span> Construire l’avenir
          <span className="text-gold-400">.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-para md:text-para-lg text-white/75">
          Topographie, lotissement, implantation et travaux publics. Depuis Dubréka,
          IdéalTP accompagne promoteurs, entreprises et institutions avec des relevés
          justes et des chantiers tenus.
        </p>

        <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-4 bg-gold-400 px-8 py-4 text-para-s font-semibold uppercase tracking-[0.08em] text-ink-900 transition-colors duration-300 hover:bg-gold-300"
          >
            Demander un devis
            <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5">
              <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </Link>
          <Link
            href="/services"
            className="group inline-flex items-center gap-4 text-para-s font-semibold text-white"
          >
            <span className="border-b border-white/30 transition-colors duration-300 group-hover:border-gold-400">
              Découvrir nos services
            </span>
            <Arrow className="border-white/30 text-white group-hover:text-ink-900" />
          </Link>
        </div>
      </div>

      {/* Bandeau bas : devise + indicateur de scroll */}
      <div className="relative border-t border-white/15">
        <div className="container-gc flex items-center justify-between py-4 md:py-5">
          <p className="text-para-xs uppercase tracking-[0.18em] text-white/60">
            {site.baseline}
          </p>
          <span aria-hidden="true" className="hidden items-center gap-3 text-white/50 md:flex">
            <span className="text-para-xs uppercase tracking-[0.18em]">Défiler</span>
            <svg viewBox="0 0 16 24" fill="none" className="h-6 w-4 animate-bounce">
              <path d="M8 2v18M3 15l5 5 5-5" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}
