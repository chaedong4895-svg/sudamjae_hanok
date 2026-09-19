import type { Metadata } from "next";
import { Noto_Serif_KR, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { HtmlLangSetter } from "@/components/HtmlLangSetter";

const notoSerifKr = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sudamjae.kr"),
  title: "수담재 水潭齋 | 여주 프리미엄 독채 한옥 스테이",
  description:
    "경기 여주 세종대왕면의 프리미엄 독채 한옥 수담재. 한옥 건축과 정원, 다실에서 깊은 쉼을 경험하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSerifKr.variable} ${notoSansKr.variable}`}>
      <body className="font-sans bg-background text-ink antialiased">
        <HtmlLangSetter />
        {children}
      </body>
    </html>
  );
}
