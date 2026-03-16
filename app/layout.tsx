import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: "600",
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avera Systems",
  icons: {
    icon: [
      { url: '/Avera/favicon.ico' },
      { url: '/Avera/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/Avera/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/Avera/apple-touch-icon.png',
    other: [
      { rel: 'manifest', url: '/Avera/site.webmanifest' },
    ],
  },
  description:
    "Continuous, defensible device history. Without reconstruction.",
  openGraph: {
    title: "Avera Systems",
    description:
      "Continuous, defensible device history. Without reconstruction.",
    url: "https://averasystems.com",
    siteName: "Avera Systems",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avera Systems",
    description:
      "Continuous, defensible device history. Without reconstruction.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
