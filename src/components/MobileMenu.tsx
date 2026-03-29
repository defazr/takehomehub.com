"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/compare/youtube-tax-by-country", label: "Compare" },
  { href: "/calculators/youtube-earnings-after-tax", label: "Calculator" },
  { href: "/guides/tax/us", label: "US Guide" },
  { href: "/guides/tax/germany", label: "Germany Guide" },
  { href: "/guides/tax/canada", label: "Canada Guide" },
  { href: "/guides/tax/uk", label: "UK Guide" },
  { href: "/guides/tax/india", label: "India Guide" },
];

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden p-2 text-[#0F172A] cursor-pointer">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-label="Open menu"
        >
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </SheetTrigger>
      <SheetContent side="right" className="w-72 bg-white p-0">
        <SheetTitle className="px-6 pt-6 pb-2 font-heading font-bold text-lg text-[#0F172A]">
          TakeHomeHub
        </SheetTitle>
        <nav className="flex flex-col px-6 py-4 gap-1">
          {menuItems.map((item) => (
            <SheetClose key={item.href} render={<Link href={item.href} />}>
              <span className="block py-3 text-base font-medium text-[#334155] hover:text-[#0F172A] border-b border-[#F1F5F9] last:border-0 transition-colors">
                {item.label}
              </span>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
