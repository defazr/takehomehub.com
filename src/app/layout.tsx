import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TakeHomeHub — YouTube Creator Taxes by Country",
  description:
    "Understand how YouTube income is taxed globally. Compare tax rates, withholding, and take-home pay for YouTube creators across countries.",
  openGraph: {
    title: "TakeHomeHub — YouTube Creator Taxes by Country",
    description:
      "Compare YouTube tax rates, withholding, and take-home pay across the US, Germany, Canada, UK, and India.",
    url: "https://takehomehub.com",
    siteName: "TakeHomeHub",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TakeHomeHub — YouTube Creator Taxes by Country",
    description:
      "Compare YouTube tax rates and take-home pay across 5 countries.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}
      <body className="min-h-full flex flex-col">
        <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 py-3">
          <div className="mx-auto max-w-3xl flex items-center gap-5 text-sm font-medium">
            <Link href="/" className="font-bold text-base mr-2 hover:no-underline">
              TakeHomeHub
            </Link>
            <Link
              href="/compare/youtube-tax-by-country"
              className="hover:underline"
            >
              Compare
            </Link>
            <Link
              href="/calculators/youtube-earnings-after-tax"
              className="hover:underline"
            >
              Calculator
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
