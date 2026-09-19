import Link from "next/link";
import type { FooterContent, LocationContent } from "@/content/types";
import { Section } from "./ui";

export function Footer({
  footer,
  location,
}: {
  footer: FooterContent;
  location: LocationContent;
}) {
  return (
    <footer className="w-full bg-surface border-t border-border/60">
      <Section className="py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-10 pb-10">
          <div className="max-w-md space-y-2">
            <span className="font-serif text-xl text-primary block">{footer.brand}</span>
            <p className="font-serif italic text-brown leading-relaxed">{footer.tagline}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-ink/80 font-sans text-sm">
            <div className="space-y-1.5">
              <div className="font-sans text-[11px] uppercase tracking-widest text-primary font-semibold mb-2">
                {footer.addressTitle}
              </div>
              <p className="leading-relaxed">{location.roadAddress}</p>
              {location.phone && <p>{location.phone}</p>}
              <p>{location.email}</p>
            </div>
            <div className="space-y-1.5">
              <div className="font-sans text-[11px] uppercase tracking-widest text-primary font-semibold mb-2">
                {footer.connectTitle}
              </div>
              <div className="flex flex-col gap-1">
                {footer.connectLinks.map((link) => (
                  <span key={link}>{link}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-3 font-sans text-xs text-brown">
          <div className="flex flex-wrap items-center gap-6">
            {footer.legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <p>{footer.copyright}</p>
        </div>
      </Section>
    </footer>
  );
}
