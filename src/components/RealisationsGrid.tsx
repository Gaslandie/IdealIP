import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assets";
import { realisations } from "@/lib/site";

/**
 * Grille d'images pleine hauteur avec légende en surimpression basse —
 * reprise du bloc « Insights / imagery » de glencore.com.
 */
export default function RealisationsGrid() {
  return (
    <ul className="grid gap-2 md:grid-cols-2 md:gap-4 xl:gap-6">
      {realisations.map((r, i) => (
        <li
          key={r.slug}
          className={`group relative min-h-[22rem] overflow-hidden bg-ink-900 md:min-h-[26rem] xl:min-h-[32rem] ${
            i === 0 ? "md:col-span-2 xl:min-h-[36rem]" : ""
          }`}
        >
          <Link href={`/realisations/${r.slug}`} className="absolute inset-0">
            <Image
              src={assetPath(r.cover)}
              alt={`${r.title} — ${r.location}`}
              fill
              sizes={i === 0 ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
              className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-[1.06]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/25 to-transparent" />
            <span className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <span className="flex items-center gap-3 text-para-xs uppercase tracking-[0.16em] text-gold-400">
                {r.category}
                <span className="h-px w-6 bg-gold-400/60" />
                {r.year}
              </span>
              <span className="mt-3 block max-w-xl text-h3 font-semibold text-white">
                {r.title}
              </span>
              <span className="mt-2 flex items-center gap-2 text-para-s text-white/70">
                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
                  <path
                    d="M8 14s5-4.4 5-8A5 5 0 0 0 3 6c0 3.6 5 8 5 8Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <circle cx="8" cy="6" r="1.8" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                {r.location}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
