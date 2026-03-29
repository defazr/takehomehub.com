"use client";

import { useState } from "react";

interface TaxPoint {
  income: number;
  rate: number;
}

interface CountryConfig {
  label: string;
  currency: string;
  points: [TaxPoint, TaxPoint, TaxPoint];
}

const countries: Record<string, CountryConfig> = {
  us: {
    label: "United States",
    currency: "$",
    points: [
      { income: 12000, rate: 0.14 },
      { income: 60000, rate: 0.22 },
      { income: 240000, rate: 0.3 },
    ],
  },
  germany: {
    label: "Germany",
    currency: "€",
    points: [
      { income: 12000, rate: 0.2 },
      { income: 60000, rate: 0.26 },
      { income: 240000, rate: 0.32 },
    ],
  },
  canada: {
    label: "Canada",
    currency: "C$",
    points: [
      { income: 18000, rate: 0.19 },
      { income: 90000, rate: 0.34 },
      { income: 360000, rate: 0.39 },
    ],
  },
  uk: {
    label: "United Kingdom",
    currency: "£",
    points: [
      { income: 12000, rate: 0 },
      { income: 60000, rate: 0.23 },
      { income: 240000, rate: 0.42 },
    ],
  },
  india: {
    label: "India",
    currency: "₹",
    points: [
      { income: 1200000, rate: 0 },
      { income: 6000000, rate: 0.08 },
      { income: 24000000, rate: 0.23 },
    ],
  },
};

function interpolateRate(annual: number, points: [TaxPoint, TaxPoint, TaxPoint]): number {
  const [low, mid, high] = points;

  if (annual <= low.income) return low.rate;
  if (annual >= high.income) return high.rate;

  if (annual <= mid.income) {
    return (
      low.rate +
      ((annual - low.income) / (mid.income - low.income)) *
        (mid.rate - low.rate)
    );
  }

  return (
    mid.rate +
    ((annual - mid.income) / (high.income - mid.income)) *
      (high.rate - mid.rate)
  );
}

function formatNumber(n: number): string {
  return Math.round(n).toLocaleString("en-US");
}

export default function TaxCalculator() {
  const [monthly, setMonthly] = useState<string>("");
  const [country, setCountry] = useState<string>("us");

  const config = countries[country];
  const monthlyNum = parseFloat(monthly) || 0;
  const annual = monthlyNum * 12;
  const effectiveRate = interpolateRate(annual, config.points);
  const totalTax = annual * effectiveRate;
  const takeHome = annual - totalTax;
  const retention = annual > 0 ? ((takeHome / annual) * 100).toFixed(0) : "0";

  return (
    <div className="not-prose">
      <div className="grid gap-4 sm:grid-cols-2 mb-8">
        <div>
          <label className="block text-sm font-medium mb-1">
            Monthly Income ({config.currency})
          </label>
          <input
            type="number"
            value={monthly}
            onChange={(e) => setMonthly(e.target.value)}
            placeholder="e.g. 5000"
            className="w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Country</label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full rounded-md border px-3 py-2 text-sm"
          >
            {Object.entries(countries).map(([key, c]) => (
              <option key={key} value={key}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {monthlyNum > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">Annual Income</p>
            <p className="text-2xl font-bold">
              {config.currency}
              {formatNumber(annual)}
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">Estimated Tax</p>
            <p className="text-2xl font-bold">
              {config.currency}
              {formatNumber(totalTax)}
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">Take-Home</p>
            <p className="text-2xl font-bold">
              {config.currency}
              {formatNumber(takeHome)}
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">Retention</p>
            <p className="text-2xl font-bold">{retention}%</p>
          </div>
        </div>
      )}

      <p className="text-xs text-muted-foreground mt-4">
        Estimates based on simplified effective tax rates from each country
        guide. Actual taxes may vary based on deductions, filing status, and
        local regulations. See the full guide for your country for detailed
        calculations.
      </p>
    </div>
  );
}
