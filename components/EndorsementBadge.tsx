import type { Endorsement } from "@/data/endorsements";

export default function EndorsementBadge({ endorsement }: { endorsement: Endorsement }) {
  return (
    <a
      href={endorsement.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-green transition-all focus:outline-2 focus:outline-offset-2 focus:outline-green"
    >
      <div className="flex items-start gap-3">
        <span className="text-green text-2xl" aria-hidden="true">✓</span>
        <div>
          <h3 className="font-bold text-navy text-lg">{endorsement.name}</h3>
          <p className="text-text/70 text-sm mt-1">{endorsement.description}</p>
        </div>
      </div>
    </a>
  );
}
