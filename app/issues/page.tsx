"use client";

import { useState } from "react";
import IssueCard from "@/components/IssueCard";
import issues from "@/data/issues";
import type { Lang } from "@/lib/i18n";

export default function IssuesPage() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <>
      <section className="bg-gradient-to-br from-navy to-[#0d2d54] text-white py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            {lang === "en" ? "Priorities" : "Prioridades"}
          </h1>
          <p className="text-white/80 text-lg mb-6">
            {lang === "en"
              ? "The issues Nicholas will fight for as your Cook County Commissioner."
              : "Los temas por los que Nicholas luchará como su Comisionado del Condado de Cook."}
          </p>
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-mono rounded border border-white/30 hover:bg-white/10 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white"
            aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
          >
            <span aria-hidden="true">🌐</span>
            {lang === "en" ? "Español" : "English"}
          </button>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="space-y-6">
          {issues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} lang={lang} expanded />
          ))}
        </div>
      </section>
    </>
  );
}
