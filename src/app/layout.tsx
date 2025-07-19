import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "丸山康太 | イベント×マーケティング事業 | 株式会社Wolf CEO",
  description: "元警察特殊部隊から起業家へ。イベント実績100本超、総リーチ3,000万フォロワー。BPO事業、イベントプロデュース、飲食マーケティングを展開。",
  keywords: ["丸山康太", "株式会社Wolf", "イベントプロデュース", "マーケティング", "BPO事業", "SNSマーケティング"],
  authors: [{ name: "丸山康太" }],
  openGraph: {
    title: "丸山康太 | 株式会社Wolf CEO",
    description: "イベント×マーケティング事業を展開。元警察特殊部隊から起業家へ。",
    images: [
      {
        url: "/kota-profile.jpg",
        width: 1200,
        height: 630,
        alt: "丸山康太プロフィール写真",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "丸山康太 | 株式会社Wolf CEO",
    description: "イベント×マーケティング事業を展開",
    images: ["/kota-profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
