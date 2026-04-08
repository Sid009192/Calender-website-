import { useEffect, useState } from "react";

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
}

export function useCalendar() {
  const [currentMonth, setCurrentMonth] = useState(() => new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(() => new Date().getFullYear());
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  useEffect(() => {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const end = new Date(start);
    end.setDate(end.getDate() + 1);
    setSelectedStartDate(start);
    setSelectedEndDate(end);
  }, []);

  // 📅 Helpers
  const getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();

  const getFirstDayOfWeek = (year: number, month: number) =>
    new Date(year, month, 1).getDay();

  // 📆 Generate Calendar Days (42 cells)
  const days: CalendarDay[] = (() => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfWeek(currentYear, currentMonth);

    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);

    const calendar: CalendarDay[] = [];

    // 🔹 Previous month days
    for (let i = 0; i < firstDay; i++) {
      calendar.push({
        date: new Date(
          prevYear,
          prevMonth,
          daysInPrevMonth - firstDay + i + 1
        ),
        isCurrentMonth: false,
      });
    }

    // 🔹 Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      calendar.push({
        date: new Date(currentYear, currentMonth, d),
        isCurrentMonth: true,
      });
    }

    // 🔹 Next month days (fill to 42 cells)
    let nextDay = 1;
    while (calendar.length < 42) {
      const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
      const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;

      calendar.push({
        date: new Date(nextYear, nextMonth, nextDay++),
        isCurrentMonth: false,
      });
    }

    return calendar;
  })();

  // 🔄 Month Navigation (FIXED)
  const goToNextMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  const goToPreviousMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  // 🎯 Date Range Selection
  const handleDateClick = (date: Date) => {
    const cleanDate = new Date(date);
    cleanDate.setHours(0, 0, 0, 0);

    if (!selectedStartDate) {
      setSelectedStartDate(cleanDate);
      return;
    }

    if (!selectedEndDate) {
      if (cleanDate < selectedStartDate) {
        setSelectedStartDate(cleanDate);
        setSelectedEndDate(selectedStartDate);
      } else {
        setSelectedEndDate(cleanDate);
      }
      return;
    }

    setSelectedStartDate(cleanDate);
    setSelectedEndDate(null);
  };

  // 🔄 Year Navigation
  const goToNextYear = () => {
    setCurrentYear((prev) => prev + 1);
  };

  const goToPreviousYear = () => {
    setCurrentYear((prev) => prev - 1);
  };

  return {
    days,
    currentMonth,
    currentYear,
    selectedStartDate,
    selectedEndDate,
    goToNextMonth,
    goToPreviousMonth,
    goToNextYear,
    goToPreviousYear,
    handleDateClick,
  };
}