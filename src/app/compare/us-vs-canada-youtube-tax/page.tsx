import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://takehomehub.com";

export const metadata: Metadata = {
  title:
    "US vs Canada YouTube Tax: Which Country Takes More? | TakeHomeHub",
  description:
    "US vs Canada YouTube tax comparison. Compare retention rates and understand why Canadian creators keep less of their income than American creators.",
  openGraph: {
    title: "US vs Canada YouTube Tax: Which Country Takes More?",
    description:
      "US vs Canada YouTube tax comparison. Real data from IRS and CRA.",
    url: `${siteUrl}/compare/us-vs-canada-youtube-tax`,
  },
};

export default function USvsCanadaPage() {
  return (
    <main className="prose mx-auto py-12 px-4 max-w-4xl w-full">
      <h1>US vs Canada YouTube Tax: Which Country Takes More?</h1>

      <p className="text-sm text-muted-foreground">
        Last updated: April 2026. Data sourced from IRS and CRA.
      </p>

      <p>
        <strong>
          US YouTube creators tend to retain a higher percentage of their
          income than Canadian creators.
        </strong>{" "}
        Based on each country&apos;s standard mid-level income scenario, a US
        creator keeps roughly <strong>78% of earnings</strong>, while a
        Canadian creator retains about <strong>66%</strong>.
      </p>

      <p className="text-sm text-muted-foreground italic">
        Note: These examples use each country&apos;s standard scenario and are
        not based on identical income levels. US figures are based on $60,000
        USD annual income; Canada figures are based on C$90,000 annual income.
      </p>

      <h2>How YouTube Income Is Taxed: US vs Canada</h2>

      <p>
        In the United States, YouTube creators are classified as
        self-employed. They pay federal income tax on a progressive scale from
        10% to 37%, plus a 15.3% self-employment tax (Social Security and
        Medicare). Half of the SE tax is deductible, and the standard
        deduction ($15,000 for single filers) reduces taxable income. State
        income tax varies &mdash; some states have none.
      </p>

      <p>
        In Canada, YouTube creators are self-employed sole proprietors. They
        pay federal income tax on a progressive scale from 15% to 33%, plus
        provincial income tax (which varies by province &mdash; Ontario rates
        used in this example). Canadian creators also pay Canada Pension Plan
        (CPP) contributions, which function similarly to US Social Security
        but at different rates.
      </p>

      <p>
        A key difference: Canada taxes at both federal and provincial levels
        with no standard deduction equivalent &mdash; instead, Canadians
        receive a basic personal amount tax credit. The combined federal +
        provincial burden tends to be higher than the US federal-only rate at
        mid-level incomes.
      </p>

      <p>
        Both countries have a tax treaty that reduces YouTube&apos;s US
        withholding rate to 0% for Canadian creators who file a W-8BEN form.
        You can estimate your own take-home pay using the{" "}
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
              <th>United States</th>
              <th>Canada</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tax classification</td>
              <td>Self-employed (sole proprietor)</td>
              <td>Self-employed (sole proprietor)</td>
            </tr>
            <tr>
              <td>Federal income tax</td>
              <td>10%&ndash;37%</td>
              <td>15%&ndash;33%</td>
            </tr>
            <tr>
              <td>Self-employment tax</td>
              <td>15.3% (SE tax)</td>
              <td>CPP contributions</td>
            </tr>
            <tr>
              <td>State/provincial tax</td>
              <td>Varies (not included)</td>
              <td>Varies (Ontario used in example)</td>
            </tr>
            <tr>
              <td>Tax-free threshold</td>
              <td>$15,000 (standard deduction)</td>
              <td>Basic personal amount credit</td>
            </tr>
            <tr>
              <td>US withholding (W-8BEN)</td>
              <td>N/A</td>
              <td>0% (treaty rate)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Real Examples: Take-Home Pay by Country</h2>

      <div className="overflow-x-auto -mx-4 px-4">
        <table className="min-w-full">
          <thead>
            <tr>
              <th></th>
              <th>US Creator</th>
              <th>Canadian Creator</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gross income</td>
              <td>$60,000 USD</td>
              <td>C$90,000</td>
            </tr>
            <tr>
              <td>Federal tax</td>
              <td>
                <strong>$4,653</strong>
              </td>
              <td>
                <strong>C$15,294</strong>
              </td>
            </tr>
            <tr>
              <td>SE tax / CPP</td>
              <td>
                <strong>$8,478</strong>
              </td>
              <td>
                <strong>C$8,830</strong>
              </td>
            </tr>
            <tr>
              <td>Provincial tax</td>
              <td>N/A</td>
              <td>
                <strong>C$6,067</strong>
              </td>
            </tr>
            <tr>
              <td>Total tax</td>
              <td>
                <strong>$13,131</strong>
              </td>
              <td>
                <strong>C$30,191</strong>
              </td>
            </tr>
            <tr>
              <td>Take-home pay</td>
              <td>
                <strong>$46,869</strong>
              </td>
              <td>
                <strong>C$59,809</strong>
              </td>
            </tr>
            <tr>
              <td>Retention rate</td>
              <td>
                <strong>78%</strong>
              </td>
              <td>
                <strong>66%</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The 12 percentage point gap in retention rate is the largest among the
        five countries covered on TakeHomeHub. The main driver is
        Canada&apos;s combined federal + provincial tax structure, which
        creates a higher total burden at mid-level incomes.
      </p>

      <p>
        For step-by-step breakdowns of each calculation, see the full{" "}
        <Link href="/guides/tax/us">US YouTube Tax Guide</Link> and{" "}
        <Link href="/guides/tax/canada">Canada YouTube Tax Guide</Link>.
      </p>

      <h2>Why Is Canada&apos;s Tax Burden Higher?</h2>

      <p>
        Three factors explain the gap. First, Canada has no equivalent to the
        US standard deduction &mdash; the basic personal amount works as a tax
        credit, not a deduction, providing less relief at higher incomes.
        Second, provincial taxes (Ontario: 5.05%&ndash;13.16%) add a
        significant layer that has no federal US equivalent in this
        comparison. Third, CPP contributions (C$8,830) are comparable to US SE
        tax ($8,478), so the self-employment tax component is similar between
        the two countries &mdash; the difference comes almost entirely from
        income tax structure.
      </p>

      <p>
        If your goal is maximizing take-home income, the US has a clear
        advantage at mid-level earnings. However, Canadian creators benefit
        from universal healthcare and other social programs funded by these
        higher taxes &mdash; costs that US creators may need to cover
        separately.
      </p>

      <p>
        Use the{" "}
        <Link href="/calculators/youtube-earnings-after-tax">
          YouTube Earnings After Tax Calculator
        </Link>{" "}
        to model your specific income level and see how the numbers change.
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
