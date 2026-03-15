"use client";

import Link from "next/link";
import { useLang } from "@/lib/LangContext";
import t from "@/lib/translations";

export default function Footer({ showLobbyistDisclaimer = false }: { showLobbyistDisclaimer?: boolean }) {
  const { lang } = useLang();
  const tr = t[lang].footer;
  const nav = t[lang].nav;

  return (
    <footer className="bg-navy text-white/80 mt-16 pb-20 md:pb-0" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h2 className="font-heading text-xl font-bold text-white mb-3">Cade for Cook</h2>
            <p className="text-sm leading-relaxed">{tr.tagline}</p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-3">{tr.pages}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white">{nav.about}</Link></li>
              <li><Link href="/issues" className="hover:text-white transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white">{nav.issues}</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white">Resources</Link></li>
              <li><Link href="/donate" className="hover:text-white transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white">{nav.donate}</Link></li>
              <li><Link href="/get-involved" className="hover:text-white transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white">{nav.getInvolved}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-3">{tr.connect}</h3>
            <p className="text-sm">
              <a
                href="https://secure.actblue.com/donate/ncadewebsite"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white"
              >
                {nav.donate} via ActBlue →
              </a>
            </p>
          </div>
        </div>

        <hr className="border-white/20 mb-6" />

        {/* LEGAL DISCLAIMER */}
        <p className="text-xs leading-relaxed text-white/70 mb-4">
          {tr.disclaimer}{" "}
          <a href="https://www.elections.il.gov" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
            www.elections.il.gov
          </a>
        </p>

        {showLobbyistDisclaimer && (
          <p className="text-xs leading-relaxed text-white/70 mb-4">
            Pursuant to Cook County Ordinance, no lobbyist registered to lobby Cook County, or person who has done business with Cook County within the preceding four reporting years, or is seeking to do business with Cook County, shall contribute over $1,500 during a calendar year.
          </p>
        )}

        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} {tr.copyright}
        </p>
      </div>
    </footer>
  );
}
