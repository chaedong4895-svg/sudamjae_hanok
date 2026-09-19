import type { Metadata } from "next";
import { getContent } from "@/content";
import { ReservationPage } from "@/components/ReservationPage";

export const metadata: Metadata = {
  title: `${getContent("ko").reservationPage.title} | 수담재`,
  description: getContent("ko").reservationPreview.description,
  alternates: {
    canonical: "/reservation",
    languages: { ko: "/reservation", en: "/en/reservation" },
  },
};

export default function Page() {
  return <ReservationPage content={getContent("ko")} />;
}
