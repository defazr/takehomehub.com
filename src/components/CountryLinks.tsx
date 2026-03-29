import Link from "next/link";

const countries = [
  { slug: "us", label: "YouTube Tax USA Guide", ready: true },
  { slug: "germany", label: "YouTube Tax Germany Guide", ready: false },
  { slug: "canada", label: "YouTube Tax Canada Guide", ready: false },
  { slug: "uk", label: "YouTube Tax UK Guide", ready: false },
  { slug: "india", label: "YouTube Tax India Guide", ready: false },
];

export default function CountryLinks({
  currentCountry,
}: {
  currentCountry?: string;
}) {
  const filtered = countries.filter((c) => c.slug !== currentCountry);
  const readyLinks = filtered.filter((c) => c.ready);
  const comingSoon = filtered.filter((c) => !c.ready);

  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold mb-3">Related Country Guides</h2>
      <ul className="space-y-1">
        {readyLinks.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/guides/tax/${c.slug}`}
              className="text-primary underline"
            >
              → {c.label}
            </Link>
          </li>
        ))}
        {comingSoon.length > 0 && (
          <li className="text-muted-foreground text-sm">
            More countries coming soon: {comingSoon.map((c) => c.label.replace("YouTube Tax ", "").replace(" Guide", "")).join(", ")}
          </li>
        )}
        <li>
          <Link
            href="/compare/youtube-tax-by-country"
            className="text-primary underline"
          >
            → Tax Withholding Rates by Country — Full Comparison Table
          </Link>
        </li>
      </ul>
    </div>
  );
}
