import ArrowLink from "./ArrowLink";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  linkHref?: string;
  linkLabel?: string;
  dark?: boolean;
};

/**
 * En-tête de section : titre à gauche, lien « voir tout » aligné en pied de
 * titre à droite — même composition que les sections de glencore.com.
 */
export default function SectionHeader({
  eyebrow,
  title,
  intro,
  linkHref,
  linkLabel,
  dark = false,
}: Props) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="flex items-end justify-between gap-8">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className={`eyebrow ${dark ? "text-gold-400" : "text-ink-500"}`}>{eyebrow}</p>
          )}
          <h2
            className={`mt-5 text-h2 font-semibold ${dark ? "text-white" : "text-ink-900"}`}
          >
            {title}
          </h2>
        </div>
        {linkHref && linkLabel && (
          // Le masquage est porté par un conteneur : appliquer « hidden » sur
          // ArrowLink entrerait en conflit avec son « inline-flex » de base.
          <div className="hidden shrink-0 md:block">
            <ArrowLink href={linkHref} className={dark ? "text-white" : "text-ink-900"}>
              {linkLabel}
            </ArrowLink>
          </div>
        )}
      </div>
      {intro && (
        <div
          className={`mt-6 max-w-3xl text-para md:text-para-lg ${
            dark ? "text-white/70" : "text-ink-600"
          }`}
        >
          {intro}
        </div>
      )}
    </div>
  );
}
