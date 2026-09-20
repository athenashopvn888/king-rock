import { STORE_NAP } from "./storeNap";

/** Listed delivery window from the live /delivery menu — not the walk-in hours lock. */
export const DELIVERY_HOURS_LABEL = "10:00 a.m.–10:00 p.m." as const;

export const PILLAR_SLUGS = {
  weedDispensary: "weed-dispensary-king-west",
  dispensary24h: "24-hour-dispensary-king-west",
  weedDelivery: "weed-delivery-king-west",
  nativeCigarettes: "native-cigarettes-king-west",
  nicotineVape: "nicotine-vapes-king-west",
} as const;

export type PillarSlug = (typeof PILLAR_SLUGS)[keyof typeof PILLAR_SLUGS];

export interface PillarFaq {
  q: string;
  a: string;
}

export interface PillarSection {
  heading: string;
  body: string;
}

export interface PillarHubCard {
  slug: PillarSlug;
  href: string;
  code: string;
  title: string;
  blurb: string;
}

export interface PillarPage {
  slug: PillarSlug;
  path: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  hoursLine: string;
  showMap: boolean;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  sections: PillarSection[];
  faqs: PillarFaq[];
}

export const PILLAR_HUB_CARDS: PillarHubCard[] = [
  {
    slug: PILLAR_SLUGS.weedDispensary,
    href: `/${PILLAR_SLUGS.weedDispensary}`,
    code: "KW",
    title: "Weed Dispensary",
    blurb: `King West / Liberty Village walk-in at ${STORE_NAP.streetAddress}. ${STORE_NAP.ageLine}.`,
  },
  {
    slug: PILLAR_SLUGS.dispensary24h,
    href: `/info/${PILLAR_SLUGS.dispensary24h}`,
    code: "24H",
    title: "24-Hour Dispensary",
    blurb: `Walk-in at ${STORE_NAP.streetAddress}. ${STORE_NAP.hoursLabel}. ${STORE_NAP.ageLine}.`,
  },
  {
    slug: PILLAR_SLUGS.weedDelivery,
    href: `/info/${PILLAR_SLUGS.weedDelivery}`,
    code: "DEL",
    title: "Weed Delivery",
    blurb: `King West / Liberty Village / Dufferin Gate scope. Delivery ${DELIVERY_HOURS_LABEL}. ${STORE_NAP.ageLine}.`,
  },
  {
    slug: PILLAR_SLUGS.nativeCigarettes,
    href: `/info/${PILLAR_SLUGS.nativeCigarettes}`,
    code: "CG",
    title: "Native Cigarettes",
    blurb: `Native cigarette brands and pack styles at the King West walk-in. ${STORE_NAP.ageLine}.`,
  },
  {
    slug: PILLAR_SLUGS.nicotineVape,
    href: `/info/${PILLAR_SLUGS.nicotineVape}`,
    code: "NV",
    title: "Nicotine Vape",
    blurb: `Nicotine vape category, kept separate from THC vape. ${STORE_NAP.ageLine}. Nicotine is addictive.`,
  },
];

