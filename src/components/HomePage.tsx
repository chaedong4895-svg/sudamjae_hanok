import type { SiteContent } from "@/content/types";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Hero } from "./sections/Hero";
import { Story } from "./sections/Story";
import { SpaceSection } from "./sections/SpaceSection";
import { ExperienceTimeline } from "./sections/ExperienceTimeline";
import { Culture } from "./sections/Culture";
import { YeojuSection } from "./sections/YeojuSection";
import { Gallery } from "./sections/Gallery";
import { Pricing } from "./sections/Pricing";
import { ReservationPreview } from "./sections/ReservationPreview";
import { LocationSection } from "./sections/LocationSection";
import { Reviews } from "./sections/Reviews";

export function HomePage({ content }: { content: SiteContent }) {
  const base = content.locale === "en" ? "/en" : "";
  const reservationHref = `${base}/reservation`;

  return (
    <>
      <Header locale={content.locale} nav={content.nav} brand={content.hero.brand} />
      <main className="pt-[72px]">
        <Hero hero={content.hero} storyHref={`${base}/#story`} reservationHref={reservationHref} />
        <Story story={content.story} spaceHref={`${base}/#space`} />
        <SpaceSection space={content.space} />
        <ExperienceTimeline experience={content.experience} />
        <Culture culture={content.culture} />
        <YeojuSection yeoju={content.yeoju} />
        <Gallery gallery={content.gallery} />
        <Pricing pricing={content.pricing} stayInfo={content.stayInfo} reservationHref={reservationHref} />
        <ReservationPreview content={content.reservationPreview} reservationHref={reservationHref} />
        <LocationSection location={content.location} locale={content.locale} />
        <Reviews reviews={content.reviews} />
      </main>
      <Footer footer={content.footer} location={content.location} />
    </>
  );
}
