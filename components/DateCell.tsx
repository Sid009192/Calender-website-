type DateCellProps = {
  date: Date | null;
  isCurrentMonth: boolean;
  isSelected: boolean;
  isInRange: boolean;
  isToday: boolean;
  onClick: () => void;
};

export default function DateCell({
  date,
  isCurrentMonth,
  isSelected,
  isInRange,
  isToday,
  onClick,
}: DateCellProps) {
  if (!date) {
    return <div className="cal-day-slot" aria-hidden />;
  }

  const parts = ["cal-day"];

  if (isSelected) {
    parts.push("cal-day--selected");
  } else if (isInRange) {
    parts.push("cal-day--range");
  } else if (!isCurrentMonth) {
    parts.push("cal-day--muted");
  }

  if (isToday && !isSelected) {
    parts.push("cal-day--today");
  }

  return (
    <button
      type="button"
      className={parts.join(" ")}
      onClick={onClick}
      aria-pressed={isSelected}
      aria-current={isToday ? "date" : undefined}
    >
      {date.getDate()}
    </button>
  );
}
