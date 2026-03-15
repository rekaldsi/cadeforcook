export interface Resource {
  name: string;
  description: string;
  url?: string;
  phone?: string;
  address?: string;
  notes?: string;
  languages?: string[];
}

export interface ResourceCategory {
  id: string;
  emoji: string;
  title: string;
  resources: Resource[];
}

export const resourceCategories: ResourceCategory[] = [
  {
    id: "food",
    emoji: "🍎",
    title: "Food & Nutrition",
    resources: [
      {
        name: "Irving Park Community Food Pantry",
        description: "Free groceries for income-qualifying northwest side residents. Walk-in model.",
        url: "https://www.irvingparkfoodpantry.org",
        phone: "773-685-1507",
        address: "4256 N. Ridgeway Ave, Chicago IL 60618",
      },
      {
        name: "Greater Chicago Food Depository — Find Food Near You",
        description: "Searchable map of all food pantries, soup kitchens, and mobile distributions in Cook County.",
        url: "https://www.chicagosfoodbank.org/find-food-2/",
        phone: "773-247-3663",
      },
      {
        name: "Common Pantry",
        description: "Serving north side Chicago since 1967. Food pantry and additional services.",
        url: "https://www.commonpantry.org",
      },
      {
        name: "Illinois SNAP / Cash / Medical Assistance (IDHS ABE)",
        description: "Apply for food stamps, cash assistance, and medical assistance online — no in-person visit required for initial application.",
        url: "https://abe.illinois.gov",
        phone: "1-833-234-6343",
      },
      {
        name: "CEDA WIC Clinic — Irving Park",
        description: "WIC nutritional assistance and food vouchers for women, infants, and children.",
        url: "https://www.cedaorg.net",
        phone: "773-685-1507",
        address: "3948 N. Lowell Ave, Chicago IL 60641",
        notes: "M–F 8am–4:30pm; evening and Saturday appointments available",
      },
    ],
  },
  {
    id: "housing",
    emoji: "🏠",
    title: "Housing & Rent Help",
    resources: [
      {
        name: "Law Center for Better Housing (LCBH) — Rentervention",
        description: "Free rental legal assistance for low-income Chicago renters. Eviction defense, lockout prevention. Free 24/7 AI chat tool for basic tenant questions.",
        url: "https://rentervention.com",
        phone: "See website",
      },
      {
        name: "CARPLS — Cook County Legal Aid for Housing and Debt",
        description: "Free legal help for Cook County residents with housing and consumer debt. Includes Eviction Court Early Resolution Program.",
        url: "https://carpls.org",
        phone: "312-347-8137",
      },
      {
        name: "Chicago Right to Counsel Program",
        description: "Free legal representation for eligible low-income tenants in eviction cases.",
        url: "https://www.chicago.gov/city/en/depts/doh/provdrs/renters/svcs/right-to-counsel.html",
      },
      {
        name: "Metropolitan Tenants Organization",
        description: "Tenant rights hotline, education, and advocacy.",
        url: "http://www.tenants-rights.org",
        phone: "773-292-4988",
      },
      {
        name: "Northwest Center — Housing Counseling",
        description: "First-time homebuyer counseling, foreclosure prevention, LIHEAP enrollment, and financial literacy for northwest side residents.",
        url: "https://www.northwestcenterchicago.org",
        address: "5233 W. Diversey Ave, Chicago IL 60639",
        notes: "M–F 9am–5pm",
      },
      {
        name: "Cook County Down Payment Assistance",
        description: "Up to $25,000 or 5% of home price for income-eligible first-time homebuyers in Cook County.",
        url: "https://www.cookcountyil.gov",
        notes: "Search 'down payment assistance' on site",
      },
      {
        name: "Hispanic Housing Development Corporation",
        description: "Housing services throughout Irving Park, Portage Park, Jefferson Park, Norwood Park, and Dunning.",
        url: "https://www.hispanichousingdevelopment.com",
      },
    ],
  },
  {
    id: "health",
    emoji: "🏥",
    title: "Health & Mental Health",
    resources: [
      {
        name: "Old Irving Park Community Clinic (OIPCC)",
        description: "FREE clinic for uninsured working adults who don't qualify for Medicaid or Medicare. Primary care, mental health, and substance abuse assessments. The only free clinic on the northwest side.",
        url: "https://www.oipcc.org",
      },
      {
        name: "Cook County Health — CareLink",
        description: "FREE program covering care at any Cook County Health facility. No immigration status or insurance requirement. Covers primary care, specialist visits, lab, imaging, and ER.",
        url: "https://cookcountyhealth.org/carelink/",
        phone: "312-864-0200",
      },
      {
        name: "Cook County Health — CountyCare (Medicaid)",
        description: "Medicaid managed care health plan for eligible Cook County residents.",
        url: "https://www.countycare.com",
        phone: "312-864-8200",
      },
      {
        name: "Belmont Cragin Health Center (Cook County Health)",
        description: "Cook County Health clinic serving District 8. Pediatric care, cancer screenings, mental health services.",
        url: "https://cookcountyhealth.org",
        notes: "Find location at cookcountyhealth.org",
      },
      {
        name: "Cook County Behavioral Health Access Line (BHAL)",
        description: "24/7 single point of contact for mental health and substance use treatment referrals, assessments, and crisis support.",
        url: "https://bhal.cookcountyhealth.org",
        notes: "24/7 access — see website for phone number",
      },
      {
        name: "The Kedzie Center — Mental Health",
        description: "Mental health services on the northwest side.",
        url: "https://www.thekedziecenter.org",
        address: "4141 N. Kedzie Ave, Chicago",
      },
      {
        name: "LSSI Portage Cragin Counseling Center",
        description: "Primary mental health provider for northwest Chicago since 1971.",
        url: "https://www.lssi.org/locations/portage-cragin-counseling-center/",
      },
      {
        name: "988 Suicide & Crisis Lifeline",
        description: "Free, confidential crisis support 24/7. Call or text.",
        phone: "988",
      },
      {
        name: "Illinois Mental Health Helpline",
        description: "Statewide mental health information and referrals.",
        phone: "1-800-345-9049",
      },
    ],
  },
  {
    id: "immigration",
    emoji: "📋",
    title: "Immigration Legal Help",
    resources: [
      {
        name: "Cook County Office of the Public Guardian — Immigration Hotline",
        description: "Immigration resources and 50+ immigrant service organizations searchable by community served and service type.",
        url: "https://www.cookcountyil.gov/immigration",
        languages: ["English", "Spanish", "Korean", "Polish"],
      },
      {
        name: "AFIRE Chicago — Filipino Community",
        description: "Grassroots Filipino community organization. Citizenship support, organizing, Tagalog language program, senior program.",
        url: "https://www.afirechicago.org",
        address: "4300 N. California Ave, Chicago (Albany Park)",
        languages: ["English", "Tagalog/Filipino"],
      },
      {
        name: "Polish American Association (PAA)",
        description: "Founded 1922. Comprehensive bilingual services for Polish immigrants: education, employment, immigration, clinical services.",
        url: "https://www.polish.org/en/",
        languages: ["English", "Polish"],
      },
      {
        name: "Beyond Legal Aid",
        description: "Workshops on police and ICE interactions, tenant rights, citizenship, and DACA. Serves Cook County.",
        url: "https://www.beyondlegalaid.org",
        address: "17 N. State Street #1380, Chicago IL 60602",
      },
      {
        name: "ICIRR — Illinois Coalition for Immigrant and Refugee Rights",
        description: "Statewide coalition connecting to local legal service providers. Resources for undocumented residents.",
        url: "https://www.icirr.org",
      },
      {
        name: "HANA Center",
        description: "Immigration and legal services, community navigator programs.",
        url: "https://hanacenter.org/ils",
      },
      {
        name: "Albany Park Community Center",
        description: "Early education, youth development, and community resources serving immigrant communities.",
        url: "https://www.apccchgo.org",
        address: "5101 N. Kimball Ave, Chicago IL 60625",
      },
    ],
  },
  {
    id: "jobs",
    emoji: "💼",
    title: "Jobs & Workforce Training",
    resources: [
      {
        name: "Chicago Cook Workforce Partnership — WorkNet Centers",
        description: "Free job search, skills training, resume help, and placement at workforce centers across Chicago.",
        url: "https://chicookworks.org",
        phone: "312-603-0200",
      },
      {
        name: "Polish American Association — Employment Services",
        description: "Bilingual Polish/English job training and employment services for immigrants.",
        url: "https://www.polish.org/en/programs/employment",
        languages: ["English", "Polish"],
      },
      {
        name: "Northwest Center — Workforce Readiness",
        description: "LIHEAP enrollment, financial literacy, parent mentor program, and digital literacy training.",
        url: "https://www.northwestcenterchicago.org",
        address: "5233 W. Diversey Ave, Chicago IL 60639",
      },
      {
        name: "Illinois Small Business Development Center (SBDC)",
        description: "Free one-on-one business advising statewide.",
        url: "https://www.ilsbdc.com",
      },
      {
        name: "Northwest Side Community Development Corporation",
        description: "Small business financial coaching, cashflow analysis, grant and loan application help.",
        url: "https://www.northwestsidecdc.org/smallbiz",
      },
      {
        name: "One Summer Chicago (City of Chicago)",
        description: "Paid summer jobs for residents ages 14–24.",
        url: "https://www.chicago.gov/city/en/depts/fss/provdrs/youth/svcs/one-summer-chicago.html",
      },
    ],
  },
  {
    id: "seniors",
    emoji: "👴",
    title: "Senior Services",
    resources: [
      {
        name: "Norwood Park Senior Center",
        description: "7,000 sq ft senior center with 1,800+ members. Activities, programs, and services for northwest side seniors.",
        url: "http://www.npseniorcenter.org",
        phone: "773-775-6071",
        address: "5801 N. Natoma Ave, Chicago IL 60631",
        notes: "M–F 8:30am–4:30pm",
      },
      {
        name: "Portage Park Satellite Senior Center",
        description: "Chicago Park District senior center serving Portage Park.",
        phone: "312-744-9022",
        address: "4100 N. Long Ave, Chicago IL 60641",
        notes: "M–F 8:30am–4:30pm",
      },
      {
        name: "Cook County Department on Aging",
        description: "Senior services coordination, case management, and caregiver support programs.",
        url: "https://www.cookcountyil.gov/service/senior-services",
        phone: "312-603-1082",
      },
      {
        name: "Cook County Assessor — Senior Tax Exemptions",
        description: "Homeowner, Senior Citizen, and Senior Freeze exemptions to reduce your property tax bill. Apply in English, Spanish, Polish, and Chinese.",
        url: "https://www.cookcountyassessoril.gov",
        phone: "312-443-7550",
        address: "118 N. Clark St, Room 320, Chicago IL 60602",
        languages: ["English", "Spanish", "Polish", "Chinese"],
      },
    ],
  },
  {
    id: "youth",
    emoji: "👶",
    title: "Kids & Youth Programs",
    resources: [
      {
        name: "Chicago Public Library — District 8 Branches",
        description: "After-school programming, summer reading, homework help at branches throughout the district.",
        url: "https://www.chipublib.org",
        notes: "Irving Park: 4100 W. Irving Park Rd | Portage-Cragin: 5108 W. Belmont Ave | Roden: 6083 N. Northwest Hwy",
      },
      {
        name: "Chicago Park District — After-School Programs",
        description: "Safe after-school environment with homework help and recreational activities at parks across the northwest side.",
        url: "https://www.chicagoparkdistrict.com/after-school-program",
      },
      {
        name: "AFIRE Chicago — Youth Programs",
        description: "Youth organizing and civic engagement for Filipino-American youth.",
        url: "https://www.afirechicago.org",
      },
      {
        name: "Youth Outreach Services (YOS)",
        description: "Youth substance use treatment, mental health, prevention, and workforce readiness. Dunning/Irving Park office.",
        url: "https://www.yos.org",
        phone: "773-777-7112",
      },
      {
        name: "Albany Park Community Center — Youth Development",
        description: "Youth development programs in Albany Park, adjacent to District 8.",
        url: "https://www.apccchgo.org",
        address: "5101 N. Kimball Ave, Chicago IL 60625",
      },
    ],
  },
  {
    id: "utilities",
    emoji: "💡",
    title: "Utility Bill Assistance",
    resources: [
      {
        name: "CEDA — LIHEAP (Home Energy Assistance)",
        description: "Helps eligible households pay heating and cooling bills. Also: reconnection assistance, furnace repair, water bill help.",
        url: "https://www.cedaorg.net/bills",
        address: "3948 N. Lowell Ave, Chicago IL 60641 (Irving Park office)",
      },
      {
        name: "Illinois LIHEAP (State Program)",
        description: "State-administered home energy cost assistance. ComEd electric customers can also receive Low Income Discounts.",
        url: "https://dceo.illinois.gov/communityservices/utilitybillassistance.html",
        phone: "1-833-711-0374",
      },
      {
        name: "Peoples Gas — Share the Warmth",
        description: "Emergency natural gas bill assistance for low-income customers.",
        url: "https://www.peoplesgas.com",
        notes: "Search 'Share the Warmth' on the website",
      },
      {
        name: "ComEd — Residential Special Hardship Program",
        description: "Emergency electric bill assistance for ComEd customers.",
        url: "https://www.comed.com/MyAccount/CustomerSupport/Pages/assistance.aspx",
      },
    ],
  },
  {
    id: "legal",
    emoji: "⚖️",
    title: "Free Legal Help",
    resources: [
      {
        name: "Legal Aid Chicago",
        description: "Free civil legal services for people living in poverty in Cook County. Cases: housing, family, benefits, immigration, consumer protection.",
        url: "https://legalaidchicago.org",
        phone: "312-341-1070",
      },
      {
        name: "CARPLS — Cook County Legal Aid",
        description: "Free legal advice and referral for Cook County residents. Specializes in housing, debt, and family law.",
        url: "https://carpls.org",
        phone: "312-347-8137",
      },
      {
        name: "Chicago Volunteer Legal Services (CVLS)",
        description: "Free legal aid for low-income Cook County residents. Cases: adoption, divorce, foreclosure, landlord disputes, immigration, wills.",
        url: "https://www.cvls.org",
        phone: "312-332-1624",
      },
      {
        name: "Illinois Legal Aid Online",
        description: "Free self-help legal information and referral for all Illinois residents.",
        url: "https://www.illinoislegalaid.org",
        languages: ["English", "Spanish"],
      },
      {
        name: "Illinois Lawyers Care (ISBA)",
        description: "Legal referral service for low- to moderate-income Illinois residents.",
        phone: "1-800-922-8757",
      },
    ],
  },
  {
    id: "voting",
    emoji: "🗳️",
    title: "Voting & Elections",
    resources: [
      {
        name: "Chicago Board of Elections — Your Voter Info",
        description: "Voter registration, polling place lookup, vote by mail, and early voting locations.",
        url: "https://chicagoelections.gov",
        phone: "312-269-7900",
      },
      {
        name: "Illinois State Board of Elections — Find Your Officials",
        description: "Online voter registration and searchable database to find every elected official who represents your address.",
        url: "https://www.elections.il.gov/electionoperations/districtlocator/districtofficialsearchbyaddress.aspx",
      },
      {
        name: "Chicago Votes",
        description: "Youth-focused voter registration and civic engagement. Voter guides for every election.",
        url: "https://chicagovotes.com",
      },
      {
        name: "211 Illinois",
        description: "24/7 information and referral for health and human services statewide. Call or text 211.",
        url: "https://www.211illinois.org",
        phone: "211",
        languages: ["English", "Spanish", "150+ languages"],
      },
    ],
  },
];

