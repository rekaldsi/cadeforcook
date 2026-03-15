"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import IssueCard from "@/components/IssueCard";
import EndorsementBadge from "@/components/EndorsementBadge";
import StatsCounter from "@/components/StatsCounter";
import PhotoStrip from "@/components/PhotoStrip";
import DonateSection from "@/components/DonateSection";
import TransparencySection from "@/components/TransparencySection";
import issues from "@/data/issues";
import endorsements from "@/data/endorsements";
import { useLang } from "@/lib/LangContext";
import t from "@/lib/translations";

const ACCENT_COLORS: Array<"navy" | "red" | "skyblue"> = ["navy", "red", "skyblue", "navy", "red"];

function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("https://cadeforcook.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: no-op
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center justify-center gap-2 bg-navy/10 text-navy font-bold px-4 py-2.5 rounded-lg hover:bg-navy/20 transition-colors text-sm focus:outline-2 focus:outline-offset-2 focus:outline-navy w-full"
    >
      <span aria-hidden="true">{copied ? "✓" : "🔗"}</span>
      {copied ? "Link Copied!" : "Copy Link"}
    </button>
  );
}

export default function Home() {
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <>
      <HeroSection />

      <StatsCounter />

      <section
        className="bg-background py-16 md:py-20 border-t border-gray-100"
        aria-labelledby="case-heading"
      >
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center font-mono text-xs tracking-[0.2em] uppercase text-red mb-3">
            March 17 Primary
          </p>
          <h2
            id="case-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-12"
          >
            {tr.case.heading}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-sm p-8 border-l-4 border-l-navy hover:shadow-md transition-shadow">
              <p className="font-mono text-sm font-bold tracking-[0.2em] uppercase text-red mb-4">01</p>
              <h3 className="text-xl font-bold text-navy mb-3">
                {tr.case.served.title}
              </h3>
              <p className="text-text/80 leading-relaxed">{tr.case.served.body}</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8 border-l-4 border-l-red hover:shadow-md transition-shadow">
              <p className="font-mono text-sm font-bold tracking-[0.2em] uppercase text-red mb-4">02</p>
              <h3 className="text-xl font-bold text-navy mb-3">
                {tr.case.taught.title}
              </h3>
              <p className="text-text/80 leading-relaxed">{tr.case.taught.body}</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8 border-l-4 border-l-skyblue hover:shadow-md transition-shadow">
              <p className="font-mono text-sm font-bold tracking-[0.2em] uppercase text-red mb-4">03</p>
              <h3 className="text-xl font-bold text-navy mb-3">
                {tr.case.fought.title}
              </h3>
              <p className="text-text/80 leading-relaxed">{tr.case.fought.body}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16 md:py-24 border-t border-gray-100 bg-background"
        aria-labelledby="roots-heading"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <div
                className="bg-white p-4 pb-10 shadow-xl"
                style={{ transform: "rotate(-2deg)", maxWidth: "340px", width: "100%" }}
                role="img"
                aria-label="Nicholas Cade with his family"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/cade-family.jpg"
                    alt="Nicholas Cade with his family in Irving Park"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 40vw"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 id="roots-heading" className="sr-only">Community Roots</h2>
              <blockquote className="font-heading text-2xl md:text-3xl italic text-navy leading-snug mb-6">
                &ldquo;{tr.roots.quote}&rdquo;
              </blockquote>
              <cite className="not-italic text-text/60 font-medium text-base block mb-8">
                {tr.roots.attribution}
              </cite>
              <div className="flex flex-wrap gap-2">
                {tr.roots.pills.map((pill) => (
                  <span
                    key={pill}
                    className="bg-navy/10 text-navy text-sm font-medium px-4 py-1.5 rounded-full"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-light-gray py-16 md:py-24 border-t border-gray-100"
        aria-labelledby="issues-heading"
      >
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center font-mono text-xs tracking-[0.2em] uppercase text-red mb-3">
            {tr.issues.eyebrow}
          </p>
          <h2
            id="issues-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-4"
          >
            {tr.issues.heading}
          </h2>
          <p className="text-center text-text/70 leading-relaxed max-w-2xl mx-auto mb-3">
            {tr.issues.subhead}
          </p>
          <p className="text-center text-text/80 leading-relaxed max-w-2xl mx-auto mb-12">
            From Irving Park to Norwood Park, District 8 families deserve a commissioner who shows up.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {issues.map((issue, i) => (
              <IssueCard
                key={issue.id}
                issue={issue}
                lang={lang}
                accentColor={ACCENT_COLORS[i % ACCENT_COLORS.length]}
                cardNumber={i + 1}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/issues"
              className="inline-block text-navy font-bold border-2 border-navy px-6 py-3 rounded-lg hover:bg-navy hover:text-white transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-navy"
            >
              {tr.issues.seeAll}
            </Link>
          </div>
        </div>
      </section>

      <PhotoStrip />

      <section
        className="bg-light-gray py-16 md:py-24 px-4 border-t border-gray-100"
        aria-labelledby="endorsements-heading"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-center font-mono text-xs tracking-[0.2em] uppercase text-red mb-3">
            {tr.endorsements.eyebrow}
          </p>
          <h2
            id="endorsements-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-3"
          >
            {tr.endorsements.heading}
          </h2>
          <p className="text-center text-text/60 max-w-xl mx-auto mb-12 text-base">
            {tr.endorsements.context}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {endorsements.map((e) => (
              <EndorsementBadge key={e.name} endorsement={e} />
            ))}
          </div>
        </div>
      </section>

      <TransparencySection />

      <section className="bg-navy py-16 md:py-20 px-4 border-t border-white/10" aria-labelledby="resources-teaser-heading">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-skyblue mb-3">
            District 8 Services
          </p>
          <h2
            id="resources-teaser-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Need Help in District 8?
          </h2>
          <p className="text-white/75 leading-relaxed max-w-3xl mx-auto mb-8">
            Resources for Irving Park, Portage Park, Jefferson Park, and the neighborhoods we call home.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Link
              href="/resources#food"
              className="rounded-full border border-white/25 bg-white/10 text-white px-5 py-2.5 font-medium hover:bg-white/20 transition-colors"
            >
              🍎 Food Assistance
            </Link>
            <Link
              href="/resources#housing"
              className="rounded-full border border-white/25 bg-white/10 text-white px-5 py-2.5 font-medium hover:bg-white/20 transition-colors"
            >
              🏠 Housing Help
            </Link>
            <Link
              href="/resources#health"
              className="rounded-full border border-white/25 bg-white/10 text-white px-5 py-2.5 font-medium hover:bg-white/20 transition-colors"
            >
              🏥 Health Care
            </Link>
          </div>
          <Link
            href="/resources"
            className="inline-block bg-red text-white font-bold px-8 py-3 rounded-lg hover:bg-red/90 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white"
          >
            See All 60+ District 8 Resources →
          </Link>
        </div>
      </section>

      <section
        className="bg-background py-16 md:py-24 px-4 border-t border-gray-100"
        aria-labelledby="action-hub-heading"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-center font-mono text-xs tracking-[0.2em] uppercase text-red mb-3">
            {tr.getInvolved.eyebrow}
          </p>
          <h2
            id="action-hub-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-12"
          >
            {tr.getInvolved.heading}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-sm p-8 border-l-4 border-l-navy hover:shadow-md transition-shadow">
              <p className="font-mono text-sm font-bold tracking-[0.2em] uppercase text-red mb-4">01</p>
              <h3 className="text-xl font-bold text-navy mb-3">
                {tr.getInvolved.vote.title}
              </h3>
              <p className="text-text/70 mb-6 leading-relaxed">
                {tr.getInvolved.vote.body}
              </p>
              <a
                href="https://www.elections.il.gov/VotingAndRegistrationSystems/RegisterToVoteLogin.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-navy text-white font-bold px-6 py-3 rounded-lg hover:bg-navy/90 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-navy"
              >
                {tr.getInvolved.vote.cta}
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 border-l-4 border-l-red hover:shadow-md transition-shadow">
              <p className="font-mono text-sm font-bold tracking-[0.2em] uppercase text-red mb-4">02</p>
              <h3 className="text-xl font-bold text-navy mb-3">
                {tr.getInvolved.canvass.title}
              </h3>
              <p className="text-text/70 mb-6 leading-relaxed">
                {tr.getInvolved.canvass.body}
              </p>
              <Link
                href="/get-involved"
                className="inline-block bg-red text-white font-bold px-6 py-3 rounded-lg hover:bg-red/90 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-navy"
              >
                {tr.getInvolved.canvass.cta}
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 border-l-4 border-l-skyblue hover:shadow-md transition-shadow">
              <p className="font-mono text-sm font-bold tracking-[0.2em] uppercase text-red mb-4">03</p>
              <h3 className="text-xl font-bold text-navy mb-3">
                {tr.getInvolved.share.title}
              </h3>
              <p className="text-text/70 mb-6 leading-relaxed">
                {tr.getInvolved.share.body}
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://twitter.com/intent/tweet?text=Nicholas%20Cade%20is%20running%20for%20Cook%20County%20Commissioner%2C%20District%208.%20Vote%20March%2017!&url=https%3A%2F%2Fcadeforcook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#1DA1F2]/10 text-[#1DA1F2] font-bold px-4 py-2.5 rounded-lg hover:bg-[#1DA1F2]/20 transition-colors text-sm focus:outline-2 focus:outline-offset-2 focus:outline-navy"
                >
                  <span aria-hidden="true" className="font-bold">𝕏</span> Share on X/Twitter
                </a>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcadeforcook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#1877F2]/10 text-[#1877F2] font-bold px-4 py-2.5 rounded-lg hover:bg-[#1877F2]/20 transition-colors text-sm focus:outline-2 focus:outline-offset-2 focus:outline-navy"
                >
                  <span aria-hidden="true" className="font-bold">f</span> Share on Facebook
                </a>
                <CopyLinkButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-navy py-16 md:py-24 px-4"
        aria-labelledby="testimonials-heading"
      >
        <div className="max-w-6xl mx-auto">
          <p
            className="text-center font-mono text-xs tracking-[0.2em] uppercase mb-3"
            style={{ color: "#6DD3E8" }}
          >
            {tr.testimonials.eyebrow}
          </p>
          <h2
            id="testimonials-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            {tr.testimonials.heading}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {tr.testimonials.quotes.map((quote, i) => (
              <blockquote
                key={i}
                className="bg-white/10 rounded-2xl p-8 flex flex-col"
              >
                <div
                  className="text-white/30 text-5xl font-heading mb-4 leading-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </div>
                <p className="font-heading text-white/90 text-lg leading-relaxed flex-1 italic">
                  {quote.text}
                </p>
                <footer className="mt-6">
                  <cite className="not-italic">
                    <span className="text-white font-bold block">{quote.name}</span>
                    <span className="text-sm font-medium" style={{ color: "#6DD3E8" }}>
                      {quote.neighborhood}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <DonateSection />

      <section className="bg-navy py-14 md:py-20 px-4" aria-label="Campaign badge">
        <div className="max-w-sm mx-auto text-center">
          <div className="w-16 h-px bg-white/20 mx-auto mb-10" aria-hidden="true" />
          <Image
            src="/images/cade-badge.png"
            alt="Nicholas Cade — Democrat for Cook, 8th District County Commissioner"
            width={260}
            height={260}
            className="w-48 md:w-64 h-auto object-contain mx-auto drop-shadow-xl"
          />
          <div className="w-16 h-px bg-white/20 mx-auto mt-10" aria-hidden="true" />
        </div>
      </section>
    </>
  );
}
