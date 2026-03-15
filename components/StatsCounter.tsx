"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/LangContext";
import t from "@/lib/translations";

interface Stat {
  key: "residents" | "daysUntil" | "doors" | "volunteers" | "yearsHome";
  value: number | "days-until-primary";
  suffix: string;
  prefix?: string;
}

const STATS: Stat[] = [
  { key: "residents", value: 130000, suffix: "+" },
  { key: "daysUntil", value: "days-until-primary", suffix: "" },
  { key: "doors", value: 2500, suffix: "+" },
  { key: "volunteers", value: 150, suffix: "+" },
  { key: "yearsHome", value: 35, suffix: "+" },
];

function getDaysUntilPrimary(): number {
  return Math.max(
    0,
    Math.ceil(
      (new Date("2026-03-17").getTime() - new Date().getTime()) / 86400000
    )
  );
}

function formatNumber(n: number): string {
  if (n >= 1000) return n.toLocaleString("en-US");
  return String(n);
}

function AnimatedStat({
  stat,
  trigger,
  voteToday,
}: {
  stat: Stat;
  trigger: boolean;
  voteToday: string;
}) {
  const [display, setDisplay] = useState<number>(0);
  const [isPrimaryDay, setIsPrimaryDay] = useState(false);
  const rafRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const target =
    stat.value === "days-until-primary"
      ? getDaysUntilPrimary()
      : (stat.value as number);

  useEffect(() => {
    if (stat.value === "days-until-primary") {
      setIsPrimaryDay(getDaysUntilPrimary() === 0);
    }
  }, [stat.value]);

  useEffect(() => {
    if (!trigger) return;
    const duration = 1500;
    const start = performance.now();

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = setTimeout(() => requestAnimationFrame(step), 16);
      } else {
        setDisplay(target);
      }
    }

    requestAnimationFrame(step);
    return () => { if (rafRef.current) clearTimeout(rafRef.current); };
  }, [trigger, target]);

  if (isPrimaryDay && stat.value === "days-until-primary") {
    return (
      <p className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-none" style={{ color: "#6DD3E8" }}>
        {voteToday}
      </p>
    );
  }

  return (
    <p className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-none" style={{ color: "#6DD3E8" }}>
      {stat.prefix}{formatNumber(display)}{stat.suffix}
    </p>
  );
}

export default function StatsCounter() {
  const [triggered, setTriggered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { lang } = useLang();
  const tr = t[lang].stats;

  const statLabels: Record<Stat["key"], string> = {
    residents: tr.residents,
    daysUntil: tr.daysUntil,
    doors: tr.doors,
    volunteers: tr.volunteers,
    yearsHome: tr.yearsHome,
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-navy py-20 px-4"
      aria-labelledby="stats-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="stats-heading"
          className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-3"
        >
          {tr.heading}
        </h2>
        <p className="text-white/50 text-center mb-14 text-sm font-mono tracking-widest uppercase">
          {tr.subhead}
        </p>

        {/* Horizontal strip of huge numbers */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {STATS.map((stat) => (
            <div key={stat.key} className="text-center">
              <AnimatedStat stat={stat} trigger={triggered} voteToday={tr.voteToday} />
              <p className="text-white/60 mt-3 text-xs md:text-sm font-medium tracking-wide uppercase leading-snug">
                {statLabels[stat.key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
