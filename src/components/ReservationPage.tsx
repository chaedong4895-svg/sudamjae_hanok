import type { SiteContent } from "@/content/types";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Section } from "./ui";
import { ReservationClient } from "./reservation/ReservationClient";
import { CancellationPolicy } from "./reservation/CancellationPolicy";

export function ReservationPage({ content }: { content: SiteContent }) {
  return (
    <>
      <Header locale={content.locale} nav={content.nav} brand={content.hero.brand} />
      <main className="pt-[72px]">
        <Section className="py-16 lg:py-20">
          <div className="mb-8 space-y-3">
            <h1 className="font-serif text-3xl lg:text-4xl text-primary">{content.reservationPage.title}</h1>
            <p className="font-sans text-sm lg:text-base text-ink/75 max-w-3xl leading-relaxed">
              {content.reservationPage.intro}
            </p>
          </div>
          <ReservationClient
            content={content.reservationPage}
            inquiryContent={content.inquiryForm}
            locale={content.locale}
            contactEmail={content.location.email}
            contactPhone={content.location.phone}
          />
          <div className="mt-10">
            <CancellationPolicy content={content.cancellation} />
          </div>
        </Section>
      </main>
      <Footer footer={content.footer} location={content.location} />
    </>
  );
}
