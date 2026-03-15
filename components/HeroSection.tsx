"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ACTBLUE_URL } from "./DonateButton";
import { useLang } from "@/lib/LangContext";
import t from "@/lib/translations";

function isPrimaryDay(): boolean {
  const now = new Date();
  const primary = new Date("2026-03-17");
  return (
    now.getFullYear() === primary.getFullYear() &&
    now.getMonth() === primary.getMonth() &&
    now.getDate() === primary.getDate()
  );
}

export default function HeroSection() {
  const { lang } = useLang();
  const tr = t[lang].hero;
  const [isToday, setIsToday] = useState(false);

  useEffect(() => {
    setIsToday(isPrimaryDay());
  }, []);

  const primaryCta = isToday ? "🗳️ VOTE TODAY — POLLS OPEN" : tr.ctaPrimary;
  const eyebrow = isToday
    ? "🗳️ TODAY IS MARCH 17 · ELECTION DAY · COOK COUNTY DISTRICT 8"
    : tr.eyebrow;

  return (
    <section
      className="relative min-h-screen flex flex-col md:flex-row overflow-hidden"
      aria-label="Campaign hero"
    >
      {/* ── LEFT PANEL (60%) — Navy text content ── */}
      <div className="relative z-10 flex flex-col justify-center bg-navy px-8 md:px-12 lg:px-16 py-20 md:py-24 w-full md:w-[60%] min-h-screen">

        {/* Eyebrow */}
        <p
          className="font-mono text-xs tracking-[0.25em] uppercase mb-8 font-bold"
          style={{ color: isToday ? "#FFD700" : "#6DD3E8" }}
        >
          {eyebrow}
        </p>

        {/* Main headline */}
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-8">
          {tr.headline}{" "}
          <span className="text-red italic">{tr.headlineAccent}</span>{" "}
          <span className="text-white">Neighborhood.</span>
        </h1>

        {/* Subhead */}
        <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
          {tr.subhead}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          {isToday ? (
            <a
              href="https://www.cookcountyclerk.com/service/polling-place-locator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-navy font-bold text-base px-8 py-4 rounded-lg shadow-lg text-center tracking-wide uppercase animate-pulse"
              style={{ backgroundColor: "#FFD700" }}
            >
              {primaryCta}
            </a>
          ) : (
            <a
              href={ACTBLUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red text-white font-bold text-base px-8 py-4 rounded-lg hover:bg-red/90 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white shadow-lg text-center tracking-wide uppercase"
            >
              {primaryCta}
            </a>
          )}
          <Link
            href="/about"
            className="inline-block bg-transparent text-white font-bold text-base px-8 py-4 rounded-lg border-2 border-white hover:bg-white hover:text-navy transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white text-center"
          >
            {tr.ctaSecondary}
          </Link>
        </div>

        {/* Social proof strip */}
        <div className="border-t border-white/20 pt-6">
          <p className="text-white/50 text-xs font-mono tracking-wide leading-relaxed">
            {tr.endorsedBy}
          </p>
        </div>
      </div>

      {/* ── RIGHT PANEL (40%) — Headshot ── */}
      {/* Desktop: absolute side panel */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[40%]">
        <Image
          src="/images/cade-headshot.jpg"
          alt="Nicholas Cade, candidate for Cook County Commissioner District 8"
          fill
          className="object-cover object-top"
          sizes="40vw"
          priority
        />
        {/* Warm overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(10,34,64,0.35) 0%, rgba(244,169,43,0.08) 100%)" }}
          aria-hidden="true"
        />
      </div>

      {/* Mobile: headshot as background behind left content */}
      <div className="md:hidden absolute inset-0 z-0">
        <Image
          src="/images/cade-headshot.jpg"
          alt=""
          fill
          className="object-cover object-top"
          sizes="100vw"
          priority
          aria-hidden="true"
        />
        {/* Heavy overlay so text is readable on mobile */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(10,34,64,0.88) 0%, rgba(10,34,64,0.80) 100%)" }}
          aria-hidden="true"
        />
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce md:left-[30%]"
        aria-hidden="true"
      >
        <svg className="w-6 h-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
