import type { Metadata } from "next";
import { getContent } from "@/content";
import { HomePage } from "@/components/HomePage";

export const metadata: Metadata = {
  title: getContent("en").meta.title,
  description: getContent("en").meta.description,
  alternates: {
    canonical: "/en",
    languages: { ko: "/", en: "/en" },
  },
};

export default function Page() {
  return <HomePage content={getContent("en")} />;
}
