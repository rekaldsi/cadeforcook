export default function TransparencySection() {
  return (
    <section className="bg-navy py-16 md:py-20 px-4 border-t border-white/10" aria-labelledby="transparency-heading">
      <div className="max-w-6xl mx-auto">
        <p className="text-center font-mono text-xs tracking-[0.2em] uppercase text-skyblue mb-3">
          Open Books
        </p>
        <h2
          id="transparency-heading"
          className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-4"
        >
          You deserve to know who&apos;s funding this campaign.
        </h2>
        <p className="text-white/70 text-center text-lg max-w-2xl mx-auto mb-12">
          Every dollar Nicholas raises is publicly disclosed with Cook County. No surprises. No hidden money.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/5 rounded-2xl p-8 border-l-4 border-l-red">
            <p className="text-white/90 font-mono text-xs tracking-widest uppercase mb-3">Who&apos;s funding Cade?</p>
            <p className="text-xl font-bold text-white leading-snug mb-4">
              Neighbors. Teachers. Veterans. Working families from Irving Park to Norwood Park.
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              This campaign runs on small donations from real District 8 residents — the same people Nicholas is fighting for.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 flex flex-col justify-center gap-5">
            <a
              href="https://www.cookcountyclerk.com/service/campaign-disclosure"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold text-lg hover:text-skyblue transition-colors"
            >
              View Full Disclosure on Cook County CRIS →
            </a>
            <p className="text-white/50 text-sm">
              All contributions are publicly filed with the Cook County Clerk under Illinois campaign finance law.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
