import type { Metadata } from "next";
import { getContent } from "@/content";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: `${getContent("en").privacy.title} | SUDAMJAE`,
  alternates: { canonical: "/en/privacy", languages: { ko: "/privacy", en: "/en/privacy" } },
};

export default function Page() {
  const content = getContent("en");
  return (
    <LegalPage
      legal={content.privacy}
      locale={content.locale}
      nav={content.nav}
      brand={content.hero.brand}
      footer={content.footer}
      location={content.location}
    />
  );
}
