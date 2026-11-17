import type { Metadata, ResolvingMetadata } from "next";
import HomePageClient from "./HomePageClient";
import { CODED_BANNERS } from "./lib/fleet/config";
import { getFleetContent } from "./lib/fleetContent";
import { getLiveMenu } from "./lib/liveMenu";
import { HOME_PAGE_TITLE, STORE_NAP } from "./lib/storeNap";

export const dynamic = "force-dynamic";

export async function generateMetadata(
  _: { params: Promise<Record<string, never>> },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const resolved = await parent;
  return {
    title: { absolute: HOME_PAGE_TITLE },
    openGraph: {
      ...resolved.openGraph,
      title: { absolute: HOME_PAGE_TITLE },
    },
    twitter: {
      ...resolved.twitter,
      title: { absolute: HOME_PAGE_TITLE },
    },
    alternates: {
      canonical: STORE_NAP.origin,
    },
  };
}

export default async function Page() {
  const [{ flowers }, fleet] = await Promise.all([getLiveMenu(), getFleetContent()]);
  const contentBanners = fleet.active && fleet.banners.some((banner, index) => banner !== CODED_BANNERS[index]) ? fleet.banners : undefined;
  return <HomePageClient initialFlowers={flowers} contentBanners={contentBanners} />;
}
