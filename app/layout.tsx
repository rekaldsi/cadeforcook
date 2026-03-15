import type { Metadata } from "next";
import { Fraunces, Inter, DM_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkipNav from "@/components/SkipNav";
import { StickyDonateBar } from "@/components/DonateButton";
import { LangProvider } from "@/lib/LangContext";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nicholas Cade for Cook County Commissioner, District 8",
  description:
    "A Chicagoan putting people before politics. Nicholas Cade is running for Cook County Commissioner, District 8 — to make government work for you, not for insiders.",
  metadataBase: new URL("https://cadeforcook.com"),
  openGraph: {
    title: "Vote Nicholas Cade · Cook County Commissioner, District 8",
    description:
      "March 17 Primary — Irving Park dad, Navy veteran, teacher, attorney. Fighting for District 8 families.",
    type: "website",
    url: "https://cadeforcook.com",
    siteName: "Cade for Cook",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nicholas Cade for Cook County Commissioner, District 8",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vote Nicholas Cade · Cook County Commissioner, District 8",
    description:
      "March 17 Primary — Irving Park dad, Navy veteran, teacher, attorney. Fighting for District 8 families.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${dmMono.variable} antialiased`}
      >
        <LangProvider>
          <SkipNav />
          <Header />
          <main id="main-content" role="main">
            {children}
          </main>
          <Footer />
          <StickyDonateBar />
        </LangProvider>
      </body>
    </html>
  );
}
