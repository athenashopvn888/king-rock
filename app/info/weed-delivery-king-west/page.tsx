import type { Metadata } from "next";
import PillarLanding from "../../components/PillarLanding";
import { PILLAR_DELIVERY, pillarCanonical } from "../../lib/pillarPages";

export const metadata: Metadata = {
  title: { absolute: PILLAR_DELIVERY.title },
  description: PILLAR_DELIVERY.metaDescription,
  alternates: {
    canonical: pillarCanonical(PILLAR_DELIVERY.slug),
  },
  openGraph: {
    title: PILLAR_DELIVERY.h1,
    description: PILLAR_DELIVERY.metaDescription,
    url: pillarCanonical(PILLAR_DELIVERY.slug),
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WeedDeliveryKingWestPage() {
  return <PillarLanding page={PILLAR_DELIVERY} />;
}
