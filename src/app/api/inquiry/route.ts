import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

interface InquiryPayload {
  name?: string;
  phone?: string;
  email?: string;
  datesLabel?: string;
  guestsLabel?: string;
  purposeLabel?: string;
  optionLabels?: string[];
  message?: string;
  consent?: boolean;
  locale?: "ko" | "en";
  /** honeypot field: real users never fill this in */
  company?: string;
}

function generateRefId(): string {
  const now = new Date();
  const y = now.getFullYear().toString().slice(2);
  const stamp = now.getTime().toString().slice(-6);
  return `SDJ-${y}${stamp}`;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: InquiryPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: bots tend to fill every field, real visitors never see or fill this one.
  if (body.company) {
    return NextResponse.json({ ok: true, refId: generateRefId() });
  }

  const name = (body.name ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const email = (body.email ?? "").trim();
  const datesLabel = (body.datesLabel ?? "").trim();

  if (name.length < 2) {
    return NextResponse.json({ ok: false, error: "invalid_name" }, { status: 400 });
  }
  if (!/^[0-9+\-\s]{9,}$/.test(phone)) {
    return NextResponse.json({ ok: false, error: "invalid_phone" }, { status: 400 });
  }
  if (email && !isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }
  if (!datesLabel) {
    return NextResponse.json({ ok: false, error: "invalid_dates" }, { status: 400 });
  }
  if (!body.consent) {
    return NextResponse.json({ ok: false, error: "consent_required" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const to = process.env.ADMIN_EMAIL;

  if (!apiKey || !from || !to) {
    console.error("Missing RESEND_API_KEY, EMAIL_FROM, or ADMIN_EMAIL env vars");
    return NextResponse.json({ ok: false, error: "server_not_configured" }, { status: 500 });
  }

  const refId = generateRefId();
  const locale = body.locale === "en" ? "en" : "ko";

  const lines = [
    `[${refId}]`,
    locale === "ko" ? `이름: ${name}` : `Name: ${name}`,
    locale === "ko" ? `휴대전화: ${phone}` : `Phone: ${phone}`,
    email ? (locale === "ko" ? `이메일: ${email}` : `Email: ${email}`) : null,
    locale === "ko" ? `희망 일정: ${datesLabel}` : `Preferred dates: ${datesLabel}`,
    body.guestsLabel ? (locale === "ko" ? `인원: ${body.guestsLabel}` : `Guests: ${body.guestsLabel}`) : null,
    body.purposeLabel ? (locale === "ko" ? `이용 목적: ${body.purposeLabel}` : `Purpose: ${body.purposeLabel}`) : null,
    body.optionLabels?.length
      ? (locale === "ko" ? `옵션: ${body.optionLabels.join(", ")}` : `Add-ons: ${body.optionLabels.join(", ")}`)
      : null,
    body.message ? (locale === "ko" ? `문의 내용: ${body.message}` : `Message: ${body.message}`) : null,
  ].filter(Boolean);

  const resend = new Resend(apiKey);
  const subject =
    locale === "ko" ? `[수담재 문의] ${name}님 (${refId})` : `[Sudamjae Inquiry] ${name} (${refId})`;

  try {
    const { error } = await resend.emails.send({
      from: `Sudamjae Website <${from}>`,
      to,
      replyTo: email || undefined,
      subject,
      text: lines.join("\n"),
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, refId });
  } catch (err) {
    console.error("Resend send exception:", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
