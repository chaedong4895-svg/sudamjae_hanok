import type { ReservationPreviewContent } from "@/content/types";
import { Eyebrow, Section } from "../ui";

export function ReservationPreview({
  content,
  reservationHref,
}: {
  content: ReservationPreviewContent;
  reservationHref: string;
}) {
  return (
    <Section className="py-20 lg:py-24">
      <div className="bg-primary text-background px-8 py-14 lg:px-16 lg:py-16 text-center space-y-5">
        <Eyebrow>
          <span className="text-background/70">{content.eyebrow}</span>
        </Eyebrow>
        <h2 className="font-serif text-2xl lg:text-3xl">{content.title}</h2>
        <p className="font-sans text-background/80 max-w-xl mx-auto leading-relaxed">
          {content.description}
        </p>
        <a
          href={reservationHref}
          className="inline-flex items-center px-8 py-4 bg-background text-primary font-sans text-xs font-semibold uppercase tracking-[0.2em] hover:bg-surface transition-colors"
        >
          {content.ctaLabel}
        </a>
      </div>
    </Section>
  );
}
