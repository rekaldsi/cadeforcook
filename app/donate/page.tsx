import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Donate | Nicholas Cade for Cook County",
  description: "Support Nicholas Cade's campaign for Cook County Commissioner, District 8. Donate via ActBlue.",
};

const ACTBLUE_URL = "https://secure.actblue.com/donate/ncadewebsite";

const rules = [
  "I am at least eighteen years old.",
  "This contribution is made from my own funds.",
  "I am a U.S. citizen or lawfully admitted permanent resident.",
  "I understand the Cook County lobbyist $1,500 limit.",
];

export default function DonatePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy to-[#0d2d54] text-white py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Support the Campaign</h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Your contribution powers a grassroots campaign for better government. Every dollar helps Nicholas bring honest, effective leadership to Cook County.
          </p>
          <a
            href={ACTBLUE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red text-white font-bold text-xl px-12 py-5 rounded-lg hover:bg-red/90 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white shadow-lg"
          >
            Donate via ActBlue →
          </a>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        {/* Contribution Rules */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-navy mb-4">Contribution Rules</h2>
          <p className="text-text/70 mb-4">By contributing, you confirm:</p>
          <ol className="space-y-3">
            {rules.map((rule, i) => (
              <li key={i} className="flex gap-3 text-text/80">
                <span className="flex-shrink-0 w-7 h-7 bg-green text-white rounded-full flex items-center justify-center text-sm font-bold" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="pt-0.5">{rule}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Cook County Lobbyist Disclosure */}
        <div className="bg-light-gray rounded-xl p-6 md:p-8 border border-gray-200">
          <h2 className="text-xl font-bold text-navy mb-3">Cook County Disclosure</h2>
          <p className="text-text/70 leading-relaxed text-sm">
            Pursuant to Cook County Ordinance, no lobbyist registered to lobby Cook County, or person who has done business with Cook County within the preceding four reporting years, or is seeking to do business with Cook County, shall contribute over $1,500 during a calendar year.
          </p>
        </div>

        <div className="text-center mt-10">
          <a
            href={ACTBLUE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-navy text-white font-bold text-lg px-10 py-4 rounded-lg hover:bg-navy/90 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-navy shadow-lg"
          >
            Donate Now →
          </a>
        </div>
      </section>
    </>
  );
}
