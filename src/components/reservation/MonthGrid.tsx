"use client";

import type { Locale } from "@/content/types";
import type { DateStatus } from "@/lib/availability";
import {
  addDays,
  daysInMonth,
  formatMonthLabel,
  isSameDay,
  startOfMonth,
  toISODate,
  weekdayLabels,
} from "@/lib/date";

export interface DayInfo {
  date: Date;
  status: DateStatus;
  isPast: boolean;
  isToday: boolean;
  inRange: boolean;
  isRangeEdge: boolean;
}

export function MonthGrid({
  month,
  locale,
  getDayInfo,
  onSelect,
  legend,
}: {
  month: Date;
  locale: Locale;
  getDayInfo: (date: Date) => DayInfo;
  onSelect: (date: Date) => void;
  legend: { available: string; closed: string; inquiry: string; selected: string; today: string; past: string };
}) {
  const first = startOfMonth(month);
  const total = daysInMonth(month);
  const leadingBlanks = first.getDay();
  const cells: (Date | null)[] = [
    ...Array.from({ length: leadingBlanks }, () => null),
    ...Array.from({ length: total }, (_, i) => addDays(first, i)),
  ];

  return (
    <div className="w-full">
      <p className="font-serif text-lg text-primary mb-3 text-center">
        {formatMonthLabel(month, locale)}
      </p>
      <div className="grid grid-cols-7 gap-1 mb-1">
        {weekdayLabels(locale).map((d) => (
          <div key={d} className="text-center font-sans text-[11px] text-brown py-1">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((date, i) => {
          if (!date) return <div key={`blank-${i}`} />;
          const info = getDayInfo(date);
          const disabled = info.isPast || info.status === "closed";
          const base = "aspect-square w-full text-xs sm:text-sm font-sans flex flex-col items-center justify-center gap-0.5 transition-colors";
          let stateClass = "text-ink/80 hover:bg-surface";
          if (info.isPast) stateClass = "text-ink/25 cursor-not-allowed";
          else if (info.status === "closed") stateClass = "text-ink/30 line-through cursor-not-allowed bg-surface/50";
          else if (info.isRangeEdge) stateClass = "bg-primary text-background font-semibold";
          else if (info.inRange) stateClass = "bg-primary/15 text-primary";
          else if (info.status === "inquiry") stateClass = "text-brown hover:bg-surface";

          return (
            <button
              key={toISODate(date)}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(date)}
              aria-pressed={info.isRangeEdge}
              aria-label={`${toISODate(date)} ${
                info.isPast ? legend.past : info.status === "closed" ? legend.closed : info.status === "inquiry" ? legend.inquiry : legend.available
              }`}
              className={`${base} ${stateClass} ${info.isToday ? "ring-1 ring-primary" : ""}`}
            >
              <span>{date.getDate()}</span>
              {!info.isPast && info.status === "inquiry" && !info.isRangeEdge && (
                <span className="w-1 h-1 rounded-full bg-brown" aria-hidden="true" />
              )}
              {!info.isPast && info.status === "available" && !info.isRangeEdge && !info.inRange && (
                <span className="w-1 h-1 rounded-full bg-green/70" aria-hidden="true" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function isDateInRange(date: Date, start: Date | null, end: Date | null): boolean {
  if (!start || !end) return false;
  const iso = toISODate(date);
  return iso > toISODate(start) && iso < toISODate(end);
}

export function isRangeEdge(date: Date, start: Date | null, end: Date | null): boolean {
  return (!!start && isSameDay(date, start)) || (!!end && isSameDay(date, end));
}
