import type { Metadata } from "next";
import ArrowLink from "@/components/ArrowLink";
import DevisForm from "@/components/DevisForm";
import PageHero from "@/components/PageHero";
import { site, whatsappLink } from "@/lib/site";

const description =
  "Demandez un devis topographie Dubréka avec IdéalTP : levé, bornage, lotissement, implantation et travaux publics en Guinée, réponse claire sous 48 h ouvrées.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  openGraph: {
    title: `Contact | ${site.name}`,
    description,
    url: `${site.url}/contact`,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
  },
};

const contactMessage = `Bonjour ${site.name}, je souhaite échanger au sujet d’un projet.`;

const steps = [
  {
    num: "01",
    title: "Vous décrivez votre besoin",
    text:
      "Indiquez la localisation du terrain, la prestation souhaitée et les contraintes déjà connues. Même une demande incomplète permet de préparer le premier échange.",
  },
  {
    num: "02",
    title: "Nous vous rappelons sous 48 h",
    text:
      "Un interlocuteur IdéalTP reprend les éléments, précise les accès, les délais et les livrables attendus avant de cadrer l’intervention terrain.",
  },
  {
    num: "03",
    title: "Vous recevez un devis détaillé",
    text:
      "Le devis précise la mission, les documents remis, le délai d’intervention et les conditions pratiques pour lancer le levé, le bornage ou les travaux.",
  },
];

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${site.name}`,
  description,
  url: `${site.url}/contact`,
  mainEntity: {
    "@type": "ProfessionalService",
    name: site.name,
    telephone: site.phones[0],
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Khorira",
      addressLocality: "Dubréka",
      addressCountry: "GN",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        size="compact"
        eyebrow="Contact"
        title="Parlons de votre terrain"
        intro="Décrivez votre besoin : IdéalTP vous répond avec les bonnes questions, les bons livrables et un devis clair."
        image="/images/hero.jpg"
        imageAlt="Pelle mécanique sur un chantier de terrassement IdéalTP en Guinée"
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="section-gc bg-white">
        <div className="container-gc grid gap-12 xl:grid-cols-[1.15fr_1fr] xl:gap-20">
          <div>
            <p className="eyebrow text-ink-500">Demande de devis</p>
            <h2 className="mt-5 text-h2 font-semibold text-ink-900">
              Envoyez les premières informations
            </h2>
            <p className="mt-6 max-w-3xl text-para text-ink-600 md:text-para-lg">
              Ces informations nous aident à comprendre le terrain, la prestation
              attendue et le délai souhaité avant de vous rappeler.
            </p>
            <div className="mt-8">
              <DevisForm />
            </div>
          </div>

          <aside className="xl:pt-20" aria-label="Coordonnées IdéalTP">
            <div className="border-t border-ink-100 py-7">
              <p className="eyebrow text-ink-500">Téléphone</p>
              <ul className="mt-4 space-y-2 text-para-lg text-ink-900">
                {site.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="transition-colors duration-300 hover:text-gold-600"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-ink-100 py-7">
              <p className="eyebrow text-ink-500">WhatsApp</p>
              <a
                href={whatsappLink(contactMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-para-lg text-ink-900 transition-colors duration-300 hover:text-gold-600"
              >
                Écrire sur WhatsApp
              </a>
            </div>

            <div className="border-t border-ink-100 py-7">
              <p className="eyebrow text-ink-500">E-mail</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-4 inline-block text-para-lg text-ink-900 transition-colors duration-300 hover:text-gold-600"
              >
                {site.email}
              </a>
            </div>

            <div className="border-t border-ink-100 py-7">
              <p className="eyebrow text-ink-500">Adresse</p>
              <p className="mt-4 text-para-lg text-ink-900">{site.address}</p>
              <ArrowLink href={site.mapsUrl} external className="mt-5">
                Ouvrir dans Google Maps
              </ArrowLink>
            </div>

            <div className="border-t border-ink-100 py-7">
              <p className="eyebrow text-ink-500">Horaires</p>
              <p className="mt-4 text-para-lg text-ink-900">{site.horaires}</p>
            </div>

            <div className="border-y border-ink-100 py-7">
              <p className="eyebrow text-ink-500">Facebook</p>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-para-lg text-ink-900 transition-colors duration-300 hover:text-gold-600"
              >
                Suivre IdéalTP
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-gc bg-sand">
        <div className="container-gc">
          <p className="eyebrow text-ink-500">Comment se passe une demande</p>
          <h2 className="mt-5 max-w-3xl text-h2 font-semibold text-ink-900">
            Trois étapes pour cadrer votre intervention
          </h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-0">
            {steps.map((step) => (
              <li
                key={step.num}
                className="border-t border-ink-200 pt-6 md:border-l md:border-t-0 md:px-8 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
              >
                <span className="text-para-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
                  {step.num}
                </span>
                <h3 className="mt-4 text-h3 font-semibold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-4 text-para-s text-ink-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink-900 text-white">
        <div className="container-gc grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-center md:py-12">
          <div>
            <p className="eyebrow text-gold-400">Contact direct</p>
            <h2 className="mt-5 text-h2 font-semibold">
              Besoin d’un échange rapide ?
            </h2>
            <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-para text-white/75">
              {site.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="transition-colors duration-300 hover:text-gold-400"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={whatsappLink(contactMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gold-400 px-8 py-4 text-para-s font-semibold uppercase tracking-[0.08em] text-ink-900 transition-colors duration-300 hover:bg-gold-300"
          >
            WhatsApp direct
          </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
    </>
  );
}
