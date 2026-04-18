import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TakeHomeHub — YouTube Creator Taxes by Country",
  description:
    "Understand how YouTube income is taxed globally. Compare tax rates, withholding, and take-home pay for YouTube creators across the US, Germany, Canada, UK, and India.",
};

const countries = [
  {
    name: "United States",
    slug: "us",
    flag: "🇺🇸",
    retention: "78%",
    highlight: "$60k → $46,869",
  },
  {
    name: "Germany",
    slug: "germany",
    flag: "🇩🇪",
    retention: "74%",
    highlight: "€60k → €44,390",
  },
  {
    name: "Canada",
    slug: "canada",
    flag: "🇨🇦",
    retention: "66%",
    highlight: "C$90k → C$59,809",
  },
  {
    name: "United Kingdom",
    slug: "uk",
    flag: "🇬🇧",
    retention: "77%",
    highlight: "£60k → £46,111",
  },
  {
    name: "India",
    slug: "india",
    flag: "🇮🇳",
    retention: "92%",
    highlight: "₹60L → ₹55L",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0F172A] text-white py-16 sm:py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            YouTube Creator Taxes by Country
          </h1>
          <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed">
            How much do you actually keep after taxes? Compare real tax rates,
            withholding rules, and take-home pay across 5 countries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calculators/youtube-earnings-after-tax"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#CA8A04] hover:bg-[#A16207] text-white font-semibold rounded-lg transition-colors duration-200 text-base"
            >
              Calculate Your Take-Home Pay →
            </Link>
            <Link
              href="/compare/youtube-tax-by-country"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#475569] hover:border-[#94A3B8] text-[#CBD5E1] hover:text-white font-medium rounded-lg transition-colors duration-200 text-base"
            >
              Compare All Countries
            </Link>
          </div>
        </div>
      </section>

      {/* Country Cards */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-semibold text-[#0F172A] text-center mb-10">
            Country Tax Guides
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((c) => (
              <Link
                key={c.slug}
                href={`/guides/tax/${c.slug}`}
                className="group block rounded-xl border border-[#E2E8F0] bg-white p-5 hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{c.flag}</span>
                  <span className="font-heading font-semibold text-[#0F172A] group-hover:text-[#1E3A8A] transition-colors">
                    {c.name}
                  </span>
                </div>
                <div className="text-sm text-[#64748B] mb-1">
                  Mid-level take-home
                </div>
                <div className="text-lg font-semibold text-[#0F172A]">
                  {c.highlight}
                </div>
                <div className="mt-2 text-xs font-medium text-[#CA8A04]">
                  {c.retention} retention
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Comparisons */}
      <section className="py-12 px-4 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-semibold text-[#0F172A] text-center mb-8">
            Top YouTube Tax Comparisons
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/compare/us-vs-germany-youtube-tax"
              className="group block rounded-lg border border-[#E2E8F0] bg-white p-4 hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🇺🇸</span>
                <span className="text-[#94A3B8] text-sm">vs</span>
                <span className="text-lg">🇩🇪</span>
              </div>
              <div className="font-heading font-semibold text-[#0F172A] group-hover:text-[#1E3A8A] transition-colors text-sm">
                US vs Germany
              </div>
              <div className="text-xs text-[#64748B] mt-1">
                Compare take-home pay
              </div>
            </Link>
            <Link
              href="/compare/us-vs-canada-youtube-tax"
              className="group block rounded-lg border border-[#E2E8F0] bg-white p-4 hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🇺🇸</span>
                <span className="text-[#94A3B8] text-sm">vs</span>
                <span className="text-lg">🇨🇦</span>
              </div>
              <div className="font-heading font-semibold text-[#0F172A] group-hover:text-[#1E3A8A] transition-colors text-sm">
                US vs Canada
              </div>
              <div className="text-xs text-[#64748B] mt-1">
                Compare take-home pay
              </div>
            </Link>
            <Link
              href="/compare/us-vs-uk-youtube-tax"
              className="group block rounded-lg border border-[#E2E8F0] bg-white p-4 hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🇺🇸</span>
                <span className="text-[#94A3B8] text-sm">vs</span>
                <span className="text-lg">🇬🇧</span>
              </div>
              <div className="font-heading font-semibold text-[#0F172A] group-hover:text-[#1E3A8A] transition-colors text-sm">
                US vs UK
              </div>
              <div className="text-xs text-[#64748B] mt-1">
                Compare take-home pay
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Compare CTA */}
      <section className="bg-[#F1F5F9] py-14 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-2xl font-semibold text-[#0F172A] mb-4">
            Side-by-Side Tax Comparison
          </h2>
          <p className="text-[#475569] mb-8 max-w-xl mx-auto">
            From India&apos;s 92% retention to Canada&apos;s 66% — see exactly
            how tax burden varies across countries with real data from official
            sources.
          </p>
          <Link
            href="/compare/youtube-tax-by-country"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#1E3A8A] hover:bg-[#1E40AF] text-white font-semibold rounded-lg transition-colors duration-200"
          >
            View Full Comparison →
          </Link>
        </div>
      </section>

      {/* Trust footer */}
      <section className="py-10 px-4 border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-4xl text-center text-sm text-[#64748B]">
          <p>
            Data sourced from IRS, Bundesfinanzministerium, CRA, HMRC, and
            Income Tax Department of India. Last verified March 2026.
          </p>
        </div>
      </section>
    </main>
  );
}
