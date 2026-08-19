import type { Metadata } from "next";
import Image from "next/image";
import CtaDevis from "@/components/CtaDevis";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Stats from "@/components/Stats";
import { assetPath } from "@/lib/assets";
import {
  moyens,
  site,
  valeurs,
  zonesIntervention,
} from "@/lib/site";

const description =
  "Découvrez IdéalTP, topographe Dubréka et entreprise de travaux publics Guinée, ancrée à Khorira pour les levés, lotissements, implantations et chantiers.";

const histoire = [
  "IdéalTP s’est construite autour d’un besoin simple : donner aux porteurs de projets des bases terrain fiables avant de vendre, construire, aménager ou régulariser. La topographie reste le point de départ de cette approche, parce qu’un projet bien mesuré limite les incertitudes dès les premières décisions.",
  "Depuis Dubréka-Khorira, l’entreprise intervient au plus près des terrains, avec une attention particulière portée aux limites, aux altitudes, aux accès et aux contraintes visibles. Cette proximité permet de dialoguer avec les clients sur des éléments concrets, observés sur site et traduits dans des plans exploitables.",
  "Au fil des missions, l’activité s’est élargie de la mesure vers l’exécution : implantation d’ouvrages, suivi de plateformes, voirie, terrassement et contrôles de récolement. Cette continuité entre levé, plan et chantier aide les équipes à travailler avec des repères cohérents.",
  "IdéalTP accompagne des promoteurs, des entreprises de construction, des collectivités et des particuliers qui ont besoin de sécuriser un terrain ou de préparer une intervention. Les demandes varient, mais la méthode reste la même : comprendre le besoin, contrôler le terrain, produire des livrables clairs et suivre les points sensibles.",
  "Le client obtient des documents exploitables, un interlocuteur qui connaît le terrain et une continuité entre le levé, les plans et le suivi du chantier. Cette approche facilite les décisions techniques et limite les écarts entre le dossier préparé et l’exécution sur site.",
];

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `À propos de ${site.name}`,
  description,
  url: `${site.url}/a-propos`,
  mainEntity: {
    "@type": "ProfessionalService",
    name: site.name,
    telephone: site.phones[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Khorira",
      addressLocality: "Dubréka",
      addressCountry: "GN",
    },
    areaServed: ["Dubréka", "Guinée"],
  },
};

export const metadata: Metadata = {
  title: "À propos",
  description,
  openGraph: {
    title: `À propos | ${site.name}`,
    description,
    url: `${site.url}/a-propos`,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
  },
};

export default function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Une entreprise guinéenne, ancrée à Dubréka"
        intro="IdéalTP relie la précision topographique à l’exécution terrain pour accompagner les projets fonciers, bâtis et d’aménagement."
        image="/images/apropos-hero.jpg"
        imageAlt="Équipe IdéalTP sur un chantier de topographie et travaux publics en Guinée"
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "À propos" },
        ]}
      />

      <section className="section-gc bg-white">
        <div className="container-gc grid gap-10 xl:grid-cols-[1fr_1.6fr] xl:gap-24">
          <div className="xl:sticky xl:top-32 xl:self-start">
            <p className="eyebrow text-ink-500">Notre histoire</p>
            <h2 className="mt-5 max-w-2xl text-h2 font-semibold text-ink-900">
              Mesurer juste, puis accompagner le chantier
            </h2>
          </div>
          <div className="space-y-6 text-para-lg text-ink-600">
            {histoire.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gc bg-white">
        <div className="container-gc grid gap-10 xl:grid-cols-2 xl:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden bg-ink-900">
            <Image
              src={assetPath("/images/apropos.jpg")}
              alt="Technicien IdéalTP en intervention sur le terrain"
              fill
              sizes="(min-width: 1280px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="eyebrow text-ink-500">Ancrage local</p>
            <h2 className="mt-5 text-h2 font-semibold text-ink-900">
              Une lecture terrain adaptée aux réalités guinéennes
            </h2>
            <div className="mt-7 space-y-5 text-para text-ink-600 md:text-para-lg">
              <p>
                Les projets en Guinée demandent une bonne compréhension des accès,
                des limites existantes, des écoulements, des occupations voisines
                et des usages locaux du foncier.
              </p>
              <p>
                Depuis Dubréka-Khorira, IdéalTP intervient sur des terrains urbains,
                périurbains et ruraux, avec une méthode qui relie l’observation sur
                site, la mesure et la production de plans.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {zonesIntervention.map((zone) => (
                <li
                  key={zone}
                  className="border border-ink-200 px-4 py-2 text-para-xs font-semibold uppercase tracking-[0.12em] text-ink-600"
                >
                  {zone}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-para font-semibold text-ink-900">
              et partout en Guinée sur demande
            </p>
          </div>
        </div>
      </section>

      <section className="section-gc bg-sand">
        <div className="container-gc">
          <SectionHeader
            eyebrow="Nos valeurs"
            title="Ce qui guide nos interventions"
            intro="Les mêmes exigences accompagnent nos missions de mesure, de bornage, d’implantation et de travaux publics."
          />
          <ul className="grid gap-8 xl:grid-cols-3 xl:gap-10">
            {valeurs.map((valeur, index) => (
              <li key={valeur.title} className="border-t border-ink-200 pt-7">
                <span className="text-display font-semibold leading-none text-ink-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-h3 font-semibold text-ink-900">
                  {valeur.title}
                </h3>
                <p className="mt-4 text-para text-ink-600">{valeur.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-gc bg-ink-900 text-white">
        <div className="container-gc">
          <SectionHeader
            eyebrow="Nos moyens"
            title="Des ressources adaptées aux missions terrain"
            intro="Les moyens mobilisés varient selon la précision attendue, la taille du site et la nature du chantier."
            dark
          />
          <ul className="grid gap-8 xl:grid-cols-3 xl:gap-0">
            {moyens.map((groupe) => (
              <li
                key={groupe.titre}
                className="border-t border-white/15 pt-6 xl:border-l xl:border-t-0 xl:px-8 xl:first:border-l-0 xl:first:pl-0 xl:last:pr-0"
              >
                <h3 className="text-h3 font-semibold text-white">{groupe.titre}</h3>
                <ul className="mt-6 grid gap-4 text-para-s text-white/70">
                  {groupe.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-gc bg-white">
        <div className="container-gc">
          <SectionHeader
            eyebrow="Chiffres clés"
            title="Des repères sur l’activité terrain"
            intro="Ces indicateurs donnent un aperçu du volume de missions suivies par IdéalTP, du levé initial jusqu’à la réception du chantier."
          />
          <p className="mb-10 max-w-3xl text-para text-ink-600 md:mb-12 md:text-para-lg">
            Ils portent sur l’activité cumulée à ce jour : chantiers privés et
            institutionnels, terrains lotis et projets accompagnés du levé à la
            réception.
          </p>
          <Stats />
        </div>
      </section>

      <CtaDevis />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
    </>
  );
}
