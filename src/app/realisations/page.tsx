import type { Metadata } from "next";
import CtaDevis from "@/components/CtaDevis";
import PageHero from "@/components/PageHero";
import RealisationsFilter from "@/components/RealisationsFilter";
import { realisations, site } from "@/lib/site";

const description =
  "Réalisations IdéalTP en topographie, lotissement, implantation et travaux publics à Dubréka, Conakry, Coyah et en Guinée.";

export const metadata: Metadata = {
  title: "Réalisations",
  description,
  openGraph: {
    title: `Réalisations | ${site.name}`,
    description,
    url: `${site.url}/realisations`,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
  },
};

export default function RealisationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title="Des chantiers mesurés, implantés et livrés avec méthode"
        intro="Découvrez une sélection de missions menées par IdéalTP en topographie, lotissement, implantation et travaux publics sur des terrains guinéens."
        image="/images/hero.jpg"
        imageAlt="Pelle mécanique sur un chantier de terrassement IdéalTP en Guinée"
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Réalisations" },
        ]}
      />

      <RealisationsFilter
        items={realisations.map(
          ({ slug, title, category, location, year, cover, summary }) => ({
            slug,
            title,
            category,
            location,
            year,
            cover,
            summary,
          }),
        )}
      />

      <CtaDevis />
    </>
  );
}
