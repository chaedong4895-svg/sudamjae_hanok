import type { YeojuContent } from "@/content/types";
import { SectionHeading, Section } from "../ui";

export function YeojuSection({ yeoju }: { yeoju: YeojuContent }) {
  return (
    <Section id="yeoju" className="py-20 lg:py-28 bg-surface/60">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <SectionHeading eyebrow={yeoju.eyebrow} title={yeoju.title} />
        <p className="font-serif italic text-brown max-w-sm">{yeoju.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {yeoju.places.map((place) => (
          <div key={place.name} className="p-6 bg-white space-y-3 hover:shadow-sm transition-all">
            <div className="flex justify-between items-center text-xs font-sans text-green font-medium">
              <span>{place.category}</span>
              <span className="px-2 py-0.5 bg-surface text-ink/70">{place.distance}</span>
            </div>
            <h3 className="font-serif text-lg text-primary font-medium">{place.name}</h3>
            <p className="font-sans text-sm text-ink/75 leading-relaxed">{place.description}</p>
            <div className="text-brown font-sans text-xs flex items-center gap-1">
              <span aria-hidden="true">📍</span>
              <span>{place.address}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
