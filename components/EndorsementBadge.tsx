import Image from "next/image";
import type { Endorsement } from "@/data/endorsements";

export default function EndorsementBadge({ endorsement }: { endorsement: Endorsement }) {
  return (
    <a
      href={endorsement.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-xl shadow-sm p-6 hover:shadow-md hover:scale-[1.02] transition-all duration-200 focus:outline-2 focus:outline-offset-2 focus:outline-green"
    >
      <div className="flex flex-col items-center gap-3 h-full">
        {endorsement.logoUrl ? (
          <div className="flex items-center justify-center w-full h-16">
            <Image
              src={endorsement.logoUrl}
              alt={`${endorsement.name} logo`}
              width={200}
              height={64}
              className="max-h-16 w-auto object-contain"
              unoptimized
            />
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-16">
            <span className="font-bold text-navy text-xl text-center leading-tight">
              {endorsement.name}
            </span>
          </div>
        )}
        <p className="text-text/60 text-xs text-center font-medium tracking-wide uppercase mt-auto">
          {endorsement.name}
        </p>
      </div>
    </a>
  );
}
