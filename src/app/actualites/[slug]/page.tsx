import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArrowLink from "@/components/ArrowLink";
import CtaDevis from "@/components/CtaDevis";
import PageHero from "@/components/PageHero";
import { actualites, site } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const getActualite = (slug: string) =>
  actualites.find((actualite) => actualite.slug === slug);

export function generateStaticParams() {
  return actualites.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const actualite = getActualite(slug);

  if (!actualite) {
    return {
      title: "Actualité introuvable",
    };
  }

  return {
    title: actualite.title,
    description: actualite.excerpt,
    openGraph: {
      title: `${actualite.title} | ${site.name}`,
      description: actualite.excerpt,
      url: `${site.url}/actualites/${actualite.slug}`,
      siteName: site.name,
      locale: "fr_FR",
      type: "article",
    },
  };
}

export default async function ActualitePage({ params }: PageProps) {
  const { slug } = await params;
  const actualite = getActualite(slug);

  if (!actualite) {
    notFound();
  }

  return (
    <>
      <PageHero
        size="compact"
        eyebrow={actualite.category}
        title={actualite.title}
        intro={actualite.excerpt}
        image="/images/hero.jpg"
        imageAlt="Pelle mécanique sur un chantier de terrassement IdéalTP en Guinée"
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Actualités", href: "/actualites" },
          { label: actualite.title },
        ]}
      />

      <article className="section-gc bg-white">
        <div className="container-gc">
          <div className="max-w-3xl">
            <p className="eyebrow text-ink-500">{actualite.category}</p>
            <time
              dateTime={actualite.dateISO}
              className="mt-5 block text-para-xs font-semibold uppercase tracking-[0.16em] text-gold-500"
            >
              {actualite.date}
            </time>
            <p className="mt-8 text-para-lg text-ink-600">{actualite.excerpt}</p>
            <ArrowLink href="/actualites" className="mt-10">
              Toutes les actualités
            </ArrowLink>
          </div>
        </div>
      </article>

      <CtaDevis />
    </>
  );
}
