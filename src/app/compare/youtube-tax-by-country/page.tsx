import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YouTube Withholding Rates by Country",
  description:
    "Compare YouTube tax withholding rates across countries. See how much creators pay in taxes by country.",
};

export default function ComparePage() {
  return (
    <main className="prose mx-auto py-10 px-4">
      <h1>YouTube Withholding Rates by Country</h1>
      <p>
        Compare how YouTube income is taxed across different countries. This
        table shows the key tax rates and withholding information for YouTube
        creators worldwide.
      </p>

      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Tax Type</th>
            <th>Top Rate</th>
            <th>SE Tax</th>
            <th>W-8BEN Treaty Rate</th>
            <th>Guide</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>United States</td>
            <td>Progressive</td>
            <td>37%</td>
            <td>15.3%</td>
            <td>N/A (domestic)</td>
            <td>
              <Link href="/guides/tax/us">View Guide</Link>
            </td>
          </tr>
          <tr>
            <td>Germany</td>
            <td>Progressive</td>
            <td>45%</td>
            <td>Varies</td>
            <td>0%</td>
            <td>
              <span className="text-muted-foreground text-sm">Coming soon</span>
            </td>
          </tr>
          <tr>
            <td>Canada</td>
            <td>Progressive</td>
            <td>33%</td>
            <td>CPP</td>
            <td>0%</td>
            <td>
              <span className="text-muted-foreground text-sm">Coming soon</span>
            </td>
          </tr>
          <tr>
            <td>United Kingdom</td>
            <td>Progressive</td>
            <td>45%</td>
            <td>NIC</td>
            <td>0%</td>
            <td>
              <span className="text-muted-foreground text-sm">Coming soon</span>
            </td>
          </tr>
          <tr>
            <td>India</td>
            <td>Progressive</td>
            <td>30%</td>
            <td>N/A</td>
            <td>15%</td>
            <td>
              <span className="text-muted-foreground text-sm">Coming soon</span>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="text-sm text-muted-foreground">
        Detailed guides for each country will be added progressively. Currently
        available:{" "}
        <Link href="/guides/tax/us">United States</Link>.
      </p>
    </main>
  );
}
