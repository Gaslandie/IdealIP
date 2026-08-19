import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité du site ${site.name}.`,
};

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero
        size="compact"
        eyebrow="Confidentialité"
        title="Politique de confidentialité"
        intro="Informations sur les données personnelles et les liens de contact proposés par le site."
        image="/images/hero.jpg"
        imageAlt="Pelle mécanique sur un chantier de terrassement IdéalTP en Guinée"
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Politique de confidentialité" },
        ]}
      />

      <section className="section-gc bg-white">
        <div className="container-gc">
          <div className="grid gap-10 xl:grid-cols-[1fr_1.6fr] xl:gap-24">
            <div>
              <p className="eyebrow text-ink-500">Données personnelles</p>
              <h2 className="mt-5 text-h2 font-semibold text-ink-900">
                Un site de présentation et de contact
              </h2>
            </div>
            <div className="space-y-8 text-para text-ink-600 md:text-para-lg">
              <div>
                <h3 className="text-h3 font-semibold text-ink-900">
                  Formulaire de contact
                </h3>
                <p className="mt-3">
                  Le formulaire prépare un message à envoyer par WhatsApp ou par
                  e-mail. Les informations saisies ne sont pas stockées sur le site.
                </p>
              </div>
              <div>
                <h3 className="text-h3 font-semibold text-ink-900">
                  Cookies et mesure d’audience
                </h3>
                <p className="mt-3">
                  Le site ne dépose pas de cookie de mesure d’audience et n’utilise
                  pas de service d’analyse tiers.
                </p>
              </div>
              <div>
                <h3 className="text-h3 font-semibold text-ink-900">Liens externes</h3>
                <p className="mt-3">
                  Les liens vers WhatsApp, Facebook, Google Maps ou votre logiciel
                  de messagerie ouvrent des services externes soumis à leurs propres
                  règles de confidentialité.
                </p>
              </div>
              <div>
                <h3 className="text-h3 font-semibold text-ink-900">Contact</h3>
                <p className="mt-3">
                  Pour toute demande liée aux données personnelles, contactez{" "}
                  {site.name} à l’adresse {site.email}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
