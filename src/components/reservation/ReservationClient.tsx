"use client";

import { useMemo, useState } from "react";
import type { ReservationPageContent, InquiryFormContent, Locale } from "@/content/types";
import { getDateStatus, type DateStatus } from "@/lib/availability";
import { addMonths, formatDateLabel, isBeforeDay, startOfToday, toISODate } from "@/lib/date";
import { BASE_GUESTS, MAX_GUESTS, estimateStay, formatKRW, formatKRWEnglish } from "@/lib/pricing";
import { MonthGrid, isDateInRange, isRangeEdge, type DayInfo } from "./MonthGrid";
import { InquiryForm } from "./InquiryForm";

export function ReservationClient({
  content,
  inquiryContent,
  locale,
  contactEmail,
  contactPhone,
}: {
  content: ReservationPageContent;
  inquiryContent: InquiryFormContent;
  locale: Locale;
  contactEmail: string;
  contactPhone: string;
}) {
  const today = useMemo(() => startOfToday(), []);
  const [anchorMonth, setAnchorMonth] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState(BASE_GUESTS);
  const [purpose, setPurpose] = useState(content.purposeOptions[0]);
  const [options, setOptions] = useState<Set<string>>(new Set());
  const [rangeWarning, setRangeWarning] = useState<string | null>(null);

  const secondMonth = addMonths(anchorMonth, 1);

  function getDayInfo(date: Date): DayInfo {
    const status: DateStatus = getDateStatus(date);
    return {
      date,
      status,
      isPast: isBeforeDay(date, today) && toISODate(date) !== toISODate(today),
      isToday: toISODate(date) === toISODate(today),
      inRange: isDateInRange(date, checkIn, checkOut),
      isRangeEdge: isRangeEdge(date, checkIn, checkOut),
    };
  }

  function hasClosedBetween(start: Date, end: Date): boolean {
    let cursor = new Date(start);
    while (toISODate(cursor) < toISODate(end)) {
      if (getDateStatus(cursor) === "closed") return true;
      cursor = new Date(cursor.getFullYear(), cursor.getMonth(), cursor.getDate() + 1);
    }
    return false;
  }

  function handleSelect(date: Date) {
    setRangeWarning(null);
    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(date);
      setCheckOut(null);
      return;
    }
    if (toISODate(date) <= toISODate(checkIn)) {
      setCheckIn(date);
      setCheckOut(null);
      return;
    }
    if (hasClosedBetween(checkIn, date)) {
      setRangeWarning(
        locale === "ko"
          ? "선택하신 기간 중 예약이 마감된 날짜가 포함되어 있습니다. 다른 날짜를 선택해 주세요."
          : "The selected range includes a date that is already closed. Please choose different dates."
      );
      return;
    }
    setCheckOut(date);
  }

  function resetSelection() {
    setCheckIn(null);
    setCheckOut(null);
    setRangeWarning(null);
  }

  const estimate = checkIn && checkOut ? estimateStay(checkIn, checkOut, guests) : null;
  const formatMoney = locale === "ko" ? formatKRW : formatKRWEnglish;

  const includesInquiryDate = useMemo(() => {
    if (!checkIn || !checkOut) return false;
    let cursor = new Date(checkIn);
    while (toISODate(cursor) < toISODate(checkOut)) {
      if (getDateStatus(cursor) === "inquiry") return true;
      cursor = new Date(cursor.getFullYear(), cursor.getMonth(), cursor.getDate() + 1);
    }
    return false;
  }, [checkIn, checkOut]);

  function toggleOption(key: string) {
    setOptions((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  const optionLabels = content.optionChoices.filter((o) => options.has(o.key)).map((o) => o.label);
  const datesLabel =
    checkIn && checkOut
      ? `${formatDateLabel(checkIn, locale)} → ${formatDateLabel(checkOut, locale)}`
      : null;
  const guestsLabel = `${guests}${locale === "ko" ? "명" : " guests"}`;

  return (
    <div className="space-y-10">
      <div className="p-4 bg-surface border border-border text-sm font-sans text-ink/75">
        {content.confirmNote}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={() => setAnchorMonth((m) => addMonths(m, -1))}
              className="px-3 py-2 border border-border text-sm font-sans hover:border-primary"
            >
              ← {content.prevMonth}
            </button>
            <div className="flex flex-wrap gap-4 font-sans text-xs text-ink/70">
              <LegendDot color="bg-green/70" label={content.legend.available} />
              <LegendDot color="bg-brown" label={content.legend.inquiry} />
              <LegendDot color="bg-ink/25" label={content.legend.closed} strike />
              <LegendDot color="bg-primary" label={content.legend.selected} />
            </div>
            <button
              type="button"
              onClick={() => setAnchorMonth((m) => addMonths(m, 1))}
              className="px-3 py-2 border border-border text-sm font-sans hover:border-primary"
            >
              {content.nextMonth} →
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <MonthGrid month={anchorMonth} locale={locale} getDayInfo={getDayInfo} onSelect={handleSelect} legend={content.legend} />
            <div className="hidden lg:block">
              <MonthGrid month={secondMonth} locale={locale} getDayInfo={getDayInfo} onSelect={handleSelect} legend={content.legend} />
            </div>
          </div>

          {rangeWarning && (
            <p className="mt-4 text-sm font-sans text-red-700">{rangeWarning}</p>
          )}
          {includesInquiryDate && !rangeWarning && (
            <p className="mt-4 text-sm font-sans text-brown">
              {locale === "ko"
                ? "선택하신 일정에 문의가 필요한 날짜가 포함되어 있습니다. 직접 문의를 통해 확인해 주세요."
                : "Your selected dates include a date that requires an inquiry. Please confirm with us directly."}
            </p>
          )}
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 bg-surface space-y-4">
            <h3 className="font-serif text-lg text-primary">{content.summaryTitle}</h3>
            {!checkIn && <p className="font-sans text-sm text-ink/70">{content.selectCheckIn}</p>}
            {checkIn && !checkOut && (
              <p className="font-sans text-sm text-ink/70">
                {content.summaryCheckIn}: {formatDateLabel(checkIn, locale)} · {content.selectCheckOut}
              </p>
            )}
            {checkIn && checkOut && estimate && (
              <div className="space-y-2 font-sans text-sm text-ink/80">
                <div className="flex justify-between">
                  <span>{content.summaryCheckIn}</span>
                  <span>{formatDateLabel(checkIn, locale)}</span>
                </div>
                <div className="flex justify-between">
                  <span>{content.summaryCheckOut}</span>
                  <span>{formatDateLabel(checkOut, locale)}</span>
                </div>
                <div className="flex justify-between">
                  <span>{content.summaryNights}</span>
                  <span>{estimate.nights}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-border font-serif text-lg text-primary">
                  <span>{content.summaryEstimate}</span>
                  <span>{formatMoney(estimate.total)}</span>
                </div>
              </div>
            )}
            {(checkIn || checkOut) && (
              <button
                type="button"
                onClick={resetSelection}
                className="text-xs font-sans text-brown underline underline-offset-4"
              >
                {content.resetSelection}
              </button>
            )}

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <label htmlFor="guests" className="block font-sans text-xs text-brown uppercase tracking-wider mb-1">
                  {content.guestsLabel}
                </label>
                <select
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-white px-3 py-2.5 border border-border font-sans text-sm focus:border-primary focus:outline-none"
                >
                  {Array.from({ length: MAX_GUESTS - BASE_GUESTS + 1 }, (_, i) => BASE_GUESTS + i).map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="purpose" className="block font-sans text-xs text-brown uppercase tracking-wider mb-1">
                  {content.purposeLabel}
                </label>
                <select
                  id="purpose"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full bg-white px-3 py-2.5 border border-border font-sans text-sm focus:border-primary focus:outline-none"
                >
                  {content.purposeOptions.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <span className="block font-sans text-xs text-brown uppercase tracking-wider mb-2">
                {content.optionsLabel}
              </span>
              <div className="space-y-1.5">
                {content.optionChoices.map((opt) => (
                  <label key={opt.key} className="flex items-center gap-2 font-sans text-sm text-ink/80">
                    <input
                      type="checkbox"
                      checked={options.has(opt.key)}
                      onChange={() => toggleOption(opt.key)}
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {estimate && <p className="font-sans text-xs text-brown">{content.estimateDisclaimer}</p>}
            {!estimate && <p className="font-sans text-xs text-brown">{content.summaryPlaceholder}</p>}
          </div>

          <div className="p-6 bg-white border border-border space-y-3">
            <h3 className="font-serif text-lg text-primary">{content.channelsTitle}</h3>
            <ChannelButton label={content.airbnbLabel} comingSoon={content.comingSoon} />
            <ChannelButton label={content.naverLabel} comingSoon={content.comingSoon} />
            <a
              href="#inquiry-form"
              className="block text-center w-full py-3.5 bg-primary text-background font-sans text-sm font-semibold uppercase tracking-widest hover:bg-brown transition-colors"
            >
              {content.directLabel}
            </a>
            <p className="font-sans text-xs text-brown">{content.channelNote}</p>
          </div>
        </div>
      </div>

      <InquiryForm
        content={inquiryContent}
        locale={locale}
        contactEmail={contactEmail}
        contactPhone={contactPhone}
        summary={{
          datesLabel,
          guestsLabel,
          purposeLabel: purpose,
          optionLabels,
        }}
      />
    </div>
  );
}

function LegendDot({ color, label, strike }: { color: string; label: string; strike?: boolean }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className={`w-2 h-2 rounded-full ${color} ${strike ? "opacity-60" : ""}`} aria-hidden="true" />
      {label}
    </span>
  );
}

function ChannelButton({ label, comingSoon }: { label: string; comingSoon: string }) {
  return (
    <div className="relative">
      <button
        type="button"
        disabled
        className="w-full py-3.5 border border-border text-ink/40 font-sans text-sm font-semibold uppercase tracking-widest cursor-not-allowed bg-surface/50"
      >
        {label}
      </button>
      <span className="block text-center font-sans text-[11px] text-brown mt-1">{comingSoon}</span>
    </div>
  );
}
