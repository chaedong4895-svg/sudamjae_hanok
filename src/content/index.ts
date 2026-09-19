import { ko } from "./ko";
import { en } from "./en";
import type { Locale, SiteContent } from "./types";

export const dictionaries: Record<Locale, SiteContent> = { ko, en };

export function getContent(locale: Locale): SiteContent {
  return dictionaries[locale];
}

export * from "./types";
