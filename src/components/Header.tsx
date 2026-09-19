"use client";

import Link from "next/link";
import { useState } from "react";
import type { Locale, NavContent } from "@/content/types";
import { LanguageSwitch } from "./LanguageSwitch";

export function Header({
  locale,
  nav,
  brand,
}: {
  locale: Locale;
  nav: NavContent;
  brand: string;
}) {
  const [open, setOpen] = useState(false);
  const base = locale === "en" ? "/en" : "";
  const reservationHref = `${base}/reservation`;

  const links = [
    { label: nav.story, href: `${base}/#story` },
    { label: nav.space, href: `${base}/#space` },
    { label: nav.experience, href: `${base}/#experience` },
    { label: nav.culture, href: `${base}/#culture` },
    { label: nav.yeoju, href: `${base}/#yeoju` },
    { label: nav.gallery, href: `${base}/#gallery` },
    { label: nav.pricing, href: `${base}/#pricing` },
    { label: nav.location, href: `${base}/#location` },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/60">
      <div className="max-w-content mx-auto px-5 lg:px-16 h-[72px] flex items-center justify-between">
        <Link href={base || "/"} className="flex flex-col leading-none">
          <span className="font-serif text-lg text-primary">{brand}</span>
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-brown">
            Sudamjae
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-6" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-ink/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitch locale={locale} className="hidden sm:flex" />
          <Link
            href={reservationHref}
            className="hidden sm:inline-flex items-center px-5 py-2.5 bg-primary text-background font-sans text-xs font-semibold uppercase tracking-widest hover:bg-brown transition-colors"
          >
            {nav.reservationCta}
          </Link>
          <button
            type="button"
            className="xl:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block h-[1.5px] bg-primary transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] bg-primary transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] bg-primary transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border/60 bg-background">
          <nav className="flex flex-col px-5 py-4 gap-1" aria-label="Mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 font-sans text-sm text-ink/85 border-b border-border/40 last:border-none"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-4">
              <LanguageSwitch locale={locale} />
              <Link
                href={reservationHref}
                onClick={() => setOpen(false)}
                className="inline-flex items-center px-5 py-2.5 bg-primary text-background font-sans text-xs font-semibold uppercase tracking-widest"
              >
                {nav.reservationCta}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
