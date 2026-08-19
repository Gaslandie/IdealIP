import type { Metadata } from "next";
import Link from "next/link";
import CtaDevis from "@/components/CtaDevis";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { actualites, site } from "@/lib/site";

const description =
  "Actualités IdéalTP : équipements, chantiers et vie de l'entreprise autour de la topographie, du lotissement et des travaux publics en Guinée.";

export const metadata: Metadata = {
  title: "Actualités",
  description,
  openGraph: {
    title: `Actualités | ${site.name}`,
    description,
    url: `${site.url}/actualites`,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
  },
};

export default function ActualitesPage() {
  return (
    <>
      <PageHero
        size="compact"
        eyebrow="Actualités"
        title="La vie d'IdéalTP"
        intro="Équipements, chantiers livrés et nouvelles de l'entreprise sur le terrain."
        image="/images/hero.jpg"
        imageAlt="Pelle mécanique sur un chantier de terrassement IdéalTP en Guinée"
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Actualités" },
        ]}
      />

      <section className="section-gc bg-white">
        <div className="container-gc">
          <SectionHeader
            eyebrow="Articles"
            title="Dernières nouvelles"
            intro="Retrouvez les informations publiées par IdéalTP sur ses moyens, ses missions et son activité."
          />

          <ul className="grid gap-8 md:grid-cols-3 xl:gap-10">
            {actualites.map((actualite) => (
              <li key={actualite.slug}>
                <Link
                  href={`/actualites/${actualite.slug}`}
                  className="group flex h-full flex-col border-t-2 border-ink-900 pt-5"
                >
                  <span className="flex items-center gap-3 text-para-xs uppercase tracking-[0.16em] text-ink-500">
                    <time dateTime={actualite.dateISO}>{actualite.date}</time>
                    <span className="h-px w-5 bg-ink-300" aria-hidden="true" />
                    {actualite.category}
                  </span>
                  <h2 className="mt-4 text-h3 font-semibold text-ink-900 transition-colors duration-300 group-hover:text-gold-600">
                    {actualite.title}
                  </h2>
                  <p className="mt-3 flex-grow text-para-s text-ink-600">
                    {actualite.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-3 text-para-s font-semibold">
                    Lire la suite
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                      aria-hidden="true"
                    >
                      <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaDevis />
    </>
  );
}
