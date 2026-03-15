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
      en: "Cook County families are being squeezed by rising costs. Nicholas will fight for property tax reform, affordable housing development, and economic policies that prioritize working people over connected insiders.",
      es: "Las familias del Condado de Cook están siendo presionadas por el aumento de costos. Nicholas luchará por la reforma del impuesto a la propiedad, el desarrollo de vivienda asequible y políticas económicas que prioricen a las personas trabajadoras.",
      pl: "Rodziny Cook County są ściskane przez rosnące koszty. Nicholas będzie walczył o reformę podatku od nieruchomości, rozwój niedrogich mieszkań i polityki ekonomiczne, które priorytetyzują ludzi pracy.",
      tl: "Ang mga pamilya ng Cook County ay nasisikip dahil sa tumataas na gastos. Lalaban si Nicholas para sa reporma sa property tax, pagpapaunlad ng abot-kayang pabahay, at mga patakaran sa ekonomiya na inuuna ang mga nagtatrabahong tao.",
      hi: "Cook County के परिवार बढ़ती लागत से दब रहे हैं। Nicholas property tax सुधार, किफायती आवास विकास और उन आर्थिक नीतियों के लिए लड़ेंगे जो कामकाजी लोगों को प्राथमिकता देती हैं।",
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
    id: "reject-extremism",
    icon: "🛡️",
    title: {
      en: "Reject Right-Wing Extremism",
      es: "Rechazar el Extremismo de Derecha",
      pl: "Odrzucenie Prawicowego Ekstremizmu",
      tl: "Pagtanggi sa Right-Wing Extremism",
      hi: "दक्षिणपंथी उग्रवाद को अस्वीकार करें",
    },
    summary: {
      en: "Standing firm against extremist policies that threaten our communities and our democracy.",
      es: "Mantenerse firme contra las políticas extremistas que amenazan a nuestras comunidades y nuestra democracia.",
      pl: "Stanie twardo przeciwko ekstremistycznym politykom, które zagrażają naszym społecznościom i naszej demokracji.",
      tl: "Matatag na pagtayo laban sa mga extremist na patakaran na nagbabanta sa ating mga komunidad at ating demokrasya.",
      hi: "उग्रवादी नीतियों के खिलाफ दृढ़ता से खड़े रहना जो हमारे समुदायों और हमारी लोकतंत्र को खतरे में डालती हैं।",
    },
    detail: {
      en: "From attacks on reproductive rights to book bans to undermining elections — extremism has no place in Cook County government. Nicholas will be a bulwark against radical policies and a champion for the values that make our county strong.",
      es: "Desde los ataques a los derechos reproductivos hasta la prohibición de libros y el socavamiento de las elecciones — el extremismo no tiene lugar en el gobierno del Condado de Cook. Nicholas será un baluarte contra las políticas radicales.",
      pl: "Od ataków na prawa reprodukcyjne po zakazy książek i podważanie wyborów — ekstremizm nie ma miejsca w rządzie Cook County. Nicholas będzie wałem ochronnym przeciwko radykalnym politykom.",
      tl: "Mula sa mga pag-atake sa reproductive rights hanggang sa mga book ban at pagwasak sa mga halalan — walang lugar ang extremism sa pamahalaan ng Cook County. Si Nicholas ay magiging sanggalang laban sa mga radikal na patakaran.",
      hi: "reproductive rights पर हमलों से लेकर book bans तक चुनावों को कमजोर करने तक — Cook County सरकार में उग्रवाद का कोई स्थान नहीं है। Nicholas radical नीतियों के खिलाफ एक मजबूत रक्षक होंगे।",
    },
  },
];

export default issues;
