import type { Metadata } from "next";
import { getContent } from "@/content";
import { HomePage } from "@/components/HomePage";

export const metadata: Metadata = {
  title: getContent("ko").meta.title,
  description: getContent("ko").meta.description,
  alternates: {
    canonical: "/",
    languages: { ko: "/", en: "/en" },
  },
};

export default function Page() {
  return <HomePage content={getContent("ko")} />;
}
