"use client";

import Image from "next/image";
import { useRef } from "react";

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
];

export default function PhotoStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="py-12 bg-background overflow-hidden"
      aria-label="Campaign photo gallery"
    >
      {/* Section label */}
      <p className="text-center text-navy/40 text-xs font-mono tracking-widest uppercase mb-6 px-4">
        On the trail
      </p>

      {/* Scrollable strip */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 pb-4 scrollbar-hide"
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
              {/* Subtle bottom gradient */}
              <div
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/40 to-transparent"
                aria-hidden="true"
              />
            </div>
            <figcaption className="mt-3 text-sm text-text/60 font-medium text-center italic">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Scroll hint on mobile */}
      <p className="text-center text-navy/30 text-xs mt-2 md:hidden" aria-hidden="true">
        Swipe to see more →
      </p>
    </section>
  );
}
