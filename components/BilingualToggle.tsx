"use client";

import { useLang } from "@/lib/i18n";

export default function BilingualToggle() {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "es" : "en")}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-mono rounded border border-navy/20 hover:bg-navy hover:text-white transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-navy"
      aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
    >
      <span aria-hidden="true">🌐</span>
      {lang === "en" ? "Español" : "English"}
    </button>
  );
}
