import type { Metadata } from "next";
import Image from "next/image";
import AnchorNav from "@/components/AnchorNav";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import ArrowLink from "@/components/ArrowLink";
import RealisationsGrid from "@/components/RealisationsGrid";
import CtaDevis from "@/components/CtaDevis";
import { assetPath } from "@/lib/assets";
import { methode, services, site } from "@/lib/site";

const description =
  "Services de topographie Dubréka et lotissement Guinée, implantation, bornage et travaux publics pour sécuriser terrains, plans et chantiers avec méthode.";

export const metadata: Metadata = {
  title: "Nos services",
  description,
  openGraph: {
    title: `Nos services | ${site.name}`,
    description,
    url: `${site.url}/services`,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": services.map((service) => ({
    "@type": "Service",
    name: `${site.name} — ${service.title}`,
    description: service.excerpt,
    provider: {
      "@type": "ProfessionalService",
      name: site.name,
      url: site.url,
      telephone: site.phones[0],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubréka",
        addressCountry: "GN",
        streetAddress: "Khorira",
      },
    },
    areaServed: "Guinée",
    url: `${site.url}/services#${service.slug}`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title="Des prestations techniques pour sécuriser vos projets"
        intro="Topographie, lotissement, implantation et travaux publics : IdéalTP accompagne les terrains et chantiers guinéens avec des mesures fiables, des plans exploitables et un suivi clair."
        image="/images/hero.jpg"
        imageAlt="Pelle mécanique sur un chantier de terrassement IdéalTP en Guinée"
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Services" },
        ]}
      />

      <AnchorNav
        items={services.map(({ slug, num, title }) => ({ slug, num, title }))}
      />

      {services.map((service, index) => {
        const reverse = index % 2 === 1;
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`section-gc scroll-mt-[calc(var(--header-h)+4rem)] ${
              reverse ? "bg-sand" : "bg-white"
            }`}
          >
            <div className="container-gc">
              <div className="grid gap-10 xl:grid-cols-2 xl:gap-20">
                <Reveal
                  className={`relative min-h-[20rem] overflow-hidden bg-ink-900 md:min-h-[30rem] xl:min-h-[42rem] ${
                    reverse ? "xl:order-2" : ""
                  }`}
                >
                  <Image
                    src={assetPath(service.image)}
                    alt={`${service.title} IdéalTP sur chantier en Guinée`}
                    fill
                    sizes="(min-width: 1280px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.33,1,0.68,1)] hover:scale-[1.03]"
                  />
                </Reveal>

                <Reveal
                  delay={120}
                  className={`flex flex-col justify-center ${reverse ? "xl:order-1" : ""}`}
                >
                  <p className="text-display font-semibold leading-none text-ink-200">
                    {service.num}
                  </p>
                  <h2 className="mt-4 max-w-2xl text-h2 font-semibold">
                    {service.title}
                  </h2>
                  <div className="mt-7 space-y-5 text-para text-ink-600 md:text-para-lg">
                    {service.longText.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-10 grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="text-para-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                        Interventions
                      </h3>
                      <ul className="mt-5 grid gap-3 text-para-s text-ink-700 sm:grid-cols-2">
                        {service.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold-400" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-para-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                        Livrables
                      </h3>
                      <ul className="mt-5 grid gap-3 text-para-s text-ink-700">
                        {service.livrables.map((livrable) => (
                          <li key={livrable} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold-400" />
                            <span>{livrable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10">
                    <ArrowLink href="/contact">
                      Demander un devis pour ce service
                    </ArrowLink>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <section className="section-gc bg-ink-900 text-white">
        <div className="container-gc">
          <Reveal>
            <SectionHeader
              eyebrow="Notre méthode"
              title="Un déroulé clair, du besoin au suivi terrain"
              intro="Chaque mission suit une chaîne simple : comprendre le besoin, mesurer juste, produire des documents exploitables, puis accompagner le chantier lorsque c’est nécessaire."
              dark
            />
          </Reveal>
          <ol className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-0">
            {methode.map((step, index) => (
              <Reveal
                as="li"
                key={step.num}
                delay={index * 90}
                className="border-t border-white/15 pt-6 xl:border-l xl:border-t-0 xl:px-8 xl:first:border-l-0 xl:first:pl-0 xl:last:pr-0"
              >
                <span className="text-para-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                  {step.num}
                </span>
                <h3 className="mt-4 text-h3 font-semibold text-white">{step.title}</h3>
                <p className="mt-4 text-para-s text-white/70">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-gc bg-ink-50">
        <div className="container-gc">
          <Reveal>
            <SectionHeader
              eyebrow="Sur le terrain"
              title="Nos services en action"
              intro="Quelques missions représentatives des prestations menées à Dubréka, Conakry et dans le reste du pays."
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

      <CtaDevis />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
    </>
  );
}
