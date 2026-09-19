/**
 * 성수기 기간 (운영정책 확정, 2026-09-19).
 *
 * 공정거래위원회 소비자분쟁해결기준을 참고해 매년 반복되는 월-일 기준으로 정의한다.
 * 겨울 성수기처럼 해를 넘기는 기간(12/20~다음해 2/20)도 지원한다.
 */
export interface HighSeasonRange {
  startMonth: number; // 1-12
  startDay: number;
  endMonth: number;
  endDay: number;
  label: string;
}

export const HIGH_SEASON_RANGES: HighSeasonRange[] = [
  { startMonth: 7, startDay: 15, endMonth: 8, endDay: 24, label: "여름 성수기" },
  { startMonth: 12, startDay: 20, endMonth: 2, endDay: 20, label: "겨울 성수기" },
];

function monthDayValue(month: number, day: number): number {
  return month * 100 + day;
}

export function isHighSeasonDate(isoDate: string): boolean {
  const [, monthStr, dayStr] = isoDate.split("-");
  const value = monthDayValue(Number(monthStr), Number(dayStr));

  return HIGH_SEASON_RANGES.some((range) => {
    const start = monthDayValue(range.startMonth, range.startDay);
    const end = monthDayValue(range.endMonth, range.endDay);
    if (start <= end) return value >= start && value <= end;
    // 연말-연초를 넘어가는 기간 (예: 12/20 ~ 2/20)
    return value >= start || value <= end;
  });
}
