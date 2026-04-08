"use client";

import Calendar from "../components/Calendar";
import NotesPanel from "../components/NotesPanel";
import TopNav from "../components/TopNav";
import { useCalendar } from "../hooks/useCalendar";

export default function Home() {
  const {
    days,
    selectedStartDate,
    selectedEndDate,
    handleDateClick,
    currentYear,
    currentMonth,
    goToNextYear,
    goToPreviousYear,
    goToNextMonth,
    goToPreviousMonth,
  } = useCalendar();

  return (
    <div className="premium-dashboard-bg flex min-h-screen min-h-dvh flex-col text-slate-200">
      <TopNav
        currentYear={currentYear}
        goToPreviousYear={goToPreviousYear}
        goToNextYear={goToNextYear}
      />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-7 sm:px-8 sm:py-9 lg:py-10">
        <div className="grid grid-cols-1 items-start gap-7 sm:gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          <section aria-label="Calendar" className="min-w-0">
            <Calendar
              days={days}
              selectedStartDate={selectedStartDate}
              selectedEndDate={selectedEndDate}
              handleDateClick={handleDateClick}
              goToNextMonth={goToNextMonth}
              goToPreviousMonth={goToPreviousMonth}
              currentMonth={currentMonth}
              currentYear={currentYear}
            />
          </section>

          <section aria-label="Notes" className="min-w-0 lg:sticky lg:top-6">
            <NotesPanel month={currentMonth} year={currentYear} />
          </section>
        </div>
      </main>
    </div>
  );
}