export const PILLAR_OWNER: PillarPage = {
  slug: PILLAR_SLUGS.weedDispensary,
  path: `/${PILLAR_SLUGS.weedDispensary}`,
  title: "Weed Dispensary King West | King Rock",
  metaDescription:
    "Neighbourhood weed dispensary at 1220b King St W on the King / Parkdale / Queen West corridor, south of Liberty Village. Unit B at Dufferin / Atlantic. Adults 19+.",
  eyebrow: "King West / Liberty Village · Walk-in · Adults 19+",
  h1: "Weed Dispensary at King & Dufferin",
  intro:
    "King Rock Cannabis is the neighbourhood weed dispensary at 1220b King St W — unit B on the King Street West frontage at Dufferin / Atlantic. The pin sits on the King / Parkdale / Queen West corridor, south of Liberty Village. This page owns the King West shop listing. It is not a city-wide Toronto dispensary directory.",
  hoursLine: STORE_NAP.hoursLabel,
  showMap: true,
  primaryCta: { href: "/#visit", label: "Store listing & map" },
  secondaryCta: { href: "/visit", label: "How to get here" },
  sections: [
    {
      heading: "A King West walk-in, not a Toronto city page",
      body: "King Rock Cannabis is a walk-in shop at 1220b King St W, Toronto, ON M6K 1G4. Look for unit B on the 1220 King frontage. Call +1 (437) 780-9691. Adults 19+ bring government-issued photo ID. This landing is for the King / Parkdale / Queen West pinch — not a downtown-core address further east, and not a GTA-wide dispensary index. Address, hours, and the map also live on the homepage.",
    },
    {
      heading: "What the King West counter is for",
      body: "Walk in to browse posted flower tiers and format pages (pre-rolls, edibles, vapes, concentrates, accessories, cigarettes). Those pages help you plan a format. They are not a live inventory feed and this page does not invent stock or prices. If one exact item is the reason for the trip, call first. No medical claims, and no appointment.",
    },
    {
      heading: "Parkdale, Queen West, Liberty Village, Exhibition",
      body: "The door faces King Street West where Parkdale, King West, and the Dufferin walk up to Queen West meet. From Liberty Village, take Atlantic Avenue south across the pedestrian bridge. Exhibition Place and Dufferin Gate sit south of the tracks. The 504 King streetcar runs the street; the 29 / 929 Dufferin buses serve King & Dufferin. Neighbourhood cues — not a promise to cover every Toronto block.",
    },
    {
      heading: "Hours, delivery, and smoke-shop pages are separate",
      body: "Overnight and all-day walk-in details live on the 24-hour dispensary page. Neighbourhood delivery is a different URL with its own 10:00 a.m.–10:00 p.m. window. Native cigarettes and nicotine vape have their own King West landings. This page is the shop identity for the King West corridor. Extra street-level notes stay on /visit.",
    },
  ],
  faqs: [
    {
      q: "Is King Rock a weed dispensary on King West?",
      a: "Yes. King Rock Cannabis is the walk-in shop at 1220b King St W, Toronto, ON M6K 1G4 — unit B at King and Dufferin / Atlantic, on the King / Parkdale / Queen West corridor south of Liberty Village. Adults 19+.",
    },
    {
      q: "Is this a city-wide Toronto dispensary listing?",
      a: "No. This page is scoped to the King West neighbourhood pin. It does not claim downtown-core coverage, other boroughs, or a Toronto-wide dispensary directory. The archived city URL is not this page.",
    },
    {
      q: "Where do I find unit B?",
      a: "The civic address is 1220b King St W. Look for unit B on the 1220 King Street West frontage at Dufferin / Atlantic. Do not assume the first lobby on that block is the shop. Extra reach notes are on /visit.",
    },
    {
      q: "Who can walk in?",
      a: "Adults 19+ with government-issued photo ID. No appointment. The walk-in counter is open 24 hours daily. This is a retail shop, not a medical clinic.",
    },
    {
      q: "Does this page confirm a specific strain or price?",
      a: "No. Menu pages show posted details for planning. They are not a live stock feed and this page does not invent inventory or prices. Ask at the counter or call +1 (437) 780-9691 if one exact item matters.",
    },
  ],
};

