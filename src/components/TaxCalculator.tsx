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
      <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 mb-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-[#0F172A] mb-2">
              Monthly Income ({config.currency})
            </label>
            <input
              type="number"
              value={monthly}
              onChange={(e) => setMonthly(e.target.value)}
              placeholder="e.g. 5000"
              className="w-full rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#0F172A] mb-2">
              Country
            </label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all cursor-pointer"
            >
              {Object.entries(countries).map(([key, c]) => (
                <option key={key} value={key}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {monthlyNum > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-[#E2E8F0] bg-white p-5">
            <p className="text-xs font-medium text-[#64748B] uppercase tracking-wide mb-1">
              Annual Income
            </p>
            <p className="text-2xl font-bold text-[#0F172A]">
              {config.currency}
              {formatNumber(annual)}
            </p>
          </div>
          <div className="rounded-xl border border-[#E2E8F0] bg-white p-5">
            <p className="text-xs font-medium text-[#64748B] uppercase tracking-wide mb-1">
              Estimated Tax
            </p>
            <p className="text-2xl font-bold text-[#DC2626]">
              {config.currency}
              {formatNumber(totalTax)}
            </p>
          </div>
          <div className="rounded-xl border border-[#E2E8F0] bg-white p-5">
            <p className="text-xs font-medium text-[#64748B] uppercase tracking-wide mb-1">
              Take-Home
            </p>
            <p className="text-2xl font-bold text-[#16A34A]">
              {config.currency}
              {formatNumber(takeHome)}
            </p>
          </div>
          <div className="rounded-xl border border-[#E2E8F0] bg-white p-5">
            <p className="text-xs font-medium text-[#64748B] uppercase tracking-wide mb-1">
              Retention
            </p>
            <p className="text-2xl font-bold text-[#CA8A04]">{retention}%</p>
          </div>
        </div>
      )}

      <p className="text-xs text-[#94A3B8] mt-5">
        Estimates based on simplified effective tax rates from each country
        guide. Actual taxes may vary based on deductions, filing status, and
        local regulations. See the full guide for your country for detailed
        calculations.
      </p>
    </div>
  );
}
