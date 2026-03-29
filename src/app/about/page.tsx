import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About TakeHomeHub",
  description:
    "Learn about TakeHomeHub — a free resource helping YouTube creators understand taxes and take-home earnings across countries.",
};

export default function AboutPage() {
  return (
    <main className="prose mx-auto py-12 px-4 max-w-4xl w-full">
      <h1>About TakeHomeHub</h1>

      <p>
        TakeHomeHub is a free, independent resource built to help YouTube
        creators understand how much they actually keep after taxes. Whether you
        are a full-time creator or just starting to earn from AdSense, knowing
        your real take-home pay is essential for making smart financial
        decisions.
      </p>

      <h2>What We Do</h2>
      <p>
        We provide country-specific YouTube tax guides that break down exactly
        how creator income is taxed in each country. Every guide includes
        official tax rates, step-by-step calculations at three income levels,
        and clear explanations of forms, deadlines, and deductions.
      </p>
      <p>
        Our platform currently covers five countries: the{" "}
        <Link href="/guides/tax/us">United States</Link>,{" "}
        <Link href="/guides/tax/germany">Germany</Link>,{" "}
        <Link href="/guides/tax/canada">Canada</Link>, the{" "}
        <Link href="/guides/tax/uk">United Kingdom</Link>, and{" "}
        <Link href="/guides/tax/india">India</Link>. Each guide follows the
        same structure so you can easily compare how different countries treat
        YouTube income.
      </p>
      <p>
        In addition to guides, we offer a{" "}
        <Link href="/compare/youtube-tax-by-country">
          side-by-side comparison table
        </Link>{" "}
        showing tax burden and take-home pay across all five countries, and a
        simple{" "}
        <Link href="/calculators/youtube-earnings-after-tax">calculator</Link>{" "}
        to estimate your earnings after tax.
      </p>

      <h2>Why We Built This</h2>
      <p>
        YouTube is a global platform, but taxes are local. A creator earning the
        same amount in India and Canada will take home very different amounts.
        This information is scattered across government websites, tax forums,
        and accounting blogs — often in confusing language with no real examples.
      </p>
      <p>
        We built TakeHomeHub to bring all of this into one place, with real
        numbers, real calculations, and no guesswork.
      </p>

      <h2>Our Data Sources</h2>
      <p>
        All tax rates, thresholds, and calculations on TakeHomeHub are based on
        official government sources:
      </p>
      <ul>
        <li>
          <strong>United States:</strong> Internal Revenue Service (IRS) —
          irs.gov
        </li>
        <li>
          <strong>Germany:</strong> German Federal Tax Law (EStG §32a),
          Bundesregierung.de
        </li>
        <li>
          <strong>Canada:</strong> Canada Revenue Agency (CRA) — canada.ca
        </li>
        <li>
          <strong>United Kingdom:</strong> HM Revenue &amp; Customs (HMRC) —
          gov.uk
        </li>
        <li>
          <strong>India:</strong> Income Tax Department of India —
          incometax.gov.in
        </li>
        <li>
          <strong>US Withholding:</strong> YouTube Help Center —
          support.google.com/youtube
        </li>
      </ul>
      <p>
        We do not use estimated or assumed tax rates. Every number on this site
        is traceable to an official source.
      </p>

      <h2>Important Disclaimer</h2>
      <p>
        TakeHomeHub provides general informational content only. Nothing on this
        site constitutes professional tax, legal, or financial advice. Tax laws
        change frequently and vary by individual circumstance. Always consult a
        qualified tax professional before making financial decisions based on
        information found here.
      </p>

      <h2>Contact</h2>
      <p>For questions, corrections, or feedback:</p>
      <p>
        <strong>Email:</strong> takehomehub@protonmail.com
      </p>
    </main>
  );
}