export const PILLAR_24H: PillarPage = {
  slug: PILLAR_SLUGS.dispensary24h,
  path: `/info/${PILLAR_SLUGS.dispensary24h}`,
  title: "24-Hour Dispensary King West | King Rock",
  metaDescription:
    "24/7 walk-in cannabis shop at 1220b King St W on the King / Parkdale / Queen West corridor. Unit B at Dufferin / Atlantic. Adults 19+. Open 24 Hours Daily.",
  eyebrow: "King / Parkdale / Queen West · Walk-in · Adults 19+",
  h1: "24-Hour Dispensary on King West",
  intro:
    "King Rock Cannabis is the 24/7 walk-in at 1220b King St W — unit B on the King Street West frontage at Dufferin / Atlantic. The pin sits on the King / Parkdale / Queen West corridor, south of Liberty Village. This page is for overnight and all-day walk-in. It is not a city-wide Toronto delivery search.",
  hoursLine: STORE_NAP.hoursLabel,
  showMap: true,
  primaryCta: { href: "/#visit", label: "Store listing & map" },
  secondaryCta: { href: "/visit", label: "How to get here" },
  sections: [
    {
      heading: "Open 24 Hours Daily at 1220b King St W",
      body: "King Rock Cannabis is a walk-in shop at 1220b King St W, Toronto, ON M6K 1G4. Look for unit B on the 1220 King frontage. Call +1 (437) 780-9691. Adults 19+ bring government-issued photo ID. No appointment. Store hours are Open 24 Hours Daily — a King West pin fact, not a city-wide slogan. Address, 24/7 hours, and the map live on the homepage.",
    },
    {
      heading: "King, Parkdale, and Queen West on the same pinch",
      body: "The door is on King Street West where Parkdale, King West, and the Dufferin walk up to Queen West meet. From Parkdale, stay on King or come east to Dufferin. From Queen West at Dufferin, walk south on Dufferin to King, then look for unit B. From Liberty Village, take Atlantic Avenue south across the pedestrian bridge. The 504 King streetcar runs the street; the 29 / 929 Dufferin buses serve King & Dufferin. This is a corridor walk-in, not a downtown core address further east.",
    },
    {
      heading: "Overnight walk-in is the same door",
      body: "Late 504, after a show at Exhibition Place, or a middle-of-the-night hop from the strip — the civic address does not change. Debit and cash are the listed in-store payments. Flower tiers and format pages (pre-rolls, edibles, vapes, concentrates, accessories, cigarettes) are for browsing posted details. They are not a live inventory feed. If one exact item is the reason for the trip, call first.",
    },
    {
      heading: "Delivery is a different URL and a different window",
      body: "Walk-in at 1220b King St W stays 24/7. Neighbourhood weed delivery is a separate landing page and menu, with a listed delivery window of 10:00 a.m.–10:00 p.m. The dispatcher confirms whether an address is in range. Do not treat overnight walk-in as overnight delivery.",
    },
  ],
  faqs: [
    {
      q: "Is King Rock actually open 24 hours?",
      a: "Yes. The walk-in at 1220b King St W, Toronto, ON M6K 1G4 is open 24 hours daily. No appointment. Adults 19+ with government-issued photo ID.",
    },
    {
      q: "How do I reach the 24-hour shop from Parkdale or Queen West?",
      a: "From Parkdale, stay on King Street West toward Dufferin / Atlantic and look for unit B on the 1220 block. From Queen West at Dufferin, walk south on Dufferin to King. The 504 King streetcar and 29 / 929 Dufferin buses serve the pinch. Extra street-level notes are on /visit.",
    },
    {
      q: "Do I need an appointment overnight?",
      a: "No. Walk-in only. Bring government-issued photo ID that proves you are 19 or older.",
    },
    {
      q: "Can I get weed delivery at 3 a.m.?",
      a: "No. Delivery has its own listed window: 10:00 a.m.–10:00 p.m. Overnight is walk-in at 1220b King St W. Use the weed delivery landing page and /delivery for the neighbourhood delivery menu.",
    },
    {
      q: "Does this page confirm a specific strain or price?",
      a: "No. Menu pages show posted details for planning. They are not a live stock feed and this page does not invent inventory or prices. Ask at the counter or call +1 (437) 780-9691 if one exact item matters.",
    },
  ],
};

