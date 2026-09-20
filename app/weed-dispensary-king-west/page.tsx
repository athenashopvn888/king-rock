import type { Metadata } from "next";
import PillarLanding from "../components/PillarLanding";
import { PILLAR_OWNER, pillarCanonical } from "../lib/pillarPages";

export const metadata: Metadata = {
  title: { absolute: PILLAR_OWNER.title },
  description: PILLAR_OWNER.metaDescription,
  alternates: {
    canonical: pillarCanonical(PILLAR_OWNER),
  },
  openGraph: {
    title: PILLAR_OWNER.h1,
    description: PILLAR_OWNER.metaDescription,
    url: pillarCanonical(PILLAR_OWNER),
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WeedDispensaryKingWestPage() {
  return <PillarLanding page={PILLAR_OWNER} />;
}
