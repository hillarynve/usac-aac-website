"use client";

import Link from "next/link";
import { useState } from "react";
import { Mulish } from 'next/font/google';
import { LuMenu, LuX } from "react-icons/lu";
import { NAV_LINKS } from "@/lib/site";

const mulish = Mulish({ subsets: ['latin']});

// Collapsible menu shown below the `lg` breakpoint, where the full nav doesn't fit.
export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex items-center justify-center h-12 w-12 text-usac-blue hover:text-usac-blue-light"
      >
        {open ? <LuX className="w-7 h-7"/> : <LuMenu className="w-7 h-7"/>}
      </button>

      {open && (
        <nav
          id="mobile-nav"
          className={`absolute inset-x-0 top-full z-20 max-h-[calc(100vh-6rem)] overflow-y-auto bg-white shadow-lg px-6 pb-6 ${mulish.className}`}
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-b border-gray-100 last:border-0">
                <Link href={link.href} onClick={close} className="block py-3 text-lg text-usac-blue hover:text-usac-blue-light">
                  {link.label}
                </Link>
                {link.dropdownItems && (
                  <ul className="pb-3 pl-4">
                    {link.dropdownItems.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} onClick={close} className="block py-1.5 text-usac-blue/80 hover:text-usac-blue-light">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
