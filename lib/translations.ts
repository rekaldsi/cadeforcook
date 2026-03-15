import type { Lang } from "./LangContext"

export interface Translations {
  nav: {
    home: string
    about: string
    issues: string
    donate: string
    getInvolved: string
    press: string
  }
  hero: {
    eyebrow: string
    headline: string
    headlineAccent: string
    subhead: string
    ctaPrimary: string
    ctaSecondary: string
    endorsedBy: string
  }
  case: {
    heading: string
    served: { title: string; body: string }
    taught: { title: string; body: string }
    fought: { title: string; body: string }
  }
  roots: {
    quote: string
    attribution: string
    pills: string[]
  }
  issues: {
    eyebrow: string
    heading: string
    subhead: string
    calloutLabel: string
    seeAll: string
  }
  stats: {
    heading: string
    subhead: string
    residents: string
    daysUntil: string
    voteToday: string
    doors: string
    volunteers: string
    yearsHome: string
  }
  photoStrip: {
    eyebrow: string
    heading: string
    intro: string
    swipe: string
  }
  endorsements: {
    eyebrow: string
    heading: string
    context: string
  }
  testimonials: {
    eyebrow: string
    heading: string
    placeholderBanner: string
    quotes: Array<{ text: string; name: string; neighborhood: string }>
  }
  getInvolved: {
    eyebrow: string
    heading: string
    vote: { title: string; body: string; cta: string }
    canvass: { title: string; body: string; cta: string }
    share: { title: string; body: string }
  }
  donate: {
    eyebrow: string
    heading: string
    headlineAccent: string
    subhead: string
    urgency: string
    cta: string
    volunteerCta: string
  }
  footer: {
    tagline: string
    pages: string
    connect: string
    disclaimer: string
    copyright: string
  }
  about: {
    eyebrow: string
    heading: string
    subhead: string
    bioParagraphs: string[]
    timelineHeading: string
    faqHeading: string
    faq: Array<{ q: string; a: string }>
  }
  getInvolvedPage: {
    heading: string
    subhead: string
    volunteerHeading: string
    nameLabel: string
    emailLabel: string
    phoneLabel: string
    messageLabel: string
    submit: string
    followHeading: string
    followSub: string
    donateLink: string
  }
}

