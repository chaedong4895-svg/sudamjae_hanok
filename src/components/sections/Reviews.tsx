import type { ReviewsContent } from "@/content/types";
import { SectionHeading, Section } from "../ui";

export function Reviews({ reviews }: { reviews: ReviewsContent }) {
  return (
    <Section id="reviews" className="py-20 lg:py-28 bg-surface/60">
      <SectionHeading
        eyebrow={reviews.eyebrow}
        title={reviews.title}
        subtitle={reviews.subtitle}
        align="center"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {reviews.items.map((item) => (
          <div key={item.name} className="p-8 bg-white flex flex-col justify-between space-y-6">
            <p className="font-serif italic text-ink/80 leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
            <div className="pt-4 border-t border-border/60">
              <p className="font-sans text-sm font-medium text-primary">{item.name}</p>
              <span className="font-sans text-xs text-brown">{item.meta}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
