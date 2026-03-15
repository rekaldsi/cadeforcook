import Link from "next/link";

export default function Footer({ showLobbyistDisclaimer = false }: { showLobbyistDisclaimer?: boolean }) {
  return (
    <footer className="bg-navy text-white/80 mt-16 pb-20 md:pb-0" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h2 className="font-heading text-xl font-bold text-white mb-3">Cade for Cook</h2>
            <p className="text-sm leading-relaxed">
              Nicholas Cade for Cook County Commissioner, District 8.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-3">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white">Meet Nicholas</Link></li>
              <li><Link href="/issues" className="hover:text-white transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white">Issues</Link></li>
              <li><Link href="/donate" className="hover:text-white transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white">Donate</Link></li>
              <li><Link href="/get-involved" className="hover:text-white transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white">Get Involved</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-3">Connect</h3>
            <p className="text-sm">
              <a href="https://secure.actblue.com/donate/ncadewebsite" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white">
                Donate via ActBlue →
              </a>
            </p>
          </div>
        </div>

        <hr className="border-white/20 mb-6" />

        {/* LEGAL DISCLAIMER — required on every page */}
        <p className="text-xs leading-relaxed text-white/70 mb-4">
          Paid for by Friends of Nicholas Cade. Copies of our reports filed with the State Board of Elections are (or will be) available on the Board&apos;s official website (
          <a href="https://www.elections.il.gov" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">www.elections.il.gov</a>
          ) or for purchase from the State Board of Elections, Springfield, Illinois. Contributions to Friends of Nicholas Cade are not tax deductible.
        </p>

        {showLobbyistDisclaimer && (
          <p className="text-xs leading-relaxed text-white/70 mb-4">
            Pursuant to Cook County Ordinance, no lobbyist registered to lobby Cook County, or person who has done business with Cook County within the preceding four reporting years, or is seeking to do business with Cook County, shall contribute over $1,500 during a calendar year.
          </p>
        )}

        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} Friends of Nicholas Cade. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
