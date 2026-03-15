"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  label: string;
  value: number | "days-until-primary";
  suffix: string;
  prefix?: string;
}

const STATS: Stat[] = [
  {
    label: "District 8 Residents",
    value: 130000,
    suffix: "+",
  },
  {
    label: "Days Until Primary",
    value: "days-until-primary",
    suffix: "",
  },
  {
    label: "Doors Knocked",
    value: 2500,
    suffix: "+",
  },
  {
    label: "Volunteers",
    value: 150,
    suffix: "+",
  },
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
  if (n >= 1000) {
    return n.toLocaleString("en-US");
  }
  return String(n);
}

function AnimatedStat({ stat, trigger }: { stat: Stat; trigger: boolean }) {
  const [display, setDisplay] = useState<number>(0);
  const [isPrimaryDay, setIsPrimaryDay] = useState(false);
  const rafRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const target =
    stat.value === "days-until-primary"
      ? getDaysUntilPrimary()
      : (stat.value as number);

  useEffect(() => {
    if (stat.value === "days-until-primary") {
      const days = getDaysUntilPrimary();
      setIsPrimaryDay(days === 0);
    }
  }, [stat.value]);

  useEffect(() => {
    if (!trigger) return;

    const duration = 1500; // ms
    const start = performance.now();

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));

      if (progress < 1) {
        rafRef.current = setTimeout(() => {
          requestAnimationFrame(step);
        }, 16);
      } else {
        setDisplay(target);
      }
    }

    requestAnimationFrame(step);

    return () => {
      if (rafRef.current) clearTimeout(rafRef.current);
    };
  }, [trigger, target]);

  if (isPrimaryDay && stat.value === "days-until-primary") {
    return (
      <p className="font-heading text-5xl md:text-6xl font-bold text-red leading-none">
        TODAY!
      </p>
    );
  }

  return (
    <p className="font-heading text-5xl md:text-6xl font-bold text-red leading-none">
      {stat.prefix}
      {formatNumber(display)}
      {stat.suffix}
    </p>
  );
}

export default function StatsCounter() {
  const [triggered, setTriggered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
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
          className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-4"
        >
          The Campaign by the Numbers
        </h2>
        <p className="text-white/60 text-center mb-14 text-base font-mono tracking-wide uppercase">
          District 8 · Cook County · Democratic Primary
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedStat stat={stat} trigger={triggered} />
              <p className="text-white/70 mt-3 text-sm md:text-base font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
