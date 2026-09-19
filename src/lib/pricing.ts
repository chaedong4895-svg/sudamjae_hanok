import { addDays, toISODate } from "./date";
import { isHighSeasonDate } from "./highSeason";
import { isPublicHoliday } from "./holidays";

// PRD 9.1 숙박 요금 (4인 기준, 부가세 포함 여부는 출시 전 확정 필요)
export const NIGHTLY_RATES = {
  offSeasonWeekday: 590_000,
  offSeasonWeekend: 740_000,
  highSeasonWeekday: 790_000,
  highSeasonWeekend: 950_000,
} as const;

export const BASE_GUESTS = 4;
export const MAX_GUESTS = 8;
export const EXTRA_GUEST_FEE = 30_000; // 1인당, 5인째부터

// PRD 9.2 공간대여와 추가 옵션
export const VENUE_RENTAL_ONLY = 1_000_000;
export const VENUE_RENTAL_WITH_STAY = 1_400_000;
export const BBQ_HOUSE_FEE = 100_000;
export const CHARCOAL_SET_FEE = 20_000;
export const CAULDRON_EXPERIENCE_FEE = 100_000;

/** 금·토요일 숙박 및 공휴일 전날(다음 날이 공휴일인) 숙박을 주말 요금으로 계산한다. */
export function isWeekendNight(date: Date): boolean {
  const day = date.getDay();
  if (day === 5 || day === 6) return true;
  return isPublicHoliday(toISODate(addDays(date, 1)));
}

export function nightlyRate(date: Date): number {
  const weekend = isWeekendNight(date);
  const highSeason = isHighSeasonDate(toISODate(date));
  if (highSeason) {
    return weekend ? NIGHTLY_RATES.highSeasonWeekend : NIGHTLY_RATES.highSeasonWeekday;
  }
  return weekend ? NIGHTLY_RATES.offSeasonWeekend : NIGHTLY_RATES.offSeasonWeekday;
}

export interface StayEstimate {
  nights: number;
  roomTotal: number;
  extraGuestTotal: number;
  total: number;
}

/** 체크인~체크아웃(당일 제외) 사이 각 밤의 요금을 합산한다. 자동 연박 할인은 적용하지 않는다. */
export function estimateStay(checkIn: Date, checkOut: Date, guests: number): StayEstimate {
  let nights = 0;
  let roomTotal = 0;
  let cursor = new Date(checkIn);
  while (toISODate(cursor) < toISODate(checkOut)) {
    roomTotal += nightlyRate(cursor);
    nights += 1;
    cursor = addDays(cursor, 1);
  }
  const extraGuests = Math.max(0, Math.min(guests, MAX_GUESTS) - BASE_GUESTS);
  const extraGuestTotal = extraGuests * EXTRA_GUEST_FEE * nights;
  return {
    nights,
    roomTotal,
    extraGuestTotal,
    total: roomTotal + extraGuestTotal,
  };
}

export function formatKRW(amount: number): string {
  return `₩${amount.toLocaleString("ko-KR")}`;
}

export function formatKRWEnglish(amount: number): string {
  return `KRW ${amount.toLocaleString("en-US")}`;
}
