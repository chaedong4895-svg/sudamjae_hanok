import type { Locale, LegalPageContent, NavContent, HeroContent, FooterContent, LocationContent } from "@/content/types";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Section } from "./ui";

export function LegalPage({
  legal,
  locale,
  nav,
  brand,
  footer,
  location,
}: {
  legal: LegalPageContent;
  locale: Locale;
  nav: NavContent;
  brand: HeroContent["brand"];
  footer: FooterContent;
  location: LocationContent;
}) {
  return (
    <>
      <Header locale={locale} nav={nav} brand={brand} />
      <main className="pt-[72px]">
        <Section className="py-16 lg:py-20">
          <div className="max-w-2xl">
            <h1 className="font-serif text-3xl text-primary mb-2">{legal.title}</h1>
            <p className="font-sans text-xs text-brown mb-10">{legal.updated}</p>
            <div className="space-y-8">
              {legal.sections.map((s) => (
                <div key={s.heading} className="space-y-2">
                  <h2 className="font-serif text-lg text-primary">{s.heading}</h2>
                  {s.body.map((p) => (
                    <p key={p} className="font-sans text-sm text-ink/80 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <Footer footer={footer} location={location} />
    </>
  );
}
