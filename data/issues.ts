export interface Issue {
  id: string;
  icon: string;
  title: { en: string; es: string; pl: string; tl: string; hi: string };
  summary: { en: string; es: string; pl: string; tl: string; hi: string };
  detail: { en: string; es: string; pl: string; tl: string; hi: string };
}

const issues: Issue[] = [
  {
    id: "economic-opportunity",
    icon: "💼",
    title: {
      en: "Economic Opportunity & Affordability",
      es: "Oportunidad Económica y Asequibilidad",
      pl: "Szanse Ekonomiczne i Przystępność Cenowa",
      tl: "Pagkakataon sa Ekonomiya at Abot-kayang Pamumuhay",
      hi: "आर्थिक अवसर और किफायती जीवन",
    },
    summary: {
      en: "Making Cook County affordable for working families through smart economic policy and housing investment.",
      es: "Hacer que el Condado de Cook sea asequible para las familias trabajadoras a través de políticas económicas inteligentes e inversión en vivienda.",
      pl: "Sprawianie, że Cook County jest przystępne cenowo dla rodzin pracujących poprzez mądrą politykę ekonomiczną i inwestycje w mieszkalnictwo.",
      tl: "Gagawin ang Cook County na abot-kaya para sa mga nagtatrabahong pamilya sa pamamagitan ng matalinong patakaran sa ekonomiya at pamumuhunan sa pabahay.",
      hi: "स्मार्ट आर्थिक नीति और आवास निवेश के माध्यम से Cook County को कामकाजी परिवारों के लिए किफायती बनाना।",
    },
    detail: {
      en: "Cook County families are being squeezed. Nicholas will fight for: (1) expanding the Senior Freeze exemption so longtime homeowners aren't taxed out of their homes; (2) reforming the property tax appeals process so working families can fight unfair assessments without a lawyer; (3) ending the documented pattern of Black homeowners being overtaxed compared to assessed value — a Cook County-specific injustice that must be fixed. Renters deserve protection too: Nicholas will push for stronger tenant protections so landlords can't pass every tax increase straight to your rent. Cook County's own data shows that Black homeowners have been systematically overtaxed compared to their actual property values — a documented injustice that Nicholas will fight to correct through fair reassessment methodology and accessible appeals for every family.",
      es: "Las familias de Cook County están bajo presión. Nicholas luchará por: (1) ampliar la exención Senior Freeze para que los propietarios de toda la vida no sean expulsados por impuestos; (2) reformar el proceso de apelaciones del impuesto a la propiedad para que las familias trabajadoras puedan impugnar avalúos injustos sin abogado; y (3) terminar con el patrón documentado de sobretasación a propietarios negros frente al valor real de sus viviendas. Los inquilinos también merecen protección: Nicholas impulsará protecciones más fuertes para que los aumentos de impuestos no se trasladen automáticamente a la renta.",
      pl: "Rodziny w Cook County są pod presją. Nicholas będzie walczył o: (1) rozszerzenie ulgi Senior Freeze, aby wieloletni właściciele domów nie byli wypychani podatkami; (2) reformę procesu odwołań od podatku od nieruchomości, aby rodziny pracujące mogły kwestionować niesprawiedliwe wyceny bez prawnika; oraz (3) zakończenie udokumentowanego wzorca zawyżonego opodatkowania czarnych właścicieli domów względem faktycznej wartości nieruchomości. Najemcy też zasługują na ochronę: Nicholas będzie wspierał silniejsze prawa lokatorów.",
      tl: "Naiipit ang mga pamilya sa Cook County. Lalaban si Nicholas para sa: (1) pagpapalawak ng Senior Freeze exemption upang hindi mapaalis sa buwis ang matatagal nang may-ari ng bahay; (2) pag-ayos ng property tax appeals process para makalaban ang mga pamilyang manggagawa sa maling assessment kahit walang abogado; at (3) pagpapatigil sa dokumentadong pattern na mas pinapatawan ng buwis ang mga Black na homeowner kaysa sa tunay na halaga ng ari-arian. Dapat ding protektado ang mga nangungupahan.",
      hi: "Cook County के परिवारों पर भारी दबाव है। Nicholas लड़ेंगे: (1) Senior Freeze छूट को बढ़ाने के लिए ताकि लंबे समय से रहने वाले homeowners टैक्स के कारण घर न खोएं; (2) property tax appeals प्रक्रिया को सुधारने के लिए ताकि कामकाजी परिवार बिना वकील के गलत आकलन को चुनौती दे सकें; और (3) उस दर्ज अन्याय को खत्म करने के लिए जिसमें Black homeowners पर वास्तविक संपत्ति मूल्य की तुलना में अधिक टैक्स लगाया गया है। किरायेदारों के लिए भी मजबूत सुरक्षा जरूरी है।",
    },
  },
  {
    id: "development",
    icon: "🏗️",
    title: {
      en: "Development & Growth",
      es: "Desarrollo y Crecimiento",
      pl: "Rozwój i Wzrost",
      tl: "Pag-unlad at Paglago",
      hi: "विकास और वृद्धि",
    },
    summary: {
      en: "Smart, sustainable development that strengthens neighborhoods without displacing residents.",
      es: "Desarrollo inteligente y sostenible que fortalezca los vecindarios sin desplazar a los residentes.",
      pl: "Mądry, zrównoważony rozwój, który wzmacnia dzielnice bez wysiedlania mieszkańców.",
      tl: "Matalino at napapanatiling pag-unlad na nagpapatibay ng mga kapitbahayan nang hindi inililipat ang mga residente.",
      hi: "स्मार्ट, टिकाऊ विकास जो निवासियों को विस्थापित किए बिना पड़ोस को मजबूत करे।",
    },
    detail: {
      en: "Growth should benefit everyone — not just developers. Nicholas supports transit-oriented development, mixed-income housing, and investment in neighborhood infrastructure that creates jobs and opportunity for existing residents.",
      es: "El crecimiento debe beneficiar a todos, no solo a los desarrolladores. Nicholas apoya el desarrollo orientado al tránsito, la vivienda de ingresos mixtos y la inversión en infraestructura de vecindarios que crea empleos.",
      pl: "Wzrost powinien przynosić korzyści wszystkim — nie tylko deweloperom. Nicholas popiera rozwój zorientowany na transport, mieszkania o mieszanych dochodach i inwestycje w infrastrukturę dzielnicową.",
      tl: "Ang paglago ay dapat na makinabang ang lahat — hindi lamang ang mga developer. Sinusuportahan ni Nicholas ang transit-oriented development, mixed-income housing, at pamumuhunan sa imprastraktura ng kapitbahayan.",
      hi: "विकास से सभी को फायदा होना चाहिए — सिर्फ डेवलपर्स को नहीं। Nicholas transit-oriented development, mixed-income housing और neighborhood infrastructure में निवेश का समर्थन करते हैं।",
    },
  },
  {
    id: "government-efficiency",
    icon: "⚖️",
    title: {
      en: "Government Efficiency & Transparency",
      es: "Eficiencia y Transparencia Gubernamental",
      pl: "Efektywność i Przejrzystość Rządu",
      tl: "Kahusayan at Transparency ng Pamahalaan",
      hi: "सरकारी दक्षता और पारदर्शिता",
    },
    summary: {
      en: "Making county government work better, cost less, and answer to the people it serves.",
      es: "Hacer que el gobierno del condado funcione mejor, cueste menos y responda a las personas a las que sirve.",
      pl: "Sprawienie, że rząd hrabstwa działa lepiej, kosztuje mniej i odpowiada przed ludźmi, którym służy.",
      tl: "Gagawin ang pamahalaan ng county na gumana nang mas mahusay, magastos nang mas kaunti, at sumagot sa mga taong pinaglilingkuran nito.",
      hi: "county सरकार को बेहतर काम करने, कम खर्च करने और जिन लोगों की सेवा करती है उनके प्रति जवाबदेह बनाना।",
    },
    detail: {
      en: "Cook County's $8 billion budget should be spent wisely and transparently. Nicholas will push for performance audits, open data, and eliminating wasteful patronage spending so your tax dollars actually serve you.",
      es: "El presupuesto de $8 mil millones del Condado de Cook debe gastarse de manera inteligente y transparente. Nicholas presionará por auditorías de desempeño, datos abiertos y la eliminación del gasto de patronazgo derrochador.",
      pl: "Budżet Cook County w wysokości 8 miliardów dolarów powinien być wydawany mądrze i transparentnie. Nicholas będzie naciskał na audyty wydajności, otwarte dane i eliminację marnotrawnych wydatków.",
      tl: "Ang $8 bilyong badyet ng Cook County ay dapat gastusin nang matalino at transparent. Itutulak ni Nicholas ang mga performance audit, open data, at pag-aalis ng mapag-aksayang gastos.",
      hi: "Cook County के $8 बिलियन बजट को बुद्धिमानी से और पारदर्शिता से खर्च किया जाना चाहिए। Nicholas performance audits, open data और बेकार खर्च को खत्म करने के लिए दबाव डालेंगे।",
    },
  },
  {
    id: "immigration-civil-rights",
    icon: "🗽",
    title: {
      en: "Immigration & Civil Rights",
      es: "Inmigración y Derechos Civiles",
      pl: "Imigracja i Prawa Obywatelskie",
      tl: "Imigrasyon at Karapatang Sibil",
      hi: "आप्रवासन और नागरिक अधिकार",
    },
    summary: {
      en: "Protecting immigrant communities and defending civil rights for all Cook County residents.",
      es: "Proteger a las comunidades inmigrantes y defender los derechos civiles de todos los residentes del Condado de Cook.",
      pl: "Ochrona społeczności imigrantów i obrona praw obywatelskich wszystkich mieszkańców Cook County.",
      tl: "Pagprotekta sa mga komunidad ng mga imigrante at pagtatanggol ng mga karapatang sibil para sa lahat ng residente ng Cook County.",
      hi: "आप्रवासी समुदायों की सुरक्षा और Cook County के सभी निवासियों के नागरिक अधिकारों की रक्षा करना।",
    },
    detail: {
      en: "Cook County is home to one of the most diverse populations in America. Nicholas will defend the county's welcoming ordinance, protect immigrant families, and ensure equal access to county services regardless of background.",
      es: "El Condado de Cook alberga una de las poblaciones más diversas de América. Nicholas defenderá la ordenanza de bienvenida del condado, protegerá a las familias inmigrantes y garantizará el acceso igualitario a los servicios del condado.",
      pl: "Cook County jest domem dla jednej z najbardziej zróżnicowanych populacji w Ameryce. Nicholas będzie bronił uchwały powitalnej hrabstwa, chronił rodziny imigrantów i zapewniał równy dostęp do usług hrabstwa.",
      tl: "Ang Cook County ay tahanan ng isa sa mga pinaka-diverse na populasyon sa Amerika. Itatanggol ni Nicholas ang welcoming ordinance ng county, poprotektahan ang mga pamilyang imigrante, at titiyakin ang pantay na access sa mga serbisyo ng county.",
      hi: "Cook County अमेरिका की सबसे विविध आबादी में से एक का घर है। Nicholas county के welcoming ordinance का बचाव करेंगे, आप्रवासी परिवारों की रक्षा करेंगे और background की परवाह किए बिना county सेवाओं तक समान पहुंच सुनिश्चित करेंगे।",
    },
  },
  {
    id: "protecting-rights-accountability",
    icon: "🛡️",
    title: {
      en: "Protecting Rights & Democratic Accountability",
      es: "Protección de Derechos y Responsabilidad Democrática",
      pl: "Ochrona Praw i Odpowiedzialność Demokratyczna",
      tl: "Pagprotekta sa mga Karapatan at Demokratikong Pananagutan",
      hi: "अधिकारों की रक्षा और लोकतांत्रिक जवाबदेही",
    },
    summary: {
      en: "Defending civil rights, election integrity, and public accountability through county government.",
      es: "Defender los derechos civiles, la integridad electoral y la rendición de cuentas pública desde el gobierno del condado.",
      pl: "Obrona praw obywatelskich, integralności wyborów i odpowiedzialności publicznej poprzez rząd county.",
      tl: "Pagtatanggol sa civil rights, integridad ng halalan, at pananagutan ng pamahalaan sa antas ng county.",
      hi: "काउंटी सरकार के माध्यम से नागरिक अधिकारों, चुनावी ईमानदारी और जवाबदेही की रक्षा।",
    },
    detail: {
      en: "Cook County government must protect every resident's rights — regardless of who's in power in Washington or Springfield. Nicholas will defend access to county health services for all residents, protect the integrity of the county's elections and public records, and ensure Cook County never becomes a tool to target vulnerable communities. Local government is the last line of defense when higher levels of government fail us.",
      es: "El gobierno de Cook County debe proteger los derechos de cada residente, sin importar quién esté en el poder en Washington o Springfield. Nicholas defenderá el acceso a los servicios de salud del condado para todos, protegerá la integridad de las elecciones y registros públicos del condado y evitará que el gobierno local se use contra comunidades vulnerables.",
      pl: "Rząd Cook County musi chronić prawa każdego mieszkańca, niezależnie od tego, kto rządzi w Waszyngtonie czy Springfield. Nicholas będzie bronił dostępu do usług zdrowotnych county, integralności wyborów i rejestrów publicznych oraz dopilnuje, by county nie stało się narzędziem przeciwko wrażliwym społecznościom.",
      tl: "Dapat protektahan ng pamahalaan ng Cook County ang karapatan ng bawat residente, kahit sino pa ang nasa kapangyarihan sa Washington o Springfield. Ipagtatanggol ni Nicholas ang access sa county health services, integridad ng halalan at public records, at sisiguraduhing hindi gagamitin ang county laban sa mga vulnerable na komunidad.",
      hi: "Cook County सरकार को हर निवासी के अधिकारों की रक्षा करनी चाहिए, चाहे Washington या Springfield में कोई भी सत्ता में हो। Nicholas सभी के लिए county health services तक पहुंच, county चुनाव और public records की integrity, और कमजोर समुदायों को निशाना बनाने से सुरक्षा के लिए काम करेंगे।",
    },
  },
  {
    id: "public-health",
    icon: "🏥",
    title: {
      en: "Public Health & Healthcare Access",
      es: "Salud Pública y Acceso a la Atención Médica",
      pl: "Zdrowie Publiczne i Dostęp do Opieki Zdrowotnej",
      tl: "Kalusugang Pampubliko at Access sa Pangangalagang Pangkalusugan",
      hi: "सार्वजनिक स्वास्थ्य और स्वास्थ्य सेवा पहुंच",
    },
    summary: {
      en: "Protecting Cook County Health so every resident can access care, regardless of income or status.",
      es: "Proteger Cook County Health para que cada residente pueda acceder a atención médica, sin importar ingresos o estatus.",
      pl: "Ochrona Cook County Health, aby każdy mieszkaniec miał dostęp do opieki niezależnie od dochodu czy statusu.",
      tl: "Pagprotekta sa Cook County Health upang bawat residente ay may access sa pangangalaga anuman ang kita o status.",
      hi: "Cook County Health को मजबूत रखना ताकि हर निवासी को आय या स्थिति से परे इलाज मिल सके।",
    },
    detail: {
      en: "Cook County operates one of the largest public health systems in Illinois — Stroger Hospital, CountyCare, and 15+ community health centers serving hundreds of thousands of uninsured and immigrant residents. Nicholas will fight to fully fund Cook County Health, expand CountyCare enrollment, strengthen mental health and addiction services, and ensure every District 8 resident can access care regardless of income or immigration status.",
      es: "Cook County opera uno de los sistemas de salud pública más grandes de Illinois — Stroger Hospital, CountyCare y más de 15 centros comunitarios que atienden a cientos de miles de residentes sin seguro e inmigrantes. Nicholas luchará para financiar plenamente Cook County Health, ampliar la inscripción en CountyCare y fortalecer los servicios de salud mental y adicciones.",
      pl: "Cook County prowadzi jeden z największych systemów zdrowia publicznego w Illinois — Stroger Hospital, CountyCare i ponad 15 centrów zdrowia społecznościowego obsługujących setki tysięcy nieubezpieczonych i imigrantów. Nicholas będzie walczył o pełne finansowanie Cook County Health, rozszerzenie CountyCare oraz wzmocnienie usług zdrowia psychicznego i leczenia uzależnień.",
      tl: "Ang Cook County ay nagpapatakbo ng isa sa pinakamalaking public health system sa Illinois — Stroger Hospital, CountyCare, at 15+ community health centers na nagsisilbi sa daan-daang libong walang insurance at immigrant na residente. Lalaban si Nicholas para sa buong pondo ng Cook County Health, pagpapalawak ng CountyCare enrollment, at mas matibay na mental health at addiction services.",
      hi: "Cook County Illinois की सबसे बड़ी सार्वजनिक स्वास्थ्य प्रणालियों में से एक चलाता है — Stroger Hospital, CountyCare और 15+ community health centers। Nicholas Cook County Health को पूरा फंड देने, CountyCare enrollment बढ़ाने, mental health और addiction सेवाओं को मजबूत करने और District 8 के हर निवासी के लिए देखभाल सुनिश्चित करने के लिए लड़ेंगे।",
    },
  },
  {
    id: "criminal-justice-safety",
    icon: "🚨",
    title: {
      en: "Criminal Justice & Community Safety",
      es: "Justicia Penal y Seguridad Comunitaria",
      pl: "Wymiar Sprawiedliwości i Bezpieczeństwo Społeczności",
      tl: "Hustisyang Pangkiminal at Kaligtasan ng Komunidad",
      hi: "आपराधिक न्याय और सामुदायिक सुरक्षा",
    },
    summary: {
      en: "Safer neighborhoods through accountable county systems, smarter jail management, and prevention.",
      es: "Vecindarios más seguros mediante sistemas del condado con responsabilidad, mejor gestión de cárceles y prevención.",
      pl: "Bezpieczniejsze dzielnice dzięki odpowiedzialnym systemom county, lepszemu zarządzaniu więzieniem i prewencji.",
      tl: "Mas ligtas na komunidad sa pamamagitan ng accountable na county systems, mas matalinong jail management, at prevention.",
      hi: "जवाबदेह काउंटी सिस्टम, बेहतर जेल प्रबंधन और रोकथाम से सुरक्षित समुदाय।",
    },
    detail: {
      en: "Cook County operates the county jail, the court system, and funds community violence intervention programs. Nicholas will push for smarter jail management, mental health diversion before incarceration, faster courts, and investment in the community-based violence intervention programs that actually work — because real safety means preventing crime, not just responding to it.",
      es: "Cook County opera la cárcel del condado, el sistema judicial y financia programas comunitarios de intervención contra la violencia. Nicholas impulsará una gestión más inteligente de la cárcel, desvío de salud mental antes del encarcelamiento, tribunales más rápidos e inversión en programas comunitarios que sí funcionan.",
      pl: "Cook County prowadzi więzienie county, system sądowy i finansuje programy interwencji przeciw przemocy. Nicholas będzie naciskał na lepsze zarządzanie więzieniem, kierowanie osób do leczenia zdrowia psychicznego przed osadzeniem, szybsze sądy i inwestycje w skuteczne programy lokalne.",
      tl: "Ang Cook County ang nagpapatakbo ng county jail, court system, at nagpopondo ng community violence intervention programs. Itutulak ni Nicholas ang mas matalinong jail management, mental health diversion bago pagkakakulong, mas mabilis na hukuman, at pamumuhunan sa community-based programs na talagang epektibo.",
      hi: "Cook County county jail और court system चलाता है और community violence intervention programs को फंड करता है। Nicholas बेहतर jail management, incarceration से पहले mental health diversion, तेज अदालतें और प्रभावी community-based programs में निवेश के लिए काम करेंगे।",
    },
  },
  {
    id: "schools-youth",
    icon: "🎓",
    title: {
      en: "Schools & Youth",
      es: "Escuelas y Juventud",
      pl: "Szkoły i Młodzież",
      tl: "Mga Paaralan at Kabataan",
      hi: "स्कूल और युवा",
    },
    summary: {
      en: "Using county tools to support CPS families, after-school programs, and pathways for young people.",
      es: "Usar herramientas del condado para apoyar a familias de CPS, programas extracurriculares y oportunidades para jóvenes.",
      pl: "Wykorzystanie narzędzi county do wsparcia rodzin CPS, zajęć pozalekcyjnych i ścieżek rozwoju młodzieży.",
      tl: "Paggamit ng county tools para suportahan ang mga pamilyang CPS, after-school programs, at oportunidad para sa kabataan.",
      hi: "CPS परिवारों, after-school कार्यक्रमों और युवाओं के अवसरों के लिए काउंटी संसाधनों का उपयोग।",
    },
    detail: {
      en: "Nicholas is a CPS parent and active Local School Council representative at Disney II Magnet — so he knows firsthand how county decisions affect our schools. He'll fight for county funding that reaches CPS classrooms, expand after-school and summer youth programs in District 8, and ensure every family can navigate the county services that support our kids — from early childhood programs to job training for young adults.",
      es: "Nicholas es padre en CPS y representante activo del Local School Council en Disney II Magnet, por lo que conoce de primera mano cómo las decisiones del condado afectan a nuestras escuelas. Luchará por financiamiento del condado que llegue a las aulas de CPS, ampliará programas extracurriculares y de verano, y ayudará a las familias a navegar servicios del condado para sus hijos.",
      pl: "Nicholas jest rodzicem w CPS i aktywnym przedstawicielem Local School Council w Disney II Magnet, więc z pierwszej ręki wie, jak decyzje county wpływają na szkoły. Będzie walczył o finansowanie county docierające do klas CPS, rozszerzenie programów pozalekcyjnych i letnich oraz wsparcie rodzin w dostępie do usług county dla dzieci.",
      tl: "Si Nicholas ay magulang sa CPS at aktibong Local School Council representative sa Disney II Magnet, kaya alam niya mismo kung paano naaapektuhan ng county decisions ang mga paaralan. Lalaban siya para sa county funding na umaabot sa CPS classrooms, magpapalawak ng after-school at summer youth programs, at tutulong sa mga pamilyang mag-navigate ng county services para sa kabataan.",
      hi: "Nicholas CPS parent हैं और Disney II Magnet में Local School Council representative भी हैं, इसलिए वे जानते हैं कि county फैसले स्कूलों को कैसे प्रभावित करते हैं। वे CPS कक्षाओं तक पहुंचने वाली county funding, District 8 में after-school और summer youth programs के विस्तार, और परिवारों को county youth services तक पहुंच में मदद के लिए लड़ेंगे।",
    },
  },
];

export default issues;
