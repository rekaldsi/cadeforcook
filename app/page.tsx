import HeroSection from "@/components/HeroSection";
import IssueCard from "@/components/IssueCard";
import EndorsementBadge from "@/components/EndorsementBadge";
import issues from "@/data/issues";
import endorsements from "@/data/endorsements";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Issues preview */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24" aria-labelledby="issues-heading">
        <h2 id="issues-heading" className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-4">
          Priorities for Cook County
        </h2>
        <p className="text-center text-text/70 max-w-2xl mx-auto mb-12">
          Nicholas is focused on the issues that matter most to District 8 families.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} lang="en" />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/issues"
            className="inline-block text-navy font-bold border-2 border-navy px-6 py-3 rounded-lg hover:bg-navy hover:text-white transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-navy"
          >
            See All Issues →
          </Link>
        </div>
      </section>

      {/* Endorsements */}
      <section className="bg-light-gray py-16 md:py-24 px-4" aria-labelledby="endorsements-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="endorsements-heading" className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            Endorsements
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {endorsements.map((e) => (
              <EndorsementBadge key={e.name} endorsement={e} />
            ))}
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="bg-navy text-white py-16 md:py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Power This Campaign
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            No dark money. No machine backing. Just people who believe in better government. Your contribution makes the difference.
          </p>
          <a
            href="https://secure.actblue.com/donate/ncadewebsite"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red text-white font-bold text-lg px-10 py-4 rounded-lg hover:bg-red/90 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white shadow-lg"
          >
            Donate Now →
          </a>
        </div>
      </section>
    </>
  );
}
