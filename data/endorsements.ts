export interface Endorsement {
  name: string;
  url: string;
  description: string;
  logoUrl?: string;
}

const endorsements: Endorsement[] = [
  {
    name: "Illinois Veterans for Change",
    url: "https://ilveteransforchange.org",
    description: "Veterans working for progressive change in Illinois.",
    logoUrl: "/images/endorsements/il-vets-for-change.svg",
  },
  {
    name: "Abundant Housing Illinois",
    url: "https://abundanthousingillinois.org",
    description: "Fighting for housing abundance and affordability across Illinois.",
    logoUrl: "/images/endorsements/abundant-housing-il.svg",
  },
  {
    name: "Chicago Growth Project",
    url: "https://chicagogrowthproject.org",
    description: "Advocating for smart growth and development in the Chicago region.",
    logoUrl: "/images/endorsements/chicago-growth-project.svg",
  },
  {
    name: "VoteVets",
    url: "https://votevets.org",
    description: "The largest progressive veterans organization in America.",
    logoUrl: "/images/endorsements/votevets.svg",
  },
];

export default endorsements;
