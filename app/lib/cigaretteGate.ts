import { SHOW_CIGARETTES } from "./siteConfig";
import { DELIVERY_GUIDE_REGISTRY } from "./deliveryGuideRegistry";
import menuItems from "./items.json";

export { SHOW_CIGARETTES };

/** Nicotine vape shop landing. Cigarette URLs 302 here while the switch is off. */
export const VAPE_PAGE = "/vape-shop-king-west";

type MenuItem = { name?: string; slug?: string; category?: string };

const items = menuItems as MenuItem[];

/** Rolling papers, Backwoods, and cigarillos stay listed while cigarettes are hidden. */
export function isKeptSmokeItem(name: string): boolean {
  return /\bbackwoods\b|\bcigarillos?\b|\brolling papers?\b|\braw paper\b/i.test(name);
}

export function isCigaretteItem(item: { name?: string; category?: string }): boolean {
  const name = String(item.name || "");
  if (isKeptSmokeItem(name)) return false;
  return String(item.category || "").trim().toUpperCase() === "CIGARETTES";
}

export function isCigaretteGuide(guide: { slug: string; lane: string }): boolean {
  if (guide.lane !== "native_cig") return false;
  if (guide.slug === "backwoods-delivery-king-west") return false;
  if (/cigarillo/.test(guide.slug)) return false;
  return true;
}

function normalizePath(pathname: string): string {
  const bare = pathname.split("?")[0].replace(/\/+$/, "") || "/";
  try {
    return decodeURIComponent(bare);
  } catch {
    return bare;
  }
}

const CIGARETTE_REDIRECT_PATHS = new Set<string>([
  "/cigarettes",
  "/info/native-cigarettes-king-west",
  "/info/native-cigarettes-york",
  "/resources/native-smokes/native-cigarettes-guide",
]);

for (const guide of DELIVERY_GUIDE_REGISTRY) {
  if (isCigaretteGuide(guide)) CIGARETTE_REDIRECT_PATHS.add(`/guides/${guide.slug}`);
}

for (const item of items) {
  if (item.slug && isCigaretteItem(item)) CIGARETTE_REDIRECT_PATHS.add(`/item/${item.slug}`);
}

/** /items/cigarettes stays up so Backwoods on that menu are unchanged. */
export function cigaretteRedirectDestination(pathname: string): string | null {
  if (SHOW_CIGARETTES) return null;
  return CIGARETTE_REDIRECT_PATHS.has(normalizePath(pathname)) ? VAPE_PAGE : null;
}

