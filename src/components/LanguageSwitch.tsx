"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/content/types";

function toKoPath(pathname: string): string {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const rest = pathname.slice(3);
    return rest === "" ? "/" : rest;
  }
  return pathname;
}

function toEnPath(pathname: string): string {
  const ko = toKoPath(pathname);
  return ko === "/" ? "/en" : `/en${ko}`;
}

export function LanguageSwitch({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname() ?? (locale === "en" ? "/en" : "/");
  const koHref = toKoPath(pathname);
  const enHref = toEnPath(pathname);

  return (
    <div className={`flex items-center gap-2 font-sans text-[11px] font-semibold tracking-wider ${className}`}>
      {locale === "ko" ? (
        <span className="text-primary" aria-current="true">KR</span>
      ) : (
        <Link href={koHref} className="text-brown/60 hover:text-primary transition-colors" aria-label="한국어로 보기">
          KR
        </Link>
      )}
      <span className="text-border" aria-hidden="true">/</span>
      {locale === "en" ? (
        <span className="text-primary" aria-current="true">EN</span>
      ) : (
        <Link href={enHref} className="text-brown/60 hover:text-primary transition-colors" aria-label="Switch to English">
          EN
        </Link>
      )}
    </div>
  );
}
