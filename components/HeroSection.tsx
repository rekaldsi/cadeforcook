import { DonateButtonHero, GetInvolvedButton } from "./DonateButton";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-navy via-navy to-[#0d2d54] text-white py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          A Chicagoan Putting People Before Politics
        </h1>
        <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
          Nicholas Cade is running for Cook County Commissioner, District 8 — to make government work for you, not for insiders.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <DonateButtonHero />
          <GetInvolvedButton />
        </div>
      </div>
    </section>
  );
}
