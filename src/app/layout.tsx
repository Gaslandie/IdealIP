import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Topographie, lotissement et travaux publics à Dubréka`,
    template: `%s | ${site.name}`,
  },
  description:
    "IdéalTP, entreprise de topographie, lotissement, implantation et travaux publics basée à Dubréka – Khorira (Guinée). La précision au service de vos projets.",
  keywords: [
    "topographe Dubréka",
    "topographie Guinée",
    "lotissement Guinée",
    "bornage Dubréka",
    "implantation bâtiment Conakry",
    "travaux publics Guinée",
    "géomètre Dubréka",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.baseline}`,
    description:
      "Topographie, lotissement, implantation et travaux publics à Dubréka – Khorira, Guinée.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a09",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description:
    "Topographie, lotissement, implantation et travaux publics à Dubréka – Khorira, Guinée.",
  slogan: site.baseline,
  url: site.url,
  email: site.email,
  telephone: site.phones[0],
  areaServed: "Guinée",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubréka",
    addressRegion: "Kindia",
    addressCountry: "GN",
    streetAddress: "Khorira",
  },
  sameAs: [site.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <body className="font-sans antialiased">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink-900 focus:px-5 focus:py-3 focus:text-para-s focus:font-semibold focus:text-white"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
