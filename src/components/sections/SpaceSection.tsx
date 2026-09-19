import type { SpaceContent } from "@/content/types";
import { AspectImage, SectionHeading, Section } from "../ui";

const SPEC_ICONS = ["🏠", "🛏", "🍵", "🍳", "🛁", "🪜", "🌿", "👥"];

export function SpaceSection({ space }: { space: SpaceContent }) {
  return (
    <Section id="space" className="py-20 lg:py-28 bg-white/40">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-border">
        <SectionHeading eyebrow={space.eyebrow} title={space.title} />
        <p className="font-serif italic text-brown max-w-sm">{space.subtitle}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-6 px-6 my-10 bg-surface text-ink/80 font-sans text-sm">
        {space.specs.map((spec, i) => (
          <div key={spec} className="flex items-center gap-2">
            <span aria-hidden="true">{SPEC_ICONS[i] ?? "•"}</span>
            <span>{spec}</span>
          </div>
        ))}
      </div>

      <div className="space-y-16 lg:space-y-20">
        {space.rooms.map((room, i) => {
          const reversed = i % 2 === 1;
          return (
            <div
              key={room.title}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
            >
              <div className={`lg:col-span-7 ${reversed ? "lg:order-2" : "lg:order-1"}`}>
                <AspectImage src={room.image} alt={room.imageCaption} ratio="16/10" />
              </div>
              <div className={`lg:col-span-5 space-y-3 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
                <span className="font-sans text-xs uppercase tracking-widest text-brown">{room.tag}</span>
                <h3 className="font-serif text-2xl text-primary">{room.title}</h3>
                <p className="font-sans text-[15px] leading-relaxed text-ink/80">{room.description}</p>
                <ul className="space-y-1.5 font-sans text-sm text-ink/75">
                  {room.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green mt-2 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
