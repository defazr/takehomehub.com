import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import Link from "next/link";
import Footer from "@/components/Footer";
import ScrollTopButton from "@/components/ScrollTopButton";
import MobileMenu from "@/components/MobileMenu";
import GoogleAdSense from "@/components/GoogleAdSense";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim();
const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID?.trim();

const lexend = Lexend({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const siteUrl = "https://takehomehub.com";

export const metadata: Metadata = {
  title: "TakeHomeHub — YouTube Creator Taxes by Country",
  description:
    "Understand how YouTube income is taxed globally. Compare tax rates, withholding, and take-home pay for YouTube creators across countries.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "google-adsense-account": "ca-pub-7976139023602789",
  },
  openGraph: {
    title: "TakeHomeHub — YouTube Creator Taxes by Country",
    description:
      "Compare YouTube tax rates, withholding, and take-home pay across the US, Germany, Canada, UK, and India.",
    url: siteUrl,
    siteName: "TakeHomeHub",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TakeHomeHub — YouTube Creator Taxes by Country",
    description:
      "Compare YouTube tax rates and take-home pay across 5 countries.",
    images: [`${siteUrl}/og-image.png`],
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
      className={`${lexend.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#020617]">
        {GA_ID && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
          </>
        )}
        {ADSENSE_ID && <GoogleAdSense pubId={ADSENSE_ID} />}
        <nav className="sticky top-0 z-50 border-b border-[#E2E8F0] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 px-4 py-3">
          <div className="mx-auto max-w-4xl flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="font-heading font-bold text-lg text-[#0F172A] hover:no-underline tracking-tight"
              >
                TakeHomeHub
              </Link>
              <div className="hidden md:flex gap-5 font-medium text-[#475569]">
                <Link
                  href="/compare/youtube-tax-by-country"
                  className="hover:text-[#0F172A] transition-colors duration-200"
                >
                  Compare
                </Link>
                <Link
                  href="/calculators/youtube-earnings-after-tax"
                  className="hover:text-[#0F172A] transition-colors duration-200"
                >
                  Calculator
                </Link>
              </div>
            </div>
            <MobileMenu />
          </div>
        </nav>
        {children}
        <Footer />
        <ScrollTopButton />
      </body>
    </html>
  );
}
