import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meet Nicholas Cade | Cade for Cook County",
  description:
    "Navy JAG attorney, teacher, environmentalist, father — Nicholas Cade is running for Cook County Commissioner, District 8.",
};

const timeline = [
  {
    year: "Chicago",
    label: "Born & Raised",
    detail: "A product of Chicago's parochial schools. This city has always been home.",
    icon: "🏙️",
  },
  {
    year: "School",
    label: "Parochial Education",
    detail: "Grew up in Chicago's Catholic school system — values-grounded, community-first.",
    icon: "📖",
  },
  {
    year: "East Coast",
    label: "College & Grad School",
    detail: "Attended Colby College, earned a graduate degree from Pace University, and a law degree from Brooklyn Law School.",
    icon: "🎓",
  },
  {
    year: "Navy",
    label: "U.S. Navy Judge Advocate",
    detail: "Served his country as a military attorney. The Navy instilled a lifetime commitment to service and discipline.",
    icon: "⚓",
  },
  {
    year: "NYC",
    label: "Public School Teacher",
    detail: "Taught middle school social studies as a Teach For America corps member in New York.",
    icon: "✏️",
  },
  {
    year: "Chicago",
    label: "Came Home",
    detail: "After his Navy service, Nicholas moved back to Chicago — the city he's always loved.",
    icon: "🏠",
  },
  {
    year: "Law",
    label: "Attorney",
    detail: "Practiced law and served as a Local School Council representative at Disney II Magnet, advocating for Chicago's kids.",
    icon: "⚖️",
  },
  {
    year: "Today",
    label: "Climate Tech Sector",
    detail: "Works on the front lines of climate action at Tradewater — fighting for a cleaner, healthier future.",
    icon: "🌿",
  },
  {
    year: "Now",
    label: "Irving Park, District 8",
    detail: "Lives in Irving Park with his wife and three young children who attend school in Logan Square. Running to make Cook County better for every family.",
    icon: "👨‍👩‍👧",
  },
];

const faq = [
  {
    q: "What is the Cook County Board of Commissioners?",
    a: "The Cook County Board of Commissioners is the legislative body of Cook County, Illinois — the second most populous county in the United States. The Board has 17 members, each representing a district of roughly 300,000 residents.",
  },
  {
    q: "What does a Commissioner do?",
    a: "Commissioners vote on the county budget (over $8 billion annually), set policy on public health, criminal justice, land use, transportation, and county services. They oversee the Forest Preserves, Cook County Health, the county jail, and the property tax appeals process.",
  },
  {
    q: "Why does this race matter?",
    a: "Cook County government affects your property taxes, your local hospitals, your courts, and your parks. District 8 covers parts of Chicago's North and Northwest sides. Who represents you on the Board determines how billions of your tax dollars are spent.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-[#0d2d54] text-white py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-red font-mono text-sm font-bold tracking-widest uppercase mb-4">
            Meet the Candidate
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Nicholas Cade
          </h1>
          <p className="text-white/80 text-lg">
            Navy veteran. Teacher. Attorney. Environmental advocate. Father of three.
          </p>
        </div>
      </section>

      {/* Two-column bio + sticky photo */}
      <section
        className="max-w-6xl mx-auto px-4 py-16 md:py-24"
        aria-labelledby="bio-heading"
      >
        <div className="grid md:grid-cols-5 gap-10 md:gap-16">
          {/* Sticky headshot column (2 of 5) */}
          <div className="md:col-span-2">
            <div className="md:sticky md:top-24">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/cade-headshot.jpg"
                  alt="Nicholas Cade, candidate for Cook County Commissioner District 8"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 90vw, 40vw"
                  priority
                />
              </div>
              {/* Badge under photo */}
              <div className="mt-4 bg-navy text-white rounded-xl p-4 text-center shadow-md">
                <p className="font-heading font-bold text-lg">Nicholas Cade</p>
                <p className="text-white/70 text-sm mt-1">
                  Cook County Commissioner
                </p>
                <p className="text-red font-mono font-bold text-xs tracking-widest uppercase mt-2">
                  District 8 · Primary March 17, 2026
                </p>
              </div>
              {/* Navy photo */}
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg mt-4 hidden md:block">
                <Image
                  src="/images/cade-navy.webp"
                  alt="Nicholas Cade in U.S. Navy uniform"
                  fill
                  className="object-cover object-center"
                  sizes="40vw"
                />
              </div>
            </div>
          </div>

          {/* Bio content (3 of 5) */}
          <div className="md:col-span-3">
            <h2 id="bio-heading" className="sr-only">
              Biography
            </h2>

            {/* Intro */}
            <p className="font-heading text-2xl font-bold text-navy mb-6 leading-snug">
              &ldquo;Nicholas has spent his career solving problems that matter.&rdquo;
            </p>

            <div className="space-y-5 text-text/80 leading-relaxed mb-12">
              <p className="text-xl font-medium text-navy">
                Nicholas has spent his career solving problems.
              </p>
              <p>
                As a Teach For America corps member, he taught middle school social studies in New York. As a U.S. Navy Judge Advocate, he served his country as a military attorney. As a Local School Council representative at Disney II Magnet, he advocated for Chicago&apos;s kids in his own backyard.
              </p>
              <p>
                Today, in the private sector, he works on the front lines of the fight against climate change at Tradewater.
              </p>
              <p>
                Born and raised in Chicago — a product of the city&apos;s parochial schools — Nicholas attended Colby College, earned a graduate degree from Pace University, and a law degree from Brooklyn Law School.
              </p>
              <p>
                He lives in Irving Park with his wife and their three young children, who attend school in Logan Square. This county is home. That&apos;s why he&apos;s running.
              </p>
            </div>

            {/* Timeline */}
            <div className="mb-12">
              <h3 className="font-heading text-2xl font-bold text-navy mb-8">
                The Road to District 8
              </h3>
              <ol className="relative border-l-2 border-navy/20 space-y-0">
                {timeline.map((item, i) => (
                  <li key={i} className="ml-6 pb-8 last:pb-0">
                    {/* Dot */}
                    <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-navy rounded-full text-white text-xs shadow">
                      {item.icon}
                    </span>
                    <div className="pl-2">
                      <span className="text-xs font-mono font-bold text-red tracking-widest uppercase">
                        {item.year}
                      </span>
                      <h4 className="font-heading font-bold text-navy text-lg leading-tight">
                        {item.label}
                      </h4>
                      <p className="text-text/70 text-sm leading-relaxed mt-1">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Campaign photos — family */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/cade-family.jpg"
                  alt="Nicholas Cade with his family"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 45vw, 25vw"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/cade-campaign1.jpg"
                  alt="Nicholas Cade on the campaign trail"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 45vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="bg-light-gray py-16 md:py-24 px-4"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="faq-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-navy mb-10 text-center"
          >
            What Does a Cook County Commissioner Do?
          </h2>
          <div className="space-y-6">
            {faq.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 md:p-8 shadow-sm border-l-4 border-l-navy">
                <h3 className="font-bold text-navy text-lg mb-2">{item.q}</h3>
                <p className="text-text/80 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
