"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ACTBLUE_URL } from "./DonateButton";
import { useLang } from "@/lib/LangContext";
import t from "@/lib/translations";

const POLLING_LOCATOR_URL =
  "https://www.cookcountyclerk.com/service/polling-place-locator";

function isPrimaryDay(): boolean {
  const now = new Date();
  const primary = new Date("2026-03-17");
  return (
    now.getFullYear() === primary.getFullYear() &&
    now.getMonth() === primary.getMonth() &&
    now.getDate() === primary.getDate()
  );
}

export default function DonateSection() {
  const { lang } = useLang();
  const tr = t[lang].donate;
  const [isToday, setIsToday] = useState(false);

  useEffect(() => {
    setIsToday(isPrimaryDay());
  }, []);

  return (
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
          <div className="mb-6">
            <Image
              src="/images/cade-banner.png"
              alt="Cade for Cook"
              width={200}
              height={60}
              className="w-[200px] h-auto brightness-150 opacity-90"
            />
          </div>

          {isToday ? (
            /* ── PRIMARY DAY MODE ── */
            <>
              <p
                className="font-mono text-xs tracking-[0.2em] uppercase mb-4 font-bold"
                style={{ color: "#FFD700" }}
              >
                🗳️ TODAY IS THE DAY
              </p>
              <h2
                id="donate-heading"
                className="font-heading text-4xl md:text-5xl font-bold mb-4 leading-tight"
              >
                It&apos;s{" "}
                <span style={{ color: "#FFD700" }}>March 17.</span>
                <br />
                <span className="text-white">Go Vote. Right Now.</span>
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed text-lg max-w-xl">
                Polls are open. Find your polling place and cast your vote for
                Nicholas Cade — Cook County Commissioner, District 8.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={POLLING_LOCATOR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-bold text-lg px-10 py-4 rounded-lg shadow-lg text-center text-navy animate-pulse"
                  style={{ backgroundColor: "#FFD700" }}
                >
                  Find My Polling Place →
                </a>
                <a
                  href={ACTBLUE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-transparent text-white font-bold text-lg px-10 py-4 rounded-lg border-2 border-white hover:bg-white hover:text-navy transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white text-center"
                >
                  Donate →
                </a>
              </div>
            </>
          ) : (
            /* ── PRE-PRIMARY MODE ── */
            <>
              <p
                className="font-mono text-xs tracking-[0.2em] uppercase mb-4"
                style={{ color: "#6DD3E8" }}
              >
                {tr.eyebrow}
              </p>
              <h2
                id="donate-heading"
                className="font-heading text-4xl md:text-5xl font-bold mb-4 leading-tight"
              >
                {tr.heading}{" "}
                <span className="text-red">{tr.headlineAccent}</span>
                <br />
                <span className="text-white">{tr.subhead}</span>
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed text-lg max-w-xl">
                {tr.urgency}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={ACTBLUE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red text-white font-bold text-lg px-10 py-4 rounded-lg hover:bg-red/90 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white shadow-lg text-center"
                >
                  {tr.cta}
                </a>
                <Link
                  href="/get-involved"
                  className="inline-block bg-transparent text-white font-bold text-lg px-10 py-4 rounded-lg border-2 border-white hover:bg-white hover:text-navy transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white text-center"
                >
                  {tr.volunteerCta}
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
