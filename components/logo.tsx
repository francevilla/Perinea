type LogoMarkProps = {
  className?: string;
  /** "light" = su fondo chiaro (arco salvia, nucleo terracotta) — "dark" = su fondo scuro */
  variant?: "light" | "dark";
};

/**
 * Mark «Il Bacino» (Concept A) — arco portante + nucleo.
 * viewBox recortato sull'estensione ottica del disegno per centrarlo
 * verticalmente accanto al wordmark.
 */
export function LogoMark({ className, variant = "light" }: LogoMarkProps) {
  const arc = variant === "dark" ? "#FAF6F0" : "#41563F";
  const core = variant === "dark" ? "#D48E6D" : "#C07A5E";

  return (
    <svg
      viewBox="7 15 50 50"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M13 24 C13 45 23 56 32 56 C41 56 51 45 51 24"
        fill="none"
        stroke={arc}
        strokeWidth={7}
        strokeLinecap="round"
      />
      <circle cx="32" cy="37" r={7.5} fill={core} />
    </svg>
  );
}
