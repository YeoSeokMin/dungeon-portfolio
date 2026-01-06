import type { Metadata } from "next";
import { Cinzel, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Dungeon Portfolio | 던전 탐험형 개발자 포트폴리오",
  description: "8개 프로젝트를 던전 맵 형태로 시각화한 인터랙티브 포트폴리오",
  keywords: ["포트폴리오", "개발자", "프론트엔드", "React", "Next.js"],
  metadataBase: new URL("https://dungeon-portfolio-iota.vercel.app"),
  openGraph: {
    title: "Dungeon Portfolio",
    description: "던전 탐험형 개발자 포트폴리오 - Click Room to Explore",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dungeon Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dungeon Portfolio",
    description: "던전 탐험형 개발자 포트폴리오",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${cinzel.variable} ${notoSansKR.variable} antialiased bg-[#0a0a0f] text-[#e5e5e5]`}
        style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
