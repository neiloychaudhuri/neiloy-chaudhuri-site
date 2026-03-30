import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Neiloy Chaudhuri",
  description:
    "Neiloy Chaudhuri — Management Engineering student at the University of Waterloo, seeking product management opportunities.",
  keywords: [
    "Product Manager",
    "Neiloy Chaudhuri",
    "Management Engineering",
    "University of Waterloo",
    "PM co-op",
  ],
  authors: [{ name: "Neiloy Chaudhuri" }],
  openGraph: {
    title: "Neiloy Chaudhuri",
    description:
      "Neiloy Chaudhuri — Management Engineering student at the University of Waterloo, seeking product management opportunities.",
    url: "https://neiloy.me",
    siteName: "Neiloy Chaudhuri",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/thumbnail_me.jpg",
        width: 1200,
        height: 630,
        alt: "Neiloy Chaudhuri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neiloy Chaudhuri",
    description:
      "Neiloy Chaudhuri — Management Engineering student at the University of Waterloo, seeking product management opportunities.",
    creator: "@_neiloy",
    images: ["/thumbnail_me.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${instrumentSerif.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <main className="flex-1">{children}</main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
