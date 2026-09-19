import type { MetadataRoute } from "next";

const paths = ["/", "/reservation", "/terms", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sudamjae.kr";
  return paths.map((path) => ({
    url: `${base}${path}`,
    alternates: {
      languages: {
        ko: `${base}${path}`,
        en: `${base}/en${path === "/" ? "" : path}`,
      },
    },
  }));
}
