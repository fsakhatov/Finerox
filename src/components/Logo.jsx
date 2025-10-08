export default function Logo({
  className = "",
  showWordmark = true,
  showTagline = true,
  wordmarkClassName = "h-10",
  markClassName = "h-10",
  taglineClassName = "text-[10px] font-semibold uppercase tracking-[0.45em] text-zinc-400 dark:text-white/50",
}) {
  const gradientDef = (
    <defs>
      <linearGradient id="finerox-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5f8df7" />
        <stop offset="100%" stopColor="#6bb1ff" />
      </linearGradient>
    </defs>
  );

  const wordmarkSvg = (
    <svg
      className={`${wordmarkClassName} w-auto`}
      viewBox="0 0 360 120"
      role="img"
      aria-label="Finerox logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      {gradientDef}
      <g fill="currentColor">
        <text x="0" y="78" fontFamily="'Poppins','Segoe UI',sans-serif" fontSize="70" fontWeight="700" letterSpacing="4">
          FINER
        </text>
        <text
          x="290"
          y="78"
          fontFamily="'Poppins','Segoe UI',sans-serif"
          fontSize="70"
          fontWeight="700"
          letterSpacing="4"
        >
          X
        </text>
      </g>
      <rect x="214" y="24" width="108" height="62" rx="31" fill="url(#finerox-gradient)" />
      <circle cx="266" cy="55" r="24" fill="#f7fbff" />
      <circle cx="210" cy="30" r="7" fill="#729CFF" />
      <circle cx="324" cy="24" r="10" fill="none" stroke="#ffffff" strokeWidth="3" />
      <text
        x="214"
        y="106"
        fontFamily="'Poppins','Segoe UI',sans-serif"
        fontSize="18"
        fontWeight="600"
        letterSpacing="5"
        fill="currentColor"
      >
        DIGITAL SERVICES
      </text>
    </svg>
  );

  const markSvg = (
    <svg
      className={`${markClassName} w-auto`}
      viewBox="0 0 120 120"
      role="img"
      aria-label="Finerox logo mark"
      xmlns="http://www.w3.org/2000/svg"
    >
      {gradientDef}
      <rect x="18" y="30" width="84" height="60" rx="30" fill="url(#finerox-gradient)" />
      <circle cx="60" cy="60" r="24" fill="#f7fbff" />
      <circle cx="20" cy="38" r="7" fill="#729CFF" />
      <circle cx="100" cy="30" r="10" fill="none" stroke="#ffffff" strokeWidth="3" />
    </svg>
  );

  return (
    <span className={`inline-flex items-end gap-3 text-zinc-900 dark:text-white ${className}`}>
      {showWordmark ? wordmarkSvg : markSvg}
      {showTagline && (
        <span className={`${taglineClassName} pb-1`}>Digital Services</span>
      )}
    </span>
  );
}
