import Image from "next/image";
import { DonateButtonHero, GetInvolvedButton } from "./DonateButton";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-navy"
      aria-label="Campaign hero"
    >
      {/* Very subtle noise texture overlay for depth without busyness */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 py-24 text-center text-white flex flex-col items-center">
        {/* Banner lockup — the ONE brand image in the hero */}
        <div className="w-full max-w-2xl mb-10">
          <Image
            src="/images/cade-banner.png"
            alt="Cade for Cook — Campaign Banner"
            width={800}
            height={240}
            className="w-full h-auto drop-shadow-2xl rounded-sm"
            priority
          />
        </div>

        {/* Primary date badge */}
        <div className="inline-flex items-center gap-2 bg-red/90 text-white text-sm font-bold font-mono tracking-widest uppercase px-4 py-2 rounded-full mb-8 shadow-md">
          <span
            className="w-2 h-2 rounded-full bg-white animate-pulse inline-block"
            aria-hidden="true"
          />
          PRIMARY: MARCH 17, 2026
        </div>

        {/* Main headline */}
        <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6">
          Cook County
          <br />
          Can Do Better
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Nicholas Cade — Navy veteran, attorney, teacher, and Irving Park dad
          — is running for Cook County Commissioner, District 8.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <DonateButtonHero />
          <GetInvolvedButton />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        aria-hidden="true"
      >
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