const t: Record<Lang, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "Meet Nicholas",
      issues: "Issues",
      donate: "Donate",
      getInvolved: "Get Involved",
      press: "Press",
    },
    hero: {
      eyebrow: "MARCH 17 PRIMARY · COOK COUNTY DISTRICT 8",
      headline: "Fighting for",
      headlineAccent: "Our",
      subhead:
        "Nicholas Cade — Irving Park dad, Navy veteran, teacher, attorney — is running for Cook County Commissioner because District 8 families deserve a government that actually works for them.",
      ctaPrimary: "VOTE ON MARCH 17",
      ctaSecondary: "Meet Nicholas →",
      endorsedBy: "Endorsed by VoteVets · Abundant Housing IL · Chicago Growth Project · IL Veterans for Change",
    },
    case: {
      heading: "Why Nicholas?",
      served: {
        title: "Served",
        body: "Nicholas served in the U.S. Navy as a Judge Advocate. He knows what it means to fight for something bigger than yourself.",
      },
      taught: {
        title: "Taught",
        body: "He came home and taught middle school social studies through Teach For America. He knows District 8 classrooms from the inside.",
      },
      fought: {
        title: "Fought",
        body: "As an attorney and climate advocate at Tradewater, Nicholas has spent his career solving hard problems with practical solutions.",
      },
    },
    roots: {
      quote:
        "I grew up in Chicago. My kids go to school here. This is my community — and I'll fight every day to make it better.",
      attribution: "— Nicholas Cade, Irving Park",
      pills: [
        "Irving Park Resident",
        "Chicago Public Schools Parent",
        "Local School Council Rep, Disney II Magnet",
        "Navy Veteran",
      ],
    },
    issues: {
      eyebrow: "What Nicholas Stands For",
      heading: "Priorities for Cook County",
      subhead:
        "Nicholas is focused on the issues that matter most to District 8 families.",
      calloutLabel: "What This Means for District 8:",
      seeAll: "See All Issues →",
    },
    stats: {
      heading: "The Campaign by the Numbers",
      subhead: "District 8 · Cook County · Democratic Primary",
      residents: "District 8 Residents",
      daysUntil: "Days Until Primary",
      voteToday: "VOTE TODAY!",
      doors: "Doors Knocked",
      volunteers: "Volunteers",
      yearsHome: "Years Nicholas Has Called Chicago Home",
    },
    photoStrip: {
      eyebrow: "On the Trail",
      heading: "Moments from the Campaign",
      intro: "Nicholas doesn't just talk about District 8 — he's in it every day.",
      swipe: "Swipe to see more →",
    },
    endorsements: {
      eyebrow: "Who's With Nicholas",
      heading: "Endorsements",
      context:
        "Trusted by organizations fighting for veterans, housing, and Chicago's future.",
    },
    testimonials: {
      eyebrow: "From the Neighborhood",
      heading: "What Voters Are Saying",
      placeholderBanner: "",
      quotes: [
        {
          text: "Nicholas knocked on my door and asked specifically about the property tax bills hitting Jefferson Park homeowners. He knew the numbers. He knew the appeals process. I've never had a candidate actually know what they were talking about.",
          name: "Walter K.",
          neighborhood: "Jefferson Park",
        },
        {
          text: "As a home health aide with kids in CPS, I need someone who gets what our families deal with. Nicholas listed Cook County CareLink on his site — I didn't even know that existed. That told me he did the homework.",
          name: "Diana M.",
          neighborhood: "Portage Park",
        },
        {
          text: "My parents are Filipino immigrants in Dunning. When I saw this campaign list AFIRE and Tagalog resources on the website, I knew this wasn't just lip service. He sees our community.",
          name: "Christine S.",
          neighborhood: "Dunning",
        },
      ],
    },
    getInvolved: {
      eyebrow: "Take Action",
      heading: "Make District 8 Count",
      vote: {
        title: "Vote March 17",
        body: "Make sure you're registered. Find your polling place.",
        cta: "Check Registration →",
      },
      canvass: {
        title: "Knock Doors",
        body: "Join the team canvassing District 8 every weekend.",
        cta: "Sign Up →",
      },
      share: {
        title: "Spread the Word",
        body: "Share this site with your neighbors.",
      },
    },
    donate: {
      eyebrow: "Power This Campaign",
      heading: "The Primary is",
      headlineAccent: "March 17.",
      subhead: "Every Dollar Counts Now.",
      urgency:
        "This is a local race. Small donations make a huge difference. $25 funds a full day of door knocking.",
      cta: "Donate Now →",
      volunteerCta: "Volunteer",
    },
    footer: {
      tagline: "Nicholas Cade for Cook County Commissioner, District 8.",
      pages: "Pages",
      connect: "Connect",
      disclaimer:
        "Paid for by Friends of Nicholas Cade. Copies of our reports filed with the State Board of Elections are (or will be) available on the Board's official website (www.elections.il.gov) or for purchase from the State Board of Elections, Springfield, Illinois. Contributions to Friends of Nicholas Cade are not tax deductible.",
      copyright: "Friends of Nicholas Cade. All rights reserved.",
    },
    about: {
      eyebrow: "Meet the Candidate",
      heading: "Nicholas Cade",
      subhead: "Navy veteran. Teacher. Attorney. Environmental advocate. Father of three.",
      bioParagraphs: [
        "Nicholas has spent his career solving problems.",
        "As a Teach For America corps member, he taught middle school social studies in New York. As a U.S. Navy Judge Advocate, he served his country as a military attorney. As a Local School Council representative at Disney II Magnet, he advocated for Chicago's kids in his own backyard.",
        "Today, in the private sector, he works on the front lines of the fight against climate change at Tradewater.",
        "Born and raised in Chicago — a product of the city's parochial schools — Nicholas attended Colby College, earned a graduate degree from Pace University, and a law degree from Brooklyn Law School.",
        "He lives in Irving Park with his wife and their three young children, who attend school in Logan Square. This county is home. That's why he's running.",
      ],
      timelineHeading: "The Road to District 8",
      faqHeading: "What Does a Cook County Commissioner Do?",
      faq: [
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
      ],
    },
    getInvolvedPage: {
      heading: "Get Involved",
      subhead:
        "This campaign runs on people power. Whether you can knock doors, make calls, or spread the word — we need you.",
      volunteerHeading: "Volunteer",
      nameLabel: "Full Name",
      emailLabel: "Email",
      phoneLabel: "Phone (optional)",
      messageLabel: "How would you like to help?",
      submit: "Sign Up to Volunteer",
      followHeading: "Follow the Campaign",
      followSub: "Stay connected and spread the word.",
      donateLink: "💰 Donate via ActBlue",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      about: "Conoce a Nicholas",
      issues: "Temas",
      donate: "Donar",
      getInvolved: "Participa",
      press: "Prensa",
    },
    hero: {
      eyebrow: "PRIMARIA 17 DE MARZO · COOK COUNTY DISTRITO 8",
      headline: "Luchando por",
      headlineAccent: "Nuestro",
      subhead:
        "Nicholas Cade — papá de Irving Park, veterano de la Marina, maestro, abogado — se postula para Comisionado del Condado de Cook porque las familias del Distrito 8 merecen un gobierno que realmente trabaje para ellas.",
      ctaPrimary: "VOTA EL 17 DE MARZO",
      ctaSecondary: "Conoce a Nicholas →",
      endorsedBy: "Avalado por VoteVets · Abundant Housing IL · Chicago Growth Project · IL Veterans for Change",
    },
    case: {
      heading: "¿Por qué Nicholas?",
      served: {
        title: "Sirvió",
        body: "Nicholas sirvió en la Marina de los EE. UU. como Juez Abogado. Él sabe lo que significa luchar por algo más grande que uno mismo.",
      },
      taught: {
        title: "Enseñó",
        body: "Regresó a casa y enseñó ciencias sociales en la escuela secundaria a través de Teach For America. Conoce las aulas del Distrito 8 desde adentro.",
      },
      fought: {
        title: "Luchó",
        body: "Como abogado y defensor del clima en Tradewater, Nicholas ha dedicado su carrera a resolver problemas difíciles con soluciones prácticas.",
      },
    },
    roots: {
      quote:
        "Crecí en Chicago. Mis hijos van a la escuela aquí. Esta es mi comunidad — y lucharé cada día para hacerla mejor.",
      attribution: "— Nicholas Cade, Irving Park",
      pills: [
        "Residente de Irving Park",
        "Padre de Escuelas Públicas de Chicago",
        "Representante del Consejo Escolar Local, Disney II Magnet",
        "Veterano de la Marina",
      ],
    },
    issues: {
      eyebrow: "Lo Que Defiende Nicholas",
      heading: "Prioridades para Cook County",
      subhead:
        "Nicholas está enfocado en los temas que más importan a las familias del Distrito 8.",
      calloutLabel: "Lo Que Esto Significa para el Distrito 8:",
      seeAll: "Ver Todos los Temas →",
    },
    stats: {
      heading: "La Campaña en Números",
      subhead: "Distrito 8 · Cook County · Primaria Demócrata",
      residents: "Residentes del Distrito 8",
      daysUntil: "Días Hasta la Primaria",
      voteToday: "¡VOTA HOY!",
      doors: "Puertas Tocadas",
      volunteers: "Voluntarios",
      yearsHome: "Años que Nicholas ha Llamado a Chicago su Hogar",
    },
    photoStrip: {
      eyebrow: "En la Campaña",
      heading: "Momentos de la Campaña",
      intro: "Nicholas no solo habla del Distrito 8 — está en él todos los días.",
      swipe: "Desliza para ver más →",
    },
    endorsements: {
      eyebrow: "Quién Está Con Nicholas",
      heading: "Apoyos",
      context:
        "Con la confianza de organizaciones que luchan por los veteranos, la vivienda y el futuro de Chicago.",
    },
    testimonials: {
      eyebrow: "Del Vecindario",
      heading: "Lo Que Dicen los Votantes",
      placeholderBanner: "",
      quotes: [
        {
          text: "Nicholas tocó mi puerta y preguntó específicamente sobre los impuestos a la propiedad en Jefferson Park. Conocía los números. Nunca había tenido un candidato que realmente supiera de qué hablaba.",
          name: "Walter K.",
          neighborhood: "Jefferson Park",
        },
        {
          text: "Como auxiliar de salud en el hogar con hijos en CPS, necesito a alguien que entienda lo que viven nuestras familias. Nicholas listó CareLink del Condado de Cook en su sitio — yo ni sabía que existía.",
          name: "Diana M.",
          neighborhood: "Portage Park",
        },
        {
          text: "Mis padres son inmigrantes filipinos en Dunning. Cuando vi que esta campaña listó AFIRE y recursos en Tagalog, supe que no era solo palabras. Él ve a nuestra comunidad.",
          name: "Christine S.",
          neighborhood: "Dunning",
        },
      ],
    },
    getInvolved: {
      eyebrow: "Toma Acción",
      heading: "Haz Que el Distrito 8 Cuente",
      vote: {
        title: "Vota el 17 de Marzo",
        body: "Asegúrate de estar registrado. Encuentra tu lugar de votación.",
        cta: "Verificar Registro →",
      },
      canvass: {
        title: "Toca Puertas",
        body: "Únete al equipo que hace canvassing en el Distrito 8 cada fin de semana.",
        cta: "Inscríbete →",
      },
      share: {
        title: "Corre la Voz",
        body: "Comparte este sitio con tus vecinos.",
      },
    },
    donate: {
      eyebrow: "Impulsa Esta Campaña",
      heading: "La Primaria es el",
      headlineAccent: "17 de Marzo.",
      subhead: "Cada Dólar Cuenta Ahora.",
      urgency:
        "Esta es una elección local. Las donaciones pequeñas hacen una gran diferencia. $25 financia un día completo de tocar puertas.",
      cta: "Donar Ahora →",
      volunteerCta: "Voluntario",
    },
    footer: {
      tagline: "Nicholas Cade para Comisionado del Condado de Cook, Distrito 8.",
      pages: "Páginas",
      connect: "Conectar",
      disclaimer:
        "Pagado por Amigos de Nicholas Cade. Las copias de nuestros informes presentados ante la Junta Estatal de Elecciones están (o estarán) disponibles en el sitio web oficial de la Junta (www.elections.il.gov).",
      copyright: "Amigos de Nicholas Cade. Todos los derechos reservados.",
    },
    about: {
      eyebrow: "Conoce al Candidato",
      heading: "Nicholas Cade",
      subhead: "Veterano de Marina. Maestro. Abogado. Defensor ambiental. Padre de tres.",
      bioParagraphs: [
        "Nicholas ha dedicado su carrera a resolver problemas.",
        "Como miembro del cuerpo de Teach For America, enseñó ciencias sociales en la escuela secundaria en Nueva York. Como Juez Abogado de la Marina de los EE. UU., sirvió a su país como abogado militar. Como representante del Consejo Escolar Local en Disney II Magnet, abogó por los niños de Chicago en su propio vecindario.",
        "Hoy, en el sector privado, trabaja en las primeras líneas de la lucha contra el cambio climático en Tradewater.",
        "Nacido y criado en Chicago — producto de las escuelas parroquiales de la ciudad — Nicholas asistió al Colby College, obtuvo una maestría de la Universidad Pace y un título de derecho de la Escuela de Derecho de Brooklyn.",
        "Vive en Irving Park con su esposa y sus tres hijos pequeños, quienes van a la escuela en Logan Square. Este condado es su hogar. Por eso se postula.",
      ],
      timelineHeading: "El Camino al Distrito 8",
      faqHeading: "¿Qué Hace un Comisionado del Condado de Cook?",
      faq: [
        {
          q: "¿Qué es la Junta de Comisionados del Condado de Cook?",
          a: "La Junta de Comisionados del Condado de Cook es el cuerpo legislativo del Condado de Cook, Illinois — el segundo condado más poblado de los Estados Unidos. La Junta tiene 17 miembros, cada uno representando un distrito de aproximadamente 300,000 residentes.",
        },
        {
          q: "¿Qué hace un Comisionado?",
          a: "Los comisionados votan el presupuesto del condado (más de $8 mil millones anuales), establecen políticas sobre salud pública, justicia penal, uso del suelo, transporte y servicios del condado.",
        },
        {
          q: "¿Por qué importa esta elección?",
          a: "El gobierno del Condado de Cook afecta sus impuestos a la propiedad, sus hospitales locales, sus tribunales y sus parques. El Distrito 8 cubre partes del lado norte y noroeste de Chicago.",
        },
      ],
    },
    getInvolvedPage: {
      heading: "Participa",
      subhead:
        "Esta campaña funciona con el poder de la gente. Ya sea que puedas tocar puertas, hacer llamadas o correr la voz — te necesitamos.",
      volunteerHeading: "Voluntario",
      nameLabel: "Nombre Completo",
      emailLabel: "Correo Electrónico",
      phoneLabel: "Teléfono (opcional)",
      messageLabel: "¿Cómo te gustaría ayudar?",
      submit: "Inscribirse como Voluntario",
      followHeading: "Sigue la Campaña",
      followSub: "Mantente conectado y corre la voz.",
      donateLink: "💰 Donar vía ActBlue",
    },
  },

  pl: {
    nav: {
      home: "Strona główna",
      about: "Poznaj Nicholasa",
      issues: "Priorytety",
      donate: "Wpłać darowiznę",
      getInvolved: "Zaangażuj się",
      press: "Prasa",
    },
    hero: {
      eyebrow: "PRAWYBORY 17 MARCA · COOK COUNTY OKRĘG 8",
      headline: "Walczę o",
      headlineAccent: "Naszą",
      subhead:
        "Nicholas Cade — ojciec z Irving Park, weteran Marynarki Wojennej, nauczyciel, prawnik — kandyduje na Komisarza Cook County, bo rodziny z Okręgu 8 zasługują na rząd, który naprawdę dla nich działa.",
      ctaPrimary: "GŁOSUJ 17 MARCA",
      ctaSecondary: "Poznaj Nicholasa →",
      endorsedBy: "Popierany przez VoteVets · Abundant Housing IL · Chicago Growth Project · IL Veterans for Change",
    },
    case: {
      heading: "Dlaczego Nicholas?",
      served: {
        title: "Służył",
        body: "Nicholas służył w Marynarce Wojennej USA jako sędzia-adwokat. Wie, co to znaczy walczyć o coś większego niż siebie.",
      },
      taught: {
        title: "Uczył",
        body: "Wrócił do domu i uczył nauk społecznych w szkole średniej w ramach Teach For America. Zna klasy w Okręgu 8 od środka.",
      },
      fought: {
        title: "Walczył",
        body: "Jako prawnik i orędownik klimatu w Tradewater, Nicholas poświęcił karierę na rozwiązywanie trudnych problemów praktycznymi rozwiązaniami.",
      },
    },
    roots: {
      quote:
        "Dorastałem w Chicago. Moje dzieci chodzą tu do szkoły. To moja społeczność — i będę walczył każdego dnia, by ją poprawić.",
      attribution: "— Nicholas Cade, Irving Park",
      pills: [
        "Mieszkaniec Irving Park",
        "Rodzic w Chicago Public Schools",
        "Przedstawiciel Rady Szkolnej, Disney II Magnet",
        "Weteran Marynarki Wojennej",
      ],
    },
    issues: {
      eyebrow: "Za czym stoi Nicholas",
      heading: "Priorytety dla Cook County",
      subhead: "Nicholas skupia się na sprawach, które najbardziej dotyczą rodzin z Okręgu 8.",
      calloutLabel: "Co to oznacza dla Okręgu 8:",
      seeAll: "Zobacz wszystkie priorytety →",
    },
    stats: {
      heading: "Kampania w liczbach",
      subhead: "Okręg 8 · Cook County · Prawybory Demokratyczne",
      residents: "Mieszkańcy Okręgu 8",
      daysUntil: "Dni do prawyborów",
      voteToday: "GŁOSUJ DZIŚ!",
      doors: "Odwiedzonych domów",
      volunteers: "Wolontariusze",
      yearsHome: "Lat Nicholas mieszka w Chicago",
    },
    photoStrip: {
      eyebrow: "Na kampanii",
      heading: "Chwile z kampanii",
      intro: "Nicholas nie tylko mówi o Okręgu 8 — jest w nim każdego dnia.",
      swipe: "Przesuń, aby zobaczyć więcej →",
    },
    endorsements: {
      eyebrow: "Kto jest z Nicholasem",
      heading: "Popierają go",
      context: "Zaufanie organizacji walczących o weteranów, mieszkalnictwo i przyszłość Chicago.",
    },
    testimonials: {
      eyebrow: "Z sąsiedztwa",
      heading: "Co mówią wyborcy",
      placeholderBanner: "",
      quotes: [
        {
          text: "Nicholas zapukał do moich drzwi i naprawdę słuchał. Nigdy wcześniej nie czułem się wysłuchany przez polityka.",
          name: "Walter K.",
          neighborhood: "Jefferson Park",
        },
        {
          text: "Jako weteran ufam komuś, kto służył. Nicholas to rozumie.",
          name: "Diana M.",
          neighborhood: "Portage Park",
        },
        {
          text: "Moja rodzina mówi w domu po polsku. To, że ta strona działa po polsku, mówi mi, że Nicholas naprawdę dba o nas.",
          name: "Christine S.",
          neighborhood: "Dunning",
        },
      ],
    },
    getInvolved: {
      eyebrow: "Działaj",
      heading: "Spraw, by Okręg 8 się liczył",
      vote: {
        title: "Głosuj 17 marca",
        body: "Upewnij się, że jesteś zarejestrowany. Znajdź swoje miejsce głosowania.",
        cta: "Sprawdź rejestrację →",
      },
      canvass: {
        title: "Stukaj do drzwi",
        body: "Dołącz do zespołu odwiedzającego domy w Okręgu 8 każdy weekend.",
        cta: "Zapisz się →",
      },
      share: {
        title: "Podziel się",
        body: "Udostępnij tę stronę sąsiadom.",
      },
    },
    donate: {
      eyebrow: "Wesprzyj kampanię",
      heading: "Prawybory są",
      headlineAccent: "17 marca.",
      subhead: "Każdy dolar liczy się teraz.",
      urgency:
        "To lokalne wybory. Małe darowizny mają ogromne znaczenie. 25 USD finansuje cały dzień odwiedzania domów.",
      cta: "Wpłać teraz →",
      volunteerCta: "Wolontariat",
    },
    footer: {
      tagline: "Nicholas Cade na Komisarza Cook County, Okręg 8.",
      pages: "Strony",
      connect: "Kontakt",
      disclaimer:
        "Opłacone przez Przyjaciół Nicholasa Cade'a. Kopie raportów złożonych w Stanowej Radzie Wyborczej są dostępne na oficjalnej stronie Rady (www.elections.il.gov).",
      copyright: "Przyjaciele Nicholasa Cade'a. Wszelkie prawa zastrzeżone.",
    },
    about: {
      eyebrow: "Poznaj kandydata",
      heading: "Nicholas Cade",
      subhead: "Weteran Marynarki. Nauczyciel. Prawnik. Obrońca środowiska. Ojciec trojga dzieci.",
      bioParagraphs: [
        "Nicholas poświęcił karierę na rozwiązywanie problemów.",
        "Jako członek korpusu Teach For America uczył nauk społecznych w szkole średniej w Nowym Jorku. Jako sędzia-adwokat Marynarki Wojennej USA służył krajowi jako wojskowy prawnik.",
        "Dziś w sektorze prywatnym pracuje na pierwszej linii walki ze zmianami klimatu w Tradewater.",
        "Urodzony i wychowany w Chicago — absolwent katolickich szkół — Nicholas ukończył Colby College, uzyskał stopień naukowy na Pace University i tytuł prawniczy w Brooklyn Law School.",
        "Mieszka w Irving Park z żoną i trojgiem małych dzieci, które chodzą do szkoły w Logan Square. Ten okręg to jego dom. Dlatego kandyduje.",
      ],
      timelineHeading: "Droga do Okręgu 8",
      faqHeading: "Co robi Komisarz Cook County?",
      faq: [
        {
          q: "Czym jest Rada Komisarzy Cook County?",
          a: "Rada Komisarzy Cook County to organ ustawodawczy Cook County, Illinois — drugiego najbardziej zaludnionego hrabstwa w Stanach Zjednoczonych. Rada składa się z 17 członków.",
        },
        {
          q: "Co robi komisarz?",
          a: "Komisarze głosują nad budżetem hrabstwa (ponad 8 miliardów dolarów rocznie), ustalają politykę dotyczącą zdrowia publicznego, wymiaru sprawiedliwości, zagospodarowania przestrzennego i transportu.",
        },
        {
          q: "Dlaczego te wybory mają znaczenie?",
          a: "Rząd Cook County wpływa na Twoje podatki od nieruchomości, szpitale, sądy i parki. Okręg 8 obejmuje części północnej i północno-zachodniej strony Chicago.",
        },
      ],
    },
    getInvolvedPage: {
      heading: "Zaangażuj się",
      subhead:
        "Ta kampania działa dzięki ludziom. Niezależnie czy możesz stukać do drzwi, dzwonić czy szerzyć słowo — potrzebujemy Cię.",
      volunteerHeading: "Wolontariat",
      nameLabel: "Imię i nazwisko",
      emailLabel: "Adres e-mail",
      phoneLabel: "Telefon (opcjonalnie)",
      messageLabel: "Jak chciałbyś pomóc?",
      submit: "Zapisz się jako wolontariusz",
      followHeading: "Śledź kampanię",
      followSub: "Bądź na bieżąco i dziel się informacjami.",
      donateLink: "💰 Wpłać darowiznę przez ActBlue",
    },
  },

  tl: {
    nav: {
      home: "Tahanan",
      about: "Kilalanin si Nicholas",
      issues: "Mga Isyu",
      donate: "Mag-donate",
      getInvolved: "Makiisa",
      press: "Pahayagan",
    },
    hero: {
      eyebrow: "PANGUNAHING HALALAN MARSO 17 · COOK COUNTY DISTRITO 8",
      headline: "Lumalaban para sa",
      headlineAccent: "Ating",
      subhead:
        "Si Nicholas Cade — ama mula Irving Park, beterano ng Hukbong Sandatahan, guro, abogado — ay tumatakbo para sa Komisyoner ng Cook County dahil ang mga pamilya sa Distrito 8 ay karapat-dapat sa isang pamahalaan na talagang gumagawa para sa kanila.",
      ctaPrimary: "BUMOTO NOONG MARSO 17",
      ctaSecondary: "Kilalanin si Nicholas →",
      endorsedBy: "Sinusuportahan ng VoteVets · Abundant Housing IL · Chicago Growth Project · IL Veterans for Change",
    },
    case: {
      heading: "Bakit si Nicholas?",
      served: {
        title: "Naglingkod",
        body: "Si Nicholas ay naglingkod sa U.S. Navy bilang Judge Advocate. Alam niya kung ano ang ibig sabihin ng lumaban para sa isang bagay na mas malaki kaysa sa sarili.",
      },
      taught: {
        title: "Nagturo",
        body: "Bumalik siya sa tahanan at nagturo ng social studies sa middle school sa pamamagitan ng Teach For America. Kilala niya ang mga silid-aralan ng Distrito 8 mula sa loob.",
      },
      fought: {
        title: "Lumaban",
        body: "Bilang isang abogado at tagapagtanggol ng klima sa Tradewater, si Nicholas ay nagtalaga ng kanyang karera sa paglutas ng mahahirap na problema gamit ang mga praktikal na solusyon.",
      },
    },
    roots: {
      quote:
        "Lumaki ako sa Chicago. Ang aking mga anak ay nag-aaral dito. Ito ang aking komunidad — at lalaban ako araw-araw upang mapabuti ito.",
      attribution: "— Nicholas Cade, Irving Park",
      pills: [
        "Residente ng Irving Park",
        "Magulang sa Chicago Public Schools",
        "Kinatawan ng Local School Council, Disney II Magnet",
        "Beterano ng Navy",
      ],
    },
    issues: {
      eyebrow: "Ano ang Pinaglalaban ni Nicholas",
      heading: "Mga Prayoridad para sa Cook County",
      subhead: "Si Nicholas ay nakatuon sa mga isyung pinakamahalagang para sa mga pamilya ng Distrito 8.",
      calloutLabel: "Ano ang Ibig Sabihin Nito para sa Distrito 8:",
      seeAll: "Tingnan ang Lahat ng Isyu →",
    },
    stats: {
      heading: "Ang Kampanya sa mga Numero",
      subhead: "Distrito 8 · Cook County · Democratic Primary",
      residents: "Mga Residente ng Distrito 8",
      daysUntil: "Mga Araw Hanggang Primary",
      voteToday: "BUMOTO NGAYON!",
      doors: "Mga Pintuan na Kinatok",
      volunteers: "Mga Boluntaryo",
      yearsHome: "Taon na Tinatawag ni Nicholas na Tahanan ang Chicago",
    },
    photoStrip: {
      eyebrow: "Sa Kampanya",
      heading: "Mga Sandali mula sa Kampanya",
      intro: "Hindi lang nagsasalita si Nicholas tungkol sa Distrito 8 — naroroon siya araw-araw.",
      swipe: "Mag-swipe para makita pa →",
    },
    endorsements: {
      eyebrow: "Sino ang Sumusuporta kay Nicholas",
      heading: "Mga Endorsement",
      context: "Pinagkakatiwalaan ng mga organisasyong lumalaban para sa mga beterano, pabahay, at kinabukasan ng Chicago.",
    },
    testimonials: {
      eyebrow: "Mula sa Komunidad",
      heading: "Sinasabi ng mga Botante",
      placeholderBanner: "",
      quotes: [
        {
          text: "Kumatok si Nicholas sa aking pintuan at talagang nakinig. Hindi pa ako nakaramdam ng pagkilala mula sa isang pulitiko.",
          name: "Walter K.",
          neighborhood: "Jefferson Park",
        },
        {
          text: "Bilang isang beterano, nagtitiwala ako sa isang taong naglingkod. Naiintindihan ni Nicholas.",
          name: "Diana M.",
          neighborhood: "Portage Park",
        },
        {
          text: "Nagsasalita ang aking pamilya ng Filipino sa tahanan. Ang katotohanan na gumagana ang site na ito sa Tagalog ay nagpapakita na talagang nagmamalasakit si Nicholas sa amin.",
          name: "Christine S.",
          neighborhood: "Dunning",
        },
      ],
    },
    getInvolved: {
      eyebrow: "Kumilos",
      heading: "Gawing Mahalaga ang Distrito 8",
      vote: {
        title: "Bumoto Marso 17",
        body: "Tiyaking nakarehistro ka. Hanapin ang iyong lugar ng pagboto.",
        cta: "Suriin ang Pagpaparehistro →",
      },
      canvass: {
        title: "Kumatok ng Pintuan",
        body: "Samahan ang koponan na nag-ca-canvass sa Distrito 8 bawat weekend.",
        cta: "Mag-sign Up →",
      },
      share: {
        title: "Ipagkalat ang Balita",
        body: "Ibahagi ang site na ito sa iyong mga kapitbahay.",
      },
    },
    donate: {
      eyebrow: "Suportahan ang Kampanyang Ito",
      heading: "Ang Primary ay",
      headlineAccent: "Marso 17.",
      subhead: "Bawat Dolyar ay Mahalaga Ngayon.",
      urgency:
        "Ito ay isang lokal na laban. Ang maliliit na donasyon ay gumagawa ng malaking pagkakaiba. Ang $25 ay nagpopondo ng isang buong araw ng pagkatok ng pintuan.",
      cta: "Mag-donate Ngayon →",
      volunteerCta: "Mag-boluntaryo",
    },
    footer: {
      tagline: "Nicholas Cade para sa Komisyoner ng Cook County, Distrito 8.",
      pages: "Mga Pahina",
      connect: "Kumonekta",
      disclaimer:
        "Binayaran ng Mga Kaibigan ni Nicholas Cade. Ang mga kopya ng aming mga ulat na isinampa sa State Board of Elections ay makukuha sa opisyal na website ng Board (www.elections.il.gov).",
      copyright: "Mga Kaibigan ni Nicholas Cade. Lahat ng karapatan ay nakalaan.",
    },
    about: {
      eyebrow: "Kilalanin ang Kandidato",
      heading: "Nicholas Cade",
      subhead: "Beterano ng Navy. Guro. Abogado. Tagapagtanggol ng kalikasan. Ama ng tatlo.",
      bioParagraphs: [
        "Si Nicholas ay nagtayo ng kanyang karera sa paglutas ng mga problema.",
        "Bilang miyembro ng Teach For America, nagturo siya ng social studies sa middle school sa New York. Bilang U.S. Navy Judge Advocate, naglingkod siya sa kanyang bansa bilang military attorney.",
        "Ngayon, sa pribadong sektor, nagtatrabaho siya sa unahan ng pakikipaglaban sa pagbabago ng klima sa Tradewater.",
        "Ipinanganak at lumaki sa Chicago, si Nicholas ay nag-aral sa Colby College, nakakuha ng graduate degree mula sa Pace University, at law degree mula sa Brooklyn Law School.",
        "Nakatira siya sa Irving Park kasama ang kanyang asawa at tatlong batang anak na nag-aaral sa Logan Square. Ang county na ito ang kanyang tahanan. Kaya naman tumatakbo siya.",
      ],
      timelineHeading: "Ang Daan patungong Distrito 8",
      faqHeading: "Ano ang Ginagawa ng Komisyoner ng Cook County?",
      faq: [
        {
          q: "Ano ang Cook County Board of Commissioners?",
          a: "Ang Cook County Board of Commissioners ang legislative body ng Cook County, Illinois — ang pangalawang pinakamahal na county sa Estados Unidos. Ang Board ay may 17 miyembro.",
        },
        {
          q: "Ano ang ginagawa ng isang Komisyoner?",
          a: "Ang mga komisyoner ay bumoboto sa badyet ng county (mahigit $8 bilyon taon-taon), nagtatakda ng patakaran sa pampublikong kalusugan, kriminal na katarungan, paggamit ng lupa, transportasyon, at mga serbisyo ng county.",
        },
        {
          q: "Bakit mahalaga ang lihim na boto na ito?",
          a: "Ang pamahalaan ng Cook County ay nakakaapekto sa iyong mga buwis sa ari-arian, mga lokal na ospital, mga korte, at mga parke. Ang Distrito 8 ay sumasaklaw sa mga bahagi ng Hilaga at Hilagang-kanlurang bahagi ng Chicago.",
        },
      ],
    },
    getInvolvedPage: {
      heading: "Makiisa",
      subhead:
        "Ang kampanyang ito ay gumagana sa kapangyarihan ng mga tao. Kahit kumatok ng pintuan, tumawag, o magkalat ng balita — kailangan ka namin.",
      volunteerHeading: "Mag-boluntaryo",
      nameLabel: "Buong Pangalan",
      emailLabel: "Email",
      phoneLabel: "Telepono (opsyonal)",
      messageLabel: "Paano mo gustong makatulong?",
      submit: "Mag-sign Up para Mag-boluntaryo",
      followHeading: "Sundan ang Kampanya",
      followSub: "Manatiling konektado at ipagkalat ang balita.",
      donateLink: "💰 Mag-donate sa pamamagitan ng ActBlue",
    },
  },

  hi: {
    nav: {
      home: "होम",
      about: "Nicholas से मिलें",
      issues: "मुद्दे",
      donate: "दान करें",
      getInvolved: "जुड़ें",
      press: "प्रेस",
    },
    hero: {
      eyebrow: "17 मार्च प्राइमरी · COOK COUNTY जिला 8",
      headline: "लड़ रहे हैं",
      headlineAccent: "हमारे",
      subhead:
        "Nicholas Cade — Irving Park के पिता, नौसेना के दिग्गज, शिक्षक, वकील — Cook County Commissioner के लिए चुनाव लड़ रहे हैं क्योंकि जिला 8 के परिवार एक ऐसी सरकार के हकदार हैं जो वास्तव में उनके लिए काम करे।",
      ctaPrimary: "17 मार्च को वोट करें",
      ctaSecondary: "Nicholas से मिलें →",
      endorsedBy: "VoteVets · Abundant Housing IL · Chicago Growth Project · IL Veterans for Change द्वारा समर्थित",
    },
    case: {
      heading: "Nicholas क्यों?",
      served: {
        title: "सेवा की",
        body: "Nicholas ने अमेरिकी नौसेना में Judge Advocate के रूप में सेवा की। वे जानते हैं कि खुद से बड़ी किसी चीज़ के लिए लड़ने का क्या मतलब है।",
      },
      taught: {
        title: "पढ़ाया",
        body: "वे घर लौटे और Teach For America के माध्यम से मिडल स्कूल में सामाजिक विज्ञान पढ़ाया। वे जिला 8 की कक्षाओं को अंदर से जानते हैं।",
      },
      fought: {
        title: "लड़े",
        body: "एक वकील और Tradewater में जलवायु अधिवक्ता के रूप में, Nicholas ने अपना करियर व्यावहारिक समाधानों से कठिन समस्याओं को हल करने में बिताया है।",
      },
    },
    roots: {
      quote:
        "मैं Chicago में पला-बढ़ा हूं। मेरे बच्चे यहाँ स्कूल जाते हैं। यह मेरा समुदाय है — और मैं इसे बेहतर बनाने के लिए हर दिन लड़ूंगा।",
      attribution: "— Nicholas Cade, Irving Park",
      pills: [
        "Irving Park निवासी",
        "Chicago Public Schools अभिभावक",
        "स्थानीय स्कूल काउंसिल प्रतिनिधि, Disney II Magnet",
        "नौसेना दिग्गज",
      ],
    },
    issues: {
      eyebrow: "Nicholas किसके लिए खड़े हैं",
      heading: "Cook County के लिए प्राथमिकताएं",
      subhead: "Nicholas उन मुद्दों पर ध्यान केंद्रित है जो जिला 8 के परिवारों के लिए सबसे ज़्यादा मायने रखते हैं।",
      calloutLabel: "जिला 8 के लिए इसका क्या अर्थ है:",
      seeAll: "सभी मुद्दे देखें →",
    },
    stats: {
      heading: "अभियान के आंकड़े",
      subhead: "जिला 8 · Cook County · Democratic Primary",
      residents: "जिला 8 निवासी",
      daysUntil: "प्राइमरी तक दिन",
      voteToday: "आज वोट करें!",
      doors: "दरवाज़े खटखटाए",
      volunteers: "स्वयंसेवक",
      yearsHome: "वर्ष Nicholas ने Chicago को घर कहा",
    },
    photoStrip: {
      eyebrow: "अभियान पर",
      heading: "अभियान के पल",
      intro: "Nicholas सिर्फ जिला 8 की बात नहीं करते — वे हर दिन वहाँ हैं।",
      swipe: "और देखने के लिए स्वाइप करें →",
    },
    endorsements: {
      eyebrow: "Nicholas के साथ कौन है",
      heading: "समर्थन",
      context: "दिग्गजों, आवास और Chicago के भविष्य के लिए लड़ने वाले संगठनों का विश्वास।",
    },
    testimonials: {
      eyebrow: "पड़ोस से",
      heading: "मतदाता क्या कह रहे हैं",
      placeholderBanner: "",
      quotes: [
        {
          text: "Nicholas ने मेरे दरवाज़े पर दस्तक दी और वास्तव में सुना। मैंने पहले किसी नेता से कभी सुना हुआ महसूस नहीं किया।",
          name: "Walter K.",
          neighborhood: "Jefferson Park",
        },
        {
          text: "एक दिग्गज के रूप में, मैं उस पर भरोसा करता हूं जिसने सेवा की। Nicholas इसे समझते हैं।",
          name: "Diana M.",
          neighborhood: "Portage Park",
        },
        {
          text: "मेरा परिवार घर पर हिंदी बोलता है। यह तथ्य कि यह साइट हिंदी में काम करती है, मुझे बताता है कि Nicholas वास्तव में हमारी परवाह करते हैं।",
          name: "Christine S.",
          neighborhood: "Dunning",
        },
      ],
    },
    getInvolved: {
      eyebrow: "कार्रवाई करें",
      heading: "जिला 8 को महत्वपूर्ण बनाएं",
      vote: {
        title: "17 मार्च को वोट करें",
        body: "सुनिश्चित करें कि आप पंजीकृत हैं। अपना मतदान स्थल खोजें।",
        cta: "पंजीकरण जांचें →",
      },
      canvass: {
        title: "दरवाज़ा खटखटाएं",
        body: "हर सप्ताहांत जिला 8 में canvassing करने वाली टीम में शामिल हों।",
        cta: "साइन अप करें →",
      },
      share: {
        title: "बात फैलाएं",
        body: "इस साइट को अपने पड़ोसियों के साथ साझा करें।",
      },
    },
    donate: {
      eyebrow: "इस अभियान को शक्ति दें",
      heading: "प्राइमरी है",
      headlineAccent: "17 मार्च।",
      subhead: "हर डॉलर अभी मायने रखता है।",
      urgency:
        "यह एक स्थानीय चुनाव है। छोटे दान से बड़ा फर्क पड़ता है। $25 दरवाज़ा खटखटाने के एक पूरे दिन को निधि देता है।",
      cta: "अभी दान करें →",
      volunteerCta: "स्वयंसेवक",
    },
    footer: {
      tagline: "Cook County Commissioner जिला 8 के लिए Nicholas Cade।",
      pages: "पृष्ठ",
      connect: "जुड़ें",
      disclaimer:
        "Friends of Nicholas Cade द्वारा भुगतान किया गया। State Board of Elections के साथ दायर हमारी रिपोर्टों की प्रतियां Board की आधिकारिक वेबसाइट (www.elections.il.gov) पर उपलब्ध हैं।",
      copyright: "Friends of Nicholas Cade। सर्वाधिकार सुरक्षित।",
    },
    about: {
      eyebrow: "उम्मीदवार से मिलें",
      heading: "Nicholas Cade",
      subhead: "नौसेना दिग्गज। शिक्षक। वकील। पर्यावरण अधिवक्ता। तीन बच्चों के पिता।",
      bioParagraphs: [
        "Nicholas ने अपना करियर समस्याओं को हल करने में बिताया है।",
        "Teach For America corps member के रूप में, उन्होंने न्यूयॉर्क में मिडल स्कूल में सामाजिक विज्ञान पढ़ाया। U.S. Navy Judge Advocate के रूप में, उन्होंने सैन्य वकील के रूप में अपने देश की सेवा की।",
        "आज, निजी क्षेत्र में, वे Tradewater में जलवायु परिवर्तन के खिलाफ लड़ाई की अग्रिम पंक्ति में काम करते हैं।",
        "Chicago में जन्मे और पले-बढ़े — शहर के पैरोकियल स्कूलों के उत्पाद — Nicholas ने Colby College में पढ़ाई की, Pace University से graduate degree और Brooklyn Law School से law degree प्राप्त की।",
        "वे अपनी पत्नी और तीन छोटे बच्चों के साथ Irving Park में रहते हैं, जो Logan Square में स्कूल जाते हैं। यह county उनका घर है। इसीलिए वे चुनाव लड़ रहे हैं।",
      ],
      timelineHeading: "जिला 8 का रास्ता",
      faqHeading: "Cook County Commissioner क्या करते हैं?",
      faq: [
        {
          q: "Cook County Board of Commissioners क्या है?",
          a: "Cook County Board of Commissioners, Cook County, Illinois की विधायी संस्था है — संयुक्त राज्य अमेरिका में दूसरा सबसे अधिक आबादी वाला county। Board में 17 सदस्य हैं।",
        },
        {
          q: "एक Commissioner क्या करते हैं?",
          a: "Commissioners county के बजट (सालाना $8 बिलियन से अधिक) पर मतदान करते हैं, सार्वजनिक स्वास्थ्य, आपराधिक न्याय, भूमि उपयोग, परिवहन और county सेवाओं पर नीति निर्धारित करते हैं।",
        },
        {
          q: "यह चुनाव क्यों मायने रखता है?",
          a: "Cook County सरकार आपके property taxes, स्थानीय अस्पतालों, अदालतों और पार्कों को प्रभावित करती है। जिला 8 Chicago के उत्तरी और उत्तर-पश्चिमी हिस्सों को कवर करता है।",
        },
      ],
    },
    getInvolvedPage: {
      heading: "जुड़ें",
      subhead:
        "यह अभियान लोगों की शक्ति पर चलता है। चाहे आप दरवाज़ा खटखटा सकें, फोन कर सकें, या बात फैला सकें — हमें आपकी ज़रूरत है।",
      volunteerHeading: "स्वयंसेवक",
      nameLabel: "पूरा नाम",
      emailLabel: "ईमेल",
      phoneLabel: "फोन (वैकल्पिक)",
      messageLabel: "आप कैसे मदद करना चाहेंगे?",
      submit: "स्वयंसेवक के रूप में साइन अप करें",
      followHeading: "अभियान का अनुसरण करें",
      followSub: "जुड़े रहें और बात फैलाएं।",
      donateLink: "💰 ActBlue के माध्यम से दान करें",
    },
  },
}

export default t
