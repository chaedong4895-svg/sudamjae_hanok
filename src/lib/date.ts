export function toISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function fromISODate(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function addDays(date: Date, days: number): Date {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

export function addMonths(date: Date, months: number): Date {
  return new Date(date.getFullYear(), date.getMonth() + months, 1);
}

export function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function daysInMonth(date: Date): number {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

export function isSameDay(a: Date, b: Date): boolean {
  return toISODate(a) === toISODate(b);
}

export function isBeforeDay(a: Date, b: Date): boolean {
  return toISODate(a) < toISODate(b);
}

export function isAfterDay(a: Date, b: Date): boolean {
  return toISODate(a) > toISODate(b);
}

export function startOfToday(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

const KO_MONTHS = [
  "1월", "2월", "3월", "4월", "5월", "6월",
  "7월", "8월", "9월", "10월", "11월", "12월",
];
const EN_MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const KO_WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];
const EN_WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function formatMonthLabel(date: Date, locale: "ko" | "en"): string {
  if (locale === "ko") return `${date.getFullYear()}년 ${KO_MONTHS[date.getMonth()]}`;
  return `${EN_MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

export function weekdayLabels(locale: "ko" | "en"): string[] {
  return locale === "ko" ? KO_WEEKDAYS : EN_WEEKDAYS;
}

export function formatDateLabel(date: Date, locale: "ko" | "en"): string {
  if (locale === "ko") {
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  }
  return `${EN_MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export function formatDateShort(date: Date, locale: "ko" | "en"): string {
  if (locale === "ko") return `${date.getMonth() + 1}.${date.getDate()}`;
  return `${EN_MONTHS[date.getMonth()].slice(0, 3)} ${date.getDate()}`;
}
