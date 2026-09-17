/** Single source of KR01 NAP, hours, and King West / Liberty Village copy. */

export const STORE_NAP = {
  name: "King Rock Cannabis",
  shortName: "King Rock",
  domain: "www.kingrockcannabis.com",
  origin: "https://www.kingrockcannabis.com",
  streetAddress: "1220b King St W",
  addressLocality: "Toronto",
  addressRegion: "ON",
  postalCode: "M6K 1G4",
  addressCountry: "CA",
  addressLine: "1220b King St W, Toronto, ON M6K 1G4",
  phoneDisplay: "+1 (437) 780-9691",
  phoneIntl: "+14377809691",
  hoursLabel: "Open 24 Hours Daily",
  hoursShort: "24/7",
  hoursOpens: "00:00",
  hoursCloses: "23:59",
  latitude: 43.6388839,
  longitude: -79.428146,
  neighborhood: "King West / Liberty Village",
  corridor: "King Street West, Liberty Village, and the Exhibition edge",
  intersection: "King Street West & Dufferin Street / Atlantic Avenue",
  unitNote: "Look for unit B on the 1220 King Street West frontage",
  ageLine: "Adults 19+",
  image:
    "https://www.kingrockcannabis.com/wp-content/uploads/2026/04/7Clmh.jpg",
  mapSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=1220b+King+St+W,+Toronto,+ON+M6K+1G4",
  mapEmbedUrl:
    "https://www.google.com/maps?q=1220b+King+St+W,+Toronto,+ON+M6K+1G4&output=embed",
} as const;

export const PRIMARY_HOST = STORE_NAP.domain;
export const LEGACY_HOSTS = [
  "kingrockcannabis.ca",
  "www.kingrockcannabis.ca",
  "kingrockcannabis.com",
] as const;

export const HOME_TITLE = "King Rock | King West & Liberty Village Cannabis";
export const HOME_DESCRIPTION =
  "Walk-in cannabis dispensary at 1220b King St W for King West and Liberty Village. Unit B on King. Adults 19+. Open 24 Hours Daily. Call +1 (437) 780-9691.";

/** GBP website for this single-location domain is always the homepage — never /visit. */
export const GBP_WEBSITE = STORE_NAP.origin;

/** Visible homepage FAQs — FAQPage JSON-LD must stay in lockstep with these strings. */
export const HOME_FAQS = [
  {
    q: "What are the hours for King Rock on King West?",
    a: "King Rock Cannabis at 1220b King St W is open 24 hours daily. Walk in — no appointment. Adults 19+ must bring government-issued photo ID.",
  },
  {
    q: "Where is King Rock relative to Liberty Village?",
    a: "The shop is at 1220b King St W, Toronto, ON M6K 1G4, on King Street West at the Dufferin / Atlantic pinch. From Liberty Village, walk south on Atlantic Avenue across the pedestrian bridge over the rail corridor, then a short hop to King. Call +1 (437) 780-9691. Address, 24/7 hours, and the map are on this homepage. Extra street-level notes are on the supporting /visit page.",
  },
  {
    q: "What can I browse before a King West walk-in?",
    a: "The public menu is split into flower tiers (Exotic, Premium, AAA+, AA, Budget) plus category pages for edibles, pre-rolls, vapes, concentrates, accessories, and cigarettes. Pages are for browsing posted details, not a live stock feed. Ask at the counter or call if one exact item is the reason for the trip.",
  },
  {
    q: "Do you run city-wide Toronto cannabis delivery from this pin?",
    a: "No. Walk-in at 1220b King St W is the neighbourhood job, and that counter is open 24/7. Delivery is a separate URL with King West / Liberty Village / Exhibition / Dufferin Gate scope and its own listed delivery window. The dispatcher confirms whether an address is in range. Adults 19+.",
  },
] as const;

export const VISIT_FAQS = [
  {
    q: "What is the nearest intersection, and how do I find unit B?",
    a: "Plan around King Street West and Dufferin Street / Atlantic Avenue. The civic address is 1220b King St W, Toronto, ON M6K 1G4 — unit B on the 1220 King frontage. Do not assume the first lobby on that block is the shop; look for the B unit.",
  },
  {
    q: "Which TTC routes are useful for a King West / Liberty Village visit?",
    a: "The 504 King streetcar runs along King Street West past the door. The 29 / 929 Dufferin buses serve King & Dufferin. From Liberty Village, walk Atlantic Avenue south across the pedestrian bridge, then continue to King. Exhibition GO and Dufferin Gate Loop are planning landmarks south of the rail corridor — useful transfers, not the storefront. Check current TTC and GO service before you travel.",
  },
  {
    q: "Where should I park?",
    a: "Paid street parking on King Street West is the curb pattern. Never stop on streetcar tracks or in bike lanes. When King West nightlife fills the frontage, loop Liberty Village Green P and side streets around Atlantic, Hanna, East Liberty, and Jefferson instead of circling the same King block. Read posted signs; restrictions change by hour.",
  },
  {
    q: "What should I bring?",
    a: "Government-issued photo ID proving you are 19 or older. Debit and cash are the listed in-store payment methods. No appointment. The walk-in counter is open 24 hours daily. If you need one specific product, call +1 (437) 780-9691 first.",
  },
] as const;

export function cannabisStoreJsonLd() {
  const nap = STORE_NAP;
  return {
    "@context": "https://schema.org",
    "@type": "CannabisStore",
    "@id": `${nap.origin}/#store`,
    name: nap.name,
    description:
      "Walk-in cannabis dispensary on King West / Liberty Village at 1220b King St W (unit B). Adults 19+. Open 24 Hours Daily.",
    url: nap.origin,
    telephone: nap.phoneIntl,
    image: nap.image,
    priceRange: "$3 - $12/g",
    address: {
      "@type": "PostalAddress",
      streetAddress: nap.streetAddress,
      addressLocality: nap.addressLocality,
      addressRegion: nap.addressRegion,
      postalCode: nap.postalCode,
      addressCountry: nap.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: nap.latitude,
      longitude: nap.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: nap.hoursOpens,
        closes: nap.hoursCloses,
      },
    ],
    hasMap: nap.mapSearchUrl,
    areaServed: [
      { "@type": "Place", name: "King West" },
      { "@type": "Place", name: "Liberty Village" },
      { "@type": "Place", name: "Exhibition Place" },
    ],
  };
}

export function faqPageJsonLd(
  faqs:
    | readonly { q: string; a: string }[]
    | readonly { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => {
      const name = "q" in faq ? faq.q : faq.question;
      const text = "a" in faq ? faq.a : faq.answer;
      return {
        "@type": "Question",
        name,
        acceptedAnswer: {
          "@type": "Answer",
          text,
        },
      };
    }),
  };
}