export const PILLAR_DELIVERY: PillarPage = {
  slug: PILLAR_SLUGS.weedDelivery,
  path: `/info/${PILLAR_SLUGS.weedDelivery}`,
  title: "Weed Delivery King West | King Rock",
  metaDescription:
    "Neighbourhood cannabis delivery from King Rock for King West, Liberty Village, Exhibition Place, and the Dufferin Gate / Parkdale edge. Adults 19+. Delivery 10:00 a.m.–10:00 p.m. Walk-in is 24/7.",
  eyebrow: "Neighbourhood delivery · Adults 19+ · Not city-wide",
  h1: "Weed Delivery for King West & Liberty Village",
  intro:
    "King Rock runs neighbourhood-scoped cannabis delivery from the King West pin — not a city-wide Toronto delivery warehouse. Listed range is King West, Liberty Village, Exhibition Place, and the Dufferin Gate / Parkdale edge. The dispatcher confirms whether an address is in range. Walk-in at 1220b King St W stays Open 24 Hours Daily.",
  hoursLine: `Delivery ${DELIVERY_HOURS_LABEL}`,
  showMap: false,
  primaryCta: { href: "/delivery", label: "Open delivery menu" },
  secondaryCta: { href: "/#visit", label: "24/7 walk-in pin" },
  sections: [
    {
      heading: "Neighbourhood delivery, not a city-wide war",
      body: "Delivery from King Rock is scoped to King West, Liberty Village, Exhibition Place, and the Dufferin Gate / Parkdale edge. That is the King / Parkdale corridor around 1220b King St W — not downtown core coverage and not a GTA-wide promise. If you are on Queen West near Dufferin, the dispatcher still confirms the address before a run is booked. Adults 19+.",
    },
    {
      heading: "Delivery hours are not the walk-in hours",
      body: "The listed delivery window is 10:00 a.m.–10:00 p.m. The walk-in counter at 1220b King St W is Open 24 Hours Daily. If you need the shop after the delivery window, come to unit B. Do not assume a driver is out overnight.",
    },
    {
      heading: "How to order",
      body: "Open the delivery menu, note product names and weights, then use LIVE ORDER to reach the King Rock dispatcher. New customers complete private selfie-with-ID verification in Web Chat. Availability, range, and next steps are confirmed there. This landing page does not reserve an item.",
    },
    {
      heading: "Listed delivery terms",
      body: "The delivery menu lists a $60 product minimum and a $10 delivery fee. Those figures live on /delivery and can be updated there. This page does not add extra prices, hidden ounces, or a second inventory. Flower names on the delivery menu are for browsing — the dispatcher confirms what can go out.",
    },
  ],
  faqs: [
    {
      q: "Where does King Rock deliver?",
      a: "Listed scope is King West, Liberty Village, Exhibition Place, and the Dufferin Gate / Parkdale edge. It is not city-wide Toronto coverage. The dispatcher confirms whether your address is in range.",
    },
    {
      q: "What are the delivery hours?",
      a: "Delivery is listed 10:00 a.m.–10:00 p.m. Walk-in at 1220b King St W is open 24 hours daily. Those are two different clocks.",
    },
    {
      q: "I am on Queen West — can I get a drop?",
      a: "Queen West at Dufferin is on the same corridor as the shop. The dispatcher still confirms the address. This is not a promise to cover every Queen West block east toward downtown.",
    },
    {
      q: "How do I place a delivery order?",
      a: "Use /delivery to browse the neighbourhood delivery menu, then LIVE ORDER to chat with the dispatcher. Adults 19+ complete ID verification in Web Chat.",
    },
    {
      q: "Does this page list live stock or prices?",
      a: "No. Posted delivery-menu names and the listed $60 minimum / $10 fee live on /delivery. This page does not invent inventory or extra prices.",
    },
  ],
};

export const CONTENT_PILLARS: PillarPage[] = [PILLAR_OWNER, PILLAR_24H, PILLAR_DELIVERY];

export function getPillarBySlug(slug: string) {
  return CONTENT_PILLARS.find((page) => page.slug === slug);
}

export function pillarCanonical(page: Pick<PillarPage, "path"> | PillarSlug) {
  const path = typeof page === "string" ? `/info/${page}` : page.path;
  return `${STORE_NAP.origin}${path}`;
}
