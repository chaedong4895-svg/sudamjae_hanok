import type { LocationContent } from "@/content/types";
import { SectionHeading, Section } from "../ui";
import { CopyButton } from "../CopyButton";

const KO_ROAD_ADDRESS = "경기 여주시 세종대왕면 능서로 298-25";

export function LocationSection({ location }: { location: LocationContent }) {
  const naverMapUrl = `https://map.naver.com/p/search/${encodeURIComponent(KO_ROAD_ADDRESS)}`;
  const naverDirectionsUrl = `https://map.naver.com/p/directions/-/-/${encodeURIComponent(
    KO_ROAD_ADDRESS
  )}`;
  const hasPhone = Boolean(location.phone);
  const telHref = hasPhone ? `tel:${location.phone.replace(/[^0-9+]/g, "")}` : undefined;

  return (
    <Section id="location" className="py-20 lg:py-28">
      <SectionHeading eyebrow={location.eyebrow} title={location.title} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
        <div className="lg:col-span-5 space-y-5">
          <div className="p-6 bg-surface space-y-3">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-brown">
                {location.roadAddressLabel}
              </span>
              <p className="font-serif text-lg text-primary">{location.roadAddress}</p>
            </div>
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-brown">
                {location.lotAddressLabel}
              </span>
              <p className="font-sans text-sm text-ink/75">{location.lotAddress}</p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <CopyButton
                text={location.roadAddress}
                label={location.copyAddressLabel}
                copiedLabel={location.copiedLabel}
              />
              {hasPhone && (
                <a
                  href={telHref}
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-border text-sm font-sans text-ink/80 hover:border-primary hover:text-primary transition-colors"
                >
                  <span aria-hidden="true">☎</span>
                  <span>{location.callLabel}</span>
                </a>
              )}
            </div>
          </div>

          <div className="p-6 bg-surface space-y-2">
            <h3 className="font-serif text-lg text-primary">{location.directionsTitle}</h3>
            <p className="font-sans text-sm text-ink/75 leading-relaxed">{location.directionsNote}</p>
            <p className="font-sans text-sm text-ink/75 leading-relaxed">{location.parkingNote}</p>
            <p className="font-sans text-sm text-ink/75 leading-relaxed">{location.transitNote}</p>
          </div>

          <div className="space-y-1 font-sans text-sm text-ink/75">
            {hasPhone && (
              <p>
                {location.phoneLabel}: <a href={telHref} className="hover:text-primary">{location.phone}</a>
              </p>
            )}
            <p>
              {location.emailLabel}:{" "}
              <a href={`mailto:${location.email}`} className="hover:text-primary">
                {location.email}
              </a>
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative w-full aspect-[4/3] bg-surface flex flex-col items-center justify-center gap-4 p-8 text-center border border-border">
            <p className="font-sans text-sm text-ink/70">{location.mapFailureNote}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-background font-sans text-xs font-semibold uppercase tracking-widest hover:bg-brown transition-colors"
              >
                {location.openMapLabel}
              </a>
              <a
                href={naverDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-primary text-primary font-sans text-xs font-semibold uppercase tracking-widest hover:bg-primary hover:text-background transition-colors"
              >
                {location.directionsTitle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
