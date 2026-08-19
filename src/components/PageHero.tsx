import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assets";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  breadcrumb: BreadcrumbItem[];
  size?: "default" | "compact";
};

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  breadcrumb,
  size = "default",
}: Props) {
  const minHeight = size === "compact" ? "min-h-[46svh]" : "min-h-[70svh]";

  return (
    <section
      className={`relative flex ${minHeight} flex-col justify-end overflow-hidden bg-ink-900 pt-(--header-h)`}
    >
      <Image
        src={assetPath(image)}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/50 to-ink-900/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900/85 via-ink-900/40 to-transparent" />

      <div className="container-gc relative pb-14 pt-24 md:pb-20 xl:pb-24">
        <nav aria-label="Fil d’Ariane" className="mb-8 text-para-xs uppercase tracking-[0.16em] text-white/55">
          <ol className="flex flex-wrap items-center gap-3">
            {breadcrumb.map((item, index) => (
              <li key={item.label} className="flex items-center gap-3">
                {index > 0 && <span className="h-px w-5 bg-white/30" aria-hidden="true" />}
                {item.href ? (
                  <Link href={item.href} className="transition-colors duration-300 hover:text-gold-400">
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current="page">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <p className="eyebrow text-gold-400">{eyebrow}</p>
        <h1 className="mt-6 max-w-[18ch] text-display font-semibold text-white">
          {title}
        </h1>
        <p className="mt-7 max-w-3xl text-para-lg text-white/75">{intro}</p>
      </div>
    </section>
  );
}
