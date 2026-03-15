import Image from "next/image";
import { DonateButtonHero, GetInvolvedButton } from "./DonateButton";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      aria-label="Campaign hero"
    >
      {/* Background image */}
      <Image
        src="/images/cade-hero.webp"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden="true"
      />

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/65 to-navy/85"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center text-white">
        {/* Logo badge */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/cade-logo.png"
            alt="Cade for Cook County — Democrat for Chicago"
            width={200}
            height={80}
            className="drop-shadow-lg"
            priority
          />
        </div>

        {/* Primary date badge */}
        <div className="inline-flex items-center gap-2 bg-red/90 text-white text-sm font-bold font-mono tracking-widest uppercase px-4 py-2 rounded-full mb-8 shadow-md">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse inline-block" aria-hidden="true" />
          PRIMARY: MARCH 17, 2026
        </div>

        {/* Main headline */}
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 drop-shadow-md">
          Cook County
          <br />
          Can Do Better
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-sm">
          Nicholas Cade — Navy veteran, attorney, teacher, and Irving Park dad — is running for Cook County Commissioner, District 8.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <DonateButtonHero />
          <GetInvolvedButton />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce" aria-hidden="true">
        <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
