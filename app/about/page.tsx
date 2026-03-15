import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Nicholas Cade | Cade for Cook County",
  description: "Navy JAG attorney, teacher, environmentalist, father — Nicholas Cade is running for Cook County Commissioner, District 8.",
};

const bio = [
  "Nicholas has spent his career solving problems.",
  "As a Teach For America corps member, he taught middle school social studies in New York. As a U.S. Navy Judge Advocate, he served his country as a military attorney. As a Local School Council representative at Disney II Magnet, he advocated for Chicago's kids in his own backyard.",
  "Today, in the private sector, he works on the front lines of the fight against climate change at Tradewater.",
  "Born and raised in Chicago — a product of the city's parochial schools — Nicholas attended Colby College, earned a graduate degree from Pace University, and a law degree from Brooklyn Law School.",
  "He lives in Irving Park with his wife and their three young children, who attend school in Logan Square. This county is home. That's why he's running.",
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
      <section className="bg-gradient-to-br from-navy to-[#0d2d54] text-white py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Meet Nicholas</h1>
          <p className="text-white/80 text-lg">Navy veteran. Teacher. Environmental advocate. Father of three.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 md:py-24" aria-labelledby="bio-heading">
        <h2 id="bio-heading" className="sr-only">Biography</h2>
        <div className="space-y-5">
          {bio.map((p, i) => (
            <p key={i} className={`leading-relaxed ${i === 0 ? "text-xl font-medium text-navy" : "text-text/80"}`}>
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-light-gray py-16 md:py-24 px-4" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-heading" className="font-heading text-3xl md:text-4xl font-bold text-navy mb-10 text-center">
            What Does a Cook County Commissioner Do?
          </h2>
          <div className="space-y-8">
            {faq.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
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
