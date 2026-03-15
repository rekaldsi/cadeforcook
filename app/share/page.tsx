"use client";

import { useState } from "react";

const downloads = [
  {
    label: "Facebook / Twitter (1200×628)",
    href: "/downloads/cade-share-facebook.png",
  },
  {
    label: "Instagram Square (1080×1080)",
    href: "/downloads/cade-share-instagram.png",
  },
  {
    label: "Instagram Story (1080×1920)",
    href: "/downloads/cade-share-story.png",
  },
];

const postTemplates = [
  {
    title: "Short Post (Twitter/Instagram)",
    content:
      "The northwest side deserves better representation at Cook County. Nicholas Cade is fighting for Irving Park, Portage Park, and Jefferson Park — without machine money. Chip in $5 before Tuesday: https://secure.actblue.com/donate/cadeforcook #CadeForCook #CookCounty",
  },
  {
    title: "Facebook Post",
    content:
      "Cook County District 8 includes some of Chicago's hardest-working neighborhoods — Irving Park, Portage Park, Jefferson Park, Dunning, Norwood Park, Belmont Cragin. These neighborhoods deserve a commissioner who actually shows up.\n\nNicholas Cade is that person. He's running a grassroots campaign powered by small donations from people like us.\n\nThe primary is March 17. Two days away. Even $5 helps put palm cards in volunteers' hands and digital outreach in our precincts.\n\nChip in here: https://secure.actblue.com/donate/cadeforcook\n\n#CadeForCook #CookCounty #D8",
  },
  {
    title: "Instagram Caption",
    content:
      "Northwest side, this one's for you. 🏘️\n\nNicholas Cade is running for Cook County Commissioner (District 8) — representing Irving Park, Portage Park, Jefferson Park, Dunning, Norwood Park & Belmont Cragin.\n\nPrimary: March 17. Two days. Link in bio to chip in. 💙\n\n#CadeForCook #CookCounty #ChicagoElection #IrvingPark #PortagePark #JeffersonPark",
  },
];

const hashtags = ["#CadeForCook", "#CookCounty", "#D8", "#IrvingPark", "#PortagePark", "#JeffersonPark"];

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-lg bg-navy px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-navy/90 focus:outline-2 focus:outline-offset-2 focus:outline-navy"
      aria-label={`Copy ${label}`}
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

export default function SharePage() {
  return (
    <main className="bg-background text-navy py-14 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Help Spread the Word</h1>
        <p className="text-base md:text-lg text-text/80 leading-relaxed mb-10">
          Share Nicholas&apos;s story with your neighbors in Irving Park, Portage Park, Jefferson Park, Dunning, Norwood Park, and Belmont Cragin.
        </p>

        <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-5">Download Graphics</h2>
          <div className="grid gap-3">
            {downloads.map((item) => (
              <a
                key={item.href}
                href={item.href}
                download
                className="inline-flex items-center justify-center rounded-lg border-2 border-navy px-5 py-3 font-bold text-navy transition-colors hover:bg-navy hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-navy"
              >
                ↓ {item.label}
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm text-navy/70">
            Graphics coming soon — check back soon or email info@cadeforcook.com
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-5">Copy &amp; Paste Posts</h2>
          <div className="space-y-5">
            {postTemplates.map((post) => (
              <article key={post.title} className="rounded-xl border border-gray-200 p-4 md:p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-bold text-lg">{post.title}</h3>
                  <CopyButton text={post.content} label={post.title} />
                </div>
                <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-text/85">{post.content}</pre>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-5">Hashtags</h2>
          <div className="flex flex-wrap gap-2">
            {hashtags.map((tag) => (
              <CopyButton key={tag} text={tag} label={tag} />
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Tag Us</h2>
          <p className="text-base text-text/80">Find us on social: @CadeForCook</p>
        </section>

        <p className="text-xs leading-relaxed text-text/65">
          Sharing these posts on your personal social media is completely free and voluntary. Please do not pay to boost or promote these posts — if you&apos;d like to support financially, donate directly above. Paid for by Friends of Nicholas Cade.
        </p>
      </div>
    </main>
  );
}
