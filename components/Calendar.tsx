import CalendarGrid from "./CalendarGrid";

type CalendarDay = {
  date: Date;
  isCurrentMonth: boolean;
};

type CalendarProps = {
  days: CalendarDay[];
  selectedStartDate: Date | null;
  selectedEndDate: Date | null;
  handleDateClick: (date: Date) => void;
  goToNextMonth: () => void;
  goToPreviousMonth: () => void;
  currentMonth: number;
  currentYear: number;
};

export default function Calendar({
  days,
  selectedStartDate,
  selectedEndDate,
  handleDateClick,
  goToNextMonth,
  goToPreviousMonth,
  currentMonth,
  currentYear,
}: CalendarProps) {
  const monthName = new Date(currentYear, currentMonth).toLocaleString(
    "default",
    { month: "long" }
  );

  return (
    <div className="w-full min-w-0">
      <div className="glass-card p-5 sm:p-6">
        <div className="mb-3.5 flex justify-center gap-1.5 sm:mb-4 sm:gap-2" aria-hidden>
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-gradient-to-b from-zinc-500/90 to-zinc-700/90 shadow-[0_1px_2px_rgba(0,0,0,0.2)] ring-1 ring-white/25 sm:h-2 sm:w-2"
            />
          ))}
        </div>

        <div className="calendar-paper rounded-[0.9375rem] p-4 shadow-md ring-1 ring-stone-900/[0.07] sm:p-5">
          <div className="mb-3.5 flex items-center justify-between gap-3 border-b border-stone-300/80 pb-3 sm:mb-4 sm:pb-3.5">
            <button
              type="button"
              onClick={goToPreviousMonth}
              aria-label="Previous month"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.5rem] border border-stone-300/95 bg-white text-lg leading-none text-stone-800 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 ease-out hover:border-stone-400 hover:bg-stone-50/95 hover:shadow-md active:scale-[0.96]"
            >
              ‹
            </button>

            <div className="min-w-0 flex-1 text-center">
              <h2 className="calendar-month-title text-xl font-bold tracking-tight text-stone-900 sm:text-[1.65rem] sm:tracking-tight">
                {monthName}
              </h2>
              <p className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-stone-500 sm:text-xs">
                {currentYear}
              </p>
            </div>

            <button
              type="button"
              onClick={goToNextMonth}
              aria-label="Next month"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.5rem] border border-stone-300/95 bg-white text-lg leading-none text-stone-800 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 ease-out hover:border-stone-400 hover:bg-stone-50/95 hover:shadow-md active:scale-[0.96]"
            >
              ›
            </button>
          </div>

          <CalendarGrid
            days={days}
            selectedStartDate={selectedStartDate}
            selectedEndDate={selectedEndDate}
            handleDateClick={handleDateClick}
          />
        </div>
      </div>

      <p className="mt-4 text-center text-xs leading-relaxed text-slate-500/90 sm:mt-5 sm:text-sm">
        Tap two dates to select a range
      </p>
    </div>
  );
}
