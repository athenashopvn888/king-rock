export interface SeoPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  banner?: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  suppressTierGrid?: boolean;
}

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "24-hour-dispensary-king-west",
    title: "24-Hour Dispensary King West | King Rock",
    metaDescription:
      "24/7 walk-in cannabis shop at 1220b King St W on the King / Parkdale / Queen West corridor. Adults 19+. Open 24 Hours Daily.",
    h1: "24-Hour Dispensary on King West",
    icon: "*",
    heroTagline: "Walk-in at 1220b King St W — Open 24 Hours Daily",
    suppressTierGrid: true,
    sections: [
      {
        heading: "Open 24 Hours Daily",
        body: "King Rock Cannabis at 1220b King St W is a 24/7 walk-in on the King / Parkdale / Queen West corridor. Adults 19+. Extra directions: /visit.",
      },
    ],
    faqs: [
      {
        q: "Is the shop open overnight?",
        a: "Yes. Walk-in at 1220b King St W is open 24 hours daily.",
      },
    ],
  },
  {
    slug: "weed-delivery-king-west",
    title: "Weed Delivery King West | King Rock",
    metaDescription:
      "Neighbourhood cannabis delivery from King Rock for King West, Liberty Village, Exhibition Place, and the Dufferin Gate / Parkdale edge. Adults 19+.",
    h1: "Weed Delivery for King West & Liberty Village",
    icon: "*",
    heroTagline: "Neighbourhood delivery — not city-wide Toronto",
    suppressTierGrid: true,
    sections: [
      {
        heading: "Neighbourhood delivery window",
        body: "Delivery is listed 10:00 a.m.–10:00 p.m. Walk-in stays Open 24 Hours Daily. The dispatcher confirms whether an address is in range. Use /delivery for the menu.",
      },
    ],
    faqs: [
      {
        q: "Is delivery 24/7?",
        a: "No. Delivery is listed 10:00 a.m.–10:00 p.m. Walk-in at 1220b King St W is 24/7.",
      },
    ],
  },
  {
    slug: "king-west-weed-dispensary",
    title: "King West Weed Dispensary | How to Reach King Rock",
    metaDescription:
      "How to reach King Rock Cannabis at 1220b King St W: King West / Liberty Village walk-in, 504 King, unit B, parking, and 19+ ID. Open 24 Hours Daily.",
    h1: "King West Walk-In Dispensary at 1220b King St W",
    icon: "*",
    heroTagline: "How to reach King Rock on King West / Liberty Village",
    suppressTierGrid: true,
    sections: [
      {
        heading: "The door is on King, unit B",
        body: "King Rock Cannabis is the walk-in shop at 1220b King St W, Toronto, ON M6K 1G4. Look for unit B on the 1220 King frontage at Dufferin / Atlantic. Call +1 (437) 780-9691. Adults 19+. Open 24 Hours Daily.",
      },
      {
        heading: "Transit and the Liberty Village hop",
        body: "Ride the 504 King streetcar along King Street West, take the 29 / 929 Dufferin buses to King & Dufferin, or walk Atlantic Avenue south across the pedestrian bridge from Liberty Village. Exhibition GO and Dufferin Gate Loop are transfer landmarks south of the tracks. Check current TTC conditions. NAP, hours, and the map are on the homepage. /visit is the supporting reach guide.",
      },
      {
        heading: "Parking without blocking the streetcar",
        body: "Paid street parking on King Street West is the usual curb pattern. Read posted signs. When King West nightlife or an Exhibition event fills the frontage, loop Liberty Village Green P around Atlantic, Hanna, East Liberty, or Jefferson. No dedicated lot is claimed here.",
      },
      {
        heading: "Browse categories, then confirm at the counter",
        body: "Flower tiers and format pages (pre-rolls, edibles, vapes, concentrates, accessories, cigarettes) are for planning. They are not a live inventory feed. If one exact item is the reason for the trip, call during listed hours: Open 24 Hours Daily.",
      },
    ],
    faqs: [
      { q: "Where is the King West shop?", a: "1220b King St W, Toronto, ON M6K 1G4, unit B, near King and Dufferin / Atlantic." },
      { q: "Is this a walk-in or a delivery page?", a: "This page is for the 24/7 walk-in pin. The store listing is the homepage. Delivery is a separate neighbourhood-scoped URL. Extra directions: /visit." },
    ],
  },
  {
    slug: "cheap-weed-king-west",
    title: "Value Weed King West | King Rock",
    metaDescription: "Compare posted flower tiers and menu prices at King Rock Cannabis, 1220b King St W on King West / Liberty Village.",
    h1: "Value Weed Near King West",
    icon: "*",
    heroTagline: "Compare posted flower tiers and menu prices",
    sections: [
      { heading: "Compare The Flower Tiers", body: "Compare posted weights and prices across Exotic, Premium, AAA+, AA and Budget flower at the King West walk-in." },
      { heading: "Confirm Current Details", body: "Check current listings or ask staff at 1220b King St W when one exact item matters. Open 24 Hours Daily." },
    ],
    faqs: [
      { q: "Where is King Rock?", a: "King Rock Cannabis is at 1220b King St W in Toronto, unit B on King West." },
      { q: "How can I review the menu?", a: "Use the flower tier and category pages to compare the current public menu before visiting." },
    ],
  },
  {
    slug: "native-cigarettes-king-west",
    title: "Native Cigarettes King West | King Rock",
    metaDescription: "Native cigarette brands and pack styles near King West at King Rock Cannabis, 1220b King St W.",
    h1: "Native Cigarettes Near King West",
    icon: "*",
    heroTagline: "Native cigarette brands and pack styles near King West",
    sections: [
      { heading: "Native Cigarette Brands And Prices", body: "Compare the listed cigarette brands, styles and prices from King Rock at 1220b King St W." },
      { heading: "King Street West Smoke-Shop Selection", body: "Look for listed full, light and menthol choices near Liberty Village." },
    ],
    faqs: [
      { q: "Where is King Rock?", a: "King Rock Cannabis is at 1220b King St W in Toronto." },
      { q: "How can I review the menu?", a: "Use the flower tier and category pages to compare the current public menu before visiting." },
    ],
  },
  {
    slug: "weed-store-near-liberty-village",
    title: "Weed Store Near Liberty Village | How to Reach King Rock",
    metaDescription: "Walk from Liberty Village to King Rock Cannabis at 1220b King St W: Atlantic Avenue bridge, 504 King, unit B, parking. Open 24 Hours Daily.",
    h1: "Weed Store Near Liberty Village at 1220b King",
    icon: "*",
    heroTagline: "How to reach King Rock from Liberty Village",
    suppressTierGrid: true,
    sections: [
      {
        heading: "King Street West location",
        body: "King Rock Cannabis is at 1220b King St W, Toronto, ON M6K 1G4 — unit B on King West, south of the Liberty Village rail cut. Adults 19+. Open 24 Hours Daily.",
      },
      {
        heading: "How to actually get here",
        body: "Walk Atlantic Avenue south across the pedestrian bridge, then continue to King. Or ride the 504 King streetcar. Address, 24/7 hours, and the map are on the homepage. Use /visit for extra parking, Dufferin Gate notes, and 19+ ID. Category pages help you plan a format; they do not reserve a jar.",
      },
    ],
    faqs: [
      { q: "How do I walk from Liberty Village?", a: "Take Atlantic Avenue south across the pedestrian bridge over the rail corridor, then a short hop to King Street West and look for unit B at 1220." },
      { q: "Is the shop open overnight?", a: "Yes. Walk-in at 1220b King St W is open 24 hours daily." },
    ],
  },
  {
    slug: "dispensary-near-me-king-west",
    title: "Dispensary Near Me King West | King Rock",
    metaDescription: "Store details and current menu navigation for King Rock Cannabis at 1220b King St W on King West.",
    h1: "Dispensary Near Me On King West",
    icon: "*",
    heroTagline: "Store details and current menu navigation",
    sections: [
      { heading: "Start With Store Details", body: "Check 1220b King St W and 24-hour hours on the homepage, then choose a menu category. Extra how-to-reach notes are on /visit." },
      { heading: "Use Current Menu Pages", body: "Confirm an exact item through the current menu or with staff. Pages are not a live stock feed." },
    ],
    faqs: [
      { q: "Where is King Rock?", a: "King Rock Cannabis is at 1220b King St W in Toronto." },
      { q: "How can I review the menu?", a: "Use the flower tier and category pages to compare the current public menu before visiting." },
    ],
  },
  {
    slug: "nicotine-vapes-king-west",
    title: "Nicotine Vapes King West | King Rock",
    metaDescription: "Nicotine vape devices, flavours and prices from King Rock Cannabis on King West / Liberty Village.",
    h1: "Nicotine Vapes Near King West",
    icon: "*",
    heroTagline: "Nicotine vape devices, flavours and prices from King Rock",
    sections: [
      { heading: "Nicotine Vape Selection", body: "King Rock lists nicotine vape devices, flavours, formats, puff counts and prices." },
      { heading: "Compare Devices Near Liberty Village", body: "Review the listed format, flavour, puff count and price before a King Street West visit." },
      { heading: "24/7 King West Shopping", body: "Visit King Rock at 1220b King St W any hour — Open 24 Hours Daily." },
    ],
    faqs: [
      { q: "Where is King Rock?", a: "King Rock Cannabis is at 1220b King St W in Toronto." },
      { q: "How can I review the menu?", a: "Use the flower tier and category pages to compare the current public menu before visiting." },
    ],
  },
];

export function getSeoPageBySlug(slug: string) {
  return SEO_PAGES.find((p) => p.slug === slug);
}
