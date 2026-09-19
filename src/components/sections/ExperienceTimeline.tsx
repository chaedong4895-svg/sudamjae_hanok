import type { ExperienceContent } from "@/content/types";
import { AspectImage, Eyebrow, Section } from "../ui";

export function ExperienceTimeline({ experience }: { experience: ExperienceContent }) {
  return (
    <Section id="experience" className="py-20 lg:py-28 bg-primary text-background">
      <div className="max-w-3xl mb-12 space-y-2">
        <Eyebrow>
          <span className="text-background/70">{experience.eyebrow}</span>
        </Eyebrow>
        <h2 className="font-serif text-[28px] lg:text-[36px] text-background leading-tight">
          {experience.title}
        </h2>
        <p className="font-serif italic text-background/80">{experience.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <div className="p-2 bg-background/10 shadow-2xl">
            <AspectImage src="/images/interior/main-hall.jpg" alt={experience.imageCaption} ratio="4/5" />
          </div>
          <div className="mt-4 p-4 bg-background/10 space-y-1">
            <p className="font-serif text-background">{experience.imageCaption}</p>
            <p className="font-sans text-sm text-background/75 font-light">{experience.imageDescription}</p>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4 lg:pl-6">
          {experience.timeline.map((item) => (
            <div
              key={item.time}
              className="flex gap-4 p-4 rounded bg-background/10 hover:bg-background/15 transition-colors"
            >
              <div className="shrink-0 font-sans text-xs font-bold tracking-wider text-background/90 pt-1 w-16">
                {item.time}
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-lg text-background">{item.title}</h4>
                <p className="font-sans text-sm text-background/80 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
