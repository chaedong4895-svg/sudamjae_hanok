"use client";

import { useState } from "react";
import type { InquiryFormContent, Locale } from "@/content/types";

export interface InquirySummary {
  datesLabel: string | null;
  guestsLabel: string;
  purposeLabel: string;
  optionLabels: string[];
}

function generateRefId(): string {
  const now = new Date();
  const y = now.getFullYear().toString().slice(2);
  const stamp = now.getTime().toString().slice(-6);
  return `SDJ-${y}${stamp}`;
}

export function InquiryForm({
  content,
  locale,
  summary,
  contactEmail,
  contactPhone,
}: {
  content: InquiryFormContent;
  locale: Locale;
  summary: InquirySummary;
  contactEmail: string;
  contactPhone: string;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [manualDates, setManualDates] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [refId, setRefId] = useState<string | null>(null);

  const effectiveDatesLabel = summary.datesLabel ?? manualDates;

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (name.trim().length < 2) next.name = content.errors.name;
    if (!/^[0-9+\-\s]{9,}$/.test(phone.trim())) next.phone = content.errors.phone;
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = content.errors.email;
    if (!effectiveDatesLabel || !effectiveDatesLabel.trim()) next.dates = content.errors.dates;
    if (!consent) next.consent = content.errors.consent;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function buildMailBody(id: string): string {
    const lines = [
      `[${id}]`,
      `${content.nameLabel}: ${name}`,
      `${content.phoneLabel}: ${phone}`,
      email ? `${content.emailLabel}: ${email}` : null,
      `${content.datesLabel}: ${effectiveDatesLabel}`,
      `${content.guestsLabel}: ${summary.guestsLabel}`,
      `${content.purposeLabel}: ${summary.purposeLabel}`,
      summary.optionLabels.length ? `${content.optionsLabel}: ${summary.optionLabels.join(", ")}` : null,
      message ? `${content.messageLabel}: ${message}` : null,
    ].filter(Boolean);
    return lines.join("\n");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    const id = generateRefId();
    const subject = encodeURIComponent(
      locale === "ko" ? `[수담재 문의] ${name}님` : `[Sudamjae Inquiry] ${name}`
    );
    const body = encodeURIComponent(buildMailBody(id));
    setRefId(id);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  if (refId) {
    return (
      <div id="inquiry-form" className="p-8 bg-surface text-center space-y-3">
        <h3 className="font-serif text-xl text-primary">{content.successTitle}</h3>
        <p className="font-sans text-sm text-ink/80 leading-relaxed">
          {content.successBodyTemplate.replace("{ref}", refId)}
        </p>
        <p className="font-sans text-xs text-brown">{content.mailFallback}</p>
        <a href={`mailto:${contactEmail}`} className="font-sans text-sm text-primary underline">
          {contactEmail}
        </a>
        {contactPhone && (
          <>
            <p className="font-sans text-xs text-brown pt-1">{content.phoneFallback}</p>
            <a href={`tel:${contactPhone.replace(/[^0-9+]/g, "")}`} className="font-sans text-sm text-primary underline">
              {contactPhone}
            </a>
          </>
        )}
      </div>
    );
  }

  return (
    <form id="inquiry-form" onSubmit={handleSubmit} className="p-6 sm:p-8 bg-surface space-y-5">
      <div>
        <h3 className="font-serif text-xl text-primary">{content.title}</h3>
        <p className="font-sans text-sm text-ink/70 mt-1">{content.description}</p>
      </div>

      <div className="p-4 bg-white text-sm font-sans text-ink/75 space-y-1">
        <p>
          {content.datesLabel}: <strong>{summary.datesLabel ?? "—"}</strong>
        </p>
        <p>
          {content.guestsLabel}: <strong>{summary.guestsLabel}</strong>
        </p>
        <p>
          {content.purposeLabel}: <strong>{summary.purposeLabel}</strong>
        </p>
        {summary.optionLabels.length > 0 && (
          <p>
            {content.optionsLabel}: <strong>{summary.optionLabels.join(", ")}</strong>
          </p>
        )}
      </div>

      {!summary.datesLabel && (
        <div>
          <label htmlFor="manual-dates" className="block font-sans text-sm text-ink/80 mb-1">
            {content.datesLabel} <span className="text-green">{content.requiredMark}</span>
          </label>
          <input
            id="manual-dates"
            type="text"
            value={manualDates}
            onChange={(e) => setManualDates(e.target.value)}
            placeholder={locale === "ko" ? "예: 2026년 10월 첫째 주" : "e.g. First week of October 2026"}
            className="w-full bg-white px-4 py-3 border border-border focus:border-primary focus:outline-none font-sans text-sm"
          />
          {errors.dates && <p className="text-xs text-red-700 mt-1">{errors.dates}</p>}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block font-sans text-sm text-ink/80 mb-1">
            {content.nameLabel} <span className="text-green">{content.requiredMark}</span>
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={content.namePlaceholder}
            className="w-full bg-white px-4 py-3 border border-border focus:border-primary focus:outline-none font-sans text-sm"
          />
          {errors.name && <p className="text-xs text-red-700 mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block font-sans text-sm text-ink/80 mb-1">
            {content.phoneLabel} <span className="text-green">{content.requiredMark}</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={content.phonePlaceholder}
            className="w-full bg-white px-4 py-3 border border-border focus:border-primary focus:outline-none font-sans text-sm"
          />
          {errors.phone && <p className="text-xs text-red-700 mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block font-sans text-sm text-ink/80 mb-1">
          {content.emailLabel}
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={content.emailPlaceholder}
          className="w-full bg-white px-4 py-3 border border-border focus:border-primary focus:outline-none font-sans text-sm"
        />
        {errors.email && <p className="text-xs text-red-700 mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block font-sans text-sm text-ink/80 mb-1">
          {content.messageLabel}
        </label>
        <textarea
          id="message"
          value={message}
          maxLength={1000}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={content.messagePlaceholder}
          rows={4}
          className="w-full bg-white px-4 py-3 border border-border focus:border-primary focus:outline-none font-sans text-sm"
        />
      </div>

      <div>
        <label className="flex items-start gap-2 font-sans text-sm text-ink/80">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1"
          />
          <span>
            {content.consentLabel} <span className="text-green">{content.requiredMark}</span>
            <span className="block text-xs text-brown mt-0.5">{content.consentDetail}</span>
          </span>
        </label>
        {errors.consent && <p className="text-xs text-red-700 mt-1">{errors.consent}</p>}
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-primary text-background font-sans text-sm font-semibold uppercase tracking-widest hover:bg-brown transition-colors"
      >
        {content.submitLabel}
      </button>
    </form>
  );
}
