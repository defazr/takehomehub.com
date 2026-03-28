import Link from "next/link";

const countries = [
  { slug: "us", label: "YouTube Tax USA Guide" },
  { slug: "germany", label: "YouTube Tax Germany Guide" },
  { slug: "canada", label: "YouTube Tax Canada Guide" },
  { slug: "uk", label: "YouTube Tax UK Guide" },
  { slug: "india", label: "YouTube Tax India Guide" },
];

export default function CountryLinks({
  currentCountry,
}: {
  currentCountry?: string;
}) {
  const filtered = countries.filter((c) => c.slug !== currentCountry);

  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold mb-3">Related Country Guides</h2>
      <ul className="space-y-1">
        {filtered.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/guides/tax/${c.slug}`}
              className="text-primary underline"
            >
              → {c.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/compare/youtube-tax-by-country"
            className="text-primary underline"
          >
            → Tax Withholding Rates by Country — Full Comparison Table
          </Link>
        </li>
        <li>
          <Link
            href="/calculators/youtube-earnings-after-tax"
            className="text-primary underline"
          >
            → YouTube Earnings After Tax Calculator
          </Link>
        </li>
      </ul>
    </div>
  );
}
