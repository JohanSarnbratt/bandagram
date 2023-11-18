export function dayNumber() {
  const today = new Date();
  const firstDay = new Date(2023, 10, 18);
  const diff = Math.abs(today.getTime() - firstDay.getTime())/ (1000 * 60 * 60 * 24);
  return Math.floor(diff);
}