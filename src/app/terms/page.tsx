import type { Metadata } from "next";
import { getContent } from "@/content";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: `${getContent("ko").terms.title} | 수담재`,
  alternates: { canonical: "/terms", languages: { ko: "/terms", en: "/en/terms" } },
};

export default function Page() {
  const content = getContent("ko");
  return (
    <LegalPage
      legal={content.terms}
      locale={content.locale}
      nav={content.nav}
      brand={content.hero.brand}
      footer={content.footer}
      location={content.location}
    />
  );
}
