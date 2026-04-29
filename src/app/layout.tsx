import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import { Background } from "@/components/Background";
import { Header } from "@/components/Header";
import { siteMeta } from "@/data/portfolio";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.siteUrl),
  title: {
    default: `${siteMeta.name} — ${siteMeta.title}`,
    template: `%s | ${siteMeta.name}`,
  },
  description:
    "Portfolio of Abdullah Waqas — Machine Learning, Computer Vision, and Backend Engineering. NUST Computer Science.",
  keywords: [
    "Abdullah Waqas",
    "Machine Learning",
    "Computer Vision",
    "FastAPI",
    "Django",
    "NUST",
    "Python",
  ],
  authors: [{ name: siteMeta.name }],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteMeta.siteUrl,
    siteName: `${siteMeta.name} — Portfolio`,
    title: `${siteMeta.name} — ${siteMeta.title}`,
    description:
      "ML, computer vision, and production backends — from 95%+ CV models to platforms at scale.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteMeta.name} — ${siteMeta.title}`,
    description:
      "ML, computer vision, and production backends — portfolio and contact.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteMeta.name,
  email: siteMeta.email,
  telephone: siteMeta.phone,
  address: { "@type": "PostalAddress", addressLocality: siteMeta.location },
  url: siteMeta.siteUrl,
  sameAs: [siteMeta.linkedInUrl],
  jobTitle: siteMeta.title,
  alumniOf: { "@type": "CollegeOrUniversity", name: "NUST" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="noise">
        <Background />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
