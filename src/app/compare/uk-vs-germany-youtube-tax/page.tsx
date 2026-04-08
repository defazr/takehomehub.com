import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://takehomehub.com";

export const metadata: Metadata = {
  title:
    "UK vs Germany YouTube Tax: Which Country Takes More? | TakeHomeHub",
  description:
    "UK vs Germany YouTube tax comparison. Compare take-home income and understand key differences in tax rates, NICs, and health insurance costs.",
  openGraph: {
    title: "UK vs Germany YouTube Tax: Which Country Takes More?",
    description:
      "UK vs Germany YouTube tax comparison. Real data from HMRC and Bundesfinanzministerium.",
    url: `${siteUrl}/compare/uk-vs-germany-youtube-tax`,
  },
};

export default function UKvsGermanyPage() {
  return (
    <main className="prose mx-auto py-12 px-4 max-w-4xl w-full">
      <h1>UK vs Germany YouTube Tax: Which Country Takes More?</h1>

      <p className="text-sm text-muted-foreground">
        Last updated: April 2026. Data sourced from HMRC and
        Bundesfinanzministerium.
      </p>

      <p>
        <strong>
          UK YouTube creators keep slightly more of their income than German
          creators.
        </strong>{" "}
        On equivalent annual YouTube revenue, a UK creator retains roughly{" "}
        <strong>77% of earnings</strong>, while a German creator keeps about{" "}
        <strong>74%</strong>.
      </p>

      <h2>How YouTube Income Is Taxed: UK vs Germany</h2>

      <p>
        In the United Kingdom, YouTube creators register as sole traders with
        HMRC. They pay Income Tax on a progressive scale: 0% up to
        &pound;12,570 (Personal Allowance), 20% basic rate, 40% higher rate,
        and 45% additional rate. On top of that, creators pay Class 2 and
        Class 4 National Insurance Contributions (NICs), which cover state
        pension and other benefits.
      </p>

      <p>
        In Germany, YouTube creators typically operate as Freiberufler
        (freelancers). They pay Einkommensteuer (income tax) on a progressive
        scale from 14% to 45%, with a tax-free allowance (Grundfreibetrag) of
        &euro;12,096. Freiberufler are exempt from Gewerbesteuer (trade tax).
        However, German freelancers must pay mandatory health insurance
        &mdash; roughly 14&ndash;15% of income &mdash; which is included in
        the figures below.
      </p>

      <p>
        Both countries have tax treaties with the US that reduce
        YouTube&apos;s withholding rate to 0%, so neither UK nor German
        creators face US withholding when a W-8BEN form is filed. You can
        model your own scenario using the{" "}
        <Link href="/calculators/youtube-earnings-after-tax">
          YouTube Earnings After Tax Calculator
        </Link>
        .
      </p>

      <h2>Tax Structure Comparison</h2>

      <div className="overflow-x-auto -mx-4 px-4">
        <table className="min-w-full">
          <thead>
            <tr>
              <th></th>
              <th>United Kingdom</th>
              <th>Germany</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tax classification</td>
              <td>Sole trader</td>
              <td>Freiberufler (freelancer)</td>
            </tr>
            <tr>
              <td>Income tax rate</td>
              <td>0%&ndash;45%</td>
              <td>14%&ndash;45%</td>
            </tr>
            <tr>
              <td>Social contributions</td>
              <td>Class 2 + Class 4 NICs</td>
              <td>Mandatory health insurance (~14&ndash;15%)</td>
            </tr>
            <tr>
              <td>Tax-free threshold</td>
              <td>&pound;12,570 (Personal Allowance)</td>
              <td>&euro;12,096 (Grundfreibetrag)</td>
            </tr>
            <tr>
              <td>Trade/business tax</td>
              <td>None</td>
              <td>Exempt (Freiberufler)</td>
            </tr>
            <tr>
              <td>US withholding (W-8BEN)</td>
              <td>0% (treaty rate)</td>
              <td>0% (treaty rate)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>
        Real Example: &pound;60,000 / &euro;60,000 Annual YouTube Revenue
      </h2>

      <div className="overflow-x-auto -mx-4 px-4">
        <table className="min-w-full">
          <thead>
            <tr>
              <th></th>
              <th>UK Creator</th>
              <th>German Creator</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gross income</td>
              <td>&pound;60,000</td>
              <td>&euro;60,000</td>
            </tr>
            <tr>
              <td>Estimated tax</td>
              <td>
                <strong>&pound;13,889</strong>
              </td>
              <td>
                <strong>&euro;15,610</strong>
              </td>
            </tr>
            <tr>
              <td>Take-home pay</td>
              <td>
                <strong>&pound;46,111</strong>
              </td>
              <td>
                <strong>&euro;44,390</strong>
              </td>
            </tr>
            <tr>
              <td>Retention rate</td>
              <td>
                <strong>77%</strong>
              </td>
              <td>
                <strong>74%</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The 3 percentage point gap comes primarily from Germany&apos;s
        mandatory health insurance contributions, which are included in the
        German total. UK creators also pay National Insurance, but at lower
        combined rates than Germany&apos;s health insurance burden.
      </p>

      <p>
        For step-by-step breakdowns of each calculation, see the full{" "}
        <Link href="/guides/tax/uk">UK YouTube Tax Guide</Link> and{" "}
        <Link href="/guides/tax/germany">Germany YouTube Tax Guide</Link>.
      </p>

      <h2>Why Does Germany Take More?</h2>

      <p>
        The income tax structures are actually quite similar &mdash; both
        countries start with comparable tax-free thresholds and use
        progressive rates up to 45%. The difference comes from social
        contributions.
      </p>

      <p>
        In the UK, Class 4 NICs are charged at 6% on profits between
        &pound;12,570 and &pound;50,270, then 2% above that. In Germany,
        health insurance alone costs roughly 14&ndash;15% of income with no
        upper cap equivalent to the UK&apos;s reduced rate above
        &pound;50,270. This makes Germany&apos;s social contribution burden
        consistently higher across most income levels.
      </p>

      <p>
        At lower incomes (under &pound;15,000/&euro;15,000), both countries
        charge minimal tax thanks to similar tax-free thresholds. At higher
        incomes (&pound;100,000+), the UK reduces the Personal Allowance for
        earnings above &pound;100,000, which narrows the gap significantly.
      </p>

      <p>
        If your goal is comparing take-home pay across more countries, see the
        full{" "}
        <Link href="/compare/youtube-tax-by-country">
          YouTube Tax by Country comparison
        </Link>{" "}
        or use the{" "}
        <Link href="/calculators/youtube-earnings-after-tax">
          YouTube Earnings After Tax Calculator
        </Link>
        .
      </p>

      <div className="mt-12 border-t pt-6 text-sm text-muted-foreground">
        <p>
          This content is for informational purposes only and does not
          constitute tax advice. Consult a qualified tax professional for your
          specific situation.
        </p>
      </div>
    </main>
  );
}
