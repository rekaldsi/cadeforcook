"use client";

import { useMemo, useState } from "react";

type ShareCardConfig = {
  id: string;
  label: string;
  filename: string;
  title: string;
  subtitle: string;
  dateLine: string;
  size: { width: number; height: number };
};

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

const shareCards: ShareCardConfig[] = [
  {
    id: "facebook",
    label: "English Landscape (1200×628)",
    filename: "cade-share-facebook.svg",
    title: "Vote Nicholas Cade",
    subtitle: "Cook County Commissioner — District 8",
    dateLine: "March 17, 2026 • Primary Election",
    size: { width: 1200, height: 628 },
  },
  {
    id: "instagram-square",
    label: "English Square (1080×1080)",
    filename: "cade-share-instagram.svg",
    title: "Vote Nicholas Cade",
    subtitle: "Cook County Commissioner — District 8",
    dateLine: "March 17, 2026 • Primary Election",
    size: { width: 1080, height: 1080 },
  },
  {
    id: "instagram-story",
    label: "English Story (1080×1920)",
    filename: "cade-share-story.svg",
    title: "Vote Nicholas Cade",
    subtitle: "Cook County Commissioner — District 8",
    dateLine: "March 17, 2026 • Primary Election",
    size: { width: 1080, height: 1920 },
  },
  {
    id: "spanish",
    label: "Spanish Share Card",
    filename: "cade-share-es.svg",
    title: "Vota por Nicholas Cade",
    subtitle: "Comisionado del Condado de Cook — Distrito 8",
    dateLine: "17 de marzo de 2026 • Elección Primaria",
    size: { width: 1080, height: 1080 },
  },
  {
    id: "tagalog",
    label: "Tagalog Share Card",
    filename: "cade-share-tl.svg",
    title: "Iboto si Nicholas Cade",
    subtitle: "Komisyoner ng Cook County — Distrito 8",
    dateLine: "Marso 17, 2026 • Pangunahing Halalan",
    size: { width: 1080, height: 1080 },
  },
];

function createSvgMarkup(card: ShareCardConfig): string {
  const { width, height } = card.size;
  const titleY = Math.round(height * 0.35);
  const accentY = Math.round(height * 0.45);
  const subtitleY = Math.round(height * 0.57);
  const dateY = Math.round(height * 0.67);
  const siteY = Math.round(height * 0.79);

  const titleSize = Math.max(54, Math.round(width * 0.065));
  const subtitleSize = Math.max(30, Math.round(width * 0.035));
  const dateSize = Math.max(24, Math.round(width * 0.027));
  const siteSize = Math.max(28, Math.round(width * 0.03));

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="#0A2240" />
  <text x="50%" y="${titleY}" text-anchor="middle" fill="#FFFFFF" font-family="Inter, Arial, sans-serif" font-size="${titleSize}" font-weight="800">${card.title}</text>
  <line x1="12%" y1="${accentY}" x2="88%" y2="${accentY}" stroke="#C41E3A" stroke-width="10" />
  <text x="50%" y="${subtitleY}" text-anchor="middle" fill="#FFFFFF" font-family="Inter, Arial, sans-serif" font-size="${subtitleSize}" font-weight="700">${card.subtitle}</text>
  <text x="50%" y="${dateY}" text-anchor="middle" fill="#FFFFFF" font-family="Inter, Arial, sans-serif" font-size="${dateSize}" font-weight="500">${card.dateLine}</text>
  <text x="50%" y="${siteY}" text-anchor="middle" fill="#6DD3E8" font-family="Inter, Arial, sans-serif" font-size="${siteSize}" font-weight="700">cadeforcook.com</text>
</svg>`.trim();
}

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
  const generatedCards = useMemo(
    () =>
      shareCards.map((card) => {
        const svg = createSvgMarkup(card);
        const href = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
        return { ...card, href };
      }),
    []
  );

  return (
    <main className="bg-background text-navy py-14 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Help Spread the Word</h1>
        <p className="text-base md:text-lg text-text/80 leading-relaxed mb-10">
          Share Nicholas&apos;s story with your neighbors in Irving Park, Portage Park, Jefferson Park, Dunning, Norwood Park, and Belmont Cragin.
        </p>

        <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">Download Graphics</h2>
          <p className="text-sm text-navy/70 mb-5">Tap any card, then save the image. On desktop, use the download button below each preview.</p>
          <div className="grid gap-5">
            {generatedCards.map((card) => (
              <article key={card.id} className="rounded-xl border border-gray-200 p-4">
                <p className="font-mono text-xs tracking-[0.18em] uppercase text-red mb-3">{card.label}</p>
                <a href={card.href} download={card.filename} className="block rounded-lg overflow-hidden border border-gray-200">
                  <img src={card.href} alt={card.label} className="w-full h-auto" />
                </a>
                <a
                  href={card.href}
                  download={card.filename}
                  className="inline-flex items-center justify-center mt-3 rounded-lg border-2 border-navy px-4 py-2 text-sm font-bold text-navy transition-colors hover:bg-navy hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-navy"
                >
                  ↓ Download {card.filename}
                </a>
              </article>
            ))}
          </div>
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
