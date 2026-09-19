"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** app router의 root layout은 <html> 태그를 한 번만 정의할 수 있어, 로케일별 lang 속성은 클라이언트에서 보정한다. */
export function HtmlLangSetter() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = pathname?.startsWith("/en") ? "en" : "ko";
  }, [pathname]);

  return null;
}
