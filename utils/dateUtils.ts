export function getMonthDays(year: number, month: number): (number | null)[] {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days: (number | null)[] = [];
  // Pad start
  for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) days.push(null);
  // Fill days
  for (let d = 1; d <= daysInMonth; d++) days.push(d);
  // Pad end
  while (days.length % 7 !== 0) days.push(null);
  return days;
}

export function getWeekdayLabels(): string[] {
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
}

export function getCompactWeekdayLabels(): string[] {
  return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
}
