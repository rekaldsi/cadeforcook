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
    logoUrl:
      "https://run.imgix.net/0cb30042-699f-48cf-a5a5-9eba0110a5f2/13816629-9ba3-4205-9bc6-68f6e8189522/8c322c14-c9f4-412c-a358-5935455b6944.webp?ixlib=js-3.8.0&bri=0&con=0&sat=0&high=0&shad=0&usm=0&rect=84%2C304%2C3801%2C1815&auto=compress%2Cformat&fit=fillmax&w=800&q=80",
  },
  {
    name: "VoteVets",
    url: "https://votevets.org",
    description: "The largest progressive veterans organization in America.",
    logoUrl:
      "https://run.imgix.net/0cb30042-699f-48cf-a5a5-9eba0110a5f2/bd518ded-2d9e-4416-bbf2-5875168205d1/2e8626c3-881b-4005-82c1-97e5e237339a.webp?ixlib=js-3.8.0&bri=0&con=0&sat=0&high=0&shad=0&usm=0&rect=0%2C0%2C4096%2C1966&auto=compress%2Cformat&fit=fillmax&w=800&q=80",
  },
  {
    name: "Abundant Housing Illinois",
    url: "https://abundanthousingillinois.org",
    description: "Fighting for housing abundance and affordability across Illinois.",
    logoUrl:
      "https://run.imgix.net/0cb30042-699f-48cf-a5a5-9eba0110a5f2/1a2aae00-f1cf-4295-be45-6402ffc51ccc/88aa24ed-5118-484a-9779-2c4996d26278.webp?ixlib=js-3.8.0&bri=0&con=0&sat=0&high=0&shad=0&usm=0&rect=0%2C0%2C4096%2C1776&auto=compress%2Cformat&fit=fillmax&w=800&q=80",
  },
  {
    name: "Chicago Growth Project",
    url: "https://chicagogrowthproject.org",
    description: "Advocating for smart growth and development in the Chicago region.",
    logoUrl:
      "https://run.imgix.net/0cb30042-699f-48cf-a5a5-9eba0110a5f2/508b5713-dacd-4a8f-9abd-421386e3f09e/6ce75e3c-1a7a-4b8f-aae8-41dd7e026d77.webp?ixlib=js-3.8.0&bri=0&con=0&sat=0&high=0&shad=0&usm=0&rect=0%2C0%2C4096%2C2300&auto=compress%2Cformat&fit=fillmax&w=800&q=80",
  },
];

export default endorsements;
