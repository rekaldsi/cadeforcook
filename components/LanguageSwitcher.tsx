"use client"

import { useState, useRef, useEffect } from "react"
import { useLang, LANGUAGES } from "@/lib/LangContext"
import type { Lang } from "@/lib/LangContext"

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const current = LANGUAGES.find((l) => l.code === lang)!

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleSelect = (code: Lang) => {
    setLang(code)
    setOpen(false)
  }

  return (
    <div ref={containerRef} className="relative" data-lang-switcher>
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Language: ${current.label}. Click to change language.`}
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg border border-gray-200 hover:border-navy hover:bg-navy/5 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-navy bg-white text-text"
      >
        <span aria-hidden="true">{current.flag}</span>
        <span className="hidden sm:inline">{current.native}</span>
        <svg
          className={`w-3 h-3 text-navy/50 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Select language"
          className="absolute right-0 mt-1 min-w-[10rem] bg-white border border-gray-200 rounded-xl shadow-lg py-1 z-50 overflow-hidden"
        >
          {LANGUAGES.map((language) => (
            <li
              key={language.code}
              role="option"
              aria-selected={lang === language.code}
              className={`flex items-center gap-2.5 px-4 py-2.5 cursor-pointer text-sm transition-colors hover:bg-navy/5 focus-within:bg-navy/5 ${
                lang === language.code ? "bg-navy/5 text-navy font-semibold" : "text-text"
              }`}
              onClick={() => handleSelect(language.code)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  handleSelect(language.code)
                }
              }}
              tabIndex={0}
            >
              <span aria-hidden="true" className="text-base">{language.flag}</span>
              <span className="flex-1">{language.native}</span>
              {lang === language.code && (
                <svg className="w-4 h-4 text-navy flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
