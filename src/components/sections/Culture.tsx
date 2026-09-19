import type { CultureContent } from "@/content/types";
import { SectionHeading, Section } from "../ui";

export function Culture({ culture }: { culture: CultureContent }) {
  return (
    <Section id="culture" className="py-20 lg:py-28">
      <SectionHeading
        eyebrow={culture.eyebrow}
        title={culture.title}
        subtitle={culture.subtitle}
        align="center"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {culture.cards.map((card, i) => (
          <div
            key={card.title}
            className={`p-6 bg-surface flex flex-col justify-between space-y-4 ${
              i === culture.cards.length - 1 ? "md:col-span-2 lg:col-span-3" : ""
            }`}
          >
            <div className="space-y-2">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-green block">
                {card.tag}
              </span>
              <h3 className="font-serif text-xl text-primary">{card.title}</h3>
              <p className="font-sans text-[15px] leading-relaxed text-ink/80">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
