import type { Metadata } from "next";
import Link from "next/link";
import { resourceCategories, electedOfficials } from "@/data/resources";

export const metadata: Metadata = {
  title: "District 8 Resources | Cade for Cook",
  description:
    "Community resources for District 8 residents — food, housing, health, immigration, legal aid, jobs, and your elected officials directory.",
};

export default function ResourcesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-navy to-[#0d2d54] text-white py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-xs tracking-[0.2em] uppercase mb-4 font-bold" style={{ color: "#6DD3E8" }}>
            Community Resources
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Resources for District 8 Residents
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Whether you need help with food, housing, health care, immigration, legal aid, or just want to know who represents you — this is your guide to what's available in the northwest side.
          </p>
          <p className="mt-6 text-white/50 text-sm">
            For anything not listed here, call <strong className="text-white">211</strong> (24/7, available in 150+ languages).
          </p>
        </div>
      </section>

      {/* ── Quick Nav ── */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm" aria-label="Jump to resource category">
        <div className="max-w-6xl mx-auto px-4 py-3 overflow-x-auto">
          <div className="flex gap-2 md:gap-3 whitespace-nowrap text-sm">
            {resourceCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="inline-flex items-center gap-1 bg-light-gray text-navy font-medium px-3 py-1.5 rounded-full hover:bg-navy hover:text-white transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-navy"
              >
                <span aria-hidden="true">{cat.emoji}</span>
                <span>{cat.title.split(" ")[0]}</span>
              </a>
            ))}
            <a
              href="#officials"
              className="inline-flex items-center gap-1 bg-light-gray text-navy font-medium px-3 py-1.5 rounded-full hover:bg-navy hover:text-white transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-navy"
            >
              <span aria-hidden="true">🏛️</span>
              <span>Officials</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ── Resource Categories ── */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-16">
        {resourceCategories.map((cat) => (
          <section key={cat.id} id={cat.id} aria-labelledby={`${cat.id}-heading`}>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-navy/10">
              <span className="text-3xl" aria-hidden="true">{cat.emoji}</span>
              <h2
                id={`${cat.id}-heading`}
                className="font-heading text-2xl md:text-3xl font-bold text-navy"
              >
                {cat.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.resources.map((resource) => (
                <ResourceCard key={resource.name} resource={resource} />
              ))}
            </div>
          </section>
        ))}

        {/* ── Elected Officials Directory ── */}
        <section id="officials" aria-labelledby="officials-heading">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-navy/10">
            <span className="text-3xl" aria-hidden="true">🏛️</span>
            <h2 id="officials-heading" className="font-heading text-2xl md:text-3xl font-bold text-navy">
              Your Elected Officials
            </h2>
          </div>
          <p className="text-text/70 mb-8 max-w-2xl">
            District 8 is covered by multiple city wards, state districts, and congressional districts.
            Use{" "}
            <a
              href="https://www.elections.il.gov/electionoperations/districtlocator/districtofficialsearchbyaddress.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy underline hover:no-underline font-medium"
            >
              elections.il.gov
            </a>{" "}
            to find the exact officials for your address.
          </p>
          <div className="space-y-10">
            {electedOfficials.map((group) => (
              <div key={group.level}>
                <h3 className="font-heading text-lg font-bold text-navy/60 uppercase tracking-wide mb-4">
                  {group.level}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {group.officials.map((official) => (
                    <OfficialCard key={`${official.title}-${official.name}`} official={official} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── Bottom CTA ── */}
      <section className="bg-navy text-white py-16 px-4 text-center">
        <p className="font-mono text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "#6DD3E8" }}>
          This Is What Government Should Do
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 max-w-xl mx-auto">
          Nicholas wants to be a commissioner who actually helps.
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
          Not just a title. A resource. A phone call answered. A problem solved. Vote March 17.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://secure.actblue.com/donate/ncadewebsite"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red text-white font-bold px-8 py-4 rounded-lg hover:bg-red/90 transition-colors"
          >
            Donate →
          </a>
          <Link
            href="/get-involved"
            className="inline-block bg-transparent text-white font-bold px-8 py-4 rounded-lg border-2 border-white hover:bg-white hover:text-navy transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
}

function ResourceCard({ resource }: { resource: import("@/data/resources").Resource }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <h3 className="font-heading text-base font-bold text-navy mb-2 leading-snug">
        {resource.url ? (
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline focus:outline-2 focus:outline-offset-2 focus:outline-navy"
          >
            {resource.name}
          </a>
        ) : (
          resource.name
        )}
      </h3>
      <p className="text-text/70 text-sm leading-relaxed mb-3 flex-1">{resource.description}</p>
      <div className="space-y-1 mt-auto pt-3 border-t border-gray-100">
        {resource.phone && (
          <p className="text-sm">
            <span className="text-text/40 mr-1" aria-hidden="true">📞</span>
            <a
              href={`tel:${resource.phone.replace(/[^0-9]/g, "")}`}
              className="text-navy font-medium hover:underline"
            >
              {resource.phone}
            </a>
          </p>
        )}
        {resource.address && (
          <p className="text-sm text-text/60">
            <span className="text-text/40 mr-1" aria-hidden="true">📍</span>
            {resource.address}
          </p>
        )}
        {resource.notes && (
          <p className="text-xs text-text/50 italic">{resource.notes}</p>
        )}
        {resource.languages && resource.languages.length > 0 && (
          <p className="text-xs">
            <span className="text-text/40 mr-1" aria-hidden="true">🌐</span>
            <span className="text-green font-medium">{resource.languages.join(" · ")}</span>
          </p>
        )}
      </div>
    </div>
  );
}

function OfficialCard({ official }: { official: import("@/data/resources").ElectedOfficial }) {
  const partyColor =
    official.party === "D" ? "bg-blue-100 text-blue-700" :
    official.party === "R" ? "bg-red-100 text-red-700" :
    "bg-gray-100 text-gray-700";

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-heading text-sm font-bold text-navy/60 uppercase tracking-wide leading-snug">
          {official.title}
        </h3>
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex-none ${partyColor}`}>
          {official.party}
        </span>
      </div>
      <p className="font-heading text-lg font-bold text-navy mb-1">
        {official.url ? (
          <a href={official.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {official.name}
          </a>
        ) : official.name}
      </p>
      {official.neighborhoods && (
        <p className="text-sm text-text/60 mb-3">{official.neighborhoods}</p>
      )}
      <div className="space-y-1">
        {official.phone && (
          <p className="text-sm">
            <span className="text-text/40 mr-1" aria-hidden="true">📞</span>
            <a href={`tel:${official.phone.replace(/[^0-9]/g, "")}`} className="text-navy font-medium hover:underline">
              {official.phone}
            </a>
          </p>
        )}
        {official.email && (
          <p className="text-sm">
            <span className="text-text/40 mr-1" aria-hidden="true">✉️</span>
            <a href={`mailto:${official.email}`} className="text-navy font-medium hover:underline">
              {official.email}
            </a>
          </p>
        )}
        {official.office && (
          <p className="text-sm text-text/60">
            <span className="text-text/40 mr-1" aria-hidden="true">📍</span>
            {official.office}
          </p>
        )}
        {official.notes && (
          <p className="text-xs text-text/50 italic mt-1">{official.notes}</p>
        )}
      </div>
    </div>
  );
}
