import type { Metadata } from "next";
import PillarLanding from "../../components/PillarLanding";
import { PILLAR_24H, pillarCanonical } from "../../lib/pillarPages";

export const metadata: Metadata = {
  title: { absolute: PILLAR_24H.title },
  description: PILLAR_24H.metaDescription,
  alternates: {
    canonical: pillarCanonical(PILLAR_24H.slug),
  },
  openGraph: {
    title: PILLAR_24H.h1,
    description: PILLAR_24H.metaDescription,
    url: pillarCanonical(PILLAR_24H.slug),
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TwentyFourHourDispensaryPage() {
  return <PillarLanding page={PILLAR_24H} />;
}
