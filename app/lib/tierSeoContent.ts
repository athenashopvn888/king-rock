export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed & Cannabis Flower in Toronto | King Rock",
    seoIntro: "King Rock gives Exotic a dedicated place within its cannabis flower structure. This page stays focused on the Exotic tier while the established Weed Dispensary in Toronto page continues to serve broader Weed intent.",
    sections: [
      { heading: "Exotic as a Distinct Flower Tier", body: "The Exotic page separates this category from Premium, AAA+, AA and Budget so it has a clear role of its own within the King Rock site." },
      { heading: "How Exotic Fits the King Rock Structure", body: "King Rock uses separate tier pages to organize flower into focused category paths. Exotic remains one narrow part of that structure rather than replacing the broader Weed owner." },
    ],
    faqs: [
      { q: "What is the Exotic tier at King Rock?", a: "Exotic is one of King Rock's dedicated cannabis flower tiers." },
      { q: "Is this King Rock's main Weed page?", a: "No. This page is specific to Exotic, while the Weed Dispensary in Toronto page remains the broader Weed destination." },
      { q: "What other flower tiers have dedicated pages?", a: "King Rock also separates Premium, AAA+, AA and Budget into their own tier pages." },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Weed & Cannabis Flower in Toronto | King Rock",
    seoIntro: "The Premium page gives King Rock a dedicated destination for Premium weed and cannabis flower. It remains intentionally narrower than the site's broad Weed owner and serves only this individual flower tier.",
    sections: [
      { heading: "A Focused Premium Flower Category", body: "Premium is organized separately from Exotic, AAA+, AA and Budget so the category keeps a distinct place within the King Rock flower structure." },
      { heading: "Premium Within King Rock's Tier System", body: "Separate tier pages help keep each flower category clearly defined. The Premium page supports that narrow role while broader Weed intent remains with the main Weed owner." },
    ],
    faqs: [
      { q: "What is the Premium tier at King Rock?", a: "Premium is one of King Rock's dedicated cannabis flower tiers." },
      { q: "Does the Premium page replace the broad Weed page?", a: "No. It serves tier-specific intent only." },
      { q: "Which other flower tiers can be explored separately?", a: "Exotic, AAA+, AA and Budget each have their own tier pages." },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Weed & Cannabis Flower in Toronto | King Rock",
    seoIntro: "King Rock uses a dedicated AAA+ page so this flower tier has a clear place within the site's larger cannabis architecture. The page stays specific to AAA+ and remains subordinate to the broader Weed owner.",
    sections: [
      { heading: "AAA+ as Its Own Flower Tier", body: "AAA+ is separated from Exotic, Premium, AA and Budget so the category can stand on its own without blending into the site's broader Weed topic." },
      { heading: "AAA+ in King Rock's Flower Architecture", body: "The AAA+ page is one focused destination within King Rock's tier system. General Weed discovery continues to belong to the established broad owner." },
    ],
    faqs: [
      { q: "What is AAA+ on the King Rock site?", a: "AAA+ is the name of one of King Rock's dedicated cannabis flower tiers." },
      { q: "Why does AAA+ have its own page?", a: "The separate page keeps AAA+-specific flower browsing distinct from the other tiers." },
      { q: "What other tier pages exist?", a: "King Rock also has dedicated pages for Exotic, Premium, AA and Budget." },
    ],
  },
  AA: {
    seoTitle: "AA Weed & Cannabis Flower in Toronto | King Rock",
    seoIntro: "The AA page gives King Rock a focused destination for the AA cannabis flower tier. It stays narrow so the protected Weed Dispensary in Toronto page can continue to own broader Weed intent.",
    sections: [
      { heading: "AA as a Separate Flower Category", body: "AA is organized as its own tier rather than being combined with Exotic, Premium, AAA+ or Budget." },
      { heading: "AA Within King Rock's Tier Structure", body: "The AA page serves one specific role within King Rock's flower architecture while broader Weed discovery remains with the main owner page." },
    ],
    faqs: [
      { q: "What is the AA tier at King Rock?", a: "AA is one of King Rock's dedicated cannabis flower tiers." },
      { q: "Is the AA page intended for broad Weed searches?", a: "No. It is a narrow tier page and remains subordinate to the broader Weed owner." },
      { q: "Which other flower tiers have their own pages?", a: "Exotic, Premium, AAA+ and Budget also have dedicated pages." },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Weed & Cannabis Flower in Toronto | King Rock",
    seoIntro: "King Rock uses Budget as a dedicated cannabis flower tier within its existing site structure. The page identifies the category only and does not make claims about current prices, promotions, products or availability.",
    sections: [
      { heading: "A Dedicated Budget Flower Tier", body: "Budget is separated from Exotic, Premium, AAA+ and AA so it has a defined place within the King Rock flower structure." },
      { heading: "Budget Within King Rock's Flower System", body: "The Budget page serves a narrow category purpose within the wider flower architecture. Broader Weed intent remains with the established Weed Dispensary in Toronto page." },
    ],
    faqs: [
      { q: "What is the Budget tier at King Rock?", a: "Budget is the name of one of King Rock's dedicated cannabis flower tiers." },
      { q: "Does the Budget label confirm a current price or promotion?", a: "No. The tier name identifies the category and does not establish a current price, deal or promotion." },
      { q: "Which other King Rock flower tiers have their own pages?", a: "Separate pages also exist for Exotic, Premium, AAA+ and AA." },
    ],
  },
};

export const TIER_META_DESCRIPTION: Record<string, string> = {
  EXOTIC: "Explore the Exotic weed and cannabis flower tier at King Rock in Toronto as a focused category within its existing flower structure.",
  PREMIUM: "Explore the Premium weed and cannabis flower tier at King Rock in Toronto within its existing flower category architecture.",
  "AAA+": "Explore the AAA+ weed and cannabis flower tier at King Rock in Toronto as a dedicated part of its flower structure.",
  AA: "Explore the AA weed and cannabis flower tier at King Rock in Toronto through its dedicated flower category page.",
  BUDGET: "Explore the Budget cannabis flower tier at King Rock in Toronto without implying current prices, promotions or availability.",
};

export const TIER_H1: Record<string, string> = {
  EXOTIC: "Exotic Weed & Cannabis Flower in Toronto",
  PREMIUM: "Premium Weed & Cannabis Flower in Toronto",
  "AAA+": "AAA+ Weed & Cannabis Flower in Toronto",
  AA: "AA Weed & Cannabis Flower in Toronto",
  BUDGET: "Budget Weed & Cannabis Flower in Toronto",
};
