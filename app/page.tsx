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
      {/* 1. Hero — clean navy + banner lockup */}
      <HeroSection />

      {/* 2. Meet Nicholas — full-width campaign photo + 2-col bio */}
      <section
        className="py-16 md:py-24 border-t border-gray-100"
        aria-labelledby="meet-nicholas-heading"
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Wide campaign shot — gives the hero photo a proper home */}
          <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg mb-12">
            <Image
              src="/images/cade-hero.webp"
              alt="Nicholas Cade on the campaign trail in District 8"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            {/* Subtle gradient at bottom for depth */}
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/30 to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* 2-col bio */}
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
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-red mb-3">
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
                  Born and raised in Chicago — a product of the city&apos;s
                  parochial schools — Nicholas has spent his career solving
                  problems that matter.
                </p>
                <p>
                  He served his country as a{" "}
                  <strong className="text-navy">
                    U.S. Navy Judge Advocate
                  </strong>
                  , then came home to Chicago and taught middle school social
                  studies as a{" "}
                  <strong className="text-navy">
                    Teach For America corps member
                  </strong>
                  . He later worked as an{" "}
                  <strong className="text-navy">attorney</strong> and today
                  fights climate change on the front lines at Tradewater.
                </p>
                <p>
                  Nicholas lives in{" "}
                  <strong className="text-navy">Irving Park</strong> with his
                  wife and three young kids, who attend school in Logan Square.
                  Cook County is home. That&apos;s why he&apos;s running.
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
        </div>
      </section>

      {/* 3. Issues — substance/stakes, comes right after "who he is" */}
      <section
        className="bg-background py-16 md:py-24 border-t border-gray-100"
        aria-labelledby="issues-heading"
      >
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center font-mono text-xs tracking-[0.2em] uppercase text-red mb-3">
            What Nicholas Stands For
          </p>
          <h2
            id="issues-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-4"
          >
            Priorities for Cook County
          </h2>
          <p className="text-center text-text/70 leading-relaxed max-w-2xl mx-auto mb-12">
            Nicholas is focused on the issues that matter most to District 8
            families.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {issues.map((issue, i) => {
              // Accent top-border colors cycling
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
        </div>
      </section>

      {/* 4. Stats Counter — momentum + social proof after substance */}
      <StatsCounter />

      {/* 5. Photo Strip — emotional validation after facts */}
      <PhotoStrip />

      {/* 6. Endorsements */}
      <section
        className="bg-light-gray py-16 md:py-24 px-4 border-t border-gray-100"
        aria-labelledby="endorsements-heading"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-center font-mono text-xs tracking-[0.2em] uppercase text-red mb-3">
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

      {/* 7. Brand / Logos — proper home for campaign badges */}
      <section
        className="bg-navy py-16 md:py-20 px-4"
        aria-labelledby="logos-heading"
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* Thin rule above */}
          <div className="w-16 h-px bg-white/20 mx-auto mb-10" aria-hidden="true" />

          <p className="font-mono text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "#6DD3E8" }}>
            Supported By Our Community
          </p>
          <h2
            id="logos-heading"
            className="font-heading text-2xl md:text-3xl font-bold text-white mb-10"
          >
            Proud to Run as a Democrat for Chicago
          </h2>

          {/* Logos arranged side-by-side */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            <div className="opacity-90 hover:opacity-100 transition-opacity">
              <Image
                src="/images/cade-logo.png"
                alt="Cade for Cook — Democrat for Chicago badge"
                width={180}
                height={180}
                className="w-36 md:w-44 h-auto object-contain"
              />
            </div>
            <div className="opacity-90 hover:opacity-100 transition-opacity">
              <Image
                src="/images/cade-badge.png"
                alt="Cade for Cook — Campaign badge"
                width={180}
                height={180}
                className="w-36 md:w-44 h-auto object-contain"
              />
            </div>
          </div>

          {/* Thin rule below */}
          <div className="w-16 h-px bg-white/20 mx-auto mt-10" aria-hidden="true" />
        </div>
      </section>

      {/* 8. Donate CTA — full-width split, always last */}
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
            className="object-cover object-center opacity-40"
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
            {/* Small banner lockup above headline */}
            <div className="mb-6">
              <Image
                src="/images/cade-banner.png"
                alt="Cade for Cook"
                width={200}
                height={60}
                className="w-[200px] h-auto brightness-150 opacity-90"
              />
            </div>

            <p className="font-mono text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "#6DD3E8" }}>
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
              No dark money. No machine backing. Just people who believe in
              better government. Your contribution makes the difference — every
              dollar counts in a local race.
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
