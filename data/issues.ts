export interface Issue {
  id: string;
  icon: string;
  title: { en: string; es: string };
  summary: { en: string; es: string };
  detail: { en: string; es: string };
}

const issues: Issue[] = [
  {
    id: "economic-opportunity",
    icon: "💼",
    title: {
      en: "Economic Opportunity & Affordability",
      es: "Oportunidad Económica y Asequibilidad",
    },
    summary: {
      en: "Making Cook County affordable for working families through smart economic policy and housing investment.",
      es: "Hacer que el Condado de Cook sea asequible para las familias trabajadoras a través de políticas económicas inteligentes e inversión en vivienda.",
    },
    detail: {
      en: "Cook County families are being squeezed by rising costs. Nicholas will fight for property tax reform, affordable housing development, and economic policies that prioritize working people over connected insiders.",
      es: "Las familias del Condado de Cook están siendo presionadas por el aumento de costos. Nicholas luchará por la reforma del impuesto a la propiedad, el desarrollo de vivienda asequible y políticas económicas que prioricen a las personas trabajadoras sobre los conectados de adentro.",
    },
  },
  {
    id: "development",
    icon: "🏗️",
    title: {
      en: "Development & Growth",
      es: "Desarrollo y Crecimiento",
    },
    summary: {
      en: "Smart, sustainable development that strengthens neighborhoods without displacing residents.",
      es: "Desarrollo inteligente y sostenible que fortalezca los vecindarios sin desplazar a los residentes.",
    },
    detail: {
      en: "Growth should benefit everyone — not just developers. Nicholas supports transit-oriented development, mixed-income housing, and investment in neighborhood infrastructure that creates jobs and opportunity for existing residents.",
      es: "El crecimiento debe beneficiar a todos, no solo a los desarrolladores. Nicholas apoya el desarrollo orientado al tránsito, la vivienda de ingresos mixtos y la inversión en infraestructura de vecindarios que crea empleos y oportunidades para los residentes existentes.",
    },
  },
  {
    id: "government-efficiency",
    icon: "⚖️",
    title: {
      en: "Government Efficiency & Transparency",
      es: "Eficiencia y Transparencia Gubernamental",
    },
    summary: {
      en: "Making county government work better, cost less, and answer to the people it serves.",
      es: "Hacer que el gobierno del condado funcione mejor, cueste menos y responda a las personas a las que sirve.",
    },
    detail: {
      en: "Cook County's $8 billion budget should be spent wisely and transparently. Nicholas will push for performance audits, open data, and eliminating wasteful patronage spending so your tax dollars actually serve you.",
      es: "El presupuesto de $8 mil millones del Condado de Cook debe gastarse de manera inteligente y transparente. Nicholas presionará por auditorías de desempeño, datos abiertos y la eliminación del gasto de patronazgo derrochador para que sus dólares de impuestos realmente le sirvan.",
    },
  },
  {
    id: "immigration-civil-rights",
    icon: "🗽",
    title: {
      en: "Immigration & Civil Rights",
      es: "Inmigración y Derechos Civiles",
    },
    summary: {
      en: "Protecting immigrant communities and defending civil rights for all Cook County residents.",
      es: "Proteger a las comunidades inmigrantes y defender los derechos civiles de todos los residentes del Condado de Cook.",
    },
    detail: {
      en: "Cook County is home to one of the most diverse populations in America. Nicholas will defend the county's welcoming ordinance, protect immigrant families, and ensure equal access to county services regardless of background.",
      es: "El Condado de Cook alberga una de las poblaciones más diversas de América. Nicholas defenderá la ordenanza de bienvenida del condado, protegerá a las familias inmigrantes y garantizará el acceso igualitario a los servicios del condado independientemente del origen.",
    },
  },
  {
    id: "reject-extremism",
    icon: "🛡️",
    title: {
      en: "Reject Right-Wing Extremism",
      es: "Rechazar el Extremismo de Derecha",
    },
    summary: {
      en: "Standing firm against extremist policies that threaten our communities and our democracy.",
      es: "Mantenerse firme contra las políticas extremistas que amenazan a nuestras comunidades y nuestra democracia.",
    },
    detail: {
      en: "From attacks on reproductive rights to book bans to undermining elections — extremism has no place in Cook County government. Nicholas will be a bulwark against radical policies and a champion for the values that make our county strong.",
      es: "Desde los ataques a los derechos reproductivos hasta la prohibición de libros y el socavamiento de las elecciones — el extremismo no tiene lugar en el gobierno del Condado de Cook. Nicholas será un baluarte contra las políticas radicales y un defensor de los valores que hacen fuerte a nuestro condado.",
    },
  },
];

export default issues;
