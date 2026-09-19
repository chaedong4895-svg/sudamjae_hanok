import type { PricingContent, StayInfoContent } from "@/content/types";
import { SectionHeading, Section } from "../ui";

export function Pricing({
  pricing,
  stayInfo,
  reservationHref,
}: {
  pricing: PricingContent;
  stayInfo: StayInfoContent;
  reservationHref: string;
}) {
  return (
    <Section id="pricing" className="py-20 lg:py-28 bg-surface/60">
      <SectionHeading eyebrow={pricing.eyebrow} title={pricing.title} subtitle={pricing.subtitle} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        <div>
          <h3 className="font-serif text-xl text-primary mb-4">{pricing.stayTitle}</h3>
          <div className="divide-y divide-border bg-white">
            {pricing.stayRates.map((row) => (
              <div key={row.label} className="flex items-center justify-between gap-4 px-5 py-4">
                <div>
                  <p className="font-sans text-sm text-ink/85">{row.label}</p>
                  <p className="font-sans text-xs text-brown">{row.note}</p>
                </div>
                <p className="font-serif text-lg text-primary whitespace-nowrap">{row.price}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-sm text-ink/70 mt-3">{pricing.extraGuestNote}</p>
        </div>

        <div>
          <h3 className="font-serif text-xl text-primary mb-4">{pricing.venueTitle}</h3>
          <div className="divide-y divide-border bg-white">
            {pricing.venueRates.map((row) => (
              <div key={row.label} className="flex items-center justify-between gap-4 px-5 py-4">
                <div>
                  <p className="font-sans text-sm text-ink/85">{row.label}</p>
                  <p className="font-sans text-xs text-brown">{row.note}</p>
                </div>
                <p className="font-serif text-lg text-primary whitespace-nowrap">{row.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-1.5">
        {pricing.footnotes.map((note) => (
          <p key={note} className="font-sans text-xs text-brown leading-relaxed">
            · {note}
          </p>
        ))}
        <a
          href={`${reservationHref}#cancellation`}
          className="inline-block font-sans text-xs text-primary underline underline-offset-4 pt-1"
        >
          · {pricing.cancellationLinkLabel}
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
        <div className="p-5 bg-white">
          <span className="font-sans text-xs uppercase tracking-widest text-brown block mb-1">
            {stayInfo.checkTitle}
          </span>
          <p className="font-serif text-2xl text-primary">{stayInfo.checkValue}</p>
          <p className="font-sans text-sm text-ink/70 mt-2">{stayInfo.checkNote}</p>
        </div>
        <div className="p-5 bg-white">
          <span className="font-sans text-xs uppercase tracking-widest text-brown block mb-1">
            {stayInfo.capacityTitle}
          </span>
          <p className="font-serif text-2xl text-primary">{stayInfo.capacityValue}</p>
          <p className="font-sans text-sm text-ink/70 mt-2">{stayInfo.capacityNote}</p>
        </div>
      </div>

      <div className="p-6 bg-white mt-4 space-y-3">
        <h3 className="font-serif text-lg text-primary">{stayInfo.includedTitle}</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-sans text-sm text-ink/75">
          {stayInfo.includedItems.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green mt-2 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div className="p-5 bg-white">
          <span className="font-sans text-xs uppercase tracking-widest text-brown block mb-1">
            {stayInfo.petPolicyTitle}
          </span>
          <p className="font-sans text-sm text-ink/75 leading-relaxed">{stayInfo.petPolicyBody}</p>
        </div>
        <div className="p-5 bg-white">
          <span className="font-sans text-xs uppercase tracking-widest text-brown block mb-1">
            {stayInfo.parkingPolicyTitle}
          </span>
          <p className="font-sans text-sm text-ink/75 leading-relaxed">{stayInfo.parkingPolicyBody}</p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href={reservationHref}
          className="inline-flex items-center px-8 py-4 bg-primary text-background font-sans text-xs font-semibold uppercase tracking-[0.2em] hover:bg-brown transition-colors"
        >
          {pricing.ctaLabel}
        </a>
      </div>
    </Section>
  );
}
