import Link from "next/link";

const navLinks = [
  { href: "/compare/youtube-tax-by-country", label: "Compare" },
  { href: "/calculators/youtube-earnings-after-tax", label: "Calculator" },
  { href: "/glossary", label: "Glossary" },
];

const countryLinks = [
  { href: "/guides/tax/us", label: "US" },
  { href: "/guides/tax/germany", label: "Germany" },
  { href: "/guides/tax/canada", label: "Canada" },
  { href: "/guides/tax/uk", label: "UK" },
  { href: "/guides/tax/india", label: "India" },
];

const legalLinks = [
  { href: "/about", label: "About" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-white mt-auto">
      <div className="mx-auto max-w-4xl px-4 py-10">
        {/* 1. Brand */}
        <div className="mb-8">
          <p className="font-heading font-bold text-lg text-[#0F172A] mb-2">
            TakeHomeHub
          </p>
          <p className="text-sm text-[#475569] max-w-md leading-relaxed">
            Real tax data for YouTube creators. Compare rates, calculate
            take-home pay, plan smarter.
          </p>
        </div>

        {/* 2. Links — 3 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8 text-sm">
          <div>
            <p className="font-semibold text-[#0F172A] mb-3">Tools</p>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#475569] hover:text-[#1E3A8A] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-[#0F172A] mb-3">Country Guides</p>
            <div className="flex flex-col gap-2">
              {countryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#475569] hover:text-[#1E3A8A] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-[#0F172A] mb-3">Legal</p>
            <div className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#475569] hover:text-[#1E3A8A] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:takehomehub@protonmail.com"
                className="text-[#475569] hover:text-[#1E3A8A] transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* 3. Divider + Legal text */}
        <div className="border-t border-[#E2E8F0] pt-6 text-xs text-[#475569] space-y-2 max-w-lg leading-relaxed">
          <p>
            Data sourced from IRS, Bundesfinanzministerium, CRA, HMRC, and
            Income Tax Department of India. Last verified March 2026.
          </p>
          <p>
            This site does not constitute tax advice. Consult a qualified
            professional for your situation.
          </p>
        </div>

        {/* 4. Copyright */}
        <p className="text-xs text-[#94A3B8] mt-8 pb-6 text-center">
          &copy; 2026 TakeHomeHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
