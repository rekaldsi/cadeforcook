"use client";

import IssueCard from "@/components/IssueCard";
import issues from "@/data/issues";
import { useLang } from "@/lib/LangContext";
import t from "@/lib/translations";

const ACCENT_COLORS: Array<"navy" | "red" | "skyblue"> = ["navy", "red", "skyblue", "navy", "red"];

export default function IssuesPage() {
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <>
      <section className="bg-gradient-to-br from-navy to-[#0d2d54] text-white py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "#6DD3E8" }}>
            {tr.issues.eyebrow}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            {tr.issues.heading}
          </h1>
          <p className="text-white/80 text-lg">
            {tr.issues.subhead}
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="space-y-6">
          {issues.map((issue, i) => (
            <IssueCard
              key={issue.id}
              issue={issue}
              lang={lang}
              expanded
              accentColor={ACCENT_COLORS[i % ACCENT_COLORS.length]}
            />
          ))}
        </div>
      </section>
    </>
  );
}
