import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import ServicesRail from "@/components/ServicesRail";
import Stats from "@/components/Stats";
import RealisationsGrid from "@/components/RealisationsGrid";
import ArrowLink from "@/components/ArrowLink";
import CtaDevis from "@/components/CtaDevis";
import { actualites, site, valeurs } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />

      {/* — Déclaration d'intention (motif « purpose statement » de Glencore) — */}
      <section className="section-gc">
        <div className="container-gc">
          <Reveal>
            <p className="eyebrow text-ink-500">Qui nous sommes</p>
            <p className="mt-8 max-w-5xl text-[clamp(1.5rem,1.05rem+2vw,2.5rem)] font-semibold leading-[1.25] tracking-[-0.03em]">
              Nous mesurons le terrain avec exactitude pour que vos projets se
              construisent sans mauvaise surprise —{" "}
              <span className="text-ink-400">
                du premier levé topographique jusqu’à la réception du chantier.
              </span>
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 grid gap-10 border-t border-ink-100 pt-10 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-3xl text-para md:text-para-lg text-ink-600">
                Basée à {site.city}, IdéalTP intervient pour les promoteurs
                immobiliers, les entreprises de construction, les collectivités et les
                particuliers partout en Guinée. Nos équipes associent instruments
                calibrés, méthode rigoureuse et connaissance fine du terrain guinéen.
              </p>
              <ArrowLink href="/a-propos">Notre histoire</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* — Services — */}
      <section className="section-gc overflow-clip bg-sand">
        <div className="container-gc">
          <Reveal>
            <SectionHeader
              eyebrow="Ce que nous faisons"
              title="Quatre métiers, une seule exigence : la précision"
              intro="De l’étude au chantier livré, nous couvrons l’ensemble de la chaîne technique. Chaque prestation est documentée et livrée avec des plans exploitables."
              linkHref="/services"
              linkLabel="Tous nos services"
            />
          </Reveal>
          <Reveal delay={100}>
            <ServicesRail />
          </Reveal>
          <div className="mt-10 md:hidden">
            <ArrowLink href="/services">Tous nos services</ArrowLink>
          </div>
        </div>
      </section>

      {/* — À propos + chiffres clés — */}
      <section className="section-gc">
        <div className="container-gc">
          <div className="grid gap-12 xl:grid-cols-2 xl:gap-20">
            <Reveal className="relative min-h-[24rem] overflow-hidden bg-ink-900 xl:min-h-[34rem]">
              <Image
                src="/images/apropos.jpg"
                alt="Pelle mécanique travaillant sur un chantier de terrassement"
                fill
                sizes="(min-width: 1280px) 50vw, 100vw"
                className="object-cover"
              />
              <span className="absolute bottom-0 left-0 bg-gold-400 px-6 py-4 text-para-s font-semibold uppercase tracking-[0.1em] text-ink-900">
                Dubréka — Khorira
              </span>
            </Reveal>

            <Reveal delay={120} className="flex flex-col justify-center">
              <p className="eyebrow text-ink-500">Notre approche</p>
              <h2 className="mt-5 text-h2 font-semibold">
                Un terrain bien mesuré, c’est un projet qui tient
              </h2>
              <p className="mt-6 text-para md:text-para-lg text-ink-600">
                Une erreur de bornage ou d’implantation coûte cher : litiges
                fonciers, reprises de fondations, retards de chantier. Notre travail
                consiste à supprimer ce risque en amont, avec des relevés contrôlés et
                des documents opposables.
              </p>
              <ul className="mt-10 space-y-6">
                {valeurs.map((v) => (
                  <li key={v.title} className="border-t border-ink-100 pt-6">
                    <h3 className="flex items-center gap-3 text-h3 font-semibold">
                      <span className="h-1.5 w-1.5 shrink-0 bg-gold-400" />
                      {v.title}
                    </h3>
                    <p className="mt-2 text-para-s text-ink-600">{v.text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="mt-20 border-t border-ink-100 pt-14 md:mt-28">
            <Stats />
          </Reveal>
        </div>
      </section>

      {/* — Réalisations — */}
      <section className="section-gc bg-ink-50">
        <div className="container-gc">
          <Reveal>
            <SectionHeader
              eyebrow="Sur le terrain"
              title="Nos réalisations"
              intro="Des chantiers menés à Dubréka, Conakry et dans le reste du pays. Chaque projet est documenté par nos équipes."
              linkHref="/realisations"
              linkLabel="Toutes les réalisations"
            />
          </Reveal>
          <Reveal delay={100}>
            <RealisationsGrid />
          </Reveal>
          <div className="mt-10 md:hidden">
            <ArrowLink href="/realisations">Toutes les réalisations</ArrowLink>
          </div>
        </div>
      </section>

      {/* — Actualités — */}
      <section className="section-gc">
        <div className="container-gc">
          <Reveal>
            <SectionHeader
              eyebrow="Actualités"
              title="La vie d’IdéalTP"
              linkHref="/actualites"
              linkLabel="Toutes les actualités"
            />
          </Reveal>
          <ul className="grid gap-8 md:grid-cols-3 xl:gap-10">
            {actualites.map((a, i) => (
              <Reveal as="li" key={a.slug} delay={i * 90}>
                <Link href={`/actualites/${a.slug}`} className="group flex h-full flex-col">
                  <span className="flex items-center gap-3 border-t-2 border-ink-900 pt-5 text-para-xs uppercase tracking-[0.16em] text-ink-500 transition-colors duration-300 group-hover:border-gold-400">
                    <time dateTime={a.dateISO}>{a.date}</time>
                    <span className="h-px w-5 bg-ink-300" />
                    {a.category}
                  </span>
                  <h3 className="mt-4 text-h3 font-semibold transition-colors duration-300 group-hover:text-gold-600">
                    {a.title}
                  </h3>
                  <p className="mt-3 flex-grow text-para-s text-ink-600">{a.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-3 text-para-s font-semibold">
                    Lire la suite
                    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5">
                      <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* — Appel à l'action / devis — */}
      <CtaDevis />
    </>
  );
}
