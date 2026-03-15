import type { Issue } from "@/data/issues";
import type { Lang } from "@/lib/LangContext";

// Expanded issue details with "What this means for District 8"
const issueCallouts: Record<string, { en: string; es: string; pl: string; tl: string; hi: string }> = {
  "economic-opportunity": {
    en: "Nicholas will push for property tax reform and more affordable housing units in District 8 neighborhoods.",
    es: "Nicholas impulsará la reforma del impuesto a la propiedad y más unidades de vivienda asequible en los vecindarios del Distrito 8.",
    pl: "Nicholas będzie naciskał na reformę podatku od nieruchomości i więcej niedrogich mieszkań w Okręgu 8.",
    tl: "Itutulak ni Nicholas ang reporma sa property tax at mas maraming abot-kayang pabahay sa Distrito 8.",
    hi: "Nicholas property tax सुधार और जिला 8 में अधिक किफायती आवास के लिए दबाव डालेंगे।",
  },
  "development": {
    en: "Nicholas will fight for transit-oriented development and mixed-income housing that creates jobs here — not just for developers.",
    es: "Nicholas luchará por el desarrollo orientado al tránsito y la vivienda de ingresos mixtos que crea empleos aquí, no solo para los desarrolladores.",
    pl: "Nicholas będzie walczył o rozwój zorientowany na transport i mieszkania o mieszanych dochodach, które tworzą miejsca pracy tutaj.",
    tl: "Lalaban si Nicholas para sa transit-oriented development at mixed-income housing na lumilikha ng trabaho dito.",
    hi: "Nicholas transit-oriented development और mixed-income housing के लिए लड़ेंगे जो यहाँ नौकरियां बनाए।",
  },
  "government-efficiency": {
    en: "Nicholas will demand performance audits and open-data reporting so you can see exactly how your $8B+ in taxes is being spent.",
    es: "Nicholas exigirá auditorías de desempeño e informes de datos abiertos para que pueda ver exactamente cómo se gastan sus más de $8 mil millones en impuestos.",
    pl: "Nicholas zażąda audytów wydajności i raportowania otwartych danych, abyś mógł zobaczyć, jak wydawane są Twoje ponad 8 miliardów dolarów podatków.",
    tl: "Hihilingin ni Nicholas ang mga performance audit at open-data reporting upang makita mo kung paano ginagastos ang iyong $8B+ sa buwis.",
    hi: "Nicholas performance audits और open-data reporting की मांग करेंगे ताकि आप देख सकें कि $8B+ taxes कैसे खर्च हो रहे हैं।",
  },
  "immigration-civil-rights": {
    en: "Nicholas will protect Cook County's welcoming ordinance and ensure equal access to county services for every resident.",
    es: "Nicholas protegerá la ordenanza de bienvenida del Condado de Cook y garantizará el acceso igualitario a los servicios del condado para cada residente.",
    pl: "Nicholas ochroni uchwałę powitalną Cook County i zapewni równy dostęp do usług county dla każdego mieszkańca.",
    tl: "Poprotektahan ni Nicholas ang welcoming ordinance ng Cook County at titiyakin ang pantay na access sa mga serbisyo ng county para sa bawat residente.",
    hi: "Nicholas Cook County के welcoming ordinance की रक्षा करेंगे और हर निवासी के लिए county सेवाओं तक समान पहुंच सुनिश्चित करेंगे।",
  },
  "protecting-rights-accountability": {
    en: "Nicholas will protect county health access, election integrity, and public records transparency so local government safeguards rights in District 8.",
    es: "Nicholas protegerá el acceso a salud del condado, la integridad electoral y la transparencia de registros públicos para resguardar derechos en el Distrito 8.",
    pl: "Nicholas będzie chronił dostęp do opieki zdrowotnej county, integralność wyborów i przejrzystość rejestrów publicznych dla mieszkańców Okręgu 8.",
    tl: "Poprotektahan ni Nicholas ang county health access, election integrity, at transparency ng public records para sa mga pamilya sa Distrito 8.",
    hi: "Nicholas county health access, चुनावी ईमानदारी और public records transparency की रक्षा करेंगे ताकि District 8 में अधिकार सुरक्षित रहें।",
  },
  "public-health": {
    en: "Nicholas will fully fund Cook County Health, expand CountyCare enrollment, and strengthen mental health and addiction services in District 8.",
    es: "Nicholas financiará plenamente Cook County Health, ampliará CountyCare y fortalecerá salud mental y tratamiento de adicciones en el Distrito 8.",
    pl: "Nicholas będzie walczył o pełne finansowanie Cook County Health, rozszerzenie CountyCare i wzmocnienie usług zdrowia psychicznego w Okręgu 8.",
    tl: "Lalaban si Nicholas para sa buong pondo ng Cook County Health, mas malawak na CountyCare enrollment, at mas matibay na mental health at addiction care sa Distrito 8.",
    hi: "Nicholas Cook County Health के पूर्ण फंडिंग, CountyCare enrollment विस्तार और District 8 में mental health व addiction सेवाओं को मजबूत करेंगे।",
  },
  "criminal-justice-safety": {
    en: "Nicholas supports smarter jail management, faster courts, and community violence prevention programs that reduce harm before it happens.",
    es: "Nicholas apoya una gestión inteligente de cárceles, tribunales más ágiles y programas comunitarios de prevención de violencia que sí funcionan.",
    pl: "Nicholas popiera lepsze zarządzanie więzieniem, szybsze sądy i skuteczne lokalne programy zapobiegania przemocy.",
    tl: "Suportado ni Nicholas ang mas matalinong jail management, mas mabilis na hukuman, at community violence prevention programs na epektibo.",
    hi: "Nicholas बेहतर jail management, तेज अदालतों और प्रभावी community violence prevention programs का समर्थन करते हैं।",
  },
  "schools-youth": {
    en: "As a CPS parent and LSC representative, Nicholas will expand youth programs and make county services easier for District 8 families to access.",
    es: "Como padre de CPS y representante del LSC, Nicholas ampliará programas juveniles y facilitará el acceso familiar a servicios del condado en el Distrito 8.",
    pl: "Jako rodzic CPS i przedstawiciel LSC, Nicholas rozszerzy programy młodzieżowe i ułatwi rodzinom z Okręgu 8 dostęp do usług county.",
    tl: "Bilang CPS parent at LSC representative, palalawakin ni Nicholas ang youth programs at papadaliin ang county services para sa mga pamilya sa Distrito 8.",
    hi: "CPS parent और LSC representative के रूप में Nicholas youth programs बढ़ाएंगे और District 8 परिवारों के लिए county services तक पहुंच आसान करेंगे।",
  },
};

