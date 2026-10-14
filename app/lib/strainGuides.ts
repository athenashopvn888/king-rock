import strainGuideData from "./strainGuides.json";

/** KR01 strain guides (50). Educational only: no prices, no potency numbers, no stock promises. Lineage is "commonly reported". */
export type StrainGuide = { slug: string; name: string; type: string; group: "indica" | "sativa" | "hybrid"; lineage: string; aroma: string; note: string; intro: string; about: string; tip: string; faq: { q: string; a: string }; compare: string[]; local: string; closer: string; h1: string; title: string; description: string };

export const STRAIN_GUIDE_STORE = {
  "code": "KR01",
  "name": "King Rock Cannabis",
  "domain": "www.kingrockcannabis.com",
  "street": "1220b King St W",
  "address": "1220b King St W, Toronto, ON M6K 1G4",
  "area": "King West",
  "near": "Liberty Village",
  "phone": "+1 (437) 780-9691",
  "hours": "open 24 hours daily",
  "delivery": true,
  "menuHref": "/"
} as const;

export const STRAIN_GUIDES = strainGuideData as StrainGuide[];
export const getStrainGuide = (slug: string) => STRAIN_GUIDES.find((guide) => guide.slug === slug);
