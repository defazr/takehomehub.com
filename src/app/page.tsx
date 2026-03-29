import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TakeHomeHub — YouTube Creator Taxes by Country",
  description:
    "Understand how YouTube income is taxed globally. Compare tax rates, withholding, and take-home pay for YouTube creators across countries.",
};

export default function Home() {
  return (
    <main className="prose mx-auto py-10 px-4">
      <h1>YouTube Creator Taxes by Country</h1>
      <p>
        Understand how YouTube income is taxed globally. Compare tax rates,
        withholding rules, and calculate your actual take-home pay as a YouTube
        creator.
      </p>

      <h2>Country Guides</h2>
      <ul>
        <li>
          <Link href="/guides/tax/us">
            YouTube Tax in the USA — Full Guide
          </Link>
        </li>
        <li className="text-muted-foreground">Germany — Coming soon</li>
        <li className="text-muted-foreground">Canada — Coming soon</li>
        <li className="text-muted-foreground">United Kingdom — Coming soon</li>
        <li className="text-muted-foreground">India — Coming soon</li>
      </ul>

      <h2>Compare</h2>
      <p>
        <Link href="/compare/youtube-tax-by-country">
          → YouTube Withholding Rates by Country — Comparison Table
        </Link>
      </p>
    </main>
  );
}
