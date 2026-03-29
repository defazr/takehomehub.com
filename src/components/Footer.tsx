import Link from "next/link";

const footerLinks = [
  { href: "/compare/youtube-tax-by-country", label: "Compare" },
  { href: "/calculators/youtube-earnings-after-tax", label: "Calculator" },
  { href: "/guides/tax/us", label: "US" },
  { href: "/guides/tax/germany", label: "Germany" },
  { href: "/guides/tax/canada", label: "Canada" },
  { href: "/guides/tax/uk", label: "UK" },
  { href: "/guides/tax/india", label: "India" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-white mt-auto">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          <div>
            <p className="font-heading font-bold text-lg text-[#0F172A] mb-2">
              TakeHomeHub
            </p>
            <p className="text-sm text-[#64748B] max-w-xs">
              Real tax data for YouTube creators. Compare rates, calculate
              take-home pay, plan smarter.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#475569] hover:text-[#0F172A] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[#E2E8F0] text-center text-xs text-[#64748B]">
          <p>
            Data sourced from IRS, Bundesfinanzministerium, CRA, HMRC, and
            Income Tax Department of India. Last verified March 2026.
          </p>
          <p className="mt-1">
            This site does not constitute tax advice. Consult a qualified
            professional for your situation.
          </p>
          <p className="mt-6 text-[#94A3B8]">
            &copy; 2026 TakeHomeHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
