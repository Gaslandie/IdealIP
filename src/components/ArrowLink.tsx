import Link from "next/link";
import Arrow from "./Arrow";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export default function ArrowLink({
  href,
  children,
  className = "",
  external = false,
}: Props) {
  const classes = `group inline-flex items-center gap-4 text-para-s font-semibold ${className}`;
  const content = (
    <>
      <span className="border-b border-transparent transition-colors duration-300 group-hover:border-current">
        {children}
        {external && <span className="sr-only"> (nouvel onglet)</span>}
      </span>
      <Arrow />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
