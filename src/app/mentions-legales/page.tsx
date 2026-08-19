import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${site.name}.`,
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        size="compact"
        eyebrow="Informations légales"
        title="Mentions légales"
        intro="Informations relatives à l'éditeur du site et à son hébergement."
        image="/images/hero.jpg"
        imageAlt="Pelle mécanique sur un chantier de terrassement IdéalTP en Guinée"
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Mentions légales" },
        ]}
      />

      <section className="section-gc bg-white">
        <div className="container-gc">
          <div className="grid gap-10 xl:grid-cols-[1fr_1.6fr] xl:gap-24">
            <div>
              <p className="eyebrow text-ink-500">Éditeur</p>
              <h2 className="mt-5 text-h2 font-semibold text-ink-900">
                {site.legalName}
              </h2>
            </div>
            <div className="space-y-8 text-para text-ink-600 md:text-para-lg">
              <div>
                <h3 className="text-h3 font-semibold text-ink-900">Coordonnées</h3>
                <p className="mt-3">{site.address}</p>
                <p className="mt-2">{site.email}</p>
                <ul className="mt-2 space-y-1">
                  {site.phones.map((phone) => (
                    <li key={phone}>{phone}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-h3 font-semibold text-ink-900">
                  Responsable de publication
                </h3>
                <p className="mt-3">{site.name}</p>
              </div>
              <div>
                <h3 className="text-h3 font-semibold text-ink-900">Hébergement</h3>
                <p className="mt-3">GitHub Pages, service édité par GitHub, Inc.</p>
              </div>
              <div>
                <h3 className="text-h3 font-semibold text-ink-900">
                  Propriété intellectuelle
                </h3>
                <p className="mt-3">
                  Les textes, visuels, logos et éléments graphiques présents sur ce
                  site sont destinés à la présentation de {site.name}. Toute reprise
                  doit respecter les droits de leur titulaire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
