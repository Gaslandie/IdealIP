type Props = { className?: string; light?: boolean };

/** Monogramme + wordmark IdéalTP (noir & or). */
export default function Logo({ className = "", light = false }: Props) {
  const ink = light ? "#ffffff" : "#0a0a09";
  return (
    <span className={`inline-flex items-center gap-2.5 md:gap-3 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        aria-hidden="true"
        className="h-8 w-8 shrink-0 md:h-10 md:w-10"
      >
        <rect width="40" height="40" fill={light ? "#ffffff" : "#0a0a09"} />
        {/* mire de théodolite */}
        <circle cx="20" cy="20" r="11" fill="none" stroke="#d4af37" strokeWidth="1.5" />
        <path d="M20 4v10M20 26v10M4 20h10M26 20h10" stroke="#d4af37" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="3.2" fill="#d4af37" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="text-[1.05rem] font-bold tracking-[-0.02em] md:text-[1.25rem]"
          style={{ color: ink }}
        >
          IDÉAL<span style={{ color: "#d4af37" }}>TP</span>
        </span>
        <span
          className="mt-1 hidden text-[0.5rem] font-semibold uppercase tracking-[0.22em] md:block"
          style={{ color: light ? "rgba(255,255,255,.65)" : "#63635f" }}
        >
          Topographie & Travaux Publics
        </span>
      </span>
    </span>
  );
}
