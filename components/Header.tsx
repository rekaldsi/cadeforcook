"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ACTBLUE_URL } from "./DonateButton";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Meet Nicholas" },
  { href: "/issues", label: "Issues" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/press", label: "Press" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-200" role="banner">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-2 focus:outline-2 focus:outline-offset-2 focus:outline-navy" aria-label="Cade for Cook — Home">
          <Image
            src="/images/cade-logo.png"
            alt="Cade for Cook County"
            width={140}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-text hover:text-navy font-medium transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-navy"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={ACTBLUE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red text-white font-bold px-5 py-2 rounded-lg hover:bg-red/90 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-navy"
          >
            Donate
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 focus:outline-2 focus:outline-offset-2 focus:outline-navy"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-text hover:text-navy font-medium border-b border-gray-100 focus:outline-2 focus:outline-offset-2 focus:outline-navy"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={ACTBLUE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 text-center bg-red text-white font-bold py-3 rounded-lg"
          >
            Donate
          </a>
        </div>
      )}
    </header>
  );
}