const HIDDEN_COPY: Record<string, string> = {
  "The public menu is split into flower tiers (Exotic, Premium, AAA+, AA, Budget) plus category pages for edibles, pre-rolls, vapes, concentrates, accessories, and cigarettes. Pages are for browsing posted details, not a live stock feed. Ask at the counter or call if one exact item is the reason for the trip.":
    "The public menu is split into flower tiers (Exotic, Premium, AAA+, AA, Budget) plus category pages for edibles, pre-rolls, vapes, concentrates, and accessories. Pages are for browsing posted details, not a live stock feed. Ask at the counter or call if one exact item is the reason for the trip.",
  "Walk in to browse posted flower tiers and format pages (pre-rolls, edibles, vapes, concentrates, accessories, cigarettes). Those pages help you plan a format. They are not a live inventory feed and this page does not invent stock or prices. If one exact item is the reason for the trip, call first. No medical claims, and no appointment.":
    "Walk in to browse posted flower tiers and format pages (pre-rolls, edibles, vapes, concentrates, accessories). Those pages help you plan a format. They are not a live inventory feed and this page does not invent stock or prices. If one exact item is the reason for the trip, call first. No medical claims, and no appointment.",
  "Overnight and all-day walk-in details live on the 24-hour dispensary page. Neighbourhood delivery is a different URL with its own 10:00 a.m.–10:00 p.m. window. Native cigarettes and nicotine vape have their own King West landings. This page is the shop identity for the King West corridor. Extra street-level notes stay on /visit.":
    "Overnight and all-day walk-in details live on the 24-hour dispensary page. Neighbourhood delivery is a different URL with its own 10:00 a.m.–10:00 p.m. window. Nicotine vape has its own King West landing. This page is the shop identity for the King West corridor. Extra street-level notes stay on /visit.",
  "Late 504, after a show at Exhibition Place, or a middle-of-the-night hop from the strip — the civic address does not change. Debit and cash are the listed in-store payments. Flower tiers and format pages (pre-rolls, edibles, vapes, concentrates, accessories, cigarettes) are for browsing posted details. They are not a live inventory feed. If one exact item is the reason for the trip, call first.":
    "Late 504, after a show at Exhibition Place, or a middle-of-the-night hop from the strip — the civic address does not change. Debit and cash are the listed in-store payments. Flower tiers and format pages (pre-rolls, edibles, vapes, concentrates, accessories) are for browsing posted details. They are not a live inventory feed. If one exact item is the reason for the trip, call first.",
  "Flower tiers and format pages (pre-rolls, edibles, vapes, concentrates, accessories, cigarettes) are for planning. They are not a live inventory feed. If one exact item is the reason for the trip, call during listed hours: Open 24 Hours Daily.":
    "Flower tiers and format pages (pre-rolls, edibles, vapes, concentrates, accessories) are for planning. They are not a live inventory feed. If one exact item is the reason for the trip, call during listed hours: Open 24 Hours Daily.",
  "Our menu includes cannabis flower across five price tiers (Exotic, Premium, AAA+, AA, and Budget), plus edibles, vapes, concentrates, pre-rolls, native cigarettes, and accessories. Check the current menu for today’s selection.":
    "Our menu includes cannabis flower across five price tiers (Exotic, Premium, AAA+, AA, and Budget), plus edibles, vapes, concentrates, pre-rolls, and accessories. Check the current menu for today’s selection.",
  "A practical resource hub for King West and Liberty Village shoppers. Use it to find the relevant menu section for flower, pre-rolls, edibles, THC vapes, concentrates, accessories, cigarettes, Native smokes, Backwoods, and grabba.":
    "A practical resource hub for King West and Liberty Village shoppers. Use it to find the relevant menu section for flower, pre-rolls, edibles, THC vapes, concentrates, accessories, and Backwoods.",
  "Brand and price notes for cigarettes, Backwoods, grabba, and pouch listings.":
    "Brand and price notes for Backwoods.",
  "The pages are organized around common shopping questions shoppers often use: weed dispensary near Liberty Village, cannabis store King West, cheap weed, budget weed, pre-rolls, edibles, THC vapes, concentrates, Native cigarettes, Backwoods, and grabba.":
    "The pages are organized around common shopping questions shoppers often use: weed dispensary near Liberty Village, cannabis store King West, cheap weed, budget weed, pre-rolls, edibles, THC vapes, concentrates, and Backwoods.",
  "King Rock is listed at 1220b King St W, Toronto, ON M6K 1G4. Keep that address as the local anchor, then use the resource pages to decide whether the trip is about flower, pre-rolls, edibles, THC vapes, concentrates, accessories, or cigarettes.":
    "King Rock is listed at 1220b King St W, Toronto, ON M6K 1G4. Keep that address as the local anchor, then use the resource pages to decide whether the trip is about flower, pre-rolls, edibles, THC vapes, concentrates, or accessories.",
  "If you need store details, start with the homepage. If you need extra street-level transit and parking notes, use /visit. If you are comparing product types, start with the menu guide. If the trip is about Native smokes or cigarettes, start with the Native smokes page and then confirm the current category page.":
    "If you need store details, start with the homepage. If you need extra street-level transit and parking notes, use /visit. If you are comparing product types, start with the menu guide. If the trip is about Backwoods, start with the Native smokes page and then confirm the current category page.",
  "King Rock resource pages for King West and Liberty Village shoppers, with local visit planning, menu shortcuts, flower tier pricing, value shopping, pre-roll tips, and Native smokes prices.":
    "King Rock resource pages for King West and Liberty Village shoppers, with local visit planning, menu shortcuts, flower tier pricing, value shopping, and pre-roll tips.",
  "King Rock Menu Guide | Flower, Pre-Rolls, Edibles, Vapes And Cigarettes":
    "King Rock Menu Guide | Flower, Pre-Rolls, Edibles, And Vapes",
  "A category-by-category menu guide for King Rock, covering flower tiers, pre-rolls, edibles, THC vapes, concentrates, accessories, cigarettes, and Native smokes.":
    "A category-by-category menu guide for King Rock, covering flower tiers, pre-rolls, edibles, THC vapes, concentrates, and accessories.",
  "The menu gets easier when you choose one category first. Flower has tier math. Pre-rolls have format details. Edibles, THC vapes, concentrates, and accessories need category notes. Cigarettes need brand and price checks.":
    "The menu gets easier when you choose one category first. Flower has tier math. Pre-rolls have format details. Edibles, THC vapes, concentrates, and accessories need category notes.",
  "For King West and Liberty Village shoppers, a useful starting point depends on the category: flower shoppers can compare tiers, pre-roll shoppers can compare format, edible and vape shoppers can read product details, and cigarette shoppers can compare brand, style, and price.":
    "For King West and Liberty Village shoppers, a useful starting point depends on the category: flower shoppers can compare tiers, pre-roll shoppers can compare format, and edible and vape shoppers can read product details.",
  "Flower, pre-rolls, edibles, THC vapes, concentrates, accessories, and cigarettes are easier to compare one category at a time.":
    "Flower, pre-rolls, edibles, THC vapes, concentrates, and accessories are easier to compare one category at a time.",
  "This page helps shoppers compare nearby areas and categories such as weed dispensary near Liberty Village, cannabis store King West, cheap weed near me, Native cigarettes, and THC vape menu while keeping the actual shopping plan clear.":
    "This page helps shoppers compare nearby areas and categories such as weed dispensary near Liberty Village, cannabis store King West, cheap weed near me, and THC vape menu while keeping the actual shopping plan clear.",
  "Use this if cigarettes or Backwoods are part of the same stop.":
    "Use this if Backwoods are part of the same stop.",
  "Compare each format on its own: flower, pre-rolls, edibles, THC vapes, concentrates, accessories, and cigarettes all shop a little differently.":
    "Compare each format on its own: flower, pre-rolls, edibles, THC vapes, concentrates, and accessories all shop a little differently.",
  "King Rock Native Smokes Price Guide": "King Rock Backwoods",
  "King Rock Native Smokes Prices | Cigarettes, Backwoods And Grabba": "King Rock Backwoods",
  "Native Smokes": "Backwoods",
  "Native Smokes Prices": "Backwoods",
  "King Rock Native smokes resource with cigarette brands and listed prices for Canadian, Putters, Canadian Goose, Nexus, Time, Backwoods, grabba, pouches, and mixed smoke items where shown.":
    "Backwoods cigarillos listed at King Rock.",
  "This page gives cigarette shoppers a real starting point instead of a vague category page. Use it for Native cigarettes, Canadian brands, Backwoods, grabba, nicotine pouches, and mixed smoke item price checks at King Rock.":
    "Use this page for Backwoods at King Rock.",
  "NICOTINE POUCHES , VELO, PABLO, KILLA at $20; GRABBA at $5; GRABBA SHAKER *RedRose / Red Herring* at $19; BACKWOODS ASSORTED FLAVORS $20-$25 at $20; NEW BACKWOODS FLAVORS at $25; 10 X PREMIUM MIX CIGARETTES at $3":
    "BACKWOODS ASSORTED FLAVORS $20-$25 at $20; NEW BACKWOODS FLAVORS at $25.",
  "Backwoods, Grabba, Pouches, And Mix Items": "Backwoods",
  "Backwoods And Grabba": "Backwoods",
  "The important paths stay intact across King Rock's broader Weed selection, resource hub, Weed flower guide, value guide, pre-roll guide and Native smokes guides.":
    "The important paths stay intact across King Rock's broader Weed selection, resource hub, Weed flower guide, value guide, and pre-roll guide.",
  "Cigarette inventory, flavors, and brand mix can change. Use the cigarette category for the current public list, then confirm in store when one exact brand, full/light/menthol style, pouch, grabba, or Backwoods flavor matters.":
    "Backwoods flavors can change. Confirm the current list in store when one exact Backwoods flavor matters.",
  "The resource section is organized around real shopping plans: local visit planning, category-by-category browsing, flower tier math, value shopping, pre-roll shortcuts, and cigarette price notes.":
    "The resource section is organized around real shopping plans: local visit planning, category-by-category browsing, flower tier math, value shopping, and pre-roll shortcuts.",
  "King Rock resource guide update with local visit planning, menu guide pages, flower tier pricing, value shopping, pre-roll tips, and Native smokes prices.":
    "King Rock resource guide update with local visit planning, menu guide pages, flower tier pricing, value shopping, and pre-roll tips.",
};

/** Identity while cigarettes are visible. While hidden, known cigarette phrases drop out. */
export function publicCopy(text: string): string {
  if (SHOW_CIGARETTES) return text;
  return HIDDEN_COPY[text] ?? text;
}
