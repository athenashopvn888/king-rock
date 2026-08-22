/* -- Product & Item Types -- */
export interface FlowerProduct {
  sku: string;
  name: string;
  slug: string;
  tier: string;
  type: "indica" | "sativa" | "hybrid";
  isHot: boolean;
  isSale: boolean;
  thc: string;
  price3g: PricePoint | null;
  price5g: PricePoint | null;
  price14g: PricePoint | null;
  price28g: PricePoint | null;
  image: string;
}

export interface PricePoint {
  regular: number;
  sale: number | null;
}

export interface ItemProduct {
  sku: string;
  name: string;
  slug: string;
  category: string;
  type: string;
  thc: string;
  mg: string;
  price: string;
  image: string;
  promoImage: string | null;
}

/* Data imports (static fallback) */
import flowersJson from "./flowers.json";
import itemsJson from "./items.json";

export const allFlowers: FlowerProduct[] = flowersJson as FlowerProduct[];
export const allItems: ItemProduct[] = itemsJson as ItemProduct[];

/* Live stock fetch from Apps Script */
const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || "";

interface LiveStockResponse {
  flowers: FlowerProduct[];
  items: ItemProduct[];
  storeCode?: string;
  stockDate?: string;
}

/**
 * Fetch live stock-filtered products from Apps Script endpoint.
 * Used at build time (getStaticProps / generateStaticParams).
 * Falls back to static JSON if endpoint not configured.
 */
