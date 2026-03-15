"use client";

import { useState } from "react";
import { useLang } from "@/lib/LangContext";
import t from "@/lib/translations";

// Formspree endpoint — replace XXXX with the real form ID after creating at formspree.io
// Free tier: 50 submissions/month, sends to info@cadeforcook.com
const FORMSPREE_URL = "https://formspree.io/f/cadeforcook";

type FormState = "idle" | "submitting" | "success" | "error";

export default function GetInvolvedPage() {
  const { lang } = useLang();
  const tr = t[lang].getInvolvedPage;
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <>
      <section className="bg-gradient-to-br from-navy to-[#0d2d54] text-white py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            {tr.heading}
          </h1>
          <p className="text-white/80 text-lg">{tr.subhead}</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm mb-10">
          <h2 className="text-2xl font-bold text-navy mb-6">
            {tr.volunteerHeading}
          </h2>

          {formState === "success" ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-navy mb-3">
                You&apos;re on the team!
              </h3>
              <p className="text-text/70">
                We&apos;ll be in touch soon. Thank you for supporting Nicholas Cade.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-text mb-1"
                >
                  {tr.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={formState === "submitting"}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-text focus:outline-2 focus:outline-offset-2 focus:outline-navy disabled:opacity-60"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-text mb-1"
                >
                  {tr.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={formState === "submitting"}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-text focus:outline-2 focus:outline-offset-2 focus:outline-navy disabled:opacity-60"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block font-medium text-text mb-1"
                >
                  {tr.phoneLabel}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  disabled={formState === "submitting"}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-text focus:outline-2 focus:outline-offset-2 focus:outline-navy disabled:opacity-60"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block font-medium text-text mb-1"
                >
                  {tr.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  disabled={formState === "submitting"}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-text focus:outline-2 focus:outline-offset-2 focus:outline-navy disabled:opacity-60"
                />
              </div>

              {formState === "error" && (
                <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                  Something went wrong. Please email us directly at{" "}
                  <a
                    href="mailto:info@cadeforcook.com"
                    className="underline font-medium"
                  >
                    info@cadeforcook.com
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={formState === "submitting"}
                className="bg-navy text-white font-bold px-8 py-3 rounded-lg hover:bg-navy/90 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-navy disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formState === "submitting" ? "Sending…" : tr.submit}
              </button>
            </form>
          )}
        </div>

        <div className="bg-light-gray rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-navy mb-4">
            {tr.followHeading}
          </h2>
          <p className="text-text/70 mb-4">{tr.followSub}</p>
          <ul className="space-y-3">
            <li>
              <a
                href="https://secure.actblue.com/donate/ncadewebsite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy font-medium hover:underline focus:outline-2 focus:outline-offset-2 focus:outline-navy"
              >
                {tr.donateLink}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
