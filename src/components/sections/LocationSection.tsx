import type { Locale, LocationContent } from "@/content/types";
import { SectionHeading, Section } from "../ui";
import { CopyButton } from "../CopyButton";
import { NaverMap } from "../NaverMap";

const KO_ROAD_ADDRESS = "경기 여주시 세종대왕면 능서로 298-25";
// Fixed pin for 왕대리 692-66 (지번 주소), copied from Naver Map; avoids needing the Geocoding API.
const PROPERTY_LAT = 37.320406;
const PROPERTY_LNG = 127.589559;

export function LocationSection({
  location,
  locale,
}: {
  location: LocationContent;
  locale: Locale;
}) {
  // Keyless Google Maps embed, used by NaverMap as a fallback when no Naver client id is configured
  // (or it fails auth).
  const mapEmbedUrl = `https://maps.google.com/maps?q=${PROPERTY_LAT},${PROPERTY_LNG}&hl=${locale}&z=16&output=embed`;
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
          <div className="relative w-full aspect-[4/3] bg-surface border border-border">
            <NaverMap
              clientId={process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}
              lat={PROPERTY_LAT}
              lng={PROPERTY_LNG}
              title={location.mapTitle}
              fallbackSrc={mapEmbedUrl}
            />
          </div>
          <div className="mt-4 space-y-3">
            <p className="font-sans text-xs text-ink/60">{location.mapFailureNote}</p>
            <div className="flex flex-wrap gap-3">
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
