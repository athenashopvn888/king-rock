import { Metadata } from "next";
import Link from "next/link";
import { GBPLandingPage } from "@/app/components/GBPLandingPage";
import { STORE_NAP } from "@/app/lib/storeNap";

export const metadata: Metadata = {
  title: { absolute: "King Rock store notes" },
  description:
    "Archived city landing notes for King Rock Cannabis. The store listing is the homepage at 1220b King St W on King West / Liberty Village.",
  alternates: {
    canonical: `${STORE_NAP.origin}/weed-dispensary-toronto`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

/** Store-specific King West city enrichment (FLEET-CITY-UNIQUE-0925). Facts from STORE_NAP only. */
function KingWestLibertyNotes() {
  return (
    <section
      aria-labelledby="kr-city-king-west"
      style={{ maxWidth: 980, margin: "0 auto", padding: "28px 24px 72px", lineHeight: 1.55 }}
    >
      <h2 id="kr-city-king-west">King West / Liberty Village walk-in</h2>
      <p>
        King Rock Cannabis is the unit-B counter at{" "}
        <strong>{STORE_NAP.addressLine}</strong> on King Street West.{" "}
        {STORE_NAP.unitNote}. The intersection context is{" "}
        {STORE_NAP.intersection}, with Liberty Village and the Exhibition edge
        on the same corridor — not a Scarborough or north-Toronto door. Adults
        19+. Call{" "}
        <a href={`tel:${STORE_NAP.phoneIntl}`}>{STORE_NAP.phoneDisplay}</a>.
      </p>
      <h3>Hours</h3>
      <p>
        {STORE_NAP.hoursLabel}. Full weekly board on{" "}
        <Link href="/hours">/hours</Link>.
      </p>
      <h3>Reaching 1220b King St W</h3>
      <p>
        Most visitors use the King Street West streetcar strip or walk from
        Liberty Village toward Dufferin / Atlantic. Parking and transit detail
        for this frontage are on <Link href="/visit">/visit</Link>. The
        neighbourhood owner page is{" "}
        <Link href="/weed-dispensary-king-west">/weed-dispensary-king-west</Link>.
      </p>
      <h3>Areas tied to this door</h3>
      <p>
        {STORE_NAP.neighborhood}: {STORE_NAP.corridor}. Keep corridor queries on
        the King West page; this Toronto city URL points at the same King Street
        West walk-in.
      </p>
      <p>
        <Link href="/weed-dispensary-king-west">King West corridor</Link>
        {" · "}
        <Link href="/visit">Visit / directions</Link>
        {" · "}
        <Link href="/hours">Hours</Link>
        {" · "}
        <Link href="/">Homepage</Link>
      </p>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <GBPLandingPage />
      <KingWestLibertyNotes />
    </>
  );
}