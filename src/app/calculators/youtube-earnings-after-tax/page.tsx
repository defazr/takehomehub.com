import type { Metadata } from "next";
import Link from "next/link";
import TaxCalculator from "@/components/TaxCalculator";

export const metadata: Metadata = {
  title: "YouTube Earnings After Tax Calculator — Estimate Your Take-Home Pay",
  description:
    "Calculate how much you keep after taxes as a YouTube creator. Select your country and monthly income to see estimated tax, take-home pay, and retention rate.",
};

export default function CalculatorPage() {
  return (
    <main className="prose mx-auto py-10 px-4">
      <h1>YouTube Earnings After Tax Calculator</h1>
      <p>
        Enter your monthly YouTube income and select your country to estimate
        how much you keep after taxes. This youtube earnings after tax calculator
        uses effective tax rates derived from real data in our country guides.
      </p>

      <TaxCalculator />

      <h2>How This Calculator Works</h2>
      <p>
        This calculator uses effective tax rates based on the detailed
        step-by-step calculations in each country guide. The rates account for
        income tax, self-employment tax (or equivalent), and mandatory
        contributions specific to each country. It does not include state or
        provincial taxes, VAT/GST, or business deductions.
      </p>

      <h2>Country Guides</h2>
      <p>
        For detailed tax breakdowns with step-by-step calculations, see the full
        guide for your country:
      </p>
      <ul>
        <li>
          <Link href="/guides/tax/us">YouTube Tax USA Guide</Link>
        </li>
        <li>
          <Link href="/guides/tax/germany">YouTube Tax Germany Guide</Link>
        </li>
        <li>
          <Link href="/guides/tax/canada">YouTube Tax Canada Guide</Link>
        </li>
        <li>
          <Link href="/guides/tax/uk">YouTube Tax UK Guide</Link>
        </li>
        <li>
          <Link href="/guides/tax/india">YouTube Tax India Guide</Link>
        </li>
      </ul>

      <p>
        <Link href="/compare/youtube-tax-by-country">
          → Compare YouTube Tax Rates by Country
        </Link>
      </p>
    </main>
  );
}