interface IssueCardProps {
  issue: Issue;
  lang: Lang;
  expanded?: boolean;
  accentColor?: "navy" | "red" | "skyblue" | "green";
  cardNumber?: number;
}

export default function IssueCard({
  issue,
  lang,
  expanded = false,
  accentColor = "navy",
  cardNumber,
}: IssueCardProps) {
  const callout = issueCallouts[issue.id];
  const calloutText = callout ? callout[lang] : undefined;

  const borderColorMap = {
    navy: "border-l-navy",
    red: "border-l-red",
    skyblue: "border-l-skyblue",
    green: "border-l-green",
  };

  return (
    <div
      className={`bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-6 md:p-8 h-full flex flex-col border-l-4 ${borderColorMap[accentColor]}`}
    >
      {typeof cardNumber === "number" && (
        <p className="font-mono text-sm font-bold tracking-[0.2em] uppercase text-red mb-4">
          {String(cardNumber).padStart(2, "0")}
        </p>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold text-navy mb-3">
        {issue.title[lang]}
      </h3>

      {/* Summary */}
      <p className="text-text/80 leading-relaxed mb-4 flex-1">
        {issue.summary[lang]}
      </p>

      {/* Gold callout box */}
      {calloutText && (
        <div
          className="rounded-lg p-3 mt-auto"
          style={{ background: "rgba(244,169,43,0.12)", borderLeft: "3px solid #F4A92B" }}
        >
          <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#b87d10" }}>
            {lang === "en"
              ? "What This Means for District 8:"
              : lang === "es"
              ? "Lo Que Esto Significa para el Distrito 8:"
              : lang === "pl"
              ? "Co to oznacza dla Okręgu 8:"
              : lang === "tl"
              ? "Ano ang Ibig Sabihin Nito para sa Distrito 8:"
              : "जिला 8 के लिए इसका क्या अर्थ है:"}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#7a5a00" }}>
            {calloutText}
          </p>
        </div>
      )}

      {/* Expanded detail */}
      {expanded && (
        <p className="text-text/70 leading-relaxed text-sm border-t border-gray-100 pt-3 mt-4">
          {issue.detail[lang]}
        </p>
      )}
    </div>
  );
}
