import Image from "next/image";
import type { HeroContent } from "@/content/types";

export function Hero({
  hero,
  storyHref,
  reservationHref,
}: {
  hero: HeroContent;
  storyHref: string;
  reservationHref: string;
}) {
  return (
    <section className="relative w-full min-h-[92vh] flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="수담재 외경 전경"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/35 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-content mx-auto px-5 lg:px-16 pb-16 pt-32 text-background">
        <div className="max-w-2xl space-y-5">
          <div className="flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-background/60" />
            <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-background/80">
              {hero.eyebrow}
            </p>
          </div>
          <div className="space-y-2">
            <span className="font-serif text-[40px] leading-tight lg:text-[56px] block">
              {hero.brand}{" "}
              <span className="font-sans text-xl lg:text-2xl font-light text-background/80 tracking-widest ml-2">
                {hero.brandHanja}
              </span>
            </span>
            <p className="font-serif text-xl lg:text-2xl font-light">{hero.title}</p>
          </div>
          <p className="font-serif italic text-base lg:text-lg text-background/90 max-w-xl leading-relaxed">
            &ldquo;{hero.tagline}&rdquo;
          </p>
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <a
              href={reservationHref}
              className="px-8 py-4 bg-background text-primary font-sans text-xs font-semibold uppercase tracking-[0.2em] hover:bg-surface transition-colors"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href={storyHref}
              className="px-8 py-4 border border-background/60 text-background font-sans text-xs font-semibold uppercase tracking-[0.2em] hover:bg-background/10 transition-colors"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between text-background/70 font-sans text-[11px] tracking-[0.2em]">
          <span className="uppercase">{hero.location}</span>
          <a href={storyHref} className="flex items-center gap-2 hover:text-background transition-colors">
            <span>{hero.scrollHint}</span>
            <span aria-hidden="true">&darr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
