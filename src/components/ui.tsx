import Image from "next/image";
import type { ReactNode } from "react";

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`w-full ${className}`}>
      <div className="max-w-content mx-auto px-5 lg:px-16">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="block font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-green">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`space-y-3 ${align === "center" ? "text-center mx-auto max-w-2xl" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-serif text-[28px] leading-tight text-primary lg:text-[36px] whitespace-pre-line">
        {title}
      </h2>
      {subtitle && (
        <p className="font-serif text-body italic text-brown">{subtitle}</p>
      )}
    </div>
  );
}

export function AspectImage({
  src,
  alt,
  ratio = "4/3",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-surface ${className}`}
      style={{ aspectRatio: ratio.replace("/", " / ") }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
