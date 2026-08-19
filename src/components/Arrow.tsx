/** Flèche circulaire animée au survol — motif repris de glencore.com. */
export default function Arrow({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-ink-200 transition-colors duration-300 group-hover:border-gold-400 group-hover:bg-gold-400 ${className}`}
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        className="h-4 w-4 transition-transform duration-400 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-x-6"
      >
        <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      <svg
        viewBox="0 0 16 16"
        fill="none"
        className="absolute h-4 w-4 -translate-x-6 transition-transform duration-400 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-x-0"
      >
        <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </span>
  );
}
