/**
 * HeroIllustration – Minimalist line-art SVG illustration
 * Person sitting on a phone frame, surrounded by plants and molecule nodes.
 * Matches the "Dreamy Gradient Blur" Neo-Brutalist Figma design.
 */
export default function HeroIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 500 600" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Illustration of a person practicing with a timer">
      {/* Phone Frame */}
      <rect x="120" y="60" width="260" height="440" rx="0" stroke="black" strokeWidth="3" fill="none" />
      <rect x="120" y="60" width="260" height="30" stroke="black" strokeWidth="3" fill="none" />
      {/* Phone notch */}
      <rect x="210" y="68" width="80" height="14" rx="0" stroke="black" strokeWidth="2" fill="none" />

      {/* Screen content lines */}
      <line x1="160" y1="130" x2="340" y2="130" stroke="black" strokeWidth="2" />
      <line x1="160" y1="150" x2="300" y2="150" stroke="black" strokeWidth="2" />
      <line x1="160" y1="170" x2="260" y2="170" stroke="black" strokeWidth="2" />

      {/* Timer display on screen */}
      <rect x="175" y="200" width="150" height="60" stroke="black" strokeWidth="2.5" fill="none" />
      <text x="250" y="240" textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize="28" fontWeight="700" fill="black">
        02:30
      </text>

      {/* Person - sitting cross-legged */}
      {/* Head */}
      <circle cx="250" cy="310" r="25" stroke="black" strokeWidth="3" fill="none" />
      {/* Hair detail */}
      <path d="M230 295 Q250 275 270 295" stroke="black" strokeWidth="2.5" fill="none" />
      {/* Body */}
      <path d="M250 335 L250 400" stroke="black" strokeWidth="3" />
      {/* Arms */}
      <path d="M250 360 L210 385 L200 370" stroke="black" strokeWidth="3" fill="none" />
      <path d="M250 360 L290 385 L300 370" stroke="black" strokeWidth="3" fill="none" />
      {/* Legs crossed */}
      <path d="M250 400 L215 430 Q200 440 185 435" stroke="black" strokeWidth="3" fill="none" />
      <path d="M250 400 L285 430 Q300 440 315 435" stroke="black" strokeWidth="3" fill="none" />

      {/* Laptop/Book on lap */}
      <rect x="215" y="385" width="70" height="5" stroke="black" strokeWidth="2" fill="none" />
      <path d="M215 385 L208 410" stroke="black" strokeWidth="2" />
      <path d="M285 385 L292 410" stroke="black" strokeWidth="2" />

      {/* Plant - left side */}
      <rect x="50" y="450" width="50" height="60" stroke="black" strokeWidth="3" fill="none" />
      {/* Stem & leaves */}
      <path d="M75 450 L75 400" stroke="black" strokeWidth="2.5" />
      <path d="M75 430 Q55 410 65 390" stroke="black" strokeWidth="2" fill="none" />
      <path d="M75 420 Q95 400 85 380" stroke="black" strokeWidth="2" fill="none" />
      <path d="M75 410 Q55 390 60 370" stroke="black" strokeWidth="2" fill="none" />
      <path d="M75 400 Q90 385 88 365" stroke="black" strokeWidth="2" fill="none" />

      {/* Plant - right side (small succulent in pot) */}
      <rect x="400" y="120" width="45" height="40" stroke="black" strokeWidth="2.5" fill="none" />
      {/* Succulent leaves */}
      <path d="M422 120 Q410 95 415 80" stroke="black" strokeWidth="2" fill="none" />
      <path d="M422 120 Q435 95 430 80" stroke="black" strokeWidth="2" fill="none" />
      <path d="M422 120 Q398 100 405 85" stroke="black" strokeWidth="2" fill="none" />
      <path d="M422 120 Q445 100 440 85" stroke="black" strokeWidth="2" fill="none" />

      {/* Molecule nodes top-right */}
      <circle cx="420" cy="230" r="8" stroke="black" strokeWidth="2.5" fill="none" />
      <circle cx="460" cy="200" r="6" stroke="black" strokeWidth="2" fill="none" />
      <circle cx="470" cy="260" r="5" stroke="black" strokeWidth="2" fill="none" />
      <line x1="426" y1="224" x2="455" y2="204" stroke="black" strokeWidth="2" />
      <line x1="426" y1="236" x2="466" y2="257" stroke="black" strokeWidth="2" />
      <line x1="464" y1="204" x2="468" y2="256" stroke="black" strokeWidth="2" />

      {/* Molecule nodes bottom-right */}
      <circle cx="430" cy="420" r="7" stroke="black" strokeWidth="2.5" fill="none" />
      <circle cx="470" cy="390" r="5" stroke="black" strokeWidth="2" fill="none" />
      <circle cx="480" cy="450" r="4" stroke="black" strokeWidth="2" fill="none" />
      <line x1="435" y1="415" x2="466" y2="393" stroke="black" strokeWidth="2" />
      <line x1="436" y1="425" x2="477" y2="447" stroke="black" strokeWidth="2" />

      {/* Floating book/shelf - bottom right */}
      <rect x="390" y="480" width="80" height="15" stroke="black" strokeWidth="2.5" fill="none" />
      <path d="M395 480 L415 455 L440 455 L420 480" stroke="black" strokeWidth="2" fill="none" />
      <path d="M445 480 L450 460 L465 460 L460 480" stroke="black" strokeWidth="2" fill="none" />

      {/* Small decorative dots */}
      <circle cx="100" cy="180" r="3" fill="black" />
      <circle cx="110" cy="300" r="2" fill="black" />
      <circle cx="470" cy="320" r="2.5" fill="black" />
    </svg>
  );
}
