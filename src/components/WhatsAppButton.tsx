import { site, whatsappLink } from "@/lib/site";

/** Bouton WhatsApp flottant — canal de contact principal du cahier des charges. */
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(
        `Bonjour ${site.name}, je souhaite obtenir un devis pour mon projet.`,
      )}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-ink-900 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-105 md:bottom-8 md:right-8 print:hidden"
      aria-label="Discuter avec IdéalTP sur WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm4.52 13.98c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.66.31-.23.24-.87.85-.87 2.07s.89 2.4 1.02 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.47-.29Z" />
      </svg>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-para-s font-semibold transition-[max-width] duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:max-w-40">
        Écrivez-nous
      </span>
    </a>
  );
}
