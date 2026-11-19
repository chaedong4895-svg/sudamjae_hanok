import { SolapiMessageService } from "solapi";

interface InquiryAlimtalkParams {
  phone: string;
  name: string;
  refId: string;
  datesLabel: string;
}

/** Korean mobile numbers only: 01X-XXX(X)-XXXX. Accepts +82 / 82 prefixes. */
function normalizeKoreanMobile(raw: string): string | null {
  let digits = raw.replace(/[^0-9]/g, "");
  if (digits.startsWith("82")) digits = `0${digits.slice(2)}`;
  return /^01[016789]\d{7,8}$/.test(digits) ? digits : null;
}

const SEND_TIMEOUT_MS = 8000;

/**
 * Sends the "inquiry received" KakaoTalk 알림톡 (via Solapi) to the visitor's phone.
 *
 * Best-effort by design: it never throws and does nothing unless every SOLAPI_* env var is
 * set, so the inquiry itself succeeds even if the channel/template isn't approved yet or
 * Kakao/Solapi is down. If the 알림톡 can't be delivered, Solapi falls back to SMS
 * (disableSms is false) using the approved template text.
 *
 * Template variables (must match the template registered in the Solapi console):
 *   #{name} 접수자 이름 · #{refId} 접수번호 · #{dates} 희망 일정
 */
export async function sendInquiryAlimtalk({
  phone,
  name,
  refId,
  datesLabel,
}: InquiryAlimtalkParams): Promise<void> {
  const apiKey = process.env.SOLAPI_API_KEY;
  const apiSecret = process.env.SOLAPI_API_SECRET;
  const pfId = process.env.SOLAPI_PF_ID;
  const templateId = process.env.SOLAPI_TEMPLATE_INQUIRY;
  const from = process.env.SOLAPI_SENDER;

  if (!apiKey || !apiSecret || !pfId || !templateId || !from) return;

  const to = normalizeKoreanMobile(phone);
  if (!to) return;

  try {
    const service = new SolapiMessageService(apiKey, apiSecret);
    await Promise.race([
      service.send({
        to,
        from: from.replace(/[^0-9]/g, ""),
        kakaoOptions: {
          pfId,
          templateId,
          variables: {
            name: name.slice(0, 40),
            refId,
            dates: datesLabel.slice(0, 40),
          },
        },
      }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("alimtalk send timed out")), SEND_TIMEOUT_MS),
      ),
    ]);
  } catch (err) {
    console.error("Alimtalk send failed:", err);
  }
}
