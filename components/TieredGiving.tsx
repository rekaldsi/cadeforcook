"use client";

import { useMemo, useState } from "react";

const ACTBLUE_URL = "https://secure.actblue.com/donate/cadeforcook";

const GIVING_TIERS = [
  { amount: 5, impact: "85 palm cards for D8 canvassers" },
  { amount: 25, impact: "25 households reached in your neighborhood" },
  { amount: 50, impact: "850 cards + digital outreach in one precinct" },
  { amount: 100, impact: "Full precinct push — you're all in" },
];

export default function TieredGiving() {
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState("");

  const parsedCustom = Number.parseInt(customAmount, 10);
  const finalAmount = useMemo(() => {
    if (Number.isFinite(parsedCustom) && parsedCustom > 0) {
      return parsedCustom;
    }
    return selectedAmount;
  }, [parsedCustom, selectedAmount]);

  return (
    <section className="bg-white text-navy py-12 md:py-16 px-4 border-t border-gray-100" aria-labelledby="tiered-giving-heading">
      <div className="max-w-3xl mx-auto">
        <h2 id="tiered-giving-heading" className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Chip In Before March 17
        </h2>
        <p className="text-sm md:text-base leading-relaxed text-navy/85 mb-3">
          The primary is March 17 — 2 days away. Every dollar funds palm cards, yard signs, and digital outreach in Irving Park, Portage Park, and Jefferson Park. Powered by neighbors, not machine money.
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-navy/70 mb-8">
          Join your neighbors who have already chipped in.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          {GIVING_TIERS.map((tier) => {
            const isSelected = customAmount === "" && selectedAmount === tier.amount;
            return (
              <div key={tier.amount}>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedAmount(tier.amount);
                    setCustomAmount("");
                  }}
                  className={`w-full rounded-lg border-2 px-5 py-3 font-bold text-lg transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-navy ${
                    isSelected ? "border-navy bg-navy text-white" : "border-navy text-navy hover:bg-navy hover:text-white"
                  }`}
                  aria-pressed={isSelected}
                >
                  ${tier.amount}
                </button>
                <p className="mt-2 text-xs font-mono text-navy/60">{tier.impact}</p>
              </div>
            );
          })}
        </div>

        <label className="block mb-6">
          <span className="block font-mono text-xs uppercase tracking-[0.12em] text-navy/70 mb-2">
            Custom amount
          </span>
          <input
            type="number"
            min={1}
            inputMode="numeric"
            value={customAmount}
            onChange={(event) => setCustomAmount(event.target.value)}
            placeholder="Enter amount"
            className="w-full rounded-lg border-2 border-navy/30 px-4 py-3 text-navy placeholder:text-navy/50 focus:border-navy focus:outline-none"
          />
        </label>

        <a
          href={`${ACTBLUE_URL}?amount=${finalAmount}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-lg bg-red px-6 py-4 text-lg font-bold text-white transition-colors hover:bg-red/90 focus:outline-2 focus:outline-offset-2 focus:outline-navy"
        >
          Chip In Now →
        </a>
      </div>
    </section>
  );
}
