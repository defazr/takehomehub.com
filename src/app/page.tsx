import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TakeHomeHub — YouTube Creator Taxes by Country",
  description:
    "Understand how YouTube income is taxed globally. Compare tax rates, withholding, and take-home pay for YouTube creators across the US, Germany, Canada, UK, and India.",
};

export default function Home() {
  return (
    <main className="prose mx-auto py-12 px-4 max-w-3xl">
      <h1>YouTube Creator Taxes by Country</h1>
      <p>
        Understand how YouTube income is taxed globally. Compare tax rates,
        withholding rules, and calculate your actual take-home pay as a YouTube
        creator.
      </p>

      <h2>Country Guides</h2>
      <ul>
        <li>
          <Link href="/guides/tax/us">YouTube Tax in the USA — Full Guide</Link>
        </li>
        <li>
          <Link href="/guides/tax/germany">
            YouTube Tax in Germany — Full Guide
          </Link>
        </li>
        <li>
          <Link href="/guides/tax/canada">
            YouTube Tax in Canada — Full Guide
          </Link>
        </li>
        <li>
          <Link href="/guides/tax/uk">
            YouTube Tax in the UK — Full Guide
          </Link>
        </li>
        <li>
          <Link href="/guides/tax/india">
            YouTube Tax in India — Full Guide
          </Link>
        </li>
      </ul>

      <h2>Compare Tax Rates</h2>
      <p>
        See how YouTube creator taxes differ across countries — from India&apos;s
        92% retention rate to Canada&apos;s 66%. Real data, real calculations.
      </p>
      <p>
        <Link href="/compare/youtube-tax-by-country">
          → YouTube Withholding Rates by Country — Full Comparison Table
        </Link>
      </p>

      <h2>Calculator</h2>
      <p>
        Enter your monthly income and country to estimate your take-home pay
        instantly.
      </p>
      <p>
        <Link href="/calculators/youtube-earnings-after-tax">
          → YouTube Earnings After Tax Calculator
        </Link>
      </p>
    </main>
  );
}
