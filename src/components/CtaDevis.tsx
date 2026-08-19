import Image from "next/image";
import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import Reveal from "./Reveal";

export default function CtaDevis() {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-white">
      <div className="absolute inset-0 opacity-[0.18]">
        <Image src="/images/hero.jpg" alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div className="container-gc relative section-gc">
        <div className="grid gap-12 xl:grid-cols-[1.2fr_1fr] xl:gap-24">
          <Reveal>
            <p className="eyebrow text-gold-400">Parlons de votre projet</p>
            <h2 className="mt-5 max-w-2xl text-h2 font-semibold">
              Recevez un devis clair sous 48 heures
            </h2>
            <p className="mt-6 max-w-2xl text-para md:text-para-lg text-white/70">
              Décrivez-nous votre terrain et votre besoin — levé, bornage,
              implantation ou terrassement. Nous revenons vers vous avec un
              chiffrage détaillé et un délai d’intervention.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-4 bg-gold-400 px-8 py-4 text-para-s font-semibold uppercase tracking-[0.08em] text-ink-900 transition-colors duration-300 hover:bg-gold-300"
              >
                Demander un devis
                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5">
                  <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </Link>
              <a
                href={whatsappLink(`Bonjour ${site.name}, je souhaite un devis.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-white/25 px-8 py-4 text-para-s font-semibold uppercase tracking-[0.08em] transition-colors duration-300 hover:border-gold-400 hover:text-gold-400"
              >
                WhatsApp direct
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col justify-center gap-8">
            {[
              { label: "Téléphone", values: site.phones, href: (v: string) => `tel:${v.replace(/\s/g, "")}` },
              { label: "E-mail", values: [site.email], href: (v: string) => `mailto:${v}` },
              { label: "Adresse", values: [site.address] },
            ].map((block) => (
              <div key={block.label} className="border-t border-white/15 pt-5">
                <p className="text-para-xs uppercase tracking-[0.18em] text-white/45">
                  {block.label}
                </p>
                <ul className="mt-2 space-y-1 text-para-lg font-semibold">
                  {block.values.map((v) => (
                    <li key={v}>
                      {block.href ? (
                        <a href={block.href(v)} className="transition-colors hover:text-gold-400">
                          {v}
                        </a>
                      ) : (
                        <span className="font-normal text-white/70">{v}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
