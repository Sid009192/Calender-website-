"use client";

interface TopNavProps {
  currentYear: number;
  goToPreviousYear: () => void;
  goToNextYear: () => void;
}

export default function TopNav({
  currentYear,
  goToPreviousYear,
  goToNextYear,
}: TopNavProps) {
  return (
    <header className="app-nav w-full shrink-0 z-50">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-3.5 sm:gap-6 sm:px-8 sm:py-4">
        <button
          type="button"
          onClick={goToPreviousYear}
          className="app-nav-btn justify-self-start"
          aria-label={`Go to year ${currentYear - 1}`}
        >
          ← Past
        </button>

        <h1
          className="justify-self-center text-[1.65rem] font-semibold tabular-nums tracking-[0.12em] text-slate-50 drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-3xl sm:tracking-[0.14em]"
          aria-live="polite"
        >
          {currentYear}
        </h1>

        <button
          type="button"
          onClick={goToNextYear}
          className="app-nav-btn justify-self-end"
          aria-label={`Go to year ${currentYear + 1}`}
        >
          Future →
        </button>
      </div>
    </header>
  );
}
