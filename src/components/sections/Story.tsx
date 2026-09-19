import type { StoryContent } from "@/content/types";
import { AspectImage, Eyebrow, Section } from "../ui";

export function Story({ story, spaceHref }: { story: StoryContent; spaceHref: string }) {
  return (
    <Section id="story" className="py-20 lg:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-6">
          <div className="p-2 lg:p-3 bg-surface shadow-sm">
            <AspectImage
              src="/images/exterior/exterior-08.jpg"
              alt={story.imageCaption}
              ratio="4/3"
            />
          </div>
          <div className="mt-3 flex items-center justify-between font-sans text-xs text-brown">
            <span>{story.imageCaption}</span>
            <span>{story.imageSubCaption}</span>
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 space-y-5">
          <Eyebrow>{story.eyebrow}</Eyebrow>
          <h2 className="font-serif text-[28px] lg:text-[36px] leading-tight text-primary whitespace-pre-line">
            {story.title}
          </h2>
          {story.paragraphs.map((p) => (
            <p key={p} className="font-sans text-[15px] leading-relaxed text-ink/80">
              {p}
            </p>
          ))}
          <div className="p-6 bg-surface border-l-2 border-primary space-y-2">
            <p className="font-serif italic text-primary leading-relaxed">&ldquo;{story.quote}&rdquo;</p>
            <span className="font-sans text-xs text-brown block text-right">— {story.quoteAuthor}</span>
          </div>
          <a
            href={spaceHref}
            className="inline-flex items-center gap-2 font-sans text-sm text-primary underline underline-offset-8 decoration-border hover:decoration-primary transition-all"
          >
            {story.linkLabel}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
