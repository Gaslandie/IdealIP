import Link from "next/link";
import { nav, site, whatsappLink } from "@/lib/site";
import Logo from "./Logo";

const legal = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/confidentialite" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white print:hidden">
      <div className="container-gc py-14 md:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 xl:grid-cols-4">
          <div className="xl:col-span-2">
            <Logo light />
            <p className="mt-6 max-w-sm text-para-s text-white/60">
              {site.baseline}. Topographie, lotissement, implantation et travaux
              publics depuis {site.city}.
            </p>
            <a
              href={whatsappLink(`Bonjour ${site.name},`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-gold-400 px-6 py-3.5 text-para-s font-semibold uppercase tracking-[0.08em] text-ink-900 transition-colors duration-300 hover:bg-gold-300"
            >
              Discuter sur WhatsApp
            </a>
          </div>

          <nav aria-label="Pied de page">
            <p className="eyebrow text-gold-400">Navigation</p>
            <ul className="mt-6 space-y-3 text-para-s">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 transition-colors duration-300 hover:text-gold-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-gold-400">Contact</p>
            <ul className="mt-6 space-y-3 text-para-s text-white/70">
              {site.phones.map((p) => (
                <li key={p}>
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-gold-400">
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-gold-400">
                  {site.email}
                </a>
              </li>
              <li className="pt-2 text-white/50">{site.address}</li>
            </ul>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Page Facebook IdéalTP"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center border border-white/20 transition-colors duration-300 hover:border-gold-400 hover:text-gold-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.12-2.41-.12-2.39 0-4.03 1.46-4.03 4.14V9.9H7.5V13h2.76v8h3.24Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-para-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Tous droits réservés.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