export interface ElectedOfficial {
  title: string;
  name: string;
  party: "D" | "R" | "L" | "I";
  district?: string;
  neighborhoods?: string;
  office?: string;
  phone?: string;
  email?: string;
  url?: string;
  notes?: string;
}

export interface OfficialGroup {
  level: string;
  officials: ElectedOfficial[];
}

export const electedOfficials: OfficialGroup[] = [
  {
    level: "Cook County",
    officials: [
      {
        title: "Cook County Commissioner, District 8",
        name: "Jessica Vásquez (Incumbent)",
        party: "D",
        district: "District 8",
        neighborhoods: "Irving Park, Portage Park, Jefferson Park, Dunning, Norwood Park, Belmont Cragin",
        url: "https://www.cookcountyil.gov/agency/board-commissioners",
      },
    ],
  },
  {
    level: "Chicago City Council (Alderpersons)",
    officials: [
      {
        title: "Alderperson, Ward 36",
        name: "Gilbert Villegas",
        party: "D",
        district: "Ward 36",
        neighborhoods: "Belmont Cragin, Portage Park (portions)",
        office: "6560 W. Fullerton Ave, Suite C118-A, Chicago IL 60607",
        phone: "773-745-4636",
        email: "ward36@cityofchicago.org",
      },
      {
        title: "Alderperson, Ward 38",
        name: "Nicholas Sposato",
        party: "D",
        district: "Ward 38",
        neighborhoods: "Portage Park, Jefferson Park, Dunning (portions)",
        office: "3821 N. Harlem Ave, Chicago IL 60634",
        phone: "773-283-3838",
        email: "info@aldermansposato.com",
      },
      {
        title: "Alderperson, Ward 39",
        name: "Samantha Nugent",
        party: "D",
        district: "Ward 39",
        neighborhoods: "Irving Park, Portage Park, Dunning (portions)",
        phone: "773-736-5594",
        email: "ward39@cityofchicago.org",
        url: "https://www.aldermannugent.com",
      },
      {
        title: "Alderperson, Ward 41",
        name: "Anthony V. Napolitano",
        party: "R",
        district: "Ward 41",
        neighborhoods: "Jefferson Park, Norwood Park, Edgebrook",
        office: "7231 W. Touhy Ave, Chicago IL 60631",
        phone: "773-631-2241",
        url: "https://www.chicago41.com",
        notes: "M–F 9am–4:30pm",
      },
      {
        title: "Alderperson, Ward 45",
        name: "James M. Gardiner",
        party: "D",
        district: "Ward 45",
        neighborhoods: "Jefferson Park, Norwood Park (portions)",
        office: "5460 N. Milwaukee Ave, Chicago IL 60630",
        phone: "773-853-0799",
        email: "ward45@cityofchicago.org",
        url: "https://www.aldermangardiner.com",
      },
    ],
  },
  {
    level: "Illinois State House",
    officials: [
      {
        title: "State Representative, District 19",
        name: "Lindsey LaPointe",
        party: "D",
        neighborhoods: "Portage Park, Dunning, Jefferson Park, Forest Glen (northwest Chicago + suburbs)",
        url: "https://www.replapointe.com",
        notes: "Chair, House Mental Health and Addiction Committee",
      },
      {
        title: "State Representative, District 40",
        name: "Jaime M. Andrade, Jr.",
        party: "D",
        neighborhoods: "Avondale, Irving Park, Albany Park (portions)",
        office: "4007 Sacramento Ave, Chicago IL 60618",
        phone: "773-267-2880",
        url: "https://www.staterep40.com",
        notes: "Assistant House Majority Leader",
      },
      {
        title: "State Representative, District 15",
        name: "Michael Kelly",
        party: "D",
        neighborhoods: "Norwood Park, Jefferson Park, northwest Chicago + north suburbs",
        url: "https://repkelly.com",
        notes: "Use the address finder at elections.il.gov to confirm your specific rep",
      },
    ],
  },
  {
    level: "Illinois State Senate",
    officials: [
      {
        title: "State Senator, District 10",
        name: "Robert F. Martwick",
        party: "D",
        neighborhoods: "Jefferson Park, northwest Chicago, Milwaukee Ave corridor",
        office: "4349 N. Milwaukee Ave, Chicago IL 60641",
        phone: "773-286-1115",
      },
      {
        title: "State Senator, District 8",
        name: "Ram Villivalam",
        party: "D",
        neighborhoods: "Albany Park, Jefferson Park, surrounding neighborhoods",
        office: "3851 W. Devon Ave, Chicago IL 60659",
        phone: "872-208-5188",
        url: "http://www.senatorram.com",
      },
      {
        title: "State Senator, District 20",
        name: "Graciela Guzmán",
        party: "D",
        neighborhoods: "Avondale, Irving Park, nearby NW Chicago",
        office: "3140 W. Montrose, Chicago IL 60618",
        phone: "773-278-2020",
      },
    ],
  },
  {
    level: "U.S. Congress",
    officials: [
      {
        title: "U.S. Congresswoman, IL-3",
        name: "Delia C. Ramirez",
        party: "D",
        neighborhoods: "Irving Park, Portage Park, Belmont Cragin, Dunning (western District 8)",
        url: "https://ramirez.house.gov",
      },
      {
        title: "U.S. Congressman, IL-5",
        name: "Mike Quigley",
        party: "D",
        neighborhoods: "Jefferson Park, Norwood Park, O'Hare area (northern District 8)",
        office: "1925 N. Clybourn Ave, Chicago IL 60614",
        phone: "773-267-5926",
        url: "https://quigley.house.gov",
      },
      {
        title: "U.S. Senator (Illinois)",
        name: "Dick Durbin",
        party: "D",
        office: "230 S. Dearborn St, Suite 3892, Chicago IL 60604",
        phone: "312-353-4952",
        url: "https://www.durbin.senate.gov",
      },
      {
        title: "U.S. Senator (Illinois)",
        name: "Tammy Duckworth",
        party: "D",
        office: "230 S. Dearborn St, Suite 3900, Chicago IL 60604",
        phone: "312-886-3506",
        url: "https://www.duckworth.senate.gov",
      },
    ],
  },
];
