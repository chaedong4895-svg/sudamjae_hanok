import { toISODate } from "./date";

export type DateStatus = "available" | "closed" | "inquiry";

/**
 * 예약 가능일 수동 관리 (PRD 10.6 — 1차 출시는 운영자가 이 파일을 직접 수정한다)
 *
 * 날짜(YYYY-MM-DD)를 키로 넣어 상태를 지정하세요.
 *   "closed"  : 예약 마감 (하루 한 팀 원칙에 따라 확정 예약이 생기면 즉시 추가)
 *   "inquiry" : 문의 필요 (행사·촬영 등 조건부 가능일)
 * 여기에 없는 날짜는 모두 "available"로 표시됩니다.
 *
 * 예: "2026-10-03": "closed",
 */
export const MANUAL_STATUS_OVERRIDES: Record<string, DateStatus> = {};

export function getDateStatus(date: Date): DateStatus {
  return MANUAL_STATUS_OVERRIDES[toISODate(date)] ?? "available";
}
