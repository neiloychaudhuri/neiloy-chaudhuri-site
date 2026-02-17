import type { Metadata } from "next";
import { Manrope, EB_Garamond } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Neiloy Chaudhuri | Software Engineer",
  description:
    "Personal website of Neiloy Chaudhuri - Software Engineer with a passion for design, systems thinking, and building impactful products.",
  keywords: [
    "Software Engineer",
    "Neiloy Chaudhuri",
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Neiloy Chaudhuri" }],
  openGraph: {
    title: "Neiloy Chaudhuri | Software Engineer",
    description:
      "Personal website of Neiloy Chaudhuri - Software Engineer with a passion for design, systems thinking, and building impactful products.",
    url: "https://neiloy.me",
    siteName: "Neiloy Chaudhuri",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/photos/photo1.png",
        width: 1200,
        height: 630,
        alt: "Neiloy Chaudhuri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neiloy Chaudhuri | Software Engineer",
    description:
      "Personal website of Neiloy Chaudhuri - Software Engineer with a passion for design, systems thinking, and building impactful products.",
    creator: "@_neiloy",
    images: ["/photos/photo1.png"],
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
        className={`${manrope.variable} ${ebGaramond.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 pt-20">{children}</main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
