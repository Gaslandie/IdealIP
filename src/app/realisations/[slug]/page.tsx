import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArrowLink from "@/components/ArrowLink";
import CtaDevis from "@/components/CtaDevis";
import Lightbox from "@/components/Lightbox";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { realisations, services, site, type Service } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const splitParagraphs = (text: string) => text.split("\n\n");

const getRealisation = (slug: string) =>
  realisations.find((realisation) => realisation.slug === slug);

export function generateStaticParams() {
  return realisations.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const realisation = getRealisation(slug);

  if (!realisation) {
    return {
      title: "Réalisation introuvable",
    };
  }

  return {
    title: realisation.title,
    description: realisation.summary,
    openGraph: {
      title: `${realisation.title} | ${site.name}`,
      description: realisation.summary,
      url: `${site.url}/realisations/${realisation.slug}`,
      siteName: site.name,
      locale: "fr_FR",
      type: "article",
      images: [
        {
          url: realisation.cover,
          width: 2000,
          height: 1125,
          alt: `${realisation.title} — ${realisation.location}`,
        },
      ],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const index = realisations.findIndex((realisation) => realisation.slug === slug);

  if (index === -1) {
    notFound();
  }

  const realisation = realisations[index];
  const previous = realisations[(index - 1 + realisations.length) % realisations.length];
  const next = realisations[(index + 1) % realisations.length];
  const linkedServices = realisation.servicesSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is Service => Boolean(service));

  const facts = [
    { label: "Catégorie", value: realisation.category },
    { label: "Lieu", value: realisation.location },
    { label: "Année", value: realisation.year },
    { label: "Surface", value: realisation.surface },
    { label: "Durée", value: realisation.duree },
  ].filter((fact) => fact.value);

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: realisation.title,
    description: realisation.summary,
    image: realisation.cover,
    url: `${site.url}/realisations/${realisation.slug}`,
    creator: {
      "@type": "ProfessionalService",
      name: site.name,
      url: site.url,
    },
    locationCreated: realisation.location,
    dateCreated: realisation.year,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Réalisations",
        item: `${site.url}/realisations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: realisation.title,
        item: `${site.url}/realisations/${realisation.slug}`,
      },
    ],
  };

  return (
    <>
      <PageHero
        eyebrow={realisation.category}
        title={realisation.title}
        intro={realisation.summary}
        image={realisation.cover}
        imageAlt={`${realisation.title} à ${realisation.location}`}
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Réalisations", href: "/realisations" },
          { label: realisation.title },
        ]}
      />

      <section className="border-b border-ink-100 bg-white">
        <div className="container-gc">
          <dl className="grid md:grid-cols-5">
            {facts.map((fact, factIndex) => (
              <div
                key={fact.label}
                className={`border-t border-ink-100 py-6 md:border-t-0 md:px-6 md:first:pl-0 md:last:pr-0 ${
                  factIndex > 0 ? "md:border-l" : ""
                }`}
              >
                <dt className="mt-2 text-para-xs font-semibold uppercase tracking-[0.16em] text-ink-400">
                  {fact.label}
                </dt>
                <dd className="text-para-lg font-semibold text-ink-900">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-gc bg-white">
        <div className="container-gc">
          <div className="max-w-3xl">
            <SectionHeader eyebrow="Contexte" title="La demande et le terrain" />
            <div className="space-y-5 text-para text-ink-600 md:text-para-lg">
              {splitParagraphs(realisation.contexte).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-gc bg-sand">
        <div className="container-gc">
          <div className="max-w-3xl">
            <SectionHeader eyebrow="Mission" title="L’intervention IdéalTP" />
            <div className="space-y-5 text-para text-ink-600 md:text-para-lg">
              {splitParagraphs(realisation.mission).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-gc bg-white">
        <div className="container-gc">
          <div className="max-w-3xl">
            <SectionHeader eyebrow="Résultat" title="Ce que le client a obtenu" />
            <div className="space-y-5 text-para text-ink-600 md:text-para-lg">
              {splitParagraphs(realisation.resultat).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-gc bg-ink-50">
        <div className="container-gc">
          <SectionHeader
            eyebrow="Galerie photos"
            title="Le chantier en images"
            intro="Repères terrain, étapes d’intervention et vues utiles à la compréhension du projet."
          />
          <Lightbox
            images={realisation.gallery.map((image, galleryIndex) => ({
              src: image,
              alt: `${realisation.title} — photo ${galleryIndex + 1}`,
            }))}
          />
        </div>
      </section>

      <section className="section-gc bg-white">
        <div className="container-gc">
          <SectionHeader
            eyebrow="Services mobilisés"
            title="Les compétences engagées sur ce chantier"
          />
          <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {linkedServices.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group block border border-ink-100 p-6 transition-colors duration-300 hover:border-gold-400"
                >
                  <span className="text-para-xs font-semibold uppercase tracking-[0.16em] text-gold-500">
                    {service.num}
                  </span>
                  <span className="mt-3 block text-h3 font-semibold text-ink-900 transition-colors duration-300 group-hover:text-gold-600">
                    {service.title}
                  </span>
                  <span className="mt-3 block text-para-s text-ink-600">
                    {service.excerpt}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-ink-100 bg-white">
        <div className="container-gc grid gap-6 py-8 md:grid-cols-2 md:py-10">
          <ArrowLink href={`/realisations/${previous.slug}`}>
            Chantier précédent
          </ArrowLink>
          <div className="md:text-right">
            <ArrowLink href={`/realisations/${next.slug}`}>Chantier suivant</ArrowLink>
          </div>
        </div>
      </section>

      <CtaDevis />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
