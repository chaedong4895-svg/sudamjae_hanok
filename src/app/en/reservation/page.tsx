import type { Metadata } from "next";
import { getContent } from "@/content";
import { ReservationPage } from "@/components/ReservationPage";

export const metadata: Metadata = {
  title: `${getContent("en").reservationPage.title} | SUDAMJAE`,
  description: getContent("en").reservationPreview.description,
  alternates: {
    canonical: "/en/reservation",
    languages: { ko: "/reservation", en: "/en/reservation" },
  },
};

export default function Page() {
  return <ReservationPage content={getContent("en")} />;
}
