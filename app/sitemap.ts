import { getLiveMenu } from "./lib/liveMenu";
import type { MetadataRoute } from "next";
import { DELIVERY_GUIDE_REGISTRY, DELIVERY_GUIDE_STORE } from "./lib/deliveryGuideRegistry";
import { TIER_CONFIG, CATEGORY_CONFIG } from "./lib/products";
import { SEO_PAGES } from "./lib/seoPages";
import { loadFleetArticles } from "./lib/fleet/articles";
import { RESOURCE_PAGES } from "./resources/resourceData";
import { STRAIN_GUIDES } from "./lib/strainGuides";
import { SHOW_CIGARETTES, isCigaretteGuide, isCigaretteItem } from "./lib/cigaretteGate";

// Products come from the same loader as /api/tv-data on every request.
export const dynamic = "force-dynamic";

// ONE product loader (same as /api/tv-data), filled per request by __loadMenuData(). Grok 2026-10-09.
let __menu!: Awaited<ReturnType<typeof getLiveMenu>>;
async function __loadMenuData(): Promise<void> {
  __menu = await getLiveMenu();

}

const BASE = "https://www.kingrockcannabis.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    await __loadMenuData();
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/visit`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/hours`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/weed-dispensary-king-west`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/vape-shop-king-west`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/weed-dispensary-toronto`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/delivery`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
  { url: `${BASE}/careers/budtender`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },
  ];

  /* Tier pages */
  const tierPages: MetadataRoute.Sitemap = Object.values(TIER_CONFIG).map((t) => ({
    url: `${BASE}/${t.slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  /* Item category pages */
  const itemPages: MetadataRoute.Sitemap = Object.values(CATEGORY_CONFIG).filter((c) => SHOW_CIGARETTES || c.slug !== "cigarettes").map((c) => ({
    url: `${BASE}/items/${c.slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  /* Flower detail pages */
  const flowerPages: MetadataRoute.Sitemap = __menu.flowers.map((f) => ({
    url: `${BASE}/flower/${f.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  /* Item detail pages */
  const itemDetailPages: MetadataRoute.Sitemap = __menu.items.filter((i) => SHOW_CIGARETTES || !isCigaretteItem(i)).map((i) => ({
    url: `${BASE}/item/${i.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  /* SEO landing pages */
  const seoPages: MetadataRoute.Sitemap = SEO_PAGES.filter((p) => SHOW_CIGARETTES || p.slug !== "native-cigarettes-king-west").map((p) => ({
    url: `${BASE}/info/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  const resourcePages: MetadataRoute.Sitemap = RESOURCE_PAGES.filter((page) => SHOW_CIGARETTES || page.slug !== "native-smokes/native-cigarettes-guide").map((page) => ({
    url: page.slug ? `${BASE}/resources/${page.slug}` : `${BASE}/resources`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: page.slug ? 0.65 : 0.75,
  }));

  const deliveryGuidePages: MetadataRoute.Sitemap = DELIVERY_GUIDE_REGISTRY.filter((guide) => SHOW_CIGARETTES || !isCigaretteGuide(guide)).map((guide) => ({ url: `https://${DELIVERY_GUIDE_STORE.domain}/guides/${guide.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.75 }));
  const strainGuidePages: MetadataRoute.Sitemap = [`${BASE}/guides`, ...STRAIN_GUIDES.map((guide) => `${BASE}/guides/${guide.slug}`)].map((url) => ({ url, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 }));
  let fleetArticlePages: MetadataRoute.Sitemap = [];
  try {
    const loaded = await loadFleetArticles();
    if (loaded.ok) {
      const codedSlugs = new Set(RESOURCE_PAGES.map((page) => page.slug));
      fleetArticlePages = loaded.articles.filter((article) => !codedSlugs.has(article.slug)).map((article) => ({
        url: `${BASE}/articles/${article.slug}`,
        lastModified: article.publishedAt,
        changeFrequency: "weekly" as const,
        priority: 0.6,
      }));
    }
  } catch {
    fleetArticlePages = [];
  }
  const landraceArticlePage: MetadataRoute.Sitemap = [{
    url: `${BASE}/resources/what-is-a-landrace-strain`,
    lastModified: "2026-10-28",
    changeFrequency: "weekly",
    priority: 0.65,
  }];
  return [...deliveryGuidePages, ...strainGuidePages, ...staticPages, ...tierPages, ...itemPages, ...flowerPages, ...itemDetailPages, ...seoPages, ...resourcePages, ...fleetArticlePages, ...landraceArticlePage];
}
