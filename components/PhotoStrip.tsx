"use client";

import Image from "next/image";
import { useRef } from "react";
import { useLang } from "@/lib/LangContext";
import t from "@/lib/translations";

const PHOTOS = [
  {
    src: "/images/cade-family.jpg",
    alt: "Nicholas Cade with his family in Irving Park",
    caption: "Canvassing with family in Irving Park",
  },
  {
    src: "/images/cade-campaign2.jpg",
    alt: "Nicholas Cade meeting with District 8 residents",
    caption: "Meeting District 8 residents",
  },
  {
    src: "/images/cade-rally.webp",
    alt: "Nicholas Cade at a campaign rally with supporters",
    caption: "Rally with supporters",
  },
  {
    src: "/images/cade-navy.webp",
    alt: "Nicholas Cade in his U.S. Navy uniform",
    caption: "Serving as a U.S. Navy JAG attorney",
  },
  {
    src: "/images/cade-canvassing.jpg",
    alt: "Nicholas Cade canvassing in the neighborhood",
    caption: "Knocking doors across District 8",
  },
];

export default function PhotoStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const tr = t[lang].photoStrip;

  return (
    <section
      className="py-16 md:py-24 bg-background overflow-hidden border-t border-gray-100"
      aria-labelledby="photostrip-heading"
    >
      {/* Section label + heading + intro */}
      <div className="text-center px-4 mb-4">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-red mb-3">
          {tr.eyebrow}
        </p>
        <h2
          id="photostrip-heading"
          className="font-heading text-3xl md:text-4xl font-bold text-navy inline-block relative mb-4"
        >
          {tr.heading}
          <span className="block mt-2 h-1 w-16 bg-red mx-auto rounded-full" aria-hidden="true" />
        </h2>
        <p className="text-text/60 text-base max-w-xl mx-auto mt-4">
          {tr.intro}
        </p>
      </div>

      {/* Scrollable strip */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 pb-4 mt-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        role="list"
      >
        {PHOTOS.map((photo) => (
          <figure
            key={photo.src}
            className="flex-none snap-start w-72 md:w-80"
            role="listitem"
          >
            <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden shadow-md group">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 288px, 320px"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/40 to-transparent" aria-hidden="true" />
            </div>
            <figcaption className="mt-3 text-sm text-text/60 font-medium text-center italic">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="text-center text-navy/30 text-xs mt-2 md:hidden" aria-hidden="true">
        {tr.swipe}
      </p>
    </section>
  );
}
