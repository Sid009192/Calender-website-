import DateCell from "./DateCell";
import { getWeekdayLabels } from "../utils/dateUtils";

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
}

interface CalendarGridProps {
  days: CalendarDay[];
  selectedStartDate: Date | null;
  selectedEndDate: Date | null;
  handleDateClick: (date: Date) => void;
}

export default function CalendarGrid({
  days,
  selectedStartDate,
  selectedEndDate,
  handleDateClick,
}: CalendarGridProps) {
  const labels = getWeekdayLabels();

  const today = new Date();
  const isToday = (date: Date) => date.toDateString() === today.toDateString();

  const isDateSelected = (date: Date) => {
    if (!selectedStartDate && !selectedEndDate) return false;
    const time = date.getTime();
    return (
      selectedStartDate?.getTime() === time ||
      selectedEndDate?.getTime() === time
    );
  };

  const isDateInRange = (date: Date) => {
    if (!selectedStartDate || !selectedEndDate) return false;
    const time = date.getTime();
    return (
      time > selectedStartDate.getTime() && time < selectedEndDate.getTime()
    );
  };

  return (
    <div className="w-full min-w-0">
      <div className="mb-2.5 grid grid-cols-7 gap-1.5 border-b border-stone-300/90 pb-2.5 sm:mb-3 sm:gap-2 sm:pb-3">
        {labels.map((label) => (
          <div
            key={label}
            className="flex h-7 items-center justify-center text-center text-[0.6rem] font-semibold uppercase tracking-widest text-stone-500 sm:h-8 sm:text-[0.7rem]"
          >
            {label}
          </div>
        ))}
      </div>

      <div className="grid w-full min-w-0 grid-cols-7 gap-1.5 sm:gap-2">
        {days.map((day, idx) => (
          <DateCell
            key={idx}
            date={day.date}
            isCurrentMonth={day.isCurrentMonth}
            isSelected={isDateSelected(day.date)}
            isInRange={isDateInRange(day.date)}
            isToday={isToday(day.date)}
            onClick={() => handleDateClick(day.date)}
          />
        ))}
      </div>
    </div>
  );
}
