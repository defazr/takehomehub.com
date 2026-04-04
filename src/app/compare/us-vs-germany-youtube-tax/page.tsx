import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://takehomehub.com";

export const metadata: Metadata = {
  title:
    "US vs Germany YouTube Tax: Which Country Takes More? | TakeHomeHub",
  description:
    "US vs Germany YouTube tax comparison. See real take-home income at $60,000 and understand key differences in tax systems.",
  openGraph: {
    title: "US vs Germany YouTube Tax: Which Country Takes More?",
    description:
      "Compare YouTube creator taxes in the US and Germany. Real data from IRS and Bundesfinanzministerium.",
    url: `${siteUrl}/compare/us-vs-germany-youtube-tax`,
  },
};

export default function USvsGermanyPage() {
  return (
    <main className="prose mx-auto py-12 px-4 max-w-4xl w-full">
      <h1>US vs Germany YouTube Tax: Which Country Takes More?</h1>

      <p className="text-sm text-muted-foreground">
        Last updated: April 2026. Data sourced from IRS and
        Bundesfinanzministerium.
      </p>

      <p>
        <strong>
          US YouTube creators keep more of their income than German creators at
          most income levels.
        </strong>{" "}
        On $60,000 in annual YouTube revenue, a US creator takes home roughly{" "}
        <strong>$46,869 (78%)</strong>, while a German creator retains about{" "}
        <strong>&euro;44,390 (74%)</strong>.
      </p>

      <h2>How YouTube Income Is Taxed: US vs Germany</h2>

      <p>
        The tax structures in these two countries work differently. In the
        United States, YouTube creators are classified as self-employed
        individuals. They pay federal income tax on a progressive scale from
        10% to 37%, plus a 15.3% self-employment tax covering Social Security
        and Medicare. Half of that SE tax is deductible, and the standard
        deduction ($15,000 for single filers) reduces taxable income further.
      </p>

      <p>
        In Germany, YouTube creators typically operate as Freiberufler
        (freelancers). They pay Einkommensteuer (income tax) on a progressive
        scale from 14% to 45%, with a tax-free allowance (Grundfreibetrag) of
        &euro;12,096. There is no separate self-employment tax like in the US.
        However, German freelancers must pay health insurance out of pocket
        &mdash; roughly 14&ndash;15% of income &mdash; which is not included
        in the comparison below.
      </p>

      <p>
        For creators outside the US, YouTube may withhold up to 30% on
        US-sourced ad revenue. Germany has a tax treaty with the US that
        reduces this to 0%, so German creators filing a W-8BEN form face no US
        withholding. You can check the exact impact using our{" "}
        <Link href="/calculators/youtube-earnings-after-tax">
          YouTube Earnings After Tax Calculator
        </Link>
        .
      </p>

      <h2>Side-by-Side Comparison</h2>

      <div className="overflow-x-auto -mx-4 px-4">
        <table className="min-w-full">
          <thead>
            <tr>
              <th></th>
              <th>United States</th>
              <th>Germany</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tax classification</td>
              <td>Self-employed (sole proprietor)</td>
              <td>Freiberufler (freelancer)</td>
            </tr>
            <tr>
              <td>Income tax rate</td>
              <td>10%&ndash;37% (federal)</td>
              <td>14%&ndash;45%</td>
            </tr>
            <tr>
              <td>Self-employment tax</td>
              <td>15.3%</td>
              <td>None</td>
            </tr>
            <tr>
              <td>Tax-free threshold</td>
              <td>$15,000 (standard deduction)</td>
              <td>&euro;12,096 (Grundfreibetrag)</td>
            </tr>
            <tr>
              <td>US withholding (W-8BEN)</td>
              <td>N/A</td>
              <td>0% (treaty rate)</td>
            </tr>
            <tr>
              <td>Health insurance</td>
              <td>Not included in tax</td>
              <td>Mandatory, ~14&ndash;15% (separate)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Real Example: $60,000 Annual YouTube Revenue</h2>

      <div className="overflow-x-auto -mx-4 px-4">
        <table className="min-w-full">
          <thead>
            <tr>
              <th></th>
              <th>US Creator</th>
              <th>German Creator</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gross income</td>
              <td>$60,000</td>
              <td>&euro;60,000</td>
            </tr>
            <tr>
              <td>Estimated tax</td>
              <td>
                <strong>$13,131</strong>
              </td>
              <td>
                <strong>&euro;15,610</strong>
              </td>
            </tr>
            <tr>
              <td>Take-home pay</td>
              <td>
                <strong>$46,869</strong>
              </td>
              <td>
                <strong>&euro;44,390</strong>
              </td>
            </tr>
            <tr>
              <td>Retention rate</td>
              <td>
                <strong>78%</strong>
              </td>
              <td>
                <strong>74%</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        At this income level, a US creator keeps about $2,479 more than a
        German creator earning the equivalent amount. The gap comes primarily
        from Germany&apos;s steeper middle-bracket rates. Note that German
        figures above do not include mandatory health insurance contributions,
        which would further reduce take-home pay.
      </p>

      <p>
        For a detailed breakdown of how these numbers are calculated step by
        step, see the full{" "}
        <Link href="/guides/tax/us">US YouTube Tax Guide</Link> and{" "}
        <Link href="/guides/tax/germany">Germany YouTube Tax Guide</Link>.
      </p>

      <h2>Which Country Is Better for YouTube Creators?</h2>

      <p>
        If your goal is maximizing take-home income, the US has a slight
        advantage at mid-level earnings. But once health insurance and
        long-term costs are considered, the gap becomes smaller.
      </p>

      <p>
        At lower incomes (under $15,000), Germany&apos;s Grundfreibetrag means
        zero income tax, while US creators still owe SE tax from the first
        dollar earned. At higher incomes ($100,000+), both countries converge
        toward similar effective rates in the 26&ndash;33% range.
      </p>

      <p>
        The real answer depends on your income level and deductions. Use the{" "}
        <Link href="/calculators/youtube-earnings-after-tax">
          YouTube Earnings After Tax Calculator
        </Link>{" "}
        to compare your specific situation.
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
