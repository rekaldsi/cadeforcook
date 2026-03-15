export interface Endorsement {
  name: string;
  url: string;
  description: string;
}

const endorsements: Endorsement[] = [
  {
    name: "A City That Works",
    url: "https://citythatworks.substack.com",
    description: "Progressive policy advocacy for Chicago and Cook County.",
  },
  {
    name: "Abundant Housing Illinois",
    url: "https://abundanthousingillinois.org",
    description: "Fighting for housing abundance and affordability across Illinois.",
  },
  {
    name: "Chicago Growth Project",
    url: "https://chicagogrowthproject.org",
    description: "Advocating for smart growth and development in the Chicago region.",
  },
  {
    name: "Illinois Veterans for Change",
    url: "https://ilveteransforchange.org",
    description: "Veterans working for progressive change in Illinois.",
  },
];

export default endorsements;