export async function fetchLiveProducts(): Promise<{
  flowers: FlowerProduct[];
  items: ItemProduct[];
  isLive: boolean;
  stockDate: string | null;
}> {
  if (!APPS_SCRIPT_URL) {
    return {
      flowers: allFlowers,
      items: allItems,
      isLive: false,
      stockDate: null,
    };
  }

  try {
    const res = await fetch(`${APPS_SCRIPT_URL}?store=KR01`, {
      next: { revalidate: 300 }, // Cache for 5 min during build
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: LiveStockResponse = await res.json();
    return {
      flowers: data.flowers || allFlowers,
      items: data.items || allItems,
      isLive: true,
      stockDate: data.stockDate || null,
    };
  } catch (err) {
    console.warn("[products] Live fetch failed, using static data:", err);
    return {
      flowers: allFlowers,
      items: allItems,
      isLive: false,
      stockDate: null,
    };
  }
}

export const TIER_CONFIG: Record<
  string,
  {
    name: string;
    slug: string;
    color: string;
    icon: string;
    tagline: string;
    banner: string;
    unitPrice: number /* $/g */;
    deal3g: {
      label: string;
      total: string;
      price: number;
    } | null /* 3g bundle pricing */;
    deal6g: {
      label: string;
      total: string;
      price: number;
    } | null /* 6g bundle pricing (top 3 only) */;
  }
> = {
  EXOTIC: {
    name: "Exotic",
    slug: "exotic",
    color: "#f59e0b",
    icon: "\uD83D\uDD25",
    tagline: "Explore the current Exotic flower menu",
    banner: "/banners/exotics_banner.webp",
    unitPrice: 20,
    deal3g: { label: "3g bundle", total: "3G", price: 40 },
    deal6g: { label: "6g bundle", total: "6G", price: 60 },
  },
  PREMIUM: {
    name: "Premium",
    slug: "premium",
    color: "#a78bfa",
    icon: "\uD83D\uDC8E",
    tagline: "Explore the current Premium flower menu",
    banner: "/banners/premium_banner.webp",
    unitPrice: 15,
    deal3g: { label: "3g bundle", total: "3G", price: 30 },
    deal6g: { label: "6g bundle", total: "6G", price: 45 },
  },
  "AAA+": {
    name: "AAA+",
    slug: "aaa",
    color: "#22d3ee",
    icon: "\u26A1",
    tagline: "Explore the current AAA+ flower menu",
    banner: "/banners/aaa_plus_banner.webp",
    unitPrice: 10,
    deal3g: { label: "3g bundle", total: "3G", price: 20 },
    deal6g: { label: "6g bundle", total: "6G", price: 30 },
  },
  AA: {
    name: "AA",
    slug: "aa",
    color: "#34d399",
    icon: "\u2726",
    tagline: "Explore the current AA flower menu",
    banner: "/banners/aa_banner.webp",
    unitPrice: 4,
    deal3g: null,
    deal6g: null,
  },
  BUDGET: {
    name: "Budget",
    slug: "budget",
    color: "#94a3b8",
    icon: "\uD83D\uDCB0",
    tagline: "Shreds & value OZs \u00B7 From $40/oz",
    banner: "/banners/budget_banner.webp",
    unitPrice: 3,
    deal3g: { label: "$10 / 3g Special", total: "3G", price: 10 },
    deal6g: null,
  },
};

/* Item category config */
export interface CategoryInfo {
  name: string;
  slug: string;
  color: string;
  icon: string;
  banner?: string;
  seoTitle: string;
  seoIntro: string;
  seoDescription: string;
  faqs: { q: string; a: string }[];
}

export const CATEGORY_CONFIG: Record<string, CategoryInfo> = {
  EDIBLES: {
    banner: "/banners/edibles_prerolls_more_banner.webp",
    name: "Edibles",
    slug: "edibles",
    color: "#f97316",
    icon: "🍬",
    seoTitle: "Cannabis Edibles Toronto Gummies, Chocolates & Drinks",
    seoIntro:
      "Browse the full cannabis edibles menu at King Rock on King St W, Toronto. We carry THC gummies, chocolates, drinks, and more from current menu brands.",
    seoDescription:
      "Browse cannabis edibles such as THC-infused gummies, chocolates, beverages, and baked goods on the current King Rock menu. Visit us at 1220b King St W; we are open daily: 10:00 AM - 01:00 AM.",
    faqs: [
      {
        q: "What cannabis edibles do you carry?",
        a: "We stock THC gummies, chocolates, beverages, capsules, and baked goods from current menu brands. Potencies range from 10mg to 1000mg+ THC.",
      },
      {
        q: "How long do edibles take to kick in?",
        a: "Product labels provide item-specific information. Ask store staff if you need help finding those details on the package.",
      },
      {
        q: "Can I buy edibles at King Rock?",
        a: "Yes! Visit us at 1220b King St W, Toronto. We're open daily from 10:00 AM to 01:00 AM with a full edibles selection in store.",
      },
    ],
  },
  "VAPE PENS": {
    banner: "/banners/01_Vape_Pens.webp",
    name: "Nic Vape",
    slug: "vapes",
    color: "#8b5cf6",
    icon: "NV",
    seoTitle: "Nicotine Vape Menu King West",
    seoIntro: "Browse nicotine vape devices, formats, flavours, puff counts and listed prices at King Rock.",
    seoDescription: "Compare nicotine vape devices, formats, flavours, puff counts and listed prices at King Rock, 1220b King St W.",
    faqs: [
      { q: "What nicotine vape details are available?", a: "Compare listed device formats, flavours, puff counts and prices before visiting King Rock." },
      { q: "Can I compare nicotine vape prices online?", a: "Yes. Current listings show available product details and posted prices for King West shoppers." },
    ],
  },
  "VAPE DISPOSABLE": {
    banner: "/banners/02_Vape_Disposable.webp",
    name: "THC Vape",
    slug: "vape-disposables",
    color: "#a78bfa",
    icon: "V",
    seoTitle: "THC Vape Menu King West",
    seoIntro: "Browse THC vape products and listed prices at King Rock.",
    seoDescription: "Compare listed THC vape products, formats and prices from King Rock at 1220b King St W near Liberty Village.",
    faqs: [
      { q: "What THC vape details are available?", a: "Compare listed product names, formats and prices before visiting King Rock." },
      { q: "Can I compare THC vape prices online?", a: "Yes. Current listings show available product details and posted prices for King West shoppers." },
    ],
  },
  CONCENTRATES: {
    banner: "/banners/03_Concentrates.webp",
    name: "Concentrates",
    slug: "concentrates",
    color: "#f59e0b",
    icon: "💎",
    seoTitle: "Cannabis Concentrates Toronto Shatter, Wax, Hash & Live Resin",
    seoIntro:
      "Cannabis concentrates at King Rock, Toronto. Shatter, wax, hash, live resin, and diamonds listed when listed on the menu.",
    seoDescription:
      "Browse the current King Rock concentrates menu for categories such as hash, kief, shatter, wax, live resin, and THC diamonds. Visit us at 1220b King St W.",
    faqs: [
      {
        q: "What types of concentrates do you carry?",
        a: "We stock shatter, wax, budder, live resin, rosin, hash, kief, and THC diamonds from top Canadian extractors.",
      },
      {
        q: "How do I consume concentrates?",
        a: "The menu groups concentrates by product type. Ask store staff if you need help comparing the listed formats.",
      },
    ],
  },
  PREROLLS: {
    banner: "/banners/04_Pre_Rolls.webp",
    name: "Pre-Rolls",
    slug: "prerolls",
    color: "#22c55e",
    icon: "🚬",
    seoTitle: "Pre-Rolls Toronto Ready-to-Smoke Cannabis Joints",
    seoIntro:
      "Pre-rolled cannabis joints at King Rock, Toronto. Singles, multi-packs, and infused pre-rolls ready to light up.",
    seoDescription:
      "Skip the rolling and grab a pre-roll from King Rock in Toronto. We carry singles, multi-packs, and infused pre-rolls from premium flower. Whether you want a quick smoke or a party pack, our pre-roll selection has something for everyone. Visit us at 1220b King St W we are open daily: 10:00 AM - 01:00 AM.",
    faqs: [
      {
        q: "What pre-rolls do you carry?",
        a: "We stock singles, 3-packs, and multi-packs in various strains and potencies, including infused pre-rolls with concentrates.",
      },
      {
        q: "Are your pre-rolls made with quality flower?",
        a: "Yes! Our pre-rolls are filled with ground flower from our regular menu tiers not shake or trim.",
      },
    ],
  },
  "ADD ONS": {
    banner: "/banners/05_Accessories.webp",
    name: "Accessories",
    slug: "add-ons",
    color: "#34d399",
    icon: "➕",
    seoTitle: "Cannabis Accessories Toronto Grinders, Papers, Lighters & More",
    seoIntro:
      "Essential cannabis accessories at King Rock, Toronto. Grinders, rolling papers, lighters, trays, and more.",
    seoDescription:
      "Browse grinders, rolling papers, lighters, trays, storage containers, and other accessories on the current King Rock menu. Visit us at 1220b King St W, Toronto.",
    faqs: [
      {
        q: "What accessories do you sell?",
        a: "We carry grinders, rolling papers, filter tips, lighters, rolling trays, storage jars, and more.",
      },
    ],
  },
  "MAGIC & OTHERS": {
    name: "Magic Stuff",
    slug: "magic",
    color: "#64748b",
    icon: "*",
    seoTitle: "Magic Stuff - Specialty Items",
    seoIntro:
      "Browse current menu for listed specialty products. Listings may vary by store.",
    seoDescription:
      "Current specialty items are listed when they are carried on the menu. Product listings may vary by store and by day. Check the current menu for current selection.",
    faqs: [
      {
        q: "What specialty items are listed?",
        a: "Selection varies by store and by day. Check the current menu for listed specialty products.",
      },
      {
        q: "Do listings vary by location?",
        a: "Yes. Specialty item listings may vary by store, so please check the current menu for this location.",
      },
    ],
  },
  CIGARETTES: {
    banner: "/banners/native-cigarette-offer-20260822.webp",
    name: "Cigarettes",
    slug: "cigarettes",
    color: "#78716c",
    icon: "CG",
    seoTitle: "Native Cigarette Menu King West",
    seoIntro: "Browse Native cigarette brands, pack styles and listed prices at King Rock.",
    seoDescription: "The cigarette menu at King Rock lists cigarette brands, styles and prices for King West shoppers. Visit 1220b King St W. Open daily 10:00 AM–1:00 AM.",
    faqs: [
      { q: "Does King Rock list Native cigarettes?", a: "Yes. Compare listed Native cigarette brands, styles and prices from King Rock." },
      { q: "What cigarette styles are listed?", a: "The selection includes full, light and menthol styles across several listed brands." },
      { q: "Where is King Rock?", a: "King Rock is at 1220b King St W." },
    ],
  },
};

/* Helper functions */
export function getFlowersByTier(tier: string): FlowerProduct[] {
  return allFlowers.filter((f) => f.tier.toUpperCase() === tier.toUpperCase());
}

export function getFlowerBySlug(slug: string): FlowerProduct | undefined {
  return allFlowers.find((f) => f.slug === slug);
}

export function getItemsByCategory(category: string): ItemProduct[] {
  return allItems.filter(
    (i) => i.category.toUpperCase() === category.toUpperCase(),
  );
}

export function getTierFromSlug(
  slug: string,
): { key: string; config: (typeof TIER_CONFIG)[string] } | undefined {
  const entry = Object.entries(TIER_CONFIG).find(([, v]) => v.slug === slug);
  if (!entry) return undefined;
  return { key: entry[0], config: entry[1] };
}

export function getCategoryFromSlug(
  slug: string,
): { key: string; config: (typeof CATEGORY_CONFIG)[string] } | undefined {
  const entry = Object.entries(CATEGORY_CONFIG).find(
    ([, v]) => v.slug === slug,
  );
  if (!entry) return undefined;
  return { key: entry[0], config: entry[1] };
}

export function getLowestPrice(flower: FlowerProduct): number | null {
  const prices = [
    flower.price3g,
    flower.price5g,
    flower.price14g,
    flower.price28g,
  ]
    .filter((p): p is PricePoint => p !== null)
    .map((p) => p.sale ?? p.regular);
  return prices.length ? Math.min(...prices) : null;
}

export function formatPrice(p: PricePoint | null): string {
  if (!p) return "";
  if (p.sale !== null) return `$${p.sale}`;
  return `$${p.regular}`;
}
