import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import IssueCard from "@/components/IssueCard";
import EndorsementBadge from "@/components/EndorsementBadge";
import StatsCounter from "@/components/StatsCounter";
import PhotoStrip from "@/components/PhotoStrip";
import issues from "@/data/issues";
import endorsements from "@/data/endorsements";

export default function Home() {
  return (
    <>
      {/* 1. Hero — full bleed with photo */}
      <HeroSection />

      {/* 2. Meet Nicholas — two-column bio */}
      <section
        className="max-w-6xl mx-auto px-4 py-16 md:py-24"
        aria-labelledby="meet-nicholas-heading"
      >
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Headshot */}
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl max-w-sm mx-auto">
              <Image
                src="/images/cade-headshot.jpg"
                alt="Nicholas Cade, candidate for Cook County Commissioner District 8"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 90vw, 45vw"
              />
            </div>
            {/* Floating accent badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-4 md:-right-8 bg-navy text-white text-xs font-mono font-bold tracking-widest uppercase px-4 py-2 rounded-full shadow-lg">
              District 8
            </div>
          </div>

          {/* Bio text */}
          <div>
            <p className="text-red font-mono text-sm font-bold tracking-widest uppercase mb-3">
              Meet the Candidate
            </p>
            <h2
              id="meet-nicholas-heading"
              className="font-heading text-3xl md:text-4xl font-bold text-navy mb-2 leading-tight"
            >
              Nicholas Cade
            </h2>
            <p className="font-heading text-xl text-navy/50 mb-6 italic">
              Navy. Law. Teaching. Family. Chicago.
            </p>

            <div className="space-y-4 text-text/80 leading-relaxed">
              <p>
                Born and raised in Chicago — a product of the city&apos;s parochial schools — Nicholas has spent his career solving problems that matter.
              </p>
              <p>
                He served his country as a <strong className="text-navy">U.S. Navy Judge Advocate</strong>, then came home to Chicago and taught middle school social studies as a <strong className="text-navy">Teach For America corps member</strong>. He later worked as an <strong className="text-navy">attorney</strong> and today fights climate change on the front lines at Tradewater.
              </p>
              <p>
                Nicholas lives in <strong className="text-navy">Irving Park</strong> with his wife and three young kids, who attend school in Logan Square. Cook County is home. That&apos;s why he&apos;s running.
              </p>
            </div>

            {/* Credential pills */}
            <div className="flex flex-wrap gap-2 mt-7">
              {[
                "🎖️ Navy Veteran",
                "⚖️ Attorney",
                "📚 Teacher",
                "🌿 Climate Advocate",
                "👨‍👩‍👧 Chicago Dad",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-block font-bold text-navy border-2 border-navy px-6 py-3 rounded-lg hover:bg-navy hover:text-white transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-navy"
              >
                Full Biography →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Photo Strip */}
      <PhotoStrip />

      {/* 4. Issues */}
      <section
        className="max-w-6xl mx-auto px-4 py-16 md:py-24"
        aria-labelledby="issues-heading"
      >
        <p className="text-center text-red font-mono text-sm font-bold tracking-widest uppercase mb-3">
          What Nicholas Stands For
        </p>
        <h2
          id="issues-heading"
          className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-4"
        >
          Priorities for Cook County
        </h2>
        <p className="text-center text-text/70 max-w-2xl mx-auto mb-12">
          Nicholas is focused on the issues that matter most to District 8 families.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issues.map((issue, i) => {
            // Accent colors cycling: navy, red, green
            const accents = [
              "border-t-4 border-t-navy",
              "border-t-4 border-t-red",
              "border-t-4 border-t-green",
              "border-t-4 border-t-navy",
              "border-t-4 border-t-red",
            ];
            return (
              <div key={issue.id} className={accents[i % accents.length]}>
                <IssueCard issue={issue} lang="en" />
              </div>
            );
          })}
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

      {/* 5. Animated Stats Counter */}
      <StatsCounter />

      {/* 6. Endorsements */}
      <section
        className="bg-light-gray py-16 md:py-24 px-4"
        aria-labelledby="endorsements-heading"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-red font-mono text-sm font-bold tracking-widest uppercase mb-3">
            Who&apos;s With Nicholas
          </p>
          <h2
            id="endorsements-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-12"
          >
            Endorsements
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {endorsements.map((e) => (
              <EndorsementBadge key={e.name} endorsement={e} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Donate CTA — full-width split */}
      <section
        className="relative overflow-hidden bg-navy text-white"
        aria-labelledby="donate-heading"
      >
        {/* Rally photo background (right half on desktop) */}
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1/2">
          <Image
            src="/images/cade-rally.webp"
            alt=""
            fill
            className="object-cover object-center opacity-30"
            sizes="50vw"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-red font-mono text-sm font-bold tracking-widest uppercase mb-4">
              Power This Campaign
            </p>
            <h2
              id="donate-heading"
              className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Cook County
              <br />
              <span className="text-red">Can Do Better.</span>
              <br />
              Help Make It Happen.
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed text-lg max-w-xl">
              No dark money. No machine backing. Just people who believe in better government. Your contribution makes the difference — every dollar counts in a local race.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://secure.actblue.com/donate/ncadewebsite"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red text-white font-bold text-lg px-10 py-4 rounded-lg hover:bg-red/90 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white shadow-lg text-center"
              >
                Donate Now →
              </a>
              <Link
                href="/get-involved"
                className="inline-block bg-transparent text-white font-bold text-lg px-10 py-4 rounded-lg border-2 border-white hover:bg-white hover:text-navy transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white text-center"
              >
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
