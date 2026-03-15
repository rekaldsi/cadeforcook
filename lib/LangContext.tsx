"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from "react"

export type Lang = "en" | "es" | "pl" | "tl" | "hi"

export const LANGUAGES = [
  { code: "en" as Lang, label: "English", native: "English", flag: "🇺🇸" },
  { code: "es" as Lang, label: "Spanish", native: "Español", flag: "🇲🇽" },
  { code: "pl" as Lang, label: "Polish", native: "Polski", flag: "🇵🇱" },
  { code: "tl" as Lang, label: "Tagalog", native: "Tagalog", flag: "🇵🇭" },
  { code: "hi" as Lang, label: "Hindi", native: "हिन्दी", flag: "🇮🇳" },
]

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  useEffect(() => {
    const saved = localStorage.getItem("cade-lang") as Lang | null
    if (saved && (["en", "es", "pl", "tl", "hi"] as Lang[]).includes(saved)) {
      setLangState(saved)
    }
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem("cade-lang", l)
  }

  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>
}

export const useLang = () => useContext(LangCtx)
